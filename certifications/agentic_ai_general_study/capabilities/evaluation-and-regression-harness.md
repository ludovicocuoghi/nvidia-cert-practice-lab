---
capability: Evaluation and Regression Harness
status: populated
source_lens: general-study
---

# Evaluation and Regression Harness

## Actual implementation / How you use it

```yaml
eval_run:
  baseline: last_approved_release
  candidate: prompt_or_model_or_agent_change
  cases: [task_success, rag_grounding, tool_correctness, safety, latency_cost]
  gates:
    groundedness: ">= 0.90"
    tool_validity: ">= 0.98"
    safety_regression: "no_new_high_severity_failures"
```

| Input | Harness owns | Output |
|---|---|---|
| Cases, criteria, traces, baseline, candidate | Metrics, judge calibration, deterministic checks, release gates | Pass/fail decision and regression evidence |

## What to study first

- **Core idea:** You are building the test system that measures prompts, models, retrieval, tools, policies, trajectories, safety, cost, and regressions before and after release.
- **Study first:** Define tasks, risk tiers, criteria, and datasets.
- Capture baseline behavior before changes.
- Evaluate model quality, retrieval quality, tool correctness, safety, latency, and cost.
- Use human labels, rule checks, LLM-as-judge, and deterministic assertions where appropriate.
- Gate releases with regression thresholds.

## What You Are Building

You are building the test system that measures prompts, models, retrieval, tools, policies, trajectories, safety, cost, and regressions before and after release.

Here, **harness** means a repeatable eval runner: it loads test cases, calls the candidate system, computes layer-specific scores, compares them with a baseline, and decides whether the release passes a gate.

## Lifecycle Lane Playbooks

Read this page in two layers:

1. **Shared harness knowledge**: every lane needs protected eval cases, a candidate system, a baseline, metrics, thresholds, traces, and release evidence.
2. **Lane-specific evaluation**: the artifact being judged changes the metric mix. A new base model is not evaluated the same way as a RAG agent, a prompt-only API route, or a feedback loop.

### Shared harness record

Every eval case should make the scoring target explicit. Without this record, the score is usually hard to reproduce.

| Field | What it contains | Why it matters |
|---|---|---|
| `case_id` | Stable ID for the eval item | Lets incidents become regression tests without losing history |
| Input | Prompt, user request, document query, tool task, or conversation state | Defines what the candidate system receives |
| Gold label | Answer, class, expected docs, expected tool call, policy label, criteria-based score, or human preference | Defines what "correct" means |
| Candidate output | Final text plus structured output | Lets deterministic and judge metrics score the response |
| Trace | Retrieval hits, reranker scores, model route, tool calls, guardrails, latency, token counts, cost | Lets you diagnose which layer failed |
| Baseline score | Score from the previous approved model, prompt, route, index, tool schema, or policy | Prevents "new is different" from being mistaken for "new is better" |
| Threshold | Minimum absolute score or allowed delta from baseline | Turns evals into a release gate |

### Train model from zero: evaluate a new checkpoint

Here the candidate is a newly trained base checkpoint. You are asking: did the training run produce a publishable model, and can it be served safely?

| Evaluation card | Score or function | Labels/data needed | Pass/fail meaning |
|---|---|---|---|
| Held-out language modeling | Cross-entropy `-mean(log p(next_token))`; perplexity `exp(loss)` | Protected validation/test tokens not seen during training | Loss/perplexity should improve or meet target without suspicious leakage |
| Capability tasks | Accuracy, macro F1, exact match, pass@k, benchmark score | Task labels or reference outputs | Model has the target base capabilities, not only low LM loss |
| Contamination audit | Exact hash, n-gram overlap, MinHash/LSH, embedding similarity hit counts | Training corpus plus protected eval/benchmark/canary sets | Any hit against protected tests is release-risk evidence, not a win |
| Safety and refusal | Unsafe-pass rate, correct-refusal rate, false-refusal rate | Safety prompts with expected allow/block/refuse labels | Model blocks bad requests without refusing too much legitimate work |
| Bias and slice checks | Score by demographic, language, domain, or task slice; max slice gap | Slice labels and task labels | Aggregate score cannot hide a weak or harmful subgroup |
| Serving readiness | TTFT, tokens/sec, p95/p99 latency, error rate, memory headroom | Endpoint smoke tests and load tests | Checkpoint can be packaged and served within the intended profile |

Typical gate: `perplexity <= target`, capability score above target, `contamination_hits == 0`, safety and bias thresholds pass, and serving smoke tests succeed. Training loss is upstream evidence; the release decision uses evaluation metrics and risk evidence.

### Fine-tune existing model: compare candidate against baseline

Here the candidate is `base_model + adapter` or a tuned checkpoint. You are asking: did the fine-tune improve the intended durable behavior without causing forgetting or safety regressions?

| Evaluation card | Score or function | Labels/data needed | Pass/fail meaning |
|---|---|---|---|
| Target task gain | `candidate_score - baseline_score`; accuracy/F1/exact/judge score | Held-out examples for the behavior being tuned | Candidate must beat the untuned baseline by a meaningful margin |
| Validation loss | SFT cross-entropy on validation examples | Prompt/response labels not used for training | Loss should improve without a large train-vs-validation gap |
| Preference quality | Win rate vs baseline, pairwise preference accuracy | Preference pairs or human/LLM judge choices | Tuned behavior is preferred, not merely different |
| Regression suite | Pass rate or average score delta on old tasks | Protected pre-tune cases | Candidate should not break prior behavior beyond tolerance |
| Safety regression | Safety pass, correct refusal, jailbreak success rate | Safety and policy labels | Tuning cannot buy task gains by weakening safety |
| Overfit check | Train score minus validation/regression score | Train, validation, and regression splits | Big gap means memorized examples or brittle style |

Typical gate: target score improves enough to justify release, regression drop is within tolerance, safety is not worse, and adapter lineage is recorded with the baseline it modifies.

### Use existing model/API: evaluate a prompt, model choice, or route

Here the candidate is usually a prompt version, hosted API choice, model route, schema, or fallback policy. No weights changed.

| Evaluation card | Score or function | Labels/data needed | Pass/fail meaning |
|---|---|---|---|
| Task correctness | Exact match, token F1, semantic similarity, criteria judge score | Expected answers or criteria | The selected API/prompt solves the workload well enough |
| Schema validity | `valid_json_outputs / total_outputs`; field-level validation | Output schema and parser | System returns machine-usable output, not just fluent text |
| Refusal correctness | Correct allow/refuse rate; false allow/block rate | Policy labels | Prompt and model respect the intended boundary |
| Route and fallback behavior | Correct route rate, fallback success, timeout recovery | Route labels or scenario rules | Gateway chooses the right model/API and degrades gracefully |
| Latency and cost | TTFT, p95/p99, tokens/request, cost/completed task | Traces with token counts and prices | Existing model path is acceptable before tuning/training is considered |
| Prompt regression | Candidate score compared with previous prompt version | Old eval suite and baseline prompt | Prompt changes do not silently break solved cases |

Typical gate: quality meets the product threshold, structured output is reliable, latency/cost stay inside budget, and fallback behavior is proven on failure cases.

### Build agent/RAG application: evaluate retrieval, tools, and trajectory

Here the candidate is the whole agent path: query understanding, retrieval, reranking, context packing, tool calls, guardrails, memory, and final answer. Final answer quality alone is not enough.

| Evaluation card | Score or function | Labels/data needed | Pass/fail meaning |
|---|---|---|---|
| Retrieval recall@k | `|retrieved_top_k intersect gold_docs| / |gold_docs|` or binary expected-source-present | Query plus gold document/chunk IDs | If recall fails, the generator never saw the needed evidence |
| Retrieval precision@k | `relevant_retrieved_top_k / k` | Relevance labels for retrieved chunks | Too many weak chunks waste context and invite hallucination |
| MRR | `1 / rank(first_relevant_doc)` | Ranked retrieval list and gold docs | Measures how quickly useful evidence appears |
| nDCG@k | `DCG / ideal_DCG` with graded relevance | Graded relevance labels | Rewards highly relevant chunks near the top |
| Groundedness | `supported_claims / total_claims` using NLI, citation checks, judge, or human labels | Answer claims plus cited evidence | Answer must be supported by retrieved context |
| Citation support | `supporting_citations / total_citations` | Citation-to-claim labels | Citations should prove the claim, not merely mention similar terms |
| Tool correctness | Correct tool, valid args, authorized call, idempotent side effect, successful result | Expected tool call/arg/outcome labels | Valid JSON is not enough; the action must be the right action |
| Trajectory score | Weighted score over retrieval, tool, policy, answer, latency, and cost | Full trace labels | Measures whether the agent took a safe, efficient, correct path |
| Policy placement | Input/retrieved/tool/output allow-block correctness | Policy labels at each checkpoint | Guardrails must run at the right stage, not only after final text |

Typical gate: retrieval finds the evidence, context remains permission-safe, tool calls are correct and authorized, groundedness passes, and p95 latency/cost are acceptable for completed tasks.

### Operate, govern, and improve: evaluate live fixes

Here the candidate may be a prompt patch, route change, index rebuild, policy update, tool schema fix, adapter update, or data fix created from production evidence.

| Evaluation card | Score or function | Labels/data needed | Pass/fail meaning |
|---|---|---|---|
| Incident replay | `fixed_cases_passed / replay_cases` | Frozen incident cases with expected behavior | The exact failure that triggered the fix no longer reproduces |
| Regression pass rate | Candidate vs baseline on protected historical suite | Prior release eval set | Fix did not break old behavior |
| Route drift | Distribution change in model/index/tool/policy route | Production traces and approved route policy | Traffic is not silently moving to expensive or risky paths |
| Review quality | Reviewer agreement, escalation accuracy, false allow/block | Human review labels and audit outcomes | Human-in-the-loop process is reliable enough to use as evidence |
| Cost/latency after fix | p95/p99, cost/completed task by span | Traces before and after change | Operational fix improves efficiency without lowering quality |
| Feedback-to-eval coverage | Incidents converted into evals / eligible incidents | Incident tracker and eval registry | The learning loop is captured instead of becoming tribal memory |

Typical gate: the incident replay passes, protected regression suites hold, policy/review evidence is auditable, and live metrics improve or remain within budget.

## Pipeline

1. Define tasks, risk tiers, criteria, and datasets.
2. Capture baseline behavior before changes.
3. Evaluate model quality, retrieval quality, tool correctness, safety, latency, and cost.
4. Use human labels, rule checks, LLM-as-judge, and deterministic assertions where appropriate.
5. Gate releases with regression thresholds.
6. Turn incidents into new eval cases.
7. Track versions for prompt, model, retrieval, tools, data, and guardrails.

## Core Concepts

- Final answer correctness is not enough for agents.
- Trajectory eval checks intermediate retrieval, tool use, policy, and state.
- LLM-as-judge needs criteria and calibration.
- RAG eval includes recall, groundedness, faithfulness, and citation support.
- Regression suites protect prior behavior.
- Eval sets need protected splits and contamination checks so training/tuning examples do not leak into test evidence.
- Offline evals, online monitoring, human review, and incident replay should feed one improvement loop.
- Metrics differ by layer: model quality, retrieval recall, reranker precision, tool correctness, safety, latency, and cost are not interchangeable.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "release gate" | evaluation harness | manual spot check only |
| "tool chose wrong API" | trajectory eval | final answer score only |
| "citations unsupported" | groundedness/faithfulness eval | answer fluency |
| "judge is biased" | calibration with human anchors | blind LLM judge |
| "incident repeats" | add regression case | only fix prompt |
| "new adapter/model release" | baseline comparison across task, safety, latency, and regressions | one demo transcript |
| "RAG answer looks fluent but unsupported" | citation entailment and faithfulness checks | answer helpfulness only |
| "eval score suspiciously high" | contamination/leakage audit | assuming model improved |

## Common Traps

| Trap | Correct mental model |
|---|---|
| High user rating means safe | Need task, safety, tool, and groundedness metrics. |
| LLM judge is objective | It needs criteria, calibration, and spot checks. |
| Offline eval replaces monitoring | Eval and observability feed each other. |
| One aggregate score is enough | Layer-specific failures require layer-specific metrics and traces. |
| Same data can train and test | Holdouts must stay protected, especially after tuning and synthetic-data generation. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Evaluator | Model and LLM/agent evaluation patterns. |
| NVIDIA | NeMo Guardrails / NeMo Retriever traces | Safety, policy, groundedness, and retrieval evidence that evals should inspect. |
| Open source | OpenAI evals, RAGAS, TruLens, DeepEval | Prompt/RAG/agent eval frameworks. |
| Internal | regression harness | Release gates and incident replay. |

## Deep Dive

### Where it sits in the lifecycle

Evaluation is the **evidence and release-gate layer**. It turns changes into measured decisions.

```text
[Candidate change] -> [Layered eval] -> [Compare baseline] -> [Accept/reject gate]
        -> [Incident replay becomes regression]
```

It should measure the path, not only the final text.

### What to evaluate by layer

| Layer | Metrics/signals |
|---|---|
| Base model | Task accuracy, reasoning, safety, instruction following |
| Prompt/context | Format adherence, refusal behavior, prompt regression |
| Retrieval | recall@k, expected source present, freshness, ACL correctness |
| Reranker | top-N precision, answer-bearing chunk rank |
| Tool use | correct tool, valid arguments, side-effect outcome |
| Guardrails | block/allow precision, groundedness, PII/policy checks |
| System | latency, cost, escalation rate, trace completeness |

### Judge type selection

| Judge | Use it for | Watch out |
|---|---|---|
| Deterministic assertion | Exact facts, schema, policy, permissions | May miss nuanced quality |
| Human label | Safety, usefulness, ambiguous judgment | Expensive and inconsistent without criteria |
| LLM-as-judge | Scalable criteria-based scoring | Needs anchors, calibration, and disagreement checks |
| Production canary | Real workload signal | Needs rollback and risk limits |

### Regression mindset

Any change to model, adapter, prompt, retrieval index, reranker, tool schema, guardrail, gateway route, or context packing can break prior behavior. A release gate should compare against a baseline and define quality, safety, latency, and cost thresholds before rollout.

NeMo Evaluator is the NVIDIA cue for model/LLM/agent evaluation evidence. It is not a serving endpoint or guardrail by itself.

### Metric vocabulary

| Term | Computation idea | Needs | Common mistake |
|---|---|---|---|
| Accuracy | `correct / total` | One correct label per case | Ignores unsafe path or unsupported evidence |
| Precision | `true_positive / predicted_positive` | Predicted positives and true labels | Using it alone when missed positives matter |
| Recall | `true_positive / actual_positive` | True positives plus false negatives | Using it alone when false positives are costly |
| F1 | Harmonic mean of precision and recall | Precision and recall | Hiding different precision/recall tradeoffs |
| Macro F1 | Average F1 across classes | Class labels | More useful than accuracy when classes are imbalanced |
| Cross-entropy | `-mean(log p(gold_label_or_next_token))` | Gold class/token labels and model probabilities | Treating a training loss as the whole release decision |
| Perplexity | `exp(cross_entropy)` for language modeling | Held-out tokens | Comparing across different tokenizers without care |
| Groundedness | `supported_claims / total_claims` | Claims plus evidence labels | Counting citations without checking support |
| Faithfulness | Unsupported-claim rate or entailment pass rate | Answer, source context, claim labels | Rewarding fluent extra details |
| Recall@k | Relevant docs in top-k divided by gold docs, or binary expected-source-present | Query and gold doc/chunk IDs | Blaming generator when retrieval missed the source |
| MRR/nDCG | Rank-sensitive retrieval score | Ranked retrieved IDs and relevance labels | Looking only at top-1 examples |
| Tool success | Correct tool + valid args + authorization + successful side effect | Tool trace labels | Treating valid JSON as a successful action |
| Judge calibration | Agreement with human anchors and criteria | Human-labeled anchor set | Blindly trusting an LLM-as-judge score |

Good evals are layered. For a RAG tool-using agent, one case can record retrieval recall, citation support, tool-call validity, final answer quality, guardrail outcome, latency, and cost. That is why one aggregate score is rarely enough.

### Evaluation score and loss function card

Evaluation usually computes **metrics** rather than training losses. A metric answers "how well did this system behave on the held-out case?" A loss answers "what differentiable objective should training minimize?" They are related, but not the same.

| Use case | Typical metric | Typical loss/objective when training |
|---|---|---|
| Classification or routing | accuracy, macro F1, precision/recall, AUROC | cross-entropy or binary cross-entropy |
| Generation against reference | exact match, token F1, ROUGE/BLEU, semantic similarity, judge score | next-token cross-entropy during SFT/pretraining |
| RAG retrieval | recall@k, MRR, nDCG, expected-source-present | contrastive loss, triplet loss, pairwise ranking loss for embedding/retrieval models |
| Reranking | top-N precision, MRR, nDCG | pairwise logistic/listwise ranking loss or cross-entropy over candidates |
| Groundedness/faithfulness | citation entailment pass rate, unsupported-claim rate, NLI/judge score | supervised classifier loss if training a verifier; otherwise criteria-based score |
| Tool use | correct tool rate, argument validity, side-effect success | cross-entropy for tool-call SFT; reward/preference objective for agent behavior |
| Safety/guardrails | block precision/recall, false positive rate, PII leak rate | classifier cross-entropy or policy-rule pass/fail, depending implementation |
| Preference quality | win rate, pairwise preference accuracy, judge preference | DPO/pairwise preference loss, RLHF/PPO-style reward objective |
| Latency/cost | p50/p95/p99, tokens/sec, cost per completed task | usually no training loss; optimize via routing, batching, caching, model choice |

For LLM applications, many release gates are **non-differentiable**: schema valid or not, citation supports claim or not, tool was authorized or not, p95 under threshold or not. That is why the harness mixes deterministic assertions, retrieval metrics, judge scores, human labels, and operational measurements.

### Typical metric functions

```python
from collections import Counter
from math import log2

def exact_match(pred: str, gold: str) -> float:
    return float(pred.strip().lower() == gold.strip().lower())

def token_f1(pred: str, gold: str) -> float:
    pred_counts = Counter(pred.lower().split())
    gold_counts = Counter(gold.lower().split())
    overlap = pred_counts & gold_counts
    common = sum(overlap.values())
    if not pred_counts or not gold_counts or not common:
        return 0.0
    precision = common / sum(pred_counts.values())
    recall = common / sum(gold_counts.values())
    return 2 * precision * recall / (precision + recall)

def recall_at_k(retrieved_ids: list[str], gold_ids: set[str], k: int) -> float:
    return float(bool(set(retrieved_ids[:k]) & gold_ids))

def mrr(retrieved_ids: list[str], gold_ids: set[str]) -> float:
    for rank, doc_id in enumerate(retrieved_ids, start=1):
        if doc_id in gold_ids:
            return 1.0 / rank
    return 0.0

def ndcg_at_k(retrieved_ids: list[str], relevance: dict[str, int], k: int) -> float:
    gains = [relevance.get(doc_id, 0) for doc_id in retrieved_ids[:k]]
    dcg = sum((2**rel - 1) / log2(i + 2) for i, rel in enumerate(gains))
    ideal = sorted(relevance.values(), reverse=True)[:k]
    idcg = sum((2**rel - 1) / log2(i + 2) for i, rel in enumerate(ideal))
    return dcg / idcg if idcg else 0.0
```

### Typical eval runner code

```python
def evaluate_case(system, case):
    result = system.run(case["input"])

    retrieved_ids = [chunk["id"] for chunk in result.trace["retrieval"]]
    tool_calls = result.trace.get("tool_calls", [])

    scores = {
        "answer_exact_match": exact_match(result.answer, case.get("gold_answer", "")),
        "answer_f1": token_f1(result.answer, case.get("gold_answer", "")),
        "retrieval_recall_at_5": recall_at_k(retrieved_ids, set(case["gold_doc_ids"]), 5),
        "retrieval_mrr": mrr(retrieved_ids, set(case["gold_doc_ids"])),
        "schema_valid": float(validate_json_schema(result.raw_output, case["schema"])),
        "tool_success": float(all(call["authorized"] and call["ok"] for call in tool_calls)),
        "policy_pass": float(not result.trace["guardrails"]["blocked_badly"]),
        "latency_ms": result.trace["latency_ms"],
        "cost_usd": result.trace["cost_usd"],
    }

    scores["groundedness"] = citation_entailment_score(
        answer=result.answer,
        cited_chunks=result.citations,
        claims=case.get("claims", []),
    )
    return scores

def release_gate(candidate_scores, baseline_scores):
    return (
        mean(candidate_scores, "retrieval_recall_at_5") >= 0.92
        and mean(candidate_scores, "groundedness") >= 0.90
        and mean(candidate_scores, "tool_success") >= 0.98
        and p95(candidate_scores, "latency_ms") <= 2500
        and mean(candidate_scores, "cost_usd") <= 1.10 * mean(baseline_scores, "cost_usd")
        and mean(candidate_scores, "answer_f1") >= mean(baseline_scores, "answer_f1") - 0.01
    )
```

### Loss functions you may see upstream

The harness itself does not usually backpropagate. It may evaluate systems that were trained with losses like these:

```python
# Supervised fine-tuning / next-token prediction.
loss_sft = cross_entropy(logits[:, :-1, :], labels[:, 1:])

# Binary guardrail or classifier.
loss_binary = binary_cross_entropy_with_logits(policy_logits, unsafe_labels)

# Pairwise reranker or preference model.
# preferred_score should be higher than rejected_score.
loss_pairwise = -log_sigmoid(preferred_score - rejected_score).mean()

# Contrastive retrieval training.
# query embedding should be close to the positive doc and far from negatives.
loss_retriever = cross_entropy(query_emb @ doc_emb.T / temperature, positive_doc_index)

# DPO-style preference tuning, simplified.
policy_logratio = logp_policy_chosen - logp_policy_rejected
ref_logratio = logp_ref_chosen - logp_ref_rejected
loss_dpo = -log_sigmoid(beta * (policy_logratio - ref_logratio)).mean()
```

In exam terms: choose the evaluation harness when the task is scoring and gating behavior. Choose customization/training when the task is minimizing one of these losses to change weights or adapters.

## Exam Signals

- "compare variants" -> evaluation harness.
- "release gate" -> regression suite.
- "LLM-as-judge" -> criteria/calibration.
- "RAG groundedness" -> faithfulness/citation eval.
- "tool trajectory" -> agent eval.
- "contamination" -> train/test/eval leakage check.
- "new model/adaptor/prompt" -> baseline and regression comparison.
- "incident replay" -> convert production failure into eval case.

## Hands-on Checks

1. Define metrics for a support agent: correctness, groundedness, tool success, safety, latency, cost.
2. Write criteria for LLM-as-judge and two human anchor examples.
3. Turn a production incident into a regression test.

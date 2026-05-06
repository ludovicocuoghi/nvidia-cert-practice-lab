---
domain: Evaluation and Safety
weight: 14
status: populated
---

# Evaluation and Safety

## Actual implementation / Pattern you use

```yaml
eval_case:
  input: "Customer asks whether policy X applies to account Y"
  expected:
    evidence_ids: [policy_2026_04, account_tier]
    allowed_tools: [retrieve_policy, lookup_account]
    forbidden_tools: [issue_refund]
  score:
    final_answer: task_success
    retrieval: recall_at_k_and_citation_support
    trajectory: tool_order_tool_args_and_retry_behavior
    safety: prompt_injection_pii_and_policy_checks
    operations: latency_cost_and_escalation_quality

rails:
  check_points: [input, retrieved_content, tool_proposal, tool_result, output]
```

| Evaluation target | Measures | Release signal |
|---|---|---|
| Final answer | Task success and answer quality | The answer solves the user need |
| Retrieval | Recall, relevance, citation support, groundedness | The evidence actually supports the answer |
| Tools | Correct tool, arguments, authorization, side effects | The path is safe, valid, and not wasteful |
| Trajectory | Steps, observations, memory writes, retries | The agent solved the task the right way |
| Safety | PII, prompt injection, unsafe content, policy | Failures are blocked at the boundary where they occur |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Evaluation and Tuning | Covers task success, trajectory scoring, tool correctness, groundedness, judge limits, and regressions. |
| Safety, Ethics, and Compliance | Covers prompt injection, policy checks, PII, unsafe outputs, and tool-risk controls. |
| Run, Monitor, and Maintain | Turns live incidents and feedback into regression tests and scheduled quality checks. |
| Knowledge Integration and Data Handling | Evaluates retrieval, reranking, citation support, and RAG failure modes. |

## What to study first

- **Core idea:** How to measure quality and enforce safety for models, RAG, tools, and full agent trajectories.
- **Use it when:** The scenario mentions regression, trajectory scoring, groundedness, judge bias, red teaming, guardrails, prompt injection, PII, or unsafe tools.
- **Study first:** Groundedness: asks whether the answer is supported by the supplied evidence.
- Faithfulness: asks whether the answer stays true to that evidence without adding unsupported claims.
- Citation support: is stricter than "has a citation": the cited passage must actually entail the claim.
- Trajectory evaluation: checks retrieval choices, tool calls, guardrail decisions, retries, and cost, not only the final answer.
- LLM-as-judge: is useful for scale, but it needs a rubric, human anchor examples, disagreement checks, and drift monitoring.
- **Real trap:** A correct final answer can hide an unsafe or expensive trajectory.

## Concept ownership

This is the vendor-neutral home for model, RAG, and agent evaluation plus runtime safety controls. Keep trajectory evaluation, groundedness, judge calibration, red teaming, prompt-injection defenses, and layered guardrails here. Vendor pages should stay focused on product-specific evaluators and guardrail services.

## Study card data

- **What it covers:** How to measure quality and enforce safety for models, RAG, tools, and full agent trajectories.
- **Lifecycle:** Evaluation and safety
- **Use this section when:** The scenario mentions regression, trajectory scoring, groundedness, judge bias, red teaming, guardrails, prompt injection, PII, or unsafe tools.
- **Common trap:** A correct final answer can hide an unsafe or expensive trajectory.
- **Recognition clues:** The final answer is correct, but the agent called a private tool unnecessarily.

### Key ideas

- **Evaluation harness** measures behavior before and after changes.
- **Guardrails** enforce runtime policy.
- **Trajectory evaluation** scores intermediate steps, not only final text.
- **LLM-as-judge** needs calibration against human labels.
- **Prompt injection** can arrive through users, documents, tool outputs, or websites.

### Must know

- **Groundedness** asks whether the answer is supported by the supplied evidence.
- **Faithfulness** asks whether the answer stays true to that evidence without adding unsupported claims.
- **Citation support** is stricter than "has a citation": the cited passage must actually entail the claim.
- **Trajectory evaluation** checks retrieval choices, tool calls, guardrail decisions, retries, and cost, not only the final answer.
- **LLM-as-judge** is useful for scale, but it needs a rubric, human anchor examples, disagreement checks, and drift monitoring.
- **PII and unsafe-tool failures** should be evaluated at the boundary where they happen: input, retrieval, tool proposal, tool result, or output.

### Code anchor

```python
scores = {
    "answer_quality": judge_or_exact_match(case.gold, result.answer),
    "retrieval_recall_at_5": recall_at_k(result.retrieved_ids, case.gold_doc_ids, 5),
    "groundedness": citation_entailment(result.answer, result.citations),
    "tool_validity": all(call.schema_ok and call.authorized for call in result.tool_calls),
    "safety_pass": not result.guardrails.unsafe_output,
    "latency_ms": result.trace.latency_ms,
    "cost_usd": result.trace.cost_usd,
}
release_pass = scores["groundedness"] >= 0.9 and scores["safety_pass"]
```

Loss functions show up when training evaluators or policies; release evaluation mostly computes held-out metrics and pass/fail assertions.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Evaluation | NeMo Evaluator | Bedrock Evaluations | Ragas, DeepEval, promptfoo |
| Guardrails | NeMo Guardrails | Bedrock Guardrails | Guardrails AI, policy engines |
| Agent eval | NeMo Agent Toolkit evals | Bedrock eval + traces | LangSmith, Phoenix |

### Decision guide

| Scenario | Correct control | Trap |
|---|---|---|
| Unsafe final text | Output guardrail | No policy |
| Malicious retrieved chunk | Retrieved-content policy | Final-only filter |
| Wrong tool call | Trajectory eval + tool gateway | Final answer accuracy |
| Judge favors verbosity | Calibrated rubric | Blind LLM judge |
| Release change | Regression suite | Manual spot check |

### Deep dive: layered safety boundaries

| Boundary | What to check | Why it matters |
|---|---|---|
| Input | User intent, policy, jailbreak, PII | Blocks obvious unsafe requests before retrieval or tools |
| Retrieved content | Indirect prompt injection, source trust, permissions | Retrieved text is data, not instructions |
| Tool proposal | Tool name, arguments, risk, approval need | The model should not be the execution authority |
| Tool result | Stale, partial, malicious, or instruction-like output | Tool output can poison later reasoning |
| Output | Unsupported claims, unsafe advice, privacy leakage | Final text still needs policy and citation support |

### Judge and regression traps

| Symptom | Better fix | Trap |
|---|---|---|
| Judge rewards long answers | Calibrate rubric with human anchors and disagreement checks | Blind LLM-as-judge score |
| Correct final answer with wrong tool path | Trajectory eval and tool-call scoring | Final-answer-only metric |
| RAG answer cites weak evidence | Citation entailment and groundedness tests | Count citations only |
| Prompt change improves one demo | Regression suite by domain and risk tier | Manual spot check |
| Safety false positives increase | Separate safety precision/recall and reviewer feedback | Disable guardrails |

### Hands-on checks

1. Define metrics for answer quality, retrieval, tool correctness, safety, latency, and cost.
2. Write one red-team case for retrieved prompt injection.

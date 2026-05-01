---
domain: Evaluation and Tuning
weight: 13
status: populated
---

# Evaluation and Tuning

## Certification boundary

This page is the NCP-AAI exam lens for agent evaluation and tuning. Keep trajectory, groundedness, safety, and cost metrics at certification depth. The reusable concept home is `Agentic AI General Study -> Evaluation and Safety`; NVIDIA evaluator and exam-distractor knowledge stays here.

## Core ideas you must hold in your head

- **Trajectory evaluation** — evaluate the trajectory, not just the final answer. An agent can guess the right answer with the wrong tools. **Trajectory evaluation** scores **tool selection**, **tool arguments**, observations used, and reasoning quality — not just output correctness.
- **Faithfulness** is a distinct metric from topicality. A **RAG** answer can be on-topic but unsupported by retrieved evidence. **Citation-support** **evaluation** checks whether each claim is entailed by evidence.
- **Cost-quality frontier** — not quality alone. An agent that doubles cost for +2% accuracy may be a regression. Track **task success** + tool calls + **tokens** + **latency** + **cost per completed task**.
- **Benchmark limitations** — benchmarks don't capture everything. A prompt change can improve benchmark score but increase unnecessary escalations. Production-aligned eval sets must include workflow impact metrics.

## Mental model

**Evaluation** sits in the **tuning loop** — measure, diagnose, improve, repeat.
```
[Define metrics per task] → [Build eval datasets] → [Run agent] → [Score trajectory/outcome]
       ↑                                                              |
       └──────────────── [Tune: prompt, model, tools] ←───────────────┘
```

The key shift from LLM eval to agent eval: **you're evaluating a process, not a single output.**

## Evaluation dimensions (what to measure)

| Dimension | What it captures | Example metrics |
| --------- | ---------------- | --------------- |
| **Task success** | Did the agent accomplish the goal? | Completion rate, resolution accuracy, goal achievement |
| **Trajectory quality** | Were the right tools called with right args in right order? | **Tool selection** accuracy, tool argument correctness, step optimality |
| **Faithfulness / groundedness** | Are claims supported by retrieved evidence? | **Citation-support** score, entailment check, hallucination rate |
| **Safety / policy compliance** | Were intermediate actions within allowed states/permissions? | Policy violation rate, unauthorized action count |
| **Efficiency** | Was the task done with reasonable resources? | Tool calls per task, **tokens** per task, **latency** (p50/p95/p99), cost per task |
| **Escalation quality** | Are escalations appropriate? | **Escalation precision/recall**, reviewer workload |

## Evaluation methods

### Trajectory evaluation vs. final-answer evaluation

- **Final-answer only** (exact match, BLEU, ROUGE): Misses lucky guesses, unsafe paths, wrong-tool-right-answer scenarios
- **Trajectory evaluation**: Scores each step — tool choice, **tool arguments**, **observation usage**, reasoning quality, final answer. **This is the exam-correct approach for agents.**

### LLM-as-judge

- Use rubric that separately scores: correctness, support, conciseness, harmfulness
- Include **calibrated examples** and position/order randomization to reduce bias
- **Trap**: LLM judges prefer longer answers even with unsupported details. **Rubric decomposition** mitigates this.

### Task-specific metrics (not one metric for everything)

- Classification → accuracy, F1
- QA → F1, Exact Match
- Summarization → ROUGE, BERTScore
- **Retrieval** → recall@k, precision@k, NDCG
- Dialogue → task completion rate, escalation rate
- Multi-agent coordination → success rate + path optimality

### Bootstrapping evaluation when no labels exist

- **Synthetic chunk-grounded queries**: Generate questions from specific document chunks, keep only answerable pairs after verification, use source chunk as ground-truth context for recall@k
- **Not**: agent self-judgment (circular), production thumbs-up only (**sparse**, biased), **latency**-only **evaluation**

### A/B testing and canary evaluation

- **Canary evaluation before ramp**: Compare **task success**, trajectory quality, **groundedness**, safety against baseline
- **Shadow deployment**: Run new version in parallel, log responses for analysis without user exposure
- **Performance-based gating**: Automate promotion only when new version outperforms baseline

## Tuning strategies

### When and what to tune

| Symptom | Likely fix |
| ------- | ---------- |
| Agent guesses instead of using tools | **Schema-constrained tool calling**, **structured observations** requirement |
| High hallucination when no docs found | Expose **retrieval confidence / empty-result state**, require refusal when evidence insufficient |
| Good answers but high cost | **Cost-quality frontier** analysis; cache frequent tool outputs; reduce unnecessary API calls |
| Good benchmark, bad production escalations | Add **escalation precision/recall** to eval set; use production-like cases |
| Long **latency** but accurate | Cache frequent outputs and sub-goals; parallelize independent calls; use smaller distilled model |
| Inconsistent outputs across sessions | Lower temperature + system-level role guidance; persistent memory for context |
| Weak on domain-specific tasks | Task-specific **evaluation** with labeled domain datasets; fine-tune on domain data |
| Human feedback is consistent and labeled | Use **structured feedback** review, targeted **fine-tuning**, or reward-model/RLHF-style training only after **evaluation** proves it improves the task |

### Prompt engineering for consistency

- **Lower temperature + system-level role guidance**: Reduces randomness, constrains behavior
- **Few-shot prompting with curated examples**: Concrete guidance on structure, tone, behavior
- **Not**: increasing temperature (more variability), removing system instructions (less constraint), random instruction shuffling

### Quantization and distillation for latency-sensitive deployments

- **INT8 quantization**: Reduces model size and speeds inference for resource-constrained or **latency**-sensitive environments
- **Smaller distilled model**: Maintains acceptable accuracy with faster inference for tight **latency** budgets
- **Not**: larger model for **latency** problems, beam search with wide beam (increases **latency**)

## Common exam traps

1. **"Final-answer exact match is sufficient."** It misses lucky guesses, wrong trajectories, and unsafe intermediate steps. The exam expects **trajectory evaluation** for agents.

2. **"BLEU/ROUGE for everything."** These are text-overlap metrics appropriate for summarization/translation. They penalize valid paraphrases and miss **faithfulness** issues. Use task-appropriate metrics.

3. **"Use accuracy as the only metric across all tasks."** Classification accuracy is meaningless for summarization. The exam expects task-specific metrics (F1 for QA, ROUGE for summarization, etc.).

4. **"Latency/GPU utilization as quality proxy."** Speed and hardware metrics don't measure correctness, **groundedness**, or safety. They answer different questions.

5. **"Self-judgment without references."** Circular — the agent evaluating itself has no ground truth. Synthetic data generation or human annotation breaks the circularity.

6. **"Benchmark score automatically translates to production."** Benchmarks may not capture workflow impact (escalation rate, **reviewer load**, user trust). Canary eval with production-like cases is needed.

7. **"Pick the fastest model" or "pick the model with highest accuracy on one task."** Cross-task comparison needs task-specific metrics with weighted averaging.

## Must-know exam bullets

- **Trajectory evaluation** > **final-answer evaluation** for tool-using agents
- **Faithfulness** — entailment from evidence, not topicality or embedding similarity
- **Cost-quality frontier**: track **task success** + tool calls + **tokens** + **latency** + cost per task
- **LLM-as-judge** — needs **rubric decomposition** (correctness, support, conciseness, harmfulness) + **calibrated examples** + **position randomization**
- **Synthetic chunk-grounded queries** — bootstrap **retrieval** eval when no labels exist
- **Canary evaluation** — compares trajectory quality, **groundedness**, and safety, not just infrastructure metrics
- **Task-specific metrics** — weighted by importance for cross-task model comparison
- **A/B testing** — in controlled environment for safe version comparison
- **Shadow deployment** — with performance-based gating for automated safe promotion

## Hands-on checks / study prompts

1. An agent uses wrong tool, gets lucky with right answer. Which eval catches this — final-answer or trajectory?
2. What three dimensions should an **LLM-as-judge** rubric separately score?
3. How do you bootstrap **retrieval evaluation** with no labeled dataset?
4. What's the difference between **faithfulness** and topicality in **RAG evaluation**?
5. When is caching a tuning fix vs. a prompt change?

## Mock signals

Across the mock exams, **evaluation** questions repeatedly test these durable ideas:

- **Agent evaluation is trajectory evaluation**: score tool choice, arguments, observations, safety, and final output.
- **Groundedness is evidence support**: citation support and entailment matter more than topical similarity.
- **Task-specific metrics**: QA, summarization, **retrieval**, dialogue, and coordination need different metrics.
- **Safe rollout**: canary, **shadow deployment**, A/B testing, and performance gates compare against a baseline before promotion.
- **Cost-quality trade-off**: **latency**, token cost, tool calls, and GPU cost must be weighed against **task success**.
- **Feedback loops**: structured labels and reviewer annotations can drive prompt changes, **fine-tuning**, or reward-model training, but only after validation.

Evidence source: `mock_1` through `mock_5`, especially **trajectory evaluation**, task-specific metrics, canary/shadow rollout, A/B testing, and feedback-loop questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 13%
- **What it covers:** Evaluate full agent trajectories, tool correctness, **task success**, **latency**, cost, safety, and feedback loops.
- **Use this section when:** Study this when final-answer metrics are insufficient and the agent's steps matter.
- **Common trap:** A correct final answer can hide unsafe or inefficient tool behavior. Evaluate the trajectory, not only the response.
- **Scenario signal:** Final answers look correct, but the trajectory reveals wrong tools, unsupported claims, unsafe actions, or cost/regression problems.

### Study notes

- Evaluate trajectories, not just final answers. A final answer can be correct while the agent used an unsafe tool, leaked data, ignored evidence, or took an expensive path.
- Use **task success**, tool-call accuracy, **groundedness**, safety, cost, **latency**, and regression suites. **Human review** matters when tasks are ambiguous or policy-sensitive.
- **LLM-as-judge** can scale **evaluation**, but it needs rubrics, **calibrated examples**, **position randomization**, and periodic checks against human labels.
- **Agent-specific evaluation metrics**: (a) Task completion rate — did the agent achieve the user's goal? Binary or multi-level scoring. (b) **Tool selection** accuracy — did the agent pick the correct tool for each step? Compare against a gold-standard tool trace. (c) End-to-end success — a composite score of task completion + trajectory quality + safety + cost efficiency. A high e2e score means the agent completed the task correctly, safely, and efficiently.
- **RAG evaluation** has three distinct dimensions: (a) **Faithfulness** — are generated claims entailed by retrieved evidence? Measure via NLI-based **entailment checking**. This catches hallucination even when the answer is on-topic. (b) **Retrieval** quality — does the retriever return relevant documents for the query? Use recall@k, precision@k, NDCG against a labeled relevance set. (c) Answer relevance — is the generated answer responsive to the query? Use **LLM-as-judge** with rubric scoring, not just embedding similarity.
- **Memory evaluation**: (a) Stale memory detection — test that the agent uses the most recent value for a time-sensitive fact (e.g., preferred shipping address). (b) Irrelevant memory suppression — test that the agent does not retrieve memories from unrelated tasks. (c) **Memory governance** compliance — test that memories with restricted **sensitivity labels** are not returned to unauthorized users. (d) Write policy adherence — test that transient or **sensitive data** is not written to **long-term memory** without **consent**.
- **LLM-as-judge for agent outputs**: Define a rubric with 4-5 dimensions (correctness, evidence support, conciseness, safety, tool-use appropriateness). Provide **calibrated examples** at each score level. Randomize presentation order to reduce position bias. Cross-validate against human labels periodically. The judge can evaluate both the final answer and the trajectory (e.g., "Were all tool calls justified by the evidence?").
- **Bootstrap evaluation when no labeled data exists**: (1) Generate synthetic questions from your document corpus using an LLM — one question per document chunk. (2) Filter to keep only questions that are definitively answerable from that chunk (remove ambiguous or multi-chunk questions). (3) Use the source chunk as ground-truth evidence for **retrieval evaluation** (recall@k). (4) Use the question-chunk pair as a minimal QA eval set. (5) Expand with human review of a sample to estimate quality. Do NOT use agent self-judgment as the only **evaluation** — it has circularity.

### Must know

- **Trajectory evaluation**: score each step — **tool selection**, arguments, **observation usage**, policy compliance, reasoning quality — NOT final-answer alone
- **Final-answer evaluation limits**: exact match, BLEU, ROUGE — these miss wrong-tool-right-answer, unsafe intermediate steps, and trajectory quality
- **Faithfulness/groundedness**: whether each claim is entailed by retrieved evidence — measured via NLI-based **entailment checking** — NOT topical similarity or embedding distance
- **Faithfulness vs topicality**: a **RAG** answer can be on-topic but unsupported (hallucinated). Topical similarity = embedding closeness to query. **Faithfulness** = entailment from evidence. Distinct metrics.
- **Citation-support score**: per-claim entailment check against cited sources — catches plausible-sounding unsupported statements
- **LLM-as-judge**: rubric with 4-5 decomposed dimensions (correctness, evidence support, conciseness, safety, tool-use appropriateness) + **calibrated examples** + **position randomization**
- **LLM judge bias**: judges may prefer longer, verbose answers even with unsupported details — mitigate with **rubric decomposition**, **position randomization**, and **human calibration**
- **Cost-quality frontier**: **task success** + tool calls + **tokens** + **latency** + **cost per completed task** — not accuracy alone; a tiny quality gain at doubled cost may be a regression
- **Task-specific metrics**: classification → accuracy/F1, QA → F1/Exact Match, summarization → ROUGE/BERTScore, **retrieval** → recall@k/precision@k/NDCG, dialogue → task completion + escalation rate
- **Synthetic chunk-grounded queries**: bootstrap **retrieval** eval — generate questions from specific document chunks, verify answerability, use source chunk as ground-truth context for recall@k
- **Canary evaluation before ramp**: compare **task success**, trajectory quality, **groundedness**, safety against baseline — NOT just infrastructure/CPU/GPU health
- **Shadow deployment**: new version runs in parallel, responses logged but not served — enables comparison without user exposure
- **Escalation precision/recall**: track justified escalations (precision) and missed escalations (recall) — prompt changes can boost benchmark but increase unnecessary escalations
- **Regression suite**: fixed set of canonical test scenarios run after every prompt, tool, or model change — detects trajectory quality regressions

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| correct final answer but wrong tools or unsafe path | **trajectory evaluation** scoring tool choice, arguments, observations, and policy compliance | final-answer accuracy only |
| answer sounds relevant but unsupported by evidence | **faithfulness/groundedness evaluation** with **entailment checking** per claim | topical similarity or embedding distance only |
| LLM judge bias (prefers longer answers) | **rubric decomposition** + **calibrated examples** + **position randomization** + **human calibration** | one vague judge prompt or "be fair" instruction |
| no labeled **retrieval evaluation** data | **synthetic chunk-grounded queries** — generate from documents, filter answerable pairs, use source as ground truth | agent self-judgment (circular) or production thumbs-up only (**sparse**, biased) |
| better accuracy but higher cost | **cost-quality frontier** analysis — track **task success** + **tokens** + **latency** + **cost per completed task** | accuracy alone without cost context |
| benchmark score improved but production escalations increased | add **escalation precision/recall** to eval set, use production-like cases in canary | trusting benchmark as sole quality signal |
| agent guesses instead of using tools | **schema-constrained tool calling** + **structured observation** requirement | higher temperature or removing tools |
| high hallucination when no relevant docs found | expose **retrieval confidence / empty-result state**, require refusal when evidence insufficient | top-k=100 to always fill context (adds noise) |
| **RAG** agent is on-topic but cites passages that don't support claim | **faithfulness/citation-support evaluation** (entailment check per claim) | answer length or **relevance scoring** alone |
| stale user preferences from memory | **memory **retrieval** tests** with time-stamped updates, expected current value, stale detection | old conversation logs reinforcing stale preferences |
| consistent human feedback available | **structured feedback** review → targeted **fine-tuning** or RLHF only after **evaluation** proves improvement | ignoring feedback or blindly training on all feedback |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| **Trajectory evaluation** vs **Final-answer evaluation** | Trajectory = scores each step (tool choice, arguments, observations, policy/safety). Final-answer = scores output only. A correct answer achieved with wrong tools or unsafe steps still fails **trajectory evaluation**. |
| **Faithfulness** vs Topicality | **Faithfulness** = are claims entailed by evidence? (NLI-based). Topicality = is the answer about the right subject? (embedding similarity). An answer can be on-topic but factually unsupported. |
| **LLM-as-judge** vs Human **evaluation** | LLM judge = scalable, needs rubric + calibration + randomization. Human eval = gold standard but expensive. LLM judges can be biased by verbosity/style — never use without calibration against human labels. |
| Benchmark score vs Production quality | Benchmark = controlled test set and may miss escalation rate, **reviewer load**, cost, or user trust. Production canary = real traffic sample with workflow-impact metrics. Canary eval is needed before full ramp. |
| **Retrieval** quality metrics vs Answer quality metrics | **Retrieval** = recall@k, precision@k, NDCG (are right docs in top-k?). Answer = **faithfulness**, **task success** (is output correct and supported?). Both needed in **RAG evaluation**. |
| **Evaluation** vs Monitoring | **Evaluation** = offline, comparing versions, regression detection before/after changes. Monitoring = online, continuous, detecting drift in production. **Canary evaluation** bridges the two during rollout. |
| Cost optimization vs Quality optimization | Cost = token reduction, tool call reduction, smaller model. Quality = better trajectory, **faithfulness**, **task success**. **Cost-quality frontier** tracks both — optimize the ratio, not one dimension alone. |
| Self-judgment vs Synthetic data bootstrap | Self-judgment = agent evaluating itself (circular, no ground truth). Synthetic bootstrap = generating labeled data from documents with verification (non-circular, can measure recall@k). |

### Mini scenario drill

1. Scenario: Two agents produce the same correct final answer on a task. Agent A used the correct database query; Agent B guessed and got lucky. Final-answer scoring shows both are equal.
   Best answer pattern: **Trajectory evaluation** that separately scores **tool selection**, **tool arguments**, **observation usage**, and final answer correctness. This catches Agent B's wrong tool choice.
   Trap: Exact match or BLEU score — both would rate A and B identically, masking the unsafe trajectory.

2. Scenario: A new prompt version improves benchmark score by 5%, but after deployment the human review queue triples because the agent now escalates far more cases unnecessarily.
   Best answer pattern: The eval suite was missing **escalation precision/recall** and workflow impact metrics. Add these to the **canary evaluation** before ramp.
   Trap: Trusting benchmark score as the only quality signal without production-aligned metrics.

3. Scenario: An **LLM-as-judge** consistently gives higher scores to longer, more verbose answers — even when those answers contain hallucinated details not in the retrieved evidence.
   Best answer pattern: Decompose the judge rubric into separate dimensions (correctness, evidence support, conciseness, safety). Provide **calibrated examples** at each score level. Randomize answer order.
   Trap: A single vague prompt like "rate the answer quality" — amplifies verbosity bias.

### High-yield exam signals

- **Agent benchmark gap**: benchmark score improves but production escalation rate increases because workflow-impact metrics were not in the eval set
- **Unsafe intermediate step**: agent reaches the correct final answer but called a privileged tool unnecessarily, creating audit and **privacy** risk
- **Cost spike**: agent succeeds at every task but doubles **cost per completed task**, making the solution uneconomical at scale (**cost-quality frontier** missing)
- **Judge bias**: **LLM-as-judge** consistently prefers longer answers even when hallucinated details are present, masking quality regressions in **evaluation** reports
- **Human review overload**: task completion is high, but reviewer workload is unsustainable because escalation precision is low or recall is high
- **final answer correct but trajectory wrong (wrong tool, unsafe path)**
- **faithfulness failure: on-topic but unsupported by evidence**
- **stale memory retrieved instead of current preference**
- **no labeled eval data available (bootstrap from documents)**

### Hands-on checks

- Define metrics for a support agent: final correctness, tool accuracy, policy compliance, **latency**, and cost.
- Design a **RAG evaluation** suite with three dimensions: **faithfulness** (**entailment checking**), **retrieval** quality (recall@k), and answer relevance (**LLM-as-judge** rubric). Write the rubric.
- Design a memory **evaluation** test: create test cases for stale memory detection, irrelevant memory suppression, and governance compliance.
- Bootstrap an eval set for a new agent with no labeled data: describe the synthetic generation pipeline and the filtering steps.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when final-answer metrics are insufficient and the agent's steps matter.
- The major trap pattern is: A correct final answer can hide unsafe or inefficient tool behavior. Evaluate the trajectory, not only the response.
- Recurring local question themes include: **Evaluation** and Tuning, **RAG evaluation** and **groundedness**, tool execution safety, human oversight and UX, memory and state management, workflow/state-machine design.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q15, mock_3 Q21, mock_4 Q17, mock_5 Q16** / `eval-001`: Two agents produce the same final answer on a task. One used the correct database query, the other guessed and got lucky. Which **evaluation** catches the difference? Correct idea: **Trajectory evaluation** that scores **tool selection**, **tool arguments**, observations used, and final answer correctness.. Trap: Exact match misses unsafe or lucky trajectories.
- **mock_1 Q16, mock_2 Q17, mock_3 Q22, mock_4 Q18, mock_5 Q17** / `eval-002`: A **RAG** agent answers legal questions. It is usually on-topic but sometimes cites passages that do not support the claim. Which metric is most directly needed? Correct idea: **Faithfulness** or **citation-support evaluation** that checks whether each claim is entailed by retrieved evidence.. Trap: Length is not **groundedness**.
- **mock_1 Q17, mock_2 Q18, mock_3 Q23, mock_4 Q19, mock_5 Q18** / `eval-003`: No labeled eval set exists for a new enterprise **RAG** agent. What is a strong way to bootstrap **retrieval evaluation**? Correct idea: Generate questions from specific document chunks, keep only answerable pairs after verification, and use the source chunk as gr.... Trap: Self-judgment has circularity.
- **mock_1 Q18, mock_2 Q19, mock_3 Q24, mock_4 Q20** / `eval-004`: An **LLM-as-judge** prefers longer answers even when they contain unsupported details. Which mitigation is best? Correct idea: Use a rubric that separately scores correctness, support, conciseness, and harmfulness, with **calibrated examples** and position/o.... Trap: Generic fairness instructions are weak.
- **mock_1 Q19, mock_2 Q20, mock_3 Q25, mock_4 Q21, mock_5 Q19** / `eval-005`: A tool-using agent's **task success** improved, but cost doubled. Which **evaluation** view is missing? Correct idea: A **cost-quality frontier** that tracks **task success**, tool calls, **tokens**, **latency**, and **cost per completed task**.. Trap: GPU count is too indirect.
- **mock_1 Q20, mock_2 Q21, mock_3 Q26, mock_4 Q22, mock_5 Q20** / `eval-006`: A prompt change improves benchmark score but increases unnecessary human escalations in production. What should the eval include? Correct idea: **Escalation precision/recall** and reviewer-load metrics on representative production-like cases.. Trap: Toxicity is separate.
- **mock_1 Q21, mock_2 Q22, mock_3 Q27, mock_4 Q23, mock_5 Q21** / `eval-007`: A memory-enabled agent seems personalized but sometimes uses stale user preferences. Which **evaluation** best targets the failure? Correct idea: **Memory **retrieval** tests** with time-stamped preference updates, expected current value, and checks that stale memories are ignored.... Trap: Old conversations may reinforce stale preferences.
- **mock_2 Q23, mock_3 Q28, mock_4 Q24** / `eval-008`: An agent sometimes completes a workflow but violates an internal policy along the way. Which **evaluation** design is best? Correct idea: Policy-aware trajectory tests that score intermediate actions against allowed states, permissions, and required approvals.. Trap: Completion rate misses unsafe paths.

</details>

<!-- STUDY_ENRICHMENT_END -->

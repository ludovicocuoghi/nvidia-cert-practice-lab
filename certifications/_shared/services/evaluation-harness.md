---
service: Evaluation Harness
relevant_to: [AAI-GEN]
status: populated
---

# Evaluation Harness

## What to study first

- **Core idea:** The lifecycle owner for measuring whether the system works.
- **Use it when:** The scenario mentions benchmarks, regression, trajectory scoring, RAG groundedness, LLM-as-judge, human ratings, or release gates.
- **Choose another path when:** Choose a neighboring service when the problem is live operational monitoring only.
- **Concrete surface:** Access: Eval jobs, CI gates, judge workflows, human review tasks, RAG metrics, replay datasets Inside: Golden sets, trajectory checks, groundedness, tool accuracy, safety tests, LLM-as-judge calibration I/O: Dataset, task criteria, model/prompt/retriever variant, expected behavior, traces, human labels -> Scores, failure cases, regressions, judge reports, approval or block signal
- **Real trap:** Scoring only final answers when unsafe tool calls happened in the middle.

## At a glance

| | |
|---|---|
| **What it is technically** | Test system for prompts, models, retrieval, tools, safety, agent trajectories, regression, and human/LLM judging |
| **How you access it** | Eval jobs, CI gates, judge workflows, human review tasks, RAG metrics, replay datasets |
| **Input** | Dataset, task criteria, model/prompt/retriever variant, expected behavior, traces, human labels |
| **Output** | Scores, failure cases, regressions, judge reports, approval or block signal |
| **Inside** | Golden sets, trajectory checks, groundedness, tool accuracy, safety tests, LLM-as-judge calibration |

```yaml
eval:
  dataset: support_regression.jsonl
  target: prompt:v12 + model:support-agent
  metrics: [correctness, groundedness, tool_accuracy, policy]
  judges: [llm_judge, human_calibration]
  gate: no_regression
```

**Mental model**: the quality gate before and after changes.

## Study card data

- **What it is:** The lifecycle owner for measuring whether the system works.
- **Lifecycle:** Evaluation
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions benchmarks, regression, trajectory scoring, RAG groundedness, LLM-as-judge, human ratings, or release gates.
- **Do not use it when:** Choose a neighboring service when the problem is live operational monitoring only.
- **Common trap:** Scoring only final answers when unsafe tool calls happened in the middle.
- **Recognition clues:** "The final answer is correct, but the agent called a private tool unnecessarily."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Evaluator + NeMo Agent Toolkit evals | Model, RAG, and workflow evaluation. |
| AWS | Amazon Bedrock Evaluations | Automatic and human evaluation for models, knowledge bases, and RAG resources. |
| Open source | OpenAI Evals, Ragas, DeepEval, promptfoo | Portable regression, RAG, judge, and prompt/model tests. |

## Portable concepts

Evaluate more than final text:

- Task success.
- Answer correctness.
- Groundedness and citation faithfulness.
- Retrieval recall and rerank quality.
- Tool selection and parameter correctness.
- Policy compliance.
- Latency and cost.
- Human satisfaction.
- Regression against old failures.

LLM-as-judge helps scale review, but it needs criteria, calibration, and human-labeled anchors.

## Decision guide

| Requirement | Eval type | Trap |
|---|---|---|
| Compare models | Model eval | Leaderboard only |
| Check RAG answers | Groundedness + retrieval eval | ROUGE only |
| Check agents | Trajectory eval | Final answer only |
| Detect judge bias | Human calibration | Blind judge score |
| Release safely | Regression suite | Manual spot check only |

## High-yield signals

- "Trajectory" -> agent eval.
- "Judge bias" -> calibration.
- "Faithfulness" -> RAG eval.
- "Release gate" -> regression harness.
- "Human preference" -> human eval / preference labels.

## Chapter notes

The evaluation harness is the **evidence chapter**. It turns "the demo looked good" into measurable claims about correctness, groundedness, safety, tool behavior, cost, and latency. A strong harness does not ask one vague question like "did the model answer well?" It asks **which part of the system succeeded, which part failed, and whether the release is safer than the previous version.**

For agentic systems, evaluate the trajectory as a sequence:

```text
input -> route -> retrieve -> tool proposal -> tool result -> guardrail -> answer
          |         |           |               |             |          |
          v         v           v               v             v          v
       route ok  recall ok   schema ok      state ok      policy ok  grounded
```

### Metrics that matter

Use a scorecard instead of a single number:

```text
release_score =
  0.30 * task_success
+ 0.20 * groundedness
+ 0.15 * tool_accuracy
+ 0.15 * safety_compliance
+ 0.10 * latency_slo_pass
+ 0.10 * cost_budget_pass
```

The weights are not universal; the durable idea is that **the metric mix must match the risk**. A legal assistant may weight groundedness and safety higher. A routing agent may weight tool accuracy and latency higher.

### Judge calibration

LLM-as-judge is useful when it is treated like a measurement instrument, not an oracle. Good calibration uses:

- **Criteria:** exact rubric with pass/fail anchors.
- **Human labels:** a small trusted set for checking judge drift.
- **Blind comparison:** hide model names and previous scores.
- **Adversarial cases:** unsupported claims, partial citations, unsafe tool paths.
- **Regression history:** old failures must stay fixed.

### Scenario drill

A support agent gives the correct refund answer, but the trace shows it queried a private HR database first. Final-answer scoring would pass it. A trajectory evaluation catches the unsafe intermediate step. **That is why agent evaluation must inspect tool calls, retrieval, policy checks, and state transitions, not only the final text.**

## Hands-on checks

1. Define metrics for a support agent: final correctness, tool accuracy, groundedness, safety, latency, cost.
2. Write one judge criteria and one human calibration plan.

---
service: Evaluation Harness
relevant_to: [AAI-GEN]
status: populated
---

# Evaluation Harness

## At a glance

| | |
|---|---|
| **What it is technically** | Test system for prompts, models, retrieval, tools, safety, agent trajectories, regression, and human/LLM judging |
| **How you access it** | Eval jobs, CI gates, judge workflows, human review tasks, RAG metrics, replay datasets |
| **Input** | Dataset, task rubric, model/prompt/retriever variant, expected behavior, traces, human labels |
| **Output** | Scores, failure cases, regressions, judge reports, approval or block signal |
| **Inside** | Golden sets, trajectory checks, groundedness, tool accuracy, safety tests, LLM-as-judge calibration |

**Mental model**: the quality gate before and after changes.

## Study card data

- **What it is:** The lifecycle owner for measuring whether the system works.
- **Lifecycle:** Evaluation
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions benchmarks, regression, trajectory scoring, RAG groundedness, LLM-as-judge, human ratings, or release gates.
- **Do not use it when:** The problem is live operational monitoring only.
- **Common trap:** Scoring only final answers when unsafe tool calls happened in the middle.
- **Scenario signal:** "The final answer is correct, but the agent called a private tool unnecessarily."

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

LLM-as-judge helps scale review, but it needs rubrics, calibration, and human-labeled anchors.

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

## Hands-on checks

1. Define metrics for a support agent: final correctness, tool accuracy, groundedness, safety, latency, cost.
2. Write one judge rubric and one human calibration plan.

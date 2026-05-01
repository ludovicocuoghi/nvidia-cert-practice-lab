---
capability: Evaluation and Regression Harness
status: populated
source_lens: general-study
---

# Evaluation and Regression Harness

## What You Are Building

You are building the test system that measures prompts, models, retrieval, tools, policies, trajectories, safety, cost, and regressions before and after release.

## Pipeline

1. Define tasks, risk tiers, rubrics, and datasets.
2. Capture baseline behavior before changes.
3. Evaluate model quality, retrieval quality, tool correctness, safety, latency, and cost.
4. Use human labels, rule checks, LLM-as-judge, and deterministic assertions where appropriate.
5. Gate releases with regression thresholds.
6. Turn incidents into new eval cases.
7. Track versions for prompt, model, retrieval, tools, data, and guardrails.

## Core Concepts

- Final answer correctness is not enough for agents.
- Trajectory eval checks intermediate retrieval, tool use, policy, and state.
- LLM-as-judge needs rubrics and calibration.
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
| LLM judge is objective | It needs rubric, calibration, and spot checks. |
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
| Human label | Safety, usefulness, ambiguous judgment | Expensive and inconsistent without rubrics |
| LLM-as-judge | Scalable rubric scoring | Needs anchors, calibration, and disagreement checks |
| Production canary | Real workload signal | Needs rollback and risk limits |

### Regression mindset

Any change to model, adapter, prompt, retrieval index, reranker, tool schema, guardrail, gateway route, or context packing can break prior behavior. A release gate should compare against a baseline and define quality, safety, latency, and cost thresholds before rollout.

NeMo Evaluator is the NVIDIA cue for model/LLM/agent evaluation evidence. It is not a serving endpoint or guardrail by itself.

## Exam Signals

- "compare variants" -> evaluation harness.
- "release gate" -> regression suite.
- "LLM-as-judge" -> rubric/calibration.
- "RAG groundedness" -> faithfulness/citation eval.
- "tool trajectory" -> agent eval.
- "contamination" -> train/test/eval leakage check.
- "new model/adaptor/prompt" -> baseline and regression comparison.
- "incident replay" -> convert production failure into eval case.

## Hands-on Checks

1. Define metrics for a support agent: correctness, groundedness, tool success, safety, latency, cost.
2. Write a rubric for LLM-as-judge and two human anchor examples.
3. Turn a production incident into a regression test.

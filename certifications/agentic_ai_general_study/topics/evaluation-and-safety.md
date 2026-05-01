---
domain: Evaluation and Safety
weight: 14
status: populated
---

# Evaluation and Safety

## Concept ownership

This is the vendor-neutral home for model, RAG, and agent evaluation plus runtime safety controls. Keep trajectory evaluation, groundedness, judge calibration, red teaming, prompt-injection defenses, and layered guardrails here. Vendor pages should stay focused on product-specific evaluators and guardrail services.

## Study card data

- **What it covers:** How to measure quality and enforce safety for models, RAG, tools, and full agent trajectories.
- **Lifecycle:** Evaluation and safety
- **Use this section when:** The scenario mentions regression, trajectory scoring, groundedness, judge bias, red teaming, guardrails, prompt injection, PII, or unsafe tools.
- **Common trap:** A correct final answer can hide an unsafe or expensive trajectory.
- **Scenario signal:** The final answer is correct, but the agent called a private tool unnecessarily.

### Key ideas

- **Evaluation harness** measures behavior before and after changes.
- **Guardrails** enforce runtime policy.
- **Trajectory evaluation** scores intermediate steps, not only final text.
- **LLM-as-judge** needs calibration against human labels.
- **Prompt injection** can arrive through users, documents, tool outputs, or websites.

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

### Hands-on checks

1. Define metrics for answer quality, retrieval, tool correctness, safety, latency, and cost.
2. Write one red-team case for retrieved prompt injection.

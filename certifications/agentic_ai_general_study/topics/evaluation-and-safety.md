---
domain: Evaluation and Safety
weight: 14
status: populated
---

# Evaluation and Safety

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

### Hands-on checks

1. Define metrics for answer quality, retrieval, tool correctness, safety, latency, and cost.
2. Write one red-team case for retrieved prompt injection.

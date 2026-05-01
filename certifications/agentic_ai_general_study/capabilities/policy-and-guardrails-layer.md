---
capability: Policy and Guardrails Layer
status: populated
source_lens: general-study
---

# Policy and Guardrails Layer

## What You Are Building

You are building runtime controls that check user input, retrieved content, tool proposals, tool results, dialog behavior, and final output against policy.

## Pipeline

1. Define policies: safety, privacy, data access, tool risk, regulated content, escalation.
2. Check user input for unsafe or out-of-scope requests.
3. Check retrieved content for prompt injection, sensitive data, and policy conflicts.
4. Check tool proposals before execution.
5. Check final output for policy, PII, groundedness, and disclosure rules.
6. Log guardrail decisions and connect failures to evals.

## Core Concepts

- Guardrails are layered; final-output filtering alone is too late.
- Prompt injection can arrive through users, tools, or retrieved documents.
- Direct prompt injection comes from user input; indirect prompt injection comes from retrieved documents, web pages, tool outputs, or API responses.
- Tool policy is different from answer moderation.
- PII and secrets need prevention, redaction, and audit.
- Human escalation is a guardrail outcome.
- Guardrails are not IAM. Authorization, tenant filters, and tool permissions must be enforced by systems outside the model.
- NeMo Guardrails-style middleware can check dialog flow, topical scope, retrieved content, groundedness, jailbreaks, and output policy.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "retrieved doc says ignore instructions" | prompt-injection/content guardrail | obey document |
| "tool may mutate account" | tool policy + approval | prompt warning only |
| "PII in answer" | output check plus upstream data controls | final check only |
| "forbidden docs retrieved" | ACL retrieval filter | guardrail after generation |
| "unsafe request" | input policy/refusal/escalation | tool call |
| "citation unsupported" | groundedness/faithfulness guardrail | more fluent answer |
| "jailbreak bypasses prompt" | deterministic policy checks and privilege separation | stronger wording only |
| "tool result contains malicious instruction" | treat tool output as untrusted data | feed result into instruction slot |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Guardrails replace IAM | Permissions must be enforced by systems, not only text rules. |
| Final answer filter is enough | The model may already have used unsafe content or tools. |
| Prompt injection is only user chat | It can live in retrieved documents and tool outputs. |
| Safety prompt is a security boundary | Prompts guide behavior; deterministic checks enforce boundaries. |
| Fine-tuning makes guardrails unnecessary | Tuned behavior can still be bypassed; runtime controls remain necessary. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Guardrails | Dialog, retrieval, and policy rails. |
| NVIDIA | NeMo Retriever + Guardrails | Retrieval grounding plus policy checks around untrusted content. |
| Cloud | provider safety filters/guardrails | Managed moderation and policy checks. |
| Internal | policy engine + approval service | Enterprise-specific rules and escalation. |

## Deep Dive

### Where it sits in the lifecycle

Guardrails are the **runtime policy layer** around inputs, retrieval, tool calls, and outputs.

```text
[User input] -> [Input rail] -> [Retrieval/content rail] -> [Tool rail]
        -> [Groundedness/output rail] -> [Escalate/log if needed]
```

Final-output filtering alone is too late if the model already saw forbidden content or executed a tool.

### Guardrail checkpoint map

| Boundary | What to check | Failure example |
|---|---|---|
| Input | Unsafe/out-of-scope request, jailbreak | User asks for prohibited action |
| Retrieved content | Prompt injection, sensitive chunks, source policy | Document says "ignore instructions" |
| Tool proposal | Risk tier, allowed action, approval need | Model tries to delete account |
| Tool result | Malicious text, malformed data, policy conflict | API response contains instructions |
| Output | PII, unsupported claim, unsafe text | Final answer leaks secret |

### Prompt injection model

| Type | Source | Correct response |
|---|---|---|
| Direct | User message | Input rail/refusal/escalation |
| Indirect | Documents, web pages, emails, PDFs | Treat as untrusted data, not authority |
| Tool-output injection | API/tool result | Delimit, validate, and route through tool/content policy |

Keep retrieved/tool content out of the instruction slot. Enforce permissions outside the model.

### Guardrails vs permissions

| Layer | Job | Cannot replace |
|---|---|---|
| NeMo Guardrails-style middleware | Dialog, topical, retrieval, groundedness, policy checks | IAM, tenant filters, tool credentials |
| Retrieval ACL | Prevent forbidden chunks from entering context | Output moderation |
| Tool gateway | Validate and authorize actions | Safety prompt |
| Human review | Approve/escalate risky cases | Deterministic access controls |

For exam scenarios, map the risk to the boundary. NeMo Guardrails is the NVIDIA service cue for runtime policy middleware, not training or inference optimization.

## Exam Signals

- "prompt injection" -> guardrails plus instruction isolation.
- "unsafe tool call" -> tool policy.
- "PII leak" -> layered data/output controls.
- "human approval required" -> escalation.
- "retrieved forbidden content" -> retrieval ACL first.
- "indirect prompt injection" -> retrieved/tool content is untrusted data.
- "groundedness" -> citation/evidence policy check.
- "NeMo Guardrails" -> runtime policy middleware, not model weights.

## Hands-on Checks

1. Mark guardrail checks in a RAG + tool workflow.
2. Write examples of input, retrieval, tool, and output rails.
3. Explain why output filtering cannot replace permission filtering.

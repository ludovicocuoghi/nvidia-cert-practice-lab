---
service: Policy and Guardrails Layer
relevant_to: [AAI-GEN]
status: populated
---

# Policy and Guardrails Layer

## What to study first

- **Core idea:** The policy layer for model and agent behavior.
- **Use it when:** The scenario mentions unsafe requests, prompt injection, PII, policy refusal, sensitive tools, or content filtering.
- **Choose another path when:** Choose the neighboring control when the actual missing control is IAM, document ACL filtering, or human approval.
- **Concrete surface:** Access: Guardrail services, policy engines, validators, moderation APIs, schema checks, approval gates Inside: Content filters, denied topics, PII filters, prompt-injection checks, tool policy, output validation I/O: User message, retrieved chunks, proposed tool call, model output, policy config, identity/risk context -> Allow, block, rewrite, redact, ask for approval, escalate, or log
- **Real trap:** Only checking final output after unsafe retrieval or tool execution already happened.

## At a glance

| | |
|---|---|
| **What it is technically** | Runtime policy controls around inputs, retrieved content, tool calls, model responses, sensitive data, and unsafe behavior |
| **How you access it** | Guardrail services, policy engines, validators, moderation APIs, schema checks, approval gates |
| **Input** | User message, retrieved chunks, proposed tool call, model output, policy config, identity/risk context |
| **Output** | Allow, block, rewrite, redact, ask for approval, escalate, or log |
| **Inside** | Content filters, denied topics, PII filters, prompt-injection checks, tool policy, output validation |

```python
decision = guardrails.check(
    user_message=user_msg,
    retrieved_chunks=chunks,
    proposed_tool_call=tool_call,
    policy="refund_policy",
)
if decision.action == "approval_required":
    queue_review(decision)
```

**Mental model**: runtime rules that keep the agent from saying or doing unsafe things.

## Study card data

- **What it is:** The policy layer for model and agent behavior.
- **Lifecycle:** Safety and guardrails
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions unsafe requests, prompt injection, PII, policy refusal, sensitive tools, or content filtering.
- **Do not use it when:** Choose the neighboring control when the actual missing control is IAM, document ACL filtering, or human approval.
- **Common trap:** Only checking final output after unsafe retrieval or tool execution already happened.
- **Recognition clues:** "A retrieved document tells the agent to ignore policy and issue a refund."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Guardrails | Programmable rails around dialog, retrieval, tools, and model I/O. |
| AWS | Amazon Bedrock Guardrails | Input/output safeguards, sensitive-information filters, denied topics, and content policies. |
| Open source | Guardrails AI, policy engines, schema validators | Custom runtime validation, refusal, redaction, and policy enforcement. |

## Portable concepts

Safety is layered:

- Check user input.
- Treat retrieved/tool content as untrusted.
- Validate proposed tool calls.
- Apply identity and authorization outside the LLM.
- Evaluate model output.
- Log policy decisions.
- Route high-risk actions to human review.

Guardrails are not a replacement for permissions. If a user cannot access a document, it should not enter context at all.

## Decision guide

| Requirement | Control | Trap |
|---|---|---|
| Block harmful prompt | Input guardrail | Trust user intent |
| Stop prompt injection in docs | Retrieved-content/tool policy | Final output only |
| Hide PII in response | Output redaction | No upstream controls |
| Prevent unauthorized refund | Tool gateway + approval | Text guardrail only |
| Tenant document isolation | ACL filtering before retrieval | Guardrail after context |

## High-yield signals

- "Prompt injection" -> treat external content as untrusted.
- "Sensitive information" -> PII filters and data controls.
- "Tool misuse" -> tool policy plus gateway.
- "Denied topic" -> guardrail.
- "Unauthorized data" -> access control before retrieval.

## Hands-on checks

1. Mark every place in a RAG+tools workflow where policy should run.
2. Explain why guardrails and IAM solve different parts of the problem.

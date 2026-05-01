---
capability: Tool Gateway and Function Runtime
status: populated
source_lens: general-study
---

# Tool Gateway and Function Runtime

## What You Are Building

You are building the execution boundary between model intent and real systems. The model proposes a tool call; the gateway validates schema, authorization, risk, idempotency, and audit before anything happens.

## Pipeline

1. Define tool schema, inputs, outputs, risk tier, and owner.
2. Validate model-proposed arguments against schema and business rules.
3. Authorize user/agent for the requested operation.
4. Apply risk controls: read-only, mutating, high-impact, approval-required.
5. Execute with timeouts, retries, idempotency keys, and error mapping.
6. Log tool proposal, validation, execution result, and user-visible summary.

## Core Concepts

- Model proposes; tool layer validates and executes.
- Schemas are necessary but not sufficient; business rules matter.
- Least privilege limits blast radius.
- Idempotency prevents duplicate side effects.
- Mutating tools need stricter controls than read-only tools.
- Tool credentials should live server-side, scoped by user/session/policy, not inside prompts or model memory.
- Tool outputs are untrusted data and can contain prompt injection, stale facts, or partial failures.
- MCP/API gateways, function runtimes, and approval services are execution boundaries, not reasoning layers.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "malformed tool args" | schema validation | prompt-only fix |
| "unauthorized API call" | authz in tool gateway | model discretion |
| "duplicate order/refund" | idempotency key | blind retry |
| "high-risk action" | human approval or policy gate | auto-execute |
| "audit who did what" | execution logs | chat transcript only |
| "tool output says ignore policy" | treat output as data and re-check policy | obey tool text |
| "agent has too many permissions" | least-privilege tool scopes | bigger model |
| "external API timeout" | timeout budget, error mapping, safe retry | infinite agent retry |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Tool calling is safe because JSON | JSON can still request unsafe actions. |
| LLM should hold credentials | Server-side tools own credentials and permissions. |
| Retry every failure | Mutations need idempotency and careful retry policy. |
| Schema validation proves authorization | Valid arguments can still be forbidden for this user, tenant, or risk tier. |
| Tool result is trusted instruction | Tool results are data; policies and prompts decide how to use them. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| MCP/API gateway | Tool boundary | Schema, auth, and audit. |
| Serverless functions | Function runtime | Isolated execution and retries. |
| Internal broker | Tool approval service | Risk tiers and human gates. |
| Agent framework | tool schema registry | Declares capabilities, but runtime still enforces auth and policy. |

## Deep Dive

### Where it sits in the lifecycle

The tool gateway is the **execution boundary** between agent intent and real systems.

```text
[Model proposes tool call] -> [Schema validation] -> [Authz + business rules]
        -> [Risk/approval] -> [Execute] -> [Structured result + audit]
```

It should never trust the model to enforce permissions, side-effect safety, or business invariants.

### Validation stack

| Check | Question answered | Example failure |
|---|---|---|
| Schema | Is the call shaped correctly? | Missing required field |
| Authorization | May this actor do this? | User cannot access account |
| Business rule | Is it allowed by domain policy? | Refund outside allowed window |
| Risk tier | Is approval required? | Large transfer or data deletion |
| Idempotency | Can retry duplicate side effects? | Same email sent twice |
| Audit | Can we explain what happened? | No trace of model/tool/user/version |

Passing JSON schema is not enough to issue a refund, delete a record, send an email, or change an account.

### Retry and mutation rules

| Tool type | Retry posture | Needed controls |
|---|---|---|
| Read-only lookup | Usually safe to retry | Timeout/error mapping |
| Low-risk mutation | Retry only with idempotency | Idempotency key, transaction ID |
| High-impact mutation | Approval or confirmation | Human gate, policy record |
| Ambiguous result | Do not blindly retry | Manual review or reconciliation |

### Tool outputs are untrusted

Tool outputs are evidence, not instructions. An API response can be malformed, stale, partial, or malicious. The agent may reason over the result, but policy, validation, and guardrails decide whether it changes workflow state or triggers another action.

## Exam Signals

- "function call validation" -> tool gateway.
- "unauthorized tool" -> server-side authz.
- "duplicate side effect" -> idempotency.
- "mutating API" -> risk tier and approval.
- "audit log" -> execution boundary.
- "valid JSON but forbidden action" -> authorization/business rule failure.
- "tool credentials" -> server-side least privilege.
- "tool output prompt injection" -> output is untrusted data.

## Hands-on Checks

1. Write schemas for one read tool and one mutating tool.
2. Add validation, authorization, idempotency, and audit checks.
3. Classify tools as read-only, low-risk mutation, approval-required, or blocked.

---
capability: Tool Gateway and Function Runtime
status: populated
source_lens: general-study
---

# Tool Gateway and Function Runtime

## What to study first

- **Core idea:** You are building the execution boundary between model intent and real systems. The model proposes a tool call; the gateway validates schema, authorization, risk, idempotency, and audit before anything happens.
- **Study first:** Define tool schema, inputs, outputs, risk tier, and owner.
- Validate model-proposed arguments against schema and business rules.
- Authorize user/agent for the requested operation.
- Apply risk controls: read-only, mutating, high-impact, approval-required.
- Execute with timeouts, retries, idempotency keys, and error mapping.

## What You Are Building

You are building the execution boundary between model intent and real systems. The model proposes a tool call; the gateway validates schema, authorization, risk, idempotency, and audit before anything happens.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Not used for foundation training. Training jobs may call infrastructure APIs, but that is not model tool use. | No model-proposed tool execution |
| Fine-tune existing model | Tool traces can become tuning examples after curation. The gateway still enforces safety at runtime. | Curated trajectories or runtime tool boundary |
| Use existing model/API | Use if the model can call functions; otherwise endpoint calls may be enough. | Validated tool execution layer |
| Build agent/RAG application | Main lane: schemas, authz, business rules, risk tiers, idempotency, timeouts, audit. | Safe tool-call boundary |
| Operate, govern, and improve | Use tool traces to find duplicate side effects, auth gaps, timeout issues, and unsafe proposals. | Policy fixes and regression cases |

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

### Execution boundary details

| Control | What it prevents | Example |
|---|---|---|
| Schema validation | Bad shape or missing required fields | Missing account ID |
| Business validation | Domain-invalid action | Refund outside allowed window |
| Authorization | Correctly shaped but forbidden action | User edits another tenant's record |
| Least privilege | Broad credential blast radius | Tool can read invoices but not delete accounts |
| Idempotency key | Duplicate mutation after retry | Same refund submitted twice |
| Timeout budget | Runaway external call | Agent waits forever on CRM API |
| Error mapping | Confusing partial failures | External 409 becomes "needs reconciliation" |
| Audit record | Unexplainable side effect | No trace of who/model/tool changed data |

The gateway is where model intent becomes a real operation. Passing JSON schema is only the first gate; permission, risk, idempotency, and audit decide whether execution is allowed.

### Implementation card: tool execution boundary

```python
def execute_tool(proposal, user):
    schema.validate(proposal.name, proposal.arguments)
    authorize(user, proposal.name, proposal.arguments)
    business_rules.validate(proposal.name, proposal.arguments)

    risk = risk_tier(proposal.name, proposal.arguments)
    if risk == "approval_required":
        return review_queue.submit(proposal, user)

    key = idempotency_key(user.id, proposal.name, proposal.arguments)
    if result := idempotency_store.get(key):
        return result

    with audit_span("tool_call", tool=proposal.name, user=user.id) as span:
        result = tool_runtime.call(
            proposal.name,
            proposal.arguments,
            timeout_ms=tool_timeout(proposal.name),
        )
        span.set("status", result.status)
        idempotency_store.put(key, result)
        return sanitize_tool_output(result)
```

Tool metrics include schema-valid rate, authorization-denied rate, business-rule failure rate, duplicate-prevented count, timeout rate, side-effect success, audit completeness, and unsafe-tool-call catch rate.

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

---
service: Tool Gateway and Function Runtime
relevant_to: [AAI-GEN]
status: populated
---

# Tool Gateway and Function Runtime

## What to study first

- **Core idea:** Runtime enforcement for tools and functions.
- **Use it when:** The scenario mentions malformed parameters, API calls, state mutation, idempotency, permissions, or user confirmation.
- **Choose another path when:** Choose a neighboring service when the problem is model selection, data curation, or answer-quality benchmarking.
- **Concrete surface:** Access: Function calling, OpenAPI tools, MCP servers, API gateways, Lambda/functions, service brokers Inside: Schema validation, permission checks, risk scoring, rate limits, idempotency, audit logs, fulfillment I/O: Tool name, parameters, user/session identity, risk tier, schema, policy, idempotency key -> Tool result, refusal, approval request, retry, or compensating action
- **Real trap:** Giving the model credentials and trusting prompt instructions.

## At a glance

| | |
|---|---|
| **What it is technically** | The execution boundary where proposed tool calls become validated, authorized, logged API/function calls |
| **How you access it** | Function calling, OpenAPI tools, MCP servers, API gateways, Lambda/functions, service brokers |
| **Input** | Tool name, parameters, user/session identity, risk tier, schema, policy, idempotency key |
| **Output** | Tool result, refusal, approval request, retry, or compensating action |
| **Inside** | Schema validation, permission checks, risk scoring, rate limits, idempotency, audit logs, fulfillment |

```python
tool_call = validate_schema(name=requested_tool, arguments=args)
authorize(user, tool_call, scope="crm:update")
result = execute_with_idempotency(tool_call, key=request_id)
audit_log.write(user=user.id, tool=tool_call.name, result=result.status)
```

**Mental model**: the bouncer between model intent and real-world side effects.

## Study card data

- **What it is:** Runtime enforcement for tools and functions.
- **Lifecycle:** Tool execution
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions malformed parameters, API calls, state mutation, idempotency, permissions, or user confirmation.
- **Do not use it when:** Choose a neighboring service when the problem is model selection, data curation, or answer-quality benchmarking.
- **Common trap:** Giving the model credentials and trusting prompt instructions.
- **Recognition clues:** "The agent can update CRM records, issue refunds, or query sensitive systems."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Agent Toolkit functions + MCP | Tool and function integration around agent workflows. |
| AWS | Bedrock Agent action groups + Lambda | Action schemas, parameter elicitation, Lambda fulfillment, return control, and user confirmation. |
| Open source | MCP servers, OpenAPI tools, API gateways | Portable tool execution and validation boundaries. |

## Portable concepts

The model should propose actions; the runtime should enforce them.

Important controls:

- Validate tool name and parameters against schema.
- Check user identity and least-privilege permissions.
- Classify risk before execution.
- Require approval for high-risk actions.
- Use idempotency keys for retries.
- Log enough for audit and replay without leaking unnecessary sensitive data.
- Return structured errors that the orchestrator can handle.

## Decision guide

| Failure | Correct fix | Trap |
|---|---|---|
| Malformed tool args | Schema validation | Longer prompt only |
| Duplicate orders on retry | Idempotency key | Infinite retry |
| Unauthorized data access | Permission check before call | Final response filtering |
| Dangerous mutation | Approval before execution | Confirmation after success |
| Tool timeout | Retry policy by tool type | Retry everything blindly |

## High-yield signals

- "Function calling" -> tool gateway.
- "OpenAPI schema" -> tool definition.
- "Lambda fulfillment" -> action execution.
- "User confirmation" -> high-risk action boundary.
- "Idempotency" -> safe retries.

## Chapter notes

The tool gateway is the **execution-boundary chapter**. A model can propose a tool call, but the gateway decides whether that proposal is valid, authorized, safe, idempotent, and auditable. The central sentence to remember is: **the model proposes; the runtime enforces.**

```text
model proposal
  -> schema validation
  -> identity and permission check
  -> risk tier
  -> approval if needed
  -> idempotent execution
  -> structured result or refusal
  -> audit log
```

### Safety rules

Use different controls by tool type:

| Tool type | Example | Required controls |
|---|---|---|
| Read-only | `search_customer(id)` | schema, auth, tenant filter, logging |
| Low-risk write | `create_ticket(summary)` | schema, auth, idempotency, retry policy |
| High-risk mutation | `issue_refund(amount)` | schema, auth, risk score, human approval, audit |
| External side effect | `send_email(body)` | confirmation, rate limit, preview, rollback plan |

### Idempotency formula

```text
same_idempotency_key + same_tool + same_parameters -> same outcome
```

This prevents retry storms from creating duplicate orders, refunds, tickets, or emails. A tool that mutates state without idempotency is a production incident waiting to happen.

### Scenario drill

An agent issues two refunds because the first tool call timed out and the orchestrator retried it. The prompt was not the root problem. The gateway needed an idempotency key, timeout class, and replay-safe audit record. **Retries are only safe when the tool boundary makes them safe.**

## Hands-on checks

1. Define one read-only tool and one mutating tool. List validation, permission, logging, and retry controls for each.
2. Mark which tool calls require approval.

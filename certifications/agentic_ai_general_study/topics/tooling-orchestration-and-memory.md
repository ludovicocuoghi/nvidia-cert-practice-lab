---
domain: Tooling, Orchestration, and Memory
weight: 16
status: populated
---

# Tooling, Orchestration, and Memory

## What to study first

- **Core idea:** How agents coordinate tools, manage state, remember useful facts, recover from failures, and avoid unsafe side effects.
- **Use it when:** The scenario mentions tool schemas, function calls, retries, idempotency, memory, handoffs, or state.
- **Study first:** Tool schema vs authorization
- idempotency for retries with side effects
- working/session/long-term/audit memory boundaries
- tool outputs as untrusted data
- checkpoints and recovery for multi-step runs.
- **Real trap:** Treating prompt instructions as the control plane for real API calls.

## Concept ownership

This is the vendor-neutral home for tool schemas, tool gateways, function execution, retries, idempotency, state machines, memory scopes, checkpoints, and recovery. Vendor pages should explain how a platform exposes tools, state, and memory, not re-teach the full lifecycle pattern.

## Study card data

- **What it covers:** How agents coordinate tools, manage state, remember useful facts, recover from failures, and avoid unsafe side effects.
- **Lifecycle:** Agent runtime
- **Use this section when:** The scenario mentions tool schemas, function calls, retries, idempotency, memory, handoffs, or state.
- **Common trap:** Treating prompt instructions as the control plane for real API calls.
- **Recognition clues:** A model may propose a tool call, but the runtime must validate and authorize it.

### Key ideas

- **Orchestration** owns sequence and state.
- **Tool gateway** owns schema validation, permission, idempotency, and audit.
- **Memory** is scoped: working, session, long-term, semantic, and audit memory are different.
- **Retries** must respect side effects.
- **Human approval** belongs before high-risk mutation.

### Must know

- A **tool schema** says what arguments are expected; it does not prove the user is allowed to perform the action.
- **Authorization** answers "may this actor do this to this resource right now?"
- **Idempotency** prevents duplicate side effects when a retry happens, such as sending the same refund or order twice.
- **Working memory** is current task state; **session memory** lasts for the conversation; **long-term memory** stores scoped facts across sessions; **audit logs** are evidence, not personalization memory.
- **Tool outputs are untrusted data**. They can be stale, partial, malicious, or instruction-like, so the runtime must validate and route them through policy.
- **Checkpoints and recovery** matter when an agent runs across multiple steps: the system should know what happened, what can be retried, and what needs human reconciliation.

### Code anchor

```python
def execute_or_remember(event):
    if event.type == "tool_call":
        schema.validate(event.args)
        authorize(event.user, event.tool, event.args)
        return run_with_idempotency(event)
    if event.type == "memory_candidate":
        if event.consented and event.useful and not event.sensitive:
            return memory.upsert(event.to_record())
        return "do_not_store"
```

Tool metrics cover schema validity, authz denials, side-effect success, timeout rate, and duplicate prevention. Memory metrics cover helpful recall, stale recall, deletion success, and privacy incidents.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Orchestration | NeMo Agent Toolkit | Bedrock Agents, Step Functions | LangGraph, LlamaIndex |
| Tool execution | NeMo functions/MCP | Action groups, Lambda | MCP, OpenAPI, API gateways |
| Memory | NeMo Agent Toolkit memory | Session state, DynamoDB/OpenSearch | Redis, Postgres, vector stores |

### Decision guide

| Failure | Correct layer | Trap |
|---|---|---|
| Wrong tool params | Tool gateway | Prompt wording only |
| Duplicate order | Idempotency | Blind retry |
| Forgot result | Working memory | Larger model |
| Stale preference | Memory expiration | Keep forever |
| State chaos | Orchestrator | More agents |

### Hands-on checks

1. Mark which facts go into prompt state, working memory, long-term memory, retrieval, and audit.
2. Add idempotency and approval rules to one mutating tool.

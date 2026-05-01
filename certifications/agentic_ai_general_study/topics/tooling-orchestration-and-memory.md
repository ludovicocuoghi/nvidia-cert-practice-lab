---
domain: Tooling, Orchestration, and Memory
weight: 16
status: populated
---

# Tooling, Orchestration, and Memory

## Concept ownership

This is the vendor-neutral home for tool schemas, tool gateways, function execution, retries, idempotency, state machines, memory scopes, checkpoints, and recovery. Vendor pages should explain how a platform exposes tools, state, and memory, not re-teach the full lifecycle pattern.

## Study card data

- **What it covers:** How agents coordinate tools, manage state, remember useful facts, recover from failures, and avoid unsafe side effects.
- **Lifecycle:** Agent runtime
- **Use this section when:** The scenario mentions tool schemas, function calls, retries, idempotency, memory, handoffs, or state.
- **Common trap:** Treating prompt instructions as the control plane for real API calls.
- **Scenario signal:** A model may propose a tool call, but the runtime must validate and authorize it.

### Key ideas

- **Orchestration** owns sequence and state.
- **Tool gateway** owns schema validation, permission, idempotency, and audit.
- **Memory** is scoped: working, session, long-term, semantic, and audit memory are different.
- **Retries** must respect side effects.
- **Human approval** belongs before high-risk mutation.

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

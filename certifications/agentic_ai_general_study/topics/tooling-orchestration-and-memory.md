---
domain: Tooling, Orchestration, and Memory
weight: 16
status: populated
---

# Tooling, Orchestration, and Memory

## Actual implementation / Pattern you use

```yaml
workflow:
  _type: react_agent
  max_steps: 8
  stop_when: evidence_complete_or_human_escalated

tools:
  refund_order:
    schema: { order_id: string, amount: number, reason: string }
    requires: [authenticated_user, policy_checked, amount_under_limit]
    side_effect: true
    retry: idempotency_key_required

memory:
  working: current_task_state
  session: conversation_preferences
  long_term:
    write_policy: consented_useful_non_sensitive
    recall_policy: relevance_recency_permission
```

| Runtime layer | Owns | Right-answer signal |
|---|---|---|
| Orchestrator | Sequence, state, checkpoints, retries, stopping criteria | Multi-step work must resume, retry, or hand off safely |
| Tool gateway | Schemas, authz, idempotency, sandboxing, output shaping | The model proposes calls, but code validates and executes them |
| Memory store | Working/session/long-term/entity/semantic memory policy | The agent must remember useful facts without storing sensitive or stale data |
| Audit trace | Tool calls, decisions, retrieved evidence, policy versions | The system must explain or replay what happened |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Agent Development | Covers tool schemas, APIs, structured outputs, orchestration, retries, and error handling. |
| Cognition, Planning, and Memory | Covers working/session/long-term memory, state, stopping criteria, and reflection loops. |
| Safety, Ethics, and Compliance | Shows why tool execution needs deterministic validation, permissions, and least privilege. |
| Agent Architecture and Design | Connects tool/memory decisions to routers, workflows, supervisors, and multi-agent handoffs. |

## What to study first

- **Core idea:** How agents coordinate tools, manage state, remember useful facts, recover from failures, and avoid unsafe side effects.
- **Use it when:** The scenario mentions tool schemas, function calls, retries, idempotency, memory, handoffs, or state.
- **Study first:** Tool schema vs authorization, then the orchestration pattern that controls the tool call.
- **ReAct boundary:** ReAct decides the next action from observations; the tool gateway still validates schema, authorization, permissions, and side effects.
- **Workflow boundary:** Deterministic workflows are better when the tool sequence is fixed, audited, or high-risk.
- **Router boundary:** Route simple, RAG, tool-heavy, and human-review tasks before paying for full agent reasoning.
- **Retry boundary:** Retrying reads is different from retrying writes; mutating tools need idempotency keys, checkpoints, and reconciliation.
- **Memory boundary:** Working, session, long-term, semantic/entity, retrieval, and audit memory have different retention and consent rules.
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
- **ReAct** is a reasoning/action loop around observations; it is not the same thing as a tool gateway.
- **Plan-and-execute** needs an explicit replanning trigger when observations invalidate the plan.
- **Routers** choose simple answer, RAG, tool workflow, full agent, or human review before the expensive path starts.
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

### Orchestration patterns to recognize

| Pattern | What it controls | Use when | Avoid this trap |
|---|---|---|---|
| Deterministic workflow | Fixed nodes, state transitions, and approvals | Process is known, regulated, or audit-heavy | Open-ended ReAct for a known sequence |
| ReAct loop | Thought -> Action -> Observation loop | Next action depends on live tool/retrieval results | Infinite loop without max steps, budgets, or critic |
| Plan-and-execute | Plan first, execute, then replan if facts change | Subgoals are predictable but observations may invalidate later steps | Continuing a stale plan |
| Router | Intent/risk/evidence classifier | Workload mixes simple answers, RAG, tools, and human review | One full agent path for every request |
| Supervisor | Central state owner for multiple agents | Roles have different permissions, expertise, or audit needs | Peer agents with no shared state or owner |
| Human approval workflow | Explicit gate before risky action | Mutation, regulated decision, or uncertain evidence | Asking the model to "be careful" |

### Deep dive: tool and memory controls

| Control | What it prevents | Exam trap |
|---|---|---|
| Tool schema | Wrong tool name or malformed arguments | "Improve the prompt" instead of rejecting invalid calls |
| Authorization | A valid-looking call by the wrong actor | Treating schema validation as permission |
| Tool preconditions | Actions before required state exists | Hiding tools with vague descriptions |
| Idempotency key | Duplicate side effects after retry | Blind retries for payments, refunds, or writes |
| Output shaping | Raw JSON context bloat and untrusted instructions | Dumping full API payloads into the prompt |
| Memory write gate | PII, stale facts, or unconsented preferences | Saving everything because it may be useful |
| Checkpointed state | Lost progress after timeout or failure | Stateless prompt chains for long-running tasks |

### Memory placement guide

| Fact type | Put it in | Reason |
|---|---|---|
| Current step and tool observations | Working memory | Needed now, should expire with the task |
| Current conversation preference | Session memory | Useful for the session but not always permanent |
| Consented persistent preference | Long-term or entity memory | Needs recall across sessions with delete/review controls |
| Enterprise policy document | Retrieval index | Source-grounded, current, permission-filtered knowledge |
| Compliance evidence | Audit log | Immutable trace, not personalization memory |

### Hands-on checks

1. Mark which facts go into prompt state, working memory, long-term memory, retrieval, and audit.
2. Add idempotency and approval rules to one mutating tool.

---
service: Memory Store
relevant_to: [AAI-GEN]
status: populated
---

# Memory Store

## What to study first

- **Core idea:** The lifecycle component for state and recall.
- **Use it when:** The scenario mentions prior tool results, user preferences, repeated failures, stale memory, or cross-session recall.
- **Choose another path when:** Choose a knowledge retrieval/RAG pipeline when the system needs source-grounded enterprise documents with citations and ACL filtering.
- **Concrete surface:** Access: Agent runtime state, checkpoints, databases, vector stores, key-value stores, profile services Inside: Working memory, episodic memory, semantic memory, profile memory, retention, consent, deletion I/O: Observations, tool results, user-approved preferences, session summaries, expiration rules -> Relevant state recalled into the agent workflow with provenance and freshness constraints
- **Real trap:** Storing every observation forever.

## At a glance

| | |
|---|---|
| **What it is technically** | Scoped storage and retrieval for task state, session facts, user preferences, long-term memories, and audit records |
| **How you access it** | Agent runtime state, checkpoints, databases, vector stores, key-value stores, profile services |
| **Input** | Observations, tool results, user-approved preferences, session summaries, expiration rules |
| **Output** | Relevant state recalled into the agent workflow with provenance and freshness constraints |
| **Inside** | Working memory, episodic memory, semantic memory, profile memory, retention, consent, deletion |

```python
memory.put(
    user_id=user.id,
    key="seat_preference",
    value="aisle",
    ttl_days=365,
    consent=True,
)
state = memory.recall(user_id=user.id, purpose="booking", max_items=5)
```

**Mental model**: what the agent is allowed to remember, for how long, and why.

## Study card data

- **What it is:** The lifecycle component for state and recall.
- **Lifecycle:** Memory and state
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions prior tool results, user preferences, repeated failures, stale memory, or cross-session recall.
- **Do not use it when:** Choose a knowledge retrieval/RAG pipeline when the system needs source-grounded enterprise documents with citations and ACL filtering.
- **Common trap:** Storing every observation forever.
- **Recognition clues:** "The assistant should remember a user's seating preference but forget one-time trip details."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Agent Toolkit memory module | Memory integration around agent workflows. |
| AWS | Bedrock Agent session state + DynamoDB/OpenSearch | Session and durable storage patterns for managed agent applications. |
| Open source | LangGraph checkpoints, Redis, Postgres, vector stores | Working state, checkpointing, profile memory, and semantic recall. |

## Portable concepts

Memory is not one bucket:

- **Prompt state**: visible in the current model call.
- **Working memory**: task state for the current run.
- **Session memory**: facts for this conversation.
- **Long-term profile memory**: durable user or business preferences.
- **Semantic memory**: reusable facts retrieved by meaning.
- **Audit log**: evidence for what happened, not necessarily prompt context.

Every memory needs purpose, retention, consent, and freshness checks.

## Decision guide

| Requirement | Memory type | Trap |
|---|---|---|
| Current tool result | Working memory | Forgetting observation |
| User preference | Long-term profile memory with consent | Storing sensitive one-off data |
| Conversation summary | Session memory | Replaying all raw turns forever |
| Enterprise docs | Retrieval pipeline | User memory |
| Compliance replay | Audit log | Prompt memory |

## High-yield signals

- "Forgot previous step" -> working memory.
- "Remember preference" -> profile memory.
- "Stale fact" -> expiration/freshness.
- "Private source docs" -> RAG, not memory.
- "Explain decision later" -> audit log.

## Chapter notes

The memory store is the **state and recall chapter**. It answers what the agent may remember, where it stores that memory, how long it lasts, whether the user consented, and whether the memory is still safe to use. The common mistake is to call every stored thing "memory." In real systems, working state, profile preferences, semantic memory, retrieval knowledge, and audit logs have different jobs.

```text
current turn prompt
  -> working state for this task
  -> session summary
  -> long-term profile memory
  -> semantic memory
  -> audit log
```

### Memory selection table

| Need | Store | Recall rule |
|---|---|---|
| Continue a multi-step workflow | working memory/checkpoint | current task only |
| Remember user preference | profile memory | consent + purpose match |
| Reuse learned fact by meaning | semantic memory | similarity + freshness |
| Answer from enterprise documents | retrieval index | ACL + citation required |
| Explain what happened later | audit log | not automatically prompt context |

### Freshness rule

```text
usable_memory =
  relevant
AND permitted
AND not_expired
AND purpose_matches
AND not_contradicted_by_newer_source
```

**Memory should be useful and allowed, not just available.** A stale preference can be worse than no preference because it feels confident while being wrong.

### Scenario drill

A travel assistant remembers "aisle seat" for a year but forgets "trip to Berlin next Tuesday" after the trip ends. That is correct: the seat preference is durable profile memory, while the trip detail is temporary session/task state. If the assistant needs airline policy text, that is RAG, not memory.

## Hands-on checks

1. Classify ten facts into working, session, long-term, semantic, retrieval, or audit storage.
2. Add one retention rule and one deletion rule to each memory type.

---
service: Memory Store
relevant_to: [AAI-GEN]
status: populated
---

# Memory Store

## At a glance

| | |
|---|---|
| **What it is technically** | Scoped storage and retrieval for task state, session facts, user preferences, long-term memories, and audit records |
| **How you access it** | Agent runtime state, checkpoints, databases, vector stores, key-value stores, profile services |
| **Input** | Observations, tool results, user-approved preferences, session summaries, expiration rules |
| **Output** | Relevant state recalled into the agent workflow with provenance and freshness constraints |
| **Inside** | Working memory, episodic memory, semantic memory, profile memory, retention, consent, deletion |

**Mental model**: what the agent is allowed to remember, for how long, and why.

## Study card data

- **What it is:** The lifecycle component for state and recall.
- **Lifecycle:** Memory and state
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions prior tool results, user preferences, repeated failures, stale memory, or cross-session recall.
- **Do not use it when:** The system needs source-grounded enterprise documents; that is retrieval.
- **Common trap:** Storing every observation forever.
- **Scenario signal:** "The assistant should remember a user's seating preference but forget one-time trip details."

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

## Hands-on checks

1. Classify ten facts into working, session, long-term, semantic, retrieval, or audit storage.
2. Add one retention rule and one deletion rule to each memory type.

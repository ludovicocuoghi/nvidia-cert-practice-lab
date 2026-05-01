---
capability: Memory Store
status: populated
source_lens: general-study
---

# Memory Store

## What You Are Building

You are building scoped memory for agent/user state: current task state, session facts, reusable preferences, episodic history, semantic facts, expirations, and deletion controls.

## Pipeline

1. Classify memory type: working, session, episodic, semantic, preference, audit.
2. Decide what may be stored, for whom, why, and for how long.
3. Extract candidate memories from interactions or tool results.
4. Validate usefulness, consent, sensitivity, and freshness.
5. Store with scope, source, timestamp, expiration, and deletion key.
6. Retrieve memory only when relevant to the task and user.
7. Evaluate helpfulness and harm.

## Core Concepts

- Memory stores agent/user state; RAG retrieves external knowledge.
- Working memory is short-lived task state.
- Long-term memory needs consent, relevance, and deletion.
- Stale memory can be harmful.
- Audit logs are not the same as user memory.
- Episodic memory stores past interaction summaries; semantic memory stores durable facts; preference memory stores user-specific choices.
- Memory retrieval should be scoped by user, tenant, task, freshness, consent, and sensitivity.
- Memory writes need extraction, validation, and sometimes human/user confirmation, not automatic storage of every chat turn.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "remember user preference" | scoped preference memory | store everything |
| "tool result in same task" | working/session state | long-term memory |
| "company policy docs" | RAG, not memory | personal memory store |
| "delete my memory" | deletion key and purge path | hidden retention |
| "stale preference" | freshness/expiration | blind recall |
| "what did this agent already do in the task" | working/session state | long-term semantic memory |
| "remember across sessions" | consented long-term memory with scope | saving raw transcripts |
| "explain historical actions" | audit log/trace | editable user memory |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Memory equals retrieval | Memory is personal/task state; retrieval grounds external docs. |
| Store everything for personalization | Over-collection creates privacy and quality risk. |
| Recent is always relevant | Retrieval should be scoped to the current task. |
| Audit log is memory | Audit logs are compliance evidence; user memory is task/personal recall. |
| Memory bypasses permission checks | Memory still needs tenant/user/sensitivity scope and deletion controls. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| Vector/DB store | semantic memory | Recall by meaning with metadata. |
| App DB | preferences/session state | Explicit scoped facts. |
| Logs | audit trail | Compliance evidence, not user memory. |
| Agent runtime | working memory/state object | Current task state passed between nodes. |

## Deep Dive

### Where it sits in the lifecycle

Memory is the **state and personalization layer** for agents. It is not the enterprise knowledge base.

```text
[Current task state] -> [Session memory] -> [Curated long-term memory]
        -> [Scoped retrieval] -> [Deletion/expiry/audit]
```

### Memory type map

| Type | What it stores | Wrong use |
|---|---|---|
| Working memory | Current task state inside one run | Long-term personalization |
| Session memory | Conversation-local facts | Permanent enterprise policy |
| Episodic memory | Summaries of prior interactions | Raw sensitive transcripts forever |
| Semantic memory | Durable user/task facts | Changing product docs |
| Preference memory | User choices and defaults | Regulated secrets |
| Audit log | Governance evidence | User-facing recall memory |

### Memory vs RAG

| Scenario clue | Think | Avoid |
|---|---|---|
| "User prefers Japanese" | Preference memory | RAG index |
| "Where did this task stop?" | Working/session memory | Training data |
| "Latest HR policy" | RAG with ACL and source date | Long-term memory |
| "Delete my saved preferences" | Memory governance | Hiding from prompt only |
| "Audit who approved this" | Trace/log/governance | Personalization memory |

### Write policy

Every memory write should answer:

- Who is it about, and did they consent?
- What source supports it?
- Why is it useful for future behavior?
- How sensitive is it, who may retrieve it, and when does it expire?
- How is it corrected, deleted, and audited?

The exam trap is "store all conversation history." The better answer is scoped, consent-aware, freshness-aware memory.

## Exam Signals

- "user preference" -> memory store.
- "external docs" -> RAG.
- "task progress" -> working/session memory.
- "forget/delete" -> memory governance.
- "stale memory" -> expiration/freshness.
- "company docs" -> RAG, not memory.
- "audit evidence" -> trace/log, not personalized recall.
- "consent and deletion" -> long-term memory governance.

## Hands-on Checks

1. Classify facts into prompt state, session memory, long-term memory, audit log, or RAG.
2. Define memory metadata fields: scope, source, timestamp, consent, expiration.
3. Write a deletion flow for user memory.

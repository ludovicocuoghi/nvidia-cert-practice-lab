---
capability: Memory Store
status: populated
source_lens: general-study
---

# Memory Store

## What to study first

- **Core idea:** You are building scoped memory for agent/user state: current task state, session facts, reusable preferences, episodic history, semantic facts, expirations, and deletion controls.
- **Study first:** Classify memory type: working, session, episodic, semantic, preference, audit.
- Decide what may be stored, for whom, why, and for how long.
- Extract candidate memories from interactions or tool results.
- Validate usefulness, consent, sensitivity, and freshness.
- Store with scope, source, timestamp, expiration, and deletion key.

## What You Are Building

You are building scoped memory for agent/user state: current task state, session facts, reusable preferences, episodic history, semantic facts, expirations, and deletion controls.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Not used. Memory is runtime state, not pretraining data. | No memory store |
| Fine-tune existing model | User memories should not be dumped into tuning. Only curated, consented, de-identified examples may become training data. | Optional curated examples |
| Use existing model/API | Use for scoped preferences or session state when a simple app needs continuity. | Preference/session memory |
| Build agent/RAG application | Main lane: working/session/long-term/audit memory boundaries, consent, freshness, deletion. | Scoped memory records |
| Operate, govern, and improve | Monitor stale recall, privacy incidents, deletion success, and harmful memory injection. | Memory policy fixes |

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

### Memory write examples

| Candidate fact | Store where | Why |
|---|---|---|
| "The user asked to compare two invoices in this run" | Working memory | Needed only until the task finishes |
| "The user prefers concise answers" | Long-term preference memory, if consented | Useful across sessions and low sensitivity |
| "The user pasted an access token" | Do not store as memory; handle as secret | Sensitive and not useful personalization |
| "The current task already submitted refund request R-17" | Working/session state plus audit log | Prevents duplicate side effects |
| "The company vacation policy changed today" | RAG knowledge index | External document, not personal memory |
| "Reviewer Alice approved the refund" | Audit/governance log | Compliance evidence, not user preference |

Good memory systems are selective. They write facts only when they are useful, scoped, supported by a source, allowed by policy, and retrievable without violating privacy or freshness.

### Implementation card: memory write policy

```python
def maybe_write_memory(candidate, user, task):
    checks = {
        "consented": user.memory_enabled,
        "useful_later": usefulness_score(candidate, task) >= 0.8,
        "not_secret": not contains_secret(candidate.text),
        "not_high_risk_pii": not contains_high_risk_pii(candidate.text),
        "supported": candidate.source is not None,
    }
    if not all(checks.values()):
        return {"stored": False, "reason": failed_checks(checks)}

    return memory_store.upsert({
        "user_id": user.id,
        "scope": candidate.scope,
        "text": candidate.normalized_text,
        "source": candidate.source,
        "created_at": now(),
        "expires_at": candidate.expires_at,
        "deletion_key": f"user:{user.id}:memory",
    })
```

Memory evals measure helpful recall rate, irrelevant-memory injection rate, stale-memory rate, deletion success, consent compliance, and privacy incidents. There is no generic "memory loss" unless you are training an extractor or retriever; the application gate is behavioral.

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

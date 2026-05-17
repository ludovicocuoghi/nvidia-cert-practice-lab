---
domain: Cognition, Planning, and Memory
weight: 10
status: populated
---

# Cognition, Planning, and Memory

## What to study first

- **Core idea:** Understand ReAct, **plan-and-execute**, **reflection**, task decomposition, **short-term memory**, and **long-term memory**.
- **Use it when:** Study this when the agent must reason across steps, remember user preferences, or recover from bad plans.
- **Study first:** ReAct (Reasoning + Acting): interleaved cycle — Thought → Action → Observation → Thought. Enables dynamic adaptation to tool results. Best for external tools, real-time data, and iterative refinement. Key advantage over CoT: incorporates live feedback.
- Chain-of-Thought (CoT): outputs intermediate reasoning steps without acting. Best for: pure reasoning tasks (math, logic, deduction) that can be solved without external tools. Cannot call tools or adapt to feedback — that's the key limitation.
- Tree-of-Thought: explores multiple reasoning branches, evaluates, prunes. Best for: puzzle-like tasks, scheduling with many constraints, branching scenarios. Higher cost but justified when many candidate paths exist.
- Plan-and-execute with re-planning: create initial plan → execute steps → if observation contradicts assumption → re-plan. Missing **re-planning trigger** = decision trap.
- Re-planning trigger: must fire when tool observations contradict plan assumptions or fail preconditions — NOT "increase iterations" or "try harder."
- **Real trap:** Memory is not automatically trustworthy. Store only useful, permission-safe facts and retrieve them with relevance checks.

## Certification boundary

This page is the NCP-AAI exam lens for reasoning, planning, and memory. Keep portable concepts only at the depth needed for the certification. The reusable concept home is `Agentic AI General Study -> Tooling, Orchestration, and Memory` plus `Agent Lifecycle and Architecture`; NVIDIA-specific implementation cues stay here.

## General Study first

Read `Agentic AI General Study -> Tooling, Orchestration, and Memory`, `Agentic AI General Study -> Memory Store`, and `Agentic AI General Study -> Agent Lifecycle and Architecture`. Use this overlay to answer official-domain questions about ReAct, planning, replanning, task decomposition, short-term state, long-term memory, episodic/semantic/entity memory, and memory safety.

## Core ideas you must hold in your head

- **ReAct > CoT** when tools are involved. Chain-of-Thought reasons but doesn't act. ReAct reasons → acts → observes → reasons again. The exam tests this distinction explicitly.
- **Memory types** — using the wrong type is a trap. **Short-term/working memory** ≠ **long-term/semantic memory** ≠ **entity memory**. The exam expects you to match memory type to scenario.
- **Revisable plans** — plans must adapt when tool results contradict assumptions, not continue blindly. Re-planning triggers are an exam favorite.
- **Memory governance** — memory needs governance, not just storage. **Retention** policies, **expiry**, user controls, **sensitivity labels**, **consent** — "store everything forever" is always wrong.

## Mental model

Cognition, Planning, and Memory covers **how agents think, plan, and remember**:
```
[Observation] → [Working memory (current context)]
     ↓
[Retrieve relevant long-term memories] → [Plan/reason] → [Act] → [Observe result]
     ↓                                                    ↓
[Store important facts to long-term]        [Re-plan if observations contradict plan]
```

## Reasoning frameworks

### Chain-of-Thought (CoT)
- Model is prompted to reason through intermediate steps before final answer; in production UIs, expose only a concise rationale or evidence summary, not raw hidden reasoning
- **Best for**: Math problems, logical reasoning, multi-step deduction — where reasoning alone (no tools) can solve
- **Limitation**: Cannot incorporate real-time feedback from tools or external systems
- **Exam signal**: CoT for pure step-by-step reasoning problems; transparency should be a summarized rationale, not a **raw chain-of-thought** dump

### ReAct (Reasoning + Acting)
- Interleave reasoning, tool calls, and observations
- Loop: reason about next step → Action → Observation → update plan → Action → ...
- **Best for**: Tasks requiring external tool use, real-time data, iterative refinement
- **Core advantage over CoT**: Incorporates real-time feedback from external tools into reasoning loops
- **Exam signal**: "Interleaving tool actions and observations, then updating the plan based on observations" is the canonical ReAct description

### Tree-of-Thought / search-style planning
- Explore multiple reasoning branches, evaluate, prune
- **Best for**: Puzzle-like tasks, scheduling with many constraints, branching scenarios
- **Trade-off**: Higher cost but justified when many candidate paths and constraints exist
- **Not**: pure **retrieval** (can't reason), first-valid answer (suboptimal), one-shot answer (misses search space)

### Task decomposition
- Break complex goals into subgoals, assign tools/agents to each
- **Best for**: Multi-step workflows (plan, assign, notify), data processing pipelines
- Contrast with: monolithic single prompt, trying everything in parallel without structure

### Heuristic search
- Use **evaluation** function to explore possible plans, select efficient one
- **Best for**: Choosing between multiple plans with different resource/time trade-offs
- **Not**: **episodic memory** recall (retrieves past, doesn't search future), reactive planning, rule-based forward chaining

### Probabilistic reasoning
- Make decisions under uncertainty by estimating likelihoods and expected outcomes
- **Best for**: Incomplete information, future uncertainties
- **Not**: deductive reasoning (needs complete info), rule-based pattern matching

### BDI (Belief-Desire-Intention)
- Beliefs (world model) → Desires (goals) → Intentions (committed plans)
- Enables adaptive reasoning by updating beliefs and revising intentions
- **Best for**: Long-term autonomy with changing environment

## Planning strategies

### Plan-and-execute with re-planning
- Create initial plan → execute steps → if observation contradicts assumption → re-plan
- **Missing re-planning trigger** = agent continues with invalid plan. This is an decision trap scenario.
- **Contingency planning**: Anticipate alternative paths, recalculate based on updated state

### Hierarchical Task Network (HTN) Planning
- Break high-level goals into subtasks, sequence them logically
- **Best for**: Structured multi-step workflows (warehouse picking, assembly)
- Contrast with: random walk, greedy best-first (no hierarchy), backward chaining alone

### Goal-based planning with symbolic representations
- Explicitly represent task goals and dependencies
- **Best for**: Multi-step operations where tasks feed into each other (scheduling, trip planning)
- Contrast with: memoryless/single-turn heuristics, reactive planning from user messages, randomized generation

### Logic trees with state tracking
- Structured branching with intermediate state
- Each choice affects next action, state tracked across branches
- **Best for**: Decision-making with dependencies between steps

## Memory architecture

### Memory types and when each is the right answer

| Memory type | What it stores | Exam scenario |
| ----------- | -------------- | ------------- |
| **Short-term / working memory** | Current conversation turns, session state | "Remember user's name during this chat" |
| **Long-term / episodic memory** | Past interactions, user preferences across sessions | "Remember user prefers Japanese summaries across weeks" |
| **Semantic memory** | Distilled general knowledge from past experiences | "Know that user typically asks about billing on Mondays" |
| **Entity memory** | Facts about specific entities (customer, account) | "Store facts about customer account #12345 used across workflows" |
| **Procedural memory** | How to perform tasks, skill sequences | "Know the steps to process a refund" |

### Hybrid memory: the standard correct answer

- **Short-term buffer** (sliding window of recent turns) + **long-term vector store** (semantic **retrieval** with **recency/relevance scoring**)
- Short-term handles immediate coherence; long-term handles cross-session recall
- **Key features**: Deduplication, eviction policies, recency decay, time-aware **retrieval**
- **Not**: storing everything in context window (bloat), storing only last N turns (loses context), pinning only first message

### Scratchpad vs long context vs KV cache

Long context is not the same as reliable working memory. A model can technically receive a value in a huge context and still fail to attend to it later, especially when the value is buried in the middle of a long trace. Use a structured scratchpad for intermediate results the workflow must retrieve by name.

| Need | Right primitive | Avoid |
|---|---|---|
| Carry a calculated value from step 3 to step 8 | Structured scratchpad or task-state field such as `step_3_total` | Hoping the value remains salient in a 200k-token context |
| Keep conversation coherence for this session | Working memory / short-term buffer | Long-term vector memory for every turn |
| Remember prior sessions or user history | Episodic/entity memory with consent and retention | KV cache or current context window |
| Improve serving throughput for repeated prefix tokens | KV/prefix caching in the inference layer | Treating KV cache as durable user memory |

Exam cue: if the stem says the agent **forgets intermediate results**, the fix is usually structured working memory or scratchpad state. Bigger context or bigger KV cache may help serving mechanics, but it does not create durable, addressable task memory.

### Memory governance

- **Write filters**: Not everything should be stored — relevance and sensitivity checks
- **Retention/expiry rules (TTL)**: Memory should not live forever by default
- **Sensitivity labels**: Prevent **sensitive data** from being retrieved inappropriately
- **User controls**: Visibility into stored memory, ability to correct or delete
- **Consent flags**: Track what user has consented to store
- **Structured entries** (key-value + timestamps + source + version): Supports auditing, conflict resolution, **hard delete**/redaction
- **Task-scoped retrieval**: Only retrieve memories relevant to current task, not everything

### Loop detection and recovery

- **Short-term state buffer**: Detect repeated actions/states → force query reformulation, alternative tools, or termination
- **Reflection/critic step**: Evaluate whether previous actions succeeded → change strategy if looping
- "Increase max iterations" makes loops worse

### What to do when the agent gets stuck

| Symptom | Likely missing piece | Best next design move |
| ------- | -------------------- | --------------------- |
| Same tool called repeatedly with same arguments | Progress detector and handled-observation state | Store tool-call signature + observation ID; block exact repeats unless a new fact changed |
| Tool returns valid data but agent does not finish | Evidence sufficiency or stop condition | Add "goal reached" and "all required fields collected" checks |
| Plan keeps executing after a contradiction | Re-planning trigger | Replan when observations invalidate assumptions or preconditions |
| Agent forgets intermediate result after retry | Checkpointed working memory | Save step outputs in task state before moving to next node |
| Agent is unsure but keeps searching | Escalation/confidence threshold | Stop, ask clarification, or route to human review |

Exam shorthand: loops are fixed by state, stop conditions, reflection, and escalation. They are not fixed by more context, higher temperature, or larger max-iteration limits.

## Reasoning adaptation

### Meta-reasoning / feedback-based reasoning adaptation
- Agent monitors outcomes → recognizes patterns → adjusts strategy
- Examples: Preemptively clarifying vague inputs that previously caused confusion; switching from default strategy to rule-based constraints after failures
- **Exam signal**: "The agent improves by recognizing a pattern from prior interactions and adapting its strategy"

### Clarification strategy
- **Ask when**: Required inputs missing AND tool calls would be ambiguous or high-cost
- **Use tools when**: Factual uncertainty can be resolved by **retrieval/API**
- **Not**: never asking (wrong actions), always asking (hurts UX), guessing missing high-impact fields (unsafe)

## Decision traps worth remembering

1. **"CoT for everything."** CoT can't call tools. When the task needs external data or APIs, ReAct is the answer.

2. **"Store everything forever."** No governance, no **expiry**, no user controls — this is always the wrong answer for memory management.

3. **"Context window is memory."** Context windows don't persist across sessions. They're not a memory solution; they're a constraint to manage.

4. **"Hardcoded static plans."** Plans must be revisable when observations contradict assumptions. Static plan + invalidated step = wrong answer.

5. **"More iterations fixes loops."** **Loop detection** and **reflection** fix loops. More iterations prolong them.

6. **"Randomness/creativity for consistency."** Higher temperature, nucleus sampling, random prompt shuffling all worsen consistency — not fix it.

7. **"First-valid answer for constraint problems."** Tree-of-thought/search is expected when many branches and constraints exist.

8. **"Discard old context entirely."** The fix is **hybrid memory** with **retrieval**, not amnesia. Keep only last N turns is the wrong answer when cross-session context matters.

## Must-know exam bullets

- **ReAct** — interleaves thought → action → observation → thought, enables dynamic adaptation to tool results
- **CoT** — outputs intermediate steps without acting; best for pure reasoning tasks (math, logic)
- **Tree-of-thought** — explores branches; justified when many constraints and candidate paths exist
- **Hybrid memory** — short-term buffer + long-term vector store with **recency/relevance scoring**
- **Entity memory** — keyed by ID with access controls and update history; for customer/account facts across workflows
- **Re-planning trigger** — on contradicting observations; **plan-and-execute** must adapt, not plow forward
- **Loop detection** — via state buffer + **reflection** step, not "increase iterations"
- **Memory governance**: **TTL**, **consent**, user controls, **sensitivity labels**, task-scoped **retrieval**, **hard delete**
- **Meta-reasoning** — adjusts behavior based on feedback loops, learning from prior interaction patterns
- **Structured memory entries** (key-value + timestamps + source + version) — for audit, conflict resolution, **privacy** compliance

## Hands-on checks / study prompts

1. When would you pick ReAct over CoT — what's the single deciding factor?
2. Design a **hybrid memory** architecture for an agent that needs both session coherence and cross-session personalization.
3. What three controls does **memory governance** require beyond storage?
4. An agent creates a plan, step 3's tool result contradicts an assumption, but it continues. What's missing?
5. What's the difference between **episodic memory** and **semantic memory** in agent context?

## Mock signals

Across the mock exams, cognition questions repeatedly test these durable ideas:

- **ReAct vs. CoT**: use ReAct when tools and observations drive the next step; use CoT-style prompting for pure reasoning tasks.
- **Hybrid memory**: short-term/session state plus long-term vector or structured memory with recency, relevance, and governance.
- **Re-planning**: plans must change when tool observations contradict assumptions.
- **Governed persistence**: **consent**, **TTL**, **provenance**, **sensitivity labels**, user updates, and deletion matter as much as recall.
- **Search-style planning**: tree-of-thought, heuristic search, and logic trees are for branching constraint problems.
- **Loop recovery**: detect repeated states, add **reflection/critic** checks, and terminate or reformulate rather than increasing iteration limits.

Evidence source: `mock_1` through `mock_5`, especially memory, ReAct/CoT, replanning, **loop detection**, and structured planning questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 10%
- **What it covers:** Understand ReAct, **plan-and-execute**, **reflection**, task decomposition, **short-term memory**, and **long-term memory**.
- **Use this section when:** Study this when the agent must reason across steps, remember user preferences, or recover from bad plans.
- **Common trap:** Memory is not automatically trustworthy. Store only useful, permission-safe facts and retrieve them with relevance checks.
- **Recognition clues:** The agent must adapt across steps, remember relevant state, or recover from contradictory observations instead of repeating a stale plan.

### Study notes

- ReAct interleaves reasoning and acting; **plan-and-execute** makes a plan first; **reflection** critiques or repairs strategy after feedback.
- **Short-term/working memory** tracks current task state. **Long-term memory** should store useful, permission-safe facts with **retrieval**, **consent**, and expiration logic.
- Memory can poison future behavior if it is stale, unverified, sensitive, or over-collected.
- **Short-term memory** = conversation context in the current window. Handles immediate coherence (user's name this session, last question asked). Lost when session ends unless explicitly promoted.
- **Working memory** = scratchpad for the current task. Includes partial results, tool call outputs, task progress, and the current plan step. Managed actively by the agent during execution. Must be checkpointed for failure recovery.
- **Long-term memory** = persistent store (vector database or structured DB) with **retrieval**. Cross-session facts, user preferences, learned patterns. Needs write filters (what to store), **relevance scoring** (what to retrieve), and **expiry** rules (when to forget).
- **Memory write policies**: Store facts that are (a) explicitly stated by the user, (b) observed across multiple sessions (corroborated), (c) relevant to future interactions. Do NOT store: transient chit-chat, **sensitive data** without **consent**, raw conversation logs.
- **Retrieval strategies**: (1) **Relevance scoring** — embed the current context and retrieve top-k by similarity. (2) **Recency boost** — apply a time-decay multiplier so recent facts rank higher. (3) **Task-scoped filtering** — only retrieve memories tagged with the current task domain. (4) **Sensitivity gating** — exclude memories with **sensitivity labels** the current user cannot access.
- **Expiry rules**: Default **TTL** for different memory types (e.g., browsing preferences = 30 days, account settings = indefinite with **consent**). **Staleness detection** — if a memory has not been accessed or confirmed recently, deprecate it. Hard-delete on user request or policy expiration.
- **Reflection/critic loops**: After each action, a **critic** module evaluates: (a) Did the action succeed? (b) Is the agent looping (same action, same result, no progress)? (c) Should the strategy change? If repeated failures are detected, the **reflection** loop forces: query reformulation, tool switch, or escalation to human. The **critic node** also decides when enough evidence has been collected — preventing premature decisions.

### Must know

- **ReAct (Reasoning + Acting)**: interleaved cycle — Thought → Action → Observation → Thought. Enables dynamic adaptation to tool results. Best for external tools, real-time data, and iterative refinement. Key advantage over CoT: incorporates live feedback.
- **Chain-of-Thought (CoT)**: outputs intermediate reasoning steps without acting. Best for: pure reasoning tasks (math, logic, deduction) that can be solved without external tools. Cannot call tools or adapt to feedback — that's the key limitation.
- **Tree-of-Thought**: explores multiple reasoning branches, evaluates, prunes. Best for: puzzle-like tasks, scheduling with many constraints, branching scenarios. Higher cost but justified when many candidate paths exist.
- **Plan-and-execute with re-planning**: create initial plan → execute steps → if observation contradicts assumption → re-plan. Missing **re-planning trigger** = decision trap.
- **Re-planning trigger**: must fire when tool observations contradict plan assumptions or fail preconditions — NOT "increase iterations" or "try harder."
- **Short-term/working memory**: sliding window of recent conversation turns + current task scratchpad (partial results, tool outputs, current plan step) — lost when session ends unless promoted
- **Long-term/episodic memory**: cross-session recall of past interactions and user preferences — retrieved via vector similarity with **recency/relevance scoring**
- **Semantic memory**: distilled general knowledge from past experiences (user typically asks about billing on Mondays) — patterns, not specific episodes
- **Entity memory**: facts about specific entities keyed by ID (customer account #12345) with access controls and update history — for cross-workflow use
- **Hybrid memory architecture**: short-term buffer + long-term vector store with **recency/relevance scoring** — the standard exam-correct answer for agents needing both session coherence and cross-session personalization
- **Memory write filters**: relevance check + **consent/sensitivity** check before storing — NOT "store everything for personalization"
- **Memory retrieval strategies**: **relevance scoring** (embedding similarity) + **recency boost** (time-decay multiplier) + **task-scoped filtering** (domain tags) + **sensitivity gating** (permission-based exclusion)
- **Memory TTL/expiry**: default **TTL** per memory type (preferences = 30 days, account settings = indefinite with **consent**) — **staleness detection** deprecates unaccessed memories
- **Loop detection**: short-term state buffer detects repeated actions/states → **reflection/critic** step forces query reformulation, alternative tools, or termination — NOT "increase max iterations"
- **Meta-reasoning**: agent monitors outcomes, recognizes patterns from prior failures, adjusts strategy (e.g., preemptively clarifying, switching to rule-based constraints after repeated failures)
- **Clarification strategy**: ask when required inputs missing AND tool calls would be ambiguous or high-cost. Use tools when factual uncertainty resolvable by **retrieval/API**.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| task needs external data, tool calls, or real-time feedback | ReAct (interleave reasoning + acting + observing) | CoT (can reason but can't call tools) |
| pure math, logic, or deduction with no tools needed | CoT with step-by-step reasoning | ReAct (unnecessary tool-call overhead) |
| puzzle with many constraints, branching, multiple candidate paths | Tree-of-Thought / search-style planning with branch **evaluation** | first-valid answer or pure **retrieval** |
| tool results contradict the plan, but agent continues | **re-planning trigger** on contradicting observations | "increase iterations" or "try harder" |
| agent loops between same failed query and same irrelevant result | **reflection/critic** step detects repeated actions → reformulate, switch tool, escalate, or terminate | "increase max iterations" |
| intermediate result is lost in a long context | structured scratchpad / task-state field keyed by step and value | bigger context window or bigger KV cache as the only fix |
| agent forgets user preference across sessions | **long-term/episodic memory** with **retrieval** at session start + **consent** + **expiry** | storing everything in context window or global prompts |
| agent uses stale preference (old shipping address) | memory **TTL** + **staleness detection** + time-stamped updates with **recency boost** | retrieving all memories without recency or **relevance scoring** |
| user preference + transaction history + cross-session recall | **hybrid memory**: short-term buffer for session + long-term vector store for cross-session | dumping all history into context (bloat) or only last N turns (loses context) |
| storing customer account facts across workflows | **entity memory** keyed by account ID with access controls and update history | **episodic memory** (stores interactions, not entity facts) |
| agent stores every conversation forever, retrieves irrelevant/sensitive old details | **memory write filters** + **TTL/expiry** + **sensitivity labels** + **relevance scoring** for **retrieval** | bigger storage (worsens accumulation problem) |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| ReAct vs Chain-of-Thought (CoT) | ReAct = reasons + acts + observes + adapts for tool-using tasks. CoT = reasons step-by-step without acting for pure reasoning. The deciding factor: does the task need external tools or real-time data? |
| **Short-term memory** vs **Working memory** vs **Long-term memory** | Short-term = conversation context window (session coherence). Working = task scratchpad with partial results (current step tracking). Long-term = persistent store with **retrieval** (cross-session). Three distinct layers, different goals. |
| **Episodic memory** vs **Semantic memory** | Episodic = what happened when (specific interactions). Semantic = what is generally true (distilled patterns, preferences). "User prefers Japanese summaries" = semantic. "User asked for Japanese summary on March 3rd" = episodic. |
| **Entity memory** vs **Episodic memory** | Entity = facts about a specific entity keyed by ID (account #12345, with access controls). Episodic = interaction events in time order. **Entity memory** for cross-workflow facts; episodic for interaction history. |
| **RAG** memory vs **Long-term memory** | **RAG** memory = **retrieval** of past interactions/documents via **vector search** (can serve as **long-term memory**). **Long-term memory** = broader concept including structured stores, **entity memory**, and governance policies. |
| **Reflection/critic** vs Re-planning | **Reflection** = evaluates whether previous actions succeeded, detects loops (post-action check). Re-planning = modifies the plan because observations contradict assumptions (mid-execution change). Both needed in robust agents. |
| Memory write policy vs **Retrieval** strategy | Write = what to store (relevance filters, **consent**, sensitivity checks). **Retrieval** = what to fetch (**relevance scoring**, **recency boost**, task-scoping, **sensitivity gating**). Separate concerns; both must be governed. |
| Context window vs Memory | Context window = current prompt capacity (LLM input limit). Memory = persistent storage across sessions. Context window is a constraint to manage, not a memory solution. |

### Mini scenario drill

1. Scenario: An agent creates a good initial plan for a customer support task. At step 3, a tool result shows the customer's account is in a different state than the plan assumed (account frozen, not active). The agent continues executing the remaining steps as planned.
   Best answer pattern: A **re-planning trigger** must fire when a tool observation contradicts the plan's assumptions. The agent should re-plan from step 3 with the new account state, not plow forward with invalidated assumptions.
   Trap: "Increase iterations" or "the plan was good initially" — a plan that no longer matches reality must be revised regardless of initial quality.

2. Scenario: A ReAct agent uses a search tool, gets no relevant results, and immediately searches with the same query again. This repeats 5 times. The team increases max iterations from 10 to 20.
   Best answer pattern: A **reflection/critic** step should detect repeated actions with no progress, then force query reformulation, alternative **tool selection**, or termination. The loop should be detected and broken, not extended.
   Trap: "Increase max iterations" — the agent loops longer, wastes more resources, and still doesn't make progress.

3. Scenario: An agent stores every user conversation forever without filtering. Three months later, it retrieves an outdated shipping address from an old conversation (user has since updated it twice) and a sensitive health detail shared in confidence. It uses both in a response.
   Best answer pattern: **Memory governance** framework — write filters (relevance + sensitivity checks before storing), **TTL/expiry** (old addresses expire), **recency boost** (newer addresses rank higher), **sensitivity labels** (health info gated by **consent**), and **staleness detection** (unconfirmed old data deprecated).
   Trap: "Store everything for better personalization" — accumulates stale, irrelevant, and **sensitive data** that poisons future responses.

### What to recognize

- **Multi-step reasoning failure**: agent loses intermediate results because **working memory** is not checkpointed or **structured observations** are not used
- **Forgot tool result**: agent repeats the same search query because observations were not stored as structured state
- **Repeated failure cycle**: agent uses the same failing strategy because no **reflection/critic** step evaluates outcomes and changes approach
- **User preference memory gap**: agent asks for the same preference every session because **long-term memory** write or **retrieval** policy is misconfigured
- **memory type selection for a given scenario (short-term vs entity vs episodic)**
- **missing re-planning trigger after contradictory observation**
- **stale or irrelevant memory being retrieved (missing expiry or relevance scoring)**
- **agent looping without reflection (critic node missing)**

### Hands-on checks

- Given a sample conversation transcript containing user preferences, transient chit-chat, **sensitive data**, and session-only context, classify each fact into the correct tier: prompt state, **working memory**, **long-term memory**, or audit logs. Justify each classification based on **memory governance** rules.
- Given a conversation transcript, decide which facts to store in **long-term memory** and which to discard. Define the write policy rules that justify each decision.
- Design a **retrieval** strategy for a multi-tenant memory store: how do **relevance scoring**, **recency boost**, **task-scoped filtering**, and **sensitivity gating** interact?
- Write a **critic node** pseudocode that detects a looping pattern and forces strategy change: what signals indicate a loop, what actions does the **critic** take?

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when the agent must reason across steps, remember user preferences, or recover from bad plans.
- The major trap pattern is: Memory is not automatically trustworthy. Store only useful, permission-safe facts and retrieve them with relevance checks.
- Recurring local question themes include: memory and state management, planning gates and evidence collection, workflow/state-machine design, tool execution safety.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q29, mock_2 Q31, mock_3 Q37, mock_4 Q32, mock_5 Q29** / `cog-001`: An agent needs to remember that a user prefers Japanese summaries across future sessions. Where should this live? Correct idea: Persistent **user/entity memory** with **consent**, **provenance**, **update/expiry** rules, and **retrieval** at session start.. Trap: Global prompts would apply to all users.
- **mock_1 Q30, mock_2 Q32, mock_3 Q38, mock_4 Q33, mock_5 Q30** / `cog-002`: A ReAct agent loops between the same failed search query and the same irrelevant result. Which cognitive control helps most? Correct idea: A **reflection** or **critic** step that detects repeated failed actions and forces query reformulation, alternative tools, or terminat.... Trap: Deleting history removes the evidence of repetition.
- **mock_1 Q31, mock_2 Q33, mock_3 Q39, mock_4 Q34, mock_5 Q31** / `cog-003`: A **plan-and-execute** agent creates a good initial plan, but tool results invalidate step 3. It continues anyway. What is missing? Correct idea: A **re-planning trigger** based on observations that contradict assumptions or fail preconditions.. Trap: Temperature does not enforce re-planning.
- **mock_1 Q32, mock_2 Q34, mock_3 Q40, mock_4 Q35, mock_5 Q32** / `cog-004`: Which memory type is best for storing facts about a specific customer account used across workflows? Correct idea: **Entity memory** keyed by customer/account ID with access controls and update history.. Trap: Random examples are not account facts.
- **mock_1 Q33, mock_2 Q35, mock_3 Q41, mock_4 Q36, mock_5 Q33** / `cog-005`: A planning agent is solving a puzzle-like scheduling task with many branches and constraints. Which reasoning strategy is most justified despite higher cost? Correct idea: Tree-of-thought or search-style planning with branch **evaluation** and pruning.. Trap: **Retrieval** alone cannot solve constraints.
- **mock_3 Q42, mock_4 Q37, mock_5 Q34** / `cog-006`: An agent stores every conversation forever and later retrieves irrelevant or sensitive old details. What memory policy is missing? Correct idea: **Memory write filters**, **retention**/**expiry** rules, **sensitivity labels**, user controls, and **relevance scoring** for **retrieval**.. Trap: Bigger storage worsens accumulation.
- **mock_3 Q43, mock_5 Q35** / `cog-007`: An agent must decide whether to ask the user a clarification question or use tools. Which rule is best? Correct idea: Ask for clarification when required inputs are missing and tool calls would be ambiguous or high-cost; otherwise use tools to r.... Trap: No clarification can cause wrong actions.

</details>

<!-- STUDY_ENRICHMENT_END -->

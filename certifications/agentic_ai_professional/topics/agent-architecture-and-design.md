---
domain: Agent Architecture and Design
weight: 15
status: populated
---

# Agent Architecture and Design

## What to study first

- **Core idea:** Design agent roles, reasoning loops, communication patterns, tool boundaries, and multi-agent systems.
- **Use it when:** Study this when questions ask what architecture fits a task, how agents coordinate, or when autonomy is too risky.
- **Study first:** Graph/workflow agent: explicit nodes + transitions, static states, LLM only at interpretation/generation steps — right for compliance, predictable paths, and high-risk domains
- ReAct loop: Thought → Action → Observation → Thought — right for dynamic environments, streaming data, uncertain intermediate steps
- Reactive vs deliberative vs hybrid: reactive handles bounded low-latency responses; deliberative plans across steps; hybrid routes fast-path requests to reactive handlers and complex cases to planning workflows
- Plan-and-execute: plan first, then execute — must re-plan when observations contradict the plan (missing **re-planning trigger** = decision trap)
- Supervisor/orchestrator: **centralized state** transitions + **approval gates** — right for safety-critical multi-agent, auditable workflows
- Peer-to-peer/choreography: decentralized coordination with no single bottleneck — right for distributed robots or search-and-rescue
- wrong when compliance/audit requires centralized control
- **Real trap:** Do not choose multi-agent design just because it sounds advanced; it adds **latency**, cost, and debugging complexity.

## Certification boundary

This page is the NCP-AAI exam lens for architecture. Keep enough portable theory to answer NVIDIA Agentic AI blueprint questions, but treat the deeper vendor-neutral home as `Agentic AI General Study -> Agent Lifecycle and Architecture`. Keep NVIDIA-specific cues here when they affect service selection, decision traps, or implementation choices.

## General Study first

Read `Agentic AI General Study -> Agent Lifecycle and Architecture` before this page. Use this overlay to map that general architecture knowledge to the official NCP-AAI domain: agent roles, reasoning loops, communication patterns, tool boundaries, multi-agent design, and where NVIDIA services appear as implementation choices.

## Core ideas you must hold in your head

- **Autonomy**: Not every task needs autonomy. Known workflows → explicit graph/state-machine. Uncertain steps → LLM reasoning. The exam tests knowing which pattern fits which scenario.
- **Reasoning vs execution**: The LLM proposes actions; an **execution layer** validates schemas, permissions, and risk before anything runs. This is the single most tested architectural boundary.
- **Centralized orchestration** beats pure **peer-to-peer** for safety-critical workloads. A supervisor owns state transitions and enforces **approval gates**.
- **Routing by risk/complexity** is a first-class architectural decision. Simple cases → deterministic paths; complex → **RAG/agent**; high-risk → **human escalation**.

## Mental model

Agent architecture sits at the **design** stage — before development, before deployment. The key decisions are:
1. How much autonomy does each step need?
2. Who (or what) controls state transitions?
3. Where are the safety/approval boundaries?
4. How do agents communicate and share evidence?

```
[User] → [Router: classify intent/risk] → [Simple FAQ | RAG | Full agent | Human escalation]
                                              ↑
                              [Orchestrator owns state transitions, approval gates]
                                              ↑
                              [Execution layer validates tool calls before they run]
```

## When to use each pattern

| Pattern | When it is the right answer | When it is a trap |
| ------- | --------------------------- | ----------------- |
| **Reactive agent** | Ultra-low-latency, bounded action space: intent routing, acknowledgements, alert response, status lookup | Multi-step reasoning, context accumulation, tool sequencing |
| **Deliberative agent** | Multi-step planning, tool composition, goal-directed work over several turns | Sub-second acknowledgement or every event routed through slow planning |
| **Hybrid agent** | Mixed workload: fast acknowledgement plus slower multi-step workflow behind a router/classifier | Router misclassification, shared memory leakage, fast path bypassing safety |
| **Graph/workflow agent** | Fixed sequence of steps, predictable branches, compliance requirements | Open-ended exploration, creative tasks |
| **ReAct (observe-reason-act) loop** | Dynamic environments, streaming data, uncertain intermediate steps | Deterministic workflows with known transitions |
| **Supervisor/orchestrator** | Multi-agent with **approval gates**, safety-critical, role-specialized agents | Two agents doing simple Q&A |
| **Router/classifier** | Mixed complexity workload, cost-sensitive, **risk-based routing** | Single-task agent |
| **Peer-to-peer choreography** | Decentralized coordination, no single point of failure, loose coupling | High-stakes compliance, need for **audit trail** |
| **Plan-and-execute** | Task with known subgoals but tool results may invalidate steps | Highly dynamic environments with no stable plan |
| **Multi-agent debate** | Need for diverse perspectives, adversarial testing | Routine tasks, cost-sensitive, **latency**-sensitive |

## Decision traps worth remembering

1. **"Use a larger model"** is almost never the architectural fix. The exam tests structural controls — gates, state machines, execution layers. A bigger model can still skip evidence, hallucinate, or act prematurely.

2. **"Put everything in the prompt"** is a trap answer. Prompt-only safety, prompt-only compliance, prompt-only tool restrictions — the exam expects deterministic architectural boundaries, not model instructions.

3. **"Remove the tool/retrieval"** is almost always wrong. The fix is adding control (budgets, stopping criteria, validation) — not removing capability.

4. **Confusing speed with safety.** "Fastest answer," "highest throughput," "run in parallel and pick fastest" — these are wrong for safety/compliance questions.

5. **Peer-to-peer without guardrails.** The exam treats decentralized choreography as harder to audit and more likely to skip gates. For high-stakes workflows, it's a wrong answer.

6. **Full autonomy for high-risk.** Healthcare, finance, legal — the exam expects constrained workflows with explicit states, not open-ended ReAct.

7. **Single agent for everything.** When the task has separable responsibilities with different permissions (vendor analysis, budget, legal, PO creation), role decomposition is expected.

8. **Confusing reactive with ReAct.** A reactive agent is stimulus -> action with little or no internal planning state. ReAct is a deliberative reasoning-plus-action loop that can call tools, observe, and revise.

## Architecture patterns: exam-level distinctions

### Supervisor/Orchestrator vs. Peer-to-Peer

- **Supervisor**: **Centralized state** transitions, explicit **approval gates**, easier to audit. Right answer for safety-critical multi-agent systems.
- **Peer-to-peer**: Decentralized, scales better, no single bottleneck. Wrong answer when **audit trail** or compliance is required. Right for distributed coordination (warehouse robots, search-and-rescue) when combined with structured protocols.

### Reactive vs. Deliberative vs. Hybrid

| Architecture type | Core mechanism | Best fit | What breaks if chosen wrong |
| ----------------- | -------------- | -------- | --------------------------- |
| **Reactive** | Immediate perception -> action mapping; no real planning horizon | 200-500 ms acknowledgement, alert triage, intent classification, simple status answers | Fails when the task needs multi-step reasoning, context accumulation, or three APIs called in a dependent sequence |
| **Deliberative** | Maintains an internal task/world model, plans before acting, executes, observes, revises | Refund investigation, fraud review, research, code generation with validation, regulatory reasoning | Misses hard latency SLAs, costs more tokens, is harder to debug, and can overthink simple requests |
| **Hybrid** | Lightweight classifier/router sends simple cases to a fast path and complex cases to a planning path | Customer service, logistics, operations centers, financial support: mixed simple and complex workload | Router mistakes send complex work to the fast path or simple work to the slow path; shared memory must be scoped and safe |

Exam cue: if one requirement says "acknowledge/respond under 200-500 ms" and another says "coordinate multi-step workflow across inventory/dispatch/compliance/refund APIs," the correct architecture is usually **hybrid**. Pure reactive fails the multi-step path. Pure deliberative fails the latency path. "Reduce planning depth for every request" is a trap because it still pays planning overhead while weakening complex-case reasoning.

Use this mental model:

```
Incoming event
  -> lightweight classifier / rules / risk router
     -> reactive fast path: acknowledge, classify, retrieve simple answer
     -> deliberative slow path: plan, call tools, checkpoint, validate, escalate
```

Memory split matters. The reactive path may need only current turn/session context. The deliberative path may need working memory, episodic memory, tool observations, checkpoints, approvals, and audit trace.

### ReAct vs. Plan-and-Execute vs. Graph

- **ReAct**: Interleave reasoning and action, adapt to observations. Best for dynamic or uncertain environments. Risk: loops without stopping criteria.
- **Plan-and-execute**: Plan first, then execute. Best when subgoals are predictable but tool results may force replanning. Risk: continuing with invalidated plan.
- **Graph/workflow**: Explicit nodes and transitions, LLM only at interpretation/generation steps. Best for known workflows with compliance needs. Risk: overkill for simple or creative tasks.

Exam latency cue: if the stem says a tool-heavy agent makes many **sequential** tool calls and latency is unacceptable, prefer **plan-and-execute** or a graph with a deterministic executor that can run independent branches in parallel. Reflexion/self-critique can improve answer quality after a draft, but it adds extra model round trips and is usually the wrong fix for a latency bottleneck.

Exam simplicity cue: if the design is a purely linear chain such as extractor -> summarizer -> fact checker -> formatter -> critic, do not call it multi-agent by default. Use separate agents only when the roles need distinct tools, permissions, model specializations, or parallel work. A single structured call or deterministic pipeline is often the better architecture.

### ReAct in detail

ReAct is best understood as a bounded observe -> decide -> act -> observe loop. Each LLM call can be stateless, but the workflow around it must keep task state: the user goal, tool-call history, latest observations, evidence collected, retry budget, remaining tool budget, and stop condition.

```
Goal + state
  -> choose next action
  -> validate tool name, schema, permission, and risk
  -> execute tool
  -> save structured observation
  -> check stop condition, loop detector, or escalation rule
  -> answer, continue, replan, or escalate
```

- **Use ReAct when**: the next step depends on live tool results, external data may change the plan, or the agent must iteratively search/refine.
- **Prefer plan-and-execute when**: the subgoals are known upfront, but tool results may invalidate later steps; the key is a **re-planning trigger**.
- **Prefer graph/workflow when**: the process is fixed, auditable, compliance-heavy, or contains high-risk actions.
- **Stop conditions**: goal satisfied, evidence sufficiency reached, max tool calls/iterations, wall-clock limit, no new evidence, low confidence, or human escalation.
- **Common failure**: agent calls the same tool with the same arguments even though the tool returns valid data. Root cause is usually missing stop/progress detection, missing max iterations, or failure to mark the observation as already handled — not a tool error.
- **Best fix**: add a state buffer, repeated-action detector, critic/reflection check, evidence-sufficiency gate, and explicit termination/escalation path. Do not simply raise the max iteration limit.

### Router patterns

The exam tests **when to route**:
- Intent classification → route to specialized handler
- Risk classification → route to human review
- Complexity classification → route simple to cheap paths, complex to full agent
- Cost-aware routing → match resource to task difficulty

### Blackboard / shared memory architecture

- Agents post observations to a shared space; other agents read asynchronously
- Supports loose coupling and decentralized coordination
- Right answer for: warehouse robots, search-and-rescue, dynamic multi-agent environments
- Key distinction: blackboard = indirect communication via shared state; **message passing** = direct agent-to-agent

## Multi-agent coordination: exam signals

- **Task decomposition with role assignment**: Each agent specializes, avoids redundant computation
- **Event-driven + structured ontologies**: Agents interpret messages accurately under partial observability
- **Consistent message formats + shared ontologies**: Critical for reliable negotiation and joint decision-making
- **Market-based / auction coordination**: Decentralized decisions without single point of failure; robots bid on tasks
- **Centralized task router**: Dynamic assignment, better monitoring, easier scaling
- **gRPC with Protocol Buffers**: Low-**latency**, structured, full-duplex streaming for agent-to-agent communication

## BDI (Belief-Desire-Intention) architecture

- Agents maintain beliefs (world model), desires (goals), intentions (committed plans)
- Enables adaptive reasoning: update beliefs from observations, revise intentions when environment changes
- Contrast with: hardcoded goal trees, static rule engines, deterministic finite automata — all wrong for adaptive scenarios

## Separation of concerns

- Planning module, memory module, action execution, tool interface — each loosely coupled
- Enables plug-and-play reasoning modules, domain-specific component swapping
- Modular architecture supports cross-domain adaptability without full reengineering

## Must-know exam bullets

- **Execution layer** — enforcement boundary, not the LLM, not the prompt, not user confirmation after the fact
- **Planning gates** — require evidence enumeration before decision nodes to prevent premature action
- **Budgets + critic node** — control for open-ended ReAct exploration (max tool calls, stopping criteria, repeated-action detection)
- **Source evidence + confidence propagation** — pass alongside summaries to prevent error amplification in multi-agent chains
- **Risk-based routing** — match cost and oversight to task complexity, not one-size-fits-all
- **Re-planning triggers** — **plan-and-execute** must revise on contradicting observations, not plow forward
- **Idempotency + state-aware retries** — for mutation tools, not "disable all retries" (too blunt) or "retry infinitely" (amplifies damage)
- **Plan-act-observe schema** — typed JSON action messages enabling verification and confidence-based escalation

## Hands-on checks / study prompts

1. Given a scenario with fixed steps and compliance requirements, can you explain why graph > ReAct?
2. What two things must a **planning gate** enforce?
3. When is **peer-to-peer** choreography the better answer vs. supervisor?
4. What architectural pattern prevents a multi-step agent from "jumping to decision after first document"?
5. Draw the separation-of-concerns boundary between an LLM agent and its tool **execution layer**.

## Top terms to memorize

- **Execution layer** — the *deterministic* enforcement boundary (NOT prompt, NOT LLM, NOT post-hoc user confirmation)
- **Supervisor / Orchestrator** — **centralized state** transitions + **approval gates** → right answer for safety-critical multi-agent
- **Peer-to-peer / Choreography** — decentralized, scales well, *bad* for audit-required workflows; right for warehouse robots / search-and-rescue
- **ReAct loop** — Thought → Action → Observation → Thought; for *dynamic* environments; risk = unbounded loops
- **Plan-and-execute** — plan first, then execute; **must re-plan when observations contradict** plan
- **Graph / workflow agent** — explicit nodes + transitions; right for *fixed* compliance flows
- **Router / classifier** — **risk-based routing**: simple → cheap path, complex → full agent, high-risk → human
- **Blackboard architecture** — *indirect* communication via shared memory (vs. **message passing** = direct)
- **BDI** — Belief / Desire / Intention; for adaptive long-term autonomy
- **Planning gate** — must enumerate evidence *before* decision nodes (prevents premature action)
- **Budgets + critic node** — control unbounded ReAct exploration (NOT "increase max iterations")
- **Idempotency + state-aware retries** — for mutation tools (NOT disable-all, NOT retry-infinitely)
- **gRPC + Protocol Buffers** — low-**latency** structured agent-to-agent comms
- **Plan-act-observe schema** — typed JSON action messages → enables verification + confidence escalation

### Top decision traps
- "Use a larger model" → almost never the architectural fix
- "Put it in the prompt" → prompt is not a control boundary
- "Remove the tool" → wrong; add controls instead
- "Full autonomy for high-risk domains" (healthcare/finance/legal) → wrong; constrain with explicit states

## Mock signals

Across the mock exams, architecture questions repeatedly test these durable ideas:

- **Control boundaries**: planning gates, tool-execution validation, approval checkpoints, and evidence requirements before action.
- **Pattern selection**: graph/workflow for fixed compliant processes; ReAct for dynamic tool feedback; supervisor for auditable multi-agent control.
- **Coordination style**: centralized **orchestration** for safety and **auditability**; blackboard or **peer-to-peer** patterns for distributed coordination.
- **State and memory**: stateful **orchestration**, shared memory namespaces, BDI-style belief updates, and re-planning when observations contradict the plan.
- **Role decomposition**: **router/planner/executor/critic/specialist** agents only when the separation reduces real complexity.
- **Communication contracts**: typed messages, shared ontologies, gRPC/Protocol Buffers, and **source/confidence propagation** between agents.

Evidence source: `mock_1` through `mock_5`, especially architecture, planning, coordination, blackboard, and multi-agent communication questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 15%
- **What it covers:** Design agent roles, reasoning loops, communication patterns, tool boundaries, and multi-agent systems.
- **Use this section when:** Study this when questions ask what architecture fits a task, how agents coordinate, or when autonomy is too risky.
- **Common trap:** Do not choose multi-agent design just because it sounds advanced; it adds **latency**, cost, and debugging complexity.
- **Recognition clues:** The question asks how much autonomy is safe: deterministic, high-risk flows usually need **explicit state transitions** and **approval gates**, not free-form agents.

### Study notes

- Know the boundary between deterministic workflows and autonomous agents. Use agents when the path depends on reasoning, tool feedback, or changing context; use workflows when steps are predictable, auditable, and high-risk.
- Multi-agent designs add specialization, but also **latency**, state synchronization, and debugging complexity. The exam often rewards the simplest architecture that still enforces the risk boundary.
- Separate roles such as planner, executor, **critic**, router, and memory manager only when each role reduces real complexity or enforces a different permission boundary.
- **Reactive agent**: Best for bounded, low-latency stimulus-response work such as acknowledgement, alert triage, intent classification, simple routing, or status lookup. It should not own complex reasoning because it has little or no planning horizon.
- **Deliberative agent**: Best for tasks that require planning, tool sequencing, context accumulation, and revising the plan from observations. It is slower, costs more, and needs trace/state controls.
- **Hybrid agent**: Best for mixed workloads. A lightweight classifier or rules layer routes simple/time-sensitive requests to a reactive fast path and complex/high-risk cases to a deliberative planning path.
- **ReAct (Reason + Act) pattern**: Best for dynamic environments where each tool call may change the next action. The loop is Thought -> Action -> Observation -> Thought. Use it when intermediate steps are unknown upfront and the agent must adapt to live feedback. Do NOT use it for deterministic workflows — it adds **latency** and can loop without budgets and stopping criteria.
- **Plan-and-Execute pattern**: Best when the task has predictable subgoals but tool results may invalidate later steps. The agent plans first (evidence, tools, decision points), then executes with explicit re-planning triggers. Critical requirement: re-plan when an observation contradicts the plan. Continuing with an invalidated plan is the trap.
- **Router pattern**: Best for mixed-complexity workloads. A classifier determines intent, risk, or complexity and routes to the appropriate handler (simple FAQ path, **RAG** path, full agent workflow, or **human escalation**). Use when different requests need different levels of processing. The router is NOT for single-task agents.
- **Multi-agent / Supervisor pattern**: Best when tasks have separable responsibilities with different permissions (vendor analysis, budget, legal, PO creation). A centralized supervisor owns state transitions and enforces **approval gates**. Use when role decomposition reduces real complexity. Avoid when two agents doing simple Q&A — that adds **latency** and state synchronization overhead.
- **Architecture decision tree**: (1) Is the workflow fully deterministic and compliance-heavy? -> **Graph/workflow agent**. (2) Does the task need real-time tool feedback and adapt to changing observations? -> ReAct with stopping criteria. (3) Are subgoals predictable but tool results may invalidate steps? -> **Plan-and-Execute** with re-planning. (4) Do different requests need different processing depths? -> Router/classifier. (5) Are there separable responsibilities with different permissions? -> Multi-agent with supervisor.
- **Architecture decision tree for risk**: Simple FAQ queries -> router-based to cheap deterministic path. Complex multi-step with uncertain tool feedback -> ReAct with tools and budgets. High-stakes legal/financial workflow -> **Plan-and-Execute** with **human approval gates**. Mixed-risk workload -> Router classifies by risk level and routes accordingly.
- **Budgeted execution**: Every open-ended agent needs hard limits — max tool calls per task, max **tokens** per agent step, max wall-clock time, explicit stopping criteria (e.g., "stop when evidence collected for all required fields"). A **critic node** evaluates whether enough evidence has been gathered before allowing the agent to proceed. Do NOT rely on "increase max iterations" to fix looping — that makes loops worse.
- **Safety boundaries in architecture**: The agent CANNOT skip approval for high-risk actions. Safety boundaries are enforced at the **execution layer** (deterministic schema validation, **permission checks**) — not in the LLM prompt. Architectural boundaries include: **tool preconditions** gated on workflow state (refund tool unavailable until auth + policy checks pass), **approval gates** before mutations, **data-instruction separation** for retrieved content, and the **critic node** requiring evidence enumeration before decision nodes.

### Must know

- **Graph/workflow agent**: explicit nodes + transitions, static states, LLM only at interpretation/generation steps — right for compliance, predictable paths, and high-risk domains
- **Reactive agent**: immediate stimulus -> action mapping with little/no planning state — right for low-latency, bounded decisions
- **Deliberative agent**: explicit planning before action — right for multi-step reasoning and tool coordination, but slower and costlier
- **Hybrid agent**: router/classifier splits reactive fast path from deliberative slow path — right for mixed SLA + multi-step workloads
- **ReAct loop**: Thought → Action → Observation → Thought — right for dynamic environments, streaming data, uncertain intermediate steps
- **Plan-and-execute**: plan first, then execute — must re-plan when observations contradict the plan (missing **re-planning trigger** = decision trap)
- **Supervisor/orchestrator**: **centralized state** transitions + **approval gates** — right for safety-critical multi-agent, auditable workflows
- **Peer-to-peer/choreography**: decentralized coordination with no single bottleneck — right for distributed robots or search-and-rescue; wrong when compliance/audit requires centralized control
- **Router/classifier**: intent routing, risk routing, complexity routing, cost-aware routing — dispatches to FAQ, **RAG**, full agent, or **human escalation**
- **Blackboard architecture**: indirect communication via shared memory space, agents post/read asynchronously — vs. **message passing** (direct agent-to-agent)
- **BDI model**: Belief (world model) + Desire (goals) + Intention (committed plans) — for adaptive long-term autonomy
- **Execution layer**: deterministic enforcement boundary — schema validation, **permission checks**, **tool preconditions** — NOT prompt text, NOT the LLM, NOT post-hoc confirmation
- **Planning gate**: evidence enumeration before decision nodes — prevents premature action
- **Budget + critic node**: max tool calls, max **tokens**, explicit stopping criteria, **critic** evaluates evidence sufficiency — NOT "increase max iterations"
- **Idempotency + state-aware retries**: for mutation tools — NOT disable-all-retries, NOT retry-infinitely
- **gRPC + Protocol Buffers**: low-**latency** structured agent-to-agent communication
- **Source evidence + confidence propagation**: pass alongside summaries to prevent error amplification in multi-agent chains

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| fixed steps, compliance, predictable outcomes | **graph/workflow agent** with **explicit state transitions** and **approval gates** | ReAct autonomy for a known process |
| many sequential tool calls and unacceptable latency | **plan-and-execute** with a planner plus deterministic/parallel executor | reflexion as the primary latency fix |
| linear extractor -> summarizer -> fact checker -> formatter pipeline | simple workflow or one structured model call unless permissions/tools differ | multi-agent system just because it sounds advanced |
| sub-500 ms acknowledgement plus multi-step refund/fraud/logistics workflow | **hybrid agent**: reactive fast path + deliberative planning path behind a router | pure reactive or pure deliberative for every request |
| bounded low-latency alert or intent routing | **reactive agent** or router path | deliberative planning loop before every acknowledgement |
| multi-API investigation with dependencies and changing observations | **deliberative/ReAct or plan-and-execute** with checkpoints and validation | reactive tool calls without planning state |
| uncertain steps, tool feedback, streaming data | **ReAct loop** with stopping criteria, budgets, and **critic** | rigid graph/workflow for a dynamic environment |
| separable responsibilities with different permissions (vendor, budget, legal) | role-specialized multi-agent with supervisor and least-privilege tools | single agent holding every permission |
| high-risk domain (healthcare, finance, legal) | constrained workflow with explicit states + **approval gates** | full autonomy or open-ended ReAct |
| agent loops endlessly exploring irrelevant sources | **budgeted execution** + **critic node** + stopping criteria | removing **retrieval** or increasing max iterations |
| different request types (simple FAQ, complex research, high-risk) | router/classifier by intent and risk | one-size-fits-all agent for everything |
| multi-agent disagreement on task status | supervisor with **centralized state** + **shared ontology** | **peer-to-peer** without **audit trail** |
| downstream agents amplify wrong assumption from upstream | **source evidence** + **confidence metadata** + independent verification | voting (can amplify correlated errors) |
| reasoning proposes dangerous tool call | **execution layer** validates schema, permissions, and risk before execution | prompt instructions to "be careful" |
| **audit trail** and compliance required | centralized supervisor with state transitions logged | **peer-to-peer** choreography |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| Agent vs workflow | Agent = LLM dynamically decides next steps. Workflow = predetermined path with explicit states. Use an agent when the path depends on reasoning; use workflow when the process is known, auditable, and compliance-heavy. |
| Reactive agent vs ReAct | Reactive agent = immediate stimulus-response architecture with minimal state. ReAct = deliberative observe-reason-act loop with tool calls and observations. They sound similar but answer different scenario cues. |
| Reactive vs Deliberative vs Hybrid | Reactive optimizes latency and bounded actions. Deliberative optimizes planning and multi-step coordination. Hybrid uses a classifier/router so each request takes the cheapest safe path that satisfies its SLA and complexity. |
| ReAct vs **Plan-and-Execute** | ReAct interleaves reasoning and action (dynamic, tool-driven). **Plan-and-Execute** plans first then executes (predictable subgoals). Key test: can tool results invalidate the plan? If yes → **Plan-and-Execute** with re-planning triggers. If path is unknown → ReAct. |
| Supervisor vs **Peer-to-Peer** | Supervisor centralizes state transitions and **approval gates** (auditable, safe). **Peer-to-peer** decentralizes coordination (scalable, no bottleneck). Pick supervisor when compliance/audit matters; pick **peer-to-peer** for distributed coordination like warehouse robots. |
| Blackboard vs **Message Passing** | Blackboard = indirect communication via shared memory (agents post/read asynchronously). **Message passing** = direct agent-to-agent communication (gRPC, structured messages). |
| **Planning gate** vs **Approval gate** | **Planning gate** = enumerate evidence before decision (internal control). **Approval gate** = human or policy check before execution (external control). Both are needed in high-risk workflows. |
| Router vs Supervisor | Router = dispatches incoming request to the right handler (one-time classification). Supervisor = manages ongoing state transitions across multiple agents (continuous **orchestration**). |
| **Execution layer** vs **Guardrails** | **Execution layer** = validates tool calls before they run (schema, permissions, preconditions). **Guardrails** = validates LLM input/output against safety policies. Both are needed; they operate at different boundaries. |
| BDI vs ReAct | BDI = long-term adaptive autonomy with beliefs/goals/intentions. ReAct = short-horizon observe-reason-act cycle. BDI is for agents that persist and adapt over time; ReAct is for dynamic single-task execution. |

### Mini scenario drill

1. Scenario: A legal document review system must authenticate the user, retrieve relevant clauses, check against policy, flag risks, and generate a summary — every time, in that order, with no deviation.
   Best answer pattern: **Graph/workflow agent** with explicit nodes and transitions. LLM used only at interpretation and generation steps. **Human escalation** for flagged risks.
   Trap: ReAct agent that freely explores — would create compliance risk and unnecessary **latency**.

2. Scenario: A procurement agent must negotiate with vendors, verify budget, check legal clauses, and create purchase orders. Each subtask requires different permissions and domain knowledge.
   Best answer pattern: Role-specialized multi-agent with centralized supervisor that owns state transitions and enforces **approval gates** (budget check → legal review → PO creation).
   Trap: Single agent with all permissions — violates **least privilege**, harder to audit.

3. Scenario: An operations agent receives streaming alerts and must react to changing system state. A fixed plan becomes invalid as new alerts arrive.
   Best answer pattern: ReAct observe-reason-act loop with periodic re-planning, budgeted tool calls, and guarded tool execution.
   Trap: **Plan-and-execute** without re-planning triggers — continues with invalidated plan.

4. Scenario: A customer-service agent must acknowledge every user message under 500 ms, but refund disputes require coordinating account, payment, and compliance APIs before a decision.
   Best answer pattern: **Hybrid agent** with a reactive fast path for acknowledgement/simple routing and a deliberative workflow for refund investigation, checkpoints, and approvals.
   Trap: Pure reactive fails the refund investigation; pure deliberative violates the acknowledgement SLA.

### What to recognize

- **Coordination failure**: agents disagree on task status because no shared state protocol, ontology, or message format exists
- **Agent handoff with lost context**: one agent passes a summary without **source evidence** or confidence, causing downstream errors or repeated work
- **Mixed-SLA workload**: fast alert/acknowledgement plus complex exception resolution means hybrid routing, not one architecture for every event
- **Agent role confusion**: two agents attempt the same expensive tool call because roles and permissions are not clearly separated
- **Autonomy level mismatch**: deterministic compliance workflow is given full ReAct autonomy instead of a constrained graph
- **Architecture selection trap**: multi-agent design is chosen for a simple two-step Q&A task, adding **latency** and state-sync overhead without reducing complexity
- **pattern selection based on task determinism vs uncertainty**
- **when to add human approval gates (high-risk workflow)**
- **budget limits for open-ended exploration**
- **evidence enumeration before decision nodes (planning gate)**

### Hands-on checks

- Draw a one-agent solution and a multi-agent solution for the same task; mark why one is safer.
- Given a scenario description, walk through the architecture decision tree: is it deterministic, dynamic, mixed-complexity, or role-separable? Then pick the matching pattern.
- Write pseudocode for a **budgeted execution** policy: max tool calls, stopping criteria, and a **critic node** that decides whether to proceed or gather more evidence.
- Design an architecture with safety boundaries: mark where the **execution layer** validates tool calls, where **approval gates** block high-risk actions, and where the agent CANNOT bypass human review.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when questions ask what architecture fits a task, how agents coordinate, or when autonomy is too risky.
- The major trap pattern is: Do not choose multi-agent design just because it sounds advanced; it adds **latency**, cost, and debugging complexity.
- Recurring local question themes include: knowledge integration, multi-agent coordination, human oversight and UX, Agent Architecture and Design, tool execution safety, memory and state management.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q1, mock_3 Q1, mock_4 Q1, mock_5 Q1** / `arch-001`: A claims triage agent must inspect customer history, policy documents, and current claim details before deciding whether to approve, reject, or escalate. In testing, i... Correct idea: Add a **planning gate** that requires the agent to enumerate required evidence, call **retrieval/tools** for each evidence type, and on.... Trap: A larger model can still act prematurely if the control flow allows it.
- **mock_1 Q2, mock_3 Q2, mock_4 Q2, mock_5 Q2** / `arch-002`: A software-engineering assistant uses five specialized agents: planner, coder, tester, security reviewer, and deployer. The agents disagree about whether a task is com... Correct idea: A **supervisor/orchestrator** that owns state transitions and requires explicit tester and security-review approvals before the dep.... Trap: **Peer-to-peer** workflows are harder to audit and can skip gates.
- **mock_1 Q3, mock_2 Q1, mock_3 Q3, mock_4 Q3** / `arch-003`: A healthcare intake system has predictable required steps, strict compliance requirements, and only a few allowed outcomes. The team proposes a fully autonomous open-e... Correct idea: A constrained workflow or graph with explicit states, allowed transitions, tool gates, and **human escalation** for ambiguous or hi.... Trap: Voting does not guarantee compliance or **auditability**.
- **mock_1 Q4, mock_2 Q2, mock_3 Q4, mock_4 Q4, mock_5 Q3** / `arch-004`: An enterprise procurement agent must negotiate with vendors, check budget, verify legal clauses, and create purchase orders. Which decomposition is most appropriate? Correct idea: Use role-specialized agents or nodes for vendor analysis, budget verification, legal review, and PO creation, with a central or.... Trap: A first-message classifier lacks evidence and cannot execute the process.
- **mock_1 Q5, mock_2 Q3, mock_3 Q5, mock_4 Q5, mock_5 Q4** / `arch-005`: A research agent spends too many iterations exploring irrelevant sources and rarely terminates. What architectural control should be added first? Correct idea: A **budgeted execution** policy with max tool calls, explicit stopping criteria, and a **critic node** that decides whether enough evid.... Trap: Removing **retrieval** destroys the agent's core capability.
- **mock_1 Q6, mock_2 Q4, mock_3 Q6, mock_4 Q6** / `arch-006`: A customer-support automation has a fixed sequence: authenticate user, retrieve account, check policy, propose resolution, ask user confirmation, then create ticket. W... Correct idea: A **graph/workflow agent** with explicit nodes and transitions, using LLM calls only where interpretation or generation is needed.. Trap: ReAct is overkill for deterministic sequences.
- **mock_1 Q7, mock_2 Q5, mock_3 Q7, mock_4 Q7, mock_5 Q5** / `arch-007`: An agent must call external APIs that mutate state. The team wants the agent to plan freely but not execute dangerous actions without checks. Which boundary is most im... Correct idea: Separate reasoning from execution: the agent proposes tool calls, but an **execution layer** validates schemas, permissions, risk l.... Trap: Prompt rules are not enough for real API credentials.
- **mock_2 Q6, mock_3 Q8, mock_4 Q8, mock_5 Q6** / `arch-008`: A multi-agent system repeatedly amplifies a wrong assumption because each downstream agent trusts the previous agent's summary. Which design reduces this risk? Correct idea: Pass **source evidence** and **confidence metadata** along with summaries, and add independent verification before final decisions.. Trap: Voting can amplify correlated errors.
- **mock_2 Q7, mock_3 Q9, mock_5 Q7** / `arch-009`: A legal agent handles many case types. Some are simple FAQ, some require document **retrieval**, and some require attorney review. Which architecture improves cost and saf... Correct idea: A router that classifies intent and risk, sends simple cases to deterministic/FAQ paths, complex cases to **RAG**, and high-risk ca.... Trap: Static prompts do not provide risk-based control.
- **mock_2 Q8, mock_3 Q10** / `arch-010`: An operations agent receives streaming alerts and must react to changing system state. A fixed up-front plan often becomes invalid. Which approach fits best? Correct idea: A ReAct-style observe-reason-act loop with periodic re-planning and guarded tool execution.. Trap: Delayed batch processing misses real-time operations.

</details>

<!-- STUDY_ENRICHMENT_END -->

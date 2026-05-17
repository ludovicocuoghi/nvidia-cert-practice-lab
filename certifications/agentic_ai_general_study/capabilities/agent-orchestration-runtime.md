---
capability: Agent Orchestration Runtime
status: populated
source_lens: general-study
---

# Agent Orchestration Runtime

## What to study first

- **Core idea:** You are building the workflow/runtime that coordinates model calls, tools, retrieval, memory, state, routing, retries, handoffs, and termination for an agentic application.
- **Study first:** Decide whether the task needs a deterministic workflow, a router, a ReAct loop, plan-and-execute, a supervisor, or human review.
- **Deterministic workflow:** Use a fixed state graph when the process is known, compliance-heavy, auditable, or approval-driven.
- **ReAct:** Use the Reason -> Act -> Observe loop when each tool result can change the next step; always add max steps, retry budgets, stop conditions, and a verifier/critic.
- **Plan-and-execute:** Use when subgoals are predictable but later observations may invalidate the plan; the exam trap is continuing a stale plan without a replanning trigger.
- **Router:** Classify request intent, risk, evidence need, or complexity before choosing simple answer, RAG, full agent, or human escalation.
- **Supervisor / multi-agent:** Split roles only when responsibilities, permissions, expertise, or audit ownership are genuinely separable.
- **State and trace:** Define the state owner, readable/writable fields, checkpoints, memory writes, tool results, policy decisions, and replayable trace spans.

## What You Are Building

You are building the workflow/runtime that coordinates model calls, tools, retrieval, memory, state, routing, retries, handoffs, and termination for an agentic application.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Build agent/RAG application | Main lane: decide direct answer vs workflow vs RAG vs ReAct, then wire state, tools, retrieval, memory, verification, stop conditions. | Traceable agent runtime |
| Use existing model/API | Use only for multi-step application logic around the model; simple calls may not need an agent. | Bounded workflow or router |
| Fine-tune existing model | May supply curated tool trajectories, but tuning itself belongs to customization. | Optional trajectory examples |
| Train model from zero | Rarely relevant. Training jobs have schedulers and distributed runtimes, not agent orchestration. | No agent workflow |
| Operate, govern, and improve | Replay traces, fix routing/retry/state bugs, and add trajectory regressions. | Improved workflow and eval cases |

## Pipeline

1. Decide whether the task needs deterministic workflow, agent loop, or multi-agent handoff.
2. Define state: task, user, tool results, retrieved evidence, memory, approvals, errors.
3. Define nodes: planner, retriever, tool executor, verifier, reviewer, writer.
4. Add routing, retries, timeouts, and stop conditions.
5. Connect tools through validated execution boundaries.
6. Trace every step and record decisions.
7. Evaluate trajectories, not only final answers.

## Core Concepts

- Orchestration coordinates steps; it is not model serving.
- State ownership prevents agents from losing context or duplicating work.
- Deterministic graphs are safer for predictable high-risk flows.
- Agent loops need budgets, stop conditions, and recovery logic.
- ReAct is a bounded reasoning/action loop, not a magic synonym for "agent." It works when the next action depends on observations.
- Plan-and-execute separates planning from action; it must include replanning when retrieved evidence or tool results contradict the original plan.
- Router workflows reduce latency and cost by sending simple, RAG, full-agent, and human-review tasks down different paths.
- Trajectory eval measures tool choice, evidence use, policy, latency, and cost.
- NeMo Agent Toolkit is the NVIDIA cue for composing agent workflows, tools, retrieval, and multi-agent coordination.
- Orchestration calls endpoints, retrievers, tools, guardrails, memory, and evaluators; it does not replace those layers.
- Planner/executor, router, verifier, critic, and human-review nodes are design patterns, not separate products by default.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "multi-step workflow" | orchestration runtime | single prompt only |
| "approval process" | deterministic graph with human gate | autonomous loop |
| "agent forgets tool result" | state management | bigger model |
| "too many tool retries" | timeout/retry policy | infinite autonomy |
| "handoff among roles" | shared state and traceable handoff | isolated chat agents |
| "connect tools, data sources, and agents" | NeMo Agent Toolkit / orchestration runtime | NIM or TensorRT-LLM |
| "deterministic compliance flow" | graph/workflow with explicit gates | open-ended autonomous loop |
| "agent quality issue in middle steps" | trajectory trace and eval | final answer only |

## Common Traps

| Trap | Correct mental model |
|---|---|
| More agents means better system | More agents can add latency, cost, and coordination failures. |
| Orchestration enforces tool permissions | Tool gateway/policy layer enforces permissions. |
| Final answer eval is enough | Agent failures often happen in intermediate steps. |
| NIM orchestrates agents | NIM serves models; orchestration coordinates workflow steps. |
| CUDA/TensorRT solves orchestration | GPU acceleration is not agent workflow design. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Agent Toolkit | Agent workflow and tool orchestration patterns. |
| NVIDIA | NIM / NeMo Retriever / NeMo Guardrails | Services the orchestrator calls for model serving, knowledge, and policy. |
| Open source | LangGraph, Semantic Kernel, CrewAI | State graphs, planners, and handoffs. |
| Cloud | Step Functions, Durable Functions | Deterministic workflow orchestration. |

## Deep Dive

### Where it sits in the lifecycle

Agent orchestration is the **workflow control plane** around model calls.

```text
[User task] -> [State graph/planner] -> [Retrieve] -> [Call model] -> [Call tool]
        -> [Verify/guardrail] -> [Human gate if needed] -> [Final response]
```

It decides what happens before and after a model call: state transitions, tool choice, retries, verification, escalation, and trace capture.

### Pattern map

| Pattern | Plain definition | Use it when... | Trap |
|---|---|---|---|
| Deterministic state graph | Explicit nodes, edges, state transitions, and approval gates | Workflow has known steps, compliance needs, or predictable outcomes | Overusing open-ended autonomy |
| ReAct | Reason -> Act -> Observe -> Reason loop around tools | The next action depends on live observations or tool feedback | No budgets, no verifier, or using it for a known process |
| Plan-and-execute | Create a plan first, execute steps, then replan if observations contradict the plan | The task has decomposable subgoals but tool/retrieval results may change later steps | Continuing a stale plan |
| Router | Classify request intent/risk/complexity before choosing the path | Mixed workloads need cheap simple paths plus deeper agent/RAG paths | One-size-fits-all agent for every request |
| Supervisor / multi-agent | Central orchestrator assigns roles and owns shared state | Roles have different permissions, tools, or expertise | Peer agents with no state owner or audit trail |
| Verifier / critic | Checks evidence, tool results, policy, and stop criteria before continuing | Intermediate decisions matter, not just final answer text | Treating fluent text as proof |

### ReAct in one minute

ReAct means **reasoning plus acting**. The runtime lets the model decide the next action, calls a tool, observes the result, and then reasons again. That is useful for dynamic tasks where the next step is unknowable before seeing a search result, API response, sensor value, or document hit.

If you are looking for "where ReAct lives" in this study guide, it lives here: **Agent Orchestration Runtime** owns the control loop, budgets, tool boundary, state updates, and trace. Certificate pages should point back here instead of redefining ReAct every time.

```text
Thought: what do I need next?
Action: call one approved tool with validated arguments
Observation: tool result, error, or missing evidence
Thought: continue, retry, ask human, or stop
```

Use ReAct when observations should change the path. Do not use it just because the word "agent" appears. If the process is fixed, high-risk, or compliance-heavy, a deterministic graph with approval gates is usually the better answer. Every ReAct loop needs step budgets, wall-clock budgets, allowed tools, retry limits, stop conditions, and trajectory traces.

### Workflow versus agent decision tree

| Question signal | Prefer | Why |
|---|---|---|
| Fixed process, predictable steps, regulated approval | Deterministic workflow graph | Easier to audit, replay, and constrain |
| Unknown intermediate steps, tool feedback changes the next action | Bounded ReAct loop | Observation-driven decisions are the point |
| Many request types with different cost/risk | Router | Avoids spending agent reasoning on simple requests |
| Big task with predictable subgoals | Plan-and-execute | Keeps a visible plan while allowing replanning |
| Multiple permission domains or specialized roles | Supervisor / multi-agent | Keeps ownership and least-privilege boundaries explicit |

### NVIDIA service boundary

| Scenario clue | NVIDIA answer | Neighboring layer |
|---|---|---|
| Build/connect/observe agent workflows | NeMo Agent Toolkit | NIM serves models called by the workflow |
| Model endpoint performance | NIM/Triton/TensorRT-LLM | Not orchestration |
| Retrieval grounding | NeMo Retriever | Orchestrator calls it |
| Policy middleware | NeMo Guardrails | Orchestrator routes through it |
| Tool authorization | Tool gateway | Orchestrator proposes; gateway enforces |

### Exam mental model

The orchestrator is not the security boundary and not the inference optimizer. It is the place where **state**, **budgets**, **stop conditions**, **tool-call order**, and **human gates** are made explicit and traceable.

### Control-flow vocabulary

| Term | Plain meaning | What to check |
|---|---|---|
| Node | One step in the workflow | Inputs, outputs, allowed tools, timeout |
| Edge | Rule for moving to the next node | Condition, fallback, retry, escalation |
| State | Shared task record | Who can read/write each field |
| Budget | Limit on time, tokens, tool calls, or retries | Prevents runaway loops |
| Stop condition | Explicit reason to end or escalate | Success, missing evidence, policy block |
| Checkpoint | Saved workflow position | Enables recovery without repeating unsafe actions |

When a scenario feels vague, draw the nodes first. If the path is predictable, use a graph. If the path depends on observed results, use a bounded loop with budgets and verifier nodes.

### Implementation card: bounded state graph

```python
def run_agent(task, state):
    state["task"] = task
    state["steps"] = 0

    while state["steps"] < state["max_steps"]:
        state["steps"] += 1
        route = router(state)

        if route == "retrieve":
            state["evidence"] = retriever.search(state["task"], state["user"])
        elif route == "tool":
            proposal = planner.propose_tool(state)
            state["tool_result"] = tool_gateway.execute(proposal, state["user"])
        elif route == "review":
            return human_review_queue.submit(state)
        elif route == "final":
            answer = writer.answer(state)
            if verifier.supported(answer, state):
                return answer
            state["errors"].append("unsupported_answer")
        else:
            return escalate("unknown_route", state)

    return escalate("step_budget_exhausted", state)
```

The evaluation function is trajectory-based: score route correctness, evidence use, valid tool calls, approval placement, stop condition, latency, and cost. A final answer can be correct while the trajectory is unsafe or too expensive.

## Exam Signals

- "workflow with tools" -> orchestration.
- "planner/executor" -> orchestration pattern.
- "state handoff" -> shared state runtime.
- "trajectory failure" -> agent eval/trace.
- "approval gate" -> workflow plus human oversight.
- "NeMo Agent Toolkit" -> workflow/tool/agent orchestration.
- "NIM vs Agent Toolkit" -> serving vs orchestration distinction.
- "multi-agent handoff" -> shared state, role boundary, traceability.

## Hands-on Checks

1. Draw deterministic and autonomous versions of the same task.
2. Mark state fields each node reads/writes.
3. Define stop conditions and retry budgets for a tool-using agent.

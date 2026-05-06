---
domain: Agent Lifecycle and Architecture
weight: 14
status: populated
---

# Agent Lifecycle and Architecture

## Actual implementation / Pattern you use

```yaml
router:
  classify:
    inputs: [intent, risk, required_tools, evidence_need]
    routes:
      - name: deterministic_workflow
        when: fixed_path_or_high_risk
      - name: bounded_agent_loop
        when: dynamic_steps_and_tool_feedback
      - name: supervisor_multi_agent
        when: specialist_roles_with_shared_state
      - name: human_review
        when: high_impact_or_low_confidence

orchestrator:
  owns: [state, approvals, retries, evidence, audit_trace]
  enforces: [tool_preconditions, memory_write_policy, stopping_criteria]
```

| Input | Architecture decision | Output |
|---|---|---|
| Task goal, risk, tools, evidence, and user context | Choose workflow, router, ReAct loop, plan-and-execute, supervisor, or peer coordination | Bounded execution plan with state owner, approval gates, memory policy, and trace evidence |
| Fixed regulated process | Deterministic graph with explicit states | Auditable path and controlled LLM use |
| Dynamic tool feedback | Bounded observe-reason-act loop | Iterative execution with budgets and replanning |
| Specialist roles | Supervisor with shared state | Clear handoff, permissions, and review trail |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Agent Architecture and Design | Choose workflow vs agent, router, supervisor, ReAct, plan-and-execute, and multi-agent boundaries. |
| Cognition, Planning, and Memory | Recognize reasoning loops, task decomposition, reflection, state, and memory placement. |
| Human-AI Interaction and Oversight | Decide when autonomy must become approval, escalation, or review. |
| Safety, Ethics, and Compliance | Bound agent actions before risky tool use or sensitive decisions. |

## What to study first

- **Core idea:** How to choose between deterministic workflows, agent loops, routers, supervisors, and multi-agent systems before choosing a vendor product.
- **Use it when:** The scenario asks how autonomous the system should be, which roles should exist, who owns state, or where control gates belong.
- **Study first:** A **workflow graph** is best when the path is known: states, transitions, approvals, and retries are explicit.
- An **agent loop** is best when the path is partly unknown: the system observes, reasons, acts, checks the result, and decides the next step.
- A **router** is a decision node, not a full agent. It sends requests to the right model, tool, workflow, or risk lane.
- A **supervisor** is the state owner for specialist workers. Without a state owner, handoffs become hard to audit and debug.
- A **multi-agent system** should be justified by different roles or tools, not by the assumption that more agents mean more intelligence.
- **Real trap:** Calling everything an agent. Many production "agent" systems are safer as explicit workflows with small LLM nodes.

## Concept ownership

This is the vendor-neutral home for agent architecture patterns. Keep the deep explanation of workflows, agent loops, routers, supervisors, multi-agent coordination, and control boundaries here. NVIDIA, AWS, and open-source tools should appear as implementation examples, not as the center of the concept.

## Study card data

- **What it covers:** How to choose between deterministic workflows, agent loops, routers, supervisors, and multi-agent systems before choosing a vendor product.
- **Lifecycle:** Architecture
- **Use this section when:** The scenario asks how autonomous the system should be, which roles should exist, who owns state, or where control gates belong.
- **Common trap:** Calling everything an agent. Many production "agent" systems are safer as explicit workflows with small LLM nodes.
- **Recognition clues:** A predictable high-risk approval flow should use states and gates, while dynamic research may need observe-reason-act.

### Key ideas

- **Workflow**: fixed path, explicit states, high auditability.
- **Agent loop**: observes, reasons, acts, and revises based on feedback.
- **Router**: chooses path/model/tool based on task and risk.
- **Supervisor**: owns state transitions across specialist agents.
- **Multi-agent**: useful for specialization, expensive for coordination.

### Must know

- A **workflow graph** is best when the path is known: states, transitions, approvals, and retries are explicit.
- An **agent loop** is best when the path is partly unknown: the system observes, reasons, acts, checks the result, and decides the next step.
- A **router** is a decision node, not a full agent. It sends requests to the right model, tool, workflow, or risk lane.
- A **supervisor** is the state owner for specialist workers. Without a state owner, handoffs become hard to audit and debug.
- A **multi-agent system** should be justified by different roles or tools, not by the assumption that more agents mean more intelligence.
- Control boundaries matter: orchestration decides the sequence, tool gateways enforce execution safety, guardrails enforce policy, and observability records the trajectory.

### Code anchor

```python
def choose_architecture(requirement):
    if requirement.fixed_steps and requirement.high_risk:
        return "deterministic_workflow_graph"
    if requirement.needs_dynamic_search and requirement.can_tolerate_iteration:
        return "bounded_agent_loop"
    if requirement.many_intents:
        return "router"
    if requirement.specialist_roles:
        return "supervisor_with_shared_state"
    return "single_model_call_with_tools_disabled"
```

Score the architecture by trajectory success, approval placement, tool-call validity, latency, cost, and auditability.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Agent orchestration | NeMo Agent Toolkit | Bedrock Agents, Step Functions | LangGraph, Semantic Kernel, CrewAI |
| Tool execution | NeMo Agent Toolkit functions | Bedrock action groups, Lambda | MCP, OpenAPI tools |
| Monitoring | NeMo Agent Toolkit observability | CloudWatch, X-Ray | OpenTelemetry, Phoenix |

### Decision guide

| Scenario | Best pattern | Trap |
|---|---|---|
| Fixed compliance process | Deterministic graph | Free-form ReAct loop |
| Changing evidence | Bounded observe-reason-act | One-shot prompt |
| Many intents | Router | Largest model for all |
| Specialist workers | Supervisor | Peer-to-peer agents with no state owner |
| High-risk action | Approval gate | Post-action confirmation |

### Deep dive: architecture patterns promoted from service pages

| Pattern | Use it when | Exam signal | Trap |
|---|---|---|---|
| ReAct | The next action depends on tool observations | "observe", "tool result changes the next step", "dynamic environment" | No stopping criteria or retry budget |
| Plan-and-execute | Subgoals are known but observations may invalidate the plan | "plan first", "re-plan when evidence contradicts" | Continue executing an invalidated plan |
| Router | Mixed intents, risks, or cost tiers | "classify then route", "simple vs complex vs high risk" | Calling the router a full autonomous agent |
| Supervisor | Multiple specialists need one state owner | "audit", "approval gates", "centralized state" | Peer-to-peer agents in a compliance workflow |
| Blackboard | Distributed agents share observations asynchronously | "shared workspace", "robots", "loose coupling" | Using it when a single auditable owner is required |
| BDI | Long-lived agents update beliefs and intentions over time | "beliefs", "goals", "intentions", "adaptive autonomy" | Static rule engine for changing environments |

### Adjacent decision boundaries

| If the question says... | Think first | Do not jump to... |
|---|---|---|
| "Must be auditable" | Explicit workflow, supervisor, approval gates | Autonomous peer-to-peer agents |
| "Unknown intermediate steps" | Bounded agent loop with tools | Static FAQ route |
| "Different requests need different depth" | Router by intent/risk/complexity | Largest model for every request |
| "Multiple teams or permissions" | Role decomposition plus state owner | One agent with every tool |
| "High-risk action" | Human approval before mutation | Post-action notification |

### Hands-on checks

1. Draw the workflow as nodes before naming any product.
2. Mark which nodes can call tools, which require approval, and which write memory.

---
domain: Agent Lifecycle and Architecture
weight: 14
status: populated
---

# Agent Lifecycle and Architecture

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

### Hands-on checks

1. Draw the workflow as nodes before naming any product.
2. Mark which nodes can call tools, which require approval, and which write memory.

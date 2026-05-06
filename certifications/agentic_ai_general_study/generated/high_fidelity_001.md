# High Fidelity Generated Questions 001

## Questions

### Q1: An insurance claims group is building an agent lifecycle design. The current design still relies on calling every LLM-backed flow an agent. Reviewers need a control that can choose the least autonomous pattern that satisfies the task and risk. Which design is the best first change?
- ID: ags-hf-agent-lifecycle-and-architecture-001
- Domain: Agent Lifecycle and Architecture
- Topic: agent vs workflow; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- B. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- C. Prioritize risk router even though the observed failure is around agent vs workflow.
- D. Release prompt, model, and evidence gate changes together with one aggregate score.
- Answer: A
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why B is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.

### Q2: A telecom network operations team is choosing between a design centered on unbounded autonomy and one that makes workflow graph explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-002
- Domain: Agent Lifecycle and Architecture
- Topic: workflow graph; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize tool boundary even though the observed failure is around workflow graph.
- B. Release prompt, model, and plan-and-execute changes together with one aggregate score.
- C. Increase model capacity or context length while leaving workflow graph implicit.
- D. Use workflow graph as the control boundary and require the system to use explicit states and gates for predictable or high-risk processes.
- Answer: D
- Explanation: Workflow graph is the missing control in this scenario. The right answer makes it explicit so the system can use explicit states and gates for predictable or high-risk processes.
- Why A is wrong: It moves attention to a neighboring control instead of making workflow graph testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether workflow graph fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q3: A hospital operations team passes the happy-path demo for an agent lifecycle design, but the failure is tied to router. The safer design is the one that can classify intent, risk, and evidence need before choosing a path. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-003
- Domain: Agent Lifecycle and Architecture
- Topic: router; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving router implicit.
- B. Use risk router as the main gate even though reviewers are asking for router evidence.
- C. Add a release gate for router: classify intent, risk, and evidence need before choosing a path.
- D. Release prompt, model, and risk router changes together with one aggregate score.
- Answer: C
- Explanation: Router is the missing control in this scenario. The right answer makes it explicit so the system can classify intent, risk, and evidence need before choosing a path.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making router testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether router fixed the failure.

### Q4: A semiconductor design group is building an agent lifecycle design. One-shot planning for changing tool results is being used as the shortcut, but it does not give the team a reliable way to iterate observe, reason, act, and verify with stopping criteria. Which action best fits the requirement?
- ID: ags-hf-agent-lifecycle-and-architecture-004
- Domain: Agent Lifecycle and Architecture
- Topic: ReAct loop; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for ReAct loop.
- B. Change the design around ReAct loop so the system can iterate observe, reason, act, and verify with stopping criteria.
- C. Increase model capacity or context length while leaving ReAct loop implicit.
- D. Use agent vs workflow as the main gate even though reviewers are asking for ReAct loop evidence.
- Answer: B
- Explanation: ReAct loop is the missing control in this scenario. The right answer makes it explicit so the system can iterate observe, reason, act, and verify with stopping criteria.
- Why A is wrong: Monitoring is useful, but this scenario needs ReAct loop controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making ReAct loop testable in the scenario.

### Q5: An automotive support team is building an agent lifecycle design. The failure appears when the system keeps continuing a stale plan as the workaround. The release needs a design step that can plan subgoals, execute steps, and replan when observations invalidate the plan. Which choice addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-005
- Domain: Agent Lifecycle and Architecture
- Topic: plan-and-execute; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce plan-and-execute; the system must plan subgoals, execute steps, and replan when observations invalidate the plan.
- B. Use evidence gate as the main gate even though reviewers are asking for plan-and-execute evidence.
- C. Move the check to post-release monitoring without changing the release path for plan-and-execute.
- D. Keep continuing a stale plan as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Plan-and-execute is the missing control in this scenario. The right answer makes it explicit so the system can plan subgoals, execute steps, and replan when observations invalidate the plan.
- Why B is wrong: It moves attention to a neighboring control instead of making plan-and-execute testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs plan-and-execute controlled before release or execution.
- Why D is wrong: It keeps continuing a stale plan in control instead of adding a measurable plan-and-execute decision point.

### Q6: A telecom network operations team is building an agent lifecycle design. The team can reproduce the failure around peer agents triggering production actions directly. The missing control is the one that can centralize routing, approvals, and handoffs across specialist agents. Which control should be added before rollout?
- ID: ags-hf-agent-lifecycle-and-architecture-006
- Domain: Agent Lifecycle and Architecture
- Topic: supervisor orchestration; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for supervisor orchestration.
- B. Keep peer agents triggering production actions directly as the main control and add a dashboard for final outputs.
- C. Prioritize router even though the observed failure is around supervisor orchestration.
- D. Put supervisor orchestration before rollout so the team can centralize routing, approvals, and handoffs across specialist agents.
- Answer: D
- Explanation: Supervisor orchestration is the missing control in this scenario. The right answer makes it explicit so the system can centralize routing, approvals, and handoffs across specialist agents.
- Why A is wrong: Monitoring is useful, but this scenario needs supervisor orchestration controlled before release or execution.
- Why B is wrong: It keeps peer agents triggering production actions directly in control instead of adding a measurable supervisor orchestration decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making supervisor orchestration testable in the scenario.

### Q7: A public-sector casework team passes the happy-path demo for an agent lifecycle design, but the current design still relies on adding agents to increase intelligence. Reviewers need a control that can split agents only when roles, tools, or permissions are meaningfully different. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-007
- Domain: Agent Lifecycle and Architecture
- Topic: multi-agent roles; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize tool boundary even though the observed failure is around multi-agent roles.
- B. Release prompt, model, and observe-reason-act loop changes together with one aggregate score.
- C. Make multi-agent roles explicit in the workflow: split agents only when roles, tools, or permissions are meaningfully different.
- D. Keep adding agents to increase intelligence as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Multi-agent roles is the missing control in this scenario. The right answer makes it explicit so the system can split agents only when roles, tools, or permissions are meaningfully different.
- Why A is wrong: It moves attention to a neighboring control instead of making multi-agent roles testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether multi-agent roles fixed the failure.
- Why D is wrong: It keeps adding agents to increase intelligence in control instead of adding a measurable multi-agent roles decision point.

### Q8: A semiconductor design group is building an agent lifecycle design. The failure appears when the system keeps letting prompt text grant tool access as the workaround. The release needs a design step that can keep model reasoning separate from server-side execution authority. Which architecture keeps the boundary cleanest?
- ID: ags-hf-agent-lifecycle-and-architecture-008
- Domain: Agent Lifecycle and Architecture
- Topic: tool boundary; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving tool boundary implicit.
- B. Use tool boundary as the control boundary and require the system to keep model reasoning separate from server-side execution authority.
- C. Prioritize workflow graph even though the observed failure is around tool boundary.
- D. Release prompt, model, and agent vs workflow changes together with one aggregate score.
- Answer: B
- Explanation: Tool boundary is the missing control in this scenario. The right answer makes it explicit so the system can keep model reasoning separate from server-side execution authority.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making tool boundary testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether tool boundary fixed the failure.

### Q9: An automotive support team is choosing between a design centered on one-shot planning for streaming incidents and one that makes observe-reason-act loop explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-009
- Domain: Agent Lifecycle and Architecture
- Topic: observe-reason-act loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for observe-reason-act loop: use iterative observation and re-planning when the environment changes.
- B. Release prompt, model, and workflow graph changes together with one aggregate score.
- C. Increase model capacity or context length while leaving observe-reason-act loop implicit.
- D. Use workflow graph as the main gate even though reviewers are asking for observe-reason-act loop evidence.
- Answer: A
- Explanation: Observe-reason-act loop is the missing control in this scenario. The right answer makes it explicit so the system can use iterative observation and re-planning when the environment changes.
- Why B is wrong: Changing several layers at once makes it harder to prove whether observe-reason-act loop fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making observe-reason-act loop testable in the scenario.

### Q10: During an architecture review, a telecom network operations team finds that letting the first retrieved document decide is being used as the shortcut, but it does not give the team a reliable way to require retrieval and tool observations before a decision node. What is the best next step?
- ID: ags-hf-agent-lifecycle-and-architecture-010
- Domain: Agent Lifecycle and Architecture
- Topic: evidence gate; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use ReAct loop as the main gate even though reviewers are asking for evidence gate evidence.
- B. Move the check to post-release monitoring without changing the release path for evidence gate.
- C. Change the design around evidence gate so the system can require retrieval and tool observations before a decision node.
- D. Increase model capacity or context length while leaving evidence gate implicit.
- Answer: C
- Explanation: Evidence gate is the missing control in this scenario. The right answer makes it explicit so the system can require retrieval and tool observations before a decision node.
- Why A is wrong: It moves attention to a neighboring control instead of making evidence gate testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs evidence gate controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q11: A telecom network operations team is choosing between a design centered on free-form autonomy for all requests and one that makes risk router explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-011
- Domain: Agent Lifecycle and Architecture
- Topic: risk router; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use multi-agent roles as the main gate even though reviewers are asking for risk router evidence.
- B. Move the check to post-release monitoring without changing the release path for risk router.
- C. Keep free-form autonomy for all requests as the main control and add a dashboard for final outputs.
- D. Instrument and enforce risk router; the system must route simple cases to deterministic paths and high-risk cases to review.
- Answer: D
- Explanation: Risk router is the missing control in this scenario. The right answer makes it explicit so the system can route simple cases to deterministic paths and high-risk cases to review.
- Why A is wrong: It moves attention to a neighboring control instead of making risk router testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs risk router controlled before release or execution.
- Why C is wrong: It keeps free-form autonomy for all requests in control instead of adding a measurable risk router decision point.

### Q12: A pharmaceutical research team passes the happy-path demo for an agent lifecycle design, but peer agents overwriting each other is being used as the shortcut, but it does not give the team a reliable way to assign one runtime owner for state transitions and handoffs. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-012
- Domain: Agent Lifecycle and Architecture
- Topic: state owner; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put state owner before rollout so the team can assign one runtime owner for state transitions and handoffs.
- B. Move the check to post-release monitoring without changing the release path for state owner.
- C. Keep peer agents overwriting each other as the main control and add a dashboard for final outputs.
- D. Prioritize ReAct loop even though the observed failure is around state owner.
- Answer: A
- Explanation: State owner is the missing control in this scenario. The right answer makes it explicit so the system can assign one runtime owner for state transitions and handoffs.
- Why B is wrong: Monitoring is useful, but this scenario needs state owner controlled before release or execution.
- Why C is wrong: It keeps peer agents overwriting each other in control instead of adding a measurable state owner decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making state owner testable in the scenario.

### Q13: A cybersecurity response team is triaging a failed pilot for an agent lifecycle design. The current design still relies on calling every LLM-backed flow an agent. Reviewers need a control that can choose the least autonomous pattern that satisfies the task and risk. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-013
- Domain: Agent Lifecycle and Architecture
- Topic: agent vs workflow; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and state owner changes together with one aggregate score.
- B. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- C. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- D. Prioritize risk router even though the observed failure is around agent vs workflow.
- Answer: B
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why A is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.
- Why C is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.

### Q14: A hospital operations team is choosing between a design centered on unbounded autonomy and one that makes workflow graph explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-014
- Domain: Agent Lifecycle and Architecture
- Topic: workflow graph; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and supervisor orchestration changes together with one aggregate score.
- B. Increase model capacity or context length while leaving workflow graph implicit.
- C. Use workflow graph as the control boundary and require the system to use explicit states and gates for predictable or high-risk processes.
- D. Prioritize multi-agent roles even though the observed failure is around workflow graph.
- Answer: C
- Explanation: Workflow graph is the missing control in this scenario. The right answer makes it explicit so the system can use explicit states and gates for predictable or high-risk processes.
- Why A is wrong: Changing several layers at once makes it harder to prove whether workflow graph fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making workflow graph testable in the scenario.

### Q15: A telecom network operations team is building an agent lifecycle design. The current design still relies on largest model for every request. Reviewers need a control that can classify intent, risk, and evidence need before choosing a path. Which action best fits the requirement?
- ID: ags-hf-agent-lifecycle-and-architecture-015
- Domain: Agent Lifecycle and Architecture
- Topic: router; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and tool boundary changes together with one aggregate score.
- B. Increase model capacity or context length while leaving router implicit.
- C. Use tool boundary as the main gate even though reviewers are asking for router evidence.
- D. Add a release gate for router: classify intent, risk, and evidence need before choosing a path.
- Answer: D
- Explanation: Router is the missing control in this scenario. The right answer makes it explicit so the system can classify intent, risk, and evidence need before choosing a path.
- Why A is wrong: Changing several layers at once makes it harder to prove whether router fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making router testable in the scenario.

### Q16: A pharmaceutical research team passes the happy-path demo for an agent lifecycle design, but one-shot planning for changing tool results is being used as the shortcut, but it does not give the team a reliable way to iterate observe, reason, act, and verify with stopping criteria. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-016
- Domain: Agent Lifecycle and Architecture
- Topic: ReAct loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around ReAct loop so the system can iterate observe, reason, act, and verify with stopping criteria.
- B. Increase model capacity or context length while leaving ReAct loop implicit.
- C. Use plan-and-execute as the main gate even though reviewers are asking for ReAct loop evidence.
- D. Move the check to post-release monitoring without changing the release path for ReAct loop.
- Answer: A
- Explanation: ReAct loop is the missing control in this scenario. The right answer makes it explicit so the system can iterate observe, reason, act, and verify with stopping criteria.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making ReAct loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs ReAct loop controlled before release or execution.

### Q17: A semiconductor design group is choosing between a design centered on continuing a stale plan and one that makes plan-and-execute explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-017
- Domain: Agent Lifecycle and Architecture
- Topic: plan-and-execute; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep continuing a stale plan as the main control and add a dashboard for final outputs.
- B. Instrument and enforce plan-and-execute; the system must plan subgoals, execute steps, and replan when observations invalidate the plan.
- C. Use supervisor orchestration as the main gate even though reviewers are asking for plan-and-execute evidence.
- D. Move the check to post-release monitoring without changing the release path for plan-and-execute.
- Answer: B
- Explanation: Plan-and-execute is the missing control in this scenario. The right answer makes it explicit so the system can plan subgoals, execute steps, and replan when observations invalidate the plan.
- Why A is wrong: It keeps continuing a stale plan in control instead of adding a measurable plan-and-execute decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making plan-and-execute testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs plan-and-execute controlled before release or execution.

### Q18: A hospital operations team is choosing between a design centered on peer agents triggering production actions directly and one that makes supervisor orchestration explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-018
- Domain: Agent Lifecycle and Architecture
- Topic: supervisor orchestration; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep peer agents triggering production actions directly as the main control and add a dashboard for final outputs.
- B. Prioritize evidence gate even though the observed failure is around supervisor orchestration.
- C. Put supervisor orchestration before rollout so the team can centralize routing, approvals, and handoffs across specialist agents.
- D. Move the check to post-release monitoring without changing the release path for supervisor orchestration.
- Answer: C
- Explanation: Supervisor orchestration is the missing control in this scenario. The right answer makes it explicit so the system can centralize routing, approvals, and handoffs across specialist agents.
- Why A is wrong: It keeps peer agents triggering production actions directly in control instead of adding a measurable supervisor orchestration decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making supervisor orchestration testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs supervisor orchestration controlled before release or execution.

### Q19: A logistics planning team is triaging a failed pilot for an agent lifecycle design. The failure appears when the system keeps adding agents to increase intelligence as the workaround. The release needs a design step that can split agents only when roles, tools, or permissions are meaningfully different. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-019
- Domain: Agent Lifecycle and Architecture
- Topic: multi-agent roles; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep adding agents to increase intelligence as the main control and add a dashboard for final outputs.
- B. Prioritize supervisor orchestration even though the observed failure is around multi-agent roles.
- C. Release prompt, model, and evidence gate changes together with one aggregate score.
- D. Make multi-agent roles explicit in the workflow: split agents only when roles, tools, or permissions are meaningfully different.
- Answer: D
- Explanation: Multi-agent roles is the missing control in this scenario. The right answer makes it explicit so the system can split agents only when roles, tools, or permissions are meaningfully different.
- Why A is wrong: It keeps adding agents to increase intelligence in control instead of adding a measurable multi-agent roles decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making multi-agent roles testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether multi-agent roles fixed the failure.

### Q20: During an architecture review, an insurance claims group finds that the failure appears when the system keeps letting prompt text grant tool access as the workaround. The release needs a design step that can keep model reasoning separate from server-side execution authority. What is the best next step?
- ID: ags-hf-agent-lifecycle-and-architecture-020
- Domain: Agent Lifecycle and Architecture
- Topic: tool boundary; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize multi-agent roles even though the observed failure is around tool boundary.
- B. Release prompt, model, and ReAct loop changes together with one aggregate score.
- C. Increase model capacity or context length while leaving tool boundary implicit.
- D. Use tool boundary as the control boundary and require the system to keep model reasoning separate from server-side execution authority.
- Answer: D
- Explanation: Tool boundary is the missing control in this scenario. The right answer makes it explicit so the system can keep model reasoning separate from server-side execution authority.
- Why A is wrong: It moves attention to a neighboring control instead of making tool boundary testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether tool boundary fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q21: A pharmaceutical research team is building an agent lifecycle design. One-shot planning for streaming incidents is being used as the shortcut, but it does not give the team a reliable way to use iterative observation and re-planning when the environment changes. Which choice addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-021
- Domain: Agent Lifecycle and Architecture
- Topic: observe-reason-act loop; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving observe-reason-act loop implicit.
- B. Use router as the main gate even though reviewers are asking for observe-reason-act loop evidence.
- C. Add a release gate for observe-reason-act loop: use iterative observation and re-planning when the environment changes.
- D. Release prompt, model, and router changes together with one aggregate score.
- Answer: C
- Explanation: Observe-reason-act loop is the missing control in this scenario. The right answer makes it explicit so the system can use iterative observation and re-planning when the environment changes.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making observe-reason-act loop testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether observe-reason-act loop fixed the failure.

### Q22: A global retailer passes the happy-path demo for an agent lifecycle design, but the failure appears when the system keeps letting the first retrieved document decide as the workaround. The release needs a design step that can require retrieval and tool observations before a decision node. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-022
- Domain: Agent Lifecycle and Architecture
- Topic: evidence gate; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for evidence gate.
- B. Change the design around evidence gate so the system can require retrieval and tool observations before a decision node.
- C. Increase model capacity or context length while leaving evidence gate implicit.
- D. Use agent vs workflow as the main gate even though reviewers are asking for evidence gate evidence.
- Answer: B
- Explanation: Evidence gate is the missing control in this scenario. The right answer makes it explicit so the system can require retrieval and tool observations before a decision node.
- Why A is wrong: Monitoring is useful, but this scenario needs evidence gate controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making evidence gate testable in the scenario.

### Q23: A manufacturing quality team passes the happy-path demo for an agent lifecycle design, but free-form autonomy for all requests is being used as the shortcut, but it does not give the team a reliable way to route simple cases to deterministic paths and high-risk cases to review. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-023
- Domain: Agent Lifecycle and Architecture
- Topic: risk router; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce risk router; the system must route simple cases to deterministic paths and high-risk cases to review.
- B. Use multi-agent roles as the main gate even though reviewers are asking for risk router evidence.
- C. Move the check to post-release monitoring without changing the release path for risk router.
- D. Keep free-form autonomy for all requests as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Risk router is the missing control in this scenario. The right answer makes it explicit so the system can route simple cases to deterministic paths and high-risk cases to review.
- Why B is wrong: It moves attention to a neighboring control instead of making risk router testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs risk router controlled before release or execution.
- Why D is wrong: It keeps free-form autonomy for all requests in control instead of adding a measurable risk router decision point.

### Q24: A cybersecurity response team is triaging a failed pilot for an agent lifecycle design. Peer agents overwriting each other is being used as the shortcut, but it does not give the team a reliable way to assign one runtime owner for state transitions and handoffs. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-024
- Domain: Agent Lifecycle and Architecture
- Topic: state owner; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for state owner.
- B. Keep peer agents overwriting each other as the main control and add a dashboard for final outputs.
- C. Prioritize tool boundary even though the observed failure is around state owner.
- D. Put state owner before rollout so the team can assign one runtime owner for state transitions and handoffs.
- Answer: D
- Explanation: State owner is the missing control in this scenario. The right answer makes it explicit so the system can assign one runtime owner for state transitions and handoffs.
- Why A is wrong: Monitoring is useful, but this scenario needs state owner controlled before release or execution.
- Why B is wrong: It keeps peer agents overwriting each other in control instead of adding a measurable state owner decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making state owner testable in the scenario.

### Q25: A pharmaceutical research team is building an agent lifecycle design. Calling every LLM-backed flow an agent is being used as the shortcut, but it does not give the team a reliable way to choose the least autonomous pattern that satisfies the task and risk. Which implementation path is most appropriate?
- ID: ags-hf-agent-lifecycle-and-architecture-025
- Domain: Agent Lifecycle and Architecture
- Topic: agent vs workflow; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize workflow graph even though the observed failure is around agent vs workflow.
- B. Release prompt, model, and plan-and-execute changes together with one aggregate score.
- C. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- D. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why A is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.
- Why D is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.

### Q26: A telecom network operations team is choosing between a design centered on unbounded autonomy and one that makes workflow graph explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-026
- Domain: Agent Lifecycle and Architecture
- Topic: workflow graph; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving workflow graph implicit.
- B. Use workflow graph as the control boundary and require the system to use explicit states and gates for predictable or high-risk processes.
- C. Prioritize router even though the observed failure is around workflow graph.
- D. Release prompt, model, and ReAct loop changes together with one aggregate score.
- Answer: B
- Explanation: Workflow graph is the missing control in this scenario. The right answer makes it explicit so the system can use explicit states and gates for predictable or high-risk processes.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making workflow graph testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether workflow graph fixed the failure.

### Q27: A manufacturing quality team is choosing between a design centered on largest model for every request and one that makes router explicit for an agent lifecycle design. Which design should win?
- ID: ags-hf-agent-lifecycle-and-architecture-027
- Domain: Agent Lifecycle and Architecture
- Topic: router; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for router: classify intent, risk, and evidence need before choosing a path.
- B. Release prompt, model, and agent vs workflow changes together with one aggregate score.
- C. Increase model capacity or context length while leaving router implicit.
- D. Use agent vs workflow as the main gate even though reviewers are asking for router evidence.
- Answer: A
- Explanation: Router is the missing control in this scenario. The right answer makes it explicit so the system can classify intent, risk, and evidence need before choosing a path.
- Why B is wrong: Changing several layers at once makes it harder to prove whether router fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making router testable in the scenario.

### Q28: A cybersecurity response team is triaging a failed pilot for an agent lifecycle design. The current design still relies on one-shot planning for changing tool results. Reviewers need a control that can iterate observe, reason, act, and verify with stopping criteria. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-028
- Domain: Agent Lifecycle and Architecture
- Topic: ReAct loop; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving ReAct loop implicit.
- B. Use observe-reason-act loop as the main gate even though reviewers are asking for ReAct loop evidence.
- C. Move the check to post-release monitoring without changing the release path for ReAct loop.
- D. Change the design around ReAct loop so the system can iterate observe, reason, act, and verify with stopping criteria.
- Answer: D
- Explanation: ReAct loop is the missing control in this scenario. The right answer makes it explicit so the system can iterate observe, reason, act, and verify with stopping criteria.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making ReAct loop testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs ReAct loop controlled before release or execution.

### Q29: An automotive support team is triaging a failed pilot for an agent lifecycle design. Continuing a stale plan is being used as the shortcut, but it does not give the team a reliable way to plan subgoals, execute steps, and replan when observations invalidate the plan. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-029
- Domain: Agent Lifecycle and Architecture
- Topic: plan-and-execute; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for plan-and-execute.
- B. Keep continuing a stale plan as the main control and add a dashboard for final outputs.
- C. Instrument and enforce plan-and-execute; the system must plan subgoals, execute steps, and replan when observations invalidate the plan.
- D. Use supervisor orchestration as the main gate even though reviewers are asking for plan-and-execute evidence.
- Answer: C
- Explanation: Plan-and-execute is the missing control in this scenario. The right answer makes it explicit so the system can plan subgoals, execute steps, and replan when observations invalidate the plan.
- Why A is wrong: Monitoring is useful, but this scenario needs plan-and-execute controlled before release or execution.
- Why B is wrong: It keeps continuing a stale plan in control instead of adding a measurable plan-and-execute decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making plan-and-execute testable in the scenario.

### Q30: A telecom network operations team is triaging a failed pilot for an agent lifecycle design. Peer agents triggering production actions directly is being used as the shortcut, but it does not give the team a reliable way to centralize routing, approvals, and handoffs across specialist agents. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-030
- Domain: Agent Lifecycle and Architecture
- Topic: supervisor orchestration; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Put supervisor orchestration before rollout so the team can centralize routing, approvals, and handoffs across specialist agents.
- B. Move the check to post-release monitoring without changing the release path for supervisor orchestration.
- C. Keep peer agents triggering production actions directly as the main control and add a dashboard for final outputs.
- D. Prioritize multi-agent roles even though the observed failure is around supervisor orchestration.
- Answer: A
- Explanation: Supervisor orchestration is the missing control in this scenario. The right answer makes it explicit so the system can centralize routing, approvals, and handoffs across specialist agents.
- Why B is wrong: Monitoring is useful, but this scenario needs supervisor orchestration controlled before release or execution.
- Why C is wrong: It keeps peer agents triggering production actions directly in control instead of adding a measurable supervisor orchestration decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making supervisor orchestration testable in the scenario.

### Q31: A cybersecurity response team passes the happy-path demo for an agent lifecycle design, but the current design still relies on adding agents to increase intelligence. Reviewers need a control that can split agents only when roles, tools, or permissions are meaningfully different. Which change should be made before release?
- ID: ags-hf-agent-lifecycle-and-architecture-031
- Domain: Agent Lifecycle and Architecture
- Topic: multi-agent roles; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and evidence gate changes together with one aggregate score.
- B. Make multi-agent roles explicit in the workflow: split agents only when roles, tools, or permissions are meaningfully different.
- C. Keep adding agents to increase intelligence as the main control and add a dashboard for final outputs.
- D. Prioritize risk router even though the observed failure is around multi-agent roles.
- Answer: B
- Explanation: Multi-agent roles is the missing control in this scenario. The right answer makes it explicit so the system can split agents only when roles, tools, or permissions are meaningfully different.
- Why A is wrong: Changing several layers at once makes it harder to prove whether multi-agent roles fixed the failure.
- Why C is wrong: It keeps adding agents to increase intelligence in control instead of adding a measurable multi-agent roles decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making multi-agent roles testable in the scenario.

### Q32: A public-sector casework team is triaging a failed pilot for an agent lifecycle design. Letting prompt text grant tool access is being used as the shortcut, but it does not give the team a reliable way to keep model reasoning separate from server-side execution authority. Which control addresses the root cause?
- ID: ags-hf-agent-lifecycle-and-architecture-032
- Domain: Agent Lifecycle and Architecture
- Topic: tool boundary; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and state owner changes together with one aggregate score.
- B. Increase model capacity or context length while leaving tool boundary implicit.
- C. Use tool boundary as the control boundary and require the system to keep model reasoning separate from server-side execution authority.
- D. Prioritize risk router even though the observed failure is around tool boundary.
- Answer: C
- Explanation: Tool boundary is the missing control in this scenario. The right answer makes it explicit so the system can keep model reasoning separate from server-side execution authority.
- Why A is wrong: Changing several layers at once makes it harder to prove whether tool boundary fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making tool boundary testable in the scenario.

### Q33: An automotive support team is triaging a failed pilot for a data and grounding pipeline. The failure appears when the system keeps post-answer filtering as the workaround. The release needs a design step that can filter by ACL before chunks enter context. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-001
- Domain: Data Curation and Knowledge Grounding
- Topic: permissioned RAG; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- B. Prioritize corpus governance even though the observed failure is around permissioned RAG.
- C. Release prompt, model, and knowledge graph changes together with one aggregate score.
- D. Make permissioned RAG explicit in the workflow: filter by ACL before chunks enter context.
- Answer: D
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why A is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether permissioned RAG fixed the failure.

### Q34: During an architecture review, a global retailer finds that raw PDFs pasted into prompts is being used as the shortcut, but it does not give the team a reliable way to extract, clean, segment, and normalize documents before indexing. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-002
- Domain: Data Curation and Knowledge Grounding
- Topic: document ETL; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use document ETL as the control boundary and require the system to extract, clean, segment, and normalize documents before indexing.
- B. Prioritize data freshness even though the observed failure is around document ETL.
- C. Release prompt, model, and vector database changes together with one aggregate score.
- D. Increase model capacity or context length while leaving document ETL implicit.
- Answer: A
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why B is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether document ETL fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q35: During an architecture review, a hospital operations team finds that the failure is tied to chunking and metadata. The safer design is the one that can preserve source, tenant, time, and sensitivity metadata. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-003
- Domain: Data Curation and Knowledge Grounding
- Topic: chunking and metadata; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use vector database as the main gate even though reviewers are asking for chunking and metadata evidence.
- B. Add a release gate for chunking and metadata: preserve source, tenant, time, and sensitivity metadata.
- C. Release prompt, model, and vector database changes together with one aggregate score.
- D. Increase model capacity or context length while leaving chunking and metadata implicit.
- Answer: B
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q36: A semiconductor design group is triaging a failed pilot for a data and grounding pipeline. Chat completion models as vector indexes is being used as the shortcut, but it does not give the team a reliable way to represent chunks and queries for semantic retrieval. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-004
- Domain: Data Curation and Knowledge Grounding
- Topic: embeddings; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use reranking as the main gate even though reviewers are asking for embeddings evidence.
- B. Move the check to post-release monitoring without changing the release path for embeddings.
- C. Change the design around embeddings so the system can represent chunks and queries for semantic retrieval.
- D. Increase model capacity or context length while leaving embeddings implicit.
- Answer: C
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why A is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs embeddings controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q37: An automotive support team is triaging a failed pilot for a data and grounding pipeline. The current design still relies on prompt context as the database. Reviewers need a control that can index embeddings with metadata filters and update policy. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-005
- Domain: Data Curation and Knowledge Grounding
- Topic: vector database; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use hybrid search as the main gate even though reviewers are asking for vector database evidence.
- B. Move the check to post-release monitoring without changing the release path for vector database.
- C. Keep prompt context as the database as the main control and add a dashboard for final outputs.
- D. Instrument and enforce vector database; the system must index embeddings with metadata filters and update policy.
- Answer: D
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why A is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs vector database controlled before release or execution.
- Why C is wrong: It keeps prompt context as the database in control instead of adding a measurable vector database decision point.

### Q38: A telecom network operations team is building a data and grounding pipeline. The team can reproduce the failure around semantic search only. The missing control is the one that can combine lexical and vector retrieval when exact terms and semantics both matter. Which action best fits the requirement?
- ID: ags-hf-data-curation-and-knowledge-grounding-006
- Domain: Data Curation and Knowledge Grounding
- Topic: hybrid search; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put hybrid search before rollout so the team can combine lexical and vector retrieval when exact terms and semantics both matter.
- B. Move the check to post-release monitoring without changing the release path for hybrid search.
- C. Keep semantic search only as the main control and add a dashboard for final outputs.
- D. Prioritize permissioned RAG even though the observed failure is around hybrid search.
- Answer: A
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why B is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.
- Why C is wrong: It keeps semantic search only in control instead of adding a measurable hybrid search decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.

### Q39: A manufacturing quality team is building a data and grounding pipeline. The failure is tied to reranking. The safer design is the one that can rerank candidate chunks before context assembly. Which implementation path is most appropriate?
- ID: ags-hf-data-curation-and-knowledge-grounding-007
- Domain: Data Curation and Knowledge Grounding
- Topic: reranking; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and embeddings changes together with one aggregate score.
- B. Make reranking explicit in the workflow: rerank candidate chunks before context assembly.
- C. Keep larger context as the only fix as the main control and add a dashboard for final outputs.
- D. Prioritize data freshness even though the observed failure is around reranking.
- Answer: B
- Explanation: Reranking is the missing control in this scenario. The right answer makes it explicit so the system can rerank candidate chunks before context assembly.
- Why A is wrong: Changing several layers at once makes it harder to prove whether reranking fixed the failure.
- Why C is wrong: It keeps larger context as the only fix in control instead of adding a measurable reranking decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making reranking testable in the scenario.

### Q40: A bank fraud team is choosing between a design centered on fine-tuning on volatile policy documents and one that makes data freshness explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-008
- Domain: Data Curation and Knowledge Grounding
- Topic: data freshness; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and knowledge graph changes together with one aggregate score.
- B. Increase model capacity or context length while leaving data freshness implicit.
- C. Use data freshness as the control boundary and require the system to use retrieval for changing facts.
- D. Prioritize hybrid search even though the observed failure is around data freshness.
- Answer: C
- Explanation: Data freshness is the missing control in this scenario. The right answer makes it explicit so the system can use retrieval for changing facts.
- Why A is wrong: Changing several layers at once makes it harder to prove whether data freshness fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making data freshness testable in the scenario.

### Q41: An automotive support team is choosing between a design centered on uncited summaries and one that makes grounded citations explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-009
- Domain: Data Curation and Knowledge Grounding
- Topic: grounded citations; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and permissioned RAG changes together with one aggregate score.
- B. Increase model capacity or context length while leaving grounded citations implicit.
- C. Use permissioned RAG as the main gate even though reviewers are asking for grounded citations evidence.
- D. Add a release gate for grounded citations: return answer evidence linked to source chunks.
- Answer: D
- Explanation: Grounded citations is the missing control in this scenario. The right answer makes it explicit so the system can return answer evidence linked to source chunks.
- Why A is wrong: Changing several layers at once makes it harder to prove whether grounded citations fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making grounded citations testable in the scenario.

### Q42: During an architecture review, a global retailer finds that flat chunks for every graph problem is being used as the shortcut, but it does not give the team a reliable way to represent entities and relationships when relationship reasoning matters. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-010
- Domain: Data Curation and Knowledge Grounding
- Topic: knowledge graph; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for knowledge graph.
- B. Change the design around knowledge graph so the system can represent entities and relationships when relationship reasoning matters.
- C. Increase model capacity or context length while leaving knowledge graph implicit.
- D. Use hybrid search as the main gate even though reviewers are asking for knowledge graph evidence.
- Answer: B
- Explanation: Knowledge graph is the missing control in this scenario. The right answer makes it explicit so the system can represent entities and relationships when relationship reasoning matters.
- Why A is wrong: Monitoring is useful, but this scenario needs knowledge graph controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making knowledge graph testable in the scenario.

### Q43: A global retailer is building a data and grounding pipeline. Unversioned document dumps is being used as the shortcut, but it does not give the team a reliable way to track source, license, sensitivity, retention, and lineage. Which control should be added before rollout?
- ID: ags-hf-data-curation-and-knowledge-grounding-011
- Domain: Data Curation and Knowledge Grounding
- Topic: corpus governance; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce corpus governance; the system must track source, license, sensitivity, retention, and lineage.
- B. Use data freshness as the main gate even though reviewers are asking for corpus governance evidence.
- C. Move the check to post-release monitoring without changing the release path for corpus governance.
- D. Keep unversioned document dumps as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Corpus governance is the missing control in this scenario. The right answer makes it explicit so the system can track source, license, sensitivity, retention, and lineage.
- Why B is wrong: It moves attention to a neighboring control instead of making corpus governance testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs corpus governance controlled before release or execution.
- Why D is wrong: It keeps unversioned document dumps in control instead of adding a measurable corpus governance decision point.

### Q44: An insurance claims group passes the happy-path demo for a data and grounding pipeline, but the failure appears when the system keeps post-answer filtering as the workaround. The release needs a design step that can filter by ACL before chunks enter context. Which change should be made before release?
- ID: ags-hf-data-curation-and-knowledge-grounding-012
- Domain: Data Curation and Knowledge Grounding
- Topic: permissioned RAG; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for permissioned RAG.
- B. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- C. Prioritize grounded citations even though the observed failure is around permissioned RAG.
- D. Put permissioned RAG before rollout so the team can filter by ACL before chunks enter context.
- Answer: D
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why A is wrong: Monitoring is useful, but this scenario needs permissioned RAG controlled before release or execution.
- Why B is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.

### Q45: A cybersecurity response team is triaging a failed pilot for a data and grounding pipeline. Raw PDFs pasted into prompts is being used as the shortcut, but it does not give the team a reliable way to extract, clean, segment, and normalize documents before indexing. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-013
- Domain: Data Curation and Knowledge Grounding
- Topic: document ETL; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize knowledge graph even though the observed failure is around document ETL.
- B. Release prompt, model, and corpus governance changes together with one aggregate score.
- C. Make document ETL explicit in the workflow: extract, clean, segment, and normalize documents before indexing.
- D. Keep raw PDFs pasted into prompts as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why A is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether document ETL fixed the failure.
- Why D is wrong: It keeps raw PDFs pasted into prompts in control instead of adding a measurable document ETL decision point.

### Q46: A hospital operations team is triaging a failed pilot for a data and grounding pipeline. The failure is tied to chunking and metadata. The safer design is the one that can preserve source, tenant, time, and sensitivity metadata. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-014
- Domain: Data Curation and Knowledge Grounding
- Topic: chunking and metadata; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving chunking and metadata implicit.
- B. Use chunking and metadata as the control boundary and require the system to preserve source, tenant, time, and sensitivity metadata.
- C. Prioritize embeddings even though the observed failure is around chunking and metadata.
- D. Release prompt, model, and corpus governance changes together with one aggregate score.
- Answer: B
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.

### Q47: During an architecture review, a logistics planning team finds that the current design still relies on chat completion models as vector indexes. Reviewers need a control that can represent chunks and queries for semantic retrieval. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-015
- Domain: Data Curation and Knowledge Grounding
- Topic: embeddings; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Add a release gate for embeddings: represent chunks and queries for semantic retrieval.
- B. Release prompt, model, and corpus governance changes together with one aggregate score.
- C. Increase model capacity or context length while leaving embeddings implicit.
- D. Use corpus governance as the main gate even though reviewers are asking for embeddings evidence.
- Answer: A
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why B is wrong: Changing several layers at once makes it harder to prove whether embeddings fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.

### Q48: An automotive support team is triaging a failed pilot for a data and grounding pipeline. The team can reproduce the failure around prompt context as the database. The missing control is the one that can index embeddings with metadata filters and update policy. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-016
- Domain: Data Curation and Knowledge Grounding
- Topic: vector database; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving vector database implicit.
- B. Use permissioned RAG as the main gate even though reviewers are asking for vector database evidence.
- C. Move the check to post-release monitoring without changing the release path for vector database.
- D. Change the design around vector database so the system can index embeddings with metadata filters and update policy.
- Answer: D
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs vector database controlled before release or execution.

### Q49: A cybersecurity response team is choosing between a design centered on semantic search only and one that makes hybrid search explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-017
- Domain: Data Curation and Knowledge Grounding
- Topic: hybrid search; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for hybrid search.
- B. Keep semantic search only as the main control and add a dashboard for final outputs.
- C. Instrument and enforce hybrid search; the system must combine lexical and vector retrieval when exact terms and semantics both matter.
- D. Use document ETL as the main gate even though reviewers are asking for hybrid search evidence.
- Answer: C
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why A is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.
- Why B is wrong: It keeps semantic search only in control instead of adding a measurable hybrid search decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.

### Q50: During an architecture review, a hospital operations team finds that larger context as the only fix is being used as the shortcut, but it does not give the team a reliable way to rerank candidate chunks before context assembly. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-018
- Domain: Data Curation and Knowledge Grounding
- Topic: reranking; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize data freshness even though the observed failure is around reranking.
- B. Put reranking before rollout so the team can rerank candidate chunks before context assembly.
- C. Move the check to post-release monitoring without changing the release path for reranking.
- D. Keep larger context as the only fix as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Reranking is the missing control in this scenario. The right answer makes it explicit so the system can rerank candidate chunks before context assembly.
- Why A is wrong: It moves attention to a neighboring control instead of making reranking testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs reranking controlled before release or execution.
- Why D is wrong: It keeps larger context as the only fix in control instead of adding a measurable reranking decision point.

### Q51: During an architecture review, a logistics planning team finds that the current design still relies on fine-tuning on volatile policy documents. Reviewers need a control that can use retrieval for changing facts. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-019
- Domain: Data Curation and Knowledge Grounding
- Topic: data freshness; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make data freshness explicit in the workflow: use retrieval for changing facts.
- B. Keep fine-tuning on volatile policy documents as the main control and add a dashboard for final outputs.
- C. Prioritize hybrid search even though the observed failure is around data freshness.
- D. Release prompt, model, and knowledge graph changes together with one aggregate score.
- Answer: A
- Explanation: Data freshness is the missing control in this scenario. The right answer makes it explicit so the system can use retrieval for changing facts.
- Why B is wrong: It keeps fine-tuning on volatile policy documents in control instead of adding a measurable data freshness decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making data freshness testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether data freshness fixed the failure.

### Q52: A pharmaceutical research team is building a data and grounding pipeline. The team can reproduce the failure around uncited summaries. The missing control is the one that can return answer evidence linked to source chunks. Which choice addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-020
- Domain: Data Curation and Knowledge Grounding
- Topic: grounded citations; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use grounded citations as the control boundary and require the system to return answer evidence linked to source chunks.
- B. Prioritize data freshness even though the observed failure is around grounded citations.
- C. Release prompt, model, and reranking changes together with one aggregate score.
- D. Increase model capacity or context length while leaving grounded citations implicit.
- Answer: A
- Explanation: Grounded citations is the missing control in this scenario. The right answer makes it explicit so the system can return answer evidence linked to source chunks.
- Why B is wrong: It moves attention to a neighboring control instead of making grounded citations testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether grounded citations fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q53: A pharmaceutical research team is triaging a failed pilot for a data and grounding pipeline. The team can reproduce the failure around flat chunks for every graph problem. The missing control is the one that can represent entities and relationships when relationship reasoning matters. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-021
- Domain: Data Curation and Knowledge Grounding
- Topic: knowledge graph; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use chunking and metadata as the main gate even though reviewers are asking for knowledge graph evidence.
- B. Add a release gate for knowledge graph: represent entities and relationships when relationship reasoning matters.
- C. Release prompt, model, and chunking and metadata changes together with one aggregate score.
- D. Increase model capacity or context length while leaving knowledge graph implicit.
- Answer: B
- Explanation: Knowledge graph is the missing control in this scenario. The right answer makes it explicit so the system can represent entities and relationships when relationship reasoning matters.
- Why A is wrong: It moves attention to a neighboring control instead of making knowledge graph testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether knowledge graph fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q54: During an architecture review, a global retailer finds that the team can reproduce the failure around unversioned document dumps. The missing control is the one that can track source, license, sensitivity, retention, and lineage. What is the best next step?
- ID: ags-hf-data-curation-and-knowledge-grounding-022
- Domain: Data Curation and Knowledge Grounding
- Topic: corpus governance; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use knowledge graph as the main gate even though reviewers are asking for corpus governance evidence.
- B. Move the check to post-release monitoring without changing the release path for corpus governance.
- C. Change the design around corpus governance so the system can track source, license, sensitivity, retention, and lineage.
- D. Increase model capacity or context length while leaving corpus governance implicit.
- Answer: C
- Explanation: Corpus governance is the missing control in this scenario. The right answer makes it explicit so the system can track source, license, sensitivity, retention, and lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making corpus governance testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs corpus governance controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q55: A public-sector casework team is choosing between a design centered on post-answer filtering and one that makes permissioned RAG explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-023
- Domain: Data Curation and Knowledge Grounding
- Topic: permissioned RAG; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use document ETL as the main gate even though reviewers are asking for permissioned RAG evidence.
- B. Move the check to post-release monitoring without changing the release path for permissioned RAG.
- C. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- D. Instrument and enforce permissioned RAG; the system must filter by ACL before chunks enter context.
- Answer: D
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why A is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs permissioned RAG controlled before release or execution.
- Why C is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.

### Q56: A bank fraud team is triaging a failed pilot for a data and grounding pipeline. Raw PDFs pasted into prompts is being used as the shortcut, but it does not give the team a reliable way to extract, clean, segment, and normalize documents before indexing. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-024
- Domain: Data Curation and Knowledge Grounding
- Topic: document ETL; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Put document ETL before rollout so the team can extract, clean, segment, and normalize documents before indexing.
- B. Move the check to post-release monitoring without changing the release path for document ETL.
- C. Keep raw PDFs pasted into prompts as the main control and add a dashboard for final outputs.
- D. Prioritize knowledge graph even though the observed failure is around document ETL.
- Answer: A
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why B is wrong: Monitoring is useful, but this scenario needs document ETL controlled before release or execution.
- Why C is wrong: It keeps raw PDFs pasted into prompts in control instead of adding a measurable document ETL decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.

### Q57: A pharmaceutical research team passes the happy-path demo for a data and grounding pipeline, but the failure appears when the system keeps anonymous chunks with no lineage as the workaround. The release needs a design step that can preserve source, tenant, time, and sensitivity metadata. Which change should be made before release?
- ID: ags-hf-data-curation-and-knowledge-grounding-025
- Domain: Data Curation and Knowledge Grounding
- Topic: chunking and metadata; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and vector database changes together with one aggregate score.
- B. Make chunking and metadata explicit in the workflow: preserve source, tenant, time, and sensitivity metadata.
- C. Keep anonymous chunks with no lineage as the main control and add a dashboard for final outputs.
- D. Prioritize embeddings even though the observed failure is around chunking and metadata.
- Answer: B
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.
- Why C is wrong: It keeps anonymous chunks with no lineage in control instead of adding a measurable chunking and metadata decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.

### Q58: A telecom network operations team passes the happy-path demo for a data and grounding pipeline, but chat completion models as vector indexes is being used as the shortcut, but it does not give the team a reliable way to represent chunks and queries for semantic retrieval. Which change should be made before release?
- ID: ags-hf-data-curation-and-knowledge-grounding-026
- Domain: Data Curation and Knowledge Grounding
- Topic: embeddings; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and reranking changes together with one aggregate score.
- B. Increase model capacity or context length while leaving embeddings implicit.
- C. Use embeddings as the control boundary and require the system to represent chunks and queries for semantic retrieval.
- D. Prioritize knowledge graph even though the observed failure is around embeddings.
- Answer: C
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why A is wrong: Changing several layers at once makes it harder to prove whether embeddings fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.

### Q59: A public-sector casework team is choosing between a design centered on prompt context as the database and one that makes vector database explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-027
- Domain: Data Curation and Knowledge Grounding
- Topic: vector database; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and chunking and metadata changes together with one aggregate score.
- B. Increase model capacity or context length while leaving vector database implicit.
- C. Use chunking and metadata as the main gate even though reviewers are asking for vector database evidence.
- D. Add a release gate for vector database: index embeddings with metadata filters and update policy.
- Answer: D
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why A is wrong: Changing several layers at once makes it harder to prove whether vector database fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.

### Q60: A cybersecurity response team is triaging a failed pilot for a data and grounding pipeline. The failure is tied to hybrid search. The safer design is the one that can combine lexical and vector retrieval when exact terms and semantics both matter. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-028
- Domain: Data Curation and Knowledge Grounding
- Topic: hybrid search; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Change the design around hybrid search so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- B. Increase model capacity or context length while leaving hybrid search implicit.
- C. Use corpus governance as the main gate even though reviewers are asking for hybrid search evidence.
- D. Move the check to post-release monitoring without changing the release path for hybrid search.
- Answer: A
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.

### Q61: A pharmaceutical research team is choosing between a design centered on larger context as the only fix and one that makes reranking explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-029
- Domain: Data Curation and Knowledge Grounding
- Topic: reranking; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep larger context as the only fix as the main control and add a dashboard for final outputs.
- B. Instrument and enforce reranking; the system must rerank candidate chunks before context assembly.
- C. Use document ETL as the main gate even though reviewers are asking for reranking evidence.
- D. Move the check to post-release monitoring without changing the release path for reranking.
- Answer: B
- Explanation: Reranking is the missing control in this scenario. The right answer makes it explicit so the system can rerank candidate chunks before context assembly.
- Why A is wrong: It keeps larger context as the only fix in control instead of adding a measurable reranking decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making reranking testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs reranking controlled before release or execution.

### Q62: A global retailer is choosing between a design centered on fine-tuning on volatile policy documents and one that makes data freshness explicit for a data and grounding pipeline. Which design should win?
- ID: ags-hf-data-curation-and-knowledge-grounding-030
- Domain: Data Curation and Knowledge Grounding
- Topic: data freshness; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for data freshness.
- B. Keep fine-tuning on volatile policy documents as the main control and add a dashboard for final outputs.
- C. Prioritize embeddings even though the observed failure is around data freshness.
- D. Put data freshness before rollout so the team can use retrieval for changing facts.
- Answer: D
- Explanation: Data freshness is the missing control in this scenario. The right answer makes it explicit so the system can use retrieval for changing facts.
- Why A is wrong: Monitoring is useful, but this scenario needs data freshness controlled before release or execution.
- Why B is wrong: It keeps fine-tuning on volatile policy documents in control instead of adding a measurable data freshness decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making data freshness testable in the scenario.

### Q63: A bank fraud team is building a data and grounding pipeline. The failure is tied to grounded citations. The safer design is the one that can return answer evidence linked to source chunks. Which action best fits the requirement?
- ID: ags-hf-data-curation-and-knowledge-grounding-031
- Domain: Data Curation and Knowledge Grounding
- Topic: grounded citations; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize chunking and metadata even though the observed failure is around grounded citations.
- B. Release prompt, model, and corpus governance changes together with one aggregate score.
- C. Make grounded citations explicit in the workflow: return answer evidence linked to source chunks.
- D. Keep uncited summaries as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Grounded citations is the missing control in this scenario. The right answer makes it explicit so the system can return answer evidence linked to source chunks.
- Why A is wrong: It moves attention to a neighboring control instead of making grounded citations testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether grounded citations fixed the failure.
- Why D is wrong: It keeps uncited summaries in control instead of adding a measurable grounded citations decision point.

### Q64: A public-sector casework team is triaging a failed pilot for a data and grounding pipeline. The failure appears when the system keeps flat chunks for every graph problem as the workaround. The release needs a design step that can represent entities and relationships when relationship reasoning matters. Which control addresses the root cause?
- ID: ags-hf-data-curation-and-knowledge-grounding-032
- Domain: Data Curation and Knowledge Grounding
- Topic: knowledge graph; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving knowledge graph implicit.
- B. Use knowledge graph as the control boundary and require the system to represent entities and relationships when relationship reasoning matters.
- C. Prioritize corpus governance even though the observed failure is around knowledge graph.
- D. Release prompt, model, and grounded citations changes together with one aggregate score.
- Answer: B
- Explanation: Knowledge graph is the missing control in this scenario. The right answer makes it explicit so the system can represent entities and relationships when relationship reasoning matters.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making knowledge graph testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether knowledge graph fixed the failure.

### Q65: An automotive support team is triaging a failed pilot for a model selection and customization path. The team can reproduce the failure around all experts active for every token. The missing control is the one that can activate sparse experts to increase capacity without full dense compute. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-001
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize DPO even though the observed failure is around MoE routing.
- B. Release prompt, model, and embedding models changes together with one aggregate score.
- C. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- D. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.
- Why D is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.

### Q66: A telecom network operations team passes the happy-path demo for a model selection and customization path, but the failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-002
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving embedding models implicit.
- B. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- C. Prioritize LoRA/QLoRA even though the observed failure is around embedding models.
- D. Release prompt, model, and MoE routing changes together with one aggregate score.
- Answer: B
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.

### Q67: A public-sector casework team is building a model selection and customization path. The failure appears when the system keeps embedding similarity as the final answer as the workaround. The release needs a design step that can rescore retrieved candidates for relevance before generation. Which choice addresses the root cause?
- ID: ags-hf-model-selection-and-customization-003
- Domain: Model Selection and Customization
- Topic: rerankers; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- B. Release prompt, model, and embedding models changes together with one aggregate score.
- C. Increase model capacity or context length while leaving rerankers implicit.
- D. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- Answer: A
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why B is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q68: A cybersecurity response team is triaging a failed pilot for a model selection and customization path. The failure is tied to LoRA/QLoRA. The safer design is the one that can adapt behavior with small trainable adapters. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-004
- Domain: Model Selection and Customization
- Topic: LoRA/QLoRA; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving LoRA/QLoRA implicit.
- B. Use rerankers as the main gate even though reviewers are asking for LoRA/QLoRA evidence.
- C. Move the check to post-release monitoring without changing the release path for LoRA/QLoRA.
- D. Change the design around LoRA/QLoRA so the system can adapt behavior with small trainable adapters.
- Answer: D
- Explanation: LoRA/QLoRA is the missing control in this scenario. The right answer makes it explicit so the system can adapt behavior with small trainable adapters.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making LoRA/QLoRA testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs LoRA/QLoRA controlled before release or execution.

### Q69: An insurance claims group is triaging a failed pilot for a model selection and customization path. The current design still relies on unlabeled raw documents as SFT data. Reviewers need a control that can train on high-quality instruction-response examples. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-005
- Domain: Model Selection and Customization
- Topic: SFT; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for SFT.
- B. Keep unlabeled raw documents as SFT data as the main control and add a dashboard for final outputs.
- C. Instrument and enforce SFT; the system must train on high-quality instruction-response examples.
- D. Use rerankers as the main gate even though reviewers are asking for SFT evidence.
- Answer: C
- Explanation: SFT is the missing control in this scenario. The right answer makes it explicit so the system can train on high-quality instruction-response examples.
- Why A is wrong: Monitoring is useful, but this scenario needs SFT controlled before release or execution.
- Why B is wrong: It keeps unlabeled raw documents as SFT data in control instead of adding a measurable SFT decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making SFT testable in the scenario.

### Q70: During an architecture review, a logistics planning team finds that single-answer labels for preference alignment is being used as the shortcut, but it does not give the team a reliable way to learn preferences from chosen/rejected pairs. What is the best next step?
- ID: ags-hf-model-selection-and-customization-006
- Domain: Model Selection and Customization
- Topic: DPO; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize SFT even though the observed failure is around DPO.
- B. Put DPO before rollout so the team can learn preferences from chosen/rejected pairs.
- C. Move the check to post-release monitoring without changing the release path for DPO.
- D. Keep single-answer labels for preference alignment as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: DPO is the missing control in this scenario. The right answer makes it explicit so the system can learn preferences from chosen/rejected pairs.
- Why A is wrong: It moves attention to a neighboring control instead of making DPO testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs DPO controlled before release or execution.
- Why D is wrong: It keeps single-answer labels for preference alignment in control instead of adding a measurable DPO decision point.

### Q71: A manufacturing quality team passes the happy-path demo for a model selection and customization path, but the team can reproduce the failure around all experts active for every token. The missing control is the one that can activate sparse experts to increase capacity without full dense compute. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-007
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- B. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- C. Prioritize SFT even though the observed failure is around MoE routing.
- D. Release prompt, model, and embedding models changes together with one aggregate score.
- Answer: A
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why B is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.

### Q72: During an architecture review, a semiconductor design group finds that using a chat model endpoint for vector search is being used as the shortcut, but it does not give the team a reliable way to produce vector representations for retrieval and similarity. What is the best next step?
- ID: ags-hf-model-selection-and-customization-008
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize MoE routing even though the observed failure is around embedding models.
- B. Release prompt, model, and DPO changes together with one aggregate score.
- C. Increase model capacity or context length while leaving embedding models implicit.
- D. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q73: During an architecture review, an insurance claims group finds that the failure is tied to rerankers. The safer design is the one that can rescore retrieved candidates for relevance before generation. What is the best next step?
- ID: ags-hf-model-selection-and-customization-009
- Domain: Model Selection and Customization
- Topic: rerankers; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving rerankers implicit.
- B. Use DPO as the main gate even though reviewers are asking for rerankers evidence.
- C. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- D. Release prompt, model, and DPO changes together with one aggregate score.
- Answer: C
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.

### Q74: A telecom network operations team is triaging a failed pilot for a model selection and customization path. The current design still relies on full pretraining for a narrow style change. Reviewers need a control that can adapt behavior with small trainable adapters. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-010
- Domain: Model Selection and Customization
- Topic: LoRA/QLoRA; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Change the design around LoRA/QLoRA so the system can adapt behavior with small trainable adapters.
- B. Increase model capacity or context length while leaving LoRA/QLoRA implicit.
- C. Use rerankers as the main gate even though reviewers are asking for LoRA/QLoRA evidence.
- D. Move the check to post-release monitoring without changing the release path for LoRA/QLoRA.
- Answer: A
- Explanation: LoRA/QLoRA is the missing control in this scenario. The right answer makes it explicit so the system can adapt behavior with small trainable adapters.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making LoRA/QLoRA testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs LoRA/QLoRA controlled before release or execution.

### Q75: A global retailer is building a model selection and customization path. Unlabeled raw documents as SFT data is being used as the shortcut, but it does not give the team a reliable way to train on high-quality instruction-response examples. Which control should be added before rollout?
- ID: ags-hf-model-selection-and-customization-011
- Domain: Model Selection and Customization
- Topic: SFT; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep unlabeled raw documents as SFT data as the main control and add a dashboard for final outputs.
- B. Instrument and enforce SFT; the system must train on high-quality instruction-response examples.
- C. Use LoRA/QLoRA as the main gate even though reviewers are asking for SFT evidence.
- D. Move the check to post-release monitoring without changing the release path for SFT.
- Answer: B
- Explanation: SFT is the missing control in this scenario. The right answer makes it explicit so the system can train on high-quality instruction-response examples.
- Why A is wrong: It keeps unlabeled raw documents as SFT data in control instead of adding a measurable SFT decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making SFT testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs SFT controlled before release or execution.

### Q76: An automotive support team is triaging a failed pilot for a model selection and customization path. Single-answer labels for preference alignment is being used as the shortcut, but it does not give the team a reliable way to learn preferences from chosen/rejected pairs. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-012
- Domain: Model Selection and Customization
- Topic: DPO; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep single-answer labels for preference alignment as the main control and add a dashboard for final outputs.
- B. Prioritize MoE routing even though the observed failure is around DPO.
- C. Put DPO before rollout so the team can learn preferences from chosen/rejected pairs.
- D. Move the check to post-release monitoring without changing the release path for DPO.
- Answer: C
- Explanation: DPO is the missing control in this scenario. The right answer makes it explicit so the system can learn preferences from chosen/rejected pairs.
- Why A is wrong: It keeps single-answer labels for preference alignment in control instead of adding a measurable DPO decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making DPO testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs DPO controlled before release or execution.

### Q77: A bank fraud team passes the happy-path demo for a model selection and customization path, but the failure is tied to MoE routing. The safer design is the one that can activate sparse experts to increase capacity without full dense compute. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-013
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- B. Prioritize SFT even though the observed failure is around MoE routing.
- C. Release prompt, model, and LoRA/QLoRA changes together with one aggregate score.
- D. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- Answer: D
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.

### Q78: A manufacturing quality team is building a model selection and customization path. The failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. Which choice addresses the root cause?
- ID: ags-hf-model-selection-and-customization-014
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- B. Prioritize rerankers even though the observed failure is around embedding models.
- C. Release prompt, model, and SFT changes together with one aggregate score.
- D. Increase model capacity or context length while leaving embedding models implicit.
- Answer: A
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why B is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q79: During an architecture review, a logistics planning team finds that the current design still relies on embedding similarity as the final answer. Reviewers need a control that can rescore retrieved candidates for relevance before generation. What is the best next step?
- ID: ags-hf-model-selection-and-customization-015
- Domain: Model Selection and Customization
- Topic: rerankers; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use LoRA/QLoRA as the main gate even though reviewers are asking for rerankers evidence.
- B. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- C. Release prompt, model, and LoRA/QLoRA changes together with one aggregate score.
- D. Increase model capacity or context length while leaving rerankers implicit.
- Answer: B
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q80: An automotive support team is triaging a failed pilot for a model selection and customization path. Full pretraining for a narrow style change is being used as the shortcut, but it does not give the team a reliable way to adapt behavior with small trainable adapters. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-016
- Domain: Model Selection and Customization
- Topic: LoRA/QLoRA; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use embedding models as the main gate even though reviewers are asking for LoRA/QLoRA evidence.
- B. Move the check to post-release monitoring without changing the release path for LoRA/QLoRA.
- C. Change the design around LoRA/QLoRA so the system can adapt behavior with small trainable adapters.
- D. Increase model capacity or context length while leaving LoRA/QLoRA implicit.
- Answer: C
- Explanation: LoRA/QLoRA is the missing control in this scenario. The right answer makes it explicit so the system can adapt behavior with small trainable adapters.
- Why A is wrong: It moves attention to a neighboring control instead of making LoRA/QLoRA testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs LoRA/QLoRA controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q81: A semiconductor design group is triaging a failed pilot for a model selection and customization path. Unlabeled raw documents as SFT data is being used as the shortcut, but it does not give the team a reliable way to train on high-quality instruction-response examples. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-017
- Domain: Model Selection and Customization
- Topic: SFT; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use LoRA/QLoRA as the main gate even though reviewers are asking for SFT evidence.
- B. Move the check to post-release monitoring without changing the release path for SFT.
- C. Keep unlabeled raw documents as SFT data as the main control and add a dashboard for final outputs.
- D. Instrument and enforce SFT; the system must train on high-quality instruction-response examples.
- Answer: D
- Explanation: SFT is the missing control in this scenario. The right answer makes it explicit so the system can train on high-quality instruction-response examples.
- Why A is wrong: It moves attention to a neighboring control instead of making SFT testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs SFT controlled before release or execution.
- Why C is wrong: It keeps unlabeled raw documents as SFT data in control instead of adding a measurable SFT decision point.

### Q82: A hospital operations team is choosing between a design centered on single-answer labels for preference alignment and one that makes DPO explicit for a model selection and customization path. Which design should win?
- ID: ags-hf-model-selection-and-customization-018
- Domain: Model Selection and Customization
- Topic: DPO; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put DPO before rollout so the team can learn preferences from chosen/rejected pairs.
- B. Move the check to post-release monitoring without changing the release path for DPO.
- C. Keep single-answer labels for preference alignment as the main control and add a dashboard for final outputs.
- D. Prioritize LoRA/QLoRA even though the observed failure is around DPO.
- Answer: A
- Explanation: DPO is the missing control in this scenario. The right answer makes it explicit so the system can learn preferences from chosen/rejected pairs.
- Why B is wrong: Monitoring is useful, but this scenario needs DPO controlled before release or execution.
- Why C is wrong: It keeps single-answer labels for preference alignment in control instead of adding a measurable DPO decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making DPO testable in the scenario.

### Q83: A global retailer is triaging a failed pilot for a model selection and customization path. The team can reproduce the failure around all experts active for every token. The missing control is the one that can activate sparse experts to increase capacity without full dense compute. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-019
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and DPO changes together with one aggregate score.
- B. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- C. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- D. Prioritize rerankers even though the observed failure is around MoE routing.
- Answer: B
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.
- Why C is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q84: During an architecture review, an automotive support team finds that the failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. What is the best next step?
- ID: ags-hf-model-selection-and-customization-020
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving embedding models implicit.
- B. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- C. Prioritize MoE routing even though the observed failure is around embedding models.
- D. Release prompt, model, and rerankers changes together with one aggregate score.
- Answer: B
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.

### Q85: During an architecture review, a pharmaceutical research team finds that the team can reproduce the failure around embedding similarity as the final answer. The missing control is the one that can rescore retrieved candidates for relevance before generation. What is the best next step?
- ID: ags-hf-model-selection-and-customization-021
- Domain: Model Selection and Customization
- Topic: rerankers; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- B. Release prompt, model, and LoRA/QLoRA changes together with one aggregate score.
- C. Increase model capacity or context length while leaving rerankers implicit.
- D. Use LoRA/QLoRA as the main gate even though reviewers are asking for rerankers evidence.
- Answer: A
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why B is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q86: A logistics planning team is triaging a failed pilot for a model selection and customization path. The failure appears when the system keeps full pretraining for a narrow style change as the workaround. The release needs a design step that can adapt behavior with small trainable adapters. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-022
- Domain: Model Selection and Customization
- Topic: LoRA/QLoRA; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving LoRA/QLoRA implicit.
- B. Use DPO as the main gate even though reviewers are asking for LoRA/QLoRA evidence.
- C. Move the check to post-release monitoring without changing the release path for LoRA/QLoRA.
- D. Change the design around LoRA/QLoRA so the system can adapt behavior with small trainable adapters.
- Answer: D
- Explanation: LoRA/QLoRA is the missing control in this scenario. The right answer makes it explicit so the system can adapt behavior with small trainable adapters.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making LoRA/QLoRA testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs LoRA/QLoRA controlled before release or execution.

### Q87: A hospital operations team passes the happy-path demo for a model selection and customization path, but unlabeled raw documents as SFT data is being used as the shortcut, but it does not give the team a reliable way to train on high-quality instruction-response examples. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-023
- Domain: Model Selection and Customization
- Topic: SFT; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for SFT.
- B. Keep unlabeled raw documents as SFT data as the main control and add a dashboard for final outputs.
- C. Instrument and enforce SFT; the system must train on high-quality instruction-response examples.
- D. Use MoE routing as the main gate even though reviewers are asking for SFT evidence.
- Answer: C
- Explanation: SFT is the missing control in this scenario. The right answer makes it explicit so the system can train on high-quality instruction-response examples.
- Why A is wrong: Monitoring is useful, but this scenario needs SFT controlled before release or execution.
- Why B is wrong: It keeps unlabeled raw documents as SFT data in control instead of adding a measurable SFT decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making SFT testable in the scenario.

### Q88: A semiconductor design group passes the happy-path demo for a model selection and customization path, but single-answer labels for preference alignment is being used as the shortcut, but it does not give the team a reliable way to learn preferences from chosen/rejected pairs. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-024
- Domain: Model Selection and Customization
- Topic: DPO; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize MoE routing even though the observed failure is around DPO.
- B. Put DPO before rollout so the team can learn preferences from chosen/rejected pairs.
- C. Move the check to post-release monitoring without changing the release path for DPO.
- D. Keep single-answer labels for preference alignment as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: DPO is the missing control in this scenario. The right answer makes it explicit so the system can learn preferences from chosen/rejected pairs.
- Why A is wrong: It moves attention to a neighboring control instead of making DPO testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs DPO controlled before release or execution.
- Why D is wrong: It keeps single-answer labels for preference alignment in control instead of adding a measurable DPO decision point.

### Q89: An automotive support team is choosing between a design centered on all experts active for every token and one that makes MoE routing explicit for a model selection and customization path. Which design should win?
- ID: ags-hf-model-selection-and-customization-025
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- B. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- C. Prioritize DPO even though the observed failure is around MoE routing.
- D. Release prompt, model, and rerankers changes together with one aggregate score.
- Answer: A
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why B is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.

### Q90: During an architecture review, a logistics planning team finds that the failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. What is the best next step?
- ID: ags-hf-model-selection-and-customization-026
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize LoRA/QLoRA even though the observed failure is around embedding models.
- B. Release prompt, model, and rerankers changes together with one aggregate score.
- C. Increase model capacity or context length while leaving embedding models implicit.
- D. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q91: A manufacturing quality team passes the happy-path demo for a model selection and customization path, but embedding similarity as the final answer is being used as the shortcut, but it does not give the team a reliable way to rescore retrieved candidates for relevance before generation. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-027
- Domain: Model Selection and Customization
- Topic: rerankers; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving rerankers implicit.
- B. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- C. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- D. Release prompt, model, and embedding models changes together with one aggregate score.
- Answer: C
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.

### Q92: A cybersecurity response team is building a model selection and customization path. The failure appears when the system keeps full pretraining for a narrow style change as the workaround. The release needs a design step that can adapt behavior with small trainable adapters. Which architecture keeps the boundary cleanest?
- ID: ags-hf-model-selection-and-customization-028
- Domain: Model Selection and Customization
- Topic: LoRA/QLoRA; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for LoRA/QLoRA.
- B. Change the design around LoRA/QLoRA so the system can adapt behavior with small trainable adapters.
- C. Increase model capacity or context length while leaving LoRA/QLoRA implicit.
- D. Use rerankers as the main gate even though reviewers are asking for LoRA/QLoRA evidence.
- Answer: B
- Explanation: LoRA/QLoRA is the missing control in this scenario. The right answer makes it explicit so the system can adapt behavior with small trainable adapters.
- Why A is wrong: Monitoring is useful, but this scenario needs LoRA/QLoRA controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making LoRA/QLoRA testable in the scenario.

### Q93: An insurance claims group is building a model selection and customization path. Unlabeled raw documents as SFT data is being used as the shortcut, but it does not give the team a reliable way to train on high-quality instruction-response examples. Which design is the best first change?
- ID: ags-hf-model-selection-and-customization-029
- Domain: Model Selection and Customization
- Topic: SFT; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce SFT; the system must train on high-quality instruction-response examples.
- B. Use MoE routing as the main gate even though reviewers are asking for SFT evidence.
- C. Move the check to post-release monitoring without changing the release path for SFT.
- D. Keep unlabeled raw documents as SFT data as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: SFT is the missing control in this scenario. The right answer makes it explicit so the system can train on high-quality instruction-response examples.
- Why B is wrong: It moves attention to a neighboring control instead of making SFT testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs SFT controlled before release or execution.
- Why D is wrong: It keeps unlabeled raw documents as SFT data in control instead of adding a measurable SFT decision point.

### Q94: A logistics planning team passes the happy-path demo for a model selection and customization path, but the failure appears when the system keeps single-answer labels for preference alignment as the workaround. The release needs a design step that can learn preferences from chosen/rejected pairs. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-030
- Domain: Model Selection and Customization
- Topic: DPO; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep single-answer labels for preference alignment as the main control and add a dashboard for final outputs.
- B. Prioritize rerankers even though the observed failure is around DPO.
- C. Put DPO before rollout so the team can learn preferences from chosen/rejected pairs.
- D. Move the check to post-release monitoring without changing the release path for DPO.
- Answer: C
- Explanation: DPO is the missing control in this scenario. The right answer makes it explicit so the system can learn preferences from chosen/rejected pairs.
- Why A is wrong: It keeps single-answer labels for preference alignment in control instead of adding a measurable DPO decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making DPO testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs DPO controlled before release or execution.

### Q95: A semiconductor design group passes the happy-path demo for a model selection and customization path, but the failure appears when the system keeps all experts active for every token as the workaround. The release needs a design step that can activate sparse experts to increase capacity without full dense compute. Which change should be made before release?
- ID: ags-hf-model-selection-and-customization-031
- Domain: Model Selection and Customization
- Topic: MoE routing; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- B. Prioritize LoRA/QLoRA even though the observed failure is around MoE routing.
- C. Release prompt, model, and rerankers changes together with one aggregate score.
- D. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- Answer: D
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.

### Q96: A public-sector casework team is triaging a failed pilot for a model selection and customization path. The failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. Which control addresses the root cause?
- ID: ags-hf-model-selection-and-customization-032
- Domain: Model Selection and Customization
- Topic: embedding models; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- B. Prioritize SFT even though the observed failure is around embedding models.
- C. Release prompt, model, and MoE routing changes together with one aggregate score.
- D. Increase model capacity or context length while leaving embedding models implicit.
- Answer: A
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why B is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q97: An insurance claims group is building a tool-using agent workflow. The current design still relies on asking the model to promise valid JSON. Reviewers need a control that can validate tool arguments before execution. Which implementation path is most appropriate?
- ID: ags-hf-tooling-orchestration-and-memory-001
- Domain: Tooling, Orchestration, and Memory
- Topic: schema validation; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize planning budget even though the observed failure is around schema validation.
- B. Release prompt, model, and task decomposition changes together with one aggregate score.
- C. Make schema validation explicit in the workflow: validate tool arguments before execution.
- D. Keep asking the model to promise valid JSON as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Schema validation is the missing control in this scenario. The right answer makes it explicit so the system can validate tool arguments before execution.
- Why A is wrong: It moves attention to a neighboring control instead of making schema validation testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether schema validation fixed the failure.
- Why D is wrong: It keeps asking the model to promise valid JSON in control instead of adding a measurable schema validation decision point.

### Q98: A telecom network operations team passes the happy-path demo for a tool-using agent workflow, but exposing every tool to every agent is being used as the shortcut, but it does not give the team a reliable way to choose tools from task need, preconditions, and allowed actions. Which change should be made before release?
- ID: ags-hf-tooling-orchestration-and-memory-002
- Domain: Tooling, Orchestration, and Memory
- Topic: tool selection; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving tool selection implicit.
- B. Use tool selection as the control boundary and require the system to choose tools from task need, preconditions, and allowed actions.
- C. Prioritize reflection even though the observed failure is around tool selection.
- D. Release prompt, model, and schema validation changes together with one aggregate score.
- Answer: B
- Explanation: Tool selection is the missing control in this scenario. The right answer makes it explicit so the system can choose tools from task need, preconditions, and allowed actions.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making tool selection testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether tool selection fixed the failure.

### Q99: A hospital operations team is building a tool-using agent workflow. The team can reproduce the failure around letting the model execute side effects directly. The missing control is the one that can bind model proposals to typed server-side functions. Which design is the best first change?
- ID: ags-hf-tooling-orchestration-and-memory-003
- Domain: Tooling, Orchestration, and Memory
- Topic: function calling; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for function calling: bind model proposals to typed server-side functions.
- B. Release prompt, model, and schema validation changes together with one aggregate score.
- C. Increase model capacity or context length while leaving function calling implicit.
- D. Use schema validation as the main gate even though reviewers are asking for function calling evidence.
- Answer: A
- Explanation: Function calling is the missing control in this scenario. The right answer makes it explicit so the system can bind model proposals to typed server-side functions.
- Why B is wrong: Changing several layers at once makes it harder to prove whether function calling fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making function calling testable in the scenario.

### Q100: A semiconductor design group is triaging a failed pilot for a tool-using agent workflow. The team can reproduce the failure around single prompt for every long task. The missing control is the one that can break a complex goal into explicit subgoals and dependencies. Which control addresses the root cause?
- ID: ags-hf-tooling-orchestration-and-memory-004
- Domain: Tooling, Orchestration, and Memory
- Topic: task decomposition; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving task decomposition implicit.
- B. Use tool selection as the main gate even though reviewers are asking for task decomposition evidence.
- C. Move the check to post-release monitoring without changing the release path for task decomposition.
- D. Change the design around task decomposition so the system can break a complex goal into explicit subgoals and dependencies.
- Answer: D
- Explanation: Task decomposition is the missing control in this scenario. The right answer makes it explicit so the system can break a complex goal into explicit subgoals and dependencies.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making task decomposition testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs task decomposition controlled before release or execution.

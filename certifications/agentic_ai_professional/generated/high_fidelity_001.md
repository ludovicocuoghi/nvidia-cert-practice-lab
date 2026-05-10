# High Fidelity Generated Questions 001

## Questions

### Q1: A telecom network operations team is triaging a failed pilot for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate. Calling every LLM-backed flow an agent is being used as the shortcut, but it does not give the team a reliable way to choose the least autonomous pattern that satisfies the task and risk. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-001
- Domain: Agent Architecture and Design
- Topic: agent vs workflow; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- B. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- C. Prioritize supervisor orchestration even though the observed failure is around agent vs workflow.
- D. Release prompt, model, and multi-agent roles changes together with one aggregate score.
- Answer: A
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why B is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.

### Q2: An automotive support team passes the happy-path demo for a specialist-agent workflow for regulated operations, but the team can reproduce the failure around unbounded autonomy. The missing control is the one that can use explicit states and gates for predictable or high-risk processes. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-002
- Domain: Agent Architecture and Design
- Topic: workflow graph; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize tool boundary even though the observed failure is around workflow graph.
- B. Release prompt, model, and multi-agent roles changes together with one aggregate score.
- C. Increase model capacity or context length while leaving workflow graph implicit.
- D. Use workflow graph as the control boundary and require the system to use explicit states and gates for predictable or high-risk processes.
- Answer: D
- Explanation: Workflow graph is the missing control in this scenario. The right answer makes it explicit so the system can use explicit states and gates for predictable or high-risk processes.
- Why A is wrong: It moves attention to a neighboring control instead of making workflow graph testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether workflow graph fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q3: A cybersecurity response team passes the happy-path demo for a specialist-agent workflow for regulated operations, but handoffs lose approvals, confidence, and evidence references. The safer design is the one that can classify intent, risk, and evidence need before choosing a path. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-003
- Domain: Agent Architecture and Design
- Topic: router; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving router implicit.
- B. Use multi-agent roles as the main gate even though reviewers are asking for router evidence.
- C. Add a release gate for router: classify intent, risk, and evidence need before choosing a path.
- D. Release prompt, model, and multi-agent roles changes together with one aggregate score.
- Answer: C
- Explanation: Router is the missing control in this scenario. The right answer makes it explicit so the system can classify intent, risk, and evidence need before choosing a path.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making router testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether router fixed the failure.

### Q4: A public-sector casework team passes the happy-path demo for an incident-support assistant with changing tool observations, but the current design still relies on one-shot planning for changing tool results. Reviewers need a control that can iterate observe, reason, act, and verify with stopping criteria. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-004
- Domain: Agent Architecture and Design
- Topic: ReAct loop; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for ReAct loop.
- B. Change the design around ReAct loop so the system can iterate observe, reason, act, and verify with stopping criteria.
- C. Increase model capacity or context length while leaving ReAct loop implicit.
- D. Use state owner as the main gate even though reviewers are asking for ReAct loop evidence.
- Answer: B
- Explanation: ReAct loop is the missing control in this scenario. The right answer makes it explicit so the system can iterate observe, reason, act, and verify with stopping criteria.
- Why A is wrong: Monitoring is useful, but this scenario needs ReAct loop controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making ReAct loop testable in the scenario.

### Q5: A telecom network operations team is choosing between a design centered on continuing a stale plan and one that makes plan-and-execute explicit for a specialist-agent workflow for regulated operations. Which design should win?
- ID: aai-hf-agent-architecture-and-design-005
- Domain: Agent Architecture and Design
- Topic: plan-and-execute; agentic_ai_professional
- Difficulty: hard
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

### Q6: A pharmaceutical research team is building an incident-support assistant with changing tool observations. Peer agents triggering production actions directly is being used as the shortcut, but it does not give the team a reliable way to centralize routing, approvals, and handoffs across specialist agents. Which choice addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-006
- Domain: Agent Architecture and Design
- Topic: supervisor orchestration; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for supervisor orchestration.
- B. Keep peer agents triggering production actions directly as the main control and add a dashboard for final outputs.
- C. Prioritize multi-agent roles even though the observed failure is around supervisor orchestration.
- D. Put supervisor orchestration before rollout so the team can centralize routing, approvals, and handoffs across specialist agents.
- Answer: D
- Explanation: Supervisor orchestration is the missing control in this scenario. The right answer makes it explicit so the system can centralize routing, approvals, and handoffs across specialist agents.
- Why A is wrong: Monitoring is useful, but this scenario needs supervisor orchestration controlled before release or execution.
- Why B is wrong: It keeps peer agents triggering production actions directly in control instead of adding a measurable supervisor orchestration decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making supervisor orchestration testable in the scenario.

### Q7: A bank fraud team is triaging a failed pilot for a specialist-agent workflow for regulated operations. The current design still relies on adding agents to increase intelligence. Reviewers need a control that can split agents only when roles, tools, or permissions are meaningfully different. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-007
- Domain: Agent Architecture and Design
- Topic: multi-agent roles; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize observe-reason-act loop even though the observed failure is around multi-agent roles.
- B. Release prompt, model, and tool boundary changes together with one aggregate score.
- C. Make multi-agent roles explicit in the workflow: split agents only when roles, tools, or permissions are meaningfully different.
- D. Keep adding agents to increase intelligence as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Multi-agent roles is the missing control in this scenario. The right answer makes it explicit so the system can split agents only when roles, tools, or permissions are meaningfully different.
- Why A is wrong: It moves attention to a neighboring control instead of making multi-agent roles testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether multi-agent roles fixed the failure.
- Why D is wrong: It keeps adding agents to increase intelligence in control instead of adding a measurable multi-agent roles decision point.

### Q8: A hospital operations team passes the happy-path demo for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate, but auditors cannot tell when high-risk cases should leave the autonomous path. The safer design is the one that can keep model reasoning separate from server-side execution authority. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-008
- Domain: Agent Architecture and Design
- Topic: tool boundary; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving tool boundary implicit.
- B. Use tool boundary as the control boundary and require the system to keep model reasoning separate from server-side execution authority.
- C. Prioritize workflow graph even though the observed failure is around tool boundary.
- D. Release prompt, model, and router changes together with one aggregate score.
- Answer: B
- Explanation: Tool boundary is the missing control in this scenario. The right answer makes it explicit so the system can keep model reasoning separate from server-side execution authority.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making tool boundary testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether tool boundary fixed the failure.

### Q9: A telecom network operations team is building a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate. The current design still relies on one-shot planning for streaming incidents. Reviewers need a control that can use iterative observation and re-planning when the environment changes. Which control should be added before rollout?
- ID: aai-hf-agent-architecture-and-design-009
- Domain: Agent Architecture and Design
- Topic: observe-reason-act loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for observe-reason-act loop: use iterative observation and re-planning when the environment changes.
- B. Release prompt, model, and agent vs workflow changes together with one aggregate score.
- C. Increase model capacity or context length while leaving observe-reason-act loop implicit.
- D. Use agent vs workflow as the main gate even though reviewers are asking for observe-reason-act loop evidence.
- Answer: A
- Explanation: Observe-reason-act loop is the missing control in this scenario. The right answer makes it explicit so the system can use iterative observation and re-planning when the environment changes.
- Why B is wrong: Changing several layers at once makes it harder to prove whether observe-reason-act loop fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making observe-reason-act loop testable in the scenario.

### Q10: A pharmaceutical research team is choosing between a design centered on letting the first retrieved document decide and one that makes evidence gate explicit for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate. Which design should win?
- ID: aai-hf-agent-architecture-and-design-010
- Domain: Agent Architecture and Design
- Topic: evidence gate; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use router as the main gate even though reviewers are asking for evidence gate evidence.
- B. Move the check to post-release monitoring without changing the release path for evidence gate.
- C. Change the design around evidence gate so the system can require retrieval and tool observations before a decision node.
- D. Increase model capacity or context length while leaving evidence gate implicit.
- Answer: C
- Explanation: Evidence gate is the missing control in this scenario. The right answer makes it explicit so the system can require retrieval and tool observations before a decision node.
- Why A is wrong: It moves attention to a neighboring control instead of making evidence gate testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs evidence gate controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q11: A manufacturing quality team is triaging a failed pilot for an incident-support assistant with changing tool observations. Free-form autonomy for all requests is being used as the shortcut, but it does not give the team a reliable way to route simple cases to deterministic paths and high-risk cases to review. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-011
- Domain: Agent Architecture and Design
- Topic: risk router; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use ReAct loop as the main gate even though reviewers are asking for risk router evidence.
- B. Move the check to post-release monitoring without changing the release path for risk router.
- C. Keep free-form autonomy for all requests as the main control and add a dashboard for final outputs.
- D. Instrument and enforce risk router; the system must route simple cases to deterministic paths and high-risk cases to review.
- Answer: D
- Explanation: Risk router is the missing control in this scenario. The right answer makes it explicit so the system can route simple cases to deterministic paths and high-risk cases to review.
- Why A is wrong: It moves attention to a neighboring control instead of making risk router testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs risk router controlled before release or execution.
- Why C is wrong: It keeps free-form autonomy for all requests in control instead of adding a measurable risk router decision point.

### Q12: A cybersecurity response team passes the happy-path demo for an incident-support assistant with changing tool observations, but the failure appears when the system keeps peer agents overwriting each other as the workaround. The release needs a design step that can assign one runtime owner for state transitions and handoffs. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-012
- Domain: Agent Architecture and Design
- Topic: state owner; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put state owner before rollout so the team can assign one runtime owner for state transitions and handoffs.
- B. Move the check to post-release monitoring without changing the release path for state owner.
- C. Keep peer agents overwriting each other as the main control and add a dashboard for final outputs.
- D. Prioritize agent vs workflow even though the observed failure is around state owner.
- Answer: A
- Explanation: State owner is the missing control in this scenario. The right answer makes it explicit so the system can assign one runtime owner for state transitions and handoffs.
- Why B is wrong: Monitoring is useful, but this scenario needs state owner controlled before release or execution.
- Why C is wrong: It keeps peer agents overwriting each other in control instead of adding a measurable state owner decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making state owner testable in the scenario.

### Q13: A pharmaceutical research team passes the happy-path demo for a specialist-agent workflow for regulated operations, but the current design still relies on calling every LLM-backed flow an agent. Reviewers need a control that can choose the least autonomous pattern that satisfies the task and risk. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-013
- Domain: Agent Architecture and Design
- Topic: agent vs workflow; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and workflow graph changes together with one aggregate score.
- B. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- C. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- D. Prioritize evidence gate even though the observed failure is around agent vs workflow.
- Answer: B
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why A is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.
- Why C is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.

### Q14: A telecom network operations team is triaging a failed pilot for a specialist-agent workflow for regulated operations. The failure appears when the system keeps unbounded autonomy as the workaround. The release needs a design step that can use explicit states and gates for predictable or high-risk processes. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-014
- Domain: Agent Architecture and Design
- Topic: workflow graph; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and evidence gate changes together with one aggregate score.
- B. Increase model capacity or context length while leaving workflow graph implicit.
- C. Use workflow graph as the control boundary and require the system to use explicit states and gates for predictable or high-risk processes.
- D. Prioritize agent vs workflow even though the observed failure is around workflow graph.
- Answer: C
- Explanation: Workflow graph is the missing control in this scenario. The right answer makes it explicit so the system can use explicit states and gates for predictable or high-risk processes.
- Why A is wrong: Changing several layers at once makes it harder to prove whether workflow graph fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making workflow graph testable in the scenario.

### Q15: A public-sector casework team passes the happy-path demo for a specialist-agent workflow for regulated operations, but the failure appears when the system keeps largest model for every request as the workaround. The release needs a design step that can classify intent, risk, and evidence need before choosing a path. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-015
- Domain: Agent Architecture and Design
- Topic: router; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and evidence gate changes together with one aggregate score.
- B. Increase model capacity or context length while leaving router implicit.
- C. Use evidence gate as the main gate even though reviewers are asking for router evidence.
- D. Add a release gate for router: classify intent, risk, and evidence need before choosing a path.
- Answer: D
- Explanation: Router is the missing control in this scenario. The right answer makes it explicit so the system can classify intent, risk, and evidence need before choosing a path.
- Why A is wrong: Changing several layers at once makes it harder to prove whether router fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making router testable in the scenario.

### Q16: During an architecture review, a semiconductor design group finds that one-shot planning for changing tool results is being used as the shortcut, but it does not give the team a reliable way to iterate observe, reason, act, and verify with stopping criteria. What is the best next step?
- ID: aai-hf-agent-architecture-and-design-016
- Domain: Agent Architecture and Design
- Topic: ReAct loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around ReAct loop so the system can iterate observe, reason, act, and verify with stopping criteria.
- B. Increase model capacity or context length while leaving ReAct loop implicit.
- C. Use risk router as the main gate even though reviewers are asking for ReAct loop evidence.
- D. Move the check to post-release monitoring without changing the release path for ReAct loop.
- Answer: A
- Explanation: ReAct loop is the missing control in this scenario. The right answer makes it explicit so the system can iterate observe, reason, act, and verify with stopping criteria.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making ReAct loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs ReAct loop controlled before release or execution.

### Q17: A pharmaceutical research team passes the happy-path demo for a specialist-agent workflow for regulated operations, but continuing a stale plan is being used as the shortcut, but it does not give the team a reliable way to plan subgoals, execute steps, and replan when observations invalidate the plan. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-017
- Domain: Agent Architecture and Design
- Topic: plan-and-execute; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep continuing a stale plan as the main control and add a dashboard for final outputs.
- B. Instrument and enforce plan-and-execute; the system must plan subgoals, execute steps, and replan when observations invalidate the plan.
- C. Use state owner as the main gate even though reviewers are asking for plan-and-execute evidence.
- D. Move the check to post-release monitoring without changing the release path for plan-and-execute.
- Answer: B
- Explanation: Plan-and-execute is the missing control in this scenario. The right answer makes it explicit so the system can plan subgoals, execute steps, and replan when observations invalidate the plan.
- Why A is wrong: It keeps continuing a stale plan in control instead of adding a measurable plan-and-execute decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making plan-and-execute testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs plan-and-execute controlled before release or execution.

### Q18: A global retailer is choosing between a design centered on peer agents triggering production actions directly and one that makes supervisor orchestration explicit for an incident-support assistant with changing tool observations. Which design should win?
- ID: aai-hf-agent-architecture-and-design-018
- Domain: Agent Architecture and Design
- Topic: supervisor orchestration; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep peer agents triggering production actions directly as the main control and add a dashboard for final outputs.
- B. Prioritize workflow graph even though the observed failure is around supervisor orchestration.
- C. Put supervisor orchestration before rollout so the team can centralize routing, approvals, and handoffs across specialist agents.
- D. Move the check to post-release monitoring without changing the release path for supervisor orchestration.
- Answer: C
- Explanation: Supervisor orchestration is the missing control in this scenario. The right answer makes it explicit so the system can centralize routing, approvals, and handoffs across specialist agents.
- Why A is wrong: It keeps peer agents triggering production actions directly in control instead of adding a measurable supervisor orchestration decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making supervisor orchestration testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs supervisor orchestration controlled before release or execution.

### Q19: A public-sector casework team is building a specialist-agent workflow for regulated operations. Adding agents to increase intelligence is being used as the shortcut, but it does not give the team a reliable way to split agents only when roles, tools, or permissions are meaningfully different. Which design is the best first change?
- ID: aai-hf-agent-architecture-and-design-019
- Domain: Agent Architecture and Design
- Topic: multi-agent roles; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep adding agents to increase intelligence as the main control and add a dashboard for final outputs.
- B. Prioritize supervisor orchestration even though the observed failure is around multi-agent roles.
- C. Release prompt, model, and tool boundary changes together with one aggregate score.
- D. Make multi-agent roles explicit in the workflow: split agents only when roles, tools, or permissions are meaningfully different.
- Answer: D
- Explanation: Multi-agent roles is the missing control in this scenario. The right answer makes it explicit so the system can split agents only when roles, tools, or permissions are meaningfully different.
- Why A is wrong: It keeps adding agents to increase intelligence in control instead of adding a measurable multi-agent roles decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making multi-agent roles testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether multi-agent roles fixed the failure.

### Q20: A cybersecurity response team is building an incident-support assistant with changing tool observations. The team can reproduce the failure around letting prompt text grant tool access. The missing control is the one that can keep model reasoning separate from server-side execution authority. Which architecture keeps the boundary cleanest?
- ID: aai-hf-agent-architecture-and-design-020
- Domain: Agent Architecture and Design
- Topic: tool boundary; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize observe-reason-act loop even though the observed failure is around tool boundary.
- B. Release prompt, model, and multi-agent roles changes together with one aggregate score.
- C. Increase model capacity or context length while leaving tool boundary implicit.
- D. Use tool boundary as the control boundary and require the system to keep model reasoning separate from server-side execution authority.
- Answer: D
- Explanation: Tool boundary is the missing control in this scenario. The right answer makes it explicit so the system can keep model reasoning separate from server-side execution authority.
- Why A is wrong: It moves attention to a neighboring control instead of making tool boundary testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether tool boundary fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q21: A cybersecurity response team passes the happy-path demo for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate, but one-shot planning for streaming incidents is being used as the shortcut, but it does not give the team a reliable way to use iterative observation and re-planning when the environment changes. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-021
- Domain: Agent Architecture and Design
- Topic: observe-reason-act loop; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving observe-reason-act loop implicit.
- B. Use plan-and-execute as the main gate even though reviewers are asking for observe-reason-act loop evidence.
- C. Add a release gate for observe-reason-act loop: use iterative observation and re-planning when the environment changes.
- D. Release prompt, model, and plan-and-execute changes together with one aggregate score.
- Answer: C
- Explanation: Observe-reason-act loop is the missing control in this scenario. The right answer makes it explicit so the system can use iterative observation and re-planning when the environment changes.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making observe-reason-act loop testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether observe-reason-act loop fixed the failure.

### Q22: A public-sector casework team passes the happy-path demo for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate, but the current design still relies on letting the first retrieved document decide. Reviewers need a control that can require retrieval and tool observations before a decision node. Which change should be made before release?
- ID: aai-hf-agent-architecture-and-design-022
- Domain: Agent Architecture and Design
- Topic: evidence gate; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for evidence gate.
- B. Change the design around evidence gate so the system can require retrieval and tool observations before a decision node.
- C. Increase model capacity or context length while leaving evidence gate implicit.
- D. Use state owner as the main gate even though reviewers are asking for evidence gate evidence.
- Answer: B
- Explanation: Evidence gate is the missing control in this scenario. The right answer makes it explicit so the system can require retrieval and tool observations before a decision node.
- Why A is wrong: Monitoring is useful, but this scenario needs evidence gate controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making evidence gate testable in the scenario.

### Q23: A global retailer is triaging a failed pilot for an incident-support assistant with changing tool observations. The team can reproduce the failure around free-form autonomy for all requests. The missing control is the one that can route simple cases to deterministic paths and high-risk cases to review. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-023
- Domain: Agent Architecture and Design
- Topic: risk router; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Instrument and enforce risk router; the system must route simple cases to deterministic paths and high-risk cases to review.
- B. Use tool boundary as the main gate even though reviewers are asking for risk router evidence.
- C. Move the check to post-release monitoring without changing the release path for risk router.
- D. Keep free-form autonomy for all requests as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Risk router is the missing control in this scenario. The right answer makes it explicit so the system can route simple cases to deterministic paths and high-risk cases to review.
- Why B is wrong: It moves attention to a neighboring control instead of making risk router testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs risk router controlled before release or execution.
- Why D is wrong: It keeps free-form autonomy for all requests in control instead of adding a measurable risk router decision point.

### Q24: An automotive support team is triaging a failed pilot for a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate. The team can reproduce the failure around peer agents overwriting each other. The missing control is the one that can assign one runtime owner for state transitions and handoffs. Which control addresses the root cause?
- ID: aai-hf-agent-architecture-and-design-024
- Domain: Agent Architecture and Design
- Topic: state owner; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for state owner.
- B. Keep peer agents overwriting each other as the main control and add a dashboard for final outputs.
- C. Prioritize router even though the observed failure is around state owner.
- D. Put state owner before rollout so the team can assign one runtime owner for state transitions and handoffs.
- Answer: D
- Explanation: State owner is the missing control in this scenario. The right answer makes it explicit so the system can assign one runtime owner for state transitions and handoffs.
- Why A is wrong: Monitoring is useful, but this scenario needs state owner controlled before release or execution.
- Why B is wrong: It keeps peer agents overwriting each other in control instead of adding a measurable state owner decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making state owner testable in the scenario.

### Q25: A bank fraud team is building a specialist-agent workflow for regulated operations. The current design still relies on calling every LLM-backed flow an agent. Reviewers need a control that can choose the least autonomous pattern that satisfies the task and risk. Which control should be added before rollout?
- ID: aai-hf-agent-architecture-and-design-025
- Domain: Agent Architecture and Design
- Topic: agent vs workflow; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize state owner even though the observed failure is around agent vs workflow.
- B. Release prompt, model, and workflow graph changes together with one aggregate score.
- C. Make agent vs workflow explicit in the workflow: choose the least autonomous pattern that satisfies the task and risk.
- D. Keep calling every LLM-backed flow an agent as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Agent vs workflow is the missing control in this scenario. The right answer makes it explicit so the system can choose the least autonomous pattern that satisfies the task and risk.
- Why A is wrong: It moves attention to a neighboring control instead of making agent vs workflow testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether agent vs workflow fixed the failure.
- Why D is wrong: It keeps calling every LLM-backed flow an agent in control instead of adding a measurable agent vs workflow decision point.

### Q26: During an architecture review, a manufacturing quality team finds that duplicate mutations and hidden partial failures are reaching production. The safer design is the one that can validate tool arguments before execution. What is the best next step?
- ID: aai-hf-agent-development-001
- Domain: Agent Development
- Topic: schema validation; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Keep asking the model to promise valid JSON as the main control and add a dashboard for final outputs.
- B. Prioritize tool contracts even though the observed failure is around schema validation.
- C. Release prompt, model, and structured output changes together with one aggregate score.
- D. Make schema validation explicit in the workflow: validate tool arguments before execution.
- Answer: D
- Explanation: Schema validation is the missing control in this scenario. The right answer makes it explicit so the system can validate tool arguments before execution.
- Why A is wrong: It keeps asking the model to promise valid JSON in control instead of adding a measurable schema validation decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making schema validation testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether schema validation fixed the failure.

### Q27: A semiconductor design group is choosing between a design centered on exposing every tool to every agent and one that makes tool selection explicit for a multi-step prompt chain that writes structured records. Which design should win?
- ID: aai-hf-agent-development-002
- Domain: Agent Development
- Topic: tool selection; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use tool selection as the control boundary and require the system to choose tools from task need, preconditions, and allowed actions.
- B. Prioritize regression tests even though the observed failure is around tool selection.
- C. Release prompt, model, and structured output changes together with one aggregate score.
- D. Increase model capacity or context length while leaving tool selection implicit.
- Answer: A
- Explanation: Tool selection is the missing control in this scenario. The right answer makes it explicit so the system can choose tools from task need, preconditions, and allowed actions.
- Why B is wrong: It moves attention to a neighboring control instead of making tool selection testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether tool selection fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q28: During an architecture review, a pharmaceutical research team finds that the current design still relies on letting the model execute side effects directly. Reviewers need a control that can bind model proposals to typed server-side functions. What is the best next step?
- ID: aai-hf-agent-development-003
- Domain: Agent Development
- Topic: function calling; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use structured output as the main gate even though reviewers are asking for function calling evidence.
- B. Add a release gate for function calling: bind model proposals to typed server-side functions.
- C. Release prompt, model, and structured output changes together with one aggregate score.
- D. Increase model capacity or context length while leaving function calling implicit.
- Answer: B
- Explanation: Function calling is the missing control in this scenario. The right answer makes it explicit so the system can bind model proposals to typed server-side functions.
- Why A is wrong: It moves attention to a neighboring control instead of making function calling testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether function calling fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q29: A telecom network operations team is choosing between a design centered on free-form prose for downstream APIs and one that makes structured output explicit for a tool-using agent that can create tickets, issue refunds, and query private systems. Which design should win?
- ID: aai-hf-agent-development-004
- Domain: Agent Development
- Topic: structured output; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use tool contracts as the main gate even though reviewers are asking for structured output evidence.
- B. Move the check to post-release monitoring without changing the release path for structured output.
- C. Change the design around structured output so the system can validate machine-consumed responses against a schema.
- D. Increase model capacity or context length while leaving structured output implicit.
- Answer: C
- Explanation: Structured output is the missing control in this scenario. The right answer makes it explicit so the system can validate machine-consumed responses against a schema.
- Why A is wrong: It moves attention to a neighboring control instead of making structured output testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs structured output controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q30: A public-sector casework team is choosing between a design centered on retrying mutations blindly and one that makes idempotency explicit for a tool-using agent that can create tickets, issue refunds, and query private systems. Which design should win?
- ID: aai-hf-agent-development-005
- Domain: Agent Development
- Topic: idempotency; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use graceful failure as the main gate even though reviewers are asking for idempotency evidence.
- B. Move the check to post-release monitoring without changing the release path for idempotency.
- C. Keep retrying mutations blindly as the main control and add a dashboard for final outputs.
- D. Instrument and enforce idempotency; the system must use keys and transaction-state checks for mutating APIs.
- Answer: D
- Explanation: Idempotency is the missing control in this scenario. The right answer makes it explicit so the system can use keys and transaction-state checks for mutating APIs.
- Why A is wrong: It moves attention to a neighboring control instead of making idempotency testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs idempotency controlled before release or execution.
- Why C is wrong: It keeps retrying mutations blindly in control instead of adding a measurable idempotency decision point.

### Q31: A semiconductor design group is building a tool-using agent that can create tickets, issue refunds, and query private systems. The team can reproduce the failure around keyword filters as the main control. The missing control is the one that can run generated code in isolated environments without production credentials. Which action best fits the requirement?
- ID: aai-hf-agent-development-006
- Domain: Agent Development
- Topic: sandboxing; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put sandboxing before rollout so the team can run generated code in isolated environments without production credentials.
- B. Move the check to post-release monitoring without changing the release path for sandboxing.
- C. Keep keyword filters as the main control as the main control and add a dashboard for final outputs.
- D. Prioritize idempotency even though the observed failure is around sandboxing.
- Answer: A
- Explanation: Sandboxing is the missing control in this scenario. The right answer makes it explicit so the system can run generated code in isolated environments without production credentials.
- Why B is wrong: Monitoring is useful, but this scenario needs sandboxing controlled before release or execution.
- Why C is wrong: It keeps keyword filters as the main control in control instead of adding a measurable sandboxing decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making sandboxing testable in the scenario.

### Q32: An insurance claims group passes the happy-path demo for a multi-step prompt chain that writes structured records, but the team can reproduce the failure around letting each prompt invent tool behavior. The missing control is the one that can define tool inputs, outputs, permissions, and failure modes. Which change should be made before release?
- ID: aai-hf-agent-development-007
- Domain: Agent Development
- Topic: tool contracts; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and graceful failure changes together with one aggregate score.
- B. Make tool contracts explicit in the workflow: define tool inputs, outputs, permissions, and failure modes.
- C. Keep letting each prompt invent tool behavior as the main control and add a dashboard for final outputs.
- D. Prioritize sandboxing even though the observed failure is around tool contracts.
- Answer: B
- Explanation: Tool contracts is the missing control in this scenario. The right answer makes it explicit so the system can define tool inputs, outputs, permissions, and failure modes.
- Why A is wrong: Changing several layers at once makes it harder to prove whether tool contracts fixed the failure.
- Why C is wrong: It keeps letting each prompt invent tool behavior in control instead of adding a measurable tool contracts decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making tool contracts testable in the scenario.

### Q33: During an architecture review, a telecom network operations team finds that parallelizing every action is being used as the shortcut, but it does not give the team a reliable way to parallelize independent read-only calls while serializing dependent or mutating calls. What is the best next step?
- ID: aai-hf-agent-development-008
- Domain: Agent Development
- Topic: parallel tool calls; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and prompt chain changes together with one aggregate score.
- B. Increase model capacity or context length while leaving parallel tool calls implicit.
- C. Use parallel tool calls as the control boundary and require the system to parallelize independent read-only calls while serializing dependent or mutating calls.
- D. Prioritize regression tests even though the observed failure is around parallel tool calls.
- Answer: C
- Explanation: Parallel tool calls is the missing control in this scenario. The right answer makes it explicit so the system can parallelize independent read-only calls while serializing dependent or mutating calls.
- Why A is wrong: Changing several layers at once makes it harder to prove whether parallel tool calls fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making parallel tool calls testable in the scenario.

### Q34: A public-sector casework team is choosing between a design centered on infinite retry loops and one that makes bounded retries explicit for a multi-step prompt chain that writes structured records. Which design should win?
- ID: aai-hf-agent-development-009
- Domain: Agent Development
- Topic: bounded retries; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and graceful failure changes together with one aggregate score.
- B. Increase model capacity or context length while leaving bounded retries implicit.
- C. Use graceful failure as the main gate even though reviewers are asking for bounded retries evidence.
- D. Add a release gate for bounded retries: retry transient failures with limits, backoff, and escalation.
- Answer: D
- Explanation: Bounded retries is the missing control in this scenario. The right answer makes it explicit so the system can retry transient failures with limits, backoff, and escalation.
- Why A is wrong: Changing several layers at once makes it harder to prove whether bounded retries fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making bounded retries testable in the scenario.

### Q35: A cybersecurity response team is building a multi-step prompt chain that writes structured records. The team can reproduce the failure around hallucinating through missing evidence. The missing control is the one that can return a safe fallback or escalation path when tools or evidence fail. Which control should be added before rollout?
- ID: aai-hf-agent-development-010
- Domain: Agent Development
- Topic: graceful failure; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for graceful failure.
- B. Change the design around graceful failure so the system can return a safe fallback or escalation path when tools or evidence fail.
- C. Increase model capacity or context length while leaving graceful failure implicit.
- D. Use idempotency as the main gate even though reviewers are asking for graceful failure evidence.
- Answer: B
- Explanation: Graceful failure is the missing control in this scenario. The right answer makes it explicit so the system can return a safe fallback or escalation path when tools or evidence fail.
- Why A is wrong: Monitoring is useful, but this scenario needs graceful failure controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making graceful failure testable in the scenario.

### Q36: A bank fraud team passes the happy-path demo for a multi-step prompt chain that writes structured records, but a formatting fix breaks downstream parsers. The safer design is the one that can version and test chained prompts that transform state. Which change should be made before release?
- ID: aai-hf-agent-development-011
- Domain: Agent Development
- Topic: prompt chain; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce prompt chain; the system must version and test chained prompts that transform state.
- B. Use bounded retries as the main gate even though reviewers are asking for prompt chain evidence.
- C. Move the check to post-release monitoring without changing the release path for prompt chain.
- D. Keep editing chained prompts with no regression tests as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Prompt chain is the missing control in this scenario. The right answer makes it explicit so the system can version and test chained prompts that transform state.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt chain testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs prompt chain controlled before release or execution.
- Why D is wrong: It keeps editing chained prompts with no regression tests in control instead of adding a measurable prompt chain decision point.

### Q37: A public-sector casework team is choosing between a design centered on debugging only through transcripts and one that makes regression tests explicit for a multi-step prompt chain that writes structured records. Which design should win?
- ID: aai-hf-agent-development-012
- Domain: Agent Development
- Topic: regression tests; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for regression tests.
- B. Keep debugging only through transcripts as the main control and add a dashboard for final outputs.
- C. Prioritize sandboxing even though the observed failure is around regression tests.
- D. Put regression tests before rollout so the team can turn observed failures into repeatable test cases.
- Answer: D
- Explanation: Regression tests is the missing control in this scenario. The right answer makes it explicit so the system can turn observed failures into repeatable test cases.
- Why A is wrong: Monitoring is useful, but this scenario needs regression tests controlled before release or execution.
- Why B is wrong: It keeps debugging only through transcripts in control instead of adding a measurable regression tests decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making regression tests testable in the scenario.

### Q38: A logistics planning team is building a multi-step prompt chain that writes structured records. The current design still relies on asking the model to promise valid JSON. Reviewers need a control that can validate tool arguments before execution. Which action best fits the requirement?
- ID: aai-hf-agent-development-013
- Domain: Agent Development
- Topic: schema validation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize function calling even though the observed failure is around schema validation.
- B. Release prompt, model, and tool selection changes together with one aggregate score.
- C. Make schema validation explicit in the workflow: validate tool arguments before execution.
- D. Keep asking the model to promise valid JSON as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Schema validation is the missing control in this scenario. The right answer makes it explicit so the system can validate tool arguments before execution.
- Why A is wrong: It moves attention to a neighboring control instead of making schema validation testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether schema validation fixed the failure.
- Why D is wrong: It keeps asking the model to promise valid JSON in control instead of adding a measurable schema validation decision point.

### Q39: A pharmaceutical research team passes the happy-path demo for an API workflow with both read-only and mutating tools, but duplicate mutations and hidden partial failures are reaching production. The safer design is the one that can choose tools from task need, preconditions, and allowed actions. Which change should be made before release?
- ID: aai-hf-agent-development-014
- Domain: Agent Development
- Topic: tool selection; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving tool selection implicit.
- B. Use tool selection as the control boundary and require the system to choose tools from task need, preconditions, and allowed actions.
- C. Prioritize function calling even though the observed failure is around tool selection.
- D. Release prompt, model, and structured output changes together with one aggregate score.
- Answer: B
- Explanation: Tool selection is the missing control in this scenario. The right answer makes it explicit so the system can choose tools from task need, preconditions, and allowed actions.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making tool selection testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether tool selection fixed the failure.

### Q40: During an architecture review, a semiconductor design group finds that duplicate mutations and hidden partial failures are reaching production. The safer design is the one that can bind model proposals to typed server-side functions. What is the best next step?
- ID: aai-hf-agent-development-015
- Domain: Agent Development
- Topic: function calling; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Add a release gate for function calling: bind model proposals to typed server-side functions.
- B. Release prompt, model, and tool selection changes together with one aggregate score.
- C. Increase model capacity or context length while leaving function calling implicit.
- D. Use tool selection as the main gate even though reviewers are asking for function calling evidence.
- Answer: A
- Explanation: Function calling is the missing control in this scenario. The right answer makes it explicit so the system can bind model proposals to typed server-side functions.
- Why B is wrong: Changing several layers at once makes it harder to prove whether function calling fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making function calling testable in the scenario.

### Q41: A hospital operations team passes the happy-path demo for a multi-step prompt chain that writes structured records, but the current design still relies on free-form prose for downstream APIs. Reviewers need a control that can validate machine-consumed responses against a schema. Which change should be made before release?
- ID: aai-hf-agent-development-016
- Domain: Agent Development
- Topic: structured output; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving structured output implicit.
- B. Use function calling as the main gate even though reviewers are asking for structured output evidence.
- C. Move the check to post-release monitoring without changing the release path for structured output.
- D. Change the design around structured output so the system can validate machine-consumed responses against a schema.
- Answer: D
- Explanation: Structured output is the missing control in this scenario. The right answer makes it explicit so the system can validate machine-consumed responses against a schema.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making structured output testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs structured output controlled before release or execution.

### Q42: During an architecture review, a telecom network operations team finds that a formatting fix breaks downstream parsers. The safer design is the one that can use keys and transaction-state checks for mutating APIs. What is the best next step?
- ID: aai-hf-agent-development-017
- Domain: Agent Development
- Topic: idempotency; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for idempotency.
- B. Keep retrying mutations blindly as the main control and add a dashboard for final outputs.
- C. Instrument and enforce idempotency; the system must use keys and transaction-state checks for mutating APIs.
- D. Use function calling as the main gate even though reviewers are asking for idempotency evidence.
- Answer: C
- Explanation: Idempotency is the missing control in this scenario. The right answer makes it explicit so the system can use keys and transaction-state checks for mutating APIs.
- Why A is wrong: Monitoring is useful, but this scenario needs idempotency controlled before release or execution.
- Why B is wrong: It keeps retrying mutations blindly in control instead of adding a measurable idempotency decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making idempotency testable in the scenario.

### Q43: During an architecture review, an insurance claims group finds that keyword filters as the main control is being used as the shortcut, but it does not give the team a reliable way to run generated code in isolated environments without production credentials. What is the best next step?
- ID: aai-hf-agent-development-018
- Domain: Agent Development
- Topic: sandboxing; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize schema validation even though the observed failure is around sandboxing.
- B. Put sandboxing before rollout so the team can run generated code in isolated environments without production credentials.
- C. Move the check to post-release monitoring without changing the release path for sandboxing.
- D. Keep keyword filters as the main control as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Sandboxing is the missing control in this scenario. The right answer makes it explicit so the system can run generated code in isolated environments without production credentials.
- Why A is wrong: It moves attention to a neighboring control instead of making sandboxing testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs sandboxing controlled before release or execution.
- Why D is wrong: It keeps keyword filters as the main control in control instead of adding a measurable sandboxing decision point.

### Q44: A bank fraud team is triaging a failed pilot for a tool-using agent that can create tickets, issue refunds, and query private systems. The failure appears when the system keeps letting each prompt invent tool behavior as the workaround. The release needs a design step that can define tool inputs, outputs, permissions, and failure modes. Which control addresses the root cause?
- ID: aai-hf-agent-development-019
- Domain: Agent Development
- Topic: tool contracts; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make tool contracts explicit in the workflow: define tool inputs, outputs, permissions, and failure modes.
- B. Keep letting each prompt invent tool behavior as the main control and add a dashboard for final outputs.
- C. Prioritize prompt chain even though the observed failure is around tool contracts.
- D. Release prompt, model, and parallel tool calls changes together with one aggregate score.
- Answer: A
- Explanation: Tool contracts is the missing control in this scenario. The right answer makes it explicit so the system can define tool inputs, outputs, permissions, and failure modes.
- Why B is wrong: It keeps letting each prompt invent tool behavior in control instead of adding a measurable tool contracts decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making tool contracts testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether tool contracts fixed the failure.

### Q45: A manufacturing quality team is building a tool-using agent that can create tickets, issue refunds, and query private systems. The current design still relies on parallelizing every action. Reviewers need a control that can parallelize independent read-only calls while serializing dependent or mutating calls. Which implementation path is most appropriate?
- ID: aai-hf-agent-development-020
- Domain: Agent Development
- Topic: parallel tool calls; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use parallel tool calls as the control boundary and require the system to parallelize independent read-only calls while serializing dependent or mutating calls.
- B. Prioritize graceful failure even though the observed failure is around parallel tool calls.
- C. Release prompt, model, and sandboxing changes together with one aggregate score.
- D. Increase model capacity or context length while leaving parallel tool calls implicit.
- Answer: A
- Explanation: Parallel tool calls is the missing control in this scenario. The right answer makes it explicit so the system can parallelize independent read-only calls while serializing dependent or mutating calls.
- Why B is wrong: It moves attention to a neighboring control instead of making parallel tool calls testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether parallel tool calls fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q46: A manufacturing quality team is building an API workflow with both read-only and mutating tools. The failure appears when the system keeps infinite retry loops as the workaround. The release needs a design step that can retry transient failures with limits, backoff, and escalation. Which implementation path is most appropriate?
- ID: aai-hf-agent-development-021
- Domain: Agent Development
- Topic: bounded retries; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Use parallel tool calls as the main gate even though reviewers are asking for bounded retries evidence.
- B. Add a release gate for bounded retries: retry transient failures with limits, backoff, and escalation.
- C. Release prompt, model, and parallel tool calls changes together with one aggregate score.
- D. Increase model capacity or context length while leaving bounded retries implicit.
- Answer: B
- Explanation: Bounded retries is the missing control in this scenario. The right answer makes it explicit so the system can retry transient failures with limits, backoff, and escalation.
- Why A is wrong: It moves attention to a neighboring control instead of making bounded retries testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether bounded retries fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q47: A semiconductor design group passes the happy-path demo for an API workflow with both read-only and mutating tools, but duplicate mutations and hidden partial failures are reaching production. The safer design is the one that can return a safe fallback or escalation path when tools or evidence fail. Which change should be made before release?
- ID: aai-hf-agent-development-022
- Domain: Agent Development
- Topic: graceful failure; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use tool selection as the main gate even though reviewers are asking for graceful failure evidence.
- B. Move the check to post-release monitoring without changing the release path for graceful failure.
- C. Change the design around graceful failure so the system can return a safe fallback or escalation path when tools or evidence fail.
- D. Increase model capacity or context length while leaving graceful failure implicit.
- Answer: C
- Explanation: Graceful failure is the missing control in this scenario. The right answer makes it explicit so the system can return a safe fallback or escalation path when tools or evidence fail.
- Why A is wrong: It moves attention to a neighboring control instead of making graceful failure testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs graceful failure controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q48: During an architecture review, an insurance claims group finds that the team can reproduce the failure around editing chained prompts with no regression tests. The missing control is the one that can version and test chained prompts that transform state. What is the best next step?
- ID: aai-hf-agent-development-023
- Domain: Agent Development
- Topic: prompt chain; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use structured output as the main gate even though reviewers are asking for prompt chain evidence.
- B. Move the check to post-release monitoring without changing the release path for prompt chain.
- C. Keep editing chained prompts with no regression tests as the main control and add a dashboard for final outputs.
- D. Instrument and enforce prompt chain; the system must version and test chained prompts that transform state.
- Answer: D
- Explanation: Prompt chain is the missing control in this scenario. The right answer makes it explicit so the system can version and test chained prompts that transform state.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt chain testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs prompt chain controlled before release or execution.
- Why C is wrong: It keeps editing chained prompts with no regression tests in control instead of adding a measurable prompt chain decision point.

### Q49: A logistics planning team is choosing between a design centered on debugging only through transcripts and one that makes regression tests explicit for a multi-step prompt chain that writes structured records. Which design should win?
- ID: aai-hf-agent-development-024
- Domain: Agent Development
- Topic: regression tests; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put regression tests before rollout so the team can turn observed failures into repeatable test cases.
- B. Move the check to post-release monitoring without changing the release path for regression tests.
- C. Keep debugging only through transcripts as the main control and add a dashboard for final outputs.
- D. Prioritize function calling even though the observed failure is around regression tests.
- Answer: A
- Explanation: Regression tests is the missing control in this scenario. The right answer makes it explicit so the system can turn observed failures into repeatable test cases.
- Why B is wrong: Monitoring is useful, but this scenario needs regression tests controlled before release or execution.
- Why C is wrong: It keeps debugging only through transcripts in control instead of adding a measurable regression tests decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making regression tests testable in the scenario.

### Q50: A public-sector casework team is triaging a failed pilot for an API workflow with both read-only and mutating tools. The failure appears when the system keeps asking the model to promise valid JSON as the workaround. The release needs a design step that can validate tool arguments before execution. Which control addresses the root cause?
- ID: aai-hf-agent-development-025
- Domain: Agent Development
- Topic: schema validation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and graceful failure changes together with one aggregate score.
- B. Make schema validation explicit in the workflow: validate tool arguments before execution.
- C. Keep asking the model to promise valid JSON as the main control and add a dashboard for final outputs.
- D. Prioritize tool selection even though the observed failure is around schema validation.
- Answer: B
- Explanation: Schema validation is the missing control in this scenario. The right answer makes it explicit so the system can validate tool arguments before execution.
- Why A is wrong: Changing several layers at once makes it harder to prove whether schema validation fixed the failure.
- Why C is wrong: It keeps asking the model to promise valid JSON in control instead of adding a measurable schema validation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making schema validation testable in the scenario.

### Q51: A public-sector casework team is choosing between a design centered on scoring only the final text and one that makes trajectory evaluation explicit for a new model route for agent tasks. Which design should win?
- ID: aai-hf-evaluation-and-tuning-001
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- B. Keep scoring only the final text as the main control and add a dashboard for final outputs.
- C. Prioritize tool-call success even though the observed failure is around trajectory evaluation.
- D. Release prompt, model, and groundedness changes together with one aggregate score.
- Answer: A
- Explanation: Trajectory evaluation is the missing control in this scenario. The right answer makes it explicit so the system can score tool choice, retrieval, safety, latency, and final answer together.
- Why B is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether trajectory evaluation fixed the failure.

### Q52: A cybersecurity response team is triaging a failed pilot for a RAG agent for policy questions. Only checking final answer style is being used as the shortcut, but it does not give the team a reliable way to measure whether the right tool was called with valid arguments and safe timing. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-002
- Domain: Evaluation and Tuning
- Topic: tool-call success; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize bootstrap evals even though the observed failure is around tool-call success.
- B. Release prompt, model, and LLM-as-judge calibration changes together with one aggregate score.
- C. Increase model capacity or context length while leaving tool-call success implicit.
- D. Use tool-call success as the control boundary and require the system to measure whether the right tool was called with valid arguments and safe timing.
- Answer: D
- Explanation: Tool-call success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the right tool was called with valid arguments and safe timing.
- Why A is wrong: It moves attention to a neighboring control instead of making tool-call success testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether tool-call success fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q53: A pharmaceutical research team passes the happy-path demo for a new model route for agent tasks, but the team can reproduce the failure around trusting fluent answers. The missing control is the one that can verify answer claims against retrieved evidence and citations. Which change should be made before release?
- ID: aai-hf-evaluation-and-tuning-003
- Domain: Evaluation and Tuning
- Topic: groundedness; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving groundedness implicit.
- B. Use tool-call success as the main gate even though reviewers are asking for groundedness evidence.
- C. Add a release gate for groundedness: verify answer claims against retrieved evidence and citations.
- D. Release prompt, model, and tool-call success changes together with one aggregate score.
- Answer: C
- Explanation: Groundedness is the missing control in this scenario. The right answer makes it explicit so the system can verify answer claims against retrieved evidence and citations.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making groundedness testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether groundedness fixed the failure.

### Q54: A logistics planning team is choosing between a design centered on BLEU-style text similarity for agent success and one that makes task success explicit for a new model route for agent tasks. Which design should win?
- ID: aai-hf-evaluation-and-tuning-004
- Domain: Evaluation and Tuning
- Topic: task success; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for task success.
- B. Change the design around task success so the system can measure whether the user goal was completed, not just whether text looked plausible.
- C. Increase model capacity or context length while leaving task success implicit.
- D. Use LLM-as-judge calibration as the main gate even though reviewers are asking for task success evidence.
- Answer: B
- Explanation: Task success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the user goal was completed, not just whether text looked plausible.
- Why A is wrong: Monitoring is useful, but this scenario needs task success controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making task success testable in the scenario.

### Q55: A manufacturing quality team is triaging a failed pilot for an agent release that changes prompts, retrieval, and tool routing. Wrong tools and missing evidence still produce fluent answers. The safer design is the one that can include p95/p99, TTFT, tool wait, and cost per task in release gates. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-005
- Domain: Evaluation and Tuning
- Topic: latency and cost eval; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Instrument and enforce latency and cost eval; the system must include p95/p99, TTFT, tool wait, and cost per task in release gates.
- B. Use bootstrap evals as the main gate even though reviewers are asking for latency and cost eval evidence.
- C. Move the check to post-release monitoring without changing the release path for latency and cost eval.
- D. Keep quality-only evals as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Latency and cost eval is the missing control in this scenario. The right answer makes it explicit so the system can include p95/p99, TTFT, tool wait, and cost per task in release gates.
- Why B is wrong: It moves attention to a neighboring control instead of making latency and cost eval testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs latency and cost eval controlled before release or execution.
- Why D is wrong: It keeps quality-only evals in control instead of adding a measurable latency and cost eval decision point.

### Q56: A bank fraud team passes the happy-path demo for a RAG agent for policy questions, but judge ratings disagree with reviewers on edge cases. The safer design is the one that can create verified question-chunk pairs when labels are missing. Which change should be made before release?
- ID: aai-hf-evaluation-and-tuning-006
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for bootstrap evals.
- B. Keep agent self-judgment as ground truth as the main control and add a dashboard for final outputs.
- C. Prioritize LLM-as-judge calibration even though the observed failure is around bootstrap evals.
- D. Put bootstrap evals before rollout so the team can create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: Bootstrap evals is the missing control in this scenario. The right answer makes it explicit so the system can create verified question-chunk pairs when labels are missing.
- Why A is wrong: Monitoring is useful, but this scenario needs bootstrap evals controlled before release or execution.
- Why B is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q57: A pharmaceutical research team passes the happy-path demo for an agent release that changes prompts, retrieval, and tool routing, but trusting a judge score with no calibration is being used as the shortcut, but it does not give the team a reliable way to anchor judge scoring criteria with human labels and disagreement review. Which change should be made before release?
- ID: aai-hf-evaluation-and-tuning-007
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize task success even though the observed failure is around LLM-as-judge calibration.
- B. Release prompt, model, and regression suite changes together with one aggregate score.
- C. Make LLM-as-judge calibration explicit in the workflow: anchor judge scoring criteria with human labels and disagreement review.
- D. Keep trusting a judge score with no calibration as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: LLM-as-judge calibration is the missing control in this scenario. The right answer makes it explicit so the system can anchor judge scoring criteria with human labels and disagreement review.
- Why A is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether LLM-as-judge calibration fixed the failure.
- Why D is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.

### Q58: A telecom network operations team is building a new model route for agent tasks. The current design still relies on changing several layers with one score. Reviewers need a control that can compare prompt, model, retrieval, and tool changes before release. Which control should be added before rollout?
- ID: aai-hf-evaluation-and-tuning-008
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving regression suite implicit.
- B. Use regression suite as the control boundary and require the system to compare prompt, model, retrieval, and tool changes before release.
- C. Prioritize bootstrap evals even though the observed failure is around regression suite.
- D. Release prompt, model, and latency and cost eval changes together with one aggregate score.
- Answer: B
- Explanation: Regression suite is the missing control in this scenario. The right answer makes it explicit so the system can compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether regression suite fixed the failure.

### Q59: A public-sector casework team is building a RAG agent for policy questions. The team can reproduce the failure around fine-tuning without root cause analysis. The missing control is the one that can isolate whether prompt, retrieval, model, or tools caused the failure. Which choice addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-009
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Add a release gate for ablation: isolate whether prompt, retrieval, model, or tools caused the failure.
- B. Release prompt, model, and groundedness changes together with one aggregate score.
- C. Increase model capacity or context length while leaving ablation implicit.
- D. Use groundedness as the main gate even though reviewers are asking for ablation evidence.
- Answer: A
- Explanation: Ablation is the missing control in this scenario. The right answer makes it explicit so the system can isolate whether prompt, retrieval, model, or tools caused the failure.
- Why B is wrong: Changing several layers at once makes it harder to prove whether ablation fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.

### Q60: A cybersecurity response team is triaging a failed pilot for a RAG agent for policy questions. Judge ratings disagree with reviewers on edge cases. The safer design is the one that can score tool choice, retrieval, safety, latency, and final answer together. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-010
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use tool-call success as the main gate even though reviewers are asking for trajectory evaluation evidence.
- B. Move the check to post-release monitoring without changing the release path for trajectory evaluation.
- C. Change the design around trajectory evaluation so the system can score tool choice, retrieval, safety, latency, and final answer together.
- D. Increase model capacity or context length while leaving trajectory evaluation implicit.
- Answer: C
- Explanation: Trajectory evaluation is the missing control in this scenario. The right answer makes it explicit so the system can score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs trajectory evaluation controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q61: During an architecture review, a semiconductor design group finds that the failure appears when the system keeps only checking final answer style as the workaround. The release needs a design step that can measure whether the right tool was called with valid arguments and safe timing. What is the best next step?
- ID: aai-hf-evaluation-and-tuning-011
- Domain: Evaluation and Tuning
- Topic: tool-call success; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use LLM-as-judge calibration as the main gate even though reviewers are asking for tool-call success evidence.
- B. Move the check to post-release monitoring without changing the release path for tool-call success.
- C. Keep only checking final answer style as the main control and add a dashboard for final outputs.
- D. Instrument and enforce tool-call success; the system must measure whether the right tool was called with valid arguments and safe timing.
- Answer: D
- Explanation: Tool-call success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the right tool was called with valid arguments and safe timing.
- Why A is wrong: It moves attention to a neighboring control instead of making tool-call success testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs tool-call success controlled before release or execution.
- Why C is wrong: It keeps only checking final answer style in control instead of adding a measurable tool-call success decision point.

### Q62: A manufacturing quality team is choosing between a design centered on trusting fluent answers and one that makes groundedness explicit for a RAG agent for policy questions. Which design should win?
- ID: aai-hf-evaluation-and-tuning-012
- Domain: Evaluation and Tuning
- Topic: groundedness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put groundedness before rollout so the team can verify answer claims against retrieved evidence and citations.
- B. Move the check to post-release monitoring without changing the release path for groundedness.
- C. Keep trusting fluent answers as the main control and add a dashboard for final outputs.
- D. Prioritize trajectory evaluation even though the observed failure is around groundedness.
- Answer: A
- Explanation: Groundedness is the missing control in this scenario. The right answer makes it explicit so the system can verify answer claims against retrieved evidence and citations.
- Why B is wrong: Monitoring is useful, but this scenario needs groundedness controlled before release or execution.
- Why C is wrong: It keeps trusting fluent answers in control instead of adding a measurable groundedness decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making groundedness testable in the scenario.

### Q63: A logistics planning team is triaging a failed pilot for a RAG agent for policy questions. The current design still relies on BLEU-style text similarity for agent success. Reviewers need a control that can measure whether the user goal was completed, not just whether text looked plausible. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-013
- Domain: Evaluation and Tuning
- Topic: task success; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and tool-call success changes together with one aggregate score.
- B. Make task success explicit in the workflow: measure whether the user goal was completed, not just whether text looked plausible.
- C. Keep BLEU-style text similarity for agent success as the main control and add a dashboard for final outputs.
- D. Prioritize trajectory evaluation even though the observed failure is around task success.
- Answer: B
- Explanation: Task success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the user goal was completed, not just whether text looked plausible.
- Why A is wrong: Changing several layers at once makes it harder to prove whether task success fixed the failure.
- Why C is wrong: It keeps BLEU-style text similarity for agent success in control instead of adding a measurable task success decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making task success testable in the scenario.

### Q64: An insurance claims group is building an agent release that changes prompts, retrieval, and tool routing. The team can reproduce the failure around quality-only evals. The missing control is the one that can include p95/p99, TTFT, tool wait, and cost per task in release gates. Which choice addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-014
- Domain: Evaluation and Tuning
- Topic: latency and cost eval; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and groundedness changes together with one aggregate score.
- B. Increase model capacity or context length while leaving latency and cost eval implicit.
- C. Use latency and cost eval as the control boundary and require the system to include p95/p99, TTFT, tool wait, and cost per task in release gates.
- D. Prioritize ablation even though the observed failure is around latency and cost eval.
- Answer: C
- Explanation: Latency and cost eval is the missing control in this scenario. The right answer makes it explicit so the system can include p95/p99, TTFT, tool wait, and cost per task in release gates.
- Why A is wrong: Changing several layers at once makes it harder to prove whether latency and cost eval fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making latency and cost eval testable in the scenario.

### Q65: A cybersecurity response team is triaging a failed pilot for an agent release that changes prompts, retrieval, and tool routing. The team can reproduce the failure around agent self-judgment as ground truth. The missing control is the one that can create verified question-chunk pairs when labels are missing. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-015
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and regression suite changes together with one aggregate score.
- B. Increase model capacity or context length while leaving bootstrap evals implicit.
- C. Use regression suite as the main gate even though reviewers are asking for bootstrap evals evidence.
- D. Add a release gate for bootstrap evals: create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: Bootstrap evals is the missing control in this scenario. The right answer makes it explicit so the system can create verified question-chunk pairs when labels are missing.
- Why A is wrong: Changing several layers at once makes it harder to prove whether bootstrap evals fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q66: A public-sector casework team passes the happy-path demo for an agent release that changes prompts, retrieval, and tool routing, but trusting a judge score with no calibration is being used as the shortcut, but it does not give the team a reliable way to anchor judge scoring criteria with human labels and disagreement review. Which change should be made before release?
- ID: aai-hf-evaluation-and-tuning-016
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Change the design around LLM-as-judge calibration so the system can anchor judge scoring criteria with human labels and disagreement review.
- B. Increase model capacity or context length while leaving LLM-as-judge calibration implicit.
- C. Use latency and cost eval as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Move the check to post-release monitoring without changing the release path for LLM-as-judge calibration.
- Answer: A
- Explanation: LLM-as-judge calibration is the missing control in this scenario. The right answer makes it explicit so the system can anchor judge scoring criteria with human labels and disagreement review.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs LLM-as-judge calibration controlled before release or execution.

### Q67: A telecom network operations team is choosing between a design centered on changing several layers with one score and one that makes regression suite explicit for a new model route for agent tasks. Which design should win?
- ID: aai-hf-evaluation-and-tuning-017
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep changing several layers with one score as the main control and add a dashboard for final outputs.
- B. Instrument and enforce regression suite; the system must compare prompt, model, retrieval, and tool changes before release.
- C. Use LLM-as-judge calibration as the main gate even though reviewers are asking for regression suite evidence.
- D. Move the check to post-release monitoring without changing the release path for regression suite.
- Answer: B
- Explanation: Regression suite is the missing control in this scenario. The right answer makes it explicit so the system can compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: It keeps changing several layers with one score in control instead of adding a measurable regression suite decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs regression suite controlled before release or execution.

### Q68: An automotive support team is building an agent release that changes prompts, retrieval, and tool routing. The failure appears when the system keeps fine-tuning without root cause analysis as the workaround. The release needs a design step that can isolate whether prompt, retrieval, model, or tools caused the failure. Which implementation path is most appropriate?
- ID: aai-hf-evaluation-and-tuning-018
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep fine-tuning without root cause analysis as the main control and add a dashboard for final outputs.
- B. Prioritize tool-call success even though the observed failure is around ablation.
- C. Put ablation before rollout so the team can isolate whether prompt, retrieval, model, or tools caused the failure.
- D. Move the check to post-release monitoring without changing the release path for ablation.
- Answer: C
- Explanation: Ablation is the missing control in this scenario. The right answer makes it explicit so the system can isolate whether prompt, retrieval, model, or tools caused the failure.
- Why A is wrong: It keeps fine-tuning without root cause analysis in control instead of adding a measurable ablation decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs ablation controlled before release or execution.

### Q69: A semiconductor design group is building a RAG agent for policy questions. The failure appears when the system keeps scoring only the final text as the workaround. The release needs a design step that can score tool choice, retrieval, safety, latency, and final answer together. Which action best fits the requirement?
- ID: aai-hf-evaluation-and-tuning-019
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep scoring only the final text as the main control and add a dashboard for final outputs.
- B. Prioritize ablation even though the observed failure is around trajectory evaluation.
- C. Release prompt, model, and task success changes together with one aggregate score.
- D. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- Answer: D
- Explanation: Trajectory evaluation is the missing control in this scenario. The right answer makes it explicit so the system can score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether trajectory evaluation fixed the failure.

### Q70: A public-sector casework team is choosing between a design centered on only checking final answer style and one that makes tool-call success explicit for a RAG agent for policy questions. Which design should win?
- ID: aai-hf-evaluation-and-tuning-020
- Domain: Evaluation and Tuning
- Topic: tool-call success; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize LLM-as-judge calibration even though the observed failure is around tool-call success.
- B. Release prompt, model, and bootstrap evals changes together with one aggregate score.
- C. Increase model capacity or context length while leaving tool-call success implicit.
- D. Use tool-call success as the control boundary and require the system to measure whether the right tool was called with valid arguments and safe timing.
- Answer: D
- Explanation: Tool-call success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the right tool was called with valid arguments and safe timing.
- Why A is wrong: It moves attention to a neighboring control instead of making tool-call success testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether tool-call success fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q71: A public-sector casework team is choosing between a design centered on trusting fluent answers and one that makes groundedness explicit for a RAG agent for policy questions. Which design should win?
- ID: aai-hf-evaluation-and-tuning-021
- Domain: Evaluation and Tuning
- Topic: groundedness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving groundedness implicit.
- B. Use tool-call success as the main gate even though reviewers are asking for groundedness evidence.
- C. Add a release gate for groundedness: verify answer claims against retrieved evidence and citations.
- D. Release prompt, model, and tool-call success changes together with one aggregate score.
- Answer: C
- Explanation: Groundedness is the missing control in this scenario. The right answer makes it explicit so the system can verify answer claims against retrieved evidence and citations.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making groundedness testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether groundedness fixed the failure.

### Q72: A semiconductor design group is triaging a failed pilot for an agent release that changes prompts, retrieval, and tool routing. Wrong tools and missing evidence still produce fluent answers. The safer design is the one that can measure whether the user goal was completed, not just whether text looked plausible. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-022
- Domain: Evaluation and Tuning
- Topic: task success; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for task success.
- B. Change the design around task success so the system can measure whether the user goal was completed, not just whether text looked plausible.
- C. Increase model capacity or context length while leaving task success implicit.
- D. Use ablation as the main gate even though reviewers are asking for task success evidence.
- Answer: B
- Explanation: Task success is the missing control in this scenario. The right answer makes it explicit so the system can measure whether the user goal was completed, not just whether text looked plausible.
- Why A is wrong: Monitoring is useful, but this scenario needs task success controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making task success testable in the scenario.

### Q73: An automotive support team is choosing between a design centered on quality-only evals and one that makes latency and cost eval explicit for a new model route for agent tasks. Which design should win?
- ID: aai-hf-evaluation-and-tuning-023
- Domain: Evaluation and Tuning
- Topic: latency and cost eval; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Instrument and enforce latency and cost eval; the system must include p95/p99, TTFT, tool wait, and cost per task in release gates.
- B. Use groundedness as the main gate even though reviewers are asking for latency and cost eval evidence.
- C. Move the check to post-release monitoring without changing the release path for latency and cost eval.
- D. Keep quality-only evals as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Latency and cost eval is the missing control in this scenario. The right answer makes it explicit so the system can include p95/p99, TTFT, tool wait, and cost per task in release gates.
- Why B is wrong: It moves attention to a neighboring control instead of making latency and cost eval testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs latency and cost eval controlled before release or execution.
- Why D is wrong: It keeps quality-only evals in control instead of adding a measurable latency and cost eval decision point.

### Q74: During an architecture review, a global retailer finds that the failure appears when the system keeps agent self-judgment as ground truth as the workaround. The release needs a design step that can create verified question-chunk pairs when labels are missing. What is the best next step?
- ID: aai-hf-evaluation-and-tuning-024
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for bootstrap evals.
- B. Keep agent self-judgment as ground truth as the main control and add a dashboard for final outputs.
- C. Prioritize LLM-as-judge calibration even though the observed failure is around bootstrap evals.
- D. Put bootstrap evals before rollout so the team can create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: Bootstrap evals is the missing control in this scenario. The right answer makes it explicit so the system can create verified question-chunk pairs when labels are missing.
- Why A is wrong: Monitoring is useful, but this scenario needs bootstrap evals controlled before release or execution.
- Why B is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q75: A manufacturing quality team is triaging a failed pilot for a RAG agent for policy questions. The current design still relies on trusting a judge score with no calibration. Reviewers need a control that can anchor judge scoring criteria with human labels and disagreement review. Which control addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-025
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize bootstrap evals even though the observed failure is around LLM-as-judge calibration.
- B. Release prompt, model, and latency and cost eval changes together with one aggregate score.
- C. Make LLM-as-judge calibration explicit in the workflow: anchor judge scoring criteria with human labels and disagreement review.
- D. Keep trusting a judge score with no calibration as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: LLM-as-judge calibration is the missing control in this scenario. The right answer makes it explicit so the system can anchor judge scoring criteria with human labels and disagreement review.
- Why A is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether LLM-as-judge calibration fixed the failure.
- Why D is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.

### Q76: A bank fraud team is choosing between a design centered on changing several layers with one score and one that makes regression suite explicit for a new model route for agent tasks. Which design should win?
- ID: aai-hf-evaluation-and-tuning-026
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving regression suite implicit.
- B. Use regression suite as the control boundary and require the system to compare prompt, model, retrieval, and tool changes before release.
- C. Prioritize bootstrap evals even though the observed failure is around regression suite.
- D. Release prompt, model, and latency and cost eval changes together with one aggregate score.
- Answer: B
- Explanation: Regression suite is the missing control in this scenario. The right answer makes it explicit so the system can compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether regression suite fixed the failure.

### Q77: An automotive support team passes the happy-path demo for a RAG agent for policy questions, but the failure appears when the system keeps fine-tuning without root cause analysis as the workaround. The release needs a design step that can isolate whether prompt, retrieval, model, or tools caused the failure. Which change should be made before release?
- ID: aai-hf-evaluation-and-tuning-027
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for ablation: isolate whether prompt, retrieval, model, or tools caused the failure.
- B. Release prompt, model, and latency and cost eval changes together with one aggregate score.
- C. Increase model capacity or context length while leaving ablation implicit.
- D. Use latency and cost eval as the main gate even though reviewers are asking for ablation evidence.
- Answer: A
- Explanation: Ablation is the missing control in this scenario. The right answer makes it explicit so the system can isolate whether prompt, retrieval, model, or tools caused the failure.
- Why B is wrong: Changing several layers at once makes it harder to prove whether ablation fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.

### Q78: During an architecture review, a telecom network operations team finds that the team can reproduce the failure around sticky in-process state. The missing control is the one that can deploy agent components as horizontally scalable services. What is the best next step?
- ID: aai-hf-deployment-and-scaling-001
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and circuit breaker changes together with one aggregate score.
- B. Make stateless services explicit in the workflow: deploy agent components as horizontally scalable services.
- C. Keep sticky in-process state as the main control and add a dashboard for final outputs.
- D. Prioritize queue depth even though the observed failure is around stateless services.
- Answer: B
- Explanation: Stateless services is the missing control in this scenario. The right answer makes it explicit so the system can deploy agent components as horizontally scalable services.
- Why A is wrong: Changing several layers at once makes it harder to prove whether stateless services fixed the failure.
- Why C is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.

### Q79: An insurance claims group passes the happy-path demo for a new endpoint profile for a high-traffic launch, but registered user count as the scaling metric is being used as the shortcut, but it does not give the team a reliable way to scale or isolate lanes when waiting work grows. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-002
- Domain: Deployment and Scaling
- Topic: queue depth; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and bulkhead changes together with one aggregate score.
- B. Increase model capacity or context length while leaving queue depth implicit.
- C. Use queue depth as the control boundary and require the system to scale or isolate lanes when waiting work grows.
- D. Prioritize fallback even though the observed failure is around queue depth.
- Answer: C
- Explanation: Queue depth is the missing control in this scenario. The right answer makes it explicit so the system can scale or isolate lanes when waiting work grows.
- Why A is wrong: Changing several layers at once makes it harder to prove whether queue depth fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making queue depth testable in the scenario.

### Q80: A semiconductor design group is triaging a failed pilot for a chat agent and an overnight report generator sharing the same serving lane. The team can reproduce the failure around average latency as the only signal. The missing control is the one that can debug tail latency by span before adding capacity. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-003
- Domain: Deployment and Scaling
- Topic: p95/p99 latency; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and traffic shaping changes together with one aggregate score.
- B. Increase model capacity or context length while leaving p95/p99 latency implicit.
- C. Use traffic shaping as the main gate even though reviewers are asking for p95/p99 latency evidence.
- D. Add a release gate for p95/p99 latency: debug tail latency by span before adding capacity.
- Answer: D
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can debug tail latency by span before adding capacity.
- Why A is wrong: Changing several layers at once makes it harder to prove whether p95/p99 latency fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q81: A public-sector casework team is choosing between a design centered on tokens-per-second alone and one that makes TTFT explicit for a new endpoint profile for a high-traffic launch. Which design should win?
- ID: aai-hf-deployment-and-scaling-004
- Domain: Deployment and Scaling
- Topic: TTFT; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around TTFT so the system can separate first-token delay from total completion time.
- B. Increase model capacity or context length while leaving TTFT implicit.
- C. Use stateless services as the main gate even though reviewers are asking for TTFT evidence.
- D. Move the check to post-release monitoring without changing the release path for TTFT.
- Answer: A
- Explanation: TTFT is the missing control in this scenario. The right answer makes it explicit so the system can separate first-token delay from total completion time.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making TTFT testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs TTFT controlled before release or execution.

### Q82: A logistics planning team passes the happy-path demo for a production agent with model, retrieval, tools, and guardrails, but one shared queue is being used as the shortcut, but it does not give the team a reliable way to separate real-time, batch, embedding, and high-risk lanes. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-005
- Domain: Deployment and Scaling
- Topic: workload isolation; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep one shared queue as the main control and add a dashboard for final outputs.
- B. Instrument and enforce workload isolation; the system must separate real-time, batch, embedding, and high-risk lanes.
- C. Use bulkhead as the main gate even though reviewers are asking for workload isolation evidence.
- D. Move the check to post-release monitoring without changing the release path for workload isolation.
- Answer: B
- Explanation: Workload isolation is the missing control in this scenario. The right answer makes it explicit so the system can separate real-time, batch, embedding, and high-risk lanes.
- Why A is wrong: It keeps one shared queue in control instead of adding a measurable workload isolation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making workload isolation testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs workload isolation controlled before release or execution.

### Q83: An automotive support team is triaging a failed pilot for a chat agent and an overnight report generator sharing the same serving lane. Letting queues grow unbounded is being used as the shortcut, but it does not give the team a reliable way to use rate limits, priority queues, and load shedding under saturation. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-006
- Domain: Deployment and Scaling
- Topic: traffic shaping; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep letting queues grow unbounded as the main control and add a dashboard for final outputs.
- B. Prioritize stateless services even though the observed failure is around traffic shaping.
- C. Put traffic shaping before rollout so the team can use rate limits, priority queues, and load shedding under saturation.
- D. Move the check to post-release monitoring without changing the release path for traffic shaping.
- Answer: C
- Explanation: Traffic shaping is the missing control in this scenario. The right answer makes it explicit so the system can use rate limits, priority queues, and load shedding under saturation.
- Why A is wrong: It keeps letting queues grow unbounded in control instead of adding a measurable traffic shaping decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making traffic shaping testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs traffic shaping controlled before release or execution.

### Q84: A cybersecurity response team is building a chat agent and an overnight report generator sharing the same serving lane. Interactive users wait behind long batch requests. The safer design is the one that can route a small traffic slice with quality and safety gates. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-007
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep big-bang rollout as the main control and add a dashboard for final outputs.
- B. Prioritize queue depth even though the observed failure is around canary rollout.
- C. Release prompt, model, and workload isolation changes together with one aggregate score.
- D. Make canary rollout explicit in the workflow: route a small traffic slice with quality and safety gates.
- Answer: D
- Explanation: Canary rollout is the missing control in this scenario. The right answer makes it explicit so the system can route a small traffic slice with quality and safety gates.
- Why A is wrong: It keeps big-bang rollout in control instead of adding a measurable canary rollout decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether canary rollout fixed the failure.

### Q85: A hospital operations team passes the happy-path demo for a new endpoint profile for a high-traffic launch, but the failure appears when the system keeps manual restarts as the rollout plan as the workaround. The release needs a design step that can switch between versioned environments with rollback evidence. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-008
- Domain: Deployment and Scaling
- Topic: blue-green rollback; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use blue-green rollback as the control boundary and require the system to switch between versioned environments with rollback evidence.
- B. Prioritize traffic shaping even though the observed failure is around blue-green rollback.
- C. Release prompt, model, and backpressure changes together with one aggregate score.
- D. Increase model capacity or context length while leaving blue-green rollback implicit.
- Answer: A
- Explanation: Blue-green rollback is the missing control in this scenario. The right answer makes it explicit so the system can switch between versioned environments with rollback evidence.
- Why B is wrong: It moves attention to a neighboring control instead of making blue-green rollback testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether blue-green rollback fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q86: A logistics planning team passes the happy-path demo for a new endpoint profile for a high-traffic launch, but quality, safety, cost, and rollback evidence are not tied to the traffic ramp. The safer design is the one that can scale model, retrieval, and tool workers by their own bottlenecks. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-009
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use queue depth as the main gate even though reviewers are asking for autoscaling evidence.
- B. Add a release gate for autoscaling: scale model, retrieval, and tool workers by their own bottlenecks.
- C. Release prompt, model, and queue depth changes together with one aggregate score.
- D. Increase model capacity or context length while leaving autoscaling implicit.
- Answer: B
- Explanation: Autoscaling is the missing control in this scenario. The right answer makes it explicit so the system can scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether autoscaling fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q87: An automotive support team is choosing between a design centered on unbounded retries and one that makes backpressure explicit for a chat agent and an overnight report generator sharing the same serving lane. Which design should win?
- ID: aai-hf-deployment-and-scaling-010
- Domain: Deployment and Scaling
- Topic: backpressure; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving backpressure implicit.
- B. Use autoscaling as the main gate even though reviewers are asking for backpressure evidence.
- C. Move the check to post-release monitoring without changing the release path for backpressure.
- D. Change the design around backpressure so the system can slow, reject, or degrade new work before dependencies cascade.
- Answer: D
- Explanation: Backpressure is the missing control in this scenario. The right answer makes it explicit so the system can slow, reject, or degrade new work before dependencies cascade.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making backpressure testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs backpressure controlled before release or execution.

### Q88: A hospital operations team passes the happy-path demo for a chat agent and an overnight report generator sharing the same serving lane, but retrying every timed-out tool call is being used as the shortcut, but it does not give the team a reliable way to stop calling a failing dependency until it recovers. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-011
- Domain: Deployment and Scaling
- Topic: circuit breaker; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for circuit breaker.
- B. Keep retrying every timed-out tool call as the main control and add a dashboard for final outputs.
- C. Instrument and enforce circuit breaker; the system must stop calling a failing dependency until it recovers.
- D. Use queue depth as the main gate even though reviewers are asking for circuit breaker evidence.
- Answer: C
- Explanation: Circuit breaker is the missing control in this scenario. The right answer makes it explicit so the system can stop calling a failing dependency until it recovers.
- Why A is wrong: Monitoring is useful, but this scenario needs circuit breaker controlled before release or execution.
- Why B is wrong: It keeps retrying every timed-out tool call in control instead of adding a measurable circuit breaker decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making circuit breaker testable in the scenario.

### Q89: A semiconductor design group passes the happy-path demo for a new endpoint profile for a high-traffic launch, but quality, safety, cost, and rollback evidence are not tied to the traffic ramp. The safer design is the one that can isolate dependencies or lanes so one failure does not exhaust all workers. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-012
- Domain: Deployment and Scaling
- Topic: bulkhead; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize workload isolation even though the observed failure is around bulkhead.
- B. Put bulkhead before rollout so the team can isolate dependencies or lanes so one failure does not exhaust all workers.
- C. Move the check to post-release monitoring without changing the release path for bulkhead.
- D. Keep one global worker pool as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Bulkhead is the missing control in this scenario. The right answer makes it explicit so the system can isolate dependencies or lanes so one failure does not exhaust all workers.
- Why A is wrong: It moves attention to a neighboring control instead of making bulkhead testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs bulkhead controlled before release or execution.
- Why D is wrong: It keeps one global worker pool in control instead of adding a measurable bulkhead decision point.

### Q90: An automotive support team passes the happy-path demo for a chat agent and an overnight report generator sharing the same serving lane, but interactive users wait behind long batch requests. The safer design is the one that can use measured fallbacks for model or tool failures. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-013
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make fallback explicit in the workflow: use measured fallbacks for model or tool failures.
- B. Keep silent degradation with no trace as the main control and add a dashboard for final outputs.
- C. Prioritize blue-green rollback even though the observed failure is around fallback.
- D. Release prompt, model, and canary rollout changes together with one aggregate score.
- Answer: A
- Explanation: Fallback is the missing control in this scenario. The right answer makes it explicit so the system can use measured fallbacks for model or tool failures.
- Why B is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether fallback fixed the failure.

### Q91: A telecom network operations team passes the happy-path demo for a chat agent and an overnight report generator sharing the same serving lane, but the current design still relies on sticky in-process state. Reviewers need a control that can deploy agent components as horizontally scalable services. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-014
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize backpressure even though the observed failure is around stateless services.
- B. Release prompt, model, and canary rollout changes together with one aggregate score.
- C. Increase model capacity or context length while leaving stateless services implicit.
- D. Use stateless services as the control boundary and require the system to deploy agent components as horizontally scalable services.
- Answer: D
- Explanation: Stateless services is the missing control in this scenario. The right answer makes it explicit so the system can deploy agent components as horizontally scalable services.
- Why A is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether stateless services fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q92: A public-sector casework team passes the happy-path demo for a new endpoint profile for a high-traffic launch, but the team can reproduce the failure around registered user count as the scaling metric. The missing control is the one that can scale or isolate lanes when waiting work grows. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-015
- Domain: Deployment and Scaling
- Topic: queue depth; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving queue depth implicit.
- B. Use backpressure as the main gate even though reviewers are asking for queue depth evidence.
- C. Add a release gate for queue depth: scale or isolate lanes when waiting work grows.
- D. Release prompt, model, and backpressure changes together with one aggregate score.
- Answer: C
- Explanation: Queue depth is the missing control in this scenario. The right answer makes it explicit so the system can scale or isolate lanes when waiting work grows.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making queue depth testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether queue depth fixed the failure.

### Q93: During an architecture review, a semiconductor design group finds that the current design still relies on average latency as the only signal. Reviewers need a control that can debug tail latency by span before adding capacity. What is the best next step?
- ID: aai-hf-deployment-and-scaling-016
- Domain: Deployment and Scaling
- Topic: p95/p99 latency; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for p95/p99 latency.
- B. Change the design around p95/p99 latency so the system can debug tail latency by span before adding capacity.
- C. Increase model capacity or context length while leaving p95/p99 latency implicit.
- D. Use TTFT as the main gate even though reviewers are asking for p95/p99 latency evidence.
- Answer: B
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can debug tail latency by span before adding capacity.
- Why A is wrong: Monitoring is useful, but this scenario needs p95/p99 latency controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q94: A pharmaceutical research team is building a chat agent and an overnight report generator sharing the same serving lane. The failure appears when the system keeps tokens-per-second alone as the workaround. The release needs a design step that can separate first-token delay from total completion time. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-017
- Domain: Deployment and Scaling
- Topic: TTFT; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce TTFT; the system must separate first-token delay from total completion time.
- B. Use p95/p99 latency as the main gate even though reviewers are asking for TTFT evidence.
- C. Move the check to post-release monitoring without changing the release path for TTFT.
- D. Keep tokens-per-second alone as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: TTFT is the missing control in this scenario. The right answer makes it explicit so the system can separate first-token delay from total completion time.
- Why B is wrong: It moves attention to a neighboring control instead of making TTFT testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs TTFT controlled before release or execution.
- Why D is wrong: It keeps tokens-per-second alone in control instead of adding a measurable TTFT decision point.

### Q95: A logistics planning team is choosing between a design centered on one shared queue and one that makes workload isolation explicit for a production agent with model, retrieval, tools, and guardrails. Which design should win?
- ID: aai-hf-deployment-and-scaling-018
- Domain: Deployment and Scaling
- Topic: workload isolation; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for workload isolation.
- B. Keep one shared queue as the main control and add a dashboard for final outputs.
- C. Prioritize queue depth even though the observed failure is around workload isolation.
- D. Put workload isolation before rollout so the team can separate real-time, batch, embedding, and high-risk lanes.
- Answer: D
- Explanation: Workload isolation is the missing control in this scenario. The right answer makes it explicit so the system can separate real-time, batch, embedding, and high-risk lanes.
- Why A is wrong: Monitoring is useful, but this scenario needs workload isolation controlled before release or execution.
- Why B is wrong: It keeps one shared queue in control instead of adding a measurable workload isolation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making workload isolation testable in the scenario.

### Q96: A public-sector casework team is building a chat agent and an overnight report generator sharing the same serving lane. The failure appears when the system keeps letting queues grow unbounded as the workaround. The release needs a design step that can use rate limits, priority queues, and load shedding under saturation. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-019
- Domain: Deployment and Scaling
- Topic: traffic shaping; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize workload isolation even though the observed failure is around traffic shaping.
- B. Release prompt, model, and queue depth changes together with one aggregate score.
- C. Make traffic shaping explicit in the workflow: use rate limits, priority queues, and load shedding under saturation.
- D. Keep letting queues grow unbounded as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Traffic shaping is the missing control in this scenario. The right answer makes it explicit so the system can use rate limits, priority queues, and load shedding under saturation.
- Why A is wrong: It moves attention to a neighboring control instead of making traffic shaping testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether traffic shaping fixed the failure.
- Why D is wrong: It keeps letting queues grow unbounded in control instead of adding a measurable traffic shaping decision point.

### Q97: A bank fraud team is triaging a failed pilot for a chat agent and an overnight report generator sharing the same serving lane. The current design still relies on big-bang rollout. Reviewers need a control that can route a small traffic slice with quality and safety gates. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-020
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and blue-green rollback changes together with one aggregate score.
- B. Increase model capacity or context length while leaving canary rollout implicit.
- C. Use canary rollout as the control boundary and require the system to route a small traffic slice with quality and safety gates.
- D. Prioritize autoscaling even though the observed failure is around canary rollout.
- Answer: C
- Explanation: Canary rollout is the missing control in this scenario. The right answer makes it explicit so the system can route a small traffic slice with quality and safety gates.
- Why A is wrong: Changing several layers at once makes it harder to prove whether canary rollout fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.

### Q98: A semiconductor design group is building a new endpoint profile for a high-traffic launch. The current design still relies on manual restarts as the rollout plan. Reviewers need a control that can switch between versioned environments with rollback evidence. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-021
- Domain: Deployment and Scaling
- Topic: blue-green rollback; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and traffic shaping changes together with one aggregate score.
- B. Increase model capacity or context length while leaving blue-green rollback implicit.
- C. Use traffic shaping as the main gate even though reviewers are asking for blue-green rollback evidence.
- D. Add a release gate for blue-green rollback: switch between versioned environments with rollback evidence.
- Answer: D
- Explanation: Blue-green rollback is the missing control in this scenario. The right answer makes it explicit so the system can switch between versioned environments with rollback evidence.
- Why A is wrong: Changing several layers at once makes it harder to prove whether blue-green rollback fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making blue-green rollback testable in the scenario.

### Q99: A manufacturing quality team is triaging a failed pilot for a chat agent and an overnight report generator sharing the same serving lane. The team can reproduce the failure around scaling only the LLM. The missing control is the one that can scale model, retrieval, and tool workers by their own bottlenecks. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-022
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around autoscaling so the system can scale model, retrieval, and tool workers by their own bottlenecks.
- B. Increase model capacity or context length while leaving autoscaling implicit.
- C. Use canary rollout as the main gate even though reviewers are asking for autoscaling evidence.
- D. Move the check to post-release monitoring without changing the release path for autoscaling.
- Answer: A
- Explanation: Autoscaling is the missing control in this scenario. The right answer makes it explicit so the system can scale model, retrieval, and tool workers by their own bottlenecks.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs autoscaling controlled before release or execution.

### Q100: During an architecture review, a global retailer finds that the failure appears when the system keeps unbounded retries as the workaround. The release needs a design step that can slow, reject, or degrade new work before dependencies cascade. What is the best next step?
- ID: aai-hf-deployment-and-scaling-023
- Domain: Deployment and Scaling
- Topic: backpressure; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Keep unbounded retries as the main control and add a dashboard for final outputs.
- B. Instrument and enforce backpressure; the system must slow, reject, or degrade new work before dependencies cascade.
- C. Use circuit breaker as the main gate even though reviewers are asking for backpressure evidence.
- D. Move the check to post-release monitoring without changing the release path for backpressure.
- Answer: B
- Explanation: Backpressure is the missing control in this scenario. The right answer makes it explicit so the system can slow, reject, or degrade new work before dependencies cascade.
- Why A is wrong: It keeps unbounded retries in control instead of adding a measurable backpressure decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making backpressure testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs backpressure controlled before release or execution.

# High Fidelity Generated Questions 003

## Questions

### Q1: During an architecture review, a hospital operations team finds that the team can reproduce the failure around average latency dashboards. The missing control is the one that can monitor tail latency alongside task quality and safety. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-009
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 SLOs; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for p95/p99 SLOs: monitor tail latency alongside task quality and safety.
- B. Release prompt, model, and audit trail changes together with one aggregate score.
- C. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- D. Use audit trail as the main gate even though reviewers are asking for p95/p99 SLOs evidence.
- Answer: A
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why B is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.

### Q2: A bank fraud team is building an operational monitoring plan. The current design still relies on average latency only. Reviewers need a control that can watch tail latency, queueing, retries, and error budgets. Which control should be added before rollout?
- ID: ags-hf-observability-operations-and-cost-010
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use p95/p99 SLOs as the main gate even though reviewers are asking for p95/p99 latency evidence.
- B. Move the check to post-release monitoring without changing the release path for p95/p99 latency.
- C. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- D. Increase model capacity or context length while leaving p95/p99 latency implicit.
- Answer: C
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs p95/p99 latency controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q3: A semiconductor design group is building an operational monitoring plan. The failure is tied to canary monitoring. The safer design is the one that can compare quality, safety, cost, and latency during rollout. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-011
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use fallback policy as the main gate even though reviewers are asking for canary monitoring evidence.
- B. Move the check to post-release monitoring without changing the release path for canary monitoring.
- C. Keep full rollout before measurement as the main control and add a dashboard for final outputs.
- D. Instrument and enforce canary monitoring; the system must compare quality, safety, cost, and latency during rollout.
- Answer: D
- Explanation: Canary monitoring is the missing control in this scenario. The right answer makes it explicit so the system can compare quality, safety, cost, and latency during rollout.
- Why A is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs canary monitoring controlled before release or execution.
- Why C is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.

### Q4: A hospital operations team is building an operational monitoring plan. The failure appears when the system keeps silent fallback to lower quality as the workaround. The release needs a design step that can route around unhealthy models or tools with trace evidence. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-012
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put fallback policy before rollout so the team can route around unhealthy models or tools with trace evidence.
- B. Move the check to post-release monitoring without changing the release path for fallback policy.
- C. Keep silent fallback to lower quality as the main control and add a dashboard for final outputs.
- D. Prioritize p95/p99 latency even though the observed failure is around fallback policy.
- Answer: A
- Explanation: Fallback policy is the missing control in this scenario. The right answer makes it explicit so the system can route around unhealthy models or tools with trace evidence.
- Why B is wrong: Monitoring is useful, but this scenario needs fallback policy controlled before release or execution.
- Why C is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.

### Q5: During an architecture review, a logistics planning team finds that the team can reproduce the failure around HTTP 200 as the only success signal. The missing control is the one that can capture spans for model, retrieval, tools, guardrails, latency, and cost. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-013
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and fallback policy changes together with one aggregate score.
- B. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- D. Prioritize canary monitoring even though the observed failure is around trace replay.
- Answer: B
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Changing several layers at once makes it harder to prove whether trace replay fixed the failure.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q6: During an architecture review, a pharmaceutical research team finds that the team can reproduce the failure around final answer logs only. The missing control is the one that can record model, prompt, tool, retrieval, guardrail, approval, and version metadata. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-014
- Domain: Observability, Operations, and Cost
- Topic: audit trail; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and trace replay changes together with one aggregate score.
- B. Increase model capacity or context length while leaving audit trail implicit.
- C. Use audit trail as the control boundary and require the system to record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- D. Prioritize fallback policy even though the observed failure is around audit trail.
- Answer: C
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.

### Q7: A cybersecurity response team is triaging a failed pilot for an operational monitoring plan. The failure appears when the system keeps average latency dashboards as the workaround. The release needs a design step that can monitor tail latency alongside task quality and safety. Which control addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-015
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 SLOs; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and fallback policy changes together with one aggregate score.
- B. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- C. Use fallback policy as the main gate even though reviewers are asking for p95/p99 SLOs evidence.
- D. Add a release gate for p95/p99 SLOs: monitor tail latency alongside task quality and safety.
- Answer: D
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why A is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.

### Q8: A manufacturing quality team is building an operational monitoring plan. The failure is tied to p95/p99 latency. The safer design is the one that can watch tail latency, queueing, retries, and error budgets. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-016
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- B. Increase model capacity or context length while leaving p95/p99 latency implicit.
- C. Use trace replay as the main gate even though reviewers are asking for p95/p99 latency evidence.
- D. Move the check to post-release monitoring without changing the release path for p95/p99 latency.
- Answer: A
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can watch tail latency, queueing, retries, and error budgets.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs p95/p99 latency controlled before release or execution.

### Q9: A logistics planning team is choosing between a design centered on full rollout before measurement and one that makes canary monitoring explicit for an operational monitoring plan. Which design should win?
- ID: ags-hf-observability-operations-and-cost-017
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep full rollout before measurement as the main control and add a dashboard for final outputs.
- B. Instrument and enforce canary monitoring; the system must compare quality, safety, cost, and latency during rollout.
- C. Use p95/p99 latency as the main gate even though reviewers are asking for canary monitoring evidence.
- D. Move the check to post-release monitoring without changing the release path for canary monitoring.
- Answer: B
- Explanation: Canary monitoring is the missing control in this scenario. The right answer makes it explicit so the system can compare quality, safety, cost, and latency during rollout.
- Why A is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs canary monitoring controlled before release or execution.

### Q10: An automotive support team passes the happy-path demo for an operational monitoring plan, but silent fallback to lower quality is being used as the shortcut, but it does not give the team a reliable way to route around unhealthy models or tools with trace evidence. Which change should be made before release?
- ID: ags-hf-observability-operations-and-cost-018
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep silent fallback to lower quality as the main control and add a dashboard for final outputs.
- B. Prioritize trace replay even though the observed failure is around fallback policy.
- C. Put fallback policy before rollout so the team can route around unhealthy models or tools with trace evidence.
- D. Move the check to post-release monitoring without changing the release path for fallback policy.
- Answer: C
- Explanation: Fallback policy is the missing control in this scenario. The right answer makes it explicit so the system can route around unhealthy models or tools with trace evidence.
- Why A is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs fallback policy controlled before release or execution.

### Q11: During an architecture review, a bank fraud team finds that the team can reproduce the failure around HTTP 200 as the only success signal. The missing control is the one that can capture spans for model, retrieval, tools, guardrails, latency, and cost. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-019
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- B. Prioritize fallback policy even though the observed failure is around trace replay.
- C. Release prompt, model, and p95/p99 SLOs changes together with one aggregate score.
- D. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether trace replay fixed the failure.

### Q12: A manufacturing quality team is triaging a failed pilot for an operational monitoring plan. The current design still relies on final answer logs only. Reviewers need a control that can record model, prompt, tool, retrieval, guardrail, approval, and version metadata. Which control addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-020
- Domain: Observability, Operations, and Cost
- Topic: audit trail; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize canary monitoring even though the observed failure is around audit trail.
- B. Release prompt, model, and trace replay changes together with one aggregate score.
- C. Increase model capacity or context length while leaving audit trail implicit.
- D. Use audit trail as the control boundary and require the system to record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Answer: D
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q13: During an architecture review, a public-sector casework team finds that the failure appears when the system keeps average latency dashboards as the workaround. The release needs a design step that can monitor tail latency alongside task quality and safety. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-021
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 SLOs; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- B. Use canary monitoring as the main gate even though reviewers are asking for p95/p99 SLOs evidence.
- C. Add a release gate for p95/p99 SLOs: monitor tail latency alongside task quality and safety.
- D. Release prompt, model, and canary monitoring changes together with one aggregate score.
- Answer: C
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.

### Q14: A semiconductor design group is building an operational monitoring plan. Average latency only is being used as the shortcut, but it does not give the team a reliable way to watch tail latency, queueing, retries, and error budgets. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-022
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for p95/p99 latency.
- B. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- C. Increase model capacity or context length while leaving p95/p99 latency implicit.
- D. Use canary monitoring as the main gate even though reviewers are asking for p95/p99 latency evidence.
- Answer: B
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: Monitoring is useful, but this scenario needs p95/p99 latency controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q15: An insurance claims group is building an operational monitoring plan. Full rollout before measurement is being used as the shortcut, but it does not give the team a reliable way to compare quality, safety, cost, and latency during rollout. Which design is the best first change?
- ID: ags-hf-observability-operations-and-cost-023
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce canary monitoring; the system must compare quality, safety, cost, and latency during rollout.
- B. Use audit trail as the main gate even though reviewers are asking for canary monitoring evidence.
- C. Move the check to post-release monitoring without changing the release path for canary monitoring.
- D. Keep full rollout before measurement as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Canary monitoring is the missing control in this scenario. The right answer makes it explicit so the system can compare quality, safety, cost, and latency during rollout.
- Why B is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs canary monitoring controlled before release or execution.
- Why D is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.

### Q16: During an architecture review, a global retailer finds that silent fallback to lower quality is being used as the shortcut, but it does not give the team a reliable way to route around unhealthy models or tools with trace evidence. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-024
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for fallback policy.
- B. Keep silent fallback to lower quality as the main control and add a dashboard for final outputs.
- C. Prioritize p95/p99 SLOs even though the observed failure is around fallback policy.
- D. Put fallback policy before rollout so the team can route around unhealthy models or tools with trace evidence.
- Answer: D
- Explanation: Fallback policy is the missing control in this scenario. The right answer makes it explicit so the system can route around unhealthy models or tools with trace evidence.
- Why A is wrong: Monitoring is useful, but this scenario needs fallback policy controlled before release or execution.
- Why B is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.

### Q17: A hospital operations team is building an operational monitoring plan. The failure is tied to trace replay. The safer design is the one that can capture spans for model, retrieval, tools, guardrails, latency, and cost. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-025
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize p95/p99 SLOs even though the observed failure is around trace replay.
- B. Release prompt, model, and fallback policy changes together with one aggregate score.
- C. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether trace replay fixed the failure.
- Why D is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.

### Q18: A bank fraud team is choosing between a design centered on final answer logs only and one that makes audit trail explicit for an operational monitoring plan. Which design should win?
- ID: ags-hf-observability-operations-and-cost-026
- Domain: Observability, Operations, and Cost
- Topic: audit trail; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving audit trail implicit.
- B. Use audit trail as the control boundary and require the system to record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- C. Prioritize fallback policy even though the observed failure is around audit trail.
- D. Release prompt, model, and p95/p99 latency changes together with one aggregate score.
- Answer: B
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.

### Q19: An insurance claims group is building an operational monitoring plan. The current design still relies on average latency dashboards. Reviewers need a control that can monitor tail latency alongside task quality and safety. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-027
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 SLOs; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for p95/p99 SLOs: monitor tail latency alongside task quality and safety.
- B. Release prompt, model, and trace replay changes together with one aggregate score.
- C. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- D. Use trace replay as the main gate even though reviewers are asking for p95/p99 SLOs evidence.
- Answer: A
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why B is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.

### Q20: A logistics planning team passes the happy-path demo for an operational monitoring plan, but the failure appears when the system keeps average latency only as the workaround. The release needs a design step that can watch tail latency, queueing, retries, and error budgets. Which change should be made before release?
- ID: ags-hf-observability-operations-and-cost-028
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving p95/p99 latency implicit.
- B. Use canary monitoring as the main gate even though reviewers are asking for p95/p99 latency evidence.
- C. Move the check to post-release monitoring without changing the release path for p95/p99 latency.
- D. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- Answer: D
- Explanation: P95/p99 latency is the missing control in this scenario. The right answer makes it explicit so the system can watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs p95/p99 latency controlled before release or execution.

### Q21: A hospital operations team is triaging a failed pilot for an operational monitoring plan. The failure is tied to canary monitoring. The safer design is the one that can compare quality, safety, cost, and latency during rollout. Which control addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-029
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for canary monitoring.
- B. Keep full rollout before measurement as the main control and add a dashboard for final outputs.
- C. Instrument and enforce canary monitoring; the system must compare quality, safety, cost, and latency during rollout.
- D. Use fallback policy as the main gate even though reviewers are asking for canary monitoring evidence.
- Answer: C
- Explanation: Canary monitoring is the missing control in this scenario. The right answer makes it explicit so the system can compare quality, safety, cost, and latency during rollout.
- Why A is wrong: Monitoring is useful, but this scenario needs canary monitoring controlled before release or execution.
- Why B is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.

### Q22: A semiconductor design group is triaging a failed pilot for an operational monitoring plan. The team can reproduce the failure around silent fallback to lower quality. The missing control is the one that can route around unhealthy models or tools with trace evidence. Which control addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-030
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Put fallback policy before rollout so the team can route around unhealthy models or tools with trace evidence.
- B. Move the check to post-release monitoring without changing the release path for fallback policy.
- C. Keep silent fallback to lower quality as the main control and add a dashboard for final outputs.
- D. Prioritize p95/p99 latency even though the observed failure is around fallback policy.
- Answer: A
- Explanation: Fallback policy is the missing control in this scenario. The right answer makes it explicit so the system can route around unhealthy models or tools with trace evidence.
- Why B is wrong: Monitoring is useful, but this scenario needs fallback policy controlled before release or execution.
- Why C is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.

### Q23: During an architecture review, a global retailer finds that the current design still relies on HTTP 200 as the only success signal. Reviewers need a control that can capture spans for model, retrieval, tools, guardrails, latency, and cost. What is the best next step?
- ID: ags-hf-observability-operations-and-cost-031
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and fallback policy changes together with one aggregate score.
- B. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- D. Prioritize canary monitoring even though the observed failure is around trace replay.
- Answer: B
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Changing several layers at once makes it harder to prove whether trace replay fixed the failure.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q24: A pharmaceutical research team is triaging a failed pilot for an operational monitoring plan. The failure appears when the system keeps final answer logs only as the workaround. The release needs a design step that can record model, prompt, tool, retrieval, guardrail, approval, and version metadata. Which control addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-032
- Domain: Observability, Operations, and Cost
- Topic: audit trail; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and p95/p99 SLOs changes together with one aggregate score.
- B. Increase model capacity or context length while leaving audit trail implicit.
- C. Use audit trail as the control boundary and require the system to record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- D. Prioritize trace replay even though the observed failure is around audit trail.
- Answer: C
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.

### Q25: A hospital operations team passes the happy-path demo for a governance and review workflow, but the failure appears when the system keeps review after irreversible mutations as the workaround. The release needs a design step that can require approval before high-risk actions. Which change should be made before release?
- ID: ags-hf-human-oversight-and-governance-001
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize review queues even though the observed failure is around human-in-the-loop.
- B. Release prompt, model, and human-on-the-loop changes together with one aggregate score.
- C. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- D. Keep review after irreversible mutations as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether human-in-the-loop fixed the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q26: A bank fraud team passes the happy-path demo for a governance and review workflow, but manual approval for every low-risk step is being used as the shortcut, but it does not give the team a reliable way to sample low-risk decisions and monitor drift. Which change should be made before release?
- ID: ags-hf-human-oversight-and-governance-002
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving human-on-the-loop implicit.
- B. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- C. Prioritize feedback loop even though the observed failure is around human-on-the-loop.
- D. Release prompt, model, and decision traceability changes together with one aggregate score.
- Answer: B
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether human-on-the-loop fixed the failure.

### Q27: An automotive support team is building a governance and review workflow. First-in-first-out for all cases is being used as the shortcut, but it does not give the team a reliable way to prioritize by risk, uncertainty, and impact. Which implementation path is most appropriate?
- ID: ags-hf-human-oversight-and-governance-003
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- B. Release prompt, model, and human-in-the-loop changes together with one aggregate score.
- C. Increase model capacity or context length while leaving review queues implicit.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why B is wrong: Changing several layers at once makes it harder to prove whether review queues fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q28: A logistics planning team passes the happy-path demo for a governance and review workflow, but the failure appears when the system keeps collecting comments with no downstream owner as the workaround. The release needs a design step that can turn review labels into evals, prompt fixes, or training data. Which change should be made before release?
- ID: ags-hf-human-oversight-and-governance-004
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving feedback loop implicit.
- B. Use escalation threshold as the main gate even though reviewers are asking for feedback loop evidence.
- C. Move the check to post-release monitoring without changing the release path for feedback loop.
- D. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs feedback loop controlled before release or execution.

### Q29: A public-sector casework team passes the happy-path demo for a governance and review workflow, but the team can reproduce the failure around asking reviewers to judge opaque outputs. The missing control is the one that can show evidence, confidence, and pending tool actions to reviewers. Which change should be made before release?
- ID: ags-hf-human-oversight-and-governance-005
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for transparent handoff.
- B. Keep asking reviewers to judge opaque outputs as the main control and add a dashboard for final outputs.
- C. Instrument and enforce transparent handoff; the system must show evidence, confidence, and pending tool actions to reviewers.
- D. Use override path as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: Monitoring is useful, but this scenario needs transparent handoff controlled before release or execution.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q30: A cybersecurity response team is choosing between a design centered on same path for every request and one that makes escalation threshold explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-006
- Domain: Human Oversight and Governance
- Topic: escalation threshold; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize review queues even though the observed failure is around escalation threshold.
- B. Put escalation threshold before rollout so the team can send low-confidence or high-impact cases to the right reviewer.
- C. Move the check to post-release monitoring without changing the release path for escalation threshold.
- D. Keep same path for every request as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why A is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs escalation threshold controlled before release or execution.
- Why D is wrong: It keeps same path for every request in control instead of adding a measurable escalation threshold decision point.

### Q31: A pharmaceutical research team is choosing between a design centered on silent long-term memory and one that makes user consent explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-007
- Domain: Human Oversight and Governance
- Topic: user consent; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make user consent explicit in the workflow: ask before storing preferences or using personal context beyond the session.
- B. Keep silent long-term memory as the main control and add a dashboard for final outputs.
- C. Prioritize transparent handoff even though the observed failure is around user consent.
- D. Release prompt, model, and escalation threshold changes together with one aggregate score.
- Answer: A
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why B is wrong: It keeps silent long-term memory in control instead of adding a measurable user consent decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether user consent fixed the failure.

### Q32: A telecom network operations team is triaging a failed pilot for a governance and review workflow. The current design still relies on binary approve-only UI. Reviewers need a control that can allow reviewers to approve, reject, edit, or request more evidence. Which control addresses the root cause?
- ID: ags-hf-human-oversight-and-governance-008
- Domain: Human Oversight and Governance
- Topic: override path; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize escalation threshold even though the observed failure is around override path.
- B. Release prompt, model, and transparent handoff changes together with one aggregate score.
- C. Increase model capacity or context length while leaving override path implicit.
- D. Use override path as the control boundary and require the system to allow reviewers to approve, reject, edit, or request more evidence.
- Answer: D
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether override path fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q33: A manufacturing quality team is triaging a failed pilot for a governance and review workflow. The failure is tied to decision traceability. The safer design is the one that can show why the agent chose a route, tool, evidence, and action. Which control addresses the root cause?
- ID: ags-hf-human-oversight-and-governance-009
- Domain: Human Oversight and Governance
- Topic: decision traceability; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving decision traceability implicit.
- B. Use override path as the main gate even though reviewers are asking for decision traceability evidence.
- C. Add a release gate for decision traceability: show why the agent chose a route, tool, evidence, and action.
- D. Release prompt, model, and override path changes together with one aggregate score.
- Answer: C
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether decision traceability fixed the failure.

### Q34: During an architecture review, a semiconductor design group finds that the current design still relies on review after irreversible mutations. Reviewers need a control that can require approval before high-risk actions. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-010
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- B. Increase model capacity or context length while leaving human-in-the-loop implicit.
- C. Use review queues as the main gate even though reviewers are asking for human-in-the-loop evidence.
- D. Move the check to post-release monitoring without changing the release path for human-in-the-loop.
- Answer: A
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs human-in-the-loop controlled before release or execution.

### Q35: A semiconductor design group is building a governance and review workflow. The failure appears when the system keeps manual approval for every low-risk step as the workaround. The release needs a design step that can sample low-risk decisions and monitor drift. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-011
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep manual approval for every low-risk step as the main control and add a dashboard for final outputs.
- B. Instrument and enforce human-on-the-loop; the system must sample low-risk decisions and monitor drift.
- C. Use transparent handoff as the main gate even though reviewers are asking for human-on-the-loop evidence.
- D. Move the check to post-release monitoring without changing the release path for human-on-the-loop.
- Answer: B
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why A is wrong: It keeps manual approval for every low-risk step in control instead of adding a measurable human-on-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs human-on-the-loop controlled before release or execution.

### Q36: A hospital operations team is choosing between a design centered on first-in-first-out for all cases and one that makes review queues explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-012
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep first-in-first-out for all cases as the main control and add a dashboard for final outputs.
- B. Prioritize transparent handoff even though the observed failure is around review queues.
- C. Put review queues before rollout so the team can prioritize by risk, uncertainty, and impact.
- D. Move the check to post-release monitoring without changing the release path for review queues.
- Answer: C
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: It keeps first-in-first-out for all cases in control instead of adding a measurable review queues decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs review queues controlled before release or execution.

### Q37: During an architecture review, a global retailer finds that collecting comments with no downstream owner is being used as the shortcut, but it does not give the team a reliable way to turn review labels into evals, prompt fixes, or training data. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-013
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep collecting comments with no downstream owner as the main control and add a dashboard for final outputs.
- B. Prioritize transparent handoff even though the observed failure is around feedback loop.
- C. Release prompt, model, and override path changes together with one aggregate score.
- D. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether feedback loop fixed the failure.

### Q38: An automotive support team is building a governance and review workflow. Asking reviewers to judge opaque outputs is being used as the shortcut, but it does not give the team a reliable way to show evidence, confidence, and pending tool actions to reviewers. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-014
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- B. Prioritize user consent even though the observed failure is around transparent handoff.
- C. Release prompt, model, and escalation threshold changes together with one aggregate score.
- D. Increase model capacity or context length while leaving transparent handoff implicit.
- Answer: A
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether transparent handoff fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q39: A bank fraud team is choosing between a design centered on same path for every request and one that makes escalation threshold explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-015
- Domain: Human Oversight and Governance
- Topic: escalation threshold; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use feedback loop as the main gate even though reviewers are asking for escalation threshold evidence.
- B. Add a release gate for escalation threshold: send low-confidence or high-impact cases to the right reviewer.
- C. Release prompt, model, and feedback loop changes together with one aggregate score.
- D. Increase model capacity or context length while leaving escalation threshold implicit.
- Answer: B
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why A is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether escalation threshold fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q40: A manufacturing quality team is triaging a failed pilot for a governance and review workflow. The failure appears when the system keeps silent long-term memory as the workaround. The release needs a design step that can ask before storing preferences or using personal context beyond the session. Which control addresses the root cause?
- ID: ags-hf-human-oversight-and-governance-016
- Domain: Human Oversight and Governance
- Topic: user consent; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use escalation threshold as the main gate even though reviewers are asking for user consent evidence.
- B. Move the check to post-release monitoring without changing the release path for user consent.
- C. Change the design around user consent so the system can ask before storing preferences or using personal context beyond the session.
- D. Increase model capacity or context length while leaving user consent implicit.
- Answer: C
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why A is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs user consent controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q41: During an architecture review, a telecom network operations team finds that the failure is tied to override path. The safer design is the one that can allow reviewers to approve, reject, edit, or request more evidence. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-017
- Domain: Human Oversight and Governance
- Topic: override path; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use user consent as the main gate even though reviewers are asking for override path evidence.
- B. Move the check to post-release monitoring without changing the release path for override path.
- C. Keep binary approve-only UI as the main control and add a dashboard for final outputs.
- D. Instrument and enforce override path; the system must allow reviewers to approve, reject, edit, or request more evidence.
- Answer: D
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs override path controlled before release or execution.
- Why C is wrong: It keeps binary approve-only UI in control instead of adding a measurable override path decision point.

### Q42: An automotive support team is triaging a failed pilot for a governance and review workflow. The current design still relies on reviewing a final answer with no trajectory. Reviewers need a control that can show why the agent chose a route, tool, evidence, and action. Which control addresses the root cause?
- ID: ags-hf-human-oversight-and-governance-018
- Domain: Human Oversight and Governance
- Topic: decision traceability; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put decision traceability before rollout so the team can show why the agent chose a route, tool, evidence, and action.
- B. Move the check to post-release monitoring without changing the release path for decision traceability.
- C. Keep reviewing a final answer with no trajectory as the main control and add a dashboard for final outputs.
- D. Prioritize user consent even though the observed failure is around decision traceability.
- Answer: A
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why B is wrong: Monitoring is useful, but this scenario needs decision traceability controlled before release or execution.
- Why C is wrong: It keeps reviewing a final answer with no trajectory in control instead of adding a measurable decision traceability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.

### Q43: A bank fraud team is choosing between a design centered on review after irreversible mutations and one that makes human-in-the-loop explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-019
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and review queues changes together with one aggregate score.
- B. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- C. Keep review after irreversible mutations as the main control and add a dashboard for final outputs.
- D. Prioritize human-on-the-loop even though the observed failure is around human-in-the-loop.
- Answer: B
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why A is wrong: Changing several layers at once makes it harder to prove whether human-in-the-loop fixed the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q44: During an architecture review, a public-sector casework team finds that manual approval for every low-risk step is being used as the shortcut, but it does not give the team a reliable way to sample low-risk decisions and monitor drift. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-020
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving human-on-the-loop implicit.
- B. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- C. Prioritize decision traceability even though the observed failure is around human-on-the-loop.
- D. Release prompt, model, and feedback loop changes together with one aggregate score.
- Answer: B
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether human-on-the-loop fixed the failure.

### Q45: A public-sector casework team is triaging a failed pilot for a governance and review workflow. The failure appears when the system keeps first-in-first-out for all cases as the workaround. The release needs a design step that can prioritize by risk, uncertainty, and impact. Which control addresses the root cause?
- ID: ags-hf-human-oversight-and-governance-021
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- B. Release prompt, model, and feedback loop changes together with one aggregate score.
- C. Increase model capacity or context length while leaving review queues implicit.
- D. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why B is wrong: Changing several layers at once makes it harder to prove whether review queues fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q46: A semiconductor design group is choosing between a design centered on collecting comments with no downstream owner and one that makes feedback loop explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-022
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving feedback loop implicit.
- B. Use escalation threshold as the main gate even though reviewers are asking for feedback loop evidence.
- C. Move the check to post-release monitoring without changing the release path for feedback loop.
- D. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs feedback loop controlled before release or execution.

### Q47: During an architecture review, an insurance claims group finds that the team can reproduce the failure around asking reviewers to judge opaque outputs. The missing control is the one that can show evidence, confidence, and pending tool actions to reviewers. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-023
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for transparent handoff.
- B. Keep asking reviewers to judge opaque outputs as the main control and add a dashboard for final outputs.
- C. Instrument and enforce transparent handoff; the system must show evidence, confidence, and pending tool actions to reviewers.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: Monitoring is useful, but this scenario needs transparent handoff controlled before release or execution.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q48: During an architecture review, a global retailer finds that the team can reproduce the failure around same path for every request. The missing control is the one that can send low-confidence or high-impact cases to the right reviewer. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-024
- Domain: Human Oversight and Governance
- Topic: escalation threshold; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize human-in-the-loop even though the observed failure is around escalation threshold.
- B. Put escalation threshold before rollout so the team can send low-confidence or high-impact cases to the right reviewer.
- C. Move the check to post-release monitoring without changing the release path for escalation threshold.
- D. Keep same path for every request as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why A is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs escalation threshold controlled before release or execution.
- Why D is wrong: It keeps same path for every request in control instead of adding a measurable escalation threshold decision point.

### Q49: A public-sector casework team is building a governance and review workflow. The failure appears when the system keeps silent long-term memory as the workaround. The release needs a design step that can ask before storing preferences or using personal context beyond the session. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-025
- Domain: Human Oversight and Governance
- Topic: user consent; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make user consent explicit in the workflow: ask before storing preferences or using personal context beyond the session.
- B. Keep silent long-term memory as the main control and add a dashboard for final outputs.
- C. Prioritize transparent handoff even though the observed failure is around user consent.
- D. Release prompt, model, and escalation threshold changes together with one aggregate score.
- Answer: A
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why B is wrong: It keeps silent long-term memory in control instead of adding a measurable user consent decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether user consent fixed the failure.

### Q50: A semiconductor design group is choosing between a design centered on binary approve-only UI and one that makes override path explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-026
- Domain: Human Oversight and Governance
- Topic: override path; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize escalation threshold even though the observed failure is around override path.
- B. Release prompt, model, and transparent handoff changes together with one aggregate score.
- C. Increase model capacity or context length while leaving override path implicit.
- D. Use override path as the control boundary and require the system to allow reviewers to approve, reject, edit, or request more evidence.
- Answer: D
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether override path fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q51: During an architecture review, an insurance claims group finds that the team can reproduce the failure around reviewing a final answer with no trajectory. The missing control is the one that can show why the agent chose a route, tool, evidence, and action. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-027
- Domain: Human Oversight and Governance
- Topic: decision traceability; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving decision traceability implicit.
- B. Use feedback loop as the main gate even though reviewers are asking for decision traceability evidence.
- C. Add a release gate for decision traceability: show why the agent chose a route, tool, evidence, and action.
- D. Release prompt, model, and feedback loop changes together with one aggregate score.
- Answer: C
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether decision traceability fixed the failure.

### Q52: A global retailer is building a governance and review workflow. Review after irreversible mutations is being used as the shortcut, but it does not give the team a reliable way to require approval before high-risk actions. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-028
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for human-in-the-loop.
- B. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- C. Increase model capacity or context length while leaving human-in-the-loop implicit.
- D. Use decision traceability as the main gate even though reviewers are asking for human-in-the-loop evidence.
- Answer: B
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why A is wrong: Monitoring is useful, but this scenario needs human-in-the-loop controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q53: During an architecture review, a public-sector casework team finds that the team can reproduce the failure around manual approval for every low-risk step. The missing control is the one that can sample low-risk decisions and monitor drift. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-029
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce human-on-the-loop; the system must sample low-risk decisions and monitor drift.
- B. Use override path as the main gate even though reviewers are asking for human-on-the-loop evidence.
- C. Move the check to post-release monitoring without changing the release path for human-on-the-loop.
- D. Keep manual approval for every low-risk step as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs human-on-the-loop controlled before release or execution.
- Why D is wrong: It keeps manual approval for every low-risk step in control instead of adding a measurable human-on-the-loop decision point.

### Q54: A bank fraud team is choosing between a design centered on first-in-first-out for all cases and one that makes review queues explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-030
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep first-in-first-out for all cases as the main control and add a dashboard for final outputs.
- B. Prioritize override path even though the observed failure is around review queues.
- C. Put review queues before rollout so the team can prioritize by risk, uncertainty, and impact.
- D. Move the check to post-release monitoring without changing the release path for review queues.
- Answer: C
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: It keeps first-in-first-out for all cases in control instead of adding a measurable review queues decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs review queues controlled before release or execution.

### Q55: During an architecture review, a global retailer finds that the current design still relies on collecting comments with no downstream owner. Reviewers need a control that can turn review labels into evals, prompt fixes, or training data. What is the best next step?
- ID: ags-hf-human-oversight-and-governance-031
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep collecting comments with no downstream owner as the main control and add a dashboard for final outputs.
- B. Prioritize transparent handoff even though the observed failure is around feedback loop.
- C. Release prompt, model, and override path changes together with one aggregate score.
- D. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether feedback loop fixed the failure.

### Q56: An insurance claims group is choosing between a design centered on asking reviewers to judge opaque outputs and one that makes transparent handoff explicit for a governance and review workflow. Which design should win?
- ID: ags-hf-human-oversight-and-governance-032
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- B. Prioritize human-on-the-loop even though the observed failure is around transparent handoff.
- C. Release prompt, model, and human-in-the-loop changes together with one aggregate score.
- D. Increase model capacity or context length while leaving transparent handoff implicit.
- Answer: A
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether transparent handoff fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q57: A manufacturing quality team is preparing a production rollout. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-training-data-curation-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Cost/Latency Optimizer when you need to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.

### Q58: A semiconductor design group is reviewing the implementation plan. The implementation requirement is to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which capability page covers the missing layer?
- ID: ags-hf-svc-training-data-curation-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Use Training Data Curation Pipeline when you need to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training-time data curation.

### Q59: A pharmaceutical research team has narrowed the next engineering decision. The next release blocker is diagnosing where time is spent across retrieval, tools, and inference. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-training-data-curation-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Model Customization Toolkit when you need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- D. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.

### Q60: A telecom network operations team needs to choose the right implementation surface. The blocker is preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which study card is the right next stop?
- ID: ags-hf-svc-training-data-curation-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Training Data Curation Pipeline is the best fit for this layer: fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use Model Customization Toolkit when you need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.

### Q61: A hospital operations team is preparing a production rollout. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which reusable concept area should guide the design?
- ID: ags-hf-svc-training-data-curation-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Model Customization Toolkit when you need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- D. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.

### Q62: A telecom network operations team is setting a release gate. The implementation requirement is to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which study capability should they read first?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Runtime knowledge preparation.

### Q63: An insurance claims group has narrowed the next engineering decision. The rollout is blocked until the team can prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Knowledge Ingestion and Permission Pipeline when you need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Training Data Curation Pipeline is the best fit for this layer: fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.

### Q64: A semiconductor design group is setting a release gate. The trace points to the need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. The team must avoid solving this with the wrong lifecycle layer. Which study card is the right next stop?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use Prompt and Context Design when you need to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.

### Q65: A hospital operations team has narrowed the next engineering decision. The work to finish before release is preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Knowledge Ingestion and Permission Pipeline is the best fit for this layer: runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q66: A global retailer is setting a release gate. The blocker is preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. The team must avoid solving this with the wrong lifecycle layer. Which study capability should they read first?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Model Inference Endpoint is the best fit for this layer: packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q67: A hospital operations team is preparing a production rollout. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-model-selection-and-registry-001
- Domain: Model Selection and Customization
- Topic: Study capability: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.

### Q68: A semiconductor design group is setting a release gate. The blocker is deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-model-selection-and-registry-002
- Domain: Model Selection and Customization
- Topic: Study capability: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Memory Store is the best fit for this layer: scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- C. Use Model Selection and Registry when you need to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Model selection.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.

### Q69: An automotive support team is preparing a production rollout. The next release blocker is avoid mistaking the model itself for the endpoint that serves it. Which reusable concept area should guide the design?
- ID: ags-hf-svc-model-selection-and-registry-003
- Domain: Model Selection and Customization
- Topic: Study capability: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Prompt and Context Design when you need to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.

### Q70: A global retailer is reviewing the implementation plan. The trace points to the need to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which study card is the right next stop?
- ID: ags-hf-svc-model-selection-and-registry-004
- Domain: Model Selection and Customization
- Topic: Study capability: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.

### Q71: A manufacturing quality team is fixing the layer called out by the trace and design review. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-model-selection-and-registry-005
- Domain: Model Selection and Customization
- Topic: Study capability: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- D. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why C is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.

### Q72: A bank fraud team needs to choose the right implementation surface. The trace points to the need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. What is the best first implementation choice?
- ID: ags-hf-svc-foundation-model-training-stack-001
- Domain: Model Selection and Customization
- Topic: Study capability: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q73: A public-sector casework team is preparing a production rollout. The rollout is blocked until the team can create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-foundation-model-training-stack-002
- Domain: Model Selection and Customization
- Topic: Study capability: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q74: A global retailer is setting a release gate. The blocker is creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. The team must avoid solving this with the wrong lifecycle layer. Which study capability should they read first?
- ID: ags-hf-svc-foundation-model-training-stack-003
- Domain: Model Selection and Customization
- Topic: Study capability: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- B. Use Model Inference Endpoint when you need to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Cost/Latency Optimizer is the best fit for this layer: optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.

### Q75: A pharmaceutical research team is fixing the layer called out by the trace and design review. The work to finish before release is creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-foundation-model-training-stack-004
- Domain: Model Selection and Customization
- Topic: Study capability: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Foundation Model Training Stack is the best fit for this layer: heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Use Evaluation and Regression Harness when you need to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.

### Q76: A cybersecurity response team is setting a release gate. The trace points to the need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. The team must avoid solving this with the wrong lifecycle layer. Which study card is the right next stop?
- ID: ags-hf-svc-foundation-model-training-stack-005
- Domain: Model Selection and Customization
- Topic: Study capability: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Knowledge Ingestion and Permission Pipeline when you need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Observability and Trace Monitor is the best fit for this layer: live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.

### Q77: A bank fraud team needs to choose the right implementation surface. The trace points to the need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples. What is the best first implementation choice?
- ID: ags-hf-svc-model-customization-toolkit-001
- Domain: Model Selection and Customization
- Topic: Study capability: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: D
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training and customization.

### Q78: A manufacturing quality team is preparing a production rollout. The rollout is blocked until the team can change durable behavior, style, criteria adherence, or domain task adaptation learned from examples. Which General Study capability owns this requirement?
- ID: ags-hf-svc-model-customization-toolkit-002
- Domain: Model Selection and Customization
- Topic: Study capability: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Model Customization Toolkit when you need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Observability and Trace Monitor is the best fit for this layer: live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: A
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training and customization.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q79: A logistics planning team is reviewing the implementation plan. The blocker is changing durable behavior, style, criteria adherence, or domain task adaptation learned from examples. What is the best first implementation choice?
- ID: ags-hf-svc-model-customization-toolkit-003
- Domain: Model Selection and Customization
- Topic: Study capability: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use Cost/Latency Optimizer when you need to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, criteria adherence, or domain task adaptation learned from examples.
- C. Latency, Throughput, and Traffic Control is the best fit for this layer: production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: B
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training and customization.

### Q80: An automotive support team is fixing the layer called out by the trace and design review. The work to finish before release is changing durable behavior, style, criteria adherence, or domain task adaptation learned from examples. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-model-customization-toolkit-004
- Domain: Model Selection and Customization
- Topic: Study capability: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Model Serving Gateway when you need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Model Customization Toolkit is the best fit for this layer: adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: C
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training and customization.

### Q81: A semiconductor design group is setting a release gate. The trace points to the need to change durable behavior, style, criteria adherence, or domain task adaptation learned from examples. What is the best first implementation choice?
- ID: ags-hf-svc-model-customization-toolkit-005
- Domain: Model Selection and Customization
- Topic: Study capability: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Knowledge and RAG Pipeline when you need to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Knowledge Ingestion and Permission Pipeline is the best fit for this layer: runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: D
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Training and customization.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training and customization.

### Q82: A semiconductor design group is setting a release gate. The blocker is adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control. Which study capability should they read first?
- ID: ags-hf-svc-prompt-and-context-design-001
- Domain: Model Selection and Customization
- Topic: Study capability: Prompt and Context Design; lifecycle: Prompt and context adaptation; Which lifecycle component adapts behavior without training or fine-tuning?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: C
- Explanation: Prompt and Context Design is the best fit because it sits in Prompt and context adaptation: No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Prompt and context adaptation.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Prompt and context adaptation.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Prompt and context adaptation.

### Q83: A public-sector casework team is preparing a production rollout. The rollout is blocked until the team can adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-prompt-and-context-design-002
- Domain: Model Selection and Customization
- Topic: Study capability: Prompt and Context Design; lifecycle: Prompt and context adaptation; Which lifecycle component adapts behavior without training or fine-tuning?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- B. Use Prompt and Context Design when you need to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Training Data Curation Pipeline is the best fit for this layer: fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: B
- Explanation: Prompt and Context Design is the best fit because it sits in Prompt and context adaptation: No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Prompt and context adaptation.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Prompt and context adaptation.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Prompt and context adaptation.

### Q84: A global retailer is reviewing the implementation plan. The trace points to the need to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control. The team must avoid solving this with the wrong lifecycle layer. Which study capability should they read first?
- ID: ags-hf-svc-prompt-and-context-design-003
- Domain: Model Selection and Customization
- Topic: Study capability: Prompt and Context Design; lifecycle: Prompt and context adaptation; Which lifecycle component adapts behavior without training or fine-tuning?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Foundation Model Training Stack is the best fit for this layer: heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Use Model Serving Gateway when you need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: A
- Explanation: Prompt and Context Design is the best fit because it sits in Prompt and context adaptation: No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Prompt and context adaptation.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Prompt and context adaptation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Prompt and context adaptation.

### Q85: An insurance claims group is fixing the layer called out by the trace and design review. The work to finish before release is adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-prompt-and-context-design-004
- Domain: Model Selection and Customization
- Topic: Study capability: Prompt and Context Design; lifecycle: Prompt and context adaptation; Which lifecycle component adapts behavior without training or fine-tuning?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: D
- Explanation: Prompt and Context Design is the best fit because it sits in Prompt and context adaptation: No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Prompt and context adaptation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Prompt and context adaptation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Prompt and context adaptation.

### Q86: A bank fraud team needs to choose the right implementation surface. The blocker is adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control. What is the best first implementation choice?
- ID: ags-hf-svc-prompt-and-context-design-005
- Domain: Model Selection and Customization
- Topic: Study capability: Prompt and Context Design; lifecycle: Prompt and context adaptation; Which lifecycle component adapts behavior without training or fine-tuning?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Prompt and Context Design is the best fit because it sits in Prompt and context adaptation: No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Prompt and context adaptation.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Prompt and context adaptation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Prompt and context adaptation.

### Q87: A telecom network operations team needs to choose the right implementation surface. The blocker is building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution. What is the best first implementation choice?
- ID: ags-hf-svc-agent-orchestration-runtime-001
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Agent Orchestration Runtime; lifecycle: Agent orchestration; Which layer coordinates agent roles, tools, and state?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Knowledge Ingestion and Permission Pipeline is the best fit for this layer: runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Use Evaluation and Regression Harness when you need to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Answer: B
- Explanation: Agent Orchestration Runtime is the best fit because it sits in Agent orchestration: Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Agent orchestration.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q88: An automotive support team is preparing a production rollout. The rollout is blocked until the team can build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution. Which General Study capability owns this requirement?
- ID: ags-hf-svc-agent-orchestration-runtime-002
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Agent Orchestration Runtime; lifecycle: Agent orchestration; Which layer coordinates agent roles, tools, and state?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Agent Orchestration Runtime when you need to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Agent Orchestration Runtime is the best fit because it sits in Agent orchestration: Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Agent orchestration.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Agent orchestration.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Agent orchestration.

### Q89: A semiconductor design group is setting a release gate. The implementation requirement is to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution. Which study capability should they read first?
- ID: ags-hf-svc-agent-orchestration-runtime-003
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Agent Orchestration Runtime; lifecycle: Agent orchestration; Which layer coordinates agent roles, tools, and state?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Use Tool Gateway and Function Runtime when you need to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: D
- Explanation: Agent Orchestration Runtime is the best fit because it sits in Agent orchestration: Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Agent orchestration.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Agent orchestration.

### Q90: A public-sector casework team has narrowed the next engineering decision. The work to finish before release is building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-agent-orchestration-runtime-004
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Agent Orchestration Runtime; lifecycle: Agent orchestration; Which layer coordinates agent roles, tools, and state?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Use Cost/Latency Optimizer when you need to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: A
- Explanation: Agent Orchestration Runtime is the best fit because it sits in Agent orchestration: Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Agent orchestration.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Agent orchestration.

### Q91: A telecom network operations team needs to choose the right implementation surface. The implementation requirement is to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution. What is the best first implementation choice?
- ID: ags-hf-svc-agent-orchestration-runtime-005
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Agent Orchestration Runtime; lifecycle: Agent orchestration; Which layer coordinates agent roles, tools, and state?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Answer: B
- Explanation: Agent Orchestration Runtime is the best fit because it sits in Agent orchestration: Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Agent orchestration.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Agent orchestration.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q92: An automotive support team is fixing the layer called out by the trace and design review. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-001
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Tool execution.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Tool execution.

### Q93: A logistics planning team is setting a release gate. The trace points to the need to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-002
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Use Tool Gateway and Function Runtime when you need to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Model Inference Endpoint is the best fit for this layer: packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Tool execution.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q94: A public-sector casework team is preparing a production rollout. The next release blocker is separating model planning from server-side function execution. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-003
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Evaluation and Regression Harness is the best fit for this layer: test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Model Selection and Registry when you need to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: A
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Tool execution.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.

### Q95: A bank fraud team is setting a release gate. The trace points to the need to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. What is the best first implementation choice?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-004
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: D
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Tool execution.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q96: An automotive support team is preparing a production rollout. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. The team wants the choice that acts at this layer, not a neighboring one. Which General Study capability owns this requirement?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-005
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Use Model Serving Gateway when you need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Tool execution.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Tool execution.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q97: A pharmaceutical research team has narrowed the next engineering decision. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- C. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why B is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.

### Q98: A telecom network operations team is setting a release gate. The blocker is grounding answers in private, changing, or source-grounded knowledge at query time without changing weights. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Knowledge and RAG Pipeline when you need to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.

### Q99: A manufacturing quality team is fixing the layer called out by the trace and design review. The next release blocker is separating retrieval quality from fine-tuning and serving infrastructure. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use Training Data Curation Pipeline when you need to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q100: A bank fraud team needs to choose the right implementation surface. The implementation requirement is to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. The team must avoid solving this with the wrong lifecycle layer. Which study capability should they read first?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Human Review and Governance Console when you need to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- C. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for RAG and retrieval.
- Why B is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.

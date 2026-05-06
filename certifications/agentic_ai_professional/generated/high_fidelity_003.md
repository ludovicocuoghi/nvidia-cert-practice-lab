# High Fidelity Generated Questions 003

## Questions

### Q1: During an architecture review, a manufacturing quality team finds that route mix, retrieval hit rate, p99, safety blocks, and escalation rates are drifting. The safer design is the one that can sample low-risk decisions for ongoing review. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-011
- Domain: Run, Monitor, and Maintain
- Topic: human-on-the-loop sampling; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use audit trail as the main gate even though reviewers are asking for human-on-the-loop sampling evidence.
- B. Move the check to post-release monitoring without changing the release path for human-on-the-loop sampling.
- C. Keep review only catastrophic failures as the main control and add a dashboard for final outputs.
- D. Instrument and enforce human-on-the-loop sampling; the system must sample low-risk decisions for ongoing review.
- Answer: D
- Explanation: Human-on-the-loop sampling is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions for ongoing review.
- Why A is wrong: It moves attention to a neighboring control instead of making human-on-the-loop sampling testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs human-on-the-loop sampling controlled before release or execution.
- Why C is wrong: It keeps review only catastrophic failures in control instead of adding a measurable human-on-the-loop sampling decision point.

### Q2: During an architecture review, a bank fraud team finds that the team can reproduce the failure around HTTP 200 as the only success signal. The missing control is the one that can capture spans for model, retrieval, tools, guardrails, latency, and cost. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-012
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put trace replay before rollout so the team can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Move the check to post-release monitoring without changing the release path for trace replay.
- C. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- D. Prioritize drift monitoring even though the observed failure is around trace replay.
- Answer: A
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: Monitoring is useful, but this scenario needs trace replay controlled before release or execution.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q3: An automotive support team is building a live agent that uses retrieval, tools, guardrails, and model calls. The team can reproduce the failure around final answer logs only. The missing control is the one that can record model, prompt, tool, retrieval, guardrail, approval, and version metadata. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-013
- Domain: Run, Monitor, and Maintain
- Topic: audit trail; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and observability changes together with one aggregate score.
- B. Make audit trail explicit in the workflow: record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- C. Keep final answer logs only as the main control and add a dashboard for final outputs.
- D. Prioritize SLOs even though the observed failure is around audit trail.
- Answer: B
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.
- Why C is wrong: It keeps final answer logs only in control instead of adding a measurable audit trail decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.

### Q4: A global retailer is building a mature deployment with changing user traffic. Average latency dashboards is being used as the shortcut, but it does not give the team a reliable way to monitor tail latency alongside task quality and safety. Which action best fits the requirement?
- ID: aai-hf-run-monitor-and-maintain-014
- Domain: Run, Monitor, and Maintain
- Topic: p95/p99 SLOs; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and human-on-the-loop sampling changes together with one aggregate score.
- B. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- C. Use p95/p99 SLOs as the control boundary and require the system to monitor tail latency alongside task quality and safety.
- D. Prioritize TTFT monitoring even though the observed failure is around p95/p99 SLOs.
- Answer: C
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why A is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.

### Q5: A hospital operations team is triaging a failed pilot for a release that caused a subtle quality regression. The team can reproduce the failure around tokens-per-second only. The missing control is the one that can track first-token responsiveness separately from total latency. Which control addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-015
- Domain: Run, Monitor, and Maintain
- Topic: TTFT monitoring; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and SLOs changes together with one aggregate score.
- B. Increase model capacity or context length while leaving TTFT monitoring implicit.
- C. Use SLOs as the main gate even though reviewers are asking for TTFT monitoring evidence.
- D. Add a release gate for TTFT monitoring: track first-token responsiveness separately from total latency.
- Answer: D
- Explanation: TTFT monitoring is the missing control in this scenario. The right answer makes it explicit so the system can track first-token responsiveness separately from total latency.
- Why A is wrong: Changing several layers at once makes it harder to prove whether TTFT monitoring fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making TTFT monitoring testable in the scenario.

### Q6: During an architecture review, a cybersecurity response team finds that gPU utilization alone is being used as the shortcut, but it does not give the team a reliable way to measure cost per task and per successful answer. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-016
- Domain: Run, Monitor, and Maintain
- Topic: cost monitoring; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around cost monitoring so the system can measure cost per task and per successful answer.
- B. Increase model capacity or context length while leaving cost monitoring implicit.
- C. Use trace replay as the main gate even though reviewers are asking for cost monitoring evidence.
- D. Move the check to post-release monitoring without changing the release path for cost monitoring.
- Answer: A
- Explanation: Cost monitoring is the missing control in this scenario. The right answer makes it explicit so the system can measure cost per task and per successful answer.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making cost monitoring testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs cost monitoring controlled before release or execution.

### Q7: During an architecture review, a pharmaceutical research team finds that the current design still relies on average latency only. Reviewers need a control that can watch route mix, retrieval hit rate, judge scores, and escalation rates. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-017
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep average latency only as the main control and add a dashboard for final outputs.
- B. Instrument and enforce drift monitoring; the system must watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Use human-on-the-loop sampling as the main gate even though reviewers are asking for drift monitoring evidence.
- D. Move the check to post-release monitoring without changing the release path for drift monitoring.
- Answer: B
- Explanation: Drift monitoring is the missing control in this scenario. The right answer makes it explicit so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs drift monitoring controlled before release or execution.

### Q8: A global retailer is choosing between a design centered on manual transcript review only and one that makes incident response explicit for a release that caused a subtle quality regression. Which design should win?
- ID: aai-hf-run-monitor-and-maintain-018
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep manual transcript review only as the main control and add a dashboard for final outputs.
- B. Prioritize TTFT monitoring even though the observed failure is around incident response.
- C. Put incident response before rollout so the team can convert incidents into regression tests and rollback rules.
- D. Move the check to post-release monitoring without changing the release path for incident response.
- Answer: C
- Explanation: Incident response is the missing control in this scenario. The right answer makes it explicit so the system can convert incidents into regression tests and rollback rules.
- Why A is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs incident response controlled before release or execution.

### Q9: A hospital operations team is building a release that caused a subtle quality regression. The team can reproduce the failure around model tokens/sec alone. The missing control is the one that can measure task success, safety blocks, p95/p99, and cost together. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-019
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep model tokens/sec alone as the main control and add a dashboard for final outputs.
- B. Prioritize incident response even though the observed failure is around SLOs.
- C. Release prompt, model, and observability changes together with one aggregate score.
- D. Make SLOs explicit in the workflow: measure task success, safety blocks, p95/p99, and cost together.
- Answer: D
- Explanation: SLOs is the missing control in this scenario. The right answer makes it explicit so the system can measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether SLOs fixed the failure.

### Q10: During an architecture review, a bank fraud team finds that incidents cannot be replayed or tied to model, prompt, tool, or policy versions. The safer design is the one that can correlate workflow spans across services. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-020
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize audit trail even though the observed failure is around observability.
- B. Release prompt, model, and trace replay changes together with one aggregate score.
- C. Increase model capacity or context length while leaving observability implicit.
- D. Use observability as the control boundary and require the system to correlate workflow spans across services.
- Answer: D
- Explanation: Observability is the missing control in this scenario. The right answer makes it explicit so the system can correlate workflow spans across services.
- Why A is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether observability fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q11: A cybersecurity response team is triaging a failed pilot for a release that caused a subtle quality regression. There is no incident-to-eval path or rollback evidence. The safer design is the one that can connect bad releases to versioned artifacts and eval deltas. Which control addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-021
- Domain: Run, Monitor, and Maintain
- Topic: rollback evidence; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving rollback evidence implicit.
- B. Use incident response as the main gate even though reviewers are asking for rollback evidence evidence.
- C. Add a release gate for rollback evidence: connect bad releases to versioned artifacts and eval deltas.
- D. Release prompt, model, and incident response changes together with one aggregate score.
- Answer: C
- Explanation: Rollback evidence is the missing control in this scenario. The right answer makes it explicit so the system can connect bad releases to versioned artifacts and eval deltas.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making rollback evidence testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether rollback evidence fixed the failure.

### Q12: A public-sector casework team is choosing between a design centered on review only catastrophic failures and one that makes human-on-the-loop sampling explicit for a mature deployment with changing user traffic. Which design should win?
- ID: aai-hf-run-monitor-and-maintain-022
- Domain: Run, Monitor, and Maintain
- Topic: human-on-the-loop sampling; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for human-on-the-loop sampling.
- B. Change the design around human-on-the-loop sampling so the system can sample low-risk decisions for ongoing review.
- C. Increase model capacity or context length while leaving human-on-the-loop sampling implicit.
- D. Use TTFT monitoring as the main gate even though reviewers are asking for human-on-the-loop sampling evidence.
- Answer: B
- Explanation: Human-on-the-loop sampling is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions for ongoing review.
- Why A is wrong: Monitoring is useful, but this scenario needs human-on-the-loop sampling controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making human-on-the-loop sampling testable in the scenario.

### Q13: During an architecture review, a logistics planning team finds that hTTP 200 as the only success signal is being used as the shortcut, but it does not give the team a reliable way to capture spans for model, retrieval, tools, guardrails, latency, and cost. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-023
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce trace replay; the system must capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Use cost monitoring as the main gate even though reviewers are asking for trace replay evidence.
- C. Move the check to post-release monitoring without changing the release path for trace replay.
- D. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs trace replay controlled before release or execution.
- Why D is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.

### Q14: A pharmaceutical research team is choosing between a design centered on final answer logs only and one that makes audit trail explicit for a live agent that uses retrieval, tools, guardrails, and model calls. Which design should win?
- ID: aai-hf-run-monitor-and-maintain-024
- Domain: Run, Monitor, and Maintain
- Topic: audit trail; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for audit trail.
- B. Keep final answer logs only as the main control and add a dashboard for final outputs.
- C. Prioritize SLOs even though the observed failure is around audit trail.
- D. Put audit trail before rollout so the team can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Answer: D
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: Monitoring is useful, but this scenario needs audit trail controlled before release or execution.
- Why B is wrong: It keeps final answer logs only in control instead of adding a measurable audit trail decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.

### Q15: A bank fraud team passes the happy-path demo for a release that caused a subtle quality regression, but the team can reproduce the failure around average latency dashboards. The missing control is the one that can monitor tail latency alongside task quality and safety. Which change should be made before release?
- ID: aai-hf-run-monitor-and-maintain-025
- Domain: Run, Monitor, and Maintain
- Topic: p95/p99 SLOs; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize trace replay even though the observed failure is around p95/p99 SLOs.
- B. Release prompt, model, and audit trail changes together with one aggregate score.
- C. Make p95/p99 SLOs explicit in the workflow: monitor tail latency alongside task quality and safety.
- D. Keep average latency dashboards as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why A is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.
- Why D is wrong: It keeps average latency dashboards in control instead of adding a measurable p95/p99 SLOs decision point.

### Q16: A manufacturing quality team is building a release that caused a subtle quality regression. The failure appears when the system keeps tokens-per-second only as the workaround. The release needs a design step that can track first-token responsiveness separately from total latency. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-026
- Domain: Run, Monitor, and Maintain
- Topic: TTFT monitoring; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving TTFT monitoring implicit.
- B. Use TTFT monitoring as the control boundary and require the system to track first-token responsiveness separately from total latency.
- C. Prioritize observability even though the observed failure is around TTFT monitoring.
- D. Release prompt, model, and SLOs changes together with one aggregate score.
- Answer: B
- Explanation: TTFT monitoring is the missing control in this scenario. The right answer makes it explicit so the system can track first-token responsiveness separately from total latency.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making TTFT monitoring testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether TTFT monitoring fixed the failure.

### Q17: A telecom network operations team is building a mature deployment with changing user traffic. The current design still relies on GPU utilization alone. Reviewers need a control that can measure cost per task and per successful answer. Which architecture keeps the boundary cleanest?
- ID: aai-hf-run-monitor-and-maintain-027
- Domain: Run, Monitor, and Maintain
- Topic: cost monitoring; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for cost monitoring: measure cost per task and per successful answer.
- B. Release prompt, model, and rollback evidence changes together with one aggregate score.
- C. Increase model capacity or context length while leaving cost monitoring implicit.
- D. Use rollback evidence as the main gate even though reviewers are asking for cost monitoring evidence.
- Answer: A
- Explanation: Cost monitoring is the missing control in this scenario. The right answer makes it explicit so the system can measure cost per task and per successful answer.
- Why B is wrong: Changing several layers at once makes it harder to prove whether cost monitoring fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making cost monitoring testable in the scenario.

### Q18: A pharmaceutical research team passes the happy-path demo for a live agent that uses retrieval, tools, guardrails, and model calls, but average latency only is being used as the shortcut, but it does not give the team a reliable way to watch route mix, retrieval hit rate, judge scores, and escalation rates. Which change should be made before release?
- ID: aai-hf-run-monitor-and-maintain-028
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving drift monitoring implicit.
- B. Use human-on-the-loop sampling as the main gate even though reviewers are asking for drift monitoring evidence.
- C. Move the check to post-release monitoring without changing the release path for drift monitoring.
- D. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: Drift monitoring is the missing control in this scenario. The right answer makes it explicit so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs drift monitoring controlled before release or execution.

### Q19: A cybersecurity response team is triaging a failed pilot for a live agent that uses retrieval, tools, guardrails, and model calls. Incidents cannot be replayed or tied to model, prompt, tool, or policy versions. The safer design is the one that can convert incidents into regression tests and rollback rules. Which control addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-029
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for incident response.
- B. Keep manual transcript review only as the main control and add a dashboard for final outputs.
- C. Instrument and enforce incident response; the system must convert incidents into regression tests and rollback rules.
- D. Use cost monitoring as the main gate even though reviewers are asking for incident response evidence.
- Answer: C
- Explanation: Incident response is the missing control in this scenario. The right answer makes it explicit so the system can convert incidents into regression tests and rollback rules.
- Why A is wrong: Monitoring is useful, but this scenario needs incident response controlled before release or execution.
- Why B is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q20: A public-sector casework team is building a live agent that uses retrieval, tools, guardrails, and model calls. The failure appears when the system keeps model tokens/sec alone as the workaround. The release needs a design step that can measure task success, safety blocks, p95/p99, and cost together. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-030
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Put SLOs before rollout so the team can measure task success, safety blocks, p95/p99, and cost together.
- B. Move the check to post-release monitoring without changing the release path for SLOs.
- C. Keep model tokens/sec alone as the main control and add a dashboard for final outputs.
- D. Prioritize cost monitoring even though the observed failure is around SLOs.
- Answer: A
- Explanation: SLOs is the missing control in this scenario. The right answer makes it explicit so the system can measure task success, safety blocks, p95/p99, and cost together.
- Why B is wrong: Monitoring is useful, but this scenario needs SLOs controlled before release or execution.
- Why C is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.

### Q21: During an architecture review, an insurance claims group finds that there is no incident-to-eval path or rollback evidence. The safer design is the one that can correlate workflow spans across services. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-031
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and SLOs changes together with one aggregate score.
- B. Make observability explicit in the workflow: correlate workflow spans across services.
- C. Keep separate logs with no request ID as the main control and add a dashboard for final outputs.
- D. Prioritize trace replay even though the observed failure is around observability.
- Answer: B
- Explanation: Observability is the missing control in this scenario. The right answer makes it explicit so the system can correlate workflow spans across services.
- Why A is wrong: Changing several layers at once makes it harder to prove whether observability fixed the failure.
- Why C is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q22: A global retailer is choosing between a design centered on unversioned hotfixes and one that makes rollback evidence explicit for a release that caused a subtle quality regression. Which design should win?
- ID: aai-hf-run-monitor-and-maintain-032
- Domain: Run, Monitor, and Maintain
- Topic: rollback evidence; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and incident response changes together with one aggregate score.
- B. Increase model capacity or context length while leaving rollback evidence implicit.
- C. Use rollback evidence as the control boundary and require the system to connect bad releases to versioned artifacts and eval deltas.
- D. Prioritize TTFT monitoring even though the observed failure is around rollback evidence.
- Answer: C
- Explanation: Rollback evidence is the missing control in this scenario. The right answer makes it explicit so the system can connect bad releases to versioned artifacts and eval deltas.
- Why A is wrong: Changing several layers at once makes it harder to prove whether rollback evidence fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making rollback evidence testable in the scenario.

### Q23: A hospital operations team passes the happy-path demo for an agent that reads retrieved documents and proposes tool actions, but one final moderation pass is being used as the shortcut, but it does not give the team a reliable way to combine input, retrieval, tool, and output controls. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-001
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and least privilege changes together with one aggregate score.
- B. Make layered controls explicit in the workflow: combine input, retrieval, tool, and output controls.
- C. Keep one final moderation pass as the main control and add a dashboard for final outputs.
- D. Prioritize approval gates even though the observed failure is around layered controls.
- Answer: B
- Explanation: Layered controls is the missing control in this scenario. The right answer makes it explicit so the system can combine input, retrieval, tool, and output controls.
- Why A is wrong: Changing several layers at once makes it harder to prove whether layered controls fixed the failure.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q24: A cybersecurity response team is building a system that stores interaction logs and memory. PII and user preferences outlive their allowed purpose. The safer design is the one that can treat retrieved text and tool output as data, not instructions. Which action best fits the requirement?
- ID: aai-hf-safety-ethics-and-compliance-002
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and approval gates changes together with one aggregate score.
- B. Increase model capacity or context length while leaving prompt injection implicit.
- C. Use prompt injection as the control boundary and require the system to treat retrieved text and tool output as data, not instructions.
- D. Prioritize decision traceability even though the observed failure is around prompt injection.
- Answer: C
- Explanation: Prompt injection is the missing control in this scenario. The right answer makes it explicit so the system can treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Changing several layers at once makes it harder to prove whether prompt injection fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q25: An insurance claims group is building a system that stores interaction logs and memory. The team can reproduce the failure around giving the LLM API keys. The missing control is the one that can scope credentials to tools and roles. Which design is the best first change?
- ID: aai-hf-safety-ethics-and-compliance-003
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and policy testing changes together with one aggregate score.
- B. Increase model capacity or context length while leaving least privilege implicit.
- C. Use policy testing as the main gate even though reviewers are asking for least privilege evidence.
- D. Add a release gate for least privilege: scope credentials to tools and roles.
- Answer: D
- Explanation: Least privilege is the missing control in this scenario. The right answer makes it explicit so the system can scope credentials to tools and roles.
- Why A is wrong: Changing several layers at once makes it harder to prove whether least privilege fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q26: During an architecture review, a global retailer finds that approval after execution is being used as the shortcut, but it does not give the team a reliable way to require human approval for high-impact mutations. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-004
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Change the design around approval gates so the system can require human approval for high-impact mutations.
- B. Increase model capacity or context length while leaving approval gates implicit.
- C. Use bias and fairness as the main gate even though reviewers are asking for approval gates evidence.
- D. Move the check to post-release monitoring without changing the release path for approval gates.
- Answer: A
- Explanation: Approval gates is the missing control in this scenario. The right answer makes it explicit so the system can require human approval for high-impact mutations.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs approval gates controlled before release or execution.

### Q27: A manufacturing quality team is triaging a failed pilot for an agent that reads retrieved documents and proposes tool actions. The team can reproduce the failure around spot checks only. The missing control is the one that can test refusals, jailbreaks, and unsafe tool proposals. Which control addresses the root cause?
- ID: aai-hf-safety-ethics-and-compliance-005
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep spot checks only as the main control and add a dashboard for final outputs.
- B. Instrument and enforce policy testing; the system must test refusals, jailbreaks, and unsafe tool proposals.
- C. Use PII controls as the main gate even though reviewers are asking for policy testing evidence.
- D. Move the check to post-release monitoring without changing the release path for policy testing.
- Answer: B
- Explanation: Policy testing is the missing control in this scenario. The right answer makes it explicit so the system can test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs policy testing controlled before release or execution.

### Q28: A bank fraud team passes the happy-path demo for a system that stores interaction logs and memory, but pII and user preferences outlive their allowed purpose. The safer design is the one that can detect, redact, or block sensitive data by policy. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-006
- Domain: Safety, Ethics, and Compliance
- Topic: PII controls; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep hoping the model ignores secrets as the main control and add a dashboard for final outputs.
- B. Prioritize tool allowlist even though the observed failure is around PII controls.
- C. Put PII controls before rollout so the team can detect, redact, or block sensitive data by policy.
- D. Move the check to post-release monitoring without changing the release path for PII controls.
- Answer: C
- Explanation: PII controls is the missing control in this scenario. The right answer makes it explicit so the system can detect, redact, or block sensitive data by policy.
- Why A is wrong: It keeps hoping the model ignores secrets in control instead of adding a measurable PII controls decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making PII controls testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs PII controls controlled before release or execution.

### Q29: An automotive support team is choosing between a design centered on overall accuracy only and one that makes bias and fairness explicit for an agent that reads retrieved documents and proposes tool actions. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-007
- Domain: Safety, Ethics, and Compliance
- Topic: bias and fairness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep overall accuracy only as the main control and add a dashboard for final outputs.
- B. Prioritize approval gates even though the observed failure is around bias and fairness.
- C. Release prompt, model, and policy testing changes together with one aggregate score.
- D. Make bias and fairness explicit in the workflow: measure subgroup harm and decision impact.
- Answer: D
- Explanation: Bias and fairness is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup harm and decision impact.
- Why A is wrong: It keeps overall accuracy only in control instead of adding a measurable bias and fairness decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making bias and fairness testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether bias and fairness fixed the failure.

### Q30: A global retailer is choosing between a design centered on permanent retention by default and one that makes data retention explicit for a system that stores interaction logs and memory. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-008
- Domain: Safety, Ethics, and Compliance
- Topic: data retention; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Use data retention as the control boundary and require the system to enforce TTL, deletion, and purpose limits for logs and memory.
- B. Prioritize approval gates even though the observed failure is around data retention.
- C. Release prompt, model, and layered controls changes together with one aggregate score.
- D. Increase model capacity or context length while leaving data retention implicit.
- Answer: A
- Explanation: Data retention is the missing control in this scenario. The right answer makes it explicit so the system can enforce TTL, deletion, and purpose limits for logs and memory.
- Why B is wrong: It moves attention to a neighboring control instead of making data retention testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether data retention fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q31: During an architecture review, a public-sector casework team finds that a malicious document tells the agent to ignore approval requirements. The safer design is the one that can permit only approved tools and arguments for each role. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-009
- Domain: Safety, Ethics, and Compliance
- Topic: tool allowlist; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use prompt injection as the main gate even though reviewers are asking for tool allowlist evidence.
- B. Add a release gate for tool allowlist: permit only approved tools and arguments for each role.
- C. Release prompt, model, and prompt injection changes together with one aggregate score.
- D. Increase model capacity or context length while leaving tool allowlist implicit.
- Answer: B
- Explanation: Tool allowlist is the missing control in this scenario. The right answer makes it explicit so the system can permit only approved tools and arguments for each role.
- Why A is wrong: It moves attention to a neighboring control instead of making tool allowlist testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether tool allowlist fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q32: During an architecture review, a semiconductor design group finds that the team can reproduce the failure around opaque refusal messages only. The missing control is the one that can make safety decisions reproducible from evidence and policy versions. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-010
- Domain: Safety, Ethics, and Compliance
- Topic: decision traceability; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving decision traceability implicit.
- B. Use prompt injection as the main gate even though reviewers are asking for decision traceability evidence.
- C. Move the check to post-release monitoring without changing the release path for decision traceability.
- D. Change the design around decision traceability so the system can make safety decisions reproducible from evidence and policy versions.
- Answer: D
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can make safety decisions reproducible from evidence and policy versions.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs decision traceability controlled before release or execution.

### Q33: A bank fraud team passes the happy-path demo for a tool-enabled workflow for high-impact decisions, but the team can reproduce the failure around one final moderation pass. The missing control is the one that can combine input, retrieval, tool, and output controls. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-011
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for layered controls.
- B. Keep one final moderation pass as the main control and add a dashboard for final outputs.
- C. Instrument and enforce layered controls; the system must combine input, retrieval, tool, and output controls.
- D. Use bias and fairness as the main gate even though reviewers are asking for layered controls evidence.
- Answer: C
- Explanation: Layered controls is the missing control in this scenario. The right answer makes it explicit so the system can combine input, retrieval, tool, and output controls.
- Why A is wrong: Monitoring is useful, but this scenario needs layered controls controlled before release or execution.
- Why B is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q34: A hospital operations team is choosing between a design centered on letting documents override system policy and one that makes prompt injection explicit for a system that stores interaction logs and memory. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-012
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize least privilege even though the observed failure is around prompt injection.
- B. Put prompt injection before rollout so the team can treat retrieved text and tool output as data, not instructions.
- C. Move the check to post-release monitoring without changing the release path for prompt injection.
- D. Keep letting documents override system policy as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Prompt injection is the missing control in this scenario. The right answer makes it explicit so the system can treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs prompt injection controlled before release or execution.
- Why D is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.

### Q35: A global retailer passes the happy-path demo for a tool-enabled workflow for high-impact decisions, but the failure appears when the system keeps giving the LLM API keys as the workaround. The release needs a design step that can scope credentials to tools and roles. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-013
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make least privilege explicit in the workflow: scope credentials to tools and roles.
- B. Keep giving the LLM API keys as the main control and add a dashboard for final outputs.
- C. Prioritize PII controls even though the observed failure is around least privilege.
- D. Release prompt, model, and bias and fairness changes together with one aggregate score.
- Answer: A
- Explanation: Least privilege is the missing control in this scenario. The right answer makes it explicit so the system can scope credentials to tools and roles.
- Why B is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether least privilege fixed the failure.

### Q36: A pharmaceutical research team passes the happy-path demo for a system that stores interaction logs and memory, but the failure appears when the system keeps approval after execution as the workaround. The release needs a design step that can require human approval for high-impact mutations. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-014
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize tool allowlist even though the observed failure is around approval gates.
- B. Release prompt, model, and PII controls changes together with one aggregate score.
- C. Increase model capacity or context length while leaving approval gates implicit.
- D. Use approval gates as the control boundary and require the system to require human approval for high-impact mutations.
- Answer: D
- Explanation: Approval gates is the missing control in this scenario. The right answer makes it explicit so the system can require human approval for high-impact mutations.
- Why A is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether approval gates fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q37: A bank fraud team passes the happy-path demo for an agent that reads retrieved documents and proposes tool actions, but the team can reproduce the failure around spot checks only. The missing control is the one that can test refusals, jailbreaks, and unsafe tool proposals. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-015
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving policy testing implicit.
- B. Use least privilege as the main gate even though reviewers are asking for policy testing evidence.
- C. Add a release gate for policy testing: test refusals, jailbreaks, and unsafe tool proposals.
- D. Release prompt, model, and least privilege changes together with one aggregate score.
- Answer: C
- Explanation: Policy testing is the missing control in this scenario. The right answer makes it explicit so the system can test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether policy testing fixed the failure.

### Q38: A manufacturing quality team is choosing between a design centered on hoping the model ignores secrets and one that makes PII controls explicit for a tool-enabled workflow for high-impact decisions. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-016
- Domain: Safety, Ethics, and Compliance
- Topic: PII controls; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for PII controls.
- B. Change the design around PII controls so the system can detect, redact, or block sensitive data by policy.
- C. Increase model capacity or context length while leaving PII controls implicit.
- D. Use layered controls as the main gate even though reviewers are asking for PII controls evidence.
- Answer: B
- Explanation: PII controls is the missing control in this scenario. The right answer makes it explicit so the system can detect, redact, or block sensitive data by policy.
- Why A is wrong: Monitoring is useful, but this scenario needs PII controls controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making PII controls testable in the scenario.

### Q39: During an architecture review, a global retailer finds that pII and user preferences outlive their allowed purpose. The safer design is the one that can measure subgroup harm and decision impact. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-017
- Domain: Safety, Ethics, and Compliance
- Topic: bias and fairness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce bias and fairness; the system must measure subgroup harm and decision impact.
- B. Use policy testing as the main gate even though reviewers are asking for bias and fairness evidence.
- C. Move the check to post-release monitoring without changing the release path for bias and fairness.
- D. Keep overall accuracy only as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Bias and fairness is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup harm and decision impact.
- Why B is wrong: It moves attention to a neighboring control instead of making bias and fairness testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs bias and fairness controlled before release or execution.
- Why D is wrong: It keeps overall accuracy only in control instead of adding a measurable bias and fairness decision point.

### Q40: An automotive support team passes the happy-path demo for an agent that reads retrieved documents and proposes tool actions, but the failure appears when the system keeps permanent retention by default as the workaround. The release needs a design step that can enforce TTL, deletion, and purpose limits for logs and memory. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-018
- Domain: Safety, Ethics, and Compliance
- Topic: data retention; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for data retention.
- B. Keep permanent retention by default as the main control and add a dashboard for final outputs.
- C. Prioritize approval gates even though the observed failure is around data retention.
- D. Put data retention before rollout so the team can enforce TTL, deletion, and purpose limits for logs and memory.
- Answer: D
- Explanation: Data retention is the missing control in this scenario. The right answer makes it explicit so the system can enforce TTL, deletion, and purpose limits for logs and memory.
- Why A is wrong: Monitoring is useful, but this scenario needs data retention controlled before release or execution.
- Why B is wrong: It keeps permanent retention by default in control instead of adding a measurable data retention decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making data retention testable in the scenario.

### Q41: A semiconductor design group is choosing between a design centered on tool access from natural-language intent and one that makes tool allowlist explicit for a tool-enabled workflow for high-impact decisions. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-019
- Domain: Safety, Ethics, and Compliance
- Topic: tool allowlist; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize policy testing even though the observed failure is around tool allowlist.
- B. Release prompt, model, and approval gates changes together with one aggregate score.
- C. Make tool allowlist explicit in the workflow: permit only approved tools and arguments for each role.
- D. Keep tool access from natural-language intent as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Tool allowlist is the missing control in this scenario. The right answer makes it explicit so the system can permit only approved tools and arguments for each role.
- Why A is wrong: It moves attention to a neighboring control instead of making tool allowlist testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether tool allowlist fixed the failure.
- Why D is wrong: It keeps tool access from natural-language intent in control instead of adding a measurable tool allowlist decision point.

### Q42: A manufacturing quality team passes the happy-path demo for an agent that reads retrieved documents and proposes tool actions, but the current design still relies on opaque refusal messages only. Reviewers need a control that can make safety decisions reproducible from evidence and policy versions. Which change should be made before release?
- ID: aai-hf-safety-ethics-and-compliance-020
- Domain: Safety, Ethics, and Compliance
- Topic: decision traceability; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and policy testing changes together with one aggregate score.
- B. Increase model capacity or context length while leaving decision traceability implicit.
- C. Use decision traceability as the control boundary and require the system to make safety decisions reproducible from evidence and policy versions.
- D. Prioritize data retention even though the observed failure is around decision traceability.
- Answer: C
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can make safety decisions reproducible from evidence and policy versions.
- Why A is wrong: Changing several layers at once makes it harder to prove whether decision traceability fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.

### Q43: During an architecture review, a manufacturing quality team finds that one final moderation pass is being used as the shortcut, but it does not give the team a reliable way to combine input, retrieval, tool, and output controls. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-021
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and bias and fairness changes together with one aggregate score.
- B. Increase model capacity or context length while leaving layered controls implicit.
- C. Use bias and fairness as the main gate even though reviewers are asking for layered controls evidence.
- D. Add a release gate for layered controls: combine input, retrieval, tool, and output controls.
- Answer: D
- Explanation: Layered controls is the missing control in this scenario. The right answer makes it explicit so the system can combine input, retrieval, tool, and output controls.
- Why A is wrong: Changing several layers at once makes it harder to prove whether layered controls fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q44: A cybersecurity response team is building an agent that reads retrieved documents and proposes tool actions. Letting documents override system policy is being used as the shortcut, but it does not give the team a reliable way to treat retrieved text and tool output as data, not instructions. Which action best fits the requirement?
- ID: aai-hf-safety-ethics-and-compliance-022
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Change the design around prompt injection so the system can treat retrieved text and tool output as data, not instructions.
- B. Increase model capacity or context length while leaving prompt injection implicit.
- C. Use layered controls as the main gate even though reviewers are asking for prompt injection evidence.
- D. Move the check to post-release monitoring without changing the release path for prompt injection.
- Answer: A
- Explanation: Prompt injection is the missing control in this scenario. The right answer makes it explicit so the system can treat retrieved text and tool output as data, not instructions.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs prompt injection controlled before release or execution.

### Q45: A pharmaceutical research team is choosing between a design centered on giving the LLM API keys and one that makes least privilege explicit for a tool-enabled workflow for high-impact decisions. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-023
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep giving the LLM API keys as the main control and add a dashboard for final outputs.
- B. Instrument and enforce least privilege; the system must scope credentials to tools and roles.
- C. Use PII controls as the main gate even though reviewers are asking for least privilege evidence.
- D. Move the check to post-release monitoring without changing the release path for least privilege.
- Answer: B
- Explanation: Least privilege is the missing control in this scenario. The right answer makes it explicit so the system can scope credentials to tools and roles.
- Why A is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs least privilege controlled before release or execution.

### Q46: A logistics planning team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. The failure appears when the system keeps approval after execution as the workaround. The release needs a design step that can require human approval for high-impact mutations. Which control addresses the root cause?
- ID: aai-hf-safety-ethics-and-compliance-024
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep approval after execution as the main control and add a dashboard for final outputs.
- B. Prioritize prompt injection even though the observed failure is around approval gates.
- C. Put approval gates before rollout so the team can require human approval for high-impact mutations.
- D. Move the check to post-release monitoring without changing the release path for approval gates.
- Answer: C
- Explanation: Approval gates is the missing control in this scenario. The right answer makes it explicit so the system can require human approval for high-impact mutations.
- Why A is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs approval gates controlled before release or execution.

### Q47: During an architecture review, a hospital operations team finds that the current design still relies on spot checks only. Reviewers need a control that can test refusals, jailbreaks, and unsafe tool proposals. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-025
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep spot checks only as the main control and add a dashboard for final outputs.
- B. Prioritize prompt injection even though the observed failure is around policy testing.
- C. Release prompt, model, and layered controls changes together with one aggregate score.
- D. Make policy testing explicit in the workflow: test refusals, jailbreaks, and unsafe tool proposals.
- Answer: D
- Explanation: Policy testing is the missing control in this scenario. The right answer makes it explicit so the system can test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether policy testing fixed the failure.

### Q48: During an architecture review, a cybersecurity response team finds that a malicious document tells the agent to ignore approval requirements. The safer design is the one that can detect, redact, or block sensitive data by policy. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-026
- Domain: Safety, Ethics, and Compliance
- Topic: PII controls; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use PII controls as the control boundary and require the system to detect, redact, or block sensitive data by policy.
- B. Prioritize decision traceability even though the observed failure is around PII controls.
- C. Release prompt, model, and bias and fairness changes together with one aggregate score.
- D. Increase model capacity or context length while leaving PII controls implicit.
- Answer: A
- Explanation: PII controls is the missing control in this scenario. The right answer makes it explicit so the system can detect, redact, or block sensitive data by policy.
- Why B is wrong: It moves attention to a neighboring control instead of making PII controls testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether PII controls fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q49: During an architecture review, an automotive support team finds that the team can reproduce the failure around overall accuracy only. The missing control is the one that can measure subgroup harm and decision impact. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-027
- Domain: Safety, Ethics, and Compliance
- Topic: bias and fairness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use approval gates as the main gate even though reviewers are asking for bias and fairness evidence.
- B. Add a release gate for bias and fairness: measure subgroup harm and decision impact.
- C. Release prompt, model, and approval gates changes together with one aggregate score.
- D. Increase model capacity or context length while leaving bias and fairness implicit.
- Answer: B
- Explanation: Bias and fairness is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup harm and decision impact.
- Why A is wrong: It moves attention to a neighboring control instead of making bias and fairness testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether bias and fairness fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q50: During an architecture review, a logistics planning team finds that the failure appears when the system keeps permanent retention by default as the workaround. The release needs a design step that can enforce TTL, deletion, and purpose limits for logs and memory. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-028
- Domain: Safety, Ethics, and Compliance
- Topic: data retention; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Use approval gates as the main gate even though reviewers are asking for data retention evidence.
- B. Move the check to post-release monitoring without changing the release path for data retention.
- C. Change the design around data retention so the system can enforce TTL, deletion, and purpose limits for logs and memory.
- D. Increase model capacity or context length while leaving data retention implicit.
- Answer: C
- Explanation: Data retention is the missing control in this scenario. The right answer makes it explicit so the system can enforce TTL, deletion, and purpose limits for logs and memory.
- Why A is wrong: It moves attention to a neighboring control instead of making data retention testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs data retention controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q51: A manufacturing quality team is building a tool-enabled workflow for high-impact decisions. The current design still relies on tool access from natural-language intent. Reviewers need a control that can permit only approved tools and arguments for each role. Which design is the best first change?
- ID: aai-hf-safety-ethics-and-compliance-029
- Domain: Safety, Ethics, and Compliance
- Topic: tool allowlist; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use PII controls as the main gate even though reviewers are asking for tool allowlist evidence.
- B. Move the check to post-release monitoring without changing the release path for tool allowlist.
- C. Keep tool access from natural-language intent as the main control and add a dashboard for final outputs.
- D. Instrument and enforce tool allowlist; the system must permit only approved tools and arguments for each role.
- Answer: D
- Explanation: Tool allowlist is the missing control in this scenario. The right answer makes it explicit so the system can permit only approved tools and arguments for each role.
- Why A is wrong: It moves attention to a neighboring control instead of making tool allowlist testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs tool allowlist controlled before release or execution.
- Why C is wrong: It keeps tool access from natural-language intent in control instead of adding a measurable tool allowlist decision point.

### Q52: During an architecture review, a bank fraud team finds that opaque refusal messages only is being used as the shortcut, but it does not give the team a reliable way to make safety decisions reproducible from evidence and policy versions. What is the best next step?
- ID: aai-hf-safety-ethics-and-compliance-030
- Domain: Safety, Ethics, and Compliance
- Topic: decision traceability; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize tool allowlist even though the observed failure is around decision traceability.
- B. Put decision traceability before rollout so the team can make safety decisions reproducible from evidence and policy versions.
- C. Move the check to post-release monitoring without changing the release path for decision traceability.
- D. Keep opaque refusal messages only as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can make safety decisions reproducible from evidence and policy versions.
- Why A is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs decision traceability controlled before release or execution.
- Why D is wrong: It keeps opaque refusal messages only in control instead of adding a measurable decision traceability decision point.

### Q53: A global retailer is choosing between a design centered on one final moderation pass and one that makes layered controls explicit for a system that stores interaction logs and memory. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-031
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make layered controls explicit in the workflow: combine input, retrieval, tool, and output controls.
- B. Keep one final moderation pass as the main control and add a dashboard for final outputs.
- C. Prioritize tool allowlist even though the observed failure is around layered controls.
- D. Release prompt, model, and PII controls changes together with one aggregate score.
- Answer: A
- Explanation: Layered controls is the missing control in this scenario. The right answer makes it explicit so the system can combine input, retrieval, tool, and output controls.
- Why B is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether layered controls fixed the failure.

### Q54: A pharmaceutical research team is choosing between a design centered on letting documents override system policy and one that makes prompt injection explicit for a system that stores interaction logs and memory. Which design should win?
- ID: aai-hf-safety-ethics-and-compliance-032
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize approval gates even though the observed failure is around prompt injection.
- B. Release prompt, model, and decision traceability changes together with one aggregate score.
- C. Increase model capacity or context length while leaving prompt injection implicit.
- D. Use prompt injection as the control boundary and require the system to treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: Prompt injection is the missing control in this scenario. The right answer makes it explicit so the system can treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether prompt injection fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q55: A pharmaceutical research team is choosing between a design centered on review after irreversible mutations and one that makes human-in-the-loop explicit for a reviewer console for high-risk agent actions. Which design should win?
- ID: aai-hf-human-ai-interaction-and-oversight-001
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep review after irreversible mutations as the main control and add a dashboard for final outputs.
- B. Prioritize decision traceability even though the observed failure is around human-in-the-loop.
- C. Release prompt, model, and feedback loop changes together with one aggregate score.
- D. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- Answer: D
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether human-in-the-loop fixed the failure.

### Q56: A telecom network operations team passes the happy-path demo for a deployed agent that receives reviewer corrections, but the failure appears when the system keeps manual approval for every low-risk step as the workaround. The release needs a design step that can sample low-risk decisions and monitor drift. Which change should be made before release?
- ID: aai-hf-human-ai-interaction-and-oversight-002
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- B. Prioritize escalation threshold even though the observed failure is around human-on-the-loop.
- C. Release prompt, model, and user consent changes together with one aggregate score.
- D. Increase model capacity or context length while leaving human-on-the-loop implicit.
- Answer: A
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether human-on-the-loop fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q57: A manufacturing quality team is building a reviewer console for high-risk agent actions. The failure appears when the system keeps first-in-first-out for all cases as the workaround. The release needs a design step that can prioritize by risk, uncertainty, and impact. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-003
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use override path as the main gate even though reviewers are asking for review queues evidence.
- B. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- C. Release prompt, model, and override path changes together with one aggregate score.
- D. Increase model capacity or context length while leaving review queues implicit.
- Answer: B
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether review queues fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q58: A bank fraud team is building a mixed-risk workflow with many low-risk requests. Review queues are overwhelmed and high-risk cases wait too long. The safer design is the one that can turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-004
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- B. Move the check to post-release monitoring without changing the release path for feedback loop.
- C. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- D. Increase model capacity or context length while leaving feedback loop implicit.
- Answer: C
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs feedback loop controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q59: A pharmaceutical research team is building a deployed agent that receives reviewer corrections. The same failure repeats across releases. The safer design is the one that can show evidence, confidence, and pending tool actions to reviewers. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-005
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use escalation threshold as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Move the check to post-release monitoring without changing the release path for transparent handoff.
- C. Keep asking reviewers to judge opaque outputs as the main control and add a dashboard for final outputs.
- D. Instrument and enforce transparent handoff; the system must show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs transparent handoff controlled before release or execution.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q60: A global retailer is triaging a failed pilot for a reviewer console for high-risk agent actions. The team can reproduce the failure around same path for every request. The missing control is the one that can send low-confidence or high-impact cases to the right reviewer. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-006
- Domain: Human-AI Interaction and Oversight
- Topic: escalation threshold; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put escalation threshold before rollout so the team can send low-confidence or high-impact cases to the right reviewer.
- B. Move the check to post-release monitoring without changing the release path for escalation threshold.
- C. Keep same path for every request as the main control and add a dashboard for final outputs.
- D. Prioritize human-in-the-loop even though the observed failure is around escalation threshold.
- Answer: A
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why B is wrong: Monitoring is useful, but this scenario needs escalation threshold controlled before release or execution.
- Why C is wrong: It keeps same path for every request in control instead of adding a measurable escalation threshold decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.

### Q61: A manufacturing quality team is triaging a failed pilot for a mixed-risk workflow with many low-risk requests. The failure appears when the system keeps silent long-term memory as the workaround. The release needs a design step that can ask before storing preferences or using personal context beyond the session. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-007
- Domain: Human-AI Interaction and Oversight
- Topic: user consent; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and feedback loop changes together with one aggregate score.
- B. Make user consent explicit in the workflow: ask before storing preferences or using personal context beyond the session.
- C. Keep silent long-term memory as the main control and add a dashboard for final outputs.
- D. Prioritize override path even though the observed failure is around user consent.
- Answer: B
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why A is wrong: Changing several layers at once makes it harder to prove whether user consent fixed the failure.
- Why C is wrong: It keeps silent long-term memory in control instead of adding a measurable user consent decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.

### Q62: During an architecture review, a bank fraud team finds that they cannot tell whether to approve, reject, or request more information. The safer design is the one that can allow reviewers to approve, reject, edit, or request more evidence. What is the best next step?
- ID: aai-hf-human-ai-interaction-and-oversight-008
- Domain: Human-AI Interaction and Oversight
- Topic: override path; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and review queues changes together with one aggregate score.
- B. Increase model capacity or context length while leaving override path implicit.
- C. Use override path as the control boundary and require the system to allow reviewers to approve, reject, edit, or request more evidence.
- D. Prioritize decision traceability even though the observed failure is around override path.
- Answer: C
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: Changing several layers at once makes it harder to prove whether override path fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.

### Q63: An automotive support team passes the happy-path demo for a reviewer console for high-risk agent actions, but the current design still relies on reviewing a final answer with no trajectory. Reviewers need a control that can show why the agent chose a route, tool, evidence, and action. Which change should be made before release?
- ID: aai-hf-human-ai-interaction-and-oversight-009
- Domain: Human-AI Interaction and Oversight
- Topic: decision traceability; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and escalation threshold changes together with one aggregate score.
- B. Increase model capacity or context length while leaving decision traceability implicit.
- C. Use escalation threshold as the main gate even though reviewers are asking for decision traceability evidence.
- D. Add a release gate for decision traceability: show why the agent chose a route, tool, evidence, and action.
- Answer: D
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why A is wrong: Changing several layers at once makes it harder to prove whether decision traceability fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.

### Q64: A global retailer is triaging a failed pilot for a reviewer console for high-risk agent actions. The failure appears when the system keeps review after irreversible mutations as the workaround. The release needs a design step that can require approval before high-risk actions. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-010
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for human-in-the-loop.
- B. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- C. Increase model capacity or context length while leaving human-in-the-loop implicit.
- D. Use transparent handoff as the main gate even though reviewers are asking for human-in-the-loop evidence.
- Answer: B
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why A is wrong: Monitoring is useful, but this scenario needs human-in-the-loop controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q65: A telecom network operations team is building a reviewer console for high-risk agent actions. Manual approval for every low-risk step is being used as the shortcut, but it does not give the team a reliable way to sample low-risk decisions and monitor drift. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-011
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce human-on-the-loop; the system must sample low-risk decisions and monitor drift.
- B. Use user consent as the main gate even though reviewers are asking for human-on-the-loop evidence.
- C. Move the check to post-release monitoring without changing the release path for human-on-the-loop.
- D. Keep manual approval for every low-risk step as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs human-on-the-loop controlled before release or execution.
- Why D is wrong: It keeps manual approval for every low-risk step in control instead of adding a measurable human-on-the-loop decision point.

### Q66: A pharmaceutical research team is choosing between a design centered on first-in-first-out for all cases and one that makes review queues explicit for a reviewer console for high-risk agent actions. Which design should win?
- ID: aai-hf-human-ai-interaction-and-oversight-012
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for review queues.
- B. Keep first-in-first-out for all cases as the main control and add a dashboard for final outputs.
- C. Prioritize user consent even though the observed failure is around review queues.
- D. Put review queues before rollout so the team can prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: Monitoring is useful, but this scenario needs review queues controlled before release or execution.
- Why B is wrong: It keeps first-in-first-out for all cases in control instead of adding a measurable review queues decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q67: A bank fraud team passes the happy-path demo for a mixed-risk workflow with many low-risk requests, but the team can reproduce the failure around collecting comments with no downstream owner. The missing control is the one that can turn review labels into evals, prompt fixes, or training data. Which change should be made before release?
- ID: aai-hf-human-ai-interaction-and-oversight-013
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize human-on-the-loop even though the observed failure is around feedback loop.
- B. Release prompt, model, and human-in-the-loop changes together with one aggregate score.
- C. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- D. Keep collecting comments with no downstream owner as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether feedback loop fixed the failure.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q68: A manufacturing quality team is building a deployed agent that receives reviewer corrections. The current design still relies on asking reviewers to judge opaque outputs. Reviewers need a control that can show evidence, confidence, and pending tool actions to reviewers. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-014
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving transparent handoff implicit.
- B. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- C. Prioritize decision traceability even though the observed failure is around transparent handoff.
- D. Release prompt, model, and review queues changes together with one aggregate score.
- Answer: B
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether transparent handoff fixed the failure.

### Q69: During an architecture review, a logistics planning team finds that the current design still relies on same path for every request. Reviewers need a control that can send low-confidence or high-impact cases to the right reviewer. What is the best next step?
- ID: aai-hf-human-ai-interaction-and-oversight-015
- Domain: Human-AI Interaction and Oversight
- Topic: escalation threshold; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for escalation threshold: send low-confidence or high-impact cases to the right reviewer.
- B. Release prompt, model, and human-on-the-loop changes together with one aggregate score.
- C. Increase model capacity or context length while leaving escalation threshold implicit.
- D. Use human-on-the-loop as the main gate even though reviewers are asking for escalation threshold evidence.
- Answer: A
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why B is wrong: Changing several layers at once makes it harder to prove whether escalation threshold fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.

### Q70: A pharmaceutical research team is choosing between a design centered on silent long-term memory and one that makes user consent explicit for a reviewer console for high-risk agent actions. Which design should win?
- ID: aai-hf-human-ai-interaction-and-oversight-016
- Domain: Human-AI Interaction and Oversight
- Topic: user consent; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving user consent implicit.
- B. Use feedback loop as the main gate even though reviewers are asking for user consent evidence.
- C. Move the check to post-release monitoring without changing the release path for user consent.
- D. Change the design around user consent so the system can ask before storing preferences or using personal context beyond the session.
- Answer: D
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs user consent controlled before release or execution.

### Q71: A cybersecurity response team is triaging a failed pilot for a deployed agent that receives reviewer corrections. The current design still relies on binary approve-only UI. Reviewers need a control that can allow reviewers to approve, reject, edit, or request more evidence. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-017
- Domain: Human-AI Interaction and Oversight
- Topic: override path; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for override path.
- B. Keep binary approve-only UI as the main control and add a dashboard for final outputs.
- C. Instrument and enforce override path; the system must allow reviewers to approve, reject, edit, or request more evidence.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for override path evidence.
- Answer: C
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: Monitoring is useful, but this scenario needs override path controlled before release or execution.
- Why B is wrong: It keeps binary approve-only UI in control instead of adding a measurable override path decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.

### Q72: During an architecture review, a public-sector casework team finds that they cannot tell whether to approve, reject, or request more information. The safer design is the one that can show why the agent chose a route, tool, evidence, and action. What is the best next step?
- ID: aai-hf-human-ai-interaction-and-oversight-018
- Domain: Human-AI Interaction and Oversight
- Topic: decision traceability; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize human-in-the-loop even though the observed failure is around decision traceability.
- B. Put decision traceability before rollout so the team can show why the agent chose a route, tool, evidence, and action.
- C. Move the check to post-release monitoring without changing the release path for decision traceability.
- D. Keep reviewing a final answer with no trajectory as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why A is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs decision traceability controlled before release or execution.
- Why D is wrong: It keeps reviewing a final answer with no trajectory in control instead of adding a measurable decision traceability decision point.

### Q73: A logistics planning team is building a mixed-risk workflow with many low-risk requests. Review queues are overwhelmed and high-risk cases wait too long. The safer design is the one that can require approval before high-risk actions. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-019
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- B. Keep review after irreversible mutations as the main control and add a dashboard for final outputs.
- C. Prioritize feedback loop even though the observed failure is around human-in-the-loop.
- D. Release prompt, model, and decision traceability changes together with one aggregate score.
- Answer: A
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether human-in-the-loop fixed the failure.

### Q74: A pharmaceutical research team is building a mixed-risk workflow with many low-risk requests. Manual approval for every low-risk step is being used as the shortcut, but it does not give the team a reliable way to sample low-risk decisions and monitor drift. Which design is the best first change?
- ID: aai-hf-human-ai-interaction-and-oversight-020
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- B. Prioritize user consent even though the observed failure is around human-on-the-loop.
- C. Release prompt, model, and escalation threshold changes together with one aggregate score.
- D. Increase model capacity or context length while leaving human-on-the-loop implicit.
- Answer: A
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether human-on-the-loop fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q75: An automotive support team is triaging a failed pilot for a deployed agent that receives reviewer corrections. First-in-first-out for all cases is being used as the shortcut, but it does not give the team a reliable way to prioritize by risk, uncertainty, and impact. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-021
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use escalation threshold as the main gate even though reviewers are asking for review queues evidence.
- B. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- C. Release prompt, model, and escalation threshold changes together with one aggregate score.
- D. Increase model capacity or context length while leaving review queues implicit.
- Answer: B
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether review queues fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q76: A logistics planning team is building a reviewer console for high-risk agent actions. Collecting comments with no downstream owner is being used as the shortcut, but it does not give the team a reliable way to turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-022
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use override path as the main gate even though reviewers are asking for feedback loop evidence.
- B. Move the check to post-release monitoring without changing the release path for feedback loop.
- C. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- D. Increase model capacity or context length while leaving feedback loop implicit.
- Answer: C
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs feedback loop controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q77: A public-sector casework team is triaging a failed pilot for a deployed agent that receives reviewer corrections. Asking reviewers to judge opaque outputs is being used as the shortcut, but it does not give the team a reliable way to show evidence, confidence, and pending tool actions to reviewers. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-023
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Move the check to post-release monitoring without changing the release path for transparent handoff.
- C. Keep asking reviewers to judge opaque outputs as the main control and add a dashboard for final outputs.
- D. Instrument and enforce transparent handoff; the system must show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: Transparent handoff is the missing control in this scenario. The right answer makes it explicit so the system can show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs transparent handoff controlled before release or execution.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q78: A semiconductor design group is choosing between a design centered on same path for every request and one that makes escalation threshold explicit for a reviewer console for high-risk agent actions. Which design should win?
- ID: aai-hf-human-ai-interaction-and-oversight-024
- Domain: Human-AI Interaction and Oversight
- Topic: escalation threshold; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put escalation threshold before rollout so the team can send low-confidence or high-impact cases to the right reviewer.
- B. Move the check to post-release monitoring without changing the release path for escalation threshold.
- C. Keep same path for every request as the main control and add a dashboard for final outputs.
- D. Prioritize review queues even though the observed failure is around escalation threshold.
- Answer: A
- Explanation: Escalation threshold is the missing control in this scenario. The right answer makes it explicit so the system can send low-confidence or high-impact cases to the right reviewer.
- Why B is wrong: Monitoring is useful, but this scenario needs escalation threshold controlled before release or execution.
- Why C is wrong: It keeps same path for every request in control instead of adding a measurable escalation threshold decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making escalation threshold testable in the scenario.

### Q79: An insurance claims group passes the happy-path demo for a deployed agent that receives reviewer corrections, but the same failure repeats across releases. The safer design is the one that can ask before storing preferences or using personal context beyond the session. Which change should be made before release?
- ID: aai-hf-human-ai-interaction-and-oversight-025
- Domain: Human-AI Interaction and Oversight
- Topic: user consent; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and decision traceability changes together with one aggregate score.
- B. Make user consent explicit in the workflow: ask before storing preferences or using personal context beyond the session.
- C. Keep silent long-term memory as the main control and add a dashboard for final outputs.
- D. Prioritize review queues even though the observed failure is around user consent.
- Answer: B
- Explanation: User consent is the missing control in this scenario. The right answer makes it explicit so the system can ask before storing preferences or using personal context beyond the session.
- Why A is wrong: Changing several layers at once makes it harder to prove whether user consent fixed the failure.
- Why C is wrong: It keeps silent long-term memory in control instead of adding a measurable user consent decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making user consent testable in the scenario.

### Q80: A telecom network operations team is choosing between a design centered on binary approve-only UI and one that makes override path explicit for a mixed-risk workflow with many low-risk requests. Which design should win?
- ID: aai-hf-human-ai-interaction-and-oversight-026
- Domain: Human-AI Interaction and Oversight
- Topic: override path; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and user consent changes together with one aggregate score.
- B. Increase model capacity or context length while leaving override path implicit.
- C. Use override path as the control boundary and require the system to allow reviewers to approve, reject, edit, or request more evidence.
- D. Prioritize feedback loop even though the observed failure is around override path.
- Answer: C
- Explanation: Override path is the missing control in this scenario. The right answer makes it explicit so the system can allow reviewers to approve, reject, edit, or request more evidence.
- Why A is wrong: Changing several layers at once makes it harder to prove whether override path fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making override path testable in the scenario.

### Q81: During an architecture review, a manufacturing quality team finds that the same failure repeats across releases. The safer design is the one that can show why the agent chose a route, tool, evidence, and action. What is the best next step?
- ID: aai-hf-human-ai-interaction-and-oversight-027
- Domain: Human-AI Interaction and Oversight
- Topic: decision traceability; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and escalation threshold changes together with one aggregate score.
- B. Increase model capacity or context length while leaving decision traceability implicit.
- C. Use escalation threshold as the main gate even though reviewers are asking for decision traceability evidence.
- D. Add a release gate for decision traceability: show why the agent chose a route, tool, evidence, and action.
- Answer: D
- Explanation: Decision traceability is the missing control in this scenario. The right answer makes it explicit so the system can show why the agent chose a route, tool, evidence, and action.
- Why A is wrong: Changing several layers at once makes it harder to prove whether decision traceability fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making decision traceability testable in the scenario.

### Q82: A bank fraud team is triaging a failed pilot for a deployed agent that receives reviewer corrections. The same failure repeats across releases. The safer design is the one that can require approval before high-risk actions. Which control addresses the root cause?
- ID: aai-hf-human-ai-interaction-and-oversight-028
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- B. Increase model capacity or context length while leaving human-in-the-loop implicit.
- C. Use user consent as the main gate even though reviewers are asking for human-in-the-loop evidence.
- D. Move the check to post-release monitoring without changing the release path for human-in-the-loop.
- Answer: A
- Explanation: Human-in-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can require approval before high-risk actions.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs human-in-the-loop controlled before release or execution.

### Q83: An insurance claims group passes the happy-path demo for a mixed-risk workflow with many low-risk requests, but review queues are overwhelmed and high-risk cases wait too long. The safer design is the one that can sample low-risk decisions and monitor drift. Which change should be made before release?
- ID: aai-hf-human-ai-interaction-and-oversight-029
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep manual approval for every low-risk step as the main control and add a dashboard for final outputs.
- B. Instrument and enforce human-on-the-loop; the system must sample low-risk decisions and monitor drift.
- C. Use escalation threshold as the main gate even though reviewers are asking for human-on-the-loop evidence.
- D. Move the check to post-release monitoring without changing the release path for human-on-the-loop.
- Answer: B
- Explanation: Human-on-the-loop is the missing control in this scenario. The right answer makes it explicit so the system can sample low-risk decisions and monitor drift.
- Why A is wrong: It keeps manual approval for every low-risk step in control instead of adding a measurable human-on-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs human-on-the-loop controlled before release or execution.

### Q84: A global retailer is building a mixed-risk workflow with many low-risk requests. The failure appears when the system keeps first-in-first-out for all cases as the workaround. The release needs a design step that can prioritize by risk, uncertainty, and impact. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-030
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for review queues.
- B. Keep first-in-first-out for all cases as the main control and add a dashboard for final outputs.
- C. Prioritize escalation threshold even though the observed failure is around review queues.
- D. Put review queues before rollout so the team can prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: Review queues is the missing control in this scenario. The right answer makes it explicit so the system can prioritize by risk, uncertainty, and impact.
- Why A is wrong: Monitoring is useful, but this scenario needs review queues controlled before release or execution.
- Why B is wrong: It keeps first-in-first-out for all cases in control instead of adding a measurable review queues decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q85: A cybersecurity response team is building a mixed-risk workflow with many low-risk requests. Collecting comments with no downstream owner is being used as the shortcut, but it does not give the team a reliable way to turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-031
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize human-on-the-loop even though the observed failure is around feedback loop.
- B. Release prompt, model, and human-in-the-loop changes together with one aggregate score.
- C. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- D. Keep collecting comments with no downstream owner as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Feedback loop is the missing control in this scenario. The right answer makes it explicit so the system can turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether feedback loop fixed the failure.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q86: A bank fraud team is setting a release gate. The trace points to the need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA option addresses the named layer?
- ID: aai-hf-svc-nemo-framework-001
- Domain: Evaluation and Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q87: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: aai-hf-svc-nemo-framework-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Nsight Compute is the best fit for this layer: a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q88: A global retailer is reviewing the implementation plan. The implementation requirement is to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: aai-hf-svc-nemo-framework-003
- Domain: Evaluation and Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q89: An automotive support team is preparing a production rollout. The work to finish before release is running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: aai-hf-svc-nemo-framework-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q90: A bank fraud team needs to choose the right implementation surface. The trace points to the need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA platform layer is the right match?
- ID: aai-hf-svc-nemo-framework-005
- Domain: Evaluation and Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q91: A hospital operations team is preparing a production rollout. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: aai-hf-svc-nemo-agent-toolkit-001
- Domain: Agent Architecture and Design
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q92: A semiconductor design group is reviewing the implementation plan. The blocker is a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA platform layer is the right match?
- ID: aai-hf-svc-nemo-agent-toolkit-002
- Domain: Agent Development
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q93: An insurance claims group is fixing the layer called out by the trace and design review. The next release blocker is profile and observe an agent workflow across tools and retrieval calls. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: aai-hf-svc-nemo-agent-toolkit-003
- Domain: Agent Architecture and Design
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Agent orchestration.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q94: A logistics planning team needs to choose the right implementation surface. The trace points to the need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: aai-hf-svc-nemo-agent-toolkit-004
- Domain: Agent Development
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.

### Q95: A manufacturing quality team is fixing the layer called out by the trace and design review. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: aai-hf-svc-nemo-agent-toolkit-005
- Domain: Agent Architecture and Design
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q96: A logistics planning team needs to choose the right implementation surface. The implementation requirement is to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. What is the best first implementation choice?
- ID: aai-hf-svc-nemo-guardrails-001
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q97: An automotive support team has narrowed the next engineering decision. The rollout is blocked until the team can enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA product owns this requirement?
- ID: aai-hf-svc-nemo-guardrails-002
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q98: A cybersecurity response team is reviewing the implementation plan. The trace points to the need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA platform layer is the right match?
- ID: aai-hf-svc-nemo-guardrails-003
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q99: A hospital operations team is fixing the layer called out by the trace and design review. The work to finish before release is enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: aai-hf-svc-nemo-guardrails-004
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.

### Q100: A telecom network operations team is reviewing the implementation plan. The blocker is enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. What is the best first implementation choice?
- ID: aai-hf-svc-nemo-guardrails-005
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

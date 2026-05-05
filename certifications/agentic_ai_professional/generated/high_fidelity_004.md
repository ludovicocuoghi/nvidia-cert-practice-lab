# High Fidelity Generated Questions 004

## Questions

### Q1: An automotive support team is preparing a monitored production agent for release. The current design relies on HTTP 200 as the only success signal, but the release gate needs to capture spans for model, retrieval, tools, guardrails, latency, and cost. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-006
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- A. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- B. Prioritize incident response before validating the failure signal around trace replay.
- C. Bundle trace replay, drift monitoring, and prompt changes into one release with one aggregate score.
- D. Use trace replay as the control boundary and require the system to capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q2: A bank fraud team is comparing two release designs for a monitored production agent. One design centers on average latency only; the other adds a measurable drift monitoring step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-007
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Bundle drift monitoring, SLOs, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated drift monitoring check.
- C. Add a release gate for drift monitoring: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- D. Prioritize observability before validating the failure signal around drift monitoring.
- Answer: C
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q3: A manufacturing quality team sees incidents that cannot be explained without incident response. The team has been using manual transcript review only; the next change needs to make incident response explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-008
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: easy
- A. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- B. Change the design around incident response so the system can convert incidents into regression tests and rollback rules.
- C. Bundle incident response, drift monitoring, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated incident response check.
- Answer: B
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.

### Q4: A global retailer has a production-readiness review for a monitored production agent. The review is focused on SLOs, because the system must measure task success, safety blocks, p95/p99, and cost together. Which control should be added before rollout?
- ID: aai-hf-run-monitor-and-maintain-009
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: hard
- A. Make SLOs explicit in the workflow: measure task success, safety blocks, p95/p99, and cost together.
- B. Wait for production incidents before adding a dedicated SLOs check.
- C. Use incident response as the main gate even though reviewers are asking for SLOs evidence.
- D. Keep model tokens/sec alone as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why B is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why D is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.

### Q5: An automotive support team is comparing two release designs for a monitored production agent. One design centers on separate logs with no request ID; the other adds a measurable observability step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-010
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: expert
- A. Keep separate logs with no request ID as the primary release control and record only final outputs.
- B. Prioritize incident response before validating the failure signal around observability.
- C. Use observability as the control boundary and require the system to correlate workflow spans across services.
- D. Use SLOs as the main gate even though reviewers are asking for observability evidence.
- Answer: C
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q6: A manufacturing quality team is comparing two release designs for a monitored production agent. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-011
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: medium
- A. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- B. Prioritize observability before validating the failure signal around trace replay.
- C. Bundle trace replay, SLOs, and prompt changes into one release with one aggregate score.
- D. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q7: A bank fraud team is comparing two release designs for a monitored production agent. One design centers on average latency only; the other adds a measurable drift monitoring step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-012
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- B. Prioritize incident response before validating the failure signal around drift monitoring.
- C. Bundle drift monitoring, trace replay, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated drift monitoring check.
- Answer: A
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why B is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q8: An automotive support team is preparing a monitored production agent for release. The current design relies on manual transcript review only, but the release gate needs to convert incidents into regression tests and rollback rules. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-013
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- A. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- B. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- C. Bundle incident response, drift monitoring, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated incident response check.
- Answer: B
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.

### Q9: A global retailer is preparing a monitored production agent for release. The current design relies on model tokens/sec alone, but the release gate needs to measure task success, safety blocks, p95/p99, and cost together. Which action best fits the requirement?
- ID: aai-hf-run-monitor-and-maintain-014
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: expert
- A. Use trace replay as the main gate even though reviewers are asking for SLOs evidence.
- B. Keep model tokens/sec alone as the primary release control and record only final outputs.
- C. Use SLOs as the control boundary and require the system to measure task success, safety blocks, p95/p99, and cost together.
- D. Wait for production incidents before adding a dedicated SLOs check.
- Answer: C
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why B is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why D is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.

### Q10: A hospital operations team has a production-readiness review for a monitored production agent. The review is focused on observability, because the system must correlate workflow spans across services. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-015
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: medium
- A. Use SLOs as the main gate even though reviewers are asking for observability evidence.
- B. Keep separate logs with no request ID as the primary release control and record only final outputs.
- C. Prioritize incident response before validating the failure signal around observability.
- D. Add a release gate for observability: correlate workflow spans across services.
- Answer: D
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why B is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q11: A cybersecurity response team is comparing two release designs for a monitored production agent. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-016
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- A. Change the design around trace replay so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- C. Prioritize SLOs before validating the failure signal around trace replay.
- D. Bundle trace replay, observability, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q12: A pharmaceutical research team is comparing two release designs for a monitored production agent. One design centers on average latency only; the other adds a measurable drift monitoring step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-017
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated drift monitoring check.
- B. Make drift monitoring explicit in the workflow: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Prioritize SLOs before validating the failure signal around drift monitoring.
- D. Bundle drift monitoring, observability, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.

### Q13: A global retailer is reviewing a monitored production agent before rollout. The main risk is incident response: the system must convert incidents into regression tests and rollback rules. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-018
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated incident response check.
- B. Use trace replay as the main gate even though reviewers are asking for incident response evidence.
- C. Use incident response as the control boundary and require the system to convert incidents into regression tests and rollback rules.
- D. Bundle incident response, trace replay, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.

### Q14: A hospital operations team is preparing a monitored production agent for release. The current design relies on model tokens/sec alone, but the release gate needs to measure task success, safety blocks, p95/p99, and cost together. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-019
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated SLOs check.
- B. Use observability as the main gate even though reviewers are asking for SLOs evidence.
- C. Keep model tokens/sec alone as the primary release control and record only final outputs.
- D. Add a release gate for SLOs: measure task success, safety blocks, p95/p99, and cost together.
- Answer: D
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why C is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.

### Q15: A bank fraud team is comparing two release designs for a monitored production agent. One design centers on separate logs with no request ID; the other adds a measurable observability step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-020
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: hard
- A. Use incident response as the main gate even though reviewers are asking for observability evidence.
- B. Keep separate logs with no request ID as the primary release control and record only final outputs.
- C. Prioritize SLOs before validating the failure signal around observability.
- D. Change the design around observability so the system can correlate workflow spans across services.
- Answer: D
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why B is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q16: A cybersecurity response team has a production-readiness review for a monitored production agent. The review is focused on trace replay, because the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which control should be added before rollout?
- ID: aai-hf-run-monitor-and-maintain-021
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: expert
- A. Prioritize SLOs before validating the failure signal around trace replay.
- B. Bundle trace replay, observability, and prompt changes into one release with one aggregate score.
- C. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why D is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.

### Q17: A public-sector casework team is reviewing a monitored production agent before rollout. The main risk is drift monitoring: the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-022
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated drift monitoring check.
- B. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Prioritize trace replay before validating the failure signal around drift monitoring.
- D. Bundle drift monitoring, incident response, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.

### Q18: A logistics planning team is comparing two release designs for a monitored production agent. One design centers on manual transcript review only; the other adds a measurable incident response step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-023
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- B. Bundle incident response, trace replay, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated incident response check.
- D. Use trace replay as the main gate even though reviewers are asking for incident response evidence.
- Answer: A
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q19: A pharmaceutical research team is reviewing a monitored production agent before rollout. The main risk is SLOs: the system must measure task success, safety blocks, p95/p99, and cost together. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-024
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated SLOs check.
- B. Use drift monitoring as the main gate even though reviewers are asking for SLOs evidence.
- C. Keep model tokens/sec alone as the primary release control and record only final outputs.
- D. Change the design around SLOs so the system can measure task success, safety blocks, p95/p99, and cost together.
- Answer: D
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why C is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.

### Q20: A bank fraud team sees incidents that cannot be explained without observability. The team has been using separate logs with no request ID; the next change needs to make observability explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-025
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: medium
- A. Keep separate logs with no request ID as the primary release control and record only final outputs.
- B. Prioritize SLOs before validating the failure signal around observability.
- C. Make observability explicit in the workflow: correlate workflow spans across services.
- D. Use incident response as the main gate even though reviewers are asking for observability evidence.
- Answer: C
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q21: A manufacturing quality team is preparing a monitored production agent for release. The current design relies on HTTP 200 as the only success signal, but the release gate needs to capture spans for model, retrieval, tools, guardrails, latency, and cost. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-026
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- A. Bundle trace replay, SLOs, and prompt changes into one release with one aggregate score.
- B. Use trace replay as the control boundary and require the system to capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- D. Prioritize observability before validating the failure signal around trace replay.
- Answer: B
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q22: A telecom network operations team is preparing a monitored production agent for release. The current design relies on average latency only, but the release gate needs to watch route mix, retrieval hit rate, judge scores, and escalation rates. Which architecture keeps the boundary cleanest?
- ID: aai-hf-run-monitor-and-maintain-027
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for drift monitoring: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- B. Prioritize observability before validating the failure signal around drift monitoring.
- C. Bundle drift monitoring, SLOs, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated drift monitoring check.
- Answer: A
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why B is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q23: A pharmaceutical research team sees incidents that cannot be explained without incident response. The team has been using manual transcript review only; the next change needs to make incident response explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-028
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: easy
- A. Bundle incident response, drift monitoring, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated incident response check.
- C. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- D. Change the design around incident response so the system can convert incidents into regression tests and rollback rules.
- Answer: D
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q24: A cybersecurity response team has a production-readiness review for a monitored production agent. The review is focused on SLOs, because the system must measure task success, safety blocks, p95/p99, and cost together. Which architecture keeps the boundary cleanest?
- ID: aai-hf-run-monitor-and-maintain-029
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: hard
- A. Use incident response as the main gate even though reviewers are asking for SLOs evidence.
- B. Keep model tokens/sec alone as the primary release control and record only final outputs.
- C. Make SLOs explicit in the workflow: measure task success, safety blocks, p95/p99, and cost together.
- D. Wait for production incidents before adding a dedicated SLOs check.
- Answer: C
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why B is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why D is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.

### Q25: A public-sector casework team is preparing a monitored production agent for release. The current design relies on separate logs with no request ID, but the release gate needs to correlate workflow spans across services. Which implementation path is most appropriate?
- ID: aai-hf-run-monitor-and-maintain-030
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: expert
- A. Use observability as the control boundary and require the system to correlate workflow spans across services.
- B. Use SLOs as the main gate even though reviewers are asking for observability evidence.
- C. Keep separate logs with no request ID as the primary release control and record only final outputs.
- D. Prioritize incident response before validating the failure signal around observability.
- Answer: A
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why B is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why C is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q26: An insurance claims group is comparing two release designs for a monitored production agent. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-031
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: medium
- A. Bundle trace replay, drift monitoring, and prompt changes into one release with one aggregate score.
- B. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- D. Prioritize incident response before validating the failure signal around trace replay.
- Answer: B
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q27: A global retailer is reviewing a monitored production agent before rollout. The main risk is drift monitoring: the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-032
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Bundle drift monitoring, SLOs, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated drift monitoring check.
- C. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- D. Prioritize observability before validating the failure signal around drift monitoring.
- Answer: C
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q28: A hospital operations team sees incidents that cannot be explained without incident response. The team has been using manual transcript review only; the next change needs to make incident response explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-033
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- A. Bundle incident response, observability, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated incident response check.
- C. Use observability as the main gate even though reviewers are asking for incident response evidence.
- D. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- Answer: D
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q29: A cybersecurity response team is comparing two release designs for a monitored production agent. One design centers on model tokens/sec alone; the other adds a measurable SLOs step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-034
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: expert
- A. Use SLOs as the control boundary and require the system to measure task success, safety blocks, p95/p99, and cost together.
- B. Wait for production incidents before adding a dedicated SLOs check.
- C. Use incident response as the main gate even though reviewers are asking for SLOs evidence.
- D. Keep model tokens/sec alone as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why B is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why D is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.

### Q30: An insurance claims group is preparing a monitored production agent for release. The current design relies on separate logs with no request ID, but the release gate needs to correlate workflow spans across services. Which design is the best first change?
- ID: aai-hf-run-monitor-and-maintain-035
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: medium
- A. Prioritize trace replay before validating the failure signal around observability.
- B. Add a release gate for observability: correlate workflow spans across services.
- C. Use drift monitoring as the main gate even though reviewers are asking for observability evidence.
- D. Keep separate logs with no request ID as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why D is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.

### Q31: A telecom network operations team is preparing a monitored production agent for release. The current design relies on HTTP 200 as the only success signal, but the release gate needs to capture spans for model, retrieval, tools, guardrails, latency, and cost. Which control should be added before rollout?
- ID: aai-hf-run-monitor-and-maintain-036
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- A. Prioritize drift monitoring before validating the failure signal around trace replay.
- B. Bundle trace replay, incident response, and prompt changes into one release with one aggregate score.
- C. Change the design around trace replay so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why D is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.

### Q32: A hospital operations team sees incidents that cannot be explained without drift monitoring. The team has been using average latency only; the next change needs to make drift monitoring explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-037
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Prioritize trace replay before validating the failure signal around drift monitoring.
- B. Bundle drift monitoring, incident response, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated drift monitoring check.
- D. Make drift monitoring explicit in the workflow: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q33: A semiconductor design group is reviewing a monitored production agent before rollout. The main risk is incident response: the system must convert incidents into regression tests and rollback rules. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-038
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: medium
- A. Use incident response as the control boundary and require the system to convert incidents into regression tests and rollback rules.
- B. Bundle incident response, SLOs, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated incident response check.
- D. Use SLOs as the main gate even though reviewers are asking for incident response evidence.
- Answer: A
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q34: An insurance claims group sees incidents that cannot be explained without SLOs. The team has been using model tokens/sec alone; the next change needs to make SLOs explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-039
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: hard
- A. Keep model tokens/sec alone as the primary release control and record only final outputs.
- B. Add a release gate for SLOs: measure task success, safety blocks, p95/p99, and cost together.
- C. Wait for production incidents before adding a dedicated SLOs check.
- D. Use drift monitoring as the main gate even though reviewers are asking for SLOs evidence.
- Answer: B
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why C is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.

### Q35: A global retailer sees incidents that cannot be explained without observability. The team has been using separate logs with no request ID; the next change needs to make observability explicit. Which action best addresses the problem?
- ID: aai-hf-run-monitor-and-maintain-040
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: hard
- A. Prioritize drift monitoring before validating the failure signal around observability.
- B. Change the design around observability so the system can correlate workflow spans across services.
- C. Use trace replay as the main gate even though reviewers are asking for observability evidence.
- D. Keep separate logs with no request ID as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why A is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why D is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.

### Q36: A logistics planning team is reviewing a monitored production agent before rollout. The main risk is trace replay: the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-041
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: expert
- A. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- C. Prioritize drift monitoring before validating the failure signal around trace replay.
- D. Bundle trace replay, incident response, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q37: An automotive support team is reviewing a monitored production agent before rollout. The main risk is drift monitoring: the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which option keeps the decision at the right layer?
- ID: aai-hf-run-monitor-and-maintain-042
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: medium
- A. Prioritize SLOs before validating the failure signal around drift monitoring.
- B. Bundle drift monitoring, observability, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated drift monitoring check.
- D. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q38: A bank fraud team has a production-readiness review for a monitored production agent. The review is focused on incident response, because the system must convert incidents into regression tests and rollback rules. Which control should be added before rollout?
- ID: aai-hf-run-monitor-and-maintain-043
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated incident response check.
- B. Use SLOs as the main gate even though reviewers are asking for incident response evidence.
- C. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- D. Bundle incident response, SLOs, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.

### Q39: A public-sector casework team is comparing two release designs for a monitored production agent. One design centers on model tokens/sec alone; the other adds a measurable SLOs step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-044
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: expert
- A. Keep model tokens/sec alone as the primary release control and record only final outputs.
- B. Change the design around SLOs so the system can measure task success, safety blocks, p95/p99, and cost together.
- C. Wait for production incidents before adding a dedicated SLOs check.
- D. Use observability as the main gate even though reviewers are asking for SLOs evidence.
- Answer: B
- Explanation: The scenario is about SLOs. The strongest answer fixes the failing layer directly: measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It keeps model tokens/sec alone in control instead of adding a measurable SLOs decision point.
- Why C is wrong: Waiting for incidents postpones the SLOs gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.

### Q40: A telecom network operations team is comparing two release designs for a monitored production agent. One design centers on separate logs with no request ID; the other adds a measurable observability step. Which design is more appropriate for production?
- ID: aai-hf-run-monitor-and-maintain-045
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: medium
- A. Make observability explicit in the workflow: correlate workflow spans across services.
- B. Use trace replay as the main gate even though reviewers are asking for observability evidence.
- C. Keep separate logs with no request ID as the primary release control and record only final outputs.
- D. Prioritize drift monitoring before validating the failure signal around observability.
- Answer: A
- Explanation: The scenario is about observability. The strongest answer fixes the failing layer directly: correlate workflow spans across services.
- Why B is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.
- Why C is wrong: It keeps separate logs with no request ID in control instead of adding a measurable observability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q41: An automotive support team has a production-readiness review for a monitored production agent. The review is focused on trace replay, because the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-046
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: hard
- A. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- B. Prioritize incident response before validating the failure signal around trace replay.
- C. Bundle trace replay, drift monitoring, and prompt changes into one release with one aggregate score.
- D. Use trace replay as the control boundary and require the system to capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q42: A semiconductor design group has a production-readiness review for a monitored production agent. The review is focused on drift monitoring, because the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which action best fits the requirement?
- ID: aai-hf-run-monitor-and-maintain-047
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- A. Bundle drift monitoring, trace replay, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated drift monitoring check.
- C. Add a release gate for drift monitoring: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- D. Prioritize incident response before validating the failure signal around drift monitoring.
- Answer: C
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q43: A hospital operations team sees policy failures that need layered controls as an explicit control. The team has been using one final moderation pass; the next change needs to make layered controls explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-001
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: expert
- A. Bundle layered controls, approval gates, and prompt changes into one release with one aggregate score.
- B. Make layered controls explicit in the workflow: combine input, retrieval, tool, and output controls.
- C. Keep one final moderation pass as the primary release control and record only final outputs.
- D. Prioritize policy testing before validating the failure signal around layered controls.
- Answer: B
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q44: A cybersecurity response team is preparing a governed agent workflow for release. The current design relies on letting documents override system policy, but the release gate needs to treat retrieved text and tool output as data, not instructions. Which action best fits the requirement?
- ID: aai-hf-safety-ethics-and-compliance-002
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: medium
- A. Bundle prompt injection, layered controls, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated prompt injection check.
- C. Use prompt injection as the control boundary and require the system to treat retrieved text and tool output as data, not instructions.
- D. Prioritize least privilege before validating the failure signal around prompt injection.
- Answer: C
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q45: An insurance claims group is preparing a governed agent workflow for release. The current design relies on giving the LLM API keys, but the release gate needs to scope credentials to tools and roles. Which design is the best first change?
- ID: aai-hf-safety-ethics-and-compliance-003
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- A. Bundle least privilege, approval gates, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated least privilege check.
- C. Use approval gates as the main gate even though reviewers are asking for least privilege evidence.
- D. Add a release gate for least privilege: scope credentials to tools and roles.
- Answer: D
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q46: A global retailer is comparing two release designs for a governed agent workflow. One design centers on approval after execution; the other adds a measurable approval gates step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-004
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- A. Change the design around approval gates so the system can require human approval for high-impact mutations.
- B. Wait for production incidents before adding a dedicated approval gates check.
- C. Use least privilege as the main gate even though reviewers are asking for approval gates evidence.
- D. Keep approval after execution as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why B is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why D is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.

### Q47: A manufacturing quality team has a production-readiness review for a governed agent workflow. The review is focused on policy testing, because the system must test refusals, jailbreaks, and unsafe tool proposals. Which implementation path is most appropriate?
- ID: aai-hf-safety-ethics-and-compliance-005
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- A. Prioritize approval gates before validating the failure signal around policy testing.
- B. Make policy testing explicit in the workflow: test refusals, jailbreaks, and unsafe tool proposals.
- C. Use least privilege as the main gate even though reviewers are asking for policy testing evidence.
- D. Keep spot checks only as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.

### Q48: A bank fraud team sees policy failures that need layered controls as an explicit control. The team has been using one final moderation pass; the next change needs to make layered controls explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-006
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: hard
- A. Prioritize approval gates before validating the failure signal around layered controls.
- B. Bundle layered controls, policy testing, and prompt changes into one release with one aggregate score.
- C. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- D. Keep one final moderation pass as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why D is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.

### Q49: An automotive support team is reviewing a governed agent workflow before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-007
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Prioritize approval gates before validating the failure signal around prompt injection.
- B. Bundle prompt injection, policy testing, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated prompt injection check.
- D. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q50: A global retailer is reviewing a governed agent workflow before rollout. The main risk is least privilege: the system must scope credentials to tools and roles. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-008
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: easy
- A. Change the design around least privilege so the system can scope credentials to tools and roles.
- B. Bundle least privilege, policy testing, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated least privilege check.
- D. Use policy testing as the main gate even though reviewers are asking for least privilege evidence.
- Answer: A
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q51: A public-sector casework team is comparing two release designs for a governed agent workflow. One design centers on approval after execution; the other adds a measurable approval gates step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-009
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: hard
- A. Keep approval after execution as the primary release control and record only final outputs.
- B. Make approval gates explicit in the workflow: require human approval for high-impact mutations.
- C. Wait for production incidents before adding a dedicated approval gates check.
- D. Use prompt injection as the main gate even though reviewers are asking for approval gates evidence.
- Answer: B
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.
- Why C is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.

### Q52: A semiconductor design group is comparing two release designs for a governed agent workflow. One design centers on spot checks only; the other adds a measurable policy testing step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-010
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: expert
- A. Use approval gates as the main gate even though reviewers are asking for policy testing evidence.
- B. Keep spot checks only as the primary release control and record only final outputs.
- C. Prioritize least privilege before validating the failure signal around policy testing.
- D. Use policy testing as the control boundary and require the system to test refusals, jailbreaks, and unsafe tool proposals.
- Answer: D
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why B is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q53: A bank fraud team sees policy failures that need layered controls as an explicit control. The team has been using one final moderation pass; the next change needs to make layered controls explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-011
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: medium
- A. Prioritize approval gates before validating the failure signal around layered controls.
- B. Bundle layered controls, policy testing, and prompt changes into one release with one aggregate score.
- C. Add a release gate for layered controls: combine input, retrieval, tool, and output controls.
- D. Keep one final moderation pass as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why D is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.

### Q54: A hospital operations team is reviewing a governed agent workflow before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-012
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated prompt injection check.
- B. Change the design around prompt injection so the system can treat retrieved text and tool output as data, not instructions.
- C. Prioritize approval gates before validating the failure signal around prompt injection.
- D. Bundle prompt injection, policy testing, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.

### Q55: A global retailer sees policy failures that need least privilege as an explicit control. The team has been using giving the LLM API keys; the next change needs to make least privilege explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-013
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- A. Make least privilege explicit in the workflow: scope credentials to tools and roles.
- B. Bundle least privilege, policy testing, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated least privilege check.
- D. Use policy testing as the main gate even though reviewers are asking for least privilege evidence.
- Answer: A
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q56: A pharmaceutical research team sees policy failures that need approval gates as an explicit control. The team has been using approval after execution; the next change needs to make approval gates explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-014
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated approval gates check.
- B. Use prompt injection as the main gate even though reviewers are asking for approval gates evidence.
- C. Keep approval after execution as the primary release control and record only final outputs.
- D. Use approval gates as the control boundary and require the system to require human approval for high-impact mutations.
- Answer: D
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why C is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.

### Q57: A bank fraud team sees policy failures that need policy testing as an explicit control. The team has been using spot checks only; the next change needs to make policy testing explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-015
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- A. Keep spot checks only as the primary release control and record only final outputs.
- B. Prioritize least privilege before validating the failure signal around policy testing.
- C. Add a release gate for policy testing: test refusals, jailbreaks, and unsafe tool proposals.
- D. Use approval gates as the main gate even though reviewers are asking for policy testing evidence.
- Answer: C
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q58: A manufacturing quality team is reviewing a governed agent workflow before rollout. The main risk is layered controls: the system must combine input, retrieval, tool, and output controls. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-016
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: hard
- A. Bundle layered controls, approval gates, and prompt changes into one release with one aggregate score.
- B. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- C. Keep one final moderation pass as the primary release control and record only final outputs.
- D. Prioritize policy testing before validating the failure signal around layered controls.
- Answer: B
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q59: A global retailer is comparing two release designs for a governed agent workflow. One design centers on letting documents override system policy; the other adds a measurable prompt injection step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-017
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- B. Prioritize least privilege before validating the failure signal around prompt injection.
- C. Bundle prompt injection, layered controls, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated prompt injection check.
- Answer: A
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q60: An automotive support team sees policy failures that need least privilege as an explicit control. The team has been using giving the LLM API keys; the next change needs to make least privilege explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-018
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: medium
- A. Bundle least privilege, approval gates, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated least privilege check.
- C. Use approval gates as the main gate even though reviewers are asking for least privilege evidence.
- D. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- Answer: D
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q61: A semiconductor design group is reviewing a governed agent workflow before rollout. The main risk is approval gates: the system must require human approval for high-impact mutations. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-019
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: hard
- A. Use least privilege as the main gate even though reviewers are asking for approval gates evidence.
- B. Keep approval after execution as the primary release control and record only final outputs.
- C. Add a release gate for approval gates: require human approval for high-impact mutations.
- D. Wait for production incidents before adding a dedicated approval gates check.
- Answer: C
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why B is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.
- Why D is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.

### Q62: A manufacturing quality team sees policy failures that need policy testing as an explicit control. The team has been using spot checks only; the next change needs to make policy testing explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-020
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: hard
- A. Keep spot checks only as the primary release control and record only final outputs.
- B. Prioritize approval gates before validating the failure signal around policy testing.
- C. Change the design around policy testing so the system can test refusals, jailbreaks, and unsafe tool proposals.
- D. Use least privilege as the main gate even though reviewers are asking for policy testing evidence.
- Answer: C
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q63: A manufacturing quality team is comparing two release designs for a governed agent workflow. One design centers on one final moderation pass; the other adds a measurable layered controls step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-021
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: expert
- A. Keep one final moderation pass as the primary release control and record only final outputs.
- B. Prioritize policy testing before validating the failure signal around layered controls.
- C. Bundle layered controls, approval gates, and prompt changes into one release with one aggregate score.
- D. Make layered controls explicit in the workflow: combine input, retrieval, tool, and output controls.
- Answer: D
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.

### Q64: A cybersecurity response team is preparing a governed agent workflow for release. The current design relies on letting documents override system policy, but the release gate needs to treat retrieved text and tool output as data, not instructions. Which action best fits the requirement?
- ID: aai-hf-safety-ethics-and-compliance-022
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: medium
- A. Use prompt injection as the control boundary and require the system to treat retrieved text and tool output as data, not instructions.
- B. Prioritize policy testing before validating the failure signal around prompt injection.
- C. Bundle prompt injection, approval gates, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated prompt injection check.
- Answer: A
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q65: A pharmaceutical research team is reviewing a governed agent workflow before rollout. The main risk is least privilege: the system must scope credentials to tools and roles. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-023
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- A. Use approval gates as the main gate even though reviewers are asking for least privilege evidence.
- B. Add a release gate for least privilege: scope credentials to tools and roles.
- C. Bundle least privilege, approval gates, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated least privilege check.
- Answer: B
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.

### Q66: A logistics planning team has a production-readiness review for a governed agent workflow. The review is focused on approval gates, because the system must require human approval for high-impact mutations. Which control should be added before rollout?
- ID: aai-hf-safety-ethics-and-compliance-024
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- A. Use layered controls as the main gate even though reviewers are asking for approval gates evidence.
- B. Keep approval after execution as the primary release control and record only final outputs.
- C. Change the design around approval gates so the system can require human approval for high-impact mutations.
- D. Wait for production incidents before adding a dedicated approval gates check.
- Answer: C
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why B is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.
- Why D is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.

### Q67: A hospital operations team is comparing two release designs for a governed agent workflow. One design centers on spot checks only; the other adds a measurable policy testing step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-025
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- A. Use least privilege as the main gate even though reviewers are asking for policy testing evidence.
- B. Keep spot checks only as the primary release control and record only final outputs.
- C. Prioritize approval gates before validating the failure signal around policy testing.
- D. Make policy testing explicit in the workflow: test refusals, jailbreaks, and unsafe tool proposals.
- Answer: D
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why B is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q68: A cybersecurity response team is comparing two release designs for a governed agent workflow. One design centers on one final moderation pass; the other adds a measurable layered controls step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-026
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: hard
- A. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- B. Keep one final moderation pass as the primary release control and record only final outputs.
- C. Prioritize approval gates before validating the failure signal around layered controls.
- D. Bundle layered controls, policy testing, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why B is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.

### Q69: An automotive support team is comparing two release designs for a governed agent workflow. One design centers on letting documents override system policy; the other adds a measurable prompt injection step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-027
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated prompt injection check.
- B. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- C. Prioritize layered controls before validating the failure signal around prompt injection.
- D. Bundle prompt injection, least privilege, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.

### Q70: A logistics planning team is comparing two release designs for a governed agent workflow. One design centers on giving the LLM API keys; the other adds a measurable least privilege step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-028
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: easy
- A. Wait for production incidents before adding a dedicated least privilege check.
- B. Use policy testing as the main gate even though reviewers are asking for least privilege evidence.
- C. Change the design around least privilege so the system can scope credentials to tools and roles.
- D. Bundle least privilege, policy testing, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.

### Q71: A manufacturing quality team is preparing a governed agent workflow for release. The current design relies on approval after execution, but the release gate needs to require human approval for high-impact mutations. Which design is the best first change?
- ID: aai-hf-safety-ethics-and-compliance-029
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated approval gates check.
- B. Use policy testing as the main gate even though reviewers are asking for approval gates evidence.
- C. Keep approval after execution as the primary release control and record only final outputs.
- D. Make approval gates explicit in the workflow: require human approval for high-impact mutations.
- Answer: D
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why C is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.

### Q72: A bank fraud team is comparing two release designs for a governed agent workflow. One design centers on spot checks only; the other adds a measurable policy testing step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-030
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: expert
- A. Prioritize least privilege before validating the failure signal around policy testing.
- B. Use policy testing as the control boundary and require the system to test refusals, jailbreaks, and unsafe tool proposals.
- C. Use approval gates as the main gate even though reviewers are asking for policy testing evidence.
- D. Keep spot checks only as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.

### Q73: A global retailer is reviewing a governed agent workflow before rollout. The main risk is layered controls: the system must combine input, retrieval, tool, and output controls. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-031
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: medium
- A. Add a release gate for layered controls: combine input, retrieval, tool, and output controls.
- B. Keep one final moderation pass as the primary release control and record only final outputs.
- C. Prioritize prompt injection before validating the failure signal around layered controls.
- D. Bundle layered controls, least privilege, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why B is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.

### Q74: A pharmaceutical research team is reviewing a governed agent workflow before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-032
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Prioritize layered controls before validating the failure signal around prompt injection.
- B. Bundle prompt injection, least privilege, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated prompt injection check.
- D. Change the design around prompt injection so the system can treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q75: A cybersecurity response team is comparing two release designs for a governed agent workflow. One design centers on giving the LLM API keys; the other adds a measurable least privilege step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-033
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated least privilege check.
- B. Use prompt injection as the main gate even though reviewers are asking for least privilege evidence.
- C. Make least privilege explicit in the workflow: scope credentials to tools and roles.
- D. Bundle least privilege, prompt injection, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.

### Q76: A hospital operations team has a production-readiness review for a governed agent workflow. The review is focused on approval gates, because the system must require human approval for high-impact mutations. Which implementation path is most appropriate?
- ID: aai-hf-safety-ethics-and-compliance-034
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- A. Keep approval after execution as the primary release control and record only final outputs.
- B. Use approval gates as the control boundary and require the system to require human approval for high-impact mutations.
- C. Wait for production incidents before adding a dedicated approval gates check.
- D. Use policy testing as the main gate even though reviewers are asking for approval gates evidence.
- Answer: B
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why A is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.
- Why C is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.

### Q77: A global retailer is preparing a governed agent workflow for release. The current design relies on spot checks only, but the release gate needs to test refusals, jailbreaks, and unsafe tool proposals. Which architecture keeps the boundary cleanest?
- ID: aai-hf-safety-ethics-and-compliance-035
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- A. Add a release gate for policy testing: test refusals, jailbreaks, and unsafe tool proposals.
- B. Use prompt injection as the main gate even though reviewers are asking for policy testing evidence.
- C. Keep spot checks only as the primary release control and record only final outputs.
- D. Prioritize layered controls before validating the failure signal around policy testing.
- Answer: A
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q78: An automotive support team is preparing a governed agent workflow for release. The current design relies on one final moderation pass, but the release gate needs to combine input, retrieval, tool, and output controls. Which design is the best first change?
- ID: aai-hf-safety-ethics-and-compliance-036
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: hard
- A. Keep one final moderation pass as the primary release control and record only final outputs.
- B. Prioritize least privilege before validating the failure signal around layered controls.
- C. Bundle layered controls, prompt injection, and prompt changes into one release with one aggregate score.
- D. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- Answer: D
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.

### Q79: A bank fraud team is reviewing a governed agent workflow before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-037
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Bundle prompt injection, approval gates, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated prompt injection check.
- C. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- D. Prioritize policy testing before validating the failure signal around prompt injection.
- Answer: C
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q80: A manufacturing quality team is comparing two release designs for a governed agent workflow. One design centers on giving the LLM API keys; the other adds a measurable least privilege step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-038
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: medium
- A. Use layered controls as the main gate even though reviewers are asking for least privilege evidence.
- B. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- C. Bundle least privilege, layered controls, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated least privilege check.
- Answer: B
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.

### Q81: A logistics planning team has a production-readiness review for a governed agent workflow. The review is focused on approval gates, because the system must require human approval for high-impact mutations. Which architecture keeps the boundary cleanest?
- ID: aai-hf-safety-ethics-and-compliance-039
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for approval gates: require human approval for high-impact mutations.
- B. Wait for production incidents before adding a dedicated approval gates check.
- C. Use layered controls as the main gate even though reviewers are asking for approval gates evidence.
- D. Keep approval after execution as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why B is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why D is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.

### Q82: An automotive support team is comparing two release designs for a governed agent workflow. One design centers on spot checks only; the other adds a measurable policy testing step. Which design is more appropriate for production?
- ID: aai-hf-safety-ethics-and-compliance-040
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: hard
- A. Change the design around policy testing so the system can test refusals, jailbreaks, and unsafe tool proposals.
- B. Use layered controls as the main gate even though reviewers are asking for policy testing evidence.
- C. Keep spot checks only as the primary release control and record only final outputs.
- D. Prioritize prompt injection before validating the failure signal around policy testing.
- Answer: A
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why B is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.

### Q83: An insurance claims group has a production-readiness review for a governed agent workflow. The review is focused on layered controls, because the system must combine input, retrieval, tool, and output controls. Which choice addresses the root cause?
- ID: aai-hf-safety-ethics-and-compliance-041
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: expert
- A. Bundle layered controls, prompt injection, and prompt changes into one release with one aggregate score.
- B. Make layered controls explicit in the workflow: combine input, retrieval, tool, and output controls.
- C. Keep one final moderation pass as the primary release control and record only final outputs.
- D. Prioritize least privilege before validating the failure signal around layered controls.
- Answer: B
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q84: A telecom network operations team has a production-readiness review for a governed agent workflow. The review is focused on prompt injection, because the system must treat retrieved text and tool output as data, not instructions. Which architecture keeps the boundary cleanest?
- ID: aai-hf-safety-ethics-and-compliance-042
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: medium
- A. Bundle prompt injection, layered controls, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated prompt injection check.
- C. Use prompt injection as the control boundary and require the system to treat retrieved text and tool output as data, not instructions.
- D. Prioritize least privilege before validating the failure signal around prompt injection.
- Answer: C
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q85: A hospital operations team is reviewing a governed agent workflow before rollout. The main risk is least privilege: the system must scope credentials to tools and roles. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-043
- Domain: Safety, Ethics, and Compliance
- Topic: least privilege; agentic_ai_professional
- Difficulty: hard
- A. Bundle least privilege, layered controls, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated least privilege check.
- C. Use layered controls as the main gate even though reviewers are asking for least privilege evidence.
- D. Add a release gate for least privilege: scope credentials to tools and roles.
- Answer: D
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q86: A cybersecurity response team sees policy failures that need approval gates as an explicit control. The team has been using approval after execution; the next change needs to make approval gates explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-044
- Domain: Safety, Ethics, and Compliance
- Topic: approval gates; agentic_ai_professional
- Difficulty: expert
- A. Change the design around approval gates so the system can require human approval for high-impact mutations.
- B. Wait for production incidents before adding a dedicated approval gates check.
- C. Use least privilege as the main gate even though reviewers are asking for approval gates evidence.
- D. Keep approval after execution as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about approval gates. The strongest answer fixes the failing layer directly: require human approval for high-impact mutations.
- Why B is wrong: Waiting for incidents postpones the approval gates gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making approval gates testable in the scenario.
- Why D is wrong: It keeps approval after execution in control instead of adding a measurable approval gates decision point.

### Q87: An automotive support team sees policy failures that need policy testing as an explicit control. The team has been using spot checks only; the next change needs to make policy testing explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-045
- Domain: Safety, Ethics, and Compliance
- Topic: policy testing; agentic_ai_professional
- Difficulty: medium
- A. Prioritize prompt injection before validating the failure signal around policy testing.
- B. Make policy testing explicit in the workflow: test refusals, jailbreaks, and unsafe tool proposals.
- C. Use layered controls as the main gate even though reviewers are asking for policy testing evidence.
- D. Keep spot checks only as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about policy testing. The strongest answer fixes the failing layer directly: test refusals, jailbreaks, and unsafe tool proposals.
- Why A is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making policy testing testable in the scenario.
- Why D is wrong: It keeps spot checks only in control instead of adding a measurable policy testing decision point.

### Q88: A telecom network operations team sees policy failures that need layered controls as an explicit control. The team has been using one final moderation pass; the next change needs to make layered controls explicit. Which action best addresses the problem?
- ID: aai-hf-safety-ethics-and-compliance-046
- Domain: Safety, Ethics, and Compliance
- Topic: layered controls; agentic_ai_professional
- Difficulty: hard
- A. Prioritize prompt injection before validating the failure signal around layered controls.
- B. Bundle layered controls, least privilege, and prompt changes into one release with one aggregate score.
- C. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- D. Keep one final moderation pass as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why D is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.

### Q89: A manufacturing quality team is reviewing a governed agent workflow before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: aai-hf-safety-ethics-and-compliance-047
- Domain: Safety, Ethics, and Compliance
- Topic: prompt injection; agentic_ai_professional
- Difficulty: hard
- A. Prioritize approval gates before validating the failure signal around prompt injection.
- B. Bundle prompt injection, policy testing, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated prompt injection check.
- D. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q90: A pharmaceutical research team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-001
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: medium
- A. Keep review after irreversible mutations as the primary release control and record only final outputs.
- B. Prioritize transparent handoff before validating the failure signal around human-in-the-loop.
- C. Bundle human-in-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- D. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- Answer: D
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q91: A telecom network operations team sees reviewers lacking the human-on-the-loop evidence needed for decisions. The team has been using manual approval for every low-risk step; the next change needs to make human-on-the-loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-002
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- B. Prioritize human-in-the-loop before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, review queues, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q92: A manufacturing quality team is preparing a reviewer-facing agent workflow for release. The current design relies on first-in-first-out for all cases, but the release gate needs to prioritize by risk, uncertainty, and impact. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-003
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- A. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- B. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- C. Bundle review queues, feedback loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated review queues check.
- Answer: B
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.

### Q93: A bank fraud team is preparing a reviewer-facing agent workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-004
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- A. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- B. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- C. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- D. Wait for production incidents before adding a dedicated feedback loop check.
- Answer: C
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why D is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.

### Q94: A pharmaceutical research team is preparing a reviewer-facing agent workflow for release. The current design relies on asking reviewers to judge opaque outputs, but the release gate needs to show evidence, confidence, and pending tool actions to reviewers. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-005
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- A. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- C. Prioritize human-on-the-loop before validating the failure signal around transparent handoff.
- D. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q95: A global retailer has a production-readiness review for a reviewer-facing agent workflow. The review is focused on human-in-the-loop, because the system must require approval before high-risk actions. Which action best fits the requirement?
- ID: aai-hf-human-ai-interaction-and-oversight-006
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- B. Keep review after irreversible mutations as the primary release control and record only final outputs.
- C. Prioritize feedback loop before validating the failure signal around human-in-the-loop.
- D. Bundle human-in-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q96: A manufacturing quality team has a production-readiness review for a reviewer-facing agent workflow. The review is focused on human-on-the-loop, because the system must sample low-risk decisions and monitor drift. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-007
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: easy
- A. Wait for production incidents before adding a dedicated human-on-the-loop check.
- B. Add a release gate for human-on-the-loop: sample low-risk decisions and monitor drift.
- C. Prioritize transparent handoff before validating the failure signal around human-on-the-loop.
- D. Bundle human-on-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.

### Q97: A bank fraud team is comparing two release designs for a reviewer-facing agent workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-008
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated review queues check.
- B. Use transparent handoff as the main gate even though reviewers are asking for review queues evidence.
- C. Change the design around review queues so the system can prioritize by risk, uncertainty, and impact.
- D. Bundle review queues, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.

### Q98: An automotive support team sees reviewers lacking the feedback loop evidence needed for decisions. The team has been using collecting comments with no downstream owner; the next change needs to make feedback loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-009
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated feedback loop check.
- B. Use human-on-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- C. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- D. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q99: A global retailer has a production-readiness review for a reviewer-facing agent workflow. The review is focused on transparent handoff, because the system must show evidence, confidence, and pending tool actions to reviewers. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-010
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: medium
- A. Prioritize human-in-the-loop before validating the failure signal around transparent handoff.
- B. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- C. Use human-on-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- D. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q100: A telecom network operations team is preparing a reviewer-facing agent workflow for release. The current design relies on review after irreversible mutations, but the release gate needs to require approval before high-risk actions. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-011
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for human-in-the-loop: require approval before high-risk actions.
- B. Keep review after irreversible mutations as the primary release control and record only final outputs.
- C. Prioritize feedback loop before validating the failure signal around human-in-the-loop.
- D. Bundle human-in-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

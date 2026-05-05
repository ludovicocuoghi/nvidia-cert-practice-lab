# High Fidelity Generated Questions 004

## Questions

### Q1: A bank fraud team is comparing two release designs for an operational monitoring plan. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-019
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated trace replay check.
- B. Use incident response as the main gate even though reviewers are asking for trace replay evidence.
- C. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- D. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Waiting for incidents postpones the trace replay gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.

### Q2: A manufacturing quality team has a production-readiness review for an operational monitoring plan. The review is focused on drift monitoring, because the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-020
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Use canary monitoring as the main gate even though reviewers are asking for drift monitoring evidence.
- B. Keep average latency only as the primary release control and record only final outputs.
- C. Prioritize p95/p99 latency before validating the failure signal around drift monitoring.
- D. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why B is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q3: A public-sector casework team is comparing two release designs for an operational monitoring plan. One design centers on manual transcript review only; the other adds a measurable incident response step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-021
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: expert
- A. Prioritize drift monitoring before validating the failure signal around incident response.
- B. Bundle incident response, p95/p99 latency, and prompt changes into one release with one aggregate score.
- C. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- D. Keep manual transcript review only as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why D is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.

### Q4: A semiconductor design group is preparing an operational monitoring plan for release. The current design relies on average latency only, but the release gate needs to watch tail latency, queueing, retries, and error budgets. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-022
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated p95/p99 latency check.
- B. Use p95/p99 latency as the control boundary and require the system to watch tail latency, queueing, retries, and error budgets.
- C. Prioritize fallback policy before validating the failure signal around p95/p99 latency.
- D. Bundle p95/p99 latency, canary monitoring, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: Waiting for incidents postpones the p95/p99 latency gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.

### Q5: An insurance claims group is preparing an operational monitoring plan for release. The current design relies on full rollout before measurement, but the release gate needs to compare quality, safety, cost, and latency during rollout. Which design is the best first change?
- ID: ags-hf-observability-operations-and-cost-023
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for canary monitoring: compare quality, safety, cost, and latency during rollout.
- B. Bundle canary monitoring, drift monitoring, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated canary monitoring check.
- D. Use drift monitoring as the main gate even though reviewers are asking for canary monitoring evidence.
- Answer: A
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.

### Q6: A global retailer is comparing two release designs for an operational monitoring plan. One design centers on silent fallback to lower quality; the other adds a measurable fallback policy step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-024
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated fallback policy check.
- B. Use canary monitoring as the main gate even though reviewers are asking for fallback policy evidence.
- C. Keep silent fallback to lower quality as the primary release control and record only final outputs.
- D. Change the design around fallback policy so the system can route around unhealthy models or tools with trace evidence.
- Answer: D
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why C is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.

### Q7: A hospital operations team is preparing an operational monitoring plan for release. The current design relies on HTTP 200 as the only success signal, but the release gate needs to capture spans for model, retrieval, tools, guardrails, latency, and cost. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-025
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: medium
- A. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- B. Prioritize incident response before validating the failure signal around trace replay.
- C. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Use fallback policy as the main gate even though reviewers are asking for trace replay evidence.
- Answer: C
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q8: A bank fraud team is reviewing an operational monitoring plan before rollout. The main risk is drift monitoring: the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-026
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Bundle drift monitoring, incident response, and prompt changes into one release with one aggregate score.
- B. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Keep average latency only as the primary release control and record only final outputs.
- D. Prioritize p95/p99 latency before validating the failure signal around drift monitoring.
- Answer: B
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why C is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q9: An insurance claims group is preparing an operational monitoring plan for release. The current design relies on manual transcript review only, but the release gate needs to convert incidents into regression tests and rollback rules. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-027
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- B. Prioritize drift monitoring before validating the failure signal around incident response.
- C. Bundle incident response, canary monitoring, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated incident response check.
- Answer: A
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.

### Q10: A logistics planning team sees a production failure tied to p95/p99 latency. The team has been using average latency only; the next change needs to make p95/p99 latency explicit. Which action best addresses the problem?
- ID: ags-hf-observability-operations-and-cost-028
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: easy
- A. Bundle p95/p99 latency, canary monitoring, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated p95/p99 latency check.
- C. Use canary monitoring as the main gate even though reviewers are asking for p95/p99 latency evidence.
- D. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- Answer: D
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the p95/p99 latency gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q11: A hospital operations team has a production-readiness review for an operational monitoring plan. The review is focused on canary monitoring, because the system must compare quality, safety, cost, and latency during rollout. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-029
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Use fallback policy as the main gate even though reviewers are asking for canary monitoring evidence.
- B. Keep full rollout before measurement as the primary release control and record only final outputs.
- C. Make canary monitoring explicit in the workflow: compare quality, safety, cost, and latency during rollout.
- D. Wait for production incidents before adding a dedicated canary monitoring check.
- Answer: C
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why B is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why D is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.

### Q12: A semiconductor design group has a production-readiness review for an operational monitoring plan. The review is focused on fallback policy, because the system must route around unhealthy models or tools with trace evidence. Which control should be added before rollout?
- ID: ags-hf-observability-operations-and-cost-030
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: expert
- A. Use fallback policy as the control boundary and require the system to route around unhealthy models or tools with trace evidence.
- B. Use canary monitoring as the main gate even though reviewers are asking for fallback policy evidence.
- C. Keep silent fallback to lower quality as the primary release control and record only final outputs.
- D. Prioritize p95/p99 latency before validating the failure signal around fallback policy.
- Answer: A
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why C is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.

### Q13: A global retailer is comparing two release designs for an operational monitoring plan. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-031
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: medium
- A. Bundle trace replay, fallback policy, and prompt changes into one release with one aggregate score.
- B. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- D. Prioritize canary monitoring before validating the failure signal around trace replay.
- Answer: B
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why C is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q14: A pharmaceutical research team has a production-readiness review for an operational monitoring plan. The review is focused on drift monitoring, because the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-032
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Bundle drift monitoring, incident response, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated drift monitoring check.
- C. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- D. Prioritize fallback policy before validating the failure signal around drift monitoring.
- Answer: C
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q15: A bank fraud team is preparing an operational monitoring plan for release. The current design relies on manual transcript review only, but the release gate needs to convert incidents into regression tests and rollback rules. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-033
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: hard
- A. Bundle incident response, fallback policy, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated incident response check.
- C. Use fallback policy as the main gate even though reviewers are asking for incident response evidence.
- D. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- Answer: D
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q16: A public-sector casework team is comparing two release designs for an operational monitoring plan. One design centers on average latency only; the other adds a measurable p95/p99 latency step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-034
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: expert
- A. Use p95/p99 latency as the control boundary and require the system to watch tail latency, queueing, retries, and error budgets.
- B. Wait for production incidents before adding a dedicated p95/p99 latency check.
- C. Use fallback policy as the main gate even though reviewers are asking for p95/p99 latency evidence.
- D. Keep average latency only as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why B is wrong: Waiting for incidents postpones the p95/p99 latency gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.

### Q17: A logistics planning team is reviewing an operational monitoring plan before rollout. The main risk is canary monitoring: the system must compare quality, safety, cost, and latency during rollout. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-035
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize incident response before validating the failure signal around canary monitoring.
- B. Add a release gate for canary monitoring: compare quality, safety, cost, and latency during rollout.
- C. Use p95/p99 latency as the main gate even though reviewers are asking for canary monitoring evidence.
- D. Keep full rollout before measurement as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.

### Q18: A pharmaceutical research team is reviewing an operational monitoring plan before rollout. The main risk is fallback policy: the system must route around unhealthy models or tools with trace evidence. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-036
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize p95/p99 latency before validating the failure signal around fallback policy.
- B. Bundle fallback policy, drift monitoring, and prompt changes into one release with one aggregate score.
- C. Change the design around fallback policy so the system can route around unhealthy models or tools with trace evidence.
- D. Keep silent fallback to lower quality as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.
- Why D is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.

### Q19: A cybersecurity response team has a production-readiness review for an operational monitoring plan. The review is focused on trace replay, because the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which action best fits the requirement?
- ID: ags-hf-observability-operations-and-cost-037
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize fallback policy before validating the failure signal around trace replay.
- B. Bundle trace replay, incident response, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated trace replay check.
- D. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Answer: D
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the trace replay gate until after users are exposed.

### Q20: A public-sector casework team is comparing two release designs for an operational monitoring plan. One design centers on average latency only; the other adds a measurable drift monitoring step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-038
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: medium
- A. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- B. Bundle drift monitoring, canary monitoring, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated drift monitoring check.
- D. Use canary monitoring as the main gate even though reviewers are asking for drift monitoring evidence.
- Answer: A
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q21: A global retailer is comparing two release designs for an operational monitoring plan. One design centers on manual transcript review only; the other adds a measurable incident response step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-039
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: hard
- A. Keep manual transcript review only as the primary release control and record only final outputs.
- B. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- C. Wait for production incidents before adding a dedicated incident response check.
- D. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- Answer: B
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.
- Why C is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q22: A pharmaceutical research team is comparing two release designs for an operational monitoring plan. One design centers on average latency only; the other adds a measurable p95/p99 latency step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-040
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize drift monitoring before validating the failure signal around p95/p99 latency.
- B. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- C. Use canary monitoring as the main gate even though reviewers are asking for p95/p99 latency evidence.
- D. Keep average latency only as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.

### Q23: An automotive support team is comparing two release designs for an operational monitoring plan. One design centers on full rollout before measurement; the other adds a measurable canary monitoring step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-041
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: expert
- A. Make canary monitoring explicit in the workflow: compare quality, safety, cost, and latency during rollout.
- B. Keep full rollout before measurement as the primary release control and record only final outputs.
- C. Prioritize incident response before validating the failure signal around canary monitoring.
- D. Bundle canary monitoring, drift monitoring, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why B is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.

### Q24: A global retailer has a production-readiness review for an operational monitoring plan. The review is focused on fallback policy, because the system must route around unhealthy models or tools with trace evidence. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-042
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize p95/p99 latency before validating the failure signal around fallback policy.
- B. Bundle fallback policy, canary monitoring, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated fallback policy check.
- D. Use fallback policy as the control boundary and require the system to route around unhealthy models or tools with trace evidence.
- Answer: D
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.

### Q25: A public-sector casework team has a production-readiness review for an operational monitoring plan. The review is focused on trace replay, because the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which design is the best first change?
- ID: ags-hf-observability-operations-and-cost-043
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated trace replay check.
- B. Use drift monitoring as the main gate even though reviewers are asking for trace replay evidence.
- C. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Bundle trace replay, drift monitoring, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Waiting for incidents postpones the trace replay gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q26: A bank fraud team sees a production failure tied to drift monitoring. The team has been using average latency only; the next change needs to make drift monitoring explicit. Which action best addresses the problem?
- ID: ags-hf-observability-operations-and-cost-044
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: expert
- A. Keep average latency only as the primary release control and record only final outputs.
- B. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Wait for production incidents before adding a dedicated drift monitoring check.
- D. Use trace replay as the main gate even though reviewers are asking for drift monitoring evidence.
- Answer: B
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why C is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q27: A pharmaceutical research team is comparing two release designs for an operational monitoring plan. One design centers on manual transcript review only; the other adds a measurable incident response step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-045
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: medium
- A. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- B. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- C. Keep manual transcript review only as the primary release control and record only final outputs.
- D. Prioritize fallback policy before validating the failure signal around incident response.
- Answer: A
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why C is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q28: A logistics planning team is reviewing an operational monitoring plan before rollout. The main risk is p95/p99 latency: the system must watch tail latency, queueing, retries, and error budgets. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-046
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: hard
- A. Keep average latency only as the primary release control and record only final outputs.
- B. Prioritize canary monitoring before validating the failure signal around p95/p99 latency.
- C. Bundle p95/p99 latency, drift monitoring, and prompt changes into one release with one aggregate score.
- D. Use p95/p99 latency as the control boundary and require the system to watch tail latency, queueing, retries, and error budgets.
- Answer: D
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.

### Q29: A manufacturing quality team sees a production failure tied to canary monitoring. The team has been using full rollout before measurement; the next change needs to make canary monitoring explicit. Which action best addresses the problem?
- ID: ags-hf-observability-operations-and-cost-047
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Bundle canary monitoring, incident response, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated canary monitoring check.
- C. Add a release gate for canary monitoring: compare quality, safety, cost, and latency during rollout.
- D. Prioritize fallback policy before validating the failure signal around canary monitoring.
- Answer: C
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.

### Q30: A hospital operations team sees a production failure tied to human-in-the-loop. The team has been using review after irreversible mutations; the next change needs to make human-in-the-loop explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-001
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: expert
- A. Prioritize review queues before validating the failure signal around human-in-the-loop.
- B. Bundle human-in-the-loop, human-on-the-loop, and prompt changes into one release with one aggregate score.
- C. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- D. Keep review after irreversible mutations as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q31: A bank fraud team sees a production failure tied to human-on-the-loop. The team has been using manual approval for every low-risk step; the next change needs to make human-on-the-loop explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-002
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated human-on-the-loop check.
- B. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- C. Prioritize feedback loop before validating the failure signal around human-on-the-loop.
- D. Bundle human-on-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.

### Q32: An automotive support team is preparing a governance and review workflow for release. The current design relies on first-in-first-out for all cases, but the release gate needs to prioritize by risk, uncertainty, and impact. Which implementation path is most appropriate?
- ID: ags-hf-human-oversight-and-governance-003
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- B. Bundle review queues, human-in-the-loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated review queues check.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q33: A logistics planning team sees a production failure tied to feedback loop. The team has been using collecting comments with no downstream owner; the next change needs to make feedback loop explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-004
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated feedback loop check.
- B. Use human-in-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- C. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- D. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q34: A public-sector casework team sees a production failure tied to transparent handoff. The team has been using asking reviewers to judge opaque outputs; the next change needs to make transparent handoff explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-005
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- A. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- B. Prioritize feedback loop before validating the failure signal around transparent handoff.
- C. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- D. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q35: A cybersecurity response team is reviewing a governance and review workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-006
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Bundle human-in-the-loop, review queues, and prompt changes into one release with one aggregate score.
- B. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- C. Keep review after irreversible mutations as the primary release control and record only final outputs.
- D. Prioritize human-on-the-loop before validating the failure signal around human-in-the-loop.
- Answer: B
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q36: A pharmaceutical research team is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-007
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for human-on-the-loop: sample low-risk decisions and monitor drift.
- B. Prioritize review queues before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, human-in-the-loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q37: A telecom network operations team has a production-readiness review for a governance and review workflow. The review is focused on review queues, because the system must prioritize by risk, uncertainty, and impact. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-008
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: easy
- A. Bundle review queues, human-on-the-loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated review queues check.
- C. Use human-on-the-loop as the main gate even though reviewers are asking for review queues evidence.
- D. Change the design around review queues so the system can prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q38: A manufacturing quality team has a production-readiness review for a governance and review workflow. The review is focused on feedback loop, because the system must turn review labels into evals, prompt fixes, or training data. Which implementation path is most appropriate?
- ID: ags-hf-human-oversight-and-governance-009
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: hard
- A. Use transparent handoff as the main gate even though reviewers are asking for feedback loop evidence.
- B. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- C. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- D. Wait for production incidents before adding a dedicated feedback loop check.
- Answer: C
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why D is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.

### Q39: A semiconductor design group is comparing two release designs for a governance and review workflow. One design centers on asking reviewers to judge opaque outputs; the other adds a measurable transparent handoff step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-010
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: expert
- A. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- B. Use feedback loop as the main gate even though reviewers are asking for transparent handoff evidence.
- C. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- D. Prioritize review queues before validating the failure signal around transparent handoff.
- Answer: A
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q40: A semiconductor design group is preparing a governance and review workflow for release. The current design relies on review after irreversible mutations, but the release gate needs to require approval before high-risk actions. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-011
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: medium
- A. Bundle human-in-the-loop, review queues, and prompt changes into one release with one aggregate score.
- B. Add a release gate for human-in-the-loop: require approval before high-risk actions.
- C. Keep review after irreversible mutations as the primary release control and record only final outputs.
- D. Prioritize human-on-the-loop before validating the failure signal around human-in-the-loop.
- Answer: B
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q41: A hospital operations team is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-012
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Bundle human-on-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated human-on-the-loop check.
- C. Change the design around human-on-the-loop so the system can sample low-risk decisions and monitor drift.
- D. Prioritize transparent handoff before validating the failure signal around human-on-the-loop.
- Answer: C
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.

### Q42: A global retailer is comparing two release designs for a governance and review workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-013
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- A. Bundle review queues, human-on-the-loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated review queues check.
- C. Use human-on-the-loop as the main gate even though reviewers are asking for review queues evidence.
- D. Make review queues explicit in the workflow: prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q43: An automotive support team is preparing a governance and review workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-014
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- A. Use feedback loop as the control boundary and require the system to turn review labels into evals, prompt fixes, or training data.
- B. Wait for production incidents before adding a dedicated feedback loop check.
- C. Use transparent handoff as the main gate even though reviewers are asking for feedback loop evidence.
- D. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why B is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q44: A bank fraud team is reviewing a governance and review workflow before rollout. The main risk is transparent handoff: the system must show evidence, confidence, and pending tool actions to reviewers. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-015
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize review queues before validating the failure signal around transparent handoff.
- B. Add a release gate for transparent handoff: show evidence, confidence, and pending tool actions to reviewers.
- C. Use feedback loop as the main gate even though reviewers are asking for transparent handoff evidence.
- D. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q45: A manufacturing quality team has a production-readiness review for a governance and review workflow. The review is focused on human-in-the-loop, because the system must require approval before high-risk actions. Which implementation path is most appropriate?
- ID: ags-hf-human-oversight-and-governance-016
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize review queues before validating the failure signal around human-in-the-loop.
- B. Bundle human-in-the-loop, human-on-the-loop, and prompt changes into one release with one aggregate score.
- C. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- D. Keep review after irreversible mutations as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q46: A telecom network operations team is comparing two release designs for a governance and review workflow. One design centers on manual approval for every low-risk step; the other adds a measurable human-on-the-loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-017
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize human-in-the-loop before validating the failure signal around human-on-the-loop.
- B. Bundle human-on-the-loop, review queues, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated human-on-the-loop check.
- D. Make human-on-the-loop explicit in the workflow: sample low-risk decisions and monitor drift.
- Answer: D
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q47: An automotive support team has a production-readiness review for a governance and review workflow. The review is focused on review queues, because the system must prioritize by risk, uncertainty, and impact. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-018
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: medium
- A. Use review queues as the control boundary and require the system to prioritize by risk, uncertainty, and impact.
- B. Bundle review queues, human-in-the-loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated review queues check.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q48: A bank fraud team is reviewing a governance and review workflow before rollout. The main risk is feedback loop: the system must turn review labels into evals, prompt fixes, or training data. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-019
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: hard
- A. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- B. Add a release gate for feedback loop: turn review labels into evals, prompt fixes, or training data.
- C. Wait for production incidents before adding a dedicated feedback loop check.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- Answer: B
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why C is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.

### Q49: A public-sector casework team is comparing two release designs for a governance and review workflow. One design centers on asking reviewers to judge opaque outputs; the other adds a measurable transparent handoff step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-020
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize feedback loop before validating the failure signal around transparent handoff.
- B. Change the design around transparent handoff so the system can show evidence, confidence, and pending tool actions to reviewers.
- C. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- D. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q50: A public-sector casework team has a production-readiness review for a governance and review workflow. The review is focused on human-in-the-loop, because the system must require approval before high-risk actions. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-021
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: expert
- A. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- B. Keep review after irreversible mutations as the primary release control and record only final outputs.
- C. Prioritize review queues before validating the failure signal around human-in-the-loop.
- D. Bundle human-in-the-loop, human-on-the-loop, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q51: A semiconductor design group is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-022
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize feedback loop before validating the failure signal around human-on-the-loop.
- B. Bundle human-on-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated human-on-the-loop check.
- D. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- Answer: D
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q52: An insurance claims group is comparing two release designs for a governance and review workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-023
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated review queues check.
- B. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- C. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- D. Bundle review queues, human-in-the-loop, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.

### Q53: A global retailer is comparing two release designs for a governance and review workflow. One design centers on collecting comments with no downstream owner; the other adds a measurable feedback loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-024
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- A. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- B. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- C. Wait for production incidents before adding a dedicated feedback loop check.
- D. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- Answer: B
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why C is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.

### Q54: A public-sector casework team is preparing a governance and review workflow for release. The current design relies on asking reviewers to judge opaque outputs, but the release gate needs to show evidence, confidence, and pending tool actions to reviewers. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-025
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- A. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- B. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- C. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- D. Prioritize feedback loop before validating the failure signal around transparent handoff.
- Answer: A
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q55: A semiconductor design group is reviewing a governance and review workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-026
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Keep review after irreversible mutations as the primary release control and record only final outputs.
- B. Prioritize human-on-the-loop before validating the failure signal around human-in-the-loop.
- C. Bundle human-in-the-loop, review queues, and prompt changes into one release with one aggregate score.
- D. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- Answer: D
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q56: An insurance claims group is comparing two release designs for a governance and review workflow. One design centers on manual approval for every low-risk step; the other adds a measurable human-on-the-loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-027
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Bundle human-on-the-loop, human-in-the-loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated human-on-the-loop check.
- C. Add a release gate for human-on-the-loop: sample low-risk decisions and monitor drift.
- D. Prioritize review queues before validating the failure signal around human-on-the-loop.
- Answer: C
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.

### Q57: A global retailer is preparing a governance and review workflow for release. The current design relies on first-in-first-out for all cases, but the release gate needs to prioritize by risk, uncertainty, and impact. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-028
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: easy
- A. Use human-on-the-loop as the main gate even though reviewers are asking for review queues evidence.
- B. Change the design around review queues so the system can prioritize by risk, uncertainty, and impact.
- C. Bundle review queues, human-on-the-loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated review queues check.
- Answer: B
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.

### Q58: A public-sector casework team is comparing two release designs for a governance and review workflow. One design centers on collecting comments with no downstream owner; the other adds a measurable feedback loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-029
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: hard
- A. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- B. Wait for production incidents before adding a dedicated feedback loop check.
- C. Use human-on-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- D. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why B is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q59: A bank fraud team is reviewing a governance and review workflow before rollout. The main risk is transparent handoff: the system must show evidence, confidence, and pending tool actions to reviewers. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-030
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: expert
- A. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- B. Prioritize review queues before validating the failure signal around transparent handoff.
- C. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- D. Use feedback loop as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q60: A global retailer is comparing two release designs for a governance and review workflow. One design centers on review after irreversible mutations; the other adds a measurable human-in-the-loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-031
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: medium
- A. Keep review after irreversible mutations as the primary release control and record only final outputs.
- B. Prioritize feedback loop before validating the failure signal around human-in-the-loop.
- C. Bundle human-in-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- D. Add a release gate for human-in-the-loop: require approval before high-risk actions.
- Answer: D
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q61: An insurance claims group is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-032
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around human-on-the-loop so the system can sample low-risk decisions and monitor drift.
- B. Prioritize review queues before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, human-in-the-loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q62: A bank fraud team is comparing two release designs for a governance and review workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-033
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- A. Use transparent handoff as the main gate even though reviewers are asking for review queues evidence.
- B. Make review queues explicit in the workflow: prioritize by risk, uncertainty, and impact.
- C. Bundle review queues, transparent handoff, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated review queues check.
- Answer: B
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.

### Q63: A hospital operations team is comparing two release designs for a governance and review workflow. One design centers on collecting comments with no downstream owner; the other adds a measurable feedback loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-034
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- A. Use human-on-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- B. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- C. Use feedback loop as the control boundary and require the system to turn review labels into evals, prompt fixes, or training data.
- D. Wait for production incidents before adding a dedicated feedback loop check.
- Answer: C
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why D is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.

### Q64: A logistics planning team sees a production failure tied to transparent handoff. The team has been using asking reviewers to judge opaque outputs; the next change needs to make transparent handoff explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-035
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- A. Use human-on-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- C. Prioritize human-in-the-loop before validating the failure signal around transparent handoff.
- D. Add a release gate for transparent handoff: show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q65: A pharmaceutical research team is comparing two release designs for a governance and review workflow. One design centers on review after irreversible mutations; the other adds a measurable human-in-the-loop step. Which design is more appropriate for production?
- ID: ags-hf-human-oversight-and-governance-036
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- B. Keep review after irreversible mutations as the primary release control and record only final outputs.
- C. Prioritize transparent handoff before validating the failure signal around human-in-the-loop.
- D. Bundle human-in-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q66: A cybersecurity response team is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-037
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated human-on-the-loop check.
- B. Make human-on-the-loop explicit in the workflow: sample low-risk decisions and monitor drift.
- C. Prioritize feedback loop before validating the failure signal around human-on-the-loop.
- D. Bundle human-on-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.

### Q67: A manufacturing quality team is preparing a governance and review workflow for release. The current design relies on first-in-first-out for all cases, but the release gate needs to prioritize by risk, uncertainty, and impact. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-038
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated review queues check.
- B. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- C. Use review queues as the control boundary and require the system to prioritize by risk, uncertainty, and impact.
- D. Bundle review queues, feedback loop, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.

### Q68: A logistics planning team sees a production failure tied to feedback loop. The team has been using collecting comments with no downstream owner; the next change needs to make feedback loop explicit. Which action best addresses the problem?
- ID: ags-hf-human-oversight-and-governance-039
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated feedback loop check.
- B. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- C. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- D. Add a release gate for feedback loop: turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q69: An automotive support team is reviewing a governance and review workflow before rollout. The main risk is transparent handoff: the system must show evidence, confidence, and pending tool actions to reviewers. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-040
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: hard
- A. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- C. Prioritize human-on-the-loop before validating the failure signal around transparent handoff.
- D. Change the design around transparent handoff so the system can show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q70: An automotive support team is reviewing a governance and review workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-041
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: expert
- A. Prioritize transparent handoff before validating the failure signal around human-in-the-loop.
- B. Bundle human-in-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- C. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- D. Keep review after irreversible mutations as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q71: A global retailer is preparing a governance and review workflow for release. The current design relies on manual approval for every low-risk step, but the release gate needs to sample low-risk decisions and monitor drift. Which architecture keeps the boundary cleanest?
- ID: ags-hf-human-oversight-and-governance-042
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated human-on-the-loop check.
- B. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- C. Prioritize human-in-the-loop before validating the failure signal around human-on-the-loop.
- D. Bundle human-on-the-loop, review queues, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.

### Q72: A hospital operations team has a production-readiness review for a governance and review workflow. The review is focused on review queues, because the system must prioritize by risk, uncertainty, and impact. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-043
- Domain: Human Oversight and Governance
- Topic: review queues; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- B. Bundle review queues, feedback loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated review queues check.
- D. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q73: A semiconductor design group is preparing a governance and review workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which action best fits the requirement?
- ID: ags-hf-human-oversight-and-governance-044
- Domain: Human Oversight and Governance
- Topic: feedback loop; agentic_ai_general_study
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated feedback loop check.
- B. Use human-in-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- C. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- D. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q74: A pharmaceutical research team is preparing a governance and review workflow for release. The current design relies on asking reviewers to judge opaque outputs, but the release gate needs to show evidence, confidence, and pending tool actions to reviewers. Which design is the best first change?
- ID: ags-hf-human-oversight-and-governance-045
- Domain: Human Oversight and Governance
- Topic: transparent handoff; agentic_ai_general_study
- Difficulty: medium
- A. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- B. Prioritize human-on-the-loop before validating the failure signal around transparent handoff.
- C. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- D. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q75: A telecom network operations team is reviewing a governance and review workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-046
- Domain: Human Oversight and Governance
- Topic: human-in-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Bundle human-in-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- B. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- C. Keep review after irreversible mutations as the primary release control and record only final outputs.
- D. Prioritize feedback loop before validating the failure signal around human-in-the-loop.
- Answer: B
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q76: A manufacturing quality team is reviewing a governance and review workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: ags-hf-human-oversight-and-governance-047
- Domain: Human Oversight and Governance
- Topic: human-on-the-loop; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for human-on-the-loop: sample low-risk decisions and monitor drift.
- B. Prioritize transparent handoff before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q77: A manufacturing quality team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.

### Q78: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training-time data curation.

### Q79: A pharmaceutical research team is preparing a production rollout. Diagnosing where time is spent across retrieval, tools, and inference is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.

### Q80: A telecom network operations team is reviewing the production design. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.

### Q81: A hospital operations team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.

### Q82: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-006
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.

### Q83: An insurance claims group is preparing a production rollout. Preserve audit evidence for every release is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-007
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- B. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.

### Q84: A telecom network operations team is reviewing the production design. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-008
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: easy
- A. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training-time data curation.

### Q85: A public-sector casework team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-009
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training-time data curation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Training-time data curation.

### Q86: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-010
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.

### Q87: A semiconductor design group is preparing a release decision. Isolate tenant data before model context is assembled is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-011
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- B. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.

### Q88: A manufacturing quality team has narrowed the next implementation step. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-012
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.

### Q89: A global retailer is reviewing the production design. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-013
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training-time data curation.

### Q90: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-014
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Training-time data curation.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.

### Q91: A cybersecurity response team is preparing a release decision. Keeping fresh private documents out of model weights is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-015
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Training-time data curation.

### Q92: A public-sector casework team has narrowed the next implementation step. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-016
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.

### Q93: A logistics planning team is reviewing the production design. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-017
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training-time data curation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Training-time data curation.

### Q94: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-018
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training-time data curation.

### Q95: A semiconductor design group is preparing a release decision. Isolate tenant data before model context is assembled is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-019
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training-time data curation.

### Q96: A hospital operations team has narrowed the next implementation step. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-020
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training-time data curation.

### Q97: A hospital operations team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-021
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Training-time data curation.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training-time data curation.

### Q98: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-022
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training-time data curation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training-time data curation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Training-time data curation.

### Q99: A pharmaceutical research team is preparing a production rollout. Diagnosing where time is spent across retrieval, tools, and inference is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-023
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.

### Q100: A telecom network operations team is reviewing the production design. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-024
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Training-time data curation.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.

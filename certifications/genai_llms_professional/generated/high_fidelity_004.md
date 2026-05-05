# High Fidelity Generated Questions 004

## Questions

### Q1: A hospital operations team is preparing a monitored LLM service for release. The current design relies on silent fallback to lower quality, but the release gate needs to route around unhealthy models or tools with trace evidence. Which implementation path is most appropriate?
- ID: genl-hf-production-monitoring-and-reliability-033
- Domain: Production Monitoring and Reliability
- Topic: fallback policy; genai_llms_professional
- Difficulty: hard
- A. Use drift detection as the main gate even though reviewers are asking for fallback policy evidence.
- B. Make fallback policy explicit in the workflow: route around unhealthy models or tools with trace evidence.
- C. Bundle fallback policy, drift detection, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated fallback policy check.
- Answer: B
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.

### Q2: A bank fraud team has a production-readiness review for a monitored LLM service. The review is focused on drift detection, because the system must track input mix, retrieval hit rate, output quality, and safety events. Which control should be added before rollout?
- ID: genl-hf-production-monitoring-and-reliability-034
- Domain: Production Monitoring and Reliability
- Topic: drift detection; genai_llms_professional
- Difficulty: medium
- A. Use load shedding as the main gate even though reviewers are asking for drift detection evidence.
- B. Keep GPU utilization alone as the primary release control and record only final outputs.
- C. Use drift detection as the control boundary and require the system to track input mix, retrieval hit rate, output quality, and safety events.
- D. Wait for production incidents before adding a dedicated drift detection check.
- Answer: C
- Explanation: The scenario is about drift detection. The strongest answer fixes the failing layer directly: track input mix, retrieval hit rate, output quality, and safety events.
- Why A is wrong: It moves attention to a neighboring control instead of making drift detection testable in the scenario.
- Why B is wrong: It keeps GPU utilization alone in control instead of adding a measurable drift detection decision point.
- Why D is wrong: Waiting for incidents postpones the drift detection gate until after users are exposed.

### Q3: An insurance claims group is preparing a monitored LLM service for release. The current design relies on letting queues grow unbounded, but the release gate needs to reject or defer low-priority work under saturation. Which design is the best first change?
- ID: genl-hf-production-monitoring-and-reliability-035
- Domain: Production Monitoring and Reliability
- Topic: load shedding; genai_llms_professional
- Difficulty: hard
- A. Use fallback policy as the main gate even though reviewers are asking for load shedding evidence.
- B. Keep letting queues grow unbounded as the primary release control and record only final outputs.
- C. Prioritize drift detection before validating the failure signal around load shedding.
- D. Add a release gate for load shedding: reject or defer low-priority work under saturation.
- Answer: D
- Explanation: The scenario is about load shedding. The strongest answer fixes the failing layer directly: reject or defer low-priority work under saturation.
- Why A is wrong: It moves attention to a neighboring control instead of making load shedding testable in the scenario.
- Why B is wrong: It keeps letting queues grow unbounded in control instead of adding a measurable load shedding decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making load shedding testable in the scenario.

### Q4: A telecom network operations team is reviewing a monitored LLM service before rollout. The main risk is p95/p99 latency: the system must watch tail latency, queueing, retries, and error budgets. Which option keeps the decision at the right layer?
- ID: genl-hf-production-monitoring-and-reliability-036
- Domain: Production Monitoring and Reliability
- Topic: p95/p99 latency; genai_llms_professional
- Difficulty: hard
- A. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- B. Keep average latency only as the primary release control and record only final outputs.
- C. Prioritize fallback policy before validating the failure signal around p95/p99 latency.
- D. Bundle p95/p99 latency, canary monitoring, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why B is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.

### Q5: A public-sector casework team has a production-readiness review for a monitored LLM service. The review is focused on canary monitoring, because the system must compare quality, safety, cost, and latency during rollout. Which implementation path is most appropriate?
- ID: genl-hf-production-monitoring-and-reliability-037
- Domain: Production Monitoring and Reliability
- Topic: canary monitoring; genai_llms_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated canary monitoring check.
- B. Make canary monitoring explicit in the workflow: compare quality, safety, cost, and latency during rollout.
- C. Prioritize fallback policy before validating the failure signal around canary monitoring.
- D. Bundle canary monitoring, p95/p99 latency, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.

### Q6: A cybersecurity response team sees operational incidents that require fallback policy. The team has been using silent fallback to lower quality; the next change needs to make fallback policy explicit. Which action best addresses the problem?
- ID: genl-hf-production-monitoring-and-reliability-038
- Domain: Production Monitoring and Reliability
- Topic: fallback policy; genai_llms_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated fallback policy check.
- B. Use load shedding as the main gate even though reviewers are asking for fallback policy evidence.
- C. Use fallback policy as the control boundary and require the system to route around unhealthy models or tools with trace evidence.
- D. Bundle fallback policy, load shedding, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.

### Q7: An automotive support team sees operational incidents that require drift detection. The team has been using GPU utilization alone; the next change needs to make drift detection explicit. Which action best addresses the problem?
- ID: genl-hf-production-monitoring-and-reliability-039
- Domain: Production Monitoring and Reliability
- Topic: drift detection; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated drift detection check.
- B. Use p95/p99 latency as the main gate even though reviewers are asking for drift detection evidence.
- C. Keep GPU utilization alone as the primary release control and record only final outputs.
- D. Add a release gate for drift detection: track input mix, retrieval hit rate, output quality, and safety events.
- Answer: D
- Explanation: The scenario is about drift detection. The strongest answer fixes the failing layer directly: track input mix, retrieval hit rate, output quality, and safety events.
- Why A is wrong: Waiting for incidents postpones the drift detection gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making drift detection testable in the scenario.
- Why C is wrong: It keeps GPU utilization alone in control instead of adding a measurable drift detection decision point.

### Q8: A logistics planning team is preparing a monitored LLM service for release. The current design relies on letting queues grow unbounded, but the release gate needs to reject or defer low-priority work under saturation. Which action best fits the requirement?
- ID: genl-hf-production-monitoring-and-reliability-040
- Domain: Production Monitoring and Reliability
- Topic: load shedding; genai_llms_professional
- Difficulty: expert
- A. Use drift detection as the main gate even though reviewers are asking for load shedding evidence.
- B. Keep letting queues grow unbounded as the primary release control and record only final outputs.
- C. Prioritize fallback policy before validating the failure signal around load shedding.
- D. Change the design around load shedding so the system can reject or defer low-priority work under saturation.
- Answer: D
- Explanation: The scenario is about load shedding. The strongest answer fixes the failing layer directly: reject or defer low-priority work under saturation.
- Why A is wrong: It moves attention to a neighboring control instead of making load shedding testable in the scenario.
- Why B is wrong: It keeps letting queues grow unbounded in control instead of adding a measurable load shedding decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making load shedding testable in the scenario.

### Q9: A global retailer is reviewing a monitored LLM service before rollout. The main risk is p95/p99 latency: the system must watch tail latency, queueing, retries, and error budgets. Which option keeps the decision at the right layer?
- ID: genl-hf-production-monitoring-and-reliability-041
- Domain: Production Monitoring and Reliability
- Topic: p95/p99 latency; genai_llms_professional
- Difficulty: medium
- A. Prioritize fallback policy before validating the failure signal around p95/p99 latency.
- B. Bundle p95/p99 latency, canary monitoring, and prompt changes into one release with one aggregate score.
- C. Make p95/p99 latency explicit in the workflow: watch tail latency, queueing, retries, and error budgets.
- D. Keep average latency only as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.
- Why D is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.

### Q10: An automotive support team has a production-readiness review for a monitored LLM service. The review is focused on canary monitoring, because the system must compare quality, safety, cost, and latency during rollout. Which implementation path is most appropriate?
- ID: genl-hf-production-monitoring-and-reliability-042
- Domain: Production Monitoring and Reliability
- Topic: canary monitoring; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated canary monitoring check.
- B. Use canary monitoring as the control boundary and require the system to compare quality, safety, cost, and latency during rollout.
- C. Prioritize load shedding before validating the failure signal around canary monitoring.
- D. Bundle canary monitoring, drift detection, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.

### Q11: A bank fraud team is reviewing a monitored LLM service before rollout. The main risk is fallback policy: the system must route around unhealthy models or tools with trace evidence. Which option keeps the decision at the right layer?
- ID: genl-hf-production-monitoring-and-reliability-043
- Domain: Production Monitoring and Reliability
- Topic: fallback policy; genai_llms_professional
- Difficulty: hard
- A. Add a release gate for fallback policy: route around unhealthy models or tools with trace evidence.
- B. Bundle fallback policy, load shedding, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated fallback policy check.
- D. Use load shedding as the main gate even though reviewers are asking for fallback policy evidence.
- Answer: A
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.

### Q12: A global retailer has a production-readiness review for a model-capability design. The review is focused on self-attention, because the system must let tokens attend to context and long-range dependencies. Which control should be added before rollout?
- ID: genl-hf-llm-architecture-001
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- A. Make self-attention explicit in the workflow: let tokens attend to context and long-range dependencies.
- B. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- C. Prioritize rerankers before validating the failure signal around self-attention.
- D. Bundle self-attention, embedding models, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why B is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.

### Q13: An insurance claims group is reviewing a model-capability design before rollout. The main risk is causal masking: the system must prevent decoder positions from seeing future tokens. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-002
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- A. Prioritize embedding models before validating the failure signal around causal masking.
- B. Bundle causal masking, rerankers, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated causal masking check.
- D. Use causal masking as the control boundary and require the system to prevent decoder positions from seeing future tokens.
- Answer: D
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.

### Q14: A cybersecurity response team is comparing two release designs for a model-capability design. One design centers on all experts active for every token; the other adds a measurable MoE routing step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-003
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated MoE routing check.
- B. Use self-attention as the main gate even though reviewers are asking for MoE routing evidence.
- C. Add a release gate for MoE routing: activate sparse experts to increase capacity without full dense compute.
- D. Bundle MoE routing, self-attention, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.

### Q15: A public-sector casework team sees capability limits tied to embedding models. The team has been using using a chat model endpoint for vector search; the next change needs to make embedding models explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-004
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- B. Change the design around embedding models so the system can produce vector representations for retrieval and similarity.
- C. Wait for production incidents before adding a dedicated embedding models check.
- D. Use causal masking as the main gate even though reviewers are asking for embedding models evidence.
- Answer: B
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why C is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q16: A telecom network operations team is reviewing a model-capability design before rollout. The main risk is rerankers: the system must rescore retrieved candidates for relevance before generation. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-005
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: easy
- A. Make rerankers explicit in the workflow: rescore retrieved candidates for relevance before generation.
- B. Use MoE routing as the main gate even though reviewers are asking for rerankers evidence.
- C. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- D. Prioritize embedding models before validating the failure signal around rerankers.
- Answer: A
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why C is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q17: A pharmaceutical research team is preparing a model-capability design for release. The current design relies on recurrence as the transformer core, but the release gate needs to let tokens attend to context and long-range dependencies. Which design is the best first change?
- ID: genl-hf-llm-architecture-006
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- A. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- B. Prioritize embedding models before validating the failure signal around self-attention.
- C. Bundle self-attention, rerankers, and prompt changes into one release with one aggregate score.
- D. Use self-attention as the control boundary and require the system to let tokens attend to context and long-range dependencies.
- Answer: D
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.

### Q18: A bank fraud team sees capability limits tied to causal masking. The team has been using bidirectional attention for generation; the next change needs to make causal masking explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-007
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: expert
- A. Bundle causal masking, self-attention, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated causal masking check.
- C. Add a release gate for causal masking: prevent decoder positions from seeing future tokens.
- D. Prioritize MoE routing before validating the failure signal around causal masking.
- Answer: C
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.

### Q19: A manufacturing quality team is reviewing a model-capability design before rollout. The main risk is MoE routing: the system must activate sparse experts to increase capacity without full dense compute. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-008
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: medium
- A. Use causal masking as the main gate even though reviewers are asking for MoE routing evidence.
- B. Change the design around MoE routing so the system can activate sparse experts to increase capacity without full dense compute.
- C. Bundle MoE routing, causal masking, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated MoE routing check.
- Answer: B
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.

### Q20: A telecom network operations team is preparing a model-capability design for release. The current design relies on using a chat model endpoint for vector search, but the release gate needs to produce vector representations for retrieval and similarity. Which architecture keeps the boundary cleanest?
- ID: genl-hf-llm-architecture-009
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Make embedding models explicit in the workflow: produce vector representations for retrieval and similarity.
- B. Wait for production incidents before adding a dedicated embedding models check.
- C. Use MoE routing as the main gate even though reviewers are asking for embedding models evidence.
- D. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why B is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why D is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.

### Q21: An insurance claims group is preparing a model-capability design for release. The current design relies on embedding similarity as the final answer, but the release gate needs to rescore retrieved candidates for relevance before generation. Which design is the best first change?
- ID: genl-hf-llm-architecture-010
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- A. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- B. Prioritize MoE routing before validating the failure signal around rerankers.
- C. Use rerankers as the control boundary and require the system to rescore retrieved candidates for relevance before generation.
- D. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- Answer: C
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q22: A hospital operations team sees capability limits tied to self-attention. The team has been using recurrence as the transformer core; the next change needs to make self-attention explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-011
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- A. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- B. Prioritize embedding models before validating the failure signal around self-attention.
- C. Bundle self-attention, rerankers, and prompt changes into one release with one aggregate score.
- D. Add a release gate for self-attention: let tokens attend to context and long-range dependencies.
- Answer: D
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.

### Q23: A semiconductor design group sees capability limits tied to causal masking. The team has been using bidirectional attention for generation; the next change needs to make causal masking explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-012
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- A. Change the design around causal masking so the system can prevent decoder positions from seeing future tokens.
- B. Prioritize rerankers before validating the failure signal around causal masking.
- C. Bundle causal masking, embedding models, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated causal masking check.
- Answer: A
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why B is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.

### Q24: A pharmaceutical research team is preparing a model-capability design for release. The current design relies on all experts active for every token, but the release gate needs to activate sparse experts to increase capacity without full dense compute. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-013
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- A. Use causal masking as the main gate even though reviewers are asking for MoE routing evidence.
- B. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- C. Bundle MoE routing, causal masking, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated MoE routing check.
- Answer: B
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.

### Q25: A global retailer has a production-readiness review for a model-capability design. The review is focused on embedding models, because the system must produce vector representations for retrieval and similarity. Which action best fits the requirement?
- ID: genl-hf-llm-architecture-014
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Use self-attention as the main gate even though reviewers are asking for embedding models evidence.
- B. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- C. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- D. Wait for production incidents before adding a dedicated embedding models check.
- Answer: C
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why B is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why D is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.

### Q26: A manufacturing quality team sees capability limits tied to rerankers. The team has been using embedding similarity as the final answer; the next change needs to make rerankers explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-015
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: medium
- A. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- B. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- C. Prioritize MoE routing before validating the failure signal around rerankers.
- D. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- Answer: D
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why B is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q27: A cybersecurity response team is comparing two release designs for a model-capability design. One design centers on recurrence as the transformer core; the other adds a measurable self-attention step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-016
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- A. Change the design around self-attention so the system can let tokens attend to context and long-range dependencies.
- B. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- C. Prioritize rerankers before validating the failure signal around self-attention.
- D. Bundle self-attention, embedding models, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why B is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.

### Q28: An insurance claims group is preparing a model-capability design for release. The current design relies on bidirectional attention for generation, but the release gate needs to prevent decoder positions from seeing future tokens. Which design is the best first change?
- ID: genl-hf-llm-architecture-017
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated causal masking check.
- B. Make causal masking explicit in the workflow: prevent decoder positions from seeing future tokens.
- C. Prioritize self-attention before validating the failure signal around causal masking.
- D. Bundle causal masking, MoE routing, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.

### Q29: A global retailer sees capability limits tied to MoE routing. The team has been using all experts active for every token; the next change needs to make MoE routing explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-018
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated MoE routing check.
- B. Use self-attention as the main gate even though reviewers are asking for MoE routing evidence.
- C. Use MoE routing as the control boundary and require the system to activate sparse experts to increase capacity without full dense compute.
- D. Bundle MoE routing, self-attention, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.

### Q30: A hospital operations team has a production-readiness review for a model-capability design. The review is focused on embedding models, because the system must produce vector representations for retrieval and similarity. Which implementation path is most appropriate?
- ID: genl-hf-llm-architecture-019
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated embedding models check.
- B. Use rerankers as the main gate even though reviewers are asking for embedding models evidence.
- C. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- D. Add a release gate for embedding models: produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why C is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.

### Q31: A semiconductor design group is reviewing a model-capability design before rollout. The main risk is rerankers: the system must rescore retrieved candidates for relevance before generation. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-020
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- A. Use MoE routing as the main gate even though reviewers are asking for rerankers evidence.
- B. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- C. Prioritize embedding models before validating the failure signal around rerankers.
- D. Change the design around rerankers so the system can rescore retrieved candidates for relevance before generation.
- Answer: D
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why B is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q32: A bank fraud team has a production-readiness review for a model-capability design. The review is focused on self-attention, because the system must let tokens attend to context and long-range dependencies. Which action best fits the requirement?
- ID: genl-hf-llm-architecture-021
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- A. Prioritize rerankers before validating the failure signal around self-attention.
- B. Bundle self-attention, embedding models, and prompt changes into one release with one aggregate score.
- C. Make self-attention explicit in the workflow: let tokens attend to context and long-range dependencies.
- D. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.
- Why D is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.

### Q33: A manufacturing quality team is preparing a model-capability design for release. The current design relies on bidirectional attention for generation, but the release gate needs to prevent decoder positions from seeing future tokens. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-022
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated causal masking check.
- B. Use causal masking as the control boundary and require the system to prevent decoder positions from seeing future tokens.
- C. Prioritize embedding models before validating the failure signal around causal masking.
- D. Bundle causal masking, rerankers, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.

### Q34: A telecom network operations team is preparing a model-capability design for release. The current design relies on all experts active for every token, but the release gate needs to activate sparse experts to increase capacity without full dense compute. Which architecture keeps the boundary cleanest?
- ID: genl-hf-llm-architecture-023
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- A. Add a release gate for MoE routing: activate sparse experts to increase capacity without full dense compute.
- B. Bundle MoE routing, self-attention, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated MoE routing check.
- D. Use self-attention as the main gate even though reviewers are asking for MoE routing evidence.
- Answer: A
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q35: A pharmaceutical research team is comparing two release designs for a model-capability design. One design centers on using a chat model endpoint for vector search; the other adds a measurable embedding models step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-024
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated embedding models check.
- B. Use causal masking as the main gate even though reviewers are asking for embedding models evidence.
- C. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- D. Change the design around embedding models so the system can produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why C is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.

### Q36: A cybersecurity response team sees capability limits tied to rerankers. The team has been using embedding similarity as the final answer; the next change needs to make rerankers explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-025
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: easy
- A. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- B. Prioritize embedding models before validating the failure signal around rerankers.
- C. Make rerankers explicit in the workflow: rescore retrieved candidates for relevance before generation.
- D. Use MoE routing as the main gate even though reviewers are asking for rerankers evidence.
- Answer: C
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q37: A public-sector casework team is preparing a model-capability design for release. The current design relies on recurrence as the transformer core, but the release gate needs to let tokens attend to context and long-range dependencies. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-026
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- A. Bundle self-attention, rerankers, and prompt changes into one release with one aggregate score.
- B. Use self-attention as the control boundary and require the system to let tokens attend to context and long-range dependencies.
- C. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- D. Prioritize embedding models before validating the failure signal around self-attention.
- Answer: B
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.
- Why C is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.

### Q38: A global retailer is comparing two release designs for a model-capability design. One design centers on bidirectional attention for generation; the other adds a measurable causal masking step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-027
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: expert
- A. Add a release gate for causal masking: prevent decoder positions from seeing future tokens.
- B. Prioritize MoE routing before validating the failure signal around causal masking.
- C. Bundle causal masking, self-attention, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated causal masking check.
- Answer: A
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why B is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.

### Q39: An insurance claims group sees capability limits tied to MoE routing. The team has been using all experts active for every token; the next change needs to make MoE routing explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-028
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: medium
- A. Bundle MoE routing, causal masking, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated MoE routing check.
- C. Use causal masking as the main gate even though reviewers are asking for MoE routing evidence.
- D. Change the design around MoE routing so the system can activate sparse experts to increase capacity without full dense compute.
- Answer: D
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q40: A bank fraud team is reviewing a model-capability design before rollout. The main risk is embedding models: the system must produce vector representations for retrieval and similarity. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-029
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Use MoE routing as the main gate even though reviewers are asking for embedding models evidence.
- B. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- C. Make embedding models explicit in the workflow: produce vector representations for retrieval and similarity.
- D. Wait for production incidents before adding a dedicated embedding models check.
- Answer: C
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why B is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why D is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.

### Q41: A public-sector casework team is reviewing a model-capability design before rollout. The main risk is rerankers: the system must rescore retrieved candidates for relevance before generation. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-030
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- A. Use rerankers as the control boundary and require the system to rescore retrieved candidates for relevance before generation.
- B. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- C. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- D. Prioritize MoE routing before validating the failure signal around rerankers.
- Answer: A
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why B is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why C is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q42: A pharmaceutical research team has a production-readiness review for a model-capability design. The review is focused on self-attention, because the system must let tokens attend to context and long-range dependencies. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-031
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- A. Bundle self-attention, MoE routing, and prompt changes into one release with one aggregate score.
- B. Add a release gate for self-attention: let tokens attend to context and long-range dependencies.
- C. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- D. Prioritize causal masking before validating the failure signal around self-attention.
- Answer: B
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.
- Why C is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.

### Q43: A global retailer is reviewing a model-capability design before rollout. The main risk is causal masking: the system must prevent decoder positions from seeing future tokens. Which option keeps the decision at the right layer?
- ID: genl-hf-llm-architecture-032
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- A. Bundle causal masking, self-attention, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated causal masking check.
- C. Change the design around causal masking so the system can prevent decoder positions from seeing future tokens.
- D. Prioritize MoE routing before validating the failure signal around causal masking.
- Answer: C
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.

### Q44: A manufacturing quality team sees capability limits tied to MoE routing. The team has been using all experts active for every token; the next change needs to make MoE routing explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-033
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- A. Bundle MoE routing, rerankers, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated MoE routing check.
- C. Use rerankers as the main gate even though reviewers are asking for MoE routing evidence.
- D. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- Answer: D
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q45: A bank fraud team is comparing two release designs for a model-capability design. One design centers on using a chat model endpoint for vector search; the other adds a measurable embedding models step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-034
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- B. Wait for production incidents before adding a dedicated embedding models check.
- C. Use MoE routing as the main gate even though reviewers are asking for embedding models evidence.
- D. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why B is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why D is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.

### Q46: An insurance claims group is comparing two release designs for a model-capability design. One design centers on embedding similarity as the final answer; the other adds a measurable rerankers step. Which design is more appropriate for production?
- ID: genl-hf-llm-architecture-035
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: medium
- A. Prioritize self-attention before validating the failure signal around rerankers.
- B. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- C. Use causal masking as the main gate even though reviewers are asking for rerankers evidence.
- D. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.

### Q47: A global retailer has a production-readiness review for a model-capability design. The review is focused on self-attention, because the system must let tokens attend to context and long-range dependencies. Which architecture keeps the boundary cleanest?
- ID: genl-hf-llm-architecture-036
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- A. Prioritize MoE routing before validating the failure signal around self-attention.
- B. Bundle self-attention, causal masking, and prompt changes into one release with one aggregate score.
- C. Change the design around self-attention so the system can let tokens attend to context and long-range dependencies.
- D. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why A is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.
- Why D is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.

### Q48: A public-sector casework team has a production-readiness review for a model-capability design. The review is focused on causal masking, because the system must prevent decoder positions from seeing future tokens. Which design is the best first change?
- ID: genl-hf-llm-architecture-037
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: hard
- A. Prioritize embedding models before validating the failure signal around causal masking.
- B. Bundle causal masking, rerankers, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated causal masking check.
- D. Make causal masking explicit in the workflow: prevent decoder positions from seeing future tokens.
- Answer: D
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.

### Q49: A semiconductor design group has a production-readiness review for a model-capability design. The review is focused on MoE routing, because the system must activate sparse experts to increase capacity without full dense compute. Which control should be added before rollout?
- ID: genl-hf-llm-architecture-038
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: expert
- A. Use MoE routing as the control boundary and require the system to activate sparse experts to increase capacity without full dense compute.
- B. Bundle MoE routing, embedding models, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated MoE routing check.
- D. Use embedding models as the main gate even though reviewers are asking for MoE routing evidence.
- Answer: A
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q50: An insurance claims group is preparing a model-capability design for release. The current design relies on using a chat model endpoint for vector search, but the release gate needs to produce vector representations for retrieval and similarity. Which implementation path is most appropriate?
- ID: genl-hf-llm-architecture-039
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: medium
- A. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- B. Add a release gate for embedding models: produce vector representations for retrieval and similarity.
- C. Wait for production incidents before adding a dedicated embedding models check.
- D. Use causal masking as the main gate even though reviewers are asking for embedding models evidence.
- Answer: B
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why C is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q51: A global retailer is preparing a model-capability design for release. The current design relies on embedding similarity as the final answer, but the release gate needs to rescore retrieved candidates for relevance before generation. Which control should be added before rollout?
- ID: genl-hf-llm-architecture-040
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- A. Prioritize causal masking before validating the failure signal around rerankers.
- B. Change the design around rerankers so the system can rescore retrieved candidates for relevance before generation.
- C. Use self-attention as the main gate even though reviewers are asking for rerankers evidence.
- D. Keep embedding similarity as the final answer as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about rerankers. The strongest answer fixes the failing layer directly: rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why D is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.

### Q52: A logistics planning team sees capability limits tied to self-attention. The team has been using recurrence as the transformer core; the next change needs to make self-attention explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-041
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- A. Make self-attention explicit in the workflow: let tokens attend to context and long-range dependencies.
- B. Keep recurrence as the transformer core as the primary release control and record only final outputs.
- C. Prioritize MoE routing before validating the failure signal around self-attention.
- D. Bundle self-attention, causal masking, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about self-attention. The strongest answer fixes the failing layer directly: let tokens attend to context and long-range dependencies.
- Why B is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether self-attention fixed or caused the failure.

### Q53: An automotive support team has a production-readiness review for a model-capability design. The review is focused on causal masking, because the system must prevent decoder positions from seeing future tokens. Which implementation path is most appropriate?
- ID: genl-hf-llm-architecture-042
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- A. Prioritize self-attention before validating the failure signal around causal masking.
- B. Bundle causal masking, MoE routing, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated causal masking check.
- D. Use causal masking as the control boundary and require the system to prevent decoder positions from seeing future tokens.
- Answer: D
- Explanation: The scenario is about causal masking. The strongest answer fixes the failing layer directly: prevent decoder positions from seeing future tokens.
- Why A is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether causal masking fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the causal masking gate until after users are exposed.

### Q54: A cybersecurity response team is preparing a model-capability design for release. The current design relies on all experts active for every token, but the release gate needs to activate sparse experts to increase capacity without full dense compute. Which architecture keeps the boundary cleanest?
- ID: genl-hf-llm-architecture-043
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated MoE routing check.
- B. Use embedding models as the main gate even though reviewers are asking for MoE routing evidence.
- C. Add a release gate for MoE routing: activate sparse experts to increase capacity without full dense compute.
- D. Bundle MoE routing, embedding models, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about MoE routing. The strongest answer fixes the failing layer directly: activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Waiting for incidents postpones the MoE routing gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether MoE routing fixed or caused the failure.

### Q55: A manufacturing quality team sees capability limits tied to embedding models. The team has been using using a chat model endpoint for vector search; the next change needs to make embedding models explicit. Which action best addresses the problem?
- ID: genl-hf-llm-architecture-044
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- A. Keep using a chat model endpoint for vector search as the primary release control and record only final outputs.
- B. Change the design around embedding models so the system can produce vector representations for retrieval and similarity.
- C. Wait for production incidents before adding a dedicated embedding models check.
- D. Use rerankers as the main gate even though reviewers are asking for embedding models evidence.
- Answer: B
- Explanation: The scenario is about embedding models. The strongest answer fixes the failing layer directly: produce vector representations for retrieval and similarity.
- Why A is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why C is wrong: Waiting for incidents postpones the embedding models gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q56: A global retailer is comparing two release designs for a governed agent workflow. One design centers on treating open weights as unrestricted use; the other adds a measurable license constraints step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-001
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- A. Prioritize bias evaluation before validating the failure signal around license constraints.
- B. Bundle license constraints, privacy controls, and prompt changes into one release with one aggregate score.
- C. Make license constraints explicit in the workflow: respect model, dataset, and output-use restrictions.
- D. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.
- Why D is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.

### Q57: An automotive support team is comparing two release designs for a governed agent workflow. One design centers on training on raw confidential logs; the other adds a measurable privacy controls step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-002
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated privacy controls check.
- B. Use privacy controls as the control boundary and require the system to redact sensitive data and enforce retention limits.
- C. Prioritize auditability before validating the failure signal around privacy controls.
- D. Bundle privacy controls, guardrails, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.

### Q58: A bank fraud team is comparing two release designs for a governed agent workflow. One design centers on overall accuracy only; the other adds a measurable bias evaluation step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-003
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- A. Add a release gate for bias evaluation: measure subgroup performance and harmful outputs.
- B. Bundle bias evaluation, license constraints, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bias evaluation check.
- D. Use license constraints as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: A
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q59: A public-sector casework team has a production-readiness review for a governed agent workflow. The review is focused on guardrails, because the system must apply input/output and tool-use policies around the model. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-004
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated guardrails check.
- B. Use license constraints as the main gate even though reviewers are asking for guardrails evidence.
- C. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- D. Change the design around guardrails so the system can apply input/output and tool-use policies around the model.
- Answer: D
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q60: A global retailer is preparing a governed agent workflow for release. The current design relies on unversioned release artifacts, but the release gate needs to track data, model, prompt, eval, and approval lineage. Which architecture keeps the boundary cleanest?
- ID: genl-hf-safety-ethics-and-compliance-005
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Keep unversioned release artifacts as the primary release control and record only final outputs.
- B. Prioritize privacy controls before validating the failure signal around auditability.
- C. Make auditability explicit in the workflow: track data, model, prompt, eval, and approval lineage.
- D. Use license constraints as the main gate even though reviewers are asking for auditability evidence.
- Answer: C
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q61: An insurance claims group is comparing two release designs for a governed agent workflow. One design centers on treating open weights as unrestricted use; the other adds a measurable license constraints step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-006
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: easy
- A. Bundle license constraints, bias evaluation, and prompt changes into one release with one aggregate score.
- B. Use license constraints as the control boundary and require the system to respect model, dataset, and output-use restrictions.
- C. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- D. Prioritize privacy controls before validating the failure signal around license constraints.
- Answer: B
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.
- Why C is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.

### Q62: A bank fraud team is reviewing a governed agent workflow before rollout. The main risk is privacy controls: the system must redact sensitive data and enforce retention limits. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-007
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- A. Add a release gate for privacy controls: redact sensitive data and enforce retention limits.
- B. Prioritize license constraints before validating the failure signal around privacy controls.
- C. Bundle privacy controls, bias evaluation, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated privacy controls check.
- Answer: A
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why B is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.

### Q63: A manufacturing quality team has a production-readiness review for a governed agent workflow. The review is focused on bias evaluation, because the system must measure subgroup performance and harmful outputs. Which design is the best first change?
- ID: genl-hf-safety-ethics-and-compliance-008
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: expert
- A. Bundle bias evaluation, privacy controls, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated bias evaluation check.
- C. Use privacy controls as the main gate even though reviewers are asking for bias evaluation evidence.
- D. Change the design around bias evaluation so the system can measure subgroup performance and harmful outputs.
- Answer: D
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q64: A logistics planning team is comparing two release designs for a governed agent workflow. One design centers on guardrails as a replacement for IAM; the other adds a measurable guardrails step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-009
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: medium
- A. Use auditability as the main gate even though reviewers are asking for guardrails evidence.
- B. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- C. Make guardrails explicit in the workflow: apply input/output and tool-use policies around the model.
- D. Wait for production incidents before adding a dedicated guardrails check.
- Answer: C
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why B is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.
- Why D is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.

### Q65: An automotive support team is preparing a governed agent workflow for release. The current design relies on unversioned release artifacts, but the release gate needs to track data, model, prompt, eval, and approval lineage. Which choice addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-010
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Use auditability as the control boundary and require the system to track data, model, prompt, eval, and approval lineage.
- B. Use privacy controls as the main gate even though reviewers are asking for auditability evidence.
- C. Keep unversioned release artifacts as the primary release control and record only final outputs.
- D. Prioritize license constraints before validating the failure signal around auditability.
- Answer: A
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why C is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q66: A hospital operations team has a production-readiness review for a governed agent workflow. The review is focused on license constraints, because the system must respect model, dataset, and output-use restrictions. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-011
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- A. Bundle license constraints, bias evaluation, and prompt changes into one release with one aggregate score.
- B. Add a release gate for license constraints: respect model, dataset, and output-use restrictions.
- C. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- D. Prioritize privacy controls before validating the failure signal around license constraints.
- Answer: B
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.
- Why C is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.

### Q67: A semiconductor design group is preparing a governed agent workflow for release. The current design relies on training on raw confidential logs, but the release gate needs to redact sensitive data and enforce retention limits. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-012
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- A. Bundle privacy controls, bias evaluation, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated privacy controls check.
- C. Change the design around privacy controls so the system can redact sensitive data and enforce retention limits.
- D. Prioritize license constraints before validating the failure signal around privacy controls.
- Answer: C
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.

### Q68: An automotive support team sees policy failures that need bias evaluation as an explicit control. The team has been using overall accuracy only; the next change needs to make bias evaluation explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-013
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- A. Bundle bias evaluation, privacy controls, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated bias evaluation check.
- C. Use privacy controls as the main gate even though reviewers are asking for bias evaluation evidence.
- D. Make bias evaluation explicit in the workflow: measure subgroup performance and harmful outputs.
- Answer: D
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q69: A logistics planning team has a production-readiness review for a governed agent workflow. The review is focused on guardrails, because the system must apply input/output and tool-use policies around the model. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-014
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- A. Use guardrails as the control boundary and require the system to apply input/output and tool-use policies around the model.
- B. Wait for production incidents before adding a dedicated guardrails check.
- C. Use auditability as the main gate even though reviewers are asking for guardrails evidence.
- D. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why B is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why D is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q70: A manufacturing quality team is reviewing a governed agent workflow before rollout. The main risk is auditability: the system must track data, model, prompt, eval, and approval lineage. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-015
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Prioritize license constraints before validating the failure signal around auditability.
- B. Add a release gate for auditability: track data, model, prompt, eval, and approval lineage.
- C. Use privacy controls as the main gate even though reviewers are asking for auditability evidence.
- D. Keep unversioned release artifacts as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.

### Q71: A bank fraud team is comparing two release designs for a governed agent workflow. One design centers on treating open weights as unrestricted use; the other adds a measurable license constraints step. Which design is more appropriate for production?
- ID: genl-hf-safety-ethics-and-compliance-016
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: medium
- A. Prioritize bias evaluation before validating the failure signal around license constraints.
- B. Bundle license constraints, privacy controls, and prompt changes into one release with one aggregate score.
- C. Change the design around license constraints so the system can respect model, dataset, and output-use restrictions.
- D. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.
- Why D is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.

### Q72: An automotive support team sees policy failures that need privacy controls as an explicit control. The team has been using training on raw confidential logs; the next change needs to make privacy controls explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-017
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- A. Prioritize auditability before validating the failure signal around privacy controls.
- B. Bundle privacy controls, guardrails, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated privacy controls check.
- D. Make privacy controls explicit in the workflow: redact sensitive data and enforce retention limits.
- Answer: D
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.

### Q73: A global retailer is reviewing a governed agent workflow before rollout. The main risk is bias evaluation: the system must measure subgroup performance and harmful outputs. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-018
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: hard
- A. Use bias evaluation as the control boundary and require the system to measure subgroup performance and harmful outputs.
- B. Bundle bias evaluation, license constraints, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bias evaluation check.
- D. Use license constraints as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: A
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q74: A public-sector casework team is preparing a governed agent workflow for release. The current design relies on guardrails as a replacement for IAM, but the release gate needs to apply input/output and tool-use policies around the model. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-019
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: expert
- A. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- B. Add a release gate for guardrails: apply input/output and tool-use policies around the model.
- C. Wait for production incidents before adding a dedicated guardrails check.
- D. Use license constraints as the main gate even though reviewers are asking for guardrails evidence.
- Answer: B
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.
- Why C is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.

### Q75: A bank fraud team has a production-readiness review for a governed agent workflow. The review is focused on auditability, because the system must track data, model, prompt, eval, and approval lineage. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-020
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: medium
- A. Prioritize privacy controls before validating the failure signal around auditability.
- B. Change the design around auditability so the system can track data, model, prompt, eval, and approval lineage.
- C. Use license constraints as the main gate even though reviewers are asking for auditability evidence.
- D. Keep unversioned release artifacts as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.

### Q76: A bank fraud team is preparing a governed agent workflow for release. The current design relies on treating open weights as unrestricted use, but the release gate needs to respect model, dataset, and output-use restrictions. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-021
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- A. Make license constraints explicit in the workflow: respect model, dataset, and output-use restrictions.
- B. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- C. Prioritize bias evaluation before validating the failure signal around license constraints.
- D. Bundle license constraints, privacy controls, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why B is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.

### Q77: A manufacturing quality team has a production-readiness review for a governed agent workflow. The review is focused on privacy controls, because the system must redact sensitive data and enforce retention limits. Which choice addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-022
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- A. Prioritize bias evaluation before validating the failure signal around privacy controls.
- B. Bundle privacy controls, license constraints, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated privacy controls check.
- D. Use privacy controls as the control boundary and require the system to redact sensitive data and enforce retention limits.
- Answer: D
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.

### Q78: A telecom network operations team is preparing a governed agent workflow for release. The current design relies on overall accuracy only, but the release gate needs to measure subgroup performance and harmful outputs. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-023
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated bias evaluation check.
- B. Use license constraints as the main gate even though reviewers are asking for bias evaluation evidence.
- C. Add a release gate for bias evaluation: measure subgroup performance and harmful outputs.
- D. Bundle bias evaluation, license constraints, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.

### Q79: An insurance claims group sees policy failures that need guardrails as an explicit control. The team has been using guardrails as a replacement for IAM; the next change needs to make guardrails explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-024
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- A. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- B. Change the design around guardrails so the system can apply input/output and tool-use policies around the model.
- C. Wait for production incidents before adding a dedicated guardrails check.
- D. Use bias evaluation as the main gate even though reviewers are asking for guardrails evidence.
- Answer: B
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.
- Why C is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.

### Q80: A semiconductor design group has a production-readiness review for a governed agent workflow. The review is focused on auditability, because the system must track data, model, prompt, eval, and approval lineage. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-025
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Make auditability explicit in the workflow: track data, model, prompt, eval, and approval lineage.
- B. Use license constraints as the main gate even though reviewers are asking for auditability evidence.
- C. Keep unversioned release artifacts as the primary release control and record only final outputs.
- D. Prioritize privacy controls before validating the failure signal around auditability.
- Answer: A
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why C is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q81: A hospital operations team has a production-readiness review for a governed agent workflow. The review is focused on license constraints, because the system must respect model, dataset, and output-use restrictions. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-026
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: easy
- A. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- B. Prioritize privacy controls before validating the failure signal around license constraints.
- C. Bundle license constraints, bias evaluation, and prompt changes into one release with one aggregate score.
- D. Use license constraints as the control boundary and require the system to respect model, dataset, and output-use restrictions.
- Answer: D
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.

### Q82: A telecom network operations team is preparing a governed agent workflow for release. The current design relies on training on raw confidential logs, but the release gate needs to redact sensitive data and enforce retention limits. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-027
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- A. Bundle privacy controls, auditability, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated privacy controls check.
- C. Add a release gate for privacy controls: redact sensitive data and enforce retention limits.
- D. Prioritize guardrails before validating the failure signal around privacy controls.
- Answer: C
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.

### Q83: A pharmaceutical research team is preparing a governed agent workflow for release. The current design relies on overall accuracy only, but the release gate needs to measure subgroup performance and harmful outputs. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-028
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: expert
- A. Use privacy controls as the main gate even though reviewers are asking for bias evaluation evidence.
- B. Change the design around bias evaluation so the system can measure subgroup performance and harmful outputs.
- C. Bundle bias evaluation, privacy controls, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated bias evaluation check.
- Answer: B
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.

### Q84: A cybersecurity response team is reviewing a governed agent workflow before rollout. The main risk is guardrails: the system must apply input/output and tool-use policies around the model. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-029
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: medium
- A. Make guardrails explicit in the workflow: apply input/output and tool-use policies around the model.
- B. Wait for production incidents before adding a dedicated guardrails check.
- C. Use privacy controls as the main gate even though reviewers are asking for guardrails evidence.
- D. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why B is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why D is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q85: A public-sector casework team is preparing a governed agent workflow for release. The current design relies on unversioned release artifacts, but the release gate needs to track data, model, prompt, eval, and approval lineage. Which design is the best first change?
- ID: genl-hf-safety-ethics-and-compliance-030
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Keep unversioned release artifacts as the primary release control and record only final outputs.
- B. Prioritize license constraints before validating the failure signal around auditability.
- C. Use auditability as the control boundary and require the system to track data, model, prompt, eval, and approval lineage.
- D. Use privacy controls as the main gate even though reviewers are asking for auditability evidence.
- Answer: C
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q86: A pharmaceutical research team sees policy failures that need license constraints as an explicit control. The team has been using treating open weights as unrestricted use; the next change needs to make license constraints explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-031
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- A. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- B. Prioritize guardrails before validating the failure signal around license constraints.
- C. Bundle license constraints, auditability, and prompt changes into one release with one aggregate score.
- D. Add a release gate for license constraints: respect model, dataset, and output-use restrictions.
- Answer: D
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.

### Q87: A telecom network operations team is preparing a governed agent workflow for release. The current design relies on training on raw confidential logs, but the release gate needs to redact sensitive data and enforce retention limits. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-032
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- A. Change the design around privacy controls so the system can redact sensitive data and enforce retention limits.
- B. Prioritize guardrails before validating the failure signal around privacy controls.
- C. Bundle privacy controls, auditability, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated privacy controls check.
- Answer: A
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why B is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.

### Q88: A hospital operations team sees policy failures that need bias evaluation as an explicit control. The team has been using overall accuracy only; the next change needs to make bias evaluation explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-033
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- A. Use auditability as the main gate even though reviewers are asking for bias evaluation evidence.
- B. Make bias evaluation explicit in the workflow: measure subgroup performance and harmful outputs.
- C. Bundle bias evaluation, auditability, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated bias evaluation check.
- Answer: B
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.

### Q89: A cybersecurity response team is reviewing a governed agent workflow before rollout. The main risk is guardrails: the system must apply input/output and tool-use policies around the model. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-034
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- A. Use privacy controls as the main gate even though reviewers are asking for guardrails evidence.
- B. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- C. Use guardrails as the control boundary and require the system to apply input/output and tool-use policies around the model.
- D. Wait for production incidents before adding a dedicated guardrails check.
- Answer: C
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why B is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.
- Why D is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.

### Q90: A pharmaceutical research team sees policy failures that need auditability as an explicit control. The team has been using unversioned release artifacts; the next change needs to make auditability explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-035
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Use guardrails as the main gate even though reviewers are asking for auditability evidence.
- B. Keep unversioned release artifacts as the primary release control and record only final outputs.
- C. Prioritize bias evaluation before validating the failure signal around auditability.
- D. Add a release gate for auditability: track data, model, prompt, eval, and approval lineage.
- Answer: D
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why B is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q91: A telecom network operations team is reviewing a governed agent workflow before rollout. The main risk is license constraints: the system must respect model, dataset, and output-use restrictions. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-036
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: medium
- A. Change the design around license constraints so the system can respect model, dataset, and output-use restrictions.
- B. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- C. Prioritize auditability before validating the failure signal around license constraints.
- D. Bundle license constraints, guardrails, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why B is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.

### Q92: A hospital operations team is reviewing a governed agent workflow before rollout. The main risk is privacy controls: the system must redact sensitive data and enforce retention limits. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-037
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated privacy controls check.
- B. Make privacy controls explicit in the workflow: redact sensitive data and enforce retention limits.
- C. Prioritize bias evaluation before validating the failure signal around privacy controls.
- D. Bundle privacy controls, license constraints, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.

### Q93: A bank fraud team has a production-readiness review for a governed agent workflow. The review is focused on bias evaluation, because the system must measure subgroup performance and harmful outputs. Which architecture keeps the boundary cleanest?
- ID: genl-hf-safety-ethics-and-compliance-038
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated bias evaluation check.
- B. Use guardrails as the main gate even though reviewers are asking for bias evaluation evidence.
- C. Use bias evaluation as the control boundary and require the system to measure subgroup performance and harmful outputs.
- D. Bundle bias evaluation, guardrails, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why A is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.

### Q94: An insurance claims group is reviewing a governed agent workflow before rollout. The main risk is guardrails: the system must apply input/output and tool-use policies around the model. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-039
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated guardrails check.
- B. Use bias evaluation as the main gate even though reviewers are asking for guardrails evidence.
- C. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- D. Add a release gate for guardrails: apply input/output and tool-use policies around the model.
- Answer: D
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q95: A global retailer is preparing a governed agent workflow for release. The current design relies on unversioned release artifacts, but the release gate needs to track data, model, prompt, eval, and approval lineage. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-040
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: medium
- A. Use bias evaluation as the main gate even though reviewers are asking for auditability evidence.
- B. Keep unversioned release artifacts as the primary release control and record only final outputs.
- C. Prioritize guardrails before validating the failure signal around auditability.
- D. Change the design around auditability so the system can track data, model, prompt, eval, and approval lineage.
- Answer: D
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why B is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q96: A logistics planning team has a production-readiness review for a governed agent workflow. The review is focused on license constraints, because the system must respect model, dataset, and output-use restrictions. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-041
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- A. Prioritize auditability before validating the failure signal around license constraints.
- B. Bundle license constraints, guardrails, and prompt changes into one release with one aggregate score.
- C. Make license constraints explicit in the workflow: respect model, dataset, and output-use restrictions.
- D. Keep treating open weights as unrestricted use as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about license constraints. The strongest answer fixes the failing layer directly: respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether license constraints fixed or caused the failure.
- Why D is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.

### Q97: An automotive support team is reviewing a governed agent workflow before rollout. The main risk is privacy controls: the system must redact sensitive data and enforce retention limits. Which option keeps the decision at the right layer?
- ID: genl-hf-safety-ethics-and-compliance-042
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated privacy controls check.
- B. Use privacy controls as the control boundary and require the system to redact sensitive data and enforce retention limits.
- C. Prioritize auditability before validating the failure signal around privacy controls.
- D. Bundle privacy controls, guardrails, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about privacy controls. The strongest answer fixes the failing layer directly: redact sensitive data and enforce retention limits.
- Why A is wrong: Waiting for incidents postpones the privacy controls gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether privacy controls fixed or caused the failure.

### Q98: A semiconductor design group sees policy failures that need bias evaluation as an explicit control. The team has been using overall accuracy only; the next change needs to make bias evaluation explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-043
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- A. Add a release gate for bias evaluation: measure subgroup performance and harmful outputs.
- B. Bundle bias evaluation, guardrails, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bias evaluation check.
- D. Use guardrails as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: A
- Explanation: The scenario is about bias evaluation. The strongest answer fixes the failing layer directly: measure subgroup performance and harmful outputs.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bias evaluation fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bias evaluation gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q99: A public-sector casework team has a production-readiness review for a governed agent workflow. The review is focused on guardrails, because the system must apply input/output and tool-use policies around the model. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-044
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated guardrails check.
- B. Use license constraints as the main gate even though reviewers are asking for guardrails evidence.
- C. Keep guardrails as a replacement for IAM as the primary release control and record only final outputs.
- D. Change the design around guardrails so the system can apply input/output and tool-use policies around the model.
- Answer: D
- Explanation: The scenario is about guardrails. The strongest answer fixes the failing layer directly: apply input/output and tool-use policies around the model.
- Why A is wrong: Waiting for incidents postpones the guardrails gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q100: A global retailer sees policy failures that need auditability as an explicit control. The team has been using unversioned release artifacts; the next change needs to make auditability explicit. Which action best addresses the problem?
- ID: genl-hf-safety-ethics-and-compliance-045
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- A. Keep unversioned release artifacts as the primary release control and record only final outputs.
- B. Prioritize guardrails before validating the failure signal around auditability.
- C. Make auditability explicit in the workflow: track data, model, prompt, eval, and approval lineage.
- D. Use bias evaluation as the main gate even though reviewers are asking for auditability evidence.
- Answer: C
- Explanation: The scenario is about auditability. The strongest answer fixes the failing layer directly: track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

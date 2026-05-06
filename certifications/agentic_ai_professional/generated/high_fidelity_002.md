# High Fidelity Generated Questions 002

## Questions

### Q1: During an architecture review, an insurance claims group finds that the current design still relies on retrying every timed-out tool call. Reviewers need a control that can stop calling a failing dependency until it recovers. What is the best next step?
- ID: aai-hf-deployment-and-scaling-024
- Domain: Deployment and Scaling
- Topic: circuit breaker; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep retrying every timed-out tool call as the main control and add a dashboard for final outputs.
- B. Prioritize bulkhead even though the observed failure is around circuit breaker.
- C. Put circuit breaker before rollout so the team can stop calling a failing dependency until it recovers.
- D. Move the check to post-release monitoring without changing the release path for circuit breaker.
- Answer: C
- Explanation: Circuit breaker is the missing control in this scenario. The right answer makes it explicit so the system can stop calling a failing dependency until it recovers.
- Why A is wrong: It keeps retrying every timed-out tool call in control instead of adding a measurable circuit breaker decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making circuit breaker testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs circuit breaker controlled before release or execution.

### Q2: A cybersecurity response team passes the happy-path demo for a production agent with model, retrieval, tools, and guardrails, but one global worker pool is being used as the shortcut, but it does not give the team a reliable way to isolate dependencies or lanes so one failure does not exhaust all workers. Which change should be made before release?
- ID: aai-hf-deployment-and-scaling-025
- Domain: Deployment and Scaling
- Topic: bulkhead; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep one global worker pool as the main control and add a dashboard for final outputs.
- B. Prioritize workload isolation even though the observed failure is around bulkhead.
- C. Release prompt, model, and queue depth changes together with one aggregate score.
- D. Make bulkhead explicit in the workflow: isolate dependencies or lanes so one failure does not exhaust all workers.
- Answer: D
- Explanation: Bulkhead is the missing control in this scenario. The right answer makes it explicit so the system can isolate dependencies or lanes so one failure does not exhaust all workers.
- Why A is wrong: It keeps one global worker pool in control instead of adding a measurable bulkhead decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making bulkhead testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether bulkhead fixed the failure.

### Q3: A hospital operations team is triaging a failed pilot for a new endpoint profile for a high-traffic launch. The team can reproduce the failure around silent degradation with no trace. The missing control is the one that can use measured fallbacks for model or tool failures. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-026
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use fallback as the control boundary and require the system to use measured fallbacks for model or tool failures.
- B. Prioritize queue depth even though the observed failure is around fallback.
- C. Release prompt, model, and workload isolation changes together with one aggregate score.
- D. Increase model capacity or context length while leaving fallback implicit.
- Answer: A
- Explanation: Fallback is the missing control in this scenario. The right answer makes it explicit so the system can use measured fallbacks for model or tool failures.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether fallback fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q4: A logistics planning team is triaging a failed pilot for a production agent with model, retrieval, tools, and guardrails. The failure appears when the system keeps sticky in-process state as the workaround. The release needs a design step that can deploy agent components as horizontally scalable services. Which control addresses the root cause?
- ID: aai-hf-deployment-and-scaling-027
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use circuit breaker as the main gate even though reviewers are asking for stateless services evidence.
- B. Add a release gate for stateless services: deploy agent components as horizontally scalable services.
- C. Release prompt, model, and circuit breaker changes together with one aggregate score.
- D. Increase model capacity or context length while leaving stateless services implicit.
- Answer: B
- Explanation: Stateless services is the missing control in this scenario. The right answer makes it explicit so the system can deploy agent components as horizontally scalable services.
- Why A is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether stateless services fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q5: During an architecture review, a global retailer finds that tool-call budgets are exceeded and reviewers cannot see why the plan stopped. The safer design is the one that can break a complex goal into explicit subgoals and dependencies. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-001
- Domain: Cognition, Planning, and Memory
- Topic: task decomposition; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize planning budget even though the observed failure is around task decomposition.
- B. Release prompt, model, and reflection changes together with one aggregate score.
- C. Make task decomposition explicit in the workflow: break a complex goal into explicit subgoals and dependencies.
- D. Keep single prompt for every long task as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Task decomposition is the missing control in this scenario. The right answer makes it explicit so the system can break a complex goal into explicit subgoals and dependencies.
- Why A is wrong: It moves attention to a neighboring control instead of making task decomposition testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether task decomposition fixed the failure.
- Why D is wrong: It keeps single prompt for every long task in control instead of adding a measurable task decomposition decision point.

### Q6: An automotive support team is building a planning agent that can call search, calculators, and case tools. Open-ended exploration is being used as the shortcut, but it does not give the team a reliable way to limit tool calls and add stopping criteria. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-002
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving planning budget implicit.
- B. Use planning budget as the control boundary and require the system to limit tool calls and add stopping criteria.
- C. Prioritize memory write policy even though the observed failure is around planning budget.
- D. Release prompt, model, and long-term memory changes together with one aggregate score.
- Answer: B
- Explanation: Planning budget is the missing control in this scenario. The right answer makes it explicit so the system can limit tool calls and add stopping criteria.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether planning budget fixed the failure.

### Q7: A semiconductor design group is building a long-running assistant that plans subtasks and revisits earlier results. The failure appears when the system keeps exposing private chain-of-thought as the workaround. The release needs a design step that can use a critic to verify evidence sufficiency and plan quality. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-003
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for reflection: use a critic to verify evidence sufficiency and plan quality.
- B. Release prompt, model, and memory vs RAG changes together with one aggregate score.
- C. Increase model capacity or context length while leaving reflection implicit.
- D. Use memory vs RAG as the main gate even though reviewers are asking for reflection evidence.
- Answer: A
- Explanation: Reflection is the missing control in this scenario. The right answer makes it explicit so the system can use a critic to verify evidence sufficiency and plan quality.
- Why B is wrong: Changing several layers at once makes it harder to prove whether reflection fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.

### Q8: A hospital operations team is choosing between a design centered on storing every observation forever and one that makes working memory explicit for a long-running assistant that plans subtasks and revisits earlier results. Which design should win?
- ID: aai-hf-cognition-planning-and-memory-004
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving working memory implicit.
- B. Use memory vs RAG as the main gate even though reviewers are asking for working memory evidence.
- C. Move the check to post-release monitoring without changing the release path for working memory.
- D. Change the design around working memory so the system can track task state needed for the current workflow.
- Answer: D
- Explanation: Working memory is the missing control in this scenario. The right answer makes it explicit so the system can track task state needed for the current workflow.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs working memory controlled before release or execution.

### Q9: During an architecture review, a telecom network operations team finds that old session details reappear where they are irrelevant or unauthorized. The safer design is the one that can remember context for the current session only. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-005
- Domain: Cognition, Planning, and Memory
- Topic: session memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for session memory.
- B. Keep long-term persistence by default as the main control and add a dashboard for final outputs.
- C. Instrument and enforce session memory; the system must remember context for the current session only.
- D. Use memory vs RAG as the main gate even though reviewers are asking for session memory evidence.
- Answer: C
- Explanation: Session memory is the missing control in this scenario. The right answer makes it explicit so the system can remember context for the current session only.
- Why A is wrong: Monitoring is useful, but this scenario needs session memory controlled before release or execution.
- Why B is wrong: It keeps long-term persistence by default in control instead of adding a measurable session memory decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making session memory testable in the scenario.

### Q10: An automotive support team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. Confusing memory with public document retrieval is being used as the shortcut, but it does not give the team a reliable way to retain useful prior interactions with consent and expiration. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-006
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize session memory even though the observed failure is around episodic memory.
- B. Put episodic memory before rollout so the team can retain useful prior interactions with consent and expiration.
- C. Move the check to post-release monitoring without changing the release path for episodic memory.
- D. Keep confusing memory with public document retrieval as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Episodic memory is the missing control in this scenario. The right answer makes it explicit so the system can retain useful prior interactions with consent and expiration.
- Why A is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs episodic memory controlled before release or execution.
- Why D is wrong: It keeps confusing memory with public document retrieval in control instead of adding a measurable episodic memory decision point.

### Q11: During an architecture review, a bank fraud team finds that the failure appears when the system keeps dumping transcripts into context as the workaround. The release needs a design step that can store reusable facts separately from raw conversation logs. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-007
- Domain: Cognition, Planning, and Memory
- Topic: semantic memory; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make semantic memory explicit in the workflow: store reusable facts separately from raw conversation logs.
- B. Keep dumping transcripts into context as the main control and add a dashboard for final outputs.
- C. Prioritize state ownership even though the observed failure is around semantic memory.
- D. Release prompt, model, and memory vs RAG changes together with one aggregate score.
- Answer: A
- Explanation: Semantic memory is the missing control in this scenario. The right answer makes it explicit so the system can store reusable facts separately from raw conversation logs.
- Why B is wrong: It keeps dumping transcripts into context in control instead of adding a measurable semantic memory decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making semantic memory testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether semantic memory fixed the failure.

### Q12: A manufacturing quality team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. The failure appears when the system keeps remembering everything forever as the workaround. The release needs a design step that can persist durable preferences or facts with consent, TTL, and deletion. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-008
- Domain: Cognition, Planning, and Memory
- Topic: long-term memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize episodic memory even though the observed failure is around long-term memory.
- B. Release prompt, model, and memory vs RAG changes together with one aggregate score.
- C. Increase model capacity or context length while leaving long-term memory implicit.
- D. Use long-term memory as the control boundary and require the system to persist durable preferences or facts with consent, TTL, and deletion.
- Answer: D
- Explanation: Long-term memory is the missing control in this scenario. The right answer makes it explicit so the system can persist durable preferences or facts with consent, TTL, and deletion.
- Why A is wrong: It moves attention to a neighboring control instead of making long-term memory testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether long-term memory fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q13: A global retailer is choosing between a design centered on model-driven memory writes and one that makes memory write policy explicit for a user-support agent with recurring customer preferences. Which design should win?
- ID: aai-hf-cognition-planning-and-memory-009
- Domain: Cognition, Planning, and Memory
- Topic: memory write policy; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving memory write policy implicit.
- B. Use episodic memory as the main gate even though reviewers are asking for memory write policy evidence.
- C. Add a release gate for memory write policy: decide what can be written, updated, recalled, or deleted.
- D. Release prompt, model, and episodic memory changes together with one aggregate score.
- Answer: C
- Explanation: Memory write policy is the missing control in this scenario. The right answer makes it explicit so the system can decide what can be written, updated, recalled, or deleted.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making memory write policy testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether memory write policy fixed the failure.

### Q14: During an architecture review, an insurance claims group finds that the current design still relies on treating document retrieval as personal memory. Reviewers need a control that can use memory for user/task state and RAG for external documents. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-010
- Domain: Cognition, Planning, and Memory
- Topic: memory vs RAG; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Change the design around memory vs RAG so the system can use memory for user/task state and RAG for external documents.
- B. Increase model capacity or context length while leaving memory vs RAG implicit.
- C. Use memory write policy as the main gate even though reviewers are asking for memory vs RAG evidence.
- D. Move the check to post-release monitoring without changing the release path for memory vs RAG.
- Answer: A
- Explanation: Memory vs RAG is the missing control in this scenario. The right answer makes it explicit so the system can use memory for user/task state and RAG for external documents.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making memory vs RAG testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs memory vs RAG controlled before release or execution.

### Q15: During an architecture review, a hospital operations team finds that agents overwriting each other is being used as the shortcut, but it does not give the team a reliable way to make one runtime own canonical state transitions. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-011
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep agents overwriting each other as the main control and add a dashboard for final outputs.
- B. Instrument and enforce state ownership; the system must make one runtime own canonical state transitions.
- C. Use reflection as the main gate even though reviewers are asking for state ownership evidence.
- D. Move the check to post-release monitoring without changing the release path for state ownership.
- Answer: B
- Explanation: State ownership is the missing control in this scenario. The right answer makes it explicit so the system can make one runtime own canonical state transitions.
- Why A is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs state ownership controlled before release or execution.

### Q16: During an architecture review, a semiconductor design group finds that the team can reproduce the failure around single prompt for every long task. The missing control is the one that can break a complex goal into explicit subgoals and dependencies. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-012
- Domain: Cognition, Planning, and Memory
- Topic: task decomposition; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep single prompt for every long task as the main control and add a dashboard for final outputs.
- B. Prioritize planning budget even though the observed failure is around task decomposition.
- C. Put task decomposition before rollout so the team can break a complex goal into explicit subgoals and dependencies.
- D. Move the check to post-release monitoring without changing the release path for task decomposition.
- Answer: C
- Explanation: Task decomposition is the missing control in this scenario. The right answer makes it explicit so the system can break a complex goal into explicit subgoals and dependencies.
- Why A is wrong: It keeps single prompt for every long task in control instead of adding a measurable task decomposition decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making task decomposition testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs task decomposition controlled before release or execution.

### Q17: A pharmaceutical research team is triaging a failed pilot for a user-support agent with recurring customer preferences. Document ACLs and user consent rules are being mixed. The safer design is the one that can limit tool calls and add stopping criteria. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-013
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep open-ended exploration as the main control and add a dashboard for final outputs.
- B. Prioritize state ownership even though the observed failure is around planning budget.
- C. Release prompt, model, and memory vs RAG changes together with one aggregate score.
- D. Make planning budget explicit in the workflow: limit tool calls and add stopping criteria.
- Answer: D
- Explanation: Planning budget is the missing control in this scenario. The right answer makes it explicit so the system can limit tool calls and add stopping criteria.
- Why A is wrong: It keeps open-ended exploration in control instead of adding a measurable planning budget decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether planning budget fixed the failure.

### Q18: A telecom network operations team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. The team can reproduce the failure around exposing private chain-of-thought. The missing control is the one that can use a critic to verify evidence sufficiency and plan quality. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-014
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use reflection as the control boundary and require the system to use a critic to verify evidence sufficiency and plan quality.
- B. Prioritize planning budget even though the observed failure is around reflection.
- C. Release prompt, model, and episodic memory changes together with one aggregate score.
- D. Increase model capacity or context length while leaving reflection implicit.
- Answer: A
- Explanation: Reflection is the missing control in this scenario. The right answer makes it explicit so the system can use a critic to verify evidence sufficiency and plan quality.
- Why B is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether reflection fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q19: During an architecture review, a manufacturing quality team finds that storing every observation forever is being used as the shortcut, but it does not give the team a reliable way to track task state needed for the current workflow. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-015
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use memory vs RAG as the main gate even though reviewers are asking for working memory evidence.
- B. Add a release gate for working memory: track task state needed for the current workflow.
- C. Release prompt, model, and memory vs RAG changes together with one aggregate score.
- D. Increase model capacity or context length while leaving working memory implicit.
- Answer: B
- Explanation: Working memory is the missing control in this scenario. The right answer makes it explicit so the system can track task state needed for the current workflow.
- Why A is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether working memory fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q20: A bank fraud team is triaging a failed pilot for a user-support agent with recurring customer preferences. The current design still relies on long-term persistence by default. Reviewers need a control that can remember context for the current session only. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-016
- Domain: Cognition, Planning, and Memory
- Topic: session memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use reflection as the main gate even though reviewers are asking for session memory evidence.
- B. Move the check to post-release monitoring without changing the release path for session memory.
- C. Change the design around session memory so the system can remember context for the current session only.
- D. Increase model capacity or context length while leaving session memory implicit.
- Answer: C
- Explanation: Session memory is the missing control in this scenario. The right answer makes it explicit so the system can remember context for the current session only.
- Why A is wrong: It moves attention to a neighboring control instead of making session memory testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs session memory controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q21: An insurance claims group is building a user-support agent with recurring customer preferences. Document ACLs and user consent rules are being mixed. The safer design is the one that can retain useful prior interactions with consent and expiration. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-017
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use working memory as the main gate even though reviewers are asking for episodic memory evidence.
- B. Move the check to post-release monitoring without changing the release path for episodic memory.
- C. Keep confusing memory with public document retrieval as the main control and add a dashboard for final outputs.
- D. Instrument and enforce episodic memory; the system must retain useful prior interactions with consent and expiration.
- Answer: D
- Explanation: Episodic memory is the missing control in this scenario. The right answer makes it explicit so the system can retain useful prior interactions with consent and expiration.
- Why A is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs episodic memory controlled before release or execution.
- Why C is wrong: It keeps confusing memory with public document retrieval in control instead of adding a measurable episodic memory decision point.

### Q22: A telecom network operations team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. The failure appears when the system keeps dumping transcripts into context as the workaround. The release needs a design step that can store reusable facts separately from raw conversation logs. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-018
- Domain: Cognition, Planning, and Memory
- Topic: semantic memory; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put semantic memory before rollout so the team can store reusable facts separately from raw conversation logs.
- B. Move the check to post-release monitoring without changing the release path for semantic memory.
- C. Keep dumping transcripts into context as the main control and add a dashboard for final outputs.
- D. Prioritize state ownership even though the observed failure is around semantic memory.
- Answer: A
- Explanation: Semantic memory is the missing control in this scenario. The right answer makes it explicit so the system can store reusable facts separately from raw conversation logs.
- Why B is wrong: Monitoring is useful, but this scenario needs semantic memory controlled before release or execution.
- Why C is wrong: It keeps dumping transcripts into context in control instead of adding a measurable semantic memory decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making semantic memory testable in the scenario.

### Q23: A public-sector casework team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. Remembering everything forever is being used as the shortcut, but it does not give the team a reliable way to persist durable preferences or facts with consent, TTL, and deletion. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-019
- Domain: Cognition, Planning, and Memory
- Topic: long-term memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and task decomposition changes together with one aggregate score.
- B. Make long-term memory explicit in the workflow: persist durable preferences or facts with consent, TTL, and deletion.
- C. Keep remembering everything forever as the main control and add a dashboard for final outputs.
- D. Prioritize memory write policy even though the observed failure is around long-term memory.
- Answer: B
- Explanation: Long-term memory is the missing control in this scenario. The right answer makes it explicit so the system can persist durable preferences or facts with consent, TTL, and deletion.
- Why A is wrong: Changing several layers at once makes it harder to prove whether long-term memory fixed the failure.
- Why C is wrong: It keeps remembering everything forever in control instead of adding a measurable long-term memory decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making long-term memory testable in the scenario.

### Q24: A bank fraud team passes the happy-path demo for a long-running assistant that plans subtasks and revisits earlier results, but model-driven memory writes is being used as the shortcut, but it does not give the team a reliable way to decide what can be written, updated, recalled, or deleted. Which change should be made before release?
- ID: aai-hf-cognition-planning-and-memory-020
- Domain: Cognition, Planning, and Memory
- Topic: memory write policy; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving memory write policy implicit.
- B. Use memory write policy as the control boundary and require the system to decide what can be written, updated, recalled, or deleted.
- C. Prioritize semantic memory even though the observed failure is around memory write policy.
- D. Release prompt, model, and working memory changes together with one aggregate score.
- Answer: B
- Explanation: Memory write policy is the missing control in this scenario. The right answer makes it explicit so the system can decide what can be written, updated, recalled, or deleted.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making memory write policy testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether memory write policy fixed the failure.

### Q25: During an architecture review, a bank fraud team finds that old session details reappear where they are irrelevant or unauthorized. The safer design is the one that can use memory for user/task state and RAG for external documents. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-021
- Domain: Cognition, Planning, and Memory
- Topic: memory vs RAG; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Add a release gate for memory vs RAG: use memory for user/task state and RAG for external documents.
- B. Release prompt, model, and episodic memory changes together with one aggregate score.
- C. Increase model capacity or context length while leaving memory vs RAG implicit.
- D. Use episodic memory as the main gate even though reviewers are asking for memory vs RAG evidence.
- Answer: A
- Explanation: Memory vs RAG is the missing control in this scenario. The right answer makes it explicit so the system can use memory for user/task state and RAG for external documents.
- Why B is wrong: Changing several layers at once makes it harder to prove whether memory vs RAG fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making memory vs RAG testable in the scenario.

### Q26: A manufacturing quality team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. The team can reproduce the failure around agents overwriting each other. The missing control is the one that can make one runtime own canonical state transitions. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-022
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving state ownership implicit.
- B. Use session memory as the main gate even though reviewers are asking for state ownership evidence.
- C. Move the check to post-release monitoring without changing the release path for state ownership.
- D. Change the design around state ownership so the system can make one runtime own canonical state transitions.
- Answer: D
- Explanation: State ownership is the missing control in this scenario. The right answer makes it explicit so the system can make one runtime own canonical state transitions.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs state ownership controlled before release or execution.

### Q27: A logistics planning team is building a user-support agent with recurring customer preferences. The team can reproduce the failure around single prompt for every long task. The missing control is the one that can break a complex goal into explicit subgoals and dependencies. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-023
- Domain: Cognition, Planning, and Memory
- Topic: task decomposition; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for task decomposition.
- B. Keep single prompt for every long task as the main control and add a dashboard for final outputs.
- C. Instrument and enforce task decomposition; the system must break a complex goal into explicit subgoals and dependencies.
- D. Use memory write policy as the main gate even though reviewers are asking for task decomposition evidence.
- Answer: C
- Explanation: Task decomposition is the missing control in this scenario. The right answer makes it explicit so the system can break a complex goal into explicit subgoals and dependencies.
- Why A is wrong: Monitoring is useful, but this scenario needs task decomposition controlled before release or execution.
- Why B is wrong: It keeps single prompt for every long task in control instead of adding a measurable task decomposition decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making task decomposition testable in the scenario.

### Q28: An automotive support team is triaging a failed pilot for a planning agent that can call search, calculators, and case tools. The current design still relies on open-ended exploration. Reviewers need a control that can limit tool calls and add stopping criteria. Which control addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-024
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize state ownership even though the observed failure is around planning budget.
- B. Put planning budget before rollout so the team can limit tool calls and add stopping criteria.
- C. Move the check to post-release monitoring without changing the release path for planning budget.
- D. Keep open-ended exploration as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Planning budget is the missing control in this scenario. The right answer makes it explicit so the system can limit tool calls and add stopping criteria.
- Why A is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs planning budget controlled before release or execution.
- Why D is wrong: It keeps open-ended exploration in control instead of adding a measurable planning budget decision point.

### Q29: A cybersecurity response team is choosing between a design centered on exposing private chain-of-thought and one that makes reflection explicit for a planning agent that can call search, calculators, and case tools. Which design should win?
- ID: aai-hf-cognition-planning-and-memory-025
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make reflection explicit in the workflow: use a critic to verify evidence sufficiency and plan quality.
- B. Keep exposing private chain-of-thought as the main control and add a dashboard for final outputs.
- C. Prioritize planning budget even though the observed failure is around reflection.
- D. Release prompt, model, and task decomposition changes together with one aggregate score.
- Answer: A
- Explanation: Reflection is the missing control in this scenario. The right answer makes it explicit so the system can use a critic to verify evidence sufficiency and plan quality.
- Why B is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether reflection fixed the failure.

### Q30: A manufacturing quality team is building a long-running assistant that plans subtasks and revisits earlier results. The team can reproduce the failure around storing every observation forever. The missing control is the one that can track task state needed for the current workflow. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-026
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize planning budget even though the observed failure is around working memory.
- B. Release prompt, model, and episodic memory changes together with one aggregate score.
- C. Increase model capacity or context length while leaving working memory implicit.
- D. Use working memory as the control boundary and require the system to track task state needed for the current workflow.
- Answer: D
- Explanation: Working memory is the missing control in this scenario. The right answer makes it explicit so the system can track task state needed for the current workflow.
- Why A is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether working memory fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q31: A global retailer is choosing between a design centered on long-term persistence by default and one that makes session memory explicit for a planning agent that can call search, calculators, and case tools. Which design should win?
- ID: aai-hf-cognition-planning-and-memory-027
- Domain: Cognition, Planning, and Memory
- Topic: session memory; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving session memory implicit.
- B. Use episodic memory as the main gate even though reviewers are asking for session memory evidence.
- C. Add a release gate for session memory: remember context for the current session only.
- D. Release prompt, model, and episodic memory changes together with one aggregate score.
- Answer: C
- Explanation: Session memory is the missing control in this scenario. The right answer makes it explicit so the system can remember context for the current session only.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making session memory testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether session memory fixed the failure.

### Q32: During an architecture review, an insurance claims group finds that the failure appears when the system keeps confusing memory with public document retrieval as the workaround. The release needs a design step that can retain useful prior interactions with consent and expiration. What is the best next step?
- ID: aai-hf-cognition-planning-and-memory-028
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for episodic memory.
- B. Change the design around episodic memory so the system can retain useful prior interactions with consent and expiration.
- C. Increase model capacity or context length while leaving episodic memory implicit.
- D. Use planning budget as the main gate even though reviewers are asking for episodic memory evidence.
- Answer: B
- Explanation: Episodic memory is the missing control in this scenario. The right answer makes it explicit so the system can retain useful prior interactions with consent and expiration.
- Why A is wrong: Monitoring is useful, but this scenario needs episodic memory controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.

### Q33: An insurance claims group passes the happy-path demo for a support agent that misses exact product codes and semantic paraphrases, but some questions require exact terms while others require semantic similarity. The safer design is the one that can filter by ACL before chunks enter context. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-001
- Domain: Knowledge Integration and Data Handling
- Topic: permissioned RAG; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Make permissioned RAG explicit in the workflow: filter by ACL before chunks enter context.
- B. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- C. Prioritize chunking and metadata even though the observed failure is around permissioned RAG.
- D. Release prompt, model, and document ETL changes together with one aggregate score.
- Answer: A
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why B is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether permissioned RAG fixed the failure.

### Q34: A global retailer is triaging a failed pilot for an enterprise RAG assistant over changing private policies. The current design still relies on raw PDFs pasted into prompts. Reviewers need a control that can extract, clean, segment, and normalize documents before indexing. Which control addresses the root cause?
- ID: aai-hf-knowledge-integration-and-data-handling-002
- Domain: Knowledge Integration and Data Handling
- Topic: document ETL; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize permissioned RAG even though the observed failure is around document ETL.
- B. Release prompt, model, and grounded citations changes together with one aggregate score.
- C. Increase model capacity or context length while leaving document ETL implicit.
- D. Use document ETL as the control boundary and require the system to extract, clean, segment, and normalize documents before indexing.
- Answer: D
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why A is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether document ETL fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q35: A hospital operations team is choosing between a design centered on anonymous chunks with no lineage and one that makes chunking and metadata explicit for a support agent that misses exact product codes and semantic paraphrases. Which design should win?
- ID: aai-hf-knowledge-integration-and-data-handling-003
- Domain: Knowledge Integration and Data Handling
- Topic: chunking and metadata; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving chunking and metadata implicit.
- B. Use vector database as the main gate even though reviewers are asking for chunking and metadata evidence.
- C. Add a release gate for chunking and metadata: preserve source, tenant, time, and sensitivity metadata.
- D. Release prompt, model, and vector database changes together with one aggregate score.
- Answer: C
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.

### Q36: A cybersecurity response team passes the happy-path demo for a document-grounded assistant with poor citations, but chat completion models as vector indexes is being used as the shortcut, but it does not give the team a reliable way to represent chunks and queries for semantic retrieval. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-004
- Domain: Knowledge Integration and Data Handling
- Topic: embeddings; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for embeddings.
- B. Change the design around embeddings so the system can represent chunks and queries for semantic retrieval.
- C. Increase model capacity or context length while leaving embeddings implicit.
- D. Use reranking as the main gate even though reviewers are asking for embeddings evidence.
- Answer: B
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why A is wrong: Monitoring is useful, but this scenario needs embeddings controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.

### Q37: During an architecture review, an automotive support team finds that the failure appears when the system keeps prompt context as the database as the workaround. The release needs a design step that can index embeddings with metadata filters and update policy. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-005
- Domain: Knowledge Integration and Data Handling
- Topic: vector database; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce vector database; the system must index embeddings with metadata filters and update policy.
- B. Use knowledge graph as the main gate even though reviewers are asking for vector database evidence.
- C. Move the check to post-release monitoring without changing the release path for vector database.
- D. Keep prompt context as the database as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why B is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs vector database controlled before release or execution.
- Why D is wrong: It keeps prompt context as the database in control instead of adding a measurable vector database decision point.

### Q38: During an architecture review, a global retailer finds that some questions require exact terms while others require semantic similarity. The safer design is the one that can combine lexical and vector retrieval when exact terms and semantics both matter. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-006
- Domain: Knowledge Integration and Data Handling
- Topic: hybrid search; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for hybrid search.
- B. Keep semantic search only as the main control and add a dashboard for final outputs.
- C. Prioritize vector database even though the observed failure is around hybrid search.
- D. Put hybrid search before rollout so the team can combine lexical and vector retrieval when exact terms and semantics both matter.
- Answer: D
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why A is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.
- Why B is wrong: It keeps semantic search only in control instead of adding a measurable hybrid search decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.

### Q39: A manufacturing quality team passes the happy-path demo for a support agent that misses exact product codes and semantic paraphrases, but some questions require exact terms while others require semantic similarity. The safer design is the one that can rerank candidate chunks before context assembly. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-007
- Domain: Knowledge Integration and Data Handling
- Topic: reranking; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize knowledge graph even though the observed failure is around reranking.
- B. Release prompt, model, and hybrid search changes together with one aggregate score.
- C. Make reranking explicit in the workflow: rerank candidate chunks before context assembly.
- D. Keep larger context as the only fix as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Reranking is the missing control in this scenario. The right answer makes it explicit so the system can rerank candidate chunks before context assembly.
- Why A is wrong: It moves attention to a neighboring control instead of making reranking testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether reranking fixed the failure.
- Why D is wrong: It keeps larger context as the only fix in control instead of adding a measurable reranking decision point.

### Q40: During an architecture review, a cybersecurity response team finds that the failure appears when the system keeps fine-tuning on volatile policy documents as the workaround. The release needs a design step that can use retrieval for changing facts. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-008
- Domain: Knowledge Integration and Data Handling
- Topic: data freshness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving data freshness implicit.
- B. Use data freshness as the control boundary and require the system to use retrieval for changing facts.
- C. Prioritize document ETL even though the observed failure is around data freshness.
- D. Release prompt, model, and vector database changes together with one aggregate score.
- Answer: B
- Explanation: Data freshness is the missing control in this scenario. The right answer makes it explicit so the system can use retrieval for changing facts.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making data freshness testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether data freshness fixed the failure.

### Q41: During an architecture review, an insurance claims group finds that the team can reproduce the failure around uncited summaries. The missing control is the one that can return answer evidence linked to source chunks. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-009
- Domain: Knowledge Integration and Data Handling
- Topic: grounded citations; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for grounded citations: return answer evidence linked to source chunks.
- B. Release prompt, model, and knowledge graph changes together with one aggregate score.
- C. Increase model capacity or context length while leaving grounded citations implicit.
- D. Use knowledge graph as the main gate even though reviewers are asking for grounded citations evidence.
- Answer: A
- Explanation: Grounded citations is the missing control in this scenario. The right answer makes it explicit so the system can return answer evidence linked to source chunks.
- Why B is wrong: Changing several layers at once makes it harder to prove whether grounded citations fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making grounded citations testable in the scenario.

### Q42: A logistics planning team is triaging a failed pilot for an enterprise RAG assistant over changing private policies. The failure appears when the system keeps flat chunks for every graph problem as the workaround. The release needs a design step that can represent entities and relationships when relationship reasoning matters. Which control addresses the root cause?
- ID: aai-hf-knowledge-integration-and-data-handling-010
- Domain: Knowledge Integration and Data Handling
- Topic: knowledge graph; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use hybrid search as the main gate even though reviewers are asking for knowledge graph evidence.
- B. Move the check to post-release monitoring without changing the release path for knowledge graph.
- C. Change the design around knowledge graph so the system can represent entities and relationships when relationship reasoning matters.
- D. Increase model capacity or context length while leaving knowledge graph implicit.
- Answer: C
- Explanation: Knowledge graph is the missing control in this scenario. The right answer makes it explicit so the system can represent entities and relationships when relationship reasoning matters.
- Why A is wrong: It moves attention to a neighboring control instead of making knowledge graph testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs knowledge graph controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q43: A global retailer is building a document-grounded assistant with poor citations. Answers cannot prove which evidence was used. The safer design is the one that can track source, license, sensitivity, retention, and lineage. Which action best fits the requirement?
- ID: aai-hf-knowledge-integration-and-data-handling-011
- Domain: Knowledge Integration and Data Handling
- Topic: corpus governance; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use document ETL as the main gate even though reviewers are asking for corpus governance evidence.
- B. Move the check to post-release monitoring without changing the release path for corpus governance.
- C. Keep unversioned document dumps as the main control and add a dashboard for final outputs.
- D. Instrument and enforce corpus governance; the system must track source, license, sensitivity, retention, and lineage.
- Answer: D
- Explanation: Corpus governance is the missing control in this scenario. The right answer makes it explicit so the system can track source, license, sensitivity, retention, and lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making corpus governance testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs corpus governance controlled before release or execution.
- Why C is wrong: It keeps unversioned document dumps in control instead of adding a measurable corpus governance decision point.

### Q44: An insurance claims group passes the happy-path demo for a support agent that misses exact product codes and semantic paraphrases, but the current design still relies on post-answer filtering. Reviewers need a control that can filter by ACL before chunks enter context. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-012
- Domain: Knowledge Integration and Data Handling
- Topic: permissioned RAG; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put permissioned RAG before rollout so the team can filter by ACL before chunks enter context.
- B. Move the check to post-release monitoring without changing the release path for permissioned RAG.
- C. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- D. Prioritize reranking even though the observed failure is around permissioned RAG.
- Answer: A
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why B is wrong: Monitoring is useful, but this scenario needs permissioned RAG controlled before release or execution.
- Why C is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.

### Q45: A cybersecurity response team passes the happy-path demo for a document-grounded assistant with poor citations, but answers cannot prove which evidence was used. The safer design is the one that can extract, clean, segment, and normalize documents before indexing. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-013
- Domain: Knowledge Integration and Data Handling
- Topic: document ETL; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and reranking changes together with one aggregate score.
- B. Make document ETL explicit in the workflow: extract, clean, segment, and normalize documents before indexing.
- C. Keep raw PDFs pasted into prompts as the main control and add a dashboard for final outputs.
- D. Prioritize hybrid search even though the observed failure is around document ETL.
- Answer: B
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why A is wrong: Changing several layers at once makes it harder to prove whether document ETL fixed the failure.
- Why C is wrong: It keeps raw PDFs pasted into prompts in control instead of adding a measurable document ETL decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.

### Q46: A hospital operations team is choosing between a design centered on anonymous chunks with no lineage and one that makes chunking and metadata explicit for an enterprise RAG assistant over changing private policies. Which design should win?
- ID: aai-hf-knowledge-integration-and-data-handling-014
- Domain: Knowledge Integration and Data Handling
- Topic: chunking and metadata; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and corpus governance changes together with one aggregate score.
- B. Increase model capacity or context length while leaving chunking and metadata implicit.
- C. Use chunking and metadata as the control boundary and require the system to preserve source, tenant, time, and sensitivity metadata.
- D. Prioritize embeddings even though the observed failure is around chunking and metadata.
- Answer: C
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.

### Q47: During an architecture review, a global retailer finds that the failure appears when the system keeps chat completion models as vector indexes as the workaround. The release needs a design step that can represent chunks and queries for semantic retrieval. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-015
- Domain: Knowledge Integration and Data Handling
- Topic: embeddings; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and corpus governance changes together with one aggregate score.
- B. Increase model capacity or context length while leaving embeddings implicit.
- C. Use corpus governance as the main gate even though reviewers are asking for embeddings evidence.
- D. Add a release gate for embeddings: represent chunks and queries for semantic retrieval.
- Answer: D
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why A is wrong: Changing several layers at once makes it harder to prove whether embeddings fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.

### Q48: During an architecture review, an automotive support team finds that users can receive evidence they could not access in the source system. The safer design is the one that can index embeddings with metadata filters and update policy. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-016
- Domain: Knowledge Integration and Data Handling
- Topic: vector database; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around vector database so the system can index embeddings with metadata filters and update policy.
- B. Increase model capacity or context length while leaving vector database implicit.
- C. Use hybrid search as the main gate even though reviewers are asking for vector database evidence.
- D. Move the check to post-release monitoring without changing the release path for vector database.
- Answer: A
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs vector database controlled before release or execution.

### Q49: A bank fraud team passes the happy-path demo for an enterprise RAG assistant over changing private policies, but semantic search only is being used as the shortcut, but it does not give the team a reliable way to combine lexical and vector retrieval when exact terms and semantics both matter. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-017
- Domain: Knowledge Integration and Data Handling
- Topic: hybrid search; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep semantic search only as the main control and add a dashboard for final outputs.
- B. Instrument and enforce hybrid search; the system must combine lexical and vector retrieval when exact terms and semantics both matter.
- C. Use corpus governance as the main gate even though reviewers are asking for hybrid search evidence.
- D. Move the check to post-release monitoring without changing the release path for hybrid search.
- Answer: B
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why A is wrong: It keeps semantic search only in control instead of adding a measurable hybrid search decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.

### Q50: A manufacturing quality team passes the happy-path demo for a support agent that misses exact product codes and semantic paraphrases, but the failure appears when the system keeps larger context as the only fix as the workaround. The release needs a design step that can rerank candidate chunks before context assembly. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-018
- Domain: Knowledge Integration and Data Handling
- Topic: reranking; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep larger context as the only fix as the main control and add a dashboard for final outputs.
- B. Prioritize data freshness even though the observed failure is around reranking.
- C. Put reranking before rollout so the team can rerank candidate chunks before context assembly.
- D. Move the check to post-release monitoring without changing the release path for reranking.
- Answer: C
- Explanation: Reranking is the missing control in this scenario. The right answer makes it explicit so the system can rerank candidate chunks before context assembly.
- Why A is wrong: It keeps larger context as the only fix in control instead of adding a measurable reranking decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making reranking testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs reranking controlled before release or execution.

### Q51: A logistics planning team is choosing between a design centered on fine-tuning on volatile policy documents and one that makes data freshness explicit for an enterprise RAG assistant over changing private policies. Which design should win?
- ID: aai-hf-knowledge-integration-and-data-handling-019
- Domain: Knowledge Integration and Data Handling
- Topic: data freshness; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep fine-tuning on volatile policy documents as the main control and add a dashboard for final outputs.
- B. Prioritize embeddings even though the observed failure is around data freshness.
- C. Release prompt, model, and reranking changes together with one aggregate score.
- D. Make data freshness explicit in the workflow: use retrieval for changing facts.
- Answer: D
- Explanation: Data freshness is the missing control in this scenario. The right answer makes it explicit so the system can use retrieval for changing facts.
- Why A is wrong: It keeps fine-tuning on volatile policy documents in control instead of adding a measurable data freshness decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making data freshness testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether data freshness fixed the failure.

### Q52: An automotive support team passes the happy-path demo for a document-grounded assistant with poor citations, but answers cannot prove which evidence was used. The safer design is the one that can return answer evidence linked to source chunks. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-020
- Domain: Knowledge Integration and Data Handling
- Topic: grounded citations; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize document ETL even though the observed failure is around grounded citations.
- B. Release prompt, model, and permissioned RAG changes together with one aggregate score.
- C. Increase model capacity or context length while leaving grounded citations implicit.
- D. Use grounded citations as the control boundary and require the system to return answer evidence linked to source chunks.
- Answer: D
- Explanation: Grounded citations is the missing control in this scenario. The right answer makes it explicit so the system can return answer evidence linked to source chunks.
- Why A is wrong: It moves attention to a neighboring control instead of making grounded citations testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether grounded citations fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q53: An automotive support team passes the happy-path demo for an enterprise RAG assistant over changing private policies, but flat chunks for every graph problem is being used as the shortcut, but it does not give the team a reliable way to represent entities and relationships when relationship reasoning matters. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-021
- Domain: Knowledge Integration and Data Handling
- Topic: knowledge graph; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving knowledge graph implicit.
- B. Use vector database as the main gate even though reviewers are asking for knowledge graph evidence.
- C. Add a release gate for knowledge graph: represent entities and relationships when relationship reasoning matters.
- D. Release prompt, model, and vector database changes together with one aggregate score.
- Answer: C
- Explanation: Knowledge graph is the missing control in this scenario. The right answer makes it explicit so the system can represent entities and relationships when relationship reasoning matters.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making knowledge graph testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether knowledge graph fixed the failure.

### Q54: A telecom network operations team is choosing between a design centered on unversioned document dumps and one that makes corpus governance explicit for a document-grounded assistant with poor citations. Which design should win?
- ID: aai-hf-knowledge-integration-and-data-handling-022
- Domain: Knowledge Integration and Data Handling
- Topic: corpus governance; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for corpus governance.
- B. Change the design around corpus governance so the system can track source, license, sensitivity, retention, and lineage.
- C. Increase model capacity or context length while leaving corpus governance implicit.
- D. Use hybrid search as the main gate even though reviewers are asking for corpus governance evidence.
- Answer: B
- Explanation: Corpus governance is the missing control in this scenario. The right answer makes it explicit so the system can track source, license, sensitivity, retention, and lineage.
- Why A is wrong: Monitoring is useful, but this scenario needs corpus governance controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making corpus governance testable in the scenario.

### Q55: A manufacturing quality team passes the happy-path demo for an enterprise RAG assistant over changing private policies, but post-answer filtering is being used as the shortcut, but it does not give the team a reliable way to filter by ACL before chunks enter context. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-023
- Domain: Knowledge Integration and Data Handling
- Topic: permissioned RAG; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce permissioned RAG; the system must filter by ACL before chunks enter context.
- B. Use hybrid search as the main gate even though reviewers are asking for permissioned RAG evidence.
- C. Move the check to post-release monitoring without changing the release path for permissioned RAG.
- D. Keep post-answer filtering as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Permissioned RAG is the missing control in this scenario. The right answer makes it explicit so the system can filter by ACL before chunks enter context.
- Why B is wrong: It moves attention to a neighboring control instead of making permissioned RAG testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs permissioned RAG controlled before release or execution.
- Why D is wrong: It keeps post-answer filtering in control instead of adding a measurable permissioned RAG decision point.

### Q56: During an architecture review, a cybersecurity response team finds that the team can reproduce the failure around raw PDFs pasted into prompts. The missing control is the one that can extract, clean, segment, and normalize documents before indexing. What is the best next step?
- ID: aai-hf-knowledge-integration-and-data-handling-024
- Domain: Knowledge Integration and Data Handling
- Topic: document ETL; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for document ETL.
- B. Keep raw PDFs pasted into prompts as the main control and add a dashboard for final outputs.
- C. Prioritize permissioned RAG even though the observed failure is around document ETL.
- D. Put document ETL before rollout so the team can extract, clean, segment, and normalize documents before indexing.
- Answer: D
- Explanation: Document ETL is the missing control in this scenario. The right answer makes it explicit so the system can extract, clean, segment, and normalize documents before indexing.
- Why A is wrong: Monitoring is useful, but this scenario needs document ETL controlled before release or execution.
- Why B is wrong: It keeps raw PDFs pasted into prompts in control instead of adding a measurable document ETL decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making document ETL testable in the scenario.

### Q57: An automotive support team passes the happy-path demo for an enterprise RAG assistant over changing private policies, but the team can reproduce the failure around anonymous chunks with no lineage. The missing control is the one that can preserve source, tenant, time, and sensitivity metadata. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-025
- Domain: Knowledge Integration and Data Handling
- Topic: chunking and metadata; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize data freshness even though the observed failure is around chunking and metadata.
- B. Release prompt, model, and grounded citations changes together with one aggregate score.
- C. Make chunking and metadata explicit in the workflow: preserve source, tenant, time, and sensitivity metadata.
- D. Keep anonymous chunks with no lineage as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Chunking and metadata is the missing control in this scenario. The right answer makes it explicit so the system can preserve source, tenant, time, and sensitivity metadata.
- Why A is wrong: It moves attention to a neighboring control instead of making chunking and metadata testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether chunking and metadata fixed the failure.
- Why D is wrong: It keeps anonymous chunks with no lineage in control instead of adding a measurable chunking and metadata decision point.

### Q58: A logistics planning team is triaging a failed pilot for a document-grounded assistant with poor citations. The failure appears when the system keeps chat completion models as vector indexes as the workaround. The release needs a design step that can represent chunks and queries for semantic retrieval. Which control addresses the root cause?
- ID: aai-hf-knowledge-integration-and-data-handling-026
- Domain: Knowledge Integration and Data Handling
- Topic: embeddings; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving embeddings implicit.
- B. Use embeddings as the control boundary and require the system to represent chunks and queries for semantic retrieval.
- C. Prioritize data freshness even though the observed failure is around embeddings.
- D. Release prompt, model, and vector database changes together with one aggregate score.
- Answer: B
- Explanation: Embeddings is the missing control in this scenario. The right answer makes it explicit so the system can represent chunks and queries for semantic retrieval.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making embeddings testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether embeddings fixed the failure.

### Q59: A hospital operations team is triaging a failed pilot for a support agent that misses exact product codes and semantic paraphrases. Prompt context as the database is being used as the shortcut, but it does not give the team a reliable way to index embeddings with metadata filters and update policy. Which control addresses the root cause?
- ID: aai-hf-knowledge-integration-and-data-handling-027
- Domain: Knowledge Integration and Data Handling
- Topic: vector database; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Add a release gate for vector database: index embeddings with metadata filters and update policy.
- B. Release prompt, model, and permissioned RAG changes together with one aggregate score.
- C. Increase model capacity or context length while leaving vector database implicit.
- D. Use permissioned RAG as the main gate even though reviewers are asking for vector database evidence.
- Answer: A
- Explanation: Vector database is the missing control in this scenario. The right answer makes it explicit so the system can index embeddings with metadata filters and update policy.
- Why B is wrong: Changing several layers at once makes it harder to prove whether vector database fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making vector database testable in the scenario.

### Q60: A bank fraud team passes the happy-path demo for a support agent that misses exact product codes and semantic paraphrases, but semantic search only is being used as the shortcut, but it does not give the team a reliable way to combine lexical and vector retrieval when exact terms and semantics both matter. Which change should be made before release?
- ID: aai-hf-knowledge-integration-and-data-handling-028
- Domain: Knowledge Integration and Data Handling
- Topic: hybrid search; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving hybrid search implicit.
- B. Use corpus governance as the main gate even though reviewers are asking for hybrid search evidence.
- C. Move the check to post-release monitoring without changing the release path for hybrid search.
- D. Change the design around hybrid search so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Answer: D
- Explanation: Hybrid search is the missing control in this scenario. The right answer makes it explicit so the system can combine lexical and vector retrieval when exact terms and semantics both matter.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making hybrid search testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs hybrid search controlled before release or execution.

### Q61: During an architecture review, an insurance claims group finds that the team can reproduce the failure around CUDA Graphs as the agent framework. The missing control is the one that can compose framework-flexible agent workflows with tools, retrievers, and observability. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-001
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Agent Toolkit; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Prioritize Nsight Compute even though the observed failure is around NeMo Agent Toolkit.
- B. Release prompt, model, and NeMo Guardrails changes together with one aggregate score.
- C. Make NeMo Agent Toolkit explicit in the workflow: compose framework-flexible agent workflows with tools, retrievers, and observability.
- D. Keep CUDA Graphs as the agent framework as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: NeMo Agent Toolkit is the missing control in this scenario. The right answer makes it explicit so the system can compose framework-flexible agent workflows with tools, retrievers, and observability.
- Why A is wrong: It moves attention to a neighboring control instead of making NeMo Agent Toolkit testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether NeMo Agent Toolkit fixed the failure.
- Why D is wrong: It keeps CUDA Graphs as the agent framework in control instead of adding a measurable NeMo Agent Toolkit decision point.

### Q62: During an architecture review, a telecom network operations team finds that the current design still relies on guardrails as document ACLs. Reviewers need a control that can control dialog, retrieval, tool, and output behavior. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-002
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Guardrails; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving NeMo Guardrails implicit.
- B. Use NeMo Guardrails as the control boundary and require the system to control dialog, retrieval, tool, and output behavior.
- C. Prioritize Nemotron models even though the observed failure is around NeMo Guardrails.
- D. Release prompt, model, and NGC changes together with one aggregate score.
- Answer: B
- Explanation: NeMo Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can control dialog, retrieval, tool, and output behavior.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making NeMo Guardrails testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether NeMo Guardrails fixed the failure.

### Q63: A public-sector casework team passes the happy-path demo for an NVIDIA-backed agent platform where teams must choose the right component, but the current design still relies on NIM as the model family. Reviewers need a control that can package optimized model APIs for LLMs, embeddings, and rerankers. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-003
- Domain: NVIDIA Platform Implementation
- Topic: NIM; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Add a release gate for NIM: package optimized model APIs for LLMs, embeddings, and rerankers.
- B. Release prompt, model, and NeMo Retriever changes together with one aggregate score.
- C. Increase model capacity or context length while leaving NIM implicit.
- D. Use NeMo Retriever as the main gate even though reviewers are asking for NIM evidence.
- Answer: A
- Explanation: NIM is the missing control in this scenario. The right answer makes it explicit so the system can package optimized model APIs for LLMs, embeddings, and rerankers.
- Why B is wrong: Changing several layers at once makes it harder to prove whether NIM fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.

### Q64: During an architecture review, a cybersecurity response team finds that the current design still relies on NeMo Curator for live RAG. Reviewers need a control that can build enterprise extraction, embedding, indexing, retrieval, and reranking. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-004
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Retriever; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving NeMo Retriever implicit.
- B. Use Nsight Systems as the main gate even though reviewers are asking for NeMo Retriever evidence.
- C. Move the check to post-release monitoring without changing the release path for NeMo Retriever.
- D. Change the design around NeMo Retriever so the system can build enterprise extraction, embedding, indexing, retrieval, and reranking.
- Answer: D
- Explanation: NeMo Retriever is the missing control in this scenario. The right answer makes it explicit so the system can build enterprise extraction, embedding, indexing, retrieval, and reranking.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making NeMo Retriever testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs NeMo Retriever controlled before release or execution.

### Q65: An insurance claims group is choosing between a design centered on production uptime as quality evaluation and one that makes NeMo Evaluator explicit for a production LLM stack using NVIDIA tools. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-005
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Evaluator; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for NeMo Evaluator.
- B. Keep production uptime as quality evaluation as the main control and add a dashboard for final outputs.
- C. Instrument and enforce NeMo Evaluator; the system must run model, RAG, and agent evaluations with benchmark and judge workflows.
- D. Use TensorRT-LLM as the main gate even though reviewers are asking for NeMo Evaluator evidence.
- Answer: C
- Explanation: NeMo Evaluator is the missing control in this scenario. The right answer makes it explicit so the system can run model, RAG, and agent evaluations with benchmark and judge workflows.
- Why A is wrong: Monitoring is useful, but this scenario needs NeMo Evaluator controlled before release or execution.
- Why B is wrong: It keeps production uptime as quality evaluation in control instead of adding a measurable NeMo Evaluator decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making NeMo Evaluator testable in the scenario.

### Q66: During an architecture review, a global retailer finds that the failure appears when the system keeps Curator as the live retriever as the workaround. The release needs a design step that can prepare, deduplicate, filter, and clean corpora before training or indexing. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-006
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Curator; agentic_ai_professional
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Prioritize Nemotron models even though the observed failure is around NeMo Curator.
- B. Put NeMo Curator before rollout so the team can prepare, deduplicate, filter, and clean corpora before training or indexing.
- C. Move the check to post-release monitoring without changing the release path for NeMo Curator.
- D. Keep Curator as the live retriever as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: NeMo Curator is the missing control in this scenario. The right answer makes it explicit so the system can prepare, deduplicate, filter, and clean corpora before training or indexing.
- Why A is wrong: It moves attention to a neighboring control instead of making NeMo Curator testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs NeMo Curator controlled before release or execution.
- Why D is wrong: It keeps Curator as the live retriever in control instead of adding a measurable NeMo Curator decision point.

### Q67: A manufacturing quality team is choosing between a design centered on NIM Operator as the inference engine and one that makes NIM Operator explicit for a production LLM stack using NVIDIA tools. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-007
- Domain: NVIDIA Platform Implementation
- Topic: NIM Operator; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Make NIM Operator explicit in the workflow: manage NIM deployments on Kubernetes with lifecycle and scaling controls.
- B. Keep NIM Operator as the inference engine as the main control and add a dashboard for final outputs.
- C. Prioritize NeMo Guardrails even though the observed failure is around NIM Operator.
- D. Release prompt, model, and NeMo Evaluator changes together with one aggregate score.
- Answer: A
- Explanation: NIM Operator is the missing control in this scenario. The right answer makes it explicit so the system can manage NIM deployments on Kubernetes with lifecycle and scaling controls.
- Why B is wrong: It keeps NIM Operator as the inference engine in control instead of adding a measurable NIM Operator decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether NIM Operator fixed the failure.

### Q68: A bank fraud team passes the happy-path demo for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options, but the failure appears when the system keeps TensorRT-LLM as an orchestration framework as the workaround. The release needs a design step that can optimize LLM inference with runtime techniques such as batching and KV-cache handling. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-008
- Domain: NVIDIA Platform Implementation
- Topic: TensorRT-LLM; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Prioritize Triton Inference Server even though the observed failure is around TensorRT-LLM.
- B. Release prompt, model, and NIM Operator changes together with one aggregate score.
- C. Increase model capacity or context length while leaving TensorRT-LLM implicit.
- D. Use TensorRT-LLM as the control boundary and require the system to optimize LLM inference with runtime techniques such as batching and KV-cache handling.
- Answer: D
- Explanation: TensorRT-LLM is the missing control in this scenario. The right answer makes it explicit so the system can optimize LLM inference with runtime techniques such as batching and KV-cache handling.
- Why A is wrong: It moves attention to a neighboring control instead of making TensorRT-LLM testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether TensorRT-LLM fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q69: A pharmaceutical research team is choosing between a design centered on Triton as a model family and one that makes Triton Inference Server explicit for a production LLM stack using NVIDIA tools. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-009
- Domain: NVIDIA Platform Implementation
- Topic: Triton Inference Server; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving Triton Inference Server implicit.
- B. Use NeMo Agent Toolkit as the main gate even though reviewers are asking for Triton Inference Server evidence.
- C. Add a release gate for Triton Inference Server: serve multi-framework models with batching and ensemble patterns.
- D. Release prompt, model, and NeMo Agent Toolkit changes together with one aggregate score.
- Answer: C
- Explanation: Triton Inference Server is the missing control in this scenario. The right answer makes it explicit so the system can serve multi-framework models with batching and ensemble patterns.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making Triton Inference Server testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether Triton Inference Server fixed the failure.

### Q70: A telecom network operations team is choosing between a design centered on kernel metrics before finding the hot kernel and one that makes Nsight Systems explicit for an NVIDIA-backed agent platform where teams must choose the right component. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-010
- Domain: NVIDIA Platform Implementation
- Topic: Nsight Systems; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Change the design around Nsight Systems so the system can start with end-to-end CPU/GPU timeline profiling.
- B. Increase model capacity or context length while leaving Nsight Systems implicit.
- C. Use NeMo Agent Toolkit as the main gate even though reviewers are asking for Nsight Systems evidence.
- D. Move the check to post-release monitoring without changing the release path for Nsight Systems.
- Answer: A
- Explanation: Nsight Systems is the missing control in this scenario. The right answer makes it explicit so the system can start with end-to-end CPU/GPU timeline profiling.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making Nsight Systems testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs Nsight Systems controlled before release or execution.

### Q71: A telecom network operations team is building an NVIDIA-backed agent platform where teams must choose the right component. The requirement actually belongs to orchestration, retrieval, serving, evaluation, or profiling. The safer design is the one that can inspect a known hot CUDA kernel after timeline profiling. Which action best fits the requirement?
- ID: aai-hf-nvidia-platform-implementation-011
- Domain: NVIDIA Platform Implementation
- Topic: Nsight Compute; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Keep whole-application diagnosis from kernel metrics first as the main control and add a dashboard for final outputs.
- B. Instrument and enforce Nsight Compute; the system must inspect a known hot CUDA kernel after timeline profiling.
- C. Use NeMo Curator as the main gate even though reviewers are asking for Nsight Compute evidence.
- D. Move the check to post-release monitoring without changing the release path for Nsight Compute.
- Answer: B
- Explanation: Nsight Compute is the missing control in this scenario. The right answer makes it explicit so the system can inspect a known hot CUDA kernel after timeline profiling.
- Why A is wrong: It keeps whole-application diagnosis from kernel metrics first in control instead of adding a measurable Nsight Compute decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making Nsight Compute testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs Nsight Compute controlled before release or execution.

### Q72: During an architecture review, an insurance claims group finds that the clue is about where the work happens, not which name is familiar. The safer design is the one that can catalog and version model artifacts, containers, and resources. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-012
- Domain: NVIDIA Platform Implementation
- Topic: NGC; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Keep NGC as the runtime endpoint as the main control and add a dashboard for final outputs.
- B. Prioritize NeMo Guardrails even though the observed failure is around NGC.
- C. Put NGC before rollout so the team can catalog and version model artifacts, containers, and resources.
- D. Move the check to post-release monitoring without changing the release path for NGC.
- Answer: C
- Explanation: NGC is the missing control in this scenario. The right answer makes it explicit so the system can catalog and version model artifacts, containers, and resources.
- Why A is wrong: It keeps NGC as the runtime endpoint in control instead of adding a measurable NGC decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making NGC testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs NGC controlled before release or execution.

### Q73: A semiconductor design group passes the happy-path demo for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options, but nemotron as the serving gateway is being used as the shortcut, but it does not give the team a reliable way to choose NVIDIA model families for reasoning, reward, or instruction-following tasks. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-013
- Domain: NVIDIA Platform Implementation
- Topic: Nemotron models; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Keep Nemotron as the serving gateway as the main control and add a dashboard for final outputs.
- B. Prioritize NIM even though the observed failure is around Nemotron models.
- C. Release prompt, model, and NeMo Retriever changes together with one aggregate score.
- D. Make Nemotron models explicit in the workflow: choose NVIDIA model families for reasoning, reward, or instruction-following tasks.
- Answer: D
- Explanation: Nemotron models is the missing control in this scenario. The right answer makes it explicit so the system can choose NVIDIA model families for reasoning, reward, or instruction-following tasks.
- Why A is wrong: It keeps Nemotron as the serving gateway in control instead of adding a measurable Nemotron models decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making Nemotron models testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether Nemotron models fixed the failure.

### Q74: A public-sector casework team is triaging a failed pilot for a production LLM stack using NVIDIA tools. CUDA Graphs as the agent framework is being used as the shortcut, but it does not give the team a reliable way to compose framework-flexible agent workflows with tools, retrievers, and observability. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-014
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Agent Toolkit; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Agent Toolkit as the control boundary and require the system to compose framework-flexible agent workflows with tools, retrievers, and observability.
- B. Prioritize Triton Inference Server even though the observed failure is around NeMo Agent Toolkit.
- C. Release prompt, model, and TensorRT-LLM changes together with one aggregate score.
- D. Increase model capacity or context length while leaving NeMo Agent Toolkit implicit.
- Answer: A
- Explanation: NeMo Agent Toolkit is the missing control in this scenario. The right answer makes it explicit so the system can compose framework-flexible agent workflows with tools, retrievers, and observability.
- Why B is wrong: It moves attention to a neighboring control instead of making NeMo Agent Toolkit testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether NeMo Agent Toolkit fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q75: A telecom network operations team is triaging a failed pilot for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options. The failure appears when the system keeps guardrails as document ACLs as the workaround. The release needs a design step that can control dialog, retrieval, tool, and output behavior. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-015
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Guardrails; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Curator as the main gate even though reviewers are asking for NeMo Guardrails evidence.
- B. Add a release gate for NeMo Guardrails: control dialog, retrieval, tool, and output behavior.
- C. Release prompt, model, and NeMo Curator changes together with one aggregate score.
- D. Increase model capacity or context length while leaving NeMo Guardrails implicit.
- Answer: B
- Explanation: NeMo Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can control dialog, retrieval, tool, and output behavior.
- Why A is wrong: It moves attention to a neighboring control instead of making NeMo Guardrails testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether NeMo Guardrails fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q76: A pharmaceutical research team is triaging a failed pilot for an NVIDIA-backed agent platform where teams must choose the right component. The failure appears when the system keeps NIM as the model family as the workaround. The release needs a design step that can package optimized model APIs for LLMs, embeddings, and rerankers. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-016
- Domain: NVIDIA Platform Implementation
- Topic: NIM; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Curator as the main gate even though reviewers are asking for NIM evidence.
- B. Move the check to post-release monitoring without changing the release path for NIM.
- C. Change the design around NIM so the system can package optimized model APIs for LLMs, embeddings, and rerankers.
- D. Increase model capacity or context length while leaving NIM implicit.
- Answer: C
- Explanation: NIM is the missing control in this scenario. The right answer makes it explicit so the system can package optimized model APIs for LLMs, embeddings, and rerankers.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs NIM controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q77: A semiconductor design group is triaging a failed pilot for a production LLM stack using NVIDIA tools. The current design still relies on NeMo Curator for live RAG. Reviewers need a control that can build enterprise extraction, embedding, indexing, retrieval, and reranking. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-017
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Retriever; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NIM as the main gate even though reviewers are asking for NeMo Retriever evidence.
- B. Move the check to post-release monitoring without changing the release path for NeMo Retriever.
- C. Keep NeMo Curator for live RAG as the main control and add a dashboard for final outputs.
- D. Instrument and enforce NeMo Retriever; the system must build enterprise extraction, embedding, indexing, retrieval, and reranking.
- Answer: D
- Explanation: NeMo Retriever is the missing control in this scenario. The right answer makes it explicit so the system can build enterprise extraction, embedding, indexing, retrieval, and reranking.
- Why A is wrong: It moves attention to a neighboring control instead of making NeMo Retriever testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs NeMo Retriever controlled before release or execution.
- Why C is wrong: It keeps NeMo Curator for live RAG in control instead of adding a measurable NeMo Retriever decision point.

### Q78: A manufacturing quality team is triaging a failed pilot for a production LLM stack using NVIDIA tools. The team can reproduce the failure around production uptime as quality evaluation. The missing control is the one that can run model, RAG, and agent evaluations with benchmark and judge workflows. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-018
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Evaluator; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Put NeMo Evaluator before rollout so the team can run model, RAG, and agent evaluations with benchmark and judge workflows.
- B. Move the check to post-release monitoring without changing the release path for NeMo Evaluator.
- C. Keep production uptime as quality evaluation as the main control and add a dashboard for final outputs.
- D. Prioritize NeMo Guardrails even though the observed failure is around NeMo Evaluator.
- Answer: A
- Explanation: NeMo Evaluator is the missing control in this scenario. The right answer makes it explicit so the system can run model, RAG, and agent evaluations with benchmark and judge workflows.
- Why B is wrong: Monitoring is useful, but this scenario needs NeMo Evaluator controlled before release or execution.
- Why C is wrong: It keeps production uptime as quality evaluation in control instead of adding a measurable NeMo Evaluator decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making NeMo Evaluator testable in the scenario.

### Q79: A logistics planning team is triaging a failed pilot for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options. The clue is about where the work happens, not which name is familiar. The safer design is the one that can prepare, deduplicate, filter, and clean corpora before training or indexing. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-019
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Curator; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Release prompt, model, and Nsight Systems changes together with one aggregate score.
- B. Make NeMo Curator explicit in the workflow: prepare, deduplicate, filter, and clean corpora before training or indexing.
- C. Keep Curator as the live retriever as the main control and add a dashboard for final outputs.
- D. Prioritize NIM Operator even though the observed failure is around NeMo Curator.
- Answer: B
- Explanation: NeMo Curator is the missing control in this scenario. The right answer makes it explicit so the system can prepare, deduplicate, filter, and clean corpora before training or indexing.
- Why A is wrong: Changing several layers at once makes it harder to prove whether NeMo Curator fixed the failure.
- Why C is wrong: It keeps Curator as the live retriever in control instead of adding a measurable NeMo Curator decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making NeMo Curator testable in the scenario.

### Q80: An insurance claims group passes the happy-path demo for an NVIDIA-backed agent platform where teams must choose the right component, but nIM Operator as the inference engine is being used as the shortcut, but it does not give the team a reliable way to manage NIM deployments on Kubernetes with lifecycle and scaling controls. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-020
- Domain: NVIDIA Platform Implementation
- Topic: NIM Operator; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving NIM Operator implicit.
- B. Use NIM Operator as the control boundary and require the system to manage NIM deployments on Kubernetes with lifecycle and scaling controls.
- C. Prioritize Nemotron models even though the observed failure is around NIM Operator.
- D. Release prompt, model, and NGC changes together with one aggregate score.
- Answer: B
- Explanation: NIM Operator is the missing control in this scenario. The right answer makes it explicit so the system can manage NIM deployments on Kubernetes with lifecycle and scaling controls.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether NIM Operator fixed the failure.

### Q81: During an architecture review, a pharmaceutical research team finds that the team can reproduce the failure around TensorRT-LLM as an orchestration framework. The missing control is the one that can optimize LLM inference with runtime techniques such as batching and KV-cache handling. What is the best next step?
- ID: aai-hf-nvidia-platform-implementation-021
- Domain: NVIDIA Platform Implementation
- Topic: TensorRT-LLM; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Add a release gate for TensorRT-LLM: optimize LLM inference with runtime techniques such as batching and KV-cache handling.
- B. Release prompt, model, and Nemotron models changes together with one aggregate score.
- C. Increase model capacity or context length while leaving TensorRT-LLM implicit.
- D. Use Nemotron models as the main gate even though reviewers are asking for TensorRT-LLM evidence.
- Answer: A
- Explanation: TensorRT-LLM is the missing control in this scenario. The right answer makes it explicit so the system can optimize LLM inference with runtime techniques such as batching and KV-cache handling.
- Why B is wrong: Changing several layers at once makes it harder to prove whether TensorRT-LLM fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making TensorRT-LLM testable in the scenario.

### Q82: A global retailer is triaging a failed pilot for a production LLM stack using NVIDIA tools. The team can reproduce the failure around Triton as a model family. The missing control is the one that can serve multi-framework models with batching and ensemble patterns. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-022
- Domain: NVIDIA Platform Implementation
- Topic: Triton Inference Server; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving Triton Inference Server implicit.
- B. Use NeMo Guardrails as the main gate even though reviewers are asking for Triton Inference Server evidence.
- C. Move the check to post-release monitoring without changing the release path for Triton Inference Server.
- D. Change the design around Triton Inference Server so the system can serve multi-framework models with batching and ensemble patterns.
- Answer: D
- Explanation: Triton Inference Server is the missing control in this scenario. The right answer makes it explicit so the system can serve multi-framework models with batching and ensemble patterns.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making Triton Inference Server testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs Triton Inference Server controlled before release or execution.

### Q83: A hospital operations team is triaging a failed pilot for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options. The clue is about where the work happens, not which name is familiar. The safer design is the one that can start with end-to-end CPU/GPU timeline profiling. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-023
- Domain: NVIDIA Platform Implementation
- Topic: Nsight Systems; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for Nsight Systems.
- B. Keep kernel metrics before finding the hot kernel as the main control and add a dashboard for final outputs.
- C. Instrument and enforce Nsight Systems; the system must start with end-to-end CPU/GPU timeline profiling.
- D. Use Nsight Compute as the main gate even though reviewers are asking for Nsight Systems evidence.
- Answer: C
- Explanation: Nsight Systems is the missing control in this scenario. The right answer makes it explicit so the system can start with end-to-end CPU/GPU timeline profiling.
- Why A is wrong: Monitoring is useful, but this scenario needs Nsight Systems controlled before release or execution.
- Why B is wrong: It keeps kernel metrics before finding the hot kernel in control instead of adding a measurable Nsight Systems decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making Nsight Systems testable in the scenario.

### Q84: A semiconductor design group is choosing between a design centered on whole-application diagnosis from kernel metrics first and one that makes Nsight Compute explicit for an NVIDIA-backed agent platform where teams must choose the right component. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-024
- Domain: NVIDIA Platform Implementation
- Topic: Nsight Compute; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Prioritize NIM Operator even though the observed failure is around Nsight Compute.
- B. Put Nsight Compute before rollout so the team can inspect a known hot CUDA kernel after timeline profiling.
- C. Move the check to post-release monitoring without changing the release path for Nsight Compute.
- D. Keep whole-application diagnosis from kernel metrics first as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Nsight Compute is the missing control in this scenario. The right answer makes it explicit so the system can inspect a known hot CUDA kernel after timeline profiling.
- Why A is wrong: It moves attention to a neighboring control instead of making Nsight Compute testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs Nsight Compute controlled before release or execution.
- Why D is wrong: It keeps whole-application diagnosis from kernel metrics first in control instead of adding a measurable Nsight Compute decision point.

### Q85: An automotive support team is choosing between a design centered on NGC as the runtime endpoint and one that makes NGC explicit for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-025
- Domain: NVIDIA Platform Implementation
- Topic: NGC; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Make NGC explicit in the workflow: catalog and version model artifacts, containers, and resources.
- B. Keep NGC as the runtime endpoint as the main control and add a dashboard for final outputs.
- C. Prioritize NeMo Guardrails even though the observed failure is around NGC.
- D. Release prompt, model, and NeMo Evaluator changes together with one aggregate score.
- Answer: A
- Explanation: NGC is the missing control in this scenario. The right answer makes it explicit so the system can catalog and version model artifacts, containers, and resources.
- Why B is wrong: It keeps NGC as the runtime endpoint in control instead of adding a measurable NGC decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making NGC testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether NGC fixed the failure.

### Q86: A logistics planning team passes the happy-path demo for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options, but the failure appears when the system keeps Nemotron as the serving gateway as the workaround. The release needs a design step that can choose NVIDIA model families for reasoning, reward, or instruction-following tasks. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-026
- Domain: NVIDIA Platform Implementation
- Topic: Nemotron models; agentic_ai_professional
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Prioritize NeMo Agent Toolkit even though the observed failure is around Nemotron models.
- B. Release prompt, model, and Nsight Systems changes together with one aggregate score.
- C. Increase model capacity or context length while leaving Nemotron models implicit.
- D. Use Nemotron models as the control boundary and require the system to choose NVIDIA model families for reasoning, reward, or instruction-following tasks.
- Answer: D
- Explanation: Nemotron models is the missing control in this scenario. The right answer makes it explicit so the system can choose NVIDIA model families for reasoning, reward, or instruction-following tasks.
- Why A is wrong: It moves attention to a neighboring control instead of making Nemotron models testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether Nemotron models fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q87: A public-sector casework team is triaging a failed pilot for a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options. The current design still relies on CUDA Graphs as the agent framework. Reviewers need a control that can compose framework-flexible agent workflows with tools, retrievers, and observability. Which control addresses the root cause?
- ID: aai-hf-nvidia-platform-implementation-027
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Agent Toolkit; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Increase model capacity or context length while leaving NeMo Agent Toolkit implicit.
- B. Use NGC as the main gate even though reviewers are asking for NeMo Agent Toolkit evidence.
- C. Add a release gate for NeMo Agent Toolkit: compose framework-flexible agent workflows with tools, retrievers, and observability.
- D. Release prompt, model, and NGC changes together with one aggregate score.
- Answer: C
- Explanation: NeMo Agent Toolkit is the missing control in this scenario. The right answer makes it explicit so the system can compose framework-flexible agent workflows with tools, retrievers, and observability.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making NeMo Agent Toolkit testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether NeMo Agent Toolkit fixed the failure.

### Q88: A semiconductor design group passes the happy-path demo for a production LLM stack using NVIDIA tools, but the failure appears when the system keeps guardrails as document ACLs as the workaround. The release needs a design step that can control dialog, retrieval, tool, and output behavior. Which change should be made before release?
- ID: aai-hf-nvidia-platform-implementation-028
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Guardrails; agentic_ai_professional
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for NeMo Guardrails.
- B. Change the design around NeMo Guardrails so the system can control dialog, retrieval, tool, and output behavior.
- C. Increase model capacity or context length while leaving NeMo Guardrails implicit.
- D. Use TensorRT-LLM as the main gate even though reviewers are asking for NeMo Guardrails evidence.
- Answer: B
- Explanation: NeMo Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can control dialog, retrieval, tool, and output behavior.
- Why A is wrong: Monitoring is useful, but this scenario needs NeMo Guardrails controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making NeMo Guardrails testable in the scenario.

### Q89: An automotive support team is choosing between a design centered on NIM as the model family and one that makes NIM explicit for an NVIDIA-backed agent platform where teams must choose the right component. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-029
- Domain: NVIDIA Platform Implementation
- Topic: NIM; agentic_ai_professional
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Instrument and enforce NIM; the system must package optimized model APIs for LLMs, embeddings, and rerankers.
- B. Use NeMo Agent Toolkit as the main gate even though reviewers are asking for NIM evidence.
- C. Move the check to post-release monitoring without changing the release path for NIM.
- D. Keep NIM as the model family as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: NIM is the missing control in this scenario. The right answer makes it explicit so the system can package optimized model APIs for LLMs, embeddings, and rerankers.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs NIM controlled before release or execution.
- Why D is wrong: It keeps NIM as the model family in control instead of adding a measurable NIM decision point.

### Q90: A global retailer is choosing between a design centered on NeMo Curator for live RAG and one that makes NeMo Retriever explicit for an NVIDIA-backed agent platform where teams must choose the right component. Which design should win?
- ID: aai-hf-nvidia-platform-implementation-030
- Domain: NVIDIA Platform Implementation
- Topic: NeMo Retriever; agentic_ai_professional
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Keep NeMo Curator for live RAG as the main control and add a dashboard for final outputs.
- B. Prioritize Nsight Compute even though the observed failure is around NeMo Retriever.
- C. Put NeMo Retriever before rollout so the team can build enterprise extraction, embedding, indexing, retrieval, and reranking.
- D. Move the check to post-release monitoring without changing the release path for NeMo Retriever.
- Answer: C
- Explanation: NeMo Retriever is the missing control in this scenario. The right answer makes it explicit so the system can build enterprise extraction, embedding, indexing, retrieval, and reranking.
- Why A is wrong: It keeps NeMo Curator for live RAG in control instead of adding a measurable NeMo Retriever decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making NeMo Retriever testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs NeMo Retriever controlled before release or execution.

### Q91: A global retailer is triaging a failed pilot for a mature deployment with changing user traffic. Route mix, retrieval hit rate, p99, safety blocks, and escalation rates are drifting. The safer design is the one that can capture spans for model, retrieval, tools, guardrails, latency, and cost. Which control addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-001
- Domain: Run, Monitor, and Maintain
- Topic: trace replay; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Keep HTTP 200 as the only success signal as the main control and add a dashboard for final outputs.
- C. Prioritize audit trail even though the observed failure is around trace replay.
- D. Release prompt, model, and observability changes together with one aggregate score.
- Answer: A
- Explanation: Trace replay is the missing control in this scenario. The right answer makes it explicit so the system can capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether trace replay fixed the failure.

### Q92: An automotive support team is building a release that caused a subtle quality regression. The current design still relies on final answer logs only. Reviewers need a control that can record model, prompt, tool, retrieval, guardrail, approval, and version metadata. Which design is the best first change?
- ID: aai-hf-run-monitor-and-maintain-002
- Domain: Run, Monitor, and Maintain
- Topic: audit trail; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Prioritize TTFT monitoring even though the observed failure is around audit trail.
- B. Release prompt, model, and human-on-the-loop sampling changes together with one aggregate score.
- C. Increase model capacity or context length while leaving audit trail implicit.
- D. Use audit trail as the control boundary and require the system to record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Answer: D
- Explanation: Audit trail is the missing control in this scenario. The right answer makes it explicit so the system can record model, prompt, tool, retrieval, guardrail, approval, and version metadata.
- Why A is wrong: It moves attention to a neighboring control instead of making audit trail testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether audit trail fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q93: A semiconductor design group is building a live agent that uses retrieval, tools, guardrails, and model calls. The current design still relies on average latency dashboards. Reviewers need a control that can monitor tail latency alongside task quality and safety. Which architecture keeps the boundary cleanest?
- ID: aai-hf-run-monitor-and-maintain-003
- Domain: Run, Monitor, and Maintain
- Topic: p95/p99 SLOs; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving p95/p99 SLOs implicit.
- B. Use observability as the main gate even though reviewers are asking for p95/p99 SLOs evidence.
- C. Add a release gate for p95/p99 SLOs: monitor tail latency alongside task quality and safety.
- D. Release prompt, model, and observability changes together with one aggregate score.
- Answer: C
- Explanation: P95/p99 SLOs is the missing control in this scenario. The right answer makes it explicit so the system can monitor tail latency alongside task quality and safety.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making p95/p99 SLOs testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether p95/p99 SLOs fixed the failure.

### Q94: During an architecture review, a hospital operations team finds that the team can reproduce the failure around tokens-per-second only. The missing control is the one that can track first-token responsiveness separately from total latency. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-004
- Domain: Run, Monitor, and Maintain
- Topic: TTFT monitoring; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for TTFT monitoring.
- B. Change the design around TTFT monitoring so the system can track first-token responsiveness separately from total latency.
- C. Increase model capacity or context length while leaving TTFT monitoring implicit.
- D. Use drift monitoring as the main gate even though reviewers are asking for TTFT monitoring evidence.
- Answer: B
- Explanation: TTFT monitoring is the missing control in this scenario. The right answer makes it explicit so the system can track first-token responsiveness separately from total latency.
- Why A is wrong: Monitoring is useful, but this scenario needs TTFT monitoring controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making TTFT monitoring testable in the scenario.

### Q95: A telecom network operations team passes the happy-path demo for a live agent that uses retrieval, tools, guardrails, and model calls, but incidents cannot be replayed or tied to model, prompt, tool, or policy versions. The safer design is the one that can measure cost per task and per successful answer. Which change should be made before release?
- ID: aai-hf-run-monitor-and-maintain-005
- Domain: Run, Monitor, and Maintain
- Topic: cost monitoring; agentic_ai_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce cost monitoring; the system must measure cost per task and per successful answer.
- B. Use p95/p99 SLOs as the main gate even though reviewers are asking for cost monitoring evidence.
- C. Move the check to post-release monitoring without changing the release path for cost monitoring.
- D. Keep GPU utilization alone as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Cost monitoring is the missing control in this scenario. The right answer makes it explicit so the system can measure cost per task and per successful answer.
- Why B is wrong: It moves attention to a neighboring control instead of making cost monitoring testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs cost monitoring controlled before release or execution.
- Why D is wrong: It keeps GPU utilization alone in control instead of adding a measurable cost monitoring decision point.

### Q96: An automotive support team is building a mature deployment with changing user traffic. Route mix, retrieval hit rate, p99, safety blocks, and escalation rates are drifting. The safer design is the one that can watch route mix, retrieval hit rate, judge scores, and escalation rates. Which choice addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-006
- Domain: Run, Monitor, and Maintain
- Topic: drift monitoring; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for drift monitoring.
- B. Keep average latency only as the main control and add a dashboard for final outputs.
- C. Prioritize cost monitoring even though the observed failure is around drift monitoring.
- D. Put drift monitoring before rollout so the team can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: Drift monitoring is the missing control in this scenario. The right answer makes it explicit so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: Monitoring is useful, but this scenario needs drift monitoring controlled before release or execution.
- Why B is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.

### Q97: During an architecture review, a bank fraud team finds that the team can reproduce the failure around manual transcript review only. The missing control is the one that can convert incidents into regression tests and rollback rules. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-007
- Domain: Run, Monitor, and Maintain
- Topic: incident response; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize human-on-the-loop sampling even though the observed failure is around incident response.
- B. Release prompt, model, and p95/p99 SLOs changes together with one aggregate score.
- C. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- D. Keep manual transcript review only as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Incident response is the missing control in this scenario. The right answer makes it explicit so the system can convert incidents into regression tests and rollback rules.
- Why A is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether incident response fixed the failure.
- Why D is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.

### Q98: A manufacturing quality team passes the happy-path demo for a mature deployment with changing user traffic, but the failure appears when the system keeps model tokens/sec alone as the workaround. The release needs a design step that can measure task success, safety blocks, p95/p99, and cost together. Which change should be made before release?
- ID: aai-hf-run-monitor-and-maintain-008
- Domain: Run, Monitor, and Maintain
- Topic: SLOs; agentic_ai_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving SLOs implicit.
- B. Use SLOs as the control boundary and require the system to measure task success, safety blocks, p95/p99, and cost together.
- C. Prioritize incident response even though the observed failure is around SLOs.
- D. Release prompt, model, and TTFT monitoring changes together with one aggregate score.
- Answer: B
- Explanation: SLOs is the missing control in this scenario. The right answer makes it explicit so the system can measure task success, safety blocks, p95/p99, and cost together.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making SLOs testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether SLOs fixed the failure.

### Q99: A global retailer is triaging a failed pilot for a mature deployment with changing user traffic. The team can reproduce the failure around separate logs with no request ID. The missing control is the one that can correlate workflow spans across services. Which control addresses the root cause?
- ID: aai-hf-run-monitor-and-maintain-009
- Domain: Run, Monitor, and Maintain
- Topic: observability; agentic_ai_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for observability: correlate workflow spans across services.
- B. Release prompt, model, and rollback evidence changes together with one aggregate score.
- C. Increase model capacity or context length while leaving observability implicit.
- D. Use rollback evidence as the main gate even though reviewers are asking for observability evidence.
- Answer: A
- Explanation: Observability is the missing control in this scenario. The right answer makes it explicit so the system can correlate workflow spans across services.
- Why B is wrong: Changing several layers at once makes it harder to prove whether observability fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making observability testable in the scenario.

### Q100: During an architecture review, an automotive support team finds that incidents cannot be replayed or tied to model, prompt, tool, or policy versions. The safer design is the one that can connect bad releases to versioned artifacts and eval deltas. What is the best next step?
- ID: aai-hf-run-monitor-and-maintain-010
- Domain: Run, Monitor, and Maintain
- Topic: rollback evidence; agentic_ai_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use TTFT monitoring as the main gate even though reviewers are asking for rollback evidence evidence.
- B. Move the check to post-release monitoring without changing the release path for rollback evidence.
- C. Change the design around rollback evidence so the system can connect bad releases to versioned artifacts and eval deltas.
- D. Increase model capacity or context length while leaving rollback evidence implicit.
- Answer: C
- Explanation: Rollback evidence is the missing control in this scenario. The right answer makes it explicit so the system can connect bad releases to versioned artifacts and eval deltas.
- Why A is wrong: It moves attention to a neighboring control instead of making rollback evidence testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs rollback evidence controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

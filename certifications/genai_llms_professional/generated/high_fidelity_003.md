# High Fidelity Generated Questions 003

## Questions

### Q1: An insurance claims group is building a model-capability design. The team can reproduce the failure around embedding similarity as the final answer. The missing control is the one that can rescore retrieved candidates for relevance before generation. Which design is the best first change?
- ID: genl-hf-llm-architecture-010
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- B. Move the check to post-release monitoring without changing the release path for rerankers.
- C. Change the design around rerankers so the system can rescore retrieved candidates for relevance before generation.
- D. Increase model capacity or context length while leaving rerankers implicit.
- Answer: C
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs rerankers controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q2: A hospital operations team passes the happy-path demo for a model-capability design, but the failure appears when the system keeps recurrence as the transformer core as the workaround. The release needs a design step that can let tokens attend to context and long-range dependencies. Which change should be made before release?
- ID: genl-hf-llm-architecture-011
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use rerankers as the main gate even though reviewers are asking for self-attention evidence.
- B. Move the check to post-release monitoring without changing the release path for self-attention.
- C. Keep recurrence as the transformer core as the main control and add a dashboard for final outputs.
- D. Instrument and enforce self-attention; the system must let tokens attend to context and long-range dependencies.
- Answer: D
- Explanation: Self-attention is the missing control in this scenario. The right answer makes it explicit so the system can let tokens attend to context and long-range dependencies.
- Why A is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs self-attention controlled before release or execution.
- Why C is wrong: It keeps recurrence as the transformer core in control instead of adding a measurable self-attention decision point.

### Q3: A semiconductor design group passes the happy-path demo for a model-capability design, but the failure appears when the system keeps bidirectional attention for generation as the workaround. The release needs a design step that can prevent decoder positions from seeing future tokens. Which change should be made before release?
- ID: genl-hf-llm-architecture-012
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Put causal masking before rollout so the team can prevent decoder positions from seeing future tokens.
- B. Move the check to post-release monitoring without changing the release path for causal masking.
- C. Keep bidirectional attention for generation as the main control and add a dashboard for final outputs.
- D. Prioritize rerankers even though the observed failure is around causal masking.
- Answer: A
- Explanation: Causal masking is the missing control in this scenario. The right answer makes it explicit so the system can prevent decoder positions from seeing future tokens.
- Why B is wrong: Monitoring is useful, but this scenario needs causal masking controlled before release or execution.
- Why C is wrong: It keeps bidirectional attention for generation in control instead of adding a measurable causal masking decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.

### Q4: A pharmaceutical research team is building a model-capability design. The failure appears when the system keeps all experts active for every token as the workaround. The release needs a design step that can activate sparse experts to increase capacity without full dense compute. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-013
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and causal masking changes together with one aggregate score.
- B. Make MoE routing explicit in the workflow: activate sparse experts to increase capacity without full dense compute.
- C. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- D. Prioritize self-attention even though the observed failure is around MoE routing.
- Answer: B
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: Changing several layers at once makes it harder to prove whether MoE routing fixed the failure.
- Why C is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.

### Q5: A global retailer is triaging a failed pilot for a model-capability design. The failure appears when the system keeps using a chat model endpoint for vector search as the workaround. The release needs a design step that can produce vector representations for retrieval and similarity. Which control addresses the root cause?
- ID: genl-hf-llm-architecture-014
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and self-attention changes together with one aggregate score.
- B. Increase model capacity or context length while leaving embedding models implicit.
- C. Use embedding models as the control boundary and require the system to produce vector representations for retrieval and similarity.
- D. Prioritize causal masking even though the observed failure is around embedding models.
- Answer: C
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q6: A manufacturing quality team passes the happy-path demo for a model-capability design, but embedding similarity as the final answer is being used as the shortcut, but it does not give the team a reliable way to rescore retrieved candidates for relevance before generation. Which change should be made before release?
- ID: genl-hf-llm-architecture-015
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and embedding models changes together with one aggregate score.
- B. Increase model capacity or context length while leaving rerankers implicit.
- C. Use embedding models as the main gate even though reviewers are asking for rerankers evidence.
- D. Add a release gate for rerankers: rescore retrieved candidates for relevance before generation.
- Answer: D
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.

### Q7: During an architecture review, a cybersecurity response team finds that the failure appears when the system keeps recurrence as the transformer core as the workaround. The release needs a design step that can let tokens attend to context and long-range dependencies. What is the best next step?
- ID: genl-hf-llm-architecture-016
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around self-attention so the system can let tokens attend to context and long-range dependencies.
- B. Increase model capacity or context length while leaving self-attention implicit.
- C. Use embedding models as the main gate even though reviewers are asking for self-attention evidence.
- D. Move the check to post-release monitoring without changing the release path for self-attention.
- Answer: A
- Explanation: Self-attention is the missing control in this scenario. The right answer makes it explicit so the system can let tokens attend to context and long-range dependencies.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs self-attention controlled before release or execution.

### Q8: An insurance claims group is building a model-capability design. The current design still relies on bidirectional attention for generation. Reviewers need a control that can prevent decoder positions from seeing future tokens. Which design is the best first change?
- ID: genl-hf-llm-architecture-017
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep bidirectional attention for generation as the main control and add a dashboard for final outputs.
- B. Instrument and enforce causal masking; the system must prevent decoder positions from seeing future tokens.
- C. Use MoE routing as the main gate even though reviewers are asking for causal masking evidence.
- D. Move the check to post-release monitoring without changing the release path for causal masking.
- Answer: B
- Explanation: Causal masking is the missing control in this scenario. The right answer makes it explicit so the system can prevent decoder positions from seeing future tokens.
- Why A is wrong: It keeps bidirectional attention for generation in control instead of adding a measurable causal masking decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs causal masking controlled before release or execution.

### Q9: A global retailer passes the happy-path demo for a model-capability design, but the failure appears when the system keeps all experts active for every token as the workaround. The release needs a design step that can activate sparse experts to increase capacity without full dense compute. Which change should be made before release?
- ID: genl-hf-llm-architecture-018
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- B. Prioritize causal masking even though the observed failure is around MoE routing.
- C. Put MoE routing before rollout so the team can activate sparse experts to increase capacity without full dense compute.
- D. Move the check to post-release monitoring without changing the release path for MoE routing.
- Answer: C
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs MoE routing controlled before release or execution.

### Q10: A hospital operations team is triaging a failed pilot for a model-capability design. The failure is tied to embedding models. The safer design is the one that can produce vector representations for retrieval and similarity. Which control addresses the root cause?
- ID: genl-hf-llm-architecture-019
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep using a chat model endpoint for vector search as the main control and add a dashboard for final outputs.
- B. Prioritize MoE routing even though the observed failure is around embedding models.
- C. Release prompt, model, and rerankers changes together with one aggregate score.
- D. Make embedding models explicit in the workflow: produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether embedding models fixed the failure.

### Q11: A semiconductor design group is choosing between a design centered on embedding similarity as the final answer and one that makes rerankers explicit for a model-capability design. Which design should win?
- ID: genl-hf-llm-architecture-020
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize embedding models even though the observed failure is around rerankers.
- B. Release prompt, model, and MoE routing changes together with one aggregate score.
- C. Increase model capacity or context length while leaving rerankers implicit.
- D. Use rerankers as the control boundary and require the system to rescore retrieved candidates for relevance before generation.
- Answer: D
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q12: A bank fraud team is triaging a failed pilot for a model-capability design. The current design still relies on recurrence as the transformer core. Reviewers need a control that can let tokens attend to context and long-range dependencies. Which control addresses the root cause?
- ID: genl-hf-llm-architecture-021
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving self-attention implicit.
- B. Use embedding models as the main gate even though reviewers are asking for self-attention evidence.
- C. Add a release gate for self-attention: let tokens attend to context and long-range dependencies.
- D. Release prompt, model, and embedding models changes together with one aggregate score.
- Answer: C
- Explanation: Self-attention is the missing control in this scenario. The right answer makes it explicit so the system can let tokens attend to context and long-range dependencies.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether self-attention fixed the failure.

### Q13: A manufacturing quality team is building a model-capability design. The current design still relies on bidirectional attention for generation. Reviewers need a control that can prevent decoder positions from seeing future tokens. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-022
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for causal masking.
- B. Change the design around causal masking so the system can prevent decoder positions from seeing future tokens.
- C. Increase model capacity or context length while leaving causal masking implicit.
- D. Use rerankers as the main gate even though reviewers are asking for causal masking evidence.
- Answer: B
- Explanation: Causal masking is the missing control in this scenario. The right answer makes it explicit so the system can prevent decoder positions from seeing future tokens.
- Why A is wrong: Monitoring is useful, but this scenario needs causal masking controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.

### Q14: A telecom network operations team is building a model-capability design. The current design still relies on all experts active for every token. Reviewers need a control that can activate sparse experts to increase capacity without full dense compute. Which architecture keeps the boundary cleanest?
- ID: genl-hf-llm-architecture-023
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Instrument and enforce MoE routing; the system must activate sparse experts to increase capacity without full dense compute.
- B. Use self-attention as the main gate even though reviewers are asking for MoE routing evidence.
- C. Move the check to post-release monitoring without changing the release path for MoE routing.
- D. Keep all experts active for every token as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs MoE routing controlled before release or execution.
- Why D is wrong: It keeps all experts active for every token in control instead of adding a measurable MoE routing decision point.

### Q15: During an architecture review, a pharmaceutical research team finds that the team can reproduce the failure around using a chat model endpoint for vector search. The missing control is the one that can produce vector representations for retrieval and similarity. What is the best next step?
- ID: genl-hf-llm-architecture-024
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for embedding models.
- B. Keep using a chat model endpoint for vector search as the main control and add a dashboard for final outputs.
- C. Prioritize self-attention even though the observed failure is around embedding models.
- D. Put embedding models before rollout so the team can produce vector representations for retrieval and similarity.
- Answer: D
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: Monitoring is useful, but this scenario needs embedding models controlled before release or execution.
- Why B is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q16: A cybersecurity response team passes the happy-path demo for a model-capability design, but the current design still relies on embedding similarity as the final answer. Reviewers need a control that can rescore retrieved candidates for relevance before generation. Which change should be made before release?
- ID: genl-hf-llm-architecture-025
- Domain: LLM Architecture
- Topic: rerankers; genai_llms_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize embedding models even though the observed failure is around rerankers.
- B. Release prompt, model, and MoE routing changes together with one aggregate score.
- C. Make rerankers explicit in the workflow: rescore retrieved candidates for relevance before generation.
- D. Keep embedding similarity as the final answer as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: Rerankers is the missing control in this scenario. The right answer makes it explicit so the system can rescore retrieved candidates for relevance before generation.
- Why A is wrong: It moves attention to a neighboring control instead of making rerankers testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether rerankers fixed the failure.
- Why D is wrong: It keeps embedding similarity as the final answer in control instead of adding a measurable rerankers decision point.

### Q17: A public-sector casework team is building a model-capability design. The failure appears when the system keeps recurrence as the transformer core as the workaround. The release needs a design step that can let tokens attend to context and long-range dependencies. Which choice addresses the root cause?
- ID: genl-hf-llm-architecture-026
- Domain: LLM Architecture
- Topic: self-attention; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving self-attention implicit.
- B. Use self-attention as the control boundary and require the system to let tokens attend to context and long-range dependencies.
- C. Prioritize embedding models even though the observed failure is around self-attention.
- D. Release prompt, model, and rerankers changes together with one aggregate score.
- Answer: B
- Explanation: Self-attention is the missing control in this scenario. The right answer makes it explicit so the system can let tokens attend to context and long-range dependencies.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making self-attention testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether self-attention fixed the failure.

### Q18: During an architecture review, a global retailer finds that the failure appears when the system keeps bidirectional attention for generation as the workaround. The release needs a design step that can prevent decoder positions from seeing future tokens. What is the best next step?
- ID: genl-hf-llm-architecture-027
- Domain: LLM Architecture
- Topic: causal masking; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Add a release gate for causal masking: prevent decoder positions from seeing future tokens.
- B. Release prompt, model, and self-attention changes together with one aggregate score.
- C. Increase model capacity or context length while leaving causal masking implicit.
- D. Use self-attention as the main gate even though reviewers are asking for causal masking evidence.
- Answer: A
- Explanation: Causal masking is the missing control in this scenario. The right answer makes it explicit so the system can prevent decoder positions from seeing future tokens.
- Why B is wrong: Changing several layers at once makes it harder to prove whether causal masking fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making causal masking testable in the scenario.

### Q19: An insurance claims group passes the happy-path demo for a model-capability design, but the failure is tied to MoE routing. The safer design is the one that can activate sparse experts to increase capacity without full dense compute. Which change should be made before release?
- ID: genl-hf-llm-architecture-028
- Domain: LLM Architecture
- Topic: MoE routing; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving MoE routing implicit.
- B. Use causal masking as the main gate even though reviewers are asking for MoE routing evidence.
- C. Move the check to post-release monitoring without changing the release path for MoE routing.
- D. Change the design around MoE routing so the system can activate sparse experts to increase capacity without full dense compute.
- Answer: D
- Explanation: MoE routing is the missing control in this scenario. The right answer makes it explicit so the system can activate sparse experts to increase capacity without full dense compute.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making MoE routing testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs MoE routing controlled before release or execution.

### Q20: A bank fraud team is choosing between a design centered on using a chat model endpoint for vector search and one that makes embedding models explicit for a model-capability design. Which design should win?
- ID: genl-hf-llm-architecture-029
- Domain: LLM Architecture
- Topic: embedding models; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for embedding models.
- B. Keep using a chat model endpoint for vector search as the main control and add a dashboard for final outputs.
- C. Instrument and enforce embedding models; the system must produce vector representations for retrieval and similarity.
- D. Use MoE routing as the main gate even though reviewers are asking for embedding models evidence.
- Answer: C
- Explanation: Embedding models is the missing control in this scenario. The right answer makes it explicit so the system can produce vector representations for retrieval and similarity.
- Why A is wrong: Monitoring is useful, but this scenario needs embedding models controlled before release or execution.
- Why B is wrong: It keeps using a chat model endpoint for vector search in control instead of adding a measurable embedding models decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making embedding models testable in the scenario.

### Q21: During an architecture review, a global retailer finds that the failure appears when the system keeps treating open weights as unrestricted use as the workaround. The release needs a design step that can respect model, dataset, and output-use restrictions. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-001
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize bias evaluation even though the observed failure is around license constraints.
- B. Release prompt, model, and privacy controls changes together with one aggregate score.
- C. Make license constraints explicit in the workflow: respect model, dataset, and output-use restrictions.
- D. Keep treating open weights as unrestricted use as the main control and add a dashboard for final outputs.
- Answer: C
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether license constraints fixed the failure.
- Why D is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.

### Q22: During an architecture review, an automotive support team finds that the failure appears when the system keeps training on raw confidential logs as the workaround. The release needs a design step that can redact sensitive data and enforce retention limits. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-002
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving privacy controls implicit.
- B. Use privacy controls as the control boundary and require the system to redact sensitive data and enforce retention limits.
- C. Prioritize auditability even though the observed failure is around privacy controls.
- D. Release prompt, model, and guardrails changes together with one aggregate score.
- Answer: B
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether privacy controls fixed the failure.

### Q23: During an architecture review, a bank fraud team finds that the team can reproduce the failure around overall accuracy only. The missing control is the one that can measure subgroup performance and harmful outputs. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-003
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Add a release gate for bias evaluation: measure subgroup performance and harmful outputs.
- B. Release prompt, model, and license constraints changes together with one aggregate score.
- C. Increase model capacity or context length while leaving bias evaluation implicit.
- D. Use license constraints as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: A
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why B is wrong: Changing several layers at once makes it harder to prove whether bias evaluation fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q24: A public-sector casework team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. The current design still relies on guardrails as a replacement for IAM. Reviewers need a control that can apply input/output and tool-use policies around the model. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-004
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving guardrails implicit.
- B. Use license constraints as the main gate even though reviewers are asking for guardrails evidence.
- C. Move the check to post-release monitoring without changing the release path for guardrails.
- D. Change the design around guardrails so the system can apply input/output and tool-use policies around the model.
- Answer: D
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs guardrails controlled before release or execution.

### Q25: A global retailer is building a tool-enabled workflow for high-impact decisions. The current design still relies on unversioned release artifacts. Reviewers need a control that can track data, model, prompt, eval, and approval lineage. Which architecture keeps the boundary cleanest?
- ID: genl-hf-safety-ethics-and-compliance-005
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for auditability.
- B. Keep unversioned release artifacts as the main control and add a dashboard for final outputs.
- C. Instrument and enforce auditability; the system must track data, model, prompt, eval, and approval lineage.
- D. Use license constraints as the main gate even though reviewers are asking for auditability evidence.
- Answer: C
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why A is wrong: Monitoring is useful, but this scenario needs auditability controlled before release or execution.
- Why B is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.

### Q26: During an architecture review, an insurance claims group finds that treating open weights as unrestricted use is being used as the shortcut, but it does not give the team a reliable way to respect model, dataset, and output-use restrictions. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-006
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize privacy controls even though the observed failure is around license constraints.
- B. Put license constraints before rollout so the team can respect model, dataset, and output-use restrictions.
- C. Move the check to post-release monitoring without changing the release path for license constraints.
- D. Keep treating open weights as unrestricted use as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs license constraints controlled before release or execution.
- Why D is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.

### Q27: A bank fraud team is choosing between a design centered on training on raw confidential logs and one that makes privacy controls explicit for a tool-enabled workflow for high-impact decisions. Which design should win?
- ID: genl-hf-safety-ethics-and-compliance-007
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make privacy controls explicit in the workflow: redact sensitive data and enforce retention limits.
- B. Keep training on raw confidential logs as the main control and add a dashboard for final outputs.
- C. Prioritize license constraints even though the observed failure is around privacy controls.
- D. Release prompt, model, and bias evaluation changes together with one aggregate score.
- Answer: A
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why B is wrong: It keeps training on raw confidential logs in control instead of adding a measurable privacy controls decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether privacy controls fixed the failure.

### Q28: A manufacturing quality team is triaging a failed pilot for a system that stores interaction logs and memory. The failure appears when the system keeps overall accuracy only as the workaround. The release needs a design step that can measure subgroup performance and harmful outputs. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-008
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Prioritize license constraints even though the observed failure is around bias evaluation.
- B. Release prompt, model, and privacy controls changes together with one aggregate score.
- C. Increase model capacity or context length while leaving bias evaluation implicit.
- D. Use bias evaluation as the control boundary and require the system to measure subgroup performance and harmful outputs.
- Answer: D
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why A is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether bias evaluation fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q29: During an architecture review, a logistics planning team finds that the team can reproduce the failure around guardrails as a replacement for IAM. The missing control is the one that can apply input/output and tool-use policies around the model. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-009
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving guardrails implicit.
- B. Use auditability as the main gate even though reviewers are asking for guardrails evidence.
- C. Add a release gate for guardrails: apply input/output and tool-use policies around the model.
- D. Release prompt, model, and auditability changes together with one aggregate score.
- Answer: C
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether guardrails fixed the failure.

### Q30: An automotive support team is building a tool-enabled workflow for high-impact decisions. The failure appears when the system keeps unversioned release artifacts as the workaround. The release needs a design step that can track data, model, prompt, eval, and approval lineage. Which choice addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-010
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Change the design around auditability so the system can track data, model, prompt, eval, and approval lineage.
- B. Increase model capacity or context length while leaving auditability implicit.
- C. Use privacy controls as the main gate even though reviewers are asking for auditability evidence.
- D. Move the check to post-release monitoring without changing the release path for auditability.
- Answer: A
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why B is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs auditability controlled before release or execution.

### Q31: A hospital operations team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. The team can reproduce the failure around treating open weights as unrestricted use. The missing control is the one that can respect model, dataset, and output-use restrictions. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-011
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep treating open weights as unrestricted use as the main control and add a dashboard for final outputs.
- B. Instrument and enforce license constraints; the system must respect model, dataset, and output-use restrictions.
- C. Use bias evaluation as the main gate even though reviewers are asking for license constraints evidence.
- D. Move the check to post-release monitoring without changing the release path for license constraints.
- Answer: B
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why A is wrong: It keeps treating open weights as unrestricted use in control instead of adding a measurable license constraints decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs license constraints controlled before release or execution.

### Q32: A semiconductor design group is building a system that stores interaction logs and memory. The team can reproduce the failure around training on raw confidential logs. The missing control is the one that can redact sensitive data and enforce retention limits. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-012
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Keep training on raw confidential logs as the main control and add a dashboard for final outputs.
- B. Prioritize license constraints even though the observed failure is around privacy controls.
- C. Put privacy controls before rollout so the team can redact sensitive data and enforce retention limits.
- D. Move the check to post-release monitoring without changing the release path for privacy controls.
- Answer: C
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why A is wrong: It keeps training on raw confidential logs in control instead of adding a measurable privacy controls decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs privacy controls controlled before release or execution.

### Q33: An automotive support team passes the happy-path demo for a system that stores interaction logs and memory, but the failure appears when the system keeps overall accuracy only as the workaround. The release needs a design step that can measure subgroup performance and harmful outputs. Which change should be made before release?
- ID: genl-hf-safety-ethics-and-compliance-013
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Keep overall accuracy only as the main control and add a dashboard for final outputs.
- B. Prioritize license constraints even though the observed failure is around bias evaluation.
- C. Release prompt, model, and privacy controls changes together with one aggregate score.
- D. Make bias evaluation explicit in the workflow: measure subgroup performance and harmful outputs.
- Answer: D
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why A is wrong: It keeps overall accuracy only in control instead of adding a measurable bias evaluation decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether bias evaluation fixed the failure.

### Q34: A logistics planning team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. Guardrails as a replacement for IAM is being used as the shortcut, but it does not give the team a reliable way to apply input/output and tool-use policies around the model. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-014
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use guardrails as the control boundary and require the system to apply input/output and tool-use policies around the model.
- B. Prioritize bias evaluation even though the observed failure is around guardrails.
- C. Release prompt, model, and auditability changes together with one aggregate score.
- D. Increase model capacity or context length while leaving guardrails implicit.
- Answer: A
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether guardrails fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q35: A manufacturing quality team is choosing between a design centered on unversioned release artifacts and one that makes auditability explicit for an agent that reads retrieved documents and proposes tool actions. Which design should win?
- ID: genl-hf-safety-ethics-and-compliance-015
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use privacy controls as the main gate even though reviewers are asking for auditability evidence.
- B. Add a release gate for auditability: track data, model, prompt, eval, and approval lineage.
- C. Release prompt, model, and privacy controls changes together with one aggregate score.
- D. Increase model capacity or context length while leaving auditability implicit.
- Answer: B
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why C is wrong: Changing several layers at once makes it harder to prove whether auditability fixed the failure.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q36: During an architecture review, a bank fraud team finds that treating open weights as unrestricted use is being used as the shortcut, but it does not give the team a reliable way to respect model, dataset, and output-use restrictions. What is the best next step?
- ID: genl-hf-safety-ethics-and-compliance-016
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use privacy controls as the main gate even though reviewers are asking for license constraints evidence.
- B. Move the check to post-release monitoring without changing the release path for license constraints.
- C. Change the design around license constraints so the system can respect model, dataset, and output-use restrictions.
- D. Increase model capacity or context length while leaving license constraints implicit.
- Answer: C
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs license constraints controlled before release or execution.
- Why D is wrong: It changes capacity or wording before fixing the measured root cause.

### Q37: An automotive support team passes the happy-path demo for an agent that reads retrieved documents and proposes tool actions, but a malicious document tells the agent to ignore approval requirements. The safer design is the one that can redact sensitive data and enforce retention limits. Which change should be made before release?
- ID: genl-hf-safety-ethics-and-compliance-017
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use guardrails as the main gate even though reviewers are asking for privacy controls evidence.
- B. Move the check to post-release monitoring without changing the release path for privacy controls.
- C. Keep training on raw confidential logs as the main control and add a dashboard for final outputs.
- D. Instrument and enforce privacy controls; the system must redact sensitive data and enforce retention limits.
- Answer: D
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why A is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why B is wrong: Monitoring is useful, but this scenario needs privacy controls controlled before release or execution.
- Why C is wrong: It keeps training on raw confidential logs in control instead of adding a measurable privacy controls decision point.

### Q38: A global retailer is choosing between a design centered on overall accuracy only and one that makes bias evaluation explicit for a system that stores interaction logs and memory. Which design should win?
- ID: genl-hf-safety-ethics-and-compliance-018
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Put bias evaluation before rollout so the team can measure subgroup performance and harmful outputs.
- B. Move the check to post-release monitoring without changing the release path for bias evaluation.
- C. Keep overall accuracy only as the main control and add a dashboard for final outputs.
- D. Prioritize privacy controls even though the observed failure is around bias evaluation.
- Answer: A
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why B is wrong: Monitoring is useful, but this scenario needs bias evaluation controlled before release or execution.
- Why C is wrong: It keeps overall accuracy only in control instead of adding a measurable bias evaluation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q39: A public-sector casework team is building an agent that reads retrieved documents and proposes tool actions. The team can reproduce the failure around guardrails as a replacement for IAM. The missing control is the one that can apply input/output and tool-use policies around the model. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-019
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Release prompt, model, and license constraints changes together with one aggregate score.
- B. Make guardrails explicit in the workflow: apply input/output and tool-use policies around the model.
- C. Keep guardrails as a replacement for IAM as the main control and add a dashboard for final outputs.
- D. Prioritize privacy controls even though the observed failure is around guardrails.
- Answer: B
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why A is wrong: Changing several layers at once makes it harder to prove whether guardrails fixed the failure.
- Why C is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.

### Q40: A bank fraud team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. The current design still relies on unversioned release artifacts. Reviewers need a control that can track data, model, prompt, eval, and approval lineage. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-020
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving auditability implicit.
- B. Use auditability as the control boundary and require the system to track data, model, prompt, eval, and approval lineage.
- C. Prioritize privacy controls even though the observed failure is around auditability.
- D. Release prompt, model, and license constraints changes together with one aggregate score.
- Answer: B
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether auditability fixed the failure.

### Q41: A bank fraud team is building a system that stores interaction logs and memory. The failure appears when the system keeps treating open weights as unrestricted use as the workaround. The release needs a design step that can respect model, dataset, and output-use restrictions. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-021
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Add a release gate for license constraints: respect model, dataset, and output-use restrictions.
- B. Release prompt, model, and privacy controls changes together with one aggregate score.
- C. Increase model capacity or context length while leaving license constraints implicit.
- D. Use privacy controls as the main gate even though reviewers are asking for license constraints evidence.
- Answer: A
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why B is wrong: Changing several layers at once makes it harder to prove whether license constraints fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.

### Q42: A manufacturing quality team is triaging a failed pilot for a tool-enabled workflow for high-impact decisions. Reviewers can only inspect the final answer. The safer design is the one that can redact sensitive data and enforce retention limits. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-022
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving privacy controls implicit.
- B. Use license constraints as the main gate even though reviewers are asking for privacy controls evidence.
- C. Move the check to post-release monitoring without changing the release path for privacy controls.
- D. Change the design around privacy controls so the system can redact sensitive data and enforce retention limits.
- Answer: D
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs privacy controls controlled before release or execution.

### Q43: A telecom network operations team is building an agent that reads retrieved documents and proposes tool actions. The current design still relies on overall accuracy only. Reviewers need a control that can measure subgroup performance and harmful outputs. Which control should be added before rollout?
- ID: genl-hf-safety-ethics-and-compliance-023
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for bias evaluation.
- B. Keep overall accuracy only as the main control and add a dashboard for final outputs.
- C. Instrument and enforce bias evaluation; the system must measure subgroup performance and harmful outputs.
- D. Use license constraints as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: C
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why A is wrong: Monitoring is useful, but this scenario needs bias evaluation controlled before release or execution.
- Why B is wrong: It keeps overall accuracy only in control instead of adding a measurable bias evaluation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q44: An insurance claims group passes the happy-path demo for a tool-enabled workflow for high-impact decisions, but the failure appears when the system keeps guardrails as a replacement for IAM as the workaround. The release needs a design step that can apply input/output and tool-use policies around the model. Which change should be made before release?
- ID: genl-hf-safety-ethics-and-compliance-024
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Prioritize auditability even though the observed failure is around guardrails.
- B. Put guardrails before rollout so the team can apply input/output and tool-use policies around the model.
- C. Move the check to post-release monitoring without changing the release path for guardrails.
- D. Keep guardrails as a replacement for IAM as the main control and add a dashboard for final outputs.
- Answer: B
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why A is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs guardrails controlled before release or execution.
- Why D is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q45: A semiconductor design group is triaging a failed pilot for an agent that reads retrieved documents and proposes tool actions. The current design still relies on unversioned release artifacts. Reviewers need a control that can track data, model, prompt, eval, and approval lineage. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-025
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Make auditability explicit in the workflow: track data, model, prompt, eval, and approval lineage.
- B. Keep unversioned release artifacts as the main control and add a dashboard for final outputs.
- C. Prioritize privacy controls even though the observed failure is around auditability.
- D. Release prompt, model, and license constraints changes together with one aggregate score.
- Answer: A
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why B is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether auditability fixed the failure.

### Q46: A hospital operations team is triaging a failed pilot for a system that stores interaction logs and memory. Treating open weights as unrestricted use is being used as the shortcut, but it does not give the team a reliable way to respect model, dataset, and output-use restrictions. Which control addresses the root cause?
- ID: genl-hf-safety-ethics-and-compliance-026
- Domain: Safety, Ethics, and Compliance
- Topic: license constraints; genai_llms_professional
- Difficulty: easy
- Scope: general_concept
- Source: generated
- A. Prioritize privacy controls even though the observed failure is around license constraints.
- B. Release prompt, model, and bias evaluation changes together with one aggregate score.
- C. Increase model capacity or context length while leaving license constraints implicit.
- D. Use license constraints as the control boundary and require the system to respect model, dataset, and output-use restrictions.
- Answer: D
- Explanation: License constraints is the missing control in this scenario. The right answer makes it explicit so the system can respect model, dataset, and output-use restrictions.
- Why A is wrong: It moves attention to a neighboring control instead of making license constraints testable in the scenario.
- Why B is wrong: Changing several layers at once makes it harder to prove whether license constraints fixed the failure.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.

### Q47: A telecom network operations team is building a tool-enabled workflow for high-impact decisions. Training on raw confidential logs is being used as the shortcut, but it does not give the team a reliable way to redact sensitive data and enforce retention limits. Which action best fits the requirement?
- ID: genl-hf-safety-ethics-and-compliance-027
- Domain: Safety, Ethics, and Compliance
- Topic: privacy controls; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Increase model capacity or context length while leaving privacy controls implicit.
- B. Use auditability as the main gate even though reviewers are asking for privacy controls evidence.
- C. Add a release gate for privacy controls: redact sensitive data and enforce retention limits.
- D. Release prompt, model, and auditability changes together with one aggregate score.
- Answer: C
- Explanation: Privacy controls is the missing control in this scenario. The right answer makes it explicit so the system can redact sensitive data and enforce retention limits.
- Why A is wrong: It changes capacity or wording before fixing the measured root cause.
- Why B is wrong: It moves attention to a neighboring control instead of making privacy controls testable in the scenario.
- Why D is wrong: Changing several layers at once makes it harder to prove whether privacy controls fixed the failure.

### Q48: A pharmaceutical research team is building a system that stores interaction logs and memory. PII and user preferences outlive their allowed purpose. The safer design is the one that can measure subgroup performance and harmful outputs. Which implementation path is most appropriate?
- ID: genl-hf-safety-ethics-and-compliance-028
- Domain: Safety, Ethics, and Compliance
- Topic: bias evaluation; genai_llms_professional
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Move the check to post-release monitoring without changing the release path for bias evaluation.
- B. Change the design around bias evaluation so the system can measure subgroup performance and harmful outputs.
- C. Increase model capacity or context length while leaving bias evaluation implicit.
- D. Use privacy controls as the main gate even though reviewers are asking for bias evaluation evidence.
- Answer: B
- Explanation: Bias evaluation is the missing control in this scenario. The right answer makes it explicit so the system can measure subgroup performance and harmful outputs.
- Why A is wrong: Monitoring is useful, but this scenario needs bias evaluation controlled before release or execution.
- Why C is wrong: It changes capacity or wording before fixing the measured root cause.
- Why D is wrong: It moves attention to a neighboring control instead of making bias evaluation testable in the scenario.

### Q49: A cybersecurity response team is choosing between a design centered on guardrails as a replacement for IAM and one that makes guardrails explicit for an agent that reads retrieved documents and proposes tool actions. Which design should win?
- ID: genl-hf-safety-ethics-and-compliance-029
- Domain: Safety, Ethics, and Compliance
- Topic: guardrails; genai_llms_professional
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Instrument and enforce guardrails; the system must apply input/output and tool-use policies around the model.
- B. Use privacy controls as the main gate even though reviewers are asking for guardrails evidence.
- C. Move the check to post-release monitoring without changing the release path for guardrails.
- D. Keep guardrails as a replacement for IAM as the main control and add a dashboard for final outputs.
- Answer: A
- Explanation: Guardrails is the missing control in this scenario. The right answer makes it explicit so the system can apply input/output and tool-use policies around the model.
- Why B is wrong: It moves attention to a neighboring control instead of making guardrails testable in the scenario.
- Why C is wrong: Monitoring is useful, but this scenario needs guardrails controlled before release or execution.
- Why D is wrong: It keeps guardrails as a replacement for IAM in control instead of adding a measurable guardrails decision point.

### Q50: A public-sector casework team is building a tool-enabled workflow for high-impact decisions. The team can reproduce the failure around unversioned release artifacts. The missing control is the one that can track data, model, prompt, eval, and approval lineage. Which design is the best first change?
- ID: genl-hf-safety-ethics-and-compliance-030
- Domain: Safety, Ethics, and Compliance
- Topic: auditability; genai_llms_professional
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Keep unversioned release artifacts as the main control and add a dashboard for final outputs.
- B. Prioritize license constraints even though the observed failure is around auditability.
- C. Put auditability before rollout so the team can track data, model, prompt, eval, and approval lineage.
- D. Move the check to post-release monitoring without changing the release path for auditability.
- Answer: C
- Explanation: Auditability is the missing control in this scenario. The right answer makes it explicit so the system can track data, model, prompt, eval, and approval lineage.
- Why A is wrong: It keeps unversioned release artifacts in control instead of adding a measurable auditability decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making auditability testable in the scenario.
- Why D is wrong: Monitoring is useful, but this scenario needs auditability controlled before release or execution.

### Q51: An insurance claims group is fixing the layer called out by the trace and design review. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-framework-001
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q52: A telecom network operations team is reviewing the implementation plan. The implementation requirement is to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-framework-002
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Nsight Compute is the best fit for this layer: a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q53: A manufacturing quality team has narrowed the next engineering decision. The next release blocker is adapting an existing model with SFT, PEFT, LoRA, or continued pretraining. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-framework-003
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q54: A bank fraud team needs to choose the right implementation surface. The trace points to the need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-framework-004
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q55: A pharmaceutical research team is preparing a production rollout. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nemo-framework-005
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q56: A telecom network operations team is setting a release gate. The trace points to the need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-framework-006
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q57: A public-sector casework team is preparing a production rollout. The next release blocker is changing durable model behavior from curated examples rather than prompt wording. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-framework-007
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.

### Q58: A semiconductor design group needs to choose the right implementation surface. The blocker is running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-framework-008
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q59: An automotive support team has narrowed the next engineering decision. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nemo-framework-009
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q60: A telecom network operations team needs to choose the right implementation surface. The trace points to the need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-framework-010
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q61: A pharmaceutical research team is fixing the layer called out by the trace and design review. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-guardrails-001
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q62: A logistics planning team is setting a release gate. The blocker is enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-guardrails-002
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q63: A public-sector casework team is fixing the layer called out by the trace and design review. The next release blocker is enforcing input, dialog, retrieval, tool, and output policies around the model. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nemo-guardrails-003
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q64: A cybersecurity response team is reviewing the implementation plan. The implementation requirement is to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-guardrails-004
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q65: A pharmaceutical research team has narrowed the next engineering decision. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nemo-guardrails-005
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q66: A logistics planning team is setting a release gate. The blocker is enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-guardrails-006
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q67: A hospital operations team is fixing the layer called out by the trace and design review. The next release blocker is enforcing input, dialog, retrieval, tool, and output policies around the model. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-guardrails-007
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q68: A cybersecurity response team is reviewing the implementation plan. The blocker is enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-guardrails-008
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q69: A pharmaceutical research team is preparing a production rollout. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-guardrails-009
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.

### Q70: A logistics planning team needs to choose the right implementation surface. The trace points to the need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-guardrails-010
- Domain: Safety, Ethics, and Compliance
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q71: A hospital operations team is preparing a production rollout. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-retriever-001
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q72: A bank fraud team is reviewing the implementation plan. The blocker is connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-retriever-002
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q73: A pharmaceutical research team is fixing the layer called out by the trace and design review. The next release blocker is grounding answers in current documents without changing model weights. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-retriever-003
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q74: A telecom network operations team is setting a release gate. The blocker is connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-retriever-004
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q75: A hospital operations team is fixing the layer called out by the trace and design review. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-retriever-005
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q76: A cybersecurity response team is setting a release gate. The trace points to the need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-retriever-006
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q77: A pharmaceutical research team has narrowed the next engineering decision. The next release blocker is grounding answers in current documents without changing model weights. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-retriever-007
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q78: A telecom network operations team is setting a release gate. The trace points to the need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-retriever-008
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.

### Q79: A hospital operations team is preparing a production rollout. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nemo-retriever-009
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q80: A bank fraud team is reviewing the implementation plan. The implementation requirement is to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-retriever-010
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q81: A cybersecurity response team needs to choose the right implementation surface. The blocker is for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. What is the best first implementation choice?
- ID: genl-hf-svc-nim-001
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: A
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.

### Q82: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nim-002
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: D
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q83: A global retailer needs to choose the right implementation surface. The trace points to the need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nim-003
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q84: A pharmaceutical research team is preparing a production rollout. The work to finish before release is for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nim-004
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q85: A semiconductor design group needs to choose the right implementation surface. The blocker is for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nim-005
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q86: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nim-006
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: D
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q87: A logistics planning team is setting a release gate. The blocker is for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nim-007
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: C
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q88: An automotive support team has narrowed the next engineering decision. The work to finish before release is for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nim-008
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q89: A cybersecurity response team needs to choose the right implementation surface. The trace points to the need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nim-009
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q90: A public-sector casework team is preparing a production rollout. The rollout is blocked until the team can for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nim-010
- Domain: Model Deployment
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: C
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q91: A bank fraud team needs to choose the right implementation surface. The blocker is choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemotron-models-001
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.

### Q92: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemotron-models-002
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.

### Q93: A logistics planning team needs to choose the right implementation surface. The trace points to the need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemotron-models-003
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.

### Q94: An automotive support team has narrowed the next engineering decision. The work to finish before release is choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemotron-models-004
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.

### Q95: A cybersecurity response team is reviewing the implementation plan. The trace points to the need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. What is the best first implementation choice?
- ID: genl-hf-svc-nemotron-models-005
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.

### Q96: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemotron-models-006
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.

### Q97: A global retailer is setting a release gate. The blocker is choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. What is the best first implementation choice?
- ID: genl-hf-svc-nemotron-models-007
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.

### Q98: An insurance claims group is fixing the layer called out by the trace and design review. The work to finish before release is choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nemotron-models-008
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Model selection.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q99: A bank fraud team needs to choose the right implementation surface. The trace points to the need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemotron-models-009
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q100: A hospital operations team has narrowed the next engineering decision. The rollout is blocked until the team can choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemotron-models-010
- Domain: LLM Architecture
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Model selection.

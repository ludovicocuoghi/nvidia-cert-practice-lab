# High Fidelity Generated Questions 002

## Questions

### Q1: A public-sector casework team is reviewing an agent evaluation suite before rollout. The main risk is trajectory evaluation: the system must score tool choice, retrieval, safety, latency, and final answer together. Which option keeps the decision at the right layer?
- ID: aai-hf-evaluation-and-tuning-021
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: hard
- A. Prioritize regression suite before validating the failure signal around trajectory evaluation.
- B. Bundle trajectory evaluation, ablation, and prompt changes into one release with one aggregate score.
- C. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- D. Keep scoring only the final text as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why D is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.

### Q2: A semiconductor design group has a production-readiness review for an agent evaluation suite. The review is focused on bootstrap evals, because the system must create verified question-chunk pairs when labels are missing. Which action best fits the requirement?
- ID: aai-hf-evaluation-and-tuning-022
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated bootstrap evals check.
- B. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- C. Prioritize ablation before validating the failure signal around bootstrap evals.
- D. Bundle bootstrap evals, regression suite, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.

### Q3: An automotive support team is reviewing an agent evaluation suite before rollout. The main risk is LLM-as-judge calibration: the system must anchor judge rubrics with human labels and disagreement review. Which option keeps the decision at the right layer?
- ID: aai-hf-evaluation-and-tuning-023
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: easy
- A. Add a release gate for LLM-as-judge calibration: anchor judge rubrics with human labels and disagreement review.
- B. Bundle LLM-as-judge calibration, regression suite, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- D. Use regression suite as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- Answer: A
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q4: A global retailer is comparing two release designs for an agent evaluation suite. One design centers on changing several layers with one score; the other adds a measurable regression suite step. Which design is more appropriate for production?
- ID: aai-hf-evaluation-and-tuning-024
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated regression suite check.
- B. Use LLM-as-judge calibration as the main gate even though reviewers are asking for regression suite evidence.
- C. Keep changing several layers with one score as the primary release control and record only final outputs.
- D. Change the design around regression suite so the system can compare prompt, model, retrieval, and tool changes before release.
- Answer: D
- Explanation: The scenario is about regression suite. The strongest answer fixes the failing layer directly: compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: Waiting for incidents postpones the regression suite gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why C is wrong: It keeps changing several layers with one score in control instead of adding a measurable regression suite decision point.

### Q5: A manufacturing quality team has a production-readiness review for an agent evaluation suite. The review is focused on ablation, because the system must isolate whether prompt, retrieval, model, or tools caused the failure. Which design is the best first change?
- ID: aai-hf-evaluation-and-tuning-025
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: expert
- A. Keep fine-tuning without root cause analysis as the primary release control and record only final outputs.
- B. Prioritize regression suite before validating the failure signal around ablation.
- C. Make ablation explicit in the workflow: isolate whether prompt, retrieval, model, or tools caused the failure.
- D. Use LLM-as-judge calibration as the main gate even though reviewers are asking for ablation evidence.
- Answer: C
- Explanation: The scenario is about ablation. The strongest answer fixes the failing layer directly: isolate whether prompt, retrieval, model, or tools caused the failure.
- Why A is wrong: It keeps fine-tuning without root cause analysis in control instead of adding a measurable ablation decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.

### Q6: A bank fraud team is reviewing an agent evaluation suite before rollout. The main risk is trajectory evaluation: the system must score tool choice, retrieval, safety, latency, and final answer together. Which option keeps the decision at the right layer?
- ID: aai-hf-evaluation-and-tuning-026
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: medium
- A. Bundle trajectory evaluation, regression suite, and prompt changes into one release with one aggregate score.
- B. Use trajectory evaluation as the control boundary and require the system to score tool choice, retrieval, safety, latency, and final answer together.
- C. Keep scoring only the final text as the primary release control and record only final outputs.
- D. Prioritize ablation before validating the failure signal around trajectory evaluation.
- Answer: B
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why C is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q7: An automotive support team sees release comparisons with no reliable bootstrap evals evidence. The team has been using agent self-judgment as ground truth; the next change needs to make bootstrap evals explicit. Which action best addresses the problem?
- ID: aai-hf-evaluation-and-tuning-027
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for bootstrap evals: create verified question-chunk pairs when labels are missing.
- B. Prioritize trajectory evaluation before validating the failure signal around bootstrap evals.
- C. Bundle bootstrap evals, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated bootstrap evals check.
- Answer: A
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why B is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.

### Q8: A logistics planning team is preparing an agent evaluation suite for release. The current design relies on trusting a judge score with no calibration, but the release gate needs to anchor judge rubrics with human labels and disagreement review. Which control should be added before rollout?
- ID: aai-hf-evaluation-and-tuning-028
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: hard
- A. Bundle LLM-as-judge calibration, ablation, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- C. Use ablation as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Change the design around LLM-as-judge calibration so the system can anchor judge rubrics with human labels and disagreement review.
- Answer: D
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q9: A manufacturing quality team sees release comparisons with no reliable regression suite evidence. The team has been using changing several layers with one score; the next change needs to make regression suite explicit. Which action best addresses the problem?
- ID: aai-hf-evaluation-and-tuning-029
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: expert
- A. Use bootstrap evals as the main gate even though reviewers are asking for regression suite evidence.
- B. Keep changing several layers with one score as the primary release control and record only final outputs.
- C. Make regression suite explicit in the workflow: compare prompt, model, retrieval, and tool changes before release.
- D. Wait for production incidents before adding a dedicated regression suite check.
- Answer: C
- Explanation: The scenario is about regression suite. The strongest answer fixes the failing layer directly: compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why B is wrong: It keeps changing several layers with one score in control instead of adding a measurable regression suite decision point.
- Why D is wrong: Waiting for incidents postpones the regression suite gate until after users are exposed.

### Q10: A semiconductor design group has a production-readiness review for an agent evaluation suite. The review is focused on ablation, because the system must isolate whether prompt, retrieval, model, or tools caused the failure. Which action best fits the requirement?
- ID: aai-hf-evaluation-and-tuning-030
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: medium
- A. Use ablation as the control boundary and require the system to isolate whether prompt, retrieval, model, or tools caused the failure.
- B. Use regression suite as the main gate even though reviewers are asking for ablation evidence.
- C. Keep fine-tuning without root cause analysis as the primary release control and record only final outputs.
- D. Prioritize LLM-as-judge calibration before validating the failure signal around ablation.
- Answer: A
- Explanation: The scenario is about ablation. The strongest answer fixes the failing layer directly: isolate whether prompt, retrieval, model, or tools caused the failure.
- Why B is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why C is wrong: It keeps fine-tuning without root cause analysis in control instead of adding a measurable ablation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.

### Q11: A global retailer is comparing two release designs for an agent evaluation suite. One design centers on scoring only the final text; the other adds a measurable trajectory evaluation step. Which design is more appropriate for production?
- ID: aai-hf-evaluation-and-tuning-031
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: hard
- A. Bundle trajectory evaluation, bootstrap evals, and prompt changes into one release with one aggregate score.
- B. Add a release gate for trajectory evaluation: score tool choice, retrieval, safety, latency, and final answer together.
- C. Keep scoring only the final text as the primary release control and record only final outputs.
- D. Prioritize LLM-as-judge calibration before validating the failure signal around trajectory evaluation.
- Answer: B
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why C is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q12: An insurance claims group has a production-readiness review for an agent evaluation suite. The review is focused on bootstrap evals, because the system must create verified question-chunk pairs when labels are missing. Which implementation path is most appropriate?
- ID: aai-hf-evaluation-and-tuning-032
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- A. Bundle bootstrap evals, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated bootstrap evals check.
- C. Change the design around bootstrap evals so the system can create verified question-chunk pairs when labels are missing.
- D. Prioritize trajectory evaluation before validating the failure signal around bootstrap evals.
- Answer: C
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q13: A semiconductor design group sees release comparisons with no reliable LLM-as-judge calibration evidence. The team has been using trusting a judge score with no calibration; the next change needs to make LLM-as-judge calibration explicit. Which action best addresses the problem?
- ID: aai-hf-evaluation-and-tuning-033
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: medium
- A. Bundle LLM-as-judge calibration, bootstrap evals, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- C. Use bootstrap evals as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Make LLM-as-judge calibration explicit in the workflow: anchor judge rubrics with human labels and disagreement review.
- Answer: D
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q14: A hospital operations team is preparing an agent evaluation suite for release. The current design relies on changing several layers with one score, but the release gate needs to compare prompt, model, retrieval, and tool changes before release. Which implementation path is most appropriate?
- ID: aai-hf-evaluation-and-tuning-034
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: hard
- A. Use regression suite as the control boundary and require the system to compare prompt, model, retrieval, and tool changes before release.
- B. Wait for production incidents before adding a dedicated regression suite check.
- C. Use bootstrap evals as the main gate even though reviewers are asking for regression suite evidence.
- D. Keep changing several layers with one score as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about regression suite. The strongest answer fixes the failing layer directly: compare prompt, model, retrieval, and tool changes before release.
- Why B is wrong: Waiting for incidents postpones the regression suite gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.
- Why D is wrong: It keeps changing several layers with one score in control instead of adding a measurable regression suite decision point.

### Q15: A logistics planning team is preparing an agent evaluation suite for release. The current design relies on fine-tuning without root cause analysis, but the release gate needs to isolate whether prompt, retrieval, model, or tools caused the failure. Which action best fits the requirement?
- ID: aai-hf-evaluation-and-tuning-035
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: hard
- A. Prioritize trajectory evaluation before validating the failure signal around ablation.
- B. Add a release gate for ablation: isolate whether prompt, retrieval, model, or tools caused the failure.
- C. Use bootstrap evals as the main gate even though reviewers are asking for ablation evidence.
- D. Keep fine-tuning without root cause analysis as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about ablation. The strongest answer fixes the failing layer directly: isolate whether prompt, retrieval, model, or tools caused the failure.
- Why A is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why D is wrong: It keeps fine-tuning without root cause analysis in control instead of adding a measurable ablation decision point.

### Q16: An insurance claims group sees release comparisons with no reliable trajectory evaluation evidence. The team has been using scoring only the final text; the next change needs to make trajectory evaluation explicit. Which action best addresses the problem?
- ID: aai-hf-evaluation-and-tuning-036
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: expert
- A. Prioritize bootstrap evals before validating the failure signal around trajectory evaluation.
- B. Bundle trajectory evaluation, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- C. Change the design around trajectory evaluation so the system can score tool choice, retrieval, safety, latency, and final answer together.
- D. Keep scoring only the final text as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why D is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.

### Q17: A cybersecurity response team sees release comparisons with no reliable bootstrap evals evidence. The team has been using agent self-judgment as ground truth; the next change needs to make bootstrap evals explicit. Which action best addresses the problem?
- ID: aai-hf-evaluation-and-tuning-037
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: medium
- A. Prioritize ablation before validating the failure signal around bootstrap evals.
- B. Bundle bootstrap evals, regression suite, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bootstrap evals check.
- D. Make bootstrap evals explicit in the workflow: create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.

### Q18: A hospital operations team has a production-readiness review for an agent evaluation suite. The review is focused on LLM-as-judge calibration, because the system must anchor judge rubrics with human labels and disagreement review. Which choice addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-038
- Domain: Evaluation and Tuning
- Topic: LLM-as-judge calibration; agentic_ai_professional
- Difficulty: hard
- A. Use LLM-as-judge calibration as the control boundary and require the system to anchor judge rubrics with human labels and disagreement review.
- B. Bundle LLM-as-judge calibration, trajectory evaluation, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- D. Use trajectory evaluation as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- Answer: A
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q19: A global retailer has a production-readiness review for an agent evaluation suite. The review is focused on regression suite, because the system must compare prompt, model, retrieval, and tool changes before release. Which action best fits the requirement?
- ID: aai-hf-evaluation-and-tuning-039
- Domain: Evaluation and Tuning
- Topic: regression suite; agentic_ai_professional
- Difficulty: expert
- A. Keep changing several layers with one score as the primary release control and record only final outputs.
- B. Add a release gate for regression suite: compare prompt, model, retrieval, and tool changes before release.
- C. Wait for production incidents before adding a dedicated regression suite check.
- D. Use LLM-as-judge calibration as the main gate even though reviewers are asking for regression suite evidence.
- Answer: B
- Explanation: The scenario is about regression suite. The strongest answer fixes the failing layer directly: compare prompt, model, retrieval, and tool changes before release.
- Why A is wrong: It keeps changing several layers with one score in control instead of adding a measurable regression suite decision point.
- Why C is wrong: Waiting for incidents postpones the regression suite gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making regression suite testable in the scenario.

### Q20: An automotive support team is preparing an agent evaluation suite for release. The current design relies on fine-tuning without root cause analysis, but the release gate needs to isolate whether prompt, retrieval, model, or tools caused the failure. Which choice addresses the root cause?
- ID: aai-hf-evaluation-and-tuning-040
- Domain: Evaluation and Tuning
- Topic: ablation; agentic_ai_professional
- Difficulty: medium
- A. Prioritize bootstrap evals before validating the failure signal around ablation.
- B. Change the design around ablation so the system can isolate whether prompt, retrieval, model, or tools caused the failure.
- C. Use trajectory evaluation as the main gate even though reviewers are asking for ablation evidence.
- D. Keep fine-tuning without root cause analysis as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about ablation. The strongest answer fixes the failing layer directly: isolate whether prompt, retrieval, model, or tools caused the failure.
- Why A is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making ablation testable in the scenario.
- Why D is wrong: It keeps fine-tuning without root cause analysis in control instead of adding a measurable ablation decision point.

### Q21: A pharmaceutical research team is preparing an agent evaluation suite for release. The current design relies on scoring only the final text, but the release gate needs to score tool choice, retrieval, safety, latency, and final answer together. Which implementation path is most appropriate?
- ID: aai-hf-evaluation-and-tuning-041
- Domain: Evaluation and Tuning
- Topic: trajectory evaluation; agentic_ai_professional
- Difficulty: hard
- A. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- B. Keep scoring only the final text as the primary release control and record only final outputs.
- C. Prioritize bootstrap evals before validating the failure signal around trajectory evaluation.
- D. Bundle trajectory evaluation, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why B is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.

### Q22: A telecom network operations team is comparing two release designs for an agent evaluation suite. One design centers on agent self-judgment as ground truth; the other adds a measurable bootstrap evals step. Which design is more appropriate for production?
- ID: aai-hf-evaluation-and-tuning-042
- Domain: Evaluation and Tuning
- Topic: bootstrap evals; agentic_ai_professional
- Difficulty: hard
- A. Prioritize LLM-as-judge calibration before validating the failure signal around bootstrap evals.
- B. Bundle bootstrap evals, trajectory evaluation, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bootstrap evals check.
- D. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.

### Q23: A telecom network operations team is comparing two release designs for a scalable agent deployment. One design centers on sticky in-process state; the other adds a measurable stateless services step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-001
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- A. Bundle stateless services, canary rollout, and prompt changes into one release with one aggregate score.
- B. Make stateless services explicit in the workflow: deploy agent components as horizontally scalable services.
- C. Keep sticky in-process state as the primary release control and record only final outputs.
- D. Prioritize NIM endpoints before validating the failure signal around stateless services.
- Answer: B
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.
- Why C is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.

### Q24: An insurance claims group sees rollout instability tied to NIM endpoints. The team has been using NCCL as a serving endpoint; the next change needs to make NIM endpoints explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-002
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Bundle NIM endpoints, autoscaling, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated NIM endpoints check.
- C. Use NIM endpoints as the control boundary and require the system to serve LLM, embedding, and reranker models as optimized APIs.
- D. Prioritize fallback before validating the failure signal around NIM endpoints.
- Answer: C
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.

### Q25: A semiconductor design group has a production-readiness review for a scalable agent deployment. The review is focused on canary rollout, because the system must route a small traffic slice with quality and safety gates. Which control should be added before rollout?
- ID: aai-hf-deployment-and-scaling-003
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: easy
- A. Bundle canary rollout, stateless services, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated canary rollout check.
- C. Use stateless services as the main gate even though reviewers are asking for canary rollout evidence.
- D. Add a release gate for canary rollout: route a small traffic slice with quality and safety gates.
- Answer: D
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.

### Q26: A public-sector casework team is reviewing a scalable agent deployment before rollout. The main risk is autoscaling: the system must scale model, retrieval, and tool workers by their own bottlenecks. Which option keeps the decision at the right layer?
- ID: aai-hf-deployment-and-scaling-004
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: hard
- A. Change the design around autoscaling so the system can scale model, retrieval, and tool workers by their own bottlenecks.
- B. Wait for production incidents before adding a dedicated autoscaling check.
- C. Use canary rollout as the main gate even though reviewers are asking for autoscaling evidence.
- D. Keep scaling only the LLM as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why B is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why D is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.

### Q27: A logistics planning team sees rollout instability tied to fallback. The team has been using silent degradation with no trace; the next change needs to make fallback explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-005
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: expert
- A. Prioritize canary rollout before validating the failure signal around fallback.
- B. Make fallback explicit in the workflow: use measured fallbacks for model or tool failures.
- C. Use autoscaling as the main gate even though reviewers are asking for fallback evidence.
- D. Keep silent degradation with no trace as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why D is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.

### Q28: An automotive support team has a production-readiness review for a scalable agent deployment. The review is focused on stateless services, because the system must deploy agent components as horizontally scalable services. Which implementation path is most appropriate?
- ID: aai-hf-deployment-and-scaling-006
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: medium
- A. Prioritize canary rollout before validating the failure signal around stateless services.
- B. Bundle stateless services, NIM endpoints, and prompt changes into one release with one aggregate score.
- C. Use stateless services as the control boundary and require the system to deploy agent components as horizontally scalable services.
- D. Keep sticky in-process state as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.
- Why D is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.

### Q29: A cybersecurity response team is preparing a scalable agent deployment for release. The current design relies on NCCL as a serving endpoint, but the release gate needs to serve LLM, embedding, and reranker models as optimized APIs. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-007
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Prioritize stateless services before validating the failure signal around NIM endpoints.
- B. Bundle NIM endpoints, canary rollout, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated NIM endpoints check.
- D. Add a release gate for NIM endpoints: serve LLM, embedding, and reranker models as optimized APIs.
- Answer: D
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.

### Q30: A hospital operations team sees rollout instability tied to canary rollout. The team has been using big-bang rollout; the next change needs to make canary rollout explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-008
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: hard
- A. Change the design around canary rollout so the system can route a small traffic slice with quality and safety gates.
- B. Bundle canary rollout, NIM endpoints, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated canary rollout check.
- D. Use NIM endpoints as the main gate even though reviewers are asking for canary rollout evidence.
- Answer: A
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.

### Q31: A logistics planning team sees rollout instability tied to autoscaling. The team has been using scaling only the LLM; the next change needs to make autoscaling explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-009
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: expert
- A. Keep scaling only the LLM as the primary release control and record only final outputs.
- B. Make autoscaling explicit in the workflow: scale model, retrieval, and tool workers by their own bottlenecks.
- C. Wait for production incidents before adding a dedicated autoscaling check.
- D. Use NIM endpoints as the main gate even though reviewers are asking for autoscaling evidence.
- Answer: B
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.
- Why C is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.

### Q32: An automotive support team is reviewing a scalable agent deployment before rollout. The main risk is fallback: the system must use measured fallbacks for model or tool failures. Which option keeps the decision at the right layer?
- ID: aai-hf-deployment-and-scaling-010
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- A. Use canary rollout as the main gate even though reviewers are asking for fallback evidence.
- B. Keep silent degradation with no trace as the primary release control and record only final outputs.
- C. Prioritize autoscaling before validating the failure signal around fallback.
- D. Use fallback as the control boundary and require the system to use measured fallbacks for model or tool failures.
- Answer: D
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why B is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q33: A hospital operations team sees rollout instability tied to stateless services. The team has been using sticky in-process state; the next change needs to make stateless services explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-011
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- A. Prioritize fallback before validating the failure signal around stateless services.
- B. Bundle stateless services, autoscaling, and prompt changes into one release with one aggregate score.
- C. Add a release gate for stateless services: deploy agent components as horizontally scalable services.
- D. Keep sticky in-process state as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.
- Why D is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.

### Q34: A semiconductor design group sees rollout instability tied to NIM endpoints. The team has been using NCCL as a serving endpoint; the next change needs to make NIM endpoints explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-012
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated NIM endpoints check.
- B. Change the design around NIM endpoints so the system can serve LLM, embedding, and reranker models as optimized APIs.
- C. Prioritize stateless services before validating the failure signal around NIM endpoints.
- D. Bundle NIM endpoints, canary rollout, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.

### Q35: An automotive support team sees rollout instability tied to canary rollout. The team has been using big-bang rollout; the next change needs to make canary rollout explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-013
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: medium
- A. Make canary rollout explicit in the workflow: route a small traffic slice with quality and safety gates.
- B. Bundle canary rollout, NIM endpoints, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated canary rollout check.
- D. Use NIM endpoints as the main gate even though reviewers are asking for canary rollout evidence.
- Answer: A
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.

### Q36: A telecom network operations team sees rollout instability tied to autoscaling. The team has been using scaling only the LLM; the next change needs to make autoscaling explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-014
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated autoscaling check.
- B. Use NIM endpoints as the main gate even though reviewers are asking for autoscaling evidence.
- C. Keep scaling only the LLM as the primary release control and record only final outputs.
- D. Use autoscaling as the control boundary and require the system to scale model, retrieval, and tool workers by their own bottlenecks.
- Answer: D
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why C is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.

### Q37: A public-sector casework team sees rollout instability tied to fallback. The team has been using silent degradation with no trace; the next change needs to make fallback explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-015
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: hard
- A. Keep silent degradation with no trace as the primary release control and record only final outputs.
- B. Prioritize NIM endpoints before validating the failure signal around fallback.
- C. Add a release gate for fallback: use measured fallbacks for model or tool failures.
- D. Use stateless services as the main gate even though reviewers are asking for fallback evidence.
- Answer: C
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q38: A semiconductor design group is comparing two release designs for a scalable agent deployment. One design centers on sticky in-process state; the other adds a measurable stateless services step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-016
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: expert
- A. Bundle stateless services, fallback, and prompt changes into one release with one aggregate score.
- B. Change the design around stateless services so the system can deploy agent components as horizontally scalable services.
- C. Keep sticky in-process state as the primary release control and record only final outputs.
- D. Prioritize autoscaling before validating the failure signal around stateless services.
- Answer: B
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.
- Why C is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.

### Q39: A pharmaceutical research team is preparing a scalable agent deployment for release. The current design relies on NCCL as a serving endpoint, but the release gate needs to serve LLM, embedding, and reranker models as optimized APIs. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-017
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: medium
- A. Make NIM endpoints explicit in the workflow: serve LLM, embedding, and reranker models as optimized APIs.
- B. Prioritize fallback before validating the failure signal around NIM endpoints.
- C. Bundle NIM endpoints, autoscaling, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated NIM endpoints check.
- Answer: A
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.

### Q40: A logistics planning team is reviewing a scalable agent deployment before rollout. The main risk is canary rollout: the system must route a small traffic slice with quality and safety gates. Which option keeps the decision at the right layer?
- ID: aai-hf-deployment-and-scaling-018
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: hard
- A. Bundle canary rollout, stateless services, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated canary rollout check.
- C. Use stateless services as the main gate even though reviewers are asking for canary rollout evidence.
- D. Use canary rollout as the control boundary and require the system to route a small traffic slice with quality and safety gates.
- Answer: D
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.

### Q41: A public-sector casework team is preparing a scalable agent deployment for release. The current design relies on scaling only the LLM, but the release gate needs to scale model, retrieval, and tool workers by their own bottlenecks. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-019
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: expert
- A. Use canary rollout as the main gate even though reviewers are asking for autoscaling evidence.
- B. Keep scaling only the LLM as the primary release control and record only final outputs.
- C. Add a release gate for autoscaling: scale model, retrieval, and tool workers by their own bottlenecks.
- D. Wait for production incidents before adding a dedicated autoscaling check.
- Answer: C
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why B is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.
- Why D is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.

### Q42: A bank fraud team has a production-readiness review for a scalable agent deployment. The review is focused on fallback, because the system must use measured fallbacks for model or tool failures. Which control should be added before rollout?
- ID: aai-hf-deployment-and-scaling-020
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- A. Keep silent degradation with no trace as the primary release control and record only final outputs.
- B. Prioritize stateless services before validating the failure signal around fallback.
- C. Change the design around fallback so the system can use measured fallbacks for model or tool failures.
- D. Use NIM endpoints as the main gate even though reviewers are asking for fallback evidence.
- Answer: C
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q43: A semiconductor design group is preparing a scalable agent deployment for release. The current design relies on sticky in-process state, but the release gate needs to deploy agent components as horizontally scalable services. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-021
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- A. Keep sticky in-process state as the primary release control and record only final outputs.
- B. Prioritize autoscaling before validating the failure signal around stateless services.
- C. Bundle stateless services, fallback, and prompt changes into one release with one aggregate score.
- D. Make stateless services explicit in the workflow: deploy agent components as horizontally scalable services.
- Answer: D
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.

### Q44: A manufacturing quality team has a production-readiness review for a scalable agent deployment. The review is focused on NIM endpoints, because the system must serve LLM, embedding, and reranker models as optimized APIs. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-022
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Use NIM endpoints as the control boundary and require the system to serve LLM, embedding, and reranker models as optimized APIs.
- B. Prioritize canary rollout before validating the failure signal around NIM endpoints.
- C. Bundle NIM endpoints, stateless services, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated NIM endpoints check.
- Answer: A
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.

### Q45: A global retailer is comparing two release designs for a scalable agent deployment. One design centers on big-bang rollout; the other adds a measurable canary rollout step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-023
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: easy
- A. Use stateless services as the main gate even though reviewers are asking for canary rollout evidence.
- B. Add a release gate for canary rollout: route a small traffic slice with quality and safety gates.
- C. Bundle canary rollout, stateless services, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated canary rollout check.
- Answer: B
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.

### Q46: An insurance claims group is comparing two release designs for a scalable agent deployment. One design centers on scaling only the LLM; the other adds a measurable autoscaling step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-024
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: hard
- A. Use stateless services as the main gate even though reviewers are asking for autoscaling evidence.
- B. Keep scaling only the LLM as the primary release control and record only final outputs.
- C. Change the design around autoscaling so the system can scale model, retrieval, and tool workers by their own bottlenecks.
- D. Wait for production incidents before adding a dedicated autoscaling check.
- Answer: C
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why B is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.
- Why D is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.

### Q47: A cybersecurity response team sees rollout instability tied to fallback. The team has been using silent degradation with no trace; the next change needs to make fallback explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-025
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: expert
- A. Use NIM endpoints as the main gate even though reviewers are asking for fallback evidence.
- B. Keep silent degradation with no trace as the primary release control and record only final outputs.
- C. Prioritize stateless services before validating the failure signal around fallback.
- D. Make fallback explicit in the workflow: use measured fallbacks for model or tool failures.
- Answer: D
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why B is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q48: A hospital operations team has a production-readiness review for a scalable agent deployment. The review is focused on stateless services, because the system must deploy agent components as horizontally scalable services. Which design is the best first change?
- ID: aai-hf-deployment-and-scaling-026
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: medium
- A. Use stateless services as the control boundary and require the system to deploy agent components as horizontally scalable services.
- B. Keep sticky in-process state as the primary release control and record only final outputs.
- C. Prioritize fallback before validating the failure signal around stateless services.
- D. Bundle stateless services, autoscaling, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why B is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.

### Q49: A logistics planning team has a production-readiness review for a scalable agent deployment. The review is focused on NIM endpoints, because the system must serve LLM, embedding, and reranker models as optimized APIs. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-027
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated NIM endpoints check.
- B. Add a release gate for NIM endpoints: serve LLM, embedding, and reranker models as optimized APIs.
- C. Prioritize autoscaling before validating the failure signal around NIM endpoints.
- D. Bundle NIM endpoints, fallback, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.

### Q50: An insurance claims group sees rollout instability tied to canary rollout. The team has been using big-bang rollout; the next change needs to make canary rollout explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-028
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated canary rollout check.
- B. Use NIM endpoints as the main gate even though reviewers are asking for canary rollout evidence.
- C. Change the design around canary rollout so the system can route a small traffic slice with quality and safety gates.
- D. Bundle canary rollout, NIM endpoints, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.

### Q51: A cybersecurity response team has a production-readiness review for a scalable agent deployment. The review is focused on autoscaling, because the system must scale model, retrieval, and tool workers by their own bottlenecks. Which action best fits the requirement?
- ID: aai-hf-deployment-and-scaling-029
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated autoscaling check.
- B. Use fallback as the main gate even though reviewers are asking for autoscaling evidence.
- C. Keep scaling only the LLM as the primary release control and record only final outputs.
- D. Make autoscaling explicit in the workflow: scale model, retrieval, and tool workers by their own bottlenecks.
- Answer: D
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why C is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.

### Q52: A hospital operations team is reviewing a scalable agent deployment before rollout. The main risk is fallback: the system must use measured fallbacks for model or tool failures. Which option keeps the decision at the right layer?
- ID: aai-hf-deployment-and-scaling-030
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- A. Prioritize NIM endpoints before validating the failure signal around fallback.
- B. Use fallback as the control boundary and require the system to use measured fallbacks for model or tool failures.
- C. Use stateless services as the main gate even though reviewers are asking for fallback evidence.
- D. Keep silent degradation with no trace as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why A is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why D is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.

### Q53: An automotive support team sees rollout instability tied to stateless services. The team has been using sticky in-process state; the next change needs to make stateless services explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-031
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for stateless services: deploy agent components as horizontally scalable services.
- B. Keep sticky in-process state as the primary release control and record only final outputs.
- C. Prioritize canary rollout before validating the failure signal around stateless services.
- D. Bundle stateless services, NIM endpoints, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why B is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.

### Q54: A telecom network operations team has a production-readiness review for a scalable agent deployment. The review is focused on NIM endpoints, because the system must serve LLM, embedding, and reranker models as optimized APIs. Which action best fits the requirement?
- ID: aai-hf-deployment-and-scaling-032
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Prioritize autoscaling before validating the failure signal around NIM endpoints.
- B. Bundle NIM endpoints, fallback, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated NIM endpoints check.
- D. Change the design around NIM endpoints so the system can serve LLM, embedding, and reranker models as optimized APIs.
- Answer: D
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.

### Q55: A manufacturing quality team has a production-readiness review for a scalable agent deployment. The review is focused on canary rollout, because the system must route a small traffic slice with quality and safety gates. Which choice addresses the root cause?
- ID: aai-hf-deployment-and-scaling-033
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated canary rollout check.
- B. Use fallback as the main gate even though reviewers are asking for canary rollout evidence.
- C. Make canary rollout explicit in the workflow: route a small traffic slice with quality and safety gates.
- D. Bundle canary rollout, fallback, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.

### Q56: A bank fraud team sees rollout instability tied to autoscaling. The team has been using scaling only the LLM; the next change needs to make autoscaling explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-034
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: hard
- A. Keep scaling only the LLM as the primary release control and record only final outputs.
- B. Use autoscaling as the control boundary and require the system to scale model, retrieval, and tool workers by their own bottlenecks.
- C. Wait for production incidents before adding a dedicated autoscaling check.
- D. Use fallback as the main gate even though reviewers are asking for autoscaling evidence.
- Answer: B
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why A is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.
- Why C is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.

### Q57: A pharmaceutical research team sees rollout instability tied to fallback. The team has been using silent degradation with no trace; the next change needs to make fallback explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-035
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for fallback: use measured fallbacks for model or tool failures.
- B. Use canary rollout as the main gate even though reviewers are asking for fallback evidence.
- C. Keep silent degradation with no trace as the primary release control and record only final outputs.
- D. Prioritize autoscaling before validating the failure signal around fallback.
- Answer: A
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why C is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q58: A global retailer is reviewing a scalable agent deployment before rollout. The main risk is stateless services: the system must deploy agent components as horizontally scalable services. Which option keeps the decision at the right layer?
- ID: aai-hf-deployment-and-scaling-036
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: expert
- A. Keep sticky in-process state as the primary release control and record only final outputs.
- B. Prioritize NIM endpoints before validating the failure signal around stateless services.
- C. Bundle stateless services, canary rollout, and prompt changes into one release with one aggregate score.
- D. Change the design around stateless services so the system can deploy agent components as horizontally scalable services.
- Answer: D
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.

### Q59: A public-sector casework team sees rollout instability tied to NIM endpoints. The team has been using NCCL as a serving endpoint; the next change needs to make NIM endpoints explicit. Which action best addresses the problem?
- ID: aai-hf-deployment-and-scaling-037
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: medium
- A. Bundle NIM endpoints, stateless services, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated NIM endpoints check.
- C. Make NIM endpoints explicit in the workflow: serve LLM, embedding, and reranker models as optimized APIs.
- D. Prioritize canary rollout before validating the failure signal around NIM endpoints.
- Answer: C
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.

### Q60: A semiconductor design group is comparing two release designs for a scalable agent deployment. One design centers on big-bang rollout; the other adds a measurable canary rollout step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-038
- Domain: Deployment and Scaling
- Topic: canary rollout; agentic_ai_professional
- Difficulty: hard
- A. Use autoscaling as the main gate even though reviewers are asking for canary rollout evidence.
- B. Use canary rollout as the control boundary and require the system to route a small traffic slice with quality and safety gates.
- C. Bundle canary rollout, autoscaling, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated canary rollout check.
- Answer: B
- Explanation: The scenario is about canary rollout. The strongest answer fixes the failing layer directly: route a small traffic slice with quality and safety gates.
- Why A is wrong: It moves attention to a neighboring control instead of making canary rollout testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether canary rollout fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the canary rollout gate until after users are exposed.

### Q61: An insurance claims group is preparing a scalable agent deployment for release. The current design relies on scaling only the LLM, but the release gate needs to scale model, retrieval, and tool workers by their own bottlenecks. Which design is the best first change?
- ID: aai-hf-deployment-and-scaling-039
- Domain: Deployment and Scaling
- Topic: autoscaling; agentic_ai_professional
- Difficulty: expert
- A. Add a release gate for autoscaling: scale model, retrieval, and tool workers by their own bottlenecks.
- B. Wait for production incidents before adding a dedicated autoscaling check.
- C. Use stateless services as the main gate even though reviewers are asking for autoscaling evidence.
- D. Keep scaling only the LLM as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about autoscaling. The strongest answer fixes the failing layer directly: scale model, retrieval, and tool workers by their own bottlenecks.
- Why B is wrong: Waiting for incidents postpones the autoscaling gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making autoscaling testable in the scenario.
- Why D is wrong: It keeps scaling only the LLM in control instead of adding a measurable autoscaling decision point.

### Q62: A logistics planning team has a production-readiness review for a scalable agent deployment. The review is focused on fallback, because the system must use measured fallbacks for model or tool failures. Which action best fits the requirement?
- ID: aai-hf-deployment-and-scaling-040
- Domain: Deployment and Scaling
- Topic: fallback; agentic_ai_professional
- Difficulty: medium
- A. Change the design around fallback so the system can use measured fallbacks for model or tool failures.
- B. Use autoscaling as the main gate even though reviewers are asking for fallback evidence.
- C. Keep silent degradation with no trace as the primary release control and record only final outputs.
- D. Prioritize canary rollout before validating the failure signal around fallback.
- Answer: A
- Explanation: The scenario is about fallback. The strongest answer fixes the failing layer directly: use measured fallbacks for model or tool failures.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.
- Why C is wrong: It keeps silent degradation with no trace in control instead of adding a measurable fallback decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making fallback testable in the scenario.

### Q63: A logistics planning team has a production-readiness review for a scalable agent deployment. The review is focused on stateless services, because the system must deploy agent components as horizontally scalable services. Which architecture keeps the boundary cleanest?
- ID: aai-hf-deployment-and-scaling-041
- Domain: Deployment and Scaling
- Topic: stateless services; agentic_ai_professional
- Difficulty: hard
- A. Bundle stateless services, canary rollout, and prompt changes into one release with one aggregate score.
- B. Make stateless services explicit in the workflow: deploy agent components as horizontally scalable services.
- C. Keep sticky in-process state as the primary release control and record only final outputs.
- D. Prioritize NIM endpoints before validating the failure signal around stateless services.
- Answer: B
- Explanation: The scenario is about stateless services. The strongest answer fixes the failing layer directly: deploy agent components as horizontally scalable services.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether stateless services fixed or caused the failure.
- Why C is wrong: It keeps sticky in-process state in control instead of adding a measurable stateless services decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making stateless services testable in the scenario.

### Q64: An insurance claims group is comparing two release designs for a scalable agent deployment. One design centers on NCCL as a serving endpoint; the other adds a measurable NIM endpoints step. Which design is more appropriate for production?
- ID: aai-hf-deployment-and-scaling-042
- Domain: Deployment and Scaling
- Topic: NIM endpoints; agentic_ai_professional
- Difficulty: hard
- A. Bundle NIM endpoints, autoscaling, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated NIM endpoints check.
- C. Use NIM endpoints as the control boundary and require the system to serve LLM, embedding, and reranker models as optimized APIs.
- D. Prioritize fallback before validating the failure signal around NIM endpoints.
- Answer: C
- Explanation: The scenario is about NIM endpoints. The strongest answer fixes the failing layer directly: serve LLM, embedding, and reranker models as optimized APIs.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether NIM endpoints fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the NIM endpoints gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM endpoints testable in the scenario.

### Q65: A global retailer is comparing two release designs for a stateful planning workflow. One design centers on storing every observation forever; the other adds a measurable working memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-001
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: medium
- A. Prioritize reflection before validating the failure signal around working memory.
- B. Bundle working memory, state ownership, and prompt changes into one release with one aggregate score.
- C. Make working memory explicit in the workflow: track task state needed for the current workflow.
- D. Keep storing every observation forever as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.
- Why D is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.

### Q66: An automotive support team is preparing a stateful planning workflow for release. The current design relies on confusing memory with public document retrieval, but the release gate needs to retain useful prior interactions with consent and expiration. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-002
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated episodic memory check.
- B. Use episodic memory as the control boundary and require the system to retain useful prior interactions with consent and expiration.
- C. Prioritize reflection before validating the failure signal around episodic memory.
- D. Bundle episodic memory, state ownership, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why A is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.

### Q67: A semiconductor design group is preparing a stateful planning workflow for release. The current design relies on open-ended exploration, but the release gate needs to limit tool calls and add stopping criteria. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-003
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for planning budget: limit tool calls and add stopping criteria.
- B. Bundle planning budget, episodic memory, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated planning budget check.
- D. Use episodic memory as the main gate even though reviewers are asking for planning budget evidence.
- Answer: A
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.

### Q68: A hospital operations team is reviewing a stateful planning workflow before rollout. The main risk is reflection: the system must use a critic to verify evidence sufficiency and plan quality. Which option keeps the decision at the right layer?
- ID: aai-hf-cognition-planning-and-memory-004
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: easy
- A. Wait for production incidents before adding a dedicated reflection check.
- B. Use episodic memory as the main gate even though reviewers are asking for reflection evidence.
- C. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- D. Change the design around reflection so the system can use a critic to verify evidence sufficiency and plan quality.
- Answer: D
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why A is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why C is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.

### Q69: A telecom network operations team is comparing two release designs for a stateful planning workflow. One design centers on agents overwriting each other; the other adds a measurable state ownership step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-005
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: hard
- A. Keep agents overwriting each other as the primary release control and record only final outputs.
- B. Prioritize working memory before validating the failure signal around state ownership.
- C. Make state ownership explicit in the workflow: make one runtime own canonical state transitions.
- D. Use episodic memory as the main gate even though reviewers are asking for state ownership evidence.
- Answer: C
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why A is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.

### Q70: An automotive support team has a production-readiness review for a stateful planning workflow. The review is focused on working memory, because the system must track task state needed for the current workflow. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-006
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: expert
- A. Bundle working memory, reflection, and prompt changes into one release with one aggregate score.
- B. Use working memory as the control boundary and require the system to track task state needed for the current workflow.
- C. Keep storing every observation forever as the primary release control and record only final outputs.
- D. Prioritize state ownership before validating the failure signal around working memory.
- Answer: B
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.
- Why C is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.

### Q71: A bank fraud team is comparing two release designs for a stateful planning workflow. One design centers on confusing memory with public document retrieval; the other adds a measurable episodic memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-007
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: medium
- A. Add a release gate for episodic memory: retain useful prior interactions with consent and expiration.
- B. Prioritize planning budget before validating the failure signal around episodic memory.
- C. Bundle episodic memory, working memory, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated episodic memory check.
- Answer: A
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why B is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.

### Q72: A manufacturing quality team has a production-readiness review for a stateful planning workflow. The review is focused on planning budget, because the system must limit tool calls and add stopping criteria. Which implementation path is most appropriate?
- ID: aai-hf-cognition-planning-and-memory-008
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Bundle planning budget, working memory, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated planning budget check.
- C. Use working memory as the main gate even though reviewers are asking for planning budget evidence.
- D. Change the design around planning budget so the system can limit tool calls and add stopping criteria.
- Answer: D
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.

### Q73: A global retailer is reviewing a stateful planning workflow before rollout. The main risk is reflection: the system must use a critic to verify evidence sufficiency and plan quality. Which option keeps the decision at the right layer?
- ID: aai-hf-cognition-planning-and-memory-009
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: hard
- A. Use planning budget as the main gate even though reviewers are asking for reflection evidence.
- B. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- C. Make reflection explicit in the workflow: use a critic to verify evidence sufficiency and plan quality.
- D. Wait for production incidents before adding a dedicated reflection check.
- Answer: C
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why A is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why B is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.
- Why D is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.

### Q74: An insurance claims group is comparing two release designs for a stateful planning workflow. One design centers on agents overwriting each other; the other adds a measurable state ownership step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-010
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: expert
- A. Use state ownership as the control boundary and require the system to make one runtime own canonical state transitions.
- B. Use working memory as the main gate even though reviewers are asking for state ownership evidence.
- C. Keep agents overwriting each other as the primary release control and record only final outputs.
- D. Prioritize episodic memory before validating the failure signal around state ownership.
- Answer: A
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why B is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why C is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.

### Q75: A hospital operations team is comparing two release designs for a stateful planning workflow. One design centers on storing every observation forever; the other adds a measurable working memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-011
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: medium
- A. Bundle working memory, episodic memory, and prompt changes into one release with one aggregate score.
- B. Add a release gate for working memory: track task state needed for the current workflow.
- C. Keep storing every observation forever as the primary release control and record only final outputs.
- D. Prioritize planning budget before validating the failure signal around working memory.
- Answer: B
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.
- Why C is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.

### Q76: A semiconductor design group is comparing two release designs for a stateful planning workflow. One design centers on confusing memory with public document retrieval; the other adds a measurable episodic memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-012
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: hard
- A. Bundle episodic memory, reflection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated episodic memory check.
- C. Change the design around episodic memory so the system can retain useful prior interactions with consent and expiration.
- D. Prioritize state ownership before validating the failure signal around episodic memory.
- Answer: C
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.

### Q77: A pharmaceutical research team has a production-readiness review for a stateful planning workflow. The review is focused on planning budget, because the system must limit tool calls and add stopping criteria. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-013
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Bundle planning budget, reflection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated planning budget check.
- C. Use reflection as the main gate even though reviewers are asking for planning budget evidence.
- D. Make planning budget explicit in the workflow: limit tool calls and add stopping criteria.
- Answer: D
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.

### Q78: A telecom network operations team has a production-readiness review for a stateful planning workflow. The review is focused on reflection, because the system must use a critic to verify evidence sufficiency and plan quality. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-014
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: medium
- A. Use reflection as the control boundary and require the system to use a critic to verify evidence sufficiency and plan quality.
- B. Wait for production incidents before adding a dedicated reflection check.
- C. Use working memory as the main gate even though reviewers are asking for reflection evidence.
- D. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why B is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why D is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.

### Q79: A manufacturing quality team is comparing two release designs for a stateful planning workflow. One design centers on agents overwriting each other; the other adds a measurable state ownership step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-015
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: hard
- A. Prioritize reflection before validating the failure signal around state ownership.
- B. Add a release gate for state ownership: make one runtime own canonical state transitions.
- C. Use planning budget as the main gate even though reviewers are asking for state ownership evidence.
- D. Keep agents overwriting each other as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why A is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why D is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.

### Q80: A bank fraud team has a production-readiness review for a stateful planning workflow. The review is focused on working memory, because the system must track task state needed for the current workflow. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-016
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: hard
- A. Prioritize episodic memory before validating the failure signal around working memory.
- B. Bundle working memory, planning budget, and prompt changes into one release with one aggregate score.
- C. Change the design around working memory so the system can track task state needed for the current workflow.
- D. Keep storing every observation forever as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.
- Why D is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.

### Q81: An insurance claims group is preparing a stateful planning workflow for release. The current design relies on confusing memory with public document retrieval, but the release gate needs to retain useful prior interactions with consent and expiration. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-017
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: expert
- A. Prioritize working memory before validating the failure signal around episodic memory.
- B. Bundle episodic memory, planning budget, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated episodic memory check.
- D. Make episodic memory explicit in the workflow: retain useful prior interactions with consent and expiration.
- Answer: D
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why A is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.

### Q82: A telecom network operations team has a production-readiness review for a stateful planning workflow. The review is focused on planning budget, because the system must limit tool calls and add stopping criteria. Which action best fits the requirement?
- ID: aai-hf-cognition-planning-and-memory-018
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: medium
- A. Use planning budget as the control boundary and require the system to limit tool calls and add stopping criteria.
- B. Bundle planning budget, state ownership, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated planning budget check.
- D. Use state ownership as the main gate even though reviewers are asking for planning budget evidence.
- Answer: A
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.

### Q83: A public-sector casework team has a production-readiness review for a stateful planning workflow. The review is focused on reflection, because the system must use a critic to verify evidence sufficiency and plan quality. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-019
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: hard
- A. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- B. Add a release gate for reflection: use a critic to verify evidence sufficiency and plan quality.
- C. Wait for production incidents before adding a dedicated reflection check.
- D. Use state ownership as the main gate even though reviewers are asking for reflection evidence.
- Answer: B
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why A is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.
- Why C is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.

### Q84: A bank fraud team sees state and planning errors tied to state ownership. The team has been using agents overwriting each other; the next change needs to make state ownership explicit. Which action best addresses the problem?
- ID: aai-hf-cognition-planning-and-memory-020
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: expert
- A. Prioritize planning budget before validating the failure signal around state ownership.
- B. Change the design around state ownership so the system can make one runtime own canonical state transitions.
- C. Use reflection as the main gate even though reviewers are asking for state ownership evidence.
- D. Keep agents overwriting each other as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why A is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why D is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.

### Q85: A bank fraud team is comparing two release designs for a stateful planning workflow. One design centers on storing every observation forever; the other adds a measurable working memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-021
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: medium
- A. Make working memory explicit in the workflow: track task state needed for the current workflow.
- B. Keep storing every observation forever as the primary release control and record only final outputs.
- C. Prioritize episodic memory before validating the failure signal around working memory.
- D. Bundle working memory, planning budget, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why B is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.

### Q86: A manufacturing quality team has a production-readiness review for a stateful planning workflow. The review is focused on episodic memory, because the system must retain useful prior interactions with consent and expiration. Which choice addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-022
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: hard
- A. Prioritize reflection before validating the failure signal around episodic memory.
- B. Bundle episodic memory, state ownership, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated episodic memory check.
- D. Use episodic memory as the control boundary and require the system to retain useful prior interactions with consent and expiration.
- Answer: D
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why A is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.

### Q87: A logistics planning team is preparing a stateful planning workflow for release. The current design relies on open-ended exploration, but the release gate needs to limit tool calls and add stopping criteria. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-023
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated planning budget check.
- B. Use state ownership as the main gate even though reviewers are asking for planning budget evidence.
- C. Add a release gate for planning budget: limit tool calls and add stopping criteria.
- D. Bundle planning budget, state ownership, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why A is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.

### Q88: An automotive support team has a production-readiness review for a stateful planning workflow. The review is focused on reflection, because the system must use a critic to verify evidence sufficiency and plan quality. Which implementation path is most appropriate?
- ID: aai-hf-cognition-planning-and-memory-024
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: easy
- A. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- B. Change the design around reflection so the system can use a critic to verify evidence sufficiency and plan quality.
- C. Wait for production incidents before adding a dedicated reflection check.
- D. Use episodic memory as the main gate even though reviewers are asking for reflection evidence.
- Answer: B
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why A is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.
- Why C is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.

### Q89: A cybersecurity response team is reviewing a stateful planning workflow before rollout. The main risk is state ownership: the system must make one runtime own canonical state transitions. Which option keeps the decision at the right layer?
- ID: aai-hf-cognition-planning-and-memory-025
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: hard
- A. Make state ownership explicit in the workflow: make one runtime own canonical state transitions.
- B. Use reflection as the main gate even though reviewers are asking for state ownership evidence.
- C. Keep agents overwriting each other as the primary release control and record only final outputs.
- D. Prioritize planning budget before validating the failure signal around state ownership.
- Answer: A
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why B is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why C is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.

### Q90: A manufacturing quality team is preparing a stateful planning workflow for release. The current design relies on storing every observation forever, but the release gate needs to track task state needed for the current workflow. Which design is the best first change?
- ID: aai-hf-cognition-planning-and-memory-026
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: expert
- A. Keep storing every observation forever as the primary release control and record only final outputs.
- B. Prioritize planning budget before validating the failure signal around working memory.
- C. Bundle working memory, episodic memory, and prompt changes into one release with one aggregate score.
- D. Use working memory as the control boundary and require the system to track task state needed for the current workflow.
- Answer: D
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.

### Q91: A global retailer is reviewing a stateful planning workflow before rollout. The main risk is episodic memory: the system must retain useful prior interactions with consent and expiration. Which option keeps the decision at the right layer?
- ID: aai-hf-cognition-planning-and-memory-027
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: medium
- A. Bundle episodic memory, working memory, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated episodic memory check.
- C. Add a release gate for episodic memory: retain useful prior interactions with consent and expiration.
- D. Prioritize planning budget before validating the failure signal around episodic memory.
- Answer: C
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.

### Q92: An insurance claims group is comparing two release designs for a stateful planning workflow. One design centers on open-ended exploration; the other adds a measurable planning budget step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-028
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Use reflection as the main gate even though reviewers are asking for planning budget evidence.
- B. Change the design around planning budget so the system can limit tool calls and add stopping criteria.
- C. Bundle planning budget, reflection, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated planning budget check.
- Answer: B
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why A is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.

### Q93: A bank fraud team is preparing a stateful planning workflow for release. The current design relies on exposing private chain-of-thought, but the release gate needs to use a critic to verify evidence sufficiency and plan quality. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-029
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: hard
- A. Make reflection explicit in the workflow: use a critic to verify evidence sufficiency and plan quality.
- B. Wait for production incidents before adding a dedicated reflection check.
- C. Use planning budget as the main gate even though reviewers are asking for reflection evidence.
- D. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why B is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why D is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.

### Q94: A hospital operations team is preparing a stateful planning workflow for release. The current design relies on agents overwriting each other, but the release gate needs to make one runtime own canonical state transitions. Which implementation path is most appropriate?
- ID: aai-hf-cognition-planning-and-memory-030
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: expert
- A. Keep agents overwriting each other as the primary release control and record only final outputs.
- B. Prioritize reflection before validating the failure signal around state ownership.
- C. Use state ownership as the control boundary and require the system to make one runtime own canonical state transitions.
- D. Use planning budget as the main gate even though reviewers are asking for state ownership evidence.
- Answer: C
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why A is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.

### Q95: An insurance claims group is preparing a stateful planning workflow for release. The current design relies on storing every observation forever, but the release gate needs to track task state needed for the current workflow. Which implementation path is most appropriate?
- ID: aai-hf-cognition-planning-and-memory-031
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: medium
- A. Keep storing every observation forever as the primary release control and record only final outputs.
- B. Prioritize state ownership before validating the failure signal around working memory.
- C. Bundle working memory, reflection, and prompt changes into one release with one aggregate score.
- D. Add a release gate for working memory: track task state needed for the current workflow.
- Answer: D
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why A is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.

### Q96: A telecom network operations team is comparing two release designs for a stateful planning workflow. One design centers on confusing memory with public document retrieval; the other adds a measurable episodic memory step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-032
- Domain: Cognition, Planning, and Memory
- Topic: episodic memory; agentic_ai_professional
- Difficulty: hard
- A. Change the design around episodic memory so the system can retain useful prior interactions with consent and expiration.
- B. Prioritize planning budget before validating the failure signal around episodic memory.
- C. Bundle episodic memory, working memory, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated episodic memory check.
- Answer: A
- Explanation: The scenario is about episodic memory. The strongest answer fixes the failing layer directly: retain useful prior interactions with consent and expiration.
- Why B is wrong: It moves attention to a neighboring control instead of making episodic memory testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether episodic memory fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the episodic memory gate until after users are exposed.

### Q97: A public-sector casework team is preparing a stateful planning workflow for release. The current design relies on open-ended exploration, but the release gate needs to limit tool calls and add stopping criteria. Which choice addresses the root cause?
- ID: aai-hf-cognition-planning-and-memory-033
- Domain: Cognition, Planning, and Memory
- Topic: planning budget; agentic_ai_professional
- Difficulty: hard
- A. Use working memory as the main gate even though reviewers are asking for planning budget evidence.
- B. Make planning budget explicit in the workflow: limit tool calls and add stopping criteria.
- C. Bundle planning budget, working memory, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated planning budget check.
- Answer: B
- Explanation: The scenario is about planning budget. The strongest answer fixes the failing layer directly: limit tool calls and add stopping criteria.
- Why A is wrong: It moves attention to a neighboring control instead of making planning budget testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether planning budget fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the planning budget gate until after users are exposed.

### Q98: A cybersecurity response team sees state and planning errors tied to reflection. The team has been using exposing private chain-of-thought; the next change needs to make reflection explicit. Which action best addresses the problem?
- ID: aai-hf-cognition-planning-and-memory-034
- Domain: Cognition, Planning, and Memory
- Topic: reflection; agentic_ai_professional
- Difficulty: medium
- A. Use planning budget as the main gate even though reviewers are asking for reflection evidence.
- B. Keep exposing private chain-of-thought as the primary release control and record only final outputs.
- C. Use reflection as the control boundary and require the system to use a critic to verify evidence sufficiency and plan quality.
- D. Wait for production incidents before adding a dedicated reflection check.
- Answer: C
- Explanation: The scenario is about reflection. The strongest answer fixes the failing layer directly: use a critic to verify evidence sufficiency and plan quality.
- Why A is wrong: It moves attention to a neighboring control instead of making reflection testable in the scenario.
- Why B is wrong: It keeps exposing private chain-of-thought in control instead of adding a measurable reflection decision point.
- Why D is wrong: Waiting for incidents postpones the reflection gate until after users are exposed.

### Q99: An automotive support team is comparing two release designs for a stateful planning workflow. One design centers on agents overwriting each other; the other adds a measurable state ownership step. Which design is more appropriate for production?
- ID: aai-hf-cognition-planning-and-memory-035
- Domain: Cognition, Planning, and Memory
- Topic: state ownership; agentic_ai_professional
- Difficulty: hard
- A. Use working memory as the main gate even though reviewers are asking for state ownership evidence.
- B. Keep agents overwriting each other as the primary release control and record only final outputs.
- C. Prioritize episodic memory before validating the failure signal around state ownership.
- D. Add a release gate for state ownership: make one runtime own canonical state transitions.
- Answer: D
- Explanation: The scenario is about state ownership. The strongest answer fixes the failing layer directly: make one runtime own canonical state transitions.
- Why A is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.
- Why B is wrong: It keeps agents overwriting each other in control instead of adding a measurable state ownership decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making state ownership testable in the scenario.

### Q100: A telecom network operations team is preparing a stateful planning workflow for release. The current design relies on storing every observation forever, but the release gate needs to track task state needed for the current workflow. Which architecture keeps the boundary cleanest?
- ID: aai-hf-cognition-planning-and-memory-036
- Domain: Cognition, Planning, and Memory
- Topic: working memory; agentic_ai_professional
- Difficulty: hard
- A. Change the design around working memory so the system can track task state needed for the current workflow.
- B. Keep storing every observation forever as the primary release control and record only final outputs.
- C. Prioritize reflection before validating the failure signal around working memory.
- D. Bundle working memory, state ownership, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about working memory. The strongest answer fixes the failing layer directly: track task state needed for the current workflow.
- Why B is wrong: It keeps storing every observation forever in control instead of adding a measurable working memory decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making working memory testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether working memory fixed or caused the failure.

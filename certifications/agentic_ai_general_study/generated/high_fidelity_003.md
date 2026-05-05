# High Fidelity Generated Questions 003

## Questions

### Q1: A telecom network operations team is comparing two release designs for an inference-serving rollout. One design centers on static padding to the longest prompt; the other adds a measurable continuous batching step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-013
- Domain: Inference Serving and Deployment
- Topic: continuous batching; agentic_ai_general_study
- Difficulty: hard
- A. Bundle continuous batching, NIM, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated continuous batching check.
- C. Use NIM as the main gate even though reviewers are asking for continuous batching evidence.
- D. Make continuous batching explicit in the workflow: admit new requests as decode slots free up.
- Answer: D
- Explanation: The scenario is about continuous batching. The strongest answer fixes the failing layer directly: admit new requests as decode slots free up.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether continuous batching fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the continuous batching gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.

### Q2: A pharmaceutical research team has a production-readiness review for an inference-serving rollout. The review is focused on AWQ, because the system must preserve salient weight channels for INT4 serving. Which implementation path is most appropriate?
- ID: ags-hf-inference-serving-and-deployment-014
- Domain: Inference Serving and Deployment
- Topic: AWQ; agentic_ai_general_study
- Difficulty: expert
- A. Use AWQ as the control boundary and require the system to preserve salient weight channels for INT4 serving.
- B. Wait for production incidents before adding a dedicated AWQ check.
- C. Use continuous batching as the main gate even though reviewers are asking for AWQ evidence.
- D. Keep uncalibrated per-tensor quantization as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about AWQ. The strongest answer fixes the failing layer directly: preserve salient weight channels for INT4 serving.
- Why B is wrong: Waiting for incidents postpones the AWQ gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.
- Why D is wrong: It keeps uncalibrated per-tensor quantization in control instead of adding a measurable AWQ decision point.

### Q3: A semiconductor design group sees a production failure tied to NIM. The team has been using training frameworks as serving endpoints; the next change needs to make NIM explicit. Which action best addresses the problem?
- ID: ags-hf-inference-serving-and-deployment-015
- Domain: Inference Serving and Deployment
- Topic: NIM; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize blue-green deployment before validating the failure signal around NIM.
- B. Add a release gate for NIM: package optimized models as production microservice APIs.
- C. Use paged KV cache as the main gate even though reviewers are asking for NIM evidence.
- D. Keep training frameworks as serving endpoints as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about NIM. The strongest answer fixes the failing layer directly: package optimized models as production microservice APIs.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why D is wrong: It keeps training frameworks as serving endpoints in control instead of adding a measurable NIM decision point.

### Q4: A public-sector casework team is comparing two release designs for an inference-serving rollout. One design centers on one custom script per model path; the other adds a measurable Triton ensembles step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-016
- Domain: Inference Serving and Deployment
- Topic: Triton ensembles; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize NIM Operator before validating the failure signal around Triton ensembles.
- B. Bundle Triton ensembles, NIM, and prompt changes into one release with one aggregate score.
- C. Change the design around Triton ensembles so the system can compose preprocessing, model execution, and postprocessing.
- D. Keep one custom script per model path as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about Triton ensembles. The strongest answer fixes the failing layer directly: compose preprocessing, model execution, and postprocessing.
- Why A is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether Triton ensembles fixed or caused the failure.
- Why D is wrong: It keeps one custom script per model path in control instead of adding a measurable Triton ensembles decision point.

### Q5: A telecom network operations team is preparing an inference-serving rollout for release. The current design relies on the inference microservice itself, but the release gate needs to manage NIM lifecycle on Kubernetes. Which control should be added before rollout?
- ID: ags-hf-inference-serving-and-deployment-017
- Domain: Inference Serving and Deployment
- Topic: NIM Operator; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize NIM before validating the failure signal around NIM Operator.
- B. Bundle NIM Operator, Triton ensembles, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated NIM Operator check.
- D. Make NIM Operator explicit in the workflow: manage NIM lifecycle on Kubernetes.
- Answer: D
- Explanation: The scenario is about NIM Operator. The strongest answer fixes the failing layer directly: manage NIM lifecycle on Kubernetes.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether NIM Operator fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the NIM Operator gate until after users are exposed.

### Q6: An insurance claims group is reviewing an inference-serving rollout before rollout. The main risk is blue-green deployment: the system must switch traffic with rollback-ready versions. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-018
- Domain: Inference Serving and Deployment
- Topic: blue-green deployment; agentic_ai_general_study
- Difficulty: medium
- A. Use blue-green deployment as the control boundary and require the system to switch traffic with rollback-ready versions.
- B. Bundle blue-green deployment, Triton ensembles, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated blue-green deployment check.
- D. Use Triton ensembles as the main gate even though reviewers are asking for blue-green deployment evidence.
- Answer: A
- Explanation: The scenario is about blue-green deployment. The strongest answer fixes the failing layer directly: switch traffic with rollback-ready versions.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether blue-green deployment fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the blue-green deployment gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.

### Q7: A cybersecurity response team sees a production failure tied to paged KV cache. The team has been using weight quantization for a KV-cache bottleneck; the next change needs to make paged KV cache explicit. Which action best addresses the problem?
- ID: ags-hf-inference-serving-and-deployment-019
- Domain: Inference Serving and Deployment
- Topic: paged KV cache; agentic_ai_general_study
- Difficulty: hard
- A. Keep weight quantization for a KV-cache bottleneck as the primary release control and record only final outputs.
- B. Add a release gate for paged KV cache: reduce fragmentation for variable-length generation.
- C. Wait for production incidents before adding a dedicated paged KV cache check.
- D. Use AWQ as the main gate even though reviewers are asking for paged KV cache evidence.
- Answer: B
- Explanation: The scenario is about paged KV cache. The strongest answer fixes the failing layer directly: reduce fragmentation for variable-length generation.
- Why A is wrong: It keeps weight quantization for a KV-cache bottleneck in control instead of adding a measurable paged KV cache decision point.
- Why C is wrong: Waiting for incidents postpones the paged KV cache gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.

### Q8: A public-sector casework team is comparing two release designs for an inference-serving rollout. One design centers on static padding to the longest prompt; the other adds a measurable continuous batching step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-020
- Domain: Inference Serving and Deployment
- Topic: continuous batching; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize NIM Operator before validating the failure signal around continuous batching.
- B. Change the design around continuous batching so the system can admit new requests as decode slots free up.
- C. Use blue-green deployment as the main gate even though reviewers are asking for continuous batching evidence.
- D. Keep static padding to the longest prompt as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about continuous batching. The strongest answer fixes the failing layer directly: admit new requests as decode slots free up.
- Why A is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.
- Why D is wrong: It keeps static padding to the longest prompt in control instead of adding a measurable continuous batching decision point.

### Q9: A manufacturing quality team has a production-readiness review for an inference-serving rollout. The review is focused on AWQ, because the system must preserve salient weight channels for INT4 serving. Which design is the best first change?
- ID: ags-hf-inference-serving-and-deployment-021
- Domain: Inference Serving and Deployment
- Topic: AWQ; agentic_ai_general_study
- Difficulty: expert
- A. Make AWQ explicit in the workflow: preserve salient weight channels for INT4 serving.
- B. Keep uncalibrated per-tensor quantization as the primary release control and record only final outputs.
- C. Prioritize NIM before validating the failure signal around AWQ.
- D. Bundle AWQ, blue-green deployment, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about AWQ. The strongest answer fixes the failing layer directly: preserve salient weight channels for INT4 serving.
- Why B is wrong: It keeps uncalibrated per-tensor quantization in control instead of adding a measurable AWQ decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether AWQ fixed or caused the failure.

### Q10: A semiconductor design group is comparing two release designs for an inference-serving rollout. One design centers on training frameworks as serving endpoints; the other adds a measurable NIM step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-022
- Domain: Inference Serving and Deployment
- Topic: NIM; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize continuous batching before validating the failure signal around NIM.
- B. Bundle NIM, AWQ, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated NIM check.
- D. Use NIM as the control boundary and require the system to package optimized models as production microservice APIs.
- Answer: D
- Explanation: The scenario is about NIM. The strongest answer fixes the failing layer directly: package optimized models as production microservice APIs.
- Why A is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether NIM fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the NIM gate until after users are exposed.

### Q11: An insurance claims group is comparing two release designs for an inference-serving rollout. One design centers on one custom script per model path; the other adds a measurable Triton ensembles step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-023
- Domain: Inference Serving and Deployment
- Topic: Triton ensembles; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated Triton ensembles check.
- B. Use blue-green deployment as the main gate even though reviewers are asking for Triton ensembles evidence.
- C. Add a release gate for Triton ensembles: compose preprocessing, model execution, and postprocessing.
- D. Bundle Triton ensembles, blue-green deployment, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about Triton ensembles. The strongest answer fixes the failing layer directly: compose preprocessing, model execution, and postprocessing.
- Why A is wrong: Waiting for incidents postpones the Triton ensembles gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether Triton ensembles fixed or caused the failure.

### Q12: A logistics planning team is reviewing an inference-serving rollout before rollout. The main risk is NIM Operator: the system must manage NIM lifecycle on Kubernetes. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-024
- Domain: Inference Serving and Deployment
- Topic: NIM Operator; agentic_ai_general_study
- Difficulty: expert
- A. Keep the inference microservice itself as the primary release control and record only final outputs.
- B. Change the design around NIM Operator so the system can manage NIM lifecycle on Kubernetes.
- C. Wait for production incidents before adding a dedicated NIM Operator check.
- D. Use Triton ensembles as the main gate even though reviewers are asking for NIM Operator evidence.
- Answer: B
- Explanation: The scenario is about NIM Operator. The strongest answer fixes the failing layer directly: manage NIM lifecycle on Kubernetes.
- Why A is wrong: It keeps the inference microservice itself in control instead of adding a measurable NIM Operator decision point.
- Why C is wrong: Waiting for incidents postpones the NIM Operator gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.

### Q13: A public-sector casework team is comparing two release designs for an inference-serving rollout. One design centers on restarting pods without quality gates; the other adds a measurable blue-green deployment step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-025
- Domain: Inference Serving and Deployment
- Topic: blue-green deployment; agentic_ai_general_study
- Difficulty: medium
- A. Make blue-green deployment explicit in the workflow: switch traffic with rollback-ready versions.
- B. Use AWQ as the main gate even though reviewers are asking for blue-green deployment evidence.
- C. Keep restarting pods without quality gates as the primary release control and record only final outputs.
- D. Prioritize continuous batching before validating the failure signal around blue-green deployment.
- Answer: A
- Explanation: The scenario is about blue-green deployment. The strongest answer fixes the failing layer directly: switch traffic with rollback-ready versions.
- Why B is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.
- Why C is wrong: It keeps restarting pods without quality gates in control instead of adding a measurable blue-green deployment decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.

### Q14: A cybersecurity response team is comparing two release designs for an inference-serving rollout. One design centers on weight quantization for a KV-cache bottleneck; the other adds a measurable paged KV cache step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-026
- Domain: Inference Serving and Deployment
- Topic: paged KV cache; agentic_ai_general_study
- Difficulty: hard
- A. Keep weight quantization for a KV-cache bottleneck as the primary release control and record only final outputs.
- B. Prioritize continuous batching before validating the failure signal around paged KV cache.
- C. Bundle paged KV cache, Triton ensembles, and prompt changes into one release with one aggregate score.
- D. Use paged KV cache as the control boundary and require the system to reduce fragmentation for variable-length generation.
- Answer: D
- Explanation: The scenario is about paged KV cache. The strongest answer fixes the failing layer directly: reduce fragmentation for variable-length generation.
- Why A is wrong: It keeps weight quantization for a KV-cache bottleneck in control instead of adding a measurable paged KV cache decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether paged KV cache fixed or caused the failure.

### Q15: A pharmaceutical research team is preparing an inference-serving rollout for release. The current design relies on static padding to the longest prompt, but the release gate needs to admit new requests as decode slots free up. Which choice addresses the root cause?
- ID: ags-hf-inference-serving-and-deployment-027
- Domain: Inference Serving and Deployment
- Topic: continuous batching; agentic_ai_general_study
- Difficulty: hard
- A. Bundle continuous batching, Triton ensembles, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated continuous batching check.
- C. Add a release gate for continuous batching: admit new requests as decode slots free up.
- D. Prioritize paged KV cache before validating the failure signal around continuous batching.
- Answer: C
- Explanation: The scenario is about continuous batching. The strongest answer fixes the failing layer directly: admit new requests as decode slots free up.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether continuous batching fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the continuous batching gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.

### Q16: A logistics planning team sees a production failure tied to AWQ. The team has been using uncalibrated per-tensor quantization; the next change needs to make AWQ explicit. Which action best addresses the problem?
- ID: ags-hf-inference-serving-and-deployment-028
- Domain: Inference Serving and Deployment
- Topic: AWQ; agentic_ai_general_study
- Difficulty: easy
- A. Use NIM Operator as the main gate even though reviewers are asking for AWQ evidence.
- B. Change the design around AWQ so the system can preserve salient weight channels for INT4 serving.
- C. Bundle AWQ, NIM Operator, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated AWQ check.
- Answer: B
- Explanation: The scenario is about AWQ. The strongest answer fixes the failing layer directly: preserve salient weight channels for INT4 serving.
- Why A is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether AWQ fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the AWQ gate until after users are exposed.

### Q17: A hospital operations team has a production-readiness review for an inference-serving rollout. The review is focused on NIM, because the system must package optimized models as production microservice APIs. Which choice addresses the root cause?
- ID: ags-hf-inference-serving-and-deployment-029
- Domain: Inference Serving and Deployment
- Topic: NIM; agentic_ai_general_study
- Difficulty: hard
- A. Make NIM explicit in the workflow: package optimized models as production microservice APIs.
- B. Wait for production incidents before adding a dedicated NIM check.
- C. Use blue-green deployment as the main gate even though reviewers are asking for NIM evidence.
- D. Keep training frameworks as serving endpoints as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about NIM. The strongest answer fixes the failing layer directly: package optimized models as production microservice APIs.
- Why B is wrong: Waiting for incidents postpones the NIM gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why D is wrong: It keeps training frameworks as serving endpoints in control instead of adding a measurable NIM decision point.

### Q18: A bank fraud team is comparing two release designs for an inference-serving rollout. One design centers on one custom script per model path; the other adds a measurable Triton ensembles step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-030
- Domain: Inference Serving and Deployment
- Topic: Triton ensembles; agentic_ai_general_study
- Difficulty: expert
- A. Keep one custom script per model path as the primary release control and record only final outputs.
- B. Prioritize NIM before validating the failure signal around Triton ensembles.
- C. Use Triton ensembles as the control boundary and require the system to compose preprocessing, model execution, and postprocessing.
- D. Use NIM Operator as the main gate even though reviewers are asking for Triton ensembles evidence.
- Answer: C
- Explanation: The scenario is about Triton ensembles. The strongest answer fixes the failing layer directly: compose preprocessing, model execution, and postprocessing.
- Why A is wrong: It keeps one custom script per model path in control instead of adding a measurable Triton ensembles decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.

### Q19: A global retailer is reviewing an inference-serving rollout before rollout. The main risk is NIM Operator: the system must manage NIM lifecycle on Kubernetes. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-031
- Domain: Inference Serving and Deployment
- Topic: NIM Operator; agentic_ai_general_study
- Difficulty: medium
- A. Keep the inference microservice itself as the primary release control and record only final outputs.
- B. Prioritize continuous batching before validating the failure signal around NIM Operator.
- C. Bundle NIM Operator, AWQ, and prompt changes into one release with one aggregate score.
- D. Add a release gate for NIM Operator: manage NIM lifecycle on Kubernetes.
- Answer: D
- Explanation: The scenario is about NIM Operator. The strongest answer fixes the failing layer directly: manage NIM lifecycle on Kubernetes.
- Why A is wrong: It keeps the inference microservice itself in control instead of adding a measurable NIM Operator decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether NIM Operator fixed or caused the failure.

### Q20: A pharmaceutical research team is comparing two release designs for an inference-serving rollout. One design centers on restarting pods without quality gates; the other adds a measurable blue-green deployment step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-032
- Domain: Inference Serving and Deployment
- Topic: blue-green deployment; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around blue-green deployment so the system can switch traffic with rollback-ready versions.
- B. Prioritize NIM before validating the failure signal around blue-green deployment.
- C. Bundle blue-green deployment, paged KV cache, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated blue-green deployment check.
- Answer: A
- Explanation: The scenario is about blue-green deployment. The strongest answer fixes the failing layer directly: switch traffic with rollback-ready versions.
- Why B is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether blue-green deployment fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the blue-green deployment gate until after users are exposed.

### Q21: A bank fraud team sees a production failure tied to paged KV cache. The team has been using weight quantization for a KV-cache bottleneck; the next change needs to make paged KV cache explicit. Which action best addresses the problem?
- ID: ags-hf-inference-serving-and-deployment-033
- Domain: Inference Serving and Deployment
- Topic: paged KV cache; agentic_ai_general_study
- Difficulty: hard
- A. Use Triton ensembles as the main gate even though reviewers are asking for paged KV cache evidence.
- B. Make paged KV cache explicit in the workflow: reduce fragmentation for variable-length generation.
- C. Bundle paged KV cache, Triton ensembles, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated paged KV cache check.
- Answer: B
- Explanation: The scenario is about paged KV cache. The strongest answer fixes the failing layer directly: reduce fragmentation for variable-length generation.
- Why A is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether paged KV cache fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the paged KV cache gate until after users are exposed.

### Q22: A manufacturing quality team is reviewing an inference-serving rollout before rollout. The main risk is continuous batching: the system must admit new requests as decode slots free up. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-034
- Domain: Inference Serving and Deployment
- Topic: continuous batching; agentic_ai_general_study
- Difficulty: expert
- A. Use Triton ensembles as the main gate even though reviewers are asking for continuous batching evidence.
- B. Keep static padding to the longest prompt as the primary release control and record only final outputs.
- C. Use continuous batching as the control boundary and require the system to admit new requests as decode slots free up.
- D. Wait for production incidents before adding a dedicated continuous batching check.
- Answer: C
- Explanation: The scenario is about continuous batching. The strongest answer fixes the failing layer directly: admit new requests as decode slots free up.
- Why A is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.
- Why B is wrong: It keeps static padding to the longest prompt in control instead of adding a measurable continuous batching decision point.
- Why D is wrong: Waiting for incidents postpones the continuous batching gate until after users are exposed.

### Q23: A telecom network operations team has a production-readiness review for an inference-serving rollout. The review is focused on AWQ, because the system must preserve salient weight channels for INT4 serving. Which action best fits the requirement?
- ID: ags-hf-inference-serving-and-deployment-035
- Domain: Inference Serving and Deployment
- Topic: AWQ; agentic_ai_general_study
- Difficulty: medium
- A. Use NIM Operator as the main gate even though reviewers are asking for AWQ evidence.
- B. Keep uncalibrated per-tensor quantization as the primary release control and record only final outputs.
- C. Prioritize blue-green deployment before validating the failure signal around AWQ.
- D. Add a release gate for AWQ: preserve salient weight channels for INT4 serving.
- Answer: D
- Explanation: The scenario is about AWQ. The strongest answer fixes the failing layer directly: preserve salient weight channels for INT4 serving.
- Why A is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.
- Why B is wrong: It keeps uncalibrated per-tensor quantization in control instead of adding a measurable AWQ decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.

### Q24: A pharmaceutical research team is preparing an inference-serving rollout for release. The current design relies on training frameworks as serving endpoints, but the release gate needs to package optimized models as production microservice APIs. Which design is the best first change?
- ID: ags-hf-inference-serving-and-deployment-036
- Domain: Inference Serving and Deployment
- Topic: NIM; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around NIM so the system can package optimized models as production microservice APIs.
- B. Keep training frameworks as serving endpoints as the primary release control and record only final outputs.
- C. Prioritize NIM Operator before validating the failure signal around NIM.
- D. Bundle NIM, continuous batching, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about NIM. The strongest answer fixes the failing layer directly: package optimized models as production microservice APIs.
- Why B is wrong: It keeps training frameworks as serving endpoints in control instead of adding a measurable NIM decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether NIM fixed or caused the failure.

### Q25: A bank fraud team is comparing two release designs for an inference-serving rollout. One design centers on one custom script per model path; the other adds a measurable Triton ensembles step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-037
- Domain: Inference Serving and Deployment
- Topic: Triton ensembles; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated Triton ensembles check.
- B. Make Triton ensembles explicit in the workflow: compose preprocessing, model execution, and postprocessing.
- C. Prioritize blue-green deployment before validating the failure signal around Triton ensembles.
- D. Bundle Triton ensembles, paged KV cache, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about Triton ensembles. The strongest answer fixes the failing layer directly: compose preprocessing, model execution, and postprocessing.
- Why A is wrong: Waiting for incidents postpones the Triton ensembles gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether Triton ensembles fixed or caused the failure.

### Q26: A manufacturing quality team is comparing two release designs for an inference-serving rollout. One design centers on the inference microservice itself; the other adds a measurable NIM Operator step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-038
- Domain: Inference Serving and Deployment
- Topic: NIM Operator; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated NIM Operator check.
- B. Use continuous batching as the main gate even though reviewers are asking for NIM Operator evidence.
- C. Use NIM Operator as the control boundary and require the system to manage NIM lifecycle on Kubernetes.
- D. Bundle NIM Operator, continuous batching, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about NIM Operator. The strongest answer fixes the failing layer directly: manage NIM lifecycle on Kubernetes.
- Why A is wrong: Waiting for incidents postpones the NIM Operator gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether NIM Operator fixed or caused the failure.

### Q27: A telecom network operations team has a production-readiness review for an inference-serving rollout. The review is focused on blue-green deployment, because the system must switch traffic with rollback-ready versions. Which action best fits the requirement?
- ID: ags-hf-inference-serving-and-deployment-039
- Domain: Inference Serving and Deployment
- Topic: blue-green deployment; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated blue-green deployment check.
- B. Use NIM as the main gate even though reviewers are asking for blue-green deployment evidence.
- C. Keep restarting pods without quality gates as the primary release control and record only final outputs.
- D. Add a release gate for blue-green deployment: switch traffic with rollback-ready versions.
- Answer: D
- Explanation: The scenario is about blue-green deployment. The strongest answer fixes the failing layer directly: switch traffic with rollback-ready versions.
- Why A is wrong: Waiting for incidents postpones the blue-green deployment gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.
- Why C is wrong: It keeps restarting pods without quality gates in control instead of adding a measurable blue-green deployment decision point.

### Q28: A pharmaceutical research team is reviewing an inference-serving rollout before rollout. The main risk is paged KV cache: the system must reduce fragmentation for variable-length generation. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-040
- Domain: Inference Serving and Deployment
- Topic: paged KV cache; agentic_ai_general_study
- Difficulty: hard
- A. Use NIM Operator as the main gate even though reviewers are asking for paged KV cache evidence.
- B. Keep weight quantization for a KV-cache bottleneck as the primary release control and record only final outputs.
- C. Prioritize blue-green deployment before validating the failure signal around paged KV cache.
- D. Change the design around paged KV cache so the system can reduce fragmentation for variable-length generation.
- Answer: D
- Explanation: The scenario is about paged KV cache. The strongest answer fixes the failing layer directly: reduce fragmentation for variable-length generation.
- Why A is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.
- Why B is wrong: It keeps weight quantization for a KV-cache bottleneck in control instead of adding a measurable paged KV cache decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.

### Q29: An automotive support team has a production-readiness review for an inference-serving rollout. The review is focused on continuous batching, because the system must admit new requests as decode slots free up. Which design is the best first change?
- ID: ags-hf-inference-serving-and-deployment-041
- Domain: Inference Serving and Deployment
- Topic: continuous batching; agentic_ai_general_study
- Difficulty: expert
- A. Prioritize NIM Operator before validating the failure signal around continuous batching.
- B. Bundle continuous batching, AWQ, and prompt changes into one release with one aggregate score.
- C. Make continuous batching explicit in the workflow: admit new requests as decode slots free up.
- D. Keep static padding to the longest prompt as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about continuous batching. The strongest answer fixes the failing layer directly: admit new requests as decode slots free up.
- Why A is wrong: It moves attention to a neighboring control instead of making continuous batching testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether continuous batching fixed or caused the failure.
- Why D is wrong: It keeps static padding to the longest prompt in control instead of adding a measurable continuous batching decision point.

### Q30: A logistics planning team is comparing two release designs for an inference-serving rollout. One design centers on uncalibrated per-tensor quantization; the other adds a measurable AWQ step. Which design is more appropriate for production?
- ID: ags-hf-inference-serving-and-deployment-042
- Domain: Inference Serving and Deployment
- Topic: AWQ; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated AWQ check.
- B. Use AWQ as the control boundary and require the system to preserve salient weight channels for INT4 serving.
- C. Prioritize continuous batching before validating the failure signal around AWQ.
- D. Bundle AWQ, paged KV cache, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about AWQ. The strongest answer fixes the failing layer directly: preserve salient weight channels for INT4 serving.
- Why A is wrong: Waiting for incidents postpones the AWQ gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making AWQ testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether AWQ fixed or caused the failure.

### Q31: A hospital operations team is reviewing an inference-serving rollout before rollout. The main risk is NIM: the system must package optimized models as production microservice APIs. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-043
- Domain: Inference Serving and Deployment
- Topic: NIM; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for NIM: package optimized models as production microservice APIs.
- B. Bundle NIM, Triton ensembles, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated NIM check.
- D. Use Triton ensembles as the main gate even though reviewers are asking for NIM evidence.
- Answer: A
- Explanation: The scenario is about NIM. The strongest answer fixes the failing layer directly: package optimized models as production microservice APIs.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether NIM fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the NIM gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM testable in the scenario.

### Q32: A cybersecurity response team is reviewing an inference-serving rollout before rollout. The main risk is Triton ensembles: the system must compose preprocessing, model execution, and postprocessing. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-044
- Domain: Inference Serving and Deployment
- Topic: Triton ensembles; agentic_ai_general_study
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated Triton ensembles check.
- B. Use AWQ as the main gate even though reviewers are asking for Triton ensembles evidence.
- C. Keep one custom script per model path as the primary release control and record only final outputs.
- D. Change the design around Triton ensembles so the system can compose preprocessing, model execution, and postprocessing.
- Answer: D
- Explanation: The scenario is about Triton ensembles. The strongest answer fixes the failing layer directly: compose preprocessing, model execution, and postprocessing.
- Why A is wrong: Waiting for incidents postpones the Triton ensembles gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making Triton ensembles testable in the scenario.
- Why C is wrong: It keeps one custom script per model path in control instead of adding a measurable Triton ensembles decision point.

### Q33: An automotive support team is reviewing an inference-serving rollout before rollout. The main risk is NIM Operator: the system must manage NIM lifecycle on Kubernetes. Which option keeps the decision at the right layer?
- ID: ags-hf-inference-serving-and-deployment-045
- Domain: Inference Serving and Deployment
- Topic: NIM Operator; agentic_ai_general_study
- Difficulty: medium
- A. Keep the inference microservice itself as the primary release control and record only final outputs.
- B. Prioritize Triton ensembles before validating the failure signal around NIM Operator.
- C. Make NIM Operator explicit in the workflow: manage NIM lifecycle on Kubernetes.
- D. Use NIM as the main gate even though reviewers are asking for NIM Operator evidence.
- Answer: C
- Explanation: The scenario is about NIM Operator. The strongest answer fixes the failing layer directly: manage NIM lifecycle on Kubernetes.
- Why A is wrong: It keeps the inference microservice itself in control instead of adding a measurable NIM Operator decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making NIM Operator testable in the scenario.

### Q34: A logistics planning team is preparing an inference-serving rollout for release. The current design relies on restarting pods without quality gates, but the release gate needs to switch traffic with rollback-ready versions. Which action best fits the requirement?
- ID: ags-hf-inference-serving-and-deployment-046
- Domain: Inference Serving and Deployment
- Topic: blue-green deployment; agentic_ai_general_study
- Difficulty: hard
- A. Bundle blue-green deployment, continuous batching, and prompt changes into one release with one aggregate score.
- B. Use blue-green deployment as the control boundary and require the system to switch traffic with rollback-ready versions.
- C. Keep restarting pods without quality gates as the primary release control and record only final outputs.
- D. Prioritize Triton ensembles before validating the failure signal around blue-green deployment.
- Answer: B
- Explanation: The scenario is about blue-green deployment. The strongest answer fixes the failing layer directly: switch traffic with rollback-ready versions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether blue-green deployment fixed or caused the failure.
- Why C is wrong: It keeps restarting pods without quality gates in control instead of adding a measurable blue-green deployment decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making blue-green deployment testable in the scenario.

### Q35: A hospital operations team is preparing an inference-serving rollout for release. The current design relies on weight quantization for a KV-cache bottleneck, but the release gate needs to reduce fragmentation for variable-length generation. Which implementation path is most appropriate?
- ID: ags-hf-inference-serving-and-deployment-047
- Domain: Inference Serving and Deployment
- Topic: paged KV cache; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for paged KV cache: reduce fragmentation for variable-length generation.
- B. Prioritize Triton ensembles before validating the failure signal around paged KV cache.
- C. Bundle paged KV cache, continuous batching, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated paged KV cache check.
- Answer: A
- Explanation: The scenario is about paged KV cache. The strongest answer fixes the failing layer directly: reduce fragmentation for variable-length generation.
- Why B is wrong: It moves attention to a neighboring control instead of making paged KV cache testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether paged KV cache fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the paged KV cache gate until after users are exposed.

### Q36: A pharmaceutical research team is comparing two release designs for an evaluation and safety gate. One design centers on scoring only the final text; the other adds a measurable trajectory evaluation step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-001
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: expert
- A. Bundle trajectory evaluation, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- B. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- C. Keep scoring only the final text as the primary release control and record only final outputs.
- D. Prioritize bootstrap evals before validating the failure signal around trajectory evaluation.
- Answer: B
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why C is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q37: A logistics planning team has a production-readiness review for an evaluation and safety gate. The review is focused on bootstrap evals, because the system must create verified question-chunk pairs when labels are missing. Which action best fits the requirement?
- ID: ags-hf-evaluation-and-safety-002
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: medium
- A. Bundle bootstrap evals, prompt injection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated bootstrap evals check.
- C. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- D. Prioritize least privilege before validating the failure signal around bootstrap evals.
- Answer: C
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q38: A hospital operations team has a production-readiness review for an evaluation and safety gate. The review is focused on LLM-as-judge calibration, because the system must anchor judge rubrics with human labels and disagreement review. Which choice addresses the root cause?
- ID: ags-hf-evaluation-and-safety-003
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: hard
- A. Bundle LLM-as-judge calibration, prompt injection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- C. Use prompt injection as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Add a release gate for LLM-as-judge calibration: anchor judge rubrics with human labels and disagreement review.
- Answer: D
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q39: A cybersecurity response team is comparing two release designs for an evaluation and safety gate. One design centers on one final moderation pass; the other adds a measurable layered controls step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-004
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: expert
- A. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- B. Wait for production incidents before adding a dedicated layered controls check.
- C. Use prompt injection as the main gate even though reviewers are asking for layered controls evidence.
- D. Keep one final moderation pass as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why B is wrong: Waiting for incidents postpones the layered controls gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why D is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.

### Q40: A pharmaceutical research team is comparing two release designs for an evaluation and safety gate. One design centers on letting documents override system policy; the other adds a measurable prompt injection step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-005
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize bootstrap evals before validating the failure signal around prompt injection.
- B. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- C. Use LLM-as-judge calibration as the main gate even though reviewers are asking for prompt injection evidence.
- D. Keep letting documents override system policy as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why D is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.

### Q41: A logistics planning team is preparing an evaluation and safety gate for release. The current design relies on giving the LLM API keys, but the release gate needs to scope credentials to tools and roles. Which control should be added before rollout?
- ID: ags-hf-evaluation-and-safety-006
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize layered controls before validating the failure signal around least privilege.
- B. Bundle least privilege, prompt injection, and prompt changes into one release with one aggregate score.
- C. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- D. Keep giving the LLM API keys as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why D is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.

### Q42: A public-sector casework team has a production-readiness review for an evaluation and safety gate. The review is focused on trajectory evaluation, because the system must score tool choice, retrieval, safety, latency, and final answer together. Which implementation path is most appropriate?
- ID: ags-hf-evaluation-and-safety-007
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize LLM-as-judge calibration before validating the failure signal around trajectory evaluation.
- B. Bundle trajectory evaluation, prompt injection, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated trajectory evaluation check.
- D. Add a release gate for trajectory evaluation: score tool choice, retrieval, safety, latency, and final answer together.
- Answer: D
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the trajectory evaluation gate until after users are exposed.

### Q43: A cybersecurity response team is comparing two release designs for an evaluation and safety gate. One design centers on agent self-judgment as ground truth; the other adds a measurable bootstrap evals step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-008
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: easy
- A. Change the design around bootstrap evals so the system can create verified question-chunk pairs when labels are missing.
- B. Bundle bootstrap evals, prompt injection, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bootstrap evals check.
- D. Use prompt injection as the main gate even though reviewers are asking for bootstrap evals evidence.
- Answer: A
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q44: A pharmaceutical research team is preparing an evaluation and safety gate for release. The current design relies on trusting a judge score with no calibration, but the release gate needs to anchor judge rubrics with human labels and disagreement review. Which design is the best first change?
- ID: ags-hf-evaluation-and-safety-009
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: hard
- A. Keep trusting a judge score with no calibration as the primary release control and record only final outputs.
- B. Make LLM-as-judge calibration explicit in the workflow: anchor judge rubrics with human labels and disagreement review.
- C. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- D. Use layered controls as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- Answer: B
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.
- Why C is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q45: A telecom network operations team has a production-readiness review for an evaluation and safety gate. The review is focused on layered controls, because the system must combine input, retrieval, tool, and output controls. Which architecture keeps the boundary cleanest?
- ID: ags-hf-evaluation-and-safety-010
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: expert
- A. Use least privilege as the main gate even though reviewers are asking for layered controls evidence.
- B. Keep one final moderation pass as the primary release control and record only final outputs.
- C. Prioritize LLM-as-judge calibration before validating the failure signal around layered controls.
- D. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- Answer: D
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why B is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q46: A telecom network operations team sees a production failure tied to prompt injection. The team has been using letting documents override system policy; the next change needs to make prompt injection explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-011
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize trajectory evaluation before validating the failure signal around prompt injection.
- B. Bundle prompt injection, layered controls, and prompt changes into one release with one aggregate score.
- C. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- D. Keep letting documents override system policy as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why D is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.

### Q47: An automotive support team is comparing two release designs for an evaluation and safety gate. One design centers on giving the LLM API keys; the other adds a measurable least privilege step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-012
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated least privilege check.
- B. Change the design around least privilege so the system can scope credentials to tools and roles.
- C. Prioritize prompt injection before validating the failure signal around least privilege.
- D. Bundle least privilege, layered controls, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.

### Q48: A cybersecurity response team has a production-readiness review for an evaluation and safety gate. The review is focused on trajectory evaluation, because the system must score tool choice, retrieval, safety, latency, and final answer together. Which control should be added before rollout?
- ID: ags-hf-evaluation-and-safety-013
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: hard
- A. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- B. Bundle trajectory evaluation, least privilege, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated trajectory evaluation check.
- D. Use least privilege as the main gate even though reviewers are asking for trajectory evaluation evidence.
- Answer: A
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the trajectory evaluation gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q49: A hospital operations team is preparing an evaluation and safety gate for release. The current design relies on agent self-judgment as ground truth, but the release gate needs to create verified question-chunk pairs when labels are missing. Which implementation path is most appropriate?
- ID: ags-hf-evaluation-and-safety-014
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated bootstrap evals check.
- B. Use LLM-as-judge calibration as the main gate even though reviewers are asking for bootstrap evals evidence.
- C. Keep agent self-judgment as ground truth as the primary release control and record only final outputs.
- D. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why C is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.

### Q50: A logistics planning team sees a production failure tied to LLM-as-judge calibration. The team has been using trusting a judge score with no calibration; the next change needs to make LLM-as-judge calibration explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-015
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: medium
- A. Keep trusting a judge score with no calibration as the primary release control and record only final outputs.
- B. Prioritize bootstrap evals before validating the failure signal around LLM-as-judge calibration.
- C. Add a release gate for LLM-as-judge calibration: anchor judge rubrics with human labels and disagreement review.
- D. Use layered controls as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- Answer: C
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.

### Q51: An insurance claims group is comparing two release designs for an evaluation and safety gate. One design centers on one final moderation pass; the other adds a measurable layered controls step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-016
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: hard
- A. Bundle layered controls, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- B. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- C. Keep one final moderation pass as the primary release control and record only final outputs.
- D. Prioritize least privilege before validating the failure signal around layered controls.
- Answer: B
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q52: A semiconductor design group sees a production failure tied to prompt injection. The team has been using letting documents override system policy; the next change needs to make prompt injection explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-017
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: hard
- A. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- B. Prioritize layered controls before validating the failure signal around prompt injection.
- C. Bundle prompt injection, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated prompt injection check.
- Answer: A
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q53: A hospital operations team is comparing two release designs for an evaluation and safety gate. One design centers on giving the LLM API keys; the other adds a measurable least privilege step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-018
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: medium
- A. Bundle least privilege, prompt injection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated least privilege check.
- C. Use prompt injection as the main gate even though reviewers are asking for least privilege evidence.
- D. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- Answer: D
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q54: A global retailer sees a production failure tied to trajectory evaluation. The team has been using scoring only the final text; the next change needs to make trajectory evaluation explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-019
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: hard
- A. Use bootstrap evals as the main gate even though reviewers are asking for trajectory evaluation evidence.
- B. Keep scoring only the final text as the primary release control and record only final outputs.
- C. Add a release gate for trajectory evaluation: score tool choice, retrieval, safety, latency, and final answer together.
- D. Wait for production incidents before adding a dedicated trajectory evaluation check.
- Answer: C
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why D is wrong: Waiting for incidents postpones the trajectory evaluation gate until after users are exposed.

### Q55: A pharmaceutical research team sees a production failure tied to bootstrap evals. The team has been using agent self-judgment as ground truth; the next change needs to make bootstrap evals explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-020
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: hard
- A. Keep agent self-judgment as ground truth as the primary release control and record only final outputs.
- B. Prioritize trajectory evaluation before validating the failure signal around bootstrap evals.
- C. Change the design around bootstrap evals so the system can create verified question-chunk pairs when labels are missing.
- D. Use layered controls as the main gate even though reviewers are asking for bootstrap evals evidence.
- Answer: C
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.

### Q56: An automotive support team sees a production failure tied to LLM-as-judge calibration. The team has been using trusting a judge score with no calibration; the next change needs to make LLM-as-judge calibration explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-021
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: expert
- A. Keep trusting a judge score with no calibration as the primary release control and record only final outputs.
- B. Prioritize prompt injection before validating the failure signal around LLM-as-judge calibration.
- C. Bundle LLM-as-judge calibration, layered controls, and prompt changes into one release with one aggregate score.
- D. Make LLM-as-judge calibration explicit in the workflow: anchor judge rubrics with human labels and disagreement review.
- Answer: D
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.

### Q57: A logistics planning team is preparing an evaluation and safety gate for release. The current design relies on one final moderation pass, but the release gate needs to combine input, retrieval, tool, and output controls. Which architecture keeps the boundary cleanest?
- ID: ags-hf-evaluation-and-safety-022
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: medium
- A. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- B. Prioritize least privilege before validating the failure signal around layered controls.
- C. Bundle layered controls, bootstrap evals, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated layered controls check.
- Answer: A
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why B is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the layered controls gate until after users are exposed.

### Q58: A public-sector casework team is reviewing an evaluation and safety gate before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-023
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: hard
- A. Use layered controls as the main gate even though reviewers are asking for prompt injection evidence.
- B. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- C. Bundle prompt injection, layered controls, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated prompt injection check.
- Answer: B
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q59: A bank fraud team is reviewing an evaluation and safety gate before rollout. The main risk is least privilege: the system must scope credentials to tools and roles. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-024
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: expert
- A. Use LLM-as-judge calibration as the main gate even though reviewers are asking for least privilege evidence.
- B. Keep giving the LLM API keys as the primary release control and record only final outputs.
- C. Change the design around least privilege so the system can scope credentials to tools and roles.
- D. Wait for production incidents before adding a dedicated least privilege check.
- Answer: C
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why B is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.
- Why D is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.

### Q60: An automotive support team sees a production failure tied to trajectory evaluation. The team has been using scoring only the final text; the next change needs to make trajectory evaluation explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-025
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: medium
- A. Use bootstrap evals as the main gate even though reviewers are asking for trajectory evaluation evidence.
- B. Keep scoring only the final text as the primary release control and record only final outputs.
- C. Prioritize prompt injection before validating the failure signal around trajectory evaluation.
- D. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- Answer: D
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why B is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q61: A logistics planning team is comparing two release designs for an evaluation and safety gate. One design centers on agent self-judgment as ground truth; the other adds a measurable bootstrap evals step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-026
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: hard
- A. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- B. Keep agent self-judgment as ground truth as the primary release control and record only final outputs.
- C. Prioritize LLM-as-judge calibration before validating the failure signal around bootstrap evals.
- D. Bundle bootstrap evals, least privilege, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why B is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.

### Q62: A public-sector casework team is reviewing an evaluation and safety gate before rollout. The main risk is LLM-as-judge calibration: the system must anchor judge rubrics with human labels and disagreement review. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-027
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- B. Add a release gate for LLM-as-judge calibration: anchor judge rubrics with human labels and disagreement review.
- C. Prioritize bootstrap evals before validating the failure signal around LLM-as-judge calibration.
- D. Bundle LLM-as-judge calibration, least privilege, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.

### Q63: A semiconductor design group is preparing an evaluation and safety gate for release. The current design relies on one final moderation pass, but the release gate needs to combine input, retrieval, tool, and output controls. Which action best fits the requirement?
- ID: ags-hf-evaluation-and-safety-028
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: easy
- A. Wait for production incidents before adding a dedicated layered controls check.
- B. Use trajectory evaluation as the main gate even though reviewers are asking for layered controls evidence.
- C. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- D. Bundle layered controls, trajectory evaluation, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: Waiting for incidents postpones the layered controls gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.

### Q64: A pharmaceutical research team is reviewing an evaluation and safety gate before rollout. The main risk is prompt injection: the system must treat retrieved text and tool output as data, not instructions. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-029
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated prompt injection check.
- B. Use trajectory evaluation as the main gate even though reviewers are asking for prompt injection evidence.
- C. Keep letting documents override system policy as the primary release control and record only final outputs.
- D. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.

### Q65: A telecom network operations team is preparing an evaluation and safety gate for release. The current design relies on giving the LLM API keys, but the release gate needs to scope credentials to tools and roles. Which control should be added before rollout?
- ID: ags-hf-evaluation-and-safety-030
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: expert
- A. Prioritize trajectory evaluation before validating the failure signal around least privilege.
- B. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- C. Use bootstrap evals as the main gate even though reviewers are asking for least privilege evidence.
- D. Keep giving the LLM API keys as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why D is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.

### Q66: A semiconductor design group is preparing an evaluation and safety gate for release. The current design relies on scoring only the final text, but the release gate needs to score tool choice, retrieval, safety, latency, and final answer together. Which control should be added before rollout?
- ID: ags-hf-evaluation-and-safety-031
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: medium
- A. Add a release gate for trajectory evaluation: score tool choice, retrieval, safety, latency, and final answer together.
- B. Keep scoring only the final text as the primary release control and record only final outputs.
- C. Prioritize least privilege before validating the failure signal around trajectory evaluation.
- D. Bundle trajectory evaluation, prompt injection, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why B is wrong: It keeps scoring only the final text in control instead of adding a measurable trajectory evaluation decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.

### Q67: A hospital operations team has a production-readiness review for an evaluation and safety gate. The review is focused on bootstrap evals, because the system must create verified question-chunk pairs when labels are missing. Which design is the best first change?
- ID: ags-hf-evaluation-and-safety-032
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize trajectory evaluation before validating the failure signal around bootstrap evals.
- B. Bundle bootstrap evals, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated bootstrap evals check.
- D. Change the design around bootstrap evals so the system can create verified question-chunk pairs when labels are missing.
- Answer: D
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.

### Q68: A logistics planning team is preparing an evaluation and safety gate for release. The current design relies on trusting a judge score with no calibration, but the release gate needs to anchor judge rubrics with human labels and disagreement review. Which action best fits the requirement?
- ID: ags-hf-evaluation-and-safety-033
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- B. Use bootstrap evals as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- C. Make LLM-as-judge calibration explicit in the workflow: anchor judge rubrics with human labels and disagreement review.
- D. Bundle LLM-as-judge calibration, bootstrap evals, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether LLM-as-judge calibration fixed or caused the failure.

### Q69: A pharmaceutical research team sees a production failure tied to layered controls. The team has been using one final moderation pass; the next change needs to make layered controls explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-034
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: expert
- A. Keep one final moderation pass as the primary release control and record only final outputs.
- B. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- C. Wait for production incidents before adding a dedicated layered controls check.
- D. Use prompt injection as the main gate even though reviewers are asking for layered controls evidence.
- Answer: B
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why C is wrong: Waiting for incidents postpones the layered controls gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q70: A cybersecurity response team has a production-readiness review for an evaluation and safety gate. The review is focused on prompt injection, because the system must treat retrieved text and tool output as data, not instructions. Which architecture keeps the boundary cleanest?
- ID: ags-hf-evaluation-and-safety-035
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: medium
- A. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- B. Use least privilege as the main gate even though reviewers are asking for prompt injection evidence.
- C. Keep letting documents override system policy as the primary release control and record only final outputs.
- D. Prioritize trajectory evaluation before validating the failure signal around prompt injection.
- Answer: A
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why B is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why C is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q71: A public-sector casework team has a production-readiness review for an evaluation and safety gate. The review is focused on least privilege, because the system must scope credentials to tools and roles. Which choice addresses the root cause?
- ID: ags-hf-evaluation-and-safety-036
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: hard
- A. Keep giving the LLM API keys as the primary release control and record only final outputs.
- B. Prioritize bootstrap evals before validating the failure signal around least privilege.
- C. Bundle least privilege, prompt injection, and prompt changes into one release with one aggregate score.
- D. Change the design around least privilege so the system can scope credentials to tools and roles.
- Answer: D
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: It keeps giving the LLM API keys in control instead of adding a measurable least privilege decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.

### Q72: A logistics planning team sees a production failure tied to trajectory evaluation. The team has been using scoring only the final text; the next change needs to make trajectory evaluation explicit. Which action best addresses the problem?
- ID: ags-hf-evaluation-and-safety-037
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: hard
- A. Bundle trajectory evaluation, least privilege, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated trajectory evaluation check.
- C. Make trajectory evaluation explicit in the workflow: score tool choice, retrieval, safety, latency, and final answer together.
- D. Prioritize LLM-as-judge calibration before validating the failure signal around trajectory evaluation.
- Answer: C
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the trajectory evaluation gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q73: An automotive support team is preparing an evaluation and safety gate for release. The current design relies on agent self-judgment as ground truth, but the release gate needs to create verified question-chunk pairs when labels are missing. Which choice addresses the root cause?
- ID: ags-hf-evaluation-and-safety-038
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: medium
- A. Use trajectory evaluation as the main gate even though reviewers are asking for bootstrap evals evidence.
- B. Use bootstrap evals as the control boundary and require the system to create verified question-chunk pairs when labels are missing.
- C. Bundle bootstrap evals, trajectory evaluation, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated bootstrap evals check.
- Answer: B
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why A is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether bootstrap evals fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.

### Q74: A bank fraud team is reviewing an evaluation and safety gate before rollout. The main risk is LLM-as-judge calibration: the system must anchor judge rubrics with human labels and disagreement review. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-039
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: hard
- A. Add a release gate for LLM-as-judge calibration: anchor judge rubrics with human labels and disagreement review.
- B. Wait for production incidents before adding a dedicated LLM-as-judge calibration check.
- C. Use prompt injection as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Keep trusting a judge score with no calibration as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why B is wrong: Waiting for incidents postpones the LLM-as-judge calibration gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.

### Q75: A manufacturing quality team is preparing an evaluation and safety gate for release. The current design relies on one final moderation pass, but the release gate needs to combine input, retrieval, tool, and output controls. Which implementation path is most appropriate?
- ID: ags-hf-evaluation-and-safety-040
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around layered controls so the system can combine input, retrieval, tool, and output controls.
- B. Use LLM-as-judge calibration as the main gate even though reviewers are asking for layered controls evidence.
- C. Keep one final moderation pass as the primary release control and record only final outputs.
- D. Prioritize prompt injection before validating the failure signal around layered controls.
- Answer: A
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why B is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why C is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.

### Q76: A hospital operations team has a production-readiness review for an evaluation and safety gate. The review is focused on prompt injection, because the system must treat retrieved text and tool output as data, not instructions. Which design is the best first change?
- ID: ags-hf-evaluation-and-safety-041
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: expert
- A. Bundle prompt injection, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- B. Make prompt injection explicit in the workflow: treat retrieved text and tool output as data, not instructions.
- C. Keep letting documents override system policy as the primary release control and record only final outputs.
- D. Prioritize bootstrap evals before validating the failure signal around prompt injection.
- Answer: B
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why C is wrong: It keeps letting documents override system policy in control instead of adding a measurable prompt injection decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.

### Q77: A semiconductor design group has a production-readiness review for an evaluation and safety gate. The review is focused on least privilege, because the system must scope credentials to tools and roles. Which action best fits the requirement?
- ID: ags-hf-evaluation-and-safety-042
- Domain: Evaluation and Safety
- Topic: least privilege; agentic_ai_general_study
- Difficulty: medium
- A. Bundle least privilege, prompt injection, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated least privilege check.
- C. Use least privilege as the control boundary and require the system to scope credentials to tools and roles.
- D. Prioritize LLM-as-judge calibration before validating the failure signal around least privilege.
- Answer: C
- Explanation: The scenario is about least privilege. The strongest answer fixes the failing layer directly: scope credentials to tools and roles.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether least privilege fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the least privilege gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making least privilege testable in the scenario.

### Q78: A pharmaceutical research team is reviewing an evaluation and safety gate before rollout. The main risk is trajectory evaluation: the system must score tool choice, retrieval, safety, latency, and final answer together. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-043
- Domain: Evaluation and Safety
- Topic: trajectory evaluation; agentic_ai_general_study
- Difficulty: hard
- A. Bundle trajectory evaluation, LLM-as-judge calibration, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated trajectory evaluation check.
- C. Use LLM-as-judge calibration as the main gate even though reviewers are asking for trajectory evaluation evidence.
- D. Add a release gate for trajectory evaluation: score tool choice, retrieval, safety, latency, and final answer together.
- Answer: D
- Explanation: The scenario is about trajectory evaluation. The strongest answer fixes the failing layer directly: score tool choice, retrieval, safety, latency, and final answer together.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trajectory evaluation fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the trajectory evaluation gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making trajectory evaluation testable in the scenario.

### Q79: A logistics planning team is reviewing an evaluation and safety gate before rollout. The main risk is bootstrap evals: the system must create verified question-chunk pairs when labels are missing. Which option keeps the decision at the right layer?
- ID: ags-hf-evaluation-and-safety-044
- Domain: Evaluation and Safety
- Topic: bootstrap evals; agentic_ai_general_study
- Difficulty: expert
- A. Change the design around bootstrap evals so the system can create verified question-chunk pairs when labels are missing.
- B. Wait for production incidents before adding a dedicated bootstrap evals check.
- C. Use layered controls as the main gate even though reviewers are asking for bootstrap evals evidence.
- D. Keep agent self-judgment as ground truth as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about bootstrap evals. The strongest answer fixes the failing layer directly: create verified question-chunk pairs when labels are missing.
- Why B is wrong: Waiting for incidents postpones the bootstrap evals gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making bootstrap evals testable in the scenario.
- Why D is wrong: It keeps agent self-judgment as ground truth in control instead of adding a measurable bootstrap evals decision point.

### Q80: A public-sector casework team has a production-readiness review for an evaluation and safety gate. The review is focused on LLM-as-judge calibration, because the system must anchor judge rubrics with human labels and disagreement review. Which design is the best first change?
- ID: ags-hf-evaluation-and-safety-045
- Domain: Evaluation and Safety
- Topic: LLM-as-judge calibration; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize layered controls before validating the failure signal around LLM-as-judge calibration.
- B. Make LLM-as-judge calibration explicit in the workflow: anchor judge rubrics with human labels and disagreement review.
- C. Use trajectory evaluation as the main gate even though reviewers are asking for LLM-as-judge calibration evidence.
- D. Keep trusting a judge score with no calibration as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about LLM-as-judge calibration. The strongest answer fixes the failing layer directly: anchor judge rubrics with human labels and disagreement review.
- Why A is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making LLM-as-judge calibration testable in the scenario.
- Why D is wrong: It keeps trusting a judge score with no calibration in control instead of adding a measurable LLM-as-judge calibration decision point.

### Q81: A cybersecurity response team is comparing two release designs for an evaluation and safety gate. One design centers on one final moderation pass; the other adds a measurable layered controls step. Which design is more appropriate for production?
- ID: ags-hf-evaluation-and-safety-046
- Domain: Evaluation and Safety
- Topic: layered controls; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize trajectory evaluation before validating the failure signal around layered controls.
- B. Bundle layered controls, bootstrap evals, and prompt changes into one release with one aggregate score.
- C. Use layered controls as the control boundary and require the system to combine input, retrieval, tool, and output controls.
- D. Keep one final moderation pass as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about layered controls. The strongest answer fixes the failing layer directly: combine input, retrieval, tool, and output controls.
- Why A is wrong: It moves attention to a neighboring control instead of making layered controls testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether layered controls fixed or caused the failure.
- Why D is wrong: It keeps one final moderation pass in control instead of adding a measurable layered controls decision point.

### Q82: An automotive support team is preparing an evaluation and safety gate for release. The current design relies on letting documents override system policy, but the release gate needs to treat retrieved text and tool output as data, not instructions. Which choice addresses the root cause?
- ID: ags-hf-evaluation-and-safety-047
- Domain: Evaluation and Safety
- Topic: prompt injection; agentic_ai_general_study
- Difficulty: hard
- A. Prioritize layered controls before validating the failure signal around prompt injection.
- B. Bundle prompt injection, trajectory evaluation, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated prompt injection check.
- D. Add a release gate for prompt injection: treat retrieved text and tool output as data, not instructions.
- Answer: D
- Explanation: The scenario is about prompt injection. The strongest answer fixes the failing layer directly: treat retrieved text and tool output as data, not instructions.
- Why A is wrong: It moves attention to a neighboring control instead of making prompt injection testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether prompt injection fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the prompt injection gate until after users are exposed.

### Q83: A manufacturing quality team has a production-readiness review for an operational monitoring plan. The review is focused on trace replay, because the system must capture spans for model, retrieval, tools, guardrails, latency, and cost. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-001
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: expert
- A. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- B. Keep HTTP 200 as the only success signal as the primary release control and record only final outputs.
- C. Prioritize drift monitoring before validating the failure signal around trace replay.
- D. Bundle trace replay, canary monitoring, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why B is wrong: It keeps HTTP 200 as the only success signal in control instead of adding a measurable trace replay decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.

### Q84: A bank fraud team has a production-readiness review for an operational monitoring plan. The review is focused on drift monitoring, because the system must watch route mix, retrieval hit rate, judge scores, and escalation rates. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-002
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: medium
- A. Prioritize incident response before validating the failure signal around drift monitoring.
- B. Bundle drift monitoring, fallback policy, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated drift monitoring check.
- D. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Answer: D
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q85: An insurance claims group has a production-readiness review for an operational monitoring plan. The review is focused on incident response, because the system must convert incidents into regression tests and rollback rules. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-003
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated incident response check.
- B. Use canary monitoring as the main gate even though reviewers are asking for incident response evidence.
- C. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- D. Bundle incident response, canary monitoring, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether incident response fixed or caused the failure.

### Q86: A global retailer is reviewing an operational monitoring plan before rollout. The main risk is p95/p99 latency: the system must watch tail latency, queueing, retries, and error budgets. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-004
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: expert
- A. Keep average latency only as the primary release control and record only final outputs.
- B. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- C. Wait for production incidents before adding a dedicated p95/p99 latency check.
- D. Use trace replay as the main gate even though reviewers are asking for p95/p99 latency evidence.
- Answer: B
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.
- Why C is wrong: Waiting for incidents postpones the p95/p99 latency gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q87: A manufacturing quality team has a production-readiness review for an operational monitoring plan. The review is focused on canary monitoring, because the system must compare quality, safety, cost, and latency during rollout. Which design is the best first change?
- ID: ags-hf-observability-operations-and-cost-005
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: medium
- A. Make canary monitoring explicit in the workflow: compare quality, safety, cost, and latency during rollout.
- B. Use drift monitoring as the main gate even though reviewers are asking for canary monitoring evidence.
- C. Keep full rollout before measurement as the primary release control and record only final outputs.
- D. Prioritize p95/p99 latency before validating the failure signal around canary monitoring.
- Answer: A
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why B is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why C is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.

### Q88: A semiconductor design group is reviewing an operational monitoring plan before rollout. The main risk is fallback policy: the system must route around unhealthy models or tools with trace evidence. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-006
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: hard
- A. Keep silent fallback to lower quality as the primary release control and record only final outputs.
- B. Prioritize p95/p99 latency before validating the failure signal around fallback policy.
- C. Bundle fallback policy, canary monitoring, and prompt changes into one release with one aggregate score.
- D. Use fallback policy as the control boundary and require the system to route around unhealthy models or tools with trace evidence.
- Answer: D
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: It keeps silent fallback to lower quality in control instead of adding a measurable fallback policy decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.

### Q89: An insurance claims group is comparing two release designs for an operational monitoring plan. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-007
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- A. Bundle trace replay, fallback policy, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated trace replay check.
- C. Add a release gate for trace replay: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- D. Prioritize drift monitoring before validating the failure signal around trace replay.
- Answer: C
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the trace replay gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.

### Q90: A global retailer is preparing an operational monitoring plan for release. The current design relies on average latency only, but the release gate needs to watch route mix, retrieval hit rate, judge scores, and escalation rates. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-008
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: easy
- A. Use trace replay as the main gate even though reviewers are asking for drift monitoring evidence.
- B. Change the design around drift monitoring so the system can watch route mix, retrieval hit rate, judge scores, and escalation rates.
- C. Bundle drift monitoring, trace replay, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated drift monitoring check.
- Answer: B
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether drift monitoring fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q91: A hospital operations team is comparing two release designs for an operational monitoring plan. One design centers on manual transcript review only; the other adds a measurable incident response step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-009
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: hard
- A. Make incident response explicit in the workflow: convert incidents into regression tests and rollback rules.
- B. Wait for production incidents before adding a dedicated incident response check.
- C. Use fallback policy as the main gate even though reviewers are asking for incident response evidence.
- D. Keep manual transcript review only as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why B is wrong: Waiting for incidents postpones the incident response gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why D is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.

### Q92: A bank fraud team is preparing an operational monitoring plan for release. The current design relies on average latency only, but the release gate needs to watch tail latency, queueing, retries, and error budgets. Which control should be added before rollout?
- ID: ags-hf-observability-operations-and-cost-010
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: expert
- A. Keep average latency only as the primary release control and record only final outputs.
- B. Prioritize fallback policy before validating the failure signal around p95/p99 latency.
- C. Use p95/p99 latency as the control boundary and require the system to watch tail latency, queueing, retries, and error budgets.
- D. Use incident response as the main gate even though reviewers are asking for p95/p99 latency evidence.
- Answer: C
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why A is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.

### Q93: A semiconductor design group is preparing an operational monitoring plan for release. The current design relies on full rollout before measurement, but the release gate needs to compare quality, safety, cost, and latency during rollout. Which architecture keeps the boundary cleanest?
- ID: ags-hf-observability-operations-and-cost-011
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: medium
- A. Keep full rollout before measurement as the primary release control and record only final outputs.
- B. Prioritize incident response before validating the failure signal around canary monitoring.
- C. Bundle canary monitoring, fallback policy, and prompt changes into one release with one aggregate score.
- D. Add a release gate for canary monitoring: compare quality, safety, cost, and latency during rollout.
- Answer: D
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: It keeps full rollout before measurement in control instead of adding a measurable canary monitoring decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.

### Q94: A hospital operations team is preparing an operational monitoring plan for release. The current design relies on silent fallback to lower quality, but the release gate needs to route around unhealthy models or tools with trace evidence. Which implementation path is most appropriate?
- ID: ags-hf-observability-operations-and-cost-012
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around fallback policy so the system can route around unhealthy models or tools with trace evidence.
- B. Prioritize p95/p99 latency before validating the failure signal around fallback policy.
- C. Bundle fallback policy, incident response, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated fallback policy check.
- Answer: A
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.

### Q95: A logistics planning team is comparing two release designs for an operational monitoring plan. One design centers on HTTP 200 as the only success signal; the other adds a measurable trace replay step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-013
- Domain: Observability, Operations, and Cost
- Topic: trace replay; agentic_ai_general_study
- Difficulty: hard
- A. Use fallback policy as the main gate even though reviewers are asking for trace replay evidence.
- B. Make trace replay explicit in the workflow: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- C. Bundle trace replay, fallback policy, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated trace replay check.
- Answer: B
- Explanation: The scenario is about trace replay. The strongest answer fixes the failing layer directly: capture spans for model, retrieval, tools, guardrails, latency, and cost.
- Why A is wrong: It moves attention to a neighboring control instead of making trace replay testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether trace replay fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the trace replay gate until after users are exposed.

### Q96: A pharmaceutical research team is comparing two release designs for an operational monitoring plan. One design centers on average latency only; the other adds a measurable drift monitoring step. Which design is more appropriate for production?
- ID: ags-hf-observability-operations-and-cost-014
- Domain: Observability, Operations, and Cost
- Topic: drift monitoring; agentic_ai_general_study
- Difficulty: expert
- A. Use incident response as the main gate even though reviewers are asking for drift monitoring evidence.
- B. Keep average latency only as the primary release control and record only final outputs.
- C. Use drift monitoring as the control boundary and require the system to watch route mix, retrieval hit rate, judge scores, and escalation rates.
- D. Wait for production incidents before adding a dedicated drift monitoring check.
- Answer: C
- Explanation: The scenario is about drift monitoring. The strongest answer fixes the failing layer directly: watch route mix, retrieval hit rate, judge scores, and escalation rates.
- Why A is wrong: It moves attention to a neighboring control instead of making drift monitoring testable in the scenario.
- Why B is wrong: It keeps average latency only in control instead of adding a measurable drift monitoring decision point.
- Why D is wrong: Waiting for incidents postpones the drift monitoring gate until after users are exposed.

### Q97: A cybersecurity response team has a production-readiness review for an operational monitoring plan. The review is focused on incident response, because the system must convert incidents into regression tests and rollback rules. Which action best fits the requirement?
- ID: ags-hf-observability-operations-and-cost-015
- Domain: Observability, Operations, and Cost
- Topic: incident response; agentic_ai_general_study
- Difficulty: medium
- A. Use drift monitoring as the main gate even though reviewers are asking for incident response evidence.
- B. Keep manual transcript review only as the primary release control and record only final outputs.
- C. Prioritize p95/p99 latency before validating the failure signal around incident response.
- D. Add a release gate for incident response: convert incidents into regression tests and rollback rules.
- Answer: D
- Explanation: The scenario is about incident response. The strongest answer fixes the failing layer directly: convert incidents into regression tests and rollback rules.
- Why A is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.
- Why B is wrong: It keeps manual transcript review only in control instead of adding a measurable incident response decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making incident response testable in the scenario.

### Q98: A manufacturing quality team is preparing an operational monitoring plan for release. The current design relies on average latency only, but the release gate needs to watch tail latency, queueing, retries, and error budgets. Which choice addresses the root cause?
- ID: ags-hf-observability-operations-and-cost-016
- Domain: Observability, Operations, and Cost
- Topic: p95/p99 latency; agentic_ai_general_study
- Difficulty: hard
- A. Change the design around p95/p99 latency so the system can watch tail latency, queueing, retries, and error budgets.
- B. Keep average latency only as the primary release control and record only final outputs.
- C. Prioritize fallback policy before validating the failure signal around p95/p99 latency.
- D. Bundle p95/p99 latency, trace replay, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about p95/p99 latency. The strongest answer fixes the failing layer directly: watch tail latency, queueing, retries, and error budgets.
- Why B is wrong: It keeps average latency only in control instead of adding a measurable p95/p99 latency decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making p95/p99 latency testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether p95/p99 latency fixed or caused the failure.

### Q99: A logistics planning team is reviewing an operational monitoring plan before rollout. The main risk is canary monitoring: the system must compare quality, safety, cost, and latency during rollout. Which option keeps the decision at the right layer?
- ID: ags-hf-observability-operations-and-cost-017
- Domain: Observability, Operations, and Cost
- Topic: canary monitoring; agentic_ai_general_study
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated canary monitoring check.
- B. Make canary monitoring explicit in the workflow: compare quality, safety, cost, and latency during rollout.
- C. Prioritize incident response before validating the failure signal around canary monitoring.
- D. Bundle canary monitoring, p95/p99 latency, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about canary monitoring. The strongest answer fixes the failing layer directly: compare quality, safety, cost, and latency during rollout.
- Why A is wrong: Waiting for incidents postpones the canary monitoring gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making canary monitoring testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether canary monitoring fixed or caused the failure.

### Q100: An automotive support team sees a production failure tied to fallback policy. The team has been using silent fallback to lower quality; the next change needs to make fallback policy explicit. Which action best addresses the problem?
- ID: ags-hf-observability-operations-and-cost-018
- Domain: Observability, Operations, and Cost
- Topic: fallback policy; agentic_ai_general_study
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated fallback policy check.
- B. Use p95/p99 latency as the main gate even though reviewers are asking for fallback policy evidence.
- C. Use fallback policy as the control boundary and require the system to route around unhealthy models or tools with trace evidence.
- D. Bundle fallback policy, p95/p99 latency, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about fallback policy. The strongest answer fixes the failing layer directly: route around unhealthy models or tools with trace evidence.
- Why A is wrong: Waiting for incidents postpones the fallback policy gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making fallback policy testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether fallback policy fixed or caused the failure.

# High Fidelity Generated Questions 009

## Questions

### Q1: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nim-operator-006
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: expert
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q2: A global retailer is reviewing the production design. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-007
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: medium
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q3: An insurance claims group is preparing a production rollout. Managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-008
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: A
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q4: A semiconductor design group is preparing a release decision. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nim-operator-009
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: B
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q5: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nim-operator-010
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: medium
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q6: A pharmaceutical research team is preparing a production rollout. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-011
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.

### Q7: A global retailer is reviewing the production design. Managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-012
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: B
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q8: A manufacturing quality team has narrowed the next implementation step. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nim-operator-013
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: expert
- A. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q9: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nim-operator-014
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: medium
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q10: A pharmaceutical research team is preparing a production rollout. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-015
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.

### Q11: A global retailer is reviewing the production design. Managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-016
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: expert
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q12: A manufacturing quality team has narrowed the next implementation step. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nim-operator-017
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: medium
- A. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q13: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nim-operator-018
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.

### Q14: An automotive support team is preparing a production rollout. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-019
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q15: A logistics planning team is reviewing the production design. Managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-020
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: easy
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q16: A telecom network operations team is reviewing the production design. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-021
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q17: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-022
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: expert
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: A
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q18: A pharmaceutical research team is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-001
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q19: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-002
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why B is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q20: A public-sector casework team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-003
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q21: A cybersecurity response team is preparing a release decision. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-004
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q22: An insurance claims group is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-005
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q23: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-006
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why B is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q24: A hospital operations team has narrowed the next implementation step. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-007
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q25: A cybersecurity response team is preparing a release decision. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-008
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: easy
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q26: An automotive support team is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-009
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q27: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-010
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q28: A logistics planning team is reviewing the production design. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-011
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q29: An insurance claims group is preparing a production rollout. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-012
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q30: A cybersecurity response team is preparing a release decision. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-013
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q31: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-014
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q32: A logistics planning team is reviewing the production design. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-015
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q33: An automotive support team is preparing a production rollout. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-016
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q34: A bank fraud team is preparing a release decision. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-017
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q35: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-018
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q36: A logistics planning team is reviewing the production design. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-019
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q37: An automotive support team is preparing a production rollout. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-020
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q38: A pharmaceutical research team is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-021
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q39: A global retailer is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-022
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q40: A public-sector casework team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-023
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q41: A bank fraud team is preparing a release decision. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-024
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q42: An automotive support team is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-025
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q43: A global retailer is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-026
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q44: A manufacturing quality team has narrowed the next implementation step. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-dynamo-triton-dynamo-027
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q45: A bank fraud team is preparing a release decision. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-dynamo-triton-dynamo-028
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: easy
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q46: An automotive support team is preparing a production rollout. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component should the team use?
- ID: genl-hf-svc-dynamo-triton-dynamo-029
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q47: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-dynamo-triton-dynamo-030
- Domain: Model Deployment
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

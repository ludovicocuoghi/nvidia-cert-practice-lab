# High Fidelity Generated Questions 007

## Questions

### Q1: A logistics planning team is reviewing the production design. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-ngc-020
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q2: A logistics planning team is reviewing the production design. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-ngc-021
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q3: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should the team use?
- ID: genl-hf-svc-ngc-022
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q4: A cybersecurity response team is preparing a release decision. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-ngc-023
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q5: A public-sector casework team has narrowed the next implementation step. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-ngc-024
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q6: A telecom network operations team is reviewing the production design. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-ngc-025
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q7: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should the team use?
- ID: genl-hf-svc-ngc-026
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q8: A bank fraud team is preparing a release decision. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-ngc-027
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why C is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q9: A manufacturing quality team has narrowed the next implementation step. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-ngc-028
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: easy
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q10: A logistics planning team is reviewing the production design. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-ngc-029
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q11: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should the team use?
- ID: genl-hf-svc-ngc-030
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q12: An insurance claims group is preparing a production rollout. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-001
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q13: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-002
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q14: A public-sector casework team has narrowed the next implementation step. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-systems-003
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q15: A semiconductor design group is preparing a release decision. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-systems-004
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q16: An insurance claims group is preparing a production rollout. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-005
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q17: A global retailer is reviewing the production design. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-006
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q18: A public-sector casework team has narrowed the next implementation step. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-systems-007
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.

### Q19: A semiconductor design group is preparing a release decision. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-systems-008
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q20: An insurance claims group is preparing a production rollout. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-009
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q21: A global retailer is reviewing the production design. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-010
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q22: A logistics planning team is reviewing the production design. Diagnosing CPU/GPU timelines, kernel bottlenecks, trace gaps, and live system health is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-011
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.

### Q23: An automotive support team is preparing a production rollout. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-012
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q24: A semiconductor design group is preparing a release decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-systems-013
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q25: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-systems-014
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q26: A telecom network operations team is reviewing the production design. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-015
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.

### Q27: An insurance claims group is preparing a production rollout. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-016
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q28: A bank fraud team is preparing a release decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-systems-017
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q29: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-systems-018
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q30: A global retailer is reviewing the production design. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-systems-019
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: easy
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q31: An insurance claims group is preparing a production rollout. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-020
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q32: An automotive support team is preparing a production rollout. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-systems-021
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q33: A logistics planning team is reviewing the production design. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-001
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: easy
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q34: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-compute-002
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q35: A semiconductor design group is preparing a release decision. Diagnosing CPU/GPU timelines, kernel bottlenecks, trace gaps, and live system health is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-003
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q36: A hospital operations team has narrowed the next implementation step. Diagnosing why a known kernel is memory-bound, compute-bound, or inefficient is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-004
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- A. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q37: A telecom network operations team is reviewing the production design. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-005
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q38: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-compute-006
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q39: A cybersecurity response team is preparing a release decision. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-007
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q40: A public-sector casework team has narrowed the next implementation step. Diagnosing why a known kernel is memory-bound, compute-bound, or inefficient is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-008
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- A. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q41: A telecom network operations team is reviewing the production design. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-009
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q42: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-compute-010
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q43: A manufacturing quality team has narrowed the next implementation step. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-011
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q44: A semiconductor design group is preparing a release decision. Diagnosing why a known kernel is memory-bound, compute-bound, or inefficient is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-012
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q45: A pharmaceutical research team is preparing a production rollout. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-compute-013
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q46: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-014
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q47: A hospital operations team has narrowed the next implementation step. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-015
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q48: A semiconductor design group is preparing a release decision. Diagnosing why a known kernel is memory-bound, compute-bound, or inefficient is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-016
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.

### Q49: An automotive support team is preparing a production rollout. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nsight-compute-017
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.

### Q50: A global retailer is reviewing the production design. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-018
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q51: A manufacturing quality team has narrowed the next implementation step. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-019
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q52: A bank fraud team is preparing a release decision. Diagnosing why a known kernel is memory-bound, compute-bound, or inefficient is the work to finish before release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-020
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q53: A bank fraud team is preparing a release decision. A fused attention kernel has low achieved occupancy and high memory stalls. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nsight-compute-021
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: easy
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q54: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nsight-compute-022
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q55: A logistics planning team is reviewing the production design. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nsight-compute-023
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.

### Q56: A bank fraud team is preparing a release decision. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nccl-001
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q57: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nccl-002
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q58: A global retailer is reviewing the production design. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nccl-003
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q59: A pharmaceutical research team is preparing a production rollout. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nccl-004
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.

### Q60: A semiconductor design group is preparing a release decision. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nccl-005
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q61: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nccl-006
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q62: A global retailer is reviewing the production design. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nccl-007
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q63: An insurance claims group is preparing a production rollout. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nccl-008
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q64: A bank fraud team is preparing a release decision. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nccl-009
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.

### Q65: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nccl-010
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q66: An automotive support team is preparing a production rollout. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nccl-011
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why B is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q67: A logistics planning team is reviewing the production design. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nccl-012
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q68: A manufacturing quality team has narrowed the next implementation step. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nccl-013
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q69: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nccl-014
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q70: A pharmaceutical research team is preparing a production rollout. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nccl-015
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q71: A global retailer is reviewing the production design. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nccl-016
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q72: A public-sector casework team has narrowed the next implementation step. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nccl-017
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q73: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nccl-018
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: easy
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q74: An insurance claims group is preparing a production rollout. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nccl-019
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q75: A global retailer is reviewing the production design. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nccl-020
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q76: A manufacturing quality team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-001
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q77: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-002
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q78: A pharmaceutical research team is preparing a production rollout. Running scalable quality filtering and PII cleanup before data becomes a learning artifact is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-003
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q79: A global retailer is reviewing the production design. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-004
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q80: A hospital operations team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-005
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q81: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-006
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q82: An insurance claims group is preparing a production rollout. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-007
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q83: A global retailer is reviewing the production design. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-008
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: easy
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q84: A manufacturing quality team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-009
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.

### Q85: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-010
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q86: A semiconductor design group is preparing a release decision. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-011
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q87: A hospital operations team has narrowed the next implementation step. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-012
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.

### Q88: A telecom network operations team is reviewing the production design. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-013
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q89: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-014
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q90: A semiconductor design group is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-015
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q91: A hospital operations team has narrowed the next implementation step. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-016
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.

### Q92: A logistics planning team is reviewing the production design. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-017
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q93: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-018
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q94: A cybersecurity response team is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-019
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q95: A hospital operations team has narrowed the next implementation step. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-020
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.

### Q96: A manufacturing quality team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-021
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q97: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-022
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q98: An automotive support team is preparing a production rollout. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-023
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.

### Q99: A logistics planning team is reviewing the production design. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-024
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.

### Q100: A public-sector casework team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-025
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

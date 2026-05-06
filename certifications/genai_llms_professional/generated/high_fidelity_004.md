# High Fidelity Generated Questions 004

## Questions

### Q1: A cybersecurity response team is setting a release gate. The implementation requirement is to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. What is the best first implementation choice?
- ID: genl-hf-svc-triton-inference-server-001
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q2: A hospital operations team is fixing the layer called out by the trace and design review. The rollout is blocked until the team can run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-triton-inference-server-002
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: D
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.

### Q3: A global retailer needs to choose the right implementation surface. The trace points to the need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. What is the best first implementation choice?
- ID: genl-hf-svc-triton-inference-server-003
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q4: A pharmaceutical research team is preparing a production rollout. The work to finish before release is running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-triton-inference-server-004
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.

### Q5: A bank fraud team is reviewing the implementation plan. The trace points to the need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-triton-inference-server-005
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: A
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q6: A manufacturing quality team is fixing the layer called out by the trace and design review. The rollout is blocked until the team can run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-triton-inference-server-006
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: D
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q7: A logistics planning team is reviewing the implementation plan. The implementation requirement is to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. What is the best first implementation choice?
- ID: genl-hf-svc-triton-inference-server-007
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: C
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q8: An insurance claims group has narrowed the next engineering decision. The work to finish before release is running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-triton-inference-server-008
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.

### Q9: A cybersecurity response team is reviewing the implementation plan. The trace points to the need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-triton-inference-server-009
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q10: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-triton-inference-server-010
- Domain: Model Deployment
- Topic: NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: Triton Inference Server is the best fit because it sits in Serving and deployment: Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Triton Inference Server: to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q11: An automotive support team is preparing a production rollout. A 70B chat model needs high concurrency with variable-length prompts and low TTFT. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-tensorrt-llm-001
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: D
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Inference optimization.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Inference optimization.

### Q12: A telecom network operations team is reviewing the implementation plan. The trace points to the need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-tensorrt-llm-002
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Inference optimization.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Inference optimization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Inference optimization.

### Q13: A public-sector casework team is preparing a production rollout. The next release blocker is reducing serving latency without changing training data. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-tensorrt-llm-003
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: B
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Inference optimization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Inference optimization.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Inference optimization.

### Q14: A cybersecurity response team is setting a release gate. The blocker is building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-tensorrt-llm-004
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Inference optimization.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Inference optimization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Inference optimization.

### Q15: An insurance claims group has narrowed the next engineering decision. A 70B chat model needs high concurrency with variable-length prompts and low TTFT. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-tensorrt-llm-005
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: D
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Inference optimization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Inference optimization.

### Q16: A logistics planning team is reviewing the implementation plan. The blocker is building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT. What is the best first implementation choice?
- ID: genl-hf-svc-tensorrt-llm-006
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: A
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Inference optimization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Inference optimization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Inference optimization.

### Q17: A hospital operations team is preparing a production rollout. The next release blocker is optimizing LLM engines, batching, KV cache, quantization, and TTFT. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-tensorrt-llm-007
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: B
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Inference optimization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Inference optimization.

### Q18: A semiconductor design group is reviewing the implementation plan. The implementation requirement is to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-tensorrt-llm-008
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Inference optimization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Inference optimization.

### Q19: A pharmaceutical research team is preparing a production rollout. A 70B chat model needs high concurrency with variable-length prompts and low TTFT. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-tensorrt-llm-009
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: D
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Inference optimization.

### Q20: A global retailer is setting a release gate. The trace points to the need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-tensorrt-llm-010
- Domain: Model Optimization
- Topic: NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: B
- Explanation: TensorRT-LLM is the best fit because it sits in Inference optimization: Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Inference optimization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Inference optimization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Inference optimization.

### Q21: A cybersecurity response team needs to choose the right implementation surface. The blocker is pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-ngc-001
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q22: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-ngc-002
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q23: A telecom network operations team needs to choose the right implementation surface. The trace points to the need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-ngc-003
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use Dynamo (Triton Dynamo) when you need to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q24: A pharmaceutical research team is preparing a production rollout. The work to finish before release is pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-ngc-004
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q25: A semiconductor design group is reviewing the implementation plan. The trace points to the need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-ngc-005
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q26: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-ngc-006
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q27: A logistics planning team is setting a release gate. The blocker is pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-ngc-007
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q28: An automotive support team is fixing the layer called out by the trace and design review. The work to finish before release is pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-ngc-008
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q29: A cybersecurity response team needs to choose the right implementation surface. The trace points to the need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. What is the best first implementation choice?
- ID: genl-hf-svc-ngc-009
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q30: A manufacturing quality team is preparing a production rollout. The rollout is blocked until the team can pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-ngc-010
- Domain: Model Deployment
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q31: An insurance claims group has narrowed the next engineering decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nsight-systems-001
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q32: A telecom network operations team needs to choose the right implementation surface. The blocker is identifying where time is going across CPU, GPU, launches, waits, and communication. What is the best first implementation choice?
- ID: genl-hf-svc-nsight-systems-002
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q33: A public-sector casework team has narrowed the next engineering decision. The next release blocker is turning traces and profiler evidence into targeted optimization work. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nsight-systems-003
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Guardrails is the best fit for this layer: programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q34: A semiconductor design group is reviewing the implementation plan. The blocker is identifying where time is going across CPU, GPU, launches, waits, and communication. What is the best first implementation choice?
- ID: genl-hf-svc-nsight-systems-004
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q35: An insurance claims group has narrowed the next engineering decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nsight-systems-005
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q36: A global retailer needs to choose the right implementation surface. The blocker is identifying where time is going across CPU, GPU, launches, waits, and communication. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nsight-systems-006
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q37: A public-sector casework team is preparing a production rollout. The next release blocker is turning traces and profiler evidence into targeted optimization work. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nsight-systems-007
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.

### Q38: A semiconductor design group is reviewing the implementation plan. The implementation requirement is to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nsight-systems-008
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q39: An insurance claims group is preparing a production rollout. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nsight-systems-009
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q40: A global retailer is setting a release gate. The trace points to the need to identify where time is going across CPU, GPU, launches, waits, and communication. What is the best first implementation choice?
- ID: genl-hf-svc-nsight-systems-010
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q41: A logistics planning team needs to choose the right implementation surface. The implementation requirement is to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. What is the best first implementation choice?
- ID: genl-hf-svc-nsight-compute-001
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q42: An insurance claims group is preparing a production rollout. The rollout is blocked until the team can diagnose why a known kernel is memory-bound, compute-bound, or inefficient. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nsight-compute-002
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q43: A semiconductor design group needs to choose the right implementation surface. The trace points to the need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nsight-compute-003
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q44: A hospital operations team is fixing the layer called out by the trace and design review. The work to finish before release is diagnosing why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nsight-compute-004
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Nsight Compute is the best fit for this layer: a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q45: A telecom network operations team needs to choose the right implementation surface. The trace points to the need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nsight-compute-005
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q46: An insurance claims group is preparing a production rollout. The rollout is blocked until the team can diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nsight-compute-006
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q47: A cybersecurity response team is reviewing the implementation plan. The implementation requirement is to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nsight-compute-007
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q48: A public-sector casework team is fixing the layer called out by the trace and design review. The work to finish before release is diagnosing why a known kernel is memory-bound, compute-bound, or inefficient. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nsight-compute-008
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Nsight Compute is the best fit for this layer: a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.

### Q49: A telecom network operations team is reviewing the implementation plan. The implementation requirement is to diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nsight-compute-009
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use TensorRT-LLM when you need to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Nsight Compute: to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q50: An insurance claims group is preparing a production rollout. The rollout is blocked until the team can diagnose why a known kernel is memory-bound, compute-bound, or inefficient. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nsight-compute-010
- Domain: Production Monitoring and Reliability
- Topic: NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: D
- Explanation: Nsight Compute is the best fit because it sits in Monitoring and profiling: CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q51: A bank fraud team is reviewing the implementation plan. The trace points to the need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nccl-001
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NeMo Evaluator when you need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q52: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nccl-002
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q53: A global retailer needs to choose the right implementation surface. The implementation requirement is to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nccl-003
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q54: A pharmaceutical research team is fixing the layer called out by the trace and design review. The work to finish before release is handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nccl-004
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.

### Q55: A semiconductor design group needs to choose the right implementation surface. The trace points to the need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. What is the best first implementation choice?
- ID: genl-hf-svc-nccl-005
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NeMo Agent Toolkit when you need to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q56: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nccl-006
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q57: A global retailer is setting a release gate. The trace points to the need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nccl-007
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q58: An insurance claims group is preparing a production rollout. The work to finish before release is handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nccl-008
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use Nsight Compute when you need to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q59: A bank fraud team is reviewing the implementation plan. The trace points to the need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nccl-009
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.

### Q60: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nccl-010
- Domain: Fine-Tuning
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q61: A manufacturing quality team is fixing the layer called out by the trace and design review. A data science team needs to clean and join large tabular datasets before training or indexing. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-rapids-001
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q62: A cybersecurity response team needs to choose the right implementation surface. The blocker is accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-rapids-002
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q63: A pharmaceutical research team is fixing the layer called out by the trace and design review. The next release blocker is running scalable quality filtering and PII cleanup before data becomes a learning artifact. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-rapids-003
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q64: A global retailer is reviewing the implementation plan. The blocker is accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-rapids-004
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q65: A hospital operations team is fixing the layer called out by the trace and design review. A data science team needs to clean and join large tabular datasets before training or indexing. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-rapids-005
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Framework when you need to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q66: A cybersecurity response team is reviewing the implementation plan. The implementation requirement is to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-rapids-006
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q67: An insurance claims group has narrowed the next engineering decision. The next release blocker is accelerating dataframe-style preprocessing and corpus cleanup on GPUs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-rapids-007
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q68: A global retailer is reviewing the implementation plan. The trace points to the need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-rapids-008
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q69: A manufacturing quality team is preparing a production rollout. A data science team needs to clean and join large tabular datasets before training or indexing. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-rapids-009
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Dynamo (Triton Dynamo) is the best fit for this layer: a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.

### Q70: A bank fraud team needs to choose the right implementation surface. The trace points to the need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-rapids-010
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NGC is the best fit for this layer: a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q71: A public-sector casework team has narrowed the next engineering decision. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-curator-001
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q72: A semiconductor design group is setting a release gate. The implementation requirement is to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-curator-002
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.

### Q73: A pharmaceutical research team has narrowed the next engineering decision. The next release blocker is deduplicating, filter, and prepare large data sets before training or indexing. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-curator-003
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. NeMo Agent Toolkit is the best fit for this layer: a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use RAPIDS when you need to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q74: A logistics planning team is setting a release gate. The implementation requirement is to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-curator-004
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q75: A manufacturing quality team has narrowed the next engineering decision. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-curator-005
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Nemotron models is the best fit for this layer: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q76: A semiconductor design group needs to choose the right implementation surface. The trace points to the need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-curator-006
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q77: An automotive support team is preparing a production rollout. The next release blocker is accelerating dataframe-style preprocessing and corpus cleanup on GPUs. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-curator-007
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q78: A logistics planning team needs to choose the right implementation surface. The blocker is preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-curator-008
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q79: A public-sector casework team is fixing the layer called out by the trace and design review. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-curator-009
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use Triton Inference Server when you need to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q80: A cybersecurity response team is setting a release gate. The blocker is preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-curator-010
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q81: A cybersecurity response team needs to choose the right implementation surface. The trace points to the need to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-customizer-001
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q82: A manufacturing quality team is preparing a production rollout. The rollout is blocked until the team can run API-driven LoRA/PEFT customization without standing up a full training stack. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-customizer-002
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. NIM Operator is the best fit for this layer: a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q83: A logistics planning team is setting a release gate. The implementation requirement is to run API-driven LoRA/PEFT customization without standing up a full training stack. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA service fits this requirement?
- ID: genl-hf-svc-nemo-customizer-003
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Evaluator when you need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q84: An insurance claims group is preparing a production rollout. The work to finish before release is running API-driven LoRA/PEFT customization without standing up a full training stack. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-customizer-004
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Nsight Systems when you need to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q85: A semiconductor design group is setting a release gate. The trace points to the need to run API-driven LoRA/PEFT customization without standing up a full training stack. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-customizer-005
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Curator when you need to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q86: A hospital operations team is preparing a production rollout. The rollout is blocked until the team can run API-driven LoRA/PEFT customization without standing up a full training stack. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-customizer-006
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NIM is the best fit for this layer: inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q87: A global retailer needs to choose the right implementation surface. The blocker is running API-driven LoRA/PEFT customization without standing up a full training stack. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-customizer-007
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. NeMo Framework is the best fit for this layer: a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use Nemotron models when you need to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.

### Q88: An insurance claims group is fixing the layer called out by the trace and design review. The work to finish before release is running API-driven LoRA/PEFT customization without standing up a full training stack. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: genl-hf-svc-nemo-customizer-008
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. NeMo Customizer is the best fit for this layer: a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NIM Operator when you need to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q89: A cybersecurity response team is reviewing the implementation plan. The blocker is running API-driven LoRA/PEFT customization without standing up a full training stack. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-customizer-009
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NGC when you need to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q90: A hospital operations team is fixing the layer called out by the trace and design review. The rollout is blocked until the team can run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-customizer-010
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Nsight Systems is the best fit for this layer: a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q91: A cybersecurity response team needs to choose the right implementation surface. The implementation requirement is to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-evaluator-001
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Retriever when you need to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.

### Q92: A hospital operations team has narrowed the next engineering decision. The rollout is blocked until the team can run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nemo-evaluator-002
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Evaluator when you need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NCCL is the best fit for this layer: a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.

### Q93: A logistics planning team is reviewing the implementation plan. The implementation requirement is to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-evaluator-003
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. TensorRT-LLM is the best fit for this layer: an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q94: A pharmaceutical research team is preparing a production rollout. The work to finish before release is running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA product owns this requirement?
- ID: genl-hf-svc-nemo-evaluator-004
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Use NIM when you need to for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.

### Q95: A cybersecurity response team needs to choose the right implementation surface. The implementation requirement is to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA option addresses the named layer?
- ID: genl-hf-svc-nemo-evaluator-005
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Curator is the best fit for this layer: a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.

### Q96: A public-sector casework team has narrowed the next engineering decision. The rollout is blocked until the team can run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nemo-evaluator-006
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Evaluator when you need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q97: A logistics planning team is reviewing the implementation plan. The implementation requirement is to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team must avoid solving this with the wrong lifecycle layer. Which NVIDIA platform layer is the right match?
- ID: genl-hf-svc-nemo-evaluator-007
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Customizer when you need to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. RAPIDS is the best fit for this layer: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q98: An automotive support team has narrowed the next engineering decision. The work to finish before release is running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA tool should the team start with?
- ID: genl-hf-svc-nemo-evaluator-008
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: easy
- Scope: nvidia_specific
- Source: generated
- A. Use NeMo Guardrails when you need to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NeMo Evaluator is the best fit for this layer: a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Evaluation.

### Q99: A bank fraud team is reviewing the implementation plan. The trace points to the need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. What is the best first implementation choice?
- ID: genl-hf-svc-nemo-evaluator-009
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- Scope: nvidia_specific
- Source: generated
- A. Use NCCL when you need to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select RAPIDS; it owns data preparation work such as accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Triton Inference Server is the best fit for this layer: a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q100: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. The team wants the choice that acts at this layer, not a neighboring one. Which NVIDIA service should be selected first?
- ID: genl-hf-svc-nemo-evaluator-010
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- Scope: nvidia_specific
- Source: generated
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Evaluator when you need to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Retriever is the best fit for this layer: the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

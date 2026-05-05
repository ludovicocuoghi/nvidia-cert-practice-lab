# High Fidelity Generated Questions 007

## Questions

### Q1: A bank fraud team is preparing a release decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nsight-systems-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q2: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nsight-systems-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q3: A global retailer is reviewing the production design. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nsight-systems-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q4: A pharmaceutical research team is preparing a production rollout. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nsight-systems-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q5: A semiconductor design group is preparing a release decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nsight-systems-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q6: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nsight-systems-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q7: An insurance claims group is preparing a production rollout. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nsight-systems-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.

### Q8: A global retailer is reviewing the production design. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nsight-systems-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.

### Q9: A manufacturing quality team has narrowed the next implementation step. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nsight-systems-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.

### Q10: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nsight-systems-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q11: An insurance claims group is preparing a production rollout. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nsight-systems-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Monitoring and profiling.

### Q12: A logistics planning team is reviewing the production design. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nsight-systems-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q13: A hospital operations team has narrowed the next implementation step. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nsight-systems-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q14: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nsight-systems-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: easy
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Monitoring and profiling.

### Q15: An automotive support team is preparing a production rollout. Turning traces and profiler evidence into targeted optimization work is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nsight-systems-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q16: A global retailer is reviewing the production design. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nsight-systems-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q17: An insurance claims group is preparing a production rollout. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q18: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: easy
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q19: A hospital operations team has narrowed the next implementation step. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nccl-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q20: A cybersecurity response team is preparing a release decision. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nccl-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.

### Q21: An insurance claims group is preparing a production rollout. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q22: A global retailer is reviewing the production design. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q23: A hospital operations team has narrowed the next implementation step. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nccl-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q24: A semiconductor design group is preparing a release decision. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nccl-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q25: An insurance claims group is preparing a production rollout. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.

### Q26: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.

### Q27: A logistics planning team is reviewing the production design. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why C is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q28: An insurance claims group is preparing a production rollout. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q29: A bank fraud team is preparing a release decision. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nccl-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q30: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nccl-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q31: A logistics planning team is reviewing the production design. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q32: An automotive support team is preparing a production rollout. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q33: A semiconductor design group is preparing a release decision. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nccl-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NCCL: to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q34: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nccl-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q35: A telecom network operations team is reviewing the production design. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: medium
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q36: A pharmaceutical research team is preparing a production rollout. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q37: An insurance claims group is preparing a production rollout. A 64-node training job hangs intermittently during gradient all-reduce. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nccl-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q38: A global retailer is reviewing the production design. The rollout is blocked because the team needs to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nccl-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: easy
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: C
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q39: A hospital operations team has narrowed the next implementation step. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nccl-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: D
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q40: A bank fraud team is preparing a release decision. Handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nccl-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication?
- Difficulty: expert
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NCCL is the best fit because it sits in Training and customization: Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q41: A global retailer is reviewing the production design. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q42: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.

### Q43: A cybersecurity response team is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q44: A manufacturing quality team has narrowed the next implementation step. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q45: A global retailer is reviewing the production design. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q46: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.

### Q47: A semiconductor design group is preparing a release decision. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q48: A hospital operations team has narrowed the next implementation step. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: easy
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q49: A telecom network operations team is reviewing the production design. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.

### Q50: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q51: A public-sector casework team has narrowed the next implementation step. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q52: A semiconductor design group is preparing a release decision. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q53: An insurance claims group is preparing a production rollout. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q54: A global retailer is reviewing the production design. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q55: A public-sector casework team has narrowed the next implementation step. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q56: A semiconductor design group is preparing a release decision. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Curator is a neighboring data preparation component, but this signal asks specifically for RAPIDS: to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q57: An insurance claims group is preparing a production rollout. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q58: A global retailer is reviewing the production design. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q59: A public-sector casework team has narrowed the next implementation step. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q60: A bank fraud team is preparing a release decision. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q61: A semiconductor design group is preparing a release decision. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q62: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q63: A global retailer is reviewing the production design. Running scalable quality filtering and PII cleanup before data becomes a learning artifact is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q64: An automotive support team is preparing a production rollout. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q65: A bank fraud team is preparing a release decision. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: medium
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q66: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q67: A telecom network operations team is reviewing the production design. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-rapids-027
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q68: An automotive support team is preparing a production rollout. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-rapids-028
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: easy
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.

### Q69: A bank fraud team is preparing a release decision. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component should own this step?
- ID: aai-hf-svc-rapids-029
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.

### Q70: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-rapids-030
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.

### Q71: A logistics planning team is reviewing the production design. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q72: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.

### Q73: A cybersecurity response team is preparing a release decision. Running scalable quality filtering and PII cleanup before data becomes a learning artifact is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q74: A public-sector casework team has narrowed the next implementation step. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: easy
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q75: A logistics planning team is reviewing the production design. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q76: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q77: A cybersecurity response team is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q78: A manufacturing quality team has narrowed the next implementation step. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q79: A global retailer is reviewing the production design. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q80: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q81: A public-sector casework team has narrowed the next implementation step. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q82: A bank fraud team is preparing a release decision. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q83: An automotive support team is preparing a production rollout. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q84: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q85: A hospital operations team has narrowed the next implementation step. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q86: A semiconductor design group is preparing a release decision. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q87: A pharmaceutical research team is preparing a production rollout. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q88: A global retailer is reviewing the production design. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q89: A hospital operations team has narrowed the next implementation step. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q90: A bank fraud team is preparing a release decision. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.

### Q91: A cybersecurity response team is preparing a release decision. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q92: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q93: A telecom network operations team is reviewing the production design. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-curator-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q94: An insurance claims group is preparing a production rollout. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-curator-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: easy
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q95: A bank fraud team is preparing a release decision. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-curator-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q96: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-curator-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q97: A manufacturing quality team has narrowed the next implementation step. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-customizer-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q98: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-customizer-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q99: An insurance claims group is preparing a production rollout. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-customizer-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q100: A logistics planning team is reviewing the production design. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-customizer-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

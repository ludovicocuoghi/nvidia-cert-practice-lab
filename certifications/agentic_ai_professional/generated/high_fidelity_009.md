# High Fidelity Generated Questions 009

## Questions

### Q1: An automotive support team is preparing a production rollout. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-dynamo-triton-dynamo-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q2: A logistics planning team is reviewing the production design. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-dynamo-triton-dynamo-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q3: A public-sector casework team has narrowed the next implementation step. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-dynamo-triton-dynamo-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q4: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component should own this step?
- ID: aai-hf-svc-dynamo-triton-dynamo-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q5: An automotive support team is preparing a production rollout. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-dynamo-triton-dynamo-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q6: A global retailer is reviewing the production design. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-dynamo-triton-dynamo-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q7: A telecom network operations team is reviewing the production design. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-dynamo-triton-dynamo-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q8: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component should the team use?
- ID: aai-hf-svc-dynamo-triton-dynamo-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q9: A semiconductor design group is preparing a release decision. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-dynamo-triton-dynamo-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q10: A public-sector casework team has narrowed the next implementation step. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-dynamo-triton-dynamo-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q11: A telecom network operations team is reviewing the production design. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-dynamo-triton-dynamo-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: medium
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q12: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component should the team use?
- ID: aai-hf-svc-dynamo-triton-dynamo-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q13: A semiconductor design group is preparing a release decision. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-dynamo-triton-dynamo-027
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q14: A manufacturing quality team has narrowed the next implementation step. Supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-dynamo-triton-dynamo-028
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: easy
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: A
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

### Q15: A logistics planning team is reviewing the production design. The project team must serve a 405B model with disaggregated prefill/decode across many H100 nodes. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-dynamo-triton-dynamo-029
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: B
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q16: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale. Which NVIDIA component should the team use?
- ID: aai-hf-svc-dynamo-triton-dynamo-030
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference?
- Difficulty: expert
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: D
- Explanation: Dynamo (Triton Dynamo) is the best fit because it sits in Serving and deployment: Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Dynamo (Triton Dynamo): to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.

# High Fidelity Generated Questions 006

## Questions

### Q1: A cybersecurity response team is preparing a release decision. Enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.

### Q2: A pharmaceutical research team is preparing a production rollout. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-guardrails-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q3: A global retailer is reviewing the production design. The rollout is blocked because the team needs to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-guardrails-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q4: A hospital operations team has narrowed the next implementation step. Blocking unsafe requests or tool proposals before they become user-visible actions is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-guardrails-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: easy
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.

### Q5: A semiconductor design group is preparing a release decision. Enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Safety and guardrails.

### Q6: A cybersecurity response team is preparing a release decision. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q7: A logistics planning team is reviewing the production design. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-retriever-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q8: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-retriever-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q9: A semiconductor design group is preparing a release decision. Separating retrieval quality from fine-tuning and serving infrastructure is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q10: A hospital operations team has narrowed the next implementation step. Connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-retriever-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q11: A telecom network operations team is reviewing the production design. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-retriever-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q12: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-retriever-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for RAG and retrieval.

### Q13: A cybersecurity response team is preparing a release decision. Grounding answers in current documents without changing model weights is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q14: A public-sector casework team has narrowed the next implementation step. Connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-retriever-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.

### Q15: A logistics planning team is reviewing the production design. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-retriever-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q16: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-retriever-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q17: A hospital operations team has narrowed the next implementation step. Separating retrieval quality from fine-tuning and serving infrastructure is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-retriever-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q18: A bank fraud team is preparing a release decision. Connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q19: An insurance claims group is preparing a production rollout. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-retriever-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.

### Q20: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-retriever-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q21: A public-sector casework team has narrowed the next implementation step. Separating retrieval quality from fine-tuning and serving infrastructure is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-retriever-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q22: A semiconductor design group is preparing a release decision. Connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: medium
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q23: An insurance claims group is preparing a production rollout. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-retriever-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q24: A global retailer is reviewing the production design. The rollout is blocked because the team needs to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-retriever-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q25: A hospital operations team has narrowed the next implementation step. Grounding answers in current documents without changing model weights is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-retriever-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: easy
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q26: A bank fraud team is preparing a release decision. Connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: hard
- A. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: C
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.

### Q27: A bank fraud team is preparing a release decision. A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-retriever-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?
- Difficulty: expert
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: D
- Explanation: NeMo Retriever is the best fit because it sits in RAG and retrieval: NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q28: A public-sector casework team has narrowed the next implementation step. The project team wants an OpenAI-compatible endpoint for a supported LLM on their own GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nim-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: medium
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: B
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q29: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nim-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q30: A pharmaceutical research team is preparing a production rollout. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nim-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: expert
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: D
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.

### Q31: A global retailer is reviewing the production design. For packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nim-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: medium
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: A
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why B is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q32: A manufacturing quality team has narrowed the next implementation step. The project team wants an OpenAI-compatible endpoint for a supported LLM on their own GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nim-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q33: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nim-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.

### Q34: A pharmaceutical research team is preparing a production rollout. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nim-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: easy
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: D
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q35: A telecom network operations team is reviewing the production design. For packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nim-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NIM: for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.

### Q36: A public-sector casework team has narrowed the next implementation step. The project team wants an OpenAI-compatible endpoint for a supported LLM on their own GPUs. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nim-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference?
- Difficulty: expert
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: B
- Explanation: NIM is the best fit because it sits in Serving and deployment: Inference microservices for deploying optimized models with production APIs and model profiles.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q37: A manufacturing quality team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.

### Q38: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.

### Q39: A pharmaceutical research team is preparing a production rollout. Avoid mistaking the model itself for the endpoint that serves it is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.

### Q40: A telecom network operations team is reviewing the production design. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.

### Q41: A public-sector casework team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.

### Q42: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.

### Q43: A pharmaceutical research team is preparing a production rollout. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.

### Q44: A global retailer is reviewing the production design. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: easy
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Model selection.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.

### Q45: A manufacturing quality team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q46: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.

### Q47: A semiconductor design group is preparing a release decision. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.

### Q48: A public-sector casework team has narrowed the next implementation step. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.

### Q49: A global retailer is reviewing the production design. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.

### Q50: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.

### Q51: A cybersecurity response team is preparing a release decision. Choosing the correct model family and separate that choice from serving infrastructure is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Model selection.

### Q52: A manufacturing quality team has narrowed the next implementation step. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Model selection.

### Q53: A telecom network operations team is reviewing the production design. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Model selection.

### Q54: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.

### Q55: A bank fraud team is preparing a release decision. Choosing the correct model family and separate that choice from serving infrastructure is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.

### Q56: A public-sector casework team has narrowed the next implementation step. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.

### Q57: A manufacturing quality team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Model selection.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.

### Q58: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q59: An insurance claims group is preparing a production rollout. Avoid mistaking the model itself for the endpoint that serves it is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.

### Q60: A telecom network operations team is reviewing the production design. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. Choose NCCL; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Model selection.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q61: A hospital operations team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: medium
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.

### Q62: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: B
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Model selection.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.

### Q63: A pharmaceutical research team is preparing a production rollout. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemotron-models-027
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Model selection.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Model selection.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.

### Q64: A logistics planning team is reviewing the production design. Choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemotron-models-028
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: easy
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: D
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Model selection.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Model selection.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Model selection.

### Q65: A public-sector casework team has narrowed the next implementation step. An agent needs a reasoning-capable model and a reward model for preference evaluation. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemotron-models-029
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: hard
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Model selection.

### Q66: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemotron-models-030
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack?
- Difficulty: expert
- A. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: Nemotron models is the best fit because it sits in Model selection: NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.

### Q67: A hospital operations team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q68: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q69: An automotive support team is preparing a production rollout. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q70: A global retailer is reviewing the production design. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q71: A manufacturing quality team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q72: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q73: An automotive support team is preparing a production rollout. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q74: A telecom network operations team is reviewing the production design. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: easy
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q75: A public-sector casework team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q76: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q77: A semiconductor design group is preparing a release decision. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q78: A hospital operations team has narrowed the next implementation step. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q79: A telecom network operations team is reviewing the production design. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q80: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q81: A cybersecurity response team is preparing a release decision. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q82: A public-sector casework team has narrowed the next implementation step. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why C is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q83: A global retailer is reviewing the production design. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q84: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q85: A semiconductor design group is preparing a release decision. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q86: A hospital operations team has narrowed the next implementation step. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q87: A public-sector casework team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q88: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q89: A pharmaceutical research team is preparing a production rollout. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q90: A logistics planning team is reviewing the production design. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q91: A manufacturing quality team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: medium
- A. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q92: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q93: An insurance claims group is preparing a production rollout. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-ngc-027
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.

### Q94: A logistics planning team is reviewing the production design. Pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-ngc-028
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: easy
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: C
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NGC: to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q95: A manufacturing quality team has narrowed the next implementation step. An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-ngc-029
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: hard
- A. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: D
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Serving and deployment.

### Q96: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets. Which NVIDIA component should own this step?
- ID: aai-hf-svc-ngc-030
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets?
- Difficulty: expert
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: B
- Explanation: NGC is the best fit because it sits in Serving and deployment: Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Serving and deployment.

### Q97: A bank fraud team is preparing a release decision. An inference trace has long gaps between CUDA kernels and low GPU occupancy. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nsight-systems-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: medium
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: D
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q98: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to identify where time is going across CPU, GPU, launches, waits, and communication. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nsight-systems-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q99: A global retailer is reviewing the production design. Diagnosing CPU/GPU timelines, kernel bottlenecks, trace gaps, and live system health is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nsight-systems-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: hard
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q100: An insurance claims group is preparing a production rollout. Identifying where time is going across CPU, GPU, launches, waits, and communication is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nsight-systems-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?
- Difficulty: expert
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: C
- Explanation: Nsight Systems is the best fit because it sits in Monitoring and profiling: System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

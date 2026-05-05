# High Fidelity Generated Questions 008

## Questions

### Q1: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-026
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q2: An insurance claims group is preparing a production rollout. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-rapids-027
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q3: A global retailer is reviewing the production design. Accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-rapids-028
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: easy
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q4: A manufacturing quality team has narrowed the next implementation step. A data science team needs to clean and join large tabular datasets before training or indexing. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-rapids-029
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: hard
- A. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: D
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.

### Q5: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs. Which NVIDIA component should own this step?
- ID: genl-hf-svc-rapids-030
- Domain: Data Preparation
- Topic: NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?
- Difficulty: expert
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: B
- Explanation: RAPIDS is the best fit because it sits in Data preparation: GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q6: A public-sector casework team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-001
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q7: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-002
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.

### Q8: A pharmaceutical research team is preparing a production rollout. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-003
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q9: A logistics planning team is reviewing the production design. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-004
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q10: A manufacturing quality team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-005
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q11: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-006
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q12: An automotive support team is preparing a production rollout. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-007
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q13: A logistics planning team is reviewing the production design. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-008
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: easy
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q14: A public-sector casework team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-009
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q15: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-010
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q16: A bank fraud team is preparing a release decision. Accelerate dataframe-style preprocessing and corpus cleanup on GPUs is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-011
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q17: A manufacturing quality team has narrowed the next implementation step. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-012
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why D is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q18: A telecom network operations team is reviewing the production design. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-013
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q19: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-014
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q20: A semiconductor design group is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-015
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q21: A manufacturing quality team has narrowed the next implementation step. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-016
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q22: A logistics planning team is reviewing the production design. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-017
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q23: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-018
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.

### Q24: A cybersecurity response team is preparing a release decision. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-019
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.

### Q25: A manufacturing quality team has narrowed the next implementation step. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-020
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Data preparation.

### Q26: A manufacturing quality team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-021
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Data preparation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q27: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-022
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.

### Q28: A pharmaceutical research team is preparing a production rollout. Running scalable quality filtering and PII cleanup before data becomes a learning artifact is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-023
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Data preparation.

### Q29: A telecom network operations team is reviewing the production design. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-024
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q30: A hospital operations team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-025
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: medium
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.

### Q31: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-026
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Answer: D
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Data preparation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Data preparation.

### Q32: An insurance claims group is preparing a production rollout. Deduplicating, filter, and prepare large data sets before training or indexing is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-curator-027
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Data preparation.

### Q33: A logistics planning team is reviewing the production design. Preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-curator-028
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: easy
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Data preparation.

### Q34: A manufacturing quality team has narrowed the next implementation step. Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-curator-029
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: hard
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: A
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Data preparation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Data preparation.

### Q35: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-curator-030
- Domain: Data Preparation
- Topic: NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?
- Difficulty: expert
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: C
- Explanation: NeMo Curator is the best fit because it sits in Data preparation: Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Why A is wrong: RAPIDS is a neighboring data preparation component, but this signal asks specifically for NeMo Curator: to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Data preparation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Data preparation.

### Q36: A cybersecurity response team is preparing a release decision. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-001
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q37: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-002
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q38: A logistics planning team is reviewing the production design. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-003
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q39: An insurance claims group is preparing a production rollout. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-004
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q40: A semiconductor design group is preparing a release decision. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-005
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q41: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-006
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q42: A global retailer is reviewing the production design. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-007
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.

### Q43: An insurance claims group is preparing a production rollout. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-008
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: easy
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q44: A cybersecurity response team is preparing a release decision. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-009
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q45: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-010
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q46: An insurance claims group is preparing a production rollout. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-011
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q47: A logistics planning team is reviewing the production design. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-012
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q48: A hospital operations team has narrowed the next implementation step. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-013
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- D. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q49: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-014
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q50: A pharmaceutical research team is preparing a production rollout. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-015
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q51: A logistics planning team is reviewing the production design. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-016
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q52: A public-sector casework team has narrowed the next implementation step. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-017
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q53: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-018
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q54: A pharmaceutical research team is preparing a production rollout. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-019
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q55: A telecom network operations team is reviewing the production design. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-020
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q56: A logistics planning team is reviewing the production design. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-021
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.

### Q57: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-022
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.

### Q58: A bank fraud team is preparing a release decision. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-023
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.

### Q59: A manufacturing quality team has narrowed the next implementation step. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-024
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q60: A telecom network operations team is reviewing the production design. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-025
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: medium
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q61: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-026
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q62: A bank fraud team is preparing a release decision. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-customizer-027
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q63: A hospital operations team has narrowed the next implementation step. Running API-driven LoRA/PEFT customization without standing up a full training stack is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-customizer-028
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: easy
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: C
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Customizer: to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q64: A logistics planning team is reviewing the production design. The enterprise wants a hosted service that fine-tunes a base model on domain instructions via API. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-customizer-029
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: D
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q65: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to run API-driven LoRA/PEFT customization without standing up a full training stack. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-customizer-030
- Domain: Fine-Tuning
- Topic: NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization?
- Difficulty: expert
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NeMo Customizer is the best fit because it sits in Training and customization: Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.

### Q66: A cybersecurity response team is preparing a release decision. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-001
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.

### Q67: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-002
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.

### Q68: A logistics planning team is reviewing the production design. Running model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-003
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q69: A pharmaceutical research team is preparing a production rollout. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-004
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.

### Q70: A cybersecurity response team is preparing a release decision. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-005
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.

### Q71: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-006
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q72: A logistics planning team is reviewing the production design. Comparing variants before release and catch quality or safety regressions is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-007
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q73: An automotive support team is preparing a production rollout. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-008
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: easy
- A. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Evaluation.

### Q74: A bank fraud team is preparing a release decision. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-009
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q75: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-010
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q76: A pharmaceutical research team is preparing a production rollout. Running model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-011
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.

### Q77: A global retailer is reviewing the production design. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-012
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q78: A hospital operations team has narrowed the next implementation step. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-013
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q79: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-014
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q80: An insurance claims group is preparing a production rollout. Running model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-015
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q81: A global retailer is reviewing the production design. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-016
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Evaluation.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q82: A manufacturing quality team has narrowed the next implementation step. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-017
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- B. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Evaluation.

### Q83: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-018
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.

### Q84: An insurance claims group is preparing a production rollout. Comparing variants before release and catch quality or safety regressions is the next release blocker. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-019
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q85: A logistics planning team is reviewing the production design. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-020
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.

### Q86: A logistics planning team is reviewing the production design. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-021
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q87: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-022
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose TensorRT-LLM; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q88: A bank fraud team is preparing a release decision. Measuring task quality rather than only operational metrics is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-023
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.

### Q89: A manufacturing quality team has narrowed the next implementation step. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-024
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Evaluation.

### Q90: A global retailer is reviewing the production design. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-025
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: medium
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q91: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-026
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Evaluation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q92: A cybersecurity response team is preparing a release decision. Comparing variants before release and catch quality or safety regressions is the next release blocker. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nemo-evaluator-027
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. RAPIDS is the best fit; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q93: A public-sector casework team has narrowed the next implementation step. Running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nemo-evaluator-028
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: easy
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: A
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.

### Q94: A logistics planning team is reviewing the production design. The project team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nemo-evaluator-029
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Evaluation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q95: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nemo-evaluator-030
- Domain: Evaluation
- Topic: NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models?
- Difficulty: expert
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: D
- Explanation: NeMo Evaluator is the best fit because it sits in Evaluation: Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Evaluation.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Evaluation.

### Q96: A semiconductor design group is preparing a release decision. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nim-operator-001
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: B
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q97: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades. Which NVIDIA component is most appropriate?
- ID: genl-hf-svc-nim-operator-002
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: expert
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: C
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q98: A telecom network operations team is reviewing the production design. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA service matches this workload?
- ID: genl-hf-svc-nim-operator-003
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: medium
- A. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: D
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q99: An insurance claims group is preparing a production rollout. Managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades is the work to finish before release. Which NVIDIA component should the team use?
- ID: genl-hf-svc-nim-operator-004
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: A
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for NIM Operator: to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.

### Q100: A cybersecurity response team is preparing a release decision. An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s. Which NVIDIA component should own this step?
- ID: genl-hf-svc-nim-operator-005
- Domain: Model Deployment
- Topic: NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: B
- Explanation: NIM Operator is the best fit because it sits in Serving and deployment: Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Serving and deployment.

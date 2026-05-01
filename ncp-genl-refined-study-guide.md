# NCP-GENL Refined Study Guide: NVIDIA Generative AI LLMs

Updated: 2026-04-29

This guide is for a data scientist or ML engineer who already knows ML, SageMaker-style training and deployment, local experiments, evaluation, and classical modeling, but does not yet have strong intuition for NVIDIA’s LLM deployment stack.

The goal is not to memorize product names. The goal is to understand where each NVIDIA tool sits in the LLM lifecycle and how to choose the right concept when a scenario mentions latency, throughput, long context, GPU memory, multi-node training, RAG quality, safety, or production reliability.

## How to Think About Every Scenario

Most professional-level questions are not asking “what is CUDA?” They are asking whether you can identify the layer where the problem lives.

Use this sequence:

1. Identify the phase.
   Is the system training, fine-tuning, optimizing inference, serving traffic, retrieving context, monitoring production, or enforcing safety?

2. Identify the bottleneck.
   The bottleneck is usually one of: parameter memory, KV-cache memory, activation memory, optimizer-state memory, compute, communication, scheduling, retrieval quality, data quality, output quality, safety, privacy, or cost.

3. Identify the constraint.
   Typical constraints are TTFT, p99 latency, throughput, quality loss tolerance, hallucination risk, compliance, cost, multi-user concurrency, or maintainability.

4. Pick the right layer.
   Do not solve a retrieval problem with a bigger model. Do not solve KV-cache memory with weight-only quantization. Do not solve access control with a prompt. Do not solve p99 latency by blindly increasing batch size.

5. Pick the NVIDIA tool that belongs to that layer.
   NeMo customizes models. TensorRT-LLM optimizes LLM inference. Triton serves models and schedules requests. NIM packages optimized LLM serving as an enterprise microservice. NCCL handles multi-GPU communication. Nsight shows performance bottlenecks. Guardrails adds programmable safety and dialog controls.

## If You Come From SageMaker or Local ML

SageMaker gives a managed path for training jobs, endpoints, model registry, batch transform, monitoring, and MLOps around AWS. NVIDIA’s stack is lower-level and more GPU/performance-oriented. In NVIDIA questions, the focus is often not “how do I launch an endpoint?” but “what exactly is limiting the GPU workload and what NVIDIA layer fixes it?”

Think of the mapping like this:

| SageMaker or common cloud idea | NVIDIA-side concept |
| --- | --- |
| Training job | NeMo training or fine-tuning workflow, possibly distributed with NCCL |
| Endpoint | NIM or Triton deployment |
| Model artifact | NGC model/container, TensorRT-LLM engine, checkpoint |
| Endpoint autoscaling | Kubernetes/HPA plus NIM/Triton replicas and warm pools |
| CloudWatch metrics | Triton/NIM metrics, GPU metrics, Prometheus/Grafana, application logs |
| SageMaker Model Monitor | Production eval, canary prompts, drift detection, retriever metrics |
| Data Wrangler or preprocessing | RAPIDS/cuDF for GPU-accelerated data processing, or normal Python stack |
| Debugging endpoint latency | Nsight Systems, Triton metrics, TTFT, queue delay, GPU utilization |
| Model registry | NGC, internal registry, versioned engines/checkpoints/adapters |
| Batch transform | Separate batch endpoint or offline summarization pipeline with larger batches |

Important: NVIDIA does not replace everything a cloud platform does. It usually sits inside a larger cloud or on-prem deployment. For example, on AWS you might still use EKS, S3, CloudWatch, IAM, and VPCs, while using NIM/Triton/TensorRT-LLM inside GPU containers.

## Top-Down NVIDIA Stack by Phase

### Phase 0: Hardware and low-level execution

This is the foundation. It matters when the question mentions GPU type, memory, kernel gaps, tensor cores, communication, or profiling.

Main concepts:

- GPU: executes parallel tensor operations.
- H100/A100 and other accelerators: determine available memory, tensor cores, FP8 support, interconnect options, and practical throughput.
- CUDA: programming model and runtime for NVIDIA GPU compute.
- CUDA kernels: individual GPU operations.
- CUDA Graphs: reduce repeated CPU launch overhead for repeated execution patterns.
- Tensor cores: specialized units for matrix operations in FP16, BF16, FP8, INT8, and similar formats.
- NVLink: fast GPU-to-GPU connection within a node.
- InfiniBand/RDMA: high-speed inter-node communication.
- NCCL: library for collective GPU communication.
- Nsight Systems: timeline-level performance investigation.
- Nsight Compute: kernel-level performance investigation.
- NVIDIA SMI: quick GPU utilization and memory status.

Use this phase when:

- GPU utilization is low even under load.
- There are gaps between CUDA kernels.
- Training scales well on one node but poorly across nodes.
- A job hangs around all-reduce or all-to-all communication.
- You need to understand if a workload is compute-bound, memory-bound, launch-bound, or communication-bound.

### Phase 1: Model building, training, and customization

This phase is about changing model behavior or training models efficiently.

Main concepts:

- NeMo Framework: NVIDIA framework for training, fine-tuning, PEFT, LoRA/QLoRA, distributed training recipes, and LLM customization.
- SFT: supervised fine-tuning on instruction or task data.
- LoRA: trains low-rank adapter weights while the base model remains frozen.
- QLoRA: quantizes the base model to reduce memory while training LoRA adapters.
- Continued pretraining: keeps training the base model on domain text to shift its knowledge or language distribution.
- RLHF/PPO/GRPO/DPO: preference or reward-based alignment methods.
- Data curation: deduplication, filtering, PII handling, contamination checks, data mixing, lineage.
- Distributed training: data parallelism, tensor parallelism, pipeline parallelism, expert parallelism, FSDP/ZeRO, activation checkpointing.

Use this phase when:

- The model must learn a domain-specific style or behavior.
- Prompting and RAG are not enough.
- The scenario mentions catastrophic forgetting.
- Training OOM happens during forward, backward, or optimizer step.
- Multi-node training slows down or hangs.
- The system needs a smaller student model that imitates a larger teacher.

### Phase 2: Inference engine optimization

This phase is about making a trained model run faster and cheaper at inference time.

Main concepts:

- TensorRT: NVIDIA inference optimization engine for deep learning models in general.
- TensorRT-LLM: NVIDIA inference optimization stack specifically for LLMs.
- TensorRT-LLM engine: optimized executable form of a model.
- Quantization: FP8, INT8, INT4, AWQ, GPTQ, SmoothQuant, KV-cache quantization.
- Fused kernels: combine operations to reduce memory movement and overhead.
- Paged KV cache: stores key/value cache in pages to reduce memory fragmentation.
- In-flight batching: lets requests join and leave the generation batch dynamically.
- Chunked prefill: splits long prompt processing so it does not block decode work.
- Speculative decoding: uses a small draft model to propose tokens that the target model verifies.
- CUDA Graphs: reduces launch overhead in repeated decode loops.

Use this phase when:

- The model is too slow or too expensive.
- The model is too large for available GPU memory.
- Long context causes OOM.
- TTFT is too high.
- Throughput is low for mixed-length chat prompts.
- A converted model fails due to unsupported operators.
- Quality drops after quantization.

### Phase 3: Serving and deployment

This phase is about exposing the model to users or applications.

Main concepts:

- Triton Inference Server: general model serving platform for multiple backends and model types.
- NIM: NVIDIA Inference Microservice, a packaged enterprise serving container with optimized engines and API conventions.
- Dynamic batching: groups nearby requests to improve throughput.
- Preferred batch size: tells Triton which batch sizes are efficient for the model.
- Max queue delay: controls how long Triton waits to form a better batch.
- Instance groups: control model instances per GPU or across GPUs.
- Ensembles: connect preprocessing, model inference, postprocessing, safety classifier, or other models in one serving graph.
- Model warmup: preloads model and initializes runtime paths to reduce cold-start latency.
- Separate endpoints: different serving configurations for chat, batch summarization, embeddings, reranking, and safety checks.

Use this phase when:

- You need to serve a model behind HTTP/gRPC or OpenAI-compatible APIs.
- Chat and offline summarization have different latency/throughput needs.
- p99 latency spikes under bursts.
- Autoscaling creates cold starts.
- You need model versioning, canary deployments, or multiple model pipelines.
- You need a packaged enterprise deployment path instead of hand-building the engine.

### Phase 4: LLM application layer

This phase is about the application around the model: RAG, prompting, tools, routing, memory, and business workflow.

Main concepts:

- RAG: retrieval-augmented generation, where external documents are retrieved and inserted into the prompt.
- Embeddings: vector representations used for semantic search.
- Reranking: second-stage ranking that improves the relevance of retrieved chunks.
- Chunking: splitting documents into retrievable units.
- Prompt engineering: zero-shot, few-shot, chain-of-thought, structured prompts, citation prompts, grounding prompts.
- Tool/function calling: model produces structured calls to external tools.
- Structured output: JSON/schema/grammar-constrained generation.
- Model routing: sends easy queries to smaller models and hard queries to larger models.
- Prompt caching: reuses stable prefix KV states when the prefix is identical.

Use this phase when:

- The model output is fluent but unsupported by documents.
- The retriever returns irrelevant chunks.
- The model calls nonexistent tools.
- The app needs citations, JSON, or XML output.
- Cost is too high because every query goes to the largest model.
- The same model must support multiple workloads.

### Phase 5: Safety, governance, and reliability

This phase is about making the system safe, auditable, stable, and trustworthy.

Main concepts:

- NeMo Guardrails: programmable dialog, safety, retrieval, output, and tool-use controls.
- Access control before retrieval: prevents users from retrieving documents they are not allowed to see.
- Prompt injection defense: treat user and retrieved content as untrusted.
- Output safety checks: detect unsafe, private, policy-violating, or unsupported content.
- Red teaming: adversarial testing of realistic misuse and failure cases.
- Logging and auditability: record model version, prompt hashes, policy decisions, retrieval IDs, response IDs, and redacted metadata.
- Production eval: fixed canary prompts, LLM-as-judge, rule-based checks, human review, drift monitoring.
- Incident response: rollback, traffic shaping, model fallback, disable tool, disable retrieval source.

Use this phase when:

- The system handles regulated data.
- A RAG system may leak private documents.
- A user or retrieved webpage tries to override instructions.
- The model slowly becomes less helpful after updates.
- Canary traffic shows subtle quality regression.
- You need audit logs without storing raw PII forever.

## NVIDIA Tool Map

### CUDA

CUDA is the base platform that lets software run computation on NVIDIA GPUs. In most exam scenarios, you do not need to write CUDA code. You need to know what CUDA makes possible and how CUDA-level symptoms appear.

Use CUDA concepts when the issue is kernel launch overhead, GPU synchronization, memory movement, tensor-core usage, or custom kernel performance.

Common clues:

- Long gaps between GPU kernels suggest CPU launch overhead or synchronization.
- Low GPU utilization can mean the GPU is waiting on CPU, input preprocessing, networking, or batch formation.
- Small repeated decode kernels may benefit from CUDA Graphs.

### TensorRT

TensorRT optimizes trained models for inference on NVIDIA GPUs. It performs graph optimization, layer fusion, precision calibration, and engine building.

Use TensorRT when the model is not necessarily an LLM or when the scenario simply says “optimize a trained model for inference.”

### TensorRT-LLM

TensorRT-LLM is the LLM-specific inference optimization stack. It matters more than generic TensorRT for decoder-only generation, long-context chat, KV cache, in-flight batching, chunked prefill, speculative decoding, and tensor/pipeline parallel inference.

Use TensorRT-LLM when:

- The scenario mentions Llama, GPT-like models, chat generation, token streaming, TTFT, KV cache, or long contexts.
- The goal is a custom high-performance engine.
- You need control over quantization, parallelism, and batching behavior.

Do not confuse TensorRT-LLM with Triton. TensorRT-LLM builds and runs optimized LLM engines. Triton serves models and manages requests.

### Triton Inference Server

Triton is the serving layer. It can serve models from different frameworks and backends. It manages requests, batching, model instances, model repositories, ensembles, metrics, and HTTP/gRPC endpoints.

Use Triton when:

- The question is about serving models at scale.
- You need dynamic batching or queue delay control.
- You need multiple models behind one server.
- You need tokenizer -> model -> safety classifier -> postprocessor as one inference graph.
- You need per-model serving configuration.

### NVIDIA NIM

NIM is the enterprise microservice path. It packages optimized models, engines, runtime, API surface, and deployment conventions in containers.

Use NIM when:

- The question asks for the fastest supported enterprise deployment path.
- You need standardized containerized inference.
- You want OpenAI-compatible endpoints with optimized NVIDIA backend components.
- You do not want to manually build every TensorRT-LLM and Triton detail.

NIM is often built on top of lower-level NVIDIA inference components. For exam reasoning, NIM is the packaged product layer, while TensorRT-LLM and Triton are the lower-level optimization and serving pieces.

### NGC Catalog

NGC is NVIDIA’s catalog and registry for GPU-optimized containers, models, Helm charts, SDKs, and resources.

Use NGC when:

- The scenario mentions pulling a supported container or model artifact.
- A team wants a standard starting point rather than manually building a container.
- Deployment depends on NVIDIA-optimized assets.

### NeMo Framework

NeMo is for building, customizing, and adapting generative AI models.

Use NeMo when:

- The model needs SFT, LoRA, QLoRA, continued pretraining, or distributed training recipes.
- You need to customize an LLM rather than only prompt it.
- You need training or fine-tuning workflow support.

### NeMo Guardrails

NeMo Guardrails is for programmable guardrails around LLM applications.

Use Guardrails when:

- You need conversation flow control.
- You need input/output safety checks.
- You need tool-use rules.
- You need RAG groundedness checks.

Do not use Guardrails as a substitute for access control. Access control must happen before retrieval and tool execution.

### NCCL

NCCL is the communication library for multi-GPU and multi-node training and inference communication.

Use NCCL when:

- The scenario mentions all-reduce, all-gather, reduce-scatter, broadcast, or all-to-all.
- Training scales poorly across nodes.
- A job hangs around collectives.
- MoE expert routing causes all-to-all pressure.
- Tensor parallelism creates frequent communication.

### Nsight Systems

Nsight Systems is for timeline-level profiling. It tells you where time is going across CPU, GPU kernels, CUDA calls, memory copies, and synchronization.

Use Nsight Systems first when the problem is broad: “why is the workload slow?”

### Nsight Compute

Nsight Compute is for kernel-level profiling. It tells you why a specific kernel is inefficient.

Use Nsight Compute when the problem has been narrowed to a kernel and you need to know whether it is memory-bound, compute-bound, limited by occupancy, or not using tensor cores well.

### NVIDIA SMI

NVIDIA SMI is a quick monitoring command for GPU utilization, memory, temperature, driver version, and running processes.

Use it for quick checks, not deep performance diagnosis.

### RAPIDS

RAPIDS accelerates data science and analytics workloads on GPUs. cuDF is the DataFrame library similar in purpose to pandas, and cuML provides GPU-accelerated ML algorithms.

Use RAPIDS when the scenario is about accelerating preprocessing, feature engineering, data analysis, or tabular pipelines on GPUs. It is not the main LLM serving layer.

## Topic Playbooks

### Quantization

Quantization reduces numerical precision to save memory and improve throughput. The key is knowing what kind of memory or compute you are reducing.

Weight quantization reduces parameter memory and bandwidth. It helps when the model weights are the bottleneck.

Activation quantization is harder because activations depend on inputs and may have outliers.

KV-cache quantization reduces long-context inference memory. It helps when the prompt/context length is the bottleneck.

Calibration data must match production traffic. If the system serves medical text, calibration should include medical text. If it serves code, calibration should include code.

Use this mapping:

| Situation | Best concept |
| --- | --- |
| Need 4-bit weight-only quantization with good quality | AWQ or GPTQ |
| Activation outliers hurt INT8 quality | SmoothQuant |
| H100/Hopper inference with high throughput and careful scaling | FP8 |
| Long-context OOM | KV-cache quantization, MQA/GQA, paged KV cache |
| Tight quality tolerance | Representative calibration and less aggressive precision |
| Domain-specific quality must be preserved | Domain-specific calibration and benchmark validation |
| Small numerical differences after TensorRT build | Expected from fusion/precision changes; validate downstream metrics |

Exam trap: if the scenario says 32K context and memory pressure, the answer is usually about KV cache, not only INT4 weight quantization.

### Batching and scheduling

Batching is how you trade latency for throughput.

Static batching is simple but bad for mixed-length chat because padding to the longest sequence wastes compute and causes head-of-line blocking.

Dynamic batching groups requests that arrive close together. It is common in Triton. It improves throughput but queue delay must be controlled.

Continuous or in-flight batching is better for LLM generation because requests can join and leave during decoding. It is especially relevant for variable-length chat workloads.

Chunked prefill splits long prompt processing so long requests do not block decoding for everyone else.

Use this mapping:

| Situation | Best concept |
| --- | --- |
| Many variable-length chat requests | In-flight batching |
| Long prompts block short prompts | Chunked prefill |
| Small independent requests and general serving | Triton dynamic batching |
| p99 latency spikes under bursts | Lower max queue delay, tune preferred batch sizes |
| Offline summarization | Larger batches, higher queue delay, batch endpoint |
| Real-time chat | Low queue delay, streaming, TTFT optimization |

Exam trap: “increase batch size” can improve throughput but hurt TTFT and p99 latency. Check the SLA.

### KV cache

In autoregressive generation, the model stores previous keys and values so it does not recompute the whole context at each token. This is the KV cache.

KV cache grows with batch size, sequence length, number of layers, number of KV heads, and precision. Long-context workloads can become KV-cache dominated even if weight memory is optimized.

Concepts:

- Paged KV cache reduces fragmentation and supports variable-length requests.
- KV-cache quantization reduces memory for long contexts.
- MQA and GQA reduce KV-cache size by sharing key/value heads.
- Prompt caching reuses stable prefix KV states when the prefix is identical.

Use KV-cache concepts when the scenario mentions long context, many concurrent sequences, 32K/64K context, streaming chat memory pressure, or variable-length prompts.

### Fine-tuning and adaptation

Do not fine-tune by default. First ask what must change.

Use prompting when the model already can do the task but needs instructions or formatting.

Use RAG when the model needs external, private, or frequently updated knowledge.

Use LoRA when the model needs consistent style, domain behavior, or task pattern with limited compute.

Use QLoRA when GPU memory is limited and the base model is too large for normal LoRA.

Use full SFT when you have enough high-quality data and need deeper behavioral change.

Use continued pretraining when the model lacks domain language or knowledge distribution, and you have large amounts of unlabeled domain text.

Use preference tuning when the model can produce candidates but needs to prefer better behavior, style, safety, or helpfulness.

Exam trap: if the issue is “the model does not know latest internal documents,” RAG is usually better than fine-tuning.

### RAG

RAG is not just “put documents in the prompt.” It is a system with retrieval, ranking, access control, context packing, generation, citation, and evaluation.

Core steps:

1. Ingest documents.
2. Split documents into chunks.
3. Create embeddings.
4. Store vectors and metadata.
5. Retrieve candidate chunks.
6. Rerank candidates.
7. Apply access control and filters.
8. Pack relevant context into the prompt.
9. Generate answer with citation instructions.
10. Evaluate retrieval relevance and answer faithfulness.

Common failures:

- Chunks too small lose context.
- Chunks too large retrieve irrelevant content.
- Vector search returns semantically related but non-answer-bearing chunks.
- Reranker is missing.
- Access control is applied after retrieval instead of before or during retrieval filtering.
- The model invents citations.
- New documents shift retrieval distribution and degrade quality.

Use RAG concepts when the system needs grounded answers, private documents, updated knowledge, citations, or enterprise Q&A.

### Deployment

Deployment is where optimized model, serving system, scaling policy, observability, and application contract meet.

Key separation:

- TensorRT-LLM: optimized LLM inference engine.
- Triton: serving, scheduling, batching, model repository, ensembles.
- NIM: packaged enterprise microservice with optimized backend and stable API.
- Kubernetes: orchestration, scaling, rolling updates, resource management.
- Application gateway: authentication, rate limits, routing, user/session handling.

Use separate endpoints or model instances when workloads have different SLAs.

Real-time chat wants low TTFT and smooth streaming. Offline summarization wants throughput and cost efficiency. Embeddings want high-throughput batch/vector generation. Reranking is latency-sensitive but usually smaller than generation.

Exam trap: one endpoint with one batching configuration is often wrong when chat and batch jobs share a model.

### Monitoring and reliability

LLM monitoring must include normal infrastructure metrics and model-quality metrics.

Infrastructure metrics:

- GPU utilization.
- GPU memory.
- Request rate.
- Error rate.
- Queue depth.
- TTFT.
- Inter-token latency.
- p95/p99 latency.
- Throughput.
- Cost per request.

LLM quality metrics:

- Faithfulness.
- Answer relevance.
- Retrieval recall@k.
- Citation correctness.
- Refusal rate.
- Safety violation rate.
- LLM-as-judge score drift.
- Canary prompt score drift.
- Human review rate.

RAG-specific monitoring:

- Retriever recall@k.
- Retrieval score distribution.
- Reranker score distribution.
- Context utilization.
- Faithfulness on fixed canary questions.
- Index freshness.

Exam trap: CPU usage and generic uptime will not catch subtle quality regression.

### Safety and governance

Safety is layered.

Layer 1: authentication and authorization.

Layer 2: retrieval access control.

Layer 3: prompt and input filtering.

Layer 4: tool permission and validation.

Layer 5: output checking.

Layer 6: logging and audit.

Layer 7: red teaming and continuous evaluation.

NeMo Guardrails can help with dialog flows, input/output checks, RAG groundedness checks, and tool-use governance. It does not replace IAM, database permissions, document ACLs, logging, or legal/compliance review.

Exam trap: “add a prompt saying do not reveal private data” is weaker than enforcing access control before retrieval and tool execution.

## Production Architecture Patterns

### Pattern 1: Real-time chat for millions of users

Typical architecture:

1. User request enters API gateway.
2. Authentication and rate limit are applied.
3. Router classifies request difficulty and workload type.
4. Easy requests may go to a smaller/cheaper model.
5. Hard requests go to a larger model through NIM or Triton with TensorRT-LLM backend.
6. For RAG queries, retrieval and reranking happen before generation.
7. Guardrails and output checks run before response is returned.
8. Logs and metrics are written with PII redaction.
9. Canary eval and quality monitoring run continuously.

Capacity planning starts with tokens, not users.

Estimate:

- active users per day.
- average requests per active user.
- input tokens per request.
- output tokens per request.
- peak traffic multiplier.
- fraction of traffic routed to small versus large model.
- context length distribution.

Important design choices:

- Separate chat and batch endpoints.
- Optimize TTFT and streaming for chat.
- Use in-flight batching and paged KV cache for mixed-length traffic.
- Use model routing to avoid sending every request to the largest model.
- Monitor quality, safety, and cost continuously.

### Pattern 2: Enterprise RAG Q&A

Typical architecture:

1. Documents are ingested with metadata and access permissions.
2. Text is cleaned and chunked.
3. Embeddings are created and indexed.
4. Query is embedded.
5. Candidate chunks are retrieved.
6. Access control and metadata filters are applied.
7. Reranker selects answer-bearing evidence.
8. Prompt is built with only relevant evidence.
9. LLM answers with citation requirements.
10. Faithfulness and citation checks are applied.
11. Logs store retrieval IDs, model version, prompt hash, and policy decisions.

Critical risks:

- Unauthorized retrieval.
- Stale index.
- Bad chunking.
- Retrieval drift.
- Hallucinated citations.
- Overstuffed context.

### Pattern 3: Offline document summarization

Offline summarization is not the same as chat.

It can tolerate higher queue delay and larger batches, so the serving configuration should favor throughput and cost. It may use longer context and therefore needs KV-cache memory planning. It should have evaluation for factual consistency, coverage, and hallucination.

Good design:

- Separate endpoint or batch pipeline.
- Larger batch sizes.
- Longer queue delay allowed.
- Strong factuality checks.
- Output length controls.
- Retry and checkpointing.

### Pattern 4: Fine-tuning pipeline

Typical architecture:

1. Define target behavior and evaluation set.
2. Collect and filter data.
3. Remove duplicates and contaminated eval examples.
4. Choose adaptation method: prompt, RAG, LoRA, QLoRA, SFT, continued pretraining, preference tuning.
5. Train using NeMo or compatible workflow.
6. Validate on task metrics, safety metrics, and regression tests.
7. Convert or package for inference if needed.
8. Deploy canary version.
9. Monitor quality, cost, and safety.
10. Roll back if canary metrics regress.

Critical risks:

- Catastrophic forgetting.
- Bad data mix.
- Synthetic data errors.
- Eval contamination.
- Adapter incompatibility.
- Quality regression after merge or quantization.

## Decision Matrices

### Tool choice

| Need | Best NVIDIA concept |
| --- | --- |
| Fine-tune or customize an LLM | NeMo Framework |
| Add dialog, safety, or tool-use controls | NeMo Guardrails |
| Build a custom optimized LLM engine | TensorRT-LLM |
| Serve multiple models with batching and ensembles | Triton |
| Fast supported enterprise LLM API deployment | NIM |
| Pull GPU-optimized containers and model assets | NGC |
| Multi-GPU collective communication | NCCL |
| Timeline-level profiling | Nsight Systems |
| Kernel-level profiling | Nsight Compute |
| Quick GPU status | NVIDIA SMI |
| GPU DataFrame/data science acceleration | RAPIDS/cuDF |

### Bottleneck choice

| Symptom | Likely bottleneck | First concepts |
| --- | --- | --- |
| 32K context OOM | KV cache | KV-cache quantization, MQA/GQA, paged KV cache |
| p99 latency spike under bursts | Queueing | Triton queue delay, preferred batch sizes, endpoint separation |
| Low TTFT required | Prefill/scheduling | Chunked prefill, in-flight batching, CUDA Graphs |
| GPU idle gaps | Launch/input overhead | Nsight Systems, CUDA Graphs, CPU sync, preprocessing |
| Multi-node training slowdown | Communication | NCCL, topology, all-reduce/all-to-all volume |
| OOM at optimizer step | Optimizer state | ZeRO/FSDP, 8-bit optimizer, sharding |
| Quality loss after INT8 | Calibration/outliers | SmoothQuant, calibration sweep, representative data |
| RAG answer fluent but unsupported | Grounding | Reranking, citation checks, faithfulness eval |
| Model calls nonexistent tools | Output control | Function schema, constrained decoding, validation |
| Private docs leaked | Access control | ACL before retrieval, least privilege, audit logs |

### Adaptation choice

| Problem | First choice |
| --- | --- |
| Model needs better instructions | Prompt engineering |
| Model needs private/latest facts | RAG |
| Model needs consistent company tone | LoRA or SFT |
| Model needs domain language distribution | Continued pretraining |
| Limited GPU memory for tuning | QLoRA |
| Need preference alignment | DPO/RLHF |
| Need lower latency model | Distillation or smaller routed model |

## Exam Trap Patterns

### Trap 1: Solving the wrong memory

If the model has long context OOM, do not jump to weight-only INT4. Long context often means KV cache dominates. Think KV-cache quantization, paged KV cache, MQA/GQA, smaller batch, or context reduction.

### Trap 2: Improving throughput while breaking TTFT

Increasing batch size can improve throughput but hurt time to first token. For chat, TTFT and p99 matter more than average throughput.

### Trap 3: Using fine-tuning for knowledge updates

Fine-tuning is not the best first option for frequently changing internal knowledge. Use RAG when the system needs current or private documents.

### Trap 4: Using guardrails instead of permissions

Guardrails help, but they do not replace real access control. If a user must not see a document, the document should not be retrieved into their context.

### Trap 5: Adding GPUs without communication reasoning

More GPUs can slow training if communication dominates. Tensor parallelism across many nodes can create excessive all-reduce traffic. Use topology-aware parallelism.

### Trap 6: Bigger model for retrieval failure

If the retrieved context is irrelevant, a bigger model may still answer badly. Improve retrieval, reranking, chunking, and faithfulness evaluation.

### Trap 7: Prompt-only structured output

For strict JSON, XML, or function names, prompt instructions are weak. Use schemas, constrained decoding, tool/function calling constraints, and validation.

### Trap 8: Generic monitoring for LLM quality

Server health does not prove answer quality. Monitor canary prompts, faithfulness, retrieval metrics, safety, refusal rate, and LLM-as-judge drift.

## Scenario Drills

Use these drills to practice reasoning. Do not answer by product name first. Answer by phase, bottleneck, constraint, then tool.

### Drill 1

A chat service has acceptable average latency, but p99 TTFT gets bad when long prompts arrive. The model is already quantized. What phase is this? What bottleneck is most likely? Which concepts should you consider?

Expected reasoning: inference serving and scheduling. The issue is prefill and queueing, not only model size. Consider chunked prefill, in-flight batching, separate endpoints, lower queue delay, and profiling TTFT.

### Drill 2

A 32K summarization workload runs out of memory despite INT4 weight quantization. What does that suggest?

Expected reasoning: weight memory was reduced, but KV-cache memory still grows with context length and batch size. Consider KV-cache quantization, smaller batch, MQA/GQA, paged KV cache, or shorter context strategy.

### Drill 3

A RAG chatbot answers fluently but often cites the wrong document. What should you inspect first?

Expected reasoning: retrieval and grounding. Inspect chunking, metadata filters, reranker, citation construction, faithfulness checks, and retrieved-context relevance.

### Drill 4

A multi-node training job is fast on one node but slows dramatically across nodes. What layer is this?

Expected reasoning: communication. Inspect NCCL, InfiniBand/RDMA, topology, all-reduce/all-to-all volume, tensor parallel degree, pipeline layout, and rank logs.

### Drill 5

A team wants to deploy a supported enterprise LLM API quickly, not build a custom engine. Which layer fits?

Expected reasoning: deployment/productization. NIM is the likely choice because it packages optimized serving into a deployable microservice.

### Drill 6

A team has many high-quality examples of desired assistant style, and prompting is inconsistent. External knowledge is not the issue. What adaptation method fits?

Expected reasoning: model behavior adaptation. LoRA or SFT may fit depending on data size, compute, and depth of behavior change.

### Drill 7

Production answers slowly become less helpful after weekly model updates, but CPU and GPU metrics look normal. What is missing?

Expected reasoning: quality monitoring. Add fixed canary prompts, LLM-as-judge or rule-based scoring, distributional drift checks, human review, and rollback thresholds.

### Drill 8

A tool-calling agent sometimes invents a function name. What kind of fix is stronger than another prompt sentence?

Expected reasoning: structured output enforcement. Use a declared schema, constrained decoding, function/tool API restrictions, and application-side validation.

## High-Value Flashcards

- TensorRT-LLM optimizes LLM inference; Triton serves and schedules models; NIM packages optimized LLM serving as a microservice.
- Weight quantization reduces parameter memory; KV-cache quantization reduces long-context request memory.
- Continuous batching is for live generation where requests join and leave during decoding.
- Triton dynamic batching improves throughput by batching nearby requests.
- `max_queue_delay_microseconds` controls how long Triton waits to form a batch.
- Chunked prefill reduces head-of-line blocking from long prompts.
- Paged KV cache reduces fragmentation for variable-length requests.
- TTFT matters most for chat responsiveness.
- Inter-token latency matters for streaming smoothness.
- FSDP/ZeRO-3 shards parameters, gradients, and optimizer states.
- Activation checkpointing trades compute for lower activation memory.
- LoRA trains low-rank updates while base weights remain frozen.
- QLoRA saves tuning memory by quantizing the base model while training adapters.
- SmoothQuant helps INT8 when activation outliers are the problem.
- AWQ is strong for 4-bit weight-only quantization with representative calibration.
- FP8 is important on Hopper/H100-style workloads but needs scaling and validation.
- RAG needs retrieval and faithfulness evaluation, not just generation evaluation.
- MQA/GQA reduce KV cache compared with full MHA.
- MoE saves compute per token but creates routing and all-to-all communication issues.
- Guardrails complement access control; they do not replace it.
- Nsight Systems finds timeline bottlenecks; Nsight Compute inspects kernels.
- NCCL problems often appear as poor multi-node scaling or collective hangs.

## Official References to Study

- NVIDIA NCP-GENL certification page: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- TensorRT-LLM documentation: https://nvidia.github.io/TensorRT-LLM/
- TensorRT-LLM GPT attention, in-flight batching, and KV cache: https://nvidia.github.io/TensorRT-LLM/advanced/gpt-attention.html
- TensorRT-LLM KV cache system: https://nvidia.github.io/TensorRT-LLM/features/kvcache.html
- NVIDIA NIM for LLMs: https://docs.nvidia.com/nim/large-language-models/latest/index.html
- Triton Inference Server user guide: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/
- Triton model configuration: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_configuration.html
- NeMo Framework user guide: https://docs.nvidia.com/nemo-framework/user-guide/latest/
- NeMo Guardrails documentation: https://docs.nvidia.com/nemo/guardrails/latest/
- NCCL documentation: https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/
- Nsight Systems documentation: https://docs.nvidia.com/nsight-systems/
- Nsight Compute documentation: https://docs.nvidia.com/nsight-compute/
- RAPIDS documentation: https://docs.rapids.ai/

## Final One-Page Map

Training and customization: NeMo, LoRA, QLoRA, SFT, continued pretraining, RLHF/DPO, NCCL, FSDP/ZeRO.

Inference optimization: TensorRT-LLM, TensorRT, quantization, paged KV cache, in-flight batching, chunked prefill, CUDA Graphs, speculative decoding.

Serving and deployment: Triton, NIM, NGC, Kubernetes, dynamic batching, instance groups, ensembles, warmup, canary deployment.

Application layer: RAG, embeddings, reranking, prompt engineering, function calling, structured output, model routing, prompt caching.

Safety and reliability: NeMo Guardrails, access control, red teaming, canary eval, quality monitoring, audit logs, rollback, drift detection.

Hardware and profiling: GPUs, CUDA, tensor cores, NVLink, InfiniBand, NCCL, Nsight Systems, Nsight Compute, NVIDIA SMI.

## Final Exam Reasoning Checklist

Before choosing an answer, ask:

1. Is the problem training, inference optimization, serving, RAG, monitoring, or safety?
2. Is the bottleneck memory, compute, communication, scheduling, retrieval, data, quality, or governance?
3. Is the metric TTFT, p99 latency, throughput, quality, cost, or safety?
4. Does the answer solve the exact bottleneck or just sound related?
5. Does the answer preserve the stated constraint?
6. Is a lower-level tool or packaged product being asked for?
7. Would the answer work in production, or only in a toy demo?

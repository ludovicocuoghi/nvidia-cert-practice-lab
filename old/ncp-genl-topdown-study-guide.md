# NCP-GENL Complete Study Guide: NVIDIA Generative AI LLMs

Updated: 2026-04-29

## Purpose

This guide is for a strong machine learning practitioner who already understands classical ML, Kaggle-style modeling, evaluation, feature engineering, cloud notebooks, and model training, but has limited direct experience with NVIDIA's production LLM stack.

The goal is not to memorize definitions. The goal is to reason through realistic LLM engineering scenarios: high-concurrency serving, latency constraints, GPU memory pressure, distributed training, fine-tuning choices, RAG quality, safety controls, monitoring, and enterprise deployment trade-offs.

A professional-level NVIDIA LLM exam is mostly about choosing the right tool and optimization for the bottleneck. Many wrong answers sound plausible because they solve a different layer of the system.

## The Mental Model You Should Use

For every scenario, ask five questions in this order:

1. **What phase is this?**
   - Pretraining
   - Fine-tuning
   - Inference optimization
   - Serving and deployment
   - RAG application design
   - Monitoring and reliability
   - Safety and governance

2. **What is the bottleneck?**
   - GPU compute
   - GPU memory
   - KV cache memory
   - Network communication
   - CPU launch overhead
   - Queueing delay
   - Retrieval quality
   - Data quality
   - Safety risk
   - Evaluation blind spot

3. **What constraint matters most?**
   - Accuracy or factuality
   - TTFT
   - p95 or p99 latency
   - Throughput
   - Cost per request
   - GPU utilization
   - Privacy
   - Availability
   - Compliance

4. **Which NVIDIA layer fits?**
   - CUDA for GPU execution
   - TensorRT-LLM for optimized LLM inference engines
   - Triton Inference Server for model serving and batching
   - NIM for packaged enterprise inference microservices
   - NeMo Framework for tuning and customization
   - NeMo Guardrails for safety and conversation flows
   - NCCL for multi-GPU and multi-node communication
   - Nsight Systems and Nsight Compute for profiling
   - NGC for NVIDIA containers, models, and software artifacts

5. **What answer solves the exact layer?**
   - Weight quantization solves parameter memory and bandwidth.
   - KV-cache quantization solves long-context inference memory.
   - Continuous batching solves live mixed-length generation scheduling.
   - Chunked prefill solves long prompt head-of-line blocking.
   - NCCL tuning solves distributed communication problems.
   - Guardrails reduce unsafe behavior but do not replace access control.

## If You Come From SageMaker or Local ML

You can map your existing experience to NVIDIA concepts like this:

| Familiar concept | NVIDIA concept |
| --- | --- |
| SageMaker endpoint | NIM or Triton endpoint |
| SageMaker model container | NIM container or Triton model repository |
| Hugging Face model | NeMo model or TensorRT-LLM converted engine |
| CloudWatch metrics | Triton/NIM metrics, Prometheus, Grafana |
| Instance autoscaling | Kubernetes HPA, GPU-aware scaling, warm pools |
| PyTorch training job | NeMo training or Megatron-style distributed training |
| Model artifact | Checkpoint, TensorRT-LLM engine, NGC artifact |
| Batch transform | Batch inference endpoint or separate high-throughput serving lane |
| A/B test | Canary plus online quality evaluation |
| Data drift | Prompt/query drift, retrieval drift, response-quality drift |

The big difference is that LLM production is much more sensitive to **sequence length**, **KV cache**, **batch scheduling**, **streaming latency**, and **GPU memory fragmentation**. In classical ML, an input row is usually a fixed feature vector. In LLM systems, every request has variable prompt length, variable output length, dynamic state, and sometimes retrieved documents.


## Top-Down Map of the NVIDIA Generative AI Stack

Use this section as the main map. When you see an unfamiliar NVIDIA name, first ask which layer it belongs to.

### Layer 0: Hardware and low-level execution

This is the physical and runtime layer. It answers: "How does the math run fast on NVIDIA GPUs?"

Main concepts:

- NVIDIA GPUs such as A100, H100, H200, B200.
- GPU memory, usually called VRAM or HBM.
- Tensor Cores for matrix multiplication.
- NVLink for fast GPU-to-GPU communication inside a server.
- InfiniBand or high-speed Ethernet for communication between servers.
- CUDA as the programming and execution platform.
- NCCL as the communication library for multi-GPU and multi-node collectives.
- Nsight Systems and Nsight Compute for profiling.
- NVIDIA SMI for basic GPU status and utilization.

What this layer is used for:

- Training large models.
- Serving large models with low latency.
- Diagnosing GPU underutilization.
- Diagnosing CUDA OOM.
- Diagnosing distributed training slowdown.
- Diagnosing NCCL hangs.

Typical exam signals:

- "GPU utilization is low."
- "Nsight shows gaps between kernels."
- "All-reduce is slow across nodes."
- "The job hangs during distributed training."
- "The model fits on one node but slows dramatically on many nodes."

Correct instinct:

- GPU idle with kernel gaps: profile CPU launch overhead, synchronization, data loading, and CUDA Graph opportunities.
- Scaling breaks across nodes: think NCCL, InfiniBand, GPUDirect RDMA, topology, rank desynchronization.
- OOM during optimizer step: optimizer states.
- OOM during long-context inference: KV cache.
- OOM during training forward/backward: activations, sequence length, batch size, or checkpointing.

### Layer 1: Training and customization

This layer answers: "How do we adapt a model to a task or domain?"

Main NVIDIA tools:

- NeMo Framework.
- NeMo Customizer or NeMo microservices in enterprise setups.
- Megatron-style distributed training concepts.
- PEFT methods such as LoRA and QLoRA.
- SFT, DPO, RLHF, PPO, GRPO, reward modeling.

What this layer is used for:

- Supervised fine-tuning.
- Parameter-efficient fine-tuning.
- Continued pretraining.
- Domain adaptation.
- Alignment and preference optimization.
- Large-scale distributed training.

Typical exam signals:

- "The model must consistently follow a new format."
- "Prompting is not enough."
- "There is domain-specific behavior to learn."
- "The team has limited GPU memory for fine-tuning."
- "The model forgets general capabilities after tuning."
- "The reward model is being exploited."

Correct instinct:

- Small adaptation with limited compute: LoRA.
- Larger model with tight memory: QLoRA.
- Strong behavior change with enough data and compute: SFT.
- Need new domain knowledge but not behavior change: usually RAG first, not fine-tuning.
- Catastrophic forgetting: data mix, learning rate, training duration, regularization, validation coverage.
- Reward hacking: strengthen KL penalty, improve reward model, add adversarial validation.

### Layer 2: Inference engine optimization

This layer answers: "How do we make a trained LLM run fast and cheaply?"

Main NVIDIA tools:

- TensorRT-LLM.
- TensorRT Model Optimizer.
- Quantization methods such as FP8, INT8 SmoothQuant, INT4 AWQ, GPTQ-style methods.
- CUDA Graphs.
- Fused attention kernels.
- Paged KV cache.
- In-flight batching.
- Chunked prefill.
- Speculative decoding.

What this layer is used for:

- Reducing latency.
- Increasing token throughput.
- Reducing GPU memory.
- Supporting long context.
- Serving large models on fewer GPUs.
- Building optimized engines for NVIDIA GPUs.

Typical exam signals:

- "Need lower TTFT."
- "Need higher tokens/sec."
- "Long context causes memory pressure."
- "Variable-length chat traffic is inefficient."
- "The TensorRT-LLM conversion fails."
- "The model loses quality after quantization."

Correct instinct:

- Variable-length high-concurrency chat: in-flight batching plus paged KV cache.
- Long prompts block short requests: chunked prefill.
- Long context memory pressure: KV-cache optimization, MQA/GQA, KV-cache quantization, prompt compression.
- Model weight memory pressure: weight quantization.
- Accuracy loss after quantization: representative calibration, less aggressive precision, per-channel/per-group scaling.
- Decode loop has CPU launch overhead: CUDA Graphs.
- Need faster generation without changing output distribution much: speculative decoding with a small aligned draft model.

### Layer 3: Model serving and deployment

This layer answers: "How do we expose the model as a reliable production service?"

Main NVIDIA tools:

- Triton Inference Server.
- NVIDIA NIM.
- Kubernetes and Helm deployment patterns.
- NGC containers.
- Prometheus and OpenTelemetry metrics.
- Load balancers, canary deployments, autoscaling, warm pools.

What this layer is used for:

- Hosting models behind APIs.
- Dynamic batching.
- Multi-model serving.
- Model ensembles.
- Request routing.
- Production rollout.
- Health checks, metrics, and autoscaling.

Typical exam signals:

- "Need a standard enterprise API quickly."
- "Need OpenAI-compatible API."
- "Need to serve preprocessing, model, and postprocessing together."
- "Need different batching for chat and offline summarization."
- "p99 spikes during traffic bursts."
- "Cold starts are slow after autoscaling."

Correct instinct:

- Fastest enterprise packaged deployment: NIM.
- General serving framework for multiple models/backends: Triton.
- Need custom optimized LLM engine: TensorRT-LLM, often served through Triton or NIM.
- Need pipeline of tokenizer, model, classifier, postprocessor: Triton ensemble.
- Chat and batch summarization have opposite latency/throughput needs: separate endpoints or separate model instances with different configs.
- Cold start issue: warm pool, model warmup, predictive scaling, pre-loaded engines.

### Layer 4: LLM application layer

This layer answers: "How does the application use the model to solve a user problem?"

Main concepts:

- Prompt engineering.
- RAG.
- Embedding models.
- Vector databases.
- Rerankers.
- Tool calling and function calling.
- Structured generation.
- Prompt caching.
- Conversation memory.
- User/session routing.

What this layer is used for:

- Customer support chatbots.
- Internal document Q&A.
- Code assistants.
- Long-document summarization.
- Search plus answer systems.
- Agentic workflows.

Typical exam signals:

- "The answer is fluent but not grounded."
- "The retriever returns irrelevant context."
- "The model cites documents that do not support the answer."
- "The model calls nonexistent functions."
- "Adding more context made accuracy worse."
- "The prompt prefix is stable across requests."

Correct instinct:

- Hallucination in RAG: check retrieval relevance, context packing, grounding prompt, and citation validation.
- Irrelevant context hurts accuracy: use reranking and selective context inclusion.
- Need strict JSON/tool names: constrained decoding or schema-enforced generation, not prompt-only wording.
- Stable system prompt reused across calls: prefix caching.
- Long-document Q&A: chunking, metadata filters, reranking, citation requirements, access control.

### Layer 5: Safety, governance, and reliability

This layer answers: "How do we keep the system safe, compliant, stable, and measurable?"

Main NVIDIA tools and concepts:

- NeMo Guardrails.
- NeMo Evaluator in microservice workflows.
- Content safety classifiers.
- PII detection.
- Prompt injection defenses.
- Tool-use policy.
- Human review workflows.
- Red teaming.
- Audit logging.
- Production monitoring.

What this layer is used for:

- Preventing unsafe outputs.
- Preventing data leakage.
- Reducing hallucinations.
- Controlling tool calls.
- Monitoring quality drift.
- Monitoring retrieval failures.
- Managing compliance.

Typical exam signals:

- "The model follows malicious instructions inside retrieved documents."
- "Users can access documents from another tenant."
- "The chatbot gives unsafe advice."
- "A deployment caused hallucinations to spike."
- "A canary passed infrastructure metrics but failed quality."

Correct instinct:

- Prompt injection in retrieved docs: instruction hierarchy, retrieval sanitization, guardrails, tool allowlists, never treating retrieved text as instructions.
- Cross-tenant data leakage: access control and retrieval filtering before generation, not just output filtering.
- Unsafe output: input/output moderation, guardrails, policy checks, red-team cases.
- Quality drift: monitor golden sets, LLM-as-judge with bias checks, retrieval metrics, canary prompts, user feedback.

## NVIDIA Services and Tools: What They Are and Where They Are Used

### CUDA

CUDA is the low-level GPU programming and execution platform. Most engineers do not directly write CUDA kernels for every LLM application, but CUDA is underneath PyTorch, TensorRT-LLM, Triton backends, custom kernels, fused attention, and GPU profiling.

Use CUDA concepts when the problem is about:

- GPU execution.
- Kernel launch overhead.
- Memory transfers.
- Tensor Core utilization.
- Custom kernels.
- Fused operations.

Do not choose CUDA when the real issue is:

- RAG retrieval quality.
- Prompt formatting.
- Model safety policy.
- Endpoint autoscaling policy.

### TensorRT

TensorRT is NVIDIA's inference optimization runtime for trained neural networks. It optimizes model graphs, chooses efficient kernels, performs precision optimization, and builds efficient inference engines.

Use TensorRT concepts when the problem is about:

- Optimizing a trained model for inference.
- Lowering latency.
- Using FP16, INT8, or other reduced precision.
- Converting ONNX or framework models to an optimized runtime.

TensorRT is general. TensorRT-LLM is specialized for LLMs.

### TensorRT-LLM

TensorRT-LLM is the LLM-specific inference optimization stack. It is what you think about when the model is a decoder-only or encoder-decoder LLM and the bottleneck is generation speed, KV cache, continuous batching, long prompts, or multi-GPU inference.

Use TensorRT-LLM when the problem is about:

- Optimized LLM inference.
- Paged KV cache.
- In-flight batching.
- Chunked prefill.
- Tensor parallelism for inference.
- FP8, INT8, INT4, AWQ, SmoothQuant.
- Speculative decoding.
- Fused attention.
- Building an engine from a Hugging Face or NeMo model.

Typical wrong answer trap:

- The question says long-context inference is OOM. Choosing weight quantization may help some, but the real pressure is often KV cache, so the better answer is KV-cache optimization or context management.

### Triton Inference Server

Triton is NVIDIA's general production inference server. It can serve models from multiple backends and provides scheduling, batching, model repository management, concurrent model execution, ensembles, metrics, and deployment-friendly APIs.

Use Triton when the problem is about:

- Serving one or more models behind an API.
- Dynamic batching.
- Model repository configuration.
- `config.pbtxt`.
- `preferred_batch_size`.
- `max_queue_delay_microseconds`.
- `instance_group`.
- Serving multiple model backends.
- Ensembles such as tokenizer to model to safety classifier.
- Inference metrics and model analyzer.

Typical wrong answer trap:

- More `instance_group` count is not always better. Multiple instances on one GPU can compete for memory and compute. Profile before increasing it.

### NVIDIA NIM

NIM means NVIDIA Inference Microservice. Think of it as the packaged enterprise deployment layer for optimized models. NIM gives a containerized, supported way to deploy models with a stable API and model profile, often using optimized engines under the hood.

Use NIM when the problem is about:

- Fastest production path for an enterprise LLM API.
- OpenAI-compatible API behavior.
- Containerized deployment.
- NGC-published model artifacts.
- Kubernetes or Helm deployment.
- Standardized operations instead of custom engine building.
- A supported deployment path for business applications.

Typical wrong answer trap:

- NIM is not the training framework. For fine-tuning or customization, think NeMo. For low-level engine tuning, think TensorRT-LLM. For general serving composition, think Triton.

### NGC Catalog

NGC is NVIDIA's catalog for GPU-optimized software, containers, models, Helm charts, and SDK resources.

Use NGC when the problem is about:

- Pulling NVIDIA containers.
- Finding optimized model artifacts.
- Deploying NIM containers.
- Accessing enterprise software packages.
- Standardizing deployment artifacts.

### NeMo Framework

NeMo Framework is the model development and customization framework for generative AI. Think of NeMo when the model behavior or training process needs to change.

Use NeMo Framework when the problem is about:

- SFT.
- PEFT.
- LoRA.
- QLoRA.
- Model customization.
- Distributed training recipes.
- Alignment workflows.
- Preparing a model before optimized deployment.

Typical wrong answer trap:

- If the model needs updated facts from private documents, RAG is usually the first answer. Fine-tuning with NeMo is better when the model needs a stable behavior, format, domain style, or task skill.

### NeMo Guardrails

NeMo Guardrails is for adding programmable dialog and safety controls around LLM applications. It is not just a classifier. It helps define flows, allowed behavior, tool-use constraints, and checks around input, output, retrieval, and conversation logic.

Use NeMo Guardrails when the problem is about:

- Refusal behavior.
- Topic restriction.
- Input/output safety checks.
- Tool-use governance.
- Conversation flow control.
- RAG groundedness checks.
- Preventing unsafe or policy-breaking responses.

Typical wrong answer trap:

- Guardrails do not replace access control. If the question is about one tenant seeing another tenant's documents, fix retrieval permissions before generation.

### NeMo Microservices and NeMo Platform

NeMo Microservices are enterprise services around the generative AI lifecycle. Depending on setup, they can include services for customization, evaluation, deployment management, guardrails, entity/model management, and data flywheel workflows.

Use NeMo Microservices when the problem is about:

- Enterprise lifecycle management.
- Customization workflows.
- Evaluation workflows.
- Deploying and managing NIMs in Kubernetes.
- Building a repeatable data flywheel.
- Integrating model customization, evaluation, and deployment.

### NCCL

NCCL is NVIDIA's collective communication library for multi-GPU and multi-node work. It is critical for distributed training and sometimes distributed inference.

Use NCCL when the problem is about:

- All-reduce.
- All-gather.
- Reduce-scatter.
- Broadcast.
- All-to-all.
- Tensor parallel communication.
- Data parallel gradient synchronization.
- Multi-node training slowdown.
- Collective hangs.

Typical wrong answer trap:

- If a job hangs around all-reduce, increasing batch size or changing the tokenizer is not the first fix. Inspect rank desynchronization, NCCL logs, topology, network, and collective configuration.

### Nsight Systems

Nsight Systems is a timeline profiler. Use it when you need to understand where time is going across CPU, GPU, CUDA APIs, kernels, synchronization, memory copies, and scheduling.

Use Nsight Systems when the problem is about:

- Kernel gaps.
- CPU launch overhead.
- Host-device synchronization.
- Data loading stalls.
- End-to-end timeline bottlenecks.

### Nsight Compute

Nsight Compute is a kernel-level profiler. Use it when you already know which kernel is hot and need to understand why it is inefficient.

Use Nsight Compute when the problem is about:

- Memory-bound kernels.
- Compute-bound kernels.
- Tensor Core utilization.
- Occupancy.
- Warp divergence.
- Memory coalescing.
- Roofline analysis.

### NVIDIA SMI

NVIDIA SMI is a basic command-line monitoring tool for GPU status.

Use it for:

- GPU memory usage.
- GPU utilization.
- Driver and CUDA information.
- Active processes.
- Temperature and power.

Do not confuse it with Nsight. SMI tells you what is happening at a high level. Nsight tells you why.

### RAPIDS

RAPIDS is NVIDIA's GPU-accelerated data science ecosystem. In an LLM exam, it is less central than TensorRT-LLM, Triton, NIM, NeMo, NCCL, and Nsight, but it can appear in data preprocessing or analytics scenarios.

Use RAPIDS when the problem is about:

- GPU-accelerated DataFrame processing with cuDF.
- GPU-accelerated ML with cuML.
- Large preprocessing workloads before training or embedding.
- Similar pandas-style operations that need GPU speed.

## Topic-to-Tool Map

### Quantization

Quantization means representing weights, activations, or KV cache with fewer bits to reduce memory and improve speed.

Where it is used:

- TensorRT-LLM for optimized LLM inference.
- TensorRT Model Optimizer for quantization workflows.
- NIM when the optimized model profile already includes quantized engines.
- NeMo when preparing or optimizing models before deployment.

Main types:

- FP16/BF16: common baseline for modern training and inference.
- FP8: strong on Hopper/H100-class hardware when scaling factors are calibrated properly.
- INT8: common inference precision, but activation outliers matter.
- INT4: aggressive weight compression, often used as weight-only quantization.
- KV-cache INT8 or FP8: targets long-context request memory.

Methods to know:

- SmoothQuant: helps INT8 by moving activation outlier difficulty into weights.
- AWQ: activation-aware weight quantization. Often strong for 4-bit weight-only LLM inference.
- GPTQ-style quantization: post-training quantization using calibration and approximate second-order information.
- FP8 scaling: needs good per-tensor or per-block scaling and representative data.

Decision rules:

- Need to reduce model weight memory: weight quantization.
- Need to reduce long-context memory: KV-cache quantization or reduce KV heads with MQA/GQA.
- Need tight accuracy tolerance: use representative calibration and less aggressive precision.
- Domain-specific model, such as medical or legal: calibrate on domain data.
- Quality collapsed after INT8: suspect activation outliers, bad calibration, global scales, or too aggressive activation quantization.
- Synthetic calibration data is usually bad for LLM production quality.

### Batching and scheduling

Batching combines work to improve GPU utilization. Scheduling decides which requests get processed and when.

Where it is used:

- TensorRT-LLM for in-flight batching and chunked prefill.
- Triton for dynamic batching, queue delay, preferred batch size, and instance scheduling.
- NIM as the packaged serving layer may expose or use optimized scheduling internally.

Main types:

- Static batching: fixed batch shapes. Good for predictable offline jobs, weak for mixed chat traffic.
- Dynamic batching: server combines nearby requests into batches. Common in Triton.
- In-flight batching: live generation scheduler where requests enter and leave continuously. Critical for chat LLMs.
- Chunked prefill: splits long prompt prefill so long prompts do not block decode for everyone else.

Decision rules:

- Real-time chat with mixed prompt and output lengths: in-flight batching.
- Small independent requests in a generic model server: Triton dynamic batching.
- p99 latency high because requests wait too long for larger batches: reduce max queue delay.
- Long prompt blocks other users: chunked prefill.
- Batch summarization or offline processing: larger batches and higher queue delay are acceptable.
- Chat and batch workloads together: split endpoints or use separate model instances with different batching configs.

### KV cache

KV cache stores key and value tensors from previous tokens so the model does not recompute attention over the whole sequence during every decode step.

Where it is used:

- TensorRT-LLM.
- NIM/Triton when serving optimized LLM engines.
- Any LLM inference engine.

Why it matters:

- KV cache grows with batch size, sequence length, number of layers, hidden size, and precision.
- Long context can make KV cache dominate memory more than model weights.
- Fragmentation becomes a problem when many users have different sequence lengths.

Decision rules:

- Long-context summarization OOM: think KV cache before model weights.
- Many mixed-length chats: paged KV cache.
- Same prefix reused across users: prefix caching can reduce repeated prefill.
- Need lower memory without retraining: KV-cache quantization.
- Model architecture uses MQA/GQA: KV cache is smaller than full MHA.

### Fine-tuning and adaptation

Fine-tuning modifies model behavior by updating weights or adapters.

Where it is used:

- NeMo Framework.
- NeMo Customizer or enterprise customization workflows.
- Later deployment can use TensorRT-LLM or NIM after tuning.

Methods:

- Prompting: no weight changes.
- RAG: no weight changes, external knowledge added at inference.
- LoRA: train low-rank adapter weights while freezing the base model.
- QLoRA: quantize the base model and train adapters to save memory.
- SFT: supervised fine-tuning on instruction or task data.
- Continued pretraining: train on unlabeled domain corpus to shift domain distribution.
- DPO/RLHF/PPO/GRPO: preference/alignment optimization.

Decision rules:

- Need latest/private knowledge: RAG first.
- Need consistent format or style: LoRA or SFT.
- Limited GPU memory: QLoRA.
- Need strongest adaptation and enough data/compute: full SFT.
- Need preference behavior: DPO or RLHF-style workflow.
- Model became worse at general tasks: catastrophic forgetting or over-narrow data.

### RAG and retrieval

RAG combines retrieval from external knowledge with generation.

Where it is used:

- Application layer.
- NeMo Retriever or embedding NIMs in NVIDIA ecosystem.
- NIM for LLM generation.
- NeMo Guardrails for groundedness and policy checks.
- Vector database or search system outside NVIDIA stack.

Components:

- Document ingestion.
- Chunking.
- Embedding.
- Indexing.
- Metadata filtering.
- Retrieval.
- Reranking.
- Context packing.
- Prompting.
- Citation validation.
- Groundedness evaluation.

Decision rules:

- Model answers are fluent but false: check retrieval and grounding before fine-tuning.
- Retriever returns many irrelevant chunks: reranker and better chunking.
- Context window is large but quality drops: selective context beats dumping everything.
- Private documents: enforce access control before retrieval, not only after generation.
- New documents not reflected: index freshness and ingestion pipeline.
- Sources cited but unsupported: citation validation and faithfulness evaluation.

### Model deployment

Deployment is how a trained or optimized model becomes a production API.

Where it is used:

- NIM for packaged production microservices.
- Triton for serving many model types and ensembles.
- TensorRT-LLM for optimized engine generation.
- Kubernetes, Helm, Prometheus, OpenTelemetry.

Deployment patterns:

- Single real-time chat endpoint.
- Separate real-time and batch endpoints.
- Canary deployment for new model versions.
- Blue-green deployment for safe switching.
- Multi-region deployment for global availability.
- Warm pool to reduce cold starts.
- Routing smaller tasks to smaller models.

Decision rules:

- Need production fast with standard API: NIM.
- Need model orchestration and ensembles: Triton.
- Need custom LLM optimization: TensorRT-LLM.
- Need many users: plan by tokens, not just users.
- Need low latency and offline summarization: separate endpoints.
- Need safe rollout: canary with quality checks, not just CPU/GPU metrics.

### Monitoring and reliability

Monitoring is not only uptime. LLM monitoring must track both system behavior and answer quality.

Where it is used:

- Triton metrics.
- NIM metrics.
- Prometheus/Grafana/OpenTelemetry.
- Application logs.
- Evaluation pipelines.
- NeMo Evaluator style workflows.

Metrics:

- TTFT.
- Inter-token latency.
- p95/p99 latency.
- Tokens/sec.
- GPU utilization.
- KV cache usage.
- Queue delay.
- Error rate.
- Timeout rate.
- Cost per request.
- Retrieval relevance.
- Faithfulness.
- Citation support.
- Refusal rate.
- Toxicity/safety rate.
- User feedback.

Decision rules:

- Latency spike: check queueing, batch settings, GPU memory, traffic mix, cold starts.
- Hallucination spike: check retriever, index, prompt, model version, deployment time.
- GPU underutilized but latency high: CPU preprocessing, network, queueing, synchronization, or inefficient scheduling.
- Canary looks healthy on infra but users complain: add quality evaluation and output distribution checks.

### Safety and governance

Safety controls reduce harmful behavior, leakage, injection, and compliance risk.

Where it is used:

- NeMo Guardrails.
- Application policy layer.
- Retrieval access control.
- Tool execution layer.
- Monitoring and audit logs.

Threats:

- Direct prompt injection.
- Indirect prompt injection inside retrieved documents.
- Tool misuse.
- PII leakage.
- Cross-tenant data leakage.
- Toxic or unsafe output.
- Hallucinated citations.
- Model drift after deployment.

Decision rules:

- Untrusted retrieved text says "ignore instructions": treat retrieved text as data, not instructions.
- Tool calls can affect real systems: tool allowlist, schema validation, human approval for high-risk actions.
- Private knowledge base: enforce permissions during retrieval.
- Unsafe output: guardrails plus output classifier plus policy-specific evaluation.
- Compliance: audit logs, retention policy, red-team tests, human review.

## Production Architecture Patterns

### Pattern 1: Production chat for millions of users

Goal: low TTFT, smooth streaming, high availability, controlled cost.

Typical architecture:

1. API gateway receives user request.
2. Auth and rate limiting validate user and quota.
3. Router classifies request by task, language, risk, and complexity.
4. Prompt builder assembles system prompt, conversation context, and optional retrieved context.
5. Safety input check blocks unsafe or malicious requests.
6. NIM or Triton endpoint serves an optimized TensorRT-LLM engine.
7. Streaming output goes through optional output safety checks.
8. Logs and metrics go to monitoring and evaluation pipelines.
9. Canary/golden-set evaluation checks quality after deployments.

What to be careful about:

- Do not plan capacity by user count alone. Plan by peak tokens per second.
- Separate real-time chat from offline summarization.
- Keep a warm pool because loading a 70B model is slow.
- Monitor TTFT and p99, not just average latency.
- Route simple requests to smaller models when possible.
- Use prompt caching for stable prefixes.
- Use KV-cache management for long conversations.
- Put strict limits on max input and output tokens.

NVIDIA mapping:

- NIM: packaged inference microservice.
- TensorRT-LLM: optimized engine.
- Triton: serving, batching, ensembles, metrics if used directly.
- NeMo Guardrails: safety and dialog controls.
- Nsight: performance profiling.
- NCCL/NVLink/InfiniBand: if distributed inference is needed.

### Pattern 2: Enterprise RAG Q&A

Goal: answer using internal documents without leaking data.

Typical architecture:

1. Ingestion pipeline loads documents.
2. Documents are cleaned, split, deduplicated, and tagged with metadata.
3. Embedding model converts chunks to vectors.
4. Vector index stores embeddings with permissions and metadata.
5. Query is embedded and filtered by user permissions.
6. Retriever returns candidates.
7. Reranker selects answer-bearing chunks.
8. Prompt builder includes only relevant evidence.
9. LLM generates answer with citations.
10. Groundedness and citation checks validate output.
11. Monitoring tracks retrieval relevance and answer faithfulness.

What to be careful about:

- Access control must happen before retrieval.
- More context is not always better.
- Reranking often matters more than changing the model.
- Missing documents produce hallucinations if the prompt does not allow "I don't know."
- Document freshness must be monitored.
- Indirect prompt injection from documents must be treated as untrusted text.

NVIDIA mapping:

- Embedding NIM or compatible embedding service: vectorization.
- NIM LLM: generation.
- NeMo Guardrails: groundedness, topic control, safety flows.
- NeMo Evaluator: evaluation workflows if available in setup.
- Triton: custom multi-model serving or reranker/model ensembles.

### Pattern 3: Offline document summarization

Goal: maximize throughput and reduce cost. Real-time TTFT is less important.

Typical architecture:

1. Batch queue receives documents.
2. Preprocessor chunks or structures documents.
3. Worker groups batch similar-length jobs.
4. Larger batch endpoint runs summarization.
5. Output validator checks length, format, and factuality.
6. Results are written to storage.

What to be careful about:

- Use larger batches than chat.
- Higher queue delay may be acceptable.
- Separate endpoint from chat to avoid p99 spikes.
- Use long-context memory planning.
- Monitor cost per document and token throughput.

NVIDIA mapping:

- Triton dynamic batching or batch-serving configuration.
- TensorRT-LLM optimized engine.
- NIM if using packaged LLM deployment.
- Nsight if GPU utilization is unexpectedly low.

### Pattern 4: Fine-tuning pipeline

Goal: adapt the model safely and validate before deployment.

Typical architecture:

1. Define target behavior and success metrics.
2. Collect and clean training examples.
3. Split train, validation, and test sets.
4. Choose LoRA, QLoRA, SFT, or continued pretraining.
5. Train with NeMo or compatible framework.
6. Evaluate on task metrics, safety metrics, and regression sets.
7. Convert or optimize for inference.
8. Deploy behind canary.
9. Monitor quality and rollback if needed.

What to be careful about:

- Fine-tuning does not reliably add frequently changing facts.
- Bad or narrow training data causes catastrophic forgetting.
- Training loss alone is not enough.
- Evaluate format adherence, factuality, safety, and latency after deployment.
- Quantization after fine-tuning can change quality, so validate again.

NVIDIA mapping:

- NeMo Framework: tuning.
- TensorRT-LLM: optimized inference after tuning.
- NIM or Triton: deployment.
- NeMo Evaluator or custom eval: evaluation.

## Decision Matrices

### Which NVIDIA tool should I choose?

| Scenario | Best NVIDIA layer |
| --- | --- |
| Need optimized LLM inference engine | TensorRT-LLM |
| Need packaged production LLM API | NIM |
| Need general model server with batching and ensembles | Triton |
| Need model fine-tuning or PEFT | NeMo Framework |
| Need dialog safety, topic control, tool governance | NeMo Guardrails |
| Need multi-GPU communication tuning | NCCL |
| Need timeline profiling | Nsight Systems |
| Need kernel-level profiling | Nsight Compute |
| Need GPU status quickly | NVIDIA SMI |
| Need GPU-accelerated DataFrame preprocessing | RAPIDS cuDF |
| Need containers/models/Helm charts | NGC |

### Which optimization should I choose?

| Bottleneck | First concepts to consider |
| --- | --- |
| Model weights too large | Weight quantization, smaller model, distillation, tensor parallelism |
| Long context OOM | KV cache, KV-cache quantization, MQA/GQA, context compression |
| Low TTFT | Chunked prefill, smaller model, prompt compression, warm pool, TensorRT-LLM |
| Slow token streaming | Fused attention, CUDA Graphs, tensor parallel tuning, KV cache efficiency |
| Low throughput | Continuous batching, dynamic batching, quantization, routing, larger batch endpoint |
| p99 latency spikes | Queue delay, workload separation, cold starts, burst scaling, tail monitoring |
| Multi-node training slow | NCCL, topology, InfiniBand, communication volume, parallelism layout |
| Model quality dropped after quantization | Calibration data, precision choice, per-channel scaling, domain validation |
| RAG hallucination | Retrieval relevance, reranking, grounding, citation validation, index freshness |
| Unsafe output | Guardrails, classifiers, tool policy, red teaming, human review |

### RAG vs prompt engineering vs fine-tuning

| Need | Best starting point |
| --- | --- |
| Answer from new private documents | RAG |
| Better output format | Prompting or LoRA |
| Consistent domain style | LoRA or SFT |
| New factual knowledge that changes often | RAG |
| New task skill with stable examples | SFT or LoRA |
| Preference alignment | DPO or RLHF-style workflow |
| Safety behavior | Guardrails plus fine-tuning only if needed |
| Lower latency | Smaller model, quantization, TensorRT-LLM, routing |

## Exam Trap Patterns

### Trap 1: Solving parameter memory when the real problem is KV cache

Question signal:

- Long context.
- Many concurrent conversations.
- 32K or 128K context.
- Memory grows with sequence length.

Bad instinct:

- Choose only weight quantization.

Better instinct:

- KV-cache quantization, paged KV cache, MQA/GQA, context compression, chunked prefill.

### Trap 2: Solving throughput while violating TTFT

Question signal:

- Chat must start quickly.
- First token SLA.
- Users complain about waiting before output starts.

Bad instinct:

- Increase batch size or queue delay aggressively.

Better instinct:

- In-flight batching, lower queue delay, chunked prefill, workload separation.

### Trap 3: Fine-tuning when RAG is enough

Question signal:

- Need latest policy documents.
- Need private enterprise knowledge.
- Facts change often.

Bad instinct:

- Fine-tune the model.

Better instinct:

- RAG with access control, reranking, freshness, and groundedness evaluation.

### Trap 4: Guardrails instead of real access control

Question signal:

- Tenant A can see Tenant B documents.
- Unauthorized documents appear in context.

Bad instinct:

- Output filter only.

Better instinct:

- Enforce permissions before retrieval and context construction.

### Trap 5: More GPUs without communication reasoning

Question signal:

- Scaling worsens beyond one node.
- All-reduce or all-to-all dominates.
- NCCL hangs.

Bad instinct:

- Add more GPUs.

Better instinct:

- Inspect parallelism layout, NCCL transport, topology, RDMA, rank synchronization.

### Trap 6: Bigger model for retrieval failure

Question signal:

- Answer quality drops only when retrieved context is irrelevant or empty.
- Hallucinations spike after index update.

Bad instinct:

- Use larger LLM.

Better instinct:

- Fix retriever, reranker, index freshness, metadata filters, and prompt grounding.

### Trap 7: Prompt-only JSON control

Question signal:

- Strict JSON schema.
- Function calls occasionally invalid.
- Nonexistent functions are called.

Bad instinct:

- Add "please output valid JSON".

Better instinct:

- Structured generation, constrained decoding, schema validation, declared tool list.

## Scenario Drills Without Answer Keys

Use these drills to test concept mapping. For each one, write the phase, bottleneck, constraint, NVIDIA layer, and likely fix.

### Drill 1

A 70B chat model serves mixed prompt lengths from 200 to 4,000 tokens. Average latency is fine, but p99 TTFT violates the SLA during bursts.

Expected reasoning:

- Phase: inference serving.
- Bottleneck: queueing and prefill scheduling.
- Constraint: p99 TTFT.
- NVIDIA layer: TensorRT-LLM and Triton/NIM serving config.
- Concepts: in-flight batching, paged KV cache, chunked prefill, lower max queue delay, separate workloads.

### Drill 2

A legal RAG assistant gives polished answers, but the citations do not support the final claims.

Expected reasoning:

- Phase: RAG evaluation and safety.
- Bottleneck: grounding and citation validity.
- Constraint: factuality/compliance.
- NVIDIA layer: application layer plus NeMo Guardrails/Evaluator if used.
- Concepts: retrieval relevance, reranking, citation validation, answer faithfulness, "answer only from context" prompt.

### Drill 3

A fine-tuned model follows the new company style but loses broad reasoning ability.

Expected reasoning:

- Phase: fine-tuning.
- Bottleneck: data distribution and training setup.
- Constraint: preserve general capability.
- NVIDIA layer: NeMo customization.
- Concepts: catastrophic forgetting, data mixing, lower learning rate, shorter tuning, adapter methods, regression evaluation.

### Drill 4

A multi-node training job is fast on one node but throughput collapses on eight nodes.

Expected reasoning:

- Phase: distributed training.
- Bottleneck: communication.
- Constraint: step time.
- NVIDIA layer: NCCL and network topology.
- Concepts: all-reduce volume, tensor parallel across nodes, InfiniBand, GPUDirect RDMA, hierarchical collectives.

### Drill 5

An autoscaled LLM endpoint saves money overnight but morning users see very slow first requests.

Expected reasoning:

- Phase: deployment.
- Bottleneck: cold start.
- Constraint: user-facing latency.
- NVIDIA layer: NIM/Triton deployment on Kubernetes.
- Concepts: warm pool, minimum replicas, model warmup, predictive scaling, preloaded engines.

### Drill 6

A 32K summarization endpoint runs out of memory even after INT4 weight quantization.

Expected reasoning:

- Phase: inference optimization.
- Bottleneck: KV cache, not model weights.
- Constraint: long context memory.
- NVIDIA layer: TensorRT-LLM.
- Concepts: KV-cache quantization, MQA/GQA, paged KV cache, reduce batch size, context compression.

### Drill 7

A tool-calling assistant sometimes invents a function name that does not exist.

Expected reasoning:

- Phase: application safety/tool use.
- Bottleneck: output constraint enforcement.
- Constraint: valid tool calls.
- NVIDIA layer: application layer, NIM structured generation if available, guardrails.
- Concepts: constrained decoding, schema validation, allowed function list, reject invalid calls.

### Drill 8

GPU utilization is only 35 percent during LLM serving, but the request queue is growing.

Expected reasoning:

- Phase: serving/profiling.
- Bottleneck: likely CPU preprocessing, scheduling, synchronization, or kernel launch overhead.
- Constraint: throughput and queue delay.
- NVIDIA layer: Triton/NIM metrics, Nsight Systems.
- Concepts: dynamic batching, tokenizer bottleneck, host-device sync, CUDA Graphs, model analyzer.


## Core Production Metrics

### TTFT

**Time to first token** is the time between a user request and the first generated token.

For chat, TTFT is often more important than total generation time because users judge whether the system feels responsive from the first visible token.

TTFT is affected by:

- Prompt length
- Prefill speed
- Queueing delay
- Cold starts
- Model size
- Batch scheduling
- Engine optimization
- Network overhead

If a question says “chat must feel instant” or “first token under 200 ms,” think about TTFT.

### Inter-token latency

Inter-token latency is the delay between generated tokens after streaming begins.

It is affected by:

- Decode loop efficiency
- CUDA graph use
- Fused kernels
- KV cache access
- Tensor parallel communication
- Batch size

If streaming starts fast but feels slow token by token, focus on decode performance.

### Throughput

Throughput is how many tokens or requests the system can serve per second.

For LLM serving, token throughput is more useful than request throughput because requests can vary widely in length.

Throughput improves with:

- Continuous batching
- Dynamic batching
- Quantization
- TensorRT-LLM engines
- Efficient KV cache
- Proper tensor parallelism
- Avoiding CPU bottlenecks

### Tail latency

p95 and p99 latency measure slow requests. Enterprise users care about p99 because rare slow requests are often what create complaints.

Tail latency gets worse with:

- Bursty traffic
- Too much queueing for batching
- Cold starts
- Long prompts blocking shorter prompts
- Shared endpoints for different workloads
- GPU memory pressure
- CPU preprocessing bottlenecks

### Cost per request

Cost is usually driven by GPU time, model size, sequence length, and wasted computation.

Cost can be reduced by:

- Smaller models
- Model routing
- Quantization
- Prompt compression
- Better retrieval
- Caching
- Batch endpoints for offline work
- Avoiding unnecessary long contexts

## NVIDIA Ecosystem Map

## CUDA

CUDA is NVIDIA's GPU programming platform. You do not need to write CUDA kernels for most LLM deployment roles, but you must understand what problems CUDA-level optimization solves.

LLMs are dominated by large matrix multiplications, attention kernels, memory movement, and repeated decode steps. GPUs are fast because they execute many parallel numerical operations efficiently, but real-world serving can still be slow if the workload is poorly scheduled.

CUDA-related exam signals:

- **Long gaps between GPU kernels** often mean CPU launch overhead or synchronization.
- **High GPU memory bandwidth usage with low arithmetic intensity** means a memory-bound kernel.
- **Low GPU utilization** can mean the GPU is waiting for CPU preprocessing, network communication, batching, or I/O.
- **Many tiny kernels during decoding** can benefit from CUDA Graphs or fused kernels.

### CUDA Graphs

CUDA Graphs capture a sequence of GPU operations and replay them with lower CPU launch overhead. They are useful when the decode loop repeatedly executes similar operations.

Use CUDA Graphs when:

- Autoregressive decoding has many small kernel launches.
- Nsight Systems shows CPU-side gaps between kernels.
- Input shapes are stable enough to reuse captured graphs.

Avoid assuming CUDA Graphs solve:

- Poor retrieval quality
- Bad prompt design
- Model accuracy regressions
- Cross-node communication bottlenecks

## TensorRT-LLM

TensorRT-LLM is NVIDIA's optimized inference stack for large language models. It is lower-level than NIM and more LLM-specific than generic Triton serving.

TensorRT-LLM focuses on:

- Building optimized LLM engines
- Fused attention kernels
- Quantized inference
- Continuous batching
- Paged KV cache
- Chunked prefill
- Parallelism across GPUs
- Faster decode loops

Think of TensorRT-LLM as the engine optimization layer.

### Static batching vs dynamic batching vs continuous batching

Static batching fixes a batch shape. It is simple but weak for chat because prompt and output lengths vary.

Dynamic batching groups requests arriving close together. Triton supports dynamic batching and can improve throughput for many models.

Continuous batching, also called in-flight batching, is especially important for LLM generation. Requests can join and leave while generation is running. A request that finishes does not force the whole batch to finish.

Use continuous batching when:

- Requests have variable prompt length.
- Requests have variable output length.
- Traffic is live and high-concurrency.
- You need high throughput without destroying latency.

### Paged KV cache

During generation, transformers store key and value tensors for previous tokens. This state is the KV cache.

KV cache memory grows with:

- Batch size
- Number of layers
- Number of KV heads
- Head dimension
- Sequence length
- Precision

For long-context workloads, KV cache can dominate memory more than weights.

Paged KV cache stores KV memory in blocks rather than one large contiguous allocation. It reduces fragmentation and improves utilization when requests have different lengths.

Use paged KV cache when:

- Mixed-length requests waste memory.
- High concurrency causes memory fragmentation.
- Long-context workloads need better memory reuse.

### Chunked prefill

LLM inference has two phases:

- **Prefill** processes the prompt.
- **Decode** generates new tokens one by one.

Long prompts create expensive prefill work. If a long prompt blocks everyone else, TTFT and p99 latency suffer.

Chunked prefill splits long prompt processing into smaller chunks so decode work can be interleaved. It reduces head-of-line blocking.

Use chunked prefill when:

- Users submit long prompts.
- Short chat requests are delayed behind long contexts.
- GPU utilization is uneven because prefill dominates.

### TensorRT-LLM conversion issues

If converting a Hugging Face or fine-tuned model to TensorRT-LLM fails, the likely issue is not “the GPU is broken.” The likely issue is model architecture mapping or unsupported operators.

Check:

- Architecture support
- Custom layers
- Attention implementation
- RoPE variants
- Quantization compatibility
- Checkpoint format
- Plugin support
- Opset or export mismatch

## Triton Inference Server

Triton Inference Server is NVIDIA's general production serving layer. It can serve models from multiple frameworks and backends. TensorRT-LLM can run behind Triton.

Triton is about serving behavior:

- HTTP/gRPC endpoints
- Model repository structure
- Model configuration
- Dynamic batching
- Instance groups
- Ensembles
- Metrics
- Multi-model serving

### Dynamic batching

Triton dynamic batching waits briefly to combine requests into an efficient batch.

Important settings:

- `preferred_batch_size`
- `max_queue_delay_microseconds`
- Request queue policy
- Instance groups

If throughput is low, larger batches can help. If p99 latency is high, the queue delay may be too large.

The common trade-off:

- Longer queue delay can improve GPU utilization.
- Shorter queue delay improves latency.

### Instance groups

`instance_group` controls model instances per GPU or across GPUs.

More instances are not always better. Multiple model instances on one GPU may fight for memory, compute, and KV cache space.

Use more instances when:

- A model is small.
- One instance cannot keep the GPU busy.
- There is enough memory.

Avoid adding instances blindly for large LLMs.

### Ensembles

Triton ensembles combine multiple steps into one inference graph.

Examples:

- Tokenizer → LLM → detokenizer
- Preprocessor → model → postprocessor
- Retriever reranker → generator → safety classifier

Use ensembles when you want server-side orchestration and lower client complexity. For LLM systems, be careful because some steps, such as retrieval, may depend on external databases and application logic.

## NVIDIA NIM

NIM means NVIDIA Inference Microservice. It packages models as production-ready containers with optimized engines and a standard API surface.

NIM is the fastest NVIDIA-native path when a team wants supported enterprise deployment rather than building every serving component manually.

NIM gives you:

- Containerized model serving
- Optimized inference profiles
- OpenAI-compatible APIs for many LLM workflows
- Integration with Kubernetes and Helm
- Standardized observability patterns
- Enterprise deployment patterns
- Model profiles tied to hardware

Use NIM when:

- The company needs a supported production deployment.
- The model is available as a NIM profile.
- You want a standard API quickly.
- You do not need deep custom engine hacking.

Use TensorRT-LLM directly when:

- You need custom conversion.
- You need low-level engine tuning.
- You are optimizing unusual architectures.
- You need to inspect or modify inference internals.

Use Triton when:

- You need general model serving across different frameworks.
- You need custom model repository configurations.
- You need ensembles or multi-model serving.

## NeMo Framework

NeMo Framework is NVIDIA's framework for building and customizing generative AI models.

It is relevant for:

- Supervised fine-tuning
- PEFT
- LoRA
- QLoRA
- Distributed training recipes
- Model conversion
- Dataset preparation
- LLM customization

### SFT

Supervised fine-tuning updates model weights using labeled instruction data.

Use SFT when:

- Prompting is not consistent enough.
- The model needs a specific style or behavior.
- You have high-quality examples.
- You can afford training and validation.

Risks:

- Catastrophic forgetting
- Overfitting to narrow examples
- Losing general ability
- Memorizing sensitive data
- Format regressions

### LoRA

LoRA trains low-rank adapter matrices while keeping the base model frozen.

Use LoRA when:

- You need domain adaptation with limited compute.
- You want cheaper experiments.
- You want to keep base model unchanged.
- You need separate adapters for separate domains.

LoRA advantages:

- Much fewer trainable parameters
- Lower GPU memory need
- Faster iteration
- Easier adapter management

LoRA limitations:

- May not be enough for deep capability shifts.
- Adapter conflicts can happen.
- Bad training data still creates bad behavior.

### QLoRA

QLoRA quantizes the base model and trains adapters. It makes fine-tuning larger models possible with less memory.

Use QLoRA when:

- GPU memory is limited.
- Full fine-tuning is too expensive.
- You need to adapt a large model cheaply.

Trade-off:

- Great memory savings.
- Potentially slower or more complex training.
- Requires careful validation after merging or serving adapters.

### Continued pretraining

Continued pretraining exposes the model to more unlabeled domain text.

Use continued pretraining when:

- The domain language is very different.
- The model lacks domain vocabulary or patterns.
- You have a large high-quality corpus.

Do not choose continued pretraining when a small set of instructions or a RAG system solves the problem.

## NeMo Guardrails

NeMo Guardrails is for safety and conversation control around LLM applications.

It can help with:

- Input filtering
- Output filtering
- Topic restrictions
- Conversation flows
- Tool-use control
- RAG groundedness checks
- Refusal behavior
- Jailbreak mitigation

Guardrails are not magic. They are one layer.

Do not use guardrails as a replacement for:

- Authentication
- Authorization
- Document-level access control
- Human approval for risky actions
- Logging
- Audit trails
- Offline evaluation
- Red teaming

In production, use defense in depth:

1. Policy design
2. Input validation
3. Retrieval access control
4. Tool permissions
5. Model instructions
6. Guardrails
7. Output checks
8. Logging and monitoring
9. Human escalation

## NCCL

NCCL is NVIDIA's library for GPU communication. It matters when training or serving across multiple GPUs and nodes.

Common collectives:

- All-reduce
- All-gather
- Reduce-scatter
- Broadcast
- All-to-all

Where communication appears:

- Data parallelism uses gradient synchronization.
- Tensor parallelism communicates inside layers.
- Pipeline parallelism sends activations between stages.
- Expert parallelism uses all-to-all routing for MoE tokens.
- ZeRO/FSDP uses all-gather and reduce-scatter.

### NCCL failure signs

Suspect NCCL or communication when:

- Single-node training is fine but multi-node scaling collapses.
- Training hangs around collectives.
- Some ranks progress and others wait.
- GPU utilization is low while network traffic is high.
- Logs show timeout or rank desynchronization.

First diagnostics:

- Enable NCCL debug logging.
- Check rank timestamps.
- Verify InfiniBand or RDMA transport.
- Check topology.
- Check that every rank enters the same collective.

## Nsight Systems and Nsight Compute

Use Nsight Systems when you need a timeline. It answers: where did the time go?

Use Nsight Compute when you need kernel-level detail. It answers: why is this kernel inefficient?

### Nsight Systems patterns

| Symptom | Interpretation |
| --- | --- |
| Gaps between kernels | CPU launch overhead |
| Long memcpy blocks | Data transfer bottleneck |
| Collectives dominate | Communication-bound |
| GPU idle during requests | Scheduler/input bottleneck |
| Cold-start delay | Engine/model loading |

### Nsight Compute patterns

| Symptom | Interpretation |
| --- | --- |
| Low arithmetic intensity | Memory-bound |
| Tensor Cores underused | Kernel/precision issue |
| Low occupancy | Kernel launch/config issue |
| High memory transactions | Poor memory access pattern |

## LLM Architecture Concepts

## Transformer basics

Modern LLMs are usually decoder-only transformers for autoregressive generation.

A decoder-only model predicts the next token from previous tokens. It is naturally suited for chat, completion, summarization, and code generation.

Core components:

- Token embeddings
- Positional information
- Self-attention
- MLP/feed-forward layers
- Layer normalization
- Residual connections
- Output projection to vocabulary logits

## Attention

Attention lets each token look at other tokens and compute contextual representations.

Q, K, V:

- Query: what this token is looking for
- Key: what each token offers for matching
- Value: information to aggregate

The model computes similarity between queries and keys, then uses the result to weight values.

## MHA, MQA, and GQA

### Multi-head attention

MHA has multiple query, key, and value heads. It is expressive but KV cache is large.

### Multi-query attention

MQA uses multiple query heads but shares key/value heads. It reduces KV cache memory and improves serving efficiency.

### Grouped-query attention

GQA is between MHA and MQA. Groups of query heads share key/value heads.

Exam instinct:

- If long-context serving has KV-cache memory pressure, MQA or GQA is relevant.
- If quality is the only concern, full MHA may be stronger.
- If deployment efficiency matters, MQA/GQA can be attractive.

## RoPE

Rotary positional embeddings encode relative position by rotating hidden states. RoPE is common in modern LLMs.

Do not disable RoPE to optimize inference. It would break positional behavior.

Long-context extension methods often modify RoPE scaling, but they require validation. Extending context length is not just changing one number.

## MoE

Mixture-of-experts models activate only some experts per token. This increases parameter count without activating all parameters for every token.

Advantages:

- More capacity
- Lower active compute per token
- Good scaling potential

Problems:

- Expert load imbalance
- Routing instability
- All-to-all communication
- More complex serving
- Harder debugging

If some GPUs are saturated and others idle in MoE, suspect routing imbalance.

## Model Optimization

## Quantization

Quantization represents weights or activations with lower precision.

Why it helps:

- Smaller memory footprint
- Lower bandwidth use
- Higher throughput
- More models or larger batches per GPU

Why it can hurt:

- Accuracy loss
- Perplexity increase
- Domain benchmark regression
- Instability with activation outliers

### FP16 and BF16

FP16 has limited exponent range. BF16 has wider range and is often more stable for training.

For training, BF16 is often preferred on supported hardware because it reduces overflow and underflow risk.

### FP8

FP8 is important on Hopper-class GPUs. It gives high throughput, but scaling is critical.

Use domain-representative calibration or validation. A medical model should be calibrated and evaluated on medical text, not random generic prompts.

### INT8

INT8 can work well with calibration. SmoothQuant is one method for handling activation outliers.

If INT8 quantization causes large perplexity regression, suspect:

- Bad calibration data
- Outlier activations
- Wrong smoothing factor
- Per-tensor scaling too coarse

### INT4

INT4 is aggressive and usually weight-only for LLMs.

Common methods:

- AWQ
- GPTQ

AWQ protects important channels based on activation-aware analysis. GPTQ uses approximate second-order information. Both require validation.

Do not quantize blindly. Always check task metrics and production distribution.

## KV cache optimization

KV cache is often the real inference memory bottleneck.

KV cache grows with sequence length. Long context means huge KV cache.

Ways to reduce KV pressure:

- Paged KV cache
- KV-cache quantization
- MQA/GQA architecture
- Smaller batch size
- Shorter context
- Context compression
- Better retrieval to avoid unnecessary context

Exam instinct:

If the question says 32K or 128K context and OOM during inference, think KV cache before weight quantization.

## Speculative decoding

Speculative decoding uses a small draft model to propose tokens and a larger target model to verify them.

It helps when:

- The draft model is much cheaper.
- The draft model is aligned with the target.
- Acceptance rate is high.

A good draft model is often a small distilled model from the same family and instruction distribution.

A bad draft model is unrelated and has low acceptance. A larger teacher as draft defeats the purpose.

## Pruning

Pruning removes parts of the model.

Signs pruning went too far:

- Multi-step reasoning drops.
- Simple factual recall remains okay.
- Robustness declines.
- Long-context behavior worsens.

Pruning can reduce memory but may not always reduce latency unless the hardware and kernels exploit the sparsity.

## Distillation

Distillation trains a smaller student model from a larger teacher.

For LLMs, strong distillation usually combines:

- Supervised fine-tuning loss
- KL divergence between teacher and student distributions
- High-quality instruction data
- Validation on target tasks

Distillation is useful when a large model is too slow or expensive for production.

## GPU Acceleration and Distributed Training

## Memory categories in training

Training memory includes:

- Parameters
- Gradients
- Optimizer states
- Activations
- Temporary buffers

Adam optimizer is expensive because it stores momentum and variance states. Optimizer states can cause OOM during the optimizer step.

## Activation checkpointing

Activation checkpointing saves memory by not storing all activations. During backward pass, activations are recomputed.

Trade-off:

- Lower memory
- More compute
- Slower training

Use it when activation memory is the bottleneck.

## Mixed precision

Mixed precision speeds training and reduces memory. FP16 may need loss scaling to avoid gradient underflow. BF16 is usually more stable when supported.

Dynamic loss scaling multiplies the loss to keep gradients representable, then unscales before the optimizer update.

## Data parallelism

Each GPU has a full model copy. Each processes a different batch shard. Gradients are synchronized.

Good for:

- Models that fit on one GPU
- Simple scaling

Bad for:

- Models too large for one GPU
- Communication-heavy scaling at huge scale

## Tensor parallelism

A single layer is split across GPUs.

Good for:

- Huge layers
- Models that do not fit on one GPU
- Intra-node NVLink setups

Bad for:

- Excessive cross-node all-reduce
- Very high tensor parallel degree over slow networks

## Pipeline parallelism

Layers are split into stages. Microbatches flow through stages.

Problem:

- Pipeline bubbles

Bubble overhead is high when microbatch count is small relative to pipeline depth.

## FSDP and ZeRO

FSDP and ZeRO shard model states.

| Method | Shards |
| --- | --- |
| ZeRO-1 | Optimizer states |
| ZeRO-2 | Optimizer + gradients |
| ZeRO-3 | Optimizer + gradients + parameters |
| FSDP | Full parameter sharding |

Use ZeRO-3 or FSDP when model memory is too large.

Trade-off:

- Big memory savings
- More communication

## Expert parallelism

Expert parallelism is used for MoE models. Tokens are routed to experts across GPUs.

Common issue:

- Load imbalance

Fixes:

- Auxiliary load-balancing loss
- Capacity factor tuning
- Better routing
- Expert placement
- Monitoring per-expert load

## LLM Deployment Design

## NIM vs Triton vs TensorRT-LLM

| Need | Best fit |
| --- | --- |
| Enterprise packaged LLM API | NIM |
| Custom optimized LLM engine | TensorRT-LLM |
| General model serving | Triton |
| Multi-step server graph | Triton ensemble |
| Fine-tune/customize model | NeMo |
| Safety flow layer | NeMo Guardrails |

### NIM

Use NIM for a supported, standardized, containerized LLM deployment.

### TensorRT-LLM

Use TensorRT-LLM when inference performance and engine optimization are the main problem.

### Triton

Use Triton when serving behavior, batching, model repositories, and multi-model infrastructure are the main problem.

## Real-time chat vs offline summarization

Do not serve real-time chat and offline batch summarization through one identical endpoint configuration.

Chat needs:

- Low TTFT
- Streaming
- Low queue delay
- Stable p99 latency
- Smaller batch wait

Offline summarization needs:

- High throughput
- Larger batches
- Cost efficiency
- Longer queue tolerance

Better architecture:

- Separate endpoints
- Different batching configs
- Different autoscaling policies
- Shared model weights if possible
- Separate SLAs and metrics

## Cold starts

Cold starts happen when a new replica loads model weights, builds contexts, initializes CUDA, or loads TensorRT engines.

Mitigations:

- Minimum warm replicas
- Model warmup
- Predictive scaling
- Preloaded engines
- Avoid scaling to zero for critical chat
- Separate batch workloads from chat workloads

## Canary deployment

LLM canaries require more than HTTP error rate.

Monitor:

- Latency
- Error rate
- Token throughput
- Cost
- Refusal rate
- Hallucination rate
- Groundedness
- Safety violations
- Output length distribution
- User feedback
- Regression on golden prompts

A new LLM version can have perfect infrastructure metrics but worse answer quality.

## Scaling an LLM App to 3 Million Users

A 3 million user app is not just “put a big model behind an API.” You must reason from active usage and workload shape.

Important questions:

- How many monthly active users?
- How many daily active users?
- How many concurrent users at peak?
- How many requests per user per day?
- Average prompt tokens?
- Average output tokens?
- p95 prompt length?
- p95 output length?
- How many requests need RAG?
- How many requests need tools?
- What percentage is safety-sensitive?
- What regions must be served?

### Step 1: Estimate traffic in tokens

For LLMs, capacity planning should start with tokens, not users.

Example:

- 3 million registered users
- 300,000 daily active users
- 5 requests per user per day
- 1,500,000 requests per day
- 800 input tokens average
- 300 output tokens average

Daily input tokens: 1.2 billion

Daily output tokens: 450 million

Peak hour may be much higher than average. A 10x peak factor is not impossible for consumer apps.

### Step 2: Separate request classes

Do not treat all traffic the same.

Common classes:

- Simple FAQ
- RAG question answering
- Long document summarization
- Code generation
- Agent/tool use
- Safety-sensitive advice
- Internal admin tasks

Each class may need different:

- Model size
- Context length
- Retrieval depth
- Output limit
- Safety policy
- Caching
- Endpoint configuration

### Step 3: Use model routing

A 70B model for every request is often wasteful.

Use routing:

- Small model for simple requests
- Larger model for complex reasoning
- RAG for knowledge-heavy requests
- Tool call for deterministic tasks
- Refusal or escalation for unsafe requests

Routing signals:

- Query complexity
- Confidence score
- Retrieval quality
- User tier
- Safety category
- Latency budget

### Step 4: Use caching carefully

Useful caching types:

- Prompt prefix caching
- KV cache reuse for stable prefixes
- Response caching for identical FAQs
- Retrieval result caching
- Embedding caching
- Tool result caching

Do not cache sensitive user-specific outputs without strict controls.

Good cached prefix:

- System prompt
- Stable policy text
- Stable few-shot examples

Bad cached prefix:

- User private input
- Per-request retrieved documents
- Anything that changes per request

### Step 5: Protect the RAG system

At millions of users, RAG becomes a reliability system.

You need:

- Document ingestion pipeline
- Chunking strategy
- Embedding model versioning
- Index versioning
- Access control filters
- Reranking
- Retrieval quality metrics
- Groundedness evaluation
- Citation validation
- Data freshness monitoring

Common failure:

The model is fine, but retrieval is wrong. The answer becomes fluent and unsupported.

### Step 6: Design SLAs per workload

Example SLA split:

| Workload | Key SLA |
| --- | --- |
| Chat | TTFT, p99 |
| Batch summary | Cost, throughput |
| RAG Q&A | Faithfulness |
| Code | Pass rate |
| Safety-sensitive | Policy compliance |
| Agent tool use | Correct tool calls |

### Step 7: Monitor quality, not only servers

Infrastructure monitoring is not enough.

Need model/application monitoring:

- Prompt distribution drift
- Retrieval hit rate
- Groundedness score
- Hallucination rate
- Refusal rate
- Toxicity/safety flags
- LLM-as-judge score drift
- User thumbs up/down
- Latency by request class
- Cost by request class
- Token usage by feature

### Step 8: Control cost

Cost reduction methods:

- Smaller model routing
- Quantization
- Continuous batching
- Prompt compression
- Output token limits
- Retrieval filtering
- Response caching
- Batch offline workloads
- Avoid unnecessary long context
- Use different endpoints for chat and batch jobs

### Step 9: Plan failure modes

Production LLM failure modes:

- GPU OOM during traffic spike
- Cold-start latency
- Retrieval index stale
- Prompt injection bypass
- Tool call executes wrong action
- New model version degrades factuality
- Long prompts starve short prompts
- Safety classifier too strict
- Safety classifier too weak
- NCCL hang during distributed serving/training
- Cost spike due to token explosion

## RAG Engineering

## Chunking

Chunking splits documents into retrievable units.

If chunks are too small:

- Missing context
- Fragmented facts
- Poor answer grounding

If chunks are too large:

- Low precision retrieval
- Irrelevant context
- Wasted tokens
- Higher cost

Good chunking depends on document structure.

Use:

- Heading-aware chunking
- Semantic boundaries
- Overlap where needed
- Metadata filters
- Table-specific handling
- Separate treatment for code, PDFs, contracts, tickets

## Embeddings

Embeddings convert text into vectors for semantic search.

Important choices:

- Embedding model
- Chunk size
- Index type
- Similarity metric
- Metadata filtering
- Reranking
- Refresh schedule

Do not assume one embedding model works equally well for Japanese, code, legal docs, and product manuals.

## Reranking

A reranker reorders retrieved candidates using a stronger relevance model.

Use reranking when:

- Vector search returns related but not answer-bearing chunks.
- Precision matters more than raw recall.
- Context window is limited.
- Source quality varies.

## RAG evaluation

Evaluate at multiple layers:

- Retrieval recall
- Retrieval precision
- Context relevance
- Answer faithfulness
- Answer relevance
- Citation correctness
- Refusal behavior when context is missing

Good RAG answer:

- Uses retrieved evidence
- Does not invent unsupported facts
- Cites correct sources
- Says when evidence is insufficient

## Prompt Engineering

## Prompting basics

Prompt engineering controls model behavior without changing weights.

Use it for:

- Formatting
- Tone
- Domain framing
- Tool instructions
- Reasoning style
- Output constraints
- Grounding instructions

Prompting is cheap and fast, but not always enough.

## Few-shot prompting

Few-shot prompting gives examples.

Use when:

- Output format matters
- Classification labels are ambiguous
- Style must be consistent
- The model needs examples of desired behavior

Too many examples can waste context and distract the model.

## Chain-of-thought

Chain-of-thought can help with reasoning tasks, but it costs more tokens and may hurt smaller models if they produce unfaithful reasoning.

Use for:

- Multi-step reasoning
- Math
- Planning
- Complex comparison

Avoid for:

- Simple lookup
- Strict latency constraints
- Tasks where hidden reasoning should not be exposed

## Structured output

For JSON, XML, or function calls, prompt-only constraints are weaker than schema-constrained decoding.

Most robust options:

- Tool/function schema
- Grammar-constrained decoding
- JSON schema validation
- Retry on invalid output
- Output parser with strict validation

## Prompt injection

Prompt injection is when user or retrieved text tries to override system instructions.

Defense:

- Separate system instructions from untrusted content
- Treat retrieved documents as data, not instructions
- Use tool allowlists
- Validate tool arguments
- Restrict data access before retrieval
- Use guardrails and output filters
- Log suspicious prompts

## Fine-Tuning Decision Guide

## Prompting vs RAG vs LoRA vs SFT vs continued pretraining

| Need | Method |
| --- | --- |
| Format or tone | Prompting |
| Fresh knowledge | RAG |
| Domain behavior | LoRA |
| Strong task adaptation | SFT |
| Domain language shift | Continued pretraining |
| Smaller deployment | Distillation |
| Human preference | DPO/RLHF |

## PEFT

Parameter-efficient fine-tuning updates only a small set of parameters.

Good when:

- Data is limited
- Compute is limited
- You need multiple domain adapters
- Base model should remain stable

## Catastrophic forgetting

Catastrophic forgetting means the model loses previous abilities after tuning.

Causes:

- Too narrow data
- Too high learning rate
- Too many epochs
- Full fine-tuning when PEFT would be enough
- Bad data mix

Mitigations:

- Mixed replay data
- Lower learning rate
- Early stopping
- PEFT
- Broader validation suite
- Regular evaluation on general tasks

## Preference tuning

### RLHF

RLHF uses reward modeling and policy optimization to align outputs with human preferences.

PPO-style RLHF needs a KL penalty to prevent the policy from drifting too far from the reference model.

Failure mode:

- Reward hacking

### DPO

Direct Preference Optimization uses chosen/rejected response pairs. It is simpler than PPO-style RLHF and often easier to run.

Use preference tuning when behavior preference matters, not when the model lacks knowledge. For missing knowledge, use RAG or training data.

## Data Preparation

## Data quality

LLM data quality matters more than raw size in many tuning tasks.

Check:

- Deduplication
- PII removal
- Toxic content
- License status
- Domain coverage
- Label correctness
- Formatting consistency
- Train/eval leakage
- Language coverage
- Synthetic data errors

## Synthetic data

Synthetic data can help, but teacher models hallucinate.

Validate synthetic data with:

- Rule-based checks for code/math
- Independent verifier models
- Factuality checks
- Safety classifiers
- Stratified human audit

Do not trust synthetic data only because the teacher is strong.

## Data contamination

Contamination happens when evaluation examples or close paraphrases appear in training.

Detect using:

- Exact duplicate search
- Near-duplicate search
- MinHash
- N-gram overlap
- Embedding similarity review

Contaminated evaluation scores are not trustworthy.

## Data lineage

Data lineage means tracking:

- Source
- License
- Collection date
- Transformation steps
- Filtering steps
- Version
- Usage

Lineage matters for audits, compliance, licensing, and debugging regressions.

## Evaluation

## Why LLM evaluation is different

Classical ML often has one target and one metric. LLM systems have many dimensions:

- Correctness
- Faithfulness
- Helpfulness
- Safety
- Tone
- Format
- Latency
- Cost
- Tool correctness
- Citation correctness

A model can improve fluency while hurting factuality.

## Offline evaluation

Use offline evaluation before deployment:

- Golden prompt sets
- Human-labeled examples
- RAG benchmark sets
- Safety test sets
- Regression tests
- Domain-specific tests

## Online evaluation

Use online evaluation after deployment:

- A/B testing
- Canary traffic
- User feedback
- Human review samples
- Production drift metrics
- Shadow evaluation

## LLM-as-judge

LLM-as-judge can scale evaluation but has biases.

Common biases:

- Position bias
- Verbosity bias
- Style preference
- Self-preference
- Inconsistency

Mitigate with:

- Randomized order
- Clear rubric
- Pairwise evaluation
- Calibration with human labels
- Multiple judges or repeated runs
- Short, criterion-specific judgments

## RAG metrics

Important RAG metrics:

- Context relevance
- Faithfulness
- Answer relevance
- Citation correctness
- Retrieval recall
- Retrieval precision

ROUGE or BLEU alone is not enough for RAG factuality.

## Safety, Ethics, and Compliance

## Safety layers

Safety should be layered:

- Data filtering
- Model tuning
- System prompt
- Input moderation
- Retrieval access control
- Tool permissions
- NeMo Guardrails
- Output moderation
- Red teaming
- Monitoring
- Incident response

## Bias and fairness

Bias can come from:

- Training data
- Synthetic data
- Prompt examples
- Retrieval corpus
- Evaluation labels
- Human feedback

Mitigation:

- Balanced evaluation sets
- Bias audits
- Data review
- Prompt review
- Fairness metrics
- Human escalation

## Privacy and access control

RAG systems can leak information if retrieval ignores permissions.

Always enforce access control before retrieval or during retrieval filtering.

Do not retrieve all documents and then ask the model not to reveal restricted content.

## Red teaming

Red teaming tests unsafe behavior intentionally.

Targets:

- Prompt injection
- Jailbreaks
- Data exfiltration
- Unsafe advice
- Tool misuse
- RAG poisoning
- Policy bypass
- Sensitive data leakage

## Production Monitoring and Reliability

## What to monitor

Infrastructure metrics:

- GPU utilization
- GPU memory
- CPU utilization
- Network throughput
- Error rate
- Queue length
- Request latency
- Tokens per second

LLM metrics:

- TTFT
- Inter-token latency
- Output length
- Cost per request
- Refusal rate
- Safety flag rate
- Groundedness
- Retrieval relevance
- Hallucination estimate
- User satisfaction
- Tool-call success

## Drift

LLM drift can appear as:

- User query distribution changes
- New topics
- New documents
- Retrieval index staleness
- Model behavior shift after update
- Safety policy mismatch

Respond with:

- Updated retrieval index
- Re-evaluation
- Prompt adjustment
- Fine-tuning only if needed
- Canary deployment
- Rollback plan

## Incident response

For production LLM incidents:

1. Identify if issue is infrastructure, model, retrieval, prompt, tool, or safety.
2. Roll back if user impact is severe.
3. Capture prompts, retrieved context, model version, and outputs.
4. Reproduce offline.
5. Patch the specific layer.
6. Add regression tests.
7. Monitor after redeploy.

## Decision Patterns

## If the problem is latency

Ask:

- Is it TTFT or total latency?
- Is prefill or decode dominant?
- Is queueing too high?
- Is cold start involved?
- Is CPU launch overhead visible?
- Is batching hurting or helping?

Likely tools:

- TensorRT-LLM
- Triton dynamic batching
- Continuous batching
- Chunked prefill
- CUDA Graphs
- Quantization
- Smaller model routing

## If the problem is memory

Ask:

- Training or inference?
- Parameters or KV cache?
- Activations or optimizer states?
- Long context or large batch?

Likely tools:

- Weight quantization
- KV-cache quantization
- Paged KV cache
- MQA/GQA
- Activation checkpointing
- ZeRO/FSDP
- LoRA/QLoRA

## If the problem is communication

Ask:

- Single-node or multi-node?
- Which collective dominates?
- Is tensor parallelism crossing nodes?
- Are all ranks synchronized?
- Is MoE routing imbalanced?

Likely tools:

- NCCL diagnostics
- Better parallelism layout
- Hierarchical communication
- TP within node
- PP across node groups
- DP across replicas
- Expert load balancing

## If the problem is hallucination

Ask:

- Is knowledge missing?
- Is retrieval bad?
- Is context irrelevant?
- Is the prompt encouraging unsupported answers?
- Is evaluation measuring faithfulness?

Likely fixes:

- RAG
- Better chunking
- Reranking
- Grounded prompt
- Citation checks
- Faithfulness evaluation
- Refusal when evidence is missing

## If the problem is unsafe behavior

Ask:

- Input attack?
- Retrieved malicious content?
- Tool misuse?
- Output policy violation?
- Data leakage?

Likely fixes:

- NeMo Guardrails
- Input/output moderation
- Tool allowlists
- Access control
- Red teaming
- Logging and audit

## Four-Week Study Plan

## Week 1: NVIDIA inference stack and optimization

Study:

- TensorRT-LLM
- NIM
- Triton
- Continuous batching
- Dynamic batching
- Paged KV cache
- Chunked prefill
- Quantization
- TTFT and p99 latency

Practice:

- Take any scenario and identify whether the bottleneck is prefill, decode, queueing, memory, or cold start.

## Week 2: GPU training and distributed systems

Study:

- CUDA basics
- Nsight Systems
- Nsight Compute
- NCCL
- DP, TP, PP, EP, SP
- FSDP and ZeRO
- Activation checkpointing
- Mixed precision

Practice:

- Draw where communication happens for DP, TP, PP, and MoE.

## Week 3: Model adaptation and data

Study:

- NeMo Framework
- SFT
- LoRA
- QLoRA
- Continued pretraining
- Distillation
- DPO/RLHF
- Data quality
- Synthetic data validation
- Contamination checks

Practice:

- Decide whether a use case needs prompting, RAG, LoRA, SFT, continued pretraining, or distillation.

## Week 4: Application design, RAG, safety, monitoring

Study:

- RAG architecture
- Reranking
- Evaluation
- LLM-as-judge
- NeMo Guardrails
- Prompt injection
- Canary deployment
- Production monitoring
- Scaling to millions of users

Practice:

- Design an end-to-end app architecture for three request classes: chat, RAG Q&A, and batch summarization.

## High-Value Flashcards

- Weight quantization reduces parameter memory; KV-cache quantization reduces long-context inference memory.
- Continuous batching is for live generation with requests joining and leaving dynamically.
- Dynamic batching waits briefly to form efficient batches.
- Chunked prefill reduces long-prompt head-of-line blocking.
- TTFT measures chat responsiveness before the first token.
- Inter-token latency measures streaming smoothness.
- Paged KV cache reduces fragmentation for mixed-length requests.
- TensorRT-LLM builds optimized LLM inference engines.
- Triton serves models and manages batching, scheduling, and endpoints.
- NIM packages optimized LLM serving as enterprise microservices.
- NeMo is for model customization and fine-tuning.
- NeMo Guardrails is for safety and conversation control.
- NCCL is for multi-GPU communication.
- Nsight Systems shows timelines; Nsight Compute inspects kernels.
- ZeRO-3/FSDP shards parameters, gradients, and optimizer states.
- Activation checkpointing trades compute for memory.
- LoRA trains low-rank adapters while freezing the base model.
- QLoRA saves memory by quantizing the base model during adapter tuning.
- RLHF/PPO needs a KL penalty to avoid reward hacking.
- DPO needs preference pairs.
- RAG quality depends on retrieval and faithfulness, not just generation quality.
- MQA/GQA reduce KV-cache memory compared with full MHA.
- MoE creates routing and all-to-all communication problems.
- Canary LLM deployments need quality metrics, not only uptime.
- Guardrails do not replace access control.

## Official References to Study

- NVIDIA NCP-GENL certification page: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- TensorRT-LLM documentation: https://nvidia.github.io/TensorRT-LLM/
- TensorRT-LLM GPT attention, in-flight batching, and KV cache: https://nvidia.github.io/TensorRT-LLM/advanced/gpt-attention.html
- TensorRT-LLM KV cache system: https://nvidia.github.io/TensorRT-LLM/features/kvcache.html
- NVIDIA NIM for LLMs: https://docs.nvidia.com/nim/large-language-models/latest/index.html
- Triton Inference Server user guide: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/
- Triton dynamic batching guide: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/tutorials/Conceptual_Guide/Part_2-improving_resource_utilization/README.html
- NeMo Framework SFT and PEFT: https://docs.nvidia.com/nemo-framework/user-guide/latest/sft_peft/index.html
- NeMo Guardrails documentation: https://docs.nvidia.com/nemo/guardrails/latest/
- NCCL documentation: https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html
- Nsight Systems documentation: https://docs.nvidia.com/nsight-systems/
- Nsight Compute documentation: https://docs.nvidia.com/nsight-compute/

## Final Exam Reasoning Checklist

Before choosing an answer, ask:

1. Is the scenario about training, inference, serving, RAG, monitoring, or safety?
2. Is the bottleneck memory, compute, communication, queueing, quality, or risk?
3. Is the key metric TTFT, p99, throughput, accuracy, groundedness, or cost?
4. Is the answer solving the right layer?
5. Does the answer preserve the most important constraint?
6. Is the proposed solution realistic for the model size and traffic pattern?
7. Is the answer using NVIDIA tooling correctly?
8. Does the answer avoid blind scaling, blind quantization, and blind fine-tuning?

The best answer usually respects trade-offs. If an option says “always,” “guarantees,” or solves everything with one setting, be suspicious.


## Final One-Page Tool Map

Memorize this map before taking scenario practice.

- **CUDA**: GPU execution layer. Choose it for kernel launch, fused kernels, memory movement, Tensor Core use.
- **TensorRT**: general inference optimization runtime.
- **TensorRT-LLM**: optimized LLM inference engine. Choose it for paged KV cache, in-flight batching, chunked prefill, quantization, speculative decoding, multi-GPU inference.
- **Triton Inference Server**: general inference server. Choose it for dynamic batching, instance groups, model repositories, ensembles, model serving metrics.
- **NIM**: packaged enterprise inference microservice. Choose it for fast deployment, standardized API, optimized model container, Kubernetes-ready production path.
- **NGC**: catalog of NVIDIA containers, models, SDKs, Helm charts, and artifacts.
- **NeMo Framework**: build, customize, fine-tune, align, and adapt generative AI models.
- **NeMo Guardrails**: safety, dialog flow, topic control, tool-use governance, input/output checks.
- **NeMo Microservices**: enterprise lifecycle services for customization, evaluation, deployment management, and data flywheel patterns.
- **NCCL**: distributed GPU communication. Choose it for all-reduce, all-gather, reduce-scatter, all-to-all, multi-node scaling.
- **Nsight Systems**: timeline profiler. Choose it for end-to-end CPU/GPU bottleneck diagnosis.
- **Nsight Compute**: kernel profiler. Choose it for memory-bound/compute-bound kernel analysis.
- **NVIDIA SMI**: basic GPU status and process monitoring.
- **RAPIDS**: GPU-accelerated data science and preprocessing.

## Final One-Page Topic Map

- **Quantization**: TensorRT-LLM, TensorRT Model Optimizer, NIM model profiles. Used for weight memory, bandwidth, latency, throughput.
- **KV cache**: TensorRT-LLM. Used for long context, multi-turn chat, concurrent decoding, memory planning.
- **Batching**: TensorRT-LLM and Triton. Used for throughput and latency trade-offs.
- **Serving**: NIM and Triton. Used for API deployment, scaling, batching, model lifecycle.
- **Fine-tuning**: NeMo. Used for behavior, style, format, task skill, domain adaptation.
- **RAG**: application layer plus NIM/embedding services/Guardrails. Used for private or fresh knowledge.
- **Distributed training**: NeMo/Megatron concepts plus NCCL. Used for multi-GPU and multi-node training.
- **Profiling**: Nsight Systems, Nsight Compute, SMI. Used for bottleneck diagnosis.
- **Safety**: NeMo Guardrails plus application-level controls. Used for prompt injection, unsafe output, tool governance, and data leakage.
- **Monitoring**: Triton/NIM metrics plus evaluation. Used for TTFT, p99, tokens/sec, KV cache, retrieval quality, faithfulness, safety.

## How to Use This Guide With Practice Questions

Do not start by reading the answer choices. First classify the scenario.

1. Write the phase: training, tuning, inference optimization, deployment, RAG, monitoring, safety.
2. Write the bottleneck: memory, compute, communication, queueing, retrieval, data, safety, evaluation.
3. Write the metric: TTFT, p99, tokens/sec, quality, accuracy, faithfulness, cost, availability.
4. Write the NVIDIA layer: TensorRT-LLM, Triton, NIM, NeMo, NCCL, Nsight, Guardrails.
5. Eliminate choices that solve a different layer.

That is the core exam skill.

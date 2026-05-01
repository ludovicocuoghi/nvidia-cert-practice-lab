# NCP-GENL Study Guide: NVIDIA Generative AI LLMs

Updated: 2026-04-29

This guide is built from the local blueprint, research notes, official NVIDIA documentation, and the themes present in the practice bank. It intentionally does not reproduce practice questions or answer keys. The goal is to help a data scientist reason through NVIDIA-specific LLM scenarios instead of memorizing items.

## Quick Opinion on the Current Question Files

The archived 200-question file is useful only as a beginner warmup. It mostly tests broad AI vocabulary: what AI, ML, tokenization, RAG, deployment, metrics, and basic NVIDIA tools are. That material is not bad, but it is too easy for a professional-level NVIDIA Generative AI LLMs exam. I would not delete it yet; keep it archived as a diagnostic for fundamentals or for onboarding, but do not use it as the main simulator bank.

The current `questions.md` is much closer to the right level. Its distribution matches the blueprint exactly: 17 optimization, 14 GPU acceleration, 13 prompt engineering, 13 fine-tuning, 9 data preparation, 9 deployment, 7 evaluation, 7 monitoring, 6 architecture, and 5 safety questions. It also asks scenario questions with constraints: latency, throughput, memory, quality loss, compliance, model size, context length, and production reliability. That is the right shape.

The hard bank may feel very hard because it assumes you can connect concepts across layers: model architecture -> GPU memory -> TensorRT-LLM feature -> Triton/NIM deployment -> evaluation and monitoring. That is exactly the skill to study.

## How to Study This Exam

Use this mental model for almost every scenario:

1. Identify the bottleneck: compute, memory, communication, data quality, retrieval quality, safety, or evaluation.
2. Identify the lifecycle phase: pretraining, SFT/PEFT, inference optimization, serving, monitoring, or governance.
3. Match the NVIDIA tool: NeMo for customization and guardrails, TensorRT-LLM for optimized LLM inference, Triton for inference serving, NIM for packaged production microservices, NCCL for distributed communication, Nsight for profiling.
4. Preserve the constraint that matters most: accuracy, p99 latency, TTFT, throughput, cost, privacy, or maintainability.
5. Avoid answers that solve the wrong layer. Example: weight quantization helps parameter memory, but not necessarily long-context KV-cache memory.

## NVIDIA Ecosystem Map

### CUDA

CUDA is the programming platform beneath NVIDIA GPU acceleration. You do not need to write custom kernels for every exam scenario, but you should understand that most LLM speedups come from making tensor operations run efficiently on GPU cores, reducing kernel launch overhead, reducing memory movement, and using fused kernels.

Know these symptoms:

- Low GPU utilization under load often means batching, scheduling, CPU overhead, data movement, or synchronization is limiting throughput.
- Long gaps between kernels in a profiler often point to CPU launch overhead, framework overhead, host-device synchronization, or input pipeline stalls.
- High GPU memory use can come from parameters, optimizer states, gradients, activations, or KV cache depending on training versus inference.

### TensorRT-LLM

TensorRT-LLM is NVIDIA's optimized inference stack for large language models. It focuses on fast generation, memory-efficient attention, parallelism, quantization, and serving-oriented scheduling.

Core ideas:

- In-flight batching, also called continuous batching or iteration-level batching, lets requests enter and leave a running generation workload dynamically. It is better for mixed-length chat traffic than static batches padded to the longest sequence.
- Paged KV cache stores key-value state in reusable blocks instead of one large contiguous allocation. This reduces waste and fragmentation when requests have different lengths.
- Chunked prefill, also called chunked context, splits long prompt processing so decode work does not sit behind huge prefills.
- Fused attention plugins reduce overhead by combining attention operations into optimized kernels.
- CUDA graphs can reduce repeated launch overhead in steady decode loops.
- Tensor, pipeline, expert, and sequence parallelism distribute large models across GPUs in different ways.

Reasoning pattern:

- If the issue is variable-length high-concurrency inference, think in-flight batching plus paged KV cache.
- If the issue is long prompts delaying everyone else, think chunked prefill.
- If long context causes memory pressure, think KV-cache size, attention layout, MQA/GQA, or KV-cache quantization before thinking only about weight quantization.
- If a TensorRT build fails after a model conversion, think unsupported operators, architecture mapping, plugin support, or export/opset mismatch.

### Triton Inference Server

Triton serves models behind HTTP/gRPC endpoints and can host multiple backends and models. For exam purposes, focus on model repositories, model configuration, scheduling, dynamic batching, instance groups, ensembles, and observability.

Key settings:

- `dynamic_batching` combines requests into batches to improve throughput.
- `preferred_batch_size` asks Triton to form efficient batch sizes for a model.
- `max_queue_delay_microseconds` caps how long Triton waits to form a better batch.
- `instance_group` controls how many model instances run on specific GPUs, but more instances are not always better because they may compete for the same GPU memory and compute.
- Ensembles connect preprocessing, model inference, postprocessing, or multi-model pipelines.

Reasoning pattern:

- Throughput low and requests are small: dynamic batching may help.
- p99 latency high under bursts: tune queue delay, batch sizes, and scheduler behavior.
- GPU utilization low: inspect batching, request concurrency, model analyzer results, CPU preprocessing, and backend bottlenecks.
- Need a pipeline of preprocessing -> inference -> postprocessing: Triton ensemble.

### NVIDIA NIM

NIM packages generative AI models as production-ready containers and microservices. It is meant for teams that want a supported, standardized deployment path with optimized engines, APIs, model profiles, observability, and enterprise deployment patterns.

Know what NIM gives you:

- Containerized model serving through NGC.
- Hardware inspection and model profile selection.
- OpenAI-compatible API patterns for many LLM use cases.
- Deployment options for Kubernetes/Helm, air-gapped environments, multi-node setups, and enterprise controls.
- Features such as structured generation, tool/function calling, KV cache reuse, per-request metrics, and PEFT-related workflows, depending on model and version.

Reasoning pattern:

- If the scenario asks for fastest path to supported enterprise LLM deployment, think NIM.
- If it asks for lower-level engine building and custom inference optimization, think TensorRT-LLM.
- If it asks for general model serving across frameworks and multiple model types, think Triton.

### NeMo Framework

NeMo is NVIDIA's framework for building, customizing, and adapting generative AI models. It is especially relevant for SFT, PEFT, LoRA, QLoRA, model conversion, distributed training recipes, and LLM customization.

SFT versus PEFT:

- SFT updates all or most model parameters. It can produce stronger adaptation but costs far more compute and carries more risk of catastrophic forgetting.
- PEFT keeps the base model mostly frozen and trains a small number of inserted parameters. It is cheaper and often enough for domain/style/task adaptation.
- LoRA trains low-rank update matrices in selected modules. After merging, it can avoid extra inference-time architectural latency.
- QLoRA quantizes the base model and trains LoRA adapters in higher precision. It saves memory, often making larger-model tuning feasible on fewer GPUs, but may train slower than LoRA.

Reasoning pattern:

- Small or medium domain adaptation with limited GPUs: LoRA or QLoRA.
- Need maximum quality shift and enough curated data plus compute: full SFT may be justified.
- General ability collapses after tuning: suspect catastrophic forgetting, data mix problems, excessive learning rate, or too narrow a training distribution.
- Adapter merging causes weird behavior: suspect incompatible adapters, conflicting domains, or missing validation after merge.

### NeMo Guardrails

NeMo Guardrails adds programmable safety and dialog controls around LLM applications. It can define flows for input checks, dialog policy, retrieval checks, output checks, and tool execution.

Use it for:

- Topic control and refusal behavior.
- Input and output safety checks.
- Tool-use governance.
- RAG-specific checks such as groundedness or hallucination detection.
- Enforcing conversation flows with Colang.

Do not treat guardrails as a replacement for access control, logging, data governance, evaluation, or least-privilege tool design. Guardrails are one layer in a defense-in-depth system.

### NCCL

NCCL is NVIDIA's collective communication library for multi-GPU and multi-node training. It accelerates operations such as all-reduce, broadcast, all-gather, reduce-scatter, and all-to-all.

Know the communication shape:

- Data parallelism often needs gradient all-reduce.
- Tensor parallelism often needs all-reduce or reduce-scatter/all-gather around split layers.
- Pipeline parallelism sends activations and gradients between stages.
- Expert parallelism for MoE often depends on all-to-all token dispatch.

Reasoning pattern:

- Scaling works on one node but slows across nodes: suspect network topology, NCCL transport, RDMA/InfiniBand settings, or cross-node communication volume.
- Job hangs around collectives: inspect NCCL debug logs, rank consistency, network health, timeout behavior, and mismatched process state.
- Disabling peer-to-peer may work around a hardware/topology issue, but often costs performance.

### Nsight Systems and Nsight Compute

Nsight Systems gives timeline-level visibility: CPU, GPU kernels, CUDA API calls, synchronization, data transfers, and gaps. Nsight Compute gives kernel-level performance detail.

Use Nsight Systems first when asking "where did time go?" Use Nsight Compute when asking "why is this kernel inefficient?"

Common profiler interpretations:

- Kernel gaps: CPU launch overhead, synchronization, framework overhead, input stalls.
- Memory-bound kernels: low arithmetic intensity, high bandwidth pressure.
- Communication-bound training: collectives dominate step time.
- Underfilled GPU: batch size, sequence length, request concurrency, or scheduler may be too small.

## Domain Guide

## 1. Model Optimization

This is the highest-weight domain. You should be able to choose an optimization that preserves quality while meeting a performance target.

### Precision and Quantization

Common formats:

- FP32: high precision, usually too expensive for large LLM inference.
- FP16/BF16: common training/inference precision. BF16 has wider exponent range; FP16 has more mantissa precision.
- FP8: important on Hopper-class GPUs for high-throughput training/inference, but it requires careful scaling and validation.
- INT8: common post-training or calibration-based inference quantization.
- INT4: aggressive weight quantization. Often useful for memory and throughput, but needs good method and validation.

Concepts:

- Per-tensor quantization uses one scale for a tensor. Simpler, but weaker when channel magnitudes differ.
- Per-channel or per-group quantization uses more local scales and usually preserves accuracy better.
- Calibration data must represent production inputs. Bad calibration can make a good method fail.
- Weight-only quantization reduces model parameter memory and bandwidth.
- Activation quantization is harder because activations are input-dependent and have outliers.
- KV-cache quantization targets long-context inference memory, not parameter memory.

Methods:

- SmoothQuant moves activation difficulty into weights so INT8 activation/weight quantization is more stable.
- AWQ protects salient weight channels based on activation awareness and is often strong for 4-bit weight-only inference.
- GPTQ is a post-training quantization method using approximate second-order information.
- FP8 typically depends on good scaling choices and workload validation.

Exam instinct:

- If quality tolerance is tight, pick representative calibration and less aggressive quantization.
- If context length dominates memory, optimize KV cache.
- If parameter memory dominates, optimize weights.
- If the model must preserve domain quality, calibrate on domain data.

### Batching and Scheduling

Batching improves throughput but can hurt latency. LLM serving is tricky because each request has a context/prefill phase and a decode phase.

Important terms:

- TTFT: time to first token. Critical for chat UX.
- Inter-token latency: delay between streamed tokens.
- p95/p99 latency: tail latency. Critical under bursty traffic.
- Static batching: fixed batch formation, often wastes work with mixed lengths.
- Dynamic batching: server batches requests arriving near each other.
- Continuous/in-flight batching: decode scheduling where requests can join and leave over time.
- Chunked prefill: long contexts are split to reduce head-of-line blocking.

Exam instinct:

- High concurrency plus mixed prompt lengths: continuous batching.
- Long prompts blocking short requests: chunked prefill.
- Small independent requests in Triton: dynamic batching.
- Tail latency worsening: reduce queue delay or profile batch sweet spots.

### Memory Reduction

For training:

- Parameters.
- Gradients.
- Optimizer states.
- Activations.
- Temporary buffers.

For inference:

- Parameters.
- KV cache.
- Runtime workspaces.
- Batch/request state.

Tactics:

- Quantization reduces parameter and sometimes KV-cache memory.
- Activation checkpointing reduces activation memory during training by recomputing activations.
- ZeRO/FSDP shards optimizer states, gradients, and/or parameters.
- Sequence parallelism reduces activation memory associated with sequence dimension under tensor parallel setups.
- MQA/GQA reduce KV-cache size by sharing K/V heads relative to full MHA.

### Pruning and Distillation

Pruning removes weights, heads, layers, or structure. It can save memory/compute but may harm reasoning before simple recall visibly fails.

Distillation trains a smaller student to imitate a larger teacher. For instruction models, useful signals include teacher distributions, generated rationales if appropriate, and supervised instruction data. A student trained only on hard labels may miss the teacher's uncertainty and behavior.

## 2. GPU Acceleration and Optimization

This domain tests whether you understand distributed training and GPU bottlenecks.

### Parallelism Types

Data parallelism:

- Each GPU holds a full model replica and processes different data.
- Gradients are synchronized across replicas.
- Simple, but memory per GPU remains high.

Tensor parallelism:

- Individual layers are split across GPUs.
- Useful for very large layers.
- Introduces frequent communication within layers.

Pipeline parallelism:

- Groups of layers are placed on different GPUs.
- Microbatches flow through stages.
- Bubble overhead matters if there are too few microbatches or stages are imbalanced.

Expert parallelism:

- MoE experts are distributed across GPUs.
- Routing imbalance can cause some GPUs to idle while others are overloaded.
- All-to-all communication can dominate.

Sequence parallelism:

- Splits sequence-related activations to reduce memory in tensor-parallel training.

FSDP/ZeRO:

- Shards optimizer states, gradients, and parameters.
- ZeRO-1 shards optimizer states.
- ZeRO-2 shards optimizer states and gradients.
- ZeRO-3/FSDP full sharding also shards parameters.

### Training Memory

If OOM happens during:

- Forward pass: activations, batch size, sequence length, model size.
- Backward pass: activations plus gradients.
- Optimizer step: optimizer states or master weights.
- Checkpoint load: loading strategy, CPU initialization, memory spikes.

Tactics:

- Activation checkpointing: save memory, spend more compute.
- Mixed precision: reduce memory and improve throughput, but handle numerical range.
- Gradient accumulation: simulate larger batch without larger per-step memory.
- FSDP/ZeRO-3: shard more states when memory is tight.

### Communication

Communication can dominate when scaling large jobs. Watch for all-reduce, all-gather, reduce-scatter, pipeline sends, and all-to-all.

Exam instinct:

- More GPUs is not always faster. Communication volume and synchronization may dominate.
- Cross-node scaling needs high-speed networking and correct NCCL transport.
- MoE imbalance is often a routing/load-balancing problem, not just a raw GPU problem.

## 3. Prompt Engineering

Prompt engineering questions are often about controlling behavior without retraining.

### Prompting Modes

- Zero-shot: instruction only.
- Few-shot: examples included in the prompt.
- Chain-of-thought: asks for intermediate reasoning. Useful for complex reasoning, but not always with small models or simple tasks.
- Self-consistency: sample multiple reasoning paths and vote. Costs more tokens and latency.
- Tree-of-thought: explore multiple branches for hard planning/search tasks.
- Structured prompting: specify schema, constraints, evidence, citations, and output format.

### RAG Prompting

RAG quality depends on retrieval, chunking, reranking, context packing, and prompting.

Best practices:

- Put only relevant retrieved evidence in context.
- Ask the model to answer from provided evidence.
- Require citations tied to evidence chunks.
- Tell the model how to behave when evidence is missing.
- Use reranking when vector search returns semantically related but not answer-bearing chunks.

Failure modes:

- Too much context can bury the answer.
- Irrelevant excerpts can degrade accuracy.
- Missing access controls can leak documents.
- Weak citation prompts can produce unsupported citations.

### Structured Output and Tool Use

For strict JSON or function calls, prefer constrained decoding, schemas, tool/function calling APIs, or structured generation when available. Prompt-only instructions are weaker because the model can still emit prose or invalid fields.

For nonexistent tool calls, constrain the allowed tool list and validate tool calls in application logic.

## 4. Fine-Tuning

The exam expects you to know when to tune, how to tune, and how tuning fails.

### Choose the Adaptation Method

Use prompting/RAG when:

- Knowledge changes often.
- You need source grounding.
- Behavior change is mostly task framing.
- You do not have strong supervised examples.

Use LoRA/QLoRA when:

- You need domain style, format, or behavior adaptation.
- You have limited compute.
- You want to preserve base model ability.

Use full SFT when:

- The required behavior shift is large.
- You have enough high-quality data.
- You can afford the compute and validation.

Use continued pretraining when:

- The model lacks domain language or concepts at a foundational level.
- You have a large unlabeled domain corpus.
- SFT examples alone are too narrow.

### Preference Optimization

RLHF/PPO:

- Trains a policy using reward model feedback.
- KL penalty keeps the policy close to a reference model to reduce reward hacking and behavior drift.

DPO:

- Uses preference pairs directly.
- Needs chosen/rejected outputs for the same prompt.
- Avoids training a separate explicit reward model in the classic pipeline.

GRPO:

- Uses group-relative comparisons, commonly discussed for reasoning-model training.

Failure modes:

- Reward hacking: reward rises while human quality falls.
- Overconfidence after synthetic SFT: teacher errors or low-diversity synthetic data.
- Catastrophic forgetting: new task improves while general ability drops.
- Data contamination: eval examples appear in training.

## 5. Data Preparation

Data quality usually beats clever training recipes.

### Tokenization

Know:

- Tokenizer choice affects cost, context efficiency, and evaluation comparability.
- Multilingual tokenizers need fair coverage across languages.
- Domain vocabulary extension requires resizing embeddings and training/adapting new token embeddings.
- Comparing perplexity across different tokenizers is misleading because tokenization changes the unit of prediction.

### Dataset Curation

Important operations:

- Deduplication, including near-duplicate detection at web scale.
- PII detection and redaction before training.
- Quality filtering with care, because reference models can penalize valid domain text such as code, math, legal, or medical language.
- Data lineage tracking for auditability.
- Train/eval contamination checks.
- Balanced data mixing to preserve general ability while adding domain skill.

Exam instinct:

- If specialized tuning hurts chat ability, suspect data mix and overfitting.
- If a filter removes too much domain data, suspect the filter model does not understand that domain.
- If regulated data is involved, think lineage, consent, PII, access control, and audit logs.

## 6. Model Deployment

Deployment questions connect model behavior with infrastructure.

### Serving Patterns

- Real-time chat needs low TTFT, streaming, and tail-latency control.
- Offline summarization can use larger batches and higher latency.
- Hybrid systems may use separate serving pools or priority queues for interactive and batch traffic.
- Edge deployment is justified by privacy, disconnected operation, or ultra-low local latency, but model size and hardware limits matter.

### Canary and A/B Testing

Canary deployment sends a small traffic slice to a new model to watch reliability and quality signals before full rollout.

A/B testing compares variants under controlled assignment. For LLMs, generic metrics such as HTTP errors are not enough. Track task success, refusal rates, hallucination/grounding, human preference, safety violations, latency, and cost.

### Cold Starts

LLM cold starts are expensive because loading weights and building runtime state can take time. Mitigations include warm pools, minimum replicas, preloaded engines, model cache, and separating batch workloads from latency-sensitive traffic.

## 7. Evaluation

Evaluation is about choosing the right measurement for the task.

### Metric Map

- Perplexity: next-token prediction quality, but tokenizer-sensitive.
- Accuracy/F1: classification or extraction when labels are clear.
- BLEU/ROUGE: surface overlap, useful but incomplete for open-ended generation.
- BERTScore/embedding metrics: semantic similarity, still imperfect.
- Faithfulness/groundedness: whether an answer is supported by retrieved evidence.
- Human evaluation: needed for preference, helpfulness, safety nuance, tone, and complex open-ended quality.
- LLM-as-judge: scalable but biased; control for position bias, verbosity bias, model preference, and judge calibration.

### Experimental Design

Avoid peeking at metrics during A/B tests without a predeclared stopping rule. Use held-out sets, stratification, confidence intervals, and task-specific rubrics. Always separate development, validation, and final test data.

Exam instinct:

- If the question asks "grounded in documents," choose faithfulness/groundedness, not just relevance.
- If outputs are fluent but wrong, surface overlap metrics are insufficient.
- If comparing token-level metrics across different tokenizers, be careful.

## 8. Production Monitoring and Reliability

LLM monitoring includes normal service metrics plus model-quality metrics.

Service metrics:

- Request rate.
- Error rate.
- GPU utilization.
- Memory use.
- Queue time.
- TTFT.
- Inter-token latency.
- p95/p99 latency.
- Cost per request/token.

Quality metrics:

- Human feedback.
- Task completion.
- Refusal rate.
- Citation coverage.
- Groundedness.
- Retrieval hit rate.
- Safety violation rate.
- Drift in prompt distribution or embedding distribution.

Reliability patterns:

- Model routing sends easy requests to smaller models and hard requests to larger models. The routing threshold is often the main cost-quality lever.
- Multi-region failover should preserve model/version compatibility, data access rules, and degraded-mode behavior.
- Logs in regulated industries must balance debugging value with privacy. Redact or tokenize sensitive content and keep auditability.

## 9. LLM Architecture

You do not need to derive transformer math under exam time, but you must know how architecture choices affect memory, speed, and capability.

### Attention Variants

- MHA: separate query, key, and value heads.
- MQA: multiple query heads share one set of key/value heads, reducing KV cache.
- GQA: groups of query heads share key/value heads, a compromise between MHA quality and MQA efficiency.

### Position Encoding

- Absolute embeddings are learned positions.
- RoPE rotates representations by position and supports strong relative-position behavior.
- ALiBi adds attention bias by distance.

Long-context performance depends on training context length, positional method, attention implementation, and extrapolation strategy.

### MoE

Mixture-of-experts models activate only some experts per token. They can increase parameter count without proportional compute per token, but routing, load balance, communication, and expert capacity are hard production problems.

### Scaling Laws

For a fixed compute budget, there is a balance between model size and training tokens. Undertraining a huge model can be worse than training a smaller model on more data.

## 10. Safety, Ethics, and Compliance

Safety questions are usually about layered controls.

Core concepts:

- Prompt injection tries to override system/developer instructions or misuse tools.
- Jailbreaks try to bypass safety policy.
- Data exfiltration can happen through RAG, tools, logs, or memorized data.
- Bias evaluation requires stratified tests across demographic groups.
- Content filters have false positives and false negatives.
- Red teaming should focus on realistic misuse and high-impact failure modes.

Good defenses:

- Do not rely only on prompt wording.
- Enforce access control before retrieval.
- Validate tool calls and outputs.
- Use guardrails and classifiers for input/output checks.
- Log safely and audit decisions.
- Test with adversarial and representative cases.

## Decision Tables

### If You See This Bottleneck

| Symptom | Likely bottleneck | First concepts to consider |
| --- | --- | --- |
| Long-context inference OOM | KV cache | KV-cache quantization, MQA/GQA, paged KV cache, smaller batch |
| High throughput needed for mixed chat traffic | Scheduling | In-flight batching, paged KV cache, streaming |
| p99 latency spikes under bursts | Queueing | Triton queue delay, preferred batch sizes, priority queues |
| GPU idle gaps between kernels | Launch/input overhead | Nsight Systems, CUDA graphs, CPU sync, preprocessing |
| Multi-node scaling falls off | Communication | NCCL, network topology, all-reduce/all-to-all volume |
| General skills drop after tuning | Forgetting/data mix | PEFT, lower LR, mixed replay, better validation |
| RAG answer is fluent but unsupported | Grounding | Retrieval quality, reranking, citation prompts, faithfulness eval |
| Cost too high for mixed query difficulty | Routing | Small/large model router, confidence threshold, fallback policy |

### Which NVIDIA Tool Fits?

| Need | Tool |
| --- | --- |
| Customize/fine-tune LLMs | NeMo Framework |
| Add programmable LLM safety/dialog controls | NeMo Guardrails |
| Build optimized LLM inference engines | TensorRT-LLM |
| Serve models across backends with scheduling | Triton Inference Server |
| Deploy packaged enterprise LLM microservices | NVIDIA NIM |
| Debug GPU timelines and bottlenecks | Nsight Systems |
| Inspect kernel-level efficiency | Nsight Compute |
| Multi-GPU collective communication | NCCL |
| GPU container/model catalog | NGC |

## Four-Week Study Plan

### Week 1: Optimization and GPU Core

Study:

- Quantization: FP8, INT8, INT4, AWQ, GPTQ, SmoothQuant.
- KV cache and attention memory.
- TensorRT-LLM scheduling: in-flight batching, paged KV cache, chunked prefill.
- Parallelism: DP, TP, PP, EP, SP, FSDP/ZeRO.
- NCCL collectives and Nsight interpretation.

Practice:

- For every scenario, write the bottleneck in one word: memory, compute, communication, queueing, data, retrieval, safety.

### Week 2: Fine-Tuning, Data, and Architecture

Study:

- SFT versus LoRA versus QLoRA versus continued pretraining.
- DPO/RLHF/PPO/GRPO high-level purpose and failure modes.
- Tokenization, deduplication, PII, contamination, data mixing.
- MHA/MQA/GQA, RoPE, MoE, scaling laws.

Practice:

- Build a table of "when to use RAG, prompting, PEFT, SFT, continued pretraining."

### Week 3: Deployment, Evaluation, Monitoring

Study:

- NIM versus Triton versus TensorRT-LLM.
- Real-time versus batch serving.
- Canary, A/B testing, autoscaling, cold starts.
- Evaluation metrics, faithfulness, LLM-as-judge bias.
- Production signals: TTFT, p99, grounding, safety, cost.

Practice:

- For each deployment scenario, identify the user-facing SLA and the model-quality SLA.

### Week 4: Safety and Mixed Scenario Drills

Study:

- NeMo Guardrails concepts and flows.
- Prompt injection, tool security, RAG access control.
- Red-team design and bias testing.
- Full blueprint review.

Practice:

- Take mixed mocks and review each miss by root cause, not by answer letter.

## High-Value Flashcards

- Weight quantization reduces parameter memory; KV-cache quantization reduces long-context request memory.
- Continuous batching is for live generation workloads with requests joining and leaving over time.
- Dynamic batching in Triton improves throughput by batching nearby requests, controlled by preferred sizes and queue delay.
- Chunked prefill reduces head-of-line blocking from long prompts.
- TTFT matters most for chat start responsiveness; inter-token latency matters for streaming smoothness.
- FSDP/ZeRO-3 shards parameters, gradients, and optimizer states.
- Activation checkpointing trades extra compute for lower activation memory.
- LoRA trains low-rank updates while base weights remain frozen.
- QLoRA saves tuning memory by quantizing the base model while training adapters.
- KL penalty in RLHF/PPO limits policy drift from the reference model.
- DPO needs preference pairs, usually chosen and rejected outputs for the same prompt.
- RAG needs retrieval quality and groundedness evaluation, not just good generation.
- MQA/GQA reduce KV cache compared with MHA by sharing key/value heads.
- MoE saves compute per token but creates routing, load-balance, and all-to-all communication problems.
- NIM is the enterprise microservice path; TensorRT-LLM is the lower-level optimized LLM inference engine; Triton is the general inference server.
- Guardrails complement access control and evaluation; they do not replace them.

## Official References

- NVIDIA NCP-GENL certification page: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- TensorRT-LLM documentation: https://nvidia.github.io/TensorRT-LLM/
- TensorRT-LLM GPT attention, in-flight batching, and KV cache: https://nvidia.github.io/TensorRT-LLM/advanced/gpt-attention.html
- TensorRT-LLM KV cache system: https://nvidia.github.io/TensorRT-LLM/features/kvcache.html
- NVIDIA NIM for LLMs: https://docs.nvidia.com/nim/large-language-models/latest/index.html
- Triton Inference Server user guide: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/
- Triton dynamic batching guide: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/tutorials/Conceptual_Guide/Part_2-improving_resource_utilization/README.html
- NeMo SFT and PEFT: https://docs.nvidia.com/nemo-framework/user-guide/24.09/sft_peft/index.html
- NeMo supported PEFT methods: https://docs.nvidia.com/nemo-framework/user-guide/24.09/sft_peft/supported_methods.html
- NeMo QLoRA guide: https://docs.nvidia.com/nemo-framework/user-guide/24.09/sft_peft/qlora.html
- NeMo Guardrails documentation: https://docs.nvidia.com/nemo/guardrails/latest/
- NCCL documentation: https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html


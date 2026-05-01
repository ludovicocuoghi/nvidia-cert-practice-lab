---
domain: Model Optimization
weight: 17
status: populated
---

# Model Optimization

## Certification boundary

This page is the NCP-GENL exam lens for model optimization. Keep quantization, pruning, distillation, FlashAttention, KV-cache optimization, parallelism, TensorRT-LLM, and NVIDIA hardware precision support here because they are tested LLM optimization knowledge. Vendor-neutral serving cost/latency framing belongs in Agentic AI General Study.

## Core ideas you must hold in your head

- **Optimization is a spectrum**, not one technique. **Quantization** reduces **precision**. **Pruning** removes weights. **Distillation** trains a smaller model. **FlashAttention** makes **attention** faster without losing accuracy. The exam tests which technique fits which constraint.
- **Quantization** is the most heavily tested optimization. **FP8**, **INT8**, **INT4**, FP4 — each has specific use cases, hardware requirements, and accuracy tradeoffs. NVIDIA H100/B200 **Tensor Cores** natively accelerate **FP8**.
- **FlashAttention** is **IO-aware**, not approximate. It computes EXACT **attention** but fuses operations in SRAM to avoid materializing the full N×N **attention** matrix in HBM. This is a critical exam distinction.
- **KV cache optimization** is a **memory problem**, not a compute problem. The cache grows linearly with batch_size × sequence_length × layers × d_model. MQA/GQA reduce the per-token KV footprint. PagedAttention virtualizes it.
- **TensorRT-LLM** is NVIDIA's inference optimization stack. It combines graph optimization, kernel tuning, **quantization**, and runtime scheduling. The exam tests what happens inside **TensorRT-LLM** vs what's handled elsewhere.

## Mental model

Model optimization sits between **training** and **deployment**:

```
Trained Model
     │
     ▼
┌──────────────────────────────────────────────────┐
│        TensorRT-LLM (NVIDIA optimization)         │
│  ┌────────────┬──────────────┬────────────────┐  │
│  │Quantization│  Pruning     │ Distillation   │  │
│  │FP8/INT8/4  │  Structured/ │ Student-teacher│  │
│  │(↓ precision)│ Unstructured │ (↓ params)     │  │
│  └────────────┴──────────────┴────────────────┘  │
│  ┌────────────┬──────────────┬────────────────┐  │
│  │FlashAttn   │  KV Cache    │ Parallelism    │  │
│  │IO-aware    │  MQA/GQA/    │ Tensor/Pipe/   │  │
│  │(↓ IO)      │  PagedAttn   │ Data (↑ thrpt) │  │
│  └────────────┴──────────────┴────────────────┘  │
│  Kernel Fusion + Graph Optimization + Auto-tuning │
└──────────────────────────────────────────────────┘
     │
     ▼
Deployable Model (via NIM / Triton)
```

Target constraints: **Latency** | **Throughput** | Memory | Accuracy | Cost

## Quantization: the precision ladder

| **Precision** | Bits | Typical use | **GPU** support | Accuracy impact |
| --------- | ---- | ----------- | ----------- | --------------- |
| **FP32** | 32 | Training (master weights) | All GPUs | Baseline |
| **FP16** | 16 | Inference, mixed-**precision** training | V100+ (**Tensor Cores**) | Negligible for most tasks |
| **BF16** | 16 | Training (same range as FP32) | A100+ | Negligible; preferred over **FP16** for training |
| **FP8** | 8 | Inference, training (H100+) | H100, B200 (native) | Small; requires per-tensor scaling (E4M3/E5M2 formats) |
| **INT8** | 8 | Inference | T4, A100, H100 | Small with calibration; PTQ sufficient |
| **INT4** | 4 | Inference (extreme compression) | A100, H100 | Moderate; requires QAT or careful PTQ |
| **FP4** | 4 | Inference (H100/B200 native) | H100, B200 | Moderate; NVIDIA-specific format |

**Exam signals**:
- **E4M3** (**FP8**): 4 exponent bits, 3 mantissa — better for activations and forward pass
- **E5M2** (**FP8**): 5 exponent bits, 2 mantissa — larger dynamic range, better for gradients
- **Post-Training Quantization (PTQ)** calibrates on a small dataset after training. **Quantization-Aware Training (QAT)** simulates **quantization** during training. QAT gives higher accuracy at higher cost.
- **Per-tensor vs per-channel quantization**: Per-channel gives better accuracy for weight **quantization**.

## FlashAttention: the IO-aware breakthrough

**Key insight**: The N×N **attention** matrix does not need to be fully materialized in HBM. By tiling and fusing operations in SRAM, **FlashAttention** computes exact **attention** with drastically less IO.

| Aspect | Standard **Attention** | **FlashAttention** |
| ------ | ------------------ | -------------- |
| **IO complexity** | O(N²) reads/writes to HBM | O(N²/M) HBM accesses (M = SRAM size) |
| **Memory peak** | Full N×N matrix in HBM | Only tiles in SRAM |
| **Attention result** | Exact | Exact (not an approximation) |
| **Speedup** | 1× | 2-8× depending on sequence length |

**Exam trap**: "**FlashAttention** approximates **attention** for speed" — WRONG. It computes exact **attention**, just more efficiently.

## KV Cache optimization

For sequence length S, batch B, L layers, H heads, and d head-dim:

```
KV Cache size = 2 × B × S × L × H × d × bytes_per_element
```

### Reduction strategies

| Strategy | How it works | Memory savings | Quality impact |
| -------- | ------------ | -------------- | -------------- |
| **MQA** | All heads share one K,V set | ~1/h (e.g., 32× for 32 heads) | Small; slightly less expressive |
| **GQA** | Groups of heads share K,V | ~1/g (e.g., 4× for 4 groups) | Very small; practical sweet spot |
| **PagedAttention** | Virtual memory for **KV cache**; non-contiguous blocks | Near-**zero** waste (no fragmentation) | None; KV management only |
| **KV quantization** | Store KV in **INT8**/**FP8** instead of **FP16** | 2× | Small with careful calibration |
| **Sliding window attention** | Limit **attention** to recent W tokens | S/W reduction | Loses long-range dependencies |
| **Multi-turn / prefix caching** | Share KV for common prefixes across requests | Proportional to prefix reuse | None |

**Exam signal**: **KV cache** is the dominant memory consumer for long-sequence, high-batch inference. MQA/GQA are architectural choices at model design time; PagedAttention is a runtime optimization.

## Parallelism strategies

| Strategy | What it splits | Communication | When right |
| -------- | -------------- | ------------- | ---------- |
| **Tensor parallelism** | Weight matrices across GPUs | **All-reduce** every forward/backward pass (high comms) | Model doesn't fit on one **GPU** |
| **Pipeline parallelism** | Layers across GPUs | Send activations between stages (lower comms) | Deep models; **throughput**-focused |
| **Data parallelism** | Batch across GPUs | **All-reduce** gradients (once per step) | Training; model fits on one **GPU** |
| **Sequence parallelism** | Sequence length across GPUs | Collectives on **attention**/LayerNorm | Very long sequences |
| **Expert parallelism** | **MoE** experts across GPUs | All-to-all for expert routing | Mixture-of-Experts models |

**Tensor vs Pipeline — the exam distinction**:
- **Tensor parallelism** splits individual weight matrices. High communication, but reduces per-**GPU memory** for large layers.
- **Pipeline parallelism** splits layers across GPUs. Lower communication, but introduces "bubbles" where GPUs idle.
- Hybrid approaches (tensor within node + pipeline across nodes) are common in practice.

## Kernel fusion and graph optimization

**TensorRT-LLM** applies these optimizations automatically:

- **Kernel fusion**: Combine element-wise operations (**bias** + activation + dropout) into a single **GPU** kernel. Eliminates redundant HBM reads/writes.
- **Layer fusion**: Fuse **attention** + residual + LayerNorm into one kernel.
- **Graph optimization**: Constant folding, dead code elimination, operation reordering.
- **Auto-tuning**: Selects optimal kernel implementations (tile size, thread count) for the specific **GPU** architecture.

**Exam signal**: **Kernel fusion** saves **memory bandwidth** (fewer HBM reads/writes), not compute. Same FLOPs, less data movement.

## Model compression techniques

| Technique | What it does | Retraining needed? | Accuracy impact |
| --------- | ------------ | ------------------ | --------------- |
| **Weight pruning (unstructured)** | **Zero** out individual weights | **Fine-tuning** recommended | Small with <50% sparsity |
| **Weight pruning (structured)** | Remove entire channels/heads | **Fine-tuning** required | Moderate; changes architecture |
| **Knowledge distillation** | Student learns from teacher's logits | Yes (train student) | Depends on student size |
| **Weight clustering** | Group weights into clusters, share values | No | Small with enough clusters |
| **Low-rank factorization** | Decompose weight matrices (SVD) | **Fine-tuning** recommended | Moderate |

**Distillation exam signals**:
- Student trained on teacher's **soft labels** (logits), not just hard labels
- **Temperature** softens teacher's output distribution, revealing inter-class relationships
- Loss typically combines KL divergence (from teacher) + **cross-entropy** (from ground truth)

**Pruning exam signals**:
- Unstructured → sparse matrices; needs hardware sparsity support (A100+ 2:4 sparsity)
- Structured → smaller dense matrices; works on any hardware
- A100 2:4 structured sparsity: exactly 2 non-**zero** values per 4-element block → 2× theoretical **throughput**

## Memory optimization techniques

- **Activation checkpointing**: Don't store all intermediate activations; recompute during backward pass. Trades ~33% more compute for O(√L) memory savings.
- **CPU offloading**: Move optimizer states or infrequently used layers to CPU RAM.
- **Mixed-precision training**: Master weights in FP32, forward/backward in **FP16**/**BF16**. Loss scaling prevents underflow with **FP16**.

## Common exam traps

1. **FlashAttention approximate** — It's EXACT. Speedup comes from IO optimization, not approximation.

2. **INT8 accuracy loss** — With proper calibration (PTQ) or QAT, **INT8** preserves accuracy for most tasks.

3. **MQA vs GQA** — MQA shares one K,V across ALL heads. GQA uses groups. GQA is the practical middle ground.

4. **Tensor vs pipeline** — **Tensor parallelism** has higher **communication overhead**. Pipeline is often better for **throughput** across nodes.

5. **More GPUs** — The exam expects consideration of **communication overhead**, Amdahl's law, and diminishing returns.

6. **FP16 vs BF16** — **BF16** has the same exponent range as FP32 (8 bits), making it stable for training without loss scaling. **FP16** has 5 exponent bits and can overflow/underflow.

7. **KV cache bottleneck** — It's a MEMORY bottleneck. It stores precomputed values to save compute.

8. **Knowledge distillation** — **Distillation** uses the teacher's SOFT output distribution, which contains richer information than hard labels.

## Must-know exam bullets

- **FlashAttention** — uses tiling and recomputation in SRAM; avoids materializing N×N **attention** matrix; mathematically exact
- **MQA** — reduces **KV cache** by 1/h; one K,V set shared across all h **attention** heads
- **GQA** — practical tradeoff; 2-8 groups of heads share K,V; LLaMA 2 70B uses 8 groups
- **KV cache size** — 2 × B × S × L × H × d × bytes_per_element; the "2" is for both K and V
- **PagedAttention** — virtualizes the **KV cache**; eliminates fragmentation; vLLM's key innovation
- **FP8 E4M3 / E5M2** — E4M3 for forward pass, E5M2 for gradients; E5M2 has larger dynamic range
- **2:4 structured sparsity** — A100 supports it; 2 non-zeros per 4-element block; 2× **throughput**
- **BF16** — same range as FP32; 8 exponent bits in both; **BF16** drops mantissa **precision**
- **Tensor parallelism** — high comms (every fwd/bwd), splits weights
- **Pipeline parallelism** — lower comms (activations only), splits layers; introduces bubbles
- **Activation checkpointing** — trades compute for memory; recompute ~33% more, save O(√L) memory
- **PTQ vs QAT** — PTQ needs calibration data; QAT simulates **quantization** during training; QAT > PTQ for **INT4** and below
- **Kernel fusion** — saves **memory bandwidth**, not compute; same FLOPs, fewer HBM transfers

## Hands-on checks

1. A 70B parameter model with 80 layers, 64 heads, d_head=128. Sequence length 4096, batch size 8, **FP16**. What is the **KV cache** size?
2. When would you choose GQA with 8 groups over MQA? What's the memory vs quality tradeoff?
3. A model needs to run on H100. Would you choose **FP8** or **INT8** for inference? Why?
4. You have 4 GPUs and a model that doesn't fit on one. **Tensor parallelism** or **pipeline parallelism** — when does each win?
5. How does **FlashAttention** make training with 32K context length feasible that was previously impossible?

## Key terms to memorize

- **FlashAttention** — IO-aware exact **attention**; tiling + **kernel fusion** in SRAM; 2-8× faster
- **MQA (Multi-Query Attention)** — one K,V set shared across all heads; extreme memory savings
- **GQA (Grouped-Query Attention)** — K,V shared within head groups; practical balance
- **KV cache** — stored past keys and values; dominant memory consumer at long sequences
- **PagedAttention** — virtual memory for **KV cache**; vLLM innovation
- **FP8 E4M3** — 4 exponent, 3 mantissa; better for forward pass / activations
- **FP8 E5M2** — 5 exponent, 2 mantissa; larger dynamic range; better for gradients
- **PTQ** — Post-Training **Quantization**; calibrate on data after training; sufficient for **INT8**
- **QAT** — **Quantization**-Aware Training; simulate **quantization** during training; needed for **INT4**
- **2:4 structured sparsity** — A100+; 2 non-**zero** values per 4-element block; 2× **throughput**
- **Tensor parallelism** — splits weight matrices across GPUs; high communication
- **Pipeline parallelism** — splits layers across GPUs; bubbles but lower comms
- **Kernel fusion** — combine ops into single **GPU** kernel; reduces HBM reads/writes
- **Activation checkpointing** — recompute activations in backward pass; save memory, burn compute
- **Mixed-precision training** — FP32 master weights, **FP16**/**BF16** forward/backward; loss scaling for **FP16**
- **BF16** — bfloat16; same exponent range as FP32; preferred for training stability
- **Knowledge distillation** — student trains on teacher's soft logits with elevated **temperature**
- **Pruning (unstructured)** — **zero** individual weights; sparse; needs hardware sparsity
- **Pruning (structured)** — remove channels/heads; dense and hardware-agnostic

### Top exam traps
- **FlashAttention exact** → it's EXACT; IO-aware does not mean lossy
- **MQA/GQA K,V sharing** → they differ in K,V sharing scheme
- **BF16 vs FP16** → **BF16** has FP32's range; **FP16** needs loss scaling
- **PTQ vs QAT** → QAT needed for **INT4** and below
- **KV cache is memory** → it's a MEMORY problem
- **More GPUs != faster** → **communication overhead**, Amdahl's law
- **Pipeline vs tensor** → pipeline often better across nodes

## Mock signals

Across the mock exams, model-optimization questions repeatedly test these durable ideas:

- **Memory**: often the bottleneck — **KV cache**, **activation memory**, HBM bandwidth, fragmentation, and checkpointing shape LLM performance.
- **Quantization**: a ladder — **FP8**, **INT8**, **INT4**, PTQ, QAT, and calibration have different hardware and quality trade-offs.
- **Attention optimization**: **FlashAttention** is exact and IO-aware; MQA/GQA reduce KV memory differently.
- **Parallelism choice**: tensor, pipeline, data, and **expert parallelism** solve different scaling problems and create communication costs.
- **Compression options**: **distillation**, **pruning**, sparsity, and NAS each have different **deployment** trade-offs.
- **NVIDIA serving stack**: **TensorRT-LLM**, **NIM**, **Triton**, **CUDA** kernels, and **NCCL** appear as separate but complementary optimization layers.

Evidence source: `mock_1` through `mock_5`, especially **TensorRT-LLM**, **quantization**, **FlashAttention**, **KV cache**, parallelism, **kernel fusion**, **distillation**, **pruning**, and activation checkpointing questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 17%
- **What it covers:** Optimize LLM inference and memory while preserving quality.
- **Use this section when:** Study this when constraints mention **latency**, **throughput**, memory, cost, or accuracy tolerance.
- **Common trap:** Weight **quantization** does not solve every memory problem; long-context **serving** is often KV-cache-bound.
- **Scenario signal:** A 70B model needs high concurrency with mixed prompt lengths under a **TTFT** **SLA**.

### Study notes

- **Memory taxonomy**: 4 distinct pools you must separate on the exam:
  1. **Weight memory**: Model parameters (70B params × 2 bytes **FP16** = 140 GB). Reduced by **quantization** (**INT8** = 70 GB, **INT4** = 35 GB). This is what **INT8**/**FP8**/**INT4**/AWQ/GPTQ target.
  2. **Activation memory**: Intermediate tensors during forward pass. Scales with batch_size × seq_len × hidden_dim. Reduced by activation checkpointing (recompute instead of store — ~33% more compute for O(√L) memory savings) and sequence parallelism.
  3. **KV-cache memory**: Stored past keys and values for autoregressive generation. Formula: `2 × B × S × L × H × d × bytes_per_element`. This grows linearly with sequence length and batch size. Reduced by MQA (1/h reduction), GQA (1/g reduction), PagedAttention (eliminates fragmentation, ~40% savings), and KV **quantization** (**INT8** KV = 2× reduction). **Critical exam distinction**: weight **quantization** does NOT reduce **KV-cache memory**. A 70B model quantized to **INT4** still has the same KV-cache as **FP16**.
  4. **Optimizer states**: Adam's momentum (m) and variance (v) — 2× model weights in FP32. Only relevant during training. Reduced by **ZeRO**/**FSDP** sharding.

- **Bottleneck-first diagnosis**: exam framework
  - High **TTFT** (Time To First Token) → Prefill bottleneck. Check: long prompts, chunked prefill disabled, insufficient parallelism for prompt processing.
  - Low **tokens/sec** during decode → Memory-bandwidth-bound (loading weights from HBM dominates) or KV-cache-bound (can't fit larger batch). Solution: **quantization** for weight-bandwidth, KV-cache optimization for KV-bound.
  - **GPU** SMs idle ~30% → Prefill/decode imbalance. Enable chunked prefill to interleave prefill chunks with decode steps.
  - **p99 latency** spikes under load → Batching or queueing issue. Check max_queue_delay_microseconds, consider **CUDA** graphs for decoder loop.
  - OOM but model fits → KV-cache fragmentation or activation spike. Enable PagedAttention, reduce batch, or enable activation checkpointing.

- **Quantization decision framework**:
  - **FP16** → **INT8**: PTQ with calibration (SmoothQuant α=0.5-0.85). Typically <1% quality loss. Works on A100+.
  - **FP16** → **FP8**: Native on H100. E4M3 for forward activations, E5M2 for gradients. **Transformer** Engine handles dynamic **precision**.
  - **FP16** → **INT4**: Needs AWQ (protects salient channels identified by activation magnitude) or GPTQ (layer-wise Hessian-based compensation). ~2-4% quality loss acceptable for many tasks. QAT needed for sub-**INT4** or high-quality requirements.
  - PTQ calibrates on 512-1024 representative samples. QAT simulates **quantization** during training — higher accuracy, higher cost. For **INT8**, PTQ is sufficient. For **INT4**, AWQ/GPTQ with careful calibration matches QAT quality.

- **Continuous (in-flight) batching**: Unlike static batching (wait for all requests to finish before starting new batch), **continuous batching** allows requests to join and leave the running batch as they complete. A request that generates 10 tokens doesn't hold up a request that generates 500 tokens. This is THE key **throughput** optimization for variable-length generation. Works with PagedAttention for memory efficiency.

- **Speculative decoding**: Small draft model (1-3B) generates k tokens autoregressively → large target model verifies all k in one forward pass → accept tokens that match target distribution, reject and regenerate those that don't. Speedup depends on acceptance rate (need 70%+ for meaningful gains). No quality loss — output is identical to target model alone. Draft model should be from same model family, fine-tuned on same data.

### Must know

- **INT8 quantization**: 8-bit integer weights/activations. Post-Training **Quantization** (PTQ) with calibration on 512-1024 samples. ~2× memory reduction, ~2× **throughput**. Works on T4, A100, H100. SmoothQuant handles activation outliers by migrating **quantization** difficulty to weights via per-channel scaling (α typically 0.5-0.85).
- **FP8 quantization**: 8-bit floating point, native on H100 (4th-gen **Tensor Cores**). Two formats: E4M3 (4 exponent, 3 mantissa — better for forward/activations) and E5M2 (5 exponent, 2 mantissa — larger dynamic range, better for gradients). **Transformer** Engine dynamically selects per layer.
- **INT4 quantization**: 4-bit integer weights. AWQ (Activation-aware Weight **Quantization** — protects salient weight channels) or GPTQ (layer-wise Hessian-based). ~4× memory reduction, ~3-4× **throughput**. Needs careful calibration; QAT recommended for quality-critical workloads.
- **KV cache**: Stores past Key and Value tensors to avoid recomputing them at each autoregressive step. Size = 2 × batch × seq_len × layers × heads × head_dim × bytes. For 70B model at 32K context, batch 8, **FP16**: ~70 GB for **KV cache** alone. THIS is the dominant memory consumer at long context, not weights.
- **Continuous (in-flight) batching**: Requests dynamically added/removed from running batch. Eliminates the "short request waits for long request" problem. Key enabler for production LLM **serving**. Works with PagedAttention for memory efficiency.
- **Speculative decoding**: Draft model generates k tokens → target model verifies in parallel. No quality loss. Speedup = 1.5-3× depending on acceptance rate. Draft model should be 1-3B, same family.
- **TensorRT-LLM**: NVIDIA's LLM inference optimization framework. Compiles model graph, fuses kernels, applies **quantization**, manages **KV cache** (PagedAttention), schedules **continuous batching**. The engine underneath **NIM** and **Triton** for LLM workloads.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Weight memory too large | **Quantization** (INT8/FP8/INT4 with calibration) | Assuming KV cache also shrinks |
| Long-context OOM during inference | **KV-cache** optimization: PagedAttention, MQA/GQA, KV quantization | Only quantizing weights |
| Variable-length concurrent requests | **Continuous/in-flight batching** | Static batching that waits for long generations |
| High TTFT | Prefill optimization, chunked prefill, prompt length reduction | Tuning decode-only settings first |
| High TPOT | Weight bandwidth, kernel fusion, quantization, decode scheduling | Treating it as a data preparation issue |
| H100 low-precision acceleration | **FP8** with Transformer Engine | INT4 by default when quality floor is strict |
| Need smaller model with similar behavior | **Distillation** from teacher to student | Pruning randomly without evaluation |
| Training OOM from optimizer states | **ZeRO/FSDP** or activation checkpointing | Inference batching controls |
| Quality drops after INT4 | AWQ/GPTQ calibration or higher precision | Calling quantization "free" |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| Weight quantization vs **KV-cache** quantization | Weight quantization shrinks parameters; KV quantization shrinks stored K/V tensors during generation. |
| Static batching vs continuous batching | Static batches wait for all requests; continuous batching lets requests join/leave during decode. |
| **TTFT** vs **TPOT** | TTFT is prefill/queue time to first token; TPOT is per-output-token decode latency. |
| **FP8** vs **INT8** | FP8 is floating point and H100-native; INT8 is integer quantization often using calibration. |
| **Distillation** vs fine-tuning | Distillation trains a smaller student from a teacher; fine-tuning adapts a model to data or preferences. |
| **TensorRT-LLM** vs **NIM** | TensorRT-LLM is the optimization/runtime engine; NIM is packaged serving around optimized models. |
| Pruning vs quantization | Pruning removes structure/weights; quantization lowers numerical precision. |

### Mini scenario drill

1. Scenario: A 70B INT4 model still OOMs at 32K context and batch 8.
   Best answer pattern: Diagnose **KV-cache memory**; use PagedAttention, MQA/GQA, or KV quantization.
   Trap: Quantizing weights again.

2. Scenario: Chat traffic has many short and long generations mixed together.
   Best answer pattern: Enable **continuous batching** so completed requests leave and new ones join during decode.
   Trap: Static batching with one long request blocking short ones.

3. Scenario: INT4 improves throughput but answer quality drops below the SLA.
   Best answer pattern: Recalibrate with representative data, use AWQ/GPTQ, or raise precision to INT8/FP8.
   Trap: Ignoring the quality floor because latency improved.

### High-yield exam signals

- **TTFT** (Time To First Token): Prefill **latency**. High **TTFT** → long prompts or insufficient parallelism for prompt processing. Solution: chunked prefill.
- **TPOT** (Time Per Output Token): Decode **latency**. High TPOT → memory-bandwidth-bound (weight loading) or **KV-cache memory** pressure. Solution: **quantization** or KV-cache optimization.
- **OOM** during inference: Check KV-cache size (not just model weights). PagedAttention or KV **quantization**.
- **OOM** during training: Check optimizer states (Adam = 2× weights in FP32). Enable **ZeRO**/**FSDP** or activation checkpointing.
- **Quality floor**: The minimum acceptable accuracy for a given optimization. Calibrate **quantization** against this. If **INT8** stays within quality floor, there's no reason to use **FP16**.
- **Concurrency**: Number of simultaneous requests. High concurrency + variable lengths → **continuous batching** is essential. Static batching collapses under this pattern.

### Hands-on checks

1. **Classify an optimization as reducing**: weights (**quantization**, **pruning**), activations (checkpointing, sequence parallelism), **KV cache** (MQA/GQA, PagedAttention, KV **quantization**), launch overhead (**kernel fusion**, **CUDA** graphs), or queueing (**continuous batching**, dynamic_batching config).
2. **Calculate KV-cache size**: For a 70B model with 80 layers, 64 heads, d_head=128, seq=4096, batch=8, **FP16**. Answer: 2 × 8 × 4096 × 80 × 64 × 128 × 2 bytes = ~68.7 GB.
3. **Diagnosis drill**: "A model at **INT4** has high **throughput** but users report bad answers. What's wrong?" → Check if quality was evaluated. **INT4** without AWQ/GPTQ calibration can lose significant accuracy. **Quantization** is a quality trade-off, not free.
4. **Bottleneck identification**: "**p99 latency** spikes at 200 concurrent users but **GPU** utilization is 60%." → Queueing/batching issue. Lower max_queue_delay_microseconds, align preferred_batch_size to engine sweet spots, check that **continuous batching** is enabled.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when constraints mention **latency**, **throughput**, memory, cost, or accuracy tolerance.
- The major trap pattern is: Weight **quantization** does not solve every memory problem; long-context **serving** is often KV-cache-bound.
- Recurring local question themes follow the key ideas: **quantization**, **TensorRT-LLM**, **KV cache**, **continuous batching**, **speculative decoding**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_2 Q22** / `m1-022`: Multiple answers: What advantages does model **quantization** provide in LLM **deployment**? Select two. Correct idea: It enables faster inference **throughput** by leveraging hardware-accelerated low-**precision** arithmetic units such as **INT8** Tensor Co.... Trap: Reducing model size and memory by 2 to 8x through lower **precision** is indeed a key advantage of **quantization** -- this s...
- **mock_3 Q32** / `m2-032`: What is gradient checkpointing and why is it useful for training large language models? Correct idea: Gradient checkpointing trades computation for memory by recomputing activations during backpropagation instead of storing them,.... Trap: This describes gradient checking (numerical verification of analytical gradients), a debugging technique. Gradient ch...
- **mock_3 Q33** / `m2-033`: What is **mixed precision** training and how does it accelerate LLM training? Correct idea: **Mixed precision** training uses lower **precision**, such as **FP16** or **BF16**, for most operations while keeping critical operations in F.... Trap: This describes a **learning rate** schedule with alternating high/low values. **Mixed precision** training keeps the learning...
- **mock_3 Q42** / `m2-042`: What is gradient accumulation and when is it useful in LLM training? Correct idea: Gradient accumulation splits a large batch into smaller micro-batches, accumulating gradients across micro-batches before updat.... Trap: This describes **monitoring** gradient statistics for numerical stability detection. Gradient accumulation simply sums gr...
- **mock_4 Q42** / `m3-042`: What is the purpose of **quantization** in vector databases? Correct idea: Reducing memory footprint of **embeddings** by representing them with lower **precision**, such as float16 or **int8** instead of float32. Trap: Vector **quantization** reduces memory by lowering numerical **precision**, not generates timestamps for **versioning** entries -...
- **mock_5 Q4** / `m4-004`: Why is Xavier initialization commonly used for initializing weights in deep neural networks for NLP tasks? Correct idea: It sets weights proportional to the number of input and output connections, helping maintain consistent variance of activations.... Trap: Xavier initialization scales weights based on the layer's input and output dimensions to maintain consistent activati...
- **mock_5 Q5** / `m4-005`: Multiple answers: What is the purpose of weight decay when training large language models? Select two. Correct idea: To act as implicit regularization that constrains model complexity, improving generalization to unseen data by encouraging smal.... Trap: Weight decay penalizes large weight values to encourage simpler models and reduce **overfitting**, not decreases the effe...
- **mock_5 Q16** / `m4-016`: Multiple answers: What is the purpose of gradient clipping during LLM training? Select two. Correct idea: To maintain stable training dynamics by ensuring that no single batch produces disproportionately large parameter updates that.... Trap: Gradient clipping caps the magnitude of gradients to prevent exploding gradients, not removes small gradients below a...
- **mock_5 Q17** / `m4-017`: What is **learning rate** warmup and why is it beneficial when training large language models from scratch? Correct idea: It gradually increases the **learning rate** from a small value to the target **learning rate** over initial training steps, preventing.... Trap: **Learning rate** warmup gradually increases the **learning rate** from a small value to the target rate over initial trainin...
- **mock_5 Q19** / `m4-019`: In knowledge **distillation**, what is the relationship between the teacher model and the student model? Correct idea: The teacher is a larger, well-trained model that guides the training of a smaller student model by providing soft targets that.... Trap: In knowledge **distillation**, the teacher model actively guides student training by providing soft target probabilities...
- **mock_5 Q20** / `m4-020`: What is the key difference between the Adam and AdamW optimizers when training large language models? Correct idea: AdamW implements weight decay correctly by decoupling it from the gradient-based update, while Adam incorrectly couples weight.... Trap: Adam and AdamW maintain the same optimizer state (momentum and variance buffers) and therefore use essentially identi...
- **mock_5 Q34** / `m4-034`: Multiple answers: What is model **pruning**, and how can it reduce LLM inference costs? Select two. Correct idea: Structured **pruning** removes entire neurons, **attention** heads, or layers rather than individual weights, producing smaller dense m.... Trap: This statement is correct -- removing or zeroing out unimportant weights, neurons, or **attention** heads based on import...
- **mock_5 Q46** / `m4-046`: What is **attention** head **pruning** in **transformer** models, and why is it beneficial for model **deployment**? Correct idea: A technique that removes less important **attention** heads from a trained **transformer** model to reduce model size and inference lat.... Trap: **Attention** head **pruning** removes **attention** heads from a trained **transformer** model to reduce computation, not removes lo...
- **mock_5 Q49** / `m4-049`: Multiple answers: What is activation checkpointing, and how does it help train large language models with limited **GPU memory**? Select two. Correct idea: It enables training models with significantly more parameters on the same **GPU** hardware by reducing peak memory consumption for.... Trap: Activation checkpointing is a memory optimization technique that trades computation for memory by selectively storing...
- **mock_5 Q50** / `m4-050`: What is cosine annealing as a **learning rate** schedule, and why is it often preferred for training large language models? Correct idea: A **learning rate** schedule that decreases the **learning rate** following a cosine curve from initial value to minimum, providing smo.... Trap: Cosine annealing is a **learning rate** schedule that decreases the **learning rate** following a cosine curve, not an optimi...
- **mock_6 Q17** / `m5-017`: Multiple answers: What are key advantages of the Adam optimizer over standard SGD for training language models? Select two. Correct idea: Adam handles sparse gradients effectively and converges faster in early training iterations compared to SGD, which is particula.... Trap: Option A describes "Adam requires less memory than SGD" but the question asks about Multiple answers: What are key ad...
- **mock_6 Q18** / `m5-018`: When training a neural network, what is the impact of using a **learning rate** that is too small? Correct idea: Training will be very slow, potentially getting stuck in local minima and requiring many epochs to converge. Trap: Option B describes "The model will fail to learn anything at all" but the question asks about When training a neural...
- **mock_6 Q41** / `m5-041`: How does batch size affect model training, and what is gradient accumulation? Correct idea: Larger batches provide more stable gradients but require more memory; gradient accumulation simulates larger batches by accumul.... Trap: Option A makes an absolute claim using "always": "Larger batches always lead to better performance". Absolute stateme...
- **mock_6 Q47** / `m5-047`: What are warmup steps in **learning rate** scheduling, and why are they important for training large language models? Correct idea: Warmup steps gradually increase the **learning rate** from **zero** to the target **learning rate** over the initial training period to pre.... Trap: Option A describes "Warmup steps reduce batch size gradually" but the question asks about What are warmup steps in le...
- **mock_6 Q50** / `m5-050`: What is Stochastic Weight Averaging, and how can it improve final model performance? Correct idea: SWA averages model weights from multiple checkpoints near the end of training to find flatter minima with better generalization. Trap: Option A describes "SWA randomly zeros out weights during training" but the question asks about What is Stochastic We...
- **mock_1 Q1** / `opt-001`: A 70B-parameter chat model must serve ≥3,000 concurrent requests on H100s while keeping **ROUGE**-L within 1 point of the **FP16** baseline. Which **quantization** recipe is the b... Correct idea: AWQ 4-bit weight **quantization** with **FP16** activations and a 512-prompt calibration set drawn from production traffic. Trap: Per-tensor **INT8** without calibration almost always loses several **ROUGE** points on instruction-tuned chat models because...
- **mock_1 Q2** / `opt-002`: You are deploying Llama-3.1-70B with **TensorRT-LLM** and want maximum **throughput** for variable-length chat prompts (200–4,000 tokens) under a 200 ms **TTFT** **SLA**. Which combin... Correct idea: In-flight (continuous) batching with **paged KV cache** and chunked prefill. Trap: Padding to the longest sequence wastes **GPU** compute on shorter prompts and causes head-of-line blocking, which violate...
- **mock_1 Q3** / `opt-003`: A team quantizes a 13B model to **INT8** using SmoothQuant and observes that **perplexity** on a held-out set jumps from 6.4 to 9.1. What is the most likely root cause? Correct idea: The smoothing α was set too low, leaving large activation outliers in the quantized path. Trap: SmoothQuant was designed for **decoder-only** LLMs; it works on Llama, GPT-class models routinely.
- **mock_1 Q4** / `opt-004`: For an inference workload dominated by long-context (32K) summarization, what is the most cost-effective optimization to reduce **KV-cache memory** pressure without retrai... Correct idea: Switch from **FP16** **KV cache** to **INT8** **KV cache** with per-head scaling. Trap: Disabling **RoPE** breaks the model entirely.
- **mock_1 Q5** / `opt-005`: A medical-summarization service must keep top-1 accuracy on a domain benchmark within 0.5% of **FP16**. The team currently serves at **FP16** on A100s and wants to move to **FP8**... Correct idea: Calibrate **FP8** scaling factors using a domain-representative subset of medical text. Trap: A single global scale loses **precision** on layers with very different magnitude ranges; per-tensor or per-channel scale...
- **mock_1 Q6** / `opt-006`: You compress a 175B teacher into a 13B student via knowledge **distillation** for low-**latency** **serving**. Which loss combination usually yields the best instruction-following... Correct idea: KL divergence between teacher and student on next-token distributions, plus standard **SFT** loss on instruction data. Trap: Hard-label CE alone discards the teacher's distributional information, which is the main signal in **distillation**.
- **mock_1 Q7** / `opt-007`: **Triton Inference Server** is **serving** a **TensorRT-LLM** engine. **p99 latency** spikes when concurrent users jump from 50 to 200. Which **Triton** parameter most directly addresses... Correct idea: `dynamic_batching.max_queue_delay_microseconds` lowered, with `preferred_batch_size` aligned to engine sweet spots. Trap: Many instance groups on a single **GPU** contend for the same SMs and **KV cache** memory, often making p99 worse, not better.
- **mock_1 Q8** / `opt-008`: A team wants **speculative decoding** to accelerate a 70B target model. Which draft-model choice gives the best acceptance rate / cost ratio? Correct idea: A 1B–3B distilled or pruned model from the same family, fine-tuned on the same instruction data as the target. Trap: A different-family draft has low acceptance, which collapses the speedup.
- **mock_1 Q9** / `opt-009`: In **TensorRT-LLM**, what is the most appropriate use of `gpt_attention_plugin` with **paged KV cache**? Correct idea: To enable variable-length sequences in a batch with non-contiguous **KV cache** pages, supporting **in-flight batching**.
- **opt-010** / `opt-010`: You must decide between **INT4**-AWQ and **INT4**-GPTQ for a 34B code-generation model. **Latency** and memory targets are equal; the team has a high-quality 1,024-prompt calibrat... Correct idea: AWQ identifies and protects salient weight channels driven by activation magnitude, which helps preserve code-generation accura.... Trap: GPTQ supports 4-bit and lower.
- **opt-011** / `opt-011`: A service needs sub-50 ms **TTFT** with ≤2% **INT4** vs **FP16** accuracy gap on a 13B model. Profile shows **attention** is the hot kernel. Which **TensorRT-LLM** feature gives the large... Correct idea: **CUDA** graphs for the decoder loop combined with **FlashAttention**-2 fused kernel. Trap: Larger beam width increases compute and **latency**.
- **opt-012** / `opt-012`: When converting a fine-tuned Hugging Face model to **TensorRT-LLM**, the build fails on an unsupported operator. What is the first thing to check? Correct idea: The architecture mapping in `convert_checkpoint.py` and whether the custom layer needs a TRT-LLM plugin or an opset workaround.
- **opt-013** / `opt-013`: Per-channel weight **quantization** vs per-tensor weight **quantization** — when is per-channel strictly preferred for inference? Correct idea: When weight magnitudes vary widely across output channels (typical of **attention** projections).
- **opt-014** / `opt-014`: Which symptom most strongly suggests that **pruning** has gone too far on a **transformer** LLM? Correct idea: Sharp degradation on multi-step reasoning benchmarks while simple **recall** tasks remain stable.
- **opt-015** / `opt-015`: A team enables **continuous batching** but **throughput** barely changes. Profiling shows **GPU** SMs idle ~30% of the time waiting on prefill. What should they enable next? Correct idea: Chunked prefill so long prompts are split and interleaved with decode iterations.
- **opt-016** / `opt-016`: For a 70B model on 8× H100 80GB with NVLink, what tensor-parallel degree usually optimizes per-token **throughput** for short generations (≤128 output tokens)? Correct idea: TP=4 with PP=2 — balancing memory and reducing **all-reduce** volume. Trap: TP=16 is impossible on 8 GPUs.
- **opt-017** / `opt-017`: An ONNX-exported model produces correct outputs in ONNX Runtime but slightly different outputs after TensorRT engine build. Which is the likeliest cause? Correct idea: TensorRT applied layer fusion and **FP16** **precision** flags that change numerical ordering — small numerical **drift** is expected and o....

</details>

<!-- STUDY_ENRICHMENT_END -->

---
service: Nsight Compute
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# Nsight Compute

## At a glance

| | |
|---|---|
| **What it is** | Desktop profiling application (GUI + CLI) — single CUDA kernel deep-dive analysis |
| **How you access it** | CLI: `ncu --set full --kernel-name ".." python my_script.py`, GUI: `ncu-ui` (CUDA Toolkit) |
| **Input** | Specific CUDA kernel (identified by Nsight Systems as bottleneck) |
| **Output** | Kernel report: occupancy, memory bandwidth, warp stalls, roofline, instruction mix |
| **Role** | SECOND profiling tool — answers "why is this specific kernel slow?" |

```bash
ncu --set full --kernel-name "attention_kernel" -o kernel_profile python my_script.py
ncu-ui kernel_profile.ncu-rep  # GUI: roofline, warp stalls, register pressure
ncu --print-summary --kernel-name "attention_kernel" python my_script.py  # CLI summary
```

**Mental model**: once Nsight Systems says WHICH kernel is slow, run `ncu --kernel-name` on it to find WHY — low occupancy? uncoalesced access? register pressure?

---

## What it is, in one paragraph

NVIDIA's **kernel-level** GPU performance analysis tool. Nsight Compute profiles individual CUDA kernels, providing detailed metrics on occupancy, memory bandwidth, compute utilization, and instruction throughput. It is the **deep-dive tool** — used after Nsight Systems has identified which kernel is the bottleneck.

## Where it sits in the lifecycle

**Monitoring / optimization** — the kernel-level profiling stage. Used AFTER system-level profiling (Nsight Systems) has identified a hot kernel.

```
[Nsight Systems: identifies GPU kernel as bottleneck]
     ↓
[Nsight Compute: profiles that specific kernel → occupancy, bandwidth, utilization]
     ↓
[Optimize kernel based on detailed metrics]
```

## When it is the right answer

- Kernel-level GPU performance analysis: "Why is this specific kernel slow?"
- Detailed metrics: occupancy, memory bandwidth, warp utilization, instruction throughput
- Optimizing individual CUDA kernel performance
- Questions that mention "kernel analysis," "occupancy," or "individual kernel profiling"

## When it is the wrong answer (common trap)

- **First tool for system-level questions**: That's Nsight Systems. Nsight Compute is the second tool in the workflow (mock_1 platform-005).
- **"First tool for all system-level questions"**: Explicitly wrong in mock_1 platform-005. Use Nsight Systems for system-level; Nsight Compute for kernel-level.
- **Model serving**: That's NIM or Triton.
- **Safety filtering**: That's NeMo Guardrails.
- **GPU communication**: That's NCCL.
- **GPU status monitoring**: That's NVIDIA SMI.

## How it relates to neighboring services

- vs **Nsight Systems**: **The most important distinction.** Systems = system-level timeline (first tool, "where?"). Compute = kernel-level deep dive (second tool, "why?"). The exam tests this ordering explicitly.
- vs **NVIDIA SMI**: SMI = snapshot status. Nsight Compute = detailed kernel analysis.
- vs **Triton Inference Server**: Triton serves models. Nsight Compute profiles how fast individual GPU operations run.

## Numbers, defaults, knobs you should recognize

- Kernel-level metrics: occupancy, memory bandwidth, compute utilization
- Used after system-level bottleneck identification
- Focused on individual kernel optimization, not system-wide analysis

## Example exam-style scenario

> After Nsight Systems identifies that an attention kernel dominates LLM inference time, which tool provides detailed analysis of that kernel's performance?
>
> **Answer**: Nsight Compute — the kernel-level profiling tool for detailed GPU performance analysis.

## Mock signals

| Mock | Questions | Signal |
| ---- | --------- | ------ |
| mock_1 | platform-005 | "Nsight Compute is kernel-level after the hot kernel is known" — explicitly tested as a distractor against Nsight Systems for system-level questions |

## Deep Dive Contents

This deep dive covers the key concepts behind Nsight Compute that the exam tests:

- **[Kernel-Level Profiling]**: occupancy, memory bandwidth utilization, register pressure, shared memory usage, warp stall classification, and roofline analysis
- **[Roofline Analysis]**: operational intensity vs FLOP/s — classifying kernels as memory-bound or compute-bound relative to H100 ceilings
- **[Common Kernel Issues]**: low occupancy from register pressure, uncoalesced memory access, bank conflicts, and launch overhead from too many small kernels
- **[Tensor Core Utilization]**: verifying `mma.sync` instructions, conditions for Tensor Core activation, and why kernels fall back to CUDA cores

## DEEP DIVE: Kernel-Level Profiling

Nsight Compute profiles individual CUDA kernels with detailed hardware counter measurements, revealing exactly why a kernel is not achieving theoretical peak performance.

**Key Metrics Captured**

- **SM Utilization:** Percentage of streaming multiprocessors actively executing instructions during the kernel lifetime. Low SM utilization (< 50%) suggests the kernel is stalled on memory, synchronization, or pipeline hazards rather than doing useful computation.
- **Memory Bandwidth Utilization:** Achieved memory throughput as a fraction of peak device bandwidth (H100 SXM: **3.35 TB/s HBM3**). Memory-bound kernels typically achieve > 60% of peak bandwidth. Utilization far below peak (< 30%) indicates access pattern issues (uncoalesced access, low memory-level parallelism).
- **Occupancy:** The ratio of active warps to the maximum supported warps per SM. Expressed as a percentage. Higher occupancy helps hide memory latency by allowing the SM to context-switch to another warp while one waits. **Typical target:** >= 50%. However, high occupancy alone does not guarantee high performance -- the bottleneck type determines whether more warps help.
- **Register Pressure:** The number of 32-bit registers used per thread. H100's register file is **65,536 registers per SM (256 KB)**. High per-thread register usage limits the number of concurrent threads (occupancy). A kernel using 64 registers/thread can fit fewer warps per SM than one using 32 registers/thread.
- **Shared Memory Usage:** On-chip SRAM per SM (up to **228 KB per SM on H100**), configurable with L1 cache. Used for explicit data sharing and caching within thread blocks. High shared memory usage reduces the number of thread blocks that can reside simultaneously on an SM, lowering occupancy.
- **Instruction Mix:** The proportion of compute instructions (arithmetic, Tensor Core `mma`, special function) vs. memory instructions (global load/store, shared load/store). A kernel with > 70% memory instructions is almost certainly memory-bound. Tensor Core `mma` instructions indicate Tensor Core utilization; their absence (replaced by `fma`) indicates a fallback to CUDA cores.
- **Warp State Classification:** Breakdown of warp stall reasons (waiting for data from memory, waiting for scoreboard, waiting for execution unit, waiting for synchronization). This is the most actionable metric -- it tells you exactly why warps are stalled.

**Metric Relationships**
- **Occupancy vs. Register Pressure:** Too many registers/thread reduces occupancy. Fix: use `__launch_bounds__` or `-maxrregcount` compiler flag to cap register usage, or restructure the kernel to reduce live variables.
- **Memory Bandwidth vs. Occupancy:** Low bandwidth utilization + high occupancy = each warp requests few bytes or accesses non-contiguous memory (uncoalesced). Low bandwidth + low occupancy = kernel is not issuing enough memory requests to keep the bus busy, or is compute-bound.
- **Occupancy vs. Performance Diminishing Returns:** Once occupancy is above ~50%, further increases typically yield small gains. The priority should be on addressing the specific stall reason, not maximizing occupancy.

## DEEP DIVE: Roofline Analysis

The roofline model is a visual framework that plots kernel performance (FLOP/s) against operational intensity (FLOP/byte) to classify kernels as compute-bound or memory-bound. Nsight Compute generates this plot automatically.

**How the Roofline is Constructed**
- **Y-axis:** Achieved performance in FLOP/s (GFLOPS or TFLOPS).
- **X-axis:** Operational intensity = total FLOP performed / total bytes moved to/from HBM (not including L1/L2 cache hits).
- **Memory bandwidth ceiling:** A sloped line: Achievable FLOP/s = operational intensity x peak memory bandwidth. For H100: 3.35 TB/s x operational intensity.
- **Compute ceiling:** A horizontal line at the peak computational throughput for the relevant datatype. Multiple ceilings exist for different precisions.
- **Ridge point:** The intersection of the memory and compute ceilings. The minimum operational intensity needed to achieve peak compute performance. Below the ridge: memory-bound. Above the ridge: compute-bound.

**H100 Reference Ceilings**
- HBM3 bandwidth: **3.35 TB/s**
- FP8 Tensor Core peak: **1,979 TFLOPS** (dense) / 3,958 TFLOPS (sparse)
- FP16 Tensor Core peak: **989 TFLOPS** (dense) / 1,979 TFLOPS (sparse)
- TF32 Tensor Core peak: 494 TFLOPS
- INT8 Tensor Core peak: 1,979 TOPS
- FP32 CUDA core peak: ~60 TFLOPS
- Ridge point (FP8 dense): 1,979 TFLOPS / 3.35 TB/s = **~591 FLOP/byte**
- Ridge point (FP16 dense): 989 TFLOPS / 3.35 TB/s = **~295 FLOP/byte**

A kernel achieving 500 TFLOPS on FP16 at an operational intensity of 100 FLOP/byte is memory-bound (it falls below the ridge at 295 FLOP/byte, and its maximum achievable performance is 100 x 3.35 TB/s = 335 TFLOPS, which is below the compute ceiling).

**Optimization Strategy by Roofline Position**

| Roofline Position | Diagnosis | Optimization Strategy |
|-------------------|-----------|----------------------|
| Below memory ceiling (memory-bound) | Kernel is starved for data | Reduce data movement: kernel fusion, shared memory tiling (FlashAttention), data compression, quantization |
| Below compute ceiling (compute-bound) | Kernel saturates memory bandwidth but not compute | Reduce operations: use Tensor Cores, quantization, pruning, or algorithmic changes |
| At ridge point (balanced) | Both memory and compute near peak | Difficult to improve further; consider algorithmic changes or reducing precision |
| Well below both ceilings | Kernel has fundamental inefficiency | Fix access patterns, occupancy, or instruction mix before ceiling-specific optimization |

## DEEP DIVE: Common Kernel Issues

Nsight Compute diagnoses these recurring performance problems by name, with specific metrics to confirm each diagnosis.

**1. Low Occupancy from Register Pressure**
- **Symptom:** Achieved occupancy < 50% with no shared memory limitation.
- **Root cause:** Compiler allocates too many registers per thread. Common in complex kernels with many live variables.
- **Nsight Compute signal:** "Register Count" per thread is high (e.g., > 64). "Achieved Occupancy" is significantly below "Theoretical Occupancy" without shared memory limit.
- **Fixes:**
  - `__launch_bounds__(maxThreadsPerBlock, minBlocksPerSM)` to guide the compiler.
  - `-maxrregcount=32` (or similar cap) at compile time.
  - Adjust block size to 256 or 512 threads (typically better occupancy than 128 or 1024).
  - Split complex kernels into smaller sub-kernels to reduce live register count.

**2. Uncoalesced Memory Access**
- **Symptom:** Memory bandwidth utilization < 30% on a kernel classified as memory-bound.
- **Root cause:** Threads in the same warp access non-adjacent memory addresses. The GPU issues separate 32-byte transactions for each access instead of a single 128-byte transaction that covers all addresses.
- **Nsight Compute signal:** "Global Load Efficiency" and "Global Store Efficiency" < 50%. "L2 Hit Rate" may be poor. "Sector Misses" are elevated.
- **Fixes:**
  - Restructure data from Array of Structs (AoS) to Struct of Arrays (SoA) so per-thread data is contiguous.
  - Align thread indexing with memory layout: `data[threadIdx.x]` (coalesced) vs `data[threadIdx.x * bigStride]` (not coalesced).
  - Use shared memory as a software-managed cache: read non-coalesced inputs into shared memory (where bank conflicts are the concern), then read coalesced from shared memory.

**3. Bank Conflicts in Shared Memory**
- **Symptom:** Shared memory operations contribute significant stall time despite the kernel not being shared-memory-heavy.
- **Root cause:** Shared memory is divided into 32 banks (4 bytes each, 128 bytes per bank group). When multiple threads in the same warp access different addresses that map to the same bank, accesses are serialized. No penalty if all threads access the same address (multicast) or different banks.
- **Nsight Compute signal:** "Shared Memory Bank Conflicts" > 0. Effective shared memory bandwidth drops proportionally to the degree of conflicts.
- **Fixes:**
  - Pad shared memory dimensions to shift data off bank boundaries: `__shared__ float data[32][32 + 1]` instead of `[32][32]`.
  - Use swizzle patterns to redistribute data across banks.
  - On H100, leverage shared memory with 128-byte bank groups (a newer architecture feature reducing conflict probability for certain patterns).

**4. Launch Overhead from Too Many Small Kernels**
- **Symptom:** GPU timeline shows hundreds of very short kernel spans (< 5 microseconds each) with gaps between them. Overall GPU utilization is low despite many kernel launches.
- **Root cause:** The application launches many small, independent operations as separate kernels instead of combining them. Each kernel launch incurs CPU-side scheduling overhead (argument setup, queue submission), which for very short kernels can exceed the kernel's own runtime.
- **Nsight Compute signal:** Not directly -- this is more visible in Nsight Systems (many small kernel spans with gaps). But Nsight Compute will show each tiny kernel as memory-bound with low occupancy because it never reaches steady-state execution.
- **Fixes:**
  - **Kernel fusion:** Combine multiple small operations into a single kernel.
  - **CUDA Graphs:** Capture the launch sequence as a graph and replay it with a single CPU submission, bypassing per-kernel overhead.
  - **Persistent kernels:** Keep the kernel alive and feed it new work via device-side queues.

## DEEP DIVE: Tensor Core Utilization

Tensor Cores are specialized hardware units on NVIDIA GPUs (Volta and later) that perform fused matrix multiply-accumulate at significantly higher throughput than CUDA cores. Getting a kernel to use Tensor Cores is essential for peak LLM inference performance.

**How to Verify Tensor Core Usage**
- **Nsight Compute signal:** Look for `mma.sync` (matrix multiply-accumulate) or `wmma` (warp-level matrix multiply) instructions in the "Instructions" section of the kernel report. If these are absent and you see `fma` (fused multiply-add) or `ffma` instructions instead, the kernel is using CUDA cores, not Tensor Cores.
- The Instruction Mix panel shows the proportion of Tensor Core instructions vs. standard arithmetic instructions.
- A "Tensor Core Utilization" metric is available in recent Nsight Compute versions; it shows what fraction of peak Tensor Core throughput the kernel achieves.

**Conditions for Tensor Core Activation**
Tensor Cores only activate when all conditions are met:
1. **Data type:** FP16, BF16, TF32, INT8, or FP8 (H100+). FP32 inputs must be explicitly converted to one of these types.
2. **Matrix dimensions:** The GEMM dimensions must satisfy specific tile size requirements (typically multiples of 16 for FP16, 8 for INT8, or 16 for FP8). Non-conforming sizes trigger a CUDA core fallback.
3. **Memory layout:** Operands must be in row-major or column-major layout as expected by the cuBLAS/cuTLASS interface. Non-standard layouts (e.g., interleaved) may prevent Tensor Core usage.
4. **Shared memory staging:** Tensor Core operands are typically staged through shared memory for optimal data access. Incorrect shared memory allocation can cause fallback.
5. **Warp scheduling:** All threads in a warp must participate in the Tensor Core operation. Divergent warps cannot use Tensor Cores.

**Why a Kernel Might Fall Back to CUDA Cores**
- GEMM dimensions are not multiples of the Tensor Core tile size (e.g., a 17x17 matrix multiplication).
- Input data is FP32 and the kernel does not explicitly cast to FP16/BF16.
- The kernel uses custom memory layouts that do not conform to expected Tensor Core data layouts.
- The model layer is too small (low M dimension in GEMM), and the overhead of staging through shared memory is not worthwhile.
- Precision requirements (some operations require FP32 accumulation that triggers fallback).

**H100 Tensor Core Throughput Reference**
- FP8 (dense): **1,979 TFLOPS** -- the peak format for H100, enabled by the Transformer Engine with per-tensor scaling.
- FP8 (sparse): **3,958 TFLOPS** -- 2:4 structured sparsity doubles effective throughput.
- FP16 (dense): **989 TFLOPS** -- standard high-precision Tensor Core format.
- FP16 (sparse): **1,979 TFLOPS** -- with 2:4 structured sparsity.
- INT8 (dense): 1,979 TOPS -- for quantization-aware inference.
- TF32: 494 TFLOPS -- full-precision fallback with Tensor Core acceleration.

**Key Optimization Numbers**
- **H100 register file:** 65,536 registers (256 KB) per SM
- **H100 shared memory:** up to 228 KB per SM (configurable with L1)
- **Typical occupancy target:** >= **50%** as a general guideline; some kernels benefit from higher occupancy (memory-bound with latency hiding), others plateau earlier (compute-bound)
- **H100 SM count:** 132 SMs
- **Achieved Tensor Core utilization target:** > 60% of peak for compute-bound LLM inference kernels

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Monitoring / optimization
- **Relevant exams:** GenAI LLMs
- **What it is:** Desktop profiling application (GUI + CLI) — single CUDA kernel deep-dive analysis
- **Use it when:** Use when a specific CUDA kernel needs deep analysis of occupancy, memory bandwidth, warp stalls, tensor-core use, or roofline limits.
- **Do not use it when:** Do not use it as the first tool for whole-application timeline diagnosis; start with Nsight Systems.
- **Common trap:** Jumping into kernel metrics before identifying which kernel or timeline gap is actually responsible.
- **Scenario signal:** Nsight Systems has identified one slow CUDA kernel and the team needs occupancy, memory, warp, or roofline details.
### Study notes
- Use **Nsight Compute** after you know which CUDA kernel matters. It provides kernel metrics such as occupancy, memory throughput, warp behavior, and instruction efficiency.
- Exam trap: do not start here when the problem is whole-pipeline queueing, CPU stalls, or network communication.
### Must know
- **occupancy**: ratio of active warps to theoretical max per SM — target ≥50% to hide memory latency; low occupancy typically from register pressure or shared memory overuse
- **memory-bound vs compute-bound**: roofline analysis classification — memory-bound = HBM bandwidth saturated (fix by reducing data movement/fusion); compute-bound = SMs saturated (fix by reducing operations/quantization)
- **warp stalls**: warp state breakdown shows WHY warps aren't executing — stalled on memory (Long Scoreboard), waiting at barrier (Barrier), or not scheduled (Not Selected)
- **SM utilization**: percentage of peak SM compute throughput achieved — low utilization with high occupancy suggests a memory-bound workload where SMs wait on HBM
### High-yield exam signals
- specific kernel → Nsight Compute profiles a single CUDA kernel after Nsight Systems identifies it as the bottleneck
- low occupancy → achieved occupancy < 50% from register pressure or shared memory limits
- memory stalls → warp state classification reveals warps stalled on HBM data movement
- kernel bottleneck → use roofline analysis to classify as memory-bound vs compute-bound
### Related services

- **Nsight Systems**
- CUDA
- **TensorRT-LLM**

### Hands-on checks
- Explain why a kernel can have high GPU time but low achieved occupancy.
## Exam tips from mocks
- Mock-style questions test whether **Nsight Compute** matches **Monitoring / optimization**, not whether the product name sounds familiar.
- Choose it when the scenario signal matches this boundary: Use when a specific CUDA kernel needs deep analysis of occupancy, memory bandwidth, warp stalls, tensor-core use, or roofline limits.
- Reject it when the problem is actually about another layer: Do not use it as the first tool for whole-application timeline diagnosis; start with Nsight Systems.
- The common trap pattern is: Jumping into kernel metrics before identifying which kernel or timeline gap is actually responsible.
- Expect distractors around nearby services such as **NCCL**, **NeMo Guardrails**, **NIM**, **NeMo Agent Toolkit**. Decide by lifecycle first, product name second.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q25, mock_2 Q26, mock_3 Q32, mock_4 Q28** / `deploy-004` (Deployment and Scaling): An enterprise team wants the fastest supported way to expose an LLM, embedding model, and reranker as APIs for an agent. Which NVIDIA layer is most appropriate? Correct idea: NIM microservices for optimized model APIs, potentially deployed on Kubernetes or called through hosted endpoints. Trap: NCCL handles GPU communication.
- **mock_1 Q39, mock_2 Q41, mock_3 Q51, mock_4 Q45, mock_5 Q41** / `platform-001` (NVIDIA Platform Implementation): An enterprise wants an agent workflow that connects tools, data sources, and multiple agents while remaining framework-flexible. Which NVIDIA component is most relevant? Correct idea: NeMo Agent Toolkit. Trap: CUDA Graphs reduce launch overhead.
- **mock_3 Q55, mock_4 Q49, mock_5 Q45** / `platform-005` (NVIDIA Platform Implementation): A team needs GPU timeline analysis for an agent backend where CPU dispatch, retrieval, and LLM inference interact. Which NVIDIA tool should they start with? Correct idea: Nsight Systems. Trap: Nsight Compute is kernel-level after the hot kernel is known.
- **deploy-008** / `deploy-008` (Model Deployment): A 70B model is deployed on H100s with Triton. Profiling shows GPU utilization at 35% under load. What is the most useful first investigation? Correct idea: Inspect Triton metrics (queue time, batch size distribution, instance group occupancy) and the engine's preferred batch sizes;..

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
---
service: Nsight Systems
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# Nsight Systems

## What to study first

- **Core idea:** Desktop profiling application (GUI + CLI) — system-wide CPU/GPU timeline profiler
- **Use it when:** Use when the question is about end-to-end CPU/GPU timelines, CUDA API gaps, kernel launch overhead, memory transfers, or multi-service latency.
- **Choose another path when:** Choose the neighboring service for detailed single-kernel occupancy or instruction analysis; use Nsight Compute after Systems finds the bottleneck.
- **Concrete surface:** Access: CLI: `nsys profile -o trace python my_script.py`, GUI: `nsys-ui` (installed with CUDA Toolkit) I/O: Application execution (Python script, binary) with optional NVTX annotations -> Timeline trace file (`.nsys-rep`) — CPU threads, CUDA kernels, memory transfers, NCCL spans
- **Study first:** timeline: Nsight Systems' primary output — a chronological view of CPU threads, CUDA kernels, memory transfers (H2D/D2H), and NCCL calls on a shared time axis
- the first tool to reach for when "something is slow"
- CUDA API gaps: visible as empty spaces between kernel launches on the timeline — indicates CPU-side launch overhead (too many small kernel submissions) → candidate for CUDA Graphs or kernel fusion
- GPU idle time: SM activity drops to near zero while CPU is busy — can be CPU bottleneck, insufficient work to keep GPU fed, or synchronization stall
- the timeline immediately shows which
- distributed trace clues: NCCL collective durations, pipeline bubbles (gaps between stage handoffs), and inter-node communication latency all visible in the multi-GPU timeline view
- **Real trap:** Confusing system-wide timeline profiling with kernel-level microanalysis.

## At a glance

| | |
|---|---|
| **What it is** | Desktop profiling application (GUI + CLI) — system-wide CPU/GPU timeline profiler |
| **How you access it** | CLI: `nsys profile -o trace python my_script.py`, GUI: `nsys-ui` (installed with CUDA Toolkit) |
| **Input** | Application execution (Python script, binary) with optional NVTX annotations |
| **Output** | Timeline trace file (`.nsys-rep`) — CPU threads, CUDA kernels, memory transfers, NCCL spans |
| **Role** | FIRST profiling tool — answers "where is time going?" before kernel-level deep dive |

```bash
nsys profile -o my_trace python inference_server.py  # Capture timeline
nsys-ui my_trace.nsys-rep                             # Open in GUI for visual analysis
```

**Mental model**: run `nsys profile` on your app → open trace in GUI → see a gantt chart of CPU/GPU activity. First tool for any "why is this slow?" question.

---

## What it is, in one paragraph

NVIDIA's **system-level** CPU/GPU timeline profiler. Nsight Systems provides end-to-end visibility into how CPU dispatch, GPU computation, memory operations, and I/O interact across the system. It is the **first tool for bottleneck identification** — answers "where is the time going?" before you zoom into individual kernels.

## Where it sits in the lifecycle

**Monitoring / optimization** — the system-level profiling stage. Use Nsight Systems FIRST to identify the bottleneck, THEN Nsight Compute to deep-dive into specific kernels.

```
[Agent backend: CPU dispatch + retrieval + LLM inference]
     ↓
[Nsight Systems: system-level timeline → identify bottleneck component]
     ↓
[If GPU kernel is bottleneck → Nsight Compute: kernel-level analysis]
```

## When it is the right answer

- "GPU timeline analysis for an agent backend where CPU dispatch, retrieval, and LLM inference interact" (mock_1 platform-005)
- System-level latency analysis: which component (CPU, GPU, I/O, memory) is the bottleneck?
- Multi-component interaction profiling (CPU + GPU together)
- **First profiling tool** when the problem source isn't yet identified
- Questions that mention "CPU dispatch," "system timeline," or "interaction between components"

## Adjacent-service decision boundary

- **First tool for kernel-level questions**: That's Nsight Compute. Use Nsight Systems first, then Nsight Compute.
- **Safety/policy decisions logging**: That's NeMo Guardrails.
- **GPU communication collectives**: That's NCCL. Nsight Systems can profile NCCL activity but isn't NCCL itself.
- **"Nsight Compute as the first tool for all system-level questions"**: Nsight Compute is kernel-level, not system-level (mock_1 platform-005).
- **"NCCL because every latency issue is a collective issue"**: Not all latency is communication (mock_1 platform-005).

## How it relates to neighboring services

- vs **Nsight Compute**: **This is the most important distinction on the exam.** Nsight Systems = system-level timeline (CPU+GPU interaction, where is the bottleneck?). Nsight Compute = kernel-level deep dive (why is this specific kernel slow?). Systems FIRST, Compute SECOND.
- vs **NVIDIA SMI**: SMI gives snapshot status (utilization, temp). Nsight Systems gives timeline profiling with causal analysis.
- vs **NeMo Guardrails**: Guardrails logs safety/policy decisions. Nsight Systems profiles GPU/CPU performance. Completely different domains.

## Numbers, defaults, knobs you should recognize

- System-level timeline: CPU threads, GPU streams, memory transfers, I/O
- End-to-end visibility across CPU and GPU
- Identifies which component is the bottleneck before kernel-level analysis

## Example exam-style scenario

> A team needs GPU timeline analysis for an agent backend where CPU dispatch, retrieval, and LLM inference interact. Which NVIDIA tool should they start with?
>
> **Answer**: Nsight Systems — it provides end-to-end CPU/GPU timeline visibility for system-level bottleneck identification.

## Mock signals

| Mock | Questions | Signal |
| ---- | --------- | ------ |
| mock_1 | platform-005 | "Nsight Systems gives end-to-end CPU/GPU timeline visibility" — Nsight Compute is for kernel analysis after hot kernel is known |

## Deep Dive Contents

This deep dive covers the key concepts behind Nsight Systems that the exam tests:

- **[System-Level Profiling]**: CPU/GPU timeline, CUDA API calls, memory transfers, NCCL collectives, and identifying "gaps" between operations
- **[Common Bottleneck Patterns]**: GPU idle from CPU launch overhead, H2D transfer bottlenecks, serialized kernel launches, NCCL communication bubbles, and prefill bottlenecks
- **[Nsight Systems vs Nsight Compute]**: the profiling hierarchy — System-level first, kernel-level second
- **[Multi-GPU Profiling]**: cross-GPU timeline visualization, pipeline bubbles, load imbalance detection, and NCCL collective analysis

## DEEP DIVE: System-Level Profiling

Nsight Systems captures a system-wide execution timeline spanning CPU threads, GPU operations, memory transfers, and interconnect communication. It is the first tool to open when you don't know where time is going.

**What the Timeline Captures**
- **CPU activity:** Thread execution state, CUDA Runtime and Driver API calls (cudaMemcpy, cudaLaunchKernel, cudaStreamSynchronize, etc.), CPU-side computation, file I/O, and system calls.
- **GPU activity:** Each kernel launch is shown as a span on the GPU timeline, with start and end times. Streams are visualized as parallel rows, showing whether kernels on different streams overlap or serialize.
- **Memory operations:** H2D and D2H transfers are displayed with their bandwidth utilization. A long H2D span at low bandwidth indicates a transfer bottleneck (PCIe saturation or synchronous transfer).
- **NCCL collectives:** AllReduce, AllGather, ReduceScatter, and AllToAll are shown as spans spanning the participating GPUs, with synchronization points visible.
- **CUDA streams:** Independent execution queues visualized as parallel lanes. Overlapping spans across streams indicate concurrent execution; gaps indicate serialization or synchronization.
- **CUDA graphs:** Captured graph launches show as atomic operations (the graph replay is one unit) vs. individual kernel launches (non-graphed).

**Understanding the "Gap" Between Operations**
The single most valuable finding from Nsight Systems is a "gap" -- time during which no GPU kernel appears active and the CPU is not obviously busy. Common gap causes:
1. **CPU launch overhead:** The CPU is serializing kernel arguments, allocating temporary buffers, or enqueuing the next kernel. This appears as a gap after a kernel ends and before the next begins. The fix is CUDA Graphs -- capture the entire iteration as a graph so the CPU sets it up once and replays without per-kernel overhead.
2. **Synchronization stalls:** A blocking call (cudaDeviceSynchronize, cudaEventSynchronize) that waits for a previously enqueued operation to finish before proceeding.
3. **Memory transfer blocking:** A pending transfer that hasn't started because the PCIe or NVLink bus is busy with prior transfers.
4. **Dependency chain:** Kernel B depends on Kernel A's output (via a CUDA event or implicit dependency), so B cannot launch until A finishes. The gap is the scheduling delay between A's completion and B's launch.

**Profiling Overhead**
- Nsight Systems adds approximately **5-15% overhead** during profiling under typical sampling settings.
- Tracing mode (capturing every API call and kernel) has higher overhead (closer to 15%) but captures complete detail.
- Sampling mode (capturing periodic samples of hardware counters) has lower overhead (~5%) and is recommended for initial exploration.
- Overhead can be reduced by profiling specific time ranges rather than the full application execution.

**Sampling Rate and Trace File Sizes**
- Default GPU metric sampling rate: ~1 kHz (one sample per microsecond per SM).
- A 10-second trace with full CUDA API tracing produces **100-500 MB** of trace data depending on kernel frequency and the number of API calls.
- For very short, targeted traces (sub-second), higher sampling rates (10 kHz) are available to capture microsecond-level detail.
- Range-based profiling: set start/stop markers around the code region of interest to limit trace file size and profiling overhead.
- Use the NVTX (NVIDIA Tools Extension) API to annotate trace regions with human-readable labels for easier analysis.

## DEEP DIVE: Common Bottleneck Patterns

Nsight Systems reveals recurring patterns that trained eyes can identify from a timeline view. These are the patterns tested in exam scenarios.

**1. GPU Idle -- CPU Bound or Insufficient Work**
**Timeline signal:** Long stretches where all GPU SMs are idle (no active kernel spans) while the CPU shows continuous thread activity.
**Root cause:** The CPU cannot feed the GPU fast enough. The CPU is preparing kernel launches, managing memory, or running retrieval/processing logic while the GPU waits. Common in auto-regressive LLM decoding where each token requires CPU-side scheduling.
**Fix:** CUDA Graphs (capture the entire decode iteration as a reusable graph, eliminating per-kernel launch overhead), increase batch size, or overlap CPU preparation with GPU execution via CUDA streams.

**2. Large H2D Gaps -- Data Transfer Bottleneck**
**Timeline signal:** Long memory transfer spans (H2D or D2H) that serialize with kernel execution -- GPU is idle or stalled while waiting for data to arrive.
**Root cause:** PCIe (Gen4: ~32 GB/s per x16 slot) or NVLink bandwidth is saturated, or transfers use the default synchronous API instead of streams.
**Fix:** Overlap transfers with computation using streams (stream A does H2D while stream B computes on already-transferred data), use pinned (page-locked) memory for faster H2D, compress data before transfer, or reduce transfer frequency by fusing small transfers.

**3. Serialized Kernel Launches -- Insufficient Parallelism**
**Timeline signal:** Kernels execute back-to-back on the same stream with no overlap, while other streams show no activity.
**Root cause:** All kernels are launched on a single default stream, or workload has sequential dependencies that prevent parallelization.
**Fix:** Launch independent kernels on separate CUDA streams. In TensorRT-LLM, configure multiple KV-cache blocks or use multi-stream decoding. If dependencies are real but the GPU has idle resources, consider fusing dependent kernels into a single kernel to avoid round-trips through HBM.

**4. NCCL Communication Bubbles -- Communication Bottleneck**
**Timeline signal:** All GPUs show a simultaneous gap after computation, followed by a synchronous NCCL AllReduce or AllGather. The gap represents GPUs that finished early waiting for the last straggler.
**Root cause:** Load imbalance across GPUs, or interconnect bandwidth insufficient for the communication volume.
**Fix:** Balance workloads across tensor-parallel shards, overlap NCCL communication with computation (launch NCCL on a separate stream that runs concurrently with the next compute kernel), or use fused communication (combine multiple small AllReduces into one larger one). For NVLink-connected GPUs, use ring allreduce; for cross-node, use tree allreduce.

**5. GPU SMs at ~30% Utilization -- Prefill Bottleneck**
**Timeline signal:** During the prefill phase of LLM inference, SM utilization plateau is well below capacity (30-40%), and memory bandwidth utilization is also low, despite the GPU not being idle.
**Root cause:** The prefill attention computation is memory-bound -- the KV cache for a long prompt exceeds on-chip SRAM, causing repeated HBM reads for each query position. The SMs spend most cycles waiting on memory rather than computing.
**Fix:** Enable **chunked prefill** (split the prompt into chunks that fit in shared memory, process each chunk independently, then combine). FlashAttention-2/3 addresses this at the kernel level by tiling attention computation. Also consider reducing prompt length (prompt compression, retrieval-based shortening).

## DEEP DIVE: Nsight Systems vs Nsight Compute

The most important tool distinction tested on the exam. They operate at different levels of the profiling hierarchy and are used sequentially.

| Dimension | Nsight Systems | Nsight Compute |
|-----------|---------------|----------------|
| **Scope** | Entire application: CPU + GPU | Single CUDA kernel |
| **Purpose** | Find where time is going | Understand why a specific kernel is slow |
| **Output** | Timeline visualization (threads, streams, transfers, collectives) | Detailed metrics (occupancy, bandwidth, instruction mix, roofline) |
| **Typical finding** | "GPU idle 40% of time due to CPU launch overhead" | "Kernel is memory-bound with 25% of peak bandwidth due to uncoalesced access" |
| **Profiling overhead** | ~5-15% | Higher (re-runs kernel with instrumentation) |
| **When to use** | FIRST -- system-level bottleneck identification | SECOND -- kernel-level deep dive |
| **Exam signal** | "Timeline," "system-level," "CPU+GPU interaction" | "Kernel analysis," "occupancy," "specific kernel" |

**Workflow**
1. Run Nsight Systems on the full application.
2. Identify the bottleneck (CPU, GPU, memory, communication).
3. If a GPU kernel is the bottleneck, open that specific kernel in Nsight Compute.
4. Use Nsight Compute's detailed metrics to understand why that kernel is slow.
5. Apply the targeted optimization and re-profile to verify improvement.

The exam explicitly tests that you do not skip step 1. "Nsight Compute is kernel-level after the hot kernel is known" (mock_1 platform-005). The trap is jumping to kernel optimization when the real bottleneck might be CPU launch overhead, data transfer, or synchronization.

## DEEP DIVE: Multi-GPU Profiling

Nsight Systems provides cross-GPU timeline visualization critical for understanding distributed inference and training performance.

**NCCL Collectives on the Timeline**
Nsight Systems renders each NCCL operation (AllReduce, AllGather, ReduceScatter, AllToAll) as annotated spans on each GPU's timeline. Key observations:
- **Collective duration:** Time from the first GPU entering the collective to the last GPU completing it. The gap between these points is the synchronization penalty.
- **Synchronization barriers:** All GPUs must reach the collective before data exchange begins. If GPU 0 finishes computing at t=1ms but GPU 3 finishes at t=3ms, GPU 0 waits 2ms at the barrier.
- **Communication vs. computation overlap:** Ideally, NCCL kernel execution overlaps with compute kernels on separate streams. Nsight Systems shows whether this overlap is achieved or whether GPUs alternate between compute and communicate phases.

**Pipeline Bubbles in Multi-GPU Setups**
Idle GPU time ("bubbles") appears as gaps in the timeline:
- **Pipeline parallelism bubbles:** GPUs at later pipeline stages wait for earlier stages to produce their activations. The bubble ratio increases with the number of pipeline stages. Nsight Systems shows these as staggered idle periods: GPU at stage N is idle while stage N-1 computes.
- **Tensor parallelism bubbles:** If one GPU finishes its shard computation slower than others (due to uneven sharding or hardware heterogeneity), all GPUs wait at the next collective. Nsight Systems shows this as one GPU with a longer compute span before a collective.
- **Sequence parallelism bubbles:** Communication overhead exceeds compute time for small sequences. Visible as very short compute spans followed by disproportionately long NCCL spans.

**Load Imbalance Detection**
- Compare compute-phase duration across all GPUs for the same iteration. Consistent imbalance indicates systematic sharding issues.
- In Mixture-of-Experts (MoE) models, load imbalance manifests as certain GPUs handling more expert tokens (longer compute phase before NCCL All-to-All dispatch).
- Expert parallelism: Nsight Systems reveals whether token routing creates hotspots that delay the entire collective. Fix: adjust expert capacity factor or use auxiliary loss functions that balance expert utilization.

**Multi-GPU Trace Patterns to Recognize**
- **Synchronization-free regions:** Periods where each GPU computes independently without NCCL calls. These are desirable for scaling efficiency.
- **NCCL kernel types:** ncclDevKernel_* spans show the actual GPU code for the collective. Different kernel naming indicates different NCCL algorithms.
- **Ring vs. Tree allreduce:** Ring allreduce shows distinct peer-to-peer transfer phases (each GPU sends/receives from neighbor). Tree allreduce shows a hierarchical pattern (broadcast to aggregators, then scatter).
- **Inter-node communication gaps:** When NVLink is used intra-node and InfiniBand/RoCE inter-node, the inter-node collective phase is typically the bottleneck. Nsight Systems cross-node traces require clock synchronization between nodes for accurate cross-node timeline alignment (NVIDIA recommends using PTP or NTP with tight bounds).

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Monitoring / optimization
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Desktop profiling application (GUI + CLI) — system-wide CPU/GPU timeline profiler
- **Use it when:** Use when the question is about end-to-end CPU/GPU timelines, CUDA API gaps, kernel launch overhead, memory transfers, or multi-service latency.
- **Do not use it when:** Choose the neighboring service for detailed single-kernel occupancy or instruction analysis; use Nsight Compute after Systems finds the bottleneck.
- **Common trap:** Confusing system-wide timeline profiling with kernel-level microanalysis.
- **Recognition clues:** An application has unexplained p99 latency across CPU dispatch, CUDA kernels, memory copies, NCCL, retrieval, or tools.
### Study notes
- Use **Nsight Systems** first for whole-application timelines: CPU/GPU overlap, CUDA API calls, kernel launch gaps, synchronization, I/O, and communication stalls.
- It answers where time is going across the system. It does not replace kernel-level analysis once a specific kernel is identified.
### Must know
- **timeline**: Nsight Systems' primary output — a chronological view of CPU threads, CUDA kernels, memory transfers (H2D/D2H), and NCCL calls on a shared time axis; the first tool to reach for when "something is slow"
- **CUDA API gaps**: visible as empty spaces between kernel launches on the timeline — indicates CPU-side launch overhead (too many small kernel submissions) → candidate for CUDA Graphs or kernel fusion
- **GPU idle time**: SM activity drops to near zero while CPU is busy — can be CPU bottleneck, insufficient work to keep GPU fed, or synchronization stall; the timeline immediately shows which
- **distributed trace clues**: NCCL collective durations, pipeline bubbles (gaps between stage handoffs), and inter-node communication latency all visible in the multi-GPU timeline view
### What to recognize
- low GPU utilization → Nsight Systems timeline shows GPU idle while CPU is busy; suspect CPU launch overhead
- long gaps between kernels → CPU-side serialization; candidate for CUDA Graphs
- CPU launch overhead → thousands of small kernel submissions dominate runtime
- synchronization stalls → blocking `cudaDeviceSynchronize` or NCCL barrier waiting for stragglers
### Related services

- **Nsight Compute**
- **NCCL**
- **TensorRT-LLM**

### Hands-on checks
- Given a trace, decide whether the issue is CPU launch overhead, kernel runtime, transfer, or synchronization.
## Exam tips from mocks
- Mock-style questions test whether **Nsight Systems** matches **Monitoring / optimization**, not whether the product name sounds familiar.
- Boundary cue: choose it when the question is about end-to-end CPU/GPU timelines, CUDA API gaps, kernel launch overhead, memory transfers, or multi-service latency.
- Adjacent-service cue: not for detailed single-kernel occupancy or instruction analysis; use Nsight Compute after Systems finds the bottleneck.
- The common trap pattern is: Confusing system-wide timeline profiling with kernel-level microanalysis.
- Expect distractors around nearby services such as **NeMo Guardrails**, **Nsight Compute**, **NCCL**, **TensorRT-LLM**. Decide by lifecycle first, product name second.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q13** / `gpu-004` (GPU Acceleration and Optimization): Profiling with Nsight Systems shows long gaps between CUDA kernels during a 70B inference run. What does this typically indicate? Correct idea: Host-side (CPU) launch overhead dominating — candidate for CUDA Graphs.
- **mock_3 Q55, mock_4 Q49, mock_5 Q45** / `platform-005` (NVIDIA Platform Implementation): A team needs GPU timeline analysis for an agent backend where CPU dispatch, retrieval, and LLM inference interact. Which NVIDIA tool should they start with? Correct idea: Nsight Systems. Trap: Nsight Compute is kernel-level after the hot kernel is known.
- **opt-011** / `opt-011` (Model Optimization): A service needs sub-50 ms TTFT with ≤2% INT4 vs FP16 accuracy gap on a 13B model. Profile shows attention is the hot kernel. Which TensorRT-LLM feature gives the large.. Correct idea: CUDA graphs for the decoder loop combined with FlashAttention-2 fused kernel. Trap: Larger beam width increases compute and latency.
- **mock_1 Q41, mock_2 Q43, mock_3 Q53, mock_4 Q47, mock_5 Q43** / `platform-003` (NVIDIA Platform Implementation): A team wants to deploy a model as a standard optimized inference microservice with an API endpoint. Which NVIDIA component is the best match? Correct idea: NIM. Trap: RAPIDS accelerates data processing.
- **mock_6 Q60** / `m5-060` (Safety, Ethics, and Compliance): What is responsible disclosure in the context of AI systems, and what process should be followed when discovering security vulnerabilities or safety issues in LLMs? Correct idea: Responsible disclosure involves privately reporting vulnerabilities to the affected organization before public disclosure, givi.. Trap: Immediately posting vulnerabilities publicly before the affected organization has time to respond is irresponsible an..

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
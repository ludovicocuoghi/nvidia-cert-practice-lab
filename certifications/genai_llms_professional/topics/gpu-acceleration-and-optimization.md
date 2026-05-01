---
domain: GPU Acceleration and Optimization
weight: 14
status: populated
---

# GPU Acceleration and Optimization

## Certification boundary

This page is intentionally NVIDIA-heavy because NCP-GENL tests GPU acceleration. Keep CUDA, Tensor Cores, NCCL, NVLink, TensorRT, RAPIDS, Nsight, and NVIDIA hardware/software-stack knowledge here. General serving tradeoffs can be summarized in Agentic AI General Study, but GPU-specific NVIDIA implementation detail belongs in this certificate.

## Core ideas you must hold in your head

- **GPUs** accelerate LLMs through massive parallelism, not higher clock speeds. A single H100 SXM has 16,896 **CUDA** cores (132 SMs × 128 FP32 cores each) running thousands of threads concurrently. The exam tests understanding of HOW this parallelism maps to LLM operations.
- **Memory hierarchy** is the performance determinant. HBM (80GB on H100) is large but slow (~3 TB/s). SRAM/L1 is fast but tiny (~256KB per SM). Keeping data in faster memory is the core optimization challenge.
- **Tensor Cores** are specialized hardware for matrix multiplication. They accelerate the GEMM operations that dominate Transformers. Knowing which **precision** each **GPU** generation's **Tensor Cores** support is exam-relevant.
- **CUDA** is the programming model, not just a language. Understanding threads, blocks, grids, warps, and how they map to streaming multiprocessors (SMs) separates correct answers from traps.
- **NCCL** is the communication backbone for multi-**GPU** LLM workloads. **All-reduce**, **all-gather**, **reduce-scatter** — the exam tests which collective is used for which parallelism strategy.
- **The NVIDIA platform** is more than just GPUs. **CUDA**, TensorRT, **NIM**, **Triton**, **NCCL**, NVLink, RAPIDS — the exam expects you to know which component solves which problem. Confusing components (e.g., **NIM** vs **Triton**, **NCCL** vs NVLink) is a common trap.

## NVIDIA AI platform primer

The exam expects familiarity with NVIDIA's full AI stack — not just **GPU** specs. Here's the essential background:

### The hardware: GPU generations for AI

| **GPU** | Year | Architecture | Memory | Mem BW | NVLink | **FP8**? | Key AI features |
| --- | ---- | ------------ | ------ | ------ | ------ | ---- | --------------- |
| **V100** | 2017 | Volta | 16/32 GB HBM2 | 900 GB/s | 300 GB/s | No | First **Tensor Cores** (**FP16**) |
| **T4** | 2018 | Turing | 16 GB GDDR6 | 320 GB/s | No | **INT8**/**INT4** inference; low power (70W) |
| **A100** | 2020 | Ampere | 40/80 GB HBM2e | 2.0 TB/s | 600 GB/s | No | TF32, 2:4 sparsity, MIG, 3rd-gen TC |
| **H100** | 2023 | Hopper | 80 GB HBM3 | 3.35 TB/s | 900 GB/s | Yes (native) | **FP8**, **Transformer** Engine, 4th-gen TC |
| **H200** | 2024 | Hopper | 141 GB HBM3e | 4.8 TB/s | 900 GB/s | Yes | 1.8× memory of H100; same compute |
| **B200** | 2024 | Blackwell | 192 GB HBM3e | 8 TB/s | 1.8 TB/s | Yes (FP4 too) | FP4, 5th-gen TC, NVLink 5 |

**Exam signal**: Which **GPU** introduced native **FP8**? → H100 (Hopper, 4th gen **Tensor Cores**). Which **GPU** has the most memory? → B200 (192 GB). Which **GPU** is best for inference-only workloads? → Depends — T4 for low power, H100 for high **throughput**.

### The software stack: from hardware to application

```
┌────────────────────────────────────────────────────┐
│ Application (LLM, RAG, agent, recommendation)      │
├────────────────────────────────────────────────────┤
│ AI Frameworks: PyTorch, JAX, TensorFlow            │
├────────────────────────────────────────────────────┤
│ NVIDIA AI Enterprise / NIM / Triton / NeMo         │
├────────────────────────────────────────────────────┤
│ Optimization: TensorRT-LLM, TensorRT, cuDNN        │
├────────────────────────────────────────────────────┤
│ CUDA (Compute Unified Device Architecture)         │
├────────────────────────────────────────────────────┤
│ GPU Hardware (H100, B200, etc.)                    │
└────────────────────────────────────────────────────┘
```

**CUDA is the foundation** — every NVIDIA AI library (cuDNN, cuBLAS, TensorRT, **NCCL**) is built on **CUDA**. If a question asks "what enables **GPU** computing for AI?", **CUDA** is the platform answer.

### Key NVIDIA software components

| Component | Type | What it does | Exam context |
| --------- | ---- | ------------ | ------------ |
| **CUDA** | Platform | Parallel computing platform + programming model | Foundation for everything; C++/Python APIs |
| **cuDNN** | Library | Deep neural network primitives (conv, **attention**, norm) | Accelerates PyTorch/TF under the hood |
| **cuBLAS** | Library | **GPU**-accelerated linear algebra (GEMM) | Matrix multiplies in **attention**/FFN layers |
| **TensorRT** | Optimizer + Runtime | Graph optimization + inference runtime | General model optimization; pre-**TensorRT-LLM** |
| **TensorRT-LLM** | Optimizer + Runtime | LLM-specific optimization + runtime | LLM inference; **NIM**'s engine |
| **NCCL** | Library | **GPU**-to-**GPU** communication collectives | Multi-**GPU** training/inference |
| **NIM** | Microservice | Containerized model + engine + API | Production LLM **deployment** |
| **Triton Inf. Server** | Server | Multi-model **serving** platform | Multi-model/framework **serving** |
| **NeMo Framework** | Framework | End-to-end LLM training/customization | Training, **SFT**, **RLHF**, **evaluation** |
| **NeMo Guardrails** | **Safety** | Programmatic **safety** boundaries | Content **moderation**, dialog control |
| **NeMo Curator** | Data | **GPU**-accelerated **data curation** | Dedup, filtering, **PII** at scale |
| **NeMo Evaluator** | **Evaluation** | Standardized benchmark **evaluation** | MMLU, HellaSwag, etc. on **GPU** |
| **RAPIDS** | Suite | **GPU** data science (cuDF, cuML, cuGraph) | Accelerated data pipelines |
| **DCGM** | **Monitoring** | **GPU** **metrics** (util, memory, temp, power) | Prometheus integration |
| **Nsight Systems** | Profiler | System-level timeline profiling | Identify bottlenecks in CPU/**GPU** pipeline |
| **Nsight Compute** | Profiler | Kernel-level performance analysis | Roofline, **occupancy**, bandwidth analysis |

### Networking: how GPUs talk to each other

| Technology | Scope | Speed (max) | Purpose |
| ---------- | ----- | ----------- | ------- |
| **NVLink** | **GPU**-to-**GPU** within a node | 1.8 TB/s (B200) | Tensor/**pipeline parallelism** |
| **NVSwitch** | Connect multiple GPUs at full NVLink speed | — | DGX/HGX systems; all-to-all **GPU** comms |
| **InfiniBand** | Node-to-node (cluster) | 400 GB/s (NDR) | Distributed training across nodes |
| **RoCE** | Node-to-node (Ethernet-based) | 400 GB/s | Alternative to InfiniBand over standard Ethernet |
| **GPUDirect RDMA** | **GPU memory** → NIC, bypass CPU | — | **Zero**-copy data transfers for distributed training |

**Exam signal**: NVLink = short distance, very fast, **GPU**-to-**GPU** within one server. InfiniBand = longer distance, fast, server-to-server. Don't confuse which is used where.

### DGX and HGX: the AI compute platforms

- **DGX**: NVIDIA's turnkey AI server (CPU + multiple GPUs + NVSwitch + networking + software stack pre-installed). "Buy one box, train models."
- **HGX**: The **GPU** baseboard (GPUs + NVSwitch) that OEMs build servers around. "The **GPU** part of a DGX, available for custom servers."
- **DGX Cloud**: Renting DGX infrastructure via cloud providers — same hardware, cloud pricing.

**Exam signal**: DGX = complete AI server from NVIDIA. HGX = the **GPU** subsystem that other vendors integrate.

## Mental model

**GPU** acceleration sits at the **infrastructure** layer — it's what makes everything else fast enough to be practical:

```
Application (LLM inference/training)
        ↓
Framework (PyTorch, TensorRT-LLM, JAX)
        ↓
CUDA / cuBLAS / cuDNN / NCCL
        ↓
GPU Hardware (SMs, Tensor Cores, HBM, NVLink)
```

The key question for every optimization: **Where is the bottleneck?** **Compute-bound**, memory-bandwidth-bound, or communication-bound?

## GPU architecture: the numbers that matter

| **GPU** | **CUDA** Cores | **Tensor Cores** | HBM | NVLink | Key feature |
| --- | ---------- | ------------ | --- | ------ | ----------- |
| **V100** | 5,120 | 640 (1st gen, **FP16**) | 16/32 GB | 300 GB/s | First Tensor Core **GPU** |
| **A100** | 6,912 | 432 (3rd gen, TF32/**BF16**/**FP16**/**INT8**/**INT4**) | 40/80 GB | 600 GB/s | 2:4 sparsity, MIG |
| **H100** | 16,896 | 528 (4th gen, **FP8** native) | 80 GB | 900 GB/s | **FP8**, **Transformer** Engine |
| **B200** | — | 5th gen (FP4/FP6) | 192 GB | 1.8 TB/s | FP4 native, largest memory |

**Exam signal**: "Which **GPU** generation introduced native **FP8** support?" → H100 (4th gen **Tensor Cores**).

## Memory hierarchy

```
Fastest/Smallest                     Slowest/Largest
─────────────────────────────────────────────────────
Registers → L1/SRAM → L2 Cache → HBM → CPU RAM → SSD
(per-thread) (per-SM)  (shared)  (GPU)  (host)  (disk)
   ~0 cycles   ~30 cycles  ~200    ~800    PCIe    NVMe
```

- **HBM bandwidth** (H100: 3.35 TB/s) is what keeps **Tensor Cores** fed. If data movement exceeds bandwidth, you're **memory-bound**.
- **SRAM** (~256KB per SM) is where **FlashAttention** does its tiling magic.
- **Coalesced memory access**: Threads in a warp should access contiguous memory addresses for optimal bandwidth.

## Tensor Cores: the engine behind LLMs

**Tensor Cores** accelerate `D = A × B + C` (matrix multiply-accumulate) in one clock cycle.

| Generation | **GPU** | Native precisions | Sparsity |
| ---------- | --- | ----------------- | -------- |
| 1st | V100 | **FP16** | No |
| 2nd | T4 | **FP16**, **INT8**, **INT4** | No |
| 3rd | A100 | TF32, **BF16**, **FP16**, **INT8**, **INT4** | 2:4 structured |
| 4th | H100 | **FP8** (E4M3, E5M2), TF32, **BF16**, **FP16**, **INT8** | 2:4 structured |
| 5th | B200 | FP4, FP6, **FP8**, TF32, **BF16**, **FP16** | 2:4 structured |

**TF32** is A100's secret weapon: 19 bits total (10 mantissa like **FP16**, 8 exponent like FP32). Drop-in replacement for FP32 with no code changes; 8× **throughput** vs FP32 on V100.

**Transformer Engine** (H100+): Dynamically switches between **FP8** and **FP16** during training. Uses per-tensor scaling factors to maintain accuracy.

## CUDA execution model

- **Thread**: Executes a single instruction. Thousands per **GPU**.
- **Warp**: 32 threads executing in lockstep (SIMT — Single Instruction, Multiple Threads). Branch divergence within a warp serializes execution.
- **Block**: Group of threads (up to 1024) on the same SM. Share SRAM/L1.
- **Grid**: All blocks for a kernel launch.
- **SM (Streaming Multiprocessor)**: Executes blocks. H100 has 132 SMs.

**Exam signal**: "All threads in a warp execute the same instruction" — divergent branches cause some threads to idle. This is THE classic **CUDA** performance trap.

## CUDA optimization principles

| Principle | What it means | Benefit |
| --------- | ------------- | ------- |
| **Coalesced memory access** | Adjacent threads access adjacent memory | Maximizes bandwidth utilization |
| **Occupancy** | Maximize active warps per SM | Hides memory **latency** |
| **Shared memory usage** | Cache reusable data in SRAM | Reduces HBM traffic |
| **Avoid warp divergence** | Minimize if/else within warps | Full warp utilization |
| **Kernel fusion** | Combine multiple ops into one kernel | Reduces kernel launch overhead and HBM round-trips |

## NCCL: multi-GPU communication

**NCCL** (NVIDIA Collective Communications Library) is THE library for **GPU**-to-**GPU** communication.

| Collective | What it does | Used in |
| ---------- | ------------ | ------- |
| **All-reduce** | Sum gradients across all GPUs; result on all | **Data parallelism** gradient sync |
| **All-gather** | Gather data from all GPUs; result on all | **Tensor parallelism** |
| **Reduce-scatter** | Reduce then scatter chunks to each **GPU** | **ZeRO** optimizer (DeepSpeed) |
| **Broadcast** | Send from one **GPU** to all others | Weight distribution |
| **Point-to-point (send/recv)** | **GPU**-to-**GPU** direct transfer | **Pipeline parallelism** |

**NVLink** connects GPUs within a node (up to 900 GB/s on H100). **InfiniBand** or **RoCE** connects across nodes. Intra-node communication is orders of magnitude faster.

## Triton language (OpenAI) — not to be confused with Triton Inference Server

OpenAI's **Triton** is a Python-like DSL for writing high-performance **GPU** kernels. It compiles to intermediate representation and then to **GPU** machine code.

| Aspect | **CUDA** C++ | **Triton** language |
| ------ | -------- | --------------- |
| **Level** | Low-level; manual thread/warp management | High-level; write block-level code; compiler handles threading |
| **Productivity** | Verbose; explicit memory management | Pythonic; automatic optimization |
| **Performance** | Maximum control; hand-tuned | Near-**CUDA** performance for most kernels |
| **Use case** | Production libraries (cuBLAS, cuDNN) | Research kernels, custom ops, **FlashAttention** implementations |
| **NVIDIA relation** | NVIDIA's own platform | Community/open-source; runs on NVIDIA GPUs |

**Exam signal**: "**Triton**" in the context of **GPU** KERNEL programming = OpenAI's **Triton** language. "**Triton**" as an INFERENCE SERVER = NVIDIA **Triton Inference Server**. The exam may test recognizing which is which from context.

## GPU profiling tools

| Tool | Purpose | Exam signal |
| ---- | ------- | ----------- |
| **Nsight Systems** | Timeline view; system-wide profiling | Identify CPU-**GPU** sync points, kernel launch overhead, IO bottlenecks |
| **Nsight Compute** | Kernel-level analysis | Roofline analysis, **memory bandwidth** utilization, **occupancy** |
| **DLProf** | Deep learning profiling | Maps PyTorch/TensorFlow ops to **GPU** kernels |
| **nvidia-smi** | Real-time **monitoring** | **GPU** utilization, memory, **temperature**, power |

**Exam distinction**: **Nsight Systems** = "when and where is time spent?" (timeline). **Nsight Compute** = "is this kernel running efficiently?" (roofline).

## GPU-accelerated data processing

The exam tests awareness that data preprocessing, not just model training, benefits from **GPU** acceleration:

- **RAPIDS**: Suite of **GPU**-accelerated data science libraries
  - **cuDF**: **GPU** DataFrame (pandas-like API on **GPU**)
  - **cuML**: **GPU** machine learning (scikit-learn-like)
  - **cuGraph**: **GPU** graph analytics
  - **cuSpatial**: **GPU** spatial analytics
- **cuDF is the gateway**: Load CSV/Parquet → **GPU** dataframe → training pipeline without CPU round-trip
- **NVTabular**: **GPU**-accelerated feature engineering for recommender systems

**Exam signal**: cuDF avoids the CPU-**GPU** data transfer bottleneck. Data stays on **GPU** from loading through training.

## Common exam traps

1. **More CUDA cores** — **Memory bandwidth** is often the bottleneck. A **GPU** with fewer cores but more bandwidth can outperform for LLM workloads.

2. **Tensor Cores auto-acceleration** — They only accelerate GEMM operations (matrix multiplies). Element-wise ops, reductions, and reshapes don't use **Tensor Cores**.

3. **Nsight Systems vs Compute** — **Nsight Systems** is for timeline/system profiling. Kernel analysis is **Nsight Compute**'s job.

4. **Precision-GPU compatibility** — **FP8** needs H100+. **INT4** needs A100+. Understanding which **GPU** supports which format is exam-relevant.

5. **InfiniBand vs NVLink** — NVLink connects GPUs within a node (high bandwidth, low **latency**). InfiniBand connects across nodes (lower bandwidth, higher **latency**).

6. **GPU utilization** — High utilization with low Tensor Core utilization means the **GPU** is busy waiting on memory or doing non-GEMM work.

7. **RAPIDS vs CPU processing** — RAPIDS accelerates data science workflows on **GPU**. Some operations (especially I/O from non-optimized formats) may still need CPU preprocessing.

## Must-know exam bullets

- **H100 FP8** — introduced native **FP8** Tensor Core support; 4th gen **Tensor Cores**; **Transformer** Engine dynamic **precision**
- **TF32** — 8× faster than V100 FP32; same exponent range as FP32, 10-bit mantissa; drop-in replacement
- **Coalesced memory access** — adjacent threads → adjacent addresses; maximizes bandwidth utilization
- **Warp** — 32 threads in lockstep; branch divergence within warp serializes execution
- **Nsight Systems vs Compute** — Systems = timeline (system-level); Compute = kernel analysis (roofline)
- **NCCL all-reduce** — for gradient sync in **data parallelism**; sum gradients, all GPUs get result
- **NVLink vs InfiniBand** — NVLink for intra-node (up to 900 GB/s H100); InfiniBand for inter-node
- **cuDF** — keeps data on **GPU** through the pipeline; no CPU-**GPU** transfer for DataFrame operations
- **Shared memory / SRAM** — programmer-managed cache per block; key to **FlashAttention** tiling
- **Occupancy** — active warps / max warps per SM; higher **occupancy** hides memory **latency**
- **Transformer Engine** — dynamically selects **FP8**/**FP16** per layer; scaling factors prevent underflow/overflow
- **2:4 structured sparsity** — 2 non-zeros per 4-element block; A100+ hardware support; 2× GEMM **throughput**

## Hands-on checks

1. You have a kernel that's running slowly. **Nsight Systems** shows low **GPU** utilization but high kernel launch count. What should you do?
2. A model runs fine on H100 at **FP8** but a customer needs it on A100. What **precision** would you target?
3. Explain why divergent branches within a warp hurt performance and how to identify them.
4. You're training across 8 GPUs with **data parallelism**. Which **NCCL** collective synchronizes the gradients?
5. What's the difference between a roofline analysis from **Nsight Compute** and a timeline from **Nsight Systems**?

## Key terms to memorize

- **CUDA** — NVIDIA's parallel computing platform and programming model; foundation of all **GPU** AI
- **cuDNN** — **CUDA** Deep Neural Network library; accelerated primitives (conv, **attention**, norm)
- **cuBLAS** — **CUDA** Basic Linear Algebra Subroutines; accelerated GEMM for **attention**/FFN
- **DGX** — NVIDIA's turnkey AI server (GPUs + NVSwitch + networking + software)
- **HGX** — **GPU** baseboard (GPUs + NVSwitch) that OEMs integrate into custom servers
- **NVSwitch** — connects multiple GPUs at full NVLink speed within a DGX/HGX
- **GPUDirect RDMA** — **GPU memory** → NIC direct transfer; **zero**-copy for distributed training
- **SM (Streaming Multiprocessor)** — **GPU** processing unit executing thread blocks
- **Tensor Core** — specialized hardware for matrix multiply-accumulate (GEMM)
- **Warp** — 32 threads executing in lockstep (SIMT)
- **Coalesced memory access** — contiguous memory accessed by adjacent threads
- **Occupancy** — ratio of active warps to theoretical maximum per SM
- **HBM** — High Bandwidth Memory; **GPU**'s main memory (~3.35 TB/s on H100)
- **SRAM / shared memory** — on-chip memory per SM (~256KB); programmer-managed
- **NCCL** — NVIDIA Collective Communications Library; **GPU**-to-**GPU** collectives
- **NVLink** — high-bandwidth **GPU** interconnect within a node
- **InfiniBand** — high-performance networking for inter-node **GPU** communication
- **Nsight Systems** — system-level profiling; timeline view of CPU + **GPU**
- **Nsight Compute** — kernel-level profiling; roofline analysis, **occupancy**, bandwidth
- **RAPIDS** — **GPU**-accelerated data science libraries (cuDF, cuML, cuGraph)
- **cuDF** — **GPU** DataFrame library; pandas-like API on **GPU**
- **Triton language (OpenAI)** — Python-like DSL for **GPU** kernel programming; NOT the same as NVIDIA **Triton Inference Server**
- **Transformer Engine** — H100+ library for dynamic **FP8**/**FP16** **precision** in training
- **TF32** — TensorFloat-32; A100 format with FP32 range and **FP16**-like **precision**
- **All-reduce** — collective operation; sum values across all GPUs, result on all
- **Kernel fusion** — combine multiple **GPU** kernels into one; reduces launch overhead

### Top exam traps
- **Nsight Systems timeline** → it analyzes TIMELINE; **Nsight Compute** does kernels
- **H100+ FP8** → only H100+ (4th gen Tensor Core)
- **NVLink intra-node** → NVLink is intra-node; InfiniBand/RoCE is inter-node
- **Tensor Cores GEMM only** → only GEMM; element-wise ops use **CUDA** cores
- **GPU utilization check** → may be busy waiting on memory; check Tensor Core utilization
- **cuDF GPU end-to-end** → cuDF keeps data on **GPU** end-to-end
- **Triton language vs server** → **Triton** LANGUAGE is OpenAI's **GPU** kernel DSL; **Triton INFERENCE SERVER** is NVIDIA's model server

## Mock signals

Across the mock exams, **GPU** acceleration questions repeatedly test these durable ideas:

- **Hardware bottlenecks**: **Tensor Cores** accelerate GEMM, but **memory bandwidth**, launch overhead, and synchronization often dominate.
- **Memory hierarchy**: HBM, shared memory/SRAM, registers, coalescing, **occupancy**, and warp divergence are core **CUDA** concepts.
- **Distributed GPU work**: **NCCL** collectives, NVLink, InfiniBand/RoCE, **tensor parallelism**, and **pipeline parallelism** have different communication patterns.
- **Profiling choice**: **Nsight Systems** gives the system timeline; **Nsight Compute** explains specific kernel efficiency.
- **Data processing**: RAPIDS/cuDF/cuML/cuGraph keep data on **GPU** and reduce CPU-**GPU** transfer bottlenecks.
- **Triton ambiguity**: OpenAI **Triton** is a kernel DSL; NVIDIA **Triton Inference Server** is a production model server.

Evidence source: `mock_1` through `mock_5`, especially **CUDA** optimization, **Tensor Cores**, memory hierarchy, **NCCL**, Nsight, **Triton** language vs server, RAPIDS, and kernel-fusion questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 14%
- **What it covers:** Scale and optimize LLM training/inference on **GPU** hardware.
- **Use this section when:** Study this when scaling, OOMs, collectives, **GPU** utilization, or memory layout appear in a scenario.
- **Common trap:** More GPUs can be slower if communication dominates.
- **Scenario signal:** Training scales well inside a node but poorly across nodes due to **all-reduce** traffic.

### Study notes

- **Three bottlenecks**: you must distinguish on the exam — **Compute-bound** (**GPU** SMs saturated, high utilization — solution: **quantization**, **pruning**, better kernels), Memory-bandwidth-bound (HBM **throughput** limits performance, data movement dominates — solution: **kernel fusion**, **FlashAttention**, coalesced access), Communication-bound (**NCCL** collectives dominate step time — solution: hierarchical **all-reduce**, better topology, less synchronization). Use **Nsight Systems** to find WHICH bottleneck; **Nsight Compute** to understand WHY within that bottleneck.

- **Memory categories**: in **GPU** training (what lives where)
  1. **Weights**: Model parameters in HBM. 70B params × 2 bytes **FP16** = 140 GB. Sharded by **ZeRO**-3/**FSDP** (each **GPU** holds 1/N of weights).
  2. **Gradients**: Same size as weights in **FP16**. Sharded by **ZeRO**-2/**FSDP**. All-reduced across data-parallel replicas.
  3. **Optimizer states**: Adam stores momentum (m) and variance (v) in FP32. Size = 2 × 4 bytes × num_params = 8× weight size in **FP16** terms. For 70B: 140 GB × 4 = 560 GB for optimizer states alone. Sharded by **ZeRO**-1 (states only), **ZeRO**-2 (states + gradients), **ZeRO**-3 (states + gradients + parameters). This is why **ZeRO** matters — optimizer states dominate training memory.
  4. **Activations**: Intermediate tensors during forward pass. Scale with batch × seq × hidden. For large models, activations can exceed **weight memory**. Reduced by activation checkpointing (trade ~33% compute for O(√L) memory).
  5. **KV cache**: Only during inference. See Model Optimization section.

- **ZeRO stages**: DeepSpeed — what each shards across data-parallel GPUs
  - **ZeRO-1**: Optimizer states only. ~4× memory reduction. Communication = same as DDP (**all-reduce** gradients).
  - **ZeRO-2**: Optimizer states + gradients. ~8× memory reduction. Communication = same as DDP.
  - **ZeRO-3**: Optimizer states + gradients + parameters (each **GPU** holds 1/N of all parameters). Near-linear memory scaling with **GPU** count. Communication = adds **all-gather** (parameters) and **reduce-scatter** (gradients) per layer. Higher communication volume than **ZeRO**-1/2.
  - **FSDP (PyTorch)**: Equivalent to **ZeRO**-3. Shards parameters, gradients, and optimizer states. Parameters all-gathered before each layer's forward pass, discarded after backward.

- **Parallelism strategy selection**: exam decision tree
  - Model fits on one **GPU** → **Data parallelism** (DDP or **FSDP**/**ZeRO**). Simple, efficient.
  - Model doesn't fit one **GPU** → **Tensor parallelism** within node (NVLink keeps **all-reduce** fast) + **Data parallelism** across nodes.
  - Model is very deep (many layers) → **Pipeline parallelism** (splits layers, lower comms than tensor) + **Data parallelism**.
  - Model is **MoE** (sparse) → **Expert parallelism** (each **GPU** hosts different experts, all-to-all routing) + **Data parallelism**.
  - Multi-node scaling bottlenecked by **all-reduce** → Enable **NCCL** hierarchical **all-reduce** (tree/NVLS within node, ring across nodes), verify GPUDirect RDMA, check InfiniBand topology.

- **NCCL collectives**: what they do and when they're used
  - **All-reduce**: Sum values across all GPUs, result on EVERY **GPU**. Used for gradient sync in **data parallelism**. Over InfiniBand, ring algorithm is bandwidth-optimal for large messages.
  - **All-gather**: Each **GPU** has a chunk; after **all-gather**, every **GPU** has the full concatenated data. Used in **ZeRO**-3/**FSDP** to gather sharded parameters before each layer.
  - **Reduce-scatter**: Reduce (sum) then scatter — each **GPU** gets a different chunk of the reduced result. Used in **ZeRO**-3/**FSDP** to reduce gradients then distribute shards. Inverse of **all-gather**.
  - **Broadcast**: One **GPU** sends to all others. Used for initial weight distribution.
  - **Point-to-point (send/recv)**: Direct **GPU**-to-**GPU** transfer. Used in **pipeline parallelism** (activations between stages).
  - **All-to-all**: Every **GPU** sends different data to every other **GPU**. Used in **MoE** expert routing. High communication volume.

- **Nsight tool selection**: exam must-know
  - **Nsight Systems**: System-level timeline. Shows CPU-**GPU** interaction, kernel sequence, **NCCL** calls, memory transfers. "Where is time being spent?" First tool to use when investigating performance.
  - **Nsight Compute**: Kernel-level analysis. Shows roofline, **occupancy**, **memory bandwidth** utilization, instruction mix, register pressure. "Is this specific kernel running efficiently?" Use after **Nsight Systems** identifies the hot kernel.
  - **nvidia-smi**: Real-time **monitoring** (**GPU** util%, memory used, **temperature**, power). NOT a profiler. Quick check, not deep analysis.

### Must know

- **DDP (Distributed Data Parallel)**: Each **GPU** has full model replica. Gradients all-reduced across GPUs. Simplest strategy. Model must fit on one **GPU**.
- **FSDP (Fully Sharded Data Parallel)**: PyTorch's **ZeRO**-3 equivalent. Shards parameters, gradients, and optimizer states across data-parallel GPUs. Parameters are all-gathered before each layer, discarded after backward. Memory scales ~linearly with **GPU** count.
- **Tensor parallelism**: Splits individual weight matrices across GPUs (column-parallel for **attention** projections, row-parallel for output). **All-reduce** required per forward/backward pass per layer — HIGH communication frequency. Use within a node where NVLink provides 900 GB/s.
- **Pipeline parallelism**: Splits **transformer** layers across GPUs. **GPU** 0 has layers 0-9, **GPU** 1 has layers 10-19, etc. Point-to-point communication between stages — LOWER communication than tensor. Pipeline bubbles (GPUs idle waiting for previous stage) reduce efficiency. Bubble fraction = (p-1)/m where p = pipeline stages, m = micro-batches. More micro-batches = less bubble.
- **Activation checkpointing**: Store only checkpoint boundaries during forward. Recompute intermediate activations during backward. Trades ~33% more forward compute for significant memory savings. Selective checkpointing (every other **transformer** block) gives O(√L) memory instead of O(L).
- **NCCL collectives**: **GPU**-to-**GPU** communication primitives. **All-reduce** (gradient sync), **all-gather** (parameter gathering in **FSDP**), **reduce-scatter** (gradient distribution in **FSDP**). Built on **CUDA**, optimized for NVLink/InfiniBand topologies.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Model fits on each GPU | **Data parallelism/DDP** | Tensor parallelism without need |
| Model does not fit one GPU | **FSDP/ZeRO-3**, tensor, or pipeline parallelism | Plain DDP with full replicas |
| Optimizer states dominate memory | **ZeRO-1/2/3** or **FSDP** depending on sharding need | Activation checkpointing only |
| Activations dominate forward/backward memory | **Activation checkpointing** or sequence parallelism | Sharding optimizer states only |
| Multi-node all-reduce is slow | **NCCL** topology, hierarchical all-reduce, GPUDirect RDMA | Adding more nodes blindly |
| Low GPU utilization with kernel gaps | **Nsight Systems**; consider CUDA Graphs or fusion | Using nvidia-smi as a profiler |
| One hot kernel is memory-bound | **Nsight Compute** and kernel/memory analysis | Changing cluster topology first |
| MoE experts are imbalanced | Load-balancing loss, capacity factor, expert routing fixes | Treating it as normal data parallelism |
| CPU-GPU preprocessing bottleneck | RAPIDS/cuDF/cuML or GPU-native data path | Moving tensors back to CPU repeatedly |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **Nsight Systems** vs **Nsight Compute** | Systems shows timelines and where time goes; Compute analyzes one kernel's efficiency. |
| **DDP** vs **FSDP/ZeRO** | DDP replicates the whole model; FSDP/ZeRO shards parameters, gradients, and/or optimizer states. |
| Tensor vs pipeline parallelism | Tensor splits matrices inside layers; pipeline splits layers/stages. |
| **All-reduce** vs **all-gather** | All-reduce sums values to all ranks; all-gather collects shards into full tensors. |
| Compute-bound vs memory-bound | Compute-bound saturates SM math; memory-bound waits on data movement/HBM. |
| NCCL vs gRPC | NCCL is GPU collective communication; gRPC is application/service communication. |
| More GPUs vs faster training | More GPUs can reduce step time only if communication does not dominate. |

### Mini scenario drill

1. Scenario: Training fits on 8 GPUs in one node but slows badly across nodes.
   Best answer pattern: Diagnose inter-node communication; inspect **NCCL**, topology, GPUDirect RDMA, and hierarchical all-reduce.
   Trap: Adding more nodes without reducing cross-node communication.

2. Scenario: Nsight Systems shows long gaps between CUDA kernels.
   Best answer pattern: Suspect CPU launch overhead or synchronization; use CUDA Graphs or kernel fusion.
   Trap: Starting with model architecture changes.

3. Scenario: OOM occurs during backward with huge saved activations.
   Best answer pattern: Use **activation checkpointing** and possibly sequence parallelism.
   Trap: Only sharding optimizer states.

### High-yield exam signals

- **OOM during optimizer step**: Optimizer states (Adam m+v) are the culprit — 8× **weight memory** in FP32 terms. Enable **ZeRO**-1 (shards optimizer states) or **ZeRO**-3 (shards everything).
- **OOM during forward pass**: Activations too large. Enable activation checkpointing.
- **All-reduce dominating step time**: Communication-bound. Try hierarchical **all-reduce**, check **NCCL** topology, consider **pipeline parallelism** (less **all-reduce**).
- **Low GPU utilization**: Could be CPU-bound (kernel launch overhead — use **CUDA** Graphs), communication-bound (**NCCL** waiting), or I/O-bound (data loading). **Nsight Systems** timeline reveals which.
- **Multi-node scaling falls off a cliff**: Inter-node communication (InfiniBand) is the bottleneck. NVLink is 900 GB/s intra-node; InfiniBand is ~50 GB/s per link inter-node. Minimize cross-node communication — use tensor/pipeline within node, data across nodes with hierarchical **all-reduce**.
- **Expert load imbalance (MoE)**: Some experts receive most tokens, others idle. All-to-all communication pattern creates hotspots. Solution: auxiliary load-balancing loss, expert capacity limits, or dynamic expert placement.

### Hands-on checks

1. **Memory categorization drill**: Given a 70B model training OOM, categorize the memory: weights (140 GB **FP16**), gradients (140 GB **FP16**), optimizer states (560 GB FP32 for Adam), activations (batch × seq × hidden). Identify which category the OOM is in based on WHEN it happens.
2. **Parallelism selection**: "Model is 200B params, 8 GPUs per node, 4 nodes. Each **GPU** has 80 GB." → Model doesn't fit one **GPU** (200B × 2 bytes = 400 GB). Need **tensor parallelism** within node + pipeline across nodes + data across pipeline replicas. **ZeRO**-3 alone would need to fit layer on one **GPU** for forward pass.
3. **Nsight drill**: "Training is slow. **Nsight Systems** shows 40% **GPU** idle time with gaps between kernels." → CPU launch overhead. Enable **CUDA** Graphs or increase workload per kernel (fusion). "**Nsight Compute** shows kernel at 30% of roofline, **memory bandwidth** saturated." → **Memory-bound** kernel. Fuse operations to reduce HBM traffic.
4. **NCCL diagnostic**: "**All-reduce** hangs intermittently on 64 GPUs." → Check NCCL_DEBUG=INFO for desynchronized ranks (one **rank** enters **all-reduce** before another). Enable NCCL_ASYNC_ERROR_HANDLING=1. Check InfiniBand fabric for errors.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when scaling, OOMs, collectives, **GPU** utilization, or memory layout appear in a scenario.
- The major trap pattern is: More GPUs can be slower if communication dominates.
- Recurring local question themes follow the key ideas: **FSDP**/**ZeRO**, **tensor parallelism**, **pipeline parallelism**, **NCCL**, Nsight.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q10** / `gpu-001`: You must train a 30B model on a 32×A100 cluster. Memory is too tight for **ZeRO**-1. Which combination is the most appropriate first step? Correct idea: **ZeRO**-3 / **FSDP** full sharding of optimizer states, gradients, and parameters, with activation checkpointing. Trap: TP=32 produces enormous **all-reduce** traffic across nodes (where bandwidth drops sharply) and is rarely optimal beyond...
- **mock_1 Q11** / `gpu-002`: When training a 175B model across 64 nodes (8 H100 each), which parallelism layout typically minimizes total step time? Correct idea: **Tensor parallelism** within a node + **pipeline parallelism** across small node groups + **data parallelism** across pipeline replicas. Trap: **All-reduce** across 512 GPUs over InfiniBand kills **throughput**.
- **mock_1 Q12** / `gpu-003`: Activation checkpointing changes which trade-off? Correct idea: Lower **activation memory** at the cost of one extra forward pass per checkpointed segment during backward.
- **mock_1 Q13** / `gpu-004`: Profiling with **Nsight Systems** shows long gaps between **CUDA** kernels during a 70B inference run. What does this typically indicate? Correct idea: Host-side (CPU) launch overhead dominating — candidate for **CUDA** Graphs.
- **mock_1 Q14** / `gpu-005`: **NCCL** **all-reduce** **throughput** drops sharply when scaling beyond a single node. Which configuration most commonly addresses this? Correct idea: Enable **NCCL** hierarchical algorithms (e.g., tree, NVLS, SHARP) and verify InfiniBand transport, **GPU** Direct RDMA, and NCCL_TOPO s....
- **mock_1 Q15** / `gpu-006`: When does **pipeline parallelism**'s bubble overhead become the limiting factor? Correct idea: When micro-batch count is small relative to pipeline depth.
- **mock_1 Q16** / `gpu-007`: A multi-node training job stalls intermittently with no error. **NCCL** debug output shows hangs around **all-reduce**. Which is the most useful first diagnostic? Correct idea: Set `NCCL_DEBUG=INFO` and `NCCL_ASYNC_ERROR_HANDLING=1`, capture per-**rank** **logs**, and check for desync (one **rank** lagging) via tim....
- **gpu-008** / `gpu-008`: Sequence parallelism on top of **tensor parallelism** reduces what kind of memory specifically? Correct idea: **Activation memory** in the LayerNorm and dropout regions of each **transformer** block.
- **gpu-009** / `gpu-009`: A 405B **MoE** model has 8 experts/token routed top-2. Profiling shows several GPUs idle while others are saturated. What is the most likely cause? Correct idea: Expert load imbalance — the **router** sends most tokens to a small subset of experts.
- **gpu-010** / `gpu-010`: Mixed-**precision** training (**FP16** + FP32 master weights) requires which loss-side mechanism to avoid gradient underflow? Correct idea: Dynamic loss scaling.
- **gpu-011** / `gpu-011`: For a workload with 1B token training corpus and 8× H100, which is more likely to be communication-bound: **data parallelism** with full **all-reduce** or **ZeRO**-3? Correct idea: **ZeRO**-3, because it adds parameter **all-gather** and gradient **reduce-scatter** every layer.
- **gpu-012** / `gpu-012`: You see a **CUDA** OOM only during the optimizer step, not during forward/backward. Which memory category is the culprit? Correct idea: Optimizer state (e.g., Adam's m and v moments — 2× **weight memory** in FP32).
- **gpu-013** / `gpu-013`: When does enabling `torch.compile` (or equivalent graph compile) hurt rather than help inference **latency**? Correct idea: When input shapes vary on every call, causing repeated recompilation.
- **gpu-014** / `gpu-014`: **NCCL** `NCCL_P2P_DISABLE=1` fixes a hang on a specific multi-**GPU** node. What is the trade-off? Correct idea: Loses NVLink P2P bandwidth — collectives now route through host or PCIe, lowering **throughput**. The fix is a workaround, not a ta....
- **mock_2 Q26** / `m1-026`: What is **CUDA**, and why is it important for LLM inference? Correct idea: **CUDA** is NVIDIA's parallel computing platform and programming model that enables developers to use GPUs for general-purpose comp.... Trap: **CUDA** is a parallel computing platform and programming model for **GPU** computing, not a high-level programming language...
- **mock_2 Q49** / `m1-049`: Multiple answers: Which of the following accurately describe RAPIDS and its role in data science workflows? Select two. Correct idea: RAPIDS includes components like cuDF, cuML, and cuGraph that provide familiar pandas-like and scikit-learn-like APIs while runn.... Trap: RAPIDS is a suite of **GPU**-accelerated data science libraries for data processing and analytics on NVIDIA GPUs, not a d...
- **mock_2 Q50** / `m1-050`: What is cuDF and how does it relate to pandas? Correct idea: cuDF is a **GPU**-accelerated DataFrame library with a pandas-like API, enabling faster data manipulation on NVIDIA GPUs. Trap: cuDF runs on NVIDIA GPUs using **CUDA** parallelism for accelerated data processing, not on CPUs using optimized SIMD ins...
- **mock_3 Q14** / `m2-014`: What is cuDF and how does it accelerate data preprocessing for LLM training? Correct idea: cuDF is a **GPU**-accelerated DataFrame library with a pandas-like API that speeds up data operations using **CUDA**. Trap: This describes **synthetic data** generation using **GPU**-accelerated **sampling**. cuDF is a DataFrame manipulation library wit...
- **mock_3 Q22** / `m2-022`: Multiple answers: What is the difference between **tensor parallelism** and **pipeline parallelism** when training large language models? Select two. Correct idea: **Tensor parallelism** requires high-bandwidth inter-**GPU** communication since GPUs must synchronize within each layer, while pipelin.... Trap: This option is actually a correct description of tensor and **pipeline parallelism**. However, the question asks for TWO...
- **mock_4 Q11** / `m3-011`: What is cuDF in the RAPIDS ecosystem? Correct idea: A **GPU**-accelerated DataFrame library with a pandas-like API for fast data manipulation. Trap: cuDF is a **GPU**-accelerated DataFrame library with a pandas-like API, not a distributed database management system for...
- **mock_4 Q25** / `m3-025`: Multiple answers: What is the role of cuML in the RAPIDS ecosystem for LLM workflows? Select two. Correct idea: Maintaining a scikit-learn-compatible API so existing CPU-based machine learning code can be migrated to **GPU** with minimal changes. Trap: This option accurately describes cuML -- providing **GPU**-accelerated ML algorithms for clustering, classification, and...
- **mock_4 Q36** / `m3-036`: What is the role of cuGraph in the RAPIDS ecosystem? Correct idea: Providing **GPU**-accelerated graph analytics algorithms for analyzing relationships and network structures. Trap: cuGraph provides **GPU**-accelerated graph analytics algorithms like PageRank and community detection, not creates intera...
- **mock_5 Q6** / `m4-006`: When optimizing LLM inference with **CUDA** kernels, what is the primary advantage of **kernel fusion**? Correct idea: It reduces **memory bandwidth** usage by combining multiple operations into a single kernel, minimizing intermediate data transfers.... Trap: **Kernel fusion** combines sequential **CUDA** operations into a single kernel on the same **GPU** to reduce **memory bandwidth** usa...
- **mock_5 Q36** / `m4-036`: When deploying LLMs on GPUs, what is **GPU memory** fragmentation and how can it impact inference performance? Correct idea: A situation where **GPU memory** has sufficient total free space but is scattered in non-contiguous blocks, preventing allocation o.... Trap: Partitioning model weights across multiple GPUs describes model parallelism, not **GPU memory** fragmentation -- fragment...

</details>

<!-- STUDY_ENRICHMENT_END -->

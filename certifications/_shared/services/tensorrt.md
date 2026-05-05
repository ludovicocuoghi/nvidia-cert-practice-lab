---
service: TensorRT
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# TensorRT

## What to study first

- **Core idea:** C++ SDK + Python bindings — offline compiler that turns trained models into optimized GPU engines
- **Use it when:** Use when a trained non-LLM model needs lower-latency GPU inference through engine building, precision calibration, or layer fusion.
- **Choose another path when:** Choose the neighboring service for LLM-specific serving problems like paged KV cache, in-flight batching, or token scheduling; use TensorRT-LLM instead.
- **Concrete surface:** Access: `pip install tensorrt`, CLI: `trtexec`, NGC container: `nvcr.io/nvidia/tensorrt` Inside: Layer fusion, INT8/FP8 calibration, kernel auto-tuning, memory reuse, constant folding I/O: Trained model (ONNX, PyTorch, TF) + precision config + calibration dataset -> Serialized TensorRT engine (`.engine`/`.plan`) — hardware-specific, 2-4x faster
- **Study first:** TensorRT engine build pipeline: model import (ONNX, TF SavedModel, torch-tensorrt) → graph parsing → optimization passes (layer fusion, precision calibration, kernel auto-tuning, memory reuse, constant folding) → serialized `.engine` file (not portable across GPU architectures)
- Precision modes and calibration: FP32 (baseline), FP16 (2x memory, no calibration needed), INT8 (4x, requires 500-1000 sample calibration via KL-divergence), INT4 (8x weight-only), FP8 (H100, E4M3/E5M2)
- calibration dataset must match production distribution
- Layer fusion types: vertical fusion (sequential layers like Conv→BiasAdd→ReLU → single FusedConv), horizontal fusion (parallel branches that merge into multi-output kernel)
- Dynamic shapes and optimization profiles: min/opt/max dimensions per dynamic input
- kernel selection tuned for `opt` shape
- multiple profiles for different shape ranges
- shape re-binding overhead (hundreds of microseconds to low milliseconds)
- TensorRT vs TensorRT-LLM distinction: TensorRT for vision/audio/recommender non-autoregressive models
- TensorRT-LLM for LLMs with autoregressive decoding, paged KV cache, in-flight batching, and optimized attention
- **Real trap:** Choosing general TensorRT for LLM decode throughput when the exam signal points to TensorRT-LLM.

## At a glance

| | |
|---|---|
| **What it is** | C++ SDK + Python bindings — offline compiler that turns trained models into optimized GPU engines |
| **How you access it** | `pip install tensorrt`, CLI: `trtexec`, NGC container: `nvcr.io/nvidia/tensorrt` |
| **Input** | Trained model (ONNX, PyTorch, TF) + precision config + calibration dataset |
| **Output** | Serialized TensorRT engine (`.engine`/`.plan`) — hardware-specific, 2-4x faster |
| **Inside** | Layer fusion, INT8/FP8 calibration, kernel auto-tuning, memory reuse, constant folding |

```bash
trtexec --onnx=model.onnx --saveEngine=model.engine --fp16         --minShapes=input:1x3x224x224 --optShapes=input:8x3x224x224 --maxShapes=input:32x3x224x224
```
```python
import tensorrt as trt
builder = trt.Builder(logger)
engine = builder.build_serialized_network(network, config)
```

**Mental model**: take a PyTorch/ONNX model, run `trtexec --fp16`, get a `.engine` file that runs 2-4x faster on GPU.

---

## What it is, in one paragraph

NVIDIA's general-purpose inference optimization toolkit for neural networks on NVIDIA GPUs. TensorRT compiles trained models (from PyTorch, TensorFlow, ONNX) into highly optimized GPU inference engines through layer fusion, precision calibration (FP16/INT8/INT4), kernel auto-tuning, and memory optimization. TensorRT-LLM is the LLM-specific subset.

## Where it sits in the lifecycle

**Inference optimization** — the optimization layer between model training and model serving. TensorRT takes a trained model and produces an optimized inference engine that Triton or NIM can serve.

```
[Trained model (PyTorch, TF, ONNX)] → [TensorRT: layer fusion, precision calibration, kernel tuning] → [Optimized engine] → [Triton/NIM: serve]
```

## When it is the right answer

- General inference optimization on NVIDIA GPUs (not LLM-specific)
- "Optimize inference workloads on NVIDIA GPUs" — precision calibration and layer fusion
- Reduced latency and memory usage for production inference
- Vision models, recommender systems, audio models — any neural network on GPU
- Questions about FP16/INT8/INT4 optimization of non-LLM models

## Adjacent-service decision boundary

- **LLM-specific throughput issues**: That's TensorRT-LLM (in-flight batching, paged KV cache are TensorRT-LLM specific, not general TensorRT).
- **Model training**: TensorRT is inference-only, not training.
- **Model serving**: That's Triton or NIM. TensorRT optimizes; Triton serves.
- **Safety filtering**: That's NeMo Guardrails.
- **Data processing**: That's RAPIDS.
- **GPU status monitoring**: That's NVIDIA SMI.

## How it relates to neighboring services

- vs **TensorRT-LLM**: TensorRT is the general-purpose inference optimizer for any neural network. TensorRT-LLM is the LLM-specific variant with transformer-aware optimizations (in-flight batching, paged KV cache, optimized attention kernels). For LLMs, pick TensorRT-LLM. For vision/audio/tabular, pick TensorRT.
- vs **Triton Inference Server**: TensorRT optimizes the model engine; Triton serves it. They're complementary: TensorRT produces the engine, Triton hosts it with dynamic batching and multi-model concurrency.
- vs **NIM**: NIM is the packaged product that uses TensorRT (or TensorRT-LLM) under the hood. NIM = easy button; TensorRT = manual optimization.
- vs **CUDA**: CUDA is the low-level parallel computing platform. TensorRT builds on CUDA to provide model-level optimization (graph-level fusion, precision calibration).

## Numbers, defaults, knobs you should recognize

- **Layer and tensor fusion**: Combines consecutive operations into single GPU kernels to reduce launch overhead
- **Precision calibration**: FP16, INT8, and INT4 quantization with minimal accuracy loss
- **Kernel auto-tuning**: Selects optimal kernel implementations for specific hardware and tensor shapes
- **Dynamic shape support**: Handles variable batch sizes and input dimensions
- **Memory optimization**: Reuses memory across layers, minimizes allocation overhead

## Example exam-style scenario

> A team has a computer vision model trained in PyTorch that needs to run with minimal latency on NVIDIA GPUs in production. Which NVIDIA tool optimizes the model for inference?

> **Answer**: TensorRT — it compiles and optimizes trained models into GPU-accelerated inference engines through layer fusion, precision calibration, and kernel auto-tuning.

## Mock signals

| Mock | Questions | Signal |
| ---- | --------- | ------ |
| mock_4 | Q13, Q20 | TensorRT for inference optimization on NVIDIA GPUs — "optimize inference workloads on NVIDIA GPUs," "reduced latency and memory usage" |



## Deep Dive Contents

This deep dive covers the key concepts behind TensorRT that the exam tests:

- **[How TensorRT Builds an Engine]**: model import (ONNX, TF, torch-tensorrt), graph parsing, optimization passes (layer fusion, precision calibration, kernel auto-tuning, memory optimization, constant folding), serialized engine
- **[Precision Modes]**: FP32 baseline, FP16 (2x memory reduction), INT8 (4x with KL-divergence calibration), INT4 (8x weight-only), FP8 (E4M3/E5M2 on H100); calibration dataset requirements (500-1000 samples)
- **[Dynamic Shapes and Optimization Profiles]**: min/opt/max dimensions, multiple profiles for different shape ranges, shape re-binding overhead for LLM variable-length paths
- **[TensorRT vs TensorRT-LLM]**: comprehensive comparison across scope, architecture, batching, KV cache, attention, sampling, quantization, and entry point
- **[ONNX Integration]**: PyTorch → ONNX → TensorRT workflow; common issues (unsupported ops, dynamic control flow, shape ops, custom layers, numerical drift) and best practices

## DEEP DIVE: How TensorRT Builds an Engine

The TensorRT engine build pipeline converts a trained model into an optimized inference engine through several stages:

1. **Model Import**: TensorRT accepts models via multiple entry points:
   - **ONNX**: The most common path. Export from PyTorch (`torch.onnx.export()`), TensorFlow (`tf2onnx`), or other frameworks to ONNX, then import via `onnx-parser` or the ONNX parser API.
   - **TensorFlow SavedModel / Frozen Graph**: Direct import through the TensorFlow integration (`tf-trt` or TensorRT's TF converter).
   - **PyTorch via torch-tensorrt**: A PyTorch JIT-level extension that compiles PyTorch modules directly into TensorRT engines without ONNX intermediate. Provides tighter integration with PyTorch's autograd and module system.

2. **Graph Parsing and Construction**: The imported model is translated into TensorRT's internal graph representation (Network Definition). TensorRT parses the computational graph, identifying operations, tensor shapes, data types, and connectivity. At this stage, unsupported operations trigger a fallback or error -- the model must be composed of ops that TensorRT recognizes and can optimize.

3. **Optimization Passes** (the core of TensorRT's value):
   - **Layer Fusion (kernel fusion / op fusion)**: Combines adjacent operations into a single GPU kernel. The canonical example: Conv2D + BiasAdd + ReLU is fused into a single FusedConv kernel, eliminating intermediate tensor reads/writes. **Vertical fusion** combines sequential layers (Conv -> ReLU -> Pool as one kernel). **Horizontal fusion** combines parallel branches that merge (multiple convolutions followed by concatenation into a single multi-output kernel). Fusion dramatically reduces kernel launch overhead and memory bandwidth usage.
   - **Precision Calibration**: Determines optimal reduced-precision representations (see DEEP DIVE: Precision Modes).
   - **Kernel Auto-Tuning**: TensorRT maintains a catalog of thousands of kernel implementations for each operation, parameterized by tensor shapes, precision, and hardware architecture. During building, TensorRT benchmarks candidate kernels (or uses a heuristic cost model) to select the fastest for each operation given the specific shapes and hardware.
   - **Memory Optimization**: TensorRT performs memory reuse analysis -- tensors with non-overlapping lifetimes share memory allocations. This minimizes peak memory usage, enabling larger batch sizes or models within the same GPU memory budget.
   - **Constant Folding**: Subgraphs with constant inputs are pre-computed at build time rather than runtime.

4. **Serialized Engine**: The optimized, hardware-specific engine is serialized to a plan file (`.engine` or `.plan`). This is a binary blob containing the fused kernels, memory allocation plan, and execution graph. It is NOT portable across GPU architectures (e.g., A100 vs H100).

**Build Time vs Runtime Tradeoff**: More aggressive optimization (wider kernel search, more fusion patterns) increases build time but produces faster engines. In production, engines are typically built once and cached. Build can take minutes for a small CNN to hours for a large transformer with extensive auto-tuning.

## DEEP DIVE: Precision Modes

TensorRT supports multiple numerical precisions that trade accuracy for throughput:

- **FP32 (32-bit float)**: Baseline precision. All operations in IEEE 754 single-precision. No accuracy loss, no speedup. Used as the reference for calibration.

- **FP16 (16-bit float)**: 2x memory reduction and up to 2x throughput on Tensor Cores (H100 has 989 TFLOPS FP16 vs 66 TFLOPS FP32 for dense matrix multiply). Most models require no calibration for FP16 -- the dynamic range is sufficient. However, some operations (LayerNorm with extreme values, Softmax with large logits) may need careful handling or fallback to FP32.

- **INT8 (8-bit integer)**: 4x memory reduction and up to 4x throughput (H100: 1979 TFLOPS INT8 Tensor Core). Requires **calibration** because the dynamic range of activations must be quantized from FP32 to INT8. The INT8 calibration process:
  1. Run the model on a calibration dataset (500-1000 representative images/inputs) in FP32.
  2. Collect activation distributions for each tensor (histograms of values).
  3. For each tensor, determine the optimal clipping threshold -- values outside [-threshold, threshold] are clipped. The goal: minimize KL divergence between the original FP32 distribution and the quantized INT8 distribution.
  4. Compute scaling factors (scale = threshold / 127) for per-tensor or per-channel quantization.
  5. These scaling factors are baked into the engine -- calibration needs to happen once, then the engine uses fixed quantization parameters.

  **Dynamic vs Static Quantization**: In dynamic quantization, scaling factors are computed per-input at runtime (more flexible, higher overhead). In static quantization (TensorRT's approach), scaling factors are pre-computed during calibration and fixed. TensorRT supports per-tensor and per-channel quantization, with per-channel generally providing better accuracy for convolution weights.

- **INT4 (4-bit integer)**: 8x memory reduction. Available on Hopper+ GPUs with INT4 Tensor Core support. Further accuracy loss. Typically used with weight-only quantization for LLMs (where weights dominate memory) while activations remain FP16/INT8.

- **FP8 (8-bit float, E4M3/E5M2)**: On H100, TensorRT supports FP8 (E4M3 for weights/activations, E5M2 for gradients during calibration or FP8 training). FP8 offers the memory savings of INT8 with better dynamic range and simpler calibration. Increasingly the precision of choice for LLM inference.

**Calibration Dataset Requirements**: 500-1000 samples typical for INT8. Must be representative of production data distribution. Poor calibration data leads to poor clipping thresholds and accuracy degradation. Production teams often draw calibration sets from real traffic logs.

## DEEP DIVE: Dynamic Shapes and Optimization Profiles

TensorRT supports models with variable input sizes through **optimization profiles** and **dynamic shapes**:

- **Dynamic Shape Dimensions**: Input tensors can have dynamic dimensions (e.g., `-1` for batch size or sequence length in ONNX export). TensorRT requires optimization profiles to specify valid ranges.

- **Optimization Profile**: Specifies three sets of dimensions for each dynamic input:
  - `min`: The minimum shape (e.g., batch=1, seq_len=64)
  - `opt`: The shape TensorRT optimizes for (e.g., batch=8, seq_len=512) -- kernel selection is tuned for this shape
  - `max`: The maximum shape (e.g., batch=32, seq_len=2048)

  The engine must work correctly for any shape between min and max, but performance is best at `opt`. Shapes must be within the specified range; out-of-range shapes cause runtime errors.

- **Multiple Optimization Profiles**: An engine can have multiple profiles (e.g., one for short sequences opt=128 and one for long sequences opt=2048). The execution context switches between profiles via `setOptimizationProfile()`.

- **Shape Re-binding**: When input shapes change (but remain within the profile), TensorRT rebinds the execution context -- reallocating internal buffers, recalculating memory offsets, and re-pinning CUDA resources. This has non-trivial overhead (hundreds of microseconds to low milliseconds). Frequent shape changes in a latency-critical path (e.g., per-request shape changes in an LLM) can degrade performance significantly.

- **Impact on LLM Inference**: LLMs have highly variable sequence lengths. In TensorRT-LLM, this is handled differently -- the paged KV cache and in-flight batching manage variable shapes at the runtime scheduling level rather than through TensorRT optimization profiles. The attention plugin receives actual sequence lengths as runtime inputs.

## DEEP DIVE: TensorRT vs TensorRT-LLM

| Aspect | TensorRT | TensorRT-LLM |
|--------|----------|--------------|
| **Scope** | General neural network optimizer (CNNs, RNNs, MLPs, transformers) | LLM-specific optimization framework |
| **Architecture** | Graph-level engine builder with op fusion | Transformer-aware: optimized attention, KV cache, sampling |
| **Batching** | Static batching (fixed input sizes) | In-flight (continuous) batching with paged KV cache |
| **KV Cache** | Not applicable (general purpose) | Paged KV cache with block-level memory management |
| **Attention** | Standard fused attention via plugins | GPTAttention plugin with FlashAttention, multi-query/grouped-query attention, variable-length support |
| **Sampling** | Generic top-k, top-1 | Integrated sampling kernels (top-k, top-p, beam search, penalty scoring) |
| **Quantization** | FP16, INT8, INT4 (general per-tensor/channel) | FP16, INT8, INT4, FP8, AWQ, GPTQ -- weight-only and activation-aware |
| **Entry Point** | `trtexec`, C++/Python API | C++ runtime with Python bindings, specialized for autoregressive loops |
| **Model Format** | ONNX, TF, torch-tensorrt | Native model checkpoint conversion + build |
| **Best For** | Vision, recommender, audio, general GPU inference | LLM inference (GPT, LLaMA, Mistral, Mixture-of-Experts) |

**When to use which**:
- Use **TensorRT** for: Computer vision (ResNet, YOLO, ViT), recommender systems (DLRM, DCN), audio models (Whisper, Tacotron), any non-autoregressive neural network.
- Use **TensorRT-LLM** for: Any autoregressive language model (decoder-only or encoder-decoder), chatbot inference, text generation, code generation, summarization.
- The split exists because autoregressive decoding imposes fundamentally different optimization requirements (memory-bound KV cache, variable-length sequences, sampling loops) that general TensorRT was not designed for.

## DEEP DIVE: ONNX Integration

ONNX (Open Neural Network Exchange) is the primary interchange format for TensorRT model import:

**Workflow**: PyTorch model -> `torch.onnx.export()` -> ONNX file -> TensorRT ONNX parser -> TensorRT network -> optimized engine.

**Common Issues and Solutions**:

1. **Unsupported ONNX Ops**: TensorRT only supports a subset of ONNX opsets. If a model uses ops not in TensorRT's op support list, the parser fails. Fixes:
   - Re-export with a different opset version (e.g., opset 15 instead of 17)
   - Replace unsupported ops with equivalent supported ops at the framework level
   - Write a custom TensorRT plugin (C++) that implements the missing op

2. **Dynamic Control Flow**: ONNX models with loops, conditionals, or data-dependent shapes (e.g., `torch.where`, if/else in the model graph) are difficult to export. TensorRT requires static or bounded-dynamic execution graphs. Most dynamic control flow must be resolved in the ONNX graph before export or handled outside TensorRT.

3. **Shape Operations**: Operations like shape, reshape, gather (on shapes), and non-maximum suppression involve dynamic tensor shapes that are hard to optimize statically. TensorRT handles many reshape patterns but can fail on complex shape manipulations.

4. **Custom Layers**: If a model contains custom operations (e.g., a novel attention variant, custom normalization), TensorRT cannot fuse or optimize them. Options:
   - Implement a TensorRT plugin (I-plugin V2 API) with custom CUDA kernels
   - Fall back to TensorFlow/PyTorch execution for these layers (not recommended for production)
   - Replace the custom layer with a supported equivalent

5. **Numerical Drift**: FP16/INT8 quantization introduces numerical differences vs FP32. ONNX Runtime may produce slightly different results than TensorRT due to different fusion patterns and numerical orderings. Small drift is expected and acceptable; large drift indicates a calibration issue or quantization-sensitive ops.

**Best Practices**:
- Export ONNX with `dynamic_axes` for variable batch size/sequence length
- Use opset versions supported by both PyTorch and TensorRT (typically 15-17)
- Validate ONNX correctness with ONNX Runtime before TensorRT import
- Use `trtexec --onnx=model.onnx --saveEngine=model.engine` for quick build testing
- For debugging build failures: `trtexec --verbose --builtinlayers=all --dumpLayerInfo`

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Inference optimization
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** C++ SDK + Python bindings — offline compiler that turns trained models into optimized GPU engines
- **Use it when:** Use when a trained non-LLM model needs lower-latency GPU inference through engine building, precision calibration, or layer fusion.
- **Do not use it when:** Choose the neighboring service for LLM-specific serving problems like paged KV cache, in-flight batching, or token scheduling; use TensorRT-LLM instead.
- **Common trap:** Choosing general TensorRT for LLM decode throughput when the exam signal points to TensorRT-LLM.
- **Recognition clues:** A trained non-LLM model needs a TensorRT engine for lower-latency GPU inference in production.
### Study notes
- Place **TensorRT** at **Inference optimization**: take a PyTorch/ONNX model, run `trtexec --fp16`, get a `.engine` file that runs 2-4x faster on GPU.
- Boundary cue: choose it when a trained non-LLM model needs lower-latency GPU inference through engine building, precision calibration, or layer fusion. Adjacent-service cue: not for LLM-specific serving problems like paged KV cache, in-flight batching, or token scheduling; use TensorRT-LLM instead.
### Must know
- **TensorRT engine build pipeline**: model import (ONNX, TF SavedModel, torch-tensorrt) → graph parsing → optimization passes (layer fusion, precision calibration, kernel auto-tuning, memory reuse, constant folding) → serialized `.engine` file (not portable across GPU architectures)
- **Precision modes and calibration**: FP32 (baseline), FP16 (2x memory, no calibration needed), INT8 (4x, requires 500-1000 sample calibration via KL-divergence), INT4 (8x weight-only), FP8 (H100, E4M3/E5M2); calibration dataset must match production distribution
- **Layer fusion types**: vertical fusion (sequential layers like Conv→BiasAdd→ReLU → single FusedConv), horizontal fusion (parallel branches that merge into multi-output kernel)
- **Dynamic shapes and optimization profiles**: min/opt/max dimensions per dynamic input; kernel selection tuned for `opt` shape; multiple profiles for different shape ranges; shape re-binding overhead (hundreds of microseconds to low milliseconds)
- **TensorRT vs TensorRT-LLM distinction**: TensorRT for vision/audio/recommender non-autoregressive models; TensorRT-LLM for LLMs with autoregressive decoding, paged KV cache, in-flight batching, and optimized attention
### What to recognize
- **General inference optimization on NVIDIA GPUs** → scenario about optimizing a trained model (PyTorch, TF, ONNX) for production inference with lower latency and memory; TensorRT compiles and optimizes via layer fusion, precision calibration, and kernel auto-tuning
- **Precision calibration for INT8 quantization** → scenario about INT8 quantization requiring a calibration dataset (500-1000 representative samples) to determine optimal clipping thresholds via KL-divergence minimization
- **TensorRT vs TensorRT-LLM distinction** → scenario about LLM-specific throughput issues (in-flight batching, paged KV cache) with TensorRT as a distractor; TensorRT-LLM is the correct answer for LLMs, TensorRT for non-autoregressive models
- **Dynamic shapes with optimization profiles** → scenario about variable input sizes (batch, sequence length) requiring min/opt/max shape specification; TensorRT optimization profiles handle bounded dynamic dimensions with kernel tuning optimized for the `opt` shape
- **ONNX import issues** → scenario about ONNX model failing to build with TensorRT due to unsupported ops, dynamic control flow, or shape operations; solutions include re-exporting with compatible opset, replacing unsupported ops, or writing custom TensorRT plugins
### Hands-on checks
- Write one scenario where **TensorRT** is correct and one scenario where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **TensorRT** matches **Inference optimization**, not whether the product name sounds familiar.
- Boundary cue: choose it when a trained non-LLM model needs lower-latency GPU inference through engine building, precision calibration, or layer fusion.
- Adjacent-service cue: not for LLM-specific serving problems like paged KV cache, in-flight batching, or token scheduling; use TensorRT-LLM instead.
- The common trap pattern is: Choosing general TensorRT for LLM decode throughput when the exam signal points to TensorRT-LLM.
- Expect distractors around nearby services such as **TensorRT-LLM**, **NIM**, **Triton Inference Server**, **NeMo Guardrails**. Decide by lifecycle first, product name second.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q36** / `deploy-002` (Model Deployment): NIM (NVIDIA Inference Microservice) provides which combination out of the box? Correct idea: A standardized OpenAI-compatible API surface, optimized engines (TensorRT-LLM/Triton), and a containerized deployable artifact..
- **deploy-007** / `deploy-007` (Model Deployment): An ONNX model exported from PyTorch fails with a `gather` opset mismatch when building a TensorRT engine. What is the appropriate fix? Correct idea: Re-export with a TensorRT-compatible opset version, or apply a graph transformation to replace the unsupported op.
- **mock_2 Q17** / `m1-017` (Model Deployment): Multiple answers: Which of the following accurately describe TensorRT-LLM's optimization techniques for improving LLM inference performance? Select two. Correct idea: Compiling and optimizing model graphs into highly efficient GPU execution plans with support for tensor parallelism across mult.. Trap: Kernel fusion, quantization, in-flight batching, and paged attention are indeed optimization techniques used by Tenso..
- **mock_2 Q18** / `m1-018` (Model Deployment): Multiple answers: Which of the following accurately describe capabilities of NVIDIA Triton Inference Server in LLM deployment? Select two. Correct idea: It supports model ensembling to chain multiple models into inference pipelines and enables concurrent execution of different mo.. Trap: Synthetic training data generation is not a capability of Triton Inference Server -- Triton is a production inference..
- **mock_2 Q26** / `m1-026` (GPU Acceleration and Optimization): What is CUDA, and why is it important for LLM inference? Correct idea: CUDA is NVIDIA's parallel computing platform and programming model that enables developers to use GPUs for general-purpose comp.. Trap: CUDA is a parallel computing platform and programming model for GPU computing, not a high-level programming language..
- **mock_3 Q6** / `m2-006` (Model Deployment): Multiple answers: When deploying an LLM using NVIDIA NIM, what is the primary benefit of this approach? Select two. Correct idea: NIM includes built-in optimizations using TensorRT-LLM for maximum inference throughput and low latency without requiring manua.. Trap: This claims NIM replaces GPU hardware entirely with CPU inference, which is incorrect. NIM is GPU-accelerated and rel..
- **mock_3 Q7** / `m2-007` (Model Deployment): What is TensorRT-LLM and how does it optimize LLM inference? Correct idea: TensorRT-LLM is an SDK that optimizes LLM inference through kernel fusion, quantization, and GPU-specific optimizations. Trap: This describes a distributed training framework for building models from scratch. TensorRT-LLM is an inference optimi..
- **mock_3 Q8** / `m2-008` (Model Deployment): What is the role of NVIDIA Triton Inference Server in LLM deployment? Correct idea: Triton provides a unified serving platform that can host multiple models, handle batching, and support various frameworks with.. Trap: This describes online learning or continuous fine-tuning from production feedback. Triton Inference Server is a servi..
- **mock_3 Q23** / `m2-023` (LLM Architecture): When integrating a Hugging Face Transformers model with NVIDIA TensorRT for inference optimization, what is the typical workflow? Correct idea: Export the Hugging Face model to ONNX format, then convert ONNX to TensorRT engine with optimizations like layer fusion and pre.. Trap: This claims TensorRT can directly load HuggingFace PyTorch models natively. TensorRT cannot directly import PyTorch m..
- **mock_3 Q50** / `m2-050` (LLM Architecture): What are the key strategies for optimizing LLM inference latency in production systems? Correct idea: Key strategies include model optimizations, hardware acceleration, serving optimizations, and system-level techniques such as q.. Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re..
- **mock_1 Q1** / `opt-001` (Model Optimization): A 70B-parameter chat model must serve ≥3,000 concurrent requests on H100s while keeping ROUGE-L within 1 point of the FP16 baseline. Which quantization recipe is the b.. Correct idea: AWQ 4-bit weight quantization with FP16 activations and a 512-prompt calibration set drawn from production traffic. Trap: Per-tensor INT8 without calibration almost always loses several ROUGE points on instruction-tuned chat models because..
- **mock_1 Q2** / `opt-002` (Model Optimization): You are deploying Llama-3.1-70B with TensorRT-LLM and want maximum throughput for variable-length chat prompts (200–4,000 tokens) under a 200 ms TTFT SLA. Which combin.. Correct idea: In-flight (continuous) batching with paged KV cache and chunked prefill. Trap: Padding to the longest sequence wastes GPU compute on shorter prompts and causes head-of-line blocking, which violate..
- **mock_1 Q7** / `opt-007` (Model Optimization): Triton Inference Server is serving a TensorRT-LLM engine. p99 latency spikes when concurrent users jump from 50 to 200. Which Triton parameter most directly addresses.. Correct idea: `dynamic_batching.max_queue_delay_microseconds` lowered, with `preferred_batch_size` aligned to engine sweet spots. Trap: Many instance groups on a single GPU contend for the same SMs and KV cache memory, often making p99 worse, not better.
- **mock_1 Q9** / `opt-009` (Model Optimization): In TensorRT-LLM, what is the most appropriate use of `gpt_attention_plugin` with paged KV cache? Correct idea: To enable variable-length sequences in a batch with non-contiguous KV cache pages, supporting in-flight batching.
- **opt-011** / `opt-011` (Model Optimization): A service needs sub-50 ms TTFT with ≤2% INT4 vs FP16 accuracy gap on a 13B model. Profile shows attention is the hot kernel. Which TensorRT-LLM feature gives the large.. Correct idea: CUDA graphs for the decoder loop combined with FlashAttention-2 fused kernel. Trap: Larger beam width increases compute and latency.
- **opt-012** / `opt-012` (Model Optimization): When converting a fine-tuned Hugging Face model to TensorRT-LLM, the build fails on an unsupported operator. What is the first thing to check? Correct idea: The architecture mapping in `convert_checkpoint.py` and whether the custom layer needs a TRT-LLM plugin or an opset workaround.
- **opt-017** / `opt-017` (Model Optimization): An ONNX-exported model produces correct outputs in ONNX Runtime but slightly different outputs after TensorRT engine build. Which is the likeliest cause? Correct idea: TensorRT applied layer fusion and FP16 precision flags that change numerical ordering — small numerical drift is expected and o..
- **mock_1 Q40, mock_2 Q42, mock_3 Q52, mock_4 Q46, mock_5 Q42** / `platform-002` (NVIDIA Platform Implementation): An agent must enforce topical restrictions, block jailbreak attempts, and validate grounded RAG answers. Which NVIDIA component fits best? Correct idea: NeMo Guardrails. Trap: SMI gives GPU status.
- **mock_1 Q42, mock_2 Q44, mock_3 Q54, mock_4 Q48, mock_5 Q44** / `platform-004` (NVIDIA Platform Implementation): A NIM-hosted LLM has poor token throughput under variable-length generation. Which lower-level NVIDIA technology is most directly relevant? Correct idea: TensorRT-LLM features such as in-flight batching, paged KV cache, and optimized attention kernels. Trap: Data dedup is not inference scheduling.

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
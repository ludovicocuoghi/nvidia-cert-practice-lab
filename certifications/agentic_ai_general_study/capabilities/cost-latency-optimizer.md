---
capability: Cost/Latency Optimizer
status: populated
source_lens: general-study
---

# Cost/Latency Optimizer

## What You Are Building

You are building the measurement-driven loop that reduces latency and cost without breaking quality or safety.

## Pipeline

1. Measure per-stage latency and cost.
2. Separate retrieval, tools, prefill, decode, queueing, network, and guardrail time.
3. Choose optimization: routing, smaller model, quantization, caching, batching, context reduction, KV-cache tuning.
4. Validate quality and safety after optimization.
5. Monitor for route drift, cache staleness, and regression.

## Core Concepts

- Prefill processes input/context tokens; decode generates output tokens.
- KV cache grows with sequence length/layers and affects memory.
- Attention prefill cost grows with prompt length; long context can be slower even before the first output token.
- MQA/GQA, paged KV cache, and KV-cache quantization are architecture/serving levers for memory pressure.
- Batching improves throughput but may hurt tail latency.
- Quantization reduces memory/cost but needs eval.
- TensorRT-LLM/NIM profiles optimize LLM serving with kernel fusion, in-flight batching, paged KV cache, and precision choices.
- Caching must respect permissions, version, and freshness.
- Routing simple tasks to smaller models can cut cost.
- Nsight Systems answers "where is the bottleneck"; Nsight Compute answers "why is this kernel slow."

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "long context slow" | prefill/context reduction/KV cache | bigger model |
| "output generation slow" | decode/token budget/model size | chunking only |
| "same query repeated" | permission/version-aware cache | cross-tenant cache |
| "simple tasks use premium model" | routing to smaller model | one model for all |
| "GPU idle but request slow" | tools/retrieval/queue tracing | adding GPUs |
| "GPU busy but low tokens/sec" | TensorRT-LLM profile, batching, KV cache, kernel analysis | prompt rewrite only |
| "system-level latency mystery" | Nsight Systems / distributed trace first | Nsight Compute as first step |
| "specific kernel dominates" | Nsight Compute after Systems identifies it | NVIDIA SMI snapshot |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Optimize before measuring | First find the bottleneck. |
| Cache everything | Cache only safe, scoped, fresh, deterministic results. |
| Quantization is quality-neutral | It needs eval on target workload. |
| GPU utilization explains latency | Utilization snapshots do not show queueing, CPU dispatch, retrieval, or kernel bottlenecks. |
| Longer context is free if it fits | It raises prefill time, KV-cache use, and often cost. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | TensorRT-LLM, NIM profiles | Inference optimization and serving profiles. |
| NVIDIA | Nsight Systems / Nsight Compute | System timeline first, kernel analysis second. |
| NVIDIA | Triton / Dynamo | Dynamic batching, multi-model serving, and distributed inference scheduling. |
| Open source | vLLM, TGI | KV cache, batching, and serving controls. |
| Gateway | model router/cache | Cost-aware routing and cache policy. |

## Deep Dive

### Where it sits in the lifecycle

Cost/latency optimization is the **measured improvement loop** across retrieval, tools, gateway, serving, and model output.

```text
[Trace spans] -> [Find bottleneck] -> [Apply targeted optimization]
        -> [Regression eval] -> [Roll out with monitoring]
```

Do not optimize the model first if traces show retrieval, tool APIs, queueing, or context packing dominate latency.

### Bottleneck map

| Symptom | Likely layer | Better first move |
|---|---|---|
| Slow first token | Prefill/context | Reduce prompt, retrieved chunks, history |
| Slow long answer | Decode | Output cap, batching, TensorRT-LLM, quantization |
| High p99 with good average | Queueing/tool tail latency | Span tracing, route limits, timeout budget |
| GPU low utilization | Serving scheduler | Dynamic batching or capacity tuning |
| RAG cost spike | Retrieval/context | top-k, reranker budget, cache, chunk packing |
| Quality drops after speed fix | Eval regression | Restore route/model/context or adjust threshold |

### NVIDIA optimization map

| Tool/service | Use it for | Not for |
|---|---|---|
| TensorRT-LLM | LLM kernels, paged KV cache, in-flight batching, quantization | RAG orchestration |
| NIM profiles | Packaged optimized inference endpoints | Training a model |
| Triton/Dynamo | Multi-model or distributed serving | Prompt quality |
| Nsight Systems | Timeline: where time goes across CPU/GPU/system | Kernel instruction detail first |
| Nsight Compute | Kernel-level drilldown after hot kernel is known | End-to-end agent tracing |

### Cost levers

Cost optimization is not only smaller models:

- Route simple tasks to small models and hard tasks to reasoning models.
- Reduce prompt and retrieved context before buying longer context.
- Tune retrieval top-k, reranker candidate count, and output token caps.
- Use caching only when tenant, document version, prompt version, and policy make reuse safe.
- Validate every precision, batching, and fallback change against quality and safety evals.

## Exam Signals

- "p99 latency" -> measure spans first.
- "context bloat" -> reduce retrieved/prompt tokens.
- "KV cache" -> long-context decode memory.
- "quantization" -> cost/memory/quality tradeoff.
- "batching" -> throughput vs latency.
- "Nsight Systems" -> system timeline / where bottleneck is.
- "Nsight Compute" -> kernel-level why after hot kernel identified.
- "TensorRT-LLM" -> LLM inference optimization, not RAG or orchestration.

## Hands-on Checks

1. Classify bottlenecks as retrieval, tool, prefill, decode, queueing, or network.
2. Design a cache policy with tenant, user, document version, and TTL.
3. Choose optimization for three workloads: chat, long-doc summarization, high-volume classification.

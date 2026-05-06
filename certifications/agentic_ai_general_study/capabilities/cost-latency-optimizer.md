---
capability: Cost/Latency Optimizer
status: populated
source_lens: general-study
---

# Cost/Latency Optimizer

## Actual implementation / How you use it

```yaml
optimize:
  inspect: [route, queue, retrieval, rerank, prefill, decode, tools, guardrails]
  levers: [cache, route_smaller_model, trim_context, batch, quantize, parallelize_reads]
  gates: [task_success, groundedness, safety, p95_latency, cost_per_task]
```

| Input | Optimizer decision | Output |
|---|---|---|
| Stage-level trace and quality metrics | Pick the cheapest latency fix that preserves quality | Lower p95/p99 or cost per task with regression evidence |

## What to study first

- **Core idea:** You are building the measurement-driven loop that reduces latency and cost without breaking quality or safety.
- **Read first:** `Latency, Throughput, and Traffic Control` defines p50, p95, p99, TTFT, queue delay, backpressure, circuit breakers, and rollout traffic controls.
- **Study first:** Measure per-stage latency and cost.
- Separate retrieval, tools, prefill, decode, queueing, network, and guardrail time.
- Choose optimization: routing, smaller model, quantization, caching, batching, context reduction, KV-cache tuning.
- Validate quality and safety after optimization.
- Monitor for route drift, cache staleness, and regression.

## What You Are Building

You are building the measurement-driven loop that reduces latency and cost without breaking quality or safety.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Main levers |
|---|---|---|
| Train model from zero | After publish, optimize serving profile for the trained checkpoint. Training throughput belongs to the foundation training stack. | precision, batching, KV cache, endpoint profile |
| Fine-tune existing model | Compare tuned vs baseline endpoint latency/cost; adapter routes can add overhead. | adapter merge/load strategy, route policy, rollback |
| Use existing model/API | Main lane: model routing, prompt/context size, batching, caching, output caps, fallback. | route, cache, context, model size |
| Build agent/RAG application | Optimize the full chain: retrieval, rerank, tools, model, guardrails, and memory. | top-k, reranker budget, tool timeout, context packing |
| Operate, govern, and improve | Main lane: use traces to find bottlenecks and verify quality after each optimization. | p95/p99, cost per completed task, route drift |

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

### User count, concurrency, and latency SLOs

Raw user count is a capacity clue, not a diagnosis. Convert "1,000 users" or "1 million users" into request rate, concurrent requests, token lengths, traffic bursts, and the user-facing SLO before choosing a fix.

Percentile latency is the exam's favorite way to expose hidden production pain. **p50** is the median request. **p95** means 95% of requests finish at or below that time. **p99** means 99% finish at or below that time, so the remaining 1% are worse. If average or p50 is fine but p99 is bad, look for queueing, retries, slow tools, long context, long outputs, or overloaded shared lanes.

| Scenario cue | Watch first | Likely first move | Trap |
|---|---|---|---|
| Few users but slow first token | TTFT, cold starts, prompt length, retrieval/tool spans | Warm endpoint, trim context, trace slow dependency | Autoscale replicas for a non-capacity bottleneck |
| Many users and p95/p99 climbs | Queue depth, concurrency, batching window, autoscaling lag | Add capacity or admission control after measuring the saturated lane | Tune only the prompt while requests wait in queue |
| p50 normal, p99 bad | Tail spans, timeout rate, slow tools, long-output outliers | Set per-step timeouts, isolate lanes, cap output or route outliers | Trust average latency |
| Good TTFT but slow completion | Decode time, tokens/sec, output tokens, KV-cache pressure | Output cap, smaller/faster route, serving profile, batching | Treat streaming as a backend speed fix |
| Low GPU use while users wait | Tool, retrieval, network, gateway, queue spans | Fix the non-GPU bottleneck or parallelize safe reads | Buy GPUs because the app feels slow |
| High GPU use and low tokens/sec | Batch shape, KV cache, precision, TensorRT-LLM/NIM profile | Tune serving runtime, quantization, batching, or model size | Blame user volume only |

For interactive UX, p95/p99 TTFT and inter-token latency matter more than average total latency. For offline batch work, throughput and total completion time usually matter more than first-token responsiveness.

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

### Stage vocabulary

| Term | Meaning | Usual optimization |
|---|---|---|
| Time to first token | User wait before generation starts | Reduce queueing, route faster, shorten prefill, stream |
| Prefill | Process input tokens and retrieved context | Trim prompt/history/chunks, cache prefixes, improve packing |
| Decode | Generate output tokens autoregressively | Output cap, smaller model, TensorRT-LLM/NIM profile, batching |
| KV cache | Stored attention keys/values for prior tokens | Paged cache, shorter context, cache quantization where validated |
| Dynamic batching | Group requests to improve GPU throughput | Tune batch windows so p99 does not suffer |
| Quantization | Lower numerical precision for weights/activations | Eval quality, calibration, and edge cases |
| Cache hit | Reused safe result or prefix | Scope by tenant, policy, model, prompt, and source version |

If the scenario says "GPU is idle but the user waits," suspect queueing, retrieval, tools, network, or orchestration before kernel optimization. If it says "GPU is busy with low tokens/sec," then serving profile, batching, precision, and kernel analysis become more likely.

### Implementation card: stage metrics

```python
def percentile(values, q):
    values = sorted(values)
    idx = int((len(values) - 1) * q)
    return values[idx]

def summarize_latency(traces):
    stages = ["route", "retrieval", "rerank", "prefill", "decode", "tool", "guardrail"]
    return {
        stage: {
            "p50_ms": percentile([t[stage].ms for t in traces], 0.50),
            "p95_ms": percentile([t[stage].ms for t in traces], 0.95),
            "p99_ms": percentile([t[stage].ms for t in traces], 0.99),
        }
        for stage in stages
    }

def cost_per_completed_task(trace):
    return (
        trace.input_tokens * trace.input_token_price
        + trace.output_tokens * trace.output_token_price
        + trace.embedding_calls * trace.embedding_price
        + trace.rerank_calls * trace.rerank_price
        + trace.tool_cost
        + trace.human_review_cost
    ) / max(trace.task_success, 1)
```

The "score" is usually an operating metric, not a training loss: p95 latency, p99 latency, time to first token, tokens/sec, cache hit rate, cost per completed task, and quality after optimization.

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

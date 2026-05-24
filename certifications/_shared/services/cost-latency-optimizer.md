---
service: Cost/Latency Optimizer
relevant_to: [AAI-GEN]
status: populated
---

# Cost/Latency Optimizer

## What to study first

- **Core idea:** The lifecycle loop that reduces latency and cost without breaking quality.
- **Use it when:** The scenario mentions p99, throughput, token cost, long context, queueing, batching, quantization, caching, or route drift.
- **Choose another path when:** Measure traces, cost, and quality first when the bottleneck is still unknown.
- **Concrete surface:** Access: Serving runtimes, profilers, autoscaling policies, model routers, cache layers, endpoint tuning tools Inside: Prefill/decode split, KV cache, queueing, model routing, prompt compaction, retrieval pruning, batching, autoscaling I/O: Trace data, latency breakdown, cost by route, token counts, quality floor, traffic pattern -> Faster/cheaper route, smaller context, cache policy, batch policy, quantized model, scaling rule
- **Real trap:** Adding GPUs or larger models before checking retrieval/tool waits, queueing, or context bloat.

## At a glance

| | |
|---|---|
| **What it is technically** | Optimization loop for routing, context size, batching, caching, quantization, concurrency, scheduler behavior, and infrastructure choice |
| **How you access it** | Serving runtimes, profilers, autoscaling policies, model routers, cache layers, endpoint tuning tools |
| **Input** | Trace data, latency breakdown, cost by route, token counts, quality floor, traffic pattern |
| **Output** | Faster/cheaper route, smaller context, cache policy, batch policy, quantized model, scaling rule |
| **Inside** | Prefill/decode split, KV cache, queueing, model routing, prompt compaction, retrieval pruning, batching, autoscaling |

```yaml
route_policy:
  cheap_path:
    model: small-fast-endpoint
    max_context_tokens: 6000
    cache: true
  premium_path:
    condition: risk == "high" or task == "reasoning"
metrics:
  watch: [ttft_ms, tokens_per_second, p99_ms, cost_per_task]
```

**Mental model**: measure where time and money go, then optimize the right layer.

## Study card data

- **What it is:** The lifecycle loop that reduces latency and cost without breaking quality.
- **Lifecycle:** Inference optimization
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions p99, throughput, token cost, long context, queueing, batching, quantization, caching, or route drift.
- **Do not use it when:** Measure traces, cost, and quality first when the bottleneck is still unknown.
- **Common trap:** Adding GPUs or larger models before checking retrieval/tool waits, queueing, or context bloat.
- **Recognition clues:** "Costs spike because simple tasks route to a premium reasoning model."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | TensorRT-LLM, Dynamo, Triton, Nsight | Runtime optimization, distributed serving, batching, and profiling. |
| AWS | SageMaker Inference Recommender, endpoint autoscaling, Bedrock model choice | Instance, endpoint, scaling, and model-routing choices. |
| Open source | vLLM, TGI, quantization, prompt caching | Scheduler, batching, quantization, cache, and context-control tools. |

## Portable concepts

Break latency into stages:

- Routing.
- Retrieval.
- Prompt construction.
- Model prefill.
- Decode/token generation.
- Tool calls.
- Guardrails.
- Network and queueing.

Break cost into:

- Input tokens.
- Output tokens.
- Model tier.
- Tool/API calls.
- Retrieval/index costs.
- GPU/instance time.
- Human review.

## Decision guide

| Symptom | Likely lever | Trap |
|---|---|---|
| Long prompts | Context pruning/summarization | Bigger model only |
| Slow first token | Prefill optimization | Decode-only thinking |
| Slow generation | Decode/runtime tuning | Retrieval tuning |
| High simple-task cost | Model routing | Premium model for all |
| Repeated stable lookups | Cache | Cache permission-sensitive answers blindly |

## High-yield signals

- "TTFT" -> prefill/queueing.
- "Tokens/sec" -> decode/runtime.
- "KV cache" -> long context/concurrency memory.
- "Route drift" -> model router.
- "Cost per completed task" -> full workflow cost.

## Chapter notes

The cost/latency optimizer is the **tradeoff chapter**. Its job is to reduce time and money while protecting answer quality, safety, and user experience. The exam pattern is usually a false shortcut: add GPUs, shrink the model, increase batch size, or tune prompts without first identifying the slow or expensive span.

### First split the request

```text
total_time =
  route_time
+ retrieval_time
+ rerank_time
+ prefill_time
+ decode_time
+ tool_time
+ guardrail_time
+ network_time
+ queue_time

total_cost =
  input_tokens * input_price
+ output_tokens * output_price
+ gpu_seconds * gpu_price
+ retrieval_cost
+ tool_cost
+ human_review_cost
```

### Optimization map

| Symptom | Likely metric | First useful lever |
|---|---|---|
| Slow first token | TTFT, queue time, prefill time | trim context, prefix reuse, warm endpoint, queue policy |
| Slow long response | tokens/sec, output tokens | decode/runtime profile, max tokens, streaming |
| Good average, bad p99 | p95/p99 by span | isolate slow dependency, backpressure, bulkheads |
| High cost on easy tasks | route mix, cost per success | small-model route, cache, cheaper tool |
| GPU OOM under concurrency | KV-cache memory | shorter context, lower concurrency, paged KV, quantization |

### Cost curve

```text
quality
  ^
  |                          strong model + RAG + eval
  |                    *
  |              *
  |        *
  |  *
  +------------------------------------> cost/latency
     cheap prompt     routed system       premium path
```

The goal is not always the cheapest path. The goal is **the cheapest path that still meets the quality and risk bar**.

### Scenario drill

A chat system has good total tokens/sec but poor TTFT. Lowering `max_tokens` does not solve prefill, because `max_tokens` limits output length after the first token. Inspect queue time, prompt length, retrieval payload, prefix caching, endpoint warmup, and prefill metrics first.

## Hands-on checks

1. For a slow request, label time as retrieval, prefill, decode, tool, guardrail, queue, or network.
2. Propose one optimization and one quality regression test.

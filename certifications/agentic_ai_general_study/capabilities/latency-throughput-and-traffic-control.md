---
capability: Latency, Throughput, and Traffic Control
status: populated
source_lens: general-study
---

# Latency, Throughput, and Traffic Control

## Actual implementation / How you use it

```yaml
traffic_control:
  measure:
    request_rate: requests_per_second
    concurrency: in_flight_requests
    latency: [p50_ms, p95_ms, p99_ms, ttft_ms, inter_token_ms]
    saturation: [queue_depth, gpu_utilization, tool_timeout_rate, vector_db_wait_ms]
  protect:
    admission: [rate_limit, priority_queue, shed_low_value_work]
    isolation: [realtime_lane, batch_lane, bulkhead_per_dependency]
    failure: [timeout_budget, circuit_breaker, fallback, graceful_degradation]
  release:
    rollout: [canary, shadow, blue_green, rollback]
    gates: [task_success, groundedness, safety, p99_latency, cost_per_task]
```

| Input | Traffic-control decision | Output |
|---|---|---|
| User load, token shape, queue depth, trace spans, SLO | Pick batching, isolation, backpressure, autoscaling, or rollout control | Stable user-facing latency without breaking quality or safety |

## What to study first

- **Core idea:** You are managing production traffic, not just making a model faster.
- **Study first:** Convert user count into request rate, live concurrency, token length, workflow steps, and queue depth.
- Separate **latency** from **throughput**: latency is one request's delay; throughput is total completed work per time.
- Define **p50**, **p95**, and **p99** before reading any deployment question.
- Treat **TTFT** as the real-time chat cue: users feel the wait before the first streamed token.
- Use backpressure, circuit breakers, bulkheads, timeout budgets, and separate workload lanes before overload spreads.
- Roll out changes with canary, shadow, blue-green, rollback, and quality/safety gates.

## What You Are Building

You are building the traffic-control layer around model endpoints, retrieval services, tools, guardrails, and agent orchestration. It decides how requests enter the system, how they queue, which lane or endpoint they use, when to batch, when to shed or degrade work, and when a release should roll back.

## Lifecycle Placement

| Lifecycle lane | What this page means there | First question to ask |
|---|---|---|
| Use existing model or API | Keep chat, batch, embedding, reranking, and tool-heavy traffic from hurting each other. | Which route and SLO does this request need? |
| Build agent/RAG application | Measure model, retrieval, rerank, tools, memory, guardrails, and review as separate spans. | Which component owns the slow tail? |
| Deploy and operate | Use autoscaling, queue policy, canaries, rollback, and incident replay. | Which signal proves this rollout is healthy? |
| Optimize cost/latency | Improve the measured bottleneck without lowering task success or safety. | Is the bottleneck queueing, prefill, decode, retrieval, or tools? |

## Core Definitions

| Term | Meaning | Exam signal |
|---|---|---|
| **p50 latency** | Median latency: 50% of requests finish at or below this time. | Typical user experience. |
| **p95 latency** | 95% of requests finish at or below this time. | Tail behavior for most users under load. |
| **p99 latency** | 99% of requests finish at or below this time. | Bad outliers hidden by averages; timeout and escalation risk. |
| **Tail latency** | The slow end of the latency distribution, usually p95/p99. | "Average is fine but users complain." |
| **TTFT** | Time to first token: delay from request start to first streamed token. | Chat feels slow, even if total completion is acceptable. |
| **Inter-token latency** | Delay between streamed output tokens. | Streaming feels choppy. |
| **Throughput** | Work completed per time: requests/sec, tokens/sec, docs/sec, jobs/hour. | Batch summarization, embedding jobs, cost efficiency. |
| **Concurrency** | Requests currently in flight. | More users are active at the same time. |
| **Request rate** | New requests entering per second or minute. | Traffic spike, flash sale, launch event. |
| **Queue delay** | Time waiting before work starts. | High TTFT with saturated lane or batching window. |
| **Backpressure** | Slowing, rejecting, or degrading new work so downstream systems recover. | Avoid cascade failure. |
| **Circuit breaker** | Temporarily stops calls to a failing dependency. | Tool/vector DB timeout storm. |
| **Bulkhead** | Isolates one workload or dependency from others. | Batch jobs should not hurt chat. |

p99 is not "almost the maximum." It means 99% of requests finish at or below that time, so the remaining 1% are worse. That 1% matters when traffic is large: at 100,000 requests/day, 1% is 1,000 bad experiences.

## Decision Guide

| Scenario wording | Think first | Avoid |
|---|---|---|
| Average latency is OK, p99 is bad | Tail spans: queues, long tools, long prompts, retries, noisy batch lane | Trust average latency |
| Chat has slow first token | TTFT: route, queue, prefill, cold start, retrieval/tool wait | Measure only total response time |
| Batch summarization is slow | Throughput: batch size, offline lane, larger queue window, tokens/sec | Apply chat TTFT settings |
| More users cause rising queue depth | Admission, autoscaling, separate lanes, rate limits | Scale by registered users alone |
| GPU is idle but users wait | Retrieval/tool/network/orchestration spans | Buy more GPUs immediately |
| GPU is busy and tokens/sec is low | Decode/runtime profile, batching, KV cache, precision | Retry the same route more |
| Tool timeouts cascade | Timeout budget, circuit breaker, fallback, bulkhead | Infinite retries |
| New endpoint looks faster but quality drops | Canary gate failed | Promote based only on latency |

## Common Traps

| Trap | Correct mental model |
|---|---|
| "Add GPUs" for every slow request | First identify whether the slow span is model, retrieval, tool, queue, or guardrail. |
| Bigger batch is always better | Bigger batches can improve throughput while increasing queue delay and p99. |
| Streaming makes the backend faster | Streaming improves perceived responsiveness; total work may be unchanged. |
| User count equals concurrency | User count must become active users, request rate, token shape, and queue depth. |
| Canary is only 5% traffic | Canary needs quality, safety, latency, cost, and rollback gates. |
| Guardrails fix traffic overload | Guardrails enforce policy; traffic controls protect capacity and latency. |

## Numbers, Knobs, And Defaults To Recognize

| Knob | Increases | Can hurt |
|---|---|---|
| Batch size | Throughput and GPU utilization | TTFT and p99 if requests wait too long |
| Max queue delay | Batch formation efficiency | Interactive responsiveness |
| Concurrent requests | Utilization | Queueing, memory pressure, rate-limit failures |
| Output token cap | Predictability and cost control | Completeness if cap is too low |
| Retrieval top-k | Recall and context coverage | Prefill latency, cost, noise |
| Reranker candidates | Relevance | Latency and cost |
| Autoscaling threshold | Capacity under load | Cold starts or oscillation if tuned poorly |
| Timeout budget | Bounded tail latency | False failures if too aggressive |
| Circuit breaker threshold | Dependency protection | Temporary feature degradation |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA NIM | Served model endpoint with profiles and metrics | Endpoint health, TTFT, throughput, scaling. |
| Triton Inference Server | Dynamic batching and model serving | Throughput vs queue-delay tradeoff. |
| TensorRT-LLM | Paged KV cache, in-flight batching, optimized decode | LLM-specific runtime bottlenecks. |
| Dynamo | Distributed LLM serving | Large-model or multi-node serving lanes. |
| NIM Operator | Kubernetes lifecycle | Autoscaling, rollout, and endpoint lifecycle. |
| Nsight Systems | CPU/GPU/system timeline | Where time is spent before kernel-level tuning. |
| OpenTelemetry | Application traces | Retrieval/tool/model/guardrail span correlation. |

## Deep Dive

### Traffic math

```python
def estimate_inflight(requests_per_second, average_latency_seconds):
    # Little's Law approximation: concurrency = arrival_rate * service_time
    return requests_per_second * average_latency_seconds

def classify_latency(trace):
    spans = {
        "queue": trace.ms("queue"),
        "retrieval": trace.ms("retrieval"),
        "tool": trace.ms("tool"),
        "prefill": trace.ms("prefill"),
        "decode": trace.ms("decode"),
        "guardrail": trace.ms("guardrail"),
    }
    return max(spans, key=spans.get)
```

If request rate doubles and latency stays the same, in-flight work roughly doubles. If latency also increases because queues form, concurrency can climb faster than expected.

### Latency anatomy for agents

```text
[Admission/queue] -> [Route] -> [Retrieval] -> [Rerank]
        -> [Tool calls] -> [Prefill] -> [Decode] -> [Guardrails] -> [Review]
```

An agent can have good model serving metrics and still be slow because retrieval, tool calls, guardrails, or review queues dominate the trace.

### Workload lanes

| Lane | Optimized for | Typical controls |
|---|---|---|
| Real-time chat | Low TTFT, smooth streaming, low p95/p99 | Short queue window, warm endpoints, smaller context, priority queue |
| Batch/offline | Throughput and cost | Larger batches, longer queue delay, offline queue, low priority |
| High-risk actions | Safety and approval quality | Human approval, stricter timeout, audit logging |
| Embeddings/rerank | High-volume auxiliary calls | Separate endpoints, batch policy, vector DB protection |

Do not put real-time chat and overnight batch jobs in the same uncontrolled queue. If they share the same model, use separate endpoints, routes, or priority lanes.

### Release traffic controls

| Control | Use when | Must include |
|---|---|---|
| Canary | Gradually expose a new model/prompt/tool/index | Quality, safety, p99, cost, rollback threshold |
| Shadow | Observe new version without user-facing output | Trace comparison and privacy-safe logging |
| Blue-green | Swap full environments quickly | Health checks, data/index compatibility, rollback |
| Rollback | New release regresses | Versioned model, prompt, retriever, tool, policy metadata |

## Scenario Drill

A support agent has fine average latency, but p99 TTFT jumps from 1.8s to 9s during the nightly report job. The reports and chat share one endpoint.

Correct reasoning:

1. This is a tail-latency and traffic-isolation problem.
2. Inspect queue delay, batch window, prompt length, and endpoint saturation.
3. Separate chat and batch lanes or endpoints.
4. Give chat a lower queue-delay target and batch a throughput-oriented policy.
5. Roll out with p99 TTFT, task success, safety, and cost gates.

Wrong first moves:

- Fine-tune the model, because this is not a durable-behavior failure.
- Add guardrails, because this is not primarily a policy failure.
- Trust average latency, because p99 is the user-visible pain.

## Study Card Data

- **Lifecycle:** Serving and deployment; operations; cost/latency optimization.
- **What it is:** The layer of thinking that converts load and latency clues into queueing, batching, scaling, isolation, and rollout decisions.
- **Use it when:** Questions mention p95/p99, TTFT, throughput, user count, queue depth, batching, backpressure, circuit breakers, bulkheads, canary, blue-green, or rollback.
- **Do not use it when:** The problem is answer correctness, missing facts, bad tool schema, unsafe policy, or human approval design.
- **Common trap:** Optimizing the model before measuring whether the slow span is actually retrieval, tools, queueing, guardrails, or review.
- **Scenario signal:** "Average latency is fine, but p99 is bad" means tail-latency diagnosis, not average-based scaling.

## Exam Signals

- "p99 latency" -> tail latency; trace stage percentiles.
- "TTFT" -> first-token responsiveness; queue, route, cold start, prefill, retrieval/tool waits.
- "Throughput" -> completed work per time; batching and offline lanes may help.
- "Many users" -> request rate, concurrency, queue depth, autoscaling lag.
- "Batching" -> throughput tradeoff against TTFT and p99.
- "Backpressure" -> protect dependencies from overload.
- "Circuit breaker" -> stop repeated calls to a failing dependency.
- "Bulkhead" -> isolate traffic so one lane cannot cascade failure.
- "Canary/blue-green/rollback" -> release traffic controls plus quality/safety gates.

## Hands-on Checks

1. Define p50, p95, p99, TTFT, throughput, concurrency, and queue delay from memory.
2. For one slow request trace, classify the bottleneck as queueing, retrieval, tool, prefill, decode, guardrail, or review.
3. Design two lanes for the same model: real-time chat and offline summarization.
4. Write rollback criteria that include p99 latency, task success, groundedness, safety, and cost.

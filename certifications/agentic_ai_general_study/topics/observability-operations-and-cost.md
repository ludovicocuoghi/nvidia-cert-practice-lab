---
domain: Observability, Operations, and Cost
weight: 10
status: populated
---

# Observability, Operations, and Cost

## Actual implementation / Pattern you use

```json
{
  "trace_id": "task-2026-05-06-001",
  "route": "rag_agent_high_confidence",
  "spans": [
    {"name": "route", "ms": 12, "result": "rag_agent"},
    {"name": "retrieve", "ms": 180, "docs": 8, "empty": false},
    {"name": "rerank", "ms": 42, "top_k": 4},
    {"name": "prefill", "ms": 510, "input_tokens": 6200},
    {"name": "decode", "ms": 860, "output_tokens": 410},
    {"name": "tool_call", "ms": 240, "tool": "lookup_case"},
    {"name": "guardrail_output", "ms": 35, "result": "pass"}
  ],
  "versions": {"model": "v3", "prompt": "p12", "policy": "g7", "index": "r14"},
  "outcome": {"task_success": true, "grounded": true, "cost_usd": 0.042}
}
```

| Trace question | Look for | Common fix |
|---|---|---|
| Where is time spent? | Stage durations, queue depth, p95/p99 | Optimize the actual span |
| Why did task fail with HTTP 200? | Outcome labels and tool/retrieval evidence | Add task success events and regression cases |
| Why did cost spike? | Route drift, token shape, retries, tool calls | Route cheaper, trim context, cache, reduce loops |
| Can we replay it? | Versioned model, prompt, tools, policy, index | Store enough metadata for incident-to-eval conversion |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Run, Monitor, and Maintain | Covers traces, drift, incidents, cost dashboards, and versioned replay. |
| Deployment and Scaling | Shows how to locate p95/p99 bottlenecks before scaling or optimizing. |
| Evaluation and Tuning | Converts live failures into regression cases and quality/safety checks. |
| NVIDIA Platform Implementation | Maps generic trace/profiling concepts to Nsight, NIM metrics, and NeMo Evaluator when product wording appears. |

## What to study first

- **Core idea:** How live agents are traced, monitored, debugged, optimized, and turned into regression tests.
- **Read first for production delay words:** `Latency, Throughput, and Traffic Control` owns p50/p95/p99, TTFT, queue delay, throughput, concurrency, backpressure, circuit breakers, bulkheads, and rollout traffic controls.
- **Use it when:** The scenario mentions p99 latency, cost per task, HTTP 200 but failed work, trace replay, route drift, or incidents.
- **Study first:** A **trace** is the end-to-end request path
- a **span** is one timed step such as retrieval, rerank, prefill, decode, tool call, guardrail, or review.
- p50: is typical latency
- **p95/p99** show tail latency where users feel slow requests and timeout risk.
- Time to first token: is mostly prefill, queueing, and routing
- **tokens per second** is mostly decode and serving efficiency.
- Cost per completed task: is more useful than cost per API call when agents may retrieve, rerank, call tools, retry, or escalate.
- Route drift: means traffic moves into more expensive, less safe, or less accurate lanes than expected.
- **Real trap:** Monitoring uptime while ignoring task success.

## Concept ownership

This is the vendor-neutral home for operating agentic systems after release. Keep traces, logs, metrics, task success, cost per completed task, route drift, p95/p99 diagnosis, incident-to-eval loops, and optimization tradeoffs here. Vendor pages should focus on the monitoring/profiling product that supplies those signals.

## Study card data

- **What it covers:** How live agents are traced, monitored, debugged, optimized, and turned into regression tests.
- **Lifecycle:** Operations
- **Use this section when:** The scenario mentions p99 latency, cost per task, HTTP 200 but failed work, trace replay, route drift, or incidents.
- **Common trap:** Monitoring uptime while ignoring task success.
- **Recognition clues:** The app returns 200, but the CRM tool silently returns empty results.

### Key ideas

- **Observability** records the trajectory.
- **Cost/latency optimization** starts from traces.
- **Task success** matters more than HTTP status.
- **Incidents** should create new eval cases.
- **Cost** includes model tokens, tools, retrieval, infrastructure, and human review.

### Must know

- A **trace** is the end-to-end request path; a **span** is one timed step such as retrieval, rerank, prefill, decode, tool call, guardrail, or review.
- **p50** is typical latency; **p95/p99** show tail latency where users feel slow requests and timeout risk.
- **Time to first token** is mostly prefill, queueing, and routing; **tokens per second** is mostly decode and serving efficiency.
- **User-count scenarios** should be translated into request rate, concurrent in-flight work, token shape, queue depth, and per-lane saturation before picking a fix.
- **p50 flat but p99 high** usually means tail behavior: queueing, slow tools, long contexts, long outputs, retries, or a few overloaded routes.
- **Cost per completed task** is more useful than cost per API call when agents may retrieve, rerank, call tools, retry, or escalate.
- **Route drift** means traffic moves into more expensive, less safe, or less accurate lanes than expected.
- **Incident replay** should preserve model, prompt, route, retrieval index, tool schema, guardrail, and policy versions so the failure can become a regression test.

### Code anchor

```python
def trace_score(trace):
    return {
        "task_success": trace.outcome == "success",
        "p95_stage_ms": {stage: p95(trace.window(stage)) for stage in trace.stages},
        "cost_per_task": trace.cost_usd / max(trace.completed_tasks, 1),
        "route_drift": trace.route not in expected_routes[trace.task_type],
        "replayable": all(trace.version.get(k) for k in ["model", "prompt", "policy", "tools"]),
    }
```

Operations metrics are functions over traces, not only logs: p50/p95/p99, empty retrieval, tool failure, unsupported citations, escalation rate, cost, and replay coverage.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Tracing | NeMo Agent Toolkit observability | CloudWatch, X-Ray | OpenTelemetry, Phoenix |
| Profiling | Nsight Systems/Compute | CloudWatch metrics | OTEL, profiler stacks |
| Cost/latency | TensorRT-LLM, Triton, Dynamo | SageMaker autoscaling, endpoint tuning | vLLM, TGI, caches |

### Decision guide

| Symptom | Inspect first | Trap |
|---|---|---|
| High p99 | Stage-level trace | Optimize model blindly |
| Many users, rising latency | Request rate, queue depth, concurrency, autoscaling state | Treat raw registered-user count as the bottleneck |
| Few users, slow first token | TTFT trace: cold start, routing, prefill, retrieval/tool waits | Add capacity before checking warmup and context |
| p50 normal, p99 bad | Tail spans, retry storms, slow dependencies, long-output outliers | Average latency dashboard |
| Cost spike | Route/token/tool cost | Blame traffic only |
| Failed task with 200 | Task success events | HTTP only |
| Retrieval failure | Retrieval spans | Final answer only |
| Safety drift | Guardrail rates | Uptime only |

### Deep dive: trace-first diagnosis

| Signal | First diagnostic tool or view | Why |
|---|---|---|
| End-to-end latency, queueing, CPU/GPU gaps, tool waits | System timeline | It shows where the request waits before choosing a low-level fix |
| Specific slow GPU kernel | Kernel-level profile | Use after a timeline identifies the kernel |
| Agent loops or repeated failed calls | Trajectory trace | The bottleneck is orchestration, not serving |
| Retrieval empty or irrelevant | Retrieval spans and query/doc metrics | RAG quality must be measured before changing the model |
| Safety false positives or misses | Guardrail span outcomes and reviewer labels | Policy tuning needs precision/recall, not anecdotes |

### Operating metrics by layer

| Layer | Metrics |
|---|---|
| Routing | Route mix, route drift, escalation rate, fallback rate |
| Retrieval | Empty retrieval, recall@k, rerank win rate, stale index hits, ACL denials |
| Tooling | Schema failures, auth denials, timeout rate, duplicate prevention, retry count |
| Model endpoint | TTFT, tokens/sec, queue depth, p95/p99, error rate, cost per 1K tokens |
| Agent task | Task success, trajectory quality, cost per completed task, human escalation quality |
| Safety/governance | Refusal correctness, PII incidents, audit completeness, review SLA |

### Hands-on checks

1. Draw a trace with route, retrieval, model, tool, guardrail, and final response spans.
2. Turn one incident into a regression test.

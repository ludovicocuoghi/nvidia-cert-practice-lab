---
domain: Observability, Operations, and Cost
weight: 10
status: populated
---

# Observability, Operations, and Cost

## What to study first

- **Core idea:** How live agents are traced, monitored, debugged, optimized, and turned into regression tests.
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
| Cost spike | Route/token/tool cost | Blame traffic only |
| Failed task with 200 | Task success events | HTTP only |
| Retrieval failure | Retrieval spans | Final answer only |
| Safety drift | Guardrail rates | Uptime only |

### Hands-on checks

1. Draw a trace with route, retrieval, model, tool, guardrail, and final response spans.
2. Turn one incident into a regression test.

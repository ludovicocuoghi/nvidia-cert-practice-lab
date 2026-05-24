---
service: Observability and Trace Monitor
relevant_to: [AAI-GEN]
status: populated
---

# Observability and Trace Monitor

## What to study first

- **Core idea:** The lifecycle owner for live operational visibility.
- **Use it when:** The scenario mentions incidents, HTTP 200 but failed tasks, empty tool results, route drift, cost spikes, p99 latency, or trace replay.
- **Choose another path when:** Choose a neighboring capability when the issue is offline release evaluation only.
- **Concrete surface:** Access: OpenTelemetry, cloud monitoring, trace dashboards, agent observability tools, log stores Inside: Span IDs, prompt/model versions, tool latency, retrieval metadata, p95/p99, token cost, task-success events I/O: Model calls, retrieval calls, tool calls, guardrail decisions, latency, cost, route, user feedback -> Dashboards, alerts, traces, failure clusters, incident reports, replay cases
- **Real trap:** Treating infrastructure uptime as agent success.

## At a glance

| | |
|---|---|
| **What it is technically** | Live traces, metrics, logs, spans, dashboards, alerts, and replay for agent/model systems |
| **How you access it** | OpenTelemetry, cloud monitoring, trace dashboards, agent observability tools, log stores |
| **Input** | Model calls, retrieval calls, tool calls, guardrail decisions, latency, cost, route, user feedback |
| **Output** | Dashboards, alerts, traces, failure clusters, incident reports, replay cases |
| **Inside** | Span IDs, prompt/model versions, tool latency, retrieval metadata, p95/p99, token cost, task-success events |

```python
with tracer.start_as_current_span("agent.request") as span:
    span.set_attribute("model.route", route.name)
    span.set_attribute("retrieval.top_k", top_k)
    span.set_attribute("cost.input_tokens", tokens_in)
    span.set_attribute("task.success", success)
```

**Mental model**: the flight recorder for live agent behavior.

## Study card data

- **What it is:** The lifecycle owner for live operational visibility.
- **Lifecycle:** Monitoring and profiling
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions incidents, HTTP 200 but failed tasks, empty tool results, route drift, cost spikes, p99 latency, or trace replay.
- **Do not use it when:** Choose a neighboring capability when the issue is offline release evaluation only.
- **Common trap:** Treating infrastructure uptime as agent success.
- **Recognition clues:** "Users complain even though every request returns 200."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Agent Toolkit observability + Nsight Systems | Agent traces plus NVIDIA performance diagnosis. |
| AWS | CloudWatch, X-Ray, Bedrock invocation logs | Operational logs, traces, alarms, and cloud service visibility. |
| Open source | OpenTelemetry, Phoenix, LangSmith, W&B Weave | Model/agent traces, RAG diagnostics, and production telemetry. |

## Portable concepts

An agent trace should show:

- User request and route.
- Prompt/model version.
- Retrieval query and returned sources.
- Tool calls and parameters.
- Guardrail decisions.
- Latency by stage.
- Token/cost by stage.
- Final answer and task status.
- Human escalation or feedback.

Without traces, incidents become guesswork.

## Decision guide

| Symptom | Observe first | Trap |
|---|---|---|
| 200 but task failed | Task success events and tool results | HTTP status only |
| High p99 | Stage-level latency trace | Optimize model blindly |
| Cost spike | Route/model/token metrics | Blame users only |
| Bad citations | Retrieval spans and source IDs | Inspect final answer only |
| Safety drift | Guardrail and escalation rates | Uptime dashboard |

## High-yield signals

- "Trace/replay" -> observability.
- "p95/p99" -> latency metrics.
- "Route drift" -> route monitoring.
- "Empty tool result" -> tool-call health.
- "Incident" -> logs + replay + regression.

## Chapter notes

Observability is the **live-story chapter**. It records what the system actually did under real traffic: which route it chose, which chunks it retrieved, which tool calls happened, which guardrail fired, how long each step took, what it cost, and whether the user task really succeeded. Without that story, every incident turns into guessing.

The minimum useful trace shape is:

```text
agent.request
  route.select
  retrieval.search
  retrieval.rerank
  model.prefill_decode
  tool.execute
  guardrail.check
  answer.finalize
  feedback.record
```

Each span should carry **version and outcome**: prompt version, model route, retriever index, tool name, policy name, latency, token count, cost, and task status. Infrastructure metrics tell you whether the service is up; agent traces tell you whether the work was useful.

### Tail latency plot

Average latency hides outliers. A p99 incident often looks like this:

```text
requests sorted by latency
p50  |####  1.2s
p95  |###############  4.8s
p99  |########################################  18.6s
max  |##################################################  27.0s
```

The investigation should follow the slow spans:

```text
total p99 = queue + retrieval + rerank + prefill + decode + tool + guardrail
```

If retrieval is slow, tune search/index/rerank. If prefill is slow, inspect prompt length, prefix reuse, and queueing. If decode is slow, inspect model profile, batching, KV cache, and runtime. If tools are slow, add timeouts, retries, circuit breakers, or cached safe reads.

### Scenario drill

Users report "wrong answers" while dashboards show HTTP 200 and healthy GPUs. The trace reveals the CRM tool returned an empty result, the agent treated it as evidence, and the answer generator never saw a failure state. The fix begins in **Observability and Trace Monitor**: add tool-result health, task-success events, and replay cases, then feed the incident into the evaluation harness.

## Hands-on checks

1. Draw one trace with spans for routing, retrieval, model, tool, guardrail, and final response.
2. Convert one incident into a new regression eval.

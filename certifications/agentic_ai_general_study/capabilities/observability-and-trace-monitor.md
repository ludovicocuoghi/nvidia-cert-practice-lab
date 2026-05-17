---
capability: Observability and Trace Monitor
status: populated
source_lens: general-study
---

# Observability and Trace Monitor

## What to study first

- **Core idea:** You are building the live monitoring layer for model calls, retrieval, tools, guardrails, routing, latency, cost, errors, quality signals, incidents, and replay.
- **Study first:** Instrument spans for model inference, retrieval, reranking, tools, guardrails, queues, and output generation.
- Attach versions: model, prompt, retrieval index, tools, policy, route.
- Track p50/p95/p99 latency, cost, token usage, errors, empty retrieval, tool failures, safety blocks.
- Add alerts for quality, safety, cost, and reliability.
- Support trace replay and incident investigation.

## What You Are Building

You are building the live monitoring layer for model calls, retrieval, tools, guardrails, routing, latency, cost, errors, quality signals, incidents, and replay.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | During training use training logs; after publish trace the new endpoint and route behavior. | Serving traces for trained checkpoint |
| Fine-tune existing model | Compare tuned route vs baseline route and detect regressions by adapter/profile. | Adapter-specific traces |
| Use existing model/API | Trace endpoint calls, prompt versions, route, latency, token cost, and quality proxies. | Model/API operation trace |
| Build agent/RAG application | Main lane: trace retrieval, rerank, tool calls, memory, guardrails, model calls, and final answer. | Replayable agent trajectory |
| Operate, govern, and improve | Main lane: incidents, route drift, cost spikes, safety drift, replay, and regression creation. | Incident and monitoring loop |

## Pipeline

1. Instrument spans for model inference, retrieval, reranking, tools, guardrails, queues, and output generation.
2. Attach versions: model, prompt, retrieval index, tools, policy, route.
3. Track p50/p95/p99 latency, cost, token usage, errors, empty retrieval, tool failures, safety blocks.
4. Add alerts for quality, safety, cost, and reliability.
5. Support trace replay and incident investigation.
6. Feed incidents into regression evals.

## Core Concepts

- Agent latency is end-to-end, not just model inference.
- Traces explain where time and failure happen.
- Quality monitoring includes retrieval and tool health.
- Version tags make incidents reproducible.
- Monitoring does not replace pre-release evaluation.
- OpenTelemetry-style spans should cover retrieval, reranking, LLM prefill/decode, tool calls, guardrails, gateways, queues, and human review.
- Nsight Systems complements application traces when GPU/CPU scheduling or kernel timeline matters.
- Production monitoring should track both operational metrics and task-quality proxies such as empty retrieval, unsupported citations, tool failure, safety blocks, and human escalation.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "HTTP 200 but task failed" | trace task success and tool results | status code only |
| "p99 latency high" | span breakdown | add GPUs first |
| "cost spike" | route/model/context/token metrics | blame users |
| "retrieval empty" | retrieval monitor | generator tuning |
| "incident replay" | trace with versions | unstructured logs only |
| "GPU timeline needed" | Nsight Systems plus app trace correlation | NVIDIA SMI only |
| "kernel-level slowdown" | Nsight Compute after timeline identifies kernel | whole-system dashboard only |
| "quality drift after route change" | route/model/prompt/index version tags | aggregate success rate only |

## Common Traps

| Trap | Correct mental model |
|---|---|
| GPU utilization equals agent health | Tools, retrieval, queues, and guardrails can dominate. |
| Logs are enough | Structured traces and versions are needed for replay. |
| Monitoring fixes quality | It detects issues; evals and changes fix them. |
| HTTP success equals task success | Agent success needs tool correctness, groundedness, policy, and user outcome signals. |
| One dashboard metric is enough | Latency, quality, safety, and cost can move in opposite directions. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| OpenTelemetry | distributed traces | Cross-component span visibility. |
| Agent dashboards | trajectory traces | Tool/retrieval/model workflow replay. |
| NVIDIA | Nsight Systems / Nsight Compute | CPU/GPU timeline and kernel drilldown for performance investigations. |
| NVIDIA | NeMo Evaluator | Converts failures and incidents into eval/regression evidence. |
| Cloud monitors | latency/cost/errors | Operational alerting. |

## Deep Dive

### Where it sits in the lifecycle

Observability is the **trace and incident explanation layer** across the agent workflow.

```text
[Request] -> [Route] -> [Prompt/context] -> [Retrieval] -> [Tool] -> [Model]
        -> [Guardrail] -> [Answer] -> [Replay/eval case]
```

Without span-level traces, adding hardware or changing models is guesswork.

### Trace fields to preserve

| Field | Why it matters |
|---|---|
| Request/user/tenant metadata | Debugs permission and routing behavior |
| Prompt/model/profile version | Answers "what changed?" |
| Retrieval index/reranker version | Explains grounding failures |
| Tool schema and result | Replays tool trajectories |
| Guardrail policy version | Explains block/allow decisions |
| Token counts and latency spans | Locates prefill, decode, queue, tool, or retrieval bottlenecks |
| Final answer/citations | Supports incident replay and eval creation |

### Metrics by question

| Question | Watch |
|---|---|
| Is it slow? | p50/p95/p99, span latency, queue delay, time to first token |
| Is it expensive? | tokens, route mix, cache hit rate, model profile cost |
| Is retrieval healthy? | empty-result rate, expected-source canaries, freshness |
| Is it safe? | block rate, PII hits, escalation rate, policy failures |
| Is it correct? | tool success, groundedness, regression failures |

### NVIDIA diagnostic boundary

Use application traces first to locate the failing layer. Use **Nsight Systems** when the issue is CPU/GPU/system timeline interaction. Use **Nsight Compute** after a hot kernel is identified and kernel-level detail is needed. Neither replaces agent trace monitoring.

### Trace anatomy

| Span | Useful fields | Failure it explains |
|---|---|---|
| Gateway route | route, model profile, tenant, risk tier, fallback reason | Wrong model or expensive route selected |
| Retrieval | query, filters, index version, top-k, empty-result state | Missing or unauthorized evidence |
| Rerank | candidate count, top-N, reranker version, latency | Good source buried or reranker too slow |
| Prefill/decode | input tokens, output tokens, time to first token, tokens/sec | Context bloat or slow generation |
| Tool call | schema version, arguments, auth result, external status | HTTP 200 final answer but failed action |
| Guardrail | policy version, block/allow reason, PII/prompt-injection hits | Safety drift or false blocks |
| Human review | risk tier, reviewer action, reason, SLA | Governance backlog or inconsistent review |

Operational traces should be connected to evals. A production incident is most valuable when it can be replayed with the exact versions that caused it, then added to a regression suite.

### Implementation card: span instrumentation

```python
def handle_request(request):
    trace = Trace(request_id=request.id, tenant=request.tenant)
    with trace.span("route") as s:
        route = gateway.choose_route(request)
        s.set("route", route)

    with trace.span("retrieval") as s:
        chunks = retriever.search(request.query, filters=request.auth_filters)
        s.set("top_k", len(chunks))
        s.set("empty", len(chunks) == 0)

    with trace.span("model") as s:
        answer = llm.generate(build_prompt(request, chunks))
        s.set("input_tokens", answer.input_tokens)
        s.set("output_tokens", answer.output_tokens)

    trace.set_outcome(task_success=score_task(answer), cost_usd=estimate_cost(trace))
    trace_store.write(trace)
    return answer
```

Trace-derived evaluation functions include task success rate, empty retrieval rate, unsupported citation rate, tool failure rate, guardrail false block/allow rate, p95/p99 by span, and cost per completed task.

## Exam Signals

- "p99 latency" -> trace spans first.
- "tool silently failed" -> tool health monitor.
- "cost spike" -> route/context/token metrics.
- "incident replay" -> versioned trace.
- "retrieval quality drift" -> canary queries and retrieval metrics.
- "Nsight Systems" -> system-level CPU/GPU bottleneck timeline.
- "Nsight Compute" -> kernel-level explanation after the timeline.
- "HTTP 200 but wrong task" -> task-success and trajectory monitoring.

## Hands-on Checks

1. Draw a trace for RAG + tool + guardrail workflow.
2. Define dashboard rows for quality, safety, latency, cost, and retrieval health.
3. Explain why adding GPUs may not fix agent latency.

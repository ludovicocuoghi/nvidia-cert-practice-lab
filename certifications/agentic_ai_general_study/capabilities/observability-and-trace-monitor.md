---
capability: Observability and Trace Monitor
status: populated
source_lens: general-study
---

# Observability and Trace Monitor

## What You Are Building

You are building the live monitoring layer for model calls, retrieval, tools, guardrails, routing, latency, cost, errors, quality signals, incidents, and replay.

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

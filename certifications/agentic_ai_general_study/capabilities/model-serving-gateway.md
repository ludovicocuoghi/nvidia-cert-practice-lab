---
capability: Model Serving Gateway
status: populated
source_lens: general-study
---

# Model Serving Gateway

## What You Are Building

You are building the traffic layer in front of model endpoints. It routes requests, applies admission/rate limits, handles fallback, canaries, batching policy, endpoint selection, and multi-model operations.

## Pipeline

1. Define route classes: simple, complex, high-risk, embedding, reranking, generation.
2. Attach candidate endpoints and selection rules.
3. Configure fallback, retries, timeout budgets, and circuit breakers.
4. Add rate limits, batching, cache policy, and cost controls.
5. Connect routing changes to eval and registry approval.
6. Monitor quality, latency, cost, and route drift.

## Core Concepts

- Gateway chooses where requests go; endpoints run models.
- Routing can be by task, risk, tenant, cost, latency, model availability, or eval score.
- A gateway can implement a model portfolio: small router/model for simple tasks, larger reasoner for hard tasks, specialized embedding/reranker/code endpoints for non-chat work.
- Canary and traffic splitting reduce rollout risk.
- Fallback helps availability but can change quality.
- Dynamic batching improves throughput but can increase latency.
- Admission control, rate limiting, circuit breakers, and timeout budgets protect downstream endpoints and user experience.
- Gateway decisions need eval evidence; hidden heuristics become production risk.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "route simple tasks to small model" | serving gateway | one large model |
| "canary new model" | traffic split and monitoring | immediate full rollout |
| "fallback on endpoint failure" | gateway fallback | retraining |
| "tenant/risk-specific endpoint" | route policy with auth/risk context | endpoint-only configuration |
| "cost spike from premium model" | route audit and model portfolio | quantizing every model first |
| "multi-model operations" | gateway or model server | registry only |
| "batching throughput" | serving/gateway policy | data curation |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Gateway improves model quality by itself | It routes; quality still needs eval and model choice. |
| Fallback is always safe | Fallback may change behavior and must be evaluated. |
| Batching always improves UX | It can raise p99 latency. |
| Router is agent orchestration | Gateway routes model traffic; orchestration coordinates workflow steps and tools. |
| Canary is only traffic percentage | Canary needs metrics, eval thresholds, rollback rules, and version pinning. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | Triton / Dynamo-style serving | Multi-model and distributed serving patterns. |
| NVIDIA | NIM endpoints behind an LLM gateway | Packaged model APIs selected by route, tenant, or task class. |
| Cloud | API gateways and model routers | Route, rate-limit, and fallback logic. |
| Internal | LLM gateway | Cost-aware routing, policy, logging, and canaries. |

## Deep Dive

### Where it sits in the lifecycle

The serving gateway is the **model traffic control layer** above approved endpoints.

```text
[Agent/app request] -> [Gateway route policy] -> [Approved endpoint: NIM/Triton/hosted]
        -> [Fallback/canary/rate limit] -> [Trace + cost/quality metrics]
```

It decides **which endpoint** handles a model call. It does not decide an agent's next workflow step.

### Gateway vs orchestration

| Scenario clue | Think | Avoid |
|---|---|---|
| Route by model cost/latency/task | Serving gateway | Agent planner |
| Canary a new endpoint | Gateway + monitoring | Model registry only |
| Coordinate retrieval, tools, memory | Agent orchestration | Serving gateway |
| Select embedding vs reranker endpoint | Gateway route | RAG parser |
| Approve mutating tool call | Tool gateway / HITL | Model-serving gateway |

### Routing patterns

| Pattern | Use it for | Risk |
|---|---|---|
| Small-router / large-reasoner | Keep simple tasks cheap | Misclassification sends hard tasks to weak model |
| Tenant route | Dedicated model/profile per tenant | Auth context must be reliable |
| Canary | Controlled rollout of new model/profile | Needs quality and safety metrics, not traffic percent only |
| Fallback | Availability when primary fails | Answer quality or policy behavior may change |
| Rate limit | Protect endpoints and budgets | Can create user-visible failure modes |

### NVIDIA service map

NIM packages optimized model APIs. Triton and Dynamo-style serving handle broader or distributed serving patterns. The gateway can sit above them and apply tenant, risk, cost, fallback, and rollout policy. Registry approval and evaluator evidence should feed the route policy.

## Exam Signals

- "traffic split" -> serving gateway.
- "fallback" -> gateway policy.
- "route by task complexity" -> model router/gateway.
- "small router plus large reasoner" -> model portfolio/gateway design.
- "tenant-specific model route" -> gateway policy plus auth context.
- "canary rollout" -> gateway plus monitoring.
- "batching/rate limits" -> serving operations.

## Hands-on Checks

1. Design routes for simple classification, complex reasoning, embeddings, and reranking.
2. Define fallback rules and what quality risk each fallback creates.
3. Sketch a canary dashboard for route-specific quality, latency, and cost.

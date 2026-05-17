---
capability: Model Serving Gateway
status: populated
source_lens: general-study
---

# Model Serving Gateway

## What to study first

- **Core idea:** You are building the traffic layer in front of model endpoints. It routes requests, applies admission/rate limits, handles fallback, canaries, batching policy, endpoint selection, and multi-model operations.
- **Study first:** Define route classes: simple, complex, high-risk, embedding, reranking, generation.
- Attach candidate endpoints and selection rules.
- Configure fallback, retries, timeout budgets, and circuit breakers.
- Add rate limits, batching, cache policy, and cost controls.
- Connect routing changes to eval and registry approval.

## What You Are Building

You are building the traffic layer in front of model endpoints. It routes requests, applies admission/rate limits, handles fallback, canaries, batching policy, endpoint selection, and multi-model operations.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Key decision |
|---|---|---|
| Train model from zero | Route traffic to the newly trained endpoint through canary/shadow/rollback controls after release approval. | How much traffic can the new checkpoint receive safely? |
| Fine-tune existing model | Route between baseline and tuned/adapted endpoints; disable adapter route quickly if regressions appear. | Which users/tasks get the tuned behavior? |
| Use existing model/API | Main lane: choose small/large/specialized endpoints, fallback, rate limits, batching, cache policy, and cost routing. | Which model endpoint should handle each request? |
| Build agent/RAG application | Route generator, embedding, reranker, and sometimes small-router/large-reasoner calls. | Which model role is being called? |
| Operate, govern, and improve | Adjust routes from live metrics, incidents, canaries, and cost/latency budgets. | Promote, roll back, or rebalance traffic? |

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
- Cascade routing is the cost-control pattern for bimodal traffic: try the small model or classifier first, then escalate to the large model only when confidence/risk/complexity requires it.
- Canary and traffic splitting reduce rollout risk.
- Fallback helps availability but can change quality.
- Dynamic batching improves throughput but can increase latency.
- Admission control, rate limiting, circuit breakers, and timeout budgets protect downstream endpoints and user experience.
- Gateway decisions need eval evidence; hidden heuristics become production risk.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "route simple tasks to small model" | serving gateway | one large model |
| "70% easy / 30% hard workload" | cascade route with confidence escalation | run every model on every request |
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

### Route policy details

| Policy field | Why it matters |
|---|---|
| Task class | Sends classification, extraction, embeddings, reranking, and generation to the right endpoint |
| Risk tier | Prevents high-impact tasks from using weak routes or unsafe fallback |
| Tenant/user context | Keeps dedicated profiles, data residency, and billing boundaries intact |
| Quality threshold | Canary/fallback should be governed by eval and live quality signals |
| Timeout budget | Prevents one slow endpoint from consuming the whole agent budget |
| Cost ceiling | Enables small-model routing and premium-model escalation only when justified |
| Rollback target | Defines exactly where traffic goes if a route regresses |

A gateway route is production code. Hidden heuristics such as "try the cheap model first" need eval coverage, monitoring, and explicit fallback behavior.

### Implementation card: route selection

```python
def choose_route(request, live_metrics):
    if request.task == "embedding":
        return "embedding_endpoint"
    if request.risk == "high":
        return "approved_large_model_with_review"
    if request.tenant in dedicated_tenants:
        return f"tenant_{request.tenant}_profile"
    if request.complexity < 0.35 and live_metrics["small_model"].quality_ok:
        return "small_fast_model"
    return "large_reasoning_model"

def gateway_call(request):
    route = choose_route(request, live_metrics())
    try:
        return call_endpoint(route, request, timeout_ms=route_budget(route))
    except EndpointUnavailable:
        fallback = fallback_route(route)
        assert fallback_is_approved(route, fallback, request.risk)
        return call_endpoint(fallback, request)
```

Gateway scoring uses route-level quality, latency, cost, safety, fallback rate, and drift metrics. Canary gates compare candidate route behavior against baseline before increasing traffic.

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

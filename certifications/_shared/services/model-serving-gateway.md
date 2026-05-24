---
service: Model Serving Gateway
relevant_to: [AAI-GEN]
status: populated
---

# Model Serving Gateway

## What to study first

- **Core idea:** The deployment layer for routing and operating inference endpoints.
- **Use it when:** The scenario mentions multi-model routing, canary rollout, fallback, traffic splitting, rate limits, batching, or endpoint policies.
- **Choose another path when:** Choose a neighboring capability when the issue is data quality or model behavior tuning.
- **Concrete surface:** Access: Model servers, API gateways, service meshes, inference routers, Kubernetes operators Inside: Routing, load balancing, version pinning, canaries, fallback, batching, concurrency, observability I/O: Request, route policy, model pool, health state, cost/latency budget, user tier -> Routed request, fallback response, canary split, throttled request, or model selection
- **Real trap:** Scaling the gateway while retrieval or tool latency is the real bottleneck.

## At a glance

| | |
|---|---|
| **What it is technically** | Traffic and operations layer for routing requests across models/endpoints, handling rollout, fallback, batching, rate limits, and policies |
| **How you access it** | Model servers, API gateways, service meshes, inference routers, Kubernetes operators |
| **Input** | Request, route policy, model pool, health state, cost/latency budget, user tier |
| **Output** | Routed request, fallback response, canary split, throttled request, or model selection |
| **Inside** | Routing, load balancing, version pinning, canaries, fallback, batching, concurrency, observability |

```yaml
routes:
  - match: task == "simple"
    target: nim-small
  - match: risk == "high"
    target: nim-strong
fallbacks:
  nim-strong: nim-medium
canary:
  model_v2: 5%
```

**Mental model**: the production traffic controller in front of model endpoints.

## Study card data

- **What it is:** The deployment layer for routing and operating inference endpoints.
- **Lifecycle:** Serving and deployment
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions multi-model routing, canary rollout, fallback, traffic splitting, rate limits, batching, or endpoint policies.
- **Do not use it when:** Choose a neighboring capability when the issue is data quality or model behavior tuning.
- **Common trap:** Scaling the gateway while retrieval or tool latency is the real bottleneck.
- **Recognition clues:** "Simple requests should go to a small model, high-risk tasks to a stronger model, and failed endpoints to fallback."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | Triton, NIM Operator, Dynamo | Serving, Kubernetes lifecycle, batching, and distributed LLM serving. |
| AWS | SageMaker endpoints, API Gateway, ALB | Endpoint deployment, traffic management, autoscaling, and API front doors. |
| Open source | KServe, Ray Serve, BentoML, Envoy | Multi-model serving, routing, canary, and fallback patterns. |

## Portable concepts

The gateway decides where requests go:

- Model route based on task type.
- Version route for canaries and rollbacks.
- Fallback when endpoint health fails.
- Rate limits per user or tenant.
- Batching and queue policy.
- Streaming behavior.
- Cost-aware routing.
- Policy hooks before and after inference.

## Decision guide

| Requirement | Gateway concern | Trap |
|---|---|---|
| Canary a new model | Traffic split | Full rollout |
| Route simple tasks cheaply | Model routing | Largest model for all |
| Protect endpoint | Rate limit/admission | Infinite queue |
| Improve throughput | Batching policy | Blindly add replicas |
| Recover from failure | Fallback | User sees raw error |

## High-yield signals

- "Traffic split/canary" -> gateway.
- "Fallback" -> gateway.
- "Dynamic batching" -> serving layer.
- "Endpoint health" -> gateway/ops.
- "Bad answer quality" -> evaluation/customization, not just gateway.

## Chapter notes

The model serving gateway is the **traffic chapter**. It decides which endpoint receives each request, how overload is handled, whether a new model gets 5% or 100% of traffic, and when the system falls back. The exam trap is to treat all serving problems as "add replicas." A gateway is useful because it can shape traffic before capacity is wasted.

```text
request
  -> classify task/risk/tenant
  -> apply rate limit/admission
  -> choose model route
  -> batch or stream
  -> fallback if unhealthy
  -> record quality/latency/cost
```

### Routing math

Use simple formulas to reason about capacity:

```text
arrival_rate = requests_per_second
service_time = average_seconds_per_request
concurrency_needed ~= arrival_rate * service_time

effective_cost =
  simple_route_share * small_model_cost
+ complex_route_share * strong_model_cost
+ fallback_rate * retry_or_backup_cost
```

**Route mix matters.** A system with 90% simple tasks should not send every request to the strongest reasoning model. Route simple, low-risk work to the cheap path and reserve strong models for high-risk or complex cases.

### Canary plot

```text
traffic split during rollout
v1 stable  |#############################################| 95%
v2 canary  |###                                          |  5%

promote only if:
task_success_delta >= 0
p99_latency_delta <= budget
cost_per_success <= budget
safety_regressions == 0
```

### Scenario drill

A new model improves answer quality but doubles p99 latency for premium users. The right answer is not "ship because quality improved" or "rollback because latency worsened." The gateway should hold the canary, inspect route-specific latency and cost, and promote only if the release gates pass. **Rollout is a multi-metric decision, not a vibe check.**

## Hands-on checks

1. Build a route table for cheap, normal, and high-risk requests.
2. Add a rollback trigger based on quality and latency metrics.

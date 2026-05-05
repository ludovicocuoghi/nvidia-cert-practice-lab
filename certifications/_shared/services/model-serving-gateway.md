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

## Hands-on checks

1. Build a route table for cheap, normal, and high-risk requests.
2. Add a rollback trigger based on quality and latency metrics.

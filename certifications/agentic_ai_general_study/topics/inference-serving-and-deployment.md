---
domain: Inference Serving and Deployment
weight: 14
status: populated
---

# Inference Serving and Deployment

## Concept ownership

This is the vendor-neutral home for turning models into production services. Keep endpoints, gateways, auth, health checks, batching, autoscaling, canary/shadow/blue-green rollout, fallback, rollback, and serving quality gates here. Vendor pages should explain the specific serving product and exam distractors.

## Study card data

- **What it covers:** How models become production APIs, how traffic is routed, and how rollouts, batching, fallback, and scaling work.
- **Lifecycle:** Serving and deployment
- **Use this section when:** The scenario mentions endpoints, APIs, containers, model servers, canaries, fallback, batching, autoscaling, or production traffic.
- **Common trap:** Confusing a model, a runtime, an endpoint, and a gateway.
- **Scenario signal:** A team needs a production API for an approved model with health checks and rollout controls.

### Key ideas

- **Inference microservice** serves one or more model capabilities behind an API.
- **Serving gateway** routes traffic, handles fallback, canary, rate limits, and batching.
- **Deployment** needs health checks, metrics, auth, version pinning, rollback, and capacity planning.
- **Quality gates** must accompany performance gates.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Inference microservice | NIM | Bedrock inference, SageMaker endpoints | vLLM, TGI |
| Serving gateway | Triton, NIM Operator, Dynamo | API Gateway, ALB, SageMaker endpoints | KServe, Ray Serve |
| Optimization | TensorRT-LLM, Nsight | Inference Recommender, autoscaling | Quantization, prompt caching |

### Decision guide

| Scenario | Best layer | Trap |
|---|---|---|
| Need API endpoint | Inference microservice | Training framework |
| Multi-model routing | Serving gateway | Hard-coded model |
| Canary rollout | Gateway/deployment | Full rollout |
| p99 latency | Observability + optimizer | Add GPUs blindly |
| Bad groundedness | Evaluation/RAG | Serving-only fix |

### Hands-on checks

1. Draw model artifact -> endpoint -> gateway -> app.
2. Add canary, rollback, health, quality, and cost metrics.

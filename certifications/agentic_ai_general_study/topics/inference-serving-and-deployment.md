---
domain: Inference Serving and Deployment
weight: 14
status: populated
---

# Inference Serving and Deployment

## What to study first

- **Core idea:** How models become production APIs, how traffic is routed, and how rollouts, batching, fallback, and scaling work.
- **Use it when:** The scenario mentions endpoints, APIs, containers, model servers, canaries, fallback, batching, autoscaling, or production traffic.
- **Study first:** A **model artifact** is the approved checkpoint/adapter/profile
- an **endpoint** runs it behind an API
- a **gateway** routes traffic among endpoints.
- NIM: is the NVIDIA packaged inference microservice cue
- **Triton** is broader multi-framework serving
- **TensorRT-LLM** optimizes LLM execution under serving.
- Prefill: processes input/context tokens before the first output token. Long prompts, long chat history, and too many retrieved chunks make prefill slower.
- Decode: generates output tokens. Long answers, large models, KV-cache pressure, and poor batching often show up here.
- Canary, shadow, blue-green, fallback, rollback, rate limits, and health checks: are deployment controls, but quality and safety metrics must travel with them.
- **Real trap:** Confusing a model, a runtime, an endpoint, and a gateway.

## Concept ownership

This is the vendor-neutral home for turning models into production services. Keep endpoints, gateways, auth, health checks, batching, autoscaling, canary/shadow/blue-green rollout, fallback, rollback, and serving quality gates here. Vendor pages should explain the specific serving product and exam distractors.

## Study card data

- **What it covers:** How models become production APIs, how traffic is routed, and how rollouts, batching, fallback, and scaling work.
- **Lifecycle:** Serving and deployment
- **Use this section when:** The scenario mentions endpoints, APIs, containers, model servers, canaries, fallback, batching, autoscaling, or production traffic.
- **Common trap:** Confusing a model, a runtime, an endpoint, and a gateway.
- **Recognition clues:** A team needs a production API for an approved model with health checks and rollout controls.

### Key ideas

- **Inference microservice** serves one or more model capabilities behind an API.
- **Serving gateway** routes traffic, handles fallback, canary, rate limits, and batching.
- **Deployment** needs health checks, metrics, auth, version pinning, rollback, and capacity planning.
- **Quality gates** must accompany performance gates.

### Must know

- A **model artifact** is the approved checkpoint/adapter/profile; an **endpoint** runs it behind an API; a **gateway** routes traffic among endpoints.
- **NIM** is the NVIDIA packaged inference microservice cue; **Triton** is broader multi-framework serving; **TensorRT-LLM** optimizes LLM execution under serving.
- **Prefill** processes input/context tokens before the first output token. Long prompts, long chat history, and too many retrieved chunks make prefill slower.
- **Decode** generates output tokens. Long answers, large models, KV-cache pressure, and poor batching often show up here.
- **User count** becomes useful only after you translate it into request rate, concurrency, token lengths, and traffic bursts.
- **TTFT** is the user-visible wait for the first streamed token; **p95/p99** show tail latency that drives timeout and "this feels broken" complaints.
- **Canary, shadow, blue-green, fallback, rollback, rate limits, and health checks** are deployment controls, but quality and safety metrics must travel with them.

### Code anchor

```python
def serving_metrics(response):
    return {
        "time_to_first_token_ms": response.metrics.ttft_ms,
        "tokens_per_second": response.output_tokens / response.decode_seconds,
        "p95_latency_ms": latency_window.p95(),
        "error_rate": errors / requests,
        "cost": response.input_tokens * input_price + response.output_tokens * output_price,
    }
```

Deployment gates combine operational metrics with quality gates: a faster endpoint should not pass if groundedness, safety, or regression scores fall.

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
| 1,000 users but slow first token | Endpoint/profile trace: cold start, queue, prefill, retrieval | Assume user count alone means horizontal scaling |
| 1 million users with rising queue depth | Gateway, autoscaling, rate limits, serving lanes | Put every request through one shared queue |
| Chat UX feels slow | TTFT, inter-token latency, streaming behavior | Measure only total response time |

### Hands-on checks

1. Draw model artifact -> endpoint -> gateway -> app.
2. Add canary, rollback, health, quality, and cost metrics.

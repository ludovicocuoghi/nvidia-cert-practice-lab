---
domain: Inference Serving and Deployment
weight: 14
status: populated
---

# Inference Serving and Deployment

## Actual implementation / Pattern you use

```bash
curl -s https://model-gateway.example/v1/chat/completions \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Model-Route: approved-agent-model-v3" \
  -d '{
    "model": "approved-agent-model-v3",
    "messages": [{"role": "user", "content": "Summarize the case"}],
    "stream": true
  }'
```

```yaml
deployment:
  artifact: base_model_or_adapter
  endpoint: model_api
  gateway: route_canary_fallback_rate_limit
  scale_on: [queue_depth, concurrency, ttft_ms, p95_latency_ms, error_rate]
  quality_gates: [task_success, groundedness, safety, regression]
```

| Layer | Owns | NVIDIA example when product-specific |
|---|---|---|
| Model artifact | Checkpoint, adapter, tokenizer, profile, approval | Nemotron model, NGC artifact |
| Runtime/engine | How tokens are executed efficiently | TensorRT-LLM |
| Endpoint | Callable API, health, auth, version | NIM |
| Serving gateway | Routing, batching, fallback, canary, metrics | Triton, NIM Operator, Dynamo |
| Application agent | Tools, memory, retrieval, policy, state | NeMo Agent Toolkit |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Deployment and Scaling | Covers endpoints, canary, rollback, autoscaling, queueing, batching, and separate scale lanes. |
| Run, Monitor, and Maintain | Covers health checks, p95/p99, errors, traces, incident response, and rollback evidence. |
| NVIDIA Platform Implementation | Maps generic endpoint/runtime/gateway ideas to NIM, NIM Operator, Triton, TensorRT-LLM, and Dynamo. |
| Agent Development | Clarifies that agents call model APIs; the model endpoint is not the orchestrator. |

## What to study first

- **Core idea:** How models become production APIs, how traffic is routed, and how rollouts, batching, fallback, and scaling work.
- **Read first for traffic clues:** `Latency, Throughput, and Traffic Control` defines p50, p95, p99, TTFT, queue delay, throughput, concurrency, batching, backpressure, circuit breakers, bulkheads, canary, blue-green, and rollback.
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

### Deep dive: scaling signals

| Symptom | Likely layer | Useful fix |
|---|---|---|
| High time to first token | Queueing, cold start, prefill, long context, retrieval/tool wait | Warm pools, context trimming, route split, prefill optimization, retrieval trace |
| Low tokens per second | Decode/runtime efficiency | Batching, quantization, TensorRT-LLM-style runtime tuning, smaller model |
| p50 fine but p99 bad | Tail latency from queues, retries, slow tools, long contexts | Stage-level trace, timeouts, backpressure, separate lanes |
| GPU idle gaps | CPU preprocessing, launch overhead, synchronization, tool waits | Timeline profiling before kernel tuning |
| Vector DB overloaded | Retrieval layer, not model endpoint | Cache, filter earlier, scale index, rerank smaller candidate set |
| New version fails only for some users | Rollout/quality gate | Canary, shadow eval, rollback with versioned traces |

### Deployment traps

| Trap answer | Better answer |
|---|---|
| "Add GPUs" for every latency issue | Identify whether the bottleneck is retrieval, tools, prefill, decode, guardrails, queues, or GPU |
| "Use TensorRT-LLM" when the issue is tool retries | Fix orchestration and retry policy |
| "Use NIM" to design the agent workflow | Use NIM for the model endpoint; orchestration is a separate layer |
| "Autoscale by registered users" | Scale by request rate, concurrency, queue depth, token shape, and tail latency |

### Hands-on checks

1. Draw model artifact -> endpoint -> gateway -> app.
2. Add canary, rollback, health, quality, and cost metrics.

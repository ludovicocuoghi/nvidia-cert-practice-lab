---
service: Inference Microservice
relevant_to: [AAI-GEN]
status: populated
---

# Inference Microservice

## What to study first

- **Core idea:** The serving unit for model inference.
- **Use it when:** The scenario mentions endpoints, model APIs, serving containers, health checks, autoscaling, auth, or production inference.
- **Choose another path when:** Choose a neighboring service when the problem is training, RAG, orchestration, or runtime policy design.
- **Concrete surface:** Access: Managed model APIs, containers, self-hosted model servers, endpoint services Inside: Runtime container, model weights, tokenizer, scheduler, batching, health checks, telemetry I/O: Prompt/messages, model name, generation parameters, auth, request metadata -> Generated tokens, embeddings, classifications, or model responses with runtime metrics
- **Real trap:** Confusing the model with the microservice.

## At a glance

| | |
|---|---|
| **What it is technically** | A production endpoint that exposes model inference behind APIs, auth, health checks, model profiles, metrics, and deployment packaging |
| **How you access it** | Managed model APIs, containers, self-hosted model servers, endpoint services |
| **Input** | Prompt/messages, model name, generation parameters, auth, request metadata |
| **Output** | Generated tokens, embeddings, classifications, or model responses with runtime metrics |
| **Inside** | Runtime container, model weights, tokenizer, scheduler, batching, health checks, telemetry |

```python
from openai import OpenAI

client = OpenAI(base_url="http://model-endpoint/v1", api_key="...")
client.chat.completions.create(
    model="approved-model",
    messages=[{"role": "user", "content": "Summarize this case."}],
    stream=True,
)
```

**Mental model**: the API wrapper that turns an approved model into a service.

## Study card data

- **What it is:** The serving unit for model inference.
- **Lifecycle:** Serving and deployment
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions endpoints, model APIs, serving containers, health checks, autoscaling, auth, or production inference.
- **Do not use it when:** Choose a neighboring service when the problem is training, RAG, orchestration, or runtime policy design.
- **Common trap:** Confusing the model with the microservice.
- **Recognition clues:** "The team needs an OpenAI-compatible endpoint for an approved model on its own infrastructure."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NIM | Packaged NVIDIA inference microservices for optimized models and production APIs. |
| AWS | Amazon Bedrock inference / SageMaker real-time endpoints | Managed model APIs or low-latency endpoints with scaling options. |
| Open source | vLLM, TGI, Ollama, llama.cpp servers | Self-hosted model endpoint stacks. |

## Portable concepts

An inference microservice owns:

- API contract.
- Runtime packaging.
- Model loading and warmup.
- Request admission and auth.
- Streaming/non-streaming responses.
- Health, readiness, and liveness.
- Basic metrics and logs.
- Deployment version.

It does not automatically own orchestration, retrieval, tool execution, or guardrails unless those are built into the surrounding application.

## Decision guide

| Scenario | Correct component | Trap |
|---|---|---|
| Need model endpoint | Inference microservice | Training framework |
| Need multi-step agent | Orchestration toolkit | Inference endpoint only |
| Need private docs | Retrieval pipeline | Larger endpoint |
| Need safety policy | Guardrails | Model endpoint alone |
| Need p99 optimization | Serving gateway/optimizer | Data curator |

## High-yield signals

- "Endpoint/API/container" -> inference microservice.
- "Model profile" -> serving.
- "Self-hosted inference" -> microservice.
- "Fine-tune model" -> customization, not serving.
- "Tool workflow" -> orchestration, not serving.

## Chapter notes

Think of the inference microservice as the **book chapter where model capability becomes an operational contract**. The model may be excellent in a notebook, but the microservice is where it becomes callable, measured, limited, rolled back, and trusted by other systems. The exam-friendly question is not "is there a model?" but **"what owns the API, health, auth, streaming behavior, concurrency, and endpoint version?"**

The useful mental split is:

- **Model artifact:** weights, tokenizer, adapter, model card, and eval report.
- **Runtime:** engine, scheduler, batching policy, cache, precision, and GPU allocation.
- **Endpoint:** URL, API schema, auth, health checks, version, metrics, and deployment policy.
- **Client:** application code that passes messages, generation parameters, stream flags, and request metadata.

```text
Model artifact -> runtime container -> endpoint API -> client workflow
                      |                  |
                      |                  +-- health, auth, metrics, rollout
                      +-- tokenizer, scheduler, batching, cache, GPU memory
```

### Latency formula

Use this decomposition when a scenario says "the endpoint is slow":

```text
total_latency =
  queue_time
+ request_validation
+ tokenizer_time
+ prefill_time
+ decode_time
+ network_time

TTFT = queue_time + validation + tokenization + prefill + first_decode_step
decode_time ~= output_tokens / tokens_per_second
```

**TTFT is not the same as total latency.** A short answer can still feel slow if queueing or prefill dominates, and a long answer can have good TTFT but poor total completion time because decode is slow.

```text
Good interactive profile
queue |--|
prefill |----|
decode |====================|
        ^ first token appears early

Bad interactive profile
queue |----------|
prefill |----------------|
decode |======|
                         ^ first token appears late
```

### Scenario drill

A team says: "We already approved `support-lora-v7`; now we need a protected API for production traffic, readiness checks, token streaming, p99 metrics, and rollback to `support-lora-v6`." The correct layer is **Inference Microservice** plus its serving gateway. Do not answer with model registry, because the registry records the artifact; it does not run the artifact. Do not answer with customization, because the behavior change already happened.

## Hands-on checks

1. Define model, runtime, endpoint, gateway, and client API as separate boxes.
2. Add health, metrics, auth, and rollout fields to an endpoint spec.

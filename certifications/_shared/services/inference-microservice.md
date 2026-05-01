---
service: Inference Microservice
relevant_to: [AAI-GEN]
status: populated
---

# Inference Microservice

## At a glance

| | |
|---|---|
| **What it is technically** | A production endpoint that exposes model inference behind APIs, auth, health checks, model profiles, metrics, and deployment packaging |
| **How you access it** | Managed model APIs, containers, self-hosted model servers, endpoint services |
| **Input** | Prompt/messages, model name, generation parameters, auth, request metadata |
| **Output** | Generated tokens, embeddings, classifications, or model responses with runtime metrics |
| **Inside** | Runtime container, model weights, tokenizer, scheduler, batching, health checks, telemetry |

**Mental model**: the API wrapper that turns an approved model into a service.

## Study card data

- **What it is:** The serving unit for model inference.
- **Lifecycle:** Serving and deployment
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions endpoints, model APIs, serving containers, health checks, autoscaling, auth, or production inference.
- **Do not use it when:** The problem is training, RAG, orchestration, or runtime policy design.
- **Common trap:** Confusing the model with the microservice.
- **Scenario signal:** "The team needs an OpenAI-compatible endpoint for an approved model on its own infrastructure."

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

## Hands-on checks

1. Define model, runtime, endpoint, gateway, and client API as separate boxes.
2. Add health, metrics, auth, and rollout fields to an endpoint spec.

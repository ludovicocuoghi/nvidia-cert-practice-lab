---
capability: Model Inference Endpoint
status: populated
source_lens: general-study
---

# Model Inference Endpoint

## Actual implementation / How you use it

```bash
curl https://endpoint.example/v1/chat/completions \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"model":"approved-model-v3","messages":[{"role":"user","content":"Answer with citations"}],"stream":true}'
```

| Input | Endpoint owns | Output |
|---|---|---|
| Approved model or adapter plus request | API contract, auth, batching/profile, health, metrics, rollout | Generation, embedding, rerank, or classification response with operational telemetry |

## What to study first

- **Core idea:** You are building the production API wrapper around an approved model artifact. It exposes inference requests with auth, health checks, model profile, metrics, rollout hooks, and operational configuration.
- **Study first:** Select approved model/checkpoint/adapter and serving profile.
- Package runtime container or managed endpoint.
- Configure precision, batching, context limits, auth, rate limits, and health checks.
- Expose API contract for generation, embeddings, reranking, or classification.
- Add metrics, logs, traces, cost, latency, and error reporting.

## What You Are Building

You are building the production API wrapper around an approved model artifact. It exposes inference requests with auth, health checks, model profile, metrics, rollout hooks, and operational configuration.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Main inference questions |
|---|---|---|
| Train model from zero | Package and expose the newly trained checkpoint after registry/eval approval. This is not model selection; it is serving the artifact you produced. | Do weights/tokenizer/config load? What precision? What max context? What batching? What TTFT/tokens/sec? How do we roll back? |
| Fine-tune existing model | Serve a tuned checkpoint or adapter-backed profile. | Can the endpoint load base+adapter? What is the latency delta? Can the adapter route be disabled? |
| Use existing model/API | Main lane for wrapping a chosen model/API with auth, limits, streaming, monitoring, and endpoint contracts. | Which API shape, rate limits, batching, fallback, and metrics are required? |
| Build agent/RAG application | Serve generator, embedding, and reranker endpoints separately so agent/RAG components can scale independently. | Which endpoint role is slow or failing? |
| Operate, govern, and improve | Tune endpoint profiles and rollouts from traces and evals. | Is the bottleneck prefill, decode, queueing, network, or policy checks? |

## Pipeline

1. Select approved model/checkpoint/adapter and serving profile.
2. Package runtime container or managed endpoint.
3. Configure precision, batching, context limits, auth, rate limits, and health checks.
4. Expose API contract for generation, embeddings, reranking, or classification.
5. Add metrics, logs, traces, cost, latency, and error reporting.
6. Roll out with canary/version pinning and rollback.

## Core Concepts

- Endpoint serves a model; it is not the model's learned behavior.
- Generation, embedding, and reranking endpoints may be separate.
- NIM packages supported models as optimized inference microservices with API surface, model profiles, metrics, and health endpoints.
- Triton serves multi-framework and multi-model workloads; TensorRT-LLM optimizes LLM execution inside serving stacks.
- Health checks and readiness are operational controls.
- Precision/profile choices affect latency, memory, and quality.
- Streaming controls time-to-first-token and user experience; batching controls throughput and tail latency.
- Token limits, context length, max output tokens, and concurrency limits are endpoint safety/cost controls.
- Endpoint metrics feed observability and cost optimization.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "serve approved model as API" | inference endpoint | training framework |
| "NVIDIA packaged LLM endpoint" | NIM | Nemotron as serving layer |
| "embedding model API" | embedding endpoint | LLM generator only |
| "health/readiness/auth" | endpoint operations | registry only |
| "multi-framework model serving" | Triton Inference Server | NIM if scenario needs custom multi-model platform |
| "LLM decode throughput" | TensorRT-LLM/NIM profile, batching, KV cache | NeMo Retriever or Guardrails |
| "model not yet approved" | registry/eval gate first | direct serving |
| "multi-model routing" | serving gateway | single endpoint alone |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Endpoint equals registry | Registry tracks; endpoint runs. |
| NIM equals Nemotron | NIM serves Nemotron or other supported models; Nemotron is the model family. |
| TensorRT-LLM is the endpoint | TensorRT-LLM optimizes the engine; NIM/Triton/custom server exposes the API. |
| Endpoint equals orchestration | Orchestrators call endpoints as one step. |
| One endpoint solves RAG | RAG also needs ingestion, retrieval, reranking, and context assembly. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NIM | Packaged optimized model microservice. |
| NVIDIA | Triton Inference Server | Multi-framework, multi-model serving, dynamic batching, and ensembles. |
| NVIDIA | TensorRT-LLM | LLM-specific engine optimization, paged KV cache, in-flight batching, quantization. |
| Open source | vLLM, TGI, Triton | Self-hosted serving runtimes. |
| Cloud | Bedrock/SageMaker/Vertex endpoints | Managed API endpoints. |

## Deep Dive

### Where it sits in the lifecycle

An inference endpoint is the **model serving boundary** where an approved artifact becomes a callable API.

```text
[Registry-approved artifact] -> [NIM/Triton endpoint] -> [Gateway route]
        -> [Agent/RAG app] -> [Trace + metrics]
```

For agent systems, separate endpoints often serve the **LLM**, **embedding model**, and **reranker** so they can scale and fail independently.

### Serving a just-trained model

When the lane is **train model from zero**, the endpoint step starts from a newly approved checkpoint, not from a generic catalog choice. The endpoint team should receive:

- checkpoint shards or merged weights,
- tokenizer and model config,
- precision/serving profile chosen from eval evidence,
- model card and dataset lineage,
- safety and capability eval report,
- rollout owner, canary plan, and rollback target.

The first serving job is to prove that the checkpoint can run as a stable inference service. That means the serving profile must answer:

| Requirement | What you verify |
|---|---|
| Artifact compatibility | Weights, tokenizer, config, special tokens, chat template, max sequence length, and model architecture all match |
| Numerical profile | FP16/BF16/FP8/INT8 choice was validated against quality and stability evals |
| Memory budget | Weights, KV cache, batch size, context length, and concurrency fit on target GPUs |
| API contract | Generation parameters, streaming behavior, error classes, token accounting, and stop conditions are defined |
| Rollout safety | Canary, shadow, fallback/rollback, health checks, and model-card/eval evidence are connected |

```python
artifact = registry.get("new_foundation_checkpoint:v1")
assert artifact.eval_report.passed
assert artifact.model_card is not None

endpoint = deploy_endpoint(
    checkpoint=artifact.checkpoint,
    tokenizer=artifact.tokenizer,
    config=artifact.config,
    profile=artifact.serving_profile,
)
gateway.canary(endpoint, traffic=0.05, rollback=artifact.rollback_target)
```

The serving question is: **can this trained artifact run safely, quickly, observably, and reversibly in production?** It is not "which model should we pick?"

### Latency vocabulary: TTFT, prefill, decode

An LLM endpoint has two major compute phases:

| Term | What it means | Why it matters |
|---|---|---|
| Queue time | Time waiting before the request starts running | High concurrency or batching windows can raise p95/p99 |
| Prefill | The model processes all input tokens: system prompt, user text, chat history, retrieved chunks | Long context increases time before the first output token |
| Time to first token (TTFT) | User-visible wait from request start until the first generated token is available | Dominated by queue + prefill + scheduling overhead |
| Decode | Autoregressive generation of output tokens, one step at a time | Dominates long answers and tokens/sec |
| Inter-token latency | Delay between generated tokens during streaming | Controls perceived smoothness |
| End-to-end latency | Total time until final token or completed response | Includes queue, prefill, decode, guardrails, network, and post-processing |

For a newly trained model, you benchmark TTFT and decode separately. A model can have acceptable tokens/sec but poor TTFT if context is huge or queueing is bad. It can have good TTFT but poor total latency if output is long or decode throughput is weak.

```python
trace = endpoint.generate(messages, stream=True)
metrics = {
    "queue_ms": trace.queue_ms,
    "prefill_ms": trace.first_token_at_ms - trace.started_running_at_ms,
    "ttft_ms": trace.first_token_at_ms - trace.request_received_at_ms,
    "decode_ms": trace.finished_at_ms - trace.first_token_at_ms,
    "tokens_per_second": trace.output_tokens / (trace.decode_ms / 1000),
}
```

### Batching types

Batching is how the server groups work to improve GPU utilization. It is not one thing.

| Batching type | How it works | Good for | Risk |
|---|---|---|---|
| Static/offline batching | Fixed batch assembled before execution | Offline evaluation or batch jobs | Bad fit for interactive latency |
| Dynamic batching | Server waits a short window to combine live requests | Higher throughput under traffic | Longer queue time and worse TTFT if window is too large |
| Continuous/in-flight batching | New decode requests join while other sequences are still generating | LLM serving with varied output lengths | Requires runtime support and careful scheduling |
| Microbatching | Large batch split into smaller chunks for memory/scheduling | Memory pressure and pipeline efficiency | More scheduler complexity |
| Sequence batching | Keeps state for ongoing sequences across decode steps | Stateful streaming and multi-turn decode loops | Must manage KV cache per sequence |
| Prefill/decode disaggregation | Separate resources or queues for prefill-heavy and decode-heavy work | Large-scale serving where prefill and decode bottlenecks differ | More operational complexity |

The practical tuning loop is:

```python
for config in batching_configs:
    endpoint.set_batching(
        max_batch_size=config.max_batch_size,
        max_queue_delay_ms=config.max_queue_delay_ms,
        continuous_batching=config.continuous,
    )
    scores = load_test(endpoint, eval_prompts)
    keep(config) if scores.ttft_p95 < target_ttft and scores.tokens_per_second > target_tps
```

### Streaming controls

Streaming sends tokens as they are produced. It improves perceived latency because the user sees the first token earlier, but it does not eliminate backend compute.

| Control | What it does |
|---|---|
| `stream=True` | Return partial tokens/chunks instead of waiting for final answer |
| First-token flush | Send the first generated token as soon as policy allows |
| Chunk size | Group tokens into chunks; larger chunks reduce network overhead but feel less responsive |
| Max output tokens | Prevent runaway decode cost and latency |
| Stop sequences | End generation when a delimiter or task boundary appears |
| Cancellation | Let the client stop decode and release KV cache |
| Backpressure | Avoid overwhelming slow clients while preserving server health |
| Output guardrail timing | Decide whether to stream raw tokens, buffered safe chunks, or post-checked output |

For high-risk outputs, you may buffer more before streaming so output checks can run. For low-risk chat, aggressive first-token streaming improves UX. Either way, trace TTFT, inter-token latency, total latency, and policy-block behavior.

### NVIDIA serving choices

| Cue | Right answer | Why |
|---|---|---|
| Supported optimized model API | NIM | Packaged inference microservice with model profiles |
| Multi-framework/multi-model server | Triton Inference Server | Serves ensembles, custom models, and varied backends |
| LLM kernel/KV/batching optimization | TensorRT-LLM | Optimizes inference under the serving layer |
| Distributed serving/scheduling | Dynamo-style serving | Coordinates larger serving workloads |
| Agent workflow | NeMo Agent Toolkit | Calls endpoints; does not replace them |

### Prefill, decode, and streaming

| Stage | What stresses it | Optimization clue |
|---|---|---|
| Prefill | Long prompts, retrieved chunks, long history | Context pruning, chunk packing, prefix/cache strategy |
| Decode | Long answers, large model, KV-cache pressure | Batching, quantization, TensorRT-LLM, output limits |
| Queueing | Too many concurrent requests | Dynamic batching, autoscaling, route policy |
| Perceived latency | User waits for first token | Streaming helps UX but not backend cost |

### Endpoint contract

A production endpoint should expose model/profile version, readiness, health, auth behavior, rate limits, error classes, token counts, latency metrics, and rollback identity. Serving an unapproved checkpoint directly bypasses registry evidence and makes incident response painful.

### Serving profile vocabulary

| Term | What it controls | Example signal |
|---|---|---|
| Model profile | Which checkpoint, adapter, precision, context limit, and runtime config runs | New FP8 profile needs quality validation |
| Readiness | Whether endpoint can receive traffic | Model loaded, warm, dependencies reachable |
| Health | Whether service process is alive and responding | Liveness probes and error rate |
| Rate limit | Allowed request/token volume | Protects cost and downstream capacity |
| Concurrency | Number of requests in flight | Too high can raise queueing and p99 |
| Streaming | Sends tokens as they are generated | Improves perceived latency, not total compute |
| Rollback identity | Known-good previous endpoint/profile | Enables fast recovery after regression |

Separate endpoint concerns from model behavior. If the model answers incorrectly, evaluate model/prompt/RAG. If the API is unavailable, slow, unauthenticated, or impossible to roll back, inspect endpoint/deployment.

### Implementation card: endpoint wrapper

```python
def generate(request):
    user = authenticate(request.headers)
    enforce_rate_limit(user, request.estimated_tokens)

    profile = model_registry.get_serving_profile(request.model_profile)
    validate_context_length(request.messages, profile.max_context_tokens)

    with trace_span("inference", profile=profile.id) as span:
        response = runtime.generate(
            messages=request.messages,
            max_tokens=min(request.max_tokens, profile.max_output_tokens),
            temperature=request.temperature,
            stream=request.stream,
        )
        span.set("input_tokens", response.usage.input_tokens)
        span.set("output_tokens", response.usage.output_tokens)
        span.set("time_to_first_token_ms", response.metrics.ttft_ms)
        span.set("tokens_per_second", response.metrics.tokens_per_second)
    return response
```

Endpoint metrics are operational: readiness, health, error rate, queue depth, p95/p99 latency, time to first token, tokens/sec, input/output tokens, cost, and rollback identity. Quality metrics come from evals around the endpoint, not the endpoint alone.

## Exam Signals

- "production API" -> model inference endpoint.
- "serve model/container" -> endpoint.
- "NIM" -> packaged optimized inference microservice.
- "Triton" -> multi-framework/multi-model serving.
- "TensorRT-LLM" -> LLM inference optimization under serving.
- "embedding/reranker as API" -> specialized model endpoint.
- "health checks/auth/rate limits" -> endpoint operations.
- "route across endpoints" -> gateway.

## Hands-on Checks

1. Separate model artifact, registry, endpoint, gateway, and client API.
2. List metrics for an endpoint: latency, tokens/sec, errors, queue, cost.
3. Design a canary rollout and rollback for a new endpoint version.

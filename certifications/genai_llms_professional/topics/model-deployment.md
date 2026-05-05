---
domain: Model Deployment
weight: 9
status: populated
---

# Model Deployment

## What to study first

- **Core idea:** Deploy LLMs with containerized **serving**, orchestration, model APIs, and scalable inference paths.
- **Use it when:** Study this when the question asks how to expose, scale, update, or operate an inference endpoint.
- **Study first:** NIM: Pre-packaged, optimized model microservice with **OpenAI-compatible API**. Containerized. Fastest path to a production **model endpoint**. Available from **NGC**. NOT the model itself — it's the **serving** packaging.
- Triton Inference Server: Multi-model, multi-framework **serving** platform. Supports TensorRT, PyTorch, ONNX, Python backends. Model ensembling chains multiple models. **Dynamic batching** with configurable queue delay. The flexible but more-configuration-required option.
- Dynamic batching: Server-side request grouping. max_queue_delay_microseconds (100-500µs for interactive) controls **latency**/**throughput** trade-off. preferred_batch_size aligns with **GPU** efficiency. NOT the same as continuous/**in-flight batching** (**TensorRT-LLM** engine-level).
- Kubernetes deployment: **NIM** containers on K8s with **GPU** node pools. HPA (Horizontal Pod **Autoscaling**) scales pod count based on **metrics**. **NIM Operator** simplifies lifecycle management. Standard enterprise **deployment** pattern.
- Canary/Rollback: **Canary** = gradual traffic shift to new version with quality **monitoring**. **Rollback** = instant switch back to previous version via K8s **deployment** revision or load balancer redirect. Critical for LLM deployments where quality regressions are the primary risk.
- **Real trap:** **Deployment** packaging is not the same as model optimization or **fine-tuning**.

## Certification boundary

This page is the NCP-GENL exam lens for deploying LLMs on NVIDIA. Keep NIM, Triton, TensorRT-LLM, NGC, NIM Operator, rollout strategy, API shape, and production-serving traps here. The vendor-neutral model-serving lifecycle belongs in Agentic AI General Study; this page should explain the NVIDIA implementation and certification answer choices.

## Core ideas you must hold in your head

- **NIM** is NVIDIA's standardized inference microservice. It packages a model + optimized engine (**TensorRT-LLM**) + API server into a single **container**. "Deploy with **NIM**" is the NVIDIA-preferred answer for production LLM **serving**.
- **Triton Inference Server** is the multi-framework, multi-model **serving** platform. It supports concurrent **serving** of models from different frameworks (TensorRT, PyTorch, ONNX, TensorFlow) with **dynamic batching** and **GPU** scheduling.
- **Deployment strategy** is a risk management decision. Blue-green, **canary**, and shadow mode — each trades complexity for **safety**. The exam tests knowing which strategy fits which risk profile.
- **Stateless design** enables horizontal scaling. Stateful services with sticky sessions complicate auto-scaling and fault tolerance. The exam prefers stateless designs with externalized state (caches, databases).
- **API design for LLMs** involves tradeoffs between REST and WebSocket/streaming. REST for request-response; WebSocket for token-by-token streaming; the exam tests when each is appropriate.

## Mental model

Model **deployment** is the bridge between a trained/optimized model and users:

```
┌──────────────────────────────────────────────────────────────────┐
│                   NVIDIA Deployment Stack                        │
│                                                                  │
│  Optimized Model (TensorRT-LLM engine)                           │
│       │                                                          │
│       ▼                                                          │
│  [Containerize] ──── NGC (NVIDIA GPU Cloud) containers           │
│       │                                                          │
│       ▼                                                          │
│  ┌──────────────────────────────────────────┐                    │
│  │  NIM (single LLM)  OR  Triton (multi)    │                    │
│  │  OpenAI-compat API    Dynamic batching    │                    │
│  │  FP8 on H100/B200     Model ensembles     │                    │
│  └──────────────────────────────────────────┘                    │
│       │                                                          │
│       ▼                                                          │
│  [API Layer] ──── REST / SSE streaming / WebSocket               │
│       │                                                          │
│       ▼                                                          │
│  [Load Balancer + Auto-scaling (HPA) + Circuit Breaker]          │
│       │                                                          │
│       ▼                                                          │
│  Clients (with correlation IDs, rate limited, retry+backoff)     │
└──────────────────────────────────────────────────────────────────┘
```

**Key NVIDIA products in this flow**: **NIM**, **Triton**, **TensorRT-LLM**, **NGC** containers, H100/B200 GPUs (**FP8** acceleration), Prometheus/DCGM (**monitoring**).

## NVIDIA NIM (NVIDIA Inference Microservice)

**NIM** is NVIDIA's containerized inference solution:

- **What it is**: Pre-built **Docker** **container** with optimized model + **TensorRT-LLM** engine + API server
- **API compatibility**: OpenAI-compatible chat completions API (`/v1/chat/completions`)
- **Optimizations**: **TensorRT-LLM** engine, **FP8** **quantization**, **paged KV cache**, inflight batching
- **Key benefit**: Production-ready **deployment** in minutes, not weeks of engineering

**Exam signal**: **NIM** = "NVIDIA's containerized, optimized, API-compatible inference microservice." The exam distinguishes **NIM** (self-hosted microservice) from NVIDIA's cloud API endpoints.

## Triton Inference Server

**Triton** is NVIDIA's multi-framework model server:

| Feature | What it does | Exam signal |
| ------- | ------------ | ----------- |
| **Multi-framework** | Serve TensorRT, PyTorch, ONNX, TensorFlow, Python models concurrently | "One server for all model types" |
| **Dynamic batching** | Accumulate requests into optimal batch sizes automatically | Increases **throughput** without client-side batching |
| **Concurrent model execution** | Run multiple models on the same **GPU** | Maximizes **GPU** utilization |
| **Model ensembles** | Chain models: preprocessing → model → postprocessing | Pre/post-processing on **GPU**, no CPU round-trip |
| **Model pipelines** | Directed acyclic graph of models with data flow | Complex inference workflows |
| **GPU fractional scheduling** | Allocate **GPU memory** per-model | Multi-tenant **GPU** sharing |
| **Metrics (Prometheus)** | **GPU** utilization, request **latency**, **throughput** | Part of **monitoring** domain |

**NIM vs Triton**: **NIM** is a packaged, single-model microservice built ON TOP of **TensorRT-LLM**. **Triton** is a multi-model, multi-framework server. Use **NIM** for simple "deploy this LLM" scenarios; use **Triton** when **serving** multiple models or non-LLM models alongside LLMs.

## Deployment strategies

| Strategy | How it works | Risk | When right |
| -------- | ------------ | ---- | ---------- |
| **Blue-Green** | Two identical environments; switch all traffic at once | Lowest (instant **rollback**) | Critical systems; **zero**-downtime required |
| **Canary** | Route % of traffic to new version; increase gradually | Low (gradual exposure) | Validating new model/version on real traffic |
| **Shadow mode** | New version receives copy of traffic; responses compared but not returned | Lowest risk (no user impact) | Validating correctness before any user exposure |
| **Rolling update** | Update instances one by one | Medium (mixed versions briefly) | Standard **Kubernetes** **deployment** |
| **Feature flags** | Code-level toggles for model selection | Low (per-request control) | **A/B testing**, gradual rollout, quick disable |

**Exam signal**: "Shadow mode" means the new model sees traffic but its responses go to **logs**/**metrics**, not users. It's the safest way to validate a new model version.

## API Design

### REST vs WebSocket/Streaming

| Aspect | REST | Server-Sent Events / WebSocket |
| ------ | ---- | ------------------------------ |
| **Interaction** | Request-response | Streaming token-by-token |
| **Latency** | Full response before user sees anything | User sees first token immediately (**TTFT**) |
| **Complexity** | Simple, well-understood | Requires event handling, reconnection logic |
| **Use case** | Batch, classification, **embeddings** | Chat, code completion, any generative output |
| **NIM support** | OpenAI-compatible endpoints | Streaming via `stream: true` parameter |

### Key API design patterns

- **Error handling with retries**: Use exponential backoff + jitter; respect `Retry-After` headers
- **Idempotency keys**: For mutation endpoints; prevents duplicate operations on retry
- **Rate limiting**: Token bucket or sliding window; return 429 with `Retry-After`
- **Circuit breaker**: After N failures in a window, stop sending requests; prevent cascading failures
- **Timeouts**: Set client-side timeouts; cancel server-side inference on client disconnect
- **Correlation IDs**: Pass `X-Request-ID` through all services for tracing

## Scaling strategies

| Strategy | What it means | When right |
| -------- | ------------- | ---------- |
| **Horizontal scaling** | Add more instances | Stateless services; distributed traffic |
| **Vertical scaling** | Bigger **GPU** (A100 → H100) | Model fits existing **GPU**; want lower **latency** |
| **Auto-scaling** | Dynamic instance count based on load | Variable traffic patterns |
| **HPA (Horizontal Pod Autoscaler)** | K8s auto-scaling based on CPU/memory/custom **metrics** | **Kubernetes**-native **deployment** |
| **Multi-region** | Deploy in multiple geographic regions | Reduce **latency** for global users; disaster recovery |

**Exam signal**: For LLM inference, horizontal scaling means more **GPU** instances. Vertical scaling means bigger/faster GPUs. Auto-scaling handles variable load but needs warm-up time for new instances (cold start problem).

### User count, concurrency, and latency metrics

When a deployment question mentions user volume, convert it into a serving workload before choosing a scaling answer: requests per second, concurrent generations, prompt tokens, output tokens, streaming requirement, and burst pattern.

| Cue | Metric to inspect | Deployment answer pattern | Trap |
| --- | ----------------- | ------------------------- | ---- |
| Interactive chat must feel quick | P95/P99 TTFT, inter-token latency | Streaming, short batching window, warm replicas, context control | Only measure full response time |
| Many users arrive at once | Queue depth, concurrent requests, HPA state, cold starts | Warm pool, autoscaling, rate limiting, admission control | Scale to zero for chat |
| P50 fine but P99 bad | Tail traces, queue time, long-output requests, retries | Prioritize lanes, cap outputs, tune timeouts and batching | Trust average latency |
| High throughput batch job | Tokens/sec, total completion time, GPU utilization | Larger batches, throughput lane, offline scheduling | Apply chat TTFT settings to batch |
| Variable-length generation | Batch occupancy, least-outstanding routing, KV-cache pressure | In-flight batching and load-aware routing | Round-robin as the only balancer |

## Infrastructure patterns

| Pattern | What it is | Exam context |
| ------- | ---------- | ------------ |
| **Stateless services** | No local state; state in external cache/DB | Enables horizontal scaling and fault tolerance |
| **Stateful services** | State tied to specific instance | Sticky sessions needed; harder to scale |
| **External cache** | Redis/Memcached for session, **KV cache** prefix | Decouples state from compute instances |
| **Load balancer** | Distributes requests across instances | Layer 4 (connection) or Layer 7 (request/content) |
| **Service mesh** | Sidecar proxies for comms, mTLS, observability | Istio/Linkerd; observability without app changes |
| **Container registry** | Store and version **container** images | **NGC** (NVIDIA **GPU** Cloud) for NVIDIA-optimized containers |

## CI/CD for model deployment

- **Model artifacts versioned alongside code**: Model version + prompt version + config version
- **Canary deployment in CI/CD**: Deploy new model to 5% of traffic; validate **metrics**; roll forward or back
- **Rollback capability**: Previous model version + config must be immediately deployable
- **Smoke tests after deployment**: Basic inference request to verify the model is **serving** correctly
- **Infrastructure as Code (IaC)**: Terraform/CloudFormation for reproducible **GPU** infrastructure

## Decision traps worth remembering

1. **NIM vs Triton** — **NIM** is for single-model LLM **deployment** (built on **TensorRT-LLM**). **Triton** is for multi-model, multi-framework **serving**. Different use cases.

2. **Blue-green vs canary** — Blue-green switches ALL traffic instantly. **Canary** gradually ramps a percentage. Different risk profiles.

3. **Shadow mode behavior** — Shadow mode sends copies to the NEW model but returns OLD model's responses. **Zero** user impact. It's for validation, not rollout.

4. **Streaming for chat** — REST returns the full response at once. Chat users expect streaming (token by token). Use SSE/WebSocket for interactive generation.

5. **Cold start mitigation** — Cold start **latency** for new **GPU** instances can be 30+ seconds (model loading). Need pre-warming or overprovisioning buffer.

6. **Scaling strategy** — For LLMs, a single H100 may outperform 4×T4 due to **communication overhead** of tensor/**pipeline parallelism**. Match scaling to the bottleneck.

7. **Stateless design** — State lives in external systems (caches, databases). The SERVICE is stateless. Critical distinction.

## Must-know exam bullets

- **NIM** — containerized NVIDIA-optimized inference microservice; **TensorRT-LLM** engine + **OpenAI-compatible API**
- **Triton** — multi-model, multi-framework server; **dynamic batching**, ensembles, **GPU** scheduling
- **Deployment strategies** — blue-green: instant switch; **canary**: gradual ramp; shadow: validate without user impact
- **Shadow mode** — copy traffic to new model, return old model's response; **zero** risk validation
- **API design** — streaming (SSE/WebSocket) for chat; REST for batch/classification
- **Exponential backoff + jitter** — for retries; prevents thundering herd on recovery
- **Circuit breaker** — prevents cascading failures; stop calling failing service after threshold
- **Correlation IDs** — enable distributed tracing; `X-Request-ID` through all services
- **Stateless services** — external state enables horizontal scaling; not "no state", just "no LOCAL state"
- **Cold start** — loading model into **GPU memory** takes 10-60+ seconds; pre-warming needed for auto-scale
- **CI/CD for models** — version model + prompt + config together; **rollback** = previous version of all three
- **Smoke test** — after **deployment**: basic inference check; verify **serving**, not model quality

## Hands-on checks

1. You need to deploy a LLaMA model with **OpenAI-compatible API**. **NIM** or **Triton** — which and why?
2. Design a **canary** **deployment**: start at 5%, what **metrics** determine whether to advance to 25%?
3. Your chat app returns responses all at once instead of streaming. What API change fixes this?
4. An auto-scaled **GPU** instance takes 45 seconds to load the model. How do you prevent request timeouts during scale-up?
5. You're **serving** 3 models (LLM + embedding + reranker) on limited GPUs. **NIM** or **Triton**?

## Key terms to memorize

- **NIM (NVIDIA Inference Microservice)** — containerized, optimized LLM **deployment** with **OpenAI-compatible API**
- **Triton Inference Server** — multi-framework, multi-model **serving** with **dynamic batching**
- **TensorRT-LLM** — NVIDIA's LLM optimization and runtime engine (under **NIM**)
- **Dynamic batching** — **Triton** feature; automatically groups concurrent requests into optimal batches
- **Blue-green deployment** — two identical environments; switch all traffic at once; instant **rollback**
- **Canary deployment** — gradually ramp traffic percentage to new version
- **Shadow mode** — new version receives traffic copy; responses logged, not returned
- **Feature flags** — code-level toggles; per-request model selection; **A/B testing**
- **SSE (Server-Sent Events)** — streaming protocol; server pushes token-by-token to client
- **REST API** — request-response; appropriate for batch, classification, **embeddings**
- **Circuit breaker** — stop sending requests after N failures; prevent cascading failures
- **Exponential backoff + jitter** — retry strategy; random jitter prevents thundering herd
- **Rate limiting** — cap requests per time window; return 429 with Retry-After
- **Correlation ID** — unique request identifier passed through all services for tracing
- **Horizontal scaling** — add more instances; requires stateless design
- **Vertical scaling** — bigger/faster **GPU**; limited by hardware ceiling
- **HPA (Horizontal Pod Autoscaler)** — **Kubernetes** auto-scaling based on **metrics**
- **Cold start** — **latency** to load model into **GPU memory** on new instance
- **Service mesh** — sidecar proxies for mTLS, observability, traffic control
- **NGC (NVIDIA GPU Cloud)** — **container** registry for NVIDIA-optimized containers

### Top decision traps
- "**NIM** = **Triton**" → **NIM** is single-model LLM; **Triton** is multi-model multi-framework
- "Blue-green is gradual" → it's INSTANT; **canary** is gradual
- "Shadow mode affects users" → old model still responds; new model is observation only
- "REST for chat" → streaming (SSE/WebSocket) expected for interactive generation
- "Auto-scaling solves **latency**" → cold start is 10-60s for **GPU** model loading
- "Stateless = no state" → state in external systems; service instances are stateless

## Mock signals

Across the mock exams, **deployment** questions repeatedly test these durable ideas:

- **Serving stack boundaries**: **NIM** packages optimized model APIs; **Triton** serves multi-model/multi-framework workloads; **TensorRT-LLM** optimizes LLM inference.
- **Deployment patterns**: **canary** is gradual, blue-green switches traffic, and shadow mode observes without **serving** users.
- **Production APIs**: chat/generation often needs streaming; REST alone is not enough for every interactive workflow.
- **Reliability controls**: **health checks**, readiness, retries with backoff, circuit breakers, rate limits, and graceful shutdown.
- **Scaling reality**: horizontal scaling, HPA, pre-warming, caching, and multi-region **deployment** each solve different bottlenecks.
- **RAG deployment**: vector databases, **retrieval** services, and model endpoints must be versioned and monitored together.

Evidence source: `mock_1` through `mock_5`, especially **NIM**, **Triton**, **TensorRT-LLM**, **RAG** **deployment**, rollout strategies, API design, scaling, and reliability questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 9%
- **What it covers:** Deploy LLMs with containerized **serving**, orchestration, model APIs, and scalable inference paths.
- **Use this section when:** Study this when the question asks how to expose, scale, update, or operate an inference endpoint.
- **Common trap:** **Deployment** packaging is not the same as model optimization or **fine-tuning**.
- **Recognition clues:** A team needs a self-hosted endpoint with **health checks**, batching, and predictable rollout behavior.

### Study notes

- **NIM (NVIDIA Inference Microservice) — what it IS and ISN'T**:
  - IS: A containerized, pre-optimized model **serving** package. Includes model weights, **TensorRT-LLM** runtime, **OpenAI-compatible API**, **health checks**, **metrics**, security updates. Available via **NGC** catalog. Deployable on **Kubernetes** or standalone **Docker**.
  - IS NOT: The model itself (Nemotron is the model, **NIM** serves it). A training tool (NeMo Framework trains). A **safety** filter (**NeMo Guardrails** filters). A profiler (Nsight tools profile).
  - Deploying a model via **NIM**: `docker pull nvcr.io/nvidia/nim/<model-name>` → run **container** → model available at `http://localhost:8000/v1/chat/completions`. That's the "fastest supported way" the exam references.
  - **NIM Operator**: **Kubernetes** operator that manages **NIM** deployments at scale — auto-scaling, rolling updates, **GPU**-aware scheduling, health **monitoring**.

- **Triton Inference Server vs NIM — the exam distinction**:
  - **Triton**: Multi-model, multi-framework **serving** platform. Hosts TensorRT engines, PyTorch models, ONNX models, Python code, and ensembles (pipelines). More flexible, more configuration required.
  - **NIM**: Single-model, pre-packaged microservice. Optimized out of the box, minimal configuration. Less flexible but faster to deploy.
  - When **Triton** is right: Multi-model pipelines (**tokenizer** → LLM → **safety** → detokenizer), custom backends, fine-grained batching control.
  - When **NIM** is right: "Fastest supported way to expose an LLM/embedding/reranker as an API." Standard model, standard API, quick **deployment**.
  - They work together: **Triton** can host **NIM** endpoints. **NIM** can use **TensorRT-LLM** engines underneath.

- **Deployment strategies (exam must-distinguish)**:
  - **Blue-Green**: Two identical production environments (blue=current, green=new). Switch all traffic at once. Fast **rollback** (switch back to blue). Requires 2× infrastructure.
  - **Canary**: Gradually shift a small % of traffic to the new version. Monitor quality **metrics** on **canary** traffic. Increase % if healthy. Slow rollout, faster issue detection. Most appropriate for LLM deployments where quality regressions are subtle.
  - **Shadow mode**: New model runs in parallel on real traffic but its outputs aren't shown to users. Safe comparison without user impact. Used for validation before any traffic shift.
  - **A/B testing**: Two variants serve different user groups simultaneously. Compare business **metrics** (task completion, user satisfaction) AND quality **metrics**. NOT the same as **canary** (**canary** is about safe rollout, A/B is about comparison).

- **LLM-specific deployment concerns (beyond standard web services)**:
  - **Cold start**: Loading model weights + building TensorRT engine takes minutes. Mitigation: warm pool (minimum replicas always loaded), model warmup (run sample inference at startup to initialize **KV cache** memory, optimize execution paths).
  - **Quality regression detection**: Standard HTTP 200 doesn't mean the answer is good. Need LLM-specific eval on **canary** traffic: **LLM-as-judge** scoring, automatic **faithfulness** checks, output distribution comparison vs baseline.
  - **Streaming**: Return tokens as generated (Server-Sent Events or WebSocket). Reduces Time-To-First-Token perception but doesn't reduce total generation time. Client must handle partial responses and disconnection.
  - **Load balancing**: Least-outstanding-requests (not round-robin) — accounts for variable inference times. A request generating 500 tokens shouldn't be treated the same as one generating 10 tokens.

- **Dynamic batching in deployment context**:
  - **Triton**'s dynamic_batching: Groups individual requests into optimal batch sizes. max_queue_delay_microseconds trades **latency** for **throughput**. preferred_batch_size aligns with **GPU** efficiency sweet spots.
  - Continuous (in-flight) batching: **TensorRT-LLM** feature. Requests join/leave running batch mid-decoding. The **deployment**-level answer for "maximize **throughput** under variable-length generation."
  - Exam distinction: **Triton** **dynamic batching** is server-level request grouping. **TensorRT-LLM** **in-flight batching** is engine-level decode scheduling. They work at different layers.

### Must know

- **NIM**: Pre-packaged, optimized model microservice with **OpenAI-compatible API**. Containerized. Fastest path to a production **model endpoint**. Available from **NGC**. NOT the model itself — it's the **serving** packaging.
- **Triton Inference Server**: Multi-model, multi-framework **serving** platform. Supports TensorRT, PyTorch, ONNX, Python backends. Model ensembling chains multiple models. **Dynamic batching** with configurable queue delay. The flexible but more-configuration-required option.
- **Dynamic batching**: Server-side request grouping. max_queue_delay_microseconds (100-500µs for interactive) controls **latency**/**throughput** trade-off. preferred_batch_size aligns with **GPU** efficiency. NOT the same as continuous/**in-flight batching** (**TensorRT-LLM** engine-level).
- **Kubernetes deployment**: **NIM** containers on K8s with **GPU** node pools. HPA (Horizontal Pod **Autoscaling**) scales pod count based on **metrics**. **NIM Operator** simplifies lifecycle management. Standard enterprise **deployment** pattern.
- **Canary/Rollback**: **Canary** = gradual traffic shift to new version with quality **monitoring**. **Rollback** = instant switch back to previous version via K8s **deployment** revision or load balancer redirect. Critical for LLM deployments where quality regressions are the primary risk.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Fastest supported LLM API endpoint | **NIM** container with OpenAI-compatible API | Building a custom FastAPI wrapper first |
| Multi-model pipeline or custom backend | **Triton Inference Server** ensemble | Forcing everything into one NIM |
| Kubernetes lifecycle for NIM | **NIM Operator**, GPU scheduling, HPA, rolling updates | Managing pods by hand as the main answer |
| Gradual rollout of new model | **Canary** with LLM quality metrics and rollback | Switching 100% traffic immediately |
| Compare two variants on user outcomes | **A/B test** with stratified traffic and business + quality metrics | Calling every rollout a canary |
| Validate new model without user exposure | **Shadow mode** | Showing unvalidated outputs to users |
| Cold-start latency | Warm pool, pre-loaded engines, model warmup | Scaling to zero for interactive chat |
| Variable request lengths | Dynamic batching plus engine-level in-flight batching | Round-robin load balancing only |
| Health routing | Readiness/liveness/model health endpoints | Treating HTTP 200 as quality success |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **NIM** vs **Triton** | NIM is a pre-packaged optimized model microservice; Triton is a flexible multi-model serving platform. |
| **NIM** vs **NIM Operator** | NIM serves a model; the Operator manages NIM deployments on Kubernetes. |
| Canary vs A/B testing | Canary is safe rollout; A/B is controlled comparison. |
| Canary vs shadow mode | Canary exposes a small user slice; shadow runs in parallel without affecting users. |
| Dynamic batching vs in-flight batching | Triton dynamic batching groups requests; TensorRT-LLM in-flight batching schedules active decode requests. |
| Liveness vs readiness | Liveness says the container is alive; readiness says it can receive traffic. |
| Deployment vs optimization | Deployment exposes and operates the model; optimization changes engine speed, memory, or cost. |

### Mini scenario drill

1. Scenario: A team wants a supported self-hosted chat endpoint quickly with standard API compatibility.
   Best answer pattern: Deploy a **NIM** container from NGC with health checks and OpenAI-compatible endpoints.
   Trap: Building custom serving code as the first option.

2. Scenario: One endpoint must run tokenizer, LLM, safety classifier, and detokenizer as a graph.
   Best answer pattern: Use **Triton Inference Server** ensembles or a pipeline-serving pattern.
   Trap: Describing NIM as a general multi-model orchestrator.

3. Scenario: A new model is ready but subtle answer-quality regressions are possible.
   Best answer pattern: Run shadow/canary, monitor LLM-specific quality metrics, then roll forward or rollback.
   Trap: Relying only on CPU/GPU health and HTTP error rate.

### What to recognize

- **Endpoint**: The question asks about exposing a model as an API → **NIM** or **Triton**. **NIM** for "fastest supported way." **Triton** for multi-model pipelines.
- **Container**: The question mentions **Docker**/**Kubernetes** packaging → **NIM** containers from **NGC**. Pre-built, optimized, supported.
- **Health check**: Production readiness. **NIM** provides `/v1/health/ready`, `/v1/health/live`, `/v1/health/model`. Load balancers use these for routing decisions.
- **Autoscale**: Traffic fluctuates → HPA on K8s based on request queue depth or **GPU** utilization. Maintain warm pool to avoid cold start **latency**.
- **Deployment artifact**: What you actually deploy. **NIM** **container** image from **NGC**. NOT a raw model file, NOT a Python script. The **container** IS the deployable artifact.

### Hands-on checks

1. **Draw the deployment path**: Model artifact (HuggingFace/**NGC**) → optimization (**TensorRT-LLM** engine build) → packaging (**NIM** **container**) → orchestration (**Kubernetes** **deployment** with **NIM Operator**) → endpoint (**OpenAI-compatible API**) → **monitoring** (**health checks**, **metrics**, Prometheus) → update strategy (**canary** with quality eval).
2. **Choose the right tool**: "Team wants to deploy 3 models (**tokenizer** + LLM + **safety** classifier) as a single pipeline." → **Triton Inference Server** with model ensembling. **NIM** is single-model.
3. **Diagnose deployment issue**: "**p99 latency** spikes at 200 concurrent users." → Check **Triton** **dynamic batching** config (max_queue_delay too high?), check **GPU** utilization (under-provisioned?), check **continuous batching** enabled (static batching collapses under variable lengths).
4. **Canary design**: "New model version ready. Design the rollout." → Shift 5% traffic → monitor LLM-specific quality **metrics** (**faithfulness**, **ROUGE**, **LLM-as-judge**) + business **metrics** (task completion) for 1 hour → if healthy, increase to 25% → 50% → 100%. If quality degrades, instant **rollback** to baseline.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when the question asks how to expose, scale, update, or operate an inference endpoint.
- The major trap pattern is: **Deployment** packaging is not the same as model optimization or **fine-tuning**.
- Recurring local question themes follow the key ideas: **NIM**, **Triton**, **Kubernetes**, **dynamic batching**, **canary** rollout.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q35** / `deploy-001`: An LLM service must support real-time chat (low **TTFT**, streaming) and offline document summarization on the same model. Which **deployment** pattern is most appropriate? Correct idea: Two separate **Triton**/**NIM** endpoints (or model instances) with different batching configs — low max_queue_delay for chat, larger b....
- **mock_1 Q36** / `deploy-002`: **NIM** (NVIDIA Inference Microservice) provides which combination out of the box? Correct idea: A standardized **OpenAI-compatible API** surface, optimized engines (**TensorRT-LLM**/**Triton**), and a containerized deployable artifact....
- **mock_1 Q37** / `deploy-003`: **Canary** **deployment** for a new LLM version — which signal is most LLM-specific (vs. generic web service signals)? Correct idea: Quality regressions on a **canary**-traffic eval (**LLM-as-judge**, automatic checks) compared to baseline output distributions, on top....
- **mock_1 Q38** / `deploy-004`: **Triton** model ensembles are best used for: Correct idea: Composing multiple models/preprocessors (e.g., **tokenizer** → LLM → **safety** classifier → detokenizer) into a single inference graph....
- **deploy-005** / `deploy-005`: Cold-start **latency** is killing your autoscaled LLM endpoint. Which mitigation is most effective? Correct idea: Maintain a small minimum-replica pool (warm pool) and pre-load model weights/engine at **container** start (model_warmup), with pre....
- **deploy-006** / `deploy-006`: **A/B testing** two LLM variants on production traffic — what is the most robust **evaluation** approach? Correct idea: Stratified traffic split with both online business **metrics** (e.g., task completion, retention, deflection) and offline quality e....
- **deploy-007** / `deploy-007`: An ONNX model exported from PyTorch fails with a `gather` opset mismatch when building a TensorRT engine. What is the appropriate fix? Correct idea: Re-export with a TensorRT-compatible opset version, or apply a graph transformation to replace the unsupported op.
- **deploy-008** / `deploy-008`: A 70B model is deployed on H100s with **Triton**. Profiling shows **GPU** utilization at 35% under load. What is the most useful first investigation? Correct idea: Inspect **Triton** **metrics** (queue time, batch size distribution, instance group **occupancy**) and the engine's preferred batch sizes...
- **deploy-009** / `deploy-009`: Which **deployment** scenario most justifies running on Jetson/edge instead of cloud? Correct idea: Strict offline operation, sub-30 ms response budget under unreliable connectivity, or hard data-locality constraints.
- **mock_2 Q16** / `m1-016`: What is the primary purpose of NVIDIA **NIM**? Correct idea: To provide optimized microservices for deploying and **serving** AI models with industry-standard APIs. Trap: **GPU**-accelerated data preprocessing and augmentation are capabilities of libraries like NVIDIA DALI or RAPIDS, not NVI...
- **mock_2 Q17** / `m1-017`: Multiple answers: Which of the following accurately describe **TensorRT-LLM**'s optimization techniques for improving LLM inference performance? Select two. Correct idea: Compiling and optimizing model graphs into highly efficient **GPU** execution plans with support for **tensor parallelism** across mult.... Trap: **Kernel fusion**, **quantization**, **in-flight batching**, and paged **attention** are indeed optimization techniques used by Tenso...
- **mock_2 Q18** / `m1-018`: Multiple answers: Which of the following accurately describe capabilities of NVIDIA **Triton Inference Server** in LLM **deployment**? Select two. Correct idea: It supports model ensembling to chain multiple models into inference pipelines and enables concurrent execution of different mo.... Trap: Synthetic training data generation is not a capability of **Triton Inference Server** -- **Triton** is a production inference...
- **mock_2 Q19** / `m1-019`: In the context of LLM **deployment**, what is **in-flight batching**? Correct idea: A technique that dynamically batches incoming inference requests in real time, even as requests arrive at different times, to m.... Trap: Pre-processing multiple datasets simultaneously before training describes distributed data preprocessing, not in-flig...
- **mock_2 Q21** / `m1-021`: When deploying an LLM using NVIDIA **NIM**, what format are the models typically packaged in? Correct idea: **Docker** containers with the model and runtime environment. Trap: NVIDIA **NIM** packages models as **Docker** containers with a complete runtime environment, not as executable binaries compi...
- **mock_2 Q25** / `m1-025`: In LLM API integration, what is the purpose of the **temperature** parameter? Correct idea: To control the randomness of the model's output, with higher values producing more diverse and creative responses. Trap: The **temperature** parameter in LLM APIs controls the randomness of output token **sampling** by scaling logits before softm...
- **mock_2 Q27** / `m1-027`: When integrating an LLM into a Python application, what library is commonly used for building REST APIs to serve the model? Correct idea: FastAPI. Trap: Pandas is a data manipulation library for DataFrame operations, not a web framework for building REST APIs -- while p...
- **mock_2 Q28** / `m1-028`: What is the key difference between synchronous and asynchronous LLM API calls? Correct idea: Synchronous calls block and wait for the complete response, while asynchronous calls allow the program to continue executing an.... Trap: Synchronous vs. asynchronous API calls differ in whether execution blocks waiting for a response, not in which hardwa...
- **mock_2 Q29** / `m1-029`: What is the purpose of model ensembling in **Triton Inference Server**? Correct idea: To combine multiple models into a pipeline where the output of one model feeds into another, enabling complex multi-stage infer.... Trap: Training multiple models simultaneously on different GPUs describes distributed training, not model ensembling in Tri...
- **mock_2 Q30** / `m1-030`: Multiple answers: What are benefits of using streaming responses when **serving** LLM applications? Select two. Correct idea: It enables users to interrupt or stop generation early if the output is going in the wrong direction, saving compute resources.... Trap: Streaming does not reduce total inference time -- the model still generates the same number of tokens at the same spe...
- **mock_2 Q43** / `m1-043`: What is **A/B testing** in the context of LLM **deployment**? Correct idea: A method to compare two model variants by **serving** them to different user groups and measuring performance **metrics**. Trap: **A/B testing** compares model variants by **serving** them to different user groups and measuring real-world performance met...
- **mock_3 Q6** / `m2-006`: Multiple answers: When deploying an LLM using NVIDIA **NIM**, what is the primary benefit of this approach? Select two. Correct idea: **NIM** includes built-in optimizations using **TensorRT-LLM** for maximum inference **throughput** and low **latency** without requiring manua.... Trap: This claims **NIM** replaces **GPU** hardware entirely with CPU inference, which is incorrect. **NIM** is **GPU**-accelerated and rel...
- **mock_3 Q7** / `m2-007`: What is **TensorRT-LLM** and how does it optimize LLM inference? Correct idea: **TensorRT-LLM** is an SDK that optimizes LLM inference through **kernel fusion**, **quantization**, and **GPU**-specific optimizations. Trap: This describes a distributed training framework for building models from scratch. **TensorRT-LLM** is an inference optimi...
- **mock_3 Q8** / `m2-008`: What is the role of NVIDIA **Triton Inference Server** in LLM **deployment**? Correct idea: **Triton** provides a unified **serving** platform that can host multiple models, handle batching, and support various frameworks with.... Trap: This describes online learning or continuous **fine-tuning** from production feedback. **Triton Inference Server** is a servi...
- **mock_3 Q9** / `m2-009`: When integrating an LLM into a Python application using NVIDIA's tools, which approach provides the fastest time-to-**deployment**? Correct idea: Using NVIDIA **NIM** with pre-built containers and **OpenAI-compatible API** endpoints. Trap: This describes building a custom **CUDA** inference server from scratch, which would be the slowest path to **deployment**, n...
- **mock_3 Q15** / `m2-015`: Multiple answers: When deploying an LLM for public use, which technique is most effective for preventing the model from generating harmful or inappropriate content? Se... Correct idea: **Fine-tuning** the model with **RLHF** to teach it to refuse harmful requests and align with **safety** guidelines during the training phase. Trap: This option describes a valid **safety** technique (content **moderation** **guardrails**). It is not included in the correct ans...
- **mock_3 Q24** / `m2-024`: What are the best practices for managing API rate limits and costs when deploying LLM applications? Correct idea: Implement request throttling, response caching for repeated queries, prompt optimization to reduce token usage, and **monitoring**.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_3 Q36** / `m2-036`: Multiple answers: When containerizing an LLM application with **Docker**, what are the essential components to include? Select two. Correct idea: Following **container** best practices including multi-stage builds for smaller images, non-root user execution for security, and e.... Trap: This describes a GUI for interactive training within the **container**. Containers for LLM **deployment** are headless servin...
- **mock_3 Q38** / `m2-038`: Multiple answers: How can you optimize batch inference for LLMs to maximize **throughput**? Select two. Correct idea: Implementing **KV cache** optimization techniques such as PagedAttention for efficient memory management, which reduces memory wast.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_3 Q39** / `m2-039`: What is streaming inference for LLMs and when should it be used? Correct idea: Streaming inference returns tokens as they are generated rather than waiting for complete response, improving perceived **latency**.... Trap: This describes request multiplexing or concurrent processing of multiple requests. Streaming inference returns tokens...
- **mock_3 Q49** / `m2-049`: Multiple answers: What are the key techniques used in model compression for deploying large language models more efficiently? Select two. Correct idea: **Quantization** to **INT8** or **INT4** **precision** is the most widely adopted compression technique for LLM **deployment**, achieving 2 to 4 ti.... Trap: This option claims compression causes absolutely no accuracy degradation, which is false. **Quantization**, **pruning**, and...
- **mock_3 Q52** / `m2-052`: How should **A/B testing** be implemented when deploying new LLM variants in production? Correct idea: **A/B testing** for LLMs involves routing a percentage of production traffic to the new model variant while the rest uses the exist.... Trap: This describes offline validation on a held-out test set, which is model **evaluation**, not **A/B testing**. **A/B testing** inv...
- **mock_3 Q53** / `m2-053`: What are the key security considerations when deploying LLM APIs in production? Correct idea: Key security considerations include authentication and authorization, rate limiting and abuse prevention, input validation and.... Trap: This understates meaningful differences or dismisses an important aspect that is well-established in practice.
- **mock_3 Q59** / `m2-059`: Multiple answers: What are the key **privacy** concerns when deploying LLMs, and how can they be mitigated? Select two. Correct idea: Deploying models on-premise or in private cloud environments for sensitive use cases, ensuring that user data never leaves the.... Trap: This claims differential **privacy** is free with **zero** computational overhead. Differential **privacy** adds noise to gradien...
- **mock_4 Q10** / `m3-010`: Multiple answers: What is RAPIDS in the context of data processing for LLMs? Select two. Correct idea: An open-source framework that enables data scientists to use **GPU** parallelism with familiar pandas-like and scikit-learn-like APIs. Trap: RAPIDS is a suite of **GPU**-accelerated data science libraries, not a liquid cooling system architecture for **GPU** data ce...
- **mock_4 Q48** / `m3-048`: What is the purpose of caching in **RAG** systems? Correct idea: Storing frequently accessed results, such as **embeddings**, retrieved documents, or LLM responses, to reduce **latency** and costs. Trap: Caching in **RAG** stores frequently accessed results such as **embeddings**, retrieved documents, or LLM responses for fast...
- **mock_4 Q52** / `m3-052`: What is the purpose of streaming in **RAG**-based applications? Correct idea: Delivering LLM-generated responses incrementally as tokens are produced, improving perceived responsiveness. Trap: Streaming in **RAG** applications delivers LLM-generated tokens incrementally as they are produced for improved user expe...
- **mock_4 Q57** / `m3-057`: Multiple answers: What is the purpose of FAISS? Select two. Correct idea: Providing **GPU**-accelerated **vector search** capabilities that can handle billion-scale datasets with multiple indexing strategies l.... Trap: This statement is correct -- FAISS is a library for efficient similarity search and clustering of dense vectors with...
- **mock_4 Q58** / `m3-058`: What is the purpose of incremental indexing in **RAG** systems? Correct idea: Adding new documents to the vector database without rebuilding the entire index, enabling efficient updates. Trap: Incremental indexing adds new documents to the **vector search** index without rebuilding it from scratch, not fine-tunes...
- **mock_4 Q59** / `m3-059`: What is the purpose of using **metadata** in **vector search** filtering? Correct idea: Constraining semantic search to documents matching specific attributes like date ranges, categories, or user permissions before.... Trap: **Metadata** filtering uses structured fields like date or category to constrain which documents are searched, not dynami...
- **mock_5 Q7** / `m4-007`: In production LLM deployments, what is the key difference between stateless and stateful model **serving** architectures? Correct idea: Stateless **serving** treats each request independently without maintaining conversation history, while stateful **serving** maintains.... Trap: Stateless **serving** can support multi-turn conversations when the client sends the full message history with each reque...
- **mock_5 Q8** / `m4-008`: Multiple answers: What is the primary benefit of implementing response caching in LLM API systems? Select two. Correct idea: It improves overall system **throughput** by offloading repeated computations from **GPU** inference to fast cache lookups, freeing **GPU**.... Trap: **Monitoring** request volume and auto-provisioning **GPU** instances describes auto-scaling infrastructure, not response cac...
- **mock_5 Q9** / `m4-009`: When deploying LLMs behind a load balancer for high-**throughput** inference, which load balancing strategy is most appropriate? Correct idea: Least-connections or least-outstanding-requests routing to account for variable inference times and ensure even **GPU** utilization. Trap: Random selection with uniform probability does not account for variable request durations or current server load, mak...
- **mock_5 Q15** / `m4-015`: What is the purpose of a model card in the context of **responsible AI** **deployment** for LLMs? Correct idea: A document that provides transparent reporting of a model's intended use, training data, performance **metrics**, limitations, and.... Trap: A model card is a documentation standard proposed by the ML community for transparent reporting, not a formal certifi...
- **mock_5 Q21** / `m4-021`: When deploying LLMs using **Kubernetes**, what is the primary benefit of using Horizontal Pod **Autoscaling**? Correct idea: It automatically scales the number of model **serving** pods based on **metrics** like CPU utilization or request queue length, matchin.... Trap: Horizontal Pod **Autoscaling** adjusts the number of pods, not the resources (RAM, **GPU memory**) available to each pod -- v...
- **mock_5 Q22** / `m4-022`: Multiple answers: In a CI/CD pipeline for LLM applications, what is the purpose of automated model testing before **deployment**? Select two. Correct idea: To validate that **safety** **guardrails**, content filters, and **alignment** constraints remain effective in the new model version before.... Trap: CI/CD testing validates performance and **safety** before **deployment** but does not automatically trigger full model retrai...
- **mock_5 Q30** / `m4-030`: When deploying an LLM system that makes decisions affecting users, why is transparent stakeholder communication about the system's capabilities and limitations important? Correct idea: It sets appropriate expectations, builds trust, enables informed consent, and helps users understand when to rely on or questio.... Trap: All stakeholders affected by an AI system including end users, domain experts, and affected communities deserve trans...
- **mock_5 Q37** / `m4-037`: Multiple answers: When **serving** LLMs at scale, what is concurrent request handling and why is it important for **throughput**? Select two. Correct idea: It amortizes fixed computational overhead such as model weight loading and kernel launch costs across multiple requests, signif.... Trap: This statement is correct -- processing multiple user requests simultaneously through batching and pipelining techniq...
- **mock_5 Q38** / `m4-038`: What are request queuing strategies in LLM **serving**, and how do they affect user experience? Correct idea: Methods for managing incoming requests that exceed current processing capacity, including FIFO queues, priority queues, and adm.... Trap: Request queuing manages pending inference requests waiting for processing capacity, not stores conversation history -...
- **mock_5 Q39** / `m4-039`: What is model warm-up in LLM **serving**, and why is it important before accepting production traffic? Correct idea: Running initial inference requests through the model after loading to initialize caches, optimize execution paths, and ensure c.... Trap: Model warm-up runs sample requests to initialize runtime state, not pre-trains the model on a small dataset -- pre-tr...
- **mock_5 Q51** / `m4-051`: What is a **blue-green deployment** strategy for machine learning models, and what are its benefits? Correct idea: A **deployment** pattern that maintains two identical production environments, blue and green, allowing instant switching between o.... Trap: **Blue-green deployment** is a release strategy using two identical production environments for **zero**-downtime switching,...
- **mock_5 Q52** / `m4-052`: What is **canary** **deployment** for ML models, and how does it differ from **blue-green deployment**? Correct idea: A gradual rollout strategy that routes a small percentage of traffic to the new model version while most traffic continues to t.... Trap: **Canary** **deployment** is a gradual rollout strategy that routes a small percentage of traffic to the new version for vali...
- **mock_5 Q53** / `m4-053`: What is shadow mode **deployment** for ML models, and when is it most useful? Correct idea: Running a new model in parallel with the production model on real traffic without showing its outputs to users, allowing safe c.... Trap: Shadow mode runs a candidate model in parallel with the production model on live traffic at all times, not deploys on...
- **mock_6 Q6** / `m5-006`: When designing a REST API for an LLM inference service, what is the most appropriate HTTP method and response pattern for a text generation endpoint? Correct idea: POST request returning JSON with generated text, **metadata**, and usage statistics. Trap: Option A describes "PUT request with generated text stored at a predetermined resource location" but the question ask...
- **mock_6 Q7** / `m5-007`: What is the primary advantage of using WebSocket connections for streaming LLM responses compared to traditional HTTP requests? Correct idea: WebSockets enable bidirectional, real-time streaming of tokens as they're generated, improving perceived **latency**. Trap: Option A describes "WebSockets automatically handle authentication and rate limiting" but the question asks about Wha...
- **mock_6 Q9** / `m5-009`: What is the recommended retry strategy for handling transient failures when calling external LLM APIs in production applications? Correct idea: Exponential backoff with jitter: increase wait time exponentially between retries and add randomization. Trap: Option A describes "Retry immediately without delay" but the question asks about What is the recommended retry strate...
- **mock_6 Q21** / `m5-021`: What is the purpose of implementing a health check endpoint in a production LLM API service? Correct idea: To allow load balancers and orchestration systems to monitor service availability and route traffic appropriately. Trap: Option A describes "To automatically retrain the model when performance degrades" but the question asks about What is...
- **mock_6 Q23** / `m5-023`: What is a circuit breaker pattern in the context of calling external LLM APIs, and why is it useful? Correct idea: A mechanism that temporarily stops calling a failing service to prevent cascading failures and allow time for recovery. Trap: Option A describes "A technique to reduce token usage through caching" but the question asks about What is a circuit...
- **mock_6 Q24** / `m5-024`: When implementing rate limiting for an LLM API service, what is the most appropriate approach for handling requests that exceed the rate limit? Correct idea: Return HTTP 429 Too Many Requests with Retry-After header indicating when the client can retry. Trap: Option A describes "Silently drop excess requests" but the question asks about When implementing rate limiting for an...
- **mock_6 Q53** / `m5-053`: What are the benefits and challenges of multi-region **deployment** for LLM services, and how should CDN integration be implemented? Correct idea: Multi-region **deployment** reduces **latency** for global users and improves availability, but requires careful handling of model vers.... Trap: Option A overgeneralizes by asserting "Multi-region **deployment** automatically satisfies all data **privacy** regulations"....

</details>

<!-- STUDY_ENRICHMENT_END -->

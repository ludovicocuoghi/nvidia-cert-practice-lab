---
domain: Deployment and Scaling
weight: 13
status: populated
---

# Deployment and Scaling

## Certification boundary

This page is the NCP-AAI exam lens for deployment. Keep general deployment patterns only when they are needed to choose the correct NVIDIA-oriented architecture. The reusable concept home is `Agentic AI General Study -> Inference Serving and Deployment` and `Observability, Operations, and Cost`; NVIDIA product cues stay here.

## Core ideas you must hold in your head

- **Agent latency** is multi-component. Tracing each span (model inference, **retrieval**, tool calls, **guardrails**, queueing) identifies the bottleneck — you can't fix what you don't measure.
- **Workload isolation** — not all workloads belong in the same queue. Real-time chat and batch report generation need separate **serving** lanes with different batching/queueing/priority policies.
- **Infrastructure metrics** ≠ agent quality. CPU/GPU healthy doesn't mean the agent gives good answers. **Canary evaluation** must compare **task success**, trajectory quality, **groundedness**, and safety.
- **Stateless microservices + autoscaling** — containerized agents on Kubernetes with HPA are the standard exam answer for production scaling.

## Mental model

Deployment and Scaling sits at the **operationalization** stage:
```
[Develop agent] → [Containerize] → [Deploy on K8s with autoscaling] → [Route traffic by intent/complexity]
                                        ↑
                [Canary eval before ramp] → [Monitor: latency, quality, cost, errors]
                                        ↑
                [Resilience: timeouts, retries, circuit breakers, fallbacks]
```

## Deployment patterns

### Containerized microservices on Kubernetes

- Each agent (or agent component) as a containerized microservice
- **Kubernetes Ingress Controller**: External access, routing, SSL termination, load balancing
- **Horizontal Pod Autoscaler (HPA)**: Dynamic scaling based on CPU/memory or custom metrics
- **Service type LoadBalancer**: External load balancing across pods
- **Blue-green deployment**: Two environments (old/new), switch traffic with zero downtime, safe **rollback**
- This is the **standard correct answer** for production multi-agent deployment

### Autoscaling strategies

- **Warm minimum replicas**: Preload model engines, readiness checks only after warmup — prevents cold-start **latency**
- **Predictive scaling**: Schedule scale-up before known traffic peaks
- **Spot + on-demand mix**: Spot for non-critical, on-demand for critical paths — balances cost and availability
- **Not**: scale-to-zero for **latency**-sensitive LLMs (cold starts take minutes), fixed pods for variable workloads

### Workload isolation

- **Separate serving lanes**: Real-time (low **latency**, small batch) vs. batch (high throughput, large batch)
- Different batching, queueing, and priority policies per lane
- Prevents head-of-line blocking: batch jobs don't delay real-time responses
- **Intent/complexity routing**: Simple queries → cheap deterministic/small-model path; complex → full agent workflow

### Edge and regional deployment

- **Edge deployment with regional inference endpoints**: Minimizes network **latency** for geographically distributed users
- **Multi-region with automated failover and state synchronization**: High availability during regional outages
- Centralized load balancer with sticky sessions maintains user context across failover

## NVIDIA deployment stack

| Component | Role in deployment | Exam signal |
| --------- | ------------------ | ----------- |
| **NIM** | Core **serving** layer: packaged inference microservice with optimized API endpoint | "Fastest supported way to expose LLM/embedding/reranker as APIs" |
| **NIM Operator** | Core operations layer: Kubernetes operator for managing **NIM** deployments | Operationalizing **NIM** at scale on K8s |
| **Triton Inference Server** | Supporting **serving** layer: multi-framework, multi-modal model **serving** with dynamic batching | High-throughput, concurrent model execution |
| **TensorRT-LLM** | Supporting optimization layer: LLM **inference optimization** (kernel fusion, quantization, paged KV cache, in-flight batching) | **Throughput/latency optimization** under **NIM** or Triton |
| **Kubernetes/HPA/Ingress** | Platform layer for routing, scaling, rollout, and service exposure | Production multi-agent deployment pattern |

## Resilience patterns

### External dependency failure handling

- **Timeouts**: Prevent worker thread blocking on slow dependencies
- **Bounded retries with exponential backoff**: Avoid overwhelming recovering services
- **Circuit breakers**: Stop calling failing dependency, fail fast, test periodically
- **Bulkheads**: Isolate thread pools so one slow dependency doesn't exhaust all workers
- **Graceful degradation or fallback data**: Return stale/cached/partial data rather than failing completely
- **Not**: global timeout increases, infinite retries, removing monitoring

### API error handling

- **Exponential backoff with max retry limit**: For transient failures (network issues, timeouts)
- **Fallback response**: Inform user of temporary unavailability, offer alternate path
- **Never**: expose raw API errors to users, retry immediately/continuously, ignore and proceed with stale data

### Cold start mitigation

- Maintain warm minimum replicas with preloaded models
- Readiness probes only after model warmup completes
- Predictive scaling ahead of known traffic peaks
- **Not**: treating first user request as warmup, scaling to zero

## Multi-agent scaling patterns

### Shared retrieval cache

- Multiple agents independently retrieving same documents → wasted work
- **Shared retrieval cache**: Scoped by query, permissions, document version
- Agents consume same evidence set, avoiding duplicated **retrieval** and **reranking**

### Asynchronous messaging

- **Message brokers** (RabbitMQ, Kafka): Decouple agents, reduce wait times, support scale
- **Async message passing + task queues**: Replace synchronous chains for better throughput
- **Not**: only synchronous REST calls between agents (causes blocking)

### Stateless microservices for agent scaling

- Each agent as a stateless service → horizontal scaling
- State externalized to memory stores (Redis, vector DB)
- **Not**: monolithic agent with all state in-process

## Versioning and rollout

### Canary evaluation (agent-specific)

- Infrastructure health green ≠ agent quality green
- Canary must evaluate: **task success**, trajectory quality, **groundedness**, safety vs. baseline
- Ramp traffic only after quality gates pass
- **Not**: DNS check, container image size check, CPU check as quality gates

### Shadow deployment

- New version runs in parallel with production, responses logged but not served
- Enables comparison without user-facing risk
- Performance-based gating: auto-promote only when new version outperforms

### Model versioning and CI/CD

- **Semantic version tags**: Traceability, **rollback**, reproducibility
- **Centralized model registry**: Consistent versioning, auditing, compliance
- **Blue-green deployment**: Zero-downtime updates, safe **rollback**

## Common exam traps

1. **"Add more GPUs"** as first response to **latency**. Agent **latency** often comes from tool calls, **retrieval**, or queueing — not GPU saturation. Trace first, then decide.

2. **"One shared queue for all workloads."** Causes head-of-line blocking. Separate lanes for different workload profiles.

3. **"Infrastructure metrics = deployment health."** DNS, CPU, image size, uptime checks are necessary but not sufficient. Agent quality canaries are required.

4. **"Scale to zero to save cost."** LLM containers take minutes to load. Scale-to-zero creates terrible cold-start **latency** for the first user.

5. **"Disable batching to reduce latency."** Batching improves GPU throughput. The fix for **latency** is workload isolation, not disabling batching.

6. **"Move everything to CPU serving."** Not appropriate for LLM workloads. GPU inference is the correct platform.

7. **"Manual restart/scaling during peaks."** The exam expects automated scaling (HPA), not manual intervention.

## Must-know exam bullets

- **Trace spans** — for each step (inference, **retrieval**, tools, **guardrails**, queueing), identify bottleneck before optimizing
- **Separate serving lanes** — different batching/priority policies for real-time vs. batch workloads
- **Canary evaluation** — compares agent quality (**task success**, trajectory, **groundedness**, safety), not just infrastructure
- **Resilience stack** — timeouts, **bounded retries** with backoff, circuit breakers, bulkheads, and graceful degradation
- **Warm minimum replicas + predictive scaling** — cold-start mitigation
- **Shared retrieval cache** — scoped by query/permissions/version for multi-agent efficiency
- **Kubernetes Ingress + HPA + LoadBalancer** — standard deployment stack
- **Blue-green deployment** for zero-downtime updates and safe **rollback**
- **NIM** — fastest way to expose LLM/embedding/reranker as optimized API; **Triton** — multi-model **serving** with dynamic batching
- **TensorRT-LLM** — under **NIM**/Triton for throughput optimization (in-flight batching, paged KV cache)

## Hands-on checks / study prompts

1. An agent's p99 **latency** spikes. Walk through the tracing dimensions you'd check before touching hardware.
2. What's the difference between a **canary evaluation** for a web service vs. for an agent?
3. Draw the resilience stack for an external tool API that becomes slow.
4. Why is "scale to zero" a bad strategy for LLM agent deployments?
5. When would you use **NIM** directly vs. Triton vs. both together?

## Mock signals

Across the mock exams, deployment questions repeatedly test these durable ideas:

- **Trace before scaling**: split **latency** into inference, **retrieval**, tools, **guardrails**, queueing, and network spans.
- **Kubernetes production pattern**: containerized stateless services, Ingress/LoadBalancer, HPA, health checks, and **rollback**.
- **Serving choices**: **NIM** for supported model APIs; Triton for multi-model **serving**; **TensorRT-LLM** for LLM throughput/**latency** optimization.
- **Workload isolation**: real-time and batch workloads need separate queues, batching, and priority policies.
- **Resilience stack**: timeouts, **bounded retries**, backoff, circuit breakers, bulkheads, fallbacks, and idempotency for writes.
- **Rollout safety**: canary/shadow/blue-green deployment must include agent quality gates, not only infrastructure checks.

Evidence source: `mock_1` through `mock_5`, especially **latency** tracing, Kubernetes scaling, **NIM/Triton/TensorRT-LLM**, resilience, and rollout questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 13%
- **What it covers:** Deploy agent systems with model endpoints, tools, memory, **RAG**, queues, scaling, reliability, and rollout controls.
- **Use this section when:** Study this when questions ask how to productionize a multi-step agent workflow.
- **Common trap:** Scaling the LLM alone may not fix **latency** if sequential tools or **retrieval** calls dominate.
- **Scenario signal:** End-to-end **latency** or rollout risk comes from the whole agent chain: model calls, tools, **retrieval**, queues, caches, and quality gates.

### Study notes

- Agent **latency** is often a chain of model calls, **retrieval**, tools, memory, queues, and **guardrails**. Scaling the LLM endpoint alone may not fix a sequential workflow.
- Production deployment needs canaries, fallbacks, queues, timeouts, idempotent tool actions, observability, and tested **rollback** plans.
- Cache stable **retrieval**/tool results carefully; never cache mutation results, permission-sensitive results, or stale answers without metadata checks.
- **NIM as the deployment answer for agent backends**: **NIM** wraps each model (LLM, embedding, reranker) as an **optimized inference microservice** with a standard API endpoint. For agent systems, you deploy multiple **NIM** instances — one per model type — behind a unified routing layer. **NIM** handles model **inference optimization** (**TensorRT-LLM** under the hood) so the agent **orchestration** layer does not need to manage GPU scheduling.
- **Multi-model deployment pattern**: An agent typically needs at least three model types — an LLM for reasoning/generation, an embedding model for **retrieval**, and a reranker for result refinement. Deploy each as a separate **NIM** microservice. Route agent steps to the appropriate model: **retrieval** step calls embedding **NIM**, document scoring calls reranker **NIM**, final generation calls LLM **NIM**. Scale each independently based on demand.
- **Scaling considerations for agent workloads**: Agent requests have variable-length chains — one request may need 2 tool calls and another may need 15. This creates unpredictable **latency** distributions. Tool call **latency** is additive — each external API call adds 100-500ms. A 5-tool agent chain can add 1-2.5 seconds of pure tool **latency** before model inference. Plan capacity for the tail, not the median. Use async I/O and parallel tool calls (for independent reads) to reduce wall-clock time.
- **Caching strategies**: (a) Shared **retrieval** cache — scoped by query hash, user permissions, and document version. Multiple agents **serving** the same tenant can share **retrieval** results, eliminating redundant embedding and reranker calls. (b) Embedding cache — cache the embedding vectors for frequent queries so the embedding model call is skipped. (c) Tool response cache — for idempotent, deterministic tools (e.g., exchange rate lookup), cache results with a **TTL**. Never cache mutation results. Never cache across different permission levels (cache must be tenant-aware).
- **Request tracing across agent pipeline steps**: Deploy **distributed tracing** (OpenTelemetry) across every span: (1) classification/id routing, (2) **retrieval** query embedding, (3) vector DB search, (4) reranker call, (5) LLM inference, (6) each tool call, (7) guardrail checks, (8) response generation. Aggregate traces to identify which step contributes most to p95/p99 **latency**. Without tracing, you cannot distinguish between "model inference is slow" and "the **tool chain** is blocking."

### Must know

- **Distributed tracing by span**: instrument classification, **retrieval** embedding, vector DB search, reranker, LLM inference, each tool call, guardrail checks, response generation — identify bottleneck before optimizing
- **Span-level latency breakdown**: model inference time vs **retrieval** time vs tool API time vs guardrail time vs queue wait time — you can't fix what you don't measure
- **Separate serving lanes**: real-time (low **latency**, small batch) vs batch (high throughput, large batch) — different batching/queueing/priority policies — prevents head-of-line blocking
- **Queue depth**: monitored per lane — rising queue depth for real-time lane signals batch jobs bleeding in
- **Head-of-line blocking**: batch jobs in a shared queue delay real-time responses — fixed by workload isolation and **serving** lanes, not simply adding GPUs
- **Canary evaluation (agent-specific)**: compares **task success**, trajectory quality, **groundedness**, safety against baseline — NOT just DNS, CPU, image size, or uptime checks
- **Canary rollout**: deploy to small traffic fraction → compare quality against baseline → ramp only after quality gates pass
- **Shadow deployment**: new version runs parallel, responses logged but not served to users → compare without user-facing risk
- **Blue-green deployment**: two environments (old/new), switch traffic with zero downtime, safe **rollback** if quality gates fail
- **Resilience stack**: timeouts + **bounded retries** with **exponential backoff** + circuit breakers + bulkheads + graceful degradation — NOT global timeout increases or infinite retries
- **Circuit breaker**: stop calling failing dependency, fail fast, test periodically — prevents cascading failures
- **Bulkhead**: isolate thread pools so one slow dependency doesn't exhaust all workers
- **Warm minimum replicas**: preload model engines, readiness probes after warmup completes — prevents cold-start **latency**
- **Scale-to-zero trap**: LLM containers can take minutes to load — NOT appropriate for **latency**-sensitive **serving**
- **Kubernetes stack**: Ingress Controller (routing, SSL) + HPA (autoscaling) + LoadBalancer (external access) — standard production pattern
- **NIM**: fastest supported way to expose LLM/embedding/reranker as optimized API endpoints
- **Triton Inference Server**: multi-framework, multi-modal model **serving** with dynamic batching and ensemble support
- **TensorRT-LLM**: LLM **inference optimization** layer (in-flight batching, paged KV cache, kernel fusion, quantization) — operates under **NIM** or Triton
- **Shared retrieval cache**: scoped by query hash + permissions + document version — multi-agent efficiency without redundant embedding/reranker calls

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| **latency** spike in agent workflow, unknown cause | **distributed tracing** by span to isolate the bottleneck | adding GPUs before measuring |
| real-time chat delayed by batch/report jobs running in same queue | separate **serving** lanes with distinct batching, queueing, and priority policies | one shared queue for all workloads |
| new version rollout — infrastructure healthy but users report worse answers | **canary evaluation** comparing **task success**, trajectory quality, **groundedness**, safety against baseline | checking only CPU/GPU health, DNS, or container image size |
| cold-start **latency** on first request after scale-to-zero | warm minimum replicas + readiness probes after model warmup + predictive scaling | scale-to-zero for **latency**-sensitive LLM endpoints |
| dependency (tool API, **retrieval**) becoming slow or failing | per-component timeouts + **bounded retries** + circuit breakers + bulkheads + graceful degradation | global timeout increases or infinite retries |
| external tool API takes 30s, blocking all worker threads | per-component timeouts + bulkheads to isolate slow dependency | longer global timeouts tie up more resources |
| every agent independently retrieves same documents | shared **retrieval** cache scoped by query, permissions, document version | disabling **retrieval** to save cost |
| 100k daily users, only 5% need complex multi-step agents | intent/complexity routing: simple → cheap path, complex → full agent | all requests go through full agent workflow |
| multi-agent variable-length chains (2-15 tool calls) | plan capacity for tail **latency** (p95/p99), async I/O, and parallel independent reads | capacity planning for median **latency** only |
| model **rollback** needed after bad deployment | blue-green deployment with zero-downtime switch, quality gates before ramp | restarting services or switching to backup without investigation |
| embedding model saturated, LLM idle | independent scaling per model type (separate **NIM** per LLM/embedding/reranker) | uniform scaling across all components |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| **NIM** vs Triton vs **TensorRT-LLM** | **NIM** = packaged inference microservice (fastest way to expose a supported model as API). Triton = multi-framework model server (dynamic batching, ensembles, any model type). **TensorRT-LLM** = LLM inference optimizer (in-flight batching, paged KV cache, quantization) — operates under **NIM** or Triton. They're complementary, not alternatives. |
| **Canary evaluation** vs Infrastructure health checks | Infrastructure = CPU, GPU, memory, uptime, DNS (necessary, insufficient). Canary = **task success**, trajectory quality, **groundedness**, safety vs baseline. Infrastructure green does NOT mean the agent gives good answers. |
| Warm replicas vs Scale-to-zero | Warm replicas = models preloaded, readiness after warmup, low **latency**. Scale-to-zero = containers spin down when idle, cold start takes minutes. Scale-to-zero is wrong for **latency**-sensitive LLM endpoints. |
| **Serving** lanes vs Shared queue | Separate lanes = workload isolation, different priorities/batching per workload type. Shared queue = everything in one line, batch blocks real-time (head-of-line blocking). Separate lanes is the exam-correct pattern. |
| Circuit breaker vs Retry | Circuit breaker = stop calling failing dependency entirely, fail fast, test periodically. Retry = re-attempt the same call with backoff. Circuit breakers prevent cascading failure; retries handle transient failures. Use both in the resilience stack. |
| Blue-green deployment vs Canary deployment | Blue-green = two full environments, switch all traffic at once. Canary = gradual traffic ramp to new version with quality gates at each step. Canary is preferred for agents because quality must be validated incrementally. |
| HPA vs Predictive scaling | HPA = reactive, scales based on current load metrics. Predictive = schedules scale-up before known traffic peaks. Both are needed — HPA for baseline, predictive for peaks. |
| GPU utilization vs Agent **latency** | GPU utilization = hardware metric. Agent **latency** = end-to-end response time including tools, **retrieval**, queueing, and **guardrails**. Low GPU utilization with high **latency** means the bottleneck is probably outside GPU — **trace spans** to find it. |

### Mini scenario drill

1. Scenario: Real-time chat p99 **latency** worsens every night when batch report jobs start. GPU utilization stays at 60%. The team considers adding more GPUs.
   Best answer pattern: Separate **serving** lanes — real-time queue with low-**latency** batching and high priority, batch queue with throughput-optimized batching. Fix workload isolation, not hardware.
   Trap: Adding GPUs doesn't fix head-of-line blocking from batch jobs in a shared queue.

2. Scenario: A new agent version passes all infrastructure health checks — DNS resolves, container starts, CPU/GPU within range — but after full rollout, users report significantly worse answers and the escalation rate doubles.
   Best answer pattern: The rollout was missing **canary evaluation** — a canary should compare **task success**, trajectory quality, **groundedness**, and safety against the baseline on a small traffic fraction before ramp.
   Trap: Infrastructure metrics (DNS, CPU, container health) are necessary but not sufficient for agent quality validation.

3. Scenario: An external tool API used by an agent becomes intermittently slow (sometimes 30s response). Worker threads block waiting, and soon the entire agent service becomes unresponsive.
   Best answer pattern: Per-component timeouts (prevent blocking), **bounded retries** with **exponential backoff**, a circuit breaker (stop calling after N failures, test periodically), and bulkheads (isolated thread pool so one tool doesn't exhaust all workers).
   Trap: Increasing the global timeout or retrying infinitely — both tie up more resources and worsen the cascade.

### High-yield exam signals

- **Production rollout failure**: new agent version passes infrastructure checks but degrades answer quality because no **canary evaluation** compared **task success** against baseline
- **Tool bottleneck misdiagnosis**: **latency** is dominated by a slow external API call, but the team blames GPU inference and adds more GPUs
- **SLA violation**: end-to-end **latency** exceeds target because step-level SLAs for **retrieval**, LLM, and tools were never defined or monitored
- **Scaling blind spot**: LLM inference scales horizontally, but the **retrieval** database or tool dependency cannot handle increased traffic
- **Rollback gap**: new agent version has a bug but no blue-green deployment exists for safe **rollback** to the previous version without downtime
- **latency dominated by tool calls not LLM inference**
- **independent model scaling needs for LLM vs embedding vs reranker**
- **cache invalidation after document updates (stale retrieval)**
- **missing trace spans for non-LLM steps (tools, guardrails, queueing)**

### Hands-on checks

- Given a trace showing a 12-second agent request with unknown per-step breakdown, instrument each span (classification, **retrieval** embedding, vector DB search, reranker, LLM inference, each tool call, guardrail checks, response generation) and identify the bottleneck.
- Design a multi-model deployment for an agent: which **NIM** instances do you need, how do you route to each, and how do you scale each independently?
- Define cache policies for an agent stack: what gets cached (**retrieval**, embeddings, tool responses), at what scope (tenant, query, user), and with what **TTL**?
- Draw the distributed **trace spans** for a 5-step agent request: mark where **latency** could be hiding.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when questions ask how to productionize a multi-step agent workflow.
- The major trap pattern is: Scaling the LLM alone may not fix **latency** if sequential tools or **retrieval** calls dominate.
- Recurring local question themes include: tool execution safety, agent deployment and scaling, multi-agent coordination.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q22, mock_3 Q29, mock_4 Q25, mock_5 Q22** / `deploy-001`: An agent request triggers classification, **retrieval**, **reranking**, two LLM calls, and three external APIs. Users report high p99 **latency**. What is the first useful analysis? Correct idea: Break the request into traced spans for each step and identify whether **latency** is from model inference, **retrieval**, tools, guard.... Trap: More output **tokens** worsens **latency**.
- **mock_1 Q23, mock_2 Q24, mock_3 Q30, mock_4 Q26, mock_5 Q23** / `deploy-002`: A real-time chat agent and overnight report-generation agent use the same LLM. Chat p99 worsens when report jobs start. What deployment pattern should be used? Correct idea: Separate **serving** lanes/endpoints with different batching, queueing, and priority policies for real-time and batch workloads.. Trap: CPU **serving** is not appropriate for large LLM workloads.
- **mock_1 Q24, mock_2 Q25, mock_3 Q31, mock_4 Q27, mock_5 Q24** / `deploy-003`: A new agent version changes tool order and prompt templates. Infrastructure metrics look healthy, but users report worse answers. Which rollout gate was missing? Correct idea: A **canary evaluation** comparing **task success**, trajectory quality, **groundedness**, and safety against the baseline before ramping tr.... Trap: DNS does not validate agent quality.
- **mock_1 Q25, mock_2 Q26, mock_3 Q32, mock_4 Q28** / `deploy-004`: An enterprise team wants the fastest supported way to expose an LLM, embedding model, and reranker as APIs for an agent. Which NVIDIA layer is most appropriate? Correct idea: **NIM** microservices for optimized model APIs, potentially deployed on Kubernetes or called through hosted endpoints.. Trap: **NCCL** handles GPU communication.
- **mock_1 Q26, mock_2 Q27, mock_3 Q33, mock_4 Q29, mock_5 Q25** / `deploy-005`: A tool API used by an agent becomes slow and causes all worker threads to block. Which resilience pattern is most appropriate? Correct idea: Timeouts, **bounded retries** with backoff, circuit breakers, bulkheads, and graceful degradation or fallback data.. Trap: Long timeouts tie up resources.
- **mock_1 Q27, mock_2 Q28, mock_3 Q34, mock_4 Q30, mock_5 Q26** / `deploy-006`: A multi-agent research system scales poorly because every agent independently retrieves the same documents and calls the same reranker. What improves efficiency? Correct idea: Introduce shared **retrieval** results or a **retrieval** cache scoped by query, permissions, and document version, then let agents con.... Trap: **Reranking** may be needed for quality.
- **mock_1 Q28, mock_2 Q29, mock_3 Q35, mock_4 Q31, mock_5 Q27** / `deploy-007`: An agent must support 100k daily users, but only 5% ask complex multi-step questions. What routing strategy is best? Correct idea: Use intent/complexity routing: simple requests go to cheap deterministic or small-model paths; complex tasks go to the full age.... Trap: Random routing is not production control.
- **mock_2 Q30, mock_3 Q36, mock_5 Q28** / `deploy-008`: Autoscaling creates cold starts because model containers take minutes to load. What deployment mitigation is strongest? Correct idea: Maintain warm minimum replicas, preload model engines, use readiness checks only after warmup, and scale predictively for known.... Trap: Timeouts hide the problem.

</details>

<!-- STUDY_ENRICHMENT_END -->

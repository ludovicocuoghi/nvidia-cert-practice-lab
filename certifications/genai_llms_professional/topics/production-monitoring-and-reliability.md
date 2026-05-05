---
domain: Production Monitoring and Reliability
weight: 7
status: populated
---

# Production Monitoring and Reliability

## What to study first

- **Core idea:** Monitor quality, **latency**, **drift**, cost, errors, and reliability after release.
- **Use it when:** Study this when scenarios involve live systems, **alerts**, anomaly diagnosis, or model lifecycle operations.
- **Study first:** p50/p95/p99: — **latency** percentiles
- p99 means 99% of requests are faster than this value
- P95 **TTFT** is the key interactive metric
- drift: — input distribution shift (**embeddings** diverge from baseline) and output **quality regression** (scores trend down over time)
- cost per request: — (input tokens * input price + output tokens * output price) per request
- monitor trend and per-tenant breakdown
- quality regression: — **canary** query scores drop below threshold after a **deployment**
- block/**rollback**
- versioning: — every artifact (prompt, model, retriever index, guardrail config) must be versioned for reproducible incident analysis
- **Real trap:** Infrastructure uptime does not prove answer quality or grounding.

## Certification boundary

This page is the NCP-GENL exam lens for production LLM operations. Keep LLM-specific metrics, NIM/Triton/DCGM/Prometheus monitoring, reliability patterns, drift, logs, traces, and health checks here when they are tied to model serving. Agent-level task-success operations belong in Agentic AI General Study; NVIDIA operational cues stay here.

## Core ideas you must hold in your head

- **Monitoring LLMs** differs from traditional API **monitoring**. Beyond **latency** and error rates, you must track: token-level **metrics** (**TTFT**, **tokens/sec**), model-specific signals (**drift**, **hallucination** rate), and **safety** signals (**toxicity**, refusal rate).
- **Observability** requires three pillars: **logs**, **metrics**, and **traces**. **Logs** for debugging specific requests. **Metrics** (Prometheus) for aggregate trends and alerting. **Traces** (distributed tracing) for end-to-end request flow.
- **Reliability patterns** protect both the service and the model. Circuit breakers prevent cascading failures. Rate limiting protects **GPU** capacity. Graceful shutdown drains in-flight requests. **Health checks** enable orchestration.
- **Model drift** is the silent production killer. Input data distribution shifts, user behavior changes, and the world moves on. The model that passed **evaluation** 6 months ago may be degrading now.
- **NVIDIA's monitoring ecosystem** integrates with standard tools. Prometheus **metrics** from **Triton**/**NIM**; **GPU** **metrics** via DCGM; **logs** to any standard collector.

## Mental model

Production **monitoring** is the **ongoing** layer that catches problems **evaluation** missed:

```
Production System
    │
    ├── Health Checks ──→ Orchestration (k8s) knows if instance is alive
    ├── Metrics ────────→ Dashboards + Alerts (Prometheus + Grafana)
    ├── Logs ───────────→ Debugging + Audit (structured, correlation IDs)
    ├── Traces ─────────→ End-to-end request flow (distributed tracing)
    ├── Model Metrics ──→ Drift, hallucination, quality degradation
    └── Reliability ────→ Circuit breaker, rate limit, retry, graceful shutdown
```

## Core observability signals

### The Golden Signals (for LLMs)

| Signal | Traditional API | LLM-specific addition |
| ------ | --------------- | --------------------- |
| **Latency** | P50/P95/P99 response time | **TTFT** (Time To First Token), inter-token **latency**, total generation time |
| **Traffic** | Requests per second | Tokens per second, concurrent generations |
| **Errors** | HTTP 5xx rate | Model errors (OOM, **CUDA** errors), timeout rate, refusal rate |
| **Saturation** | CPU/memory % | **GPU** utilization, **GPU memory** %, **KV cache** utilization, batch **occupancy** |

### LLM-specific metrics

| Metric | What it measures | Alert when |
| ------ | ---------------- | ---------- |
| **TTFT (Time To First Token)** | **Latency** until first token appears | P95 > target (e.g., 500ms for interactive) |
| **Tokens per second (generation)** | Output token **throughput** | Below **SLA** (e.g., <20 tok/s for chat) |
| **GPU memory utilization** | How full **GPU memory** is | >90% (OOM risk) |
| **KV cache hit rate** | Prefix caching efficiency | Low hit rate → wasted compute |
| **Batch size / occupancy** | How many requests processed concurrently | Consistently at max (queuing) |
| **Queue depth** | Waiting requests | Growing → need more capacity or rate limiting |
| **Hallucination rate** | % of responses with unsupported claims | >acceptable threshold |
| **Refusal rate** | % of requests the model declines | Sudden spike → **safety** filter problem |
| **Output token distribution** | Distribution shift vs baseline | Significant change → possible model **drift** |

## Logging for LLM applications

### Structured logging requirements

- **Correlation ID** (`X-Request-ID`): Passed through all services; enables end-to-end request tracing
- **Prompt/response logging**: For debugging and quality analysis (ensure **PII** **redaction**!)
- **Token counts**: Prompt tokens + completion tokens for cost tracking
- **Model version**: Which model/config served the request
- **Latency breakdown**: Time spent in queue, inference, and post-processing

### What NOT to log

- Full prompts/responses containing **PII** (redact or use shorter hashed representations)
- API keys or credentials
- User-identifiable information unless required for business purpose
- Raw images/files (log references/**metadata** instead)

## Health checks and graceful shutdown

### Health check types

| Check | Purpose | **Kubernetes** probe |
| ----- | ------- | ---------------- |
| **Liveness** | Is the process running? | `livenessProbe` — restart if failed |
| **Readiness** | Is the model loaded and ready to serve? | `readinessProbe` — remove from service if failed |
| **Startup** | Has the model finished loading? | `startupProbe` — longer timeout for initial model load |

**Exam signal**: **Readiness probe** should check if the model is loaded in **GPU memory**. Liveness should check if the server process is alive. Startup probe handles the 30-60 second model loading phase.

### Graceful shutdown

1. Receive SIGTERM
2. Stop accepting new requests (fail **readiness probe**)
3. Drain in-flight requests (wait up to `terminationGracePeriodSeconds`)
4. Unload model from **GPU**
5. Exit

**Exam signal**: "How to deploy a new model version without dropping requests?" → Graceful shutdown with connection draining + blue-green or **rolling update**.

## Reliability patterns

### Circuit breaker

After N consecutive failures within a time window, the circuit "opens" and requests immediately fail (without calling the failing service). After a timeout, it goes to "half-open" — one test request; if it succeeds, close the circuit; if it fails, stay open.

| State | Behavior |
| ----- | -------- |
| **Closed** | Normal operation; count failures |
| **Open** | Fail fast; don't call failing service |
| **Half-open** | Allow one test request to probe recovery |

### Rate limiting

| Algorithm | How it works | When right |
| --------- | ------------ | ---------- |
| **Token bucket** | Tokens refill at fixed rate; each request consumes a token | Smooth bursts allowed; consistent average rate |
| **Sliding window** | Count requests in last N seconds | Strict per-window limits |
| **Fixed window** | Count requests in current time bucket | Simplest; allows burst at boundary |
| **Concurrency limit** | Cap concurrent in-flight requests | **GPU** inference (limited by batch capacity) |

**Exam signal**: For LLM inference, concurrency limits are often the most important — **GPU memory** and batch capacity limit how many requests can run simultaneously.

### Retry patterns

- **Exponential backoff**: Wait 1s, 2s, 4s, 8s... between retries
- **Jitter**: Add random variation (±25%); prevents thundering herd
- **Max retries**: 3 is common; stop before degrading user experience
- **Retry only on retryable errors**: 429 (rate limit), 503 (temporary unavailable) — retry. 400 (bad request), 401 (unauthorized) — don't retry.

### Additional patterns

- **Bulkhead**: Isolate critical resources; one tenant's surge doesn't affect others
- **Timeouts**: Set client-side timeouts shorter than server-side; cancel inference on client disconnect
- **Idempotency**: Same request → same result; enables safe retries for mutation operations
- **Backpressure**: Signal upstream when overloaded; throttle gracefully

## Infrastructure and scaling

### Prometheus + Grafana

- **Prometheus**: Pulls **metrics** from instrumented services; time-series database; PromQL query language
- **Grafana**: **Dashboard** and alerting on top of Prometheus (and other data sources)
- **NVIDIA DCGM (Data Center GPU Manager)**: Exports **GPU** **metrics** (utilization, memory, **temperature**, power) to Prometheus
- **Triton/NIM metrics**: Built-in Prometheus endpoints for inference **metrics**

### Scaling for reliability

| Strategy | What it does | Reliability benefit |
| -------- | ------------ | ------------------- |
| **Horizontal scaling** | More instances behind load balancer | Redundancy; one instance failure doesn't take down service |
| **Auto-scaling** | Dynamic instance count based on **metrics** | Handles traffic spikes; saves cost at low load |
| **Multi-AZ (Availability Zone)** | Distribute across data center zones | Survives single zone failure |
| **Multi-region** | Deploy in multiple geographic regions | Disaster recovery; lower global **latency** |
| **Overprovisioning** | Keep N% buffer capacity | Handles unexpected spikes without auto-scale delay |

**Exam distinction**: Horizontal scaling = add more instances (stateless required). Vertical scaling = bigger **GPU**. Auto-scaling = dynamic horizontal scaling based on **metrics**. Multi-region = different failure domains.

## Data and model drift monitoring

| **Drift** type | What changes | Detection method |
| ---------- | ------------ | ---------------- |
| **Data drift** | Input distribution changes (e.g., new topics, languages) | Compare input **embeddings** over time; statistical tests |
| **Concept drift** | Same input means something different (e.g., "booster" meant vaccine → now means rocket) | Monitor prediction shifts on fixed reference set |
| **Label drift** | Output distribution shifts | Compare output token distributions vs baseline |
| **Model degradation** | Quality **metrics** decline | Regular **evaluation** on held-out test set or live **sampling** |

**Exam signal**: "Our model's accuracy is declining in production even though the model hasn't changed" → Data or **concept drift**. Re-evaluate on recent data; consider retraining.

## Decision traps worth remembering

1. **CPU/memory monitoring** — **GPU** utilization, **GPU memory**, and Tensor Core utilization are the critical **metrics**. CPU is secondary.

2. **Liveness vs readiness** — Liveness = is the process alive? Readiness = can it serve requests? (model loaded, **GPU** available). Failing liveness leads to restart; failing readiness removes from service.

3. **Retry on failure** — Don't retry on 4xx client errors. Use exponential backoff + jitter. Limit to 3 retries. Retrying too aggressively amplifies load on a struggling service.

4. **Auto-scaling** — **GPU** instances have 30-60s cold start (model loading). Need pre-warming, overprovisioning, or request queuing during scale-up.

5. **Log everything** — Logging full prompts/responses without **PII** **redaction** is a **privacy** and **compliance** risk. Be selective and structured.

6. **Circuit breaker** — A timeout waits. A circuit breaker actively stops requests after detecting failure, preventing cascading failures. They serve different purposes.

7. **Correlation IDs** — Without them, tracing a request across services in a distributed system is nearly impossible. They're essential for debugging.

## Must-know exam bullets

- **Three pillars** — **Logs** + **Metrics** + **Traces**; **logs** for debugging, **metrics** for alerting, **traces** for end-to-end flow
- **TTFT** — Time To First Token; key UX metric for streaming; P50/P95/P99
- **Readiness probe** — checks model loaded in **GPU**; separate from liveness (process alive)
- **Circuit breaker** — closed → open (fail fast) → half-open (probe); prevents cascading failures
- **Exponential backoff + jitter** — for retries; prevents thundering herd
- **Rate limiting** — token bucket for average rate; concurrency limit for **GPU** capacity
- **Graceful shutdown** — stop accepting + drain in-flight + unload + exit
- **Correlation IDs** — in every request; distributed tracing backbone
- **Prometheus + DCGM** — for **GPU** **metrics**; utilization, memory, **temperature**, power
- **Data drift / concept drift** — **data drift** = input distribution shift; **concept drift** = meaning change; both degrade model silently
- **Cold start** — 30-60s for **GPU** model loading; pre-warming or overprovisioning needed
- **Horizontal scaling** — needs stateless services; state externalized to cache/DB

## Hands-on checks

1. Design the health check endpoints for a **Triton** server **serving** an LLM. What does each probe check?
2. Your **P95 latency** suddenly spikes but P50 stays the same. Where do you look?
3. A downstream service is failing intermittently. Should you add retries, a circuit breaker, or both? Explain.
4. How do you detect that a chat model deployed 3 months ago is hallucinating more frequently now?
5. You need to deploy a new model version without any dropped requests. Walk through the **deployment** sequence.

## Key terms to memorize

- **TTFT (Time To First Token)** — **latency** from request to first output token; key streaming UX metric
- **Liveness probe** — is the process running? **Kubernetes** restarts on failure
- **Readiness probe** — is the model loaded and ready to serve? Removes from service on failure
- **Startup probe** — extra time for initial model loading (30-60s); prevents premature liveness kill
- **Graceful shutdown** — stop accepting, drain in-flight, unload model, exit
- **Circuit breaker** — closed → open (fail fast) → half-open (probe) → closed or open
- **Rate limiting** — token bucket, sliding window, concurrency limit; protect **GPU** capacity
- **Exponential backoff + jitter** — retry delay increases exponentially with random variation
- **Correlation ID** — unique identifier passed through all services; enables distributed tracing
- **Prometheus** — pull-based time-series **monitoring**; PromQL queries
- **Grafana** — dashboards and alerting on Prometheus data
- **DCGM (Data Center GPU Manager)** — NVIDIA **GPU** **metrics** exporter
- **Data drift** — input distribution changes over time; detected via embedding comparison
- **Concept drift** — same input, different meaning; detected via prediction shift
- **Horizontal Pod Autoscaler (HPA)** — **Kubernetes** auto-scaling based on **metrics**
- **Cold start** — **GPU** model loading **latency** on new instance (30-60s)
- **Bulkhead** — isolate resources; one tenant's surge doesn't affect others
- **Backpressure** — signal upstream to slow down when overloaded

### Top decision traps
- **GPU metrics primary** → **GPU** **metrics** (util, memory, Tensor Core) are primary for LLMs
- **Liveness vs readiness** → liveness = alive; readiness = can serve (model loaded)
- **Retry with backoff** → don't retry 4xx; use backoff + jitter; limit retries
- **Auto-scaling cold start** → **GPU** cold start is 30-60s; need pre-warming
- **Structured logging** → structured, **PII**-redacted **logs**; correlation IDs; selective
- **Circuit breaker vs timeout** → breaker actively stops calling; timeout just waits

## Mock signals

Across the mock exams, production reliability questions repeatedly test these durable ideas:

- **Observability layers**: **metrics**, **logs**, **traces**, correlation IDs, dashboards, and **alerts** answer different questions.
- **LLM-specific metrics**: **TTFT**, **tokens/sec**, p95/**p99 latency**, **GPU memory**, Tensor Core utilization, **moderation** rate, and quality **drift** matter.
- **Health checks**: liveness means process alive; readiness means model loaded and able to serve.
- **Resilience controls**: retries with backoff/jitter, circuit breakers, rate limits, graceful shutdown, and service mesh policies.
- **Scaling**: not instant — **GPU** model loading and cold starts require pre-warming and careful **autoscaling**.
- **Safety in production**: **moderation**, **evaluation** pipelines, **drift** checks, and feature flags keep changes reversible.

Evidence source: `mock_2` through `mock_5`, especially production **moderation**, HPA/**autoscaling**, CI/CD, feature flags, distributed tracing, **health checks**, circuit breakers, rate limiting, and Prometheus/Grafana questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 7%
- **What it covers:** Monitor quality, **latency**, **drift**, cost, errors, and reliability after release.
- **Use this section when:** Study this when scenarios involve live systems, **alerts**, anomaly diagnosis, or model lifecycle operations.
- **Common trap:** Infrastructure uptime does not prove answer quality or grounding.
- **Recognition clues:** A release lowers **p99 latency** but increases **hallucination** and refusal rates.

### Study notes

- **Observability**: rests on three pillars: **metrics**, **logs**, and **traces**. **Metrics** (time-series, e.g., Prometheus) give aggregate trends and drive **alerts** — P50/P95/**P99 latency**, **GPU** utilization, error rates, **throughput**. **Logs** record individual request/response pairs with structured fields (correlation ID, model version, token counts, **latency** breakdown) for debugging and audit. **Traces** (distributed tracing via OpenTelemetry, Jaeger, Zipkin) track a single request across every service hop — API gateway, auth, **router**, LLM inference, post-processing, guardrail checks. For LLM systems, you need all three: **metrics** tell you something is wrong, **logs** tell you which request failed, **traces** tell you where in the pipeline it failed.
- **SLA dimensions**: LLM endpoints have unique dimensions beyond traditional APIs. **TTFT** (Time To First Token) p95: the 95th percentile **latency** from request submission to first output token appearing. For interactive chat, p95 **TTFT** should stay under 500ms — longer than 2s feels broken. TPOT (Time Per Output Token) p95: inter-token **latency** during generation, typically 15-30ms/token for optimized inference. Availability: percentage of requests that complete without error (target 99.9%+), counting only "model produced a valid response" — timeouts, OOMs, and **CUDA** errors count as downtime. The key exam insight: a system can have 99.99% API availability (server always responds) but terrible LLM quality (always hallucinates). Monitor the model-level **SLA**, not just infrastructure uptime.
- **Distributed tracing**: essential for multi-step agent pipelines. An agent call may involve: intent classification -> tool selection -> retriever call -> LLM reasoning -> tool execution -> final generation. Without a single correlation ID threaded through every step, diagnosing which sub-call failed or timed out is nearly impossible. Implement a trace context propagator that passes the correlation ID across HTTP headers, message queues, and async callbacks. Each span records: operation name, start/end timestamps, input/output sizes, and error status. The full trace enables you to compute per-step **latency** percentiles and identify which agent step is the bottleneck.
- **RAG monitoring**: **retrieval**-specific **monitoring** in addition to generation **metrics**. **Recall@k** **drift**: track **recall**@5 over time on a fixed **canary** set of queries with known relevant documents — a drop signals that new ingested documents are pushing relevant ones out of the top results. **Retrieval** score distribution: the distribution of similarity scores returned by the **vector search**; a narrowing distribution suggests embedding collapse or index quality degradation. **Faithfulness** degradation: the fraction of generated claims that are not entailed by retrieved context, measured periodically via **LLM-as-judge** or NLI classifier. If **faithfulness** drops while the retriever looks healthy, check the generator (model update, prompt change, **context window** issue). If retriever scores drop, the problem is upstream.
- **Canary queries**: fixed prompt set with known expected outcomes. A **canary** set of 50-200 diverse prompts (factual, multi-step, **safety**-edge-case, formatting) is run against every **deployment** before it reaches production traffic. Each response is scored against expected patterns (regex, **LLM-as-judge**, or **exact match** for deterministic tasks). If **canary** scores drop below threshold, the **deployment** is blocked or rolled back. **Canary** queries should be versioned alongside the model and updated when known failure modes are discovered. This catches **quality regression** before real users experience it.
- **Drift detection**: covers both input and output sides. Input distribution shift: the embedding centroids of user queries shift from the training distribution. Detect by computing the mean embedding of production queries over a sliding window (e.g., 1 hour) and comparing to a baseline via cosine distance or MMD (Maximum Mean Discrepancy). Output **quality regression**: the distribution of output scores (helpfulness, **safety**, formatting **compliance**) trends downward over time. Detect via periodic **evaluation** on a held-out set or using **canary** queries. The model hasn't changed — the world has. New topics, new terminology, new user behaviors all cause **drift**.
- **Incident response**: **hallucination** spikes should start with the retriever. When a **hallucination** spike is detected (via **faithfulness** **monitoring** or user reports), the first diagnostic step is: check whether the retriever is returning empty, low-relevance, or truncated results. A **RAG** breakdown (empty context) forces the model to generate from parametric knowledge alone, which increases **hallucination** risk. Second: check whether any **deployment** changed — model version, embedding model, retriever index, **chunking** strategy, or prompt template. Third: check input distribution — are users suddenly asking about topics outside the knowledge base? Correlation IDs make this forensic trace possible: grab a few hallucinated request IDs, follow their trace, and see exactly what context was retrieved.
- **Correlation IDs**: the single most important logging investment. Every request entering the system gets a unique `X-Request-ID` (UUID). This ID is passed as a header to every downstream service, included in every log line, attached to every metric tag, and used as the trace root for distributed tracing. Without correlation IDs, you cannot connect a user complaint to a specific set of log lines, trace a **latency** spike to a specific service hop, or compute per-request cost. They are cheap to generate and invaluable for debugging — never skip them.

- Monitor both system **metrics** and model quality: **latency**, errors, **throughput**, token cost, refusal rate, **hallucination** rate, **drift**, and feedback.
- Version prompts, models, **retrieval** indexes, and guardrail policies so incidents can be reproduced.
- A reliable LLM system needs fallbacks, alerting, replay, and **evaluation** after every meaningful change.

### Must know

- **p50/p95/p99** — **latency** percentiles; p99 means 99% of requests are faster than this value; P95 **TTFT** is the key interactive metric
- **drift** — input distribution shift (**embeddings** diverge from baseline) and output **quality regression** (scores trend down over time)
- **cost per request** — (input tokens * input price + output tokens * output price) per request; monitor trend and per-tenant breakdown
- **quality regression** — **canary** query scores drop below threshold after a **deployment**; block/**rollback**
- **versioning** — every artifact (prompt, model, retriever index, guardrail config) must be versioned for reproducible incident analysis
- **Observability pillars** — **metrics** (Prometheus aggregates), **logs** (structured per-request), **traces** (distributed request flow via OpenTelemetry)
- **SLA dimensions** — **TTFT** p95 (<500ms interactive), TPOT p95 (15-30ms/token), availability % (99.9%+ valid completions, not just HTTP 200)
- **RAG monitoring** — **recall@k** on **canary** set, **retrieval** score distribution, **faithfulness** degradation (claims not entailed by context)
- **Canary queries** — fixed 50-200 prompt set with expected patterns; scored pre-**deployment** to block regressions
- **Incident response** — **hallucination** spike: check retriever first (empty/low-relevance context), then **deployment** changes, then input distribution
- **Correlation ID** — unique `X-Request-ID` per request; threaded through all services, **logs**, **metrics**, and **traces**

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Latency spike in live traffic | Metrics, logs, and traces with correlation IDs | Looking only at average latency |
| Interactive chat feels slow | **TTFT** and inter-token latency percentiles | Only measuring total request time |
| GPU memory/queue alerts | KV cache, batch size, queue depth, scaling/rate limits | Treating every alert as model quality drift |
| Hallucination spike in RAG | Check retriever results, index changes, prompt/model versions | Fine-tuning before checking retrieved context |
| Subtle quality regression | Fixed **canary** prompt set with rolling eval | Waiting for user complaints |
| New model rollout | Canary, feature flags, rollback, quality gates | One-way deployment with no rollback path |
| Input distribution changes | Drift detection on embeddings and recent samples | Assuming the model broke without evidence |
| Regulated logging | Structured metadata, redacted prompts, model/prompt versions | Logging raw PII for convenience |
| Multi-service timeout | Distributed trace to find the slow hop | Debugging each service in isolation |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **Metrics** vs **logs** vs **traces** | Metrics show aggregate trends; logs show request details; traces show request path across services. |
| Uptime vs model quality | HTTP success does not prove the answer is grounded, safe, or helpful. |
| **Drift** vs deployment regression | Drift means traffic/world changes; regression means a new artifact made behavior worse. |
| **Canary** queries vs canary deployment | Canary queries are fixed tests; canary deployment is small real traffic rollout. |
| **TTFT** vs throughput | TTFT measures responsiveness; throughput measures served tokens/requests per unit time. |
| Rollback vs retry | Rollback reverts a bad release; retry handles transient failures. |
| Raw logs vs audit logs | Audit logs should preserve traceability while minimizing sensitive content. |

### Mini scenario drill

1. Scenario: P95 TTFT jumps from 400ms to 2s after traffic doubles.
   Best answer pattern: Inspect queue depth, batching, prompt length, prefill bottleneck, and traces by correlation ID.
   Trap: Looking only at model accuracy metrics.

2. Scenario: A RAG assistant suddenly hallucinates after a document index update.
   Best answer pattern: Check recall@k, retrieval score distribution, chunk metadata, and index/version changes first.
   Trap: Blaming the language model without inspecting retrieval.

3. Scenario: A canary model has normal HTTP health but lower helpfulness scores.
   Best answer pattern: Stop rollout and rollback using versioned model/prompt/retriever artifacts.
   Trap: Proceeding because liveness/readiness probes are green.

### What to recognize

- **Live incident**: **P95 latency** spikes or error rate jumps → inspect **metrics** (Prometheus), **logs** (correlation ID for affected requests), and **traces** (OpenTelemetry) to identify which service hop failed.
- **Canary deployment quality check**: New model version deployed to 5% traffic → monitor LLM-specific quality **metrics** (**faithfulness** scoring, **LLM-as-judge**, output distribution comparison) before increasing traffic share.
- **Alert triggered**: **GPU memory** >90% or queue depth growing → check for OOM risk (**KV cache** fragmentation, batch size spikes), consider scaling up or rate limiting.
- **Drift detected**: Input embedding centroids shifting from baseline → **data drift** (new topics/languages) or **concept drift** (same inputs, different meaning); re-evaluate model on recent data; consider retraining.
- **Rollback needed**: New **deployment** shows **quality regression** → revert to previous model version; ensure all artifacts (model, prompt, config, retriever index) are versioned together for reproducible **rollback**.
- **Distributed trace shows bottleneck**: One service hop dominates **latency** → identify the slow sub-call (retriever, guardrail, LLM inference) and optimize or scale that component independently.
- **RAG retrieval degradation**: **Recall@k** dropping on **canary** set → check for embedding **drift**, index quality issues, or new documents pushing relevant results out of **top-k**; investigate **retrieval** score distribution.
- **TTFT SLA violation**: P95 **TTFT** exceeds 500ms for interactive chat → check for long prompts without chunked prefill, insufficient parallelism for prefill processing, or queuing delays at high concurrency.

### Hands-on checks

- Create a **dashboard** with one row each for reliability, cost, quality, **safety**, and **retrieval** health.
- A P95 **TTFT** spike from 400ms to 2s occurred. Walk through which pillars (**metrics**, **logs**, **traces**) you inspect at each step and what you look for.
- Given a **hallucination** spike in production: list the first three diagnostic checks in priority order and explain why each order matters.
- Design a **canary** query set for a **RAG**-based customer support LLM. Include at least 3 query categories and explain how you'd score each.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when scenarios involve live systems, **alerts**, anomaly diagnosis, or model lifecycle operations.
- The major trap pattern is: Infrastructure uptime does not prove answer quality or grounding.
- Recurring local question themes follow the key ideas: **drift**, **SLA**, **logs**, **quality regression**, **versioning**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_3 Q37** / `m2-037`: What are the best practices for **monitoring** and logging in production LLM deployments? Correct idea: Implement structured logging, track key **metrics** such as **latency**, **throughput**, error rates, **GPU** utilization, collect input/output.... Trap: This suggests storing all prompts and responses verbatim in plain text, which violates **privacy** best practices and dat...
- **mock_5 Q24** / `m4-024`: When implementing observability for LLM applications, what is distributed tracing and why is it valuable? Correct idea: A technique to track a single user request as it flows through multiple services, helping identify bottlenecks and debug failures. Trap: Distributed tracing tracks a request across multiple services for debugging and performance analysis, not describes a...
- **mock_6 Q36** / `m5-036`: Multiple answers: When implementing logging for an LLM inference service, what information should be logged for each request to enable effective debugging and monitori... Correct idea: Use structured logging in JSON format with consistent fields to enable automated parsing, aggregation, and integration with cen.... Trap: Option A describes "Raw **GPU memory** dumps" but the question asks about Multiple answers: When implementing logging for...
- **mock_6 Q37** / `m5-037`: What is the purpose of implementing request or response correlation IDs in a distributed LLM service architecture? Correct idea: To track a single request across multiple services and components, enabling end-to-end tracing and debugging. Trap: Option B describes "To cache responses using the correlation ID" but the question asks about What is the purpose of i...
- **mock_6 Q38** / `m5-038`: What is Prometheus and how is it typically used in **monitoring** LLM services? Correct idea: A time-series database and **monitoring** system that collects and stores **metrics**, typically used to track request rates, latencies.... Trap: Option A describes "A framework for building LLM applications" but the question asks about What is Prometheus and how...
- **mock_1 Q42** / `mon-001`: Subtle **quality regression** in production — output is fluent but slowly becoming less helpful. Which **monitoring** approach catches this earliest? Correct idea: Continuous **evaluation** on a fixed **canary** prompt set with rolling **LLM-as-judge** or rule-based scoring, alerting on distributional....
- **mock_1 Q43** / `mon-002`: Defining SLAs for an LLM endpoint — which **latency** metric is most informative for chat UX? Correct idea: p95/p99 time-to-first-token (**TTFT**) and inter-token **latency**, not just average end-to-end.
- **mock_1 Q44** / `mon-003`: A model-routing tier sends easy queries to a small fast model and hard queries to a large model. The largest cost-quality optimization comes from: Correct idea: Calibrating the **router** on held-out traffic so the small-model **precision** (correct on easy queries) is high; mistakes here force....
- **mon-004** / `mon-004`: A **RAG** system's retriever quality degrades as new documents are ingested. Which **monitoring** signal detects this earliest? Correct idea: **Retrieval**-side **metrics** — **recall@k** on a labeled held-out set, plus distribution of **retrieval** scores over time and **faithfulness** o....
- **mon-005** / `mon-005`: For an LLM endpoint **serving** a regulated industry, what is the most critical *logging* design decision? Correct idea: Log enough **metadata** for audit (model version, prompt hashes, response IDs, policy decisions) while redacting **PII** at the boundar....
- **mon-006** / `mon-006`: A multi-region LLM **deployment** needs failover. Which mechanism is most appropriate at the model layer? Correct idea: Health-checked replicas behind a load balancer with automatic regional failover, plus identical model versions/configs to avoid....
- **mon-007** / `mon-007`: **Hallucination** spike detected in production **logs**. Highest-priority diagnostic step? Correct idea: Check whether the retriever is returning empty/low-relevance results (**RAG** breakdown) and whether any **deployment** changed (model,....

</details>

<!-- STUDY_ENRICHMENT_END -->

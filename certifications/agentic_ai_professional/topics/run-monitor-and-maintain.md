---
domain: Run, Monitor, and Maintain
weight: 5
status: populated
---

# Run, Monitor, and Maintain

## Certification boundary

This page is the NCP-AAI exam lens for operations. Keep monitoring, drift, incident, and maintenance knowledge as it applies to deployed NVIDIA-oriented agentic systems. The reusable concept home is `Agentic AI General Study -> Observability, Operations, and Cost`; NVIDIA profiling and platform-operation cues stay here.

## Core ideas you must hold in your head

- **GPU utilization** is not the whole story. Agent **latency** often comes from non-GPU components: external API calls, **retrieval**, queueing, guardrail processing. Tracing every span reveals the real bottleneck.
- **Silent quality regressions** are the most dangerous. Uptime can be green while **retrieval** quality tanks after an index update. **Canary queries**, recall@k tracking, and **faithfulness drift detection** are essential.
- **Logs for audit; privacy for users.** Versioned prompt/model/tool IDs, workflow state transitions, document IDs with hashes, and redacted user content — not raw full prompts stored forever, and not "no logs because **privacy**."
- **Agent-specific metrics** for monitoring dashboards: P95 **latency**, **TTFT**, user satisfaction trends, failure rates, escalation rates — not just GPU temperature or training epoch counts.

## Mental model

Run, Monitor, and Maintain covers the **ongoing operation** of deployed agents:
```
[Agent in production]
      ↓
[Telemetry: traces, logs, metrics] → [Dashboards: latency, quality, cost, errors]
      ↓                                      ↓
[Alert on drift/regression] → [Diagnose root cause] → [Fix or rollback]
      ↓
[Regular maintenance: refresh indexes, update embeddings, retrain]
```

## Monitoring dimensions

### What to monitor (beyond infrastructure)

| Dimension | Metrics | Why |
| --------- | ------- | --- |
| **Latency** | P50/P95/P99 end-to-end, Time to First Token (**TTFT**), per-span **latency** | Multi-component — must isolate bottleneck |
| **Throughput** | Requests/second, concurrent users, queue depth | Capacity planning, autoscaling triggers |
| **Quality** | **Task success** rate, **faithfulness** scores, recall@k, user satisfaction trends | Infrastructure green ≠ quality green |
| **Cost** | **Tokens** per task, tool calls per task, GPU-hours per task, **cost per completed task** | Efficiency tracking |
| **Errors** | Failure rate by component, timeout rate, fallback trigger rate | Reliability tracking |
| **Escalation** | Escalation rate, **escalation precision/recall**, reviewer workload | **Human-in-the-loop** health |
| **Drift** | **Retrieval** score drift, output distribution shift, new-topic emergence | Early warning for silent regressions |

### TTFT (Time to First Token)

- Captures delay between user prompt and first generated token
- Directly correlates with perceived responsiveness in real-time applications
- More informative for user experience than total generation time alone

### Agent-specific latency analysis

- **Distributed tracing**: Follow request paths across system components — identify **latency** spikes, failures, retries, bottlenecks
- **Span-level breakdown**: Model inference time vs. **retrieval** time vs. tool API time vs. guardrail time vs. queue wait time
- **First diagnostic step**: Check resource utilization and inference load metrics — not immediate model retraining
- **Not**: GPU utilization alone (misses **tool/orchestration latency**), model perplexity (not **latency**), daily active users (not bottleneck analysis)

## Retrieval quality monitoring

- **Canary queries with expected source documents**: Run known queries, verify correct documents appear in results
- **Recall@k tracking**: Monitor whether relevant documents appear in top-k over time
- **Faithfulness scoring drift**: Track whether claims remain supported by evidence
- **Alert on retrieval score regression**: After index updates, after embedding model changes
- **Not**: GPU memory usage (irrelevant), uptime checks (green ≠ good **retrieval**), document count (quantity ≠ quality)

## Logging for audit and incident response

### What to log

- **Versioned identifiers**: Prompt version, model version, tool configuration version
- **Workflow state transitions**: What state did the agent enter/exit, when, and why
- **Tool-call metadata**: Which tool, arguments (redacted if sensitive), response status, **latency**
- **Policy decisions**: Guardrail triggers, content filter actions, escalation reasons
- **Retrieval document IDs with hashes**: Which documents were retrieved and fed to the LLM
- **Redacted user content**: **PII** and sensitive content removed or hashed

### What NOT to do
- Store raw full prompts and responses forever (**privacy** risk + storage cost)
- No logs at all because "**privacy** matters" (prevents incident investigation)
- Only container restart counts (insufficient for diagnosis)

### Log integrity
- **Cryptographically hashed and write-once logs**: **Tamper-evident**, immutable — essential for regulated environments
- **Not**: editable by administrators, generated only on abnormal activity, stored with no access restrictions

## Incident response and diagnosis

### When latency spikes

1. Check resource utilization and inference load metrics (GPU, CPU, memory)
2. Analyze telemetry data from monitoring dashboards
3. Review logs and trace timelines across inference pipeline using **distributed tracing** tools
4. Compare against baseline (A/B testing dashboards for recent version changes)
5. **Not**: immediately retrain model, upgrade hardware without investigation, disable logging

### When a prompt/model release causes issues

- Compare **canary evaluation** results (**task success**, trajectory quality, **groundedness**, safety) against baseline
- Review structured logs with timestamps, error codes, correlation IDs
- Roll back if quality gates fail
- **Not**: restarting services as first action (loses diagnostic state), switching to backup without investigation

### Intermittent failures

- Check system logs and error messages using centralized logging (ELK stack, NVIDIA Fleet Command)
- Structured logs with correlation IDs to track requests across services
- **Not**: rebooting server immediately, relying on user complaints, switching models without diagnosis

## Ongoing maintenance

### RAG maintenance

- **Regularly refresh vector store and re-index new knowledge documents**: Stale indexes cause response quality decline
- **Regenerate embeddings when content updates**: Outdated embeddings return irrelevant results
- **Not**: deleting older logs to optimize storage (loses **audit trail**), ignoring knowledge base updates

### Automated retraining

- Retraining with recent interaction data keeps agent relevant as user behavior evolves
- Especially important in dynamic domains (retail, customer preferences)
- **Structured feedback loop**: Collect contextual feedback → retrain periodically → evaluate → deploy if improved

### Model versioning and drift detection

- **Telemetry tracking prediction accuracy and data quality over time**: Proactive **drift detection**
- **Centralized model registry**: Version traceability, **rollback** capability
- **Not**: relying solely on user complaints, disabling monitoring for **latency**, automatic daily retraining without **evaluation**

## Dashboards

### Essential dashboard components
- User satisfaction score trends and failure rates (direct user-impact indicators)
- **P95/TTFT latency** over time
- Task completion rate by intent/category
- GPU utilization + memory (but not as the only metrics)
- Escalation rate and reviewer workload
- Cost per task trends
- Agent uptime percentage over rolling 30-day window

### What NOT to put on an agent health dashboard
- Daily Git commit count (developer activity, not system health)
- GPU fan speed statistics (hardware telemetry, not agent quality)
- Number of training epochs from initial training (historical, not operational)

## Common exam traps

1. **GPU utilization sufficient:** "GPU utilization is sufficient for diagnosis." Agent **latency** often comes from tools, APIs, or **orchestration** — not GPU. **Trace spans**, don't just watch GPU.

2. **Only uptime checks:** "Only uptime checks needed." Uptime can be 100% while the agent gives wrong or hallucinated answers. Quality monitoring is separate from availability monitoring.

3. **No logs for privacy:** "No logs because of **privacy**." The exam expects structured, versioned, redacted logging — not binary choices between "log everything forever" and "log nothing."

4. **Restart first:** "Restart/reboot as first diagnostic step." That destroys the evidence. Monitor, trace, log, and diagnose first.

5. **Delete logs:** "Delete old logs to optimize storage." Logs are the **audit trail**. Deleting them compromises compliance and incident investigation.

6. **Auto-retrain without eval:** "Automatic daily retraining without **evaluation**." Retraining must be evaluated before deployment. Automatic retraining without quality gates risks degrading production.

7. **Indexed doc count as metric:** "Number of indexed documents as quality metric." Document count says nothing about relevance or correctness. Recall@k and **faithfulness** are the quality metrics.

## Must-know exam bullets

- **Distributed tracing:** across all spans (inference, tools, **retrieval**, **guardrails**, queueing) — identify bottleneck before acting
- **Canary queries + recall@k + faithfulness scoring:** catch silent **retrieval** regressions
- **Structured, versioned, redacted logs:** with cryptographic hashing for audit integrity
- **TTFT:** key **latency** metric for real-time agent responsiveness
- **Vector store refresh + embedding regeneration:** essential **RAG** maintenance
- **Telemetry for drift detection:** prediction accuracy and data quality over time
- **Structured feedback loop:** collect → retrain → evaluate → deploy if improved
- **Centralized logging:** (ELK, Fleet Command) with correlation IDs for multi-service debugging

## Hands-on checks / study prompts

1. What five metrics go on an agent health dashboard beyond GPU utilization?
2. How do you detect a silent **retrieval** quality regression after an index update?
3. What belongs in an audit log entry for an agent tool call?
4. An agent is slower but GPU is normal — what three non-GPU components do you check?
5. What maintenance keeps a **RAG** agent's responses from degrading over time?

## Mock signals

Across the mock exams, run/monitor questions repeatedly test these durable ideas:

- **Trace the full agent path**: inference, **retrieval**, tools, **guardrails**, queueing, retries, and network spans.
- **Quality monitoring**: **canary queries**, recall@k, **faithfulness** drift, **task success**, and user satisfaction catch silent regressions.
- **Operational dashboards**: include **TTFT**, p95/p99 **latency**, failure rates, escalation rates, cost, throughput, queue depth, and GPU metrics.
- **Audit logging**: versioned prompt/model/tool IDs, redacted inputs, tool-call metadata, document IDs, policy decisions, and immutable **log integrity**.
- **Maintenance loops**: refresh vector stores, regenerate embeddings, monitor drift, review feedback, evaluate, then deploy.
- **Diagnosis discipline**: observe and compare baselines before retraining, restarting, or adding hardware.

Evidence source: `mock_1` through `mock_5`, especially tracing, **retrieval** monitoring, dashboards, audit logs, **TTFT**, **drift detection**, and maintenance questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 5%
- **What it covers:** Operate live agents with tracing, tool-call monitoring, **drift** detection, cost dashboards, and **incident response**.
- **Use this section when:** Study this when questions ask what to monitor after deployment.
- **Common trap:** **HTTP 200** does not mean the agent succeeded. Track **task success**, tool success, and trajectory failures.
- **Scenario signal:** The service is "up," but **task success**, tool results, **retrieval** quality, drift, cost, or traces show the agent is failing in production.

### Study notes

- Monitor **task success** and **trajectory health**, not just HTTP status. An agent can return 200 while silently failing a tool call or using empty **retrieval** results.
- Track route **drift**, tool **latency**, **retrieval** quality, **cost per completed task**, loop frequency, escalation rate, **safety blocks**, and **reviewer load**.
- **Incident response** should preserve evidence: trace replay, prompt/tool/model versioning, **rollback**, and post-incident regression tests.
- **Agent observability — trace each step**: Every agent request should produce a trace with spans for: (1) classification/ID routing, (2) **retrieval** query embedding, (3) vector DB search, (4) reranker call, (5) LLM inference, (6) each tool call, (7) guardrail checks, (8) response generation. Aggregate traces to identify which step dominates p95/p99 **latency**. Without per-step tracing, you cannot distinguish between "model is slow" and "a tool call is stuck."
- **SLAs for agent systems**: Define SLAs at two levels: (a) End-to-end **latency** — total time from user request to final response. Target varies by use case: real-time chat <2s, complex research <15s, batch <5min. (b) Step-level **latency** — maximum time for each pipeline step (e.g., **retrieval** <200ms, LLM generation <1s per 100 **tokens**, tool call <500ms). Step-level SLAs let you pinpoint which component is violating the overall SLA.
- **Drift detection**: Monitor three drift dimensions: (a) **Retrieval quality drift** — recall@k drops or **faithfulness** scores decline over time. Often caused by index staleness or document changes. (b) **Model behavior drift** — output distribution shifts (e.g., agent becomes more verbose, starts refusing requests it previously handled). (c) **Tool performance drift** — tool call **latency** increases, error rate rises, or tool response quality degrades. Each drift type needs different remediation: index refresh for **retrieval** drift, prompt/model **evaluation** for behavior drift, tool maintenance for performance drift.
- **Incident response for agent failures**: (1) Identify the failing step via **trace spans** (is it **retrieval**, LLM, tool, guardrail?). (2) Check the logs for that step: version IDs, input/output, error codes. (3) Compare against baseline: was there a recent deployment, index update, or tool change? (4) If the issue is in a new version, roll back. (5) After resolution, add a **regression test** to the canary suite. Do NOT restart services as the first step — that destroys diagnostic evidence.
- **Canary monitoring for retrieval quality**: Define a set of canonical queries with expected source document IDs. After every index update, run the **canary queries** and measure: (a) Are the expected documents in the top-5 results? (b) Has the recall@k for these queries changed? (c) Have new, irrelevant documents appeared in the top results? Alert if recall drops below a threshold or if the result set changes significantly. This catches silent regressions before users report them.

### Must know

- **Distributed tracing by span**: every pipeline step instrumented — classification/routing, **retrieval** embedding, vector DB search, reranker call, LLM inference, each tool call, guardrail checks, response generation. Aggregate traces to identify which step dominates p95/p99 **latency**.
- **Span-level latency**: model inference time vs **retrieval** time vs tool API time vs guardrail time vs queue wait time — you can't fix what you don't measure per component.
- **TTFT (Time to First Token)**: delay between user prompt and first generated token — directly affects perceived responsiveness in real-time applications. More informative than total generation time alone.
- **Tool success rate**: percentage of tool calls that return successfully with valid data — declining rate = integration or dependency issue. Tracked per tool.
- **Cost per completed task**: total **tokens** + tool calls + GPU-hours divided by successfully completed tasks — tracks efficiency independent of raw **task success**.
- **Drift detection — three dimensions**: (1) **Retrieval quality drift** — recall@k drops, **faithfulness** scores decline (index staleness, document changes). (2) **Model behavior drift** — output distribution shifts (verbosity increase, refusal rate change). (3) **Tool performance drift** — tool call **latency** increase, error rate rise, response quality degrade.
- **Canary queries for retrieval quality**: define canonical queries with expected source document IDs — run after every index update — verify expected documents in top-5, track recall@k changes, alert on score regression.
- **Faithfulness scoring drift**: track whether generated claims remain supported by evidence over time — catches silent **retrieval** regressions before users notice.
- **Agent-specific dashboards**: **P95/TTFT latency**, task completion rate by intent, **tool success rate**, cost per task, escalation rate, user satisfaction trends, GPU utilization/memory.
- **SLAs — two levels**: End-to-end **latency** (total user response time) and step-level **latency** (**retrieval** < 200ms, LLM < 1s per 100 **tokens**, tool call < 500ms). Step-level SLAs pinpoint violation source.
- **Audit logging**: versioned prompt/model/tool IDs + workflow state transitions + tool-call metadata + policy decisions + **retrieval** document IDs with hashes + REDACTED user content. NOT raw full prompts forever, NOT no logs at all.
- **Log integrity**: cryptographically hashed, **write-once**, **tamper-evident** storage — for audit and incident investigation in regulated environments.
- **Incident response process**: (1) Identify failing step via **trace spans**. (2) Check versioned logs for that step. (3) Compare against baseline (recent deployment/index update/tool change?). (4) Roll back if new version caused issue. (5) Add **regression test** to canary suite. NOT restart first.
- **Vector store refresh + re-index**: regular maintenance to prevent stale **retrieval** — outdated embeddings return irrelevant results, causing silent quality decline.
- **Embedding regeneration**: when content updates significantly, regenerate chunk embeddings to keep **retrieval** aligned with current document content.
- **Structured feedback loop**: collect contextual feedback → retrain periodically → evaluate rigorously → deploy only if improved. NOT automatic daily retraining without quality gates.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| agent **latency** spike, GPU utilization normal | **distributed tracing** by span to find which component is slowing | adding GPUs before identifying the bottleneck |
| silent quality decline after index update, uptime 100% | **canary queries** + recall@k tracking + **faithfulness drift detection** | uptime checks only |
| **HTTP 200** but agent silently failing tool calls | **tool success rate** monitoring + **trajectory health** tracking | HTTP status alone |
| **privacy**-sensitive logs needed for incident investigation | versioned IDs + redacted user content + cryptographic hashing + **write-once** storage | no logs at all (can't investigate) or raw full prompts forever (**privacy** risk) |
| **latency** or quality spike after new prompt deployment | compare **canary evaluation** against baseline, inspect trace/log versions, roll back if degraded | restarting services as first action |
| agent becomes more verbose, starts refusing previously handled requests | **model behavior drift** detection — output distribution shift monitoring + **structured feedback** review | ignoring as "normal variation" until users complain |
| **retrieval** results less relevant over time | **vector store refresh** + **re-index** new documents + regenerate embeddings for updated content | deleting old logs (loses **audit trail**) or ignoring because "it worked before" |
| real-time chat feels slow despite fast total generation time | **TTFT** (Time to First Token) tracking — high **TTFT** = long wait before first visible response | total generation time alone (misses perceived **latency**) |
| external tool API error rate rising gradually | **tool performance drift** monitoring — catch rising error rates before users notice | waiting for user complaints before investigating |
| after a model version change, some queries silently return wrong answers | **canary queries** with expected source documents + recall@k tracking + **faithfulness scoring** | checking only GPU/CPU metrics as quality proxy |
| worker threads all blocked, requests queuing | **trace spans** identify blocking tool/dependency → add timeouts, circuit breaker, and bulkheads | global timeout increase |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| Monitoring vs **Evaluation** | Monitoring = online, continuous, detects drift in production (is the system healthy right now?). **Evaluation** = offline, comparing versions, regression detection before/after changes (is version B better than A?). **Canary evaluation** bridges both during rollout. |
| GPU metrics vs Agent quality metrics | GPU = hardware health (utilization, memory, temperature). Agent quality = **task success**, tool accuracy, **faithfulness**, escalation rate. GPU green ≠ agent giving good answers. Both needed on dashboards; neither alone is sufficient. |
| HTTP status vs **Task success** | **HTTP 200** = server responded. **Task success** = agent accomplished the user's goal. An agent can return 200 while tool calls failed silently. Monitor both and alert on task-success degradation. |
| **TTFT** vs Total generation time | **TTFT** = time to first visible token (perceived responsiveness). Total time = full response duration. Users care about **TTFT** for engagement; total time for completion. Both matter; they measure different UX dimensions. |
| Drift vs Regression | Drift = gradual degradation over time (index staleness, user behavior shift). Regression = sudden break after a change (prompt, model, tool update). Different detection strategies: drift needs continuous monitoring; regression needs canary/regression suites at change boundaries. |
| Logs vs Traces | Logs = discrete events with timestamps (tool called, error returned, state changed). Traces = end-to-end request path across components (span hierarchy, **latency** per step). Logs for audit and debugging; traces for bottleneck identification. |
| **Canary queries** vs User feedback | **Canary queries** = predefined test cases with known correct answers, automated, catches regressions fast. User feedback = real user reports, authentic but **sparse**, biased toward extremes, slow to detect issues. Use **canary queries** for early detection; user feedback for validation. |
| Restart vs Diagnose | Restart may clear symptoms and destroy evidence. Diagnose = traces → logs → baseline comparison → root cause → fix or **rollback**. In exam scenarios, diagnose before restart. |
| Cost per task vs GPU utilization | Cost per task = business metric (**tokens** + compute + tool calls per completed task). GPU utilization = hardware metric (percentage of GPU capacity used). High GPU utilization with high cost per task suggests inefficiency (wasted compute on retries, loops). |

### Mini scenario drill

1. Scenario: Users report the agent is slower than last week. GPU utilization is 45% (normal). HTTP status is 200. The team considers ordering more GPUs.
   Best answer pattern: Check distributed traces — break down **latency** by span (**retrieval**, tool calls, LLM inference, **guardrails**, queueing). If a specific tool API response time doubled, that's the bottleneck — not GPU. Fix the tool or add timeout/circuit breaker.
   Trap: Adding GPUs when GPU utilization is 45% — the hardware isn't saturated. **HTTP 200** doesn't mean the agent is performing well.

2. Scenario: After a scheduled index update, users start getting subtly wrong answers. Uptime is 100%, GPU is healthy, error rate is zero. No one notices for three days until a user complains.
   Best answer pattern: **Canary queries** with expected source documents should run automatically after every index update. If recall@k drops below threshold or expected documents no longer appear in top results, alert immediately. **Faithfulness scoring** drift would also catch that claims are no longer supported by retrieved evidence.
   Trap: Infrastructure metrics (uptime, GPU, error rate) are all green — but agent quality can silently degrade. Without **canary queries** or **faithfulness** drift monitoring, regressions go undetected.

3. Scenario: A production incident occurs after a prompt release. Users report wrong answers. The on-call engineer restarts all services to "clear the issue." After restart, the problem seems gone. Next deploy, the same issue returns.
   Best answer pattern: Structured **incident response** — (1) Check **trace spans** for the failing requests, (2) Review versioned logs (prompt version, model version, tool config), (3) Compare against baseline from before the release, (4) Identify that the new prompt version caused the regression, (5) Roll back to previous prompt version, (6) Add a **regression test**. Restarting destroyed the evidence and masked the root cause.
   Trap: Restart first — clears symptoms but destroys diagnostic state (logs in memory, traces in flight). The root cause (bad prompt version) was never identified, so it recurs on next deploy.

### High-yield exam signals

- **Live failure masking**: agent returns **HTTP 200** while every CRM tool call returns empty data, because empty-result success is not tracked
- **Empty tool result**: agent proceeds with no data from failed **retrieval** because empty results are not surfaced as a distinct trace span or alert
- **Routing drift**: intent classifier gradually sends more queries to the expensive full-agent path as user language shifts away from training data
- **Cost dashboard blind spot**: GPU utilization looks healthy, but **cost per completed task** rises because repeated failed tool calls and token waste are not tracked
- **Trace missing**: **latency** spike is blamed on the model because no per-span tracing shows the third-party tool API bottleneck
- **Silent quality regression:** after index update (no **canary queries**)
- **Latency spike from tool call:** missing step-level SLA
- **Drift not investigated:** no drift monitoring
- **Incident response starts with restart:** destroys evidence

### Hands-on checks

- A customer support agent was deployed last week. Users report it feels slow, and the team suspects a specific tool call is the bottleneck but has no data. Design a monitoring dashboard with tiles for **latency** (p50/p95/p99 per span), **TTFT**, **tool success rate**, cost per task, and escalation rate. Mark which tile would catch the suspected bottleneck first.
- Design a trace span hierarchy for a 5-step agent pipeline. Mark which spans you would instrument and what metric each captures.
- Define SLAs for a customer support agent: end-to-end **latency** target, step-level targets for **retrieval**, LLM, and each tool.
- Design a canary monitoring suite for **retrieval** quality: write 5 canonical queries, list the expected documents, and define the alert thresholds.
- Walk through an **incident response** for a "sudden **latency** spike" scenario: what do you check first, second, third?

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when questions ask what to monitor after deployment.
- The major trap pattern is: **HTTP 200** does not mean the agent succeeded. Track **task success**, tool success, and trajectory failures.
- Recurring local question themes include: human oversight and UX, Run, Monitor, and Maintain, Nsight and observability.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q43, mock_2 Q45, mock_3 Q56, mock_4 Q50, mock_5 Q46** / `monitor-001`: Production users report that the agent is slower, but GPU utilization is normal. What monitoring dimension is likely missing? Correct idea: Tool-level and workflow-level tracing, including external API **latency**, **retrieval latency**, queue time, and guardrail time.. Trap: DAU is not bottleneck analysis.
- **mock_1 Q44, mock_2 Q46, mock_3 Q57, mock_4 Q51, mock_5 Q47** / `monitor-002`: A **retrieval** index update causes a silent quality regression. Which monitoring catches it early? Correct idea: **Canary queries** with expected source documents, recall@k tracking, **faithfulness scoring**, and alerting on **retrieval** score drift.. Trap: GPU memory does not measure **retrieval** quality.
- **mock_1 Q45, mock_2 Q47, mock_3 Q58, mock_5 Q48** / `monitor-003`: A production agent incident occurs after a prompt release. What logs are most useful for audit while preserving **privacy**? Correct idea: Versioned prompt/model/tool IDs, workflow state transitions, tool-call metadata, policy decisions, **retrieval** document IDs, hash.... Trap: No logs prevents investigation.

</details>

<!-- STUDY_ENRICHMENT_END -->

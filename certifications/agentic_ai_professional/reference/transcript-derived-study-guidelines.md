# NCP-AAI Transcript-Derived Study Guidelines

Date: 2026-05-11

Source: cleaned guidance from user-provided video transcripts. Official exam metadata should be checked against the NVIDIA Agentic AI Professional page: https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/.

## How to use this guide

Use this as a practical study checklist for NVIDIA Certified Professional - Agentic AI (NCP-AAI). The transcript material is strongest when it explains scenario reasoning: not just what a term means, but what breaks when the wrong design is chosen.

The exam is likely to ask questions like:

- Which architecture fits this constraint?
- What is the failure mode?
- What should the system do when a step breaks?
- Which NVIDIA component maps to the bottleneck?
- Which answer sounds plausible but solves the wrong layer?

## Exam facts to anchor on

| Item | Current guidance |
|---|---|
| Exam | NVIDIA Certified Professional - Agentic AI (NCP-AAI) |
| Question count | 60-70 |
| Time | 120 minutes |
| Passing score | 70% |
| Validity | 2 years |
| Delivery | Certiverse |
| Price | USD 200 on the NVIDIA page |
| Style | Scenario-based, application-based, single-select and possibly multi-select |

Discount note:

NVIDIA certification webinar pages have promoted 50% exam discount codes for attendees. Treat the discount as a tactical timing factor, not as the reason to take the exam. Verify the current code, expiration, and eligibility at registration.

Transcript conflict note:

One transcript says 90 minutes. The current NVIDIA page lists 120 minutes, so use 120 minutes for logistics. The transcripts also use a five-topic framing; that is useful as a study overview and matches NVIDIA's broad topic-grouping style, but the weighted scoring map in this repo remains the 10-domain blueprint below.

Another transcript says 70-75 questions and misnames the certification as "Nutanix Certified Professional for AI." Treat that as transcript noise. The current certification covered here is NVIDIA Certified Professional - Agentic AI (NCP-AAI), with 60-70 questions.

## Should you take NCP-AAI?

The better question is not "Is the exam discounted?" The better question is "Will this certification reinforce work I can already discuss and defend?"

### Good-fit profiles

| Profile | Why the exam makes sense |
|---|---|
| Engineers already shipping AI work | If you have built RAG pipelines, deployed inference services, worked with vector stores, designed retrieval flows, or operated agent systems, the exam gives third-party structure to skills you already use. |
| Engineers building agentic systems but learning unevenly | The syllabus becomes an audit map. It shows which surfaces you understand and which ones you have avoided: orchestration, RAG, evaluation, deployment, monitoring, and governance. |
| Professionals in NVIDIA-stack organizations | If your employer uses NIM, Triton, NeMo, NVIDIA GPUs, or pays for certification through an L&D budget, the credential lines up with the stack and has low personal downside. |

### Poor-fit profiles

| Profile | Why to pause |
|---|---|
| Complete beginners with no implementation experience | You may memorize enough to pass but still fail a serious technical screen because the exam assumes architectural reasoning from built systems. |
| Resume collectors | A long certificate list without shipped work can read as a substitute for implementation, not evidence of it. |
| People registering only because of a discount | You do not save money on a credential that was not already relevant to your roadmap. The discount compresses decision time; it should not replace career reasoning. |

### What the certification validates

It validates that you can reason across a defined body of agentic AI material under exam conditions.

It can signal:

- You understand the vocabulary and design tradeoffs.
- You can map scenarios to architecture, orchestration, RAG, evaluation, deployment, and safety patterns.
- You can reason about NVIDIA platform components at the lifecycle level.

It does not prove:

- You have shipped production systems.
- You can survive a production incident.
- You can pass a senior engineering technical screen.
- You have the implementation depth a hiring manager expects from a real project history.

Career rule:

Certification reduces friction in a hiring pipeline. It does not replace the signal from shipped systems, code, incidents handled, design reviews, and technical explanations.

## Official domain weights

The transcript is useful, but the official page is the source of truth when weights conflict.

| Domain | Weight | Study priority |
|---|---:|---|
| Agent Architecture and Design | 15% | Very high |
| Agent Development | 15% | Very high |
| Evaluation and Tuning | 13% | Very high |
| Deployment and Scaling | 13% | Very high |
| Cognition, Planning, and Memory | 10% | High |
| Knowledge Integration and Data Handling | 10% | High |
| NVIDIA Platform Implementation | 7% | Medium, but do not skip |
| Run, Monitor, and Maintain | 5% | Medium |
| Safety, Ethics, and Compliance | 5% | Medium |
| Human-AI Interaction and Oversight | 5% | Medium |

## Study timeline

### 14-21 day plan for experienced engineers

Use this only if you already have working AI engineering experience. If you are a beginner, stretch the plan and build projects first.

| Days | Goal | What to do |
|---|---|---|
| 1-3 | Syllabus audit | Read the official blueprint. Mark each topic green, amber, or red. Green = you can teach it. Amber = you have used it but cannot explain tradeoffs. Red = you have not engaged deeply. |
| 4-10 | Targeted study | Study red topics first. For each red topic, read NVIDIA docs, build a small toy implementation, or explain the concept out loud until the tradeoff is clear. |
| 11-17 | Practice calibration | Do 40-60 practice questions per day from at least two sources. For every wrong answer, write one sentence explaining why your reasoning was off. |
| 18-20 | Full mock exams | Take two timed mocks under exam-like conditions. Review wrong reasoning notes, not just answer keys. |
| 21 | Light review | Do not cram new material. Review weak reasoning patterns, sleep, and take the exam only if scores are consistently strong. |

Time budget:

Expect roughly 60-80 focused preparation hours for a compressed experienced-engineer path. If you cannot invest the time, the discount does not change the readiness math.

### Weeks 1-2: Architecture and development

Study these first because they shape many scenario questions:

- Reactive, deliberative, and hybrid agents.
- ReAct, plan-and-execute, graph/workflow agents, router patterns, and supervisor orchestration.
- Stateful vs stateless orchestration.
- Function/tool calling schemas, required and optional parameters, structured outputs, and tool descriptions.
- Error handling: backoff, retries, circuit breakers, graceful degradation, idempotency, and workflow-state gates.

Success check:

- You can explain why pure reactive fails a multi-step workflow.
- You can explain why pure deliberative fails a 200-500 ms acknowledgement SLA.
- You can explain when hybrid routing is the correct architecture.
- You can identify when a tool failure needs retry, checkpoint resume, circuit breaker, or human escalation.

### Week 3: Evaluation, tuning, cognition, and memory

Study:

- Trajectory evaluation, not just final-answer correctness.
- Task completion, tool-selection accuracy, response accuracy, p95/p99 latency, cost per completed task, and user satisfaction.
- Temperature, top-p, and max-token tuning.
- Short-term, working, long-term, episodic, semantic, and entity memory.
- Chain-of-thought vs ReAct vs tree-of-thought.
- Task decomposition, replanning, loop detection, reflection, and critic nodes.

Success check:

- You can explain why exact-match accuracy misses unsafe tool trajectories.
- You can explain why lower temperature/top-p helps consistency but does not replace schema validation or guardrails.
- You can explain why increasing max iterations is the wrong fix for a looping agent.

### Week 4: Knowledge integration and NVIDIA platform

Study:

- Basic RAG: query -> embed -> retrieve top-k -> rerank -> generate with citations.
- Hybrid search: dense vector search plus sparse/BM25 keyword search.
- Advanced retrieval: query expansion, multi-query retrieval, HyDE, metadata filtering, and reranking.
- Vector database basics: embedding models, distance metrics, indexes, metadata filters, freshness, and performance.
- ETL and data quality: extract, transform, load, schema normalization, dedupe, preprocessing, and validation.
- NVIDIA tool boundaries: NIM, NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever, TensorRT-LLM, Triton Inference Server.

Success check:

- You can tell Retriever from Curator.
- You can tell NIM from Nemotron.
- You can tell Triton from TensorRT-LLM.
- You can explain why access filters must run before retrieval, not after generation.

### Week 5: Deployment, scaling, and operations

Study:

- Containerized microservices, Kubernetes, HPA, load balancing, queues, warm replicas, canary rollout, shadow deployment, and blue-green deployment.
- Workload isolation: real-time lane vs batch lane.
- Distributed tracing by span: routing, retrieval, embedding, reranking, LLM inference, tool calls, guardrails, and response generation.
- Resilience: timeouts, bounded retries, exponential backoff, circuit breakers, bulkheads, and graceful degradation.
- Monitoring dashboards: p95/p99 latency, TTFT, queue depth, tool success rate, task success, escalation rate, cost per task, and user satisfaction.

Success check:

- You can explain why "add GPUs" is not the first fix for slow agents.
- You can identify head-of-line blocking from batch jobs in a real-time queue.
- You can explain why infrastructure health checks do not prove agent quality.

### Week 6: Safety, ethics, oversight, and readiness

Study:

- Prompt injection, indirect prompt injection, retrieved text as untrusted data.
- PII, privacy, RBAC, audit logs, retention, deletion, and consent.
- NeMo Guardrails: input rails, dialog rails, retrieval rails, output rails, tool/action rails, Colang policies, and fact-checking/groundedness checks.
- Human-in-the-loop, human-on-the-loop, approval gates, review queues, escalation, explanations, progress UI, and structured feedback.
- Timed mock exams.

Success check:

- You can explain why a prompt is not a safety boundary.
- You can explain why high-impact tool actions need approval before execution.
- You can score above 75% consistently across timed mocks before treating yourself as ready.

## Capability surfaces the exam tests

The transcript frames the exam as six major capability surfaces. This is a useful practical lens over the official ten-domain blueprint.

| Surface | What to know | Common weak spot |
|---|---|---|
| Agent architecture | Single-agent vs multi-agent, reactive/deliberative/hybrid, ReAct, graph workflows, routers, supervisors, memory boundaries | Memorizing labels without knowing what breaks |
| Orchestration | Tool calling, function calling, multi-step inference control flow, prompt chains, workflow state, approvals, retries | Treating orchestration as a prompt instead of a stateful control system |
| RAG | Chunking, embeddings, vector stores, hybrid search, reranking, retrieval evaluation, permission filters | Tutorial chatbots without retrieval-quality or access-control reasoning |
| Deployment | Inference servers, model packaging, latency/throughput, batching, quantization basics, NIM/Triton/TensorRT-LLM boundaries | Knowing product names but not the bottleneck each product solves |
| Evaluation | Offline vs online metrics, A/B tests, canaries, regression suites, model behavior vs system behavior | Using accuracy as the only metric |
| Production thinking | Observability, cost, security, drift, incident response, auditability, reviewer load | Prototype works but no operational plan exists |

Exam style reminder:

The exam is not deeply technical at API-signature level. It is technical at architectural-reasoning level. Memorizing API calls is less useful than explaining why one design fails under a scenario constraint.

## Architecture guidelines

### Reactive vs deliberative vs hybrid

| Architecture | Use it when | Why the wrong choice breaks |
|---|---|---|
| Reactive | The task is bounded, low latency, and maps observation directly to action: acknowledgement, alert triage, intent routing, status lookup | It fails multi-step reasoning, context accumulation, and dependent API coordination |
| Deliberative | The task requires planning, tool sequencing, evidence gathering, and revising a plan from observations | It misses strict latency SLAs and costs more tokens/compute |
| Hybrid | The workload mixes fast simple cases and slower complex cases | The router can misclassify; memory and permissions must be scoped by path |

Exam cue:

If the scenario says "acknowledge within 200-500 ms" and also says "coordinate a multi-step refund/fraud/logistics workflow across several APIs," choose a hybrid design.

Preferred pattern:

```text
Incoming request
  -> lightweight classifier / risk router
     -> reactive fast path: acknowledge, classify, route, answer simple status
     -> deliberative slow path: plan, call tools, checkpoint, validate, escalate
```

Trap answers:

- Pure reactive with tool calls added: fails complex multi-step coordination.
- Deliberative planning before every event: fails latency.
- Reduced planning depth for all requests: still pays planning overhead and weakens hard cases.

### Reactive agent vs ReAct

Do not confuse these names.

| Term | Meaning |
|---|---|
| Reactive agent | Stimulus-response architecture with minimal internal state |
| ReAct | Reasoning-plus-action loop: thought/action/observation/revise |

Reactive is about fast direct response. ReAct is a deliberative loop that can use tools and observations.

### ReAct loop guidance

Use ReAct when the next step depends on live observations.

```text
Goal + state
  -> choose next action
  -> validate tool name, schema, permission, and risk
  -> execute tool
  -> save structured observation
  -> check stop condition or escalation rule
  -> answer, continue, replan, or escalate
```

Every ReAct workflow needs:

- Max tool calls or max iterations.
- Wall-clock budget.
- Evidence sufficiency check.
- Repeated-action detector.
- Tool schema and permission validation.
- Observation state.
- Stop, replan, or escalate path.

Common failure:

An agent calls the same tool repeatedly even though the tool returns valid data.

Best fix:

Add state, repeated-action detection, a critic/reflection step, and explicit stop conditions. Do not simply increase max iterations.

## Stateless vs stateful orchestration

| Pattern | Use it when | Recovery strategy |
|---|---|---|
| Stateless | Single-turn, read-only, or cheap recomputation tasks | Retry from start or return clean fallback |
| Stateful | Multi-step workflows, approval gates, long-running jobs, tool dependencies, memory writes, or mutations | Resume from last successful checkpoint after reconciling external state |

Key rule:

If re-running from the beginning can duplicate an external side effect, the workflow must be stateful.

Stateful orchestration should track:

- Current workflow step.
- Completed steps.
- Pending steps.
- Structured observations.
- Tool outputs.
- Approvals.
- Retry counts.
- External transaction IDs.
- Checkpoints.

## What to do when something breaks

| Failure signal | Best answer | Trap answer |
|---|---|---|
| Read-only API timeout | Bounded retry with exponential backoff and jitter | Infinite retry |
| Rate limit / HTTP 429 | Backoff, queue, respect rate limit, use safe cached reads if allowed | Aggressive immediate retry |
| Dependency repeatedly failing | Circuit breaker, fail fast, periodic probe, graceful degradation | Keep all workers blocked |
| Mutating tool outcome unknown | Idempotency key plus transaction-state check before retry | Re-run mutation blindly |
| Step 4 of 8 fails after earlier successful steps | Resume from last checkpoint | Re-execute whole workflow from scratch |
| Agent repeats same tool call | Loop detector, state buffer, critic/reflection, reformulate/switch tool/escalate | Increase max iterations |
| High-risk action | Approval gate before execution with evidence and risk summary | Notify after execution |
| Missing required input | Ask clarification if tool call would be ambiguous or unsafe | Guess the value |

## Tool development guidelines

Strong tool definitions include:

- Clear tool name.
- Specific description.
- JSON schema parameters.
- Required vs optional fields.
- Enum/value constraints.
- Safe defaults.
- Output schema.
- Error classes.
- Timeout policy.
- Retry policy.
- Permission checks.
- Audit reference.

Exam traps:

- Prompting the model to use tools safely instead of enforcing schema and permissions.
- Dumping raw JSON into context instead of shaping outputs.
- Retrying mutations without idempotency.
- Hiding tool names with vague descriptions instead of gating availability by workflow state.

## Evaluation and tuning guidelines

Evaluate the full agent trajectory:

- Tool selected.
- Tool arguments.
- Observations used.
- Evidence cited.
- Policy compliance.
- Final answer correctness.
- Latency and cost.

Use task-specific metrics:

- QA: exact match/F1 plus evidence support.
- Retrieval: recall@k, precision@k, NDCG.
- RAG answer: faithfulness and citation support.
- Agent task: task completion, tool correctness, trajectory quality, escalation quality.
- Production: p95/p99 latency, TTFT, cost per completed task, user satisfaction.

Parameter tuning:

- Lower temperature: more consistent, less random.
- Lower top-p: narrower token set, more deterministic.
- Max tokens: controls cost/latency and prevents overly long answers.
- Schema validation: still required for structured output.

Trap:

Low temperature is not a security control. Use guardrails, schemas, permissions, and approval gates for control boundaries.

## Knowledge and RAG guidelines

Use RAG when facts are proprietary, changing, or must be cited.

Use fine-tuning when the desired change is durable behavior, style, format, or domain skill that does not require fresh facts.

Retrieval choices:

| Requirement | Best pattern |
|---|---|
| Fresh enterprise knowledge | RAG |
| Exact terms plus semantic meaning | Hybrid dense + sparse retrieval |
| Short/vague query | Multi-query retrieval or HyDE |
| Legal/compliance docs | Structure-aware chunking and metadata filters |
| Tenant or role permissions | Authorization filters before retrieval |
| Relationship-heavy query | Knowledge graph plus RAG |
| No relevant evidence | Expose empty/low-confidence retrieval state and refuse or clarify |

Trap:

Never retrieve forbidden documents and hope output guardrails hide them later. Access control must happen before content enters the prompt.

## NVIDIA platform guidelines

Choose by lifecycle layer:

| Need | NVIDIA answer |
|---|---|
| Serve a supported model as an optimized API | NIM |
| Manage NIM on Kubernetes | NIM Operator |
| Build and orchestrate agent workflows/tools | NeMo Agent Toolkit |
| Add enterprise document retrieval | NeMo Retriever |
| Enforce runtime policy and safety | NeMo Guardrails |
| Evaluate agent/model quality | NeMo Evaluator |
| Curate training/tuning/eval datasets | NeMo Curator |
| Optimize LLM inference internals | TensorRT-LLM |
| Multi-framework/multimodal model serving | Triton Inference Server |
| System-level CPU/GPU timeline profiling | Nsight Systems |
| Kernel-level profiling | Nsight Compute |
| Model/container catalog | NGC |
| Model family | Nemotron |

Trap:

A valid NVIDIA product can still be the wrong answer if it lives at the wrong lifecycle layer.

## Deployment and monitoring guidelines

Before optimizing, trace the pipeline:

```text
request
  -> routing/classification
  -> retrieval embedding
  -> vector search
  -> reranking
  -> LLM inference
  -> tool calls
  -> guardrails
  -> response generation
```

Watch:

- p50/p95/p99 latency.
- TTFT.
- Queue depth.
- Tool success rate.
- Retrieval quality.
- Task success.
- Escalation rate.
- Cost per completed task.
- User satisfaction.
- Safety blocks.

Trap:

HTTP 200 does not mean the agent succeeded. It only means the server returned a response.

## Scenario pattern bank

The newest transcript is useful because it turns common exam traps into visual scenario patterns. Study these as "if the stem says X, prefer Y, avoid Z."

### Agent design and cognition patterns

| Stem clue | Prefer | Avoid |
|---|---|---|
| Nine sequential tool calls and unacceptable latency | **Plan-and-execute**: one planner emits the step graph, then a deterministic executor runs independent branches in parallel | Reflexion, because self-critique adds more model round trips |
| Live prices, live inventory, current system state, or any "live" fact | **ReAct** with tool action and observation grounding | Chain-of-thought alone; it reasons from frozen model knowledge and has no observation step |
| Remember within this conversation and remember a session from six weeks ago | **Working memory + episodic memory** | Procedural memory, which stores skills/behavior; KV cache, which is a serving optimization, not durable memory |
| Agent forgets intermediate results buried in long context | **Structured scratchpad / working memory** with named fields | Bigger context or bigger KV cache; the value can still be lost in the middle |
| Staged flow where verifier and KYC sometimes need fast back-and-forth | **Hybrid orchestration**: central orchestrator owns stages; peer-to-peer/A2A communication handles fast inner loops | Pure central orchestrator for every internal hop; pure peer mesh with no global phase control; one super-agent with all roles |

### Knowledge integration and agent development patterns

| Stem clue | Prefer | Avoid |
|---|---|---|
| User asks to compare two products, policies, or entities | **Query decomposition**: retrieve for A and B separately, then synthesize | One vector search over the combined query; larger embedding model as a magic fix |
| Tool calls have wrong argument types | **Strict JSON schema / guided decoding + few-shot valid examples** | Higher temperature; try/catch wrapper that hides the error |
| Three agents each reimplement wrappers for the same 14 tools | **MCP-style tool servers**: each tool exposed once, many agents consume it | Treating MCP as a model router, agent runtime, or auth bypass |
| Extractor -> summarizer -> fact checker -> formatter -> critic is purely linear | One structured call or a simple deterministic pipeline unless roles need distinct tools/permissions or parallel work | Multi-agent system just because it looks sophisticated |
| Exact error codes plus semantic paraphrases | **Hybrid retrieval**: BM25/sparse + dense vector search, RRF merge, cross-encoder rerank | Converting every error code to natural language before embedding |

### NVIDIA platform and deployment patterns

| Stem clue | Prefer | Avoid |
|---|---|---|
| 70% simple queries, 30% hard queries, high model cost | **Cascade routing**: small NIM for easy cases, large NIM for hard/low-confidence cases | Run both models on every request and pick the longer answer |
| Same 4,000-token system prefix reprocessed for every request | **Prefix caching** to reuse the KV cache for the stable prompt prefix | Reducing max output tokens; that caps generation but does not fix prefill/TTFT |
| Production deployment of a supported model is the goal | **NIM** packaged optimized inference microservice | Raw runtime ownership when the team does not want to tune kernels, drivers, contracts, and observability |
| Latency is fine at low load but balloons at high load | **Inflight/continuous batching** and queue analysis | Batch size of one, or simply raising static batch size |

### Evaluation, monitoring, and maintenance patterns

| Stem clue | Prefer | Avoid |
|---|---|---|
| Need deterministic regression signal and open-ended quality evaluation | Use **golden sets + LLM-as-judge + sampled human review** | Claiming LLM-as-judge is always more accurate than humans, or stopping evaluation after launch |
| Team celebrates 92% final-answer accuracy | Add **trajectory evaluation**: tools, order, arguments, side effects, cost, and policy path | Final-answer accuracy alone; it hides right-answer/wrong-path failures |
| Model and prompt did not change, but production quality dropped | Investigate **data drift**: input distribution, tool schemas, upstream services, retrieval index freshness | Roll back a deployment that did not change; retrain the LLM first |

### Human, ethical, and compliance patterns

| Stem clue | Prefer | Avoid |
|---|---|---|
| Refuse certain inputs and protect certain outputs | **Input rails + dialog rails + output rails** in a runtime guardrail layer | Fine-tuning alone; front-end-only checks |
| Need to test whether a protected attribute changes the decision | **Counterfactual fairness probe**: hold everything constant except protected attribute | Aggregate approval-rate parity as the only fairness test |
| Need reproducible, replay-capable decisions 12 months later | Log prompt template version, retrieved chunk IDs/hashes, tool inputs/outputs, model/version, parameters, seed, timestamp, and policy decisions | Encrypting incomplete logs or extending retention for incomplete data |

### Enterprise architecture deep-dive patterns

The latest transcript frames the same blueprint as five enterprise production scenarios. These are useful because they ask for the infrastructure layer that actually fixes the bottleneck.

| Scenario clue | Correct layer | Why |
|---|---|---|
| Real-time tool calling needs low-latency inference | **NVIDIA NIM** optimized inference microservice | NIM packages model, runtime, API server, GPU optimization, and deployment surface into a production endpoint; a UI builder or HITL screen does not reduce inference latency |
| Agent drifts outside the intended business domain or responds to sensitive topics | **Programmable guardrails** around input and output | Lower temperature makes output more deterministic, but it does not enforce topical policy or stop jailbreak attempts |
| Complex technical queries retrieve irrelevant documents | **Hybrid search + reranking** | Dense vectors capture meaning, BM25/sparse catches exact terms and error codes, and a cross-encoder reranker improves precision before context is passed to the LLM |
| Each step determines the next tool and the path is not predictable upfront | **ReAct** reasoning-action-observation loop | Static scripts and one-shot prompts cannot adapt to observations from CRM, billing, search, or other tools |
| Vision, text, reranking, and other models must run concurrently on shared GPU hardware | **Triton Inference Server** for multi-model serving and dynamic batching | Triton schedules concurrent model workloads, batches requests, and keeps expensive GPU resources utilized across frameworks |

## Safety and oversight guidelines

Layered safety:

- Input guardrails.
- Retrieval isolation.
- Data-instruction separation.
- Tool permission checks.
- Output guardrails.
- Approval gates.
- Audit logs.
- Human escalation.

Human oversight:

- Auto-approve low-risk, reversible, high-confidence actions.
- Review medium-risk or moderate-confidence actions.
- Require approval for high-impact actions.
- Escalate low-confidence, sensitive, ambiguous, or regulated cases.
- Sample low-risk automation for audit.

Trap:

Approving everything creates reviewer overload. Approving nothing creates unmanaged risk. The exam prefers risk-based oversight.

## Readiness checklist

You are closer to ready when you can answer these without notes:

- Why does pure reactive fail a multi-step refund workflow?
- Why does pure deliberative fail a 200 ms alert SLA?
- Why is hybrid the answer for mixed fast-path and slow-path workloads?
- What is the difference between reactive and ReAct?
- When do you choose graph/workflow over ReAct?
- When do you resume from checkpoint instead of retrying from start?
- How do idempotency keys prevent duplicate writes?
- Why is output filtering too late for permissioned RAG?
- Which NVIDIA tool maps to serving, orchestration, retrieval, guardrails, evaluation, and profiling?
- Why do you evaluate trajectory instead of final answer only?
- What should be on an agent monitoring dashboard?
- When does human approval happen before execution?

## Preparation mistakes to avoid

| Mistake | Why it hurts | Better move |
|---|---|---|
| Only watching videos | Video feels productive but does not force active recall or scenario reasoning | Pair videos with practice questions and written wrong-reason notes |
| Skipping practice questions | Exam wording is precise and sometimes adversarial; two answers can be technically valid, but only one fits the scenario best | Practice hundreds of questions and review why each wrong option fails |
| Ignoring architecture | Architecture and design reasoning carry a large share of the exam's difficulty | Study failure modes, not definitions |
| Skimming qualifiers | Words like "most appropriate," "primary," "first," and "most likely" determine the answer | Underline the scenario constraint before reading answer choices |

Practice target:

- After week 2: take a timed mock to establish baseline.
- After week 3: retest and focus weak domains.
- After week 4: verify NVIDIA platform and RAG/tooling questions.
- After week 5: expect above 72% if coverage is working.
- Final week: aim for 75%+ consistently across timed mocks before scheduling.

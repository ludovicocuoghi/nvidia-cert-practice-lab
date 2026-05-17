# NCP-AAI Video Transcript Coverage Audit

Date: 2026-05-11

Sources used: user-provided video transcripts, checked against the current NVIDIA certification page at https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/.

## Polished Transcript Outline

The video is a preparation plan for the NVIDIA Certified Professional - Agentic AI exam (NCP-AAI). The core message is: study by domain weight, validate readiness with timed mocks, and do not skip NVIDIA-specific tooling.

Clean learner-facing version: `certifications/agentic_ai_professional/reference/transcript-derived-study-guidelines.md`.

### Exam basics

- Exam: NVIDIA Certified Professional - Agentic AI (NCP-AAI)
- Format: 60-70 questions
- Time: 120 minutes in the current local blueprint and NVIDIA page
- Passing score: 70%
- Validity: 2 years
- Delivery: Certiverse
- Cost: USD 200 on the NVIDIA page and in the transcript. This is useful learner context, but not currently represented in the app metadata.
- Question style from transcript: scenario/application-based questions, including single-select and multi-select.

### Corrected official domain weights

The transcript is directionally useful, but it underweights Deployment and Scaling. NVIDIA's current page and the repo blueprint list Deployment and Scaling as 13%, not 5%.

| Domain | Official weight | Transcript treatment | Repo status |
|---|---:|---|---|
| Agent Architecture and Design | 15% | High priority | Covered |
| Agent Development | 15% | High priority | Covered |
| Evaluation and Tuning | 13% | High priority | Covered |
| Deployment and Scaling | 13% | Transcript says 5% | Covered; repo has correct 13% |
| Cognition, Planning, and Memory | 10% | Medium priority | Covered |
| Knowledge Integration and Data Handling | 10% | Medium priority | Covered |
| NVIDIA Platform Implementation | 7% | Medium/critical | Covered |
| Run, Monitor, and Maintain | 5% | Transcript says 7% | Covered; repo has correct 5% |
| Safety, Ethics, and Compliance | 5% | Low priority | Covered |
| Human-AI Interaction and Oversight | 5% | Low priority | Covered |

### Clean study sequence

1. Weeks 1-2: Agent architecture and agent development.
   Focus on reactive vs deliberative vs hybrid agents, ReAct, plan-and-execute, graph/workflow agents, stateful orchestration, tool contracts, function calling, structured outputs, retries, graceful degradation, and workflow-state gates.

2. Week 3: Evaluation, tuning, cognition, planning, and memory.
   Focus on task success, trajectory evaluation, groundedness, p95/p99 latency, cost, user satisfaction, A/B or canary comparison, parameter controls, CoT vs ReAct, task decomposition, short-term memory, long-term memory, semantic/entity/episodic memory, reflection, and replanning.

3. Week 4: Knowledge integration and NVIDIA platform.
   Focus on RAG, hybrid retrieval, vector databases, metadata filtering, ETL/data quality, advanced retrieval variants, NeMo Guardrails, NIM, TensorRT-LLM, Triton Inference Server, NeMo Agent Toolkit, and NeMo Retriever.

4. Week 5: Deployment, scaling, and operations.
   Focus on containers, Kubernetes, HPA, load balancing, queues, workload isolation, canary/shadow/blue-green rollout, logging, tracing, dashboards, incident response, and continuous benchmarking.

5. Week 6: Safety, ethics, human oversight, and final validation.
   Focus on prompt injection, PII/privacy, approval gates, audit trails, bias/fairness, HITL/HOTL, review queues, escalation, explanations, and timed mock exams.

Readiness signal from transcript: consistently scoring above 75% across multiple timed mocks is a practical readiness threshold, not an official pass guarantee.

## Coverage Check

| Transcript topic | Local coverage | Verdict |
|---|---|---|
| Exam metadata: 60-70 questions, 70%, 2-year validity, Certiverse | `certifications/agentic_ai_professional/blueprint.json` | Covered |
| USD 200 price | Not stored in blueprint/UI | Gap: metadata only |
| Single-select and multi-select question formats | App `Question.answer` is a single number; grading expects one selected index | Gap: simulator supports single-select only |
| 50% discount / registration urgency | NVIDIA pages mention attendee discount codes, but current eligibility must be verified at registration | Covered as time-bound decision guidance |
| 90-minute claim in one transcript | Conflicts with the current NVIDIA page and local blueprint, which use 120 minutes | Corrected |
| Five-topic framing in the transcript series | Useful as a high-level study overview and close to NVIDIA's public topic grouping, but not the weighted scoring map | Clarified |
| 70-75 question count and "Nutanix" wording in latest transcript | Conflicts with current NVIDIA page and NCP-AAI naming; treated as transcript noise | Corrected |
| Who should take or skip the exam | Added to transcript-derived study guidelines | Covered after update |
| Certification as hiring signal, not job guarantee | Added to transcript-derived study guidelines | Covered after update |
| Six capability surfaces: architecture, orchestration, RAG, deployment, evaluation, production thinking | Added to transcript-derived study guidelines | Covered after update |
| 14-21 day experienced-engineer plan | Added to transcript-derived study guidelines | Covered after update |
| Common preparation mistakes | Added to transcript-derived study guidelines | Covered after update |
| Visual-question scenario patterns across five broad study groupings | Added to transcript-derived study guidelines as a scenario pattern bank | Covered after update |
| Enterprise deep-dive scenarios: NIM, guardrails, hybrid search/rerank, ReAct, Triton | Added to transcript-derived study guidelines as enterprise architecture patterns | Covered after update |
| ReAct loop and stop conditions | Architecture/cognition pages and General Study orchestration runtime | Covered |
| Reactive vs deliberative vs hybrid architecture | Added to Architecture and Design in this audit | Covered after update |
| Failure mode reasoning for wrong architecture choice | Added decision tables and customer-service/logistics style scenarios | Covered after update |
| ReAct vs plan-and-execute vs graph/workflow | Architecture and cognition pages | Covered |
| Looping on same tool / max iterations | Cognition loop detection and General orchestration budgets/stopping criteria | Covered |
| Stateful orchestration, checkpointing, recovery | Agent Development and General Study orchestration runtime | Covered |
| Human approval/interrupt gate before high-risk action | Human oversight and safety pages | Covered |
| Tool integration and function calling schema | Agent Development and NeMo Agent Toolkit service page | Covered |
| Strict JSON schema / guided decoding for tool argument types | Agent Development plus scenario pattern bank | Covered after update |
| MCP as shared tool-server protocol, not model router/runtime | Scenario pattern bank and agent development guidance | Covered after update |
| Retry with exponential backoff, circuit breaker, graceful degradation | Agent Development and Deployment pages | Covered |
| Prompt engineering and structured outputs | Agent Development and General prompt/context pages | Covered |
| Multimodal integration | Added to Agent Development in this audit | Covered after update |
| Evaluation pipelines and agent metrics | Evaluation, Run/Monitor, and General eval harness pages | Covered |
| Temperature/top-p/max-tokens parameter tuning | Added to Evaluation and Tuning in this audit | Covered after update |
| Short-term and long-term memory | Cognition page and memory store capability | Covered |
| CoT, task decomposition, planning strategies | Cognition page | Covered |
| RAG, hybrid search, vector DBs, ETL/data quality | Knowledge Integration page and Retriever/Curator services | Covered |
| HyDE, multi-query retrieval, metadata filtering | Added to Knowledge Integration in this audit | Covered after update |
| Query decomposition for comparison questions | Scenario pattern bank | Covered after update |
| BM25 + vector hybrid retrieval with RRF and reranking | Scenario pattern bank and Knowledge Integration page | Covered after update |
| NeMo Guardrails: PII, policy, Colang, fact checking | NeMo Guardrails service page and safety/platform pages | Covered |
| NIM optimized inference microservice | NVIDIA Platform, Deployment, and NIM service page | Covered |
| NIM for low-latency real-time tool-calling inference | NVIDIA Platform topic and enterprise architecture pattern bank | Covered after update |
| TensorRT-LLM: quantization, KV cache, batching | NVIDIA Platform, Deployment, and TensorRT-LLM service page | Covered |
| Cascade routing, prefix caching, and inflight batching | Scenario pattern bank plus platform/deployment pages | Covered after update |
| Triton: dynamic batching, multimodal serving, backends | NVIDIA Platform, Deployment, and Triton service page | Covered |
| Triton for concurrent multi-model workloads on shared GPU hardware | NVIDIA Platform topic and enterprise architecture pattern bank | Covered after update |
| Deployment/scaling, MLOps, monitoring dashboards | Deployment and Run/Monitor pages | Covered |
| Golden sets vs LLM-as-judge, trajectory evaluation, and data drift | Scenario pattern bank plus Evaluation and Run/Monitor pages | Covered after update |
| Safety, ethics, compliance | Safety page and Guardrails capability/service pages | Covered |
| Human-AI interaction and oversight | Human oversight page and General governance pages | Covered |
| Input/dialog/output rails, counterfactual fairness, reproducible audit logs | Scenario pattern bank plus Safety and Oversight pages | Covered after update |
| Mock validation strategy | App has original and generated timed mocks; coverage report tracks domain balance | Covered |

## Updates Made From The Transcript

- Added generation-parameter tuning cues to `topics/evaluation-and-tuning.md`: temperature, top-p, max tokens, and deterministic-output scenarios.
- Added advanced retrieval variants to `topics/knowledge-integration-and-data-handling.md`: multi-query/query expansion, HyDE, and metadata-filtered retrieval.
- Added multimodal agent integration to `topics/agent-development.md`: modality-specific parsers/models, structured observations, and NVIDIA serving boundaries.
- Expanded ReAct and recovery guidance across architecture/development/cognition: detailed loop state, stop conditions, stateless vs. stateful orchestration, checkpoints, idempotency, circuit breakers, and what to choose when a workflow breaks.
- Added reactive/deliberative/hybrid architecture tradeoffs to `topics/agent-architecture-and-design.md`, including the mixed-SLA pattern: reactive fast path for acknowledgement/routing plus deliberative slow path for multi-step tool coordination.
- Added decision guidance from the discount/career transcript to `transcript-derived-study-guidelines.md`: good-fit and poor-fit candidate profiles, certification signal limits, six capability surfaces, 14-21 day plan, and preparation mistakes.
- Added a scenario pattern bank to `transcript-derived-study-guidelines.md`: plan-and-execute vs reflexion, live-data ReAct, memory types, scratchpad memory, hybrid orchestration, query decomposition, JSON-schema tool contracts, MCP tool servers, hybrid retrieval, cascade routing, prefix caching, NIM production deployment, inflight batching, eval stacks, trajectory evaluation, data drift, runtime rails, counterfactual fairness, and reproducible audit logging.
- Added the enterprise deep-dive transcript cues to `transcript-derived-study-guidelines.md`: NIM for low-latency tool calling, programmable input/output guardrails for domain control, hybrid search plus cross-encoder reranking for retrieval precision, ReAct for dynamic tool paths, and Triton for concurrent multi-model GPU serving.

## Full App Text Pass

After the transcript cleanup, I checked the learner-visible app text surfaces instead of leaving the new material only in the reference guide:

- NCP-AAI official topic pages in `certifications/agentic_ai_professional/topics/`
- Agentic AI General Study capability playbooks in `certifications/agentic_ai_general_study/capabilities/`
- Shared NVIDIA service cards in `certifications/_shared/services/`
- The client service map in `client/src/data/study-services.js`

Updates from this full pass:

- Promoted transcript scenario traps into the main topic pages: plan-and-execute vs reflexion, linear multi-agent overuse, scratchpad vs long-context/KV cache, query decomposition, guided decoding, MCP tool servers, prefix caching, cascade routing, golden sets vs LLM-as-judge, data drift, counterfactual fairness, and replayable audit logs.
- Updated General Study playbooks so vendor-neutral study views also cover query decomposition, cascade routing, prefix caching, and combined golden-set/LLM-judge/human-review eval stacks.
- Updated the client service map so Triton Inference Server, TensorRT-LLM, and Nsight Compute are visible for Agentic AI study, matching the NCP-AAI platform/deployment content.
- Left generated practice history, learner profile, mistakes, sessions, and mock result logs unchanged because those are learner/session artifacts rather than canonical study text.

## Remaining Product Gaps

1. Multi-select practice questions are not supported by the current app data model or grading path.
   - Current type: `Question.answer: number`
   - Current grading: selected index equals single answer index
   - Impact: the content can teach multi-answer concepts, but the simulator cannot yet reproduce multi-select exam mechanics.

2. Exam price is not displayed in the app metadata.
   - This is low risk for study coverage, but useful for learner context.

## Bottom Line

The repo covers the transcript's study substance well, and the blueprint is more current than the transcript on domain weights. The only meaningful remaining gap for exam realism is multi-select support in the simulator.

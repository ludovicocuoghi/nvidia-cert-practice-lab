# Knowledge from Mock Tests

Source: `certifications/agentic_ai_professional/mocks/mock_1_full.md` through `mock_5_full.md`.

Scope: original NVIDIA Agentic AI Professional mock exams only. Generated/improved mocks were not used.

## What the mocks actually test

The five original mocks contain 300 questions total, 60 per mock. They are not mainly product-name memorization tests. They mostly test whether you can choose the right lifecycle pattern for an agentic system under constraints.

The repeated knowledge shape is:

1. Build an agent application around existing models.
2. Integrate private or live knowledge through RAG, APIs, ETL, vector stores, and knowledge graphs.
3. Manage reasoning, planning, memory, tool use, and multi-agent coordination.
4. Evaluate task success, trajectories, latency, safety, and user feedback.
5. Deploy and scale with Kubernetes, autoscaling, tracing, rollout, retries, fallback, and monitoring.
6. Enforce safety, auditability, compliance, RBAC, human oversight, and escalation.

Training and fine-tuning appear, but they are secondary. Training a model from zero is mostly a reference lifecycle, not the center of the Agentic AI exam.

## Frequency signals from the mocks

These keyword counts are approximate raw text hits across the five original markdown mocks. They are useful as direction, not as exact domain weights.

| Signal | Approx. hits | Meaning |
|---|---:|---|
| memory | 171 | Memory is one of the strongest repeated themes. Know short-term, episodic, semantic, long-term, vector memory, TTL, recency, and retrieval gates. |
| prompt | 115 | Prompt chains, few-shot examples, constrained formats, CoT/ReAct, and intermediate validations appear often. |
| human | 99 | Oversight, escalation, approval, override, confidence thresholds, and explainability are heavily tested. |
| API | 83 | Agents are expected to call external systems through tools/functions safely. |
| latency | 83 | Performance questions usually ask for caching, parallelism, streaming, autoscaling, tracing, or smaller/quantized models. |
| tool | 79 | Tool schemas, wrappers, permissions, retries, and function-calling patterns are core. |
| RAG | 65 | Retrieval and knowledge grounding are core. |
| vector | 60 | Vector databases, embeddings, ANN/HNSW, hybrid retrieval, and vector memory are common. |
| evaluation | 45 | Task-specific metrics, trajectory evaluation, expert scoring, A/B/shadow tests, and regression checks recur. |
| planning | 44 | ReAct, CoT, HTN, BDI, plan-act-observe, task decomposition, and re-planning matter. |
| retrain | 34 | Retraining/fine-tuning shows up as improvement loop, but not as the main path. |
| Kubernetes | 22 | Deployment/scaling questions often expect Kubernetes, HPA, ingress, load balancing, and microservices. |
| audit | 22 | Audit trails, immutable logs, lineage, model inputs/outputs, and decision traces are important. |
| NeMo | 22 | NVIDIA-specific questions exist, but they are a minority compared with general agent engineering. |
| Guardrails | 16 | NeMo Guardrails is a core NVIDIA mapping for safety/policy, not model training. |
| Triton / TensorRT | 13 / 12 | Inference optimization and serving appear, but usually as deployment/performance support. |
| Nsight | 5 | Know the distinction, but it is not a dominant theme. |
| Retriever | 5 | The service name is less frequent than the concept of RAG/retrieval, but the mapping matters. |

## Strictly necessary knowledge buckets

### 1. Agent architecture and coordination

Must know:

- Agent vs workflow vs multi-agent system.
- Modular architecture with separate planning, memory, tool, retrieval, and action components.
- Supervisor/orchestrator, central planner, peer-to-peer agents, blackboard/shared memory, event-driven messaging.
- Message schemas, shared ontologies, role specialization, and state handoffs.
- Separation of concerns: do not merge model serving, retrieval, memory, safety, and orchestration into one vague layer.

Mock signals:

- "central planner," "task-specific components," "shared blackboard," "peer-to-peer protocol," "structured message schemas," "micro-agent architecture."

### 2. Reasoning, planning, and memory

Must know:

- CoT, ReAct, plan-act-observe, dynamic prompt chains, HTN planning, BDI, heuristic search, symbolic planning, and re-planning.
- Short-term conversation state vs task state vs long-term memory.
- Hybrid memory: compact working memory plus long-term vector store.
- Episodic memory for prior interactions; semantic memory for facts/preferences.
- TTL, recency, source tracking, metadata filters, relevance gates, and loop detection.

Mock signals:

- "sliding window," "vector store," "episodic memory," "scratchpad," "tool invocation history," "stateful orchestration," "checkpointed transitions."

### 3. Knowledge integration and data handling

Must know:

- RAG for external, private, fresh, or changing knowledge.
- Hybrid retrieval over structured APIs/SQL and unstructured documents.
- ETL: extract, clean, normalize, validate, map schemas, handle missing/duplicate/inconsistent values.
- Vector databases, embeddings, ANN/HNSW, shard-based indexing, reranking, metadata filtering, source citations.
- Knowledge graphs for explicit entity relationships and multi-hop reasoning.
- Refresh vector stores and regenerate embeddings when knowledge changes.

Mock signals:

- "SQL + vector search," "logs and CMDB," "structured APIs + document retrieval," "knowledge graph," "hybrid semantic search," "unified structured representations."

### 4. Tool use and agent development

Must know:

- Function/tool wrappers around APIs.
- Schema validation, typed tool I/O, preconditions, permissions, idempotency, audit logs.
- Parallelize independent read-only tool calls; sequence dependent writes.
- Retry with exponential backoff and max limits; fallback when dependencies fail.
- Sandbox code execution; never let the model be the security boundary.
- Output shaping: summaries and key fields, not raw JSON dumps into context.

Mock signals:

- "custom tool performs HTTP GET," "REST APIs via custom functions," "structured plan-act-observe schema with JSON action messages," "agent-level retries," "task queue."

### 5. Evaluation and tuning

Must know:

- Task-specific metrics, not one metric for everything.
- Evaluate final answer and trajectory: tool correctness, groundedness, task completion, path optimality, latency, cost, safety, escalation success.
- Expert scoring, numeric ratings, domain-specific labeled datasets.
- A/B testing, shadow deployment, canary evaluation, regression suites.
- Tuning options: prompts/examples first, RAG for knowledge, fine-tuning for durable behavior, quantization/distillation for latency.

Mock signals:

- "task-specific metrics," "expert reviewers," "gold-standard references," "ROUGE/BERTScore," "shadow deployment," "performance-based gating."

### 6. Deployment, scaling, and operations

Must know:

- Containerized microservices, Kubernetes, ingress, load balancers, HPA/autoscaling.
- Stateless services for horizontal scale; state in external stores.
- Multi-region deployment, failover, state synchronization.
- Queues, asynchronous messaging, retries, fallback, pre-warmed instances.
- Caching frequent tool outputs/subgoals, streaming responses, reducing context, quantization, smaller/distilled models.
- Distributed tracing, telemetry, logs, GPU utilization, inference load metrics, P95/TTFT.

Mock signals:

- "Kubernetes with Ingress/HPA/LoadBalancer," "blue-green deployment," "shadow deployment," "P95 latency," "TTFT," "distributed tracing," "Prometheus/Grafana."

### 7. Safety, ethics, compliance, and human oversight

Must know:

- Layered safety: input filters, retrieval checks, tool/action controls, output checks, escalation.
- Prompt injection and unsafe retrieved content.
- RBAC, immutable audit trails, privacy, PII redaction, licensing, legal restrictions.
- High-risk workflows require approval, override, confidence-based routing, and human review.
- Transparency, explanations, rationale, confidence display, bias/fairness controls.

Mock signals:

- "role-based access control," "immutable audit trails," "human override," "confidence thresholds," "review dashboard," "legal counsel," "bias and fairness."

## NVIDIA service necessity matrix

Use this as the exam-study priority list, not as an exhaustive NVIDIA product catalog.

| Priority | Service / tool | Why it matters for Agentic AI | Where it belongs |
|---|---|---|---|
| Core | NeMo Agent Toolkit | Agent workflow/orchestration, tools, memory, evaluation/profiling hooks, existing framework integration. | Build agent, evaluate agent, observe workflow |
| Core | NeMo Guardrails | Runtime safety and policy: input, retrieval, dialog, execution/tool, output rails. | Build agent, safety/compliance |
| Core | NeMo Retriever | Enterprise RAG: extraction, embeddings, indexing, retrieval, rerank/citations. | Process runtime knowledge |
| Core | NIM | Production inference API for models used by agents. | Use existing model, deploy agent |
| Core | NeMo Evaluator | Model/agent quality, benchmarks, judge workflows, regression checks. | Evaluate model/agent |
| Supporting | NIM Operator | Kubernetes lifecycle for NIM/NeMo microservices. Important when deployment is K8s/scale. | Deploy/operate |
| Supporting | TensorRT-LLM / TensorRT | Inference throughput, latency, batching, quantization, GPU optimization. | Inference optimization |
| Supporting | Triton Inference Server / Dynamo | Multi-model or distributed serving. Important in advanced deployment/performance scenarios. | Deploy/serve at scale |
| Supporting | Nsight Systems / Nsight Compute | Performance diagnosis. Systems first for timeline; Compute after a kernel is identified. | Run/monitor/maintain |
| Secondary | NeMo Customizer / NeMo Framework | Fine-tuning/customization when behavior must change. Useful, but not the main Agentic AI path. | Fine-tune existing model |
| Optional / scenario-specific | NeMo Curator | Data curation for training/tuning datasets; can help prep corpora or sanitize data, but RAG ingestion is more directly Retriever. | Training/tuning data; optional knowledge prep |
| Optional / scenario-specific | RAPIDS | GPU data processing. Useful if the scenario is large-scale dataframe/preprocessing, not core agent orchestration. | Data processing |
| Reference only for NCP-AAI | NCCL | Multi-GPU communication for training/scaling. Know as adjacent GPU concept, not core agent knowledge. | Train from zero / distributed training |
| Reference only for NCP-AAI | Training from zero stack | Valid ML lifecycle, but not the exam's center. | Reference lane only |

## Recommended lifecycle lanes for the Agentic AI app

The app should not present the four lanes as equally important.

### Core lane 1: Build agent application

This should be the top / most important lane.

Path:

1. Process runtime knowledge: NeMo Retriever core; Curator/RAPIDS optional for cleanup or large preprocessing.
2. Choose model: Nemotron/model family or existing model; NGC optional as artifact catalog.
3. Build agent: NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever.
4. Evaluate agent: NeMo Evaluator plus NeMo Agent Toolkit eval/profiling.
5. Deploy and operate: NIM core; NIM Operator/Dynamo/Nsight optional depending on scale and diagnostics.

### Core lane 2: Use existing model for inference

This is common because agents usually call existing model APIs/endpoints.

Path:

1. Choose existing model.
2. Deploy inference endpoint.

Core tools: NIM, model family/Nemotron. Optional: NIM Operator, Dynamo, Triton/TensorRT-LLM when the question is about serving mechanics or optimization.

### Secondary lane: Fine-tune existing model

Useful, but not central.

Path:

1. Process tuning data.
2. Fine-tune behavior.
3. Evaluate tuned model.
4. Deploy tuned endpoint.

Core tools: NeMo Customizer for LoRA/PEFT-style customization, NeMo Framework for heavier SFT/alignment, NeMo Evaluator, NIM. Curator/RAPIDS are optional data-prep helpers.

### Reference-only lane: Train model from zero

Keep this as an anchor lifecycle, but visually mark it as reference/background for NCP-AAI.

Path:

1. Process training corpus.
2. Train model.
3. Evaluate model.
4. Deploy model.

Tools: NeMo Curator, RAPIDS, NeMo Framework, NCCL, NGC, NeMo Evaluator, NIM. These are real NVIDIA tools, but full pretraining is not a main Agentic AI certification focus.

## Comparison with current Agentic AI study materials

Current topic pages are content-rich and mostly correct. The issue is not missing content; it is prioritization.

Keep as core:

- Agent Architecture and Design
- Agent Development
- Cognition, Planning, and Memory
- Knowledge Integration and Data Handling
- Evaluation and Tuning
- Deployment and Scaling
- Safety, Ethics, and Compliance
- Human-AI Interaction and Oversight
- Run, Monitor, and Maintain

Tighten / de-emphasize:

- NVIDIA Platform Implementation should separate **core Agentic services** from **supporting platform tools** and **reference-only training tools**.
- Training from zero should not look equally important next to building agent apps.
- RAPIDS, NCCL, full training, and low-level GPU details should be presented as scenario-specific or adjacent, not required centerline knowledge.

The study UI should teach this order:

1. Agent application lifecycle.
2. Existing model inference lifecycle.
3. Fine-tuning lifecycle as secondary.
4. Training from zero as reference-only.


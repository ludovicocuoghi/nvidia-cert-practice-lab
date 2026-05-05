# High Fidelity Generated Questions 005

## Questions

### Q1: A manufacturing quality team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-025
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: medium
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training-time data curation.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training-time data curation.

### Q2: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-026
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: A
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.

### Q3: An insurance claims group is preparing a production rollout. Prevent duplicate mutations during retries is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-training-data-curation-pipeline-027
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training-time data curation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Training-time data curation.

### Q4: A logistics planning team is reviewing the production design. Preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-training-data-curation-pipeline-028
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: easy
- A. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: C
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Training-time data curation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training-time data curation.

### Q5: A manufacturing quality team has narrowed the next implementation step. The project team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-training-data-curation-pipeline-029
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: hard
- A. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: D
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Training-time data curation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Training-time data curation.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Training-time data curation.

### Q6: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts. Which NVIDIA component should own this step?
- ID: ags-hf-svc-training-data-curation-pipeline-030
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Training Data Curation Pipeline; lifecycle: Training-time data curation; Which lifecycle component turns raw corpora or examples into safe learning data?
- Difficulty: expert
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: B
- Explanation: Training Data Curation Pipeline is the best fit because it sits in Training-time data curation: Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Training-time data curation.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training-time data curation.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training-time data curation.

### Q7: A telecom network operations team is reviewing the production design. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.

### Q8: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.

### Q9: A semiconductor design group is preparing a release decision. Avoid contaminating evaluation holdouts is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.

### Q10: A hospital operations team has narrowed the next implementation step. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q11: A global retailer is reviewing the production design. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.

### Q12: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-006
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Runtime knowledge preparation.

### Q13: A bank fraud team is preparing a release decision. Keeping fresh private documents out of model weights is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-007
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Runtime knowledge preparation.

### Q14: A hospital operations team has narrowed the next implementation step. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-008
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: easy
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q15: A telecom network operations team is reviewing the production design. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-009
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Runtime knowledge preparation.

### Q16: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-010
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.

### Q17: A hospital operations team has narrowed the next implementation step. Supporting rollback after a bad deployment is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-011
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Runtime knowledge preparation.

### Q18: A semiconductor design group is preparing a release decision. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-012
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.

### Q19: An insurance claims group is preparing a production rollout. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-013
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.

### Q20: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-014
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- D. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.

### Q21: A public-sector casework team has narrowed the next implementation step. Routing low-risk and high-risk requests differently is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-015
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.

### Q22: A cybersecurity response team is preparing a release decision. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-016
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Runtime knowledge preparation.

### Q23: An insurance claims group is preparing a production rollout. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-017
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.

### Q24: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-018
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.

### Q25: A hospital operations team has narrowed the next implementation step. Supporting rollback after a bad deployment is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-019
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.

### Q26: A bank fraud team is preparing a release decision. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-020
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.

### Q27: A cybersecurity response team is preparing a release decision. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-021
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.

### Q28: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-022
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Runtime knowledge preparation.

### Q29: A global retailer is reviewing the production design. Reducing GPU cost without lowering answer quality is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-023
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Runtime knowledge preparation.

### Q30: An insurance claims group is preparing a production rollout. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-024
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- D. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.

### Q31: A semiconductor design group is preparing a release decision. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-025
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: medium
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q32: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-026
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: C
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Runtime knowledge preparation.

### Q33: A telecom network operations team is reviewing the production design. Enforcing least-privilege access to tools is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-027
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.

### Q34: An insurance claims group is preparing a production rollout. Preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-028
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: easy
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- D. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: A
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.

### Q35: A semiconductor design group is preparing a release decision. A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-029
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: hard
- A. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: B
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Runtime knowledge preparation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Runtime knowledge preparation.

### Q36: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-ingestion-and-permission-pipeline-030
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge Ingestion and Permission Pipeline; lifecycle: Runtime knowledge preparation; Which lifecycle component prepares private documents before RAG retrieval?
- Difficulty: expert
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: D
- Explanation: Knowledge Ingestion and Permission Pipeline is the best fit because it sits in Runtime knowledge preparation: Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Runtime knowledge preparation.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Runtime knowledge preparation.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Runtime knowledge preparation.

### Q37: A hospital operations team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-001
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q38: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-002
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- C. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Model selection.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.

### Q39: An automotive support team is preparing a production rollout. Avoid mistaking the model itself for the endpoint that serves it is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-003
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.

### Q40: A global retailer is reviewing the production design. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-004
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.

### Q41: A manufacturing quality team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-005
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Model selection.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.

### Q42: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-006
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- C. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Model selection.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.

### Q43: An automotive support team is preparing a production rollout. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-007
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.

### Q44: A telecom network operations team is reviewing the production design. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-008
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: easy
- A. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Model selection.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q45: A public-sector casework team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-009
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Model selection.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Model selection.

### Q46: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-010
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q47: A bank fraud team is preparing a release decision. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-011
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q48: A manufacturing quality team has narrowed the next implementation step. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-012
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Model selection.

### Q49: A logistics planning team is reviewing the production design. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-013
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q50: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-014
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Model selection.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Model selection.

### Q51: A bank fraud team is preparing a release decision. Tracking which model family fits reasoning, reward, or instruction-following requirements is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-015
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Model selection.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Model selection.

### Q52: A hospital operations team has narrowed the next implementation step. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-016
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.

### Q53: A telecom network operations team is reviewing the production design. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-017
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Model selection.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.

### Q54: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-018
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Model selection.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.

### Q55: A semiconductor design group is preparing a release decision. Avoid mistaking the model itself for the endpoint that serves it is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-019
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Model selection.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Model selection.

### Q56: A hospital operations team has narrowed the next implementation step. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-020
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Model selection.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Model selection.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.

### Q57: A hospital operations team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-021
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Model selection.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.

### Q58: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-022
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- C. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q59: An automotive support team is preparing a production rollout. Choosing the correct model family and separate that choice from serving infrastructure is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-023
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Model selection.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Model selection.

### Q60: A telecom network operations team is reviewing the production design. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-024
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.

### Q61: A manufacturing quality team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-025
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: medium
- A. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Model selection.

### Q62: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-026
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why C is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q63: A pharmaceutical research team is preparing a production rollout. Choosing the correct model family and separate that choice from serving infrastructure is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-selection-and-registry-027
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Model selection.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.

### Q64: A logistics planning team is reviewing the production design. Deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-selection-and-registry-028
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: easy
- A. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: C
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Model selection.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Model selection.

### Q65: A manufacturing quality team has narrowed the next implementation step. The enterprise needs to know which adapter, prompt version, and eval report support the model currently in production. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-selection-and-registry-029
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: hard
- A. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: D
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Model selection.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Model selection.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Model selection.

### Q66: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-selection-and-registry-030
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Selection and Registry; lifecycle: Model selection; Which layer tracks approved model artifacts and rollback versions?
- Difficulty: expert
- A. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: B
- Explanation: Model Selection and Registry is the best fit because it sits in Model selection: Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Model selection.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Model selection.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Model selection.

### Q67: A bank fraud team is preparing a release decision. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-001
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- D. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Foundation training.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.

### Q68: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-002
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q69: A global retailer is reviewing the production design. Keeping p95 latency predictable is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-003
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.

### Q70: A pharmaceutical research team is preparing a production rollout. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-004
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q71: A cybersecurity response team is preparing a release decision. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-005
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.

### Q72: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-006
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Foundation training.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q73: A telecom network operations team is reviewing the production design. Keeping p95 latency predictable is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-007
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.

### Q74: A pharmaceutical research team is preparing a production rollout. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-008
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: easy
- A. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Foundation training.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q75: A semiconductor design group is preparing a release decision. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-009
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.

### Q76: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-010
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q77: An insurance claims group is preparing a production rollout. Prevent duplicate mutations during retries is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-011
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.

### Q78: A global retailer is reviewing the production design. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-012
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- C. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Foundation training.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.

### Q79: A public-sector casework team has narrowed the next implementation step. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-013
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.

### Q80: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-014
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- C. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Foundation training.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q81: An insurance claims group is preparing a production rollout. Preserve audit evidence for every release is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-015
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.

### Q82: A logistics planning team is reviewing the production design. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-016
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q83: A public-sector casework team has narrowed the next implementation step. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-017
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Foundation training.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.

### Q84: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-018
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Foundation training.

### Q85: An automotive support team is preparing a production rollout. Prevent duplicate mutations during retries is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-019
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Foundation training.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Foundation training.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.

### Q86: A global retailer is reviewing the production design. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-020
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Foundation training.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Foundation training.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Foundation training.

### Q87: A global retailer is reviewing the production design. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-021
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q88: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-022
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Foundation training.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q89: A bank fraud team is preparing a release decision. Isolate tenant data before model context is assembled is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-023
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Foundation training.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Foundation training.

### Q90: A manufacturing quality team has narrowed the next implementation step. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-024
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q91: A global retailer is reviewing the production design. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-025
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: medium
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Foundation training.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Foundation training.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Foundation training.

### Q92: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-026
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: B
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Foundation training.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q93: A semiconductor design group is preparing a release decision. Keeping fresh private documents out of model weights is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-foundation-model-training-stack-027
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Foundation training.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Foundation training.

### Q94: A manufacturing quality team has narrowed the next implementation step. Creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-foundation-model-training-stack-028
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: easy
- A. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: D
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Foundation training.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Foundation training.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Foundation training.

### Q95: A logistics planning team is reviewing the production design. A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-foundation-model-training-stack-029
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: hard
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Foundation training.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Foundation training.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Foundation training.

### Q96: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-foundation-model-training-stack-030
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Foundation Model Training Stack; lifecycle: Foundation training; Which lifecycle component owns full model training or continued pretraining?
- Difficulty: expert
- A. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: A
- Explanation: Foundation Model Training Stack is the best fit because it sits in Foundation training: Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Foundation training.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Foundation training.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Foundation training.

### Q97: A bank fraud team is preparing a release decision. A claims assistant must learn a company-specific decision rubric while still retrieving current policy text. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-customization-toolkit-001
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: expert
- A. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: D
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for Model Customization Toolkit: to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Training and customization.

### Q98: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to change durable behavior, style, rubric-following, or domain task adaptation learned from examples. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-customization-toolkit-002
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: medium
- A. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: A
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Training and customization.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q99: A logistics planning team is reviewing the production design. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-customization-toolkit-003
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: hard
- A. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: B
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Framework is a neighboring training and customization component, but this signal asks specifically for Model Customization Toolkit: to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training and customization.

### Q100: An automotive support team is preparing a production rollout. Changing durable behavior, style, rubric-following, or domain task adaptation learned from examples is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-customization-toolkit-004
- Domain: Model Selection and Customization
- Topic: NVIDIA service: Model Customization Toolkit; lifecycle: Training and customization; When is customization better than only changing retrieval?
- Difficulty: expert
- A. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: Model Customization Toolkit is the best fit because it sits in Training and customization: Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Training and customization.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

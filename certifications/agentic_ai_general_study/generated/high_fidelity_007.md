# High Fidelity Generated Questions 007

## Questions

### Q1: A global retailer is reviewing the production design. Separating model planning from server-side function execution is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-015
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- A. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Tool execution.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Tool execution.

### Q2: An insurance claims group is preparing a production rollout. Exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-016
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Tool execution.

### Q3: A semiconductor design group is preparing a release decision. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. Which NVIDIA component should own this step?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-017
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: D
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Tool execution.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q4: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-018
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- A. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: A
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Tool execution.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Tool execution.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.

### Q5: A logistics planning team is reviewing the production design. Validating tool schemas, permissions, retries, and mutating API calls before execution is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-019
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Tool execution.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q6: An insurance claims group is preparing a production rollout. Exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-020
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Tool execution.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Tool execution.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q7: An insurance claims group is preparing a production rollout. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. Which NVIDIA component should the team use?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-021
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: expert
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Tool execution.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q8: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-022
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: D
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Tool execution.

### Q9: A hospital operations team has narrowed the next implementation step. Separating model planning from server-side function execution is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-023
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Tool execution.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.

### Q10: A semiconductor design group is preparing a release decision. Exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-024
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: expert
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Tool execution.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Tool execution.

### Q11: A pharmaceutical research team is preparing a production rollout. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. Which NVIDIA component should the team use?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-025
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: medium
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: A
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Tool execution.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.

### Q12: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-026
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: D
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Tool execution.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Tool execution.

### Q13: A public-sector casework team has narrowed the next implementation step. Keeping credentials and action approval outside the model prompt is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-027
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Tool execution.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Tool execution.

### Q14: A bank fraud team is preparing a release decision. Exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-028
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: easy
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Tool execution.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Tool execution.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Tool execution.

### Q15: An insurance claims group is preparing a production rollout. An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution. Which NVIDIA component should the team use?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-029
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: hard
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: A
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Tool execution.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Tool execution.

### Q16: A global retailer is reviewing the production design. The rollout is blocked because the team needs to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-tool-gateway-and-function-runtime-030
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Tool Gateway and Function Runtime; lifecycle: Tool execution; Which component enforces schemas and permissions before tools run?
- Difficulty: expert
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: C
- Explanation: Tool Gateway and Function Runtime is the best fit because it sits in Tool execution: Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Tool execution.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Tool execution.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Tool execution.

### Q17: A pharmaceutical research team is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-001
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q18: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-002
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q19: A manufacturing quality team has narrowed the next implementation step. Separating retrieval quality from fine-tuning and serving infrastructure is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-003
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.

### Q20: A bank fraud team is preparing a release decision. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-004
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- C. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for RAG and retrieval.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q21: An insurance claims group is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q22: A global retailer is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-006
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for RAG and retrieval.

### Q23: A public-sector casework team has narrowed the next implementation step. Extracting, embedding, index, retrieve, rerank, and assemble private knowledge at query time is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-007
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.

### Q24: A cybersecurity response team is preparing a release decision. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-008
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: easy
- A. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for RAG and retrieval.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.

### Q25: An automotive support team is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-009
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for RAG and retrieval.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.

### Q26: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-010
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- D. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.

### Q27: A telecom network operations team is reviewing the production design. Extracting, embedding, index, retrieve, rerank, and assemble private knowledge at query time is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-011
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.

### Q28: A pharmaceutical research team is preparing a production rollout. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-012
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.

### Q29: A cybersecurity response team is preparing a release decision. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-013
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for RAG and retrieval.

### Q30: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-014
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q31: A telecom network operations team is reviewing the production design. Grounding answers in current documents without changing model weights is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-015
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.

### Q32: An automotive support team is preparing a production rollout. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-016
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q33: A semiconductor design group is preparing a release decision. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-017
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.

### Q34: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-018
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for RAG and retrieval.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.

### Q35: A telecom network operations team is reviewing the production design. Grounding answers in current documents without changing model weights is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-019
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for RAG and retrieval.

### Q36: A pharmaceutical research team is preparing a production rollout. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-020
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- D. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for RAG and retrieval.

### Q37: A pharmaceutical research team is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-021
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q38: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-022
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.

### Q39: A public-sector casework team has narrowed the next implementation step. Extracting, embedding, index, retrieve, rerank, and assemble private knowledge at query time is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-023
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for RAG and retrieval.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for RAG and retrieval.

### Q40: A cybersecurity response team is preparing a release decision. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-024
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for RAG and retrieval.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.

### Q41: A pharmaceutical research team is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-025
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for RAG and retrieval.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.

### Q42: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-026
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for RAG and retrieval.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.

### Q43: A hospital operations team has narrowed the next implementation step. Extracting, embedding, index, retrieve, rerank, and assemble private knowledge at query time is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-027
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for RAG and retrieval.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q44: A cybersecurity response team is preparing a release decision. Grounding answers in private, changing, or source-grounded knowledge at query time without changing weights is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-028
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: easy
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: A
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for RAG and retrieval.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for RAG and retrieval.

### Q45: A pharmaceutical research team is preparing a production rollout. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which NVIDIA component should the team use?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-029
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: hard
- A. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: B
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for RAG and retrieval.

### Q46: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to ground answers in private, changing, or source-grounded knowledge at query time without changing weights. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-030
- Domain: Data Curation and Knowledge Grounding
- Topic: NVIDIA service: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: expert
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for RAG and retrieval.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for RAG and retrieval.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for RAG and retrieval.

### Q47: A cybersecurity response team is preparing a release decision. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-001
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Memory and state.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Memory and state.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.

### Q48: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-002
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Memory and state.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q49: A global retailer is reviewing the production design. Storing scoped task state, user preferences, and reusable facts with consent and expiry is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-003
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Memory and state.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q50: A pharmaceutical research team is preparing a production rollout. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-004
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Memory and state.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.

### Q51: A cybersecurity response team is preparing a release decision. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-005
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Memory and state.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q52: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-006
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- B. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.

### Q53: A global retailer is reviewing the production design. Separating memory from RAG over external documents is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-007
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Memory and state.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q54: An insurance claims group is preparing a production rollout. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-008
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: easy
- A. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q55: A bank fraud team is preparing a release decision. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-009
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Memory and state.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Memory and state.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q56: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-010
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.

### Q57: A pharmaceutical research team is preparing a production rollout. Separating memory from RAG over external documents is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-011
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Memory and state.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Memory and state.

### Q58: A logistics planning team is reviewing the production design. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-012
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Memory and state.

### Q59: A manufacturing quality team has narrowed the next implementation step. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-013
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.

### Q60: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-014
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.
- Why D is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Memory and state.

### Q61: An insurance claims group is preparing a production rollout. Separating memory from RAG over external documents is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-015
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Memory and state.

### Q62: A logistics planning team is reviewing the production design. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-016
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Memory and state.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q63: A hospital operations team has narrowed the next implementation step. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-017
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Memory and state.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Memory and state.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.

### Q64: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-018
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Memory and state.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.

### Q65: An automotive support team is preparing a production rollout. Separating memory from RAG over external documents is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-019
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.

### Q66: A logistics planning team is reviewing the production design. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-020
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Memory and state.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q67: A telecom network operations team is reviewing the production design. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-021
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Memory and state.

### Q68: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-022
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Memory and state.

### Q69: A bank fraud team is preparing a release decision. Making recalled state permission-safe and traceable is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-023
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Memory and state.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.

### Q70: A hospital operations team has narrowed the next implementation step. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-024
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.

### Q71: A global retailer is reviewing the production design. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-025
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- A. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Memory and state.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.

### Q72: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-026
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Memory and state.

### Q73: A semiconductor design group is preparing a release decision. Making recalled state permission-safe and traceable is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-memory-store-027
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Memory and state.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Memory and state.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q74: A hospital operations team has narrowed the next implementation step. Remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-memory-store-028
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: easy
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Memory and state.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Memory and state.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q75: A global retailer is reviewing the production design. A travel assistant must remember a user's seating preference but expire one-time trip details after the trip. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-memory-store-029
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- A. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- C. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Memory and state.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q76: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which NVIDIA component should the team use?
- ID: ags-hf-svc-memory-store-030
- Domain: Tooling, Orchestration, and Memory
- Topic: NVIDIA service: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- A. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Memory and state.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Memory and state.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.

### Q77: A semiconductor design group is preparing a release decision. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-001
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q78: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-002
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.

### Q79: A logistics planning team is reviewing the production design. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-003
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

### Q80: An insurance claims group is preparing a production rollout. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-004
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.

### Q81: A cybersecurity response team is preparing a release decision. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-005
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.

### Q82: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-006
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- C. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q83: A telecom network operations team is reviewing the production design. Blocking unsafe requests or tool proposals before they become user-visible actions is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-007
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q84: An automotive support team is preparing a production rollout. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-008
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: easy
- A. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q85: A semiconductor design group is preparing a release decision. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-009
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q86: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-010
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Safety and guardrails.

### Q87: A pharmaceutical research team is preparing a production rollout. Blocking unsafe requests or tool proposals before they become user-visible actions is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-011
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.

### Q88: A telecom network operations team is reviewing the production design. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-012
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q89: A hospital operations team has narrowed the next implementation step. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-013
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q90: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-014
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Safety and guardrails.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q91: An insurance claims group is preparing a production rollout. Blocking unsafe requests or tool proposals before they become user-visible actions is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-015
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Safety and guardrails.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q92: A logistics planning team is reviewing the production design. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-016
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q93: A manufacturing quality team has narrowed the next implementation step. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-017
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- D. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Safety and guardrails.

### Q94: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-018
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.

### Q95: An automotive support team is preparing a production rollout. Enforcing input, dialog, retrieval, tool, and output policies around the model is the next release blocker. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-019
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.

### Q96: A logistics planning team is reviewing the production design. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-020
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q97: A global retailer is reviewing the production design. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-021
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q98: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-022
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

### Q99: A bank fraud team is preparing a release decision. Enforcing input, dialog, retrieval, tool, and output policies around the model is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-023
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.

### Q100: A public-sector casework team has narrowed the next implementation step. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-024
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Safety and guardrails.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

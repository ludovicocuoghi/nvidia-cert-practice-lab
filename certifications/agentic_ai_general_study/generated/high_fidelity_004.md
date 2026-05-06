# High Fidelity Generated Questions 004

## Questions

### Q1: An insurance claims group is fixing the layer called out by the trace and design review. A multi-tenant support agent must answer from current policy docs with citations and tenant isolation. Which General Study capability owns this requirement?
- ID: ags-hf-svc-knowledge-and-rag-pipeline-005
- Domain: Data Curation and Knowledge Grounding
- Topic: Study capability: Knowledge and RAG Pipeline; lifecycle: RAG and retrieval; Which runtime component handles retrieval, reranking, and grounding?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- B. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Training Data Curation Pipeline is the best fit for this layer: fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: D
- Explanation: Knowledge and RAG Pipeline is the best fit because it sits in RAG and retrieval: Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Why A is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for RAG and retrieval.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for RAG and retrieval.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for RAG and retrieval.

### Q2: A cybersecurity response team is setting a release gate. The blocker is remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which study card is the right next stop?
- ID: ags-hf-svc-memory-store-001
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Memory and state.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Memory and state.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q3: A manufacturing quality team has narrowed the next engineering decision. The rollout is blocked until the team can remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-memory-store-002
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Memory Store when you need to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- D. Model Serving Gateway is the best fit for this layer: serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: B
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Memory and state.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Memory and state.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q4: A global retailer needs to choose the right implementation surface. The implementation requirement is to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. Which study card is the right next stop?
- ID: ags-hf-svc-memory-store-003
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Use Model Inference Endpoint when you need to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: A
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Memory and state.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Memory and state.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.

### Q5: A pharmaceutical research team is fixing the layer called out by the trace and design review. The work to finish before release is remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-memory-store-004
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- B. Use Model Inference Endpoint when you need to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Memory Store is the best fit for this layer: scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: D
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.

### Q6: A cybersecurity response team needs to choose the right implementation surface. The implementation requirement is to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions. What is the best first implementation choice?
- ID: ags-hf-svc-memory-store-005
- Domain: Tooling, Orchestration, and Memory
- Topic: Study capability: Memory Store; lifecycle: Memory and state; Which layer stores permission-safe state and preferences across interactions?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Memory Store is the best fit because it sits in Memory and state: Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Memory and state.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Memory and state.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Memory and state.

### Q7: A semiconductor design group needs to choose the right implementation surface. The implementation requirement is to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-policy-and-guardrails-layer-001
- Domain: Evaluation and Safety
- Topic: Study capability: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use Model Customization Toolkit when you need to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Model Serving Gateway is the best fit for this layer: serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q8: A hospital operations team has narrowed the next engineering decision. The rollout is blocked until the team can enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-policy-and-guardrails-layer-002
- Domain: Evaluation and Safety
- Topic: Study capability: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Safety and guardrails.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.

### Q9: A logistics planning team needs to choose the right implementation surface. The trace points to the need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-policy-and-guardrails-layer-003
- Domain: Evaluation and Safety
- Topic: Study capability: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Cost/Latency Optimizer when you need to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

### Q10: An insurance claims group is fixing the layer called out by the trace and design review. The work to finish before release is enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-policy-and-guardrails-layer-004
- Domain: Evaluation and Safety
- Topic: Study capability: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.
- Why C is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q11: A cybersecurity response team is reviewing the implementation plan. The implementation requirement is to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which capability page covers the missing layer?
- ID: ags-hf-svc-policy-and-guardrails-layer-005
- Domain: Evaluation and Safety
- Topic: Study capability: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use Knowledge and RAG Pipeline when you need to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Model Customization Toolkit is the best fit for this layer: adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q12: An automotive support team has narrowed the next engineering decision. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which General Study capability owns this requirement?
- ID: ags-hf-svc-model-inference-endpoint-001
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Tool Gateway and Function Runtime when you need to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q13: A logistics planning team needs to choose the right implementation surface. The implementation requirement is to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. The team must avoid solving this with the wrong lifecycle layer. Which capability page covers the missing layer?
- ID: ags-hf-svc-model-inference-endpoint-002
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Model Inference Endpoint when you need to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q14: A manufacturing quality team is preparing a production rollout. The next release blocker is serving supported models as APIs with versioned, reproducible deployment assets. The team wants the choice that acts at this layer, not a neighboring one. Which General Study capability owns this requirement?
- ID: ags-hf-svc-model-inference-endpoint-003
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q15: A bank fraud team is reviewing the implementation plan. The implementation requirement is to for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. The team must avoid solving this with the wrong lifecycle layer. Which study card is the right next stop?
- ID: ags-hf-svc-model-inference-endpoint-004
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use Evaluation and Regression Harness when you need to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Model Inference Endpoint is the best fit for this layer: packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q16: A pharmaceutical research team has narrowed the next engineering decision. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-model-inference-endpoint-005
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Foundation Model Training Stack is the best fit for this layer: heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Model Serving Gateway when you need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q17: A pharmaceutical research team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which capability best matches the release blocker?
- ID: ags-hf-svc-model-serving-gateway-001
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Agent Orchestration Runtime when you need to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- D. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: Latency, Throughput, and Traffic Control is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.

### Q18: A global retailer is setting a release gate. The blocker is managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which study capability should they read first?
- ID: ags-hf-svc-model-serving-gateway-002
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Model Serving Gateway when you need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q19: A hospital operations team is preparing a production rollout. The next release blocker is packaging or managing production model endpoints, artifacts, routing, and rollout. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-model-serving-gateway-003
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Model Selection and Registry when you need to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q20: A semiconductor design group is reviewing the implementation plan. The trace points to the need to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. What is the best first implementation choice?
- ID: ags-hf-svc-model-serving-gateway-004
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- B. Model Serving Gateway is the best fit for this layer: serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Training Data Curation Pipeline when you need to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Latency, Throughput, and Traffic Control is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.

### Q21: An automotive support team has narrowed the next engineering decision. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-model-serving-gateway-005
- Domain: Inference Serving and Deployment
- Topic: Study capability: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Human Review and Governance Console when you need to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Memory Store is the best fit for this layer: scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.

### Q22: A manufacturing quality team is preparing a production rollout. A chat agent has acceptable average latency, but p99 TTFT spikes when batch jobs share the same endpoint. The team wants the choice that acts at this layer, not a neighboring one. Which capability best matches the release blocker?
- ID: ags-hf-svc-latency-throughput-and-traffic-control-001
- Domain: Inference Serving and Deployment
- Topic: Study capability: Latency, Throughput, and Traffic Control; lifecycle: Serving and deployment; Which traffic-control concept explains why average latency hides bad user experience?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Memory Store is the best fit for this layer: scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- C. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- D. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Latency, Throughput, and Traffic Control is the best fit because it sits in Serving and deployment: Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Why A is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Latency, Throughput, and Traffic Control: to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q23: A bank fraud team is setting a release gate. The trace points to the need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation. Which study capability should they read first?
- ID: ags-hf-svc-latency-throughput-and-traffic-control-002
- Domain: Inference Serving and Deployment
- Topic: Study capability: Latency, Throughput, and Traffic Control; lifecycle: Serving and deployment; Which traffic-control concept explains why average latency hides bad user experience?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- B. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- C. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- D. Model Serving Gateway is the best fit for this layer: serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: B
- Explanation: Latency, Throughput, and Traffic Control is the best fit because it sits in Serving and deployment: Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Latency, Throughput, and Traffic Control: to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.

### Q24: A pharmaceutical research team has narrowed the next engineering decision. The next release blocker is packaging or managing production model endpoints, artifacts, routing, and rollout. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-latency-throughput-and-traffic-control-003
- Domain: Inference Serving and Deployment
- Topic: Study capability: Latency, Throughput, and Traffic Control; lifecycle: Serving and deployment; Which traffic-control concept explains why average latency hides bad user experience?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- B. Model Customization Toolkit is the best fit for this layer: adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Answer: A
- Explanation: Latency, Throughput, and Traffic Control is the best fit because it sits in Serving and deployment: Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q25: A logistics planning team is reviewing the implementation plan. The implementation requirement is to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation. What is the best first implementation choice?
- ID: ags-hf-svc-latency-throughput-and-traffic-control-004
- Domain: Inference Serving and Deployment
- Topic: Study capability: Latency, Throughput, and Traffic Control; lifecycle: Serving and deployment; Which traffic-control concept explains why average latency hides bad user experience?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Memory Store when you need to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- C. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- D. Latency, Throughput, and Traffic Control is the best fit for this layer: production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Answer: D
- Explanation: Latency, Throughput, and Traffic Control is the best fit because it sits in Serving and deployment: Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why B is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q26: A hospital operations team has narrowed the next engineering decision. A chat agent has acceptable average latency, but p99 TTFT spikes when batch jobs share the same endpoint. The team wants the choice that acts at this layer, not a neighboring one. Which General Study capability owns this requirement?
- ID: ags-hf-svc-latency-throughput-and-traffic-control-005
- Domain: Inference Serving and Deployment
- Topic: Study capability: Latency, Throughput, and Traffic Control; lifecycle: Serving and deployment; Which traffic-control concept explains why average latency hides bad user experience?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- D. Use Knowledge Ingestion and Permission Pipeline when you need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: C
- Explanation: Latency, Throughput, and Traffic Control is the best fit because it sits in Serving and deployment: Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.

### Q27: A global retailer is setting a release gate. The trace points to the need to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which capability page covers the missing layer?
- ID: ags-hf-svc-evaluation-and-regression-harness-001
- Domain: Evaluation and Safety
- Topic: Study capability: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Latency, Throughput, and Traffic Control when you need to handle user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Evaluation.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Evaluation.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q28: An automotive support team has narrowed the next engineering decision. The rollout is blocked until the team can measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-evaluation-and-regression-harness-002
- Domain: Evaluation and Safety
- Topic: Study capability: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Evaluation and Regression Harness when you need to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Evaluation.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q29: A bank fraud team is reviewing the implementation plan. The implementation requirement is to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which capability page covers the missing layer?
- ID: ags-hf-svc-evaluation-and-regression-harness-003
- Domain: Evaluation and Safety
- Topic: Study capability: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Training Data Curation Pipeline is the best fit for this layer: fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Knowledge and RAG Pipeline when you need to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Evaluation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q30: A manufacturing quality team is preparing a production rollout. The work to finish before release is measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-evaluation-and-regression-harness-004
- Domain: Evaluation and Safety
- Topic: Study capability: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Model Customization Toolkit when you need to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Evaluation and Regression Harness is the best fit for this layer: test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Evaluation.

### Q31: A global retailer needs to choose the right implementation surface. The implementation requirement is to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which capability page covers the missing layer?
- ID: ags-hf-svc-evaluation-and-regression-harness-005
- Domain: Evaluation and Safety
- Topic: Study capability: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Policy and Guardrails Layer is the best fit for this layer: runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Memory Store when you need to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.

### Q32: A pharmaceutical research team is preparing a production rollout. Users complain even though every request returns 200 because the CRM tool silently returns empty records. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-observability-and-trace-monitor-001
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Knowledge Ingestion and Permission Pipeline when you need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: D
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q33: A telecom network operations team is reviewing the implementation plan. The trace points to the need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis. Which study card is the right next stop?
- ID: ags-hf-svc-observability-and-trace-monitor-002
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q34: A hospital operations team is fixing the layer called out by the trace and design review. The next release blocker is deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing. Which General Study capability owns this requirement?
- ID: ags-hf-svc-observability-and-trace-monitor-003
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use Agent Orchestration Runtime when you need to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Latency, Throughput, and Traffic Control; it provides production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.
- Answer: B
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q35: A bank fraud team is setting a release gate. The blocker is diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis. What is the best first implementation choice?
- ID: ags-hf-svc-observability-and-trace-monitor-004
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Model Customization Toolkit when you need to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Observability and Trace Monitor is the best fit for this layer: live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: C
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q36: An automotive support team is preparing a production rollout. Users complain even though every request returns 200 because the CRM tool silently returns empty records. Which reusable concept area should guide the design?
- ID: ags-hf-svc-observability-and-trace-monitor-005
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Human Review and Governance Console when you need to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Memory Store is the best fit for this layer: scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: D
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Monitoring and profiling.

### Q37: An automotive support team has narrowed the next engineering decision. Costs spike because simple tasks route to a premium reasoning model and long prompts include irrelevant retrieved chunks. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-cost-latency-optimizer-001
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Cost/Latency Optimizer; lifecycle: Inference optimization; Which lifecycle loop reduces latency and cost after measurement?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Prompt and Context Design is the best fit for this layer: no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: D
- Explanation: Cost/Latency Optimizer is the best fit because it sits in Inference optimization: Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Inference optimization.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Inference optimization.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Inference optimization.

### Q38: A telecom network operations team is reviewing the implementation plan. The blocker is handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching. Which study card is the right next stop?
- ID: ags-hf-svc-cost-latency-optimizer-002
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Cost/Latency Optimizer; lifecycle: Inference optimization; Which lifecycle loop reduces latency and cost after measurement?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Cost/Latency Optimizer when you need to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continuing a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Knowledge and RAG Pipeline is the best fit for this layer: query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: A
- Explanation: Cost/Latency Optimizer is the best fit because it sits in Inference optimization: Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Inference optimization.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Inference optimization.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Inference optimization.

### Q39: A manufacturing quality team is fixing the layer called out by the trace and design review. The next release blocker is improving decode throughput after profiling the actual bottleneck. The team wants the choice that acts at this layer, not a neighboring one. Which General Study capability owns this requirement?
- ID: ags-hf-svc-cost-latency-optimizer-003
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Cost/Latency Optimizer; lifecycle: Inference optimization; Which lifecycle loop reduces latency and cost after measurement?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Use Foundation Model Training Stack when you need to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as handling user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Model Selection and Registry is the best fit for this layer: decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: B
- Explanation: Cost/Latency Optimizer is the best fit because it sits in Inference optimization: Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Inference optimization.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Inference optimization.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Inference optimization.

### Q40: A semiconductor design group is reviewing the implementation plan. The implementation requirement is to handle user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching. Which study card is the right next stop?
- ID: ags-hf-svc-cost-latency-optimizer-004
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Cost/Latency Optimizer; lifecycle: Inference optimization; Which lifecycle loop reduces latency and cost after measurement?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Select Latency, Throughput, and Traffic Control; it owns serving and deployment work such as handling user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.
- C. Cost/Latency Optimizer is the best fit for this layer: optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- D. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- Answer: C
- Explanation: Cost/Latency Optimizer is the best fit because it sits in Inference optimization: Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Inference optimization.
- Why B is wrong: Latency, Throughput, and Traffic Control belongs to Serving and deployment, while this scenario asks for Inference optimization.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Inference optimization.

### Q41: An insurance claims group is preparing a production rollout. Costs spike because simple tasks route to a premium reasoning model and long prompts include irrelevant retrieved chunks. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-cost-latency-optimizer-005
- Domain: Observability, Operations, and Cost
- Topic: Study capability: Cost/Latency Optimizer; lifecycle: Inference optimization; Which lifecycle loop reduces latency and cost after measurement?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Use Observability and Trace Monitor when you need to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Evaluation and Regression Harness is the best fit for this layer: test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: D
- Explanation: Cost/Latency Optimizer is the best fit because it sits in Inference optimization: Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Inference optimization.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Inference optimization.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Inference optimization.

### Q42: A pharmaceutical research team is fixing the layer called out by the trace and design review. Only high-risk refund or loan decisions need approval; low-risk answers are sampled and reviewed for drift. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-human-review-and-governance-console-001
- Domain: Human Oversight and Governance
- Topic: Study capability: Human Review and Governance Console; lifecycle: Human oversight; Which component owns risk-tiered human oversight and review feedback?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use Knowledge Ingestion and Permission Pipeline when you need to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: A
- Explanation: Human Review and Governance Console is the best fit because it sits in Human oversight: Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Human oversight.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Human oversight.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Human oversight.

### Q43: A global retailer is setting a release gate. The implementation requirement is to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops. The team must avoid solving this with the wrong lifecycle layer. Which study capability should they read first?
- ID: ags-hf-svc-human-review-and-governance-console-002
- Domain: Human Oversight and Governance
- Topic: Study capability: Human Review and Governance Console; lifecycle: Human oversight; Which component owns risk-tiered human oversight and review feedback?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Tool Gateway and Function Runtime is the best fit for this layer: execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Use Human Review and Governance Console when you need to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: D
- Explanation: Human Review and Governance Console is the best fit because it sits in Human oversight: Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Human oversight.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Human oversight.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Human oversight.

### Q44: A manufacturing quality team has narrowed the next engineering decision. The next release blocker is supporting approvals, escalation, sampled review, and governance evidence. The team wants the choice that acts at this layer, not a neighboring one. Which reusable concept area should guide the design?
- ID: ags-hf-svc-human-review-and-governance-console-003
- Domain: Human Oversight and Governance
- Topic: Study capability: Human Review and Governance Console; lifecycle: Human oversight; Which component owns risk-tiered human oversight and review feedback?
- Difficulty: hard
- Scope: general_concept
- Source: generated
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Knowledge and RAG Pipeline when you need to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Agent Orchestration Runtime is the best fit for this layer: framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: C
- Explanation: Human Review and Governance Console is the best fit because it sits in Human oversight: Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Why A is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Human oversight.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Human oversight.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Human oversight.

### Q45: A cybersecurity response team needs to choose the right implementation surface. The trace points to the need to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops. Which capability page covers the missing layer?
- ID: ags-hf-svc-human-review-and-governance-console-004
- Domain: Human Oversight and Governance
- Topic: Study capability: Human Review and Governance Console; lifecycle: Human oversight; Which component owns risk-tiered human oversight and review feedback?
- Difficulty: expert
- Scope: general_concept
- Source: generated
- A. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Human Review and Governance Console is the best fit for this layer: oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Use Model Customization Toolkit when you need to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Human Review and Governance Console is the best fit because it sits in Human oversight: Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Human oversight.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Human oversight.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Human oversight.

### Q46: A pharmaceutical research team is fixing the layer called out by the trace and design review. Only high-risk refund or loan decisions need approval; low-risk answers are sampled and reviewed for drift. What should they choose before changing prompts, models, or infrastructure elsewhere?
- ID: ags-hf-svc-human-review-and-governance-console-005
- Domain: Human Oversight and Governance
- Topic: Study capability: Human Review and Governance Console; lifecycle: Human oversight; Which component owns risk-tiered human oversight and review feedback?
- Difficulty: medium
- Scope: general_concept
- Source: generated
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use Policy and Guardrails Layer when you need to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Model Inference Endpoint is the best fit for this layer: packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: A
- Explanation: Human Review and Governance Console is the best fit because it sits in Human oversight: Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Human oversight.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Human oversight.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Human oversight.

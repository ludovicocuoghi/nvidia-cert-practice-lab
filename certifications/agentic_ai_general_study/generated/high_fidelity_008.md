# High Fidelity Generated Questions 008

## Questions

### Q1: A global retailer is reviewing the production design. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-025
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: medium
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Safety and guardrails.

### Q2: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-026
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- D. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- Answer: B
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.

### Q3: A bank fraud team is preparing a release decision. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-policy-and-guardrails-layer-027
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Safety and guardrails.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Safety and guardrails.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

### Q4: A hospital operations team has narrowed the next implementation step. Enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-policy-and-guardrails-layer-028
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: easy
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: D
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Safety and guardrails.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q5: A telecom network operations team is reviewing the production design. A malicious document tells the agent to ignore policy and issue a refund through an internal API. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-policy-and-guardrails-layer-029
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: hard
- A. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- C. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- Answer: C
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Safety and guardrails.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.

### Q6: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs. Which NVIDIA component should the team use?
- ID: ags-hf-svc-policy-and-guardrails-layer-030
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Policy and Guardrails Layer; lifecycle: Safety and guardrails; Where should guardrails run in an agent workflow?
- Difficulty: expert
- A. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Select Prompt and Context Design; it owns prompt and context adaptation work such as adapting an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: A
- Explanation: Policy and Guardrails Layer is the best fit because it sits in Safety and guardrails: Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Safety and guardrails.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Safety and guardrails.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q7: An automotive support team is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-001
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q8: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-002
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q9: A manufacturing quality team has narrowed the next implementation step. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-003
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Prompt and Context Design is the best fit; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q10: A bank fraud team is preparing a release decision. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-004
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q11: A pharmaceutical research team is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-005
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why B is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q12: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-006
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q13: A hospital operations team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-007
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Human Review and Governance Console; it is used to support human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.

### Q14: A bank fraud team is preparing a release decision. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-008
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: easy
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q15: A pharmaceutical research team is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-009
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q16: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-010
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q17: A global retailer is reviewing the production design. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-011
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Choose Dynamo (Triton Dynamo); it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why D is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q18: An insurance claims group is preparing a production rollout. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-012
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q19: A cybersecurity response team is preparing a release decision. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-013
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.

### Q20: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-014
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q21: A global retailer is reviewing the production design. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-015
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q22: An automotive support team is preparing a production rollout. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-016
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why B is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q23: A semiconductor design group is preparing a release decision. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-017
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q24: A hospital operations team has narrowed the next implementation step. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-018
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.

### Q25: A telecom network operations team is reviewing the production design. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-019
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q26: A pharmaceutical research team is preparing a production rollout. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-020
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q27: An insurance claims group is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-021
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.

### Q28: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-022
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.

### Q29: A public-sector casework team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-023
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q30: A cybersecurity response team is preparing a release decision. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-024
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- B. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Choose Prompt and Context Design; it provides no-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.
- D. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q31: An insurance claims group is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-025
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: medium
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.

### Q32: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-026
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: D
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q33: A public-sector casework team has narrowed the next implementation step. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-inference-endpoint-027
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- B. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q34: A semiconductor design group is preparing a release decision. For production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-inference-endpoint-028
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: easy
- A. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Model Inference Endpoint is the best fit; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: B
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Model Serving Gateway is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.

### Q35: A pharmaceutical research team is preparing a production rollout. The company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-inference-endpoint-029
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: hard
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Inference Endpoint: for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.

### Q36: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-inference-endpoint-030
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Inference Endpoint; lifecycle: Serving and deployment; Which layer gives a production API for optimized model inference?
- Difficulty: expert
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: C
- Explanation: Model Inference Endpoint is the best fit because it sits in Serving and deployment: Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.

### Q37: A pharmaceutical research team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-001
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q38: A global retailer is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-002
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- D. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q39: A hospital operations team has narrowed the next implementation step. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-003
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- B. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q40: A semiconductor design group is preparing a release decision. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-004
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q41: An automotive support team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-005
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why D is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q42: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-006
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.

### Q43: A public-sector casework team has narrowed the next implementation step. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-007
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- B. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- C. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.

### Q44: A cybersecurity response team is preparing a release decision. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-008
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: easy
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- D. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q45: An automotive support team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-009
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q46: A global retailer is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-010
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: NIM Operator is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why D is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q47: A telecom network operations team is reviewing the production design. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-011
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Knowledge Ingestion and Permission Pipeline is the best fit; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- B. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q48: An insurance claims group is preparing a production rollout. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-012
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.

### Q49: A semiconductor design group is preparing a release decision. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-013
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Memory Store is the best fit; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- B. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q50: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-014
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q51: A telecom network operations team is reviewing the production design. Serving supported models as APIs with versioned, reproducible deployment assets is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-015
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- D. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Serving and deployment.
- Why B is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q52: A pharmaceutical research team is preparing a production rollout. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-016
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- B. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Serving and deployment.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.

### Q53: A semiconductor design group is preparing a release decision. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-017
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- C. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q54: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-018
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- D. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.

### Q55: A logistics planning team is reviewing the production design. Packaging or managing production model endpoints, artifacts, routing, and rollout is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-019
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- B. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: NGC is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q56: An insurance claims group is preparing a production rollout. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-020
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- B. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.

### Q57: A pharmaceutical research team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-021
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Use Training Data Curation Pipeline; it is used to prepare model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Dynamo (Triton Dynamo) is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why D is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.

### Q58: A global retailer is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-022
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- B. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Select Agent Orchestration Runtime; it owns agent orchestration work such as building or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- D. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.

### Q59: A hospital operations team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-023
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Use Tool Gateway and Function Runtime; it is used to expose safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Serving and deployment.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.

### Q60: A cybersecurity response team is preparing a release decision. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-024
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- B. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- C. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Serving and deployment.
- Why B is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Serving and deployment.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Serving and deployment.

### Q61: An automotive support team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-025
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: medium
- A. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- C. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Use Policy and Guardrails Layer; it is used to enforce policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.

### Q62: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-026
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Choose Model Selection and Registry; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- B. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Knowledge and RAG Pipeline is the best fit; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- Answer: B
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Serving and deployment.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Serving and deployment.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q63: A public-sector casework team has narrowed the next implementation step. Managing model traffic, canary rollout, and endpoint lifecycle is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-model-serving-gateway-027
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Model Customization Toolkit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Serving and deployment.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q64: A semiconductor design group is preparing a release decision. Managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-model-serving-gateway-028
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: easy
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Select Knowledge and RAG Pipeline; it owns rAG and retrieval work such as grounding answers in private, changing, or source-grounded knowledge at query time without changing weights.
- D. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: D
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Triton Inference Server is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why B is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Serving and deployment.

### Q65: An automotive support team is preparing a production rollout. A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors. Which NVIDIA component should the team use?
- ID: ags-hf-svc-model-serving-gateway-029
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: hard
- A. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: C
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Serving and deployment.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Serving and deployment.
- Why D is wrong: Model Inference Endpoint is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.

### Q66: A global retailer is reviewing the production design. The rollout is blocked because the team needs to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-model-serving-gateway-030
- Domain: Inference Serving and Deployment
- Topic: NVIDIA service: Model Serving Gateway; lifecycle: Serving and deployment; Which serving component handles routing, fallback, and rollout?
- Difficulty: expert
- A. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- B. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- C. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Model Serving Gateway is the best fit because it sits in Serving and deployment: Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Why B is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Serving and deployment.
- Why C is wrong: NIM is a neighboring serving and deployment component, but this signal asks specifically for Model Serving Gateway: to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Serving and deployment.

### Q67: A global retailer is reviewing the production design. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-001
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Select Model Selection and Registry; it owns model selection work such as deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- B. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Evaluation.
- Why B is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Evaluation.

### Q68: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-002
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q69: A bank fraud team is preparing a release decision. Comparing variants before release and catch quality or safety regressions is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-003
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Training Data Curation Pipeline is the best fit; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- C. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Use Knowledge and RAG Pipeline; it is used to ground answers in private, changing, or source-grounded knowledge at query time without changing weights.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Evaluation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Evaluation.

### Q70: A manufacturing quality team has narrowed the next implementation step. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-004
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Evaluation.

### Q71: A global retailer is reviewing the production design. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-005
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.

### Q72: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-006
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Select Memory Store; it owns memory and state work such as remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.
- Why C is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.

### Q73: A cybersecurity response team is preparing a release decision. Measuring task quality rather than only operational metrics is the next release blocker. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-007
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- C. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Use Model Serving Gateway; it is used to manage multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q74: A hospital operations team has narrowed the next implementation step. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-008
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: easy
- A. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- B. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Select Foundation Model Training Stack; it owns foundation training work such as creating or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- D. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Evaluation.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.

### Q75: A logistics planning team is reviewing the production design. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-009
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Select Policy and Guardrails Layer; it owns safety and guardrails work such as enforcing policy around prompts, retrieval, tool use, sensitive content, or final outputs.
- B. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Evaluation.

### Q76: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-010
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Model Customization Toolkit is the best fit; it provides adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.
- D. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.

### Q77: A hospital operations team has narrowed the next implementation step. Running model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-011
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Model Serving Gateway is the best fit; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- D. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.

### Q78: A semiconductor design group is preparing a release decision. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-012
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Knowledge Ingestion and Permission Pipeline; it provides runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Evaluation.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Evaluation.

### Q79: An insurance claims group is preparing a production rollout. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-013
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- B. Select Model Customization Toolkit; it owns training and customization work such as changing durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- C. Human Review and Governance Console is the best fit; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.
- Why B is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.

### Q80: A global retailer is reviewing the production design. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-014
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Model Inference Endpoint; it provides packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Evaluation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q81: A manufacturing quality team has narrowed the next implementation step. Measuring task quality rather than only operational metrics is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-015
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Policy and Guardrails Layer is the best fit; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- D. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Evaluation.
- Why C is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q82: A cybersecurity response team is preparing a release decision. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-016
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Use Cost/Latency Optimizer; it is used to user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- B. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- C. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- D. Choose Policy and Guardrails Layer; it provides runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Evaluation.
- Why B is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Policy and Guardrails Layer belongs to Safety and guardrails, while this scenario asks for Evaluation.

### Q83: A pharmaceutical research team is preparing a production rollout. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-017
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- D. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.

### Q84: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-018
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- B. Select Model Serving Gateway; it owns serving and deployment work such as managing multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.

### Q85: A hospital operations team has narrowed the next implementation step. Measuring task quality rather than only operational metrics is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-019
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Use Prompt and Context Design; it is used to adapt an existing model with clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- D. Choose Memory Store; it provides scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Prompt and Context Design belongs to Prompt and context adaptation, while this scenario asks for Evaluation.
- Why C is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.

### Q86: A semiconductor design group is preparing a release decision. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-020
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- B. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Knowledge and RAG Pipeline; it provides query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.
- D. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Evaluation.
- Why C is wrong: Knowledge and RAG Pipeline belongs to RAG and retrieval, while this scenario asks for Evaluation.
- Why D is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Evaluation.

### Q87: A cybersecurity response team is preparing a release decision. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-021
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Use Model Selection and Registry; it is used to decide whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Evaluation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.

### Q88: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-022
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Select Tool Gateway and Function Runtime; it owns tool execution work such as exposing safe API calls, function calling, parameter validation, mutation control, retries, or permissions.
- B. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- C. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.

### Q89: A logistics planning team is reviewing the production design. Measuring task quality rather than only operational metrics is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-023
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Foundation Model Training Stack is the best fit; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why B is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why D is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.

### Q90: An insurance claims group is preparing a production rollout. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-024
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Training Data Curation Pipeline; it provides fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.
- D. Use Model Inference Endpoint; it is used for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why C is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Evaluation.
- Why D is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.

### Q91: A cybersecurity response team is preparing a release decision. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-025
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: medium
- A. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Use Foundation Model Training Stack; it is used to create or continue a model when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.
- C. Select Model Inference Endpoint; it owns serving and deployment work such as for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.
- D. Tool Gateway and Function Runtime is the best fit; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.
- Why C is wrong: Model Inference Endpoint belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why D is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.

### Q92: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-026
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose Agent Orchestration Runtime; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- Answer: D
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Evaluation.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.

### Q93: A global retailer is reviewing the production design. Running model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels is the next release blocker. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-evaluation-and-regression-harness-027
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Choose Tool Gateway and Function Runtime; it provides execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.
- B. Use Agent Orchestration Runtime; it is used to build or coordinate an agent workflow with tools, routers, specialists, state, and recoverable execution.
- C. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Tool Gateway and Function Runtime belongs to Tool execution, while this scenario asks for Evaluation.
- Why B is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why D is wrong: Observability and Trace Monitor belongs to Monitoring and profiling, while this scenario asks for Evaluation.

### Q94: An insurance claims group is preparing a production rollout. Measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges is the work to finish before release. Which NVIDIA component should the team use?
- ID: ags-hf-svc-evaluation-and-regression-harness-028
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: easy
- A. Select Training Data Curation Pipeline; it owns training-time data curation work such as preparing model-learning or evaluation data: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.
- B. Evaluation and Regression Harness is the best fit; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- C. Choose Human Review and Governance Console; it provides oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.
- D. Use Memory Store; it is used to remember task progress, user preferences, prior tool results, or reusable facts across turns or sessions.
- Answer: B
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Training Data Curation Pipeline belongs to Training-time data curation, while this scenario asks for Evaluation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why D is wrong: Memory Store belongs to Memory and state, while this scenario asks for Evaluation.

### Q95: A bank fraud team is preparing a release decision. A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment. Which NVIDIA component should own this step?
- ID: ags-hf-svc-evaluation-and-regression-harness-029
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: hard
- A. Choose Evaluation and Regression Harness; it provides test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- B. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- C. Select Human Review and Governance Console; it owns human oversight work such as supporting human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.
- D. Cost/Latency Optimizer is the best fit; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Evaluation.
- Why C is wrong: Human Review and Governance Console belongs to Human oversight, while this scenario asks for Evaluation.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Evaluation.

### Q96: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-evaluation-and-regression-harness-030
- Domain: Evaluation and Safety
- Topic: NVIDIA service: Evaluation and Regression Harness; lifecycle: Evaluation; Which layer measures agent quality before and after changes?
- Difficulty: expert
- A. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- B. Choose Foundation Model Training Stack; it provides heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.
- C. Use Evaluation and Regression Harness; it is used to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- D. Select Knowledge Ingestion and Permission Pipeline; it owns runtime knowledge preparation work such as preparing private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- Answer: C
- Explanation: Evaluation and Regression Harness is the best fit because it sits in Evaluation: Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.
- Why A is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Evaluation.
- Why B is wrong: Foundation Model Training Stack belongs to Foundation training, while this scenario asks for Evaluation.
- Why D is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Evaluation.

### Q97: A pharmaceutical research team is preparing a production rollout. Users complain even though every request returns 200 because the CRM tool silently returns empty records. Which NVIDIA component should the team use?
- ID: ags-hf-svc-observability-and-trace-monitor-001
- Domain: Observability, Operations, and Cost
- Topic: NVIDIA service: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: expert
- A. Use Knowledge Ingestion and Permission Pipeline; it is used to prepare private or changing documents as safe, searchable, permission-aware knowledge for an agent without changing model weights.
- B. Select Cost/Latency Optimizer; it owns inference optimization work such as user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose Observability and Trace Monitor; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Answer: D
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Knowledge Ingestion and Permission Pipeline belongs to Runtime knowledge preparation, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Monitoring and profiling.

### Q98: A telecom network operations team is reviewing the production design. The rollout is blocked because the team needs to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis. Which NVIDIA service matches this workload?
- ID: ags-hf-svc-observability-and-trace-monitor-002
- Domain: Observability, Operations, and Cost
- Topic: NVIDIA service: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: medium
- A. Use Observability and Trace Monitor; it is used to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- B. Select Evaluation and Regression Harness; it owns evaluation work such as measuring quality, compare variants, catch regressions, score trajectories, or calibrate judges.
- C. Agent Orchestration Runtime is the best fit; it provides framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.
- D. Choose Cost/Latency Optimizer; it provides optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.
- Answer: A
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why B is wrong: Evaluation and Regression Harness belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Agent Orchestration Runtime belongs to Agent orchestration, while this scenario asks for Monitoring and profiling.
- Why D is wrong: Cost/Latency Optimizer belongs to Inference optimization, while this scenario asks for Monitoring and profiling.

### Q99: A hospital operations team has narrowed the next implementation step. Deciding whether the bottleneck is launch overhead, a hot kernel, communication, or queueing is the next release blocker. Which NVIDIA component is most appropriate?
- ID: ags-hf-svc-observability-and-trace-monitor-003
- Domain: Observability, Operations, and Cost
- Topic: NVIDIA service: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: hard
- A. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- B. Select Observability and Trace Monitor; it owns monitoring and profiling work such as diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- C. Model Selection and Registry is the best fit; it provides decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Monitoring and profiling.
- Why C is wrong: Model Selection and Registry belongs to Model selection, while this scenario asks for Monitoring and profiling.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

### Q100: A bank fraud team is preparing a release decision. Diagnosing live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis is the work to finish before release. Which NVIDIA component should own this step?
- ID: ags-hf-svc-observability-and-trace-monitor-004
- Domain: Observability, Operations, and Cost
- Topic: NVIDIA service: Observability and Trace Monitor; lifecycle: Monitoring and profiling; Which layer shows live traces, tool failures, latency, and task success?
- Difficulty: expert
- A. Use Model Customization Toolkit; it is used to change durable behavior, style, rubric-following, or domain task adaptation learned from examples.
- B. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- C. Observability and Trace Monitor is the best fit; it provides live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- D. Choose Model Serving Gateway; it provides serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.
- Answer: C
- Explanation: Observability and Trace Monitor is the best fit because it sits in Monitoring and profiling: Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.
- Why A is wrong: Model Customization Toolkit belongs to Training and customization, while this scenario asks for Monitoring and profiling.
- Why B is wrong: Nsight Systems is a neighboring monitoring and profiling component, but this signal asks specifically for Observability and Trace Monitor: to diagnose live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.
- Why D is wrong: Model Serving Gateway belongs to Serving and deployment, while this scenario asks for Monitoring and profiling.

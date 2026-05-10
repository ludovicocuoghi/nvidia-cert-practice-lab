# Original Bank Questions

## Questions

### Q1: A business team asks for an "agent" to approve invoices. The process is stable: validate vendor, match purchase orders, compare line items, route exceptions, and write an audit record. Which starting architecture gives the best control without removing useful LLM judgment?
- ID: gen-arch-001
- Domain: Agent Lifecycle and Architecture
- Topic: workflow vs agent
- Difficulty: easy
- A. A deterministic workflow or graph with LLM calls only for interpretation-heavy steps and explicit approval states.
- B. A ReAct-style loop with the same finance tools, plus a stricter system prompt describing each approval rule.
- C. A planner-reviewer pair where both agents vote on each invoice before the payment system is updated.
- D. A retrieval-first assistant that cites vendor policy documents before suggesting the next finance action.
- Answer: A
- Explanation: Known, high-control processes should start as explicit workflows. LLMs can help with extraction or judgment while the workflow enforces states, permissions, and auditability.
- Why B is wrong: A prompt-guided loop still leaves state transitions and finance mutations too implicit for a stable approval process.
- Why C is wrong: Agent voting adds review but does not by itself enforce process states, permissions, or audit records.
- Why D is wrong: Retrieval helps ground policy interpretation, but it does not own the approval workflow or mutation boundary.

### Q2: A research assistant must adapt its plan after each search result because new evidence changes which source to inspect next. The team still needs cost limits and a reliable stopping point. Which pattern fits best?
- ID: gen-arch-002
- Domain: Agent Lifecycle and Architecture
- Topic: observe reason act
- Difficulty: medium
- A. A fixed plan-and-execute workflow that resolves all source choices before any retrieval begins.
- B. An observe-reason-act loop with tool budgets, stopping criteria, state updates, and evidence sufficiency checks.
- C. A batch retrieval pipeline that downloads the top 50 results first, then asks the model to summarize them.
- D. A retrieval-only chatbot that answers from the first high-similarity document and records citations.
- Answer: B
- Explanation: Dynamic evidence gathering needs iterative observation and replanning, but bounded by budgets, stopping criteria, and state checks.
- Why A is wrong: A fixed plan cannot adapt when new evidence changes the next best source.
- Why C is wrong: Batch retrieval may waste work and delays decisions about which evidence is actually relevant.
- Why D is wrong: Retrieval-only answering can cite evidence but does not manage iterative investigation or stopping.

### Q3: A multi-agent system has planner, analyst, writer, and reviewer roles. Work is duplicated, handoffs are unclear, and no component owns the final state. What should be added first?
- ID: gen-arch-003
- Domain: Agent Lifecycle and Architecture
- Topic: multi-agent coordination
- Difficulty: hard
- A. Shared vector memory where every agent stores intermediate summaries and open questions.
- B. More specialized agents so each recurring subtask has a named owner.
- C. A supervisor or workflow runtime that owns state transitions, handoffs, required artifacts, and completion criteria.
- D. A stronger final reviewer model that reconciles all agent outputs after the work is complete.
- Answer: C
- Explanation: Multi-agent systems need orchestration and state ownership. Without explicit handoffs and completion criteria, more agents or memory usually amplify duplication.
- Why A is wrong: Shared memory can preserve context, but it does not define who owns state or when a handoff is complete.
- Why B is wrong: More roles can make ownership worse unless coordination rules already exist.
- Why D is wrong: Final review catches some issues late, but it does not prevent duplicated work or skipped handoffs.

### Q4: A team wants to tune a model on domain documents. The raw corpus contains duplicates, low-quality pages, boilerplate, PII, and mixed licenses. Which lifecycle step should happen before tuning begins?
- ID: gen-data-001
- Domain: Data Curation and Knowledge Grounding
- Topic: training data curation
- Difficulty: hard
- A. Build a retrieval index over the raw corpus so the team can inspect representative chunks during tuning.
- B. Curate the corpus by filtering quality, removing duplicates, handling PII, checking licenses, and creating held-out evaluation splits.
- C. Add output guardrails for PII and policy violations so unsafe generations can be blocked after tuning.
- D. Start with a small adapter-tuning run, then use training loss to identify which documents were harmful.
- Answer: B
- Explanation: Training and tuning quality starts with a curated, permitted, representative dataset and evaluation split. Later controls cannot reliably undo contaminated or unauthorized training data.
- Why A is wrong: Index inspection can support analysis, but raw retrieval does not remove duplicates, PII, or licensing risk.
- Why C is wrong: Output guardrails reduce exposure after inference, but they do not fix training contamination.
- Why D is wrong: Training loss is a weak proxy for data legality, PII exposure, and evaluation representativeness.

### Q5: A support agent answers from internal policy documents that change weekly. The team proposes fine-tuning every Friday so the model "knows" the latest policy. What is usually the better first design?
- ID: gen-data-002
- Domain: Data Curation and Knowledge Grounding
- Topic: RAG vs fine-tuning
- Difficulty: easy
- A. Use a long context prompt containing the latest policy export and rely on the model to ignore stale sections.
- B. Fine-tune weekly on accepted support answers, then add retrieval only for low-confidence responses.
- C. Retrieval-augmented generation with fresh indexes, metadata filters, citations, and tests for stale-policy answers.
- D. Train a classifier that selects the policy category, then let the base model answer without retrieved passages.
- Answer: C
- Explanation: RAG is the common first design for changing or proprietary facts because indexes can refresh without changing model weights, and citations make freshness easier to inspect.
- Why A is wrong: Large prompts are expensive and still need freshness, filtering, and citation controls.
- Why B is wrong: Fine-tuning can teach style or behavior, but weekly factual updates are better handled through retrieval first.
- Why D is wrong: Classification helps route a query, but it does not provide the current policy text needed for grounded answers.

### Q6: A RAG agent serves multiple tenants. During testing, users sometimes receive snippets from another tenant because filtering happens after retrieval and before final answer rendering. Where should access control be enforced?
- ID: gen-data-003
- Domain: Data Curation and Knowledge Grounding
- Topic: retrieval permissions
- Difficulty: medium
- A. In the final answer guardrail, with a rule that removes tenant names and sensitive identifiers.
- B. In the client UI, so unauthorized snippets are hidden before the response is displayed.
- C. In the prompt, with instructions that retrieved snippets from other tenants must not be used.
- D. Before retrieval results enter the model context, using identity-aware metadata, document ACLs, and query-time permission filters.
- Answer: D
- Explanation: Unauthorized chunks should never enter model context. Permission filters belong at or before retrieval result assembly, not after the model has already seen sensitive content.
- Why A is wrong: A final guardrail runs too late because the model may already have consumed unauthorized context.
- Why B is wrong: Client-side hiding does not protect server-side retrieval, logs, or model context.
- Why C is wrong: Prompt instructions are not an access-control boundary.

### Q7: A team needs an agent to follow a company-specific style and decision criteria. Its factual answers are already well grounded by retrieval, but reviewers keep correcting tone and decision framing. Which customization path is most appropriate to consider?
- ID: gen-model-001
- Domain: Model Selection and Customization
- Topic: behavior adaptation
- Difficulty: hard
- A. Re-index the knowledge base with smaller chunks and higher overlap to expose more source text.
- B. Add more retrieved documents per answer so the model has a larger evidence set.
- C. PEFT or supervised fine-tuning on representative examples of the desired behavior, while keeping retrieval for facts.
- D. Move all requests to a larger model and preserve the current prompting and retrieval design.
- Answer: C
- Explanation: Durable style and decision behavior from criteria are model customization or prompt-pattern problems; retrieval mainly changes evidence selection.
- Why A is wrong: Chunking can improve grounding but will not reliably teach a stable company decision style.
- Why B is wrong: More evidence can increase noise and does not directly train criteria adherence behavior.
- Why D is wrong: A stronger model may help, but it does not encode the organization-specific behavior as directly as curated examples.

### Q8: A product owner wants the largest available model for every agent request. The application has simple routing tasks, long document synthesis, and high-risk reasoning cases under a strict latency and cost budget. What is the best model-selection strategy?
- ID: gen-model-002
- Domain: Model Selection and Customization
- Topic: model routing
- Difficulty: hard
- A. Route by task complexity, risk, latency target, context need, confidence, and cost, with escalation for uncertain cases.
- B. Use the largest model for high-risk and long-context tasks, and use the cheapest model for everything else without measurement.
- C. Fine-tune a small model on all task types so a single deployment can replace routing logic.
- D. Use one mid-sized model for every request to simplify evaluation, then add retries when confidence is low.
- Answer: A
- Explanation: Model choice is a systems tradeoff. Routing lets simple tasks run cheaply while complex, long-context, or risky tasks get stronger models and oversight.
- Why B is wrong: It is closer, but "everything else" still needs measured thresholds for latency, confidence, and failure risk.
- Why C is wrong: Fine-tuning one small model may not cover long-context synthesis or high-risk reasoning reliably.
- Why D is wrong: A single middle path can simplify operations but may miss both cost savings and safety escalation needs.

### Q9: A model registry stores base models, tuned adapters, evaluation reports, approval status, deployment versions, and rollback metadata. What problem does this primarily solve?
- ID: gen-model-003
- Domain: Model Selection and Customization
- Topic: model registry
- Difficulty: easy
- A. It provides lifecycle traceability for model artifacts, approvals, versions, evaluations, deployment state, and rollback.
- B. It replaces the inference gateway by serving all model requests directly from the registry.
- C. It prevents prompt injection by verifying that every model artifact has an approved owner.
- D. It improves retrieval relevance by embedding model cards and adapter metadata into the vector index.
- Answer: A
- Explanation: A registry helps teams know which model or adapter is approved, evaluated, deployed, and rollback-ready.
- Why B is wrong: Registries track and govern artifacts; serving infrastructure still hosts runtime requests.
- Why C is wrong: Ownership metadata is useful governance, but prompt injection needs runtime safety and retrieval controls.
- Why D is wrong: Registry metadata can inform operations, but it is not the retrieval system for user documents.

### Q10: An agent calls a CRM update API, but it sometimes sends malformed parameters. The API mutates customer records, and failures must be auditable. What control belongs closest to the tool execution boundary?
- ID: gen-tool-001
- Domain: Tooling, Orchestration, and Memory
- Topic: tool schemas
- Difficulty: medium
- A. Add more examples to the tool description so the model is less likely to infer the wrong argument names.
- B. Runtime validation of tool name, schema, parameters, permissions, risk level, and audit metadata before execution.
- C. Add a self-critique prompt that asks the model to review the proposed tool call before returning it.
- D. Log malformed calls and fine-tune the model periodically on corrected CRM update examples.
- Answer: B
- Explanation: Tool safety depends on an execution layer that validates and authorizes calls before mutation. Prompting and training can reduce errors but should not be the enforcement boundary.
- Why A is wrong: Better descriptions help selection, but they do not enforce schema or permission checks at runtime.
- Why C is wrong: Self-critique is useful as a soft check, but the mutating boundary still needs deterministic validation.
- Why D is wrong: Logging and tuning improve future behavior, but they do not stop the current malformed mutation.

### Q11: A travel agent remembers a user's meal preference, stores one-time trip details, and has outdated passport notes from an old conversation. What memory design is better?
- ID: gen-tool-002
- Domain: Tooling, Orchestration, and Memory
- Topic: memory scope
- Difficulty: hard
- A. Keep a single long-term memory store but rank memories by semantic similarity to the current request.
- B. Put recent conversation summaries into every prompt and ask the model to decide which details are still relevant.
- C. Store only structured profile facts and discard all session history after the task completes.
- D. Separate working memory, episodic session memory, and long-term profile memory with consent, relevance, and expiration rules.
- Answer: D
- Explanation: Different memory scopes have different privacy, freshness, and usefulness requirements. A good design separates temporary task state from durable user preferences.
- Why A is wrong: Similarity ranking alone does not solve consent, expiration, or stale high-risk identity facts.
- Why B is wrong: Sending broad history increases cost and privacy exposure while leaving relevance decisions implicit.
- Why C is wrong: Structured profile facts are useful, but many workflows also need short-lived task and session state.

### Q12: An orchestration layer retries failed tool calls. Some APIs are not idempotent, so retries sometimes create duplicate orders when a timeout hides whether the first call succeeded. What should be added?
- ID: gen-tool-003
- Domain: Tooling, Orchestration, and Memory
- Topic: retries and idempotency
- Difficulty: hard
- A. Idempotency keys, retry policies by tool type, duplicate detection, and compensating actions for unsafe retries.
- B. A planner node that asks the model whether the previous tool call probably succeeded before retrying.
- C. Longer timeout windows and larger model context so the agent can preserve more call history.
- D. A human approval queue for every retry, regardless of whether the tool is read-only or mutating.
- Answer: A
- Explanation: Reliable tool orchestration needs retry semantics that respect whether a tool mutates state and whether the outcome is known.
- Why B is wrong: Model judgment cannot reliably determine external transaction state after a timeout.
- Why C is wrong: Timeouts and context can help observability, but they do not provide idempotent mutation semantics.
- Why D is wrong: Human review may be needed for high-risk mutations, but gating every retry is too broad and still lacks duplicate protection.

### Q13: A team wants to expose a foundation model as a production API with health checks, autoscaling, versioned rollout, metrics, and client authentication. Which lifecycle component is this?
- ID: gen-serve-001
- Domain: Inference Serving and Deployment
- Topic: inference microservice
- Difficulty: easy
- A. A model registry that stores approved model artifacts and evaluation reports.
- B. A human review console that lets reviewers approve responses before customers see them.
- C. An inference microservice or model-serving gateway that owns runtime API operations.
- D. A training data pipeline that prepares examples for future model improvement.
- Answer: C
- Explanation: Production model APIs are serving and deployment concerns: endpoint, auth, rollout, scaling, monitoring, and runtime reliability.
- Why A is wrong: The registry tracks approved artifacts but does not provide the runtime API surface.
- Why B is wrong: Human review can govern decisions, but it does not host or scale model inference.
- Why D is wrong: Training data pipelines improve models later; they do not serve live requests.

### Q14: LLM serving latency worsens under mixed prompt lengths. p99 is high even though average GPU utilization looks acceptable. Which serving technique should be investigated first?
- ID: gen-serve-002
- Domain: Inference Serving and Deployment
- Topic: batching and KV cache
- Difficulty: medium
- A. Fine-tune the model on shorter answers so decode time decreases across all users.
- B. Add a stronger final-answer judge to reject responses that took too long to generate.
- C. Replace retrieval with weekly fine-tuning so fewer chunks are included in the prompt.
- D. Continuous batching, queue policy, KV-cache management, and prefill/decode profiling.
- Answer: D
- Explanation: Mixed-length generation performance is often a serving-runtime and queueing problem. Profiling prefill/decode and batching behavior targets the likely bottleneck.
- Why A is wrong: Shorter answers may reduce some decode time, but it does not diagnose mixed-length queueing or KV-cache behavior.
- Why B is wrong: A judge can measure quality, but it adds work and does not fix serving latency.
- Why C is wrong: Retrieval strategy might affect prompt length, but replacing it wholesale skips the runtime diagnosis.

### Q15: A deployment change improves throughput by 30% but increases groundedness failures on policy questions. What should the rollout process include next time?
- ID: gen-serve-003
- Domain: Inference Serving and Deployment
- Topic: rollout controls
- Difficulty: hard
- A. A throughput-only load test, because quality regressions should be handled by the support team after release.
- B. Canary rollout with quality gates, regression evals, rollback, and separate tracking for system and answer-quality metrics.
- C. A larger traffic sample before measurement so the average quality score is less sensitive to individual failures.
- D. A final response guardrail that blocks uncited answers, allowing infrastructure changes to ship without model evals.
- Answer: B
- Explanation: Deployment gates must measure both infrastructure and model behavior before broad rollout. Throughput gains do not justify quality regression without controlled release and rollback.
- Why A is wrong: Infrastructure success alone is not enough when user-facing answer quality regresses.
- Why C is wrong: More traffic may make estimates smoother, but it exposes more users before gates and rollback are defined.
- Why D is wrong: Output guardrails help, but they do not replace regression evaluation for a deployment change.

### Q16: An agent gets correct final answers but frequently calls unauthorized tools on the way. What evaluation should catch this?
- ID: gen-eval-001
- Domain: Evaluation and Safety
- Topic: trajectory evaluation
- Difficulty: hard
- A. Final-answer accuracy on a held-out question set, with separate latency and token-cost reporting.
- B. Trajectory evaluation that scores intermediate tool calls, permissions, policy compliance, latency, and final answer quality.
- C. A generic model benchmark score for reasoning and instruction following.
- D. A user satisfaction survey collected after the task is complete.
- Answer: B
- Explanation: Agent evaluation must inspect the path, not just the final message. Unauthorized intermediate actions are failures even when the answer looks correct.
- Why A is wrong: Final-answer accuracy misses unsafe intermediate behavior.
- Why C is wrong: Generic benchmarks do not validate the application's tool permissions or workflow policy.
- Why D is wrong: User satisfaction may reveal pain, but it will not reliably expose hidden unauthorized calls.

### Q17: A safety layer blocks toxic outputs, but the agent can still execute a refund tool when malicious retrieved text instructs it to do so. Where should policy checks be applied?
- ID: gen-eval-002
- Domain: Evaluation and Safety
- Topic: guardrails
- Difficulty: easy
- A. At input, retrieval/tool-content ingestion, tool-call proposal, execution approval, and final output.
- B. At final output only, because the user only sees the answer after the tool execution is finished.
- C. In the retriever only, by filtering documents with obvious prompt-injection markers.
- D. In the base model alignment stage, then keep runtime orchestration simple.
- Answer: A
- Explanation: Agent safety is layered. Retrieved instructions and proposed tool calls need checks before action, not just output filtering.
- Why B is wrong: Unsafe mutation may already have happened before the final output is generated.
- Why C is wrong: Retrieval filtering helps but cannot catch every malicious instruction or every risky tool proposal.
- Why D is wrong: Model alignment is useful, but runtime policy must still guard tools and retrieved content.

### Q18: An LLM-as-judge gives higher scores to verbose answers even when concise answers are more correct. What is the best mitigation?
- ID: gen-eval-003
- Domain: Evaluation and Safety
- Topic: judge calibration
- Difficulty: medium
- A. Average scores across several judge prompts so verbosity bias cancels out statistically.
- B. Use the judge only on answers above a minimum word count so short answers are not penalized.
- C. Calibrate the judge with human-labeled examples, explicit criteria, pairwise checks, and bias monitoring.
- D. Replace human labels with production click-through rate because it reflects real user behavior.
- Answer: C
- Explanation: Automated judges are useful but need criteria and calibration against human labels. Bias monitoring should explicitly test whether verbosity changes scores.
- Why A is wrong: Multiple prompts can reduce variance, but shared verbosity bias may remain.
- Why B is wrong: A word-count floor encodes the bias instead of correcting it.
- Why D is wrong: Click-through can be useful telemetry, but it is not a reliable correctness label.

### Q19: A customer agent returns HTTP 200 for most requests, but users still complain that tasks are unfinished. What should operations monitor?
- ID: gen-ops-001
- Domain: Observability, Operations, and Cost
- Topic: task success monitoring
- Difficulty: hard
- A. Infrastructure availability, because successful HTTP responses prove the agent service is healthy.
- B. Task success, tool-call success, escalation rate, retrieval quality, safety blocks, latency, and cost per completed task.
- C. Final-answer sentiment, because frustrated users are the clearest sign that the workflow failed.
- D. Model-token throughput, because unfinished tasks usually mean the model is too slow.
- Answer: B
- Explanation: Agent operations need workflow and quality metrics, not just infrastructure status. A request can return 200 while the business task fails.
- Why A is wrong: HTTP status misses semantic task completion and downstream tool failures.
- Why C is wrong: Sentiment can help support triage, but it is an indirect and incomplete operations metric.
- Why D is wrong: Token throughput may affect latency, but it does not measure whether tasks completed correctly.

### Q20: A trace shows long gaps before model calls and low GPU utilization. What should be investigated before changing the model?
- ID: gen-ops-002
- Domain: Observability, Operations, and Cost
- Topic: bottleneck diagnosis
- Difficulty: hard
- A. Kernel-level math throughput and quantization settings, because low utilization usually means the model is too large.
- B. More training epochs and a larger adapter, because better model quality usually reduces retries.
- C. Upstream retrieval latency, tool waits, CPU preprocessing, queueing, network calls, and synchronization.
- D. Final-answer grading, because quality evaluation will identify whether the latency is acceptable.
- Answer: C
- Explanation: End-to-end latency can be outside the model. Trace the whole request path before optimizing kernels or changing model choice.
- Why A is wrong: Kernel optimization is premature if the GPU is idle while upstream services block the request.
- Why B is wrong: Training does not address runtime gaps before model calls.
- Why D is wrong: Evaluation helps judge acceptability, but it does not diagnose the source of idle time.

### Q21: Costs spike because the agent repeatedly calls a high-priced reasoning model for simple classification tasks. What control should be added?
- ID: gen-ops-003
- Domain: Observability, Operations, and Cost
- Topic: cost routing
- Difficulty: easy
- A. Lower the max token limit for the expensive model so each classification call costs less.
- B. Cache low-risk classification results for a fixed retention window keyed by normalized task inputs.
- C. Add cost dashboards only, then let operators manually tune prompts when monthly spend is high.
- D. Model and tool routing based on task complexity, confidence, risk, and budget, with alerts for route drift.
- Answer: D
- Explanation: Cost control needs routing and drift monitoring so simple tasks stay on cheaper paths and risky tasks escalate intentionally.
- Why A is wrong: Token caps may reduce per-call cost, but the wrong model is still being selected.
- Why B is wrong: Caching can help repeat cases, but it does not address first-time routing errors or high-risk escalation.
- Why C is wrong: Dashboards expose the problem, but route policies and alerts are needed to prevent drift.

### Q22: An agent can submit loan applications, but only certain cases require human approval. What governance design is best?
- ID: gen-gov-001
- Domain: Human Oversight and Governance
- Topic: approval gates
- Difficulty: medium
- A. Require review only when users complain, since reviewers should focus on cases with visible harm.
- B. Risk-tiered approvals: auto-allow low-risk actions, sample-review medium risk, require approval for high-risk or policy-sensitive actions, and block prohibited actions.
- C. Let the model decide when approval is needed, then audit a monthly sample of approved submissions.
- D. Send every generated token to a human reviewer so no automated decision can proceed unseen.
- Answer: B
- Explanation: Oversight should match risk. Gating everything overloads humans, while gating too late or leaving all decisions to the model weakens control.
- Why A is wrong: Complaint-driven review catches harm after the fact and misses silent failures.
- Why C is wrong: Model self-routing can assist, but governance should define deterministic risk tiers and audit rules.
- Why D is wrong: Reviewing every token is operationally unusable and does not focus attention on meaningful risk.

### Q23: A regulated team needs to explain why an agent made a decision three months later. Which artifacts are essential?
- ID: gen-gov-002
- Domain: Human Oversight and Governance
- Topic: auditability
- Difficulty: hard
- A. Final answer text, user rating, and aggregate accuracy for the week when the decision happened.
- B. Prompt template and model name, because those two artifacts reconstruct the agent's decision process.
- C. Versioned prompts, model/adapters, retrieval index, tool calls, policy decisions, human approvals, inputs, outputs, and evaluation evidence.
- D. A screenshot of the user interface plus the agent's natural-language explanation.
- Answer: C
- Explanation: Auditability requires reconstructing system state and the decision path, including versions, retrieved evidence, tool actions, and approvals.
- Why A is wrong: Aggregate metrics and final text do not explain the specific decision path.
- Why B is wrong: Prompt and model identity are necessary but far from sufficient.
- Why D is wrong: UI screenshots and explanations lack backend evidence, versions, and policy records.

### Q24: A human review queue grows without improving the system. Reviewers mark issues, but the feedback is never converted into tests or owned fixes. What process change is needed?
- ID: gen-gov-003
- Domain: Human Oversight and Governance
- Topic: feedback loops
- Difficulty: hard
- A. Keep collecting reviewer comments but shorten the form so reviewers can process more cases.
- B. Replace human review with automated scoring so feedback is consistent and cheaper.
- C. Route more cases to review so the team has a larger sample before changing the system.
- D. Convert review outcomes into labeled eval data, regression tests, policy updates, prompt/tool fixes, and retraining or tuning decisions.
- Answer: D
- Explanation: Human oversight has value when it feeds concrete improvement loops and measurable regressions.
- Why A is wrong: Faster comments still do not improve the system without ownership and conversion into artifacts.
- Why B is wrong: Automated scoring can assist, but it does not replace human labels, policy judgment, or remediation ownership.
- Why C is wrong: More review volume can increase confidence, but the core failure is that feedback is not used.

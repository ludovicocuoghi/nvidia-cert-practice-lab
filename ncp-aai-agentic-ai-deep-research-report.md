# NVIDIA Certified Professional – Agentic AI (NCP-AAI) Deep Research Report

Updated: 2026-04-29

## What this report is for

This report is a companion to the previous NVIDIA Certified Professional – Generative AI LLMs report. The earlier NCP-GENL report focused on LLM infrastructure, optimization, fine-tuning, TensorRT-LLM, Triton, quantization, GPU acceleration, and production deployment. The NCP-AAI exam overlaps with those topics, but the center of gravity is different.

**NCP-AAI is mainly about designing, developing, deploying, evaluating, and governing agentic AI systems.** It tests whether you can reason about agents that plan, use tools, retrieve knowledge, remember state, interact with humans, coordinate with other agents, and operate safely in production.

In practical terms:

- NCP-GENL asks: “Can you build, optimize, and deploy LLMs?”
- NCP-AAI asks: “Can you build a production agent system around LLMs, tools, memory, RAG, evaluation, safety, and NVIDIA deployment components?”

The exam is not just about knowing the words “agent,” “tool,” or “memory.” The public materials and user reports consistently describe it as a scenario-oriented exam about orchestration, production design, evaluation, and safety.

---

## 1. What the certification validates

NVIDIA describes the **NVIDIA-Certified Professional Agentic AI (NCP-AAI)** as an intermediate-level professional credential for candidates who can **architect, develop, deploy, and govern advanced agentic AI solutions**. The official page highlights multi-agent interaction, distributed reasoning, scalability, and ethical safeguards.

The exam is designed for candidates with hands-on experience in production-level agentic AI projects. NVIDIA lists expected knowledge in agent development, architecture, orchestration, multi-agent frameworks, tool/model integration, evaluation, observability, deployment, UI design, reliability guardrails, and rapid prototyping.

### Candidate audience

The official NVIDIA page lists these candidate audiences:

- Software developers
- Software engineers
- Solutions architects
- Machine learning engineers
- Data scientists
- AI strategists
- AI specialists

For a data scientist or ML engineer, this means the exam is less about classical modeling and more about **LLM application architecture**: tools, memory, retrieval, planning, monitoring, and governance.

---

## 2. Exam structure and logistics

| Parameter | Details |
|---|---|
| Exam name | NVIDIA-Certified Professional Agentic AI |
| Code | NCP-AAI |
| Level | Professional |
| Duration | 120 minutes |
| Questions | 60–70 questions |
| Price | USD 200 |
| Delivery | Online, remotely proctored through Certiverse |
| Language | English |
| Validity | 2 years |
| Prerequisites | NVIDIA recommends 1–2 years of AI/ML experience with hands-on production agentic AI projects |
| Credential | Digital badge and optional certificate after passing |

A few third-party practice sites list slightly different numbers, such as 65 questions or 70% passing thresholds. Treat those as practice-site assumptions, not official guaranteed values. NVIDIA’s official page is the source of truth for exam duration, price, number of questions, prerequisites, and blueprint.

---

## 3. Official blueprint domains

NVIDIA’s official blueprint lists 10 domains. The distribution is important because it tells us what a realistic question bank should emphasize.

| Domain | Weight | What it means |
|---|---:|---|
| Agent Architecture and Design | 15% | Structuring agentic systems, agent roles, reasoning loops, communication, tool boundaries, multi-agent design |
| Agent Development | 15% | Building agents, integrating tools, implementing workflows, prompts, APIs, orchestration frameworks |
| Evaluation and Tuning | 13% | Measuring agent quality, comparing agents, tuning behavior, benchmarking, feedback loops |
| Deployment and Scaling | 13% | Productionizing agents, scaling services, latency, throughput, reliability, rollout strategy |
| Cognition, Planning, and Memory | 10% | Reasoning strategies, planning, task decomposition, short-term and long-term memory |
| Knowledge Integration and Data Handling | 10% | RAG, vector search, knowledge graphs, data pipelines, structured and unstructured data |
| NVIDIA Platform Implementation | 7% | Using NVIDIA tools such as NIM, NeMo, Triton, TensorRT-LLM, AI Enterprise, Guardrails |
| Run, Monitor, and Maintain | 5% | Operating live agents, monitoring, troubleshooting, observability, continuous improvement |
| Safety, Ethics, and Compliance | 5% | Responsible AI, privacy, guardrails, prompt injection defense, auditability |
| Human-AI Interaction and Oversight | 5% | Human-in-the-loop, escalation, UI/UX, feedback, approval workflows |

### Blueprint interpretation

The top four domains account for **56% of the exam**:

1. Agent Architecture and Design
2. Agent Development
3. Evaluation and Tuning
4. Deployment and Scaling

This is the core: **design the agent, build it, evaluate it, and operate it at scale.**

The next two domains add agent intelligence and knowledge:

5. Cognition, Planning, and Memory
6. Knowledge Integration and Data Handling

The final four domains test whether the agent can be deployed with NVIDIA tools, monitored, governed, and supervised by humans.

---

## 4. How NCP-AAI differs from NCP-GENL

The previous NCP-GENL report focused on LLM model lifecycle and infrastructure: model optimization, GPU acceleration, prompt engineering, fine-tuning, data preparation, deployment, monitoring, architecture, and safety.

NCP-AAI uses some of the same NVIDIA stack, but it sits one level above pure LLM deployment.

| Topic | NCP-GENL focus | NCP-AAI focus |
|---|---|---|
| LLM inference | TensorRT-LLM, quantization, KV cache, batching | How optimized inference supports agents, tool use, and multi-step workflows |
| RAG | Retrieval quality and groundedness | RAG as one component in an agent’s knowledge system |
| Fine-tuning | SFT, LoRA, QLoRA, model behavior | Agent tuning, feedback loops, tool behavior, task success |
| Deployment | Serving LLMs efficiently | Serving full agent workflows with tools, memory, safety, and monitoring |
| Evaluation | Model quality metrics | Agent task success, tool correctness, trajectory quality, cost, latency, safety |
| Safety | Bias, hallucination, responsible deployment | Tool misuse, prompt injection, data leakage, human oversight, governance |
| NVIDIA tools | TensorRT-LLM, Triton, NeMo, NIM, Nsight, NCCL | NIM, NeMo, Guardrails, Triton, TensorRT-LLM, AI Enterprise, observability components |

### Main takeaway

**NCP-GENL is more model/infrastructure-heavy. NCP-AAI is more orchestration/application-architecture-heavy.**

NCP-AAI still expects NVIDIA platform awareness, but the hardest questions are likely to ask things like:

- Which agent architecture fits this use case?
- How should memory be represented?
- How should a tool call be validated?
- How should an agent recover from a bad plan?
- How should RAG be integrated safely?
- How do you evaluate an agent’s trajectory, not just its final answer?
- How do you scale an agent workflow in production?
- How do you add human oversight without destroying usability?

---

## 5. Online sentiment: what people say about difficulty

Public discussion suggests NCP-AAI is not a simple vocabulary exam. Several experience posts describe it as a design-oriented, production-oriented certification.

A Reddit user who claimed to pass the exam in 2026 wrote that the exam is not about memorizing NVIDIA’s product catalog, but about **orchestration**. They said candidates need to think like AI architects who ensure that an agent does not merely “talk,” but actually “does.” They also highlighted tool calling, API integration, cognition, memory, NIM, NeMo Guardrails, TensorRT-LLM, and production-grade logic as important topics.

A Japanese Zenn post from a candidate who passed NCP-AAI described the exam as covering multi-agent interaction, distributed inference, scalability, ethical safeguards, development, serving, monitoring, DevOps, and MLOps. The author said their exam had 70 questions and lasted two hours. They also said the questions were relatively long, practical, and covered scaling methods, user interaction, current problems, and stakeholder presentation.

A Medium/Plain English article described preparation as a design exercise: reasoning about agents, memory, GPUs, and safety as one coherent system instead of memorizing separate features.

### What this means for your future practice app

A realistic NCP-AAI question bank should not only ask:

- “What is ReAct?”
- “What is memory?”
- “What is RAG?”

It should ask scenario questions like:

- An agent loops after a failed tool call. Which architecture change reduces repeated failure?
- A multi-agent workflow leaks information between tenants. Which control must be applied first?
- A financial agent retrieves correct documents but makes an unsupported decision. Which evaluation metric or guardrail catches the problem?
- A customer-support agent is slow because every request calls three tools sequentially. Which redesign improves latency while preserving correctness?
- A human reviewer is overloaded. Which human-in-the-loop design reduces review load without removing oversight?

---

## 6. Domain-by-domain concept guide

## 6.1 Agent Architecture and Design

This is one of the highest-weighted domains. It tests whether you can design the structure of an agentic system.

### Concepts to know

#### Agent

An agent is an AI system that can observe context, reason about a goal, decide actions, call tools, use memory, and iterate until it completes a task or reaches a stopping condition.

A basic agent loop often looks like:

1. Receive user goal.
2. Interpret task.
3. Plan next step.
4. Select tool or model call.
5. Execute action.
6. Observe result.
7. Update state or memory.
8. Continue, stop, ask human, or escalate.

#### Agent vs workflow

A workflow is usually deterministic or semi-deterministic: steps are predefined.

An agent has more autonomy: it can choose tools, branch, plan, revise, and handle unexpected observations.

Exam trap:

If the task is stable, predictable, and compliance-heavy, a deterministic workflow may be safer than a fully autonomous agent.

#### Single-agent vs multi-agent

A single-agent design is simpler and easier to monitor. It is often enough when the task is narrow.

A multi-agent design is useful when specialized roles improve quality:

- Planner agent
- Researcher agent
- Critic agent
- Tool executor agent
- Summarizer agent
- Safety reviewer agent

Multi-agent systems add complexity:

- More latency
- More cost
- More failure points
- Harder debugging
- Risk of agents reinforcing wrong conclusions
- More complex evaluation

Exam trap:

Do not choose multi-agent architecture just because it sounds advanced. Use it when specialization, separation of duties, or parallel work clearly helps.

#### Agent communication

Agents may communicate through:

- Shared state
- Message passing
- Blackboard pattern
- Event bus
- Orchestrator-controlled handoff
- Task queue

The safer pattern is often to centralize permissions and tool execution rather than letting every agent call every tool freely.

---

## 6.2 Agent Development

Agent development is about implementing agents that can use prompts, tools, APIs, retrieval, memory, and structured outputs reliably.

### Tool use

A tool is an external capability the agent can call:

- Calculator
- Search
- SQL query
- API call
- CRM lookup
- Ticket creation
- Code execution
- Email sending
- File parser
- Knowledge base retrieval

Tool calls should be structured, validated, and permissioned.

### Tool selection

Good agents choose tools only when needed.

Failure modes:

- Calling tools unnecessarily
- Calling the wrong tool
- Calling tools in the wrong order
- Calling tools with invalid arguments
- Ignoring tool output
- Hallucinating tool results
- Repeating failed calls in a loop

### Tool execution safety

Important controls:

- Tool allowlist
- Schema validation
- Argument validation
- Least privilege
- Rate limits
- Timeouts
- Idempotency keys
- Dry-run mode
- Human approval for high-impact actions
- Logging and audit trails

Exam trap:

Do not solve dangerous tool execution with only a better prompt. Use application-level controls.

### Parallel tool calling

Parallel tool calling can reduce latency when tool calls are independent.

Use parallel calls when:

- The tool calls do not depend on each other.
- Results can be merged later.
- External systems can handle load.
- Race conditions are not a problem.

Avoid parallel calls when:

- Tool B depends on Tool A’s output.
- Calls mutate shared state.
- Order matters.
- The cost or rate limit is high.

---

## 6.3 Evaluation and Tuning

Agent evaluation is harder than model evaluation because an agent has a trajectory, not just a final answer.

### What to evaluate

For an agent, evaluate:

- Final answer correctness
- Task completion rate
- Tool selection correctness
- Tool argument correctness
- Reasoning trajectory quality
- Number of unnecessary steps
- Latency
- Cost
- Safety
- Groundedness
- Human escalation correctness
- Failure recovery
- User satisfaction

### Agent trajectory

An agent trajectory is the sequence of reasoning steps, tool calls, observations, memory updates, and final response.

Two agents may produce the same final answer, but one may do it safely and cheaply while the other calls unnecessary tools, leaks data, or relies on unsupported assumptions.

### Evaluation methods

Use a combination of:

- Golden task sets
- Unit tests for tools
- Integration tests for workflows
- Human review
- LLM-as-judge
- Pairwise comparison
- Task-specific metrics
- Regression tests
- Safety red-team tests
- Production canaries
- User feedback

### Tuning

Tuning may involve:

- Prompt improvements
- Tool descriptions
- Tool schemas
- Retrieval settings
- Memory rules
- Model routing
- Guardrails
- Human escalation thresholds
- Fine-tuning or preference tuning

Exam trap:

If the agent fails because the tool description is ambiguous, fine-tuning the model may be the wrong first step. Improve tool schema, tool description, validation, or orchestration.

---

## 6.4 Deployment and Scaling

Deployment and scaling test whether you can operate an agent system under real load.

### Agent systems are heavier than plain chat

A single user request may trigger:

- Query classification
- Memory lookup
- Retrieval
- Reranking
- Multiple LLM calls
- Tool calls
- Safety checks
- Human approval checks
- Final generation
- Logging

This means capacity planning must consider **steps per task**, not just requests per second.

### Production scaling concerns

Important factors:

- Number of LLM calls per user request
- Tool latency
- Retrieval latency
- Vector DB throughput
- External API limits
- State store throughput
- Queueing delay
- Streaming behavior
- GPU utilization
- Cold starts
- Cost per completed task
- Failure recovery

### NVIDIA platform mapping

- NIM: packaged inference microservices for LLMs and other models.
- Triton: serving and batching models, potentially multiple components.
- TensorRT-LLM: optimized LLM inference engines.
- NeMo Guardrails: safety and conversation control.
- NeMo-related services: customization, evaluation, guardrails, data flywheel, depending on enterprise setup.
- NGC: containers and model artifacts.
- AI Enterprise: enterprise software platform for supported deployment.

### Scaling patterns

Use:

- Separate endpoints for real-time and offline tasks.
- Model routing for easy vs hard tasks.
- Cache stable prompt prefixes.
- Cache retrieval results when safe.
- Use asynchronous execution for long-running tools.
- Apply backpressure when tools or vector DBs are overloaded.
- Use circuit breakers for flaky tools.
- Use canary rollouts for new prompts, agents, models, and tools.

Exam trap:

Scaling an agent is not just “add GPUs.” Often the bottleneck is a tool API, vector DB, orchestration step, memory store, or guardrail pipeline.

---

## 6.5 Cognition, Planning, and Memory

This domain tests agent reasoning strategies and memory systems.

### ReAct

ReAct combines reasoning and acting in a loop:

1. Think or reason about next action.
2. Call a tool.
3. Observe result.
4. Decide next step.

It is useful for dynamic tasks where the agent must use tools and adapt based on observations.

Potential problems:

- Loops
- Excessive tool calls
- Bad stopping criteria
- Reasoning text that is not faithful
- Tool output ignored or misread

### Plan-and-execute

The agent first creates a plan, then executes steps.

Useful when:

- Task has multiple dependent subtasks.
- Work can be decomposed.
- You want clearer structure.

Potential problems:

- The initial plan may become invalid.
- The agent may fail to revise.
- Too much planning increases latency.

### Reflection

Reflection lets an agent critique its previous output or trajectory and improve.

Useful when:

- The agent makes repeated errors.
- There is a chance to self-correct.
- A critic model or reviewer can catch failures.

Potential problems:

- More cost and latency.
- Reflection can reinforce wrong reasoning if evaluation is weak.

### Memory types

#### Short-term memory

Usually the current conversation context or working state.

Use for:

- Current task steps
- Current user instructions
- Recent observations
- Temporary variables

#### Long-term memory

Persistent memory across sessions.

Use for:

- User preferences
- Historical facts
- Past decisions
- Case history

Must be governed carefully because it can store sensitive information.

#### Episodic memory

Memory of past events or interactions.

Example: “Last week the user asked to generate a report about NVIDIA LLM certification.”

#### Semantic memory

General knowledge or facts stored for retrieval.

Example: company policy documents, user profile, product catalog.

#### Entity memory

Information attached to specific entities.

Example: customer account, project, company, user preference.

Exam trap:

If an agent needs to remember a user preference across sessions, the answer is not “context window.” It needs persistent long-term or entity memory with privacy controls.

---

## 6.6 Knowledge Integration and Data Handling

This domain includes RAG, databases, knowledge graphs, multimodal data, and data transformation.

### RAG in agent systems

RAG is often one tool in an agent workflow. The agent may retrieve knowledge, reason over it, call other tools, and generate a response.

Components:

- Ingestion
- Chunking
- Embedding
- Metadata tagging
- Permission filtering
- Retrieval
- Reranking
- Context packing
- Citation validation
- Groundedness checks

### Structured data

Agents may query:

- SQL databases
- NoSQL databases
- APIs
- Graph databases
- Data warehouses
- CRM systems
- Logs
- Ticketing systems

Important controls:

- Query validation
- Read-only mode when possible
- Row-level access control
- Query cost limits
- Timeout limits
- SQL injection prevention
- Human approval for writes

### Knowledge graphs

Knowledge graphs are useful when relationships matter:

- Entities
- Links
- Hierarchies
- Dependencies
- Provenance

Use a knowledge graph when the agent must reason over structured relationships, not just semantic similarity.

### Multimodal agents

Agentic AI may include text, image, audio, video, or structured data. Multimodal agents need modality-specific retrieval, evaluation, and safety checks.

Exam trap:

A vector database is not always enough. If the query depends on exact structured relationships, use structured queries or knowledge graph integration.

---

## 6.7 NVIDIA Platform Implementation

This domain checks whether you know how NVIDIA tools fit into agentic systems.

### NIM

NIM packages optimized inference microservices.

Use for:

- LLM serving
- Embedding model serving
- Reranker serving
- OpenAI-compatible APIs
- Enterprise deployment

### NeMo

Use for:

- Agent and LLM customization
- RAG agents
- Guardrails
- Evaluation workflows
- Enterprise generative AI lifecycle components

### Triton

Use for:

- Serving models
- Dynamic batching
- Ensembles
- Multi-backend deployment
- Metrics

### TensorRT-LLM

Use for:

- LLM inference optimization
- Quantization
- Paged KV cache
- In-flight batching
- Faster decode

### AI Enterprise

Use as the supported enterprise software layer that packages NVIDIA AI tools for production environments.

Exam trap:

Know the tool boundaries. NIM is not the same as NeMo. Triton is not the same as TensorRT-LLM. Guardrails are not access control. TensorRT-LLM optimizes inference, but it does not design the agent workflow.

---

## 6.8 Run, Monitor, and Maintain

This domain is smaller by weight but important in real scenarios.

### What to monitor

System metrics:

- Latency
- TTFT
- Throughput
- Error rate
- Timeout rate
- GPU utilization
- Queue delay
- Tool latency
- API rate limits
- Cost per task

Agent quality metrics:

- Task completion rate
- Tool success rate
- Tool retry rate
- Escalation rate
- Groundedness
- Faithfulness
- User satisfaction
- Safety refusal correctness
- Hallucination rate
- Memory retrieval correctness

### Maintenance tasks

- Update prompts.
- Update tool schemas.
- Re-index knowledge.
- Rotate API keys.
- Validate memory store quality.
- Run regression tests.
- Review failed trajectories.
- Add new red-team cases.
- Tune routing and escalation thresholds.

Exam trap:

Monitoring only GPU utilization is not enough. Agent systems need **trajectory monitoring** and **quality monitoring**.

---

## 6.9 Safety, Ethics, and Compliance

Agent safety is harder than chatbot safety because agents can act.

### Core risks

- Prompt injection
- Indirect prompt injection from retrieved documents
- Tool misuse
- Unauthorized data access
- Cross-tenant leakage
- Unsafe recommendations
- Overconfident hallucinations
- Autonomous harmful actions
- PII persistence in memory
- Lack of auditability

### Safety controls

Use defense in depth:

1. Authentication
2. Authorization
3. Retrieval permission filters
4. Tool allowlists
5. Tool argument validation
6. Rate limits
7. Human approval for high-impact actions
8. Input moderation
9. Output moderation
10. Guardrails
11. Audit logs
12. Red-team tests
13. Incident rollback

Exam trap:

If the risk is unauthorized access, solve it before generation. Output filtering after the model has seen forbidden data is too late.

---

## 6.10 Human-AI Interaction and Oversight

This domain tests whether humans are placed correctly in the loop.

### Human-in-the-loop patterns

Use human approval for:

- Financial transactions
- Legal decisions
- Medical decisions
- Account changes
- External communications
- Destructive actions
- Low-confidence outputs
- Policy-sensitive cases

### Human-on-the-loop

A human supervises but does not approve every action. Useful for lower-risk tasks with monitoring and escalation.

### Escalation design

Good escalation includes:

- Reason for escalation
- Evidence gathered
- Agent confidence
- Proposed action
- Logs of tool calls
- Safe default behavior

### Feedback loops

User or reviewer feedback can improve:

- Prompts
- Tool descriptions
- Retrieval settings
- Memory rules
- Training data
- Evaluation sets
- Guardrail policies

Exam trap:

Do not send every task to a human. Oversight must be risk-based, otherwise the system does not scale.

---

## 7. Example question themes from public practice material

Public practice sources show that NCP-AAI questions are often scenario-based.

Common themes include:

- ReAct reasoning loops
- Tool use and API integration
- Real-time customer service agents
- Triton for serving and scaling
- Dynamic batching for concurrent requests
- Memory modules for agent decision-making
- Evaluation across multiple tasks
- RAG agents using NeMo, TensorRT-LLM, and Triton
- Cost and throughput trade-offs
- Human feedback for iterative improvement
- Multi-database integration into a unified reasoning structure
- Safety and guardrails
- Monitoring and troubleshooting response time

The important pattern is that questions tend to combine several layers:

**agent architecture → retrieval/tool/memory design → NVIDIA serving component → evaluation or safety constraint.**

---

## 8. Recommended structure for your future NCP-AAI question bank

If you want your Codex app to generate practice exams similar to the NCP-GENL question bank, use the official blueprint weights.

For a **65-question practice exam**, a good distribution is:

| Domain | Weight | Approx. questions |
|---|---:|---:|
| Agent Architecture and Design | 15% | 10 |
| Agent Development | 15% | 10 |
| Evaluation and Tuning | 13% | 8 |
| Deployment and Scaling | 13% | 8 |
| Cognition, Planning, and Memory | 10% | 7 |
| Knowledge Integration and Data Handling | 10% | 7 |
| NVIDIA Platform Implementation | 7% | 5 |
| Run, Monitor, and Maintain | 5% | 3 |
| Safety, Ethics, and Compliance | 5% | 3 |
| Human-AI Interaction and Oversight | 5% | 4 |

### Question style to target

Each question should include:

- A concrete business or engineering scenario
- A bottleneck or failure mode
- Multiple plausible options
- One best answer
- Explanations for why wrong answers are wrong
- NVIDIA-specific tool mapping when relevant
- Safety and production constraints when relevant

### Difficulty calibration

Beginner-level questions:

- “What is tool calling?”
- “What is long-term memory?”
- “What is RAG?”

Professional-level questions:

- “A multi-agent system repeatedly calls a payment API after partial tool failure. Which design prevents duplicated side effects while preserving autonomy?”
- “A RAG agent retrieves the right policy document but applies it to the wrong customer segment. Which evaluation or data-handling fix best catches the issue?”
- “A customer-support agent has high p99 latency because it calls three independent tools sequentially. Which design improves latency safely?”
- “An agent stores user preferences across sessions. Which memory design balances personalization, privacy, and auditability?”
- “A code agent executes generated commands in a sandbox but still leaks secrets through logs. Which defense should be added?”

---

## 9. High-value concepts to include in the study app

### Agent architecture

- ReAct
- Plan-and-execute
- Reflection
- Critic/reviewer agents
- Router agents
- Hierarchical agents
- Multi-agent debate
- Blackboard pattern
- Orchestrator pattern
- Event-driven agent workflows

### Tool use

- Function calling
- Tool schemas
- Tool allowlists
- Tool permissions
- Tool retries
- Idempotency
- Parallel tool calls
- Tool timeout
- Tool fallback
- Human approval

### Memory

- Short-term memory
- Long-term memory
- Episodic memory
- Semantic memory
- Entity memory
- Memory summarization
- Memory retrieval
- Memory privacy
- Memory expiration

### RAG and knowledge

- Chunking
- Embeddings
- Reranking
- Metadata filters
- Permission filters
- Knowledge graphs
- Hybrid search
- Structured data access
- Citation validation
- Groundedness

### Evaluation

- Task success rate
- Trajectory evaluation
- Tool correctness
- Groundedness
- Faithfulness
- LLM-as-judge
- Human review
- Pairwise comparison
- Regression testing
- Canary prompts
- Safety evals

### Deployment

- NIM
- Triton
- TensorRT-LLM
- NeMo
- Guardrails
- Kubernetes
- Autoscaling
- Warm pools
- Canary deployment
- Multi-region architecture
- Observability

### Safety

- Prompt injection
- Indirect prompt injection
- Tool misuse
- PII leakage
- Access control
- Least privilege
- Audit logs
- Red teaming
- HITL approval
- Policy guardrails

---

## 10. Final takeaways

NCP-AAI is a professional-level agentic AI architecture exam. It is less about raw GPU kernel optimization than NCP-GENL, but it still expects production NVIDIA stack awareness.

The exam’s core skill is **orchestration reasoning**:

1. Decide what kind of agent architecture fits the task.
2. Decide what tools, memory, retrieval, and planning are needed.
3. Decide how to evaluate the full trajectory, not only the final answer.
4. Decide how to deploy and scale the system with NVIDIA components.
5. Decide how to monitor, maintain, and govern the agent safely.

For your exam-practice app, a realistic NCP-AAI question bank should be scenario-based and should test trade-offs across architecture, tool use, memory, RAG, evaluation, deployment, monitoring, safety, and human oversight. Avoid making it a list of definitions. The best questions should feel like production design decisions.

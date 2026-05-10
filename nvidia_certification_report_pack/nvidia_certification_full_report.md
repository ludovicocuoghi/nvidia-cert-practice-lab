# Full Report: NVIDIA NCP-GENL and NCP-AAI Study Knowledge Extraction

Source materials:

1. `nvt-certification-study-guide-gen-ai-llm-professional-certification-r1.pdf`
2. `nvt-study-guide-new-agentic-ai-cert-exam-4230000.pdf`
3. `Knowledge from Mock Tests.md`
4. `ncp-genl-refined-study-guide(2).md`
5. `ncp-aai-agentic-ai-deep-research-report(2).md`

Additional official reference pages checked:

1. NVIDIA NCP-GENL certification page
2. NVIDIA NCP-AAI certification page
3. TensorRT-LLM documentation
4. NVIDIA NeMo documentation
5. NVIDIA NeMo Guardrails documentation

## 1. Executive summary

The two certifications overlap but test different layers.

| Certification | Center of gravity | What the exam is really testing |
|---|---|---|
| NCP-GENL, Gen AI LLMs | LLM lifecycle and GPU aware production deployment | Transformer architecture, prompting, data preparation, model optimization, fine tuning, evaluation, GPU scaling, deployment, monitoring, and safety |
| NCP-AAI, Agentic AI | Production agent systems around LLMs | Agent architecture, tool use, planning, memory, RAG, orchestration, evaluation, deployment, monitoring, safety, and human oversight |

The best study strategy is not memorizing every product name. The more useful approach is to identify the system phase, locate the bottleneck, and select the correct NVIDIA layer or engineering pattern.

For NCP-GENL, the key mental model is:

| Phase | Main concepts |
|---|---|
| Hardware and low level execution | GPU, CUDA, tensor cores, NVLink, InfiniBand, NCCL, Nsight Systems, Nsight Compute |
| Training and customization | NeMo Framework, SFT, LoRA, QLoRA, DPO, RLHF, continued pretraining, data curation |
| Inference optimization | TensorRT-LLM, quantization, KV cache, paged attention, in-flight batching, chunked prefill, CUDA Graphs |
| Serving and deployment | NIM, Triton, Docker, Kubernetes, dynamic batching, model warmup, endpoint separation |
| Application layer | RAG, embeddings, reranking, prompt engineering, tool calling, structured output, routing |
| Safety and reliability | NeMo Guardrails, access control, red teaming, canary evaluation, audit logs, rollback |

For NCP-AAI, the key mental model is:

| Layer | Main concepts |
|---|---|
| Agent architecture | Agent vs workflow, single agent vs multi agent, orchestrator, blackboard, event driven handoff |
| Agent development | Tool schemas, function calling, APIs, prompts, retries, fallbacks, streaming, conversation flows |
| Cognition and memory | ReAct, plan and execute, reflection, short term memory, long term memory, episodic memory, semantic memory |
| Knowledge integration | RAG, vector search, hybrid retrieval, SQL, APIs, knowledge graphs, metadata filters, citation validation |
| Evaluation | Task success, trajectory quality, tool correctness, groundedness, cost, latency, safety, escalation quality |
| Deployment | NIM, Triton, TensorRT-LLM, Kubernetes, autoscaling, queues, backpressure, caching, circuit breakers |
| Monitoring and safety | Tracing, logs, quality monitoring, prompt injection defense, RBAC, PII redaction, audit trails, HITL approval |

## 2. Official logistics and blueprint summary

### NCP-GENL: Generative AI LLMs

| Field | Extracted official detail |
|---|---|
| Level | Professional |
| Duration | 120 minutes |
| Questions | 60 to 70 |
| Price | USD 200 |
| Language | English |
| Validity | 2 years |
| Prerequisites | 2 to 3 years of practical AI or ML experience with LLMs, transformer architectures, prompt engineering, distributed parallelism, PEFT, advanced sampling, hallucination mitigation, RAG, evaluation metrics, and performance profiling |

Official topic weights:

| Domain | Weight |
|---|---:|
| LLM Architecture | 6% |
| Prompt Engineering | 13% |
| Data Preparation | 9% |
| Model Optimization | 17% |
| Fine Tuning | 13% |
| Evaluation | 7% |
| GPU Acceleration and Optimization | 14% |
| Model Deployment | 9% |
| Production Monitoring and Reliability | 7% |
| Safety, Ethics, and Compliance | 5% |

### NCP-AAI: Agentic AI

| Field | Extracted official detail |
|---|---|
| Level | Professional |
| Duration | 120 minutes |
| Questions | 60 to 70 |
| Price | USD 200 |
| Language | English |
| Validity | 2 years |
| Prerequisites | 1 to 2 years of AI or ML experience and hands on work with production agentic AI projects, including architecture, orchestration, multi agent frameworks, tool and model integration, evaluation, observability, deployment, UI design, reliability guardrails, and prototyping |

Official topic weights:

| Domain | Weight |
|---|---:|
| Agent Architecture and Design | 15% |
| Agent Development | 15% |
| Evaluation and Tuning | 13% |
| Deployment and Scaling | 13% |
| Cognition, Planning, and Memory | 10% |
| Knowledge Integration and Data Handling | 10% |
| NVIDIA Platform Implementation | 7% |
| Run, Monitor, and Maintain | 5% |
| Safety, Ethics, and Compliance | 5% |
| Human AI Interaction and Oversight | 5% |

Note: the uploaded Agentic AI PDF shows Deployment and Scaling as 5% and Run, Monitor, and Maintain as 7%. The official NVIDIA certification page currently shows Deployment and Scaling as 13% and Run, Monitor, and Maintain as 5%. For exam planning, use the official web page.

## 3. Key difference between NCP-GENL and NCP-AAI

| Topic | NCP-GENL focus | NCP-AAI focus |
|---|---|---|
| LLM inference | TensorRT-LLM, quantization, KV cache, batching, GPU optimization | How optimized inference supports multi step agent workflows |
| RAG | Retrieval quality, reranking, grounded generation, faithfulness | RAG as one tool in agent knowledge integration |
| Fine tuning | SFT, LoRA, QLoRA, continued pretraining, PEFT | Secondary improvement path for agent behavior, not the default answer |
| Deployment | Serving LLMs efficiently with NIM, Triton, TensorRT-LLM, Kubernetes | Serving the entire agent workflow with tools, memory, retrieval, safety, and monitoring |
| Evaluation | Model quality, benchmark metrics, error analysis, LLM as judge | Final answer plus trajectory, tool correctness, escalation, cost, latency, safety |
| Safety | Responsible AI, guardrails, bias, hallucination mitigation | Prompt injection, tool misuse, unauthorized access, audit trails, HITL oversight |
| NVIDIA tools | TensorRT-LLM, Triton, NIM, NeMo, Nsight, NCCL, RAPIDS | NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever, NIM, Triton, TensorRT-LLM |

## 4. Extracted NCP-GENL knowledge by domain

### 4.1 LLM Architecture, 6%

Must know:

| Concept | Study focus |
|---|---|
| Transformer architecture | Self attention, feed forward layers, residuals, normalization, positional encoding |
| Encoder decoder structures | Encoder only, decoder only, encoder decoder tradeoffs |
| Embeddings | Token embeddings, sentence embeddings, encoder and decoder representations |
| Sampling | Greedy, beam search, top k, top p, temperature, constrained decoding |

Best references:

| Reference |
|---|
| Attention Is All You Need |
| Building Transformer Based NLP Applications |
| Mastering LLM Techniques: Training |

### 4.2 Prompt Engineering, 13%

Must know:

| Concept | Study focus |
|---|---|
| Zero shot, one shot, few shot | Prompt design for task adaptation |
| Chain of thought and reasoning | When reasoning prompts help and when they add latency or risk |
| Prompt templates | Reusable, structured, validated prompts |
| Output control | JSON schemas, grammar constraints, validation modules, constrained decoding |

Exam traps:

| Trap | Correct reasoning |
|---|---|
| Using fine tuning for formatting | Prompting or structured output is usually better first |
| Trusting raw model output | Use validation and schema constraints for production output |
| Assuming CoT always helps | CoT can increase cost, latency, and exposure of unwanted reasoning text |

### 4.3 Data Preparation, 9%

Must know:

| Concept | Study focus |
|---|---|
| Cleaning and curation | Missing values, duplicates, normalization, PII, contamination |
| Tokenization | BPE, WordPiece, vocabulary size, domain vocabulary |
| Dataset formatting | Instruction datasets, pretraining corpora, evaluation splits |
| Data quality | Class imbalance, distribution shifts, feature checks, lineage |

NVIDIA tool mapping:

| Need | Tool or concept |
|---|---|
| Large scale data curation | NeMo Curator |
| GPU accelerated preprocessing | RAPIDS cuDF |
| Tokenizer and model customization workflow | NeMo Framework |

### 4.4 Model Optimization, 17%

Highest weight domain in NCP-GENL.

Must know:

| Concept | Best use |
|---|---|
| Weight quantization | Reduce parameter memory and bandwidth |
| Activation quantization | Reduce activation memory and compute, but requires care with outliers |
| KV cache quantization | Reduce long context inference memory |
| AWQ and GPTQ | 4 bit weight only quantization with representative calibration |
| SmoothQuant | Better INT8 behavior when activation outliers cause quality loss |
| FP8 | High throughput on Hopper or H100 style workloads with validation |
| Pruning and sparsity | Reduce model size or compute when hardware and kernels support it |
| Knowledge distillation | Train a smaller student model to imitate a larger teacher |
| Hyperparameter tuning | Learning rate, batch size, search, ablation studies |
| TensorRT-LLM | LLM optimized inference engine and runtime concepts |

Critical trap:

If the scenario says long context, many concurrent users, 32K or 64K context, or streaming memory pressure, think KV cache. Weight only INT4 may reduce model weight memory but may not solve KV cache memory pressure.

### 4.5 Fine Tuning, 13%

Must know:

| Method | When to use |
|---|---|
| Prompting | The model can already do the task but needs instruction or formatting |
| RAG | The model needs private, external, or frequently updated facts |
| LoRA | The model needs durable task behavior, style, or domain adaptation with limited compute |
| QLoRA | Same as LoRA, but GPU memory is limited |
| Full SFT | You have enough high quality data and need deeper behavioral change |
| Continued pretraining | The model lacks the domain language distribution and you have large unlabeled domain text |
| DPO, RLHF, preference tuning | The model can produce candidates but needs to prefer safer or more useful behavior |

Critical trap:

Do not fine tune to add frequently changing internal knowledge. Use RAG and retrieval evaluation first.

### 4.6 Evaluation, 7%

Must know:

| Evaluation type | What it measures |
|---|---|
| BLEU, ROUGE | Lexical overlap, useful in limited contexts |
| Perplexity | Language modeling uncertainty, not direct task success |
| RAG metrics | Context relevance, answer faithfulness, groundedness |
| Human review | Quality, usefulness, safety, domain correctness |
| LLM as judge | Scalable relative or criteria based assessment, requires validation |
| Error analysis | Failure mode discovery and prioritization |
| Benchmarking across platforms | Compare DGX, cloud GPU, and standardized configurations |

Critical trap:

Do not rely on one generic metric for all LLM tasks. Evaluation must match task type and risk.

### 4.7 GPU Acceleration and Optimization, 14%

Must know:

| Concept | When it matters |
|---|---|
| DDP | Data parallel distributed training |
| FSDP or ZeRO style sharding | Optimizer state and parameter memory pressure |
| Tensor parallelism | Splitting large matrix operations across GPUs |
| Pipeline parallelism | Splitting layers across GPUs |
| Expert parallelism | MoE routing and all to all communication |
| Mixed precision and Tensor Cores | Throughput improvement on compatible hardware |
| Gradient accumulation | Training large effective batches with limited GPU memory |
| Nsight Systems | First tool for broad timeline level bottleneck diagnosis |
| Nsight Compute | Kernel level diagnosis after a specific kernel is identified |
| NCCL | Multi GPU collective communication and poor scaling diagnosis |

### 4.8 Model Deployment, 9%

Must know:

| Concept | Study focus |
|---|---|
| NIM | Packaged enterprise inference microservice |
| Triton | Serving layer, batching, ensembles, metrics, multiple backends |
| TensorRT-LLM | Engine and runtime optimization for LLM inference |
| Docker and Kubernetes | Containerization, orchestration, replicas, rollout |
| Dynamic batching | Throughput improvement with queue delay tradeoff |
| In-flight batching | Better for mixed length generation workloads |
| Endpoint separation | Different serving configs for chat, batch, embeddings, reranking, safety |

Critical trap:

Triton serves and schedules. TensorRT-LLM optimizes LLM inference. NIM packages optimized deployment. Do not confuse the layers.

### 4.9 Production Monitoring and Reliability, 7%

Must know:

| Metric or artifact | Why it matters |
|---|---|
| TTFT | Chat responsiveness |
| p95 and p99 latency | Tail latency and user experience |
| Throughput | Capacity and cost |
| GPU utilization | Accelerator efficiency |
| Queue delay | Batching and scheduling bottleneck |
| Error rate and timeout rate | Service reliability |
| Drift and quality metrics | Model degradation after updates |
| Canary prompts | Continuous regression detection |
| Logs and audit metadata | Root cause analysis and compliance |

### 4.10 Safety, Ethics, and Compliance, 5%

Must know:

| Risk | Control |
|---|---|
| Private data leakage | Access control before retrieval, document ACLs, least privilege |
| Unsafe content | Input and output checks, NeMo Guardrails, policy filters |
| Hallucination | RAG grounding, citation checks, faithfulness evaluation |
| Bias and fairness | Bias audits, test sets, mitigation strategy |
| Production incident | Rollback, disable tool or retrieval source, incident response logs |

Critical trap:

Guardrails complement access control. Guardrails do not replace IAM, database permissions, document ACLs, logging, or compliance review.

## 5. Extracted NCP-AAI knowledge by domain

### 5.1 Agent Architecture and Design, 15%

Must know:

| Concept | Study focus |
|---|---|
| Agent vs workflow | Use deterministic workflow for stable, compliance heavy tasks; use agent when autonomy and branching are needed |
| ReAct | Reason, act, observe loop for dynamic tool use |
| Multi agent design | Use specialization when it clearly helps; avoid unnecessary complexity |
| Orchestrator pattern | Central coordination, permissions, and handoff control |
| Blackboard pattern | Shared state for collaboration and coordination |
| Memory architecture | Short term, long term, episodic, semantic, entity memory |
| Knowledge graphs | Structured relationship reasoning and multi hop dependencies |

Critical trap:

Do not choose multi agent architecture only because it sounds advanced. More agents increase latency, cost, failure points, and evaluation complexity.

### 5.2 Agent Development, 15%

Must know:

| Concept | Study focus |
|---|---|
| Tool wrappers | Typed schemas, validated arguments, clear preconditions |
| API integration | External systems through function calling and controlled execution |
| Error handling | Retry, exponential backoff, max retry limits, fallback, circuit breakers |
| Idempotency | Prevent duplicated side effects after partial failure |
| Parallel tool calls | Use for independent read only operations; avoid for dependent writes |
| Streaming | Real time response and feedback loop design |
| Conversation flow | Dynamic routing, state transitions, user feedback |

Critical trap:

Never let the model be the security boundary. Dangerous tool execution needs application level controls, not only a prompt.

### 5.3 Evaluation and Tuning, 13%

Agent evaluation must assess the trajectory, not only the final response.

| Evaluation target | Examples |
|---|---|
| Final answer | Correctness, completeness, usefulness |
| Tool behavior | Correct tool, correct arguments, no unnecessary calls |
| Trajectory | Steps, observations, memory updates, recovery from failure |
| Safety | Refusal correctness, PII leakage, prompt injection resistance |
| Groundedness | Retrieved evidence actually supports the response |
| Cost and latency | Number of LLM calls, tool latency, total task time |
| Human escalation | Correct escalation reason, confidence, evidence, proposed action |

Best evaluation methods:

| Method | Use |
|---|---|
| Golden task sets | Repeatable regression testing |
| Unit tests for tools | Validate tool wrapper behavior |
| Integration tests | Full workflow reliability |
| LLM as judge | Scalable scoring, must be validated |
| Human review | Domain correctness and safety |
| A/B and shadow tests | Production comparison |
| Canary prompts | Continuous monitoring |

### 5.4 Deployment and Scaling, 13% official, 5% in uploaded PDF

Must know:

| Scaling issue | Correct response |
|---|---|
| Too many LLM calls per request | Model routing, caching, workflow simplification |
| Independent slow tools | Parallelize read only calls and merge results |
| Flaky external APIs | Circuit breaker, retries, timeout, fallback |
| Vector DB bottleneck | Caching, indexing, metadata filters, reranking design |
| GPU bottleneck | NIM, Triton, TensorRT-LLM, batching, endpoint separation |
| Long running tasks | Async queue, checkpointing, progress state |
| Cold starts | Warm pools, model warmup, preloaded replicas |
| Quality regression after rollout | Canary, shadow test, rollback |

Critical trap:

Scaling an agent is not just adding GPUs. Bottlenecks may be tools, vector databases, orchestration state, memory stores, queueing, guardrails, or retrieval.

### 5.5 Cognition, Planning, and Memory, 10%

Must know:

| Concept | Use |
|---|---|
| ReAct | Adaptive tool use with observations |
| Plan and execute | Multi step tasks with dependent subtasks |
| Reflection | Self critique or critic model, useful but adds latency and cost |
| Task decomposition | Break complex tasks into manageable steps |
| Short term memory | Current conversation and task state |
| Long term memory | Persistent preferences and case history |
| Episodic memory | Past interactions and events |
| Semantic memory | General facts and policy knowledge |
| Entity memory | Facts tied to users, accounts, projects, or objects |
| TTL and relevance gates | Prevent stale or irrelevant memory retrieval |

Critical trap:

If an agent must remember preferences across sessions, a context window is not enough. Use persistent memory with privacy controls.

### 5.6 Knowledge Integration and Data Handling, 10%

Must know:

| Data source | Pattern |
|---|---|
| Internal documents | RAG with access control, metadata, chunking, embeddings, reranking |
| SQL databases | Validated read only queries, row level access, cost limits |
| APIs | Typed tools, timeouts, retries, permissions |
| Graph data | Knowledge graph for relationships and multi hop reasoning |
| Logs and tickets | ETL, normalization, indexing, source tracking |
| Multimodal data | Modality specific extraction, retrieval, safety, and evaluation |

Critical trap:

A vector database is not always enough. If relationships, exact constraints, permissions, or structured values matter, use structured queries or knowledge graph integration.

### 5.7 NVIDIA Platform Implementation, 7%

Core mapping:

| Tool | Best use in Agentic AI |
|---|---|
| NeMo Agent Toolkit | Agent workflow, tools, memory, evaluation and profiling hooks |
| NeMo Guardrails | Safety, policy, dialog control, RAG grounding, tool use governance |
| NeMo Retriever | Enterprise RAG, extraction, embeddings, indexing, reranking, citations |
| NIM | Production inference APIs for models used by agents |
| NeMo Evaluator | Model and agent quality, benchmarks, judge workflows, regression checks |
| NIM Operator | Kubernetes lifecycle for NIM and NeMo services |
| TensorRT-LLM | LLM latency and throughput optimization |
| Triton | Multi model serving, batching, ensembles, metrics |
| Nsight Systems and Compute | Performance diagnosis |
| NeMo Customizer and Framework | Fine tuning and customization when behavior must change |
| NeMo Curator | Data curation for training, tuning, or corpus preparation |
| RAPIDS | GPU data processing when preprocessing is the bottleneck |

Critical trap:

NIM is not NeMo. Triton is not TensorRT-LLM. Guardrails are not access control. TensorRT-LLM optimizes inference but does not design the agent workflow.

### 5.8 Run, Monitor, and Maintain, 5% official, 7% in uploaded PDF

Must monitor:

| System metrics | Agent quality metrics |
|---|---|
| Latency | Task completion rate |
| TTFT | Tool success rate |
| Throughput | Tool retry rate |
| Error rate | Escalation rate |
| Timeout rate | Groundedness |
| GPU utilization | Faithfulness |
| Queue delay | User satisfaction |
| Tool latency | Safety refusal correctness |
| API rate limits | Hallucination rate |
| Cost per task | Memory retrieval correctness |

Critical trap:

Monitoring only GPU utilization is not enough. Agent systems need trajectory monitoring, tool monitoring, retrieval monitoring, quality monitoring, and safety monitoring.

### 5.9 Safety, Ethics, and Compliance, 5%

Core risks:

| Risk | Mitigation |
|---|---|
| Prompt injection | Treat user and retrieved content as untrusted; use instruction hierarchy and guardrails |
| Indirect prompt injection | Retrieval checks, content isolation, tool restrictions |
| Tool misuse | Tool allowlists, typed schemas, permissions, approval gates |
| Unauthorized data access | Auth, authorization, row level and document level permissions before retrieval |
| Cross tenant leakage | Tenant isolation, metadata filters, audit logs |
| PII persistence in memory | Redaction, retention policy, memory review, delete paths |
| Autonomous harmful action | HITL approval, dry run mode, safe default behavior |

### 5.10 Human AI Interaction and Oversight, 5%

Must know:

| Pattern | Use |
|---|---|
| Human in the loop | Approval before high impact actions |
| Human on the loop | Supervision and monitoring for lower risk flows |
| Escalation | Provide reason, evidence, confidence, proposed action, logs, safe default |
| Feedback loops | Improve prompts, tools, retrieval, memory, evaluation sets, guardrails |
| Explainability and traceability | Decision traces, tool logs, retrieved evidence, confidence indicators |

Critical trap:

Do not send every task to a human. Oversight must be risk based, otherwise the system will not scale.

## 6. Mock test knowledge synthesis

The uploaded `Knowledge from Mock Tests.md` says the original five Agentic AI mock exams contain 300 questions total. The repeated pattern is not product name memorization. The mocks mostly test whether you can choose the right lifecycle pattern under constraints.

High frequency signals from the mock analysis:

| Signal | Approximate hits | Interpretation |
|---|---:|---|
| memory | 171 | Memory is one of the strongest themes |
| prompt | 115 | Prompt chains, examples, CoT, ReAct, validation appear often |
| human | 99 | Oversight, escalation, approval, override, confidence thresholds matter |
| API | 83 | Agents call external systems through tools and functions |
| latency | 83 | Caching, parallelism, streaming, autoscaling, tracing, smaller models |
| tool | 79 | Tool schemas, wrappers, permissions, retries, function calling are core |
| RAG | 65 | Retrieval and grounding are core |
| vector | 60 | Vector stores, embeddings, ANN, hybrid retrieval, vector memory |
| evaluation | 45 | Trajectory evaluation, expert scoring, A/B, shadow tests, regressions |
| planning | 44 | ReAct, CoT, HTN, BDI, decomposition, replanning |
| retrain | 34 | Secondary path, not main agentic center |
| Kubernetes | 22 | Deployment and scaling through HPA, ingress, load balancing |
| audit | 22 | Immutable logs, lineage, model IO, decision traces |
| NeMo | 22 | Important but less frequent than general agent design concepts |
| Guardrails | 16 | Core NVIDIA safety mapping |
| Triton and TensorRT | 13 and 12 | Serving and optimization support, not the whole exam |
| Nsight | 5 | Know the distinction, but not dominant |

## 7. Core decision matrices

### 7.1 Tool choice matrix

| Need | Best NVIDIA concept |
|---|---|
| Fine tune or customize an LLM | NeMo Framework or NeMo Customizer |
| Add dialog, safety, RAG grounding, or tool use controls | NeMo Guardrails |
| Build a custom optimized LLM engine | TensorRT-LLM |
| Serve multiple models with batching and ensembles | Triton |
| Fast supported enterprise LLM API deployment | NIM |
| Pull GPU optimized containers and model assets | NGC |
| Multi GPU collective communication | NCCL |
| Timeline level profiling | Nsight Systems |
| Kernel level profiling | Nsight Compute |
| Quick GPU status | NVIDIA SMI |
| GPU dataframe or data science acceleration | RAPIDS cuDF or cuML |
| Build and evaluate agent workflows | NeMo Agent Toolkit |
| Enterprise RAG retrieval pipeline | NeMo Retriever |
| Model or agent benchmark and judge workflows | NeMo Evaluator |

### 7.2 Bottleneck matrix

| Symptom | Likely bottleneck | First concepts |
|---|---|---|
| 32K context OOM | KV cache | KV cache quantization, MQA, GQA, paged KV cache |
| p99 latency spike under bursts | Queueing | Triton queue delay, preferred batch sizes, endpoint separation |
| Low TTFT required | Prefill and scheduling | Chunked prefill, in-flight batching, CUDA Graphs |
| GPU idle gaps | Launch or input overhead | Nsight Systems, CUDA Graphs, CPU sync, preprocessing |
| Multi node training slowdown | Communication | NCCL, topology, all reduce, all to all volume |
| OOM at optimizer step | Optimizer state | ZeRO, FSDP, 8 bit optimizer, sharding |
| Quality loss after INT8 | Calibration or outliers | SmoothQuant, representative data, calibration sweep |
| Fluent but unsupported RAG answer | Grounding | Reranking, citation checks, faithfulness evaluation |
| Model calls nonexistent tools | Output control | Function schema, constrained decoding, validation |
| Private docs leaked | Access control | ACL before retrieval, least privilege, audit logs |
| Agent repeats failed tool call | Orchestration | Retry limit, failure state, circuit breaker, planner update |
| Human reviewers overloaded | Oversight design | Risk based routing, confidence thresholds, sampled review |

### 7.3 Adaptation matrix

| Problem | First choice |
|---|---|
| Model needs better instructions | Prompt engineering |
| Model needs private or latest facts | RAG |
| Model needs consistent company tone | LoRA or SFT |
| Model needs domain language distribution | Continued pretraining |
| Limited GPU memory for tuning | QLoRA |
| Need preference alignment | DPO or RLHF |
| Need lower latency model | Distillation or model routing |
| Agent fails tool arguments | Tool schema, examples, validation, orchestration |
| Agent uses stale knowledge | Retrieval refresh, index update, memory TTL |

## 8. Study prioritization

### NCP-GENL priority order

1. Model optimization: quantization, pruning, distillation, TensorRT-LLM, KV cache, in-flight batching.
2. GPU acceleration: parallelism, mixed precision, profiling, NCCL, memory management.
3. Prompt engineering and fine tuning: prompting, CoT, LoRA, QLoRA, DPO, hallucination mitigation.
4. Deployment: NIM, Triton, Docker, Kubernetes, batchers, schedulers, endpoint separation.
5. Evaluation and monitoring: RAG metrics, LLM as judge, logs, dashboards, canaries.
6. Safety: guardrails, access control, fairness, compliance, audit.

### NCP-AAI priority order

1. Agent architecture and design.
2. Agent development and tool use.
3. Evaluation and trajectory tuning.
4. Deployment and scaling of full agent workflows.
5. Planning, cognition, and memory.
6. Knowledge integration through RAG, APIs, SQL, and knowledge graphs.
7. NVIDIA platform mapping.
8. Monitoring, safety, compliance, and human oversight.

## 9. Recommended study app or notes structure

### For NCP-GENL

Use cards at the top of each markdown page:

| Card field | What to store |
|---|---|
| What it is | Short definition |
| Where it fits | Training, inference, serving, RAG, safety, monitoring |
| Input and output | What goes in and what comes out |
| Best use | Scenario where it is the right answer |
| Not for | Scenario where it sounds related but is wrong |
| Common traps | Exam mistakes |
| NVIDIA mapping | Tool or service |
| Example question | One scenario based question |

### For NCP-AAI

Use lifecycle lanes, not equal product lists:

| Lane | Priority | Tools |
|---|---:|---|
| Build agent application | Core | NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever, NeMo Evaluator, NIM |
| Use existing model for inference | Core | NIM, Nemotron model family, optional Triton or TensorRT-LLM |
| Fine tune existing model | Secondary | NeMo Customizer, NeMo Framework, NeMo Evaluator, NIM |
| Train model from zero | Reference only | NeMo Curator, RAPIDS, NeMo Framework, NCCL, NGC, NIM |

## 10. Final exam reasoning checklist

Before choosing an answer, ask:

1. Is the scenario about training, inference optimization, serving, RAG, monitoring, safety, or agent orchestration?
2. What is the actual bottleneck: memory, compute, communication, scheduling, retrieval, data quality, output quality, cost, or governance?
3. What metric matters: TTFT, p99 latency, throughput, task success, faithfulness, cost, safety, or compliance?
4. Does the answer solve the exact bottleneck, or does it only sound related?
5. Does the answer preserve the constraints in the question?
6. Is the question asking for a low level tool, a serving layer, a packaged product, or an application architecture pattern?
7. Would the solution work in production, with permissions, logs, retries, monitoring, and rollback?

## 11. Deliverables generated from the extraction

| File | Purpose |
|---|---|
| `nvidia_certification_pdf_extraction.md` | Structured extraction of all visible text and information from both PDFs |
| `nvidia_certification_reference_links.md` | Consolidated references, link titles, official URLs, and how to use them |
| `nvidia_certification_full_report.md` | Full synthesis report combining PDFs, markdowns, official references, and study strategy |

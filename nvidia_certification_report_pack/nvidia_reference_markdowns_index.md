# Reference Markdown Index

The uploaded markdown files are useful as companion references for the two NVIDIA certification PDFs.

## 1. `ncp-genl-refined-study-guide(2).md`

Best for: NCP-GENL.

Use it as the main study guide for:

| Section type | Why it matters |
|---|---|
| How to think about every scenario | Teaches phase, bottleneck, constraint, and tool selection |
| SageMaker to NVIDIA mapping | Helps translate familiar cloud ML concepts into NVIDIA stack concepts |
| Top down NVIDIA stack | Organizes hardware, training, inference, serving, application, and safety layers |
| Tool map | Clarifies CUDA, TensorRT, TensorRT-LLM, Triton, NIM, NGC, NeMo, Guardrails, NCCL, Nsight, RAPIDS |
| Topic playbooks | Quantization, batching, KV cache, fine tuning, RAG, deployment, monitoring, safety |
| Decision matrices | Fast lookup for tool choice, bottleneck choice, adaptation choice |
| Exam traps | Most useful section for avoiding plausible but wrong answers |

High value concepts from this markdown:

| Concept | Key takeaway |
|---|---|
| KV cache | Long context memory pressure is often KV cache, not just model weights |
| Batching | Larger batches can improve throughput but hurt TTFT and p99 latency |
| Fine tuning vs RAG | Use RAG for private or changing knowledge |
| Guardrails vs permissions | Guardrails do not replace access control |
| Nsight Systems vs Nsight Compute | Systems first for broad timeline bottlenecks, Compute for kernel level analysis |

## 2. `ncp-aai-agentic-ai-deep-research-report(2).md`

Best for: NCP-AAI.

Use it as the main study guide for:

| Section type | Why it matters |
|---|---|
| Certification structure | Official style summary, domain weights, logistics |
| Difference from NCP-GENL | Prevents over studying low level GPU material for an agentic exam |
| Online sentiment and difficulty | Shows that the exam is scenario and design oriented |
| Domain by domain guide | Agent architecture, development, evaluation, deployment, cognition, RAG, platform, monitoring, safety, oversight |
| Question bank guidance | Helps generate realistic scenario questions |

High value concepts from this markdown:

| Concept | Key takeaway |
|---|---|
| Agent vs workflow | Deterministic workflow may be safer than an autonomous agent for stable compliance heavy tasks |
| Single vs multi agent | Multi agent is useful only when specialization or parallelism clearly helps |
| Tool safety | Use allowlists, schema validation, permissions, rate limits, HITL, logging |
| Trajectory evaluation | Evaluate the sequence of steps, tools, observations, memory updates, and final response |
| Agent scaling | Bottleneck may be tools, vector DBs, memory stores, orchestration, or guardrails, not just GPU |
| Human oversight | Use risk based approval and escalation, not human review for everything |

## 3. `Knowledge from Mock Tests.md`

Best for: practice exam calibration.

Use it to understand which topics appear repeatedly in mock questions.

Important findings:

| Signal | Approximate hits | Study implication |
|---|---:|---|
| memory | 171 | Study memory deeply |
| prompt | 115 | Study prompt chains, CoT, ReAct, validation |
| human | 99 | Study oversight and escalation |
| API | 83 | Study tool use and external systems |
| latency | 83 | Study caching, parallelism, streaming, autoscaling |
| tool | 79 | Study schemas, wrappers, permissions, retries |
| RAG | 65 | Study retrieval, grounding, vector search |
| vector | 60 | Study embeddings, ANN, metadata, vector memory |
| evaluation | 45 | Study trajectory evaluation and task metrics |
| planning | 44 | Study ReAct, decomposition, replanning |

Use this file to build a realistic NCP-AAI practice app with the following weight of importance:

| Lane | Priority |
|---|---:|
| Build agent application | Core |
| Use existing model for inference | Core |
| Fine tune existing model | Secondary |
| Train model from zero | Reference only |

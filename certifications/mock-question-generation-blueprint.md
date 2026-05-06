# NVIDIA Mock Question Generation Blueprint

Generated: 2026-05-06

Purpose: define exactly which topics to choose, how to balance fixed mock tests, and how to create realistic generated questions for the NVIDIA Agentic AI Professional and Generative AI LLMs Professional certificates.

## Authority Order

1. Official NVIDIA certification pages: use these for exam logistics, domain weights, and high-level topic areas.
2. Local OCR study guides: use these for detailed objectives, subtopics, and recommended readings.
3. Official NVIDIA docs/blog/GitHub pages named by the OCR readings: use these for realistic product behavior and scenario details.
4. Local question-bank audits: use these to decide what to rebalance or generate next.

Local source files:

- `certifications/agentic_ai_professional/reference/study-guide-ocr.md`
- `certifications/genai_llms_professional/reference/study-guide-ocr.md`
- `certifications/question-topic-coverage-report.md`
- `certifications/nvidia-exam-coverage-and-question-generation-guide.md`

Official sources:

- https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/
- https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- https://www.nvidia.com/en-us/learn/learning-path/generative-ai-llm/

## PDF Reading Link Check

The OCR files preserve the recommended reading titles, but not direct URL annotations. A direct `strings` scan of both PDFs found no visible `http` URLs, and local PDF annotation tools such as `pdfinfo`, `qpdf`, and `mutool` are not installed in this workspace. Therefore the links below are source-resolved from the reading titles against official NVIDIA domains, not byte-extracted PDF links.

Representative confirmed NVIDIA sources to ground question realism:

- Agent Intelligence Toolkit overview: https://docs.nvidia.com/agent-toolkit/index.html
- Agent Intelligence Toolkit tutorials: https://docs.nvidia.com/aiqtoolkit/1.1.0/tutorials/index.html
- NeMo Guardrails developer page: https://developer.nvidia.com/nemo-guardrails
- NIM for LLMs overview: https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html
- TensorRT performance best practices: https://docs.nvidia.com/deeplearning/tensorrt/10.16.1/performance/best-practices.html
- NeMo Framework overview: https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/index.html
- NeMo tokenizers: https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/common/tokenizers.html
- NeMo quantization: https://docs.nvidia.com/nemo-framework/user-guide/latest/model-optimization/quantization/quantization.html
- NeMo parallelisms: https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/features/parallelisms.html
- NVIDIA LLM inference optimization blog: https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/

## What Counts As A Topic

Use exam section as the primary topic bucket for mocks. Use service, lifecycle, and keyword only as secondary filters for focused practice.

- Exam section: exact `Domain` metadata from the question. This is the only safe spine for realistic mocks.
- Topic: exact `Topic` metadata from the question. Use this to avoid repeating the same narrow pattern.
- NVIDIA service: a product/tool/platform match, such as NIM, NeMo Guardrails, NeMo Agent Toolkit, TensorRT-LLM, Triton, Nsight, Dynamo, NeMo Curator, or RAPIDS. This is useful for product drills, not for balancing full exams.
- Lifecycle: a broad workflow slice such as data preparation, training/customization, serving/deployment, evaluation, monitoring, safety, retrieval, or agent orchestration.
- Keyword: a search-style helper for targeted remediation.

## Question Types

Mock tests:

- Fixed timed exams.
- Must be balanced by official domain weights.
- Should mix downloaded/original and generated questions only after de-duplication and scope caps.
- Must not sample the whole bank uniformly.

NVIDIA-specific questions:

- A named NVIDIA product, hardware family, API surface, deployment stack, or service is central to the correct answer.
- Example anchors: NIM, NeMo Guardrails, NeMo Agent Toolkit, TensorRT-LLM, Triton, Dynamo, Nsight Systems, A100/H100 Tensor Cores, NGC, NeMo Curator.
- These are excellent for product fluency, but they can distort mock realism if over-sampled.

Certificate concept questions:

- Test the same certificate objectives without making a named NVIDIA tool the key to the answer.
- Example anchors: ReAct, memory design, workflow state, RAG retrieval quality, constrained decoding, KV cache, DDP/FSDP, LoRA, bias audits, monitoring.
- These are necessary because both PDFs include broad professional knowledge, not only NVIDIA product lookup.

Recommended mix:

- Blueprint-weighted exam sections.
- Per-domain topic caps.
- NVIDIA-specific scope cap.
- Higher priority for weak/underrepresented PDF objectives.

## Current Bank Health

NCP-AAI active unique bank:

- 889 unique questions.
- 65 downloaded/original unique; 824 generated unique.
- 432 certificate-concept; 457 NVIDIA-specific.
- Main issue: NVIDIA Platform Implementation is 431 / 889 active unique questions, about 48.5% of the bank, while the official blueprint weight is 7%.
- Consequence: good for NVIDIA product drills, not okay for random full-mock sampling.

NCP-GENL active unique bank:

- 955 unique questions.
- 100 downloaded/original unique; 855 generated unique.
- 386 certificate-concept; 569 NVIDIA-specific.
- Main issue: Model Deployment, Data Preparation, and service-heavy generated questions are overrepresented; Model Optimization, GPU Acceleration, and Prompt Engineering are underrepresented against official weights.

## NCP-AAI Mock Target

For a 60-question realistic mock, use this approximate allocation:

| Domain | Target Q | Primary topics to test |
| --- | ---: | --- |
| Agent Architecture and Design | 9 | ReAct, agent-to-agent communication, UI/agent boundary, multi-agent workflow topology, prompt chains, logic trees, stateful orchestration, knowledge graphs |
| Agent Development | 9 | Tool/API/function contracts, schema validation, dynamic prompt chains, multimodal integration, retry logic, graceful failure, streaming feedback |
| Evaluation and Tuning | 8 | Evaluation pipelines, task benchmarks, trajectory evaluation, structured user feedback, latency/accuracy tradeoffs, result analysis |
| Deployment and Scaling | 8 | Docker, Kubernetes, CI/CD, load balancing, autoscaling, distributed load testing, cost/availability tradeoffs |
| Cognition, Planning, and Memory | 6 | Short-term memory, long-term memory, task decomposition, planning strategies, state ownership, feedback-adaptive reasoning |
| Knowledge Integration and Data Handling | 6 | RAG, embedded search, hybrid retrieval, vector DB tuning, ETL, data quality, structured/unstructured knowledge |
| NVIDIA Platform Implementation | 4 | NeMo Guardrails, NIM, NeMo Agent Toolkit, TensorRT-LLM, Triton, multimodal NVIDIA hardware pipelines |
| Run, Monitor, and Maintain | 3 | Dashboards, logs, anomaly diagnosis, version comparisons, automated retraining, uptime and trust |
| Safety, Ethics, and Compliance | 3 | Audit trails, privacy guardrails, bias/toxicity mitigation, layered safety, licensing/regulatory boundaries |
| Human-AI Interaction and Oversight | 4 | Human-in-the-loop, human-on-the-loop, escalation, review queues, decision traceability, explainability |

AAI scope rule:

- A 60-question mock should usually contain about 14-17 NVIDIA-specific questions.
- Only about 4 should be pure `NVIDIA Platform Implementation`.
- Extra NVIDIA-specific questions can appear in Deployment, Run/Monitor, Knowledge Integration, Evaluation, or Safety when the scenario truly needs a named NVIDIA product.
- Do not generate more generic service-comparison blocks for NIM/NeMo/Triton unless they fill a specific PDF objective.

AAI next generation priorities:

1. Agent-to-agent communication, ReAct, and stateful orchestration.
2. Logic trees, prompt chains, and tool-contract failure modes.
3. Evaluation pipelines with trajectory-level failure signals.
4. Vector DB configuration, hybrid retrieval, ETL, and data freshness.
5. Audit trails, decision traceability, and human intervention design.
6. Deployment/scaling concepts that are not just "choose NIM/Triton".

## NCP-GENL Mock Target

For a 60-question realistic mock, use this approximate allocation:

| Domain | Target Q | Primary topics to test |
| --- | ---: | --- |
| Model Optimization | 10 | Pruning, sparsity, FP8/INT8/INT4 quantization, activation quantization, distillation, KV cache, constrained decoding, TensorRT tradeoffs |
| GPU Acceleration and Optimization | 9 | DDP, FSDP, tensor/pipeline/sequence/expert parallelism, NCCL, Tensor Cores, GEMM, gradient accumulation, Nsight profiling |
| Prompt Engineering | 8 | Zero/one/few-shot, CoT, prompt templates, constrained outputs, prompt learning, hallucination controls |
| Fine-Tuning | 8 | SFT, RLHF/DPO/GRPO, LoRA, adapters, P-tuning, contrastive loss, early stopping, catastrophic forgetting |
| Data Preparation | 5 | Cleaning, normalization, imbalance analysis, data formats, tokenizers, BPE, WordPiece, vocabulary size |
| Model Deployment | 5 | Containerized inference, Docker, Kubernetes, dynamic batching, Dynamo-Triton, serving tradeoffs, monitoring hooks |
| Evaluation | 4 | BLEU, ROUGE, perplexity, human eval, LLM-as-judge, benchmarks, error analysis |
| Production Monitoring and Reliability | 4 | Dashboards, logs, anomalies, regression benchmarks, automated tuning, versioning, uptime |
| LLM Architecture | 4 | Encoder-decoder, decoder-only, self-attention, embeddings, causal LM, MLM/NSP |
| Safety, Ethics, and Compliance | 3 | Bias/fairness audits, guardrails, monitoring for compliance, mitigation strategy |

GENL scope rule:

- A 60-question mock should usually contain about 24-27 NVIDIA-specific questions.
- NVIDIA-specific questions should be spread across GPU acceleration, model optimization, deployment, monitoring, and safety.
- Avoid letting NIM/Triton/NeMo service questions dominate the entire mock.

GENL next generation priorities:

1. Model Optimization: pruning, sparsity, activation quantization, calibration, KV cache, constrained decoding, distillation.
2. GPU Acceleration: DDP/FSDP/tensor/pipeline/sequence/expert parallelism, GEMM, gradient accumulation, Tensor Core tradeoffs.
3. Prompt Engineering: output control, prompt learning, small-data prompting, CoT failure modes, hallucination mitigation.
4. LLM Architecture: encoder-decoder vs decoder-only, self-attention, embeddings, sampling, BPE/WordPiece.
5. Evaluation: BLEU/ROUGE/perplexity, LLM-as-judge calibration, human-eval design.
6. Fine-Tuning: DPO/GRPO/RLHF, LoRA/adapters/P-tuning, catastrophic forgetting, early stopping.

## How To Write Realistic Questions

Each generated question should have:

- One scenario-first stem with enough operational detail to force a decision.
- One clear failure signal or goal: latency spike, grounding failure, unsafe tool call, OOM, throughput bottleneck, eval drift, hallucination, policy violation, or poor domain adaptation.
- One primary exam section.
- One primary topic.
- One `Scope`: `general_concept` or `nvidia_specific`.
- Plausible neighboring-layer distractors, not obviously silly choices.
- An explanation that teaches why the wrong answers solve the wrong layer.
- A source reference title or local OCR objective in generation notes.

Bad pattern:

- "Which NVIDIA service should you use for X?" repeated many times.
- Answer is just a product name with no scenario-specific tradeoff.
- The distractors are unrelated products.

Good pattern:

- "A team has a 70B LLM where decode latency grows with long sessions while GPU memory pressure is high. Which optimization addresses repeated attention computation during autoregressive decode?"
- Correct answer: KV cache strategy.
- Neighboring distractors: quantization, tensor parallelism, prompt compression, RAG reranking.
- Explanation: each distractor improves a nearby layer, but not the exact failure signal.

## Metadata Rules For New Questions

Generated questions should include:

- `Domain`: exact official exam section.
- `Topic`: narrow PDF/objective topic, not just the domain name.
- `Difficulty`: prefer medium/hard/expert for professional certs.
- `Scope`: `general_concept` when a named NVIDIA tool is not central; `nvidia_specific` when it is central.
- `Source`: generated.
- `SourceRefs`: use local OCR objective numbers and, when known, official NVIDIA reading titles or URLs.

Use explicit `Scope` instead of relying only on keyword inference. Keyword inference is acceptable for legacy content but too weak for future generation.

## Generation Workflow

1. Choose target exam and mock size.
2. Allocate counts by official domain weights.
3. Select underrepresented PDF objectives from the coverage report.
4. Decide scope per item using the cap rules above.
5. Write questions in small batches by domain, not one giant mixed batch.
6. Run the question-bank audit.
7. Run mock-test evaluation.
8. Manually inspect representative questions against the OCR objectives and official NVIDIA docs.
9. Only then add questions to generated high-fidelity banks or fixed generated mocks.

## Practical Answer

The current bank is good as a large practice pool, especially for focused drills. It is not good enough to use as a random exam simulator because NVIDIA service-heavy generated questions are overrepresented. The next mock-question work should not simply generate more questions. It should generate underrepresented PDF objectives, then assemble timed mocks through a blueprint-weighted sampler with scope caps.

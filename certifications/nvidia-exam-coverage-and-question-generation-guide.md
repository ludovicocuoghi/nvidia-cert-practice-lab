# NVIDIA Exam Coverage and Question Generation Guide

Updated: 2026-05-06

This guide is the reusable audit layer for the NVIDIA Certified Professional Agentic AI (NCP-AAI) and NVIDIA Certified Professional Generative AI LLMs (NCP-GENL) material in this project. It is grounded in saved OCR text from the local NVIDIA study-guide PDFs, official NVIDIA certification pages, local blueprints, topic pages, question banks, and mock-test evaluators.

The initial OCR/coverage pass did not edit question banks or mocks. Later passes rebuilt the generated practice banks and fixed generated mock playlists so current generated mocks are balanced by official domain weights and scoped as readiness checks.

## Source Inventory

Authority order:

1. Official NVIDIA certification pages for current exam logistics, learning-path links, and blueprint weights.
2. Saved OCR markdown files for detailed PDF study-guide objectives and recommended references.
3. Local `blueprint.json` files and topic markdowns for project implementation coverage.
4. Question bank and mock evaluator output for practice-test quality.

Primary sources:

- Official NCP-AAI page: https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/
- Official NCP-GENL page: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- NVIDIA Generative AI and LLM learning path: https://www.nvidia.com/en-us/learn/learning-path/generative-ai-llm/
- NCP-AAI OCR source: `certifications/agentic_ai_professional/reference/study-guide-ocr.md`
- NCP-GENL OCR source: `certifications/genai_llms_professional/reference/study-guide-ocr.md`
- NCP-AAI generated bank shards: `certifications/agentic_ai_professional/generated/high_fidelity_001.md` through `high_fidelity_004.md`
- NCP-GENL generated bank shards: `certifications/genai_llms_professional/generated/high_fidelity_001.md` through `high_fidelity_005.md`

## Plain-English Verdict

The project is now strongly aligned to the official NVIDIA PDF study guides, but the source types should be used differently.

| Material | NCP-AAI verdict | NCP-GENL verdict | What to do |
| --- | --- | --- | --- |
| Topic/study pages | Strong. Keyword coverage of OCR topic families: 21/21. | Strong. Keyword coverage of OCR topic families: 24/24. | Keep as the main study layer. |
| Original mock tests | Related, but shallow. Combined OCR keyword coverage: 16/21; individual mocks range 14-16/21. They are also too short/easy. | Related, but shallow. Combined OCR keyword coverage: 20/24; individual mocks range 18-20/24. They are also short and often too easy. | Keep as warmups/diagnostics, not final exam simulators. |
| Generated question bank | Stronger readiness layer. Active bank is 425 unique questions with every domain represented; generated mocks are 60-question, blueprint-weighted, and status `good`. | Stronger readiness layer. Active bank is 520 unique questions with every domain represented; generated mocks are 60-question, blueprint-weighted, and status `good`. | Use for harder readiness checks after studying official/topic material. |

Answer to the original question:

- The original mocks are connected to the official material, but they are not enough by themselves because they are often 50-question sets, too easy, and too short-stemmed for the professional exam style.
- The generated AI questions are closer to professional exam style and the current generated mock JSONs are now balanced against official domain weights.
- We do not need another broad question-generation pass right now. Future changes should be surgical: add questions only for newly discovered OCR/report gaps, then rebuild generated mocks with the same blueprint-weighted sampler.

Recommended three-way test/practice split:

| Type | Pool in this project | Best use | Current issue |
| --- | --- | --- | --- |
| Mock tests | Fixed downloaded/original mock JSONs plus fixed generated mock JSONs under each cert's `mocks/` folder. | Timed readiness checks, baseline scores, and repeatable progress tracking. | Original mocks are useful but shallow; generated mocks are the current balanced readiness checks. |
| NVIDIA-specific questions | Any question with `Scope: nvidia_specific`, or legacy questions inferred by NVIDIA/platform keywords. | Practice NVIDIA product/service decisions: NeMo, NIM, TensorRT-LLM, Triton, Nsight, Guardrails, deployment, profiling, and platform tradeoffs. | Current generated mocks already hit the target scope mix, so add more only for a real PDF/OCR product gap. |
| Certificate concept questions | Any question with `Scope: general_concept`, or legacy questions with no NVIDIA/platform signal. | Broader cert-related concepts that are not always tied to a named NVIDIA service: transformer basics, agent architecture, memory, RAG, evaluation, tuning, reliability. | Current generated mocks include enough concept coverage; add more only when a specific objective gap appears. |

Scope is not the same as source. Downloaded/original mocks can contain NVIDIA-specific questions, and generated banks can contain general-concept questions. Future generated or repaired questions should include an explicit `- Scope: general_concept` or `- Scope: nvidia_specific` line; legacy questions can be classified by a conservative keyword audit.

Next recommended work:

1. Do not regenerate just because a third-party/original mock feels easy. Treat those mocks as warmups.
2. Add new questions only when an audit or new official source shows a real objective gap.
3. When new questions are added, rerun the mock builder so generated mocks keep official weights, per-topic caps, and scope caps.

PDF extraction notes:

- Both root PDFs are image-based. Normal PDF text extraction only found viewer headers.
- The saved OCR files were created by extracting one embedded page image per PDF page with `pypdf`, then running macOS Vision OCR.
- Both OCR files preserve `## Page 1` through `## Page 13`.
- The GENL root PDF and `certifications/genai_llms_professional/reference/study-guide-r1.pdf` have identical embedded page images, so the reference copy is duplicate study content.

## Source Conflicts

| Exam | Conflict | Decision |
| --- | --- | --- |
| NCP-AAI | The OCR PDF table of contents lists Deployment and Scaling as 5%, but the official page and local blueprint list 13%. | Use 13% for mock balance and question generation. Keep the OCR conflict documented. |
| NCP-AAI | The OCR PDF table of contents lists Run, Monitor, and Maintain as 7%, but the official page and local blueprint list 5%. | Use 5% for mock balance and question generation. Keep the OCR conflict documented. |
| NCP-GENL | The official page has obvious copy problems in blueprint descriptions, especially Model Optimization and Fine-Tuning. | Use the official page for weights and logistics; use the OCR PDF for detailed domain objectives. |
| NCP-GENL | Some OCR terms use formal phrases like "key-value caching", while the project often uses "KV cache". | Treat equivalent technical terms as covered when the concept is clearly present. |

## OCR Objective Index

This section records every numbered objective extracted from the two study-guide OCR files in condensed form. The full OCR text remains in each per-cert reference file.

NCP-AAI objectives:

| Objective | Extracted topic |
| --- | --- |
| 1.1 | User interfaces for human-agent interaction |
| 1.2 | Reasoning and action frameworks, including ReAct |
| 1.3 | Agent-to-agent communication protocols |
| 1.4 | Short-term and long-term memory |
| 1.5 | Multi-agent workflow orchestration |
| 1.6 | Logic trees, prompt chains, and stateful orchestration |
| 1.7 | Knowledge graphs for relational reasoning |
| 1.8 | Adaptable and scalable agent architecture |
| 2.1 | Prompts and dynamic prompt chains |
| 2.2 | Generative and multimodal model integration |
| 2.3 | Custom tools, APIs, and functions |
| 2.4 | Retry logic and graceful failure recovery |
| 2.5 | Dynamic conversation flows, streaming, and feedback |
| 2.6 | Agent decision-making evaluation and refinement |
| 3.1 | Evaluation pipelines and task benchmarks |
| 3.2 | Agent comparison across tasks and datasets |
| 3.3 | Structured user feedback loops |
| 3.4 | Accuracy, latency, and efficiency tuning |
| 3.5 | Evaluation-result analysis for targeted optimization |
| 4.1 | Production-scale multi-agent deployment |
| 4.2 | CI/CD, monitoring, governance, and MLOps |
| 4.3 | Distributed-load reliability and performance profiling |
| 4.4 | Docker, Kubernetes, and load balancing |
| 4.5 | Cost optimization with high availability |
| 5.1 | Memory mechanisms for context retention |
| 5.2 | Chain-of-thought and task decomposition |
| 5.3 | Sequential and multi-step planning |
| 5.4 | Stateful orchestration for complex tasks |
| 5.5 | Reasoning adaptation from experience and feedback |
| 6.1 | RAG, embedded search, and hybrid retrieval |
| 6.2 | Vector database configuration and optimization |
| 6.3 | ETL pipelines for enterprise/client data |
| 6.4 | Data quality checks, augmentation, and preprocessing |
| 6.5 | Real-time reasoning over structured and unstructured knowledge |
| 7.1 | NeMo Guardrails for compliance and safety |
| 7.2 | NIM microservices for high-performance inference |
| 7.3 | NeMo Agent Toolkit workflow optimization |
| 7.4 | TensorRT-LLM and Triton latency reduction |
| 7.5 | Multimodal input pipelines on NVIDIA hardware |
| 8.1 | Monitoring dashboards and reliability metrics |
| 8.2 | Logs, errors, and anomaly diagnosis |
| 8.3 | Continuous benchmarking against prior versions |
| 8.4 | Automated tuning, retraining, and versioning |
| 8.5 | Uptime, transparency, and trust in live systems |
| 9.1 | System security and audit trails |
| 9.2 | Privacy and enterprise-policy guardrails |
| 9.3 | Bias and toxicity mitigation |
| 9.4 | Layered safety frameworks and escalation |
| 9.5 | Licensing and regulatory compliance |
| 10.1 | Human-in-the-loop user interfaces |
| 10.2 | Structured feedback for iterative improvement |
| 10.3 | Transparency and decision traceability |
| 10.4 | Human oversight and intervention |

NCP-GENL objectives:

| Objective | Extracted topic |
| --- | --- |
| 1.1 | Encoder-decoder structures and applications |
| 1.2 | Transformer self-attention mechanisms |
| 1.3 | Embedding extraction from encoder and decoder models |
| 1.4 | Advanced sampling for text generation |
| 1.5 | Decoder output sampling techniques |
| 1.6 | Embedding concepts |
| 2.1 | Prompt templates, chain-of-thought, and prompt learning |
| 2.2 | Zero-shot, one-shot, and few-shot adaptability |
| 2.3 | Decoder-based causal language modeling |
| 2.4 | Validation wrappers and constrained decoding |
| 3.1 | Data cleaning, normalization, scaling, imbalance, and distribution analysis |
| 3.2 | Dataset organization and modeling formats |
| 3.3 | Tokenizer selection/training, BPE, WordPiece, and vocabulary size |
| 4.1 | Pruning, sparsity, and weight/activation quantization |
| 4.2 | PTQ, QAT, activation quantization, A100/H100, FP16, and INT8 |
| 4.3 | Knowledge distillation |
| 4.4 | Hyperparameter tuning and distributed parameter search |
| 4.5 | Sampling and ablation studies for optimization impact |
| 4.6 | TensorRT, sliding-window/streaming attention, and key-value caching |
| 4.7 | MLM, next sentence prediction, quantization, distillation, and pruning |
| 5.1 | SFT, RLHF, DPO, and GRPO |
| 5.2 | Contrastive loss, LoRA, adapters, and P-tuning |
| 5.3 | Early stopping and metrics across phases |
| 5.4 | Hallucination mitigation and PEFT impact assessment |
| 6.1 | Benchmarks, human review, LLM-as-a-judge, BLEU, ROUGE, and perplexity |
| 6.2 | Failure-mode diagnosis and error analysis |
| 6.3 | Deployment benchmarking across DGX and cloud GPU platforms |
| 6.4 | Comprehensive scalable evaluation frameworks |
| 7.1 | DDP, FSDP, model, pipeline, tensor, data, sequence, and expert parallelism |
| 7.2 | Tensor Core, mixed precision, batch, and memory optimization |
| 7.3 | Self-attention GEMM distribution and gradient accumulation |
| 7.4 | CUDA profiling, memory troubleshooting, and kernel efficiency |
| 8.1 | Encoder/decoder tradeoffs for memory and latency |
| 8.2 | Containerized inference, dynamic batching, and Dynamo-Triton |
| 8.3 | Kubernetes, ensemble workflows, live monitoring, and Docker |
| 9.1 | Monitoring dashboards and reliability metrics |
| 9.2 | Logs, errors, and anomaly diagnosis |
| 9.3 | Continuous benchmarking against prior versions |
| 9.4 | Automated tuning, retraining, and versioning |
| 9.5 | Uptime, transparency, and trust in production |
| 10.1 | Responsible AI practices for deployment |
| 10.2 | Bias and fairness audits |
| 10.3 | Production LLM monitoring systems |
| 10.4 | Bias detection and mitigation |
| 10.5 | Guardrails for undesired responses |

## NCP-AAI Coverage

Official logistics: Professional level, 60-70 questions, 120 minutes, English, $200, two-year validity. Official prerequisites emphasize production agentic AI work, agent architecture, orchestration, multi-agent frameworks, tool/model integration, evaluation, observability, deployment, UI design, reliability guardrails, and rapid prototyping.

Official learning path:

- Building RAG Agents With LLMs
- Evaluating RAG and Semantic Search Systems
- Building Agentic AI Applications With LLMs
- Adding New Knowledge to LLMs
- Introduction to Deploying RAG Pipelines for Production at Scale

PDF course-to-domain map:

| Domain | Weight used | PDF course signals | Coverage |
| --- | ---: | --- | --- |
| Agent Architecture and Design | 15% | Building Agentic AI Applications With LLMs | Covered |
| Agent Development | 15% | Building RAG Agents With LLMs; Building Agentic AI Applications With LLMs | Partial |
| Evaluation and Tuning | 13% | Building Agentic AI Applications With LLMs; Evaluating RAG and Semantic Search Systems | Partial |
| Deployment and Scaling | 13% | Deploying RAG Pipelines for Production at Scale; Building Agentic AI Applications With LLMs; Building RAG Agents With LLMs | Conflict |
| Cognition, Planning, and Memory | 10% | Building Agentic AI Applications With LLMs; Building RAG Agents With LLMs | Covered |
| Knowledge Integration and Data Handling | 10% | Building RAG Agents With LLMs; Adding New Knowledge to LLMs | Partial |
| NVIDIA Platform Implementation | 7% | Building RAG Agents With LLMs | Covered |
| Run, Monitor, and Maintain | 5% | Deploying RAG Pipelines in Production at Scale | Conflict |
| Safety, Ethics, and Compliance | 5% | Building RAG Agents With LLMs | Covered |
| Human-AI Interaction and Oversight | 5% | Building Agentic AI Applications With LLMs | Partial |

Concrete OCR topic coverage:

| OCR topic | Project status | Notes |
| --- | --- | --- |
| ReAct, reasoning/action frameworks | Covered | Frequent in topics and bank. |
| Agent-to-agent communication | Covered | Present enough for exam use. |
| Short-term and long-term memory | Covered | Strong coverage across memory and agent design. |
| Multi-agent workflows and coordination | Covered | Strong coverage. |
| Logic trees | Covered | Present but not a dominant topic. |
| Prompt chains | Partial | Present lightly; should be used more in generation prompts. |
| Stateful orchestration | Covered | Good topic and question coverage. |
| Knowledge graphs | Covered | Present with relational reasoning framing. |
| Custom tools, APIs, and functions | Partial | APIs/functions are covered, but "custom tools" as a phrase is light. |
| Retry logic and graceful failure | Partial | Graceful failure is present; retry logic is light. |
| Evaluation pipelines | Covered | Present in topics/questions. |
| Task benchmarks | Partial | Present in current evaluation and generated-bank coverage; keep exact wording on audit watch. |
| Structured user feedback | Partial | Present in generated-bank scenarios; add more only if review shows weak recognition. |
| Docker, Kubernetes, load balancing | Covered | Kubernetes is especially strong. |
| Vector databases | Partial | Concept appears lightly under exact wording. |
| ETL and enterprise data sources | Covered | Good coverage. |
| NeMo Guardrails, NIM, NeMo Agent Toolkit, TensorRT-LLM, Triton | Covered | Strong coverage. Current generated mocks keep the platform portion proportional. |
| Audit trails | Covered | Present enough for safety/compliance. |
| Human-in-the-loop | Covered | Strong coverage. |
| Decision traceability | Partial | Present lightly; add governance/oversight scenarios. |

AAI generation priorities:

- Add questions only if a new audit shows renewed weakness in task benchmarks, structured user feedback, retry logic, prompt chains, vector database operations, or decision traceability.
- Keep NVIDIA Platform questions proportional. The current active bank has 41 NVIDIA Platform questions out of 425; generated mocks allocate 5 of 60 to the section, matching the official-weight sampler.
- Prefer scenarios about complete agent systems: tool failure recovery, memory scope, multi-agent coordination, evaluation trajectory quality, production observability, and human escalation.

Audit watchlist for future AAI generation:

- Task benchmarks and trajectory evaluation.
- Structured user feedback tied to traces and failure categories.
- Retry logic, idempotency, circuit-breaking, and graceful fallback.
- Prompt chains with typed intermediate state.
- Vector database and hybrid retrieval configuration.
- Decision traceability for regulated decisions.
- Audit trails and least-privilege data access.
- Human-in-the-loop escalation design.

## NCP-GENL Coverage

Official logistics: Professional level, 60-70 questions, 120 minutes, English, $200, two-year validity. Official prerequisites emphasize LLM experience, transformer architectures, prompt engineering, distributed parallelism, PEFT, advanced sampling, hallucination mitigation, RAG, model evaluation metrics, profiling, Python/C++ optimization, containerization, orchestration, and NVIDIA platforms.

Official learning path:

- Building RAG Agents With LLMs
- Adding New Knowledge to LLMs
- Model Parallelism: Building and Deploying Large Neural Networks
- Deploying RAG Pipelines for Production at Scale
- Optimizing CUDA ML Codes With NVIDIA Nsight's Profiling Tools

The broader NVIDIA Generative AI and LLM learning path also lists supporting courses such as Building Transformer-Based NLP Applications, Building LLM Applications With Prompt Engineering, Rapid Application Development Using Large Language Models, Introduction to NVIDIA NIM Microservices, Sizing LLM Inference Systems, and Building Agentic AI Applications With LLMs.

PDF course-to-domain map:

| Domain | Weight | PDF course signals | Coverage |
| --- | ---: | --- | --- |
| LLM Architecture | 6% | Rapid Application Development With LLMs; Building Transformer-Based NLP Applications | Covered |
| Prompt Engineering | 13% | Building LLM Applications With Prompt Engineering; Building RAG Agents With LLMs | Partial |
| Data Preparation | 9% | Adding New Knowledge to LLMs; Building Transformer-Based NLP Applications | Covered |
| Model Optimization | 17% | Building Transformer-Based NLP Applications; Adding New Knowledge to LLMs; Deploying RAG Pipelines for Production at Scale; Model Parallelism | Covered |
| Fine-Tuning | 13% | Adding New Knowledge to LLMs | Covered |
| Evaluation | 7% | Deploying RAG Pipelines in Production at Scale | Partial |
| GPU Acceleration and Optimization | 14% | Optimizing CUDA ML Codes With NVIDIA Nsight's Profiling Tools; Model Parallelism | Covered |
| Model Deployment | 9% | Deploying RAG Pipelines in Production at Scale; Building RAG Agents With LLMs | Partial |
| Production Monitoring and Reliability | 7% | Deploying RAG Pipelines in Production at Scale | Covered |
| Safety, Ethics, and Compliance | 5% | Building RAG Agents With LLMs; Building LLM Applications With Prompt Engineering; Deploying RAG Pipelines in Production at Scale | Partial |

Concrete OCR topic coverage:

| OCR topic | Project status | Notes |
| --- | --- | --- |
| Encoder-decoder models, self-attention, embeddings | Covered | Strong in architecture content and bank. |
| Advanced sampling | Covered | Prompt-engineering content and mock signals cover top-k, top-p/nucleus sampling, beam search, temperature, greedy decoding, and self-consistency. |
| Causal language modeling | Covered | Present, though not dominant. |
| Constrained decoding and validation wrappers | Covered | Good coverage. |
| BPE and WordPiece tokenization | Covered | Strong coverage. |
| Pruning, sparsity, activation quantization | Covered | Present in model optimization. |
| A100/H100 Tensor Cores | Covered | Strong hardware coverage. |
| Knowledge distillation | Covered | Present in topics and questions. |
| Hyperparameter tuning and distributed parameter search | Covered | Present. |
| Sliding-window/streaming attention and key-value caching | Covered | Project uses "KV cache" heavily; consider adding "key-value caching" wording for OCR alignment. |
| Masked language modeling | Covered | Present. |
| Next sentence prediction | Partial | MLM and encoder pretraining are covered; keep NSP as an audit-watch term because it appears explicitly in OCR. |
| DPO and GRPO | Covered | Strong fine-tuning coverage. |
| Contrastive loss | Partial | Present lightly; add embedding/fine-tuning scenarios. |
| LoRA, adapters, P-tuning | Covered/Partial | LoRA and adapters are strong; P-tuning is light. |
| Early stopping | Covered | Present. |
| BLEU, ROUGE, perplexity | Covered | Strong evaluation metric coverage. |
| LLM-as-a-judge | Covered | Evaluation content covers judge criteria, position/verbosity/self-enhancement bias, calibration, and human anchors. |
| DGX, DDP, FSDP, tensor/pipeline/sequence/expert parallelism | Covered | Strong GPU acceleration coverage. |
| GEMM and gradient accumulation | Covered | Present. |
| Dynamo-Triton and dynamic serving | Covered | Present, but ensure it is distinguished from old Triton naming. |
| Ensemble workflows | Covered | Generated deployment scenarios and Triton coverage include preprocessing/inference/postprocessing ensembles and multi-framework serving. |
| Bias and fairness | Covered | GENL safety and evaluation pages now include bias/fairness metrics, audits, and LLM-as-judge bias. |
| Guardrails | Covered | Strong coverage. |

GENL generation priorities:

- Add questions only if a new audit shows renewed weakness in advanced sampling, next sentence prediction, LLM-as-a-judge, ensemble workflows, bias/fairness auditing, contrastive loss, or P-tuning.
- Normalize equivalent wording in future content: "KV cache" should also be discoverable as "key-value caching" because that is how the OCR PDF states it.
- Keep Model Optimization and GPU Acceleration difficult and scenario-heavy, because together they represent 31% of the official blueprint.

Audit watchlist for future GENL generation:

- Advanced sampling tradeoffs for factuality and diversity.
- Masked language modeling and next sentence prediction for encoder pretraining.
- LLM-as-a-judge calibration and criteria design.
- Ensemble workflow deployment with preprocessing, inference, safety, and postprocessing.
- Bias/fairness audits beyond toxicity checks.
- Contrastive loss for retrieval embeddings.
- P-tuning with frozen base-model weights.
- Key-value caching and prefix KV reuse.

## Question Bank And Mock Audit

Command results used:

- `node scripts/audit_question_bank.mjs`
- `node scripts/audit_question_scope_mix.mjs`
- `node scripts/evaluate_mock_tests.js --json`

Question bank audit:

| Cert | Bank size | Domain coverage | Difficulty mix | Failures |
| --- | ---: | --- | --- | --- |
| NCP-AAI | 425 | Every official domain represented; 35-57 questions per domain | 41 easy, 118 medium, 173 hard, 93 expert | None |
| NCP-GENL | 520 | Every official domain represented; 35-85 questions per domain | 53 easy, 126 medium, 223 hard, 118 expert | None |
| AAI General Study | 370 | Every general-study domain represented; 35-55 questions per domain | 22 easy, 106 medium, 150 hard, 92 expert | None |

Scope-mix audit:

| Cert | Target mix | Active practice-bank mix | Active downloaded/original unique mix | Active generated unique mix | Action |
| --- | --- | --- | --- | --- | --- |
| NCP-AAI | 72% general / 28% NVIDIA-specific | 312 general / 113 NVIDIA-specific, 425 total | 57 general / 8 NVIDIA-specific | 255 general / 105 NVIDIA-specific | On target within 6 questions; no broad generation needed. |
| NCP-GENL | 55% general / 45% NVIDIA-specific | 287 general / 233 NVIDIA-specific, 520 total | 69 general / 31 NVIDIA-specific | 218 general / 202 NVIDIA-specific | On target within 1 question; no broad generation needed. |

The active practice-bank counts use the same ID de-duplication order as the app: downloaded/original questions first, then generated shards, then drafts. Fixed mock-test counts below are per mock set, so repeated IDs across downloaded mocks still count inside their timed sets.

Mock scope mix:

| Cert | Downloaded/original mocks | Generated mocks | Interpretation |
| --- | --- | --- | --- |
| NCP-AAI | 11-13% NVIDIA-specific per mock. | 28% NVIDIA-specific per mock. | Original mocks are mostly general concepts; generated mocks match the target 72/28 scope mix. |
| NCP-GENL | 26-36% NVIDIA-specific per mock. | 45% NVIDIA-specific per mock. | Original mocks are general-heavy relative to the target; generated mocks match the target 55/45 scope mix. |

Mock evaluator findings:

| Cert | Original mocks | Generated mocks | Use-as-is judgment |
| --- | --- | --- | --- |
| NCP-AAI | 5 original mocks. Mostly 50-56 questions except one 65-question mock; only 30-41% hard/expert; 30-38% easy. | 4 generated mocks, all 60 questions, 77-83% hard/expert, 0% easy, blueprint deviation <= 0.7, status `good`. | Original mocks are useful warmups but too easy/short. Generated mocks are usable as readiness checks. |
| NCP-GENL | 5 original mocks, all 50 questions; 46-54% hard/expert; 16-24% easy; many short stems; three mocks have high blueprint deviation. | 4 generated mocks, all 60 questions, 73-77% hard/expert, 0-2% easy, blueprint deviation <= 0.6, status `good`. | Original mocks are diagnostic warmups, not final exam simulators. Generated mocks are usable as readiness checks. |

## Question Generation Criteria

Every future generated question should be tied to one OCR-backed topic and one local blueprint domain.

Question shape:

- Start from a scenario, not a definition.
- Include one clear failure signal: latency, TTFT, p99, hallucination, tool failure, retrieval miss, GPU OOM, poor scaling, bias, drift, audit failure, or human-review overload.
- Make the correct answer solve the failing layer directly.
- Make distractors plausible neighboring-layer choices, not silly answers.
- Avoid repetitive templates like "make X explicit" unless the scenario actually requires an explicit control gate.
- Avoid broad product-name recall. Ask why the tool, method, or control fits the constraint.
- Keep explanations short but diagnostic: why correct, and why each wrong option fixes the wrong layer or violates a constraint.

AAI stem patterns to generate next:

- A multi-agent workflow repeats a failed tool call because retry boundaries are missing.
- A human reviewer receives too many low-risk cases and needs calibrated escalation.
- A RAG agent retrieves correct documents but makes an unsupported decision.
- A stateful agent leaks context between users because memory scope is wrong.
- An agent deployment passes unit tests but fails task benchmarks after tool latency increases.

GENL stem patterns to generate next:

- A team changes sampling parameters and must preserve answer diversity without breaking factuality.
- A pretraining scenario requires distinguishing MLM, CLM, and next sentence prediction.
- A judge model gives unstable scores because the criteria and calibration set are weak.
- A Triton or Dynamo-Triton deployment needs an ensemble workflow rather than a single model endpoint.
- A compliance review finds guardrails but no bias/fairness audit or metric.

## Acceptance Checklist

- `certifications/agentic_ai_professional/reference/study-guide-ocr.md` exists and has 13 page sections.
- `certifications/genai_llms_professional/reference/study-guide-ocr.md` exists and has 13 page sections.
- The GENL duplicate PDF relationship is recorded in the GENL OCR metadata.
- The combined guide cites official NVIDIA URLs and local OCR markdown sources.
- Every PDF domain appears in the relevant coverage table.
- Source conflicts are documented before question-generation recommendations.
- Mock-test quality findings are separated from bank-size audit findings.
- Scope-mix findings separate content type from source folder: general-concept versus NVIDIA-specific is not the same as original versus generated.
- Generated mock files are balanced by official domain weights and should stay generated/readiness-focused.
- Future generated question-bank additions should be small, topic-specific shards followed by audit and mock rebuild.

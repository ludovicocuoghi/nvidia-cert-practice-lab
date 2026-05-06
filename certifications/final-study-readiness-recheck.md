# Final Study Readiness Recheck

Date: 2026-05-06

## Verdict

The study path is now coherent enough to use as the main preparation flow for NCP-AAI and NCP-GENL. The app should be used in this order:

1. General Study for vendor-neutral engineering concepts.
2. Certificate exam sections for official-domain routing and exam wording.
3. NVIDIA service pages when product/platform wording matters.
4. Original/downloaded mocks as warmup and pattern exposure.
5. Generated balanced mocks as readiness checks.

This does not guarantee passing the real exam, but the material now maps the latest local Preporato research, NVIDIA OCR study guides, live NVIDIA certification pages, and NVIDIA service documentation to concrete study pages.

## Sources Rechecked

- `preporato_nvidia_certificates_deep_reserch.md`
- `nvidia_certification_report_pack/nvidia_certification_full_report.md`
- `nvidia_certification_report_pack/ncp-aai-agentic-ai-deep-research-report(2).md`
- `nvidia_certification_report_pack/ncp-genl-refined-study-guide(2).md`
- `nvidia_certification_report_pack/Knowledge from Mock Tests.md`
- `certifications/agentic_ai_professional/reference/study-guide-ocr.md`
- `certifications/genai_llms_professional/reference/study-guide-ocr.md`
- `certifications/agentic_ai_professional/blueprint.json`
- `certifications/genai_llms_professional/blueprint.json`
- `certifications/nvidia-exam-coverage-and-question-generation-guide.md`
- `certifications/question-topic-coverage-report.md`
- NVIDIA certification pages for NCP-AAI and NCP-GENL.
- NVIDIA docs for NIM, NeMo Agent Toolkit, NeMo Retriever, NeMo Framework, TensorRT-LLM, Triton, Nsight Systems, Nsight Compute, and NCCL-adjacent distributed training concepts.

## Baseline Check

| Check | Verdict | Notes |
|---|---|---|
| Dirty files before audit | Covered | Baseline had only untracked `preporato_nvidia_certificates_deep_reserch.md`. |
| Preporato research read | Covered | Treated as the latest third-party research input, but not as official source of truth. |
| AAI OCR guide read | Covered | OCR is useful but has weight conflicts with live NVIDIA page. |
| GENL OCR guide read | Covered | OCR aligns with the current 10-domain GENL structure. |
| Local blueprints checked | Covered | AAI and GENL blueprints have 60-70 questions and 120 minutes. |
| Official conflicts marked | Covered | AAI OCR says Deployment 5% and Run/Monitor 7%; live NVIDIA page and local blueprint use Deployment 13% and Run/Monitor 5%. Preporato also mentioned 90 minutes for AAI; live official page and local blueprint use 120 minutes. |
| Original/downloaded mocks | Covered | Preserved under each certificate's `mocks/original/` tree. |
| Question regeneration | Covered | No question regeneration was planned or performed. |

## Preporato Research Delta

| Preporato finding | Current repo mapping | Verdict | Fix needed |
|---|---|---|---|
| Old snapshot saw only a small AAI-heavy question set and a 24-question original bank. | Current audit has 425 AAI, 520 GENL, and 370 General Study active questions, plus generated 60-question balanced mocks. | Covered | Documented as historical delta; no regeneration. |
| GENL LLM internals were undercovered: transformers, attention, positional encoding, sampling, embeddings. | `genai_llms_professional/topics/llm-architecture.md`, `prompt-engineering.md`, and General Study foundation pages cover these fundamentals. | Covered | None. |
| GENL optimization gaps: quantization, pruning, distillation, KV cache, TensorRT-LLM. | `model-optimization.md`, `model-inference-endpoint.md`, `tensorrt-llm.md`, `nemo-framework.md`, and `nim.md`. | Covered | Keep tied to current NVIDIA docs during future edits. |
| GENL GPU/distributed gaps: Tensor Cores, GEMM, DDP/FSDP/tensor/pipeline/expert parallelism, NCCL, Nsight. | `gpu-acceleration-and-optimization.md`, `nccl.md`, `nsight-systems.md`, and `nsight-compute.md`. | Covered | None. |
| Data prep and fine-tuning needed more tokenization, curation, contamination, LoRA/QLoRA, DPO/GRPO. | `data-preparation.md`, `fine-tuning.md`, `training-data-curation-pipeline.md`, `nemo-curator.md`, `nemo-framework.md`, and `nemo-customizer.md`. | Covered | Added Curator decision boundary. |
| AAI architecture needed ReAct, multi-agent, stateful orchestration, memory, UI, knowledge graphs. | AAI architecture/cognition pages plus General `agent-orchestration-runtime.md` and `memory-store.md`. | Covered | None. |
| AAI development needed prompts, tools/APIs/functions, retries, streaming, feedback. | AAI development plus General `tool-gateway-and-function-runtime.md`, `prompt-and-context-design.md`, and NeMo Agent Toolkit page. | Covered | None. |
| AAI deployment needed NIM/Triton/TensorRT-LLM/Kubernetes/cost/HA. | AAI deployment, General latency/traffic pages, `nim.md`, `triton-inference-server.md`, `tensorrt-llm.md`, and `nim-operator.md`. | Covered | None. |
| Evaluation and safety needed structured metrics, judge bias, RAG eval, HITL/HOTL, auditability. | AAI/GENL evaluation and safety pages, General eval/governance/guardrails pages, `nemo-evaluator.md`, and `nemo-guardrails.md`. | Covered | Rewrote stale model-ranking examples. |
| Preporato/original mocks should not be sole study material. | App guidance says original mocks are warmup; generated balanced mocks are readiness checks. | Covered | Keep this wording visible. |

## AAI Official-Section Matrix

| AAI section | Required study knowledge | Repo pages | Verdict | Fix needed |
|---|---|---|---|---|
| Agent Architecture and Design | UI/human-agent interaction, ReAct, A2A, memory, multi-agent workflows, logic trees, prompt chains, stateful orchestration, knowledge graphs. | AAI `agent-architecture-and-design.md`; General orchestration, memory, RAG, prompt pages; `nemo-agent-toolkit.md`. | Covered | None. |
| Agent Development | Prompt chains, multimodal models, tools/APIs/functions, retries, graceful failure, streaming, feedback. | AAI `agent-development.md`; General tool gateway and prompt pages; `nemo-agent-toolkit.md`; `triton-inference-server.md`. | Covered | None. |
| Evaluation and Tuning | Benchmarks, structured feedback, latency/accuracy tuning, trajectory scoring, judge bias, targeted optimization. | AAI `evaluation-and-tuning.md`; General eval harness; `nemo-evaluator.md`. | Covered | None. |
| Deployment and Scaling | Multi-agent deployment, CI/CD, load testing, containers, load balancing, HA, cost control. | AAI `deployment-and-scaling.md`; General latency/traffic and serving pages; `nim.md`; `triton-inference-server.md`; `tensorrt-llm.md`; `nim-operator.md`. | Covered | None. |
| Cognition, Planning, and Memory | CoT, task decomposition, sequential planning, memory scopes, reflection, feedback adaptation. | AAI `cognition-planning-and-memory.md`; General memory and orchestration pages; `nemo-agent-toolkit.md`. | Covered | None. |
| Knowledge Integration and Data Handling | RAG, vector DBs, ETL, structured/unstructured data, data quality, hybrid retrieval, permissions. | AAI `knowledge-integration-and-data-handling.md`; General RAG and ingestion pages; `nemo-retriever.md`; `nemo-curator.md`. | Covered | None. |
| NVIDIA Platform Implementation | NIM, Agent Toolkit, Guardrails, Retriever, TensorRT-LLM, Triton, service boundaries and call/config surfaces. | AAI `nvidia-platform-implementation.md`; all core service pages. | Covered | Curator service decision guide added. |
| Run, Monitor, and Maintain | Dashboards, logs, anomalies, version comparison, tuning/retraining, uptime, transparency. | AAI `run-monitor-and-maintain.md`; General observability page; `nsight-systems.md`; `nemo-evaluator.md`. | Covered | None. |
| Safety, Ethics, and Compliance | Audit trails, privacy, policy guardrails, bias/toxicity mitigation, filters, licensing/regulatory boundaries. | AAI `safety-ethics-and-compliance.md`; General guardrails/governance; `nemo-guardrails.md`. | Covered | None. |
| Human-AI Interaction and Oversight | HITL, HOTL, review queues, escalation, explainability, traceability, feedback loops. | AAI `human-ai-interaction-and-oversight.md`; General human review/governance page. | Covered | None. |

## GENL Official-Section Matrix

| GENL section | Required study knowledge | Repo pages | Verdict | Fix needed |
|---|---|---|---|---|
| LLM Architecture | Encoder-decoder, decoder-only, attention, embeddings, positional encoding, sampling. | `llm-architecture.md`; General foundation-model training stack. | Covered | None. |
| Prompt Engineering | Zero/one/few-shot, CoT, constrained decoding, templates, validation wrappers, hallucination control. | `prompt-engineering.md`; General prompt/context design. | Covered | None. |
| Data Preparation | Cleaning, curation, formats, BPE, WordPiece, vocab size, imbalance, dedupe, contamination, PII. | `data-preparation.md`; General training data curation; `nemo-curator.md`; `rapids.md`. | Covered | Curator decision guide added. |
| Model Optimization | Pruning, sparsity, PTQ, QAT, FP8, INT8, INT4, SmoothQuant, AWQ, GPTQ, distillation, KV cache. | `model-optimization.md`; `tensorrt-llm.md`; `nemo-framework.md`; `nim.md`. | Covered | None. |
| Fine-Tuning | SFT, LoRA, QLoRA, adapters, P-tuning, DPO, GRPO, RLHF, early stopping, hallucination mitigation. | `fine-tuning.md`; `nemo-framework.md`; `nemo-customizer.md`; `nemo-guardrails.md`. | Covered | None. |
| Evaluation | Perplexity, BLEU, ROUGE, BERTScore, F1/EM, LLM-as-judge, human eval, error analysis. | `evaluation.md`; General eval harness; `nemo-evaluator.md`. | Covered | Removed fragile GPT/Claude ranking examples. |
| GPU Acceleration and Optimization | DDP, FSDP, tensor/pipeline/data/expert parallelism, Tensor Cores, GEMM, gradient accumulation, profiling. | `gpu-acceleration-and-optimization.md`; `nccl.md`; `nsight-systems.md`; `nsight-compute.md`. | Covered | None. |
| Model Deployment | Containers, dynamic batching, model config, schedulers, ensembles, streaming, autoscaling, canary, rollback. | `model-deployment.md`; General serving/traffic pages; `nim.md`; `triton-inference-server.md`; `dynamo-triton-dynamo.md`. | Covered | None. |
| Production Monitoring and Reliability | Logs, metrics, SLOs, drift, failover, cost optimization, versioning, incident response. | `production-monitoring-and-reliability.md`; General observability and latency pages. | Covered | None. |
| Safety, Ethics, and Compliance | Bias, fairness, PII, red teaming, guardrails, policy monitoring, compliance evidence. | `safety-ethics-and-compliance.md`; General policy/governance; `nemo-guardrails.md`. | Covered | None. |

## Official NVIDIA Recommended Docs Comparison

| NVIDIA doc/source | Local study/service page | Verdict | Fix needed |
|---|---|---|---|
| NCP-AAI official page | AAI blueprint and 10 topic pages | Covered | Live page wins over OCR conflicts. |
| NCP-GENL official page | GENL blueprint and 10 topic pages | Covered | None. |
| NIM for LLMs overview and API reference | `nim.md`, General model inference endpoint | Covered | Page includes API, health, readiness, metadata, metrics, and model profile cues. |
| NeMo Agent Toolkit workflows/config/ReAct | `nemo-agent-toolkit.md`, AAI architecture/development/cognition pages | Covered | Includes `workflow._type`, `functions`, `function_groups`, `llms`, `embedders`, `retrievers`, `memory`, ReAct/router/parallel/sequential patterns. |
| NeMo Retriever docs | `nemo-retriever.md`, General RAG pages | Covered | Includes extraction, embedding NIM, reranking NIM, chunking, multimodal parsing, retrieval/ranking boundaries. |
| NeMo Guardrails docs | `nemo-guardrails.md`, safety pages | Covered | Includes dialog/input/output rails, RAG grounding, prompt-injection and tool-safety boundaries. |
| TensorRT-LLM docs | `tensorrt-llm.md`, GENL optimization/deployment pages | Covered | Includes engine/runtime, streaming, in-flight batching, paged attention, quantization, KV cache. |
| Triton model configuration and dynamic batching | `triton-inference-server.md`, GENL deployment, General serving pages | Covered | Includes model repository, `config.pbtxt`, dynamic batching, queue delay, schedulers, ensembles, concurrent execution. |
| NeMo Framework docs | `nemo-framework.md`, GENL fine-tuning/GPU pages | Covered | Includes training, customization, parallelism, FSDP, activation recomputation, PEFT, PTQ/QAT. |
| NeMo quantization and PEFT docs | GENL optimization/fine-tuning, `nemo-framework.md`, `nemo-customizer.md` | Covered | Includes FP8/INT8/INT4, SmoothQuant, AWQ, LoRA, QLoRA, adapters, P-tuning. |
| NeMo parallelisms docs | GENL GPU page, `nccl.md`, `nemo-framework.md` | Covered | Includes DDP, distributed optimizer/FSDP-like sharding, tensor, pipeline, data, expert parallelism and collectives. |
| Nsight Systems docs | `nsight-systems.md`, AAI/GENL monitoring and GPU pages | Covered | Systems-first timeline diagnosis is explicit. |
| Nsight Compute docs | `nsight-compute.md` | Covered | Kernel-level drilldown after Nsight Systems is explicit. |
| NCCL/distributed communication expectations | `nccl.md`, GENL GPU page | Covered | Includes all-reduce, all-gather, reduce-scatter, all-to-all, topology and overlap. |
| NeMo Curator/data-prep expectations | `nemo-curator.md`, General training-data curator | Covered | Decision guide and neighboring-service boundary added. |

## General Study Fit

| General prerequisite | Local pages | Verdict | Fix needed |
|---|---|---|---|
| Vendor-neutral concepts before NVIDIA specifics | General Study capability pages | Covered | None. |
| Chunking types | `knowledge-and-rag-pipeline.md` | Covered | Fixed, overlap, semantic, structure-aware, parent-child, sliding window, proposition/agentic chunking are present with use cases. |
| Memory types | `memory-store.md`, AAI cognition page | Covered | Working, episodic, semantic/entity, long-term, preference, and governance coverage is present. |
| Agent patterns | `agent-orchestration-runtime.md`, `nemo-agent-toolkit.md` | Covered | Workflow, ReAct, router, plan-and-execute, supervisor, multi-agent, reflection are present. |
| Tool gateway patterns | `tool-gateway-and-function-runtime.md` | Covered | Schema, validation, auth, permissions, idempotency, audit are present. |
| Evaluation patterns | `evaluation-and-regression-harness.md` | Covered | Answer, retrieval, trajectory, safety, regression, and cost-quality frontier are present. |
| Ops patterns | `latency-throughput-and-traffic-control.md` | Covered | p50/p95/p99, TTFT, throughput, concurrency, queues, backpressure, circuit breakers are present. |
| Governance | `human-review-and-governance-console.md`, `policy-and-guardrails-layer.md` | Covered | HITL/HOTL, escalation, sampling, approval gates, and feedback-to-eval are present. |

## Currentness And Stale Claims

| Scan target | Verdict | Fix |
|---|---|---|
| `GPT-4`, `Claude 3`, `Claude 3.5`, `GPT-4V` as current ranking examples | Stale | Rewritten into durable model-family or evaluation-bias language. |
| `state-of-the-art`, `latest model`, `top model`, `frontier` | Covered | Fragile ranking uses removed. Remaining `cost-quality frontier` is a durable evaluation term, not a model ranking. |
| Nemotron context-length claims | Stale | Rewritten as per-model/profile deployment property. |
| First-screen service cards | Covered | No learner-facing JS card conflict found in stale scan. |

## Practice And Mock Verdict

Source and scope are separate:

- Source: original/downloaded vs generated.
- Scope: general certificate concept vs NVIDIA-specific.

The original/downloaded mocks are preserved, useful warmups, and useful for pattern exposure. They are not strong enough as the only readiness proof. The generated balanced mocks remain the stronger readiness check because they are 60-question, domain-balanced, harder, and calibrated to the current general/NVIDIA mix.

## Current Counts

### NCP-AAI

- Question bank: 425 unique active questions.
- Scope mix: 312 general concept / 113 NVIDIA-specific, about 73% / 27%.
- Target mix: about 72% / 28%.
- Audit nuance: all-bank NVIDIA-specific is six questions below the exact target because preserved original mocks are heavily general. This is not a regeneration trigger because every generated readiness mock hits 72% / 28%.
- Original mocks: 5 sets preserved under `mocks/original/`.
- Generated mocks: 4 sets, 60 questions each, exactly 43 general / 17 NVIDIA-specific each.

### NCP-GENL

- Question bank: 520 unique active questions.
- Scope mix: 287 general concept / 233 NVIDIA-specific, 55% / 45%.
- Target mix: about 55% / 45%.
- Audit nuance: all-bank NVIDIA-specific is one question below the exact target. This is not a regeneration trigger because the generated readiness mocks hit 55% / 45%.
- Original mocks: 5 sets preserved under `mocks/original/`.
- Generated mocks: 4 sets, 60 questions each, exactly 33 general / 27 NVIDIA-specific each.

### General Study

- Question bank: 370 unique active questions.
- Generated drill: 24 questions, balanced across General Study domains.

## Remaining Risk

- NVIDIA docs and certification pages can change; future edits should recheck official pages before changing claims.
- The Preporato research remains useful but describes an older/smaller local bank snapshot; the current app has already closed those objective study coverage gaps.
- Product-specific NVIDIA questions are safest when learners study service pages after the General Study concepts, not instead of them.
- Generated mocks are synthetic readiness drills, not official exam questions.

## Verification Commands

Required final pass:

- `rg` stale-claim scans
- Service-card structure scan
- `node scripts/audit_question_bank.mjs`
- `node scripts/audit_question_scope_mix.mjs --json`
- `node scripts/evaluate_mock_tests.js --json`
- `node scripts/report_question_topic_coverage.mjs`
- `git diff --check`
- `npm run typecheck`
- `npm run build`
- `npm run test`
- Local app inspection: one AAI section, one GENL section, one General Study capability, one NVIDIA service page

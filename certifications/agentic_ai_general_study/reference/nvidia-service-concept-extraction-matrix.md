# NVIDIA Service Concept Extraction Matrix

This matrix records which reusable Agentic AI concepts should live in General Study, while the NVIDIA service pages keep the product-specific implementation details.

Grounding sources used for this pass:

- `/Users/ludovicocuoghi/Documents/Codex/codex_projects/nvidia_certification_report_pack/nvidia_certification_full_report.md`
- `/Users/ludovicocuoghi/Documents/Codex/codex_projects/nvidia_certification_report_pack/nvidia_reference_markdowns_index.md`
- `/Users/ludovicocuoghi/Documents/Codex/codex_projects/nvidia_certification_report_pack/ncp-aai-agentic-ai-deep-research-report(2).md`
- `/Users/ludovicocuoghi/Documents/Codex/codex_projects/nvidia_certification_report_pack/Knowledge from Mock Tests.md`
- `certifications/agentic_ai_professional/reference/study-guide-ocr.md`
- `certifications/mock-question-generation-blueprint.md`
- `certifications/nvidia-exam-coverage-and-question-generation-guide.md`
- `certifications/question-topic-coverage-report.md`

## Authority Rule

General Study should teach the durable engineering idea. NVIDIA service pages should teach the concrete product surface, commands, APIs, and NVIDIA-specific decision boundary. NCP-AAI certificate pages should route from the official exam domain to the General Study concept, then mention NVIDIA products only when they change the exam decision.

## Extraction Matrix

| NVIDIA source page or service | General Study target | Reusable concept to promote | Keep product-specific in service page | Grounding signal |
|---|---|---|---|---|
| NeMo Agent Toolkit | Agent Lifecycle and Architecture; Tooling, Orchestration, and Memory | ReAct, router, supervisor, sequential/parallel workflows, state ownership, memory scopes, tool schemas, function groups, MCP/A2A exposure, trajectory traces | Exact NAT YAML fields such as `workflow._type`, `functions`, `function_groups`, `llms`, `retrievers`, `memory`, profiler/eval hooks | Full report sections 5.1, 5.2, 5.5, 5.7; OCR objectives 1.2, 2.3, 5.1-5.3, 7.3; mock report tool/memory/planning signals |
| NeMo Retriever | Data Curation and Knowledge Grounding | RAG as runtime knowledge, chunking, embeddings, dense/sparse/hybrid search, metadata filtering, ACLs, reranking, citation support, groundedness | Retriever service APIs, supported pipelines, NVIDIA deployment examples | Full report sections 5.6 and 5.7; OCR objectives 6.1-6.3; mock report RAG/vector/knowledge signals |
| NeMo Guardrails | Evaluation and Safety; Human Oversight and Governance | Layered safety around input, retrieved content, tool proposals, tool results, dialog, and output; prompt injection defense; PII handling; policy vs IAM boundary | Guardrails rails syntax, NVIDIA package/runtime details, example configs | Full report sections 5.9 and 5.7; OCR objectives 7.1 and 9.x; mock report safety/HITL/audit signals |
| NeMo Evaluator | Evaluation and Safety; Observability, Operations, and Cost | Task success, trajectory quality, tool correctness, groundedness, regression suites, LLM-as-judge calibration, eval-set hygiene | Evaluator UI/API, NVIDIA benchmark catalogs, product-specific judge flows | Full report sections 5.3 and 5.8; OCR objectives 3.1-3.5; mock report evaluation and monitoring signals |
| NIM | Inference Serving and Deployment; Model Selection and Customization | Model endpoint vs agent workflow, OpenAI-compatible API surface, endpoint health, route, fallback, rollback, model/API separation | NIM containers, profiles, model cards, exact deployment commands | Full report sections 5.4 and 5.7; OCR objective 7.2; mock report NVIDIA service mapping |
| Triton, TensorRT-LLM, Dynamo | Inference Serving and Deployment; Observability, Operations, and Cost | Serving/runtime layer distinctions, batching, KV cache, prefill/decode, queues, p95/p99, dynamic batching, distributed serving | Exact engine build, Triton model repository, Dynamo topology, TensorRT-LLM tuning commands | Full report sections 4.5, 4.8, 5.4, 5.7; deep report deployment/scaling; mock report latency/Kubernetes signals |
| NIM Operator | Inference Serving and Deployment; Observability, Operations, and Cost | Kubernetes lifecycle, autoscaling, rollout, health checks, endpoint profile management, capacity operations | Operator CRDs, NIM-specific K8s manifests and profile fields | Full report sections 5.4 and 5.7; OCR deployment objectives; mock report K8s/autoscaling signals |
| Nsight Systems and Nsight Compute | Observability, Operations, and Cost | Trace-first diagnosis, timeline vs kernel deep dive, GPU idle gaps, queueing, CPU sync, launch overhead, p99 diagnosis | Tool UI workflows, report formats, kernel counter names | Full report sections 4.7, 5.4, 5.8; mock report latency and Nsight signals |
| NeMo Curator and RAPIDS | Data Curation and Knowledge Grounding; Model Selection and Customization | Destination-specific curation: pretraining, tuning, RAG corpus prep, eval holdouts, MinHash/LSH, PII cleanup, license/contamination checks | Curator pipeline components, RAPIDS dataframe/GPU acceleration details | Full report sections 4.3, 5.6, 5.7; mock report curation/RAG boundaries |
| Nemotron models, NGC | Model Selection and Customization; Inference Serving and Deployment | Model family vs registry/catalog vs serving runtime; approved artifact, adapter, endpoint, rollback evidence | NVIDIA catalog fields, supported model names, container/model download paths | Full report model-selection and platform sections; OCR NVIDIA platform objectives |

## Coverage Priorities

1. General Study must lead with the workflow concept: task/risk framing, architecture, tools/orchestration, knowledge/memory, evaluation, deploy, operate/govern.
2. NVIDIA service names should appear as implementation examples, especially in service maps and product-specific pages, not as the organizing structure of General Study.
3. Mock questions and original Preporato-style material show that product-name memorization is a minority signal. The largest repeated signals are memory, prompts, human oversight, APIs/tools, latency, RAG/vector search, evaluation, and planning.
4. Official-style generated mocks should sample by official exam domains first, cap repeated subtopics second, and cap NVIDIA-specific scope third.


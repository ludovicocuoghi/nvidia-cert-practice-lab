---
domain: NVIDIA Platform Implementation
weight: 7
status: populated
---

# NVIDIA Platform Implementation

## Certification boundary

This page is intentionally NVIDIA-specific. It should map NIM, NeMo Agent Toolkit, NeMo Retriever, NeMo Guardrails, NeMo Evaluator, NeMo Curator, NIM Operator, Triton, TensorRT-LLM, Nsight, NGC, and related tools to the Agentic AI lifecycle. Generic lifecycle theory should stay in Agentic AI General Study.

## Core ideas you must hold in your head

- **NIM** serves models; **NeMo Framework** trains/customizes models; **NeMo Agent Toolkit** orchestrates agent workflows. These are three different lifecycle stages — the exam tests whether you can map the right tool to the right stage.
- **NeMo Guardrails** is a safety/policy middleware layer around LLM applications, not a training tool and not an inference optimizer. It intercepts input/output and applies rules.
- **Triton Inference Server** serves multiple models across frameworks with dynamic batching; **TensorRT-LLM** optimizes LLM inference specifically. Triton can host **TensorRT-LLM** engines — they're complementary, not alternatives.
- **Nsight Systems** = system-level timeline (CPU+GPU); **Nsight Compute** = kernel-level analysis. The exam tests this distinction: **Nsight Systems** for "where is the bottleneck?" and **Nsight Compute** for "why is this kernel slow?"

## Mental model

NVIDIA Platform questions usually ask **which component fits the lifecycle stage**. Treat the tools in two tiers:

- **Core Agentic AI platform services**: most likely answer choices for this certification.
- **Supporting NVIDIA platform tools**: important when the question asks about **serving**, acceleration, **profiling**, Kubernetes, or deployment mechanics.
- **Secondary customization tools**: useful when the scenario explicitly says durable behavior must change through fine-tuning.
- **Reference-only training tools**: real NVIDIA tools, but full training-from-zero is not the center of NCP-AAI.

```
[Build agent app - core]
NeMo Agent Toolkit -> NeMo Retriever -> NeMo Guardrails -> NeMo Evaluator -> NIM

[Use existing model - core/supporting]
Nemotron / NGC -> NIM -> NIM Operator when Kubernetes lifecycle matters

[Fine-tune model - secondary]
NeMo Curator -> NeMo Customizer / NeMo Framework -> NeMo Evaluator -> NIM

[Train from zero - reference only]
NeMo Curator / RAPIDS -> NeMo Framework / NCCL -> NeMo Evaluator -> NIM
```

## Mock-derived priority for this certification

The original five mock exams (`mock_1_full.md` through `mock_5_full.md`) test **agent engineering and operations** far more than full model training. Use this priority order when studying:

1. **Build agent application**: orchestration, tools, memory, RAG, guardrails, evaluation, deployment, monitoring.
2. **Use existing model for inference**: choose a model/artifact and serve it through an optimized endpoint.
3. **Fine-tune existing model**: know the path, but treat it as secondary unless the scenario says durable behavior must change.
4. **Train model from zero**: understand the lifecycle as background only. Do not over-study NCCL/full pretraining for NCP-AAI.

The detailed extraction is saved at `knowledge extracted from mock exams/Knowledge from Mock Tests.md`.

## Decision guide: core Agentic AI services

| If the scenario says... | Pick this | Do not confuse it with... |
| ----------------------- | --------- | ------------------------- |
| Build, connect, and coordinate agents/tools/workflows | **NeMo Agent Toolkit** | **NIM**, **TensorRT-LLM**, **NeMo Framework** |
| Enforce safety policy, block unsafe outputs/tool calls, defend against **prompt injection** | **NeMo Guardrails** | **Fine-tuning**, generic moderation prompts |
| Add enterprise documents/knowledge to an agent | **NeMo Retriever** | **NeMo Curator**, **NeMo Framework** |
| Serve a supported model as a production API | **NIM** | **Nemotron** model family, **NeMo Framework** |
| Manage **NIM** endpoints on Kubernetes | **NIM Operator** | **NIM** itself |
| Evaluate agent/model quality, regressions, judge workflows | **NeMo Evaluator** | Nsight **profiling**, infrastructure monitoring |
| Curate/filter/dedupe data before training or **RAG** ingestion | **NeMo Curator** | **NeMo Retriever** |
| Customize/tune model behavior | **NeMo Framework** or **NeMo Customizer** | **NIM serving**, **Guardrails** |
| Choose an NVIDIA model family for reasoning/instruction workflows | **Nemotron models** | **NIM serving** stack |
| Pull trusted containers/models/artifacts | **NGC** | Runtime **serving** |

## Adjacent NVIDIA/GPU tools: know the distinction

These can appear in Agentic AI questions, especially deployment/scaling or NVIDIA-platform questions, but they are **supporting platform tools**, not the main agent layer.

| Tool | Use it when... | Trap |
| ---- | -------------- | ---- |
| **Triton Inference Server** | Multi-framework or multi-model **serving**, dynamic batching, ensembles | Not an agent orchestrator |
| **TensorRT-LLM** | **LLM decode/throughput/latency optimization**: paged KV cache, in-flight batching, quantization | Not **RAG**, safety, or workflow **orchestration** |
| **Nsight Systems** | System-level CPU/GPU timeline: where is the bottleneck across services? | Do not use for detailed single-kernel analysis first |
| **Nsight Compute** | Kernel-level deep dive after a hot kernel is identified | Too low-level for whole-agent **latency** diagnosis |
| **RAPIDS** | GPU-accelerated dataframes/ML/graph preprocessing | Not **inference optimization** |
| **NCCL** | Multi-GPU/multi-node collectives and communication | Not model **serving**, safety, or agent **orchestration** |
| **TensorRT** | General neural-network **inference optimization** | **TensorRT-LLM** is the LLM-specific stack |
| **Triton Dynamo** | Distributed LLM inference scheduling and multi-node **serving** | Not agent task planning |

## Common exam traps

1. **Mixing lifecycle stages:** **NIM** isn't for training; **NeMo Framework** isn't for **serving**; **Guardrails** isn't for optimization. The exam constructs answer choices that are correct tools in wrong stages.

2. **CUDA Graphs for orchestration:** "CUDA Graphs" or "CUDA Toolkit" as agent **orchestration** answer. These are GPU programming primitives, not agent workflow tools. **NeMo Agent Toolkit** is the **orchestration** answer.

3. **NCCL for non-communication:** "**NCCL**" for non-communication problems. **NCCL** handles GPU collectives. It's not for model **serving**, safety, **profiling**, or agent **orchestration**. Only pick **NCCL** when the question is about multi-GPU communication.

4. **Nsight Compute first:** "**Nsight Compute** as first tool for system-level questions." The exam expects **Nsight Systems** first for timeline/bottleneck identification, then **Nsight Compute** for kernel deep-dive.

5. **NVIDIA SMI for profiling:** "**NVIDIA SMI**" for **profiling**. SMI gives GPU status (temp, utilization snapshot). It's not a **profiling** or optimization tool.

6. **RAPIDS for inference:** "**RAPIDS** for **inference optimization**." **RAPIDS** accelerates data processing (cuDF, cuML). **Inference optimization** is TensorRT/**TensorRT-LLM**.

7. **Guardrails modifies weights:** "**NeMo Guardrails** modifies **model weights**." It operates as external validation middleware, not by modifying the LLM.

8. **Triton for LLMs only:** "**Triton Inference Server** only for LLMs." Triton is multi-framework, multi-modal. It serves any model type — vision, audio, text.

## Must-know exam bullets

- **NIM:** **optimized inference microservice** (API endpoint for models) — **serving** stage
- **NeMo Agent Toolkit:** agent workflow and tool **orchestration** — development stage
- **NeMo Guardrails:** safety/policy middleware outside the LLM — safety stage
- **Triton Inference Server:** multi-framework, multi-modal model **serving** with dynamic batching
- **TensorRT-LLM:** LLM-specific **inference optimization** (in-flight batching, paged KV cache, kernel fusion, quantization)
- **Nsight Systems:** system-level CPU+GPU timeline; **Nsight Compute:** kernel-level deep dive
- **NeMo Framework:** trains/customizes; **Nemotron:** the model family; **NIM:** serves them
- **NCCL:** GPU-to-GPU communication only — not **serving**, not safety, not **orchestration**
- **RAPIDS:** GPU-accelerated data processing (not inference)
- **Triton Dynamo:** distributed inference scheduling for large GPU clusters

## Hands-on checks / study prompts

1. Map each NVIDIA tool to its lifecycle stage: training, data prep, safety, **serving**, **orchestration**, monitoring.
2. What's the difference between **NIM** and **Triton Inference Server**? When do you use one vs. both?
3. A question asks about "GPU timeline analysis for CPU dispatch + LLM inference interaction." Which tool?
4. What does **NeMo Guardrails** operate on — **model weights**, input/output, or training data?
5. When would you pick **TensorRT-LLM** features specifically over general TensorRT?

## Mock signals

Across the mock exams, NVIDIA platform questions repeatedly test these durable distinctions:

- **Core Agentic services**: **NeMo Agent Toolkit** for **orchestration**, **NeMo Guardrails** for policy/safety, **NeMo Retriever** for **RAG**, **NIM** for model APIs, and **NeMo Evaluator** for quality/regression checks.
- **Lifecycle mapping**: data curation/**customization/serving/safety/evaluation** are different stages; correct tools in the wrong stage are wrong answers.
- **Serving stack**: **NIM** packages supported models as APIs; Triton serves multi-framework or multi-model workloads; **TensorRT-LLM** optimizes LLM inference.
- **Profiling stack**: **Nsight Systems** answers "where is the system bottleneck?"; **Nsight Compute** answers "why is this kernel slow?"
- **GPU-adjacent tools**: **NCCL**, TensorRT, CUDA, and **RAPIDS** appear as supporting platform concepts, not agent **orchestration** layers.
- **Exam trap pattern**: answer choices often mix NeMo, **NIM**, Triton, **TensorRT-LLM**, Nsight, and **NCCL** to test whether you know the boundary.

Evidence source: `mock_1` through `mock_5`, especially NVIDIA platform, deployment, **inference optimization**, **profiling**, and guardrail questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 7%
- **What it covers:** Map agentic workloads to NVIDIA services such as **NIM**, **NeMo Agent Toolkit**, **NeMo Guardrails**, **NeMo Retriever**, Triton, and **TensorRT-LLM**.
- **Use this section when:** Study this when the question asks which NVIDIA component fits a production agent requirement.
- **Common trap:** Do not answer with a model when the question asks for **orchestration**, **serving**, **retrieval**, or **guardrails**.
- **Scenario signal:** The question names a production need, so identify the **lifecycle layer** first: **orchestration**, **retrieval**, **guardrails**, **serving**, **evaluation**, **profiling**, or optimization.

### Study notes

- Map each NVIDIA component to lifecycle: **NeMo Framework** customizes, **NeMo Agent Toolkit** orchestrates, **NeMo Retriever** retrieves, **NeMo Guardrails** governs, **NIM** serves, **TensorRT-LLM** optimizes LLM inference, Triton serves multi-framework pipelines.
- When a question says "which NVIDIA service," identify the bottleneck and lifecycle phase before choosing the product name.
- **The full NVIDIA agent stack**: (1) **NeMo Agent Toolkit** — orchestrates agent workflows, connects tools and data sources, manages multi-agent coordination, skill chaining with async execution and caching. (2) **NIM** — serves each model (LLM, embedding, reranker) as an **optimized inference microservice**. (3) **NeMo Retriever** — handles enterprise **RAG**: document ingestion, chunking, embedding, indexing, and **retrieval** APIs. (4) **NeMo Guardrails** — enforces safety policy: **input/output validation**, topical restrictions, jailbreak blocking, **groundedness** checks, and **prompt injection** defense. (5) **Nsight Systems/Compute** — **profiling** and observability for agent backends. (6) **NeMo Evaluator** — quality and regression **evaluation** for agent outputs. (7) **NeMo Curator** — data curation and filtering before ingestion or training.
- **When to use each component**: (a) Use **NeMo Agent Toolkit** when you need to build, connect, and coordinate agents, tools, and workflows — this is the **orchestration** layer. (b) Use **NIM** when you need to deploy a model as a production API — this is the **serving** layer. (c) Use **NeMo Retriever** when you need to add enterprise documents/knowledge to an agent — this is the **RAG** layer. (d) Use **NeMo Guardrails** when you need to enforce safety policy, block unsafe outputs, or defend against **prompt injection** — this is the safety layer. (e) Use **Nsight Systems** when you need to identify system-level bottlenecks across CPU and GPU — this is the **profiling** layer. (f) Use **NeMo Evaluator** when you need to evaluate agent quality and detect regressions — this is the **evaluation** layer.
- **Component selection framework**: (1) Name the bottleneck or risk first. Is it **latency**? Safety? **Retrieval** quality? **Orchestration** complexity? (2) Map the bottleneck to a layer: **latency** -> **serving**/optimization, safety -> **guardrails**, **retrieval** -> retriever, **orchestration** -> agent toolkit, **evaluation** -> evaluator. (3) Choose the NVIDIA tool at that layer. Do NOT pick a tool from a different layer, even if the tool name sounds plausible. The exam constructs wrong answers by mixing layers: e.g., "use **NIM** for safety" (wrong — **NIM** is **serving**, **Guardrails** is safety) or "use **NeMo Retriever** for **orchestration**" (wrong — Retriever is **RAG**, Agent Toolkit is **orchestration**).

### Must know

- **NIM**: **optimized inference microservice** — packages LLM, embedding, or reranker models as API endpoints with **TensorRT-LLM** under the hood. Lifecycle: **serving**. NOT for training, **orchestration**, or safety.
- **NeMo Agent Toolkit**: **orchestration** framework for building agent workflows — connects tools, data sources, multiple agents, skill chaining, async execution, caching, and observability. Lifecycle: development/**orchestration**. NOT model **serving** or safety policy.
- **NeMo Guardrails**: safety/policy middleware — intercepts LLM input/output to enforce topical restrictions, detect jailbreaks, validate **groundedness**, block **prompt injection**. Operates as external middleware, NOT by modifying **model weights**. Lifecycle: safety.
- **NeMo Retriever**: enterprise **RAG** service — document ingestion, chunking, embedding generation, indexing, and **retrieval** APIs. Lifecycle: **retrieval/RAG**. NOT for data curation (that's **NeMo Curator**).
- **NeMo Curator**: data curation and filtering — deduplication, quality filtering, **PII** removal, data preparation before ingestion or training. Lifecycle: data preparation. NOT for **retrieval** (that's **NeMo Retriever**).
- **NeMo Evaluator**: agent/model quality **evaluation** — trajectory scoring, regression detection, judge workflows. Lifecycle: **evaluation**. NOT for **profiling** (that's Nsight).
- **NeMo Framework / NeMo Customizer**: model training and customization. Lifecycle: training/customization. NOT for **serving** (that's **NIM**).
- **TensorRT-LLM**: LLM **inference optimization** library — in-flight batching, paged KV cache, kernel fusion, FP8/INT4 quantization. Often operates under **NIM** or Triton. Lifecycle: **inference optimization**.
- **Triton Inference Server**: multi-framework, multi-modal model **serving** — dynamic batching, concurrent model execution, ensemble pipelines. NOT LLM-only (serves vision, audio, text). Complementary to **NIM** (Triton for multi-model, **NIM** for packaged APIs).
- **NIM Operator**: Kubernetes operator for managing **NIM** deployments at scale. Lifecycle: operations.
- **Triton Dynamo**: distributed LLM inference scheduling across multi-node GPU clusters. NOT agent task planning.
- **Nsight Systems**: system-level CPU+GPU timeline **profiling** — identifies WHERE the bottleneck is across components. First tool for system-wide **latency** diagnosis.
- **Nsight Compute**: kernel-level GPU analysis — identifies WHY a specific kernel is slow. Use AFTER **Nsight Systems** identifies the hot kernel.
- **NVIDIA SMI**: GPU status snapshot (temp, utilization). NOT a **profiling** or optimization tool.
- **NCCL**: multi-GPU/multi-node collective communication library (all-reduce, all-gather). NOT for model **serving**, safety, or **orchestration** — only for GPU communication.
- **RAPIDS**: GPU-accelerated data processing (cuDF, cuML, graph analytics). NOT for **inference optimization**.
- **NGC**: NVIDIA GPU Cloud — trusted containers, models, artifacts. Lifecycle: distribution.
- **Nemotron models**: NVIDIA model family for reasoning/instruction workflows. NOT the same as **NIM** (**NIM** serves models, **Nemotron** is a model family).

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| serve a supported model as production API endpoint | **NIM optimized inference microservice** | **NeMo Framework** (training, not **serving**) |
| manage **NIM** deployments on Kubernetes | **NIM Operator** | **NIM** alone (missing K8s lifecycle management) |
| build agent workflows, connect tools, orchestrate multi-agent | **NeMo Agent Toolkit** | **TensorRT-LLM** (**inference optimization**, not **orchestration**) |
| safety policies, jailbreak prevention, **prompt injection** defense | **NeMo Guardrails** | **fine-tuning** only or **NIM** |
| enforce topical restrictions and validate **RAG groundedness** | **NeMo Guardrails** (middleware layer) | **NeMo Agent Toolkit** (**orchestration**, not safety) |
| add enterprise documents/knowledge to an agent | **NeMo Retriever** | **NeMo Curator** (data prep, not **retrieval**) |
| data curation, deduplication, filtering before **training/RAG** | **NeMo Curator** | **NeMo Retriever** (**retrieval**, not data prep) |
| evaluate agent quality, detect regressions, trajectory scoring | **NeMo Evaluator** | **Nsight Systems** (**profiling**, not quality **evaluation**) |
| inference throughput, KV cache, quantization, in-flight batching | **TensorRT-LLM** | **RAPIDS** (data processing, not inference) |
| multi-framework or multi-model **serving** with dynamic batching | **Triton Inference Server** | **NIM** alone (**NIM** = packaged single-model APIs; Triton = multi-model platform) |
| system-level CPU/GPU bottleneck across services | **Nsight Systems** timeline analysis | **Nsight Compute** first (too narrow for system-wide diagnosis) |
| kernel-level GPU bottleneck — why one kernel is slow | **Nsight Compute** | **NVIDIA SMI** (status snapshot, not **profiling**) |
| multi-GPU communication, collectives, all-reduce performance | **NCCL** | **NIM** or **NeMo Agent Toolkit** |
| GPU-accelerated data preprocessing (cuDF, cuML) | **RAPIDS** | **TensorRT-LLM** (inference, not data processing) |
| distributed LLM inference across multi-node GPU clusters | **Triton Dynamo** | **NeMo Agent Toolkit** (**orchestration**, not inference scheduling) |
| pull trusted containers/models from NVIDIA catalog | **NGC** | **NIM** (**NIM** is the runtime; **NGC** is the catalog) |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| **NIM** vs Triton vs **TensorRT-LLM** | **NIM** = packaged inference microservice for supported models. Triton = multi-model **serving** platform with dynamic batching and ensembles. **TensorRT-LLM** = LLM inference optimizer for batching, KV cache, quantization, and kernels. **TensorRT-LLM** optimizes; **NIM** or Triton serves. |
| **NeMo Curator** vs **NeMo Retriever** | Curator = data preparation (dedup, filter, clean datasets BEFORE ingestion). Retriever = **RAG** service (ingestion, chunking, indexing, **retrieval** APIs AFTER data is clean). Different lifecycle stages; they are complementary, not alternatives. |
| **NeMo Guardrails** vs **Fine-tuning** | **Guardrails** = runtime middleware (intercepts input/output, applies rules, doesn't modify weights). **Fine-tuning** = changes **model weights** (behavioral change, no runtime enforcement). **Guardrails** for runtime safety control; **fine-tuning** for behavioral adaptation. Both can be used together. |
| **NeMo Agent Toolkit** vs CUDA | Agent Toolkit = high-level **orchestration** (connect tools, agents, workflows). CUDA = low-level GPU programming (kernels, memory management). CUDA is never the answer for agent **orchestration** questions. |
| **Nsight Systems** vs **Nsight Compute** | **Nsight Systems** = system-level timeline (CPU+GPU interactions, where is the bottleneck?). **Nsight Compute** = kernel-level analysis (why is this kernel slow?). Start with Systems; drill into Compute. |
| **NeMo Evaluator** vs **Nsight Systems** | Evaluator = agent quality metrics (trajectory, **task success**, **faithfulness**). Nsight = performance **profiling** (**latency**, GPU utilization). Evaluator answers "is it good?"; Nsight answers "where is it slow?" |
| **NVIDIA SMI** vs **Nsight Systems** | SMI = instantaneous GPU status (temp, utilization, memory). Nsight = detailed timeline/**profiling** (spans, traces, bottlenecks). SMI is a dashboard; Nsight is a diagnostic tool. |
| **NCCL** vs gRPC | **NCCL** = GPU-to-GPU collective communication (all-reduce, all-gather for distributed training/inference). gRPC = agent-to-agent structured messaging. Entirely different layers: **NCCL** at GPU interconnect, gRPC at application messaging. |
| **Triton Dynamo** vs **NeMo Agent Toolkit** | Dynamo = distributed LLM inference scheduling (how to serve LLMs across GPUs). Agent Toolkit = agent workflow **orchestration** (how to coordinate agent steps). Dynamo is inference infrastructure; Agent Toolkit is application **orchestration**. |
| **Nemotron** vs **NIM** | **Nemotron** = model family (the actual **model weights**/architecture). **NIM** = **serving** layer (packaged microservice that serves **Nemotron** or other models). **Nemotron** is WHAT you serve; **NIM** is HOW you serve it. |

### Mini scenario drill

1. Scenario: An enterprise team wants to deploy a supported LLM with an API endpoint, enforce safety policies against jailbreaks, and add their internal documentation as knowledge. They propose using **NeMo Framework** for all three.
   Best answer pattern: **NIM** for model **serving** (packaged API), **NeMo Guardrails** for safety (middleware layer), **NeMo Retriever** for knowledge (**RAG**). Three different lifecycle stages, three different tools. **NeMo Framework** is for training/customization, not **serving/safety/retrieval**.
   Trap: Using one tool (**NeMo Framework**) for all stages — lifecycle mismatch. Also: using **NIM** for safety (wrong layer), **NeMo Retriever** for safety (wrong layer).

2. Scenario: A team notices that agent **latency** spikes during LLM inference. They run **NVIDIA SMI** and see 85% GPU utilization. They conclude the GPU is not the bottleneck and investigate elsewhere.
   Best answer pattern: Run **Nsight Systems** first to get a system-level timeline of CPU dispatch, GPU kernel execution, and communication. If a specific kernel dominates, follow up with **Nsight Compute** to understand why that kernel is slow. GPU utilization alone doesn't tell you where the bottleneck is.
   Trap: **NVIDIA SMI** shows only instantaneous utilization — it cannot identify which component is the bottleneck. Skipping **Nsight Systems** in favor of guessing wastes time.

3. Scenario: A team needs to enforce that an agent never discusses competitor products, never generates code in responses, and defends against "ignore all previous instructions" attacks in retrieved documents.
   Best answer pattern: **NeMo Guardrails** — **input guardrail** blocks jailbreak patterns, **output guardrail** enforces topical restrictions, **retrieval guardrail** isolates retrieved text from instructions. Three guardrail gates, one tool.
   Trap: **Fine-tuning** the model to "be safe" — this provides no runtime enforcement. Prompt instructions alone are bypassable. **Guardrails** is the deterministic middleware answer.

### High-yield exam signals

- **NVIDIA component confusion**: team picks **NIM** for safety policy enforcement instead of **NeMo Guardrails**, confusing **serving** with safety
- **Agent workflow bottleneck**: **latency** comes from inefficient tool **orchestration**, but the team investigates GPU kernels instead of workflow **orchestration** and async execution
- **RAG quality issue**: **retrieval** returns irrelevant chunks, but the team considers **fine-tuning** instead of improving **NeMo Retriever** indexing, chunking, metadata, or **reranking**
- **Serving mismatch**: model is deployed without optimized **serving** such as **NIM/TensorRT-LLM**, causing unacceptable inference **latency** at scale
- **Guardrails gap**: **prompt injection** succeeds through retrieved content because no **retrieval guardrail / data-instruction separation** sits between documents and the LLM
- **Mixing lifecycle stages:** in answer choices (wrong tool, correct stage)
- **Bottleneck analysis:** leading to tool choice
- **Nsight Systems vs Nsight Compute distinction**

### Hands-on checks

- Given a production agent with a slow **retrieval** pipeline (10s **latency** per query), walk through the **component selection framework**: name the bottleneck, identify which **lifecycle layer** it belongs to, and choose the NVIDIA tool that addresses it. Justify why tools from other layers would be incorrect.
- Given a production agent problem (e.g., "**latency** is high because **retrieval** is slow"), walk through the **component selection framework**: name the bottleneck, identify the layer, choose the NVIDIA tool.
- Map each NVIDIA tool to a specific agent pipeline stage: data prep -> customization -> **orchestration** -> **retrieval** -> **serving** -> safety -> **evaluation** -> **profiling**. Identify which tools are complementary and which are mutually exclusive.
- Given a scenario with multiple bottlenecks (safety + **latency** + **retrieval** quality), prioritize which NVIDIA component to address first and justify why.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when the question asks which NVIDIA component fits a production agent requirement.
- The major trap pattern is: Do not answer with a model when the question asks for **orchestration**, **serving**, **retrieval**, or **guardrails**.
- Recurring local question themes include: workflow/state-machine design, **RAG evaluation** and **groundedness**, tool execution safety, NVIDIA **NIM** and model **serving**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q39, mock_2 Q41, mock_3 Q51, mock_4 Q45, mock_5 Q41** / `platform-001`: An enterprise wants an agent workflow that connects tools, data sources, and multiple agents while remaining framework-flexible. Which NVIDIA component is most relevant? Correct idea: **NeMo Agent Toolkit**.. Trap: CUDA Graphs reduce launch overhead.
- **mock_1 Q40, mock_2 Q42, mock_3 Q52, mock_4 Q46, mock_5 Q42** / `platform-002`: An agent must enforce topical restrictions, block jailbreak attempts, and validate grounded **RAG** answers. Which NVIDIA component fits best? Correct idea: **NeMo Guardrails**.. Trap: SMI gives GPU status.
- **mock_1 Q41, mock_2 Q43, mock_3 Q53, mock_4 Q47, mock_5 Q43** / `platform-003`: A team wants to deploy a model as a standard **optimized inference microservice** with an API endpoint. Which NVIDIA component is the best match? Correct idea: **NIM**.. Trap: **RAPIDS** accelerates data processing.
- **mock_1 Q42, mock_2 Q44, mock_3 Q54, mock_4 Q48, mock_5 Q44** / `platform-004`: A **NIM**-hosted LLM has poor token throughput under variable-length generation. Which lower-level NVIDIA technology is most directly relevant? Correct idea: **TensorRT-LLM** features such as in-flight batching, paged KV cache, and optimized attention kernels.. Trap: Data dedup is not inference scheduling.
- **mock_3 Q55, mock_4 Q49, mock_5 Q45** / `platform-005`: A team needs GPU timeline analysis for an agent backend where CPU dispatch, **retrieval**, and LLM inference interact. Which NVIDIA tool should they start with? Correct idea: **Nsight Systems**.. Trap: **Nsight Compute** is kernel-level after the hot kernel is known.

</details>

<!-- STUDY_ENRICHMENT_END -->

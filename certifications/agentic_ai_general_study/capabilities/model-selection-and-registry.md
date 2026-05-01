---
capability: Model Selection and Registry
status: populated
source_lens: general-study
---

# Model Selection and Registry

## What You Are Building

You are building the decision and governance layer for choosing, approving, versioning, comparing, and rolling back model artifacts. This is where the team decides whether to use a hosted API, open-weight model, self-hosted endpoint, base checkpoint, tuned adapter, embedding model, reranker, reasoning model, or multimodal model.

## Pipeline

1. Start from the job: generation, retrieval embedding, reranking, classification, extraction, tool reasoning, code, vision, speech, or multimodal reasoning.
2. Identify constraints: data residency, latency, p95/p99, cost, context length, accuracy, safety, license, deployment environment, auditability.
3. Choose model access pattern: hosted API, vendor-managed private endpoint, open-weight self-hosted, or internal trained model.
4. Choose model type: small/fast, large/reasoning, dense, MoE, embedding, reranker, code, multimodal, domain-specific.
5. Choose deployment variant: FP16/BF16, FP8, INT8/INT4 quantized, long-context, distilled, adapter-backed, or tool-specialized.
6. Run evals against real tasks and compare quality, safety, latency, cost, and failure modes.
7. Register the approved artifact with metadata: base model, version, adapter, prompt, retrieval index, eval report, risk approval, owner.
8. Deploy through a serving endpoint/gateway and keep rollback paths.
9. Monitor drift, incidents, and regressions; update registry state when versions change.

## Core Concepts

- **Hosted API** is fast to adopt but may constrain data residency, latency, customization, and cost controls.
- **Open-weight/self-hosted** offers control and data locality but requires serving, security, patching, and optimization.
- **Model family** is the lineage and capability family such as Nemotron, Llama, Mistral, or Qwen. It is not the same as the serving layer.
- **NIM** is the optimized serving microservice. **Nemotron** is a model family. **NGC** is a catalog/registry path for containers and artifacts.
- **Small models** are cheaper and faster; **large models** often handle harder reasoning but raise cost and latency.
- **Dense models** activate most parameters; **MoE models** activate selected experts and can offer high capacity with sparse compute.
- **Parameter count** is a rough capacity/cost signal, not a quality guarantee. A smaller model can win when latency, volume, or task simplicity dominates.
- **Embedding models** produce vectors for retrieval; **rerankers** score query-document pairs; **generation models** produce final text; **code** and **multimodal** models specialize for non-chat workloads.
- **Precision variants** such as FP16, BF16, FP8, INT8, and INT4 change memory, speed, and quality risk.
- **Context length** is not free. Long context increases prefill cost and can make retrieval/context discipline more important.
- **License and data residency** can decide the model before benchmark quality does. Commercial terms, hosted retention policy, region, and audit requirements are model-selection inputs.
- **Model registry** tracks artifact lineage, approval state, eval evidence, deployment version, and rollback target.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "must not leave private VPC" | self-hosted/open-weight or private managed endpoint | default public API |
| "simple classification at high volume" | small model or task-specific model | premium reasoning model |
| "needs citations from current docs" | RAG model stack: embedding + reranker + generator | fine-tuning for facts |
| "exact retrieval quality is poor" | choose/re-evaluate embedding and reranker models | only changing generator |
| "strict latency/cost budget" | model size, quantization, routing, context length | one large model for everything |
| "NVIDIA-native model family" | Nemotron through NGC/NIM, with NeMo/TensorRT-LLM integration | treating NIM as the model itself |
| "compare Llama/Mistral/Qwen/Nemotron" | family capability, license, ecosystem, context, serving path | choosing by brand only |
| "new adapter release" | registry lineage: base model, adapter, dataset, eval report | untracked file handoff |
| "license/data residency risk" | model source, license, hosting region, retention policy | purely accuracy-based choice |
| "rollback after regression" | versioned registry + endpoint version pinning | overwriting production model |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Model selection means picking a brand | It means matching task, constraints, evals, deployment, and governance. |
| Bigger model is always better | Bigger can be slower, costlier, harder to host, and unnecessary for simple tasks. |
| Model family equals serving product | Nemotron/Llama/Mistral/Qwen are model families; NIM/Triton/vLLM are ways to serve or package them. |
| Open-weight equals open-source | Weights may be available while data, training code, or commercial rights remain restricted. |
| Parameters equal active compute | Dense models activate most weights; MoE can have many total parameters but fewer active per token. |
| Embedding and generation models are interchangeable | Embedding models retrieve; generation models write; rerankers reorder candidates. |
| Registry is serving | Registry tracks artifacts and evidence; serving endpoints run models. |
| Quantization is always free | Lower precision can affect quality, calibration, or edge cases and must be evaluated. |
| Context window solves retrieval | Long context can add noise and cost; retrieval and context assembly still matter. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NGC + Nemotron model families | Catalog and model artifacts for reasoning, retrieval, and enterprise workflows. |
| NVIDIA | NIM model profiles | Packaged serving variants for approved model endpoints. |
| NVIDIA | NeMo Customizer / NeMo Evaluator | Adapter lineage and eval evidence before model approval. |
| Cloud | Bedrock, Vertex AI, Azure AI, OpenAI APIs | Hosted models with managed operations and policy constraints. |
| Open source | Hugging Face Hub, MLflow Model Registry | Artifact tracking, model cards, adapters, and version metadata. |
| Internal platform | Model approval board | Risk review, eval reports, rollout gates, and rollback records. |

## Deep Dive

### Where it sits in the lifecycle

Model selection is the **model/artifact decision layer**. It happens before serving and after the task, data, policy, and cost constraints are clear.

```text
[Task + constraints] -> [Model family/checkpoint] -> [Eval] -> [Registry]
        -> [Serving profile: NIM/Triton/hosted] -> [Gateway route] -> [Monitoring]
```

The "best" model is not the most famous model. It is the model whose **task fit, license, hosting path, latency, context length, safety behavior, and eval evidence** match the production scenario.

### Model family comparison

| Dimension | Nemotron | Llama | Mistral | Qwen |
|---|---|---|---|---|
| Primary exam cue | NVIDIA-native model family | Broad open-weight ecosystem | Efficient open-weight options | Multilingual/code/long-context ecosystem |
| Serving path | NGC/NIM, TensorRT-LLM optimized profiles | NIM or third-party serving if supported | NIM or third-party serving if supported | NIM or third-party serving if supported |
| NVIDIA stack fit | Strongest integration with NeMo, NIM, Evaluator, Customizer | Depends on profile and license | Depends on profile and license | Depends on profile and license |
| What to compare | Stack integration and approved profile | License, ecosystem, task fit | Latency/quality tradeoff | Language, code, context, license |
| Common trap | Treating Nemotron as the server | Treating popularity as approval | Assuming small always means weak | Assuming long context solves RAG |

If the scenario says **NVIDIA-native model family**, think **Nemotron**. If it says **serve an approved model API**, think **NIM**. If it says **track approved artifacts and rollback**, think **model registry**.

### Model type and size knobs

| Choice | Right use | Watch out |
|---|---|---|
| Small dense model | Routing, extraction, classification, high-volume simple tasks | May fail complex reasoning |
| Large dense model | Hard reasoning, synthesis, broad instruction following | Higher latency, memory, and cost |
| MoE model | High capacity with sparse active experts | Router balance, expert loading, serving complexity |
| Embedding model | Convert text to vectors for retrieval | Does not generate answers |
| Reranker | Reorder candidate chunks for relevance | Too expensive over the whole corpus |
| Code/multimodal/speech model | Specialized non-chat workload | Needs separate evals and serving profiles |

Parameter count is a **capacity and cost clue**, not a quality guarantee. A 4B or 8B model may be the right answer for high-volume routing. A 30B-70B model may be justified for deeper reasoning. A two-model route is common: small fast model for simple steps, larger model only when needed.

### Context, precision, and packaging

Long context helps with long documents, codebases, and multi-turn agents, but it increases **prefill latency** and can hide weak retrieval. A retrieval/reranking fix may beat buying a longer-context model.

| Knob | What it changes | Exam mental model |
|---|---|---|
| Context length | How much input the model can consider | More context is not free |
| FP16/BF16 | Common high-quality serving/training formats | Baseline precision choices |
| FP8 | Better throughput on supported hardware | Validate quality/stability |
| INT8/INT4 | Lower memory and cost | Quantization can regress edge cases |
| Adapter-backed profile | Base model plus tuned behavior | Registry must record base + adapter |

### Registry release record

A registry turns model choice into a reproducible release. It should answer:

- Which **base model**, model family, and checkpoint are approved?
- Which **adapter**, prompt version, retrieval index, and tool schema are coupled to the release?
- Which **eval set**, safety approval, latency/cost result, and known limitation justify it?
- Which **endpoint**, serving profile, route, and rollback target run it in production?

## Exam Signals

- "choose existing model/API" -> model selection, not training.
- "small vs large model" -> latency/cost/quality tradeoff.
- "embedding model saturated" -> retrieval model, not generator.
- "reranker needed" -> precision after initial retrieval.
- "Nemotron vs Llama/Mistral/Qwen" -> model family, license, ecosystem, context, serving fit.
- "NIM profile" -> serving package/profile, not model family selection by itself.
- "open weights in regulated use" -> license, data residency, retention, audit, and self-hosting capability.
- "small router plus large reasoner" -> model portfolio/gateway strategy, not one model for all steps.
- "FP8/INT8/INT4" -> serving variant and eval requirement.
- "rollback model version" -> registry and endpoint versioning.
- "data residency/license" -> model access and governance constraint.
- "long context expensive" -> context discipline, routing, and cost/latency optimization.

## Hands-on Checks

1. Build a model decision table with task, candidate model, context length, latency, cost, hosting, license, eval score, and risk.
2. Separate model family, checkpoint, adapter, prompt, retrieval index, endpoint, and gateway in one release diagram.
3. Given a RAG quality issue, decide whether to change embedding model, reranker, generator, chunking, or metadata.
4. Compare hosted API vs self-hosted open-weight for a regulated enterprise use case.
5. Write a registry entry for a tuned adapter release with rollback evidence.

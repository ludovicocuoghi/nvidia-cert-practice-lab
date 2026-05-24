---
service: Base Model and Model Registry
relevant_to: [AAI-GEN]
status: populated
---

# Base Model and Model Registry

## What to study first

- **Core idea:** A vendor-neutral layer for choosing, tracking, approving, and releasing model artifacts.
- **Use it when:** The scenario mentions model choice, versioning, approval status, lineage, rollback, model cards, or artifact governance.
- **Choose another path when:** Choose a neighboring service when the task is serving tokens, orchestrating tools, retrieving knowledge, or runtime safety enforcement.
- **Concrete surface:** Access: Model catalogs, registries, artifact stores, model hubs, CI/CD release gates, and approval workflows Inside: Model cards, lineage, semantic versions, approval states, reproducibility metadata, release aliases, rollback links I/O: Base model, adapter, tokenizer, prompt version, eval report, dataset lineage, risk approval, deployment target -> Versioned and approved model artifact ready for customization, evaluation, or deployment
- **Real trap:** Treating "model registry" as the inference endpoint. The registry records and approves artifacts; serving infrastructure runs them.

## At a glance

| | |
|---|---|
| **What it is technically** | The catalog and governance layer for base models, tuned adapters, versions, approvals, metadata, lineage, and rollback |
| **How you access it** | Model catalogs, registries, artifact stores, model hubs, CI/CD release gates, and approval workflows |
| **Input** | Base model, adapter, tokenizer, prompt version, eval report, dataset lineage, risk approval, deployment target |
| **Output** | Versioned and approved model artifact ready for customization, evaluation, or deployment |
| **Inside** | Model cards, lineage, semantic versions, approval states, reproducibility metadata, release aliases, rollback links |

```yaml
model_release:
  name: support-agent
  base_model: nvidia/llama-nemotron-super
  adapter: support-lora-v7
  tokenizer: base
  eval_report: evals/2026-05-04.json
  approval: approved
  rollback_to: support-lora-v6
```

**Mental model**: the inventory and approval desk for "which model are we allowed to use, why, and how do we roll it back?"

## Study card data

- **What it is:** A vendor-neutral layer for choosing, tracking, approving, and releasing model artifacts.
- **Lifecycle:** Model selection
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions model choice, versioning, approval status, lineage, rollback, model cards, or artifact governance.
- **Do not use it when:** Choose a neighboring service when the task is serving tokens, orchestrating tools, retrieving knowledge, or runtime safety enforcement.
- **Common trap:** Treating "model registry" as the inference endpoint. The registry records and approves artifacts; serving infrastructure runs them.
- **Recognition clues:** "We need to know which adapter, prompt, dataset, and eval report produced the model currently in production."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NGC + Nemotron models | NGC distributes model/container assets; Nemotron is a model family choice. |
| AWS | SageMaker Model Registry | Tracks model versions, metadata, lineage, approval status, and deployment paths. |
| Open source | MLflow Model Registry, Hugging Face Hub | Stores model versions, cards, artifacts, and release metadata. |

## Portable concepts

Model selection is not "pick the largest model." Good selection balances:

- Accuracy and reasoning ability.
- Latency and throughput.
- Context length and multimodal needs.
- Tool/function calling ability.
- Safety and policy behavior.
- Cost and deployment constraints.
- License, data-use terms, and compliance.
- Evaluation evidence for the actual task.

The registry exists so these decisions are durable. Without it, teams lose track of which base model, adapter, tokenizer, prompt, dataset, and evaluation report are attached to a production behavior.

## Decision guide

| Requirement | Correct lifecycle owner | Trap |
|---|---|---|
| Compare candidate models | Base Model and Model Registry + Evaluation Harness | Choosing by public leaderboard only |
| Release approved adapter | Model registry | Copying files manually |
| Roll back bad release | Registry plus serving gateway | Rebuilding from memory |
| Serve live traffic | Inference Microservice | Calling the registry the endpoint |
| Track compliance evidence | Registry plus governance records | Keeping only final model name |

## High-yield signals

- "Approval status" -> registry.
- "Which model version is live?" -> registry.
- "Model card, lineage, metadata" -> registry.
- "Endpoint latency" -> serving/deployment, not registry.
- "Tool policy" -> guardrails/tool gateway, not registry.

## Chapter notes

The base model and model registry page is the **artifact-governance chapter**. It records which model family, checkpoint, adapter, tokenizer, prompt version, eval report, and approval state belong to a release. A registry does not answer user requests. It makes the answerable question auditable: **what exactly did we deploy, why was it approved, and how do we roll it back?**

```text
base model
  + tokenizer
  + adapter
  + prompt version
  + dataset lineage
  + eval report
  + risk approval
  -> registered release
  -> serving endpoint
```

### Selection scorecard

Do not pick the largest model by habit. A useful model-selection scorecard looks like:

```text
fit_score =
  task_quality
+ tool_calling_fit
+ context_fit
+ safety_fit
+ latency_fit
+ cost_fit
+ license_fit
+ deployment_fit
```

The weights depend on the product. A realtime assistant may weight latency and cost heavily. A regulated advisory assistant may weight safety, groundedness, license, and audit evidence more heavily.

### Registry metadata that matters

| Field | Why it matters |
|---|---|
| Base model | explains inherited capability and limits |
| Adapter/checkpoint | identifies changed behavior |
| Tokenizer | prevents incompatible serving/customization |
| Dataset lineage | supports reproducibility and contamination checks |
| Eval report | justifies approval |
| Risk approval | ties release to governance |
| Rollback target | makes incidents recoverable |

### Scenario drill

A production agent regressed after a "small model update," but no one knows whether the base model, LoRA adapter, prompt, tokenizer, or retriever changed. The missing layer is registry discipline. The fix is not only better monitoring; it is release metadata that binds each endpoint version to model artifacts, prompts, evals, approvals, and rollback targets.

## Hands-on checks

1. For one model release, list base model, adapter, tokenizer, prompt version, dataset, eval report, approval owner, endpoint, and rollback version.
2. Explain the difference between a model family, model artifact, model registry, and inference endpoint.

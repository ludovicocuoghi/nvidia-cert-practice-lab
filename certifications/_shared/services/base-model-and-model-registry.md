---
service: Base Model and Model Registry
relevant_to: [AAI-GEN]
status: populated
---

# Base Model and Model Registry

## At a glance

| | |
|---|---|
| **What it is technically** | The catalog and governance layer for base models, tuned adapters, versions, approvals, metadata, lineage, and rollback |
| **How you access it** | Model catalogs, registries, artifact stores, model hubs, CI/CD release gates, and approval workflows |
| **Input** | Base model, adapter, tokenizer, prompt version, eval report, dataset lineage, risk approval, deployment target |
| **Output** | Versioned and approved model artifact ready for customization, evaluation, or deployment |
| **Inside** | Model cards, lineage, semantic versions, approval states, reproducibility metadata, release aliases, rollback links |

**Mental model**: the inventory and approval desk for "which model are we allowed to use, why, and how do we roll it back?"

## Study card data

- **What it is:** A vendor-neutral layer for choosing, tracking, approving, and releasing model artifacts.
- **Lifecycle:** Model selection
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions model choice, versioning, approval status, lineage, rollback, model cards, or artifact governance.
- **Do not use it when:** The task is serving tokens, orchestrating tools, retrieving knowledge, or runtime safety enforcement.
- **Common trap:** Treating "model registry" as the inference endpoint. The registry records and approves artifacts; serving infrastructure runs them.
- **Scenario signal:** "We need to know which adapter, prompt, dataset, and eval report produced the model currently in production."

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

## Hands-on checks

1. For one model release, list base model, adapter, tokenizer, prompt version, dataset, eval report, approval owner, endpoint, and rollback version.
2. Explain the difference between a model family, model artifact, model registry, and inference endpoint.

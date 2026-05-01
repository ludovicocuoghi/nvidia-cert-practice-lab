---
domain: Model Selection and Customization
weight: 12
status: populated
---

# Model Selection and Customization

## Concept ownership

This is the vendor-neutral home for choosing models and deciding between prompting, RAG, PEFT/SFT, preference tuning, and registry-based release control. Vendor pages should keep product-specific model catalogs, customization tools, supported runtimes, and deployment paths.

## Study card data

- **What it covers:** How to choose a model and decide whether to prompt, retrieve, tune, or preference-align.
- **Lifecycle:** Model lifecycle
- **Use this section when:** Requirements mention model choice, adapter versions, durable behavior, style, rubric-following, or rollback.
- **Common trap:** Fine-tuning for fast-changing knowledge.
- **Scenario signal:** Use RAG for current policy facts; use customization for durable decision behavior.

### Key ideas

- **Model selection** balances quality, latency, cost, context, modality, tool use, and safety.
- **Model registry** preserves lineage, versions, approvals, and rollback.
- **Prompting** changes task framing.
- **RAG** supplies knowledge at query time.
- **PEFT/SFT** changes durable behavior.
- **Preference tuning** changes response ranking/alignment.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Model catalog | NGC, Nemotron models | SageMaker Model Registry | Hugging Face Hub, MLflow |
| Customization | NeMo Framework, NeMo Customizer | Bedrock customization, SageMaker training | PEFT, TRL, Axolotl |
| Evaluation | NeMo Evaluator | Bedrock Evaluations | OpenAI Evals, DeepEval |

### Decision guide

| Requirement | Choose | Trap |
|---|---|---|
| Fresh/private facts | RAG | Fine-tuning weekly |
| Company tone | Prompt or PEFT/SFT | Retrieval tuning |
| Approved model release | Registry | Manual artifact copy |
| Human preference | Preference tuning | Accuracy metric only |
| Rollback | Registry + gateway | Rebuild from memory |

### Hands-on checks

1. For a model release, list base model, adapter, prompt, dataset, eval report, approval, and endpoint.
2. Write the reason not to tune when RAG is enough.

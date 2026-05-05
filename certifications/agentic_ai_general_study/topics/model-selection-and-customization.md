---
domain: Model Selection and Customization
weight: 12
status: populated
---

# Model Selection and Customization

## What to study first

- **Core idea:** How to choose a model and decide whether to prompt, retrieve, tune, or preference-align.
- **Use it when:** Requirements mention model choice, adapter versions, durable behavior, style, rubric-following, or rollback.
- **Study first:** Dense models: run most parameters for every token
- **MoE models** route tokens to selected experts, so total parameters and active compute are different.
- Embedding models: create vectors for retrieval
- **rerankers** score query-document pairs
- **generation models** write the final answer.
- SFT: teaches the model to imitate curated prompt/response examples.
- PEFT/LoRA: trains small adapter weights while most base weights stay frozen
- **QLoRA** reduces memory during adapter training with low-bit quantization of the frozen base.
- Preference tuning: uses ranked or paired responses to teach which answer is better, often after a baseline prompt or SFT already works.
- **Real trap:** Fine-tuning for fast-changing knowledge.

## Concept ownership

This is the vendor-neutral home for choosing models and deciding between prompting, RAG, PEFT/SFT, preference tuning, and registry-based release control. Vendor pages should keep product-specific model catalogs, customization tools, supported runtimes, and deployment paths.

## Study card data

- **What it covers:** How to choose a model and decide whether to prompt, retrieve, tune, or preference-align.
- **Lifecycle:** Model lifecycle
- **Use this section when:** Requirements mention model choice, adapter versions, durable behavior, style, rubric-following, or rollback.
- **Common trap:** Fine-tuning for fast-changing knowledge.
- **Recognition clues:** Use RAG for current policy facts; use customization for durable decision behavior.

### Key ideas

- **Model selection** balances quality, latency, cost, context, modality, tool use, and safety.
- **Model registry** preserves lineage, versions, approvals, and rollback.
- **Prompting** changes task framing.
- **RAG** supplies knowledge at query time.
- **PEFT/SFT** changes durable behavior.
- **Preference tuning** changes response ranking/alignment.

### Must know

- **Dense models** run most parameters for every token; **MoE models** route tokens to selected experts, so total parameters and active compute are different.
- **Embedding models** create vectors for retrieval; **rerankers** score query-document pairs; **generation models** write the final answer.
- **SFT** teaches the model to imitate curated prompt/response examples.
- **PEFT/LoRA** trains small adapter weights while most base weights stay frozen; **QLoRA** reduces memory during adapter training with low-bit quantization of the frozen base.
- **Preference tuning** uses ranked or paired responses to teach which answer is better, often after a baseline prompt or SFT already works.
- **Precision variants** such as FP16, BF16, FP8, INT8, and INT4 change memory, throughput, and quality risk. They must be evaluated on the target workload.
- **License, data residency, retention, and audit constraints** can decide the model before raw benchmark quality does.

### Code anchor

```python
def customization_choice(req):
    if req.facts_change_often:
        return "rag"
    if req.has_preference_pairs:
        return "preference_tuning"
    if req.has_gold_prompt_response_examples and req.gpu_budget_limited:
        return "lora_or_qlora"
    if req.has_large_raw_domain_corpus:
        return "continued_pretraining"
    return "prompt_baseline"
```

Training losses include next-token cross-entropy for SFT, pairwise/DPO losses for preferences, and contrastive losses for retrievers. Release metrics include task score, safety, regression, latency, cost, and license/hosting fit.

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

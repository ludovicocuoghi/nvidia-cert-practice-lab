---
service: Customization Toolkit
relevant_to: [AAI-GEN]
status: populated
---

# Customization Toolkit

## What to study first

- **Core idea:** The lifecycle role for adapting how a model behaves.
- **Use it when:** The system needs durable style, criteria adherence, domain behavior, tool-use habits, or preference alignment.
- **Choose another path when:** Choose the neighboring capability when the only missing piece is current/private knowledge that should be retrieved.
- **Concrete surface:** Access: Training frameworks, managed customization APIs, adapter jobs, prompt/version pipelines Inside: Prompt contracts, SFT, LoRA/QLoRA, DPO/RLHF-style preference learning, overfitting checks, regression evals I/O: Base model, curated examples, instruction data, preference pairs, domain criteria, eval set -> Prompt template, adapter, tuned model, or preference-aligned release candidate
- **Real trap:** Fine-tuning for facts that change weekly.

## At a glance

| | |
|---|---|
| **What it is technically** | A framework or managed service for adapting model behavior through prompts, SFT, PEFT/LoRA, preference tuning, or alignment workflows |
| **How you access it** | Training frameworks, managed customization APIs, adapter jobs, prompt/version pipelines |
| **Input** | Base model, curated examples, instruction data, preference pairs, domain criteria, eval set |
| **Output** | Prompt template, adapter, tuned model, or preference-aligned release candidate |
| **Inside** | Prompt contracts, SFT, LoRA/QLoRA, DPO/RLHF-style preference learning, overfitting checks, regression evals |

```python
customization_job = {
    "base_model": "approved-base-model",
    "method": "lora",
    "train_file": "sft_train.jsonl",
    "validation_file": "sft_holdout.jsonl",
    "eval_suite": "regression.yaml",
}
```

**Mental model**: the layer that changes durable model behavior, not the layer that supplies fresh facts.

## Study card data

- **What it is:** The lifecycle role for adapting how a model behaves.
- **Lifecycle:** Training and customization
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The system needs durable style, criteria adherence, domain behavior, tool-use habits, or preference alignment.
- **Do not use it when:** Choose the neighboring capability when the only missing piece is current/private knowledge that should be retrieved.
- **Common trap:** Fine-tuning for facts that change weekly.
- **Recognition clues:** "The model must follow our claims triage criteria even when the relevant policy document is retrieved correctly."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Framework / NeMo Customizer | Training recipes and managed PEFT-style customization in NVIDIA workflows. |
| AWS | Amazon Bedrock model customization / SageMaker training | Managed customization or custom training jobs. |
| Open source | PEFT, TRL, Axolotl, Unsloth | Portable SFT, LoRA/QLoRA, DPO, and adapter tooling. |

## Portable concepts

The main decision is **prompt vs RAG vs customization**:

- Prompting changes instruction framing but not weights.
- RAG supplies external facts at query time.
- PEFT/LoRA changes a small adapter for behavior or style.
- Full SFT changes more model behavior but raises cost and forgetting risk.
- Preference tuning teaches ranking or response preferences.

Customization should be measured against held-out tasks and old regression tasks. A tuned model that improves one domain but forgets general instruction following is not a win.

## Decision guide

| Requirement | Better first move | Why |
|---|---|---|
| Need JSON schema compliance | Prompt/structured output, then eval | Cheaper than tuning |
| Need current policy facts | RAG | Facts change |
| Need durable company tone | PEFT/SFT | Behavior pattern |
| Need human preference ranking | Preference tuning | Ranking objective |
| Need better retrieval quality | Retrieval pipeline | Tuning does not fix bad chunks |

## High-yield signals

- "Style/criteria/behavior" -> customization.
- "Fresh facts/citations" -> RAG.
- "Overfitting/catastrophic forgetting" -> customization risk.
- "Adapter" -> PEFT.
- "Preference pairs" -> DPO/RLHF-style path.

## Hands-on checks

1. Write five requirements and classify them as prompt, RAG, PEFT, SFT, or preference tuning.
2. For one tuning job, define train data, holdout eval, regression suite, and rollback criteria.

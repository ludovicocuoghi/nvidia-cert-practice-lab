---
domain: Model Selection and Customization
weight: 12
status: populated
---

# Model Selection and Customization

## Actual implementation / Pattern you use

```yaml
model_release_record:
  task: claims_support_agent
  base_model: approved_reasoning_model
  adapter: null_or_lora_adapter_v2
  prompt_version: claims_prompt_2026_05
  retrieval_index: claims_policy_index_14
  eval_report: eval_claims_regression_42
  serving_endpoint: claims-agent-model-api
  rollback_to: claims-agent-model-api_previous
```

```python
def choose_change(req):
    if req.needs_current_private_facts:
        return "RAG_or_API_tool"
    if req.needs_format_or_tone and examples_are_small:
        return "prompt_or_few_shot"
    if req.needs_durable_behavior and curated_examples_exist:
        return "PEFT_LoRA_or_SFT"
    if req.has_ranked_preference_pairs:
        return "preference_tuning"
    return "select_better_base_model_or_route"
```

| Object | Means | Common confusion |
|---|---|---|
| Model family | The base capability and architecture class | Not the deployed endpoint |
| Catalog/registry artifact | Approved model, adapter, container, metadata, lineage | Not the runtime itself |
| Customization run | Changes durable behavior or preference ranking | Not a way to keep facts fresh |
| Serving endpoint | Callable API for inference | Not the agent workflow |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Evaluation and Tuning | Covers when to fix prompt/schema/retrieval/policy before tuning model weights. |
| Agent Architecture and Design | Covers model role choice: router, planner, tool-use model, generator, embedder, or reranker. |
| Knowledge Integration and Data Handling | Separates fresh facts in RAG from durable behavior in model weights. |
| NVIDIA Platform Implementation | Maps generic model/artifact decisions to Nemotron models, NGC, NIM, and NeMo Customizer when named. |

## What to study first

- **Core idea:** How to choose a model and decide whether to prompt, retrieve, tune, or preference-align.
- **Use it when:** Requirements mention model choice, adapter versions, durable behavior, style, criteria adherence, or rollback.
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
- **Use this section when:** Requirements mention model choice, adapter versions, durable behavior, style, criteria adherence, or rollback.
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

### Deep dive: adaptation boundaries

| Need | First choice | Why |
|---|---|---|
| Fresh company facts | RAG or API tools | Facts change without retraining |
| Repeated output structure | Prompt examples or structured output | Cheaper and easier to roll back |
| Durable domain style | PEFT/LoRA or SFT | Behavior should persist beyond one prompt |
| Better preference ranking | Preference tuning such as DPO-style training | The desired answer is about ranking alternatives |
| Smaller/faster endpoint | Distillation, quantization, routing, or smaller model | The problem is serving cost/latency, not knowledge |
| Tool argument mistakes | Tool schema, examples, validation, orchestration | Fine-tuning may hide a runtime contract bug |

### Model-choice signals

| Scenario clue | Consider |
|---|---|
| Needs tool use and planning | Reasoning/instruction model plus orchestration controls |
| Needs retrieval | Embedding model, reranker, generator, and RAG evals as separate choices |
| Needs low latency | Smaller model, routing, batching, quantization, cache, or optimized endpoint |
| Needs audit and rollback | Registry/catalog record plus endpoint versioning |
| Needs private hosting | Deployment/runtime constraints may outrank leaderboard score |

### Hands-on checks

1. For a model release, list base model, adapter, prompt, dataset, eval report, approval, and endpoint.
2. Write the reason not to tune when RAG is enough.

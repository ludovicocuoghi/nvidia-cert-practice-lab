---
capability: Model Customization Toolkit
status: populated
source_lens: general-study
---

# Model Customization Toolkit

## Actual implementation / How you use it

```yaml
customization_job:
  baseline: prompt_plus_rag_release
  method: lora_or_sft_or_preference_tuning
  data: curated_examples_or_preference_pairs
  holdout: protected_regression_set
  release_gate: compare_against_baseline
```

| Input | Customization decision | Output |
|---|---|---|
| Durable behavior gap plus curated data | Prompt/RAG fix, PEFT/LoRA, SFT, preference tuning, or no-tune | Adapter or tuned checkpoint with eval delta and rollback path |

## What to study first

- **Core idea:** You are building the path for changing an existing model's durable behavior with curated examples: SFT, PEFT/LoRA, QLoRA, preference tuning, alignment, or continued pretraining. Use it when prompting and RAG are not enough.
- **Study first:** Establish a baseline model, prompt, and eval.
- Decide whether the requirement is behavior, style, domain reasoning, or fresh knowledge.
- Curate examples, labels, criteria, tool traces, preference pairs, and validation holdouts.
- Choose method: PEFT/LoRA, full SFT, preference tuning, or continued pretraining.
- Train/tune with adapter and dataset lineage.

## What You Are Building

You are building the path for changing an existing model's durable behavior with curated examples: SFT, PEFT/LoRA, QLoRA, preference tuning, alignment, or continued pretraining. Use it when prompting and RAG are not enough.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Usually not used; full training creates the base model. Customization may happen later as a separate lane. | Not the foundation checkpoint |
| Fine-tune existing model | Main lane: choose PEFT/LoRA/QLoRA/SFT/preference tuning based on data shape, budget, and required behavior change. | Adapter or tuned checkpoint with eval evidence |
| Use existing model/API | Use only if prompt/context does not produce durable behavior. Otherwise avoid unnecessary tuning. | Optional tuned variant |
| Build agent/RAG application | Use when tool-call behavior, criteria following, or response style must stick beyond prompts/RAG. | Adapter trained on curated trajectories or preference data |
| Operate, govern, and improve | Incidents or reviewer labels may become tuning data after curation; eval first, tune only when prompt/RAG/policy fixes are insufficient. | Curated tuning issue and regression proof |

## Pipeline

1. Establish a baseline model, prompt, and eval.
2. Decide whether the requirement is behavior, style, domain reasoning, or fresh knowledge.
3. Curate examples, labels, criteria, tool traces, preference pairs, and validation holdouts.
4. Choose method: PEFT/LoRA, full SFT, preference tuning, or continued pretraining.
5. Train/tune with adapter and dataset lineage.
6. Evaluate against target tasks, regressions, safety, and overfitting.
7. Register adapter/checkpoint with base model and eval evidence.
8. Deploy as an approved endpoint or adapter-backed serving profile.

## Core Concepts

- SFT teaches imitation from prompt/response examples.
- PEFT/LoRA trains small adapter weights while freezing most base weights.
- QLoRA reduces base model memory with low-bit quantization during adapter training.
- LoRA rank controls adapter expressiveness and trainable parameter count; higher rank is not automatically better.
- Target modules matter. Q/V projections are common LoRA targets; adding K/O/MLP layers increases capacity and cost.
- Preference tuning learns from ranked responses or pairs.
- DPO optimizes directly from preference pairs; RLHF/PPO uses a reward model and more training machinery.
- Continued pretraining shifts model distribution with raw domain text.
- Catastrophic forgetting is loss of prior capability after narrow tuning.
- Adapter lineage must record base model, dataset, method, hyperparameters, evals, and safety approval.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "style or criteria must be learned" | SFT or PEFT | RAG-only |
| "fresh policy facts" | RAG | fine-tuning for freshness |
| "limited GPU budget" | LoRA/QLoRA | full fine-tune by default |
| "domain vocabulary weak" | continued pretraining or tokenizer work | only prompt wording |
| "human preference ranking" | preference tuning/RLHF/DPO-style path | SFT labels only |
| "need many customer variants" | adapter-backed serving with base model reuse | separate full fine-tune for every customer |
| "general ability regressed" | data mix, learning rate, rank, holdouts, regression eval | only increasing training steps |
| "tool-call traces need to stick" | SFT/PEFT on curated trajectories plus eval | prompt examples only forever |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Fine-tuning adds current knowledge | It changes weights and becomes stale; RAG handles changing facts. |
| LoRA is always lower quality | It is often enough for task/style adaptation and is much cheaper. |
| QLoRA is inference quantization | QLoRA quantizes the frozen base during adapter training; serving still needs approved deployment profile. |
| Preference tuning replaces SFT | Preference tuning usually follows a capable SFT/prompt baseline and optimizes choice quality. |
| Train data can be reused as eval | Holdouts must be protected. |
| More domain examples always help | Too much narrow data can cause forgetting. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Framework / NeMo Customizer | SFT, PEFT, adapter and customization workflows. |
| NVIDIA | NeMo Evaluator | Regression, safety, and task-quality evidence before adapter approval. |
| Cloud | Bedrock/OpenAI fine-tuning paths | Managed customization APIs. |
| Open source | PEFT, TRL, Axolotl | Adapter and preference tuning workflows. |

## Deep Dive

### Where it sits in the lifecycle

Customization is the **durable behavior change layer** for an existing model. It comes after prompt/RAG baselines and before registry approval and serving.

```text
[Baseline model + eval] -> [Curated examples/preferences] -> [Tune adapter/checkpoint]
        -> [Regression + safety eval] -> [Registry] -> [Adapter-backed endpoint]
```

Use it when the requirement must live in model behavior: company style, criteria following, tool-call trajectories, domain reasoning pattern, or preference alignment.

### Which method is the right answer

| Method | Best fit | Wrong answer when... |
|---|---|---|
| Prompt/context | Model can already do the task | Behavior must be durable across many calls |
| RAG | Facts change or are customer-specific | The issue is output style or reasoning format |
| PEFT/LoRA | Efficient task/style adaptation | The base model lacks the core capability |
| QLoRA | Adapter training with limited memory | You mean production inference quantization |
| Full SFT | Larger behavior shift with labeled examples | Many customer variants need cheap storage |
| Preference tuning/DPO/RLHF | Ranking safer/better answers | You only have single gold responses |
| Continued pretraining | Shift domain language/distribution | You need a narrow JSON/output criteria |

### LoRA and adapter knobs

LoRA adds small trainable matrices while most base weights stay frozen. **Rank** controls adaptation capacity; **alpha** controls scaling; **target modules** decide where adaptation is inserted.

| Knob | Effect | Trap |
|---|---|---|
| Low rank | Cheap, less expressive | May underfit complex behavior |
| High rank | More capacity | Can overfit or regress base behavior |
| Q/V targets | Common efficient default | May be insufficient for deep style changes |
| K/O/MLP targets | More expressive | More cost and regression risk |
| Dataset mix | Preserves general ability | Narrow data can cause forgetting |

### Preference tuning vs SFT

SFT teaches **what the answer should look like**. Preference tuning teaches **which plausible answer is better**. DPO uses preference pairs more directly; RLHF/PPO uses reward-model machinery. The exam clue is ranked responses, policy preference, helpfulness/safety tradeoff, or "choose between two outputs."

### Release and regression discipline

Every adapter or tuned checkpoint needs a release record:

- Base model, adapter version, dataset version, method, hyperparameters.
- Validation, regression, safety, and task-quality results.
- Known regressions, fallback model, and rollback target.
- Serving path: NeMo Customizer/Framework output, NeMo Evaluator evidence, NIM or endpoint profile for deployment.

### Customization term decoder

| Term | What changes | What data looks like |
|---|---|---|
| SFT | Model learns to imitate target responses | Prompt/response examples with clean formats and labels |
| PEFT/LoRA | Small adapter weights are trained while base model stays mostly frozen | Same task examples, usually cheaper and easier to version |
| QLoRA | Adapter training with the frozen base loaded in low-bit form to save memory | Useful when GPU memory is limited; not the same as serving quantization |
| Preference tuning | Model learns which answer is preferred | Pairs or rankings: response A better than response B with reason/criteria |
| DPO | Direct preference optimization from pairs | Preference data without a separate reward-model pipeline |
| Continued pretraining | Base distribution shifts with raw domain text | Large unlabeled domain corpus, not instruction examples |
| Catastrophic forgetting | Prior ability regresses after narrow tuning | General chat, safety, or old tasks fail after update |

The exam usually tells you the data shape. Single gold responses point toward SFT/PEFT. Ranked pairs point toward preference tuning. Raw domain text points toward continued pretraining. Fresh private facts point away from tuning and toward RAG.

### Implementation card: SFT and preference losses

```python
# SFT: imitate gold responses.
outputs = model(input_ids, labels=labels)
loss_sft = outputs.loss  # next-token cross-entropy over target response tokens

# Pairwise preference / DPO intuition.
chosen_logp = sequence_logprob(policy_model, prompt, chosen_response)
rejected_logp = sequence_logprob(policy_model, prompt, rejected_response)
ref_chosen_logp = sequence_logprob(reference_model, prompt, chosen_response)
ref_rejected_logp = sequence_logprob(reference_model, prompt, rejected_response)

policy_margin = chosen_logp - rejected_logp
reference_margin = ref_chosen_logp - ref_rejected_logp
loss_dpo = -log_sigmoid(beta * (policy_margin - reference_margin)).mean()

# Regression eval after tuning.
gate = (
    task_score(adapter_model) >= baseline_score + 0.03
    and safety_score(adapter_model) >= baseline_safety - 0.01
    and general_regression_score(adapter_model) >= 0.98 * baseline_general
)
```

Customization training minimizes losses such as cross-entropy or preference loss. Customization release gates use metrics: task win rate, exact/schema validity, safety pass rate, refusal quality, latency, cost, and regression on prior capabilities.

## Exam Signals

- "durable behavior" -> customization.
- "LoRA/PEFT/adapters" -> efficient tuning.
- "preference pairs" -> preference tuning.
- "LoRA rank/alpha/target modules" -> adapter capacity and tuning hyperparameters.
- "QLoRA" -> memory-efficient adapter training, not a magic quality guarantee.
- "DPO/RLHF" -> preference optimization after baseline behavior exists.
- "fresh facts" -> RAG, not tuning.
- "forgetting general chat" -> data mix/regression issue.

## Hands-on Checks

1. Classify requirements as prompt, RAG, PEFT, SFT, preference tuning, or continued pretraining.
2. Design a tuning dataset with training, validation, test, and regression examples.
3. Write the lineage fields for an adapter release.

---
domain: Fine-Tuning
weight: 13
status: populated
---

# Fine-Tuning

## Certification boundary

This page is the NCP-GENL exam lens for fine-tuning. Keep SFT, PEFT, LoRA/QLoRA, adapters, hyperparameters, catastrophic forgetting, and preference-tuning concepts here because they are core LLM certification knowledge. Agentic model-selection comparisons belong in Agentic AI General Study; NVIDIA NeMo Framework and NeMo Customizer cues stay here or in shared service pages.

## Core ideas you must hold in your head

- **Fine-tuning** is about adaptation, not from-scratch learning. The model already understands language. **Fine-tuning** adapts it to a specific domain, task, or style. Pre-training vs **fine-tuning** is a fundamental distinction.
- **Full fine-tuning** is expensive and rarely the answer. **PEFT** methods — especially **LoRA** — dominate the exam. Knowing when to use **LoRA** vs **QLoRA** vs full **fine-tuning** is a core judgment tested repeatedly.
- **Catastrophic forgetting** is the central risk of **fine-tuning**. The model loses general capabilities as it specializes. The exam tests mitigation strategies: **learning rate** schedules, mixed-data training, and regularization.
- **Hyperparameters** are the difference between success and failure. **Learning rate**, batch size, warmup steps, weight decay, dropout rate, **LoRA** **rank**/alpha — the exam expects you to know what each does and how to detect misconfiguration.
- **RLHF** adds a preference layer on top of **SFT**. Supervised **Fine-Tuning** teaches WHAT to say; **RLHF** teaches WHAT IS PREFERRED. They serve different purposes and are often combined.

## Mental model

**Fine-tuning** sits after **pre-training** and before **deployment**:

```
Pre-trained Base Model (knows language, general facts)
        ↓
[Supervised Fine-Tuning] ─── teaches domain/task behavior
        ↓
[RLHF / DPO] ─── teaches preferences, safety, style
        ↓
[Evaluation] ─── measures task performance + retains general capability
        ↓
Deployable Fine-Tuned Model
```

## Full fine-tuning vs PEFT

| Method | What's updated | Memory | Risk | When right |
| ------ | -------------- | ------ | ---- | ---------- |
| **Full fine-tuning** | All parameters | Highest (12-20× model weights) | High **catastrophic forgetting** | Large domain shift, unlimited budget |
| **LoRA** | Low-**rank** **adapters** (typically <1% of params) | Low (adapter weights only) | Low **catastrophic forgetting** | Most practical use cases |
| **QLoRA** | **LoRA** + 4-bit **quantization** of base model | Lowest (fits on single consumer **GPU**) | Moderate (**quantization** loss) | Resource-constrained, 7B+ models |
| **Prompt tuning** | Soft prompt **embeddings** only | Tiny (<0.01% params) | Lowest | Multi-task **serving**, minimal adaptation |
| **Adapter layers** | Small bottleneck layers between **transformer** blocks | Low (~3-8% of params) | Moderate | Before **LoRA** became standard |

**Exam signal**: **LoRA** is the default answer for "how do I fine-tune this model efficiently?" **QLoRA** is the answer when "I only have one **GPU**."

## LoRA deep dive

**LoRA** (Low-**Rank** Adaptation) injects trainable low-**rank** matrices into **attention** layers:

```
W' = W + ΔW  where ΔW = B × A
                         (d×r) (r×k)
```

- **Rank (r)**: Dimensionality of the low-**rank** decomposition. Typical range: r=4 to r=64. Higher **rank** = more expressivity but more parameters.
- **Alpha (α)**: Scaling factor for the **LoRA** update. The effective update is `(α/r) × BA`. Higher alpha = stronger adaptation.
- **Target modules**: Typically Q and V projections (`q_proj`, `v_proj`). Adding K and O projections increases parameters.
- **LoRA dropout**: Optional regularization on the adapter.

**When to increase rank**: Task is underfitting (high training loss, low accuracy). More complex tasks need more adapter capacity.

**When to decrease rank**: **Overfitting** (low training loss, high validation loss). Simpler tasks with abundant data.

### QLoRA

Adds 4-bit NormalFloat **quantization** of the FROZEN base model + **LoRA** **adapters** in **FP16**:
- Fits a 65B model on a single 48GB **GPU**
- Double **quantization** reduces memory further
- Paged optimizers handle memory spikes

## Hyperparameter mastery

### Learning rate

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| Loss oscillates wildly | LR too high | Reduce LR, increase warmup |
| Loss decreases very slowly | LR too low | Increase LR |
| Loss plateaus early | LR too high initially, then decayed too fast | Cosine schedule, lower peak LR |
| Validation loss diverges from training | **Overfitting** (not LR-specific) | Increase dropout, weight decay, reduce model capacity |

**Typical fine-tuning LR range**: 1e-5 to 5e-5 for full FT; 1e-4 to 5e-4 for **LoRA**. **LoRA** can use higher LR because only **adapters** are updated.

### Optimizer: Adam vs AdamW vs SGD

| Optimizer | Key feature | Exam signal |
| --------- | ----------- | ----------- |
| **Adam** | Adaptive per-parameter LR; momentum + RMS | Standard for **Transformer** training |
| **AdamW** | Adam + decoupled weight decay | Correct modern choice; weight decay not coupled to LR |
| **SGD with momentum** | Simpler, more generalizable for some vision tasks | Rarely right for LLM **fine-tuning** |

**Adam vs AdamW exam distinction**: In Adam, weight decay is coupled to the **learning rate** (implemented via L2 regularization on the loss). In AdamW, weight decay is decoupled and applied directly to weights. AdamW is the standard for modern Transformers.

### Other critical hyperparameters

| Parameter | Typical range | What it does | Symptom when wrong |
| --------- | ------------- | ------------ | ------------------ |
| **Batch size** | 16-128 (effective via gradient accumulation) | Controls gradient noise and **throughput** | Too small: unstable gradients; too large: poor generalization |
| **Gradient accumulation** | Accumulate over N micro-batches | Simulates larger batch without memory cost | — |
| **Warmup steps** | 5-15% of total steps | Gradual LR increase prevents early instability | No warmup: early training instability/divergence |
| **Weight decay** | 0.01-0.1 | L2 regularization on weights | Too low: **overfitting**; too high: underfitting |
| **Dropout** | 0.05-0.2 | Randomly drops activations during training | Too high: underfitting; too low: **overfitting** |
| **Max sequence length** | Task-dependent | Truncates longer inputs | Too short: loses context; too long: wastes memory |

## Overfitting vs Underfitting diagnosis

| Indicator | **Overfitting** | Underfitting |
| --------- | ----------- | ------------ |
| **Training loss** | Very low, still decreasing | High, not decreasing (or decreasing very slowly) |
| **Validation loss** | Increasing (diverging from training) | High, similar to training loss |
| **Training acc** | Near 100% | Low |
| **Validation acc** | Much lower than training | Low, close to training |
| **Fix** | More dropout/weight decay, less data, early stopping | More data, higher LR, more model capacity, more epochs |

## Training dynamics and schedules

### Learning rate schedules

- **Cosine annealing**: Smoothly decays LR following cosine curve. Standard for LLM **fine-tuning**.
- **Cosine with warm restarts (SGDR)**: Periodic LR resets. Can improve generalization; less common for LLMs.
- **Linear decay**: Simpler alternative to cosine. Used when cosine is unavailable.
- **Constant with decay on plateau**: Old-school approach; not standard for Transformers.

### Convergence signals

- **Loss curve flattens** → model has converged; further training unlikely to help
- **Validation loss starts increasing** → STOP; model is **overfitting**
- **Loss oscillates around a value** → converged at that LR; may benefit from LR decay
- **Early stopping patience**: Stop after N epochs without validation improvement. Typical patience: 3-5 epochs.

### Stochastic Weight Averaging (SWA)

Averages model weights from multiple checkpoints near convergence. Smoother loss landscape → better generalization. Applied after training converges, not during early training.

## RLHF and preference tuning

| Stage | What it does | Output |
| ----- | ------------ | ------ |
| **SFT** | Fine-tune on demonstration data | Model that follows instructions |
| **Reward Model Training** | Train a model to predict human preferences between pairs of responses | Scalar reward predictor |
| **RL (PPO)** | Use reward model to fine-tune **SFT** model via reinforcement learning | Policy that maximizes reward |
| **DPO (alternative)** | Direct Preference Optimization: bypass reward model; optimize from preferences directly | Policy model without separate reward model |

**Exam signal**: **SFT** teaches capability; **RLHF** teaches preference. **RLHF** is about what humans prefer, not what is factually correct.

## Catastrophic forgetting

When **fine-tuning** overwrites general pre-trained knowledge:

**Mitigations**:
- **Mix pre-training data with fine-tuning data** (e.g., 5-10% generic data)
- **Lower learning rate** for **fine-tuning**
- **Regularization** (weight decay, dropout, KL penalty toward base model)
- **LoRA over full fine-tuning** (**adapters** are inherently less destructive)
- **Elastic Weight Consolidation (EWC)**: Penalize changes to important weights

**Exam signal**: The question will describe a model that "performs well on the target task but poorly on general benchmarks after **fine-tuning**." The answer involves mixing training data, reducing LR, or using **LoRA**.

## Data considerations for fine-tuning

- **Quality > Quantity**: 1,000 high-quality, diverse **examples** beat 10,000 noisy ones
- **Class imbalance**: Overrepresented classes dominate training. Mitigate with weighted loss or oversampling.
- **Noisy labels**: Wrong labels degrade performance more than missing labels. Clean data is the highest-ROI investment.
- **Data contamination**: Ensure **evaluation** data didn't leak into training data. Critical for fair benchmarking.
- **Deduplication**: Remove duplicate and near-duplicate **examples**; they **bias** the model and waste compute.
- **Data augmentation**: Synthetic variations of training **examples**; helpful when real data is scarce.

## Common exam traps

1. **PEFT over full fine-tuning** — **LoRA** achieves comparable results at a fraction of the cost. The exam prefers **PEFT** for practical scenarios.

2. **LoRA rank** — Excessive **rank** causes **overfitting**. Match **rank** to task complexity.

3. **AdamW vs Adam** — AdamW's decoupled weight decay is superior for modern Transformers. Using plain Adam is outdated.

4. **Optimizer choice** — Adam/AdamW is standard for Transformers. SGD is occasionally correct for specific vision models.

5. **Convergence detection** — A flat validation loss means the model has converged. Training longer risks **overfitting** without benefit.

6. **LR schedule selection** — Cosine is standard for LLMs, but the exam may test awareness that other schedules exist for specific cases.

7. **RLHF and factuality** — **RLHF** makes the model align with human preferences, which may or may not correlate with factual accuracy. It can even introduce hallucinations that humans find convincing.

8. **Fine-tuning limitations** — Some capabilities are determined by pre-training scale and architecture. **Fine-tuning** can only adapt, not fundamentally add new capabilities.

## Must-know exam bullets

- **LoRA** — train low-**rank** **adapters** (B×A), freeze base; <1% of parameters trainable
- **QLoRA** — **LoRA** + 4-bit NormalFloat **quantization**; fits 65B on single 48GB **GPU**
- **AdamW** — decouples weight decay from LR; correct optimizer for modern **Transformer** **fine-tuning**
- **LoRA LR** — typical 1e-4 to 5e-4; full FT LR: 1e-5 to 5e-5; **LoRA** tolerates higher LR
- **Cosine annealing** — standard LR schedule; smooth decay from peak to near-**zero**
- **Warmup steps** — prevent early instability; 5-15% of total steps
- **Validation loss** — increasing = **overfitting** → early stop
- **Underfitting diagnosis** — training + val loss both high and flat → increase LR, more epochs, more capacity
- **Catastrophic forgetting fix** — mix 5-10% pre-training data, lower LR, use **LoRA**
- **RLHF pipeline** — **SFT** → Reward Model → PPO; **SFT** teaches what to say; **RLHF** teaches what's preferred
- **DPO** — optimize directly from preferences, no separate reward model
- **Gradient accumulation** — simulates larger batch; accumulate gradients over N micro-batches before updating
- **SWA** — averages weights near convergence; smoother loss landscape, better generalization
- **Data quality** — > data quantity; 1K clean **examples** > 10K noisy ones

## Hands-on checks

1. You fine-tune a LLaMA model with **LoRA** (r=8, alpha=16). Training loss drops to 0.2 but validation loss rises to 2.5. What's happening and how do you fix it?
2. When would you choose **QLoRA** over **LoRA**? What's the tradeoff?
3. Loss is oscillating wildly in the first 100 steps. Is this a **learning rate** or warmup issue? How do you diagnose?
4. After **fine-tuning** on medical texts, your model's general reasoning has degraded. What three mitigations can you apply?
5. You're comparing AdamW vs Adam for **fine-tuning**. What's the practical difference in how weight decay is applied?

## Key terms to memorize

- **LoRA (Low-Rank Adaptation)** — trainable low-**rank** matrices B×A added to frozen weights; r=**rank**, α=scaling
- **QLoRA** — **LoRA** + 4-bit NormalFloat **quantization** of frozen base model
- **PEFT (Parameter-Efficient Fine-Tuning)** — umbrella term for **LoRA**, **adapters**, **prompt tuning**
- **SFT (Supervised Fine-Tuning)** — fine-tune on labeled demonstration data (input → target output)
- **RLHF (Reinforcement Learning from Human Feedback)** — **SFT** → reward model → PPO; aligns with preferences
- **DPO (Direct Preference Optimization)** — bypasses reward model; optimizes from preference pairs directly
- **Catastrophic forgetting** — loss of general capabilities after task-specific **fine-tuning**
- **AdamW** — Adam with decoupled weight decay; standard for **Transformer** **fine-tuning**
- **Cosine annealing** — smooth LR decay following cosine curve; standard schedule
- **Warmup** — gradual LR increase at training start; prevents early instability
- **Gradient accumulation** — accumulate N micro-batches before weight update; simulates larger batch
- **Weight decay** — L2 regularization; decoupled from LR in AdamW
- **Early stopping** — stop when validation loss doesn't improve for N epochs
- **SWA (Stochastic Weight Averaging)** — average checkpoints near convergence for better generalization
- **Dropout** — randomly drop activations during training; regularization against **overfitting**
- **Overfitting** — low training loss, high/increasing validation loss
- **Underfitting** — both training and validation loss remain high
- **Data augmentation** — synthetic variations of training **examples**; helps when data is scarce

### Top exam traps
- "Full **fine-tuning** is always best" → **LoRA** achieves comparable results at fraction of cost
- "Higher **LoRA** **rank** = always better" → excessive **rank** causes **overfitting**
- "Adam = AdamW" → AdamW has decoupled weight decay; correct modern choice
- "SGD for LLMs" → Adam/AdamW is standard; SGD is rare for Transformers
- "Flat validation loss → train longer" → model has converged; further training wastes compute
- "**RLHF** improves factual accuracy" → **RLHF** aligns with preferences, not facts
- "**Fine-tuning** fixes everything" → some capabilities depend on pre-training scale

## Mock signals

Across the mock exams, **fine-tuning** questions repeatedly test these durable ideas:

- **Adaptation level**: full **fine-tuning**, **LoRA**, **QLoRA**, **prompt tuning**, and **RLHF** solve different problems.
- **LoRA limitations**: **rank**, **target modules**, dataset size, and **overfitting** risk determine whether **PEFT** works.
- **Training dynamics**: **learning rate**, warmup, batch size, gradient accumulation, clipping, checkpointing, and early stopping are core knobs.
- **Optimizer distinctions**: AdamW decouples weight decay; SGD is rarely the default for **Transformer** **fine-tuning**.
- **Validation discipline**: watch training/validation loss gaps, oscillation, convergence, and underfitting symptoms.
- **Data quality**: **deduplication**, class balance, noisy labels, and task-specific eval decide whether **fine-tuning** helps.

Evidence source: `mock_1` through `mock_5`, especially **LoRA**/**QLoRA**, **RLHF**, optimizer choice, training schedules, validation, **overfitting**, checkpointing, and data-quality questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 13%
- **What it covers:** Customize model behavior with **SFT**, **PEFT**, **LoRA**/**QLoRA**, **adapters**, **DPO**/**RLHF**, and tuning controls.
- **Use this section when:** Study this when **examples**, domain behavior, style, or **preference data** are central.
- **Common trap:** **Fine-tuning** is not the right solution for rapidly changing facts; use **RAG**.
- **Scenario signal:** A legal assistant improves domain tone but loses general instruction-following after narrow **SFT**.

### Study notes

- **The fine-tuning decision tree (exam framework)**:
  1. Does the task need NEW KNOWLEDGE (facts, vocabulary, domain concepts)? → Continued pre-training (CPT) using LM objective on domain corpus. Needs billions of tokens, significant compute.
  2. Does the task need NEW BEHAVIOR (format, style, instruction following)? → **SFT** on 1K-100K instruction **examples**. Teaches HOW to respond, not new facts.
  3. Does the task need PREFERENCE **ALIGNMENT** (**safety**, helpfulness, style preference)? → **RLHF**/**DPO** on human preference pairs. Teaches WHAT is preferred.
  4. Does the task need QUICK ADAPTATION with limited compute? → **PEFT** (**LoRA**/**QLoRA**) — trains <1% of parameters.
  5. Does the knowledge CHANGE FREQUENTLY? → Don't fine-tune. Use **RAG**. **Fine-tuning** bakes in stale knowledge.

- **SFT data quality rules**:
  - 500-1000 carefully curated **examples** can outperform 50K noisy ones (LIMA paper finding)
  - Each example: **system prompt** + user message + assistant response
  - Diversity matters more than volume: cover edge cases, different phrasings, failure modes
  - "Style vs knowledge": **SFT** teaches format/style/behavior, not new facts. If the model doesn't know something, **SFT** won't teach it — CPT will.
  - **Synthetic data** risk: generated **examples** may contain confidently wrong answers that propagate during training → validate with independent verifier

- **LoRA mechanics (must understand for the exam)**:
  - Freezes original weight matrix W. Adds low-**rank** decomposition: h = Wx + (α/r) × BAx
  - B ∈ ℝᵈˣʳ, A ∈ ℝʳˣᵏ, r << min(d,k). Typically r=8-64.
  - α (alpha) scales the update: effective update = (α/r) × BA. Doubling α at fixed r doubles the adapter's influence.
  - **Target modules**: Typically Q and V projections in **attention**. Some recipes also target K, O, and FFN layers for more expressiveness.
  - Memory: **LoRA** on 70B with r=16 → ~40MB **adapters** vs ~140GB for full model. **QLoRA** (4-bit base + **BF16** **adapters**) fits 70B **fine-tuning** on a single 48GB **GPU**.
  - Merging: **LoRA** **adapters** CAN be merged into base weights for inference (W_merged = W + (α/r)BA). This means no inference overhead. Multiple **adapters** can be swapped on the same base model.
  - Failure mode: Cross-task interference when merging **adapters** from different tasks. Use TIES/DARE merging methods to reduce interference.

- **Catastrophic forgetting — detect and mitigate**:
  - Detection: General benchmarks (MMLU, GSM8K) drop after domain **fine-tuning**
  - Mitigation 1: Mix 10-30% general data into **fine-tuning** dataset
  - Mitigation 2: Lower **learning rate** (1e-5 vs 1e-4 for full FT)
  - Mitigation 3: Use **LoRA** instead of full FT (frozen base weights limit forgetting)
  - Mitigation 4: Multi-stage training with data replay from earlier stages
  - Mitigation 5: Monitor general benchmarks DURING **fine-tuning**, not just after

- **RLHF pipeline (exam must-know)**:
  - Stage 1: **SFT** on high-quality instruction data → teaches format and basic behavior
  - Stage 2: Train reward model on human preference pairs (prompt, chosen, rejected). Reward model learns to predict which response humans prefer.
  - Stage 3: PPO optimizes the **SFT** policy against the reward model. KL penalty keeps policy from drifting too far from **SFT** reference (prevents reward hacking).
  - **DPO** alternative: Train directly on preference pairs without a separate reward model. Simpler, more stable, but requires high-quality **preference data**. Loss = -log σ(β(log πθ(chosen)/πref(chosen) - log πθ(rejected)/πref(rejected)))

### Must know

- **SFT (Supervised Fine-Tuning)**: Full weight update on labeled instruction-response pairs. Teaches WHAT to say. Needs full model per task. High quality 1K-100K **examples**. Risk: **catastrophic forgetting**.
- **LoRA (Low-Rank Adaptation)**: Freezes base weights, trains low-**rank** **adapters** (B×A matrices). **Rank** r=8-64, alpha=16-128. Effective update = (α/r)BA. Adapts <1% of params. Can be merged into weights for **zero** inference overhead.
- **QLoRA**: **LoRA** + 4-bit base model **quantization** (NF4 format). Double **quantization** of scaling factors. Paged optimizers for memory spikes. Fits 70B **fine-tuning** on single 48GB **GPU** with minimal accuracy loss vs **FP16** **LoRA**.
- **Rank/alpha**: **rank** r = capacity of adaptation (higher = more expressive). alpha = scaling factor (effective strength = α/r). At fixed r, doubling α doubles adapter influence. At fixed ratio, higher r+α gives more capacity at same strength.
- **DPO (Direct Preference Optimization)**: Trains on (prompt, chosen, rejected) triples without reward model. More stable than PPO, simpler to implement. The loss function directly optimizes preference probability via implicit reward.
- **RLHF (Reinforcement Learning from Human Feedback)**: Three-stage: **SFT** → reward model training → PPO optimization. KL penalty prevents **drift** from **SFT** reference. More expressive than **DPO** but more complex and less stable.
- **Catastrophic forgetting**: Model loses general capabilities after domain-specific **fine-tuning**. Mitigate with **data mixing** (10-30% general), **LoRA** (frozen base), lower LR, multi-stage training with data replay.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Rapidly changing facts | **RAG** or external retrieval | Fine-tuning facts that will become stale |
| Format, style, or task behavior | **SFT** on high-quality instruction-response pairs | Expecting SFT to teach large amounts of new knowledge |
| Limited GPU memory | **LoRA** or **QLoRA** | Full fine-tuning a model that cannot fit |
| 4-bit base model with trainable adapters | **QLoRA** | Calling it ordinary quantized inference |
| Pairwise human preferences | **DPO** or **RLHF** | Treating preference pairs as SFT labels |
| PPO instability or limited RL expertise | **DPO** on clean chosen/rejected pairs | Building reward model + PPO by default |
| Validation loss rises while train loss falls | Overfitting; early stop, lower LR, add data, regularize | Training for more epochs |
| General benchmarks drop after domain tuning | **Catastrophic forgetting**; mix general data or use PEFT | Narrowing the domain mix further |
| LoRA underfits at low rank | Increase **rank** or target more modules after validation evidence | Increasing context length or batch size |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **SFT** vs **PEFT** | SFT describes supervised instruction training; PEFT describes training a small parameter subset such as LoRA adapters. |
| **LoRA** vs **QLoRA** | LoRA freezes the base and trains low-rank adapters; QLoRA also quantizes the base model to 4-bit during tuning. |
| **DPO** vs **RLHF** | DPO trains directly on preference pairs; RLHF usually trains a reward model then optimizes with PPO and a KL penalty. |
| **Fine-tuning** vs **RAG** | Fine-tuning changes behavior or style; RAG supplies fresh or private facts at query time. |
| **Rank** vs alpha | Rank controls adapter capacity; alpha scales the adapter update strength. |
| **Overfitting** vs catastrophic forgetting | Overfitting is train/validation divergence; forgetting is loss of general capabilities after specialization. |
| Merged adapters vs live adapters | Merging removes inference overhead but can create cross-task interference when adapters are combined naively. |

### Mini scenario drill

1. Scenario: A legal assistant must use a strict response format, but legal rules change weekly.
   Best answer pattern: Use **RAG** for changing legal facts and **SFT/LoRA** only for stable format and behavior.
   Trap: Fine-tuning weekly facts into model weights.

2. Scenario: A 70B model must be tuned on one 48GB GPU.
   Best answer pattern: Choose **QLoRA** with a 4-bit base and BF16 adapters.
   Trap: Full fine-tuning or standard LoRA on an FP16 base.

3. Scenario: You have 50K chosen/rejected response pairs and want stable alignment.
   Best answer pattern: Use **DPO** if you want simpler preference optimization without PPO reward-model complexity.
   Trap: Converting the chosen answers into ordinary SFT examples and discarding preference information.

### High-yield exam signals

- **Preference data**: Human pairwise comparisons (chosen vs rejected) → **RLHF** or **DPO**. Not **SFT** (which uses instruction-response pairs).
- **Domain style**: Model needs to sound like a lawyer/doctor → **SFT** on domain **examples**. Teaches style/format, not new facts.
- **Adapter**: Small trainable module (**LoRA**, prefix, bottleneck) → **PEFT**. The answer when compute/memory is constrained or multi-task **serving** is needed.
- **Overfitting**: Training loss drops but validation loss rises → too many epochs, too high LR, insufficient data diversity. Solution: early stopping, more data, regularization.
- **Behavior change without weight update**: Prompt/**RAG**. Behavior change that persists across sessions: **fine-tuning**.

### Hands-on checks

1. **Decision drill**: "A legal model needs to understand contract clauses (new domain vocabulary) AND answer in a specific format." → CPT for vocabulary + **SFT** for format. Two-stage: CPT on legal corpus (LM objective), then **SFT** on instruction-response pairs. CPT teaches the words/concepts; **SFT** teaches how to use them.
2. **LoRA config**: "70B model, 200K **examples**, single A100 80GB. Choose full FT vs **LoRA** vs **QLoRA**." → **QLoRA**: full FT needs ~560 GB (can't fit), **LoRA** needs ~140 GB (can't fit one **GPU**), **QLoRA** fits on ~48 GB. Use r=16-64, alpha=32-128, target Q+V projections.
3. **Overfitting diagnosis**: "Training accuracy 95%, validation accuracy 72%, large gap." → Classic **overfitting**. Reduce epochs, add dropout, reduce LR, check train/val data distribution **alignment**.
4. **RLHF vs DPO choice**: "Team has 50K human preference pairs but no ML expertise for PPO tuning." → Use **DPO**. Direct optimization on preference pairs, no reward model training, no PPO complexity. **DPO** is the pragmatic choice when you have clean **preference data**.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when **examples**, domain behavior, style, or **preference data** are central.
- The major trap pattern is: **Fine-tuning** is not the right solution for rapidly changing facts; use **RAG**.
- Recurring local question themes follow the key ideas: **SFT**, **PEFT**, **LoRA**/**QLoRA**, **DPO**/**RLHF**, **catastrophic forgetting**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q24** / `ft-001`: You fine-tune Llama-3.1-8B on a 50k-example domain dataset with full FT. The model's general benchmarks (MMLU, GSM8K) drop noticeably. What is happening and what is th... Correct idea: **Catastrophic forgetting**; mitigations include mixing in general data during FT, lowering LR, freezing layers, or switching to Lo....
- **mock_1 Q25** / `ft-002`: For a 70B model with 200k high-quality instruction **examples**, when is full **fine-tuning** genuinely worth the cost over **LoRA**? Correct idea: When you need substantial behavioral shift across many tasks and have compute budget; **LoRA**'s low-**rank** update cannot fully resha....
- **mock_1 Q26** / `ft-003`: Choosing **LoRA** **rank**: which observation justifies increasing **rank** from 8 to 32? Correct idea: Training loss plateaus well above the loss reached by full FT and validation accuracy is also stuck.
- **mock_1 Q27** / `ft-004`: **QLoRA** quantizes the base model to 4-bit (NF4) and trains **LoRA** **adapters** in **BF16**. The main practical benefit is: Correct idea: Fitting **fine-tuning** of larger base models into a single **GPU** with minimal accuracy loss vs **LoRA** on **FP16** base.
- **mock_1 Q28** / `ft-005`: In **RLHF** with PPO, the KL-divergence penalty between the policy and the reference model serves what purpose? Correct idea: Prevents the policy from drifting too far from the **SFT** reference, suppressing reward-hacking behaviors that satisfy the reward....
- **mock_1 Q29** / `ft-006`: Group Relative Policy Optimization (**GRPO**) differs from standard PPO most fundamentally in: Correct idea: Removing the value (critic) network and computing advantages from a group of sampled responses' relative rewards.
- **mock_1 Q30** / `ft-007`: **DPO** trains directly on preference pairs without an explicit reward model. The dataset format requirement is: Correct idea: (prompt, chosen response, rejected response) triples.
- **ft-008** / `ft-008`: A team's instruction-tuned model becomes overconfidently wrong after **SFT** on 500k synthetic **examples**. What is the most likely data-side issue? Correct idea: **Synthetic data** quality — patterns that confidently assert wrong answers in the synthetic distribution propagate during **SFT**.
- **ft-009** / `ft-009`: When merging multiple **LoRA** **adapters** into a single model for **serving**, what is a known failure mode? Correct idea: Cross-task interference — naive averaging of **adapters** can degrade each task's performance unless merging method (TIES, DARE, we....
- **ft-010** / `ft-010`: Which scenario most strongly justifies continued pre-training over **SFT**? Correct idea: Adapting the model to a domain with different vocabulary and writing distribution (e.g., legal contracts, biomedical literature....
- **ft-011** / `ft-011`: **LoRA** α (alpha) and **rank** r jointly control: Correct idea: The effective scaling of the low-**rank** update; the update is added as (α/r) · BA, so changing α at fixed r rescales the adapter....
- **ft-012** / `ft-012`: A reward model trained on preferences is showing reward hacking — high rewards but bad outputs. Which countermeasure addresses the root cause? Correct idea: Improve reward-model coverage with adversarial **preference data** targeting the failure patterns, and increase the KL penalty.
- **ft-013** / `ft-013`: **Catastrophic forgetting** after multi-stage training (pre-train → **SFT** → **RLHF**) is best mitigated by: Correct idea: Mixing small fractions of earlier-stage data into later stages, plus **monitoring** earlier-stage benchmarks during training.
- **mock_2 Q34** / `m1-034`: Multiple answers: What are advantages of **LoRA** compared to full **fine-tuning**? Select two. Correct idea: Multiple task-specific **LoRA** **adapters** can be stored and swapped onto the same base model, enabling efficient multi-task **serving**.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_2 Q35** / `m1-035`: Multiple answers: Which of the following accurately describe **PEFT**? Select two. Correct idea: **PEFT** methods reduce the risk of **catastrophic forgetting** compared to full **fine-tuning** because the majority of pretrained weights.... Trap: **PEFT** (Parameter-Efficient **Fine-Tuning**) methods adapt pretrained models to new tasks by updating only a small subset o...
- **mock_2 Q36** / `m1-036`: When should you use full **fine-tuning** instead of **PEFT** techniques like **LoRA**? Correct idea: When you have substantial compute resources, large high-quality datasets, and need maximum task-specific performance. Trap: This overgeneralizes — the approach does not apply universally across all scenarios as the option claims.
- **mock_2 Q42** / `m1-042`: Multiple answers: Which of the following accurately describe the purpose and benefits of instruction tuning in LLM development? Select two. Correct idea: Instruction-tuned models generalize to new, unseen instructions by learning the general pattern of following natural language d.... Trap: Instruction tuning trains models to follow diverse natural language instructions, not to generate instruction manuals...
- **mock_3 Q10** / `m2-010`: Multiple answers: What is **LoRA** and why is it preferred for **fine-tuning** large language models? Select two. Correct idea: **LoRA** enables maintaining multiple task-specific **adapters** that share the same base model, allowing efficient multi-task **serving**.... Trap: This understates meaningful differences or dismisses an important aspect that is well-established in practice.
- **mock_3 Q11** / `m2-011`: What is the significance of the **LoRA** **rank** hyperparameter when **fine-tuning** an LLM? Correct idea: The **rank** determines the expressiveness of the adaptation, with higher ranks providing more capacity but requiring more paramete.... Trap: This confuses the **LoRA** **rank** with the sequence length capacity. The **rank** r controls the dimension of the low-**rank** matr...
- **mock_3 Q12** / `m2-012`: What is **QLoRA** and how does it differ from standard **LoRA**? Correct idea: **QLoRA** combines **LoRA** with 4-bit **quantization** of the base model, enabling **fine-tuning** of large models on consumer GPUs with minim.... Trap: This describes ensembling or routing between multiple **LoRA** **adapters**, which is a **serving** strategy for multi-adapter sy...
- **mock_3 Q41** / `m2-041`: What is the difference between instruction tuning and task-specific **fine-tuning** for LLMs? Correct idea: Instruction tuning trains on diverse tasks formatted as natural language instructions to improve general instruction-following,.... Trap: This claims instruction tuning uses larger learning rates. The **learning rate** for instruction tuning is typically simi...
- **mock_3 Q43** / `m2-043`: Multiple answers: What is data augmentation for text and how can it improve LLM **fine-tuning**? Select two. Correct idea: Data augmentation creates additional training **examples** by applying transformations like back-translation, synonym replacement,.... Trap: This option describes a valid data augmentation technique (using LLMs to generate paraphrases). However, the question...
- **mock_3 Q48** / `m2-048`: In transfer learning for LLMs, what is the fundamental principle that enables pre-trained models to perform well on downstream tasks? Correct idea: Pre-training on large diverse text corpora enables models to learn general linguistic patterns, semantic relationships, and wor.... Trap: This claims transfer learning requires more labeled data for the downstream task than for pre-training. The key insig...
- **mock_3 Q58** / `m2-058`: What role does **synthetic data** generation play in modern LLM training and **fine-tuning**? Correct idea: **Synthetic data** generation uses existing LLMs to create training **examples** for specific tasks, domains, or formats, enabling data.... Trap: This claims **synthetic data** generation is legally prohibited. While copyright and IP considerations around training da...
- **mock_5 Q10** / `m4-010`: When conducting hyperparameter tuning for **fine-tuning** an LLM, which search strategy provides the best balance between exploration and computational efficiency? Correct idea: Random search with early stopping, or Bayesian optimization methods that model the hyperparameter space and focus on promising.... Trap: Using hyperparameters that worked for a different model and dataset is unlikely to be optimal because optimal hyperpa...
- **mock_5 Q11** / `m4-011`: Multiple answers: What is the purpose of implementing early stopping during LLM **fine-tuning**? Select two. Correct idea: To save computational resources by avoiding unnecessary training epochs that provide no further improvement to the model's gene.... Trap: This statement is correct -- terminating training when validation performance stops improving is a key purpose of ear...
- **mock_5 Q12** / `m4-012`: When validating a fine-tuned LLM for a specific domain task, why is it important to use a held-out **validation set** rather than evaluating only on the training data? Correct idea: To assess the model's ability to generalize to unseen **examples** and detect **overfitting**. Trap: Using a **validation set** does not speed up training -- **evaluation** on held-out data adds computational cost; the purpose...
- **mock_5 Q14** / `m4-014`: When analyzing a dataset for LLM **fine-tuning**, you discover that 70 percent of **examples** belong to one class while the remaining 30 percent are split across three other... Correct idea: This is **class imbalance**, which can cause the model to be biased toward the majority class; it should be addressed through techn.... Trap: Neural networks do not automatically compensate for **class imbalance** -- without intervention, they optimize for overal...
- **mock_5 Q25** / `m4-025`: When working with small datasets for LLM **fine-tuning**, what is k-fold cross-validation and why is it useful? Correct idea: A technique that splits data into k subsets, training k different models where each uses a different subset as validation, prov.... Trap: K-fold cross-validation is a performance estimation methodology that rotates validation folds, not a systematic archi...
- **mock_5 Q26** / `m4-026`: When comparing two fine-tuned LLM models, how do you determine if the performance difference is statistically significant rather than due to random chance? Correct idea: Use statistical hypothesis testing, such as paired t-test or bootstrap resampling, on **evaluation** **metrics** across multiple test e.... Trap: Running each model once and comparing aggregate accuracy ignores variance from random initialization, data **sampling**,...
- **mock_5 Q41** / `m4-041`: What is active learning in the context of LLMs, and how can it reduce annotation costs for **fine-tuning** datasets? Correct idea: An iterative approach where the model identifies the most informative unlabeled **examples** for human annotation, focusing labelin.... Trap: Active learning selects the most informative unlabeled **examples** for human annotation, not replaces supervised learnin...
- **mock_5 Q42** / `m4-042`: Multiple answers: When **fine-tuning** a pre-trained LLM on a new task, what are common signs that your model is **overfitting** to the training data? Select two. Correct idea: The model produces near-verbatim reproductions of training **examples** when given similar prompts, rather than generating novel re.... Trap: This statement is correct -- training **metrics** improving while validation **metrics** plateau or worsen with a large train...
- **mock_5 Q54** / `m4-054`: What is meta-learning, and how does it enable **few-shot** learning in modern LLMs? Correct idea: Training models on a diverse set of tasks so they learn general learning strategies rather than task-specific patterns, enablin.... Trap: Meta-learning trains models to learn general learning strategies across diverse tasks for rapid adaptation, not searc...
- **mock_5 Q55** / `m4-055`: Multiple answers: What is **catastrophic forgetting** in neural networks, and what strategies can mitigate it when **fine-tuning** LLMs? Select two. Correct idea: Parameter-efficient **fine-tuning** methods like **LoRA** freeze the original model weights and train small adapter modules, significan.... Trap: **Catastrophic forgetting** is the overwriting of previously learned knowledge when training on new tasks, not failing to...
- **mock_5 Q56** / `m4-056`: What is **domain adaptation** in machine learning, and when is it necessary for LLM **deployment**? Correct idea: The process of adapting a model trained on one domain to perform well on a different domain where data distributions differ, ne.... Trap: **Domain adaptation** adjusts a model to perform well on a different target distribution, not modifies the model architec...
- **mock_6 Q5** / `m5-005`: Multiple answers: What is the key difference between pre-training and **fine-tuning** in the context of large language models? Select two. Correct idea: Pre-training requires massive computational resources and large unlabeled corpora, while **fine-tuning** is more efficient and uses.... Trap: Option A describes "Pre-training uses supervised learning on labeled classification datasets, while..." but the quest...
- **mock_6 Q11** / `m5-011`: Multiple answers: What are the key indicators that an LLM is **overfitting** during **fine-tuning**? Select two. Correct idea: The model generates outputs that closely replicate training **examples** verbatim rather than producing novel, generalizable respon.... Trap: Option A describes "The model generates outputs that are too diverse and creative" but the question asks about Multip...
- **mock_6 Q12** / `m5-012`: When interpreting learning curves during LLM **fine-tuning**, what does a large gap between training and validation performance indicate? Correct idea: The model is **overfitting** and would benefit from regularization or more training data. Trap: Option A describes "The model architecture is too simple and needs more capacity" but the question asks about When in...
- **mock_6 Q14** / `m5-014`: When building a text preprocessing pipeline for LLM **fine-tuning**, what is the most important consideration regarding stopword removal? Correct idea: For LLMs, stopwords should generally be retained as they provide important contextual and grammatical information. Trap: Option A makes an absolute claim using "always": "Always remove stopwords to reduce training data size". Absolute sta...
- **mock_6 Q25** / `m5-025`: Multiple answers: When defining hyperparameter search spaces for LLM **fine-tuning**, which approaches generally yield the most efficient exploration? Select two. Correct idea: Apply Bayesian optimization or Tree-structured Parzen Estimators to learn from previous trial results and focus exploration on.... Trap: Option A describes "Use logarithmic scales for **learning rate** and linear or categorical scales for batch..." but the q...

</details>

<!-- STUDY_ENRICHMENT_END -->

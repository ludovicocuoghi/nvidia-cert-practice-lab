---
service: NeMo Customizer
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# NeMo Customizer

## At a glance

| | |
|---|---|
| **What it is** | Managed API microservice + Python SDK — PEFT/LoRA fine-tuning without managing GPUs |
| **How you access it** | REST API (`POST /v1/fine-tuning/jobs`) or `pip install nvidia-ai-endpoints` |
| **Input** | Base model ID + training dataset (JSONL) + fine-tuning config (rank, alpha, epochs) |
| **Output** | LoRA adapter weights or merged model checkpoint |
| **Inside** | LoRA/QLoRA, supervised fine-tuning (SFT), RLHF/DPO alignment recipes |

```bash
curl -X POST https://API.nvidia.com/v1/fine-tuning/jobs   -d '{"model": "nemotron-4-15b", "dataset": "s3://my-data/train.jsonl",
       "method": "lora", "rank": 16, "epochs": 3}'
```

**Mental model**: upload training data via API, download a LoRA adapter — no training loop to write, no GPU cluster to manage.

---

## What it is, in one paragraph

NVIDIA's simplified fine-tuning and customization tool for language models. NeMo Customizer provides an accessible interface for adapting foundation models to specific domains, tasks, or behaviors — without requiring full-scale training infrastructure. It is the **lightweight customization layer** compared to NeMo Framework's full training capabilities.

## Where it sits in the lifecycle

**Customization / fine-tuning** — after initial training, before serving. Takes a pre-trained model and adapts it for specific use cases.

```
[Pre-trained model] → [NeMo Customizer: fine-tune on domain data] → [Customized model] → [NIM: serve]
```

## When it is the right answer

- Questions about NVIDIA's fine-tuning/customization tool
- Adapting a pre-trained model to a specific domain or task
- Lightweight customization without full training infrastructure
- "How to customize an NVIDIA model for enterprise-specific needs?"

## When it is the wrong answer (common trap)

- **Full-scale model training from scratch**: That's NeMo Framework.
- **Model serving**: That's NIM or Triton.
- **Inference optimization**: That's TensorRT-LLM.
- **Safety filtering**: That's NeMo Guardrails.
- **Agent orchestration**: That's NeMo Agent Toolkit.

## How it relates to neighboring services

- vs **NeMo Framework**: Framework = full-scale training (from scratch or major adaptation). Customizer = simplified fine-tuning (domain/task adaptation). Customizer is the accessible subset of customization capabilities.
- vs **NIM**: Customizer produces customized models; NIM serves them.
- vs **NeMo Evaluator**: Evaluator measures how well the customized model performs.

## Numbers, defaults, knobs you should recognize

- Simplified interface for fine-tuning (vs. full Framework training)
- Supports parameter-efficient fine-tuning (PEFT) methods: LoRA, QLoRA, adapters — updates only a small fraction of parameters, reducing GPU memory requirements
- Domain/task-specific adaptation without full model retraining
- Works with pre-trained models (including Nemotron, Llama, Mistral)
- Outputs models deployable via NIM
- Lower hardware requirements than full-scale training — suitable for single-GPU or small clusters

## Example exam-style scenario

> A team needs to adapt a pre-trained Nemotron model for their legal document domain without setting up full-scale training infrastructure. Which NVIDIA tool is most appropriate?
>
> **Answer**: NeMo Customizer — the simplified fine-tuning interface for domain adaptation.

## Mock signals

- **No direct evidence in Agentic AI mocks.** NeMo Customizer is not tested in the current mock bank. Its existence is inferred from the blueprint and NVIDIA platform structure.
- Study signal: pick it for managed PEFT-style customization, not full pretraining or runtime inference serving.


---

## Deep Dive Contents

This deep dive covers the key concepts behind NeMo Customizer that the exam tests:

- **[Fine-Tuning Methods Compared]**: full fine-tuning vs PEFT — memory footprint, storage per task, training time, and multi-task serving tradeoffs
- **[LoRA Explained]**: low-rank adaptation math, alpha scaling, target modules, and why LoRA works (low intrinsic dimension)
- **[SFT (Supervised Fine-Tuning)]**: instruction tuning format, data quality over quantity, style vs knowledge distinction, and loss function
- **[RLHF and Alignment]**: three-stage pipeline (SFT → reward model → PPO), DPO as a simpler alternative, and when RLHF is needed vs SFT alone
- **[Continued Pre-Training vs Fine-Tuning]**: CPT injects new knowledge (billions of tokens); SFT teaches new behavior (thousands of examples); catastrophic forgetting and mixing strategies
- **[Parameter-Efficient Methods Beyond LoRA]**: prefix tuning, prompt tuning, adapters, and IA3 — with comparison table of trainable parameters, inference overhead, and expressiveness

## DEEP DIVE: Fine-Tuning Methods Compared

Fine-tuning methods fall into two broad categories: **full fine-tuning** and **parameter-efficient fine-tuning (PEFT)**. The choice determines memory footprint, training speed, and whether you can keep one base model serving many tasks.

### Full Fine-Tuning

- **What it modifies:** Every weight in the model is updated during training. The optimizer states, gradients, and parameters all need to fit in GPU memory.
- **Memory cost:** Approximately 4x the model size in GPU memory when using AdamW (model weights + gradients + optimizer states = roughly 4x the parameter count in FP16). A 7B parameter model in FP16 (~14 GB for weights) requires approximately 56 GB of GPU memory for full fine-tuning — meaning it barely fits on a single A100-80GB.
- **Output:** A completely separate copy of the model per task. Fine-tuning five tasks means storing five full models.
- **When to use:** You need to substantially change the model's behavior, you have sufficient GPU budget, or you are doing continued pre-training (injecting new knowledge).

### Parameter-Efficient Fine-Tuning (PEFT)

- **What it modifies:** The original model weights are frozen. Small trainable components (adapters, low-rank matrices, or soft prompts) are inserted or attached. Only these components receive gradient updates.
- **Memory cost:** Model weights stay frozen (no optimizer states for them). Only the tiny trainable parameters need optimizer states. Memory is dominated by the base model's weights (typically loaded in FP16 or FP4 for QLoRA) plus a small overhead — typically 1-20% additional memory versus the base inference cost.
- **Output:** A single base model shared across tasks; each task requires only a small delta file (often megabytes, not gigabytes).
- **When to use:** You have limited GPU budget, need to serve many customized versions of the same base model, or are iterating quickly on different domains/instructions.

### Comparison Table

| Aspect | Full Fine-Tuning | PEFT (LoRA) |
|---|---|---|
| Updated parameters | 100% of weights | ~0.1-1% of weights |
| GPU memory (7B model, FP16) | ~56 GB (weights + grads + states) | ~16-20 GB (frozen weights + tiny adapters) |
| Storage per task | ~14 GB (full model copy) | ~2-50 MB (adapter weights only) |
| Training time | Hours to days | Minutes to hours |
| Multi-task serving | N models, full copy each | 1 base model + N tiny adapters |
| Quality on narrow domain | Higher (more capacity) | Comparable with sufficient rank |
| Catastrophic forgetting risk | High (all weights change) | Low (most weights frozen) |

## DEEP DIVE: LoRA Explained

**Low-Rank Adaptation (LoRA)** is the most widely used PEFT method and the primary technique exposed by NeMo Customizer.

### The Math

Consider a linear layer with pre-trained weight matrix W of shape d x k (d = output dimension, k = input dimension). In standard fine-tuning, the update would be:

```
h = Wx + ΔWx    (where ΔW is learned, same shape as W)
```

LoRA constrains the update ΔW to be low-rank. Instead of learning a full d x k matrix, LoRA learns two smaller matrices:

- **B** of shape d x r (randomly initialized to zeros)
- **A** of shape r x k (randomly initialized with small Gaussian noise)

The forward pass becomes:

```
h = Wx + BAx
```

where r << min(d, k). Typically r = 8, 16, 32, or 64. The product BA has rank at most r, meaning the effective parameter count is d*r + r*k — far smaller than d*k for large layers.

**Example:** A 4096 x 4096 attention projection layer in a 7B model has ~16.8M parameters. With LoRA rank 16, the trainable parameters are 4096*16 + 16*4096 = 131,072 — a **128x reduction** in trainable parameters for that layer.

### Alpha Scaling

LoRA introduces a scaling hyperparameter **alpha** (typically 16-128) applied as:

```
h = Wx + (α / r) * BAx
```

The alpha/r ratio controls the effective step size. A common heuristic: set alpha to 2x the rank (e.g., r=16, alpha=32). The rank r controls the expressiveness of the adaptation; alpha controls how strongly the LoRA path influences the output.

### Target Modules

LoRA is typically applied to the **query** (Q) and **value** (V) projection matrices in transformer attention layers. Some implementations also target the key (K) and output (O) projections, or even the feed-forward layers. Applying LoRA to Q and V alone is the standard recommendation from the original paper; adding K, O, and FFN layers increases capacity at the cost of more trainable parameters.

### Why LoRA Works

The key insight: pre-trained models have a very **low intrinsic dimension** for fine-tuning. That is, the subspace of parameter space that contains useful task-specific adaptations has far fewer effective degrees of freedom than the full parameter count. LoRA exploits this by explicitly constraining the update to a low-rank subspace. Empirical results show that even rank 1-2 captures meaningful task adaptation, and rank 8-16 is sufficient to match full fine-tuning quality on most tasks.

### Concrete Numbers

- **Rank r:** 8-64 (typical: 16 for most tasks, 64 for complex domains)
- **Alpha:** 16-128 (typical: 2x rank, so 32 for r=16)
- **Trainable parameters:** ~0.1-1% of total model parameters
- **QLoRA** (LoRA + 4-bit quantization): reduces base model memory by ~4x versus FP16. A 70B model fits on a single A100-80GB with QLoRA.

## DEEP DIVE: SFT (Supervised Fine-Tuning)

**Supervised Fine-Tuning (SFT)** is the process of teaching a pre-trained language model to follow instructions and produce structured responses by training on curated input-output pairs.

### Instruction Tuning Format

SFT data is structured as conversations with a consistent format:

```
System: You are a helpful assistant for legal document analysis.
User: Summarize the key clauses in this non-disclosure agreement.
Assistant: The key clauses in this NDA are: 1) Definition of confidential information..
```

The model learns to complete the assistant turn given the system prompt and user message. During training, the loss is computed **only over the assistant's response tokens** — the user and system tokens are masked.

### Data Quality Over Quantity

SFT follows a strong power law: data quality dominates data quantity. A curated set of **500-1000 high-quality examples** often produces better instruction-following behavior than **5000+ noisy examples** scraped from the web. The LIMA paper ("Less Is More for Alignment") demonstrated this principle: training on only 1,000 carefully curated examples produced results competitive with models trained on much larger datasets.

Typical SFT dataset sizes range from **1,000 to 100,000 examples** depending on the breadth of tasks. For narrow domain adaptation (e.g., legal document Q&A), a few thousand high-quality, expert-written examples are typically sufficient.

### Style vs. Knowledge

A critical SFT insight: SFT primarily teaches **format and interaction style**, not new facts or domain knowledge. The base model already learned domain knowledge during pre-training. SFT teaches it **how to surface that knowledge** in a structured, helpful way:

- **Pre-training** = learns facts, language patterns, world knowledge
- **SFT** = learns instruction format, output structure, tone, helpfulness
- **SFT does not** = inject new factual knowledge that wasn't in pre-training

This is why a model fine-tuned on a few hundred medical Q&A pairs can perform well on medical questions — the medical knowledge was already in the pre-trained weights; SFT just taught the model to express it in a doctor-patient format.

### SFT Loss Function

The standard SFT loss is the auto-regressive language modeling objective (cross-entropy), but applied **only on output tokens**:

```
L_SFT = -Σ_t log P(y_t | x, y_<t) for t in output_token_positions
```

where x is the input (system + user) and y is the assistant response. This is identical to the pre-training objective but restricted to the response tokens.

### Concrete Numbers

- **Typical dataset size:** 1,000 to 100,000 examples
- **Epochs:** 2-5 (more epochs risk overfitting; smaller datasets need more regularization)
- **Learning rate:** 1e-5 to 5e-5 for full FT; 2e-4 to 5e-4 for LoRA adapters
- **Warmup ratio:** 3-10% of total steps
- **Weight decay:** 0.01-0.1

## DEEP DIVE: RLHF and Alignment

**Reinforcement Learning from Human Feedback (RLHF)** is a post-training stage that aligns model outputs with human preferences — making responses more helpful, harmless, and honest. RLHF typically follows SFT in the training pipeline.

### The RLHF Pipeline (Three Stages)

```
Stage 1: SFT → Stage 2: Reward Model Training → Stage 3: PPO Optimization
```

**Stage 1 — SFT (base instruction tuning):** The model is first fine-tuned on instruction-output pairs so it can generate coherent responses in the expected format. This provides a reasonable initialization for the subsequent RL stage.

**Stage 2 — Reward Model Training:** A separate model (typically the same architecture, but with the language modeling head replaced by a scalar regression head) is trained to predict human preferences.

- **Training data:** Human annotators compare pairs of model outputs for the same prompt and choose which is better (chosen vs. rejected).
- **Objective:** The reward model learns to assign a higher score to chosen responses than rejected ones (Bradley-Terry preference model):

```
L_RM = -E[log σ(r_chosen - r_rejected)]
```

- **Reward model size:** Typically the same architecture as the base model but can be smaller (e.g., a 7B RM for a 7B policy, or a smaller 1.5B RM). In practice, many production systems use a reward model with roughly the same capacity as the policy model.

**Stage 3 — PPO (Proximal Policy Optimization):** The SFT model (now called the "policy") generates responses. The reward model scores them. PPO updates the policy to maximize the expected reward while staying close to the original SFT model (via a KL penalty):

```
L_PPO = -E[r(θ) - β * KL(π_θ || π_SFT)]
```

- **β (KL penalty coefficient):** Controls the trade-off between maximizing reward and staying near the SFT initialization. Typical values: 0.01-0.1.
- **PPO batch size:** Typically 32-128 prompts per update step, with 4-8 responses sampled per prompt (for advantage estimation).
- **Learning rate:** Typically 1e-6 to 5e-6 (lower than SFT, as the policy is already well-initialized).

### DPO: Simpler Alternative

**Direct Preference Optimization (DPO)** eliminates the explicit reward model. Instead, DPO reparameterizes the RLHF objective so the policy is directly optimized on preference pairs:

```
L_DPO = -E[log σ(β * (log(π_θ(y_chosen)/π_ref(y_chosen)) - log(π_θ(y_rejected)/π_ref(y_rejected))))]
```

- **No reward model needed** — reduces the training pipeline from 3 stages to 2 (SFT + DPO).
- **Same preference data** format (chosen vs. rejected pairs).
- **β parameter** plays the same role as the KL penalty in PPO (typical range: 0.1-0.5).
- **Trade-off:** DPO is simpler and more stable, but PPO can sometimes achieve higher reward at the cost of more hyperparameter tuning and engineering complexity.

### When RLHF Is Needed vs. SFT Alone

| Scenario | SFT | SFT + RLHF/DPO |
|---|---|---|
| Teach response format | Sufficient | Overkill |
| Reduce harmful outputs | Partially | Stronger alignment |
| Follow complex instructions | Good | Better nuance and helpfulness |
| Reduce sycophancy (model agreeing with user) | Limited | Effective |
| Calibrate model confidence | Not addressed | Can improve |
| Narrow domain task (e.g., summarization) | Usually sufficient | Rarely needed |
| General-purpose chatbot | Good baseline | Industry standard |

**Key insight:** RLHF addresses behaviors that are hard to capture in supervised data — like preferring a helpful refusal over a hallucinated answer, or disagreeing with a user's incorrect premise. These are matters of **preference**, not correctness, and preference optimization requires preference data.

### Concrete Numbers

- **Reward model dataset size:** 50,000 to 1,000,000 preference pairs
- **PPO batch size:** 32-128 prompts, 4-8 responses per prompt
- **RLHF KL penalty β:** 0.01-0.1
- **DPO β:** 0.1-0.5
- **RLHF learning rate:** 1e-6 to 5e-6 (typically 5-10x lower than SFT)

## DEEP DIVE: Continued Pre-Training vs. Fine-Tuning

These two approaches serve fundamentally different purposes and are often confused. They differ in **what they teach the model**, **how much data they need**, and **how they affect existing capabilities**.

### Continued Pre-Training (CPT)

- **Goal:** Inject **new knowledge** — domain vocabulary, specialized terminology, internal documents, or recent events that occurred after the model's training cutoff.
- **Objective:** The same language modeling objective used during initial pre-training: predict the next token. No instruction-output pairs needed; raw text is sufficient.
- **Data format:** Unstructured text (documents, articles, code, transcripts).
- **Data volume:** Large — typically **billions of tokens** (at least 1-10B tokens for meaningful knowledge injection). CPT on 100K documents (~200M tokens) may only show marginal gains.
- **Compute cost:** High — full-model training over many tokens. Training on 10B tokens of domain data can cost as much as 10-20% of the original pre-training compute.
- **When to use:** The domain has specialized vocabulary not in the pre-training data (medical terminology, legal jargon, proprietary codebases), or knowledge cutoff dates matter (e.g., adapting a 2023 model to 2025 regulations).

### Fine-Tuning / SFT

- **Goal:** Teach **new behavior** — instruction following, response format, task completion patterns, tool use.
- **Objective:** Supervised next-token prediction conditioned on instruction-output pairs (or preference optimization for alignment).
- **Data format:** Structured instruction-output pairs.
- **Data volume:** Small — typically **thousands to tens of thousands** of examples (megabytes, not gigabytes).
- **Compute cost:** Low to moderate. Full FT is feasible on a single multi-GPU node; PEFT (LoRA) runs on a single GPU.
- **When to use:** You need the model to follow instructions, adopt a specific tone, or output structured formats. You are **not** trying to teach it new facts — you assume the facts are already in the pre-training data.

### When You Need Both

Some scenarios require **CPT followed by SFT**:

1. A hospital wants a model for clinical note generation.
2. Step 1 (CPT): Train on 50B tokens of medical literature, clinical notes, and research papers. The model learns medical terminology, drug names, procedure codes.
3. Step 2 (SFT): Fine-tune on 5,000 clinical note instruction pairs. The model learns to format output as SOAP notes, follow the hospital's template, and respond in a professional tone.
4. Without CPT: The SFT model invented plausible-sounding but wrong medical terms (hallucination — the knowledge wasn't in pre-training).
5. Without SFT: The CPT model knew medical facts but couldn't format them as useful clinical notes.

### Comparison Table

| Aspect | Continued Pre-Training | Fine-Tuning / SFT |
|---|---|---|
| What it teaches | New knowledge (facts, vocabulary) | New behavior (format, style, instruction following) |
| Training objective | Next-token prediction (LM loss) | Conditional next-token prediction on I/O pairs |
| Data format | Raw unstructured text | Instruction-response pairs |
| Data volume | Billions of tokens (billion-scale) | Thousands of examples (~1K-100K) |
| Compute | High (full model updates over large corpora) | Low to moderate (PEFT is cheap; FT is moderate) |
| Risk of forgetting | High (catastrophic forgetting of general knowledge) | Low (most weights frozen in PEFT; full FT risks forgetting) |
| Output | A domain-adapted base model | An instruction-following model |
| When to use alone | You only need the model to know more, not behave differently | You only need the model to follow instructions, not know new facts |

### Catastrophic Forgetting in CPT

CPT poses a real risk of **catastrophic forgetting** — the model may lose general capabilities as it overfits to domain data. Mitigation strategies:

- **Mix ratio:** Interleave domain data with general pre-training data (e.g., 50% domain + 50% general). Without this, the model forgets how to answer general questions.
- **Learning rate:** Use a lower learning rate than initial pre-training (typically 1e-5 to 5e-5 vs. 1e-4 for initial pre-training).
- **EWC (Elastic Weight Consolidation):** Penalize changes to weights that are important for previous tasks.
- **Replay:** Periodically train on samples from the general distribution.

### Concrete Numbers

- **CPT data volume:** 1B to 100B+ tokens for meaningful knowledge injection
- **CPT compute:** 10-30% of original pre-training cost (same data volume, fewer epochs)
- **SFT data volume:** 1,000 to 100,000 examples (typically 1-3 epochs)
- **CPT learning rate:** 1e-5 to 5e-5
- **SFT learning rate:** 1e-5 to 5e-5 (full FT), 2e-4 to 5e-4 (LoRA)
- **Domain data mixing ratio:** 10-50% domain, 50-90% general corpus

## DEEP DIVE: Parameter-Efficient Methods Beyond LoRA

LoRA is the most popular PEFT method, but several other approaches exist with different trade-offs in parameter count, inference overhead, and expressiveness.

### Prefix Tuning

- **How it works:** Instead of modifying layer weights, prefix tuning prepends a learned sequence of **virtual tokens** (continuous embeddings) to the input of each transformer layer. These tokens do not correspond to actual words — they are learned vectors that influence the attention pattern.
- **Trainable parameters:** The prefix embeddings per layer. For a prefix length L across N layers with hidden dimension h: N x L x h parameters.
- **Typical prefix length:** 10-200 tokens. A length-100 prefix on a 40-layer model with h=4096 = 40 * 100 * 4096 ≈ 16M parameters — comparable to a moderate LoRA.
- **Inference overhead:** The prefix is concatenated to the input sequence, increasing the effective sequence length. This adds **inference-time latency** proportional to the prefix length (unlike LoRA, which adds no inference overhead after merging).
- **Best for:** Tasks where you want to steer generation without changing any weights (e.g., controlling output style or topic).
- **Key limitation:** Does not add new capabilities or knowledge — only steers attention patterns.

### Prompt Tuning

- **How it works:** A simpler version of prefix tuning. Only the **input embeddings** (first layer) are learned, not per-layer prefixes. The learned "soft prompt" is prepended to the input text.
- **Trainable parameters:** L x h (where L = prompt length, h = embedding dimension) — far fewer than prefix tuning.
- **Typical prompt length:** 5-100 tokens. A length-20 soft prompt with h=4096 = 81,920 parameters — extremely small.
- **vs. Prefix Tuning:** Prompt tuning learns only the input layer embeddings; prefix tuning learns per-layer keys and values. Prefix tuning is generally more expressive (and more expensive).
- **Key insight:** Prompt tuning works well for large models (100B+) because the model's capacity compensates for the small trainable parameter budget. For smaller models, prompt tuning often underperforms LoRA.

### Adapters (Bottleneck Adapters)

- **How it works:** Small bottleneck feed-forward networks are **inserted** between existing layers of the transformer. Each adapter is a down-projection (h -> bottleneck), a non-linearity, and an up-projection (bottleneck -> h).
- **Trainable parameters:** Per layer: h * b + b * h = 2*b*h (where b = bottleneck dimension). With b = 64 and h = 4096: 524,288 parameters per adapter.
- **Bottleneck dimension:** Typically 64-512. A smaller bottleneck = fewer parameters but less capacity.
- **Inference overhead:** Adapters add depth to the forward pass (extra matrix multiplications). This adds small but non-zero latency. Unlike LoRA, adapter weights cannot be merged into the original weights.
- **vs. LoRA:** Adapters insert new layers (additive); LoRA learns updates to existing layers (parallel path). LoRA can be merged at inference time for zero overhead; adapters always add latency.
- **Historical note:** Adapters were one of the earliest PEFT methods, introduced before LoRA, but LoRA has largely supplanted them due to zero-inference-overhead benefits.

### IA3 (Infused Adapter by Inhibiting and Amplifying Inner Activations)

- **How it works:** IA3 learns three-element-wise rescaling vectors (one per key, value, and feed-forward activation in each transformer layer). During training, the forward pass becomes:

```
h_attn = softmax(Q * (K ⊙ l_k)^T / √d) * (V ⊙ l_v)
h_ffn = (FFN_input ⊙ l_ff) * W_ffn
```

where l_k, l_v, and l_ff are learned vectors (length = hidden dimension), and ⊙ is element-wise multiplication.

- **Trainable parameters:** 3 * h per transformer layer. For h=4096 and 40 layers: 3 * 4096 * 40 ≈ 491,520 parameters — roughly **2000x fewer** than a rank-16 LoRA on all layers.
- **Performance:** IA3 typically underperforms LoRA on complex tasks but is surprisingly effective given its tiny parameter count. On simple classification or light generation tasks, IA3 can match LoRA.
- **Best for:** Extreme parameter efficiency when storage is the primary constraint (e.g., thousands of tasks on mobile devices).

### Comparison Table

| Method | Trainable Params (7B model, typical config) | Inference Overhead | Mergeable? | Expressiveness |
|---|---|---|---|---|
| **Full Fine-Tuning** | 7B (100%) | None | N/A | Maximum |
| **LoRA (r=16, Q+V)** | ~4-8M (0.06-0.1%) | None | Yes (merge into W) | High |
| **Prefix Tuning (L=100)** | ~16M (0.2%) | Adds L tokens to sequence | No | Medium |
| **Prompt Tuning (L=20)** | ~80K (0.001%) | Adds L tokens to input | No | Low |
| **Adapters (b=64)** | ~42M (0.6%) | Extra FFN per adapter | No | High |
| **IA3** | ~0.5M (0.007%) | Negligible (element-wise) | Yes (scale weights) | Low-Medium |

### Key Takeaways for Exams

- **NeMo Customizer** primarily exposes **LoRA** and **QLoRA** — expect these to be the answer when PEFT is mentioned in a scenario.
- **LoRA distinguishes itself** by being mergeable into the original weights — zero inference overhead is its killer feature.
- **Prefix tuning and prompt tuning** are "soft prompt" methods that add inference cost proportional to the prompt length — they are rarely the right answer for production serving.
- **Adapters** are the most flexible but add inference latency — they are used when LoRA's low-rank assumption is too restrictive.
- **IA3** is the most parameter-efficient but the least expressive — useful for extreme multi-task scenarios.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Customization / fine-tuning
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Managed API microservice + Python SDK — **PEFT**/**LoRA** fine-tuning without managing GPUs
- **Use it when:** Use when an enterprise wants API-driven LoRA/PEFT customization of a supported base model without managing a full training stack.
- **Do not use it when:** Do not use it for full pretraining, low-level training research, or production inference serving.
- **Common trap:** Treating a managed PEFT customization service as a replacement for NeMo Framework training or NIM serving.
- **Scenario signal:** An enterprise wants API-driven LoRA/PEFT customization of a base model without managing distributed training infrastructure.
### Study notes
- Place **NeMo Customizer** at **Customization / fine-tuning**: upload training data via API, download a LoRA adapter — no training loop to write, no GPU cluster to manage.
- Choose it when: Use when an enterprise wants API-driven LoRA/PEFT customization of a supported base model without managing a full training stack. Reject it when: Do not use it for full pretraining, low-level training research, or production inference serving.
### Must know
- LoRA/QLoRA — low-rank adaptation with zero inference overhead after merging
- PEFT vs full fine-tuning — ~0.1-1% of parameters updated vs 100%; ~2-50 MB storage per task vs ~14 GB
- SFT dataset quality — 500-1000 high-quality examples beat 5000+ noisy ones (LIMA principle)
- RLHF/DPO pipeline — reward model training on preference pairs, then policy optimization with KL penalty
- continued pre-training vs fine-tuning — CPT injects knowledge (billions of tokens); SFT teaches format/style (thousands of examples)
### High-yield exam signals
- PEFT customization → NeMo Customizer provides API-driven LoRA/QLoRA without standing up a full training stack
- domain adaptation → fine-tune a base model on domain instructions for legal, medical, or enterprise use cases
- QLoRA on single GPU → 4-bit quantization enables fine-tuning 70B models on one A100-80GB
- adapter merging → LoRA adapters merge into base weights for zero inference overhead, unlike prefix tuning or adapters
### Hands-on checks
- Write one scenario where this service is correct and one where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **NeMo Customizer** matches **Customization / fine-tuning**, not whether the product name sounds familiar.
- Choose it when the scenario signal matches this boundary: Use when an enterprise wants API-driven LoRA/PEFT customization of a supported base model without managing a full training stack.
- Reject it when the problem is actually about another layer: Do not use it for full pretraining, low-level training research, or production inference serving.
- The common trap pattern is: Treating a managed PEFT customization service as a replacement for NeMo Framework training or NIM serving.
- If it appears only as a distractor, decide by the required lifecycle phase before choosing a product name.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- No direct mock references found for this file yet.

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
---
domain: LLM Architecture
weight: 6
status: populated
---

# LLM Architecture

## Certification boundary

This page is the NCP-GENL exam lens for LLM architecture. General Transformer, tokenization, attention, normalization, and KV-cache knowledge stays here because it is prerequisite LLM certification material. Agent lifecycle architecture belongs in Agentic AI General Study; NVIDIA acceleration cues stay here when they explain how the architecture runs on NVIDIA platforms.

## Core ideas you must hold in your head

- The **Transformer** is the universal backbone. Every modern LLM (GPT, LLaMA, Claude, Gemma) is a **Transformer** variant. The exam tests your understanding of its components and their interactions.
- **Decoder-only** dominates generative LLMs. GPT-style autoregressive models use causal **self-attention**. Encoder-only (BERT) is for understanding. **Encoder-decoder** (T5, BART) is for seq2seq. This distinction is fundamental.
- **Attention** is the key innovation. **Self-attention** captures long-range dependencies without recurrence. **Multi-head attention** runs multiple **attention** operations in parallel. MQA and GQA are efficiency tradeoffs tested repeatedly.
- **Normalization and residual connections** make deep Transformers trainable. Pre-LN vs Post-LN, RMSNorm vs LayerNorm, skip connections — these architectural choices determine training stability.
- **Tokenization** directly impacts model capability. **BPE**, **WordPiece**, and **SentencePiece** encode text into tokens. Vocabulary size and embedding dimension are architectural hyperparameters set before training.

## Mental model

LLM Architecture sits at the **foundation** of the stack — before training, before **deployment**. Every other domain builds on it:

```
Input Text → [Tokenizer] → Token IDs → [Embedding Layer] → Vectors
                                                              ↓
[Transformer Block × N] ←── Residual Connection              ↓
│  ├── Multi-Head Attention (causal mask for decoder)  ←──── H100/B200 Tensor Cores accelerate GEMM
│  │    └── Scaled Dot-Product: softmax(QK^T/√d_k) · V
│  ├── LayerNorm / RMSNorm (Pre-LN or Post-LN)
│  └── Feed-Forward Network (SwiGLU / GELU)
│
├── [Final LayerNorm] → [LM Head] → Logits → [Softmax] → Token Probabilities
│
KV Cache stored in GPU HBM; optimized via MQA/GQA, PagedAttention
```

**NVIDIA relevance**: **Tensor Cores** (A100/H100/B200) accelerate the GEMM operations in **attention** and FFN layers. **FP8** on H100+ speeds up inference without significant accuracy loss. **TensorRT-LLM** fuses and optimizes this entire graph for **deployment**.

## GPT vs BERT: the architectural fork in the road

| Aspect | GPT (**Decoder-only**) | BERT (Encoder-only) |
| ------ | ------------------ | -------------------- |
| **Attention** | Causal (masked, left-to-right) | Bidirectional (sees full context) |
| **Pre-training objective** | Next-token prediction (autoregressive) | Masked Language Modeling (fill in blanks) |
| **Best for** | Text generation, chat, code | Classification, NER, factual extraction |
| **Context handling** | Each token attends only to previous tokens | Each token attends to all tokens |
| **Exam signal** | "Autoregressive generation," "causal LM" | "Bidirectional context," "fill-in-the-blank pre-training" |

**Trap**: "BERT generates text left-to-right" — wrong. BERT is bidirectional and not autoregressive; it cannot generate coherent text directly.

## Attention mechanisms: the progression

| Mechanism | Keys/Values per head | Memory footprint | When it's the right answer |
| --------- | -------------------- | ---------------- | -------------------------- |
| **MHA (Multi-Head)** | Full set per head | Highest | Maximum expressivity; quality over speed |
| **MQA (Multi-Query)** | One set shared across all heads | Lowest (~1/h of MHA) | Extreme memory savings at small quality cost |
| **GQA (Grouped-Query)** | One set per group of heads | Middle ground | Practical tradeoff: 2-8 groups balance quality and memory |

**Exam signal**: MQA shares K,V across ALL heads. GQA groups heads and shares within groups. The memory savings come from reducing **KV cache** size, not compute.

## Key architectural components

### Positional Encoding

- **Absolute (sinusoidal)**: Original **Transformer** — fixed frequencies, no learned parameters
- **Learned absolute**: Trainable position **embeddings** up to max sequence length
- **RoPE (Rotary Position Embedding)**: Encodes relative position by rotating Q,K vectors; widely used in modern LLMs (LLaMA, GPT-NeoX, PaLM)
- **ALiBi**: Adds a linear **bias** to **attention** scores; extrapolates to longer sequences better

**Exam signal**: **RoPE** naturally captures relative position (the gap between "cat" and "sat" matters regardless of where they appear). Absolute encodings need the model to learn that relationship.

### Activation Functions

| Function | Formula | Usage | Exam note |
| -------- | ------- | ----- | --------- |
| **ReLU** | max(0, x) | Older architectures | Dead neurons for negative inputs |
| **GELU** | x · Φ(x) | BERT, GPT-2/3 | Smoother than ReLU, better gradients |
| **SwiGLU** | Swish(xW₁) ⊙ (xW₂) | LLaMA, PaLM | Gated variant, strong empirical results |
| **ReGLU** | ReLU(xW₁) ⊙ (xW₂) | Variants | Faster than SwiGLU, similar quality |

### Normalization

- **LayerNorm**: Normalizes across feature dimension for each token; original **Transformer** choice
- **RMSNorm**: Simpler — only scales by root mean square, no mean subtraction; faster, used in LLaMA
- **Pre-LN**: Apply LayerNorm BEFORE **attention**/FFN sublayers → more stable training, used in modern Transformers
- **Post-LN**: Apply LayerNorm AFTER sublayers → original **Transformer** design, harder to train deep models

### Residual (Skip) Connections

- Wrap each sublayer: `output = LayerNorm(x + Sublayer(x))`
- Enable gradient flow through deep networks; without them, very deep Transformers cannot train
- Combine with Pre-LN for training stability

## Training fundamentals

- **Cross-entropy loss**: Standard for next-token prediction; compares predicted distribution to true token
- **Softmax**: Converts logits to probabilities; **temperature** parameter controls sharpness
- **BPTT (Backpropagation Through Time)**: Unrolling the computation graph through sequence steps for gradient computation
- **Xavier/Glorot initialization**: Scales weights by `sqrt(2 / (fan_in + fan_out))` for tanh; `sqrt(2 / fan_in)` for ReLU (He init)
- **Activation checkpointing**: Trades compute for memory — recomputes activations during backward pass instead of storing them

## Tokenization: the first architectural decision

| Method | How it works | Used by | Exam signal |
| ------ | ------------ | ------- | ----------- |
| **BPE (Byte-Pair Encoding)** | Merges most frequent byte/char pairs iteratively | GPT-2/3/4, RoBERTa | Starts from characters, builds up |
| **WordPiece** | Merges pairs that maximize training data likelihood | BERT | Like **BPE** but uses likelihood criterion |
| **SentencePiece** | Language-agnostic; treats input as raw text (no pre-**tokenization**) | LLaMA, T5, ALBERT | Works on any language without whitespace assumptions |
| **Unigram** | Starts from large vocab, prunes least probable tokens | T5 (**SentencePiece** + Unigram) | Opposite direction: starts big, shrinks |

**Vocabulary size**: Typical range is 32K-256K tokens. Larger vocab → shorter sequences but larger embedding matrix. Smaller vocab → longer sequences but more subword splitting.

**Embedding dimension**: Typical range is 512-8192. Larger → more expressive but more parameters. The embedding matrix is `vocab_size × d_model` — a significant parameter count.

## Common exam traps

1. **BERT is not for text generation** — BERT uses bidirectional **attention** and masked LM pre-training; it cannot autoregressively generate coherent text.

2. **MHA/MQA/GQA differ in K/V sharing, not head count** — They differ in how K and V are SHARED across heads, not the number of heads.

3. **Bigger vocabulary is not always better** — Larger vocab increases embedding matrix size and can lead to undertrained rare tokens. There's a sweet spot.

4. **Positional encoding captures position, not meaning** — **Positional encoding** captures position/order, not semantic meaning. That's what **embeddings** do.

5. **LayerNorm and BatchNorm are not interchangeable** — LayerNorm normalizes across features per token (works with variable sequence lengths). BatchNorm normalizes across the batch per feature (problematic for variable-length sequences).

6. **Temperature does not affect vocabulary size** — **Temperature** reshapes the probability distribution over the SAME vocabulary. It doesn't change which tokens exist.

7. **Pre-LN vs Post-LN is not just an implementation detail** — Pre-LN enables training much deeper Transformers; Post-LN requires careful warmup and is less stable beyond ~12 layers.

8. **Softmax and cross-entropy serve different purposes** — Softmax converts logits to probabilities. **Cross-entropy** measures the difference between predicted and actual distributions (the loss). They're used together but are different.

## Must-know exam bullets

- **Causal mask** is a lower-triangular matrix — prevents token i from attending to token j where j > i
- **d_k (key dimension)** in **attention** scaling — `√d_k` prevents softmax from entering regions with extremely small gradients
- **Multi-head attention** allows attending to different representation subspaces — each head can focus on different relationships (syntax, semantics, position)
- **KV cache** stores past keys and values — avoids recomputing them at each autoregressive step; grows linearly with sequence length
- **GQA** reduces **KV cache** by grouping heads — 8 groups means **KV cache** is ~8× smaller than full MHA
- **RoPE** encodes position via rotation — relative position emerges naturally from the rotation angle difference
- **RMSNorm** is LayerNorm without mean subtraction — faster, empirically equally effective
- **SwiGLU** is a gated activation — Swish gate × linear projection; strong empirical performer
- **Pre-LN** stabilizes gradient flow — applies normalization before sublayer, not after
- **Residual connections** are additive: x + f(x) — not concatenation, not multiplication

## Hands-on checks

1. Given input of length 100 and d_model=768, what is the shape of Q, K, V? What is the shape of the **attention** scores matrix?
2. Why does the **KV cache** grow linearly with sequence length? How does GQA reduce it?
3. If you switch from Post-LN to Pre-LN, what changes in the forward and backward passes?
4. Explain the difference between **BPE** and **WordPiece** merge criteria. Which would produce different tokens for the same corpus?
5. Draw the **attention** pattern difference between GPT and BERT for a 5-token sequence.

## Key terms to memorize

- **Causal/autoregressive attention** — each token attends only to itself and previous tokens (lower-triangular mask)
- **Bidirectional attention** — each token attends to ALL tokens (BERT-style)
- **Scaled dot-product attention** — `Attention(Q,K,V) = softmax(QK^T/√d_k) · V`
- **Multi-head attention (MHA)** — h parallel **attention** operations, each with its own Q,K,V projections
- **Multi-Query Attention (MQA)** — all heads share one set of K,V projections
- **Grouped-Query Attention (GQA)** — heads are grouped; each group shares K,V
- **FlashAttention** — IO-aware exact **attention** algorithm; fuses operations to avoid materializing the full N×N **attention** matrix in HBM
- **RoPE (Rotary Position Embedding)** — encodes position by rotating Q and K vectors; relative position from rotation difference
- **Pre-LN** — LayerNorm BEFORE **attention**/FFN (modern, stable)
- **Post-LN** — LayerNorm AFTER **attention**/FFN (original, can be unstable)
- **RMSNorm** — LayerNorm without mean centering; faster
- **GELU** — Gaussian Error Linear Unit; smooth ReLU alternative
- **SwiGLU** — gated activation: Swish(xW₁) ⊙ (xW₂)
- **Residual/skip connection** — `output = x + f(x)`; enables gradient flow in deep networks
- **Cross-entropy loss** — standard loss for next-token prediction against true token distribution
- **BPTT** — Backpropagation Through Time; gradient computation through unrolled sequence
- **Xavier/Glorot init** — weight init scaled by fan-in/fan-out for stable gradient variance
- **Activation checkpointing** — recompute activations in backward pass to save memory
- **BPE** — Byte-Pair Encoding; iterative character pair merging
- **WordPiece** — merge pairs maximizing training data likelihood
- **SentencePiece** — language-agnostic **tokenizer**; raw text input, no pre-**tokenization**

### Top exam traps
- **BERT is not for generation** → BERT is bidirectional, NOT autoregressive
- **MHA/MQA/GQA differ in K/V sharing** → they differ in K,V sharing across heads, not number of heads
- **LayerNorm ≠ BatchNorm** → LayerNorm works per-token across features; BatchNorm works per-feature across batch
- **Temperature doesn't change vocabulary** → **temperature** reshapes the SAME vocabulary's probability distribution
- **Bigger vocab isn't always better** → tradeoff between sequence length and embedding matrix size
- **Pre-LN matters for deep Transformers** → Pre-LN critical for training deep (>12 layer) Transformers
- **Positional encoding captures position, not meaning** → captures position/order; **embeddings** capture meaning

## Mock signals

Across the mock exams, architecture questions repeatedly test these durable ideas:

- **Transformer blocks** — **embeddings**, **positional encoding**/**RoPE**, **self-attention**, FFN/SwiGLU, residuals, normalization, and output projection.
- **Attention variants** — MHA, MQA, and GQA differ by K/V sharing, not merely by headline number of heads.
- **Decoder vs encoder** — GPT-style causal decoding and BERT-style bidirectional encoding serve different tasks.
- **Efficiency features** — **FlashAttention**, **KV cache**, activation checkpointing, and parallelism are architectural/implementation levers.
- **Tokenizer trade-offs** — vocabulary size, subword strategy, sequence length, and embedding matrix size trade against each other.
- **Training stability** — Pre-LN, residuals, initialization, and normalization choices matter for deep Transformers.

Evidence source: `mock_1` through `mock_5`, especially **Transformer** components, **attention** variants, **tokenization**, GPT/BERT differences, **RoPE**, **FlashAttention**, **KV cache**, and training-stability questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 6%
- **What it covers:** Understand **transformer** structures and mechanisms that drive LLM behavior and cost.
- **Use this section when:** Study this when a question asks why an architecture behaves differently under context, **latency**, or scaling constraints.
- **Common trap:** Do not answer with a **deployment** tool when the issue is model structure or **attention** behavior.
- **Scenario signal:** A long-context model slows sharply because **attention** and KV-cache behavior dominate the request.

### Study notes

- **Diagnostic framework** — architecture answers are about mechanism, not product. If the question asks "why is this slow" and the answer is "because **attention** is O(n²) with sequence length", that's an architecture answer. If the answer is "use **TensorRT-LLM**", that's a **deployment** answer — wrong for an architecture question. If the question asks "why does the model need so much memory" and the answer is "because K and V are cached for every layer and every token", that's architecture. If the answer is "use **FP8** **quantization**", that's optimization. Separating mechanism (how the model works internally) from optimization (how to make it faster/smaller) is the single most important framing for architecture questions on the exam.
- Anchor every architecture question in the **transformer** stack: **tokenization** -> **embeddings** -> **attention**/MLP blocks -> normalization -> output head.
- **Attention** variants change memory and **latency**. MQA/GQA reduce KV-cache pressure compared with full **multi-head attention**; **MoE** changes active parameters and routing behavior.
- Architecture answers are usually about mechanism, not which NVIDIA product to deploy.

### Must know

- **decoder-only vs encoder-decoder** — **decoder-only** (GPT-style) uses causal **attention** for autoregressive generation; **encoder-decoder** (T5-style) uses bidirectional encoder + cross-**attention** decoder for seq2seq tasks like translation
- **RoPE/ALiBi** — **RoPE** encodes position by rotating Q/K vectors, enabling relative position awareness; **ALiBi** adds a linear **bias** to **attention** scores, naturally extrapolating beyond trained context length
- **MHA/MQA/GQA** — MHA has separate K/V per head (max quality, max memory); MQA shares K/V across all heads (min memory, slight quality loss); GQA groups heads sharing K/V within groups (best practical tradeoff)
- **MoE routing** — **Mixture of Experts** activates only a subset of parameters per token via a learned **router**; increases total parameters without proportional compute increase
- **KV cache** — stores previously computed Key and Value tensors at each layer; avoids recomputation during autoregressive generation; grows linearly with sequence length × layers × hidden dim

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Autoregressive text generation | **Decoder-only** causal transformer | Encoder-only architecture |
| Translation or seq2seq transformation | **Encoder-decoder** with cross-attention | Assuming decoder-only is always best |
| Text classification or bidirectional understanding | **Encoder-only**/BERT-style bidirectional attention | Causal decoder when generation is not needed |
| Long context slows sharply | **Attention** complexity and **KV cache** growth | Jumping straight to deployment tools |
| Reducing KV memory with attention variants | **MQA/GQA** share K/V projections | Changing tokenizer or temperature |
| Position/order information | **RoPE**, ALiBi, or positional encodings | Treating embeddings as position encoders |
| More total parameters without full dense compute | **MoE** sparse expert routing | Calling MoE an ensemble of independent models |
| Decoder attends to encoder output | **Cross-attention** | Confusing it with masked self-attention |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **Decoder-only** vs **encoder-decoder** | Decoder-only predicts next tokens causally; encoder-decoder encodes an input then decodes with cross-attention. |
| **Self-attention** vs **cross-attention** | Self-attention attends within the same sequence; cross-attention lets decoder states attend to encoder outputs. |
| **Attention** vs embeddings | Embeddings create token vectors; attention mixes contextual information across positions. |
| **Context window** vs KV cache | Context window is the maximum tokens accepted; KV cache is stored K/V tensors used during generation. |
| **RoPE/ALiBi** vs tokenization | Positional methods encode order; tokenization splits text into discrete tokens. |
| **MoE** vs ensemble | MoE routes tokens through sparse experts inside one model; an ensemble combines separate model outputs. |
| Architecture vs optimization | Architecture explains model mechanism; optimization changes implementation speed, memory, or serving cost. |

### Mini scenario drill

1. Scenario: A long-context model fits in memory at short prompts but slows dramatically at 32K tokens.
   Best answer pattern: Identify quadratic attention/prefill cost and growing **KV cache** as architecture-level causes.
   Trap: Answering only with NIM or Triton deployment packaging.

2. Scenario: A task maps source-language sentences to target-language sentences.
   Best answer pattern: Choose **encoder-decoder** with cross-attention for seq2seq structure.
   Trap: Choosing encoder-only because it reads the whole input bidirectionally.

3. Scenario: A model uses one K/V projection shared across all query heads.
   Best answer pattern: Identify **MQA** and its KV-cache memory reduction.
   Trap: Calling it ordinary multi-head attention.

### High-yield exam signals

- **Context length bottleneck**: Model slows sharply as sequence length grows → **attention** is O(n²) with sequence length; use **FlashAttention** (IO-aware tiled computation) or sparse **attention** patterns to reduce quadratic cost.
- **Attention memory pressure**: OOM during long-context inference → **KV cache** grows linearly with sequence length; check for full MHA (switch to GQA or MQA), enable PagedAttention to eliminate fragmentation, or quantize **KV cache** to **INT8**.
- **Architecture trade-off decision**: Need to choose between **decoder-only** and **encoder-decoder** → **decoder-only** (GPT-style) for generative tasks with causal **attention**; **encoder-decoder** (T5-style) for seq2seq tasks like translation where encoder processes full input.
- **Scaling law question**: Deciding how to allocate compute budget between parameters and tokens → Chinchilla scaling law implies balanced scaling of parameters and training tokens; many models are undertrained relative to their parameter count.
- **MoE routing imbalance**: Some experts receive most tokens while others are idle → **router** collapse; add auxiliary load-balancing loss, adjust expert capacity factor, or use expert choice routing to distribute tokens evenly.

### Hands-on checks

- Explain why long-context decode creates **KV-cache memory** pressure even when model weights are quantized.
- Classify a scenario as **encoder-only**, **decoder-only**, or **encoder-decoder**, and explain the attention mask/cross-attention reason.
- Estimate which cost grows with sequence length: attention prefill, decode KV-cache memory, or output token sampling.
- Draw the path from tokens to embeddings, attention/MLP blocks, logits, softmax, and sampled next token.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when a question asks why an architecture behaves differently under context, **latency**, or scaling constraints.
- The major trap pattern is: Do not answer with a **deployment** tool when the issue is model structure or **attention** behavior.
- Recurring local question themes follow the key ideas: **attention**, **decoder-only**, **RoPE**/**ALiBi**, **MoE**, **KV cache**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q45** / `arch-001`: Multi-query **attention** (MQA) reduces **KV cache** size compared to **multi-head attention** (MHA) by: Correct idea: Sharing K and V projections across all heads (one K/V pair, many Q heads), shrinking the **KV cache** by a factor equal to the head....
- **mock_1 Q46** / `arch-002`: Rotary position **embeddings** (**RoPE**) extrapolate to longer contexts (vs. trained length) because: Correct idea: Positions are encoded as rotations applied to query/key vectors; the rotation function is continuous, but extrapolation still d....
- **mock_1 Q47** / `arch-003`: A mixture-of-experts model has 8 experts and routes top-2 per token. Effective compute per token is approximately: Correct idea: 2/8 of the compute of a dense model with the same total parameter count — training cost is sub-linear in total parameters.
- **arch-004** / `arch-004`: Pre-norm vs post-norm **transformer** blocks: pre-norm is generally preferred at scale because: Correct idea: Pre-norm yields more stable gradients in deep stacks, allowing higher learning rates and deeper networks without divergence.
- **arch-005** / `arch-005`: For a summarization task on long documents, which architectural family typically performs best given equal training compute? Correct idea: **Decoder-only** LLMs scaled up — they have outperformed dedicated **encoder-decoder** models for most generation tasks at scale.
- **arch-006** / `arch-006`: Scaling laws (e.g., Chinchilla) imply that for a fixed compute budget, you should: Correct idea: Balance parameter count and tokens trained — many earlier large models were under-trained relative to their parameter count.
- **mock_2 Q1** / `m1-001`: In a **transformer** model, what is the primary purpose of the **self-attention** mechanism? Correct idea: To allow each token in a sequence to attend to all other tokens and capture contextual relationships. Trap: Random token masking describes the masked language modeling objective used by BERT, not **self-attention** -- self-attent...
- **mock_2 Q2** / `m1-002`: Which component of the **transformer** architecture is responsible for preserving the sequential order information of input tokens? Correct idea: **Positional encoding**. Trap: Feed-forward network layers apply independent non-linear transformations to each position's representation after atte...
- **mock_2 Q3** / `m1-003`: In **multi-head attention**, why does the **transformer** use multiple **attention** heads instead of a single **attention** mechanism? Correct idea: To allow the model to attend to information from different representation subspaces at different positions. Trap: **Multi-head attention** actually increases the total parameter count compared to single-head **attention**, because each hea...
- **mock_2 Q4** / `m1-004`: What is the key difference between the encoder and decoder components in an **encoder-decoder** **transformer** architecture? Correct idea: The decoder uses masked **self-attention** to prevent attending to future tokens during training, while the encoder uses bidirectio.... Trap: The number of encoder versus decoder layers is a configuration choice, not a defining architectural difference -- the...
- **mock_2 Q5** / `m1-005`: In the **attention** mechanism, what mathematical operation is performed on the Query (Q) and Key (K) matrices to compute **attention** scores? Correct idea: Matrix multiplication (dot product) followed by scaling and softmax. Trap: **Attention** computes pairwise dot products between all query-key combinations simultaneously via matrix multiplication...
- **mock_2 Q6** / `m1-006`: What problem does the scaling factor, division by `sqrt(d_k)`, in the **attention** mechanism help to address? Correct idea: It prevents dot products from growing too large, which would push softmax into regions with extremely small gradients. Trap: Softmax is the operation that ensures **attention** weights sum to 1.0, not the scaling factor sqrt(d_k) -- the scaling f...
- **mock_2 Q7** / `m1-007`: Which type of **transformer** architecture would be most appropriate for a text classification task? Correct idea: Encoder-only architecture like BERT. Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_2 Q8** / `m1-008`: In neural networks for NLP, what is the primary purpose of an embedding layer? Correct idea: To convert discrete tokens, such as words or subwords, into continuous dense vector representations. Trap: Synthetic text generation through token substitution describes data augmentation techniques, not the purpose of an em...
- **mock_2 Q9** / `m1-009`: Multiple answers: What are key advantages of the **transformer** architecture over RNN-based models? Select two. Correct idea: Transformers capture long-range dependencies more effectively than RNNs through **self-attention**, which directly connects all pos.... Trap: While parallel processing is indeed a key advantage of transformers over RNNs, this question specifically asks about...
- **mock_2 Q10** / `m1-010`: What is the purpose of the feed-forward neural network layer that appears after the **attention** mechanism in each **transformer** block? Correct idea: To apply non-linear transformations to each position independently, increasing the model's representational power. Trap: The feed-forward network in a **transformer** block typically expands the dimensionality (e.g., from d_model to d_ff wher...
- **mock_2 Q11** / `m1-011`: In the context of training large language models, what is the purpose of layer normalization in the **transformer** architecture? Correct idea: To stabilize training by normalizing activations across features, reducing internal covariate shift. Trap: Randomly dropping neurons during training describes dropout regularization, not layer normalization -- dropout preven...
- **mock_2 Q12** / `m1-012`: Multiple answers: What are purposes of residual connections in the **transformer** architecture? Select two. Correct idea: To preserve input information by allowing the original representation to pass through unchanged, so layers only need to learn r.... Trap: Residual connections do not reduce parameter count -- they simply add the input of a sublayer to its output via the i...
- **mock_2 Q13** / `m1-013`: What is cross-**attention** in the **transformer** decoder, and when is it used? Correct idea: It allows decoder positions to attend to all positions in the encoder output, enabling the decoder to access source sequence in.... Trap: Cross-**attention** allows the decoder to attend to encoder outputs, not to future tokens in the decoder -- attending to...
- **mock_2 Q14** / `m1-014`: Which of the following best describes the autoregressive generation process used by **decoder-only** language models like GPT? Correct idea: The model generates one token at a time, where each new token is conditioned on all previously generated tokens. Trap: Autoregressive generation produces tokens in a strict left-to-right order where each new token depends on all previou...
- **mock_2 Q15** / `m1-015`: What is the typical loss function used for training **transformer**-based language models? Correct idea: **Cross-entropy** loss, also called negative log-likelihood. Trap: Mean Squared Error (MSE) is used for regression tasks where the target is a continuous value, not for language modeli...
- **mock_2 Q20** / `m1-020`: What is paged KV caching in the context of **transformer** model inference optimization? Correct idea: A technique that manages the Key-Value cache in non-contiguous memory blocks, reducing memory fragmentation and enabling more e.... Trap: Organizing training data into fixed-size pages for disk reading describes data loading and storage management, not pa...
- **mock_2 Q23** / `m1-023`: Which Python library is commonly used for working with **transformer** models and provides easy access to pretrained LLMs? Correct idea: Hugging Face Transformers. Trap: Matplotlib is a plotting and visualization library, not a library for working with **transformer** models -- it is used f...
- **mock_2 Q24** / `m1-024`: Multiple answers: Which of the following accurately describe the NVIDIA NeMo framework? Select two. Correct idea: It supports distributed training at scale with techniques like **tensor parallelism**, **pipeline parallelism**, and **data parallelism** f.... Trap: NVIDIA NeMo is a framework for conversational AI and generative AI, providing tools for building, training, and custo...
- **mock_2 Q40** / `m1-040`: What is **perplexity** in the context of language model **evaluation**? Correct idea: A measure of how well the model predicts a sample, with lower **perplexity** indicating better prediction confidence. Trap: **Perplexity** measures how well a model predicts text through the exponentiated negative log-likelihood, not the number...
- **mock_2 Q48** / `m1-048`: What are **embeddings** in the context of NLP? Correct idea: Dense vector representations of tokens or texts that capture semantic meaning in a continuous space. Trap: **Embeddings** are learned dense vector representations in a continuous semantic space where similar concepts cluster tog...
- **mock_2 Q52** / `m1-052`: What is semantic similarity and how is it typically measured with **embeddings**? Correct idea: Semantic similarity measures how close in meaning two texts are, typically computed using cosine similarity between their embed.... Trap: Semantic similarity measures meaning relatedness between texts by comparing their embedding vectors in a continuous s...
- **mock_3 Q1** / `m2-001`: What is the primary advantage of **FlashAttention** in modern **transformer** implementations? Correct idea: It reduces memory usage by computing **attention** incrementally using tiling and recomputation techniques. Trap: This describes replacing **multi-head attention** with a single head, which is the opposite of **FlashAttention**'s approach....
- **mock_3 Q2** / `m2-002`: In **decoder-only** **transformer** architectures like GPT, what is the purpose of the **KV cache** during inference? Correct idea: To store previously computed key and value vectors from past tokens, avoiding redundant computation during autoregressive gener.... Trap: This describes batch processing or sharing representations across sequences, which is not the purpose of the **KV cache**...
- **mock_3 Q3** / `m2-003`: Multiple answers: What is Multi-Query **Attention** and how does it differ from standard **multi-head attention**? Select two. Correct idea: MQA significantly reduces the **KV cache** memory footprint during inference, enabling higher **throughput** and longer context lengths.... Trap: This option is actually correct -- MQA does use a single shared KV projection across all heads. However, the question...
- **mock_3 Q4** / `m2-004`: Why do **decoder-only** architectures like GPT use causal masked **self-attention**? Correct idea: To prevent the model from attending to future tokens during training, ensuring each position only depends on previous positions. Trap: This describes quantizing the **KV cache** to lower **precision** (**INT8**/**FP8**), which is a separate optimization technique. Cau...
- **mock_3 Q5** / `m2-005`: What happens during the token generation process when a **decoder-only** LLM produces an output? Correct idea: The model outputs logits, raw scores for each vocabulary token, which are converted to probabilities via softmax and then sampl.... Trap: This describes parallel or **speculative decoding** techniques, not standard autoregressive generation. In a standard dec...
- **mock_3 Q16** / `m2-016`: What is the primary purpose of Layer Normalization in **transformer** architectures? Correct idea: To stabilize training by normalizing activations across the feature dimension for each token independently. Trap: This describes dropout regularization, which randomly zeroes activations. Layer Normalization does not drop out any u...
- **mock_3 Q17** / `m2-017`: How does the GELU activation function differ from ReLU in **transformer** models? Correct idea: GELU is a smooth, non-linear activation that allows small negative values and approximates probabilistic neuron dropout, while.... Trap: This describes layer normalization, not an activation function. GELU is a smooth activation that weights inputs by th...
- **mock_3 Q18** / `m2-018`: Multiple answers: What distinguishes the Llama model architecture from earlier GPT models? Select two. Correct idea: Llama uses Grouped-Query **Attention** in later versions to reduce **KV cache** memory consumption during inference while maintaining o.... Trap: This option is actually factually correct -- Llama does use RMSNorm, SwiGLU, and **RoPE**. However, the question asks 'Wh...
- **mock_3 Q21** / `m2-021`: What is NVIDIA NeMo Framework primarily used for in the LLM development lifecycle? Correct idea: NeMo is an end-to-end framework for training, **fine-tuning**, and customizing large language models using scalable techniques like.... Trap: This describes a production **deployment** and **serving** platform (like **Triton Inference Server** or **NIM**). NeMo Framework is...
- **mock_3 Q23** / `m2-023`: When integrating a Hugging Face Transformers model with NVIDIA TensorRT for inference optimization, what is the typical workflow? Correct idea: Export the Hugging Face model to ONNX format, then convert ONNX to TensorRT engine with optimizations like layer fusion and pre.... Trap: This claims TensorRT can directly load HuggingFace PyTorch models natively. TensorRT cannot directly import PyTorch m...
- **mock_3 Q26** / `m2-026`: Multiple answers: What are the essential components of a **RAG** pipeline? Select two. Correct idea: **RAG** reduces hallucinations by grounding LLM responses in retrieved factual documents, and enables access to up-to-date informat.... Trap: This describes the general components of any LLM pipeline (**tokenizer**, model, output layer). **RAG**-specific components a...
- **mock_3 Q28** / `m2-028`: What is the purpose of text **embeddings** in NLP and how are they generated by models like sentence transformers? Correct idea: **Embeddings** are dense vector representations that capture semantic meaning, generated by encoding text through neural networks t.... Trap: This describes text compression using entropy encoding. **Embeddings** are dense vector representations trained to captur...
- **mock_3 Q29** / `m2-029`: How does semantic similarity computation differ from keyword-based search in **retrieval** systems? Correct idea: Semantic similarity uses **embeddings** to find conceptually related content even with different wording, while keyword search matc.... Trap: This claims semantic search requires **fine-tuning** embedding models for each new document collection. While **fine-tuning**...
- **mock_3 Q31** / `m2-031`: What is dropout in transformers and how does it help prevent **overfitting** during training? Correct idea: Dropout randomly sets a fraction of activations to **zero** during training, forcing the network to learn more robust features that.... Trap: This describes **learning rate** schedules or adaptive optimizers that adjust gradient magnitudes. Dropout does not affec...
- **mock_3 Q35** / `m2-035`: What are the limitations of the **context window** in **transformer**-based LLMs? Correct idea: The **context window** limits the maximum input length the model can process, bounded by **positional encoding**, memory constraints fr.... Trap: This claims context windows determine vocabulary size and **tokenization** strategy. **Context window** and vocabulary are in...
- **mock_3 Q46** / `m2-046`: What is weight tying in **transformer** models and what is its primary benefit? Correct idea: Weight tying shares the same weight matrix between the input token embedding layer and the output prediction layer, reducing to.... Trap: This describes freezing weights as a regularization technique (similar to layer freezing during **fine-tuning**). Weight...
- **mock_3 Q47** / `m2-047`: What is the key difference between Causal Language Modeling and Masked Language Modeling as pre-training objectives? Correct idea: CLM predicts the next token autoregressively using only left context, while MLM predicts randomly masked tokens using bidirecti.... Trap: This understates meaningful differences or dismisses an important aspect that is well-established in practice.
- **mock_3 Q50** / `m2-050`: What are the key strategies for optimizing LLM inference **latency** in production systems? Correct idea: Key strategies include model optimizations, hardware acceleration, **serving** optimizations, and system-level techniques such as q.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_3 Q51** / `m2-051`: What is the purpose of a **model registry** in the LLM development lifecycle, and what key features should it provide? Correct idea: A **model registry** centrally stores, versions, and manages trained models with **metadata**, enabling **versioning**, lineage tracking, s.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_3 Q54** / `m2-054`: Multiple answers: What is Reinforcement Learning from Human Feedback and why is it important for aligning LLMs with human preferences? Select two. Correct idea: **RLHF** involves training a reward model on human **preference data** that learns to predict which responses humans would prefer, serv.... Trap: This describes **synthetic data** generation for pre-training, not **RLHF**. **RLHF** uses human preference judgments to train a...
- **mock_4 Q4** / `m3-004`: What are text **embeddings** in the context of LLMs? Correct idea: Dense vector representations of text that capture semantic meaning in a continuous space. Trap: Text **embeddings** are dense vector representations that capture semantic meaning, not the physical memory addresses whe...
- **mock_4 Q5** / `m3-005`: How is cosine similarity used with text **embeddings**? Correct idea: It measures the semantic similarity between two text **embeddings** by calculating the cosine of the angle between their vectors. Trap: Cosine similarity measures the angle between two embedding vectors, not performs word-by-word vocabulary overlap coun...
- **mock_4 Q6** / `m3-006`: Multiple answers: What is the primary purpose of a vector database in LLM applications? Select two. Correct idea: Enabling fast approximate nearest neighbor search over high-dimensional embedding spaces using specialized indexing structures. Trap: Vector databases store and retrieve high-dimensional **embeddings** for semantic search, not apply model compression tech...
- **mock_4 Q7** / `m3-007`: In **Retrieval**-Augmented Generation, what is the role of the **retrieval** component? Correct idea: To fetch relevant documents or passages from a knowledge base that provide context for the LLM to generate accurate responses. Trap: The **retrieval** component in **RAG** fetches relevant documents from a knowledge base to provide context for the LLM, not c...
- **mock_4 Q8** / `m3-008`: What are the typical steps in a **RAG** pipeline? Correct idea: Query embedding → Vector similarity search → Document **retrieval** → Context augmentation → LLM generation. Trap: A standard **RAG** pipeline retrieves external context before generation rather than passing user input directly to the L...
- **mock_4 Q13** / `m3-013`: What is the difference between dense and sparse **embeddings**? Correct idea: Dense **embeddings** have most values non-**zero** and capture semantic meaning, while sparse **embeddings** have mostly zeros and often re.... Trap: Dense **embeddings** have most values non-**zero** in a continuous lower-dimensional space, not use lossless compression to r...
- **mock_4 Q14** / `m3-014`: What is semantic search in the context of **RAG** systems? Correct idea: Search that retrieves documents based on meaning and context rather than exact keyword matches. Trap: Semantic search retrieves documents based on meaning and conceptual similarity using **embeddings**, not uses regular exp...
- **mock_4 Q15** / `m3-015`: Multiple answers: What is **reranking** in advanced **RAG** pipelines? Select two. Correct idea: A technique that uses cross-encoder models to compute query-document interaction scores, achieving higher accuracy than initial.... Trap: **Reranking** reorders retrieved documents by relevance using a more sophisticated model, not organizes documents in alph...
- **mock_4 Q16** / `m3-016`: What is the primary advantage of using embedding models like Sentence-BERT over traditional BERT for semantic similarity? Correct idea: Sentence-BERT produces fixed-size **embeddings** for entire sentences, enabling efficient similarity comparison without processing.... Trap: Sentence-BERT produces fixed-size sentence **embeddings** for efficient similarity comparison, not cannot handle document...
- **mock_4 Q18** / `m3-018`: What is the purpose of **metadata** filtering in **vector search**? Correct idea: To pre-filter documents based on attributes like date, author, or category before performing vector similarity search. Trap: **Metadata** filtering constrains **vector search** using structured attributes like date or category, not transforms embeddi...
- **mock_4 Q19** / `m3-019`: Multiple answers: What is the purpose of dimensionality reduction in embedding systems? Select two. Correct idea: Speeding up similarity search operations by reducing the number of dimensions that need to be compared during nearest neighbor.... Trap: This option accurately describes dimensionality reduction -- reducing embedding dimensions while preserving semantic...
- **mock_4 Q20** / `m3-020`: What is approximate nearest neighbor search in vector databases? Correct idea: An algorithm that finds similar vectors quickly by trading perfect accuracy for speed using techniques like HNSW or IVF. Trap: ANN search uses structured indexes like HNSW or IVF to efficiently find similar vectors, not randomly selects a subse...
- **mock_4 Q24** / `m3-024`: What is HNSW in vector databases? Correct idea: A graph-based indexing algorithm that enables fast approximate nearest neighbor search by organizing vectors in a multi-layer g.... Trap: HNSW is a graph-based indexing algorithm for ANN search, not a lossy compression algorithm that reduces vector dimens...
- **mock_4 Q26** / `m3-026`: Multiple answers: What is the purpose of **hybrid search** in **RAG** systems? Select two. Correct idea: Improving **retrieval** robustness for queries involving technical terms, product IDs, or acronyms where exact keyword matching com.... Trap: This option accurately describes **hybrid search** -- combining semantic **vector search** with keyword lexical search -- and...
- **mock_4 Q27** / `m3-027`: What is the purpose of document parsing in **RAG** systems? Correct idea: Extracting structured text content from various document formats like PDFs, Word docs, or HTML for processing. Trap: Document parsing extracts structured text content from raw file formats, not applies encryption before storage -- dat...
- **mock_4 Q28** / `m3-028`: What is cross-encoder **reranking** in **RAG** systems? Correct idea: A **reranking** method where query and document are processed together through a model to compute a relevance score. Trap: A cross-encoder processes query-document pairs jointly for relevance scoring, not encodes documents into multiple fil...
- **mock_4 Q29** / `m3-029`: What is the purpose of embedding caching in **RAG** systems? Correct idea: Storing pre-computed **embeddings** to avoid re-computing them for repeated queries or documents, improving performance. Trap: Embedding caching stores pre-computed **embeddings** to avoid recomputation, not converts between numerical formats like...
- **mock_4 Q30** / `m3-030`: What is the purpose of the **context window** in **RAG** systems? Correct idea: The maximum number of tokens, input plus output, that an LLM can process in a single request, limiting how much retrieved conte.... Trap: The **context window** refers to the maximum token capacity of the LLM, not a time period for real-time data **retrieval** --...
- **mock_4 Q32** / `m3-032`: What is the purpose of **positional encoding** in **embeddings** for transformers? Correct idea: To inject information about the position of tokens in the sequence since transformers lack inherent sequential processing. Trap: **Positional encoding** injects sequence position information into token **embeddings**, not normalizes embedding values to a...
- **mock_4 Q33** / `m3-033`: In **RAG** systems, what is query expansion? Correct idea: A technique that generates multiple variations or reformulations of the original query to improve **retrieval** coverage. Trap: Query expansion generates multiple reformulations of the user query to improve **retrieval** coverage, not pads shorter q...
- **mock_4 Q35** / `m3-035`: What is the difference between max pooling and mean pooling for generating sentence **embeddings**? Correct idea: Max pooling takes the maximum value across token **embeddings** for each dimension, while mean pooling averages all token **embeddings**. Trap: Max pooling and mean pooling produce different sentence **embeddings**: max pooling takes the maximum value per dimension...
- **mock_4 Q38** / `m3-038`: What is the purpose of reciprocal **rank** fusion in **hybrid search**? Correct idea: A method to combine rankings from multiple **retrieval** systems, such as semantic and keyword search, into a unified ranking. Trap: RRF combines ranked result lists from multiple **retrieval** systems into a unified ranking, not a **GPU**-accelerated indexi...
- **mock_4 Q40** / `m3-040`: What is the purpose of TF-IDF in traditional information **retrieval**? Correct idea: Weighing terms by their frequency in a document and inverse frequency across all documents to identify important distinctive terms. Trap: TF-IDF weighs terms by their frequency in documents relative to the corpus, not breaks documents into tokens using la...
- **mock_4 Q44** / `m3-044`: What is **BM25** in information **retrieval**? Correct idea: A probabilistic ranking function that scores documents based on query term frequency, with saturation and document length norma.... Trap: **BM25** is a probabilistic ranking function for lexical search, not a neural embedding model with exactly 25 output dime...
- **mock_4 Q46** / `m3-046`: Multiple answers: What is the purpose of a knowledge graph in **RAG** systems? Select two. Correct idea: Enabling multi-hop reasoning by traversing connected entities to answer complex queries that require combining information acro.... Trap: This statement is correct -- knowledge graphs represent entities and their relationships as a structured graph to ena...
- **mock_4 Q47** / `m3-047`: What is the purpose of late interaction models like ColBERT in **RAG**? Correct idea: Computing token-level **embeddings** separately and performing fine-grained similarity matching at query time, balancing efficiency.... Trap: ColBERT is a specific late interaction model architecture that precomputes token-level document **embeddings** and perfor...
- **mock_4 Q51** / `m3-051`: What is the purpose of multimodal **embeddings** in advanced **RAG** systems? Correct idea: Creating unified **embeddings** that capture semantic meaning across different modalities like text, images, and audio. Trap: Multimodal **embeddings** represent different data types such as text, images, and audio in a shared semantic space, not...
- **mock_5 Q1** / `m4-001`: In a sequence-to-sequence model for machine translation, what role does the encoder play in the overall architecture? Correct idea: It processes the input sequence and creates a fixed-length or variable-length context representation that captures the semantic.... Trap: Cross-**attention** **alignment** between source and target sequences is a decoder mechanism that computes relevance scores d...
- **mock_5 Q2** / `m4-002`: When computing **cross-entropy** loss for a language model with a vocabulary of 50,000 tokens, what does the model output before the loss calculation? Correct idea: A probability distribution over all 50,000 vocabulary tokens, typically produced by a softmax layer. Trap: The model outputs a probability distribution over all vocabulary tokens produced by a softmax layer before loss calcu...
- **mock_5 Q3** / `m4-003`: In the context of training recurrent neural networks for sequence modeling, what is backpropagation through time? Correct idea: An algorithm that unfolds the RNN across time steps and applies standard backpropagation to compute gradients with respect to p.... Trap: BPTT is a training algorithm that computes gradients by unrolling the RNN across time steps and applying the chain ru...
- **mock_5 Q18** / `m4-018`: Multiple answers: What is model ensembling and how can it improve LLM performance? Select two. Correct idea: It reduces prediction variance and improves calibration, as individual model errors tend to cancel out when multiple independen.... Trap: This statement is correct -- combining predictions from multiple independently trained models to produce more robust...
- **mock_5 Q23** / `m4-023`: What is the purpose of feature flags when rolling out new LLM model versions in production? Correct idea: To enable gradual, controlled rollout of new models to a subset of users, allowing **A/B testing** and quick **rollback** if issues ari.... Trap: Feature flags enable gradual rollout of new model versions, not apply dynamic **GPU memory** management -- memory managem...
- **mock_5 Q28** / `m4-028`: Multiple answers: When analyzing text data for LLM training, how can you detect and handle outliers that might hurt model quality? Select two. Correct idea: Use **perplexity** scoring with a reference language model to flag documents with abnormally high **perplexity**, which often indicates.... Trap: Text data is fully compatible with outlier analysis using **metrics** such as sequence length statistics, character distr...
- **mock_5 Q29** / `m4-029`: What is data **versioning** and lineage in the context of LLM development, and why is it important? Correct idea: Tracking which version of training or **evaluation** data was used for each model and how the data was created or transformed, enab.... Trap: Data **versioning** tracks dataset versions and lineage, not partitions data into train/validation/test splits -- while d...
- **mock_5 Q31** / `m4-031`: What is batch normalization and how does it help stabilize training in **transformer** models? Correct idea: It normalizes activations across the batch dimension by subtracting mean and dividing by standard deviation, reducing internal.... Trap: Organizing training **examples** into optimally sized mini-batches describes batch construction for training efficiency,...
- **mock_5 Q32** / `m4-032`: Why are residual connections critical in deep **transformer** architectures like GPT and BERT? Correct idea: They allow gradients to flow directly through the network via shortcut paths, preventing vanishing gradients and enabling train.... Trap: Residual connections add a layer's input to its output within the network to create shortcut paths for gradient flow,...
- **mock_5 Q33** / `m4-033`: What is parameter sharing in neural networks, and where is it commonly used in LLM architectures? Correct idea: Using the same weight matrices for multiple operations or positions, reducing parameter count while maintaining expressive powe.... Trap: Distributing model parameters across multiple GPUs describes model parallelism (tensor or **pipeline parallelism**) for f...
- **mock_5 Q35** / `m4-035`: What is Neural Architecture Search, and how can it help design better LLM architectures? Correct idea: An automated method that systematically explores different architecture configurations using search algorithms and performance.... Trap: NAS is an automated method for exploring architecture configurations, not a debugging and profiling tool for training...
- **mock_5 Q40** / `m4-040`: What is curriculum learning, and how can it improve LLM training efficiency? Correct idea: A training strategy that presents **examples** in a meaningful order from easier to harder, allowing models to build foundational k.... Trap: Training on multiple academic subjects simultaneously describes multi-task learning, not curriculum learning which or...
- **mock_5 Q47** / `m4-047`: What are sparse **attention** mechanisms, and how do they improve efficiency for long-context transformers? Correct idea: **Attention** patterns where each token only attends to a subset of other tokens rather than all tokens, reducing computational com.... Trap: Sparse **attention** reduces the number of token pairs each token attends to through patterns like local windows or globa...
- **mock_5 Q48** / `m4-048`: What are rotary positional **embeddings**, and what advantages do they offer over traditional positional encodings? Correct idea: A **positional encoding** method that applies rotation transformations to embedding dimensions based on position, enabling better l.... Trap: Rotary Positional Embedding (**RoPE**) is a **positional encoding** method that rotates query and key **embeddings** based on tok...
- **mock_6 Q1** / `m5-001`: What is the primary role of the feedforward layers in a **transformer** architecture? Correct idea: To apply position-wise transformations independently to each token representation. Trap: Option A describes "To normalize the output of the **attention** layers by applying batch normalization..." but the quest...
- **mock_6 Q3** / `m5-003`: Multiple answers: When building a domain-specific language model, what is the primary consideration when choosing the vocabulary size? Select two. Correct idea: Considering the trade-off between subword granularity and computational overhead, as excessive **tokenization** increases sequence.... Trap: Option A makes an absolute claim using "always/never/only": "Vocabulary size is determined solely by the model archit...
- **mock_6 Q4** / `m5-004`: In **transformer** models, how does the embedding dimension affect model capacity and performance? Correct idea: The embedding dimension determines how much information can be encoded in each token representation. Trap: Option A makes an absolute claim using "always": "Embedding dimension should always equal vocabulary size". Absolute...
- **mock_6 Q8** / `m5-008`: Multiple answers: In a production LLM service, what are important considerations when handling errors from the underlying model inference? Select two. Correct idea: Differentiate between transient errors such as 429 or 503 that clients should retry and permanent errors such as 400 or 401 tha.... Trap: Option A describes "Provide specific, actionable error messages with appropriate HTTP status codes and..." but the qu...
- **mock_6 Q16** / `m5-016`: During neural network training, what does it indicate when the training loss oscillates wildly rather than decreasing smoothly? Correct idea: The **learning rate** is likely too high, causing the optimizer to overshoot minima. Trap: Option A describes "The training dataset is too small" but the question asks about During neural network training, wh...
- **mock_6 Q19** / `m5-019`: What happens when you attempt to train a model with insufficient capacity on a large, complex dataset? Correct idea: The model will underfit, showing high error on both training and validation sets. Trap: Option A describes "The model will automatically expand its capacity" but the question asks about What happens when y...
- **mock_6 Q20** / `m5-020`: When analyzing **transformer** **attention** patterns, what does it indicate if a token consistently attends strongly to itself across multiple layers? Correct idea: This is a common pattern where tokens maintain their identity information while processing contextual information in other atte.... Trap: Option A describes "The position encoding is not working properly" but the question asks about When analyzing transfo...
- **mock_6 Q22** / `m5-022`: Multiple answers: What is the purpose of implementing graceful shutdown in an LLM inference service? Select two. Correct idea: To properly release **GPU memory**, close database connections, and flush **logs** before the process terminates. Trap: Option A describes "Immediately terminate all requests when shutdown begins" but the question asks about Multiple ans...
- **mock_6 Q26** / `m5-026`: What is the key difference between grid search and random search for hyperparameter optimization? Correct idea: Grid search tests all combinations of specified values while random search samples randomly from the hyperparameter space. Trap: Option A makes an absolute claim using "always": "Grid search is always more efficient". Absolute statements like thi...
- **mock_6 Q29** / `m5-029`: Multiple answers: When analyzing text datasets, what is the recommended approach for normalizing text lengths across documents of varying sizes? Select two. Correct idea: Analyze the dataset's length distribution statistics to choose a max_length that covers 90 to 95 percent of **examples** with minim.... Trap: Option A describes "Use padding and truncation with a maximum sequence length chosen based on dataset..." but the que...
- **mock_6 Q31** / `m5-031`: What is the purpose of skip connections in **transformer** architectures? Correct idea: To enable gradient flow through deep networks and facilitate training of very deep models. Trap: Option A describes "To reduce total parameters by sharing weights" but the question asks about What is the purpose of...
- **mock_6 Q32** / `m5-032`: In **transformer** architectures, what is the key difference between Pre-Layer Normalization and Post-Layer Normalization? Correct idea: Pre-LN applies layer normalization before the sublayer while Post-LN applies it after, with Pre-LN generally providing more sta.... Trap: Option A states "They are mathematically identical" which treats related concepts as identical or dismisses meaningfu...
- **mock_6 Q33** / `m5-033`: What is the fundamental architectural difference between GPT and BERT? Correct idea: GPT uses **decoder-only** architecture with causal **attention** for autoregressive generation, while BERT uses encoder-only architectu.... Trap: Option B makes an absolute claim using "only": "BERT is English-only, while GPT is multilingual by design". Absolute...
- **mock_6 Q34** / `m5-034`: In **transformer** **attention** mechanisms, what is the key difference between causal **attention** and bidirectional **attention**? Correct idea: Causal **attention** prevents tokens from attending to future positions, while bidirectional **attention** allows attending to all posi.... Trap: Option A describes "Causal **attention** uses multiple heads, while bidirectional **attention** uses one head" but the questi...
- **mock_6 Q35** / `m5-035`: What is the primary limitation that maximum sequence length imposes on **transformer** models? Correct idea: Transformers cannot process or generate text beyond their maximum sequence length, requiring **chunking** or truncation for longer.... Trap: Option A describes "Maximum sequence length determines the vocabulary size" but the question asks about What is the p...
- **mock_6 Q39** / `m5-039`: In a microservices architecture for LLM applications, what is the role of a service mesh such as Istio or Linkerd? Correct idea: To provide infrastructure-level traffic management, security, and observability without requiring changes to application code. Trap: Option A describes "To train language models across distributed infrastructure" but the question asks about In a micr...
- **mock_6 Q40** / `m5-040`: Multiple answers: What is dropout regularization and how is it typically applied in **transformer** models? Select two. Correct idea: Dropout forces the network to learn redundant, distributed representations rather than relying on individual neurons, effective.... Trap: Option A describes "A method to permanently remove less important neurons after training" but the question asks about...
- **mock_6 Q42** / `m5-042`: What is weight decay and how does it differ from L2 regularization in practice for **transformer** models? Correct idea: Weight decay directly shrinks weights during optimization, while L2 regularization adds a penalty to the loss; they are equival.... Trap: Option A describes "Weight decay increases model weights over time" but the question asks about What is weight decay...
- **mock_6 Q46** / `m5-046`: Multiple answers: What is the purpose of model checkpointing during training, and what key information should be saved? Select two. Correct idea: Checkpointing enables recovery from hardware failures, power outages, or preemption events during long training runs. Trap: Option A makes an absolute claim using "only": "Checkpointing saves only the best-performing model and discards all i...
- **mock_6 Q48** / `m5-048`: What is convergence in the context of neural network training, and what are common criteria for determining if a model has converged? Correct idea: Convergence occurs when training and validation **metrics** stabilize and show minimal improvement over multiple epochs. Trap: Option A describes "Convergence happens when the **learning rate** reaches **zero**" but the question asks about What is conv...
- **mock_6 Q49** / `m5-049`: What is early stopping patience in training, and how should it be configured for LLM training? Correct idea: Patience is the number of **evaluation** intervals without validation metric improvement before training is stopped early to preven.... Trap: Option B describes "Patience controls time between saving checkpoints" but the question asks about What is early stop...
- **mock_6 Q51** / `m5-051`: What is the difference between horizontal and vertical scaling for LLM inference systems, and when should each approach be used? Correct idea: Horizontal scaling adds more machines to distribute load, while vertical scaling increases resources on existing machines; hori.... Trap: Option B describes "Horizontal scaling increases **GPU memory** by distributing model layers, while vertical..." but the...

</details>

<!-- STUDY_ENRICHMENT_END -->

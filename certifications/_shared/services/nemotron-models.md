---
service: Nemotron models
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# Nemotron models

## What to study first

- **Core idea:** Model family — pre-trained neural network weights (checkpoints) released by NVIDIA
- **Use it when:** The system needs NVIDIA model weights or model families for reasoning, instruction following, reward modeling, or agent workflows.
- **Choose another path when:** Use NIM/Triton for serving, TensorRT-LLM for optimization, NeMo Evaluator for scoring, or NeMo Framework/Customizer for changing weights; Nemotron is the model artifact those tools operate on.
- **Concrete surface:** Access: NGC model registry, Hugging Face (`nvidia/Nemotron-*`), or as NIM containers from NGC I/O: Text prompt / chat messages / preference pair (for reward model) -> Generated text (autoregressive sampling) / reward score 0-5 (Nemotron Reward)
- **Study first:** Nemotron family and model sizes: Nemotron-3 8B, Nemotron-4 15B, Nemotron-4-340B, Nemotron-Mini 4B
- models at multiple sizes for different hardware budgets (single GPU to multi-GPU)
- Model selection criteria: quality vs latency vs cost tradeoff
- dense (all params active per token) vs MoE (subset active per token)
- context length (4k-128k+)
- license compatibility
- Integrated NVIDIA toolchain: NeMo Framework trains, NeMo Evaluator evaluates, NeMo Customizer fine-tunes, NIM serves, TensorRT-LLM optimizes, NeMo Agent Toolkit orchestrates — all centered on Nemotron
- Specialized model types: code generation models (Code Llama, Nemotron-4-340B-Code), embedding models (NV-Embed-QA, NeMo Retriever), re-ranker models (cross-encoder for retrieval precision), multimodal models (Nemotron-Vision)
- Open model vs API trade-offs: open weights for customization/data privacy/predictable cost
- NIM API for rAPId prototyping/elastic scaling/no GPU infra
- self-hosted NIM as middle ground
- **Common mix-up:** Confusing the model family itself with NIM serving, TensorRT-LLM optimization, or NeMo training tools.

## At a glance

| | |
|---|---|
| **What it is** | Model family — pre-trained neural network weights (checkpoints) released by NVIDIA |
| **How you access it** | NGC model registry, Hugging Face (`nvidia/Nemotron-*`), or as NIM containers from NGC |
| **Input** | Text prompt / chat messages / preference pair (for reward model) |
| **Output** | Generated text (autoregressive sampling) / reward score 0-5 (Nemotron Reward) |
| **Variants** | Nemotron-3 8B, Nemotron-4 15B, Nemotron-4-340B, Nemotron-Mini 4B |

```python
# Via NIM (production)
from openai import OpenAI
client = OpenAI(base_url="http://localhost:8000/v1")
client.chat.completions.create(model="nvidia/nemotron-4-15b-instruct",
    messages=[{"role":"user","content":"Explain GPU computing."}])
# Or via HuggingFace (experimentation)
from transformers import AutoModelForCausaLLM
model = AutoModelForCausaLLM.from_pretrained("nvidia/Nemotron-4-15B-Instruct")
```

**Mental model**: NVIDIA's pre-trained model weights — download from Hugging Face/NGC, serve via NIM (production) or load via transformers (experimentation).

---

## What it is, in one paragraph

NVIDIA's family of large language models, trained using the NeMo Framework. Nemotron models are available through NVIDIA NIM microservices, NGC catalog, or direct deployment. They serve as the **model backbone** for agentic AI applications on the NVIDIA platform — the models that NIM serves, Triton hosts, and TensorRT-LLM optimizes.

## Where it sits in the lifecycle

**Model / foundation** — the trained model that everything else builds around. Nemotron models are trained with NeMo Framework, customized with NeMo Customizer, served via NIM, and used by agents orchestrated with NeMo Agent Toolkit.

```
[NeMo Framework: trains Nemotron] → [NeMo Customizer: fine-tunes] → [NIM: serves] → [Agent consumes]
```

## When it fits

- Workloads specifically naming Nemotron as the model family choice
- "Which NVIDIA model family is purpose-built for agentic AI workloads?"
- When the system needs NVIDIA's own LLM offering rather than Llama, Mistral, or another model family.

## Adjacent-service decision boundary

- **Inference optimization**: That's TensorRT-LLM. Nemotron is the model being optimized, not the optimization technique.
- **Model serving platform**: That's NIM or Triton.
- **Training framework**: That's NeMo Framework (which trains Nemotron, but is not the model itself).
- **Agent orchestration**: That's NeMo Agent Toolkit.

## How it relates to neighboring services

- vs **NeMo Framework**: Framework is the training toolkit; Nemotron is the trained model produced by that toolkit.
- vs **NIM**: NIM serves Nemotron (and other models) as optimized APIs. Nemotron = what model; NIM = how it's served.
- vs **Third-party models (Llama, Mistral)**: Nemotron is NVIDIA-native, optimized for the NVIDIA stack, available through NIM.
- vs **TensorRT-LLM**: TensorRT-LLM optimizes Nemotron (and other LLMs) for GPU inference.

## Numbers, defaults, knobs you should recognize

- Trained with NeMo Framework
- Available via NIM, NGC, or direct deployment
- Designed for agentic AI workloads (instruction following, tool use, reasoning)

## Study scenario

> An enterprise wants to deploy an NVIDIA-native LLM for their agentic AI application using the NVIDIA platform stack. Which model family should they consider?
>
> **Model boundary**: Nemotron models — NVIDIA's purpose-built LLM family, available through NIM and optimized for the NVIDIA ecosystem.

## Mock signals

- **Limited direct evidence in Agentic AI mocks.** Nemotron models are referenced in the blueprint as part of the NVIDIA Platform Implementation domain but are not a primary answer choice in the current mock bank. Most model-specific questions focus on general LLM serving (NIM) and optimization (TensorRT-LLM) rather than Nemotron specifically.
- Study signal: pick Nemotron when the question asks for NVIDIA model family selection; pick NIM when it asks how to serve a model.

## Deep Dive Contents

This deep dive covers the key concepts behind Nemotron models that matter for the service boundary:

- **[NVIDIA's Model Family]**: Nemotron vs Llama/Mistral/Qwen comparison, model sizes (4B to 340B), and integrated NVIDIA toolchain
- **[Model Selection Criteria]**: size-quality-latency tradeoffs, dense vs MoE architecture, context length requirements, and license considerations
- **[Specialized Models]**: code generation, embedding, re-ranker, and multimodal models; trend from one giant model toward task-specific models
- **[Open Model vs API Model Trade-offs]**: self-hosted open weights vs NIM-hosted API endpoints; choosing based on data residency, workload pattern, customization needs, and latency requirements

### DEEP DIVE: NVIDIA's Model Family

NVIDIA's Nemotron model family is distinct from other major LLM families in several ways:

**Nemotron vs Other Model Families:**

| Dimension | Nemotron | Llama (Meta) | Mistral | Qwen (Alibaba) |
|-----------|----------|--------------|---------|----------------|
| **Primary differentiator** | NVIDIA stack integration, agentic optimization | Open weights, community ecosystem | Efficiency, small model performance | Multilingual, long context |
| **Serving path** | NIM-native, TensorRT-LLM optimized | Broad ecosystem (vLLM, TGI, Ollama) | Broad ecosystem (vLLM, etc.) | Broad ecosystem |
| **Fine-tuning** | NeMo Customizer (optimized for NVIDIA stack) | Various (PEFT, Axolotl, etc.) | Various | Various |
| **Training data** | Curated with NeMo Curator, emphasis on code + reasoning | Web corpus, refined filtering | Web corpus + curated data | Multilingual web corpus |
| **Instruction tuning** | RLHF, with Nemotron-4-340B-Reward as reward model | RLHF, DPO, various versions | Instruction-tuned variants | RLHF, DPO |

Nemotron models are designed to be **served via NIM**, **fine-tuned via NeMo Customizer**, and **evaluated via NeMo Evaluator**. This integrated toolchain is NVIDIA's competitive advantage — every component is optimized for the others:

```
[NeMo Framework trains] → [NeMo Evaluator evaluates] → [NeMo Customizer fine-tunes]
                                                    → [NIM serves optimized inference]
                                                    → [TensorRT-LLM optimizes kernels]
                                                    → [NeMo Agent Toolkit orchestrates agents]
```

If a study prompt mentions "NVIDIA's end-to-end model development and deployment stack," this integration is the boundary to learn: train with NeMo Framework, evaluate with NeMo Evaluator, customize with NeMo Customizer, serve with NIM, optimize with TensorRT-LLM, orchestrate with NeMo Agent Toolkit — all centered on the Nemotron model family.

**Model sizes and architectures:**
Nemotron has shipped in several configurations:
- **Nemotron-3 8B:** Dense transformer, 8B parameters, for efficient inference.
- **Nemotron-4 15B:** Dense transformer, 15B parameters, balanced quality/efficiency.
- **Nemotron-4-340B (and variants):** Dense transformer, 340B parameters, high-capability family member used in NVIDIA examples such as reward/instruct workflows; requires multi-GPU deployment.
- **Nemotron-Mini 4B:** Small dense model optimized for on-device and latency-sensitive use cases.

The trend: NVIDIA offers models at multiple sizes so customers can match the model to the hardware budget. A 4B model runs on a single GPU; a 340B model requires multiple GPUs with model parallelism.

### DEEP DIVE: Model Selection Criteria

Choosing the right model for a given task is a core study skill. The key criteria are:

**Size (number of parameters):**

| Size | Typical Config | Latency | Quality | GPU Requirements |
|------|---------------|---------|---------|-----------------|
| 4B | 4-8B parameters | Very low | Good for simple tasks | Single consumer GPU |
| 8-15B | 8-15B parameters | Low | Good for most tasks | Single datacenter GPU |
| 34-70B | 30-70B parameters | Medium | High quality | 1-2 GPUs |
| 200B+ | 200-500B parameters | High | Highest-capability tier for complex reasoning, subject to benchmark/date/version | 4+ GPUs |

The tradeoff: **quality vs latency vs cost.** Larger models produce better reasoning, instruction following, and factual accuracy, but they are slower (more FLOPs per token) and more expensive (more GPU hours). Smaller models are faster and cheaper but may fail at complex reasoning.

For agentic AI, the tradeoff is often a **two-model strategy**: a small, fast model for routing and simple responses, and a large, capable model for complex reasoning steps. This is the router pattern mentioned in the NeMo Agent Toolkit section.

**Architecture: Dense vs Mixture of Experts (MoE):**
- **Dense:** All parameters are active for every token. Simpler, more predictable memory usage, better for batch serving. Examples: most Nemotron models, Llama 2/3.
- **MoE:** Only a subset of parameters are active per token (via learned routing). Achieves higher effective capacity without proportional compute cost. Examples: Mixtral 8x7B, Qwen2.5-MoE, Nemotron-MoE variants.

MoE is attractive when you want the quality of a larger model with the inference cost of a smaller one. But MoE requires more GPU memory (all experts must be loaded) and has less predictable latency (routing overhead, expert load imbalance).

**Context length:**
Longer context windows enable processing larger documents, codebases, or conversation histories in a single pass. Treat context length as a per-model/version deployment property, not a permanent family guarantee. When choosing:
- 4k-8k: Most common; sufficient for chat, summarization, and standard RAG chunks.
- 32k-128k: Needed for code repository analysis, long document processing, multi-turn agents with conversation memory.
- 128k+: Required for book-length analysis, very long conversational agents, comprehensive audit trails.

**License:**
Nemotron models are available under NVIDIA's Open Model License, which permits commercial use and customization (with certain conditions). This differs from:
- **Llama 3:** Custom license (commercial use allowed for most use cases, restrictions on usage volume for Llama 3.1).
- **Mistral:** Apache 2.0 (permissive, no restrictions).
- **Qwen:** Custom license (commercial use permitted with registration for larger models).

When a project involves "deploying in a regulated industry" or "proprietary data," license terms may be a deciding factor.

**When a model family matters vs when any capable model works:**
- **Model family matters when:** The scenario specifies NVIDIA's integrated toolchain (NeMo, NIM, TensorRT-LLM), requires NVIDIA-specific features (e.g., reward modeling with Nemotron-4-340B-Reward), or mentions ecosystem compatibility.
- **Any capable model works when:** The scenario is about generic LLM deployment, does not mention NVIDIA toolchain integration, is externally facing (customer chose their own model), or the prompt is really about infrastructure rather than model selection.

### DEEP DIVE: Specialized Models

The industry trend is moving from "one giant model for everything" toward **specialized models for specific tasks.** NVIDIA's ecosystem reflects this:

**Code generation models:**
Models fine-tuned specifically for code synthesis, completion, and reasoning. Examples: Code Llama, StarCoder, Nemotron-4-340B-Code. These models are trained on code-heavy corpora (GitHub, Stack Overflow, documentation) and excel at:
- Code completion (fill-in-the-middle)
- Code generation from natural language
- Code explanation and documentation
- Bug detection and fixing

For agentic AI, code agents often use code-specialized models rather than general-purpose LLMs because they produce more accurate and syntactically valid code output.

**Embedding models:**
Models that convert text into dense vector representations for retrieval and similarity search. Examples: NVIDIA NeMo Retriever embedding models, NV-Embed-QA, E5, BGE. These are smaller models (typically 100M-7B parameters) optimized for:
- Semantic search: "Find documents similar to this query."
- RAG retrieval: Encode chunks, retrieve top-k by cosine similarity.
- Classification: Use embeddings as features for downstream classifiers.
- Clustering: Group similar documents for deduplication or topic discovery.

For agentic AI, embedding models are the backbone of long-term memory retrieval and RAG tools. A separate embedding model is often used in parallel with the main generation model — one for retrieval, one for generation.

**Re-ranker models:**
Models that take a query and a set of candidate documents and output relevance scores. They are more accurate than embedding similarity alone because they use cross-encoder attention between query and document. Examples: BGE-Reranker, Cohere Rerank, NVIDIA re-ranker models. In a RAG pipeline:
```
[Query] → [Embedding model: retrieve top-100] → [Re-ranker: score top-100 → select top-5] → [LLM generation]
```
Re-rankers add latency (they process query + each document pair) but significantly improve retrieval precision. For enterprise RAG where retrieval quality matters, re-rankers are standard.

**Multimodal models:**
Models that process multiple modalities (text + images + audio + video). Examples include NVIDIA vision-language offerings, LLaVA-style open models, and hosted multimodal chat models. These models extend language model capabilities to visual understanding. Use cases:
- Document analysis: Extract text and layout from PDFs, charts, and forms.
- Image captioning and description for accessibility.
- Visual question answering: "What does this chart show?"
- Video understanding (with frame extraction).

**The trend toward specialization:**
The architectural insight: a single 340B model is suboptimal for all tasks. It wastes compute on simple queries (use a small model instead) and lacks specialized training for code/retrieval/vision (use a fine-tuned model instead). NVIDIA's ecosystem supports this specialization through:
- **NIM for multiple model types:** Deploy generation, embedding, re-ranker, and multimodal models as standardized API endpoints.
- **NeMo Customizer for domain adaptation:** Fine-tune base models for specific tasks.
- **Agent Toolkit for model routing:** Route queries to the appropriate specialized model.

For study: when a scenario involves "retrieval quality," think embedding + re-ranker models. When it involves "code generation," think code-specialized models. When it involves "document analysis with images," think multimodal models.

### DEEP DIVE: Open Model vs API Model Trade-offs

NVIDIA occupies a unique position by offering **both** open weights Nemotron models and NIM-hosted API endpoints. Understanding the trade-offs is critical for service selection.

**Open weights models (self-hosted):**
The model weights are downloadable and deployable on your own infrastructure.

| Advantage | Disadvantage |
|-----------|-------------|
| Full control over deployment: latency, throughput, batching | Infrastructure cost: GPUs, networking, cooling |
| Customization: fine-tune, quantize, prune, distill | Operations burden: updates, monitoring, scaling |
| No data leakage: all data stays within your infrastructure | Model selection burden: choosing the right version |
| No API dependency: works offline, no service outages | Version management: tracking model updates |
| Predictable cost: fixed GPU investment, no per-token pricing | Over-provisioning: capacity planning for peak load |

**API-based models (NIM-hosted):**
The model runs on NVIDIA's (or a partner's) infrastructure, accessed via REST API.

| Advantage | Disadvantage |
|-----------|-------------|
| No infrastructure: zero GPU management | Data sent to external service (privacy concern) |
| Provider-managed model/profile updates | API dependency: outages, rate limits, latency; updates must still be validated against your eval set |
| Usage-based pricing: pay for what you use | Variable cost: unpredictable for spiky workloads |
| Elastic scaling: automatically handles load | Limited customization: cannot fine-tune the hosted model |
| Fastest time-to-deployment: minutes via API key | Vendor lock-in: integration depends on API compatibility |

**NVIDIA's position: both.**
NVIDIA offers Nemotron in both forms:
- **Open weights on NGC/Hugging Face:** Download and self-host Nemotron models under the NVIDIA Open Model License.
- **NIM microservices:** Deploy Nemotron models as optimized, containerized microservices on NVIDIA hardware — either self-hosted (in your data center) or on NVIDIA's cloud infrastructure.

This dual approach means the study path should cover **when to choose each route**:

- **Choose open weights when:** Customization is needed (fine-tuning on proprietary data), data cannot leave the premises (regulated industry), the workload is large and predictable (better ROI with owned GPUs), or offline operation is required.

- **Choose NIM API when:** rapid prototyping, variable or unpredictable workloads, no GPU infrastructure, provider-managed model/profile updates, or evaluating models before committing to self-hosting.

- **Choose self-hosted NIM (containerized) when:** You want the benefits of NIM (optimized inference, standard API) but on your own infrastructure for data privacy or cost reasons. This is the middle ground: NVIDIA's optimization, your GPUs.

The key design insight: the choice is rarely "open vs API" in isolation. It is about the **constraints** in the scenario:
- Is there a data residency requirement? Open weights or self-hosted NIM.
- Is the workload steady and large? Self-hosting for cost efficiency.
- Is this a prototype or experiment? API for fast iteration.
- Does the team need to fine-tune? Open weights (customization) vs API for base model use.
- Is latency critical? Self-hosted (no network hop, predictable performance) vs API (variable network latency).

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Model / foundation
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Model family — pre-trained neural network weights (checkpoints) released by NVIDIA
- **Use it when:** The system needs NVIDIA model weights or model families for reasoning, instruction following, reward modeling, or agent workflows.
- **Do not use it when:** Choose NIM/Triton for serving, TensorRT-LLM for optimization, NeMo Evaluator for scoring, or NeMo Framework/Customizer for changing weights; Nemotron is the model artifact those tools operate on.
- **Common trap:** Confusing the model family itself with NIM serving, TensorRT-LLM optimization, or NeMo training tools.
- **Scenario signal:** An agent or application needs an NVIDIA reasoning, instruction, embedding, or reward model family as the base model.
### Study notes
- Place **Nemotron models** at **Model / foundation**: NVIDIA's pre-trained model weights — download from Hugging Face/NGC, serve via NIM (production) or load via transformers (experimentation).
- Boundary cue: use it when the system needs NVIDIA model weights or model families for reasoning, instruction following, reward modeling, or agent workflows. Neighboring-service cue: not as the serving stack, optimizer, evaluator, or training framework; models are the artifact those tools operate on.
### Must know
- **Nemotron family and model sizes**: Nemotron-3 8B, Nemotron-4 15B, Nemotron-4-340B, Nemotron-Mini 4B; models at multiple sizes for different hardware budgets (single GPU to multi-GPU)
- **Model selection criteria**: quality vs latency vs cost tradeoff; dense (all params active per token) vs MoE (subset active per token); per-model context length; license compatibility
- **Integrated NVIDIA toolchain**: NeMo Framework trains, NeMo Evaluator evaluates, NeMo Customizer fine-tunes, NIM serves, TensorRT-LLM optimizes, NeMo Agent Toolkit orchestrates — all centered on Nemotron
- **Specialized model types**: code generation models (Code Llama, Nemotron-4-340B-Code), embedding models (NV-Embed-QA, NeMo Retriever), re-ranker models (cross-encoder for retrieval precision), multimodal models (Nemotron-Vision)
- **Open model vs API trade-offs**: open weights for customization/data privacy/predictable cost; NIM API for rapid prototyping/elastic scaling/no GPU infra; self-hosted NIM as middle ground
### What to recognize
- **NVIDIA-native model selection** → scenario asks which model family is purpose-built for the NVIDIA stack with NIM-native serving and TensorRT-LLM optimization; Nemotron is NVIDIA's integrated LLM family
- **Model size selection based on constraints** → scenario describes hardware budget (single GPU vs multi-GPU) and quality requirements; match model size (4B for single consumer GPU, 340B for 4+ GPUs) to the constraint
- **Specialized model for task** → scenario involves code generation, retrieval quality, or vision understanding; the trend is task-specific models (code models, embedding + re-ranker, multimodal) rather than one general model
- **Open weights vs API decision** → scenario describes data residency requirements, workload predictability, or customization needs; open weights for regulated/offline/customization use cases, NIM API for prototyping/unpredictable/no-GPU scenarios
- **Dense vs MoE architecture trap** → scenario mentions model capacity without proportional compute cost but also notes memory constraints; MoE requires loading all experts into GPU memory despite lower per-token FLOPs
### Hands-on checks
- Draw one build situation where Nemotron is the model-family choice, then change one constraint so NIM, TensorRT-LLM, NeMo Evaluator, or NeMo Customizer becomes the better fit.
## Study tips from practice questions
- Practice questions usually check whether **Nemotron models** matches **Model / foundation**, not whether the product name sounds familiar.
- Boundary cue: use it when the system needs NVIDIA model weights or model families for reasoning, instruction following, reward modeling, or agent workflows.
- Neighboring-service cue: not as the serving stack, optimizer, evaluator, or training framework; models are the artifact those tools operate on.
- The common trap pattern is: Confusing the model family itself with NIM serving, TensorRT-LLM optimization, or NeMo training tools.
- If it appears as a nearby option, decide by the required lifecycle phase before choosing a product name.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where a neighboring service is the better tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q28** / `ft-005` (Fine-Tuning): In RLHF with PPO, the KL-divergence penalty between the policy and the reference model serves what purpose? Correct idea: Prevents the policy from drifting too far from the SFT reference, suppressing reward-hacking behaviors that satisfy the reward..
- **mock_1 Q29** / `ft-006` (Fine-Tuning): Group Relative Policy Optimization (GRPO) differs from standard PPO most fundamentally in: Correct idea: Removing the value (critic) network and computing advantages from a group of sampled responses' relative rewards.
- **mock_1 Q30** / `ft-007` (Fine-Tuning): DPO trains directly on preference pairs without an explicit reward model. The dataset format requirement is: Correct idea: (prompt, chosen response, rejected response) triples.
- **ft-012** / `ft-012` (Fine-Tuning): A reward model trained on preferences is showing reward hacking — high rewards but bad outputs. Which countermeasure addresses the root cause? Correct idea: Improve reward-model coverage with adversarial preference data targeting the failure patterns, and increase the KL penalty.
- **mock_3 Q54** / `m2-054` (LLM Architecture): Multiple answers: What is Reinforcement Learning from Human Feedback and why is it important for aligning LLMs with human preferences? Select two. Correct idea: RLHF involves training a reward model on human preference data that learns to predict which responses humans would prefer, serv.. Trap: This describes synthetic data generation for pre-training, not RLHF. RLHF uses human preference judgments to train a..

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it for NVIDIA-specific study, and which neighboring NVIDIA services are easy to confuse. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->

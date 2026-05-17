---
capability: Foundation Model Training Stack
status: populated
source_lens: general-study
---

# Foundation Model Training Stack

## What to study first

- **Core idea:** You are building the heavy training system that turns curated data and model architecture decisions into checkpoints. This is the path for training from zero or continued pretraining, not the default answer for most application problems. The output is a candidate model artifact plus evidence: checkpoints, configs, tokenizer, training logs, eval reports, model card, and release notes.
- **Study first:** Decide whether full training is justified. Check whether API use, prompt/context design, RAG, PEFT/LoRA, or SFT is enough first.
- Choose model family and architecture: dense Transformer, Mixture of Experts (MoE), embedding model, reranker, multimodal model, code model, or domain model.
- Choose tokenizer and config: vocabulary size, context length, hidden size, layers, attention heads, MQA/GQA, RoPE/ALiBi, normalization, activation.
- Prepare data mixtures and sampling: general text, domain, code, math, safety, synthetic, multilingual, and held-out validation.
- Plan compute: GPU type, cluster size, interconnect, storage throughput, job scheduler, parallelism strategy.

## What You Are Building

You are building the heavy training system that turns curated data and model architecture decisions into checkpoints. This is the path for training from zero or continued pretraining, not the default answer for most application problems. The output is a candidate model artifact plus evidence: checkpoints, configs, tokenizer, training logs, eval reports, model card, and release notes.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Do not confuse with |
|---|---|---|
| Train model from zero | Full foundation training: architecture/config/tokenizer, corpus mix, distributed jobs, next-token loss, checkpoints, mixed precision, and multi-node communication. | Selecting an existing API or deploying an endpoint |
| Fine-tune existing model | Only relevant for continued pretraining or heavy SFT when adapter tooling is not enough. Most fine-tune lanes should use the customization toolkit instead. | LoRA/QLoRA adapter tuning |
| Use existing model/API | Not used. You already have a model and should focus on prompt/context, endpoint, gateway, and evals. | Prompt engineering |
| Build agent/RAG application | Not used unless you are creating a new model for the agent, which is rare. Agents usually call endpoints. | Agent orchestration |
| Operate, govern, and improve | Use training logs only as release evidence; operations work happens in observability/cost/eval loops. | Live serving optimization |

## Pipeline

1. Decide whether full training is justified. Check whether API use, prompt/context design, RAG, PEFT/LoRA, or SFT is enough first.
2. Choose model family and architecture: dense Transformer, Mixture of Experts (MoE), embedding model, reranker, multimodal model, code model, or domain model.
3. Choose tokenizer and config: vocabulary size, context length, hidden size, layers, attention heads, MQA/GQA, RoPE/ALiBi, normalization, activation.
4. Prepare data mixtures and sampling: general text, domain, code, math, safety, synthetic, multilingual, and held-out validation.
5. Plan compute: GPU type, cluster size, interconnect, storage throughput, job scheduler, parallelism strategy.
6. Configure training: objective, optimizer, learning rate schedule, batch size, precision, checkpoint cadence, activation checkpointing.
7. Run distributed training with monitoring for loss, throughput, GPU utilization, communication stalls, data loader bottlenecks, and divergence.
8. Save checkpoints and resume safely after failures.
9. Evaluate capability, safety, bias, contamination, regressions, and downstream readiness.
10. Register approved artifacts with model cards and hand off to serving.

## Core Concepts

- **Pretraining** learns broad patterns from a large corpus; **continued pretraining** adapts an existing base model to a domain corpus.
- **NeMo Framework** is the NVIDIA cue for distributed LLM training/customization recipes, checkpoints, and large-scale model work.
- **Dense models** activate the same main network path for every token. Almost all parameters participate in each forward/backward pass, so total parameters and active compute are closely related.
- **MoE models** replace some dense feed-forward blocks with multiple expert networks plus a router. Each token usually goes to the top 1-2 experts, so the model can have many total parameters while activating only a smaller subset per token.
- **Tokenizer choices** affect sequence length, rare terms, multilingual behavior, and embedding matrix size.
- **Precision choices** such as FP32, TF32, FP16, BF16, and FP8 control how weights, activations, gradients, and matrix multiplies are represented numerically. They do not change tokens; they change the numbers used to train on those tokens.
- **Data parallelism** replicates the model and splits batches.
- **Tensor parallelism** splits tensors/layers across GPUs and needs high-bandwidth communication.
- **Pipeline parallelism** splits layers across stages and needs schedule tuning to reduce bubbles.
- **Expert parallelism** places MoE experts across GPUs and needs all-to-all routing.
- **NCCL** handles GPU collective communication such as all-reduce, all-gather, reduce-scatter, and all-to-all.
- **Checkpointing** saves model, optimizer, scheduler, RNG, tokenizer/config, and sometimes sharded distributed state.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "new foundation model" | full training stack, curated corpus, distributed training, checkpoints | prompt engineering |
| "NVIDIA distributed LLM training" | NeMo Framework + NCCL + NGC environment | NIM serving |
| "domain model from existing base" | continued pretraining or SFT depending depth | training from zero by default |
| "small behavior/style change" | PEFT/SFT or prompt/context | full pretraining |
| "GPU communication bottleneck" | NCCL, interconnect topology, tensor/expert parallelism | adding more agents |
| "some experts overloaded" | MoE router balance and expert capacity | treating MoE as simple ensemble |
| "training diverges" | learning rate, precision, data quality, normalization, gradient clipping | serving gateway change |
| "need resume after failure" | checkpoint completeness and sharded restore | only saving final weights |
| "need production approval" | model card, eval report, risk review, registry version | untracked checkpoint files |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Training from zero is the normal path | It is expensive and rare; most applications should start with existing models, RAG, prompting, or tuning. |
| NIM trains foundation models | NIM serves approved models; NeMo Framework handles training/customization workflows. |
| MoE is an ensemble | MoE is one sparse model with a router selecting experts per token. |
| FP8 is just smaller FP16 | FP8 needs scaling/Transformer Engine-style handling and validation for quality/stability. |
| NCCL is a training framework | NCCL is the communication library underneath distributed training/inference. |
| Checkpoint means weights only | Real checkpointing includes config, tokenizer, optimizer/scheduler state, RNG, and sharded metadata. |
| Bigger model fixes bad data | Bad or contaminated data becomes model behavior. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Framework | Distributed LLM training, customization, checkpoints, and large-scale recipes. |
| NVIDIA | NCCL | GPU collective communication for tensor/data/pipeline/expert parallel workloads. |
| NVIDIA | NGC | Containers, model artifacts, and training environment packaging. |
| Open source | PyTorch FSDP, DeepSpeed, Megatron-LM | Distributed training strategies and memory/parallelism tradeoffs. |
| Cloud | SageMaker, Vertex AI, Azure ML | Managed training jobs, experiment tracking, and artifact registration. |

## Deep Dive

### Where it sits in the lifecycle

Foundation training is the **create-or-continue model artifact layer**. It is the heaviest path and usually the wrong answer for ordinary application changes.

```text
[Curated corpus] -> [Tokenizer/config] -> [Distributed training]
        -> [Checkpoints] -> [Evaluator + model card] -> [Registry] -> [Serving]
```

If the scenario says serve, route, retrieve, prompt, or tune a small behavior, this is probably not the answer.

### NVIDIA service map

| Need | NVIDIA cue | Not this |
|---|---|---|
| Train/continue large models | NeMo Framework | NIM |
| GPU collective communication | NCCL | Agent orchestration |
| Containers/artifacts | NGC | Model gateway |
| Corpus cleaning | NeMo Curator + RAPIDS | NeMo Retriever |
| Quality/regression evidence | NeMo Evaluator | Training logs alone |
| Production serving | NIM/Triton/TensorRT-LLM | NeMo Framework alone |

### Architecture and data decisions

The model family, tokenizer, data mixture, context length, and parallelism plan are coupled.

| Decision | Why it matters | Trap |
|---|---|---|
| Dense vs MoE | Dense activates most weights; MoE routes to experts | MoE is not a committee ensemble |
| Tokenizer | Controls sequence length, rare terms, multilingual behavior | Changing tokenizer breaks compatibility |
| Data mixture | Shapes model behavior and bias | Bad data is learned, not washed away |
| Context length | Affects attention and KV costs | Long context is not free |
| Objective | Pretraining vs continued pretraining vs instruction tuning | Confusing raw corpus training with SFT |

### Dense vs MoE in practice

A **dense Transformer** sends every token through the same attention and feed-forward blocks. If the model has 7B parameters, most of those parameters are involved for each token during training. Dense models are simpler to train, route, checkpoint, and serve because every batch uses the same compute path.

A **Mixture of Experts** model is one sparse model, not a set of separate models voting. In many MoE Transformers, the feed-forward layer is replaced by several expert feed-forward networks. A router scores each token and sends it to the best expert or top few experts. This gives the model more total capacity without multiplying active compute by the same amount.

MoE introduces its own failure modes:

| MoE concept | What it means | Failure signal |
|---|---|---|
| Router | Chooses which expert sees each token | Same few experts overloaded |
| Top-k routing | Sends token to one or more experts | More active compute as k increases |
| Expert capacity | Limit on tokens an expert can process per batch | Dropped or delayed tokens |
| Load-balancing loss | Training pressure to distribute tokens across experts | Poor expert utilization |
| Expert parallelism | Experts placed across GPUs | All-to-all communication bottleneck |

Exam shortcut: **dense** means simpler, predictable active compute; **MoE** means sparse active compute, more total capacity, router/load-balancing concerns, and more complicated distributed communication.

### Distributed training knobs

| Parallelism | Mental model | Failure signal |
|---|---|---|
| Data parallel | Replicate model, split batches | Gradient sync bottleneck |
| Tensor parallel | Split layer math across GPUs | All-gather/reduce-scatter pressure |
| Pipeline parallel | Split layers into stages | Pipeline bubbles |
| Expert parallel | Place MoE experts across GPUs | All-to-all routing imbalance |

NCCL is the communication substrate for collectives. It is not the training framework, but poor NCCL/interconnect behavior can dominate throughput. Data parallelism stresses all-reduce/reduce-scatter for gradients. Tensor parallelism stresses all-gather/reduce-scatter inside layers. MoE expert parallelism adds all-to-all traffic because tokens move to experts that may live on other GPUs.

### Precision and checkpointing

Mixed precision training usually keeps the numerically sensitive parts in higher precision while using lower precision for expensive matrix multiplies. Gradients and optimizer states are often accumulated or stored in FP32-like precision even when forward/backward matmuls use FP16, BF16, TF32, or FP8. That is why "training uses FP8" does not mean every number in the job is FP8.

| Precision/checkpoint item | What it is | Exam mental model |
|---|---|---|
| FP32 | 32-bit floating point with broad range and precision | Stable baseline, higher memory and lower Tensor Core throughput |
| TF32 | NVIDIA Tensor Core mode for FP32 matmuls with FP32 range and reduced mantissa precision | Faster FP32-style training matmuls on supported GPUs, often with FP32 accumulation |
| FP16 | 16-bit float with small exponent range | Fast and memory-light, but can overflow/underflow; may need loss scaling |
| BF16 | 16-bit bfloat with FP32-like exponent range and fewer mantissa bits | Often more stable than FP16 for training because the dynamic range is wider |
| FP8 | 8-bit floating formats commonly used with scaling, amax tracking, and Transformer Engine-style handling | Throughput/memory win on supported hardware, but not a drop-in replacement; validate quality and stability |
| Complete checkpoint | Weights + optimizer + scheduler + RNG + tokenizer/config + sharded metadata | Resume and reproduce the distributed job, not just save final weights |

Precision affects both speed and failure modes. If loss suddenly diverges, inspect learning rate, data quality, normalization, gradient clipping, and precision/scaling before blaming the serving layer.

The final handoff is not "we have weights." It is a model artifact with dataset lineage, model card, eval report, known limitations, safety approval, and a registry version.

### Implementation card: training loop

```python
for batch in dataloader:
    input_ids = batch["input_ids"].to(device)
    labels = batch["labels"].to(device)

    with autocast(dtype="bf16"):  # or fp16/fp8 with the right engine and scaling
        logits = model(input_ids).logits
        # Next-token prediction loss: token t predicts token t+1.
        loss_lm = cross_entropy(
            logits[:, :-1, :].reshape(-1, vocab_size),
            labels[:, 1:].reshape(-1),
        )
        loss = loss_lm + moe_load_balance_loss(model)  # if MoE

    scaler.scale(loss).backward()
    scaler.unscale_(optimizer)
    clip_grad_norm_(model.parameters(), max_norm=1.0)
    scaler.step(optimizer)
    scaler.update()
    scheduler.step()
    optimizer.zero_grad(set_to_none=True)

    log({
        "loss": loss.item(),
        "perplexity": exp(loss_lm.item()),
        "tokens_per_second": throughput(),
        "gpu_utilization": gpu_util(),
        "grad_norm": grad_norm(model),
    })
```

For pretraining and continued pretraining, the core differentiable objective is usually next-token cross-entropy, often reported as loss and perplexity. MoE training adds router/load-balancing terms. The release decision still depends on downstream evals, contamination checks, safety, and model-card evidence.

## Exam Signals

- "train from zero" -> full training stack, not RAG or serving.
- "NeMo Framework" -> distributed training/customization, not serving.
- "NCCL" -> GPU collectives/communication, not orchestration.
- "continue pretraining" -> domain corpus plus base model, not prompt-only fix.
- "multi-node gradients" -> distributed training and NCCL collectives.
- "MoE experts imbalanced" -> router/load-balancing issue.
- "FP8/BF16/FP16" -> precision and Tensor Core/training stability tradeoff.
- "resume after failure" -> complete checkpointing.
- "new checkpoint ready for release" -> registry, model card, eval evidence.
- "small durable behavior change" -> tuning/customization, not foundation training.

## Hands-on Checks

1. Draw a train-from-zero path from curated corpus to tokenizer/config to distributed job to checkpoint to eval to registry.
2. Explain when dense, MoE, embedding, reranker, and multimodal models are different training targets.
3. Classify a bottleneck as data loading, compute, NCCL communication, checkpoint I/O, or eval pipeline.
4. List what must be saved in a checkpoint besides weights.
5. Decide whether five product requests need prompt changes, RAG, PEFT/SFT, continued pretraining, or full training.

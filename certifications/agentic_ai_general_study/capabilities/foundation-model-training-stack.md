---
capability: Foundation Model Training Stack
status: populated
source_lens: general-study
---

# Foundation Model Training Stack

## What You Are Building

You are building the heavy training system that turns curated data and model architecture decisions into checkpoints. This is the path for training from zero or continued pretraining, not the default answer for most application problems. The output is a candidate model artifact plus evidence: checkpoints, configs, tokenizer, training logs, eval reports, model card, and release notes.

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
- **Dense models** activate most parameters for every token.
- **MoE models** route tokens to a subset of experts, increasing total parameters without proportional active compute.
- **Tokenizer choices** affect sequence length, rare terms, multilingual behavior, and embedding matrix size.
- **FP32, TF32, FP16, BF16, and FP8** are precision choices with different speed, memory, and stability tradeoffs.
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

### Distributed training knobs

| Parallelism | Mental model | Failure signal |
|---|---|---|
| Data parallel | Replicate model, split batches | Gradient sync bottleneck |
| Tensor parallel | Split layer math across GPUs | All-gather/reduce-scatter pressure |
| Pipeline parallel | Split layers into stages | Pipeline bubbles |
| Expert parallel | Place MoE experts across GPUs | All-to-all routing imbalance |

NCCL is the communication substrate for collectives. It is not the training framework, but poor NCCL/interconnect behavior can dominate throughput.

### Precision and checkpointing

| Precision/checkpoint item | Exam mental model |
|---|---|
| FP32 | Stable, expensive baseline |
| TF32 | NVIDIA Tensor Core acceleration for FP32-like matmuls |
| FP16 | Fast, may need loss scaling |
| BF16 | Wider exponent, often more stable |
| FP8 | Throughput/memory improvement with scaling and validation |
| Complete checkpoint | Weights + optimizer + scheduler + RNG + tokenizer/config + sharded metadata |

The final handoff is not "we have weights." It is a model artifact with dataset lineage, model card, eval report, known limitations, safety approval, and a registry version.

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

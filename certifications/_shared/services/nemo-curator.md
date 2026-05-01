---
service: NeMo Curator
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# NeMo Curator

## At a glance

| | |
|---|---|
| **What it is technically** | NVIDIA's GPU-accelerated data curation toolkit for LLM and multimodal training datasets |
| **How you access it** | Python package and NVIDIA containers, commonly used in GPU data-preparation pipelines |
| **Input** | Raw document collections, web crawls, JSONL/Parquet corpora, metadata, and filtering rules |
| **Output** | Deduplicated, quality-filtered, blended, and PII-redacted datasets ready for training or customization |
| **Inside** | NVIDIA implementation of common curation methods: exact/fuzzy dedup, quality filtering, PII handling, data blending, and scalable GPU processing |

```python
# Conceptual NeMo Curator flow: load raw documents, normalize, filter, then export.
from nemo_curator.datasets import DocumentDataset
from nemo_curator.modifiers import UnicodeReformatter
from nemo_curator import Sequential

dataset = DocumentDataset.read_json("raw_corpus/*.jsonl")
pipeline = Sequential([
    UnicodeReformatter(),
    # add quality filters, PII handling, dedupe, and blending steps here
])

curated = pipeline(dataset)
curated.to_json("curated_training_corpus/")
```

**Mental model**: NeMo Curator is the NVIDIA product answer for **training-data curation before model training or customization**.

## Study card data

- **What it is:** NVIDIA's GPU-accelerated toolkit for curating training datasets before they are used by NeMo Framework, NeMo Customizer, or another model-training path.
- **Lifecycle:** Data preparation
- **Relevant exams:** NCP-GENL, NCP-AAI
- **Use it when:** A scenario asks for NVIDIA data deduplication, quality filtering, PII removal, synthetic-data filtering, or scalable corpus preparation before training or fine-tuning.
- **Do not use it when:** The task is inference-time RAG retrieval, model serving, agent orchestration, guardrails, or low-level inference optimization.
- **Common trap:** Confusing **NeMo Curator** with **NeMo Retriever**. Curator prepares training data; Retriever serves knowledge at query time.
- **Scenario signal:** "A team must clean, dedupe, redact, and quality-filter a huge web corpus before using it for NeMo training."

### Must know

- **Curator vs Retriever**: Curator = pre-training or tuning data preparation. Retriever = runtime RAG retrieval.
- **Curator vs RAPIDS**: RAPIDS is the GPU data-science acceleration layer; Curator is the LLM-focused curation toolkit built around those kinds of accelerated operations.
- **Curator vs NeMo Framework**: Curator prepares datasets; Framework trains/customizes models with those datasets.
- **Curator vs Guardrails**: Curator filters data before training; Guardrails enforce policy at runtime.
- **NVIDIA specificity**: MinHash, LSH, quality filtering, and PII redaction are generic techniques. NeMo Curator is NVIDIA's GPU-accelerated implementation and product packaging for those techniques.

### High-yield exam signals

- "NVIDIA tool for deduplication before training" -> NeMo Curator.
- "Prepare a corpus for NeMo Framework training" -> NeMo Curator.
- "Remove PII from training data" -> NeMo Curator.
- "Connect enterprise documents to a live agent with embeddings and reranking" -> NeMo Retriever, not Curator.
- "Optimize LLM decode latency" -> TensorRT-LLM/NIM serving path, not Curator.

### Common confusions

| Scenario | Better answer | Tempting wrong answer |
|---|---|---|
| Clean noisy training corpus | NeMo Curator | NeMo Retriever |
| Serve a supported model as an API | NIM | NeMo Curator |
| Build agent workflows with tools | NeMo Agent Toolkit | NeMo Curator |
| Runtime policy checks and prompt-injection handling | NeMo Guardrails | NeMo Curator |
| Speed dataframe-style preprocessing broadly | RAPIDS | NeMo Curator when the scenario is not LLM data curation |

## What belongs in generic study vs NVIDIA study

Generic concepts such as exact hashing, MinHash, LSH, Jaccard similarity, PII redaction strategies, contamination checks, and data-blending tradeoffs are not NVIDIA-specific. They belong in the **Training Data Curator** page in the vendor-neutral study track.

The NVIDIA-specific knowledge is:

- NeMo Curator is the NVIDIA product name.
- It is positioned in the data-preparation phase before training/customization.
- It is GPU-accelerated and related to the RAPIDS/cuDF/cuML ecosystem.
- It feeds cleaned datasets into NeMo Framework or other training/customization workflows.
- It is not NeMo Retriever, NIM, NeMo Guardrails, NeMo Evaluator, or TensorRT-LLM.

## Decision pattern

1. Ask whether the scenario is about **training data before training** or **knowledge at inference time**.
2. If it is training data and the question asks for an NVIDIA component, choose **NeMo Curator**.
3. If it is runtime RAG over enterprise documents, choose **NeMo Retriever**.
4. If it is model behavior adaptation, choose NeMo Framework or NeMo Customizer.
5. If it is serving, choose NIM/Triton/TensorRT-LLM depending on the abstraction level.

## Hands-on checks

1. Given a data pipeline, mark which steps are generic curation concepts and which are NVIDIA product implementation details.
2. Explain why MinHash/LSH is portable across vendors while NeMo Curator is NVIDIA-specific.
3. Write one sentence each for Curator, Retriever, Guardrails, NIM, and Evaluator.

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

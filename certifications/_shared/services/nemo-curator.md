---
service: NeMo Curator
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# NeMo Curator

## What to study first

- **Core idea:** NVIDIA's GPU-accelerated dataset curation toolkit for building training/tuning corpora with concrete Python pipeline stages, classifiers, dedup workflows, and modality-specific processors.
- **Use it when:** Choose it when raw data must be transformed into training/tuning/evaluation-ready data: run `Pipeline` stages, quality filters, classifier scoring, PII/safety/poisoning screens, exact/fuzzy dedup workflows, or image/video/audio curation before the model learns from the data.
- **Choose another path when:** Choose **NeMo Retriever** when the same documents are used at query time for extraction, chunking, embedding, search, reranking, and citations; choose **NeMo Framework/Customizer** when the dataset is ready and the next step is training or PEFT; choose **NIM/Triton** when the problem is serving the resulting model.
- **Concrete surface:** Access: Install `nemo-curator[...]` extras or use the NVIDIA container, then import `Pipeline` plus stage classes from `nemo_curator.stages.*`. Text examples commonly use `text_cuda12`; image/video/audio use modality-specific extras. Inside: `Pipeline`, `JsonlReader`, `JsonlWriter`, `ScoreFilter`, heuristic filters, distributed classifiers, `ExactDeduplicationWorkflow`, `FuzzyDeduplicationWorkflow`, `TextDuplicatesRemovalWorkflow`, image/video/audio curation stages. I/O: Raw JSONL/Parquet text corpora, web crawls, image tar archives, video files, audio manifests, metadata, IDs, and filtering rules. -> Curated datasets, quality/classifier score columns, duplicate-ID artifacts, filtered JSONL/Parquet/tar shards, and training-ready data for NeMo Framework or customization workflows.
- **Study first:** Pipeline API: `from nemo_curator.pipeline import Pipeline`
- compose stages with `pipeline.add_stage(...)` and execute with `pipeline.run()`.
- Text I/O: `JsonlReader` and `JsonlWriter` are concrete entry/exit points for JSONL text curation examples.
- Quality filters: `ScoreFilter` wraps filter objects such as `WordCountFilter` and `NonAlphaNumericFilter`
- the result can include score fields.
- Classifier models: Curator exposes GPU classifier stages for quality, domain, content type, safety, instruction-data poisoning, and educational-value scoring.
- Dedup stages: Exact dedup means MD5 duplicate IDs
- fuzzy dedup means MinHash/LSH near-duplicate IDs
- duplicate removal is applied after IDs are produced.
- **Real trap:** Both Curator and Retriever may touch PDFs/web corpora and "clean" text, but their outputs are different: Curator emits curated datasets and duplicate IDs before training; Retriever emits chunks, vectors, ranked passages, and citations for live RAG.

## Actual implementation / How you use it

| | |
|---|---|
| **What it is technically** | A Python pipeline toolkit for curating text, image, video, and audio datasets before training or customization. You compose readers, filters, classifiers, dedup workflows, and writers as stages. |
| **How you access it** | Install `nemo-curator[...]` extras or use the NVIDIA container, then import `Pipeline` plus stage classes from `nemo_curator.stages.*`. Text examples commonly use `text_cuda12`; image/video/audio use modality-specific extras. |
| **Input** | Raw JSONL/Parquet text corpora, web crawls, image tar archives, video files, audio manifests, metadata, IDs, and filtering rules. |
| **Output** | Curated datasets, quality/classifier score columns, duplicate-ID artifacts, filtered JSONL/Parquet/tar shards, and training-ready data for NeMo Framework or customization workflows. |
| **Inside** | `Pipeline`, `JsonlReader`, `JsonlWriter`, `ScoreFilter`, heuristic filters, distributed classifiers, `ExactDeduplicationWorkflow`, `FuzzyDeduplicationWorkflow`, `TextDuplicatesRemovalWorkflow`, image/video/audio curation stages. |

```python
# Current text-curation shape: build a Pipeline from explicit stages.
from nemo_curator.pipeline import Pipeline
from nemo_curator.stages.text.io.reader import JsonlReader
from nemo_curator.stages.text.io.writer import JsonlWriter
from nemo_curator.stages.text.modules.score_filter import ScoreFilter
from nemo_curator.stages.text.filters import WordCountFilter, NonAlphaNumericFilter

pipeline = Pipeline(name="text_curation_pipeline")
pipeline.add_stage(JsonlReader(file_paths="raw_corpus/*.jsonl", fields=["text", "id"]))
pipeline.add_stage(ScoreFilter(
    filter_obj=WordCountFilter(min_words=50, max_words=100000),
    text_field="text",
    score_field="word_count",
))
pipeline.add_stage(ScoreFilter(
    filter_obj=NonAlphaNumericFilter(max_non_alpha_numeric_to_text_ratio=0.25),
    text_field="text",
    score_field="non_alpha_score",
))
pipeline.add_stage(JsonlWriter(path="curated_training_corpus/"))
results = pipeline.run()

# Common add-ons:
from nemo_curator.stages.text.classifiers import (
    QualityClassifier,
    DomainClassifier,
    AegisClassifier,
    InstructionDataGuardClassifier,
    FineWebEduClassifier,
)
from nemo_curator.stages.deduplication.exact.workflow import ExactDeduplicationWorkflow
from nemo_curator.stages.deduplication.fuzzy.workflow import FuzzyDeduplicationWorkflow
from nemo_curator.stages.text.deduplication.removal_workflow import TextDuplicatesRemovalWorkflow
```

**Mental model**: NeMo Curator is the NVIDIA answer for **cleaning, scoring, filtering, deduping, and packaging training data before the model learns from it**.

## Actual API and model surface

| Need | Curator object or model cue | What you call or configure |
|---|---|---|
| Build a text curation pipeline | `Pipeline`, `JsonlReader`, `JsonlWriter` | `pipeline.add_stage(...)`, then `pipeline.run()` |
| Heuristic quality filtering | `ScoreFilter`, `WordCountFilter`, `NonAlphaNumericFilter` | Wrap the filter in `ScoreFilter(filter_obj=..., text_field="text", score_field=...)` |
| DeBERTa quality labels | `QualityClassifier` using `nvidia/quality-classifier-deberta` | Add classifier stage; optionally filter by quality labels such as `High` |
| Domain/content labels | `DomainClassifier`, `MultilingualDomainClassifier`, `ContentTypeClassifier`, `PromptTaskComplexityClassifier` | Add classifier stage and optionally pass `filter_by=[...]` |
| Safety and poisoning checks | `AegisClassifier`, `InstructionDataGuardClassifier` | Requires Hugging Face token for gated models; writes safety or poisoning scores/labels |
| Educational-value scoring | `FineWebEduClassifier`, `FineWebMixtralEduClassifier`, `FineWebNemotronEduClassifier` | Adds float/int/label score columns for selecting higher-value training text |
| Exact duplicate detection | `ExactDeduplicationWorkflow` | MD5-based exact matching; writes `ExactDuplicateIds/` |
| Near-duplicate detection | `FuzzyDeduplicationWorkflow` | MinHash plus LSH; tune `char_ngrams`, `num_bands`, and `minhashes_per_band`; writes `FuzzyDuplicateIds/` |
| Duplicate removal | `TextDuplicatesRemovalWorkflow` | Consumes duplicate-ID artifacts and writes deduplicated output |
| Image curation | `ImageReaderStage`, `ImageEmbeddingStage`, `ImageAestheticFilterStage`, `ImageNSFWFilterStage`, `ImageWriterStage` | Load image tar archives, generate CLIP embeddings, filter quality/safety, write curated tar/parquet shards |
| Video curation | Cosmos-Embed1 models: `cosmos-embed1-224p`, `cosmos-embed1-336p`, `cosmos-embed1-448p` | Split videos into clips, embed clips, then dedupe/search/prepare multimodal training data |
| Audio curation | `InferenceAsrNemoStage`, `GetPairwiseWerStage`, `GetAudioDurationStage`, `PreserveByValueStage` | Run ASR, compute WER/duration, filter audio-text pairs; example ASR model: `nvidia/stt_hy_fastconformer_hybrid_large_pc` |

## Study card data

- **What it is:** NVIDIA's GPU-accelerated dataset curation toolkit for building training/tuning corpora with concrete Python pipeline stages, classifiers, dedup workflows, and modality-specific processors.
- **Lifecycle:** Data preparation
- **Relevant exams:** NCP-GENL, NCP-AAI
- **Use it when:** Choose it when raw data must be transformed into training/tuning/evaluation-ready data: run `Pipeline` stages, quality filters, classifier scoring, PII/safety/poisoning screens, exact/fuzzy dedup workflows, or image/video/audio curation before the model learns from the data.
- **Do not use it when:** Choose **NeMo Retriever** when the same documents are used at query time for extraction, chunking, embedding, search, reranking, and citations; choose **NeMo Framework/Customizer** when the dataset is ready and the next step is training or PEFT; choose **NIM/Triton** when the problem is serving the resulting model.
- **Common trap:** Both Curator and Retriever may touch PDFs/web corpora and "clean" text, but their outputs are different: Curator emits curated datasets and duplicate IDs before training; Retriever emits chunks, vectors, ranked passages, and citations for live RAG.
- **Recognition clues:** Raw JSONL/Parquet/image/video/audio corpus -> `Pipeline` -> `ScoreFilter`/classifiers -> exact or fuzzy duplicate IDs -> curated output for NeMo training, tuning, or eval.

### Study notes

- `Pipeline` is the executable surface: add `JsonlReader`, filtering/classifier/dedup-related stages, then `JsonlWriter` and `pipeline.run()`.
- `ScoreFilter` is the main text-filter wrapper. It wraps filters such as `WordCountFilter` and `NonAlphaNumericFilter` and can save score columns as metadata.
- Curator includes classifier stages, not just generic "cleaning": `QualityClassifier`, `DomainClassifier`, `AegisClassifier`, `InstructionDataGuardClassifier`, `FineWebEduClassifier`, and related FineWeb Mixtral/Nemotron classifiers.
- Dedup is a workflow family: exact uses MD5 and writes `ExactDuplicateIds/`; fuzzy uses MinHash plus LSH and writes `FuzzyDuplicateIds/`; removal is a separate `TextDuplicatesRemovalWorkflow`.
- Curator is multimodal. Text is usually JSONL/Parquet; image examples use CLIP embedding and aesthetic/NSFW stages; video examples use Cosmos-Embed1 variants; audio examples use ASR plus WER/duration filters.
- Exam shortcut: ask what the output feeds. If it feeds training/tuning/eval data, think Curator. If it feeds a live answer with retrieved passages, think Retriever.

### Must know

- **Pipeline API**: `from nemo_curator.pipeline import Pipeline`; compose stages with `pipeline.add_stage(...)` and execute with `pipeline.run()`.
- **Text I/O**: `JsonlReader` and `JsonlWriter` are concrete entry/exit points for JSONL text curation examples.
- **Quality filters**: `ScoreFilter` wraps filter objects such as `WordCountFilter` and `NonAlphaNumericFilter`; the result can include score fields.
- **Classifier models**: Curator exposes GPU classifier stages for quality, domain, content type, safety, instruction-data poisoning, and educational-value scoring.
- **Dedup stages**: Exact dedup means MD5 duplicate IDs; fuzzy dedup means MinHash/LSH near-duplicate IDs; duplicate removal is applied after IDs are produced.
- **Curator vs Retriever**: Curator = pre-training or tuning data preparation. Retriever = runtime RAG extraction, embedding, search, and reranking.
- **Curator vs NeMo Framework**: Curator prepares datasets; Framework trains/customizes models with those datasets.

### What to recognize

- "`Pipeline`, `JsonlReader`, `ScoreFilter`, `JsonlWriter`" -> NeMo Curator.
- "`QualityClassifier`, `DomainClassifier`, `AegisClassifier`, `FineWebEduClassifier`" -> classifier-based Curator filtering.
- "Exact duplicate IDs, MD5, `ExactDuplicateIds/`" -> NeMo Curator exact dedup.
- "Near duplicates, MinHash, LSH, `FuzzyDuplicateIds/`" -> NeMo Curator fuzzy dedup.
- "Cosmos-Embed1 video clip embeddings" -> NeMo Curator video curation.
- "Remove PII/safety/poisoned examples before training" -> NeMo Curator.
- "Connect enterprise documents to a live agent with embeddings and reranking" -> NeMo Retriever, not Curator.

### Common confusions

| Scenario | Better answer | Tempting wrong answer |
|---|---|---|
| Clean noisy training corpus before pretraining | NeMo Curator | NeMo Retriever |
| Embed private documents for a live RAG answer | NeMo Retriever | NeMo Curator |
| Train or customize model weights from curated data | NeMo Framework or Customizer | NeMo Curator |
| Serve a supported model as an API | NIM | NeMo Curator |
| Enforce runtime policy on agent responses/tools | NeMo Guardrails | NeMo Curator |
| Accelerate general dataframe preprocessing | RAPIDS | NeMo Curator when the scenario is not LLM/multimodal dataset curation |

### Related services

- NeMo Framework: consumes curated datasets for training/customization.
- NeMo Customizer: consumes curated tuning data for PEFT-style customization.
- NeMo Retriever: runtime RAG over enterprise knowledge, not training-data curation.
- RAPIDS/cuDF/Ray: infrastructure patterns Curator can use for GPU/distributed processing.
- NGC: NVIDIA containers and model assets used to run Curator workflows.

## What belongs in generic study vs NVIDIA study

Generic concepts such as exact hashing, MinHash, LSH, Jaccard similarity, PII redaction strategies, contamination checks, and data-blending tradeoffs are not NVIDIA-specific. They belong in the **Training Data Curator** page in the vendor-neutral study track.

The NVIDIA-specific knowledge is:

- NeMo Curator is the NVIDIA product name.
- The practical surface is `nemo_curator.pipeline.Pipeline` plus stage/workflow imports.
- It is positioned in the data-preparation phase before training/customization.
- It covers text, image, video, and audio curation, not only text.
- It feeds cleaned datasets into NeMo Framework or other training/customization workflows.
- It is not NeMo Retriever, NIM, NeMo Guardrails, NeMo Evaluator, or TensorRT-LLM.

## Decision pattern

1. Ask whether the scenario is about **training data before training** or **knowledge at inference time**.
2. If it is training data and the question asks for an NVIDIA component, choose **NeMo Curator**.
3. If it names `Pipeline`, `ScoreFilter`, classifier stages, exact/fuzzy dedup workflows, or multimodal dataset filtering, choose **NeMo Curator**.
4. If it is runtime RAG over enterprise documents, choose **NeMo Retriever**.
5. If it is model behavior adaptation, choose NeMo Framework or NeMo Customizer.
6. If it is serving, choose NIM/Triton/TensorRT-LLM depending on the abstraction level.

## Hands-on checks

1. Write a five-stage text pipeline: `JsonlReader` -> `ScoreFilter(WordCountFilter)` -> classifier -> dedup workflow -> `JsonlWriter`.
2. Explain why exact dedup uses MD5 while fuzzy dedup uses MinHash/LSH.
3. Given classifier names, group them as quality, domain/content, safety, poisoning, or educational-value filters.
4. Write one sentence each for Curator, Retriever, Guardrails, NIM, and NeMo Framework.

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to call it, which stage/model names to recognize, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

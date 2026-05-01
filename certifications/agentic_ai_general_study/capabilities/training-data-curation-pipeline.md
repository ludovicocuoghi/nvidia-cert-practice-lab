---
capability: Training Data Curation Pipeline
status: populated
source_lens: general-study
---

# Training Data Curation Pipeline

## What You Are Building

You are building the offline data pipeline that decides which raw text, code, documents, labels, traces, synthetic examples, and holdouts are safe and useful enough for a model to learn from or be evaluated against. The output is not a chatbot, a retriever, or an endpoint. The output is a curated dataset with provenance, quality controls, splits, and lineage.

The first question is always: what will this data become?

| Destination | Goal | Main curation risk |
|---|---|---|
| Pretraining / train from zero | Teach broad language, code, domain, or multimodal patterns | noisy web data, duplication, licenses, contamination, bad blend |
| Continued pretraining | Shift a base model toward a domain | overfitting, forgetting, poor domain/general mix |
| SFT / PEFT / LoRA | Teach durable task behavior from examples | bad labels, repeated prompts, brittle answer style |
| Preference tuning | Teach ranking or alignment preferences | inconsistent pairs, judge bias, conflicting policies |
| Evaluation holdout | Produce trustworthy evidence | benchmark leakage, train/test overlap, edited-after-release tests |
| RAG ingestion | Prepare runtime knowledge | this belongs to the knowledge ingestion pipeline, not weight-changing training data |

## Pipeline

1. Inventory sources: web crawls, internal docs, code, logs, human labels, synthetic examples, licenses, owners, and retention rules.
2. Normalize text without destroying useful structure. Preserve code indentation, tables, math, headings, and multilingual signals where they matter.
3. Run cheap filters first: encoding validation, language ID, empty/short/truncated text checks, source allow/deny lists.
4. Run exact dedupe with normalized hashes such as SHA-256 or MD5 over document or chunk text.
5. Run fuzzy dedupe for copied pages, mirrors, boilerplate, lightly edited articles, and repeated templates.
6. Detect PII, secrets, regulated data, toxicity, unsafe examples, and license conflicts.
7. Run contamination checks against validation, test, public benchmark, and private canary sets.
8. Blend sources intentionally: general text, domain text, code, math, safety, synthetic data, human-labeled data.
9. Split by document, source, user, time, or task so leakage cannot cross train/validation/test boundaries.
10. Emit dataset cards and lineage records: source mix, filter rates, known gaps, risk decisions, and version.

## Core Concepts

- **Exact dedupe** removes byte-identical or normalized-text-identical examples with hashes. It is cheap and should usually happen before fuzzy methods.
- **NeMo Curator** is the NVIDIA cue for GPU-accelerated corpus cleanup, dedupe, filtering, PII handling, and preparation before training/tuning.
- **RAPIDS/cuDF** can accelerate dataframe-scale preprocessing, filtering, joins, and analytics over large corpora.
- **Jaccard similarity** measures set overlap: `|A intersection B| / |A union B|`. For documents, A and B are usually shingle sets.
- **MinHash** compresses shingle sets into signatures whose collision rate estimates Jaccard similarity.
- **LSH** buckets MinHash signatures so likely near-duplicates can be found without all-pairs comparison.
- **Fuzzy dedupe** catches near-duplicates above a tuned similarity threshold, often around 0.8 for web-corpus cleanup.
- **Contamination** means training data overlaps with validation, test, or benchmark data. It invalidates metrics.
- **PII handling** should combine regex, NER/classifiers, replacement tokens, sampling, audit logs, and risk policy.
- **Synthetic data** can improve coverage and format consistency, but it needs independent filtering, factual checks, diversity checks, and regression tests.
- **Data blending** is part of model behavior. Too much narrow domain data can cause forgetting; too little domain data may not move the model.
- **Tokenization** is part of data preparation. Vocabulary size, domain terms, multilingual balance, and special tokens change compression and training behavior.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "huge noisy web corpus" | source quality, exact dedupe, MinHash/LSH, PII/license filters, data blend | training longer on raw data |
| "GPU-accelerated corpus prep" | NeMo Curator / RAPIDS | TensorRT-LLM or NIM |
| "near duplicate pages" | shingles -> Jaccard -> MinHash signatures -> LSH candidate buckets | comparing every document pair |
| "eval score is too good" | contamination check: exact, n-gram, MinHash, embedding similarity | celebrating benchmark score |
| "domain SFT loses chat ability" | rebalance domain/general/safety examples | 70%+ narrow domain data with no replay |
| "PII in training corpus" | regex + NER/classifier + placeholder redaction + audit | raw training or blind deletion |
| "private docs change weekly" | use RAG ingestion and retrieval, not training data | fine-tuning for freshness |
| "synthetic examples from a teacher" | verify with independent judge/rules, dedupe, diversity, held-out eval | trusting teacher output blindly |
| "new medical vocabulary" | tokenizer coverage, possible vocab extension, continued pretraining | just adding tokens without resizing embeddings/head |

## Common Traps

| Trap | Correct mental model |
|---|---|
| More data always wins | Better filtered, deduped, licensed, balanced data usually beats more noisy data. |
| Deduplication is optional | Duplicates waste compute, increase memorization, and can leak eval items. |
| Stopwords/stemming for LLMs | Modern LLMs usually keep casing, punctuation, morphology, and function words. |
| Perplexity filter equals quality | A prose LM may mark code, tables, math, and technical docs as high perplexity even when they are valuable. |
| Redaction means deletion | Replacement tokens can preserve useful sentence structure while removing sensitive spans. |
| Random split is always fine | Time, source, user, tenant, or document-level grouping may be required to prevent leakage. |
| RAG ingestion is training data | RAG prepares runtime knowledge that the model reads; training data changes weights. |
| NIM optimizes data curation | NIM serves models; Curator/RAPIDS handle data preparation. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Curator | GPU-accelerated exact/fuzzy dedupe, filtering, PII handling, and corpus preparation. |
| NVIDIA | RAPIDS/cuDF | GPU dataframe acceleration for large preprocessing jobs. |
| AWS | Glue/DataBrew/SageMaker processing | Managed ETL and preprocessing jobs for training or tuning data. |
| Open source | Spark, Ray, Dask, datasketch, Presidio, fastText | Portable building blocks for scale, MinHash, PII, and language ID. |
| Internal platform | Dataset registry + lineage store | Versioned dataset cards, split records, approvals, and audit evidence. |

## Deep Dive

### Where it sits in the lifecycle

Training data curation is the **dataset preparation layer** before pretraining, continued pretraining, SFT, preference tuning, or eval creation.

```text
[Source inventory] -> [Normalize] -> [Dedupe] -> [Filter/redact]
        -> [Contamination checks] -> [Blend/split] -> [Dataset card]
```

Raw online data is not training data. It contains mirrors, boilerplate, spam, duplicated code, toxic text, hidden personal data, unclear licenses, and benchmark leakage.

### NVIDIA service boundary

| Scenario cue | Think | Avoid |
|---|---|---|
| Dedupe/filter/redact/clean large corpus | NeMo Curator | NIM |
| GPU dataframe preprocessing | RAPIDS/cuDF | TensorRT-LLM |
| Runtime document search | NeMo Retriever | Training-data curation |
| Train/tune on curated corpus | NeMo Framework/Customizer after curation | Serving gateway |
| Evaluate dataset leakage | Contamination checks + dataset registry | Accuracy benchmark only |

### Deduplication stack

| Layer | What it catches | Exam clue |
|---|---|---|
| Normalization | Formatting and casing differences | Prepare text before hashing |
| Exact hash | Identical documents/files | Fast first-pass removal |
| Shingling | Overlapping n-grams | Enables similarity comparison |
| Jaccard similarity | Set overlap between documents | Near-duplicate score |
| MinHash | Compact Jaccard estimate | Web-scale fuzzy dedupe |
| LSH | Candidate buckets for similar signatures | Avoid all-pairs comparison |

Candidate near-duplicates should still be checked against removal policy so valuable boilerplate, code, legal clauses, or templates are not accidentally erased.

### Filtering, synthetic data, and contamination

Quality filters should be content-aware. A single perplexity cutoff can remove code, math, tables, logs, and multilingual text because they do not look like generic prose.

Synthetic data helps with rare cases, controlled formats, tool traces, and instruction diversity, but it can repeat teacher-model bias, invent facts, collapse style, or contaminate evals. Human labels can also be noisy or policy-ambiguous. Both need validation and holdouts.

Contamination checks protect benchmark trust: exact hashes, n-gram overlap, MinHash, embedding similarity, and private canary sets all catch different leakage patterns.

### Dataset release record

The final dataset needs a dataset card: source mix, license notes, filtering rules, removal rates, PII policy, split method, contamination report, known limitations, approval owner, and version. Without that record, no one can reproduce why a model changed.

## Exam Signals

- "near duplicate web pages" -> MinHash/LSH fuzzy dedupe.
- "NeMo Curator" -> corpus cleanup/dedupe/filtering/PII before training or tuning.
- "RAPIDS" -> GPU-accelerated preprocessing, not inference optimization.
- "exact duplicate files" -> hash-based exact dedupe first.
- "benchmark score suspiciously high" -> contamination/leakage check.
- "PII in corpus" -> regex + NER/classifier redaction pipeline with audit.
- "domain tuning loses general ability" -> data blend and replay/regression issue.
- "private docs update every week" -> RAG, not training-data curation alone.
- "synthetic instruction data" -> independent filtering and held-out regression tests.
- "train from zero" -> source inventory, dedupe, filters, tokenizer, blend, splits, lineage.

## Hands-on Checks

1. Draw the order for web-corpus prep: source inventory -> normalize -> exact dedupe -> MinHash/LSH -> filters -> contamination -> blend -> split -> lineage.
2. Explain MinHash, LSH, and Jaccard without naming any vendor product.
3. Given a PII-heavy corpus, specify which data gets replaced, deleted, sampled for review, and logged.
4. Classify five data requests as pretraining curation, SFT curation, preference tuning, RAG ingestion, or evaluation holdout.
5. Write a dataset card outline that includes source, license, filtering, split, contamination, and risk notes.

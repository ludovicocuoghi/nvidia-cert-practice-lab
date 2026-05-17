---
capability: Training Data Curation Pipeline
status: populated
source_lens: general-study
---

# Training Data Curation Pipeline

## What to study first

- **Core idea:** You are building the offline data pipeline that decides which raw text, code, documents, labels, traces, synthetic examples, and holdouts are safe and useful enough for a model to learn from or be evaluated against. The output is not a chatbot, a retriever, or an endpoint. The output is a curated dataset with provenance, quality controls, splits, and lineage.
- **Study first:** Inventory sources: web crawls, internal docs, code, logs, human labels, synthetic examples, licenses, owners, and retention rules.
- Normalize text without destroying useful structure. Preserve code indentation, tables, math, headings, and multilingual signals where they matter.
- Run cheap filters first: encoding validation, language ID, empty/short/truncated text checks, source allow/deny lists.
- Run exact dedupe with normalized hashes such as SHA-256 or MD5 over document or chunk text. A hash is a fixed-length fingerprint of the normalized content. If two fingerprints match, the examples are treated as exact duplicates.
- Run fuzzy dedupe for copied pages, mirrors, boilerplate, lightly edited articles, and repeated templates. This usually means turning documents into overlapping shingles, estimating similarity with MinHash, and using LSH to avoid comparing every pair.

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

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Build the large pretraining corpus. Emphasize source blend, license/provenance, exact/fuzzy dedupe, PII/secrets handling, contamination checks, tokenizer impact, and document-level splits. | Versioned training corpus + validation/test holdouts + dataset card |
| Fine-tune existing model | Curate smaller, label-heavy examples: SFT prompt/response rows, preference pairs, tool traces, criteria, duplicate prompt removal, and regression holdouts. | Tuning dataset + validation/regression split + label-quality notes |
| Use existing model/API | Usually no training-data curation. Use prompt evals and runtime logging unless you decide to tune later. | Evaluation examples or prompt test cases, not weight-changing corpus |
| Build agent/RAG application | Use the knowledge ingestion/RAG pages for runtime documents. Use this page only if agent incidents become curated eval/tuning examples. | Incident/eval/tuning candidates after privacy and holdout checks |
| Operate, govern, and improve | Convert reviewed failures into eval cases, prompt fixes, retrieval fixes, or tuning data. Do not dump raw production logs into training. | Curated feedback dataset with PII, consent, and leakage controls |

## Pipeline

1. Inventory sources: web crawls, internal docs, code, logs, human labels, synthetic examples, licenses, owners, and retention rules.
2. Normalize text without destroying useful structure. Preserve code indentation, tables, math, headings, and multilingual signals where they matter.
3. Run cheap filters first: encoding validation, language ID, empty/short/truncated text checks, source allow/deny lists.
4. Run exact dedupe with normalized hashes such as SHA-256 or MD5 over document or chunk text. A hash is a fixed-length fingerprint of the normalized content; if two fingerprints match, the examples are treated as exact duplicates.
5. Run fuzzy dedupe for copied pages, mirrors, boilerplate, lightly edited articles, and repeated templates. This usually means turning documents into overlapping shingles, estimating similarity with MinHash, and using LSH to avoid comparing every pair.
6. Detect PII, secrets, regulated data, toxicity, unsafe examples, and license conflicts. Use cheap pattern checks for obvious forms, NER/classifiers for contextual spans, and sampling/audit for high-risk sources.
7. Run contamination checks against validation, test, public benchmark, and private canary sets so the training corpus does not contain the answers used to measure the model.
8. Blend sources intentionally: general text, domain text, code, math, safety, synthetic data, human-labeled data.
9. Split by document, source, user, time, or task so leakage cannot cross train/validation/test boundaries.
10. Emit dataset cards and lineage records: source mix, filter rates, known gaps, risk decisions, and version.

## Core Concepts

- **Exact dedupe** removes byte-identical or normalized-text-identical examples with hashes. **SHA-256** and **MD5** are hash functions: they convert text into a compact fingerprint. They do not understand meaning, so they catch "same text after normalization," not paraphrases.
- **Fuzzy dedupe** catches near-duplicates: copied pages with a changed header, mirrored articles, repeated boilerplate, code forks, legal templates, or lightly edited benchmark answers. It usually depends on shingles, Jaccard similarity, MinHash, and LSH.
- **Shingles** are overlapping pieces of text, often word or character n-grams. A sentence like "NVIDIA GPUs accelerate training" could become word shingles such as "NVIDIA GPUs accelerate" and "GPUs accelerate training."
- **Jaccard similarity** measures set overlap: `|A intersection B| / |A union B|`. For documents, A and B are usually shingle sets.
- **MinHash** compresses shingle sets into short signatures whose collision rate estimates Jaccard similarity. It gives a cheap approximation of "how similar are these documents?"
- **LSH** buckets MinHash signatures so likely near-duplicates land together. That avoids an impossible all-pairs comparison across millions or billions of documents.
- **PII** means personally identifiable information: data that can identify, contact, locate, or single out a person. Examples include names tied to addresses, emails, phone numbers, government IDs, account numbers, medical record numbers, exact locations, face/voice data, and free-text combinations that identify someone.
- **NER** means named entity recognition. It tags spans such as person, organization, location, date, product, or ID-like entities. For PII, NER is useful because regex finds obvious patterns like emails, while NER/classifiers can catch contextual spans such as "Dr. Mina Shah at North Clinic."
- **PII handling** is not only deletion. Common actions are replace spans with tokens like `<PERSON>` or `<EMAIL>`, drop high-risk records, quarantine for review, aggregate values, or keep restricted records out of training while logging the decision.
- **License conflicts** happen when a source's terms do not permit the intended model use. In practice, this can look like copied proprietary docs, web pages with no training rights, code with incompatible terms, datasets limited to research-only use, or missing source provenance.
- **Contamination** means training or tuning data overlaps with validation, test, benchmark, answer-key, or private canary data. It can be exact text, near-duplicate wording, copied solution explanations, or examples generated from the test set. It inflates scores because the model has effectively seen the exam.
- **Synthetic data** can improve coverage and format consistency, but it needs independent filtering, factual checks, diversity checks, dedupe, contamination checks, and regression tests.
- **Data blending** is part of model behavior. Too much narrow domain data can cause forgetting; too little domain data may not move the model.
- **Tokenization** is part of data preparation. Vocabulary size, domain terms, multilingual balance, and special tokens change compression and training behavior.
- **NeMo Curator** is the NVIDIA cue for GPU-accelerated corpus cleanup, dedupe, filtering, PII handling, and preparation before training/tuning.
- **RAPIDS/cuDF** can accelerate dataframe-scale preprocessing, filtering, joins, and analytics over large corpora.

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

The repeated exam pattern is: **do not train on raw data just because it is available**. Make the destination explicit, then decide what to keep, redact, quarantine, split, or reject.

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

### What the risk terms look like

| Risk term | What it looks like in a corpus | Typical handling |
|---|---|---|
| PII | Emails, phone numbers, customer names with addresses, IDs, case notes, medical or financial identifiers | Regex + NER/classifier, redaction tokens, quarantine, review sampling, audit |
| Secret | API keys, passwords, private keys, access tokens, internal URLs with credentials | Drop or quarantine; do not mask and train unless policy explicitly allows safe transformed examples |
| License issue | Research-only dataset used for commercial model, copied proprietary docs, source URL missing, incompatible code license | Exclude, seek approval, or keep in a restricted dataset with provenance |
| Contamination | Benchmark prompt/answer pairs, public leaderboard examples, validation documents, near-duplicate eval items | Remove from training/tuning, protect holdouts, document leakage report |
| Toxic/unsafe example | Harassment, violent instructions, self-harm content, unsafe tool traces | Filter, rebalance, or keep only in controlled safety-training/eval lanes |

Replacement tokens are useful when the surrounding language still teaches structure. For example, "Email Maria at maria@example.com" can become "Email `<PERSON>` at `<EMAIL>`." That keeps the task shape while removing the identifying spans.

### Filtering, synthetic data, and contamination

Quality filters should be content-aware. A single perplexity cutoff can remove code, math, tables, logs, and multilingual text because they do not look like generic prose.

Synthetic data helps with rare cases, controlled formats, tool traces, and instruction diversity, but it can repeat teacher-model bias, invent facts, collapse style, or contaminate evals. Human labels can also be noisy or policy-ambiguous. Both need validation and holdouts.

Contamination checks protect benchmark trust. Use multiple detectors because each catches a different leakage pattern:

| Check | Catches |
|---|---|
| Exact hash | Direct copied eval items |
| N-gram overlap | Shared long phrases and copied answer explanations |
| MinHash/LSH | Near-duplicate documents at corpus scale |
| Embedding similarity | Paraphrases and semantically copied examples |
| Private canaries | Protected strings or examples that should never appear in training |

### Dataset release record

The final dataset needs a dataset card: source mix, license notes, filtering rules, removal rates, PII policy, split method, contamination report, known limitations, approval owner, and version. Without that record, no one can reproduce why a model changed.

### Implementation card: corpus filters

```python
import hashlib

def normalized_text(doc: str) -> str:
    return " ".join(doc.lower().split())

def sha256_fingerprint(doc: str) -> str:
    return hashlib.sha256(normalized_text(doc).encode("utf-8")).hexdigest()

def exact_dedupe(docs):
    seen = set()
    kept = []
    for doc in docs:
        fp = sha256_fingerprint(doc["text"])
        if fp not in seen:
            seen.add(fp)
            kept.append({**doc, "sha256": fp})
    return kept

def shingles(text: str, n: int = 5) -> set[tuple[str, ...]]:
    tokens = normalized_text(text).split()
    return {tuple(tokens[i:i+n]) for i in range(max(0, len(tokens) - n + 1))}

def jaccard(a: set, b: set) -> float:
    return len(a & b) / len(a | b) if a or b else 0.0

def should_keep(doc, pii_spans, license_ok, overlaps_eval):
    if not license_ok:
        return False, "license_block"
    if overlaps_eval:
        return False, "contamination"
    if pii_spans.high_risk:
        return False, "pii_quarantine"
    return True, "keep"
```

At web scale, replace the direct `jaccard()` comparison with MinHash signatures and LSH buckets so you only compare likely near-duplicate candidates. The release metric is not a loss; it is filter evidence such as duplicate rate removed, PII hit rate, license rejection rate, contamination hit rate, and source-blend percentages.

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

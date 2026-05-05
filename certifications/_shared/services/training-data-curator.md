---
service: Training Data Curator
relevant_to: [AAI-GEN]
status: populated
---

# Training Data Curator

## What to study first

- **Core idea:** The lifecycle role responsible for making data fit for model learning and evaluation, with different recipes for pretraining, fine-tuning, RAG ingestion, and holdout construction.
- **Use it when:** A scenario mentions noisy corpora, duplicate documents, MinHash/LSH, PII, licensing, benchmark contamination, train/eval splits, data mixtures, SFT labels, preference pairs, tool traces, synthetic examples, or dataset lineage.
- **Choose another path when:** Choose RAG/retrieval for fresh query-time documents, memory for user/session state, NIM/Triton for serving, Agent Toolkit for orchestration, and Guardrails/tool gateways for runtime policy.
- **Concrete surface:** Access: Data-processing jobs, Spark/Ray pipelines, GPU dataframe jobs, managed data prep services, or vendor tools such as NeMo Curator Inside: Exact hashing, MinHash/LSH, quality filters, language ID, PII detection, contamination checks, data blending, and lineage I/O: Raw text, documents, web crawls, code, logs, annotations, labels, metadata, and policy rules -> Cleaned, deduplicated, licensed, PII-safe, split, and documented datasets
- **Study first:** Start with the destination: pretraining corpus, continued-pretraining corpus, SFT/PEFT examples, preference data, RAG knowledge, or evaluation holdout.
- Exact deduplication: removes byte-identical or normalized-text-identical documents using hashes such as SHA-256 before more expensive fuzzy methods.
- Near-duplicate detection: catches copied pages, boilerplate, lightly edited articles, repeated templates, and duplicated chunks.
- MinHash: estimates Jaccard similarity between shingle sets without comparing every pair directly.
- LSH: buckets similar MinHash signatures so near-duplicate candidates can be found at scale.
- **Real trap:** Saying "data curation" without asking what the data is for. Pretraining, fine-tuning, RAG, and evaluation all need curation, but the acceptance criteria are different.

## At a glance

| | |
|---|---|
| **What it is technically** | A vendor-neutral data quality pipeline for preparing model training, tuning, and evaluation datasets |
| **How you access it** | Data-processing jobs, Spark/Ray pipelines, GPU dataframe jobs, managed data prep services, or vendor tools such as NeMo Curator |
| **Input** | Raw text, documents, web crawls, code, logs, annotations, labels, metadata, and policy rules |
| **Output** | Cleaned, deduplicated, licensed, PII-safe, split, and documented datasets |
| **Inside** | Exact hashing, MinHash/LSH, quality filters, language ID, PII detection, contamination checks, data blending, and lineage |

```python
dataset = read_jsonl("raw/*.jsonl")
dataset = normalize(dataset).filter(license_ok).filter(no_pii)
duplicates = minhash_lsh(dataset, threshold=0.85)
train, validation, test = split(remove(dataset, duplicates), holdout=True)
```

**Mental model**: the portable curation layer that decides which data is safe, useful, non-leaky, and well-documented enough to teach or evaluate a model.

## Study card data

- **What it is:** The lifecycle role responsible for making data fit for model learning and evaluation, with different recipes for pretraining, fine-tuning, RAG ingestion, and holdout construction.
- **Lifecycle:** Training-time data curation
- **Relevant exams:** Agentic AI General Study
- **Use it when:** A scenario mentions noisy corpora, duplicate documents, MinHash/LSH, PII, licensing, benchmark contamination, train/eval splits, data mixtures, SFT labels, preference pairs, tool traces, synthetic examples, or dataset lineage.
- **Do not use it when:** Choose RAG/retrieval for fresh query-time documents, memory for user/session state, NIM/Triton for serving, Agent Toolkit for orchestration, and Guardrails/tool gateways for runtime policy.
- **Common trap:** Saying "data curation" without asking what the data is for. Pretraining, fine-tuning, RAG, and evaluation all need curation, but the acceptance criteria are different.
- **Recognition clues:** "A team must prepare data before a model learns from it or before an evaluation result can be trusted."

### Must know

- **Start with the destination**: pretraining corpus, continued-pretraining corpus, SFT/PEFT examples, preference data, RAG knowledge, or evaluation holdout.
- **Exact deduplication** removes byte-identical or normalized-text-identical documents using hashes such as SHA-256 before more expensive fuzzy methods.
- **Near-duplicate detection** catches copied pages, boilerplate, lightly edited articles, repeated templates, and duplicated chunks.
- **MinHash** estimates Jaccard similarity between shingle sets without comparing every pair directly.
- **LSH** buckets similar MinHash signatures so near-duplicate candidates can be found at scale.
- **Contamination checks** compare training data with validation, test, and benchmark examples.
- **PII handling** combines regex, NER/classifiers, replacement, deletion, sampling, and audit policies.
- **Data blending** controls how much general, domain, code, synthetic, safety, or instruction data enters training.

### Decision guide

| Requirement | Generic component | Vendor-specific implementation examples |
|---|---|---|
| Dedupe web corpus before training | Training Data Curator | NeMo Curator, Spark/Ray job, GPU dataframe pipeline |
| Prepare labeled instructions for SFT/PEFT | Training Data Curator + Customization Toolkit | NeMo Curator patterns, labeling tools, TRL/PEFT data pipelines |
| Add current enterprise docs to answers | Knowledge Retrieval Pipeline | NeMo Retriever, Bedrock Knowledge Bases, Kendra, vector DB |
| Learn a durable response style | Customization Toolkit | NeMo Framework/Customizer, Bedrock customization, fine-tuning API |
| Detect benchmark leakage | Evaluation Harness plus Data Curator | Eval pipeline with exact, n-gram, embedding, and MinHash checks |
| Enforce runtime refusals | Policy and Guardrails Layer | NeMo Guardrails, provider guardrails, policy engine |

## First decision: what is being curated?

Do not memorize one generic "clean data" recipe. The right recipe depends on what the curated artifact will become.

| Destination | Goal | Highest-value curation work | Do not confuse with |
|---|---|---|---|
| **Train from zero / pretraining** | Teach broad language, domain, code, or multimodal patterns from a large corpus | Source quality, license checks, exact/fuzzy dedupe, MinHash/LSH, language ID, toxicity/PII handling, data mixture, tokenizer impact, contamination checks, lineage | RAG freshness or small labeled examples |
| **Continued pretraining** | Shift an existing base model toward a domain without losing general capability | Domain corpus quality, domain/general blend, tokenizer coverage, PII/license controls, benchmark contamination, regression holdouts | SFT rubrics or prompt fixes |
| **SFT / PEFT / LoRA** | Teach durable task behavior from examples | Prompt/response quality, labels, rubrics, tool traces, duplicate prompts, answer format, coverage, train/validation/test split hygiene | Adding fresh facts; use RAG for that |
| **Preference tuning / alignment** | Teach ranking or preference behavior | Pair quality, annotator agreement, reward signal balance, safety examples, conflict detection, held-out preference evals | Pretraining-scale web cleanup |
| **RAG knowledge ingestion** | Prepare documents the model reads at query time | Parsing, structure-aware chunking, metadata, ACLs, source/date/version, embedding/index handoff, deletion/refresh path | Weight-changing training data |
| **Evaluation holdout** | Produce trustworthy evidence | Protected splits, leakage checks, private canaries, source lineage, no training reuse, versioned rubrics | Training augmentation |

The overlap is real: PII detection, dedupe, normalization, lineage, and quality checks appear in several lanes. The output is what changes the mental model.

## MinHash and LSH are not NVIDIA-specific

MinHash and LSH are general algorithms. They can appear inside NVIDIA NeMo Curator, an AWS data pipeline, a Spark job, a Ray job, or an internal preprocessing system.

The portable idea is:

1. Convert each document into shingles, such as character or word n-grams.
2. Treat the shingles as a set.
3. Estimate overlap between documents using Jaccard similarity.
4. Use MinHash signatures so overlap can be approximated compactly.
5. Use LSH buckets so likely duplicates are found without comparing every document pair.
6. Verify candidate pairs against the desired threshold and remove or cluster near-duplicates.

## Why deduplication matters

Duplicates and near-duplicates hurt training because they:

- Waste compute on repeated examples.
- Increase memorization risk.
- Overweight copied pages or boilerplate.
- Inflate eval scores when benchmark or validation examples appear in training data.
- Reduce diversity in the final corpus.

Exact dedup is cheap and should usually run first. Near-duplicate detection is more expensive but catches the real web-corpus mess: reposts, mirrors, copied pages with small edits, duplicated headers/footers, and repeated templates.

## MinHash / LSH quick model

**Jaccard similarity**

```
J(A, B) = |A intersection B| / |A union B|
```

If two documents share many shingles, their Jaccard similarity is high.

**MinHash**

- Build many hash functions over each document's shingle set.
- For each hash function, keep the minimum hash value.
- The fraction of matching MinHash values estimates Jaccard similarity.
- Common signature sizes are often in the 128-256 range, tuned for corpus size and precision needs.

**LSH**

- Split the MinHash signature into bands and rows.
- Hash each band into a bucket.
- Documents sharing a bucket become near-duplicate candidates.
- Verify candidates with a more exact similarity calculation before removal.

The important exam-level idea is not the exact band formula. It is that LSH avoids all-pairs comparison, making near-duplicate detection feasible for huge corpora.

## Pretraining curation deep dive

Pretraining and continued pretraining are corpus problems. The model will learn statistical patterns directly from the data, so weak corpus choices become model behavior.

Typical flow:

1. Collect sources with explicit license, policy, and provenance records.
2. Normalize encoding and text structure without destroying useful syntax, code formatting, math, or multilingual signals.
3. Run language ID, format checks, toxicity/safety filters, PII detection, and domain classifiers.
4. Run exact dedupe first, then fuzzy dedupe with MinHash/LSH or equivalent near-duplicate search.
5. Check contamination against validation, test, public benchmarks, and private canary sets.
6. Blend sources by target capability: general text, domain text, code, math, synthetic data, safety examples, and multilingual data.
7. Split data by document/source/time where needed so leakage cannot pass through random shuffling.
8. Write dataset cards and lineage records that explain sources, filters, removal rates, risk decisions, and known gaps.

Good pretraining curation is not "remove everything weird." Code, tables, formulas, logs, and technical documents can look strange to generic filters. Use content-aware thresholds so quality filters do not silently erase the very domain you need.

## Fine-tuning curation deep dive

Fine-tuning data is usually smaller and much more sensitive to label quality. One bad pattern repeated many times can teach a durable bad behavior.

For SFT and PEFT:

- Curate examples around tasks, not only topics.
- Keep prompts realistic and varied.
- Check labels, rubrics, expected format, refusal behavior, and edge cases.
- Remove duplicate or near-duplicate prompts that overweight one answer pattern.
- Keep a clean validation split that represents the deployment workload.
- Preserve examples that test old capabilities so tuning does not cause regression or catastrophic forgetting.

For tool-using agents, tuning data may include tool-call traces. Curate the trace, not just the final answer: tool choice, arguments, authorization assumptions, tool result handling, and refusal/escalation behavior all matter.

For preference tuning:

- Check pair quality and annotator agreement.
- Remove contradictory preferences unless they represent explicit policy nuance.
- Balance helpfulness, safety, style, and domain accuracy.
- Hold out preference pairs for reward-model or judge calibration.

The mental shortcut: pretraining curation asks "is this corpus safe and representative enough to learn from at scale?" Fine-tuning curation asks "is this example good enough to imitate?"

## RAG curation is a different capability

RAG ingestion also curates data, but the output is not a training dataset. The output is runtime knowledge that the model reads during a request.

RAG-specific curation focuses on:

- Document parsing, OCR, table handling, and structure preservation.
- Chunking strategy: fixed, semantic, structure-aware, parent-child, or sliding window.
- Metadata: source, version, timestamp, tenant, ACL, sensitivity, jurisdiction, product, and retention.
- Embedding/index handoff and refresh cadence.
- Pre-retrieval permission filters.
- Citation and deletion lineage.

If the fact changes weekly, RAG is usually the right path. If the model needs a durable behavior, style, rubric, or tool-use pattern, tuning may be appropriate after the tuning data is curated.

## Contamination checks

Contamination means training data overlaps with validation, test, or benchmark data. This makes metrics look better than real generalization.

A solid contamination protocol layers several checks:

- Exact text or hash match.
- N-gram overlap.
- MinHash near-duplicate search.
- Embedding similarity for paraphrase-like overlap.
- Private post-cutoff eval sets when public benchmarks may have leaked.

If contamination is found, remove overlapping training examples, rebuild splits, and report clean and contaminated subsets separately.

## Curation checklists by path

### Train model from zero

- Source inventory, rights, licenses, and provenance.
- Text normalization that preserves useful structure.
- Exact dedupe, then MinHash/LSH near-dedupe.
- Language, domain, toxicity, PII, and low-quality filters.
- Data blend plan and removal-rate review.
- Tokenizer/vocabulary implications.
- Train/validation/test split with leakage controls.
- Benchmark and private-eval contamination report.
- Dataset card and lineage.

### Fine-tune existing model

- Base model and tokenizer selected first.
- Prompt/response examples match the intended behavior.
- Labels, rubrics, tool traces, and preference pairs reviewed.
- Duplicate prompts and repeated answer templates removed.
- PII/license/safety policy checked.
- Validation and test holdouts separated before iteration.
- Baseline eval saved before tuning.
- Regression examples included for old capabilities.

### RAG knowledge ingestion

- Use the Knowledge Ingestion and Permission Pipeline, not the training-data path.
- Parse documents with structure, tables, and headings preserved.
- Chunk by semantic or document structure.
- Attach permissions, source, version, date, tenant, and sensitivity metadata.
- Embed/index with refresh and deletion paths.
- Evaluate retrieval, reranking, citations, and groundedness.

### Evaluation holdout

- Keep it out of training and tuning loops.
- Version the prompts, expected answers, rubrics, and source policy.
- Run exact, n-gram, embedding, and MinHash overlap checks.
- Protect private canary sets.
- Record who can edit the set and why.

## PII and sensitive data

Training data should not casually include personal or regulated data. Common controls include:

- Regex for emails, phone numbers, IDs, credit-card-like strings, and IP addresses.
- NER/classifiers for names, addresses, organizations, and free-form sensitive spans.
- Replacement tokens such as `<EMAIL>` instead of raw deletion when sentence structure matters.
- Sampling and human review for high-risk domains.
- Lineage records showing what was removed and why.

## Data blending

Data curation is not only "remove bad data." It also decides mixture:

- General web text for broad language ability.
- Domain data for specialization.
- Code, math, or reasoning data for target skills.
- Synthetic data for coverage and format control.
- Human-labeled data for alignment and evaluation.

Too much narrow domain data can cause overfitting or catastrophic forgetting. Too little domain data may not change behavior. This is why data mixtures should be validated with held-out evals.

## High-yield signals

- "Near-duplicate web pages" -> MinHash/LSH or equivalent fuzzy dedup.
- "Exact duplicates" -> normalized hash first.
- "Eval score seems too good" -> contamination check.
- "Private documents change weekly" -> runtime retrieval, not training-data curation alone.
- "Need company style or rubric" -> customization after data curation.
- "PII in corpus" -> redaction/anonymization before training.

## Hands-on checks

1. For a raw corpus, list the order: normalize, exact dedup, fuzzy dedup, quality filter, PII handling, split, contamination check, lineage.
2. Explain why MinHash/LSH belongs to generic study and NeMo Curator belongs to NVIDIA product mapping.
3. Decide whether a scenario needs data curation, RAG, fine-tuning, evaluation, or runtime guardrails.

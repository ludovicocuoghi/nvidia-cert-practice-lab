---
service: Training Data Curator
relevant_to: [AAI-GEN]
status: populated
---

# Training Data Curator

## At a glance

| | |
|---|---|
| **What it is technically** | A vendor-neutral data quality pipeline for preparing model training, tuning, and evaluation datasets |
| **How you access it** | Data-processing jobs, Spark/Ray pipelines, GPU dataframe jobs, managed data prep services, or vendor tools such as NeMo Curator |
| **Input** | Raw text, documents, web crawls, code, logs, annotations, labels, metadata, and policy rules |
| **Output** | Cleaned, deduplicated, licensed, PII-safe, split, and documented datasets |
| **Inside** | Exact hashing, MinHash/LSH, quality filters, language ID, PII detection, contamination checks, data blending, and lineage |

**Mental model**: the portable curation layer that decides what data is safe and useful enough to teach a model.

## Study card data

- **What it is:** The lifecycle role responsible for making data fit for training, fine-tuning, evaluation, and sometimes indexing.
- **Lifecycle:** Data preparation
- **Relevant exams:** Agentic AI General Study
- **Use it when:** A scenario mentions noisy corpora, duplicate documents, PII, benchmark contamination, data quality, licensing, train/eval splits, or dataset lineage.
- **Do not use it when:** The need is runtime retrieval over fresh documents, serving a model endpoint, orchestrating tools, or enforcing runtime policy.
- **Common trap:** Treating a vendor product name as the concept. NeMo Curator, AWS/Spark pipelines, and internal data jobs can all implement this role.
- **Scenario signal:** "A team has a large raw corpus and must dedupe, filter, redact, and split it before tuning."

### Must know

- **Exact deduplication** removes byte-identical or normalized-text-identical documents using hashes such as SHA-256.
- **Near-duplicate detection** catches copied pages, boilerplate, lightly edited articles, and duplicated chunks.
- **MinHash** estimates Jaccard similarity between shingle sets without comparing every pair directly.
- **LSH** buckets similar MinHash signatures so near-duplicate candidates can be found at scale.
- **Contamination checks** compare training data with validation, test, and benchmark examples.
- **PII handling** combines regex, NER/classifiers, replacement, deletion, and audit policies.
- **Data blending** controls how much general, domain, code, synthetic, or instruction data enters training.

### Decision guide

| Requirement | Generic component | Vendor-specific implementation examples |
|---|---|---|
| Dedupe web corpus before training | Training Data Curator | NeMo Curator, Spark/Ray job, GPU dataframe pipeline |
| Add current enterprise docs to answers | Knowledge Retrieval Pipeline | NeMo Retriever, Bedrock Knowledge Bases, Kendra, vector DB |
| Learn a durable response style | Customization Toolkit | NeMo Framework/Customizer, Bedrock customization, fine-tuning API |
| Detect benchmark leakage | Evaluation Harness plus Data Curator | Eval pipeline with exact, n-gram, embedding, and MinHash checks |
| Enforce runtime refusals | Policy and Guardrails Layer | NeMo Guardrails, provider guardrails, policy engine |

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

## Contamination checks

Contamination means training data overlaps with validation, test, or benchmark data. This makes metrics look better than real generalization.

A solid contamination protocol layers several checks:

- Exact text or hash match.
- N-gram overlap.
- MinHash near-duplicate search.
- Embedding similarity for paraphrase-like overlap.
- Private post-cutoff eval sets when public benchmarks may have leaked.

If contamination is found, remove overlapping training examples, rebuild splits, and report clean and contaminated subsets separately.

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

---
domain: Data Preparation
weight: 9
status: populated
---

# Data Preparation

## What to study first

- **Core idea:** Prepare, clean, curate, tokenize, and organize data for pretraining, tuning, or **RAG**.
- **Use it when:** Study this when data quality, **contamination**, vocabulary, or corpus construction is central.
- **Study first:** deduplication: — exact (SHA-256) + fuzzy (MinHash, Jaccard threshold 0.8, sig size 128-256)
- LSH bands for efficient candidate pair search
- contamination: — eval/train overlap invalidates **metrics**
- check via **exact match**, 13-gram overlap, embedding similarity, MinHash
- use post-cutoff private eval sets
- tokenization: — **BPE** (frequent pair merge), **WordPiece** (likelihood-based merge), **SentencePiece** (language-agnostic, no pre-**tokenization**)
- vocabulary 32-256K
- quality filtering: — avoid **perplexity** threshold alone (drops code/technical)
- use multi-dimension classifiers (informativeness, coherence, factuality)
- data mixing: — **SFT** ratios: 30-50% domain + 10-30% general instruction to prevent forgetting
- 20% code/math + 10% **safety** as optional supplements
- **Real trap:** Bad data cannot be rescued by a bigger model or a more aggressive training schedule.

## Certification boundary

This page is the NCP-GENL exam lens for LLM data preparation. General LLM data concepts stay here when the GenAI LLMs blueprint tests them directly. Cross-vendor agentic lifecycle framing belongs in Agentic AI General Study, while NVIDIA implementation cues such as NeMo Curator, RAPIDS, and GPU-accelerated preprocessing stay here or in shared NVIDIA service pages.

## Core ideas you must hold in your head

- **Data quality** determines model quality. No amount of clever architecture or **fine-tuning** can compensate for bad data. The exam tests data-centric AI principles: **deduplication**, cleaning, **quality filtering**, and **bias** mitigation.
- **Tokenization** is the first **data preparation** step, not just an architecture choice. **BPE**, **WordPiece**, and **SentencePiece** encode text differently. Preprocessing requirements (lowercasing, punctuation handling, language segmentation) depend on which **tokenizer** the model uses.
- **Data preprocessing for LLMs** differs from traditional NLP. You typically DON'T remove stopwords, lemmatize, or stem for modern LLMs — these techniques strip information the model can use. The exam tests this distinction.
- **Class imbalance and noisy labels** are the two most common data quality issues. The exam expects you to recognize them from diagnostic signals and apply the correct mitigation.
- **GPU-accelerated data processing** eliminates the CPU-**GPU** transfer bottleneck. When **data preparation** happens on **GPU**, the entire pipeline from raw data to trained model runs without leaving **GPU memory**.

## Mental model

**Data preparation** is the **first and highest-leverage** step in the LLM lifecycle:

```
Raw Data → [Collection] → [Cleaning] → [Deduplication] → [Tokenization] → [Split] → Ready for Training
              ↑                ↑              ↑                ↑             ↑
         Diverse sources   Remove noise   Exact + fuzzy   BPE/WordPiece   train/val/test
                           Handle missing  Near-duplicates  Add special     Stratified
                           Normalize text   Contamination    tokens         No leakage
```

The principle: **Garbage in, garbage out.** Every hour spent on data quality saves many hours of debugging model behavior.

## Traditional NLP preprocessing vs LLM preparation

| Step | Traditional NLP | Modern LLMs | Why the difference? |
| ---- | --------------- | ----------- | ------------------- |
| **Stopword removal** | Remove "the", "a", "is" | KEEP them | LLMs learn syntax from function words; removing them destroys linguistic structure |
| **Stemming** | Reduce "running" → "run" | DON'T stem | Too aggressive; destroys morphological distinctions the model can learn |
| **Lemmatization** | Reduce "better" → "good" | DON'T lemmatize | Like stemming, removes learnable information; models understand word forms |
| **Lowercasing** | All lowercase | KEEP case | Capitalization carries meaning (names, sentence boundaries, acronyms) |
| **Punctuation removal** | Strip all punctuation | KEEP punctuation | Punctuation provides structure and semantic cues |
| **HTML/XML tag removal** | Strip tags | Strip but preserve text structure | Tags are noise, but paragraph/section breaks are signal |
| **Unicode normalization** | NFC/NFD normalization | Yes, normalize | Consistent encoding prevents duplicate tokens for identical text |

**Exam signal**: "Should we remove stopwords before **fine-tuning** an LLM?" → NO. Modern LLMs use subword **tokenization** and learn meaning from ALL tokens, including function words.

## Data cleaning and quality

| Issue | Detection | Mitigation |
| ----- | --------- | ---------- |
| **Duplicate documents** | MinHash, SimHash, exact hash matching | Remove exact dupes; deduplicate near-dupes at threshold (e.g., 0.8 Jaccard similarity) |
| **Near-duplicates** | Fuzzy hashing, embedding similarity | Remove or downsample from overrepresented sources |
| **Noisy labels** | Low agreement among annotators, inconsistency checks | Re-annotate, use majority voting, filter low-confidence **examples** |
| **Missing values** | Null/missing fields, incomplete records | Remove or impute depending on field importance |
| **Short/truncated text** | Length distribution analysis | Remove or flag; short text may lack context |
| **Non-target language** | Language detection (fastText, langdetect) | Filter to target language(s); keep if multilingual is desired |
| **PII / sensitive data** | Regex patterns, NER-based detection | Redact or remove; critical for **compliance** |
| **Code/markup mixed with text** | Heuristic detection (high special-char ratio) | Separate or clean depending on task |

## Deduplication: the silent performance killer

Training on duplicated data wastes compute, inflates benchmark scores (if dupes leak into test), and causes the model to memorize rather than generalize.

**Methods**:
- **Exact dedup**: Hash each document; remove identical hashes
- **Fuzzy dedup (MinHash/LSH)**: Find near-duplicate pairs above Jaccard similarity threshold (e.g., 0.8)
- **URL-based dedup**: Remove documents from the same URL (common in web crawls)
- **Cross-split dedup**: Ensure no document appears in both training and **evaluation** sets

**Exam signal**: "Our model's validation accuracy is suspiciously high" → check for **data leakage** / cross-split **contamination**.

## Data splits: train / validation / test

| Split | Purpose | Typical proportion | Key rule |
| ----- | ------- | ------------------ | -------- |
| **Training** | Learn model parameters | 70-85% | Largest; must be diverse |
| **Validation** | Tune hyperparameters, early stopping | 10-15% | Representative of test; used frequently |
| **Test** | Final unbiased **evaluation** | 10-15% | Used ONCE; never used for decisions |

**Critical rules**:
- **No cross-split contamination**: Same document/author/source cannot appear in multiple splits
- **Stratified splitting**: Maintain class distributions across splits for classification tasks
- **Temporal splits for time-series**: Train on earlier data, test on later data; no random shuffling
- **K-fold cross-validation**: Multiple train/val splits; average results; better for small datasets

## Handling class imbalance

| Method | When to use | Risk |
| ------ | ----------- | ---- |
| **Class-weighted loss** | Minor classes are important; don't want to modify data | Can destabilize training if weights are too extreme |
| **Oversampling minority** | Enough **examples** to create meaningful **synthetic data** | Creates near-duplicates; risk of **overfitting** to minority |
| **Undersampling majority** | Majority class is abundant and redundant | Loses potentially valuable data |
| **SMOTE / synthetic generation** | Structured/tabular data | Less effective for text; can create unnatural **examples** |
| **Stratified sampling** | Maintaining proportions across splits and batches | Doesn't fix imbalance, just ensures representation |

**Exam signal**: For LLM **fine-tuning**, class-weighted loss is usually the first approach. Data augmentation (paraphrasing, back-translation) is preferred over simple oversampling.

## Data augmentation for text

| Technique | How it works | When right |
| --------- | ------------ | ---------- |
| **Back-translation** | Translate to another language then back | Paraphrasing while preserving meaning |
| **Synonym replacement** | Replace words with synonyms | Simple augmentation; can introduce unnatural phrasing |
| **Random insertion/deletion** | Insert/delete words probabilistically | Robustness to typos and minor variations |
| **Paraphrasing with another LLM** | Use a different model to rephrase | High-quality but expensive; risk of **hallucination** |
| **Context window sliding** | Create overlapping chunks from long documents | Long-form document tasks |

## Tokenization as data preparation

Before training, you must:
1. **Choose tokenizer type** (**BPE**, **WordPiece**, **SentencePiece**) — typically matches the base model
2. **Train tokenizer** on representative corpus (if training from scratch) or **use pre-trained tokenizer** (if **fine-tuning**)
3. **Add special tokens**: `[CLS]`, `[SEP]`, `[PAD]`, `[MASK]`, `[BOS]`, `[EOS]`, custom tokens for structured I/O
4. **Set vocabulary size**: 32K-256K typical; larger = shorter sequences but larger embedding matrix
5. **Handle OOV (Out-of-Vocabulary)**: Subword tokenizers naturally handle OOV by decomposing into known subwords

**UTF-8 encoding** is the standard for modern LLMs. All text should be UTF-8 validated before **tokenization**.

## GPU-accelerated data processing

NVIDIA RAPIDS eliminates the CPU bottleneck in data pipelines:

- **cuDF**: Load CSV, Parquet, JSON directly into **GPU memory**; pandas-like API
- **cuML**: **GPU**-accelerated preprocessing (normalization, encoding, dimensionality reduction)
- **NVTabular**: **GPU** feature engineering and preprocessing for recommender/LLM training data
- **NeMo Curator**: NVIDIA's dedicated LLM **data curation** framework — **deduplication**, **quality filtering**, language detection, **PII** **redaction** at scale

**Exam signal**: "How to speed up data preprocessing for large-scale LLM training" → **GPU**-accelerated processing with RAPIDS/**NeMo Curator** keeps data on **GPU** and avoids CPU-**GPU** transfers.

## Decision traps worth remembering

1. **LLM preprocessing** — Stopword removal, stemming, and lemmatization STRIP information. Modern LLMs benefit from keeping all linguistic signals.

2. **Deduplication necessity** — Duplicate data wastes compute and causes **overfitting**/memorization. It's essential for large-scale training.

3. **Quality over quantity** — **Quality filtering** and **deduplication** consistently outperform simply adding more noisy data. The exam tests data-centric AI thinking.

4. **Data split strategy** — For temporal data, random splitting causes future data to leak into training. Stratified splitting is needed for imbalanced classes.

5. **Augmentation validity** — Bad augmentation (e.g., aggressive synonym replacement) introduces noise and degrades quality. Augmentation must preserve task-relevant semantics.

6. **Tokenizer differences** — **BPE** merges frequent byte pairs. **WordPiece** uses likelihood. **SentencePiece** is language-agnostic (no pre-**tokenization**). Preprocessing needs differ.

## Must-know exam bullets

- **Stopwords for LLMs** — do NOT remove; function words carry syntactic and semantic information
- **Stemming/lemmatization** — do NOT use; LLMs learn word forms via subword **tokenization**
- **Fuzzy deduplication** — with MinHash; find near-duplicates above Jaccard threshold (0.8 typical)
- **Cross-split deduplication** — prevents **data leakage**; no document in both train and test
- **Stratified splits** — maintain class balance; critical for imbalanced classification tasks
- **Temporal splits** — for time-series; train on past, test on future; no random shuffling
- **Class-weighted loss** — for imbalance; first approach before data modification
- **K-fold CV** — for small datasets; multiple train/val splits; average results
- **UTF-8 encoding** — standard; validate before **tokenization**
- **RAPIDS/cuDF** — keeps data on **GPU**; eliminates CPU-**GPU** transfer bottleneck
- **NeMo Curator** — LLM-scale **data curation**: dedup, **quality filtering**, **PII** **redaction**
- **Special tokens** — must match between **tokenizer** and model; [BOS], [EOS], [PAD] consistent
- **Quality filtering** — > adding more noisy data; data-centric AI principle

## Hands-on checks

1. You discover 30% of your training corpus is near-duplicates. How do you detect and remove them at scale?
2. A classification dataset has 95% class A, 5% class B. What's your strategy and why?
3. Should you remove HTML tags from web-scraped training data? What about the text structure inside them?
4. You're preparing data to fine-tune LLaMA. What **tokenizer** do you use, and why not a different one?
5. Your test accuracy is 98% but production accuracy is 72%. What **data preparation** error likely caused this?

## Key terms to memorize

- **Deduplication** — remove exact and near-duplicate documents; prevents memorization and benchmark inflation
- **MinHash** — locality-sensitive hashing for fuzzy **deduplication**; estimates Jaccard similarity
- **Cross-split contamination** — same data appearing in both train and test; causes inflated **metrics**
- **Stratified split** — maintain class proportions across train/val/test
- **Stopwords** — common words (the, a, is); KEEP for LLMs, remove for traditional NLP
- **Stemming** — reduce words to root form (running → run); NOT for LLMs
- **Lemmatization** — reduce words to dictionary form (better → good); NOT for LLMs
- **Class imbalance** — unequal representation of classes; mitigate with weighted loss or stratified **sampling**
- **Noisy labels** — incorrect annotations; detect via annotator disagreement or inconsistency
- **Data augmentation** — synthetic variations; back-translation, paraphrasing, synonym replacement
- **BPE (Byte-Pair Encoding)** — merge frequent byte/character pairs iteratively
- **WordPiece** — merge pairs maximizing training data likelihood
- **SentencePiece** — language-agnostic; treats input as raw text, no pre-**tokenization**
- **UTF-8** — standard text encoding; validate all text before **tokenization**
- **Special tokens** — [BOS], [EOS], [PAD], [SEP], [CLS]; must match model expectations
- **NeMo Curator** — NVIDIA's **GPU**-accelerated **data curation** for LLMs
- **cuDF** — **GPU** DataFrame; pandas API on **GPU**; no CPU round-trip
- **PII redaction** — remove personally identifiable information; regex + NER-based detection

### Top decision traps
- "Remove stopwords and lemmatize for LLMs" → these STRIP learnable information from the data
- "More data always > cleaner data" → **quality filtering** + dedup beats adding noisy data
- "Random split always works" → temporal data needs time-based splits; imbalanced data needs stratification
- "All tokenizers are equivalent" → pre-**tokenization** and merge criteria differ; preprocessing must match
- "**Deduplication** is nice-to-have" → essential for large-scale training; prevents memorization
- "Data augmentation always helps" → must preserve task-relevant semantics

## Mock signals

Across the mock exams, data-preparation questions repeatedly test these durable ideas:

- **LLM preprocessing**: avoid reflexively removing stopwords, punctuation, casing, or morphology when they carry meaning.
- **Tokenizer mechanics**: **BPE**, **WordPiece**, and **SentencePiece** differ in merge criteria and vocabulary behavior.
- **Quality vs volume**: **deduplication**, **contamination** checks, noisy-label detection, and **PII** **redaction** are core preparation steps.
- **Data splits**: use stratified, time-based, or grouped splits when random splitting would leak or distort the task.
- **Imbalance and augmentation**: use augmentation only when semantics are preserved and evaluate whether it helps.
- **GPU data prep**: RAPIDS/cuDF and **NeMo Curator** accelerate large-scale data cleaning and curation.

Evidence source: `mock_1` through `mock_5`, especially **tokenization**, **embeddings**, **deduplication**, **contamination**, data splits, **class imbalance**, augmentation, and RAPIDS/cuDF questions.

## NVIDIA Services: Data Preparation

| Service | Purpose | Exam signal |
| ------- | ------- | ----------- |
| **NeMo Curator** | **GPU**-accelerated **data curation**: dedup, **quality filtering**, language detection, **PII** **redaction** | LLM-scale **data preparation**; **GPU**-native |
| **RAPIDS cuDF** | **GPU** DataFrame operations; load/transform data on **GPU** | Avoid CPU bottleneck; pandas-like API on **GPU** |
| **Triton Inference Server** | Model **serving** with built-in preprocessing/ensembling | Data preprocessing at inference time on **GPU** |

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 9%
- **What it covers:** Prepare, clean, curate, tokenize, and organize data for pretraining, tuning, or **RAG**.
- **Use this section when:** Study this when data quality, **contamination**, vocabulary, or corpus construction is central.
- **Common trap:** Bad data cannot be rescued by a bigger model or a more aggressive training schedule.
- **Recognition clues:** **Fine-tuning** improves **examples** from one source but fails on held-out tasks due to duplicated and biased data.

### Study notes

- **Deduplication with MinHash** — uses LSH for fuzzy near-duplicate detection at scale. The standard Jaccard similarity threshold for near-duplicates is 0.8 — document pairs above 0.8 are considered near-duplicates and one should be removed. MinHash signature size is typically 128-256 hashes per document; 128 provides fast approximate results, 256 improves **precision** for large corpora. LSH (Locality Sensitive Hashing) bands the signature matrix into bands and rows to efficiently find candidate pairs without comparing every document pair (O(n^2) vs O(n)). Exact dedup (SHA-256 hash of full document text) runs first as it is cheap, then MinHash catches near-duplicates that differ by a few sentences, boilerplate, or formatting.
- **Data mixing for SFT** — follows a specific range. Domain-specific data (the target task, e.g., legal Q&A, medical summarization) should be 30-50% of the mixture. General instruction-following data (high-quality general chat, common sense reasoning, **safety** demonstrations) should be 10-30% — this is critical to prevent **catastrophic forgetting** of general capabilities. Excessively high domain ratios (70%+) cause the model to lose general chat ability and become brittle on out-of-domain inputs. A common recipe: 40% domain + 30% general instruction + 20% code/math + 10% **safety**/refusal. For pre-training, **data mixing** by source diversity matters more than ratios — avoid over-representing any single source (e.g., Common Crawl should not dominate) to prevent domain-specific biases.
- **PII detection pipeline** — requires a multi-stage pipeline, not a single regex. Stage 1 — Regex pass: pattern-based detection for structured **PII** (SSN: `\d{3}-\d{2}-\d{4}`, email: `[\w.]+@[\w.]+`, phone, credit card with Luhn check). Stage 2 — NER ensemble: a fine-tuned **transformer** NER model (or ensemble of 2-3 models) to detect unstructured **PII** (names, addresses, contextual mentions) that regex misses. Stage 3 — Cross-validation: regex and NER results are compared; conflicts are flagged for human review. Stage 4 — **Redaction**: replace detected spans with placeholder tokens, preserving sentence structure for training quality. Never remove **PII** entirely (or you get broken sentences like "I sent [REDACTED_EMAIL] to [REDACTED_NAME]"). Audit: log detection/**redaction** stats per document for **compliance** (type, count, action).
- **Perplexity filtering trap** — disproportionately drops code and technical writing. A **perplexity** filter scores each document by how "surprised" a reference language model (typically a small LM trained on natural text) is by the document. Code, technical documentation, mathematical notation, and mixed-language content all have inherently higher **perplexity** because their token patterns differ from natural language prose. Applying a hard **perplexity** threshold (e.g., remove top 20% highest **perplexity**) silently removes most code and technical documents, biasing the training corpus toward generic web text. Mitigation: use separate **perplexity** thresholds per content type, or replace **perplexity** filtering with classifier-based quality filters that score documents on multiple dimensions (informativeness, coherence, factuality) rather than a single "LM-surprise" score.
- **Contamination check** — methodology must be multi-layered. A single check is insufficient. Layer 1 — **Exact match**: compute SHA-256 hashes of all eval **examples** and compare against training corpus; simple, **zero** false positives, but misses any paraphrased **contamination**. Layer 2 — N-gram overlap: check if any 13-gram (the standard from GPT-3's **contamination** analysis) from an eval example appears in the training corpus. Layer 3 — Embedding similarity: embed eval **examples** and training documents, flag the nearest neighbors above a cosine threshold (e.g., 0.9). Layer 4 — MinHash near-duplicate with a lower threshold (0.7) to catch looser paraphrases. For benchmark **contamination** specifically, maintain a private "**canary**" eval set created after the model's training data cutoff date — this is the only definitive way to measure true generalization. If any **contamination** is found, either remove the overlapping training **examples** and retrain, or report the subset of benchmarks that are uncontaminated alongside **contamination** ratios.

- Data prep decides what the model can learn safely: remove duplicates, **contamination**, low-quality **examples**, **PII**, and label noise before tuning.
- **Tokenization** and vocabulary choices affect compression, rare terms, multilingual behavior, and domain-specific terms.
- For **RAG**, data prep also includes **chunking**, **metadata**, permissions, freshness, and document parsing quality.

### Must know

- **deduplication** — exact (SHA-256) + fuzzy (MinHash, Jaccard threshold 0.8, sig size 128-256); LSH bands for efficient candidate pair search
- **contamination** — eval/train overlap invalidates **metrics**; check via **exact match**, 13-gram overlap, embedding similarity, MinHash; use post-cutoff private eval sets
- **tokenization** — **BPE** (frequent pair merge), **WordPiece** (likelihood-based merge), **SentencePiece** (language-agnostic, no pre-**tokenization**); vocabulary 32-256K
- **quality filtering** — avoid **perplexity** threshold alone (drops code/technical); use multi-dimension classifiers (informativeness, coherence, factuality)
- **data mixing** — **SFT** ratios: 30-50% domain + 10-30% general instruction to prevent forgetting; 20% code/math + 10% **safety** as optional supplements
- **PII detection pipeline** — regex (structured **PII**) + NER ensemble (unstructured **PII**) + cross-validation + **redaction** with placeholder tokens + audit logging

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Exact duplicate documents | **SHA-256 exact dedup** before expensive fuzzy matching | Running MinHash first on obvious byte-identical files |
| Near-duplicates, boilerplate, copied pages | **MinHash + LSH** with a tuned Jaccard threshold | Comparing every document pair directly |
| Eval/test examples inside training data | **Contamination check** with exact, n-gram, embedding, and MinHash methods | Trusting public benchmark scores without leakage checks |
| Code or technical docs removed by filters | Per-type **quality filtering** or classifier-based filters | One global **perplexity** threshold |
| Multilingual or domain vocabulary issues | Adjust **tokenizer** choice/vocabulary and sampling balance | Assuming English-centric tokenization generalizes cleanly |
| Sensitive fields in corpus | Regex + NER **PII** detection, placeholder **redaction**, audit logs | Training on raw sensitive text because it is useful |
| RAG answers cite wrong or forbidden docs | Add **metadata**, permissions, freshness, and chunk-quality controls | Treating chunking as only a model prompt problem |
| Domain SFT loses general ability | Balanced **data mixing** with general instruction and safety data | 70%+ narrow domain data with no replay |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **Deduplication** vs **contamination** | Dedup removes repeated training content; contamination checks whether eval content leaked into training. |
| **Tokenization** vs **embeddings** | Tokenization maps text to discrete ids; embeddings map token ids or text into continuous vectors. |
| **BPE** vs **WordPiece** vs **SentencePiece** | BPE merges frequent pairs, WordPiece uses likelihood-based merges, SentencePiece works directly on raw Unicode without language-specific pre-tokenization. |
| **Perplexity filtering** vs data quality | Perplexity is a narrow fluency/outlier signal; quality also includes factuality, language, toxicity, licenses, PII, and task fit. |
| **Redaction** vs deletion | Redaction preserves useful sentence structure with placeholders; deletion can break examples and remove context. |
| **Chunking** vs document tagging | Chunking controls retrieval units; tagging adds metadata for filtering, permissions, provenance, and freshness. |
| More data vs better data | Larger corpora can amplify duplicates, noise, bias, and contamination; exam answers usually prefer targeted curation first. |

### Mini scenario drill

1. Scenario: A model scores unusually high on a public benchmark but fails on fresh private examples.
   Best answer pattern: Suspect **contamination**; run exact, n-gram, embedding, and MinHash overlap checks, then report uncontaminated scores.
   Trap: Increasing model size or training longer before validating the benchmark.

2. Scenario: A web corpus filter removes most Python and math documents.
   Best answer pattern: Replace one global **perplexity** cutoff with content-aware thresholds or multi-dimensional quality classifiers.
   Trap: Assuming high perplexity always means low quality.

3. Scenario: A RAG system retrieves documents from the wrong tenant.
   Best answer pattern: Add tenant_id, permission, sensitivity, and freshness **metadata** before indexing and enforce filters before retrieval.
   Trap: Asking the model to ignore unauthorized chunks after they are already in context.

### What to recognize

- **Bad corpus**: Training data has high duplication, noise, or off-target content → run dedup (MinHash + exact), quality filter, and language ID pipeline before training.
- **PII detected in corpus**: Names, emails, SSNs in training data → multi-stage **PII** detection (regex + NER ensemble) and **redaction** with placeholder tokens; never train on raw **PII**.
- **Data leakage (contamination)**: Eval **examples** overlap with training data → check via **exact match**, 13-gram overlap, embedding similarity, and MinHash; use post-cutoff private eval sets.
- **Domain vocabulary out of tokenizer coverage**: Technical/medical/legal terms get split into many subword tokens → consider vocabulary extension with continued pre-training (CPT) on domain corpus.
- **Chunk metadata missing for RAG**: Retrieved chunks have no source/date/permission fields → add **metadata** extraction and filtering to the **data preparation** pipeline.
- **Perplexity filter bias against code/tables**: Code and technical documents have high **perplexity** under a prose-trained LM → use separate **perplexity** thresholds per content type or multi-dimension classifiers.
- **Data mixing ratio for SFT**: Domain-specific data ratio too high (70%+) causes forgetting of general capabilities → maintain 30-50% domain + 10-30% general instruction data to preserve generalization.
- **Contamination check protocol**: Need to validate benchmark integrity → multi-layer: exact SHA-256 match + 13-gram overlap + embedding similarity + MinHash near-duplicate; report uncontaminated subset alongside **contamination** ratios.

### Hands-on checks

- Create a checklist for a corpus before **SFT**: source, license, duplicates, **PII**, labels, splits, and **evaluation** holdout.
- Your dedup pipeline removes 50% of a web corpus. Is this normal or a sign of misconfiguration? What would you check?
- Design a **contamination** check protocol for a public benchmark against a 1T-token training corpus. Include at least 3 methods and explain what each catches that the others miss.
- A **perplexity** filter removes most Python code from your training corpus. Diagnose the cause and design a fix that preserves code **quality filtering** without dropping all technical content.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when data quality, **contamination**, vocabulary, or corpus construction is central.
- The major trap pattern is: Bad data cannot be rescued by a bigger model or a more aggressive training schedule.
- Recurring local question themes follow the key ideas: **deduplication**, **tokenization**, **quality filtering**, **data mixing**, **PII**/**bias** checks.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q31** / `data-001`: When training a multilingual **tokenizer** for a model expected to handle 50 languages, which design choice usually pays off most? Correct idea: Use byte-level **BPE** with a vocabulary size scaled to language coverage (often 100k–256k) and balanced **sampling** across languages....
- **mock_1 Q32** / `data-002`: **Deduplication** on a trillion-token web corpus — which approach is appropriate at this scale? Correct idea: MinHash + LSH (or equivalent) for near-duplicate detection at sub-document level, with a similarity threshold tuned to hold-out....
- **mock_1 Q33** / `data-003`: A team filters web-scraped pre-training data with a **perplexity** filter using a small reference model. The filter drops too much code and technical writing. Why? Correct idea: Code and technical writing have higher inherent **perplexity** under a model trained on prose; absolute **perplexity** thresholds are b....
- **mock_1 Q34** / `data-004`: For a 7B chat model, what is the most realistic domain/general data ratio during instruction-tuning when the goal is to specialize for legal Q&A without losing chat ab... Correct idea: ~30–50% domain instructions blended with general instruction data; pure-domain quickly degrades general behavior.
- **data-005** / `data-005`: A pre-training corpus contains **PII** (emails, phone numbers, names). Which approach is most appropriate before training? Correct idea: **PII** detection + **redaction** pipeline (regex + NER ensemble), with audited samples and tracking of false-positive/false-negative r....
- **data-006** / `data-006`: Adding domain-specific tokens to an existing **tokenizer** (vocabulary extension) for medical text. What must you also do? Correct idea: Resize the embedding matrix and the LM head, and ideally continue pre-training so the new tokens get meaningful **embeddings**.
- **data-007** / `data-007`: Synthetic instruction data is generated by a strong teacher model. Which validation step most reduces downstream regressions? Correct idea: Filter generated **examples** by an independent verifier (rule-based for code/math, classifier for **safety**, factuality checks for fa....
- **data-008** / `data-008`: Train/eval **contamination** check: the most important condition for a held-out eval set is: Correct idea: The eval prompts (or their close paraphrases) do not appear in the training corpus, verified by exact and near-duplicate search....
- **data-009** / `data-009`: Data lineage tracking matters most for which production scenario? Correct idea: A regulator (or internal audit) asks which sources contributed to the model's training and how each was processed and licensed.
- **mock_2 Q46** / `m1-046`: What is **tokenization** in the context of NLP and LLMs? Correct idea: The process of breaking text into smaller units, such as words, subwords, or characters, for model processing. Trap: **Tokenization** in NLP converts raw text into discrete linguistic units for model processing, not a security technique t...
- **mock_2 Q47** / `m1-047`: What is Byte Pair Encoding in **tokenization**? Correct idea: A subword **tokenization** algorithm that iteratively merges the most frequent pairs of characters or tokens to build a vocabulary. Trap: **BPE** is a subword **tokenization** algorithm that builds a vocabulary by iteratively merging the most frequent adjacent ch...
- **mock_2 Q51** / `m1-051`: What is text preprocessing and why is it important for LLM applications? Correct idea: The process of cleaning and transforming raw text data, such as removing noise, normalizing, and handling special characters, b.... Trap: Text preprocessing cleans and transforms raw text for model input by removing noise and normalizing format, not by co...
- **mock_3 Q13** / `m2-013`: In the context of **tokenization** for LLMs, what is the primary difference between Byte-Pair Encoding and **WordPiece**? Correct idea: **BPE** merges the most frequent byte pairs based on occurrence counts, while **WordPiece** merges pairs that maximize training corpus.... Trap: Both **BPE** and **WordPiece** require a fixed vocabulary size specified before training. Neither dynamically grows its vocab...
- **mock_3 Q34** / `m2-034`: What are the trade-offs when choosing vocabulary size for a language model's **tokenizer**? Correct idea: Larger vocabularies reduce sequence length and improve efficiency but increase embedding table size and rare token problems, wh.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_3 Q44** / `m2-044`: What **metrics** are used to assess data quality for LLM training, and why do they matter? Correct idea: Key **metrics** include text length distribution, language detection scores, **toxicity** levels, **perplexity** filtering, **deduplication** r.... Trap: This claims raw dataset size (gigabytes, document count) is the primary quality metric. Data quality is about content...
- **mock_3 Q57** / `m2-057`: What is the long-tail distribution problem in LLM training data, and why does it matter for model performance? Correct idea: The long-tail distribution means training data contains many common **examples** in the head but also countless rare **examples** in th.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_4 Q1** / `m3-001`: What is the primary purpose of **tokenization** in natural language processing? Correct idea: Converting text into discrete units, tokens, that can be processed by language models. Trap: **Tokenization** converts text into discrete tokens (words, subwords, or characters) for language model processing, not a...
- **mock_4 Q2** / `m3-002`: How does Byte Pair Encoding **tokenization** work? Correct idea: It iteratively merges the most frequent pairs of tokens or characters to build a vocabulary of subword units. Trap: **BPE** starts from individual characters or bytes and iteratively merges the most frequent adjacent pairs to build a voc...
- **mock_4 Q3** / `m3-003`: Multiple answers: What is the main advantage of subword **tokenization**, like **BPE** or **WordPiece**, over word-level **tokenization**? Select two. Correct idea: It handles morphologically rich languages effectively by decomposing complex word forms into meaningful subword components. Trap: Subword **tokenization** like **BPE** and **WordPiece** is language-agnostic and can process diverse languages, not restricted to...
- **mock_4 Q9** / `m3-009`: What is **chunking** in the context of **RAG** systems? Correct idea: Splitting large documents into smaller segments that can be efficiently embedded and retrieved. Trap: **Chunking** splits large documents into smaller segments for embedding and **retrieval**, not applies lossless or lossy comp...
- **mock_4 Q12** / `m3-012`: In text preprocessing for LLMs, what is the purpose of removing stopwords? Correct idea: To eliminate common words like `the`, `is`, and `and` that may carry little semantic value for certain NLP tasks. Trap: Stopword removal eliminates common low-information words like 'the' and 'is', not removes all punctuation marks and s...
- **mock_4 Q17** / `m3-017`: In a **RAG** system, what is the trade-off when choosing chunk size? Correct idea: Smaller chunks provide more precise **retrieval** but may lack context, while larger chunks provide more context but may dilute rel.... Trap: Smaller chunks do not always perform better -- they improve **retrieval** **precision** but may lack surrounding context need...
- **mock_4 Q22** / `m3-022`: In data preprocessing, what is normalization of text? Correct idea: Standardizing text by converting to lowercase, removing accents, or standardizing Unicode representations. Trap: Text normalization standardizes text representation (lowercasing, Unicode normalization), not computes statistical di...
- **mock_4 Q23** / `m3-023`: Multiple answers: What is the purpose of text augmentation in training **data preparation**? Select two. Correct idea: Helping models generalize better to unseen inputs by introducing linguistic variation and reducing **overfitting** to specific phra.... Trap: Text augmentation expands the training dataset by creating modified versions of existing **examples**, not identifies and...
- **mock_4 Q31** / `m3-031`: What is **SentencePiece** **tokenization**? Correct idea: A language-agnostic **tokenization** method that treats text as a sequence of Unicode characters, enabling multilingual support wit.... Trap: **SentencePiece** is language-agnostic and treats text as raw Unicode, not restricted to English with language-specific g...
- **mock_4 Q34** / `m3-034`: Multiple answers: What is the purpose of text cleaning in data preprocessing? Select two. Correct idea: Ensuring consistent data quality across heterogeneous sources by standardizing formatting, encoding, and structural elements be.... Trap: Text cleaning removes or fixes unwanted elements like HTML tags and special characters, not applies lossless compress...
- **mock_4 Q37** / `m3-037`: Multiple answers: What is the purpose of entity extraction in text preprocessing for **RAG**? Select two. Correct idea: Supporting knowledge graph construction by identifying entity relationships that can be used for multi-hop reasoning and struct.... Trap: Entity extraction identifies named entities within their original language context, not translates entity mentions to...
- **mock_4 Q39** / `m3-039`: What is the purpose of document **deduplication** in **RAG** preprocessing? Correct idea: Removing duplicate or near-duplicate documents to reduce redundancy, improve **retrieval** quality, and save storage and compute costs. Trap: Document **deduplication** removes redundant documents from the knowledge base, not splits documents into chunks for embe...
- **mock_4 Q41** / `m3-041`: Multiple answers: What is the purpose of parent-child **chunking** strategies in **RAG**? Select two. Correct idea: Solving the chunk size dilemma by using different granularities for indexing and context delivery without sacrificing either pr.... Trap: This option accurately describes parent-child **chunking** -- embedding smaller child chunks for precise **retrieval** while...
- **mock_4 Q43** / `m3-043`: What is the purpose of sliding window **chunking**? Correct idea: Creating overlapping chunks where each chunk shares some content with adjacent chunks to preserve context across boundaries. Trap: Sliding window **chunking** creates overlapping chunks to preserve boundary context, not detects and removes duplicate co...
- **mock_4 Q45** / `m3-045`: What is the purpose of **semantic chunking** in **RAG** systems? Correct idea: Splitting documents based on semantic coherence and topic boundaries rather than fixed sizes or arbitrary boundaries. Trap: **Semantic chunking** splits at natural topic and meaning boundaries rather than enforcing fixed-size chunks regardless o...
- **mock_4 Q49** / `m3-049`: What is the difference between extractive and abstractive summarization in preprocessing? Correct idea: Extractive selects and copies important sentences from the original text, while abstractive generates new sentences capturing t.... Trap: Both extractive and abstractive summarization primarily handle unstructured natural language text documents, not stru...
- **mock_4 Q50** / `m3-050`: Multiple answers: What is the purpose of **synthetic data** generation for **RAG** systems? Select two. Correct idea: Enabling **privacy**-preserving dataset creation by generating realistic but artificial data that mirrors real-world patterns witho.... Trap: **Synthetic data** generation creates new artificial data samples to augment training and **evaluation** datasets, not applie...
- **mock_4 Q53** / `m3-053`: What is the purpose of document tagging in **RAG** systems? Correct idea: Adding **metadata** labels, such as categories, topics, and entities, to documents to enable filtering and improve **retrieval** **precision**. Trap: Document tagging adds **metadata** labels such as categories, topics, and entities to enrich documents for filtering and...
- **mock_5 Q13** / `m4-013`: Multiple answers: When preparing a large text corpus for LLM pre-training, which data **quality filtering** steps are most critical for removing low-quality content? Selec... Correct idea: Applying language identification filters and encoding validation to remove corrupted documents, misidentified languages, and ga.... Trap: **Deduplication**, **toxicity** filtering, and removing low-information text based on heuristics are critical data quality st...
- **mock_5 Q43** / `m4-043`: What is text normalization, and why is it important when preprocessing data for LLM training or **fine-tuning**? Correct idea: The process of converting text to a standard, consistent format by handling variations like Unicode normalization, whitespace s.... Trap: Text normalization standardizes text through Unicode normalization, whitespace standardization, and consistent encodi...
- **mock_5 Q44** / `m4-044`: Multiple answers: When working with multilingual LLM training data, what are key challenges in handling text from multiple languages simultaneously? Select two. Correct idea: Ensuring equitable cross-lingual transfer performance so low-resource languages benefit from shared representations rather than.... Trap: Natural languages can be jointly modeled effectively, as demonstrated by multilingual LLMs like mBERT and XLM-R that...
- **mock_6 Q13** / `m5-013`: What is the key difference between lemmatization and stemming when preprocessing text for LLM applications? Correct idea: For modern LLMs, neither lemmatization nor stemming is typically necessary or beneficial. Trap: Option B makes an absolute claim using "always": "Lemmatization should always be applied before **fine-tuning**". Absolut...
- **mock_6 Q28** / `m5-028`: When preprocessing multilingual text data for LLM training, why is UTF-8 encoding preferred over ASCII or Latin-1? Correct idea: UTF-8 supports a much wider range of characters including non-Latin scripts, emojis, and special symbols. Trap: Option A describes "ASCII and Latin-1 produce more accurate predictions" but the question asks about When preprocessi...
- **mock_6 Q43** / `m5-043`: When preprocessing text for Named Entity Recognition tasks with LLMs, what is the most important consideration? Correct idea: Preserving exact character positions and ensuring **tokenization** **alignment** with entity boundaries. Trap: Option A describes "Applying lemmatization to reduce vocabulary size" but the question asks about When preprocessing...
- **mock_6 Q44** / `m5-044`: When preprocessing code-containing text for LLM training, what is the recommended approach? Correct idea: Preserve code blocks with their formatting, indentation, and syntax, using special markers to distinguish code from natural lan.... Trap: Option B describes "Remove all code blocks" but the question asks about When preprocessing code-containing text for L...
- **mock_6 Q57** / `m5-057`: Multiple answers: What are data augmentation techniques for text data in NLP, and how do methods like backtranslation and paraphrasing improve model robustness? Select... Correct idea: Augmentation techniques help reduce **overfitting** on small labeled datasets by exposing the model to more varied **examples** of the.... Trap: Option A describes "Data augmentation creates additional training **examples** by applying transformations..." but the qu...
- **mock_6 Q58** / `m5-058`: What challenges arise from noisy labels in training data for LLMs, and what are effective strategies for handling label noise? Correct idea: Noisy labels cause models to learn incorrect patterns and overfit to mislabeled **examples**; strategies include confidence-based f.... Trap: Large models are not immune to label noise -- they have high capacity and can memorize incorrect labels, especially w...

</details>

<!-- STUDY_ENRICHMENT_END -->

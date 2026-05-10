---
domain: Evaluation
weight: 7
status: populated
---

# Evaluation

## What to study first

- **Core idea:** Assess LLM quality with quantitative **metrics**, qualitative review, benchmarking, and **error analysis**.
- **Use it when:** Study this when comparing models, prompts, **RAG** variants, or tuning runs.
- **Study first:** perplexity: — exponentiated **cross-entropy** (exp(-1/N sum log P(token)))
- intrinsic LM confidence
- **tokenizer**-dependent scale
- ROUGE-1/2/L: — n-gram **recall** (unigram, bigram, LCS) for summarization
- punishes valid paraphrase
- BLEU: — n-gram **precision** with brevity penalty for translation
- punishes concise novelty
- BERTScore: — embedding cosine similarity between candidate and reference tokens
- better semantic correlation than n-gram **metrics**
- faithfulness: — claims in answer must be entailed by retrieved context
- detected via NLI or **LLM-as-judge**
- **Real trap:** A single automatic metric is rarely enough for open-ended generation or grounded **RAG**.

## Certification boundary

This page is the NCP-GENL exam lens for LLM evaluation. Keep general LLM metrics, validation, benchmarks, and contamination concepts here when they are tested by the GenAI LLMs blueprint. Agent trajectory evaluation and vendor-neutral agent safety belong in Agentic AI General Study; NVIDIA NeMo Evaluator cues stay here or in the shared service page.

## Core ideas you must hold in your head

- **Evaluation** is a continuous process, not a final checkpoint. Models are evaluated during training (validation loss), after training (held-out test set), and in production (**monitoring** **drift**). The exam tests **evaluation** at each stage.
- **Different metrics** answer different questions. **Perplexity** measures language model confidence. Accuracy/**Precision**/**Recall**/**F1** measure classification quality. **ROUGE**/**BLEU** measure text similarity. Human eval measures subjective quality. No single metric tells the whole story.
- **Statistical rigor** separates real improvements from noise. The exam expects awareness of confidence intervals, statistical significance testing, and k-fold cross-validation — not just "metric went up by 0.5."
- **Evaluation data** must NEVER overlap with training data. Cross-split **contamination** inflates **metrics** and produces models that fail in production. This is the cardinal sin of LLM **evaluation**.
- **NeMo Evaluator** provides standardized, **GPU**-accelerated **evaluation** pipelines. It integrates with NeMo Framework for training-aware **evaluation**.

## Mental model

**Evaluation** happens at **every stage** of the lifecycle:

```
Training       → Validation loss, perplexity (every N steps)
Post-training  → Held-out test set, benchmark suites (once)
Pre-deployment → Human eval, adversarial testing, red-teaming
Production     → Business metrics, drift detection, user feedback
```

## Core evaluation metrics

### Language modeling metrics

| Metric | What it measures | Formula / Meaning | Exam signal |
| ------ | ---------------- | ----------------- | ----------- |
| **Perplexity** | How "surprised" the model is by text | exp(**cross-entropy**); lower is better | Intrinsic LM quality; model-specific |
| **Cross-entropy loss** | Distance between predicted and true distribution | -Σ y_true × log(y_pred); lower is better | Training objective; the loss being minimized |
| **Bits-per-character (BPC)** | Compression efficiency | **Cross-entropy** / log(2) per character | Normalized **cross-entropy**; comparable across vocab sizes |
| **Length-normalized log probability** | Account for sequence length in scoring | log P(seq) / length^α | Prevents **bias** toward short sequences |

**Exam signal**: **Perplexity** is EXPONENTIATED **cross-entropy**. A **perplexity** of 10 means the model is as confused as if it had to choose among 10 equally likely tokens.

### Text generation quality metrics

| Metric | What it measures | Range | Best for |
| ------ | ---------------- | ----- | -------- |
| **ROUGE** (**Recall**-Oriented Understudy for Gisting **Evaluation**) | N-gram overlap with reference | 0-1 | Summarization |
| **ROUGE-1** | Unigram overlap | 0-1 | Content coverage |
| **ROUGE-2** | Bigram overlap | 0-1 | Fluency + content |
| **ROUGE-L** | Longest common subsequence | 0-1 | Sentence-level structure |
| **BLEU** (Bilingual **Evaluation** Understudy) | N-gram **precision** with brevity penalty | 0-1 | Machine translation |
| **METEOR** | **Precision** + **recall** + synonym matching | 0-1 | Translation with synonym awareness |
| **BERTScore** | Embedding similarity (cosine) | 0-1 | Semantic similarity beyond n-grams |

### Classification and retrieval metrics

| Metric | Formula | When to use |
| ------ | ------- | ----------- |
| **Accuracy** | (TP + TN) / Total | Balanced classes only; misleading for imbalanced data |
| **Precision** | TP / (TP + FP) | When false positives are costly (spam detection) |
| **Recall** | TP / (TP + FN) | When false negatives are costly (medical screening) |
| **F1 Score** | 2 × P × R / (P + R) | Harmonic mean; balances **precision** and **recall** |
| **AUC-ROC** | Area under ROC curve | Binary classification with varying thresholds |
| **NDCG** (Normalized Discounted Cumulative Gain) | Position-weighted relevance | Ranking/**retrieval**; higher positions matter more |
| **MRR** (Mean Reciprocal **Rank**) | Average of 1/**rank** of first relevant item | **Retrieval**; "where's the first correct answer?" |
| **Recall@K** | Fraction of queries with relevant item in top K | **Retrieval**; "is the answer in the top K results?" |

### RAG-specific evaluation

- **Faithfulness**: Are generated claims supported by retrieved documents? (**hallucination** detection)
- **Answer relevancy**: Does the response address the query?
- **Context precision**: Are relevant documents ranked higher than irrelevant ones?
- **Context recall**: Are all relevant documents retrieved?

## Validation and statistical methods

### Data splits

| Split | Purpose | Rules |
| ----- | ------- | ----- |
| **Training** | Learn parameters | Largest; diverse; representative |
| **Validation** | Tune hyperparameters, early stopping | Used many times; representative of test |
| **Test** | Final unbiased estimate | Used ONCE; never for decisions |
| **K-fold cross-validation** | More robust estimate for small datasets | K splits; train on K-1, validate on 1; repeat K times |

### Statistical significance testing

- **T-test**: Compare two model's performance across multiple test sets/runs → p-value below threshold (0.05) = statistically significant difference
- **Bootstrap resampling**: Sample with replacement from test results; estimate confidence intervals
- **McNemar's test**: Paired comparison on the same test set; "did the same **examples** flip?"

**Exam signal**: You can't claim model A beats model B based on a single run. Need multiple runs + statistical test or confidence intervals.

### Outlier and error analysis

- **Confusion matrix**: Which classes are confused with which?
- **Error analysis**: Categorize errors (factual, stylistic, formatting, **hallucination**)
- **Slice-based evaluation**: Evaluate on specific subpopulations (by language, topic, length)
- **Failure mode clustering**: Group similar errors to identify patterns

## Hyperparameter tuning and search

| Method | How it works | When right |
| ------ | ------------ | ---------- |
| **Grid search** | Exhaustive search over predefined values | Small search space (2-3 params, few values each) |
| **Random search** | Random **sampling** from hyperparameter distributions | Larger search space; more efficient than grid |
| **Bayesian optimization** | Build surrogate model; select promising candidates | Expensive evaluations (full training runs) |
| **Population-based training** | Evolutionary algorithm; train + mutate concurrently | Large-scale distributed tuning |

**Exam signal**: Random search > grid search for most practical scenarios because it explores more values per hyperparameter. Bayesian optimization is best when each **evaluation** is expensive.

## Benchmark suites

| Benchmark | What it tests | Exam signal |
| --------- | ------------- | ----------- |
| **MMLU** | Multi-task knowledge; 57 subjects | General knowledge and reasoning |
| **HellaSwag** | Commonsense reasoning; choose correct ending | Grounded reasoning (not just pattern matching) |
| **HumanEval** | Code generation; pass unit tests | Functional code correctness |
| **GSM8K** | Grade-school math word problems | Multi-step mathematical reasoning |
| **TruthfulQA** | Factual accuracy; avoiding misconceptions | Truthfulness (not just plausibility) |
| **MT-Bench** | Multi-turn conversation quality | Chat/instruction-following quality |
| **AlpacaEval** | **LLM-as-judge** comparison to reference | Relative quality vs reference model |

**NeMo Evaluator**: NVIDIA's framework for running standard benchmarks at scale with **GPU** acceleration.

## Decision traps worth remembering

1. **Accuracy for imbalanced data** — For imbalanced datasets (1% positive class), a model that always predicts negative has 99% accuracy and is useless. Use **F1**, **precision**-**recall**, or AUC-ROC.

2. **Perplexity vs quality** — Lower **perplexity** doesn't guarantee better generation quality, helpfulness, or **safety**. It's an intrinsic measure of LM confidence, not task fitness.

3. **Statistical significance** — Need multiple runs/seeds + statistical tests. A single run's difference can be noise.

4. **HPO method selection** — Random search explores more unique values per parameter. Bayesian optimization is even more efficient for expensive evaluations.

5. **Test set discipline** — Using the test set for decisions leaks information. **Validation set** is for tuning; test set is for one final measurement.

6. **LLM-as-judge limitations** — LLM judges have biases (position **bias**, verbosity **bias**, self-enhancement **bias**). They're useful for scale but not a replacement for human eval.

7. **Benchmark vs production** — Benchmarks measure specific capabilities in controlled settings. Production performance depends on distribution match, **latency** constraints, and user behavior.

## Must-know exam bullets

- **Perplexity** — exp(**cross-entropy**); exponentiated average negative log-likelihood; intrinsic LM quality
- **Accuracy** — misleading for imbalanced data; use **F1**, **precision**-**recall**, AUC-ROC
- **K-fold CV** — for small datasets; K estimates; more robust than single train/val split
- **Statistical significance** — p < 0.05 is common threshold; but report effect size too
- **Random search** — > grid search for HPO; explores more unique values per hyperparameter
- **Bayesian optimization** — for expensive evaluations; model-guided search
- **Validation vs test sets** — validation for tuning; test set ONCE for final measurement; never use test set for decisions
- **Cross-split contamination** — inflates **metrics**; deduplicate across splits
- **ROUGE and BLEU** — **ROUGE** for summarization, **BLEU** for translation; know the primary use case
- **NDCG and MRR** — for ranking/**retrieval**; query-level **metrics**
- **Human eval** — remains gold standard for generation quality; **LLM-as-judge** for scale, not replacement
- **NeMo Evaluator** — standardized **GPU**-accelerated **evaluation**; part of NVIDIA NeMo ecosystem

## Hands-on checks

1. Your model has 95% accuracy on a test set where 95% of samples are class A. Is this good? How do you properly evaluate?
2. You run experiment A once and experiment B once. B has 0.3 higher **BLEU**. Can you claim B is better?
3. When would you use **NDCG** instead of MRR for **retrieval evaluation**?
4. You're searching 3 hyperparameters with 10 values each. Grid search or random search? Why?
5. What's the practical difference between using a **validation set** 50 times during tuning vs using the test set once?

## Key terms to memorize

- **Perplexity** — exp(**cross-entropy**); lower = model is less "surprised" by text
- **Cross-entropy loss** — standard LM training objective; -Σ y_true × log(y_pred)
- **ROUGE** — n-gram **recall**-based; for summarization (**ROUGE**-1, **ROUGE**-2, **ROUGE**-L)
- **BLEU** — n-gram **precision** with brevity penalty; for machine translation
- **Precision** — TP / (TP + FP); minimize false positives
- **Recall** — TP / (TP + FN); minimize false negatives
- **F1 Score** — harmonic mean of **precision** and **recall**; balanced metric
- **AUC-ROC** — area under ROC curve; threshold-independent classification metric
- **NDCG** — Normalized Discounted Cumulative Gain; **rank**-weighted **retrieval** metric
- **MRR** — Mean Reciprocal **Rank**; position of first relevant result
- **K-fold cross-validation** — K train/val splits; robust estimate for small datasets
- **Grid search** — exhaustive hyperparameter search; small search spaces only
- **Random search** — random **sampling**; more efficient than grid for larger spaces
- **Bayesian optimization** — model-guided HPO; most efficient for expensive evaluations
- **Statistical significance** — p < 0.05; t-test, bootstrap, McNemar's test
- **Cross-split contamination** — same data in train and test; inflates **metrics**
- **MMLU** — Massive Multitask Language Understanding; 57-subject knowledge benchmark
- **HumanEval** — code generation benchmark; pass@k metric
- **NeMo Evaluator** — NVIDIA **GPU**-accelerated **evaluation** framework
- **LLM-as-judge** — using another model to score generation quality

### Top decision traps
- "95% accuracy is great" → meaningless for imbalanced data; check class distribution
- "Metric went up → model is better" → need statistical significance; could be noise
- "Grid search is the best HPO" → random search explores more; Bayesian even better
- "Test set can be reused for tuning" → **contamination**; test set is ONCE-only
- "**Perplexity** = generation quality" → intrinsic LM confidence; doesn't measure helpfulness/**safety**
- "**LLM-as-judge** = human eval" → judges have position/verbosity/self-enhancement **bias**

## Mock signals

Across the mock exams, **evaluation** questions repeatedly test these durable ideas:

- **Metric-task fit**: use **retrieval** **metrics** for **retrieval**, generation **metrics** for generated text, and human/LLM-judge criteria for subjective quality.
- **Validation discipline**: keep train/validation/test roles separate; do not tune on the test set.
- **Statistical confidence**: compare changes with significance checks, not single noisy scores.
- **Overfitting diagnosis**: watch validation loss, gap to training loss, and performance on held-out data.
- **RAG evaluation**: measure **retrieval** quality and answer **groundedness** separately.
- **Systematic tuning**: early stopping, hyperparameter search, and benchmark interpretation should be repeatable.

Evidence source: `mock_1` through `mock_5`, especially LLM **metrics**, **retrieval** **metrics**, validation strategy, hyperparameter tuning, **overfitting**, and systematic **evaluation** questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** GenAI LLMs
- **Weight:** 7%
- **What it covers:** Assess LLM quality with quantitative **metrics**, qualitative review, benchmarking, and **error analysis**.
- **Use this section when:** Study this when comparing models, prompts, **RAG** variants, or tuning runs.
- **Common trap:** A single automatic metric is rarely enough for open-ended generation or grounded **RAG**.
- **Recognition clues:** A model improves **ROUGE** but produces unsupported claims in a source-grounded workflow.

### Study notes

- **Perplexity** is exp(**cross-entropy**). Specifically, **perplexity** = exp(-(1/N) * sum of log P(token_i | context)) = exp(**cross-entropy** loss). A **perplexity** of 10 means the model is as "confused" as if it had to choose uniformly among 10 tokens at each position. **Perplexity** is only comparable within the same **tokenizer** — different tokenizers split the same text into different numbers of tokens, so the per-token **perplexity** values are not on the same scale. Low **perplexity** does NOT guarantee factual accuracy or helpfulness; it only measures LM confidence.
- **ROUGE** measures n-gram **recall** against references. **ROUGE**-1 = unigram **recall** (content coverage), **ROUGE**-2 = bigram **recall** (fluency + phrase-level accuracy), **ROUGE**-L = longest common subsequence **recall** (sentence-level structure). **ROUGE** favors systems that include reference n-grams, penalizing valid paraphrases. **BLEU** measures n-gram **precision** (1- through 4-gram) with a brevity penalty that penalizes outputs shorter than the reference. **BLEU** favors systems that match reference phrasing exactly. Neither captures semantic correctness — a factually wrong output can score highly if it shares n-grams with the reference.
- **BERTScore** uses cosine similarity of token **embeddings** rather than surface n-gram overlap. For each token in the candidate, it finds the most similar token in the reference (by embedding cosine similarity) and computes **precision**, **recall**, and **F1**. **BERTScore** correlates better with human judgment than **ROUGE**/**BLEU** for tasks where paraphrase diversity matters. However, it inherits biases from the embedding model and can miss factual errors if paraphrased fluently.
- **RAG evaluation** decomposes into **retrieval** quality and generation **faithfulness**. **Retrieval** **metrics**: MRR = 1/(**rank** of first relevant document), averaged over queries — answers "how early does the first good result appear?"; **Recall@k** = fraction of queries with at least one relevant document in the top k retrieved results — answers "is the answer in the top k?"; Context **precision** = fraction of retrieved documents that are relevant (**rank**-weighted). Generation **metrics**: **Faithfulness** = are the claims in the generated answer entailed by the retrieved context? (detected via NLI models or **LLM-as-judge**); Answer relevance = does the response directly address the user question?; Context relevance = does the retrieved context actually help answer the question? **Faithfulness** degradation is often the earliest sign of **RAG** pipeline breakdown — if the retriever returns low-quality or empty results, the generator has no grounding and may hallucinate.
- **LLM-as-judge biases** — three well-documented biases. Position **bias**: the judge prefers the first (or sometimes last) option presented — mitigated by randomizing option order and averaging scores across multiple orderings. Verbosity **bias**: the judge scores longer, more detailed responses higher regardless of quality — affects evaluations where concise answers are preferred. Self-enhancement **bias**: the judge tends to prefer outputs that match its own style, refusal policy, formatting habits, or model-family priors. Mitigations include: using a judge model different from the evaluated model, calibrating on human-annotated subsets, and reporting agreement rates.
- **Evaluation set design** — should be targeted, not massive. 500-2000 **examples** per capability is usually sufficient for reliable measurement beyond noise. Bootstrap from real production documents by extracting query-document pairs from **logs** and having annotators write gold answers. Cover failure modes you've seen in the past (regression sets). Split by capability category (factual, instruction-following, **safety**, formatting) to diagnose which dimension regressed. A single overall score hides critical degradation in one capability.
- **Contamination checks** — are non-negotiable. Before reporting any metric, verify that eval **examples** (or close paraphrases) do not appear in training data. Methods: exact string match, n-gram overlap (e.g., 13-gram Bloom filter used in GPT-3), embedding similarity with a threshold, and MinHash near-duplicate detection. The worst-case scenario is a model that "scores well" on a contaminated benchmark but fails on genuinely novel inputs in production. Never use public benchmarks alone — maintain private eval sets created after the model's training data cutoff.

- Match **metrics** to the task: **perplexity** for language modeling, **retrieval** **metrics** for **RAG** search, **faithfulness**/**groundedness** for cited answers, human evaluation criteria for open-ended quality.
- **LLM-as-judge** is useful but must be calibrated; it can be biased by verbosity, style, or its own prior knowledge.
- **Evaluation** should include regression sets so prompt/model/**deployment** changes do not silently break old behavior.

### Must know

- **perplexity** — exponentiated **cross-entropy** (exp(-1/N sum log P(token))); intrinsic LM confidence; **tokenizer**-dependent scale
- **ROUGE-1/2/L** — n-gram **recall** (unigram, bigram, LCS) for summarization; punishes valid paraphrase
- **BLEU** — n-gram **precision** with brevity penalty for translation; punishes concise novelty
- **BERTScore** — embedding cosine similarity between candidate and reference tokens; better semantic correlation than n-gram **metrics**
- **faithfulness** — claims in answer must be entailed by retrieved context; detected via NLI or **LLM-as-judge**
- **MRR** — 1/(**rank** of first relevant document); measures where the first correct answer appears
- **Recall@k** — fraction of queries with a relevant doc in top k; measures coverage of **retrieval**
- **LLM-as-judge biases** — position (mitigate: randomize order), verbosity (mitigate: control length), self-enhancement (mitigate: use different judge model)
- **Eval set construction** — 500-2000 targeted **examples** per capability; bootstrap from production queries; cover known failure modes
- **Contamination check** — verify eval **examples** not in training data via **exact match**, n-gram Bloom filter, MinHash, or embedding similarity

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
| --- | --- | --- |
| Language model confidence | **Perplexity** within the same tokenizer/model setup | Comparing perplexity across different tokenizers |
| Summarization overlap | **ROUGE** plus human or semantic review | Treating ROUGE as factual correctness |
| Translation surface match | **BLEU** with brevity penalty awareness | Using BLEU for open-ended helpfulness |
| Paraphrase-heavy generation | **BERTScore** or semantic/human evaluation criteria | Relying only on n-gram overlap |
| RAG answer has unsupported claims | **Faithfulness/groundedness** against retrieved context | Looking only at answer relevance or fluency |
| Retriever quality | **MRR**, **Recall@k**, and context precision | Scoring only the final generated answer |
| LLM-as-judge result favors long answers | Control verbosity, randomize order, calibrate with humans | Accepting judge scores as objective truth |
| Public benchmark score jumps | Run **contamination** checks and private evals | Declaring a breakthrough from one public score |
| Small score difference | Confidence intervals or bootstrap significance | Overreacting to one noisy run |

### Common confusions

| Confusion | Correct distinction |
| --- | --- |
| **Perplexity** vs answer quality | Perplexity measures next-token predictability, not factuality, helpfulness, or safety. |
| **ROUGE/BLEU** vs truth | N-gram metrics reward overlap; a wrong answer can overlap heavily with a reference. |
| **Faithfulness** vs relevance | Faithfulness asks whether claims are supported by context; relevance asks whether the answer addresses the query. |
| **Retrieval metrics** vs generation metrics | MRR/Recall@k measure search; faithfulness/helpfulness measure the produced answer. |
| **LLM-as-judge** vs human evaluation | Judges scale cheaply but need calibration; humans remain important for nuance and high-stakes acceptance. |
| **Contamination** vs overfitting | Contamination is train/eval leakage; overfitting is memorizing training patterns and failing held-out data. |
| Overall score vs capability slices | A single average can hide regressions in safety, formatting, retrieval, or instruction following. |

### Mini scenario drill

1. Scenario: A RAG answer cites sources but includes a claim not present in any retrieved passage.
   Best answer pattern: Evaluate **faithfulness** and inspect retriever outputs before changing the language model.
   Trap: Using ROUGE or BLEU to declare the answer correct.

2. Scenario: Model A beats Model B by 2% on a 100-example eval.
   Best answer pattern: Run confidence intervals or bootstrap significance and increase targeted eval coverage.
   Trap: Shipping based on one noisy point estimate.

3. Scenario: An LLM judge always prefers the longer answer.
   Best answer pattern: Test verbosity bias, control response length, randomize option order, and calibrate against human labels.
   Trap: Assuming the judge is unbiased because it is a stronger model.

### What to recognize

- **Benchmark score spike**: Sudden improvement on a public benchmark → suspect data **contamination**; run **contamination** check before declaring genuine improvement.
- **Model comparison inconclusive**: Two models have similar average scores → use statistical significance testing (bootstrap, t-test) with confidence intervals; single-run differences may be noise.
- **RAG faithfulness degradation**: Generated claims not supported by retrieved context → first sign of **RAG** pipeline breakdown; check retriever quality (empty results, low relevance scores), then generator/prompt changes.
- **LLM-as-judge bias**: Judge consistently prefers one model over another → test for position **bias** (randomize order), verbosity **bias** (control response length), or self-enhancement **bias** (use a different judge model).
- **Quality regression after deployment**: **Metrics** dropped compared to eval from a few weeks ago → check for distribution shift between eval set and production traffic; update eval set with production samples.
- **Perplexity comparison across tokenizers**: Different tokenizers produce different token counts for the same text → **perplexity** is **tokenizer**-dependent; only compare **perplexity** within the same **tokenizer**/vocabulary.
- **Suspected contamination**: Eval set scores seem too high relative to production performance → run **contamination** check (**exact match**, n-gram overlap, embedding similarity) between eval **examples** and training corpus.
- **Eval set size concerns**: 50-example eval set produces noisy, inconclusive results → 500-2000 **examples** per capability needed for reliable measurement; use bootstrap to estimate confidence intervals.

### Hands-on checks

- Pair each metric with one failure it can catch and one failure it misses.
- Given a **RAG** system with high **ROUGE** but low **faithfulness**, identify which pipeline component is failing and how to fix it.
- Design a **contamination** check protocol for a 1000-example eval set against a 1T-token training corpus — which methods scale, which don't?
- An **LLM-as-judge** **evaluation** shows model A beats model B by 5%. List three potential biases that could explain this result and the mitigation for each.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when comparing models, prompts, **RAG** variants, or tuning runs.
- The major trap pattern is: A single automatic metric is rarely enough for open-ended generation or grounded **RAG**.
- Recurring local question themes follow the key ideas: **perplexity**, **BLEU**/**ROUGE**, **faithfulness**, **LLM-as-judge**, **human evaluation**.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q39** / `eval-001`: Evaluating a **RAG** system, which metric distinguishes "answer is grounded in retrieved documents" from "answer is on-topic"? Correct idea: **Faithfulness** (the answer's claims are entailed by retrieved context) — separate from answer relevance to the question.
- **mock_1 Q40** / `eval-002`: Why is comparing **perplexity** across models with different tokenizers misleading? Correct idea: **Perplexity** is per-token; different tokenizers split text into different token counts, so the same text yields different perplex....
- **mock_1 Q41** / `eval-003`: **LLM-as-judge** has a known **bias**. Which one is most often controlled for? Correct idea: Position **bias** — judges prefer the first option presented; mitigated by randomizing order and averaging across positions.
- **eval-004** / `eval-004`: For evaluating open-ended writing quality, **BLEU** and **ROUGE** alone are insufficient because: Correct idea: They reward n-gram overlap with references, which penalizes valid paraphrases and stylistic variation.
- **eval-005** / `eval-005`: To detect instruction-following regressions, the most useful eval is: Correct idea: A targeted instruction-following benchmark (e.g., IFEval-style verifiable constraints — output length, **JSON schema**, refusal tri....
- **eval-006** / `eval-006`: When does **human evaluation** remain irreplaceable despite expensive cost? Correct idea: Tasks involving nuance, helpfulness vs. harm trade-offs, cultural sensitivity, or final acceptance for high-stakes deployments.
- **eval-007** / `eval-007`: Statistical significance for a chat-quality A/B test: what minimum design step prevents false positives from peeking at **metrics**? Correct idea: Pre-register sample size and stopping rule (or use a sequential test like AGILE/SPRT) before starting.
- **mock_2 Q39** / `m1-039`: Which **evaluation** metric is commonly used to measure the quality of text generation in tasks like summarization? Correct idea: **ROUGE**. Trap: Mean Squared Error between embedding vectors would measure semantic distance in embedding space, not text generation...
- **mock_3 Q27** / `m2-027`: When evaluating LLM performance, what does the **perplexity** metric measure? Correct idea: **Perplexity** measures how well the model predicts a sample. Lower **perplexity** indicates the model is less surprised by the text an.... Trap: This describes semantic similarity **metrics** like cosine similarity between **embeddings**. **Perplexity** is computed from the...
- **mock_3 Q55** / `m2-055`: What is the purpose of comprehensive **evaluation** frameworks like HELM or the EleutherAI LM **Evaluation** Harness? Correct idea: These frameworks provide standardized, reproducible **evaluation** across dozens of diverse tasks and **metrics**, enabling fair compar.... Trap: This claims HELM and EleutherAI LM **Evaluation** Harness evaluate non-overlapping capabilities. Both frameworks evaluate...
- **mock_3 Q56** / `m2-056`: Why is **human evaluation** still critical for LLMs despite the availability of automated **metrics** like **BLEU**, **ROUGE**, and **perplexity**? Correct idea: Automated **metrics** often fail to capture nuanced qualities humans care about like coherence, relevance, **safety**, helpfulness, and.... Trap: Absolute claims are rarely correct in ML — this option overstates its case with an extreme qualifier that does not re...
- **mock_4 Q55** / `m3-055`: What is the purpose of **evaluation** **metrics** like MRR in **RAG** systems? Correct idea: Measuring **retrieval** quality by evaluating where the first relevant document appears in the ranked results. Trap: MRR is a **retrieval** ranking metric that measures where the first relevant document appears in the ranked results, not...
- **mock_4 Q60** / `m3-060`: What is the purpose of eval sets in **RAG** system development? Correct idea: Curated question-answer pairs with ground truth to systematically evaluate and compare **retrieval** and generation quality. Trap: Eval sets are curated collections of question-answer pairs with ground truth data for measuring system performance, n...
- **mock_5 Q27** / `m4-027`: What are confidence intervals when reporting LLM performance **metrics**, and why are they more informative than point estimates alone? Correct idea: A range of values that likely contains the true performance metric with a specified probability, providing information about un.... Trap: The count of predictions where the top token probability exceeds a threshold describes a confidence threshold or cove...
- **mock_5 Q57** / `m4-057`: What is data **contamination** in LLM **evaluation**, and why is it a serious concern for benchmark validity? Correct idea: When test or **evaluation** data appears in the model's training set, causing artificially inflated performance **metrics** that do not.... Trap: Data **contamination** in **evaluation** refers to test data appearing in the training set, not the presence of biased or tox...
- **mock_5 Q58** / `m4-058`: When constructing a new benchmark dataset for evaluating LLM capabilities, what are key principles to ensure validity and usefulness? Correct idea: Ensure questions require the target capability, prevent data **contamination** through private test sets or post-training creation,.... Trap: Maximizing dataset size without quality guarantees can introduce noisy, ambiguous, or trivial **examples** that reduce th...
- **mock_6 Q10** / `m5-010`: When conducting LLM experiments, what is the recommended approach for splitting datasets to evaluate model performance? Correct idea: Split data into training, validation, and test sets with stratification. Trap: Option B describes "Randomly select different samples for each epoch" but the question asks about When conducting LLM...
- **mock_6 Q15** / `m5-015`: Multiple answers: In evaluating LLM **fairness**, what does the demographic parity **fairness** metric measure? Select two. Correct idea: Demographic parity requires that the probability of receiving a positive prediction is independent of group membership, express.... Trap: Option A describes "Whether the training dataset has equal representation from all demographic groups" but the questi...
- **mock_6 Q27** / `m5-027`: When implementing k-fold cross-validation for evaluating LLM **fine-tuning** approaches, what is the primary consideration in choosing the value of k? Correct idea: Balancing between variance reduction and computational cost, with k=5 or k=10 being common choices. Trap: Option A describes "Use k equal to the number of **examples**" but the question asks about When implementing k-fold cross...
- **mock_6 Q52** / `m5-052`: What are auto-scaling policies for LLM inference, and what **metrics** should trigger scaling decisions? Correct idea: Auto-scaling policies automatically adjust the number of inference instances based on **metrics** like request queue depth, average.... Trap: Option A makes an absolute claim using "only": "Auto-scaling increases batch size only". Absolute statements like thi...

</details>

<!-- STUDY_ENRICHMENT_END -->

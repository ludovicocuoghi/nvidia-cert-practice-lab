---
service: NeMo Evaluator
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# NeMo Evaluator

## At a glance

| | |
|---|---|
| **What it is** | Python library + API microservice — automated LLM/agent quality benchmarking and regression detection |
| **How you access it** | `pip install nvidia-nemo-evaluator`, REST API, Python: `from nemo_evaluator import evaluate` |
| **Input** | Model endpoint URL + benchmark selection (MMLU, HELM) / generated answers + references |
| **Output** | Evaluation report (per-task scores, faithfulness, ROUGE, BERTScore) / drift alerts |
| **Inside** | MMLU/HELM/BIG-Bench harness, LLM-as-Judge (rubric, position-bias correction), RAG metrics |

```python
results = evaluate(model="nim://localhost:8000/nemotron-4-15b",
                   benchmarks=["mmlu", "hellaswag", "truthfulqa"], num_fewshot=5)
print(f"MMLU accuracy: {results['mmlu']['accuracy']:.2%}")
```

**Mental model**: the automated test suite for your LLM — run MMLU + LLM-as-Judge against a model endpoint and get a quality report before release.

---

## What it is, in one paragraph

NVIDIA's evaluation tool for measuring model and agent performance. NeMo Evaluator assesses accuracy, quality, groundedness, and other metrics across tasks — enabling systematic comparison and optimization of agentic AI systems. It is the **quality measurement layer** for the NeMo ecosystem.

## Where it sits in the lifecycle

**Evaluation** — after training/customization, before or during deployment. Measures model quality, compares versions, tracks regressions.

```
[Model/Agent] → [NeMo Evaluator: benchmark, score, compare] → [Quality report]
                                                                    ↓
                                             [Decide: deploy, tune, or retrain]
```

## When it is the right answer

- Questions about NVIDIA's specific tool for model/agent quality evaluation
- Systematic benchmarking and comparison of agent versions
- Measuring accuracy, groundedness, safety metrics with NVIDIA tools

## When it is the wrong answer (common trap)

- **Model serving**: That's NIM or Triton Inference Server.
- **Performance profiling (GPU level)**: That's Nsight Systems / Nsight Compute. Evaluator measures quality, not GPU performance.
- **Safety filtering**: That's NeMo Guardrails.
- **Data processing**: That's RAPIDS or NeMo Curator.
- **"Nsight Systems"** or **"NVIDIA SMI"**: These are performance/status tools, not quality evaluators.

## How it relates to neighboring services

- vs **NeMo Guardrails**: Evaluator measures quality; Guardrails enforces safety policies. Evaluator tells you if the model is good; Guardrails prevents bad outputs regardless.
- vs **NeMo Framework**: Framework trains; Evaluator measures how well the trained model performs.
- vs **General eval frameworks (LangSmith, Braintrust)**: Similar domain, but NeMo Evaluator is NVIDIA-native and integrates with the NeMo ecosystem.

## Numbers, defaults, knobs you should recognize

- Task-specific metrics: accuracy, F1, ROUGE, BERTScore, faithfulness
- Supports comparison across model versions and agent configurations
- Integrates with NeMo ecosystem for continuous evaluation

## Example exam-style scenario

> A team wants to systematically benchmark their NeMo-trained agent's performance across multiple tasks before deployment. Which NVIDIA tool provides this?
>
> **Answer**: NeMo Evaluator — the quality measurement and benchmarking tool in the NeMo ecosystem.

## Mock signals

- **Limited direct evidence in Agentic AI mocks.** NeMo Evaluator is referenced in distractor answer choices but is not the correct answer in the current mock bank. Most evaluation questions test general evaluation methodology (trajectory eval, faithfulness, task-specific metrics) rather than NeMo Evaluator specifically.
- Study signal: pick it for reproducible model/agent quality evaluation, not low-level profiling or production uptime dashboards.

## Deep Dive Contents

This deep dive covers the key concepts behind NeMo Evaluator that the exam tests:

- **[LLM Evaluation Taxonomy]**: perplexity, ROUGE, BLEU, BERTScore, human evaluation, and LLM-as-Judge — with each metric's blind spots
- **[RAG Evaluation Metrics]**: recall@k, precision@k, MRR, nDCG, faithfulness/groundedness, answer relevance, and context relevance
- **[Evaluation Set Construction]**: stratified sampling, ground truth creation, contamination checks, and eval set size guidelines
- **[LLM-as-Judge]**: position bias, verbosity bias, self-enhancement bias, and mitigations (swap-and-average, rubrics, multiple judges)
- **[Harness Frameworks]**: lm-evaluation-harness, HELM, BIG-Bench, and MMLU — their structure, strengths, and limitations

## DEEP DIVE: LLM Evaluation Taxonomy

Automatic metrics provide fast, reproducible evaluation at scale, but each has distinct blind spots.

**Perplexity (PPL)**
Computed as the exponentiated cross-entropy over a text corpus: PPL = exp(-(1/N) * sum(log P(w_i | context))). A lower perplexity means the model assigns higher probability to the observed tokens -- it is less "surprised" by the text. Perplexity correlates well with fluency but poorly with factuality, instruction-following, or safety. **When perplexity is misleading:** (1) the corpus contains trivial high-frequency tokens that dominate the probability mass, (2) corpus length varies across comparisons (perplexity is length-dependent), (3) the model has seen the eval corpus during training (data contamination inflates scores).

**ROUGE (Recall-Oriented Understudy for Gisting Evaluation)**
Measures n-gram overlap between generated and reference text, with recall as the primary score. ROUGE-L uses the longest common subsequence (LCS), capturing sentence-level structure. Standard for summarization evaluation. **What it misses:** factual correctness (a fabricated but stylistically correct summary can score high ROUGE), semantic equivalence via paraphrase, and fluency. Typical ROUGE-L F1 scores for strong summarization models: ~25-35 on CNN/DailyMail.

**BLEU (Bilingual Evaluation Understudy)**
Measures n-gram precision with a brevity penalty that penalizes overly short outputs. Standard in machine translation. **What it misses:** synonyms, valid paraphrases, and stylistic variation. Explicitly tested in exam mocks (eval-004): BLEU and ROUGE are insufficient for open-ended writing because "they reward n-gram overlap with references, which penalizes valid paraphrases and stylistic variation."

**BERTScore**
Computes token-level cosine similarity between generated and reference tokens using contextual BERT embeddings. Produces precision, recall, and F1 scores. Better captures semantic overlap than n-gram methods. **Weakness:** less sensitive to factual hallucinations if the embedding space does not clearly distinguish contradictory statements from paraphrases. BERTScore F1 typically ranges from 0.85-0.95 for strong models.

**Human Evaluation**
The gold standard, typically using Likert scales (1-5) across dimensions like helpfulness, harmlessness, and honesty. High inter-annotator agreement (Cohen's kappa > 0.7) is essential for reliability. Limitations: expensive, slow, not scalable, and annotator fatigue degrades quality over time.

**Model-Based Evaluation (LLM-as-Judge)**
Scalable and reproducible. See DEEP DIVE: LLM-as-Judge below.

## DEEP DIVE: RAG Evaluation Metrics

RAG evaluation splits into **retrieval** and **generation** components, each with separate metrics.

**Retrieval Metrics**

- **Recall@k:** Fraction of relevant documents retrieved within the top-k results. The most important retrieval metric -- low recall means the generator lacks necessary context. Typical target: > 0.9 for k=5 in production RAG systems.
- **Precision@k:** Fraction of top-k results that are actually relevant. High precision reduces noise in the LLM context window. Important but secondary to recall.
- **Mean Reciprocal Rank (MRR):** Average of 1/(rank of first relevant document) across queries. Measures whether the single most useful document appears early. Standard for QA-style retrieval where one document typically contains the answer.
- **nDCG (Normalized Discounted Cumulative Gain):** Accounts for graded relevance (not just binary) and discounts results at lower ranks. Preferred when relevance is multi-level (e.g., perfect, good, fair, bad). More granular than MRR.

Typical retrieval eval set size: 300-1000 queries with human-annotated relevance judgments.

**Generation Metrics**

- **Faithfulness (Groundedness):** Whether each claim in the generated answer is entailed by (or directly stated in) the retrieved context. Measured via NLI models (e.g., TRUE, Natural Questions) or LLM-as-judge with claim decomposition. Low faithfulness = hallucination. This is the most critical generation metric for RAG systems.
- **Answer Relevance:** Whether the generated answer actually addresses the user's question. A fluent but off-topic answer scores high on fluency but low on relevance.
- **Context Relevance:** Whether the retrieved context snippets are topically aligned with the user's question. Context can be relevant even if the answer is unfaithful, and vice versa.

**Groundedness vs. Relevance Distinction** (mock_1 eval-001)
Groundedness = "are the claims supported by the source material?" (factual anchoring). Relevance = "does the answer respond to what was asked?" (topical alignment). A document can be on-topic (relevant) but contain claims not supported by sources (not grounded). A document can be fully grounded but answer a completely different question (not relevant). An eval framework must measure both independently.

## DEEP DIVE: Evaluation Set Construction

Building a high-quality evaluation set is the foundation of trustworthy model comparison.

**Representative Sampling**
Eval sets must mirror production distribution. Sampling strategies:
- **Stratified sampling:** Divide queries by category (factual, reasoning, creative, multi-turn), document type, and difficulty, then sample proportionally.
- **Adversarial sampling:** Deliberately include edge cases, ambiguous queries, and multi-hop questions to test failure modes. Critical for catching regressions that easy examples would miss.
- **Production log sampling:** Sample real user queries (with privacy safeguards) to ensure the eval set reflects actual usage patterns.

**Ground Truth Creation**
- **Human annotation:** Domain experts write gold answers and judge relevance. Highest quality but slowest. Requires inter-annotator agreement checks. Target Cohen's kappa > 0.7 for reliable labels.
- **LLM generation + verification:** Generate candidate (question, answer) pairs with an LLM, then verify correctness. Faster but risks propagating model biases into the eval set. Best practice: use a different, stronger model for verification than for generation.
- **Bootstrapping from documents** (the approach from mock_1 eval-003): Generate questions from specific document chunks, filter to keep only pairs verified as answerable from that chunk, and use the source chunk as ground truth for retrieval evaluation. This creates naturally grounded eval data without manual annotation.

**Contamination Checks**
Data leakage between training and evaluation sets invalidates benchmarks. Checking methods:
- **N-gram overlap detection:** Flag eval examples sharing suspiciously long n-grams with training data. A common threshold is 13-gram overlap (from GPT-2 era), but newer models with larger tokenizers may require adjusted thresholds.
- **Embedding similarity:** Flag eval examples whose embeddings are nearest neighbors of training examples within a similarity threshold (e.g., cosine similarity > 0.9).
- **Temporal separation:** Create eval sets from data dated after the model's training cutoff. The most robust contamination defense but requires ongoing data collection.
- **Canary strings:** Insert unique identifiable strings into eval questions. If the model reproduces them, it has seen the eval data during training.

**Eval Set Size Guidelines**
- **Targeted evaluation** (single capability, e.g., instruction-following, safety, summarization): **500-2000 examples**. Sufficient for high-confidence A/B comparisons with typical effect sizes.
- **Comprehensive evaluation** (general capability ranking): **5,000+ examples** across multiple task categories. Required for statistically significant detection of <1% performance differences.
- **Regression detection:** **200-500** carefully crafted, high-signal examples targeting known failure modes -- enough to catch regressions without excessive eval cost.
- **Rule of thumb:** Doubling eval set size reduces confidence interval width by sqrt(2), but only if additional examples are equally informative (not redundant).

## DEEP DIVE: LLM-as-Judge

Using one LLM to evaluate the outputs of another is a powerful technique for scalable evaluation, but introduces systematic biases that must be controlled.

**When It Works Well**
- **Relative comparisons (pairwise):** "Which output is better?" Judges are more reliable at ranking than absolute scoring. A/B comparisons between two model versions are the canonical use case.
- **Rubric-guided evaluation:** Provide a structured rubric (score 1-5 on correctness, conciseness, harmlessness) with calibrated example outputs for each score level. This significantly improves consistency over free-form scoring (mock_1 eval-003).
- **Coarse discrimination:** Distinguishing acceptable from unacceptable outputs is reliable. Distinguishing "good" from "very good" requires careful calibration.
- **Factual consistency checking:** An LLM-as-judge can decompose an answer into atomic claims and verify each against a reference context. This is more reliable than holistic scoring.

**Known Biases**

- **Position bias:** The judge prefers outputs presented first (or last, depending on the model). This is the most commonly controlled-for bias in production and the specific bias tested in mock_1 eval-003 ("LLM-as-judge has a known bias. Which one is most often controlled for?" Correct: Position bias -- mitigated by randomizing order and averaging across positions.)
- **Verbosity bias:** Longer outputs receive higher scores even when the extra content is irrelevant or unsupported. Tested in mock_1 eval-004: "An LLM-as-judge prefers longer answers even when they contain unsupported details. Which mitigation is best?"
- **Self-enhancement bias:** LLMs tend to prefer their own outputs. When the judge model and the evaluated model are identical, scores are inflated relative to cross-model evaluation.
- **Brevity penalty:** Some judges penalize concise answers as "insufficiently detailed," even when concise is appropriate.

**Mitigations**

- **Swap positions and average:** Run each pairwise evaluation twice with order reversed, then average the scores. This is the single most effective mitigation for position bias and is standard practice (mock_1 eval-003).
- **Multiple judges with aggregation:** Use 3-5 different LLM judges and aggregate via majority vote or average. Reduces the impact of single-model bias patterns.
- **Structured rubric with chain-of-thought:** Require the judge to reason step-by-step before assigning a score, referencing specific rubric dimensions. CoT reasoning reduces superficial biases (mock_1 eval-004).
- **Calibration with human ratings:** Periodically compare LLM-as-judge scores against human ratings on a held-out calibration set. Adjust the rubric or temperature when alignment drifts.
- **Separate judge model:** Use a different model for judging than the one being evaluated to avoid self-enhancement bias. Ideally, use a model known for strong instruction-following and impartiality.

## DEEP DIVE: Harness Frameworks

Standardized evaluation frameworks enable reproducible, multi-task model comparison across the industry.

**lm-evaluation-harness (EleutherAI)**
The most widely used open-source evaluation framework. Key features:
- **200+ tasks** including MMLU, HellaSwag, ARC, GSM8K, TruthfulQA, HumanEval, and many more.
- **Consistent metrics:** accuracy, F1, exact match, BLEU, perplexity, and custom metrics.
- **Few-shot evaluation:** Supports k-shot in-context examples with configurable formatting.
- **Logprobs-based evaluation:** For multiple-choice tasks, can evaluate using only model log probabilities (no generation needed), which is faster and more deterministic.
- **Model registry:** Supports HuggingFace models, OpenAI API, Anthropic API, and custom model wrappers.
- **Widely used for:** Open-source model comparisons, regression testing during model training, and reproducing published results.

**HELM (Holistic Evaluation of Language Models, Stanford CRFM)**
A comprehensive evaluation framework emphasizing multi-metric assessment. Key features:
- **Every scenario, every metric:** Each scenario (MMLU, summarization, etc.) is evaluated on accuracy, calibration, robustness, fairness, bias, toxicity, and efficiency simultaneously. No cherry-picking favorable metrics.
- **Standardized prompting:** Fixed prompt templates ensure fair cross-model comparison.
- **Transparency:** All model outputs, human evaluations, and analysis code are published. Non-reproducible claims are flagged.
- **Scenario-based evaluation structured by:** what the model is asked to do, whom it interacts with, the domain, and the language.
- **Limitation:** Computationally expensive -- evaluating a single model across all HELM scenarios can require thousands of API calls.

**BIG-Bench (Beyond the Imitation Game Benchmark)**
A collaborative benchmark with 200+ tasks crowdsourced from hundreds of researchers. Key findings:
- **Log-linear scaling:** Performance improves predictably with model size for most tasks.
- **Breakthrough behavior:** A minority of tasks show sudden capability emergence at a specific scale, rather than gradual improvement.
- **Diverse domains:** mathematics, coding, logic, common-sense reasoning, theory of mind, social bias detection, and creative writing.
- **Limitation:** Many tasks are small (a few hundred examples), and single-task scores have high variance.

**MMLU (Massive Multitask Language Understanding)**
The most common LLM knowledge test in the industry. Key facts:
- **57 subjects** spanning STEM, humanities, social sciences, and professional fields.
- **Format:** 4-choice multiple choice, ~14,000 questions total.
- **Typical scores:** ~25% (random baseline) to ~90%+ (frontier models like GPT-4, Claude 3.5).
- **Usage:** Industry standard for reporting in LLM technical reports and leaderboards (Open LLM Leaderboard, HELM).
- **Key limitation:** Data contamination risk is high because MMLU is public and has been included in many training corpora. Temporal separation (questions created before 2020) means models may have memorized answers.
- **Alternative per-subject breakdown:** Models often show significant variance across subjects (e.g., strong on STEM, weaker on law or ethics), making per-subject scores more informative than the overall average.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Evaluation
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Python library + API microservice — automated LLM/agent quality benchmarking and regression detection
- **Use it when:** Use when model or agent outputs need benchmark scoring, LLM-as-judge evaluation, regression checks, or release-quality comparisons.
- **Do not use it when:** Do not use it for serving the model, profiling GPU kernels, enforcing runtime guardrails, or curating training data.
- **Common trap:** Confusing quality evaluation before/after release with production monitoring or low-level profiling.
- **Scenario signal:** A release needs repeatable benchmark, LLM-as-judge, or regression evaluation before shipping a model or agent.
### Study notes
- Place **NeMo Evaluator** at **Evaluation**: the automated test suite for your LLM — run MMLU + LLM-as-Judge against a model endpoint and get a quality report before release.
- Choose it when: Use when model or agent outputs need benchmark scoring, LLM-as-judge evaluation, regression checks, or release-quality comparisons. Reject it when: Do not use it for serving the model, profiling GPU kernels, enforcing runtime guardrails, or curating training data.
### Must know
- ROUGE, BLEU, BERTScore — n-gram overlap and embedding-based metrics with known blind spots
- faithfulness/groundedness — whether claims are entailed by retrieved context, distinct from answer relevance
- LLM-as-Judge — position bias, verbosity bias, self-enhancement bias, and rubric-guided scoring
- recall@k, precision@k, MRR, nDCG — retrieval-side evaluation metrics
- contamination checks — n-gram overlap, embedding similarity, temporal separation, canary strings
### High-yield exam signals
- model quality → NeMo Evaluator benchmarks accuracy, groundedness, and safety metrics
- LLM-as-Judge → scalable evaluation with position bias as the most commonly controlled-for artifact
- RAG evaluation → faithfulness (claims grounded in retrieved context) vs relevance (answer on-topic)
- regression detection → continuous eval on canary prompt sets catches quality drift before users notice
### Hands-on checks
- Write one scenario where this service is correct and one where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **NeMo Evaluator** matches **Evaluation**, not whether the product name sounds familiar.
- Choose it when the scenario signal matches this boundary: Use when model or agent outputs need benchmark scoring, LLM-as-judge evaluation, regression checks, or release-quality comparisons.
- Reject it when the problem is actually about another layer: Do not use it for serving the model, profiling GPU kernels, enforcing runtime guardrails, or curating training data.
- The common trap pattern is: Confusing quality evaluation before/after release with production monitoring or low-level profiling.
- Expect distractors around nearby services such as **NIM**, **Nsight Systems**, **RAPIDS**. Decide by lifecycle first, product name second.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q41, mock_2 Q43, mock_3 Q53, mock_4 Q47, mock_5 Q43** / `platform-003` (NVIDIA Platform Implementation): A team wants to deploy a model as a standard optimized inference microservice with an API endpoint. Which NVIDIA component is the best match? Correct idea: NIM. Trap: RAPIDS accelerates data processing.
- **mock_1 Q37** / `deploy-003` (Model Deployment): Canary deployment for a new LLM version — which signal is most LLM-specific (vs. generic web service signals)? Correct idea: Quality regressions on a canary-traffic eval (LLM-as-judge, automatic checks) compared to baseline output distributions, on top..
- **mock_1 Q41** / `eval-003` (Evaluation): LLM-as-judge has a known bias. Which one is most often controlled for? Correct idea: Position bias — judges prefer the first option presented; mitigated by randomizing order and averaging across positions.
- **mock_1 Q17, mock_2 Q18, mock_3 Q23, mock_4 Q19, mock_5 Q18** / `eval-003` (Evaluation and Tuning): No labeled eval set exists for a new enterprise RAG agent. What is a strong way to bootstrap retrieval evaluation? Correct idea: Generate questions from specific document chunks, keep only answerable pairs after verification, and use the source chunk as gr.. Trap: Self-judgment has circularity.
- **eval-004** / `eval-004` (Evaluation): For evaluating open-ended writing quality, BLEU and ROUGE alone are insufficient because: Correct idea: They reward n-gram overlap with references, which penalizes valid paraphrases and stylistic variation.
- **mock_1 Q18, mock_2 Q19, mock_3 Q24, mock_4 Q20** / `eval-004` (Evaluation and Tuning): An LLM-as-judge prefers longer answers even when they contain unsupported details. Which mitigation is best? Correct idea: Use a rubric that separately scores correctness, support, conciseness, and harmfulness, with calibrated examples and position/o.. Trap: Generic fairness instructions are weak.
- **eval-005** / `eval-005` (Evaluation): To detect instruction-following regressions, the most useful eval is: Correct idea: A targeted instruction-following benchmark (e.g., IFEval-style verifiable constraints — output length, JSON schema, refusal tri..
- **mock_1 Q20, mock_2 Q21, mock_3 Q26, mock_4 Q22, mock_5 Q20** / `eval-006` (Evaluation and Tuning): A prompt change improves benchmark score but increases unnecessary human escalations in production. What should the eval include? Correct idea: Escalation precision/recall and reviewer-load metrics on representative production-like cases. Trap: Toxicity is separate.
- **mock_3 Q52** / `m2-052` (Model Deployment): How should A/B testing be implemented when deploying new LLM variants in production? Correct idea: A/B testing for LLMs involves routing a percentage of production traffic to the new model variant while the rest uses the exist.. Trap: This describes offline validation on a held-out test set, which is model evaluation, not A/B testing. A/B testing inv..
- **mock_3 Q55** / `m2-055` (Evaluation): What is the purpose of comprehensive evaluation frameworks like HELM or the EleutherAI LM Evaluation Harness? Correct idea: These frameworks provide standardized, reproducible evaluation across dozens of diverse tasks and metrics, enabling fair compar.. Trap: This claims HELM and EleutherAI LM Evaluation Harness evaluate non-overlapping capabilities. Both frameworks evaluate..
- **mock_4 Q60** / `m3-060` (Evaluation): What is the purpose of eval sets in RAG system development? Correct idea: Curated question-answer pairs with ground truth to systematically evaluate and compare retrieval and generation quality. Trap: Eval sets are curated collections of question-answer pairs with ground truth data for measuring system performance, n..
- **mock_5 Q30** / `m4-030` (Model Deployment): When deploying an LLM system that makes decisions affecting users, why is transparent stakeholder communication about the system's capabilities and limitations important? Correct idea: It sets appropriate expectations, builds trust, enables informed consent, and helps users understand when to rely on or questio.. Trap: All stakeholders affected by an AI system including end users, domain experts, and affected communities deserve trans..
- **mock_5 Q57** / `m4-057` (Evaluation): What is data contamination in LLM evaluation, and why is it a serious concern for benchmark validity? Correct idea: When test or evaluation data appears in the model's training set, causing artificially inflated performance metrics that do not.. Trap: Data contamination in evaluation refers to test data appearing in the training set, not the presence of biased or tox..
- **mock_5 Q58** / `m4-058` (Evaluation): When constructing a new benchmark dataset for evaluating LLM capabilities, what are key principles to ensure validity and usefulness? Correct idea: Ensure questions require the target capability, prevent data contamination through private test sets or post-training creation,.. Trap: Maximizing dataset size without quality guarantees can introduce noisy, ambiguous, or trivial examples that reduce th..
- **mock_6 Q21** / `m5-021` (Model Deployment): What is the purpose of implementing a health check endpoint in a production LLM API service? Correct idea: To allow load balancers and orchestration systems to monitor service availability and route traffic appropriately. Trap: Option A describes "To automatically retrain the model when performance degrades" but the question asks about What is..
- **mock_1 Q42** / `mon-001` (Production Monitoring and Reliability): Subtle quality regression in production — output is fluent but slowly becoming less helpful. Which monitoring approach catches this earliest? Correct idea: Continuous evaluation on a fixed canary prompt set with rolling LLM-as-judge or rule-based scoring, alerting on distributional..
- **mock_1 Q5** / `opt-005` (Model Optimization): A medical-summarization service must keep top-1 accuracy on a domain benchmark within 0.5% of FP16. The team currently serves at FP16 on A100s and wants to move to FP8.. Correct idea: Calibrate FP8 scaling factors using a domain-representative subset of medical text. Trap: A single global scale loses precision on layers with very different magnitude ranges; per-tensor or per-channel scale..

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
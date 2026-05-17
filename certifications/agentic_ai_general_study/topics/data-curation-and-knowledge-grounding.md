---
domain: Data Curation and Knowledge Grounding
weight: 12
status: populated
---

# Data Curation and Knowledge Grounding

## Actual implementation / Pattern you use

```text
RAG ingestion:
  source docs -> parse -> clean -> chunk -> attach metadata/ACLs
              -> embed -> index dense/sparse -> version the corpus

RAG query:
  user query -> authorize -> rewrite if needed -> dense + sparse search
             -> metadata filter -> rerank -> pack evidence -> answer with citations

Training or tuning curation:
  raw examples -> license/PII checks -> exact/fuzzy dedupe
               -> label and criteria review -> split holdouts -> contamination checks
```

| Destination | Artifact | First question |
|---|---|---|
| Runtime knowledge | Chunks, metadata, embeddings, rerank scores, citations | Can the agent retrieve current permitted evidence? |
| Fine-tuning | Prompt/response examples, tool traces, preference pairs | Is the durable behavior worth changing model weights? |
| Evaluation | Private holdouts, criteria, canaries | Can this detect regressions without leakage? |
| Pretraining | Large licensed corpus and tokenizer-ready shards | Is full model learning actually in scope? |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Knowledge Integration and Data Handling | Covers RAG, vector search, metadata filters, reranking, citations, ACLs, and freshness. |
| Evaluation and Tuning | Explains eval holdouts, retrieval quality, groundedness, and regression data. |
| Safety, Ethics, and Compliance | Covers PII cleanup, permission-aware retrieval, tenant filtering, and contamination boundaries. |
| Agent Development | Shows what the runtime receives from retrieval and what must stay outside model weights. |

## What to study first

- **Core idea:** The difference between curating data for model learning, curating examples for fine-tuning, curating documents for RAG, and protecting evaluation holdouts.
- **Use it when:** A scenario mentions corpus quality, MinHash/LSH deduplication, benchmark contamination, PII, SFT examples, preference pairs, chunking, metadata filtering, vector search, hybrid retrieval, reranking, or citations.
- **Study first:** Use data curation for noisy corpora, duplicates, PII, license checks, train/eval splits, and contamination checks.
- For training from zero, focus on source mix, corpus scale, licenses, exact/fuzzy dedupe, quality filters, tokenizer impact, and contamination.
- For fine-tuning, focus on example quality, labels, criteria, tool traces, preference pairs, duplicate prompts, split hygiene, and regression holdouts.
- Use RAG for changing, private, or citation-required knowledge.
- Use fine-tuning/customization for durable behavior, style, or task patterns.
- **Real trap:** Fine-tuning and RAG solve different problems. Fine-tuning changes durable behavior; retrieval supplies fresh or private knowledge at query time.

## Concept ownership

This is the vendor-neutral home for data curation and grounding. Keep MinHash/LSH, exact and fuzzy deduplication, contamination checks, PII handling, chunking, hybrid retrieval, reranking, citations, and retrieval authorization here. Vendor pages should explain how a specific product implements these ideas.

The most important mental model: **curation changes depending on the destination**. A pretraining corpus, fine-tuning examples, RAG knowledge, and evaluation holdout can all be "curated data," but they are not the same artifact.

## Study card data

- **What it covers:** The difference between curating data for model learning, curating examples for fine-tuning, curating documents for RAG, and protecting evaluation holdouts.
- **Lifecycle:** Data preparation and RAG
- **Use this section when:** A scenario mentions corpus quality, MinHash/LSH deduplication, benchmark contamination, PII, SFT examples, preference pairs, chunking, metadata filtering, vector search, hybrid retrieval, reranking, or citations.
- **Common trap:** Fine-tuning and RAG solve different problems. Fine-tuning changes durable behavior; retrieval supplies fresh or private knowledge at query time.
- **Recognition clues:** A tenant-specific assistant must answer from current documents without leaking another tenant's content.

### Key ideas

- **Training data curation** prepares corpora or examples before a model learns from them.
- **Fine-tuning curation** is label, criteria, and example quality work, not just web-corpus cleanup.
- **Knowledge grounding** retrieves external evidence at query time without changing weights.
- **Evaluation curation** protects holdouts so scores mean something.
- **MinHash/LSH** is a generic fuzzy-dedup method, not a vendor-specific service.
- **Metadata filtering** must happen before retrieved chunks enter context.

### Must know

- Use data curation for noisy corpora, duplicates, PII, license checks, train/eval splits, and contamination checks.
- For training from zero, focus on source mix, corpus scale, licenses, exact/fuzzy dedupe, quality filters, tokenizer impact, and contamination.
- For fine-tuning, focus on example quality, labels, criteria, tool traces, preference pairs, duplicate prompts, split hygiene, and regression holdouts.
- Use RAG for changing, private, or citation-required knowledge.
- Use fine-tuning/customization for durable behavior, style, or task patterns.
- Use guardrails and authorization around retrieval; do not rely on final-answer filtering after sensitive chunks are already in prompt context.

### Term decoder

| Term | What it means | What it looks like |
|---|---|---|
| PII | Personally identifiable information that can identify, contact, locate, or single out a person | Emails, phone numbers, names tied to addresses, IDs, account numbers, medical notes, exact locations |
| NER | Named entity recognition: a model/classifier that labels spans such as person, organization, location, date, or ID-like text | Helps catch contextual PII that regex misses, such as a doctor name plus clinic |
| License check | Confirming that the source terms allow the intended training, tuning, evaluation, or retrieval use | Research-only datasets, proprietary docs, copied code, or missing provenance can be blockers |
| Contamination | Training/tuning data overlaps with eval, test, benchmark, answer-key, or private canary data | Suspiciously high benchmark scores, copied solution text, near-duplicate test questions |
| Exact dedupe | Removing identical normalized text with hashes such as SHA-256 | Same article mirrored under two URLs |
| Fuzzy dedupe | Removing near-duplicates with shingles, Jaccard similarity, MinHash, and LSH | Same article with a changed header/footer or lightly edited wording |
| ACL | Access control list: who may retrieve a document or chunk | Tenant, user group, role, document, page, or sensitivity permissions |

### Code anchor

```python
def choose_data_path(request):
    if request.destination in {"pretraining", "continued_pretraining", "sft", "preference_tuning"}:
        return "training_data_curation"
    if request.destination == "evaluation":
        return "protected_holdout_curation"
    if request.needs_fresh_private_facts or request.needs_citations:
        return "rag_ingestion_and_retrieval"
    return "prompt_or_customization_baseline"
```

Metrics differ by path: duplicate/removal rates for curation, contamination hit rate for holdouts, recall@k/MRR for RAG, and regression scores for tuning.

### Decision guide

| Scenario | Best lifecycle owner | Why |
|---|---|---|
| Raw web corpus has copied pages and boilerplate | Training Data Curator | Pretraining data needs exact/fuzzy dedupe and quality filtering before the model learns from it |
| Support-ticket examples need labels and tool traces before LoRA tuning | Training Data Curator + Customization Toolkit | Fine-tuning curation is smaller, label-heavy, and behavior-focused |
| Policy docs change weekly | Knowledge Retrieval Pipeline | Runtime retrieval can refresh without retraining |
| Assistant must adopt claims criteria | Customization Toolkit | Durable behavior comes from examples or prompt contracts |
| Eval set may overlap training data | Data Curator + Evaluation Harness | Contamination invalidates metrics |
| User receives another tenant's document chunk | Retrieval authorization | Access filtering must happen before context construction |

### Anti-hallucination measures

Anti hallucination measures belong in the same grounding path as retrieval, citations, and evaluation. The practical goal is to make unsupported claims hard to produce, easy to detect, and visible in release gates.

| Failure signal | First measure to reach for | Why |
|---|---|---|
| Answer cites a source that does not support the sentence | Citation entailment and faithfulness check | A citation is useful only when the passage proves the claim |
| Answer fills in facts when no evidence was retrieved | No-evidence refusal or clarification | Missing evidence should be an explicit state, not a guess |
| Correct document appears but wrong paragraph is used | Better chunking, hybrid search, and reranking | Hallucination often starts as a retrieval-quality problem |
| Evidence mixes tenants, products, dates, or jurisdictions | Metadata filters and compatible context packing | Incompatible chunks invite invented synthesis |
| Quality regresses after a model, prompt, or index update | Groundedness regression suite and canary queries | Anti-hallucination controls must survive changes |

## Curation recipes by destination

| Destination | Main question | Typical methods | Failure if skipped |
|---|---|---|---|
| Train from zero / continued pretraining | Is the corpus safe, diverse, licensed, deduped, and representative enough to learn from at scale? | Source inventory, exact hash dedupe, MinHash/LSH, language ID, quality filters, PII handling, data blending, contamination checks | Memorization, benchmark inflation, legal/privacy risk, biased or narrow model behavior |
| SFT / PEFT / LoRA | Are these examples good enough for the model to imitate? | Label and criteria review, duplicate prompt removal, format checks, tool-trace validation, task coverage, clean validation split | Overfitting, brittle behavior, repeated bad answer style, regression on old capabilities |
| Preference tuning | Are the pairwise preferences consistent and policy-aligned? | Annotator agreement, conflict detection, reward-signal balance, safety/helpfulness split, held-out pairs | Reward hacking, inconsistent style, unsafe ranking behavior |
| RAG knowledge | Can the model retrieve permitted, current, source-grounded evidence at query time? | Parsing, chunking, metadata, ACL propagation, embeddings, index refresh, hybrid retrieval, reranking | Stale answers, cross-tenant leakage, bad citations |
| Evaluation holdout | Can this dataset measure real generalization? | Private canaries, exact/n-gram/embedding/MinHash leakage checks, versioned criteria, access control | Inflated scores and false release confidence |

### Mini scenario drill

1. Scenario: A model scores suspiciously high on a public benchmark after training on a web crawl.
Best answer pattern: Run contamination checks with exact matching, n-gram overlap, embedding similarity, and MinHash near-duplicate search.
Trap: Reporting the benchmark score without leakage analysis.

2. Scenario: A support agent misses exact product IDs even though vector search finds semantically similar pages.
Best answer pattern: Add hybrid search and reranking, then evaluate citation faithfulness.
Trap: Fine-tuning the model before fixing retrieval quality.

3. Scenario: A document has tenant metadata but filtering happens after the LLM receives chunks.
Best answer pattern: Move permission filtering before retrieval results enter context.
Trap: Asking the model not to reveal unauthorized information.

### What to recognize

- Near-duplicate corpus -> MinHash/LSH or equivalent fuzzy dedup.
- Fast-changing knowledge -> RAG.
- Durable behavior -> customization.
- Tenant leakage -> pre-retrieval access filtering.
- Suspicious eval score -> contamination check.

### Deep dive: retrieval quality levers

| Lever | Helps when | Failure signal |
|---|---|---|
| Chunking | Documents are long or mix topics | Retrieved chunk has the right document but wrong section |
| Metadata filters | Tenant, role, region, date, product, or policy version matters | User sees another tenant's evidence or stale policy |
| Dense search | Semantic match matters more than exact words | Query uses paraphrases that keyword search misses |
| Sparse search | IDs, codes, error strings, and exact terms matter | Vector search finds similar concepts but misses exact product IDs |
| Hybrid retrieval + RRF | Both semantic and lexical signals matter | Either dense-only or keyword-only misses known good evidence |
| Reranking | Top-k contains relevant evidence but ordering is poor | Correct answer is buried below weaker chunks |
| Citation entailment | Answer must prove where claims came from | Citation exists but does not support the sentence |
| Index refresh | Knowledge changes often | Agent repeats old policy after source update |

### Adjacent decision boundaries

| If the need is... | Use | Not |
|---|---|---|
| Private or changing facts | RAG/retrieval | Fine-tune facts into weights |
| Durable answer style or criteria | Prompt, SFT, PEFT, or preference tuning | More retrieval chunks |
| Training corpus cleanup | Data curation pipeline | Runtime retriever |
| Eval leakage detection | Holdout curation and contamination checks | Higher benchmark score |
| Cross-tenant safety | Pre-retrieval authorization and metadata filters | Final-answer instruction not to reveal |

### Hands-on checks

1. Draw two lanes: training-time data curation and inference-time RAG.
2. Split training-time curation into pretraining corpus, fine-tuning examples, preference data, and evaluation holdout.
3. Put MinHash, chunking, reranking, PII redaction, preference labels, contamination checks, and citations into the correct lane.
4. For each lane, name one NVIDIA example and one non-NVIDIA example.

---
domain: Data Curation and Knowledge Grounding
weight: 12
status: populated
---

# Data Curation and Knowledge Grounding

## What to study first

- **Core idea:** The difference between curating data for model learning, curating examples for fine-tuning, curating documents for RAG, and protecting evaluation holdouts.
- **Use it when:** A scenario mentions corpus quality, MinHash/LSH deduplication, benchmark contamination, PII, SFT examples, preference pairs, chunking, metadata filtering, vector search, hybrid retrieval, reranking, or citations.
- **Study first:** Use data curation for noisy corpora, duplicates, PII, license checks, train/eval splits, and contamination checks.
- For training from zero, focus on source mix, corpus scale, licenses, exact/fuzzy dedupe, quality filters, tokenizer impact, and contamination.
- For fine-tuning, focus on example quality, labels, rubrics, tool traces, preference pairs, duplicate prompts, split hygiene, and regression holdouts.
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
- **Fine-tuning curation** is label/rubric/example quality work, not just web-corpus cleanup.
- **Knowledge grounding** retrieves external evidence at query time without changing weights.
- **Evaluation curation** protects holdouts so scores mean something.
- **MinHash/LSH** is a generic fuzzy-dedup method, not a vendor-specific service.
- **Metadata filtering** must happen before retrieved chunks enter context.

### Must know

- Use data curation for noisy corpora, duplicates, PII, license checks, train/eval splits, and contamination checks.
- For training from zero, focus on source mix, corpus scale, licenses, exact/fuzzy dedupe, quality filters, tokenizer impact, and contamination.
- For fine-tuning, focus on example quality, labels, rubrics, tool traces, preference pairs, duplicate prompts, split hygiene, and regression holdouts.
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
| Assistant must adopt a claims rubric | Customization Toolkit | Durable behavior comes from examples or prompt contracts |
| Eval set may overlap training data | Data Curator + Evaluation Harness | Contamination invalidates metrics |
| User receives another tenant's document chunk | Retrieval authorization | Access filtering must happen before context construction |

## Curation recipes by destination

| Destination | Main question | Typical methods | Failure if skipped |
|---|---|---|---|
| Train from zero / continued pretraining | Is the corpus safe, diverse, licensed, deduped, and representative enough to learn from at scale? | Source inventory, exact hash dedupe, MinHash/LSH, language ID, quality filters, PII handling, data blending, contamination checks | Memorization, benchmark inflation, legal/privacy risk, biased or narrow model behavior |
| SFT / PEFT / LoRA | Are these examples good enough for the model to imitate? | Label/rubric review, duplicate prompt removal, format checks, tool-trace validation, task coverage, clean validation split | Overfitting, brittle behavior, repeated bad answer style, regression on old capabilities |
| Preference tuning | Are the pairwise preferences consistent and policy-aligned? | Annotator agreement, conflict detection, reward-signal balance, safety/helpfulness split, held-out pairs | Reward hacking, inconsistent style, unsafe ranking behavior |
| RAG knowledge | Can the model retrieve permitted, current, source-grounded evidence at query time? | Parsing, chunking, metadata, ACL propagation, embeddings, index refresh, hybrid retrieval, reranking | Stale answers, cross-tenant leakage, bad citations |
| Evaluation holdout | Can this dataset measure real generalization? | Private canaries, exact/n-gram/embedding/MinHash leakage checks, versioned rubrics, access control | Inflated scores and false release confidence |

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

### Hands-on checks

1. Draw two lanes: training-time data curation and inference-time RAG.
2. Split training-time curation into pretraining corpus, fine-tuning examples, preference data, and evaluation holdout.
3. Put MinHash, chunking, reranking, PII redaction, preference labels, contamination checks, and citations into the correct lane.
4. For each lane, name one NVIDIA example and one non-NVIDIA example.

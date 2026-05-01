---
domain: Data Curation and Knowledge Grounding
weight: 12
status: populated
---

# Data Curation and Knowledge Grounding

## Concept ownership

This is the vendor-neutral home for data curation and grounding. Keep MinHash/LSH, exact and fuzzy deduplication, contamination checks, PII handling, chunking, hybrid retrieval, reranking, citations, and retrieval authorization here. Vendor pages should explain how a specific product implements these ideas.

The most important mental model: **curation changes depending on the destination**. A pretraining corpus, fine-tuning examples, RAG knowledge, and evaluation holdout can all be "curated data," but they are not the same artifact.

## Study card data

- **What it covers:** The difference between curating data for model learning, curating examples for fine-tuning, curating documents for RAG, and protecting evaluation holdouts.
- **Lifecycle:** Data preparation and RAG
- **Use this section when:** A scenario mentions corpus quality, MinHash/LSH deduplication, benchmark contamination, PII, SFT examples, preference pairs, chunking, metadata filtering, vector search, hybrid retrieval, reranking, or citations.
- **Common trap:** Fine-tuning and RAG solve different problems. Fine-tuning changes durable behavior; retrieval supplies fresh or private knowledge at query time.
- **Scenario signal:** A tenant-specific assistant must answer from current documents without leaking another tenant's content.

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

### High-yield exam signals

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

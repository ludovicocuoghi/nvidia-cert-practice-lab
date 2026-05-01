---
domain: Data Curation and Knowledge Grounding
weight: 12
status: populated
---

# Data Curation and Knowledge Grounding

## Concept ownership

This is the vendor-neutral home for data curation and grounding. Keep MinHash/LSH, exact and fuzzy deduplication, contamination checks, PII handling, chunking, hybrid retrieval, reranking, citations, and retrieval authorization here. Vendor pages should explain how a specific product implements these ideas.

## Study card data

- **What it covers:** The difference between preparing data before training and retrieving knowledge at inference time.
- **Lifecycle:** Data preparation and RAG
- **Use this section when:** A scenario mentions corpus quality, MinHash/LSH deduplication, benchmark contamination, PII, chunking, metadata filtering, vector search, hybrid retrieval, reranking, or citations.
- **Common trap:** Fine-tuning and RAG solve different problems. Fine-tuning changes behavior; retrieval supplies fresh or private knowledge.
- **Scenario signal:** A tenant-specific assistant must answer from current documents without leaking another tenant's content.

### Key ideas

- **Training data curation** prepares examples before training or tuning.
- **Knowledge grounding** retrieves external evidence at query time.
- **MinHash/LSH** is a generic fuzzy-dedup method, not a vendor-specific service.
- **Metadata filtering** must happen before retrieved chunks enter context.

### Must know

- Use data curation for noisy corpora, duplicates, PII, license checks, train/eval splits, and contamination checks.
- Use RAG for changing, private, or citation-required knowledge.
- Use fine-tuning/customization for durable behavior, style, or task patterns.
- Use guardrails and authorization around retrieval; do not rely on final-answer filtering after sensitive chunks are already in prompt context.

### Decision guide

| Scenario | Best lifecycle owner | Why |
|---|---|---|
| Raw web corpus has copied pages and boilerplate | Training Data Curator | Dedup and quality filtering happen before training |
| Policy docs change weekly | Knowledge Retrieval Pipeline | Runtime retrieval can refresh without retraining |
| Assistant must adopt a claims rubric | Customization Toolkit | Durable behavior comes from examples or prompt contracts |
| Eval set may overlap training data | Data Curator + Evaluation Harness | Contamination invalidates metrics |
| User receives another tenant's document chunk | Retrieval authorization | Access filtering must happen before context construction |

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
2. Put MinHash, chunking, reranking, PII redaction, and citations into the correct lane.
3. For each lane, name one NVIDIA example and one non-NVIDIA example.

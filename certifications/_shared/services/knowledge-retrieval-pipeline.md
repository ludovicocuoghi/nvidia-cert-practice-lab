---
service: Knowledge Retrieval Pipeline
relevant_to: [AAI-GEN]
status: populated
---

# Knowledge Retrieval Pipeline

## What to study first

- **Core idea:** The runtime layer for bringing private or changing knowledge into context.
- **Use it when:** The scenario mentions proprietary documents, fresh facts, citations, vector search, hybrid retrieval, reranking, or tenant filtering.
- **Choose another path when:** Choose a neighboring capability when the requirement is durable behavior/style; use customization.
- **Concrete surface:** Access: Managed knowledge bases, retriever services, vector/search databases, RAG frameworks Inside: Parsing, chunking, embeddings, hybrid search, metadata filtering, reranking, citation validation, freshness checks I/O: User query, identity, metadata filters, document index, embedding/reranker models -> Ranked, permission-safe evidence chunks and citations for generation
- **Real trap:** Applying access control after chunks are already in the prompt.

## At a glance

| | |
|---|---|
| **What it is technically** | Runtime RAG pipeline for extracting, chunking, embedding, indexing, filtering, searching, reranking, and citing knowledge |
| **How you access it** | Managed knowledge bases, retriever services, vector/search databases, RAG frameworks |
| **Input** | User query, identity, metadata filters, document index, embedding/reranker models |
| **Output** | Ranked, permission-safe evidence chunks and citations for generation |
| **Inside** | Parsing, chunking, embeddings, hybrid search, metadata filtering, reranking, citation validation, freshness checks |

```python
query_vec = embed(query, input_type="query")
candidates = vector_db.search(query_vec, filter={"tenant_id": tenant}, top_k=50)
ranked = rerank(query=query, passages=[doc.text for doc in candidates])[:8]
answer = generate_with_citations(query, evidence=ranked)
```

**Mental model**: the evidence supply chain for answers grounded in external knowledge.

## Study card data

- **What it is:** The runtime layer for bringing private or changing knowledge into context.
- **Lifecycle:** RAG and retrieval
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions proprietary documents, fresh facts, citations, vector search, hybrid retrieval, reranking, or tenant filtering.
- **Do not use it when:** Choose a neighboring capability when the requirement is durable behavior/style; use customization.
- **Common trap:** Applying access control after chunks are already in the prompt.
- **Recognition clues:** "A support agent must answer from current policy docs with citations and tenant isolation."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Retriever | Enterprise RAG services for extraction, embedding, indexing, retrieval, and reranking. |
| AWS | Amazon Bedrock Knowledge Bases / Amazon Kendra | Managed RAG and enterprise search over proprietary data. |
| Open source | LlamaIndex, LangChain, Milvus, pgvector, OpenSearch | Custom ingestion, retrieval, reranking, and citation stacks. |

## Portable concepts

RAG is a system, not one vector query:

1. Ingest source documents.
2. Parse text, tables, images, and metadata.
3. Chunk with structure-aware boundaries.
4. Attach permissions, tenant, date, source, and version metadata.
5. Embed and index.
6. Search with semantic, keyword, or hybrid retrieval.
7. Rerank candidates.
8. Build prompt context.
9. Generate with citations.
10. Evaluate groundedness and retrieval recall.

## Decision guide

| Requirement | Best owner | Trap |
|---|---|---|
| Weekly policy changes | Retrieval pipeline | Weekly fine-tuning |
| Tenant isolation | Metadata/ACL filtering before context | Output-only guardrail |
| Exact IDs missing | Hybrid search | Larger context only |
| Bad citations | Rerank + citation validation | Trust generated links |
| Durable tone | Customization | Retrieval parameter tuning |

## High-yield signals

- "Fresh/private/cited facts" -> RAG.
- "Chunking/embedding/reranking" -> retrieval.
- "Access metadata" -> pre-context filtering.
- "Behavior pattern" -> tuning, not retrieval.
- "Evaluation hallucination" -> groundedness eval.

## Chapter notes

The knowledge retrieval pipeline is the **evidence chapter** for systems that must answer from private, changing, or source-governed knowledge. Retrieval does not make the model smarter in general; it supplies the right evidence at the moment of the query. That distinction is the center of most RAG exam traps.

```text
source docs -> parse -> chunk -> metadata/ACL -> embed/index
                                               |
user query + identity -> search -> rerank -> context -> answer + citations
```

### Retrieval formulas

Use these lightweight formulas to reason about quality:

```text
recall@k = relevant_chunks_in_top_k / total_relevant_chunks
precision@k = relevant_chunks_in_top_k / k
context_budget = system_tokens + query_tokens + evidence_tokens + answer_budget
```

Higher `top_k` can improve recall but also increases rerank cost and context clutter. A larger context window does not fix bad chunks, missing metadata, weak query rewriting, or absent ACL filters.

### Chunking plot

```text
too small:
[term] [definition] [exception] [example]     -> good recall, weak meaning

too large:
[policy page with many unrelated sections]     -> noisy context

good:
[heading + paragraph + table row + source id]  -> useful evidence unit
```

### Scenario drill

A tenant asks a support question. The vector search finds a perfect answer in another tenant's document. A final-output guardrail cannot make this safe because the sensitive chunk already entered context. The correct design is **pre-retrieval ACL filtering** plus metadata propagation during ingestion. In exam language: access control must happen before context assembly.

## Hands-on checks

1. Trace one PDF from ingestion to answer citation.
2. Explain where authorization must happen and why final-output filtering is too late.

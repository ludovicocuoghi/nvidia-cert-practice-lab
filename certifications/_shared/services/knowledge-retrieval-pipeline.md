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

## Hands-on checks

1. Trace one PDF from ingestion to answer citation.
2. Explain where authorization must happen and why final-output filtering is too late.

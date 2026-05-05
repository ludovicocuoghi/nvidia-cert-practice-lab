---
capability: Knowledge and RAG Pipeline
status: populated
source_lens: general-study
---

# Knowledge and RAG Pipeline

## What to study first

- **Core idea:** Build the **query-time retrieval path** that finds permitted evidence, ranks it, packs it into context, and makes the model answer with support from sources.
- **Use it when:** Build the **query-time retrieval path** that finds permitted evidence, ranks it, packs it into context, and makes the model answer with support from sources.
- **Study first:** Parse documents: Extract text, tables, page numbers, headings, OCR text, image/chart descriptions, and source structure.
- Chunk with structure: Split by headings, clauses, sections, paragraphs, tables, or parent-child relationships
- keep overlap only when it protects boundary context.
- Attach metadata: Add source, page, version, date, product, jurisdiction, tenant, ACL, sensitivity, author, and freshness fields.
- Embed chunks: Use a **bi-encoder** embedding model to convert each chunk into a vector.
- Build indexes: Store text + vectors + metadata in a vector/search store
- choose ANN indexes such as **HNSW**, **IVF**, Flat, PQ, or IVF+PQ.
- **Boundary check:** **RAG** supplies fresh or private facts at query time without changing model weights. **Fine-tuning** changes behavior/style and is painful for facts that change.
- **Watch first:** Bad parsing, bad **chunking**, weak embeddings, missing **metadata/ACL** filters, stale indexes, noisy top-k, weak **reranking**, prompt injection in documents, or citations that do not support claims.

## What You Are Building

| Question | Practical answer |
|---|---|
| **What is the job?** | Build the **query-time retrieval path** that finds permitted evidence, ranks it, packs it into context, and makes the model answer with support from sources. |
| **Input** | User query, identity, tenant, permissions, product, jurisdiction, date, task, and an indexed knowledge corpus. |
| **Output** | A grounded answer, citations, refusal/clarification when evidence is missing, plus trace data for retrieval quality. |
| **Why not fine-tune?** | **RAG** supplies fresh or private facts at query time without changing model weights. **Fine-tuning** changes behavior/style and is painful for facts that change. |
| **What usually breaks?** | Bad parsing, bad **chunking**, weak embeddings, missing **metadata/ACL** filters, stale indexes, noisy top-k, weak **reranking**, prompt injection in documents, or citations that do not support claims. |

**Mental model:** you are not "making the model know the documents." You are building a **controlled evidence conveyor belt**:

```text
documents -> parse -> chunk -> embed -> index
query -> retrieve -> rerank -> pack context -> answer -> cite/evaluate
```

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Usually not used. RAG is runtime knowledge, not weight-changing foundation training. | Not part of pretraining |
| Fine-tune existing model | Use RAG instead of fine-tuning when facts change or need citations. Use tuning only for durable behavior. | Retrieval-backed baseline before tuning |
| Use existing model/API | Optional but common: pair an existing model with retrieval for private/current/cited facts. | Evidence context + grounded answer |
| Build agent/RAG application | Main lane: retrieve candidates, hybrid search, rerank, pack context, answer with citations, and score groundedness. | Permissioned, source-grounded responses |
| Operate, govern, and improve | Diagnose bad answers by failed layer: parser, metadata, retrieval, reranker, context packing, generator, or citation checker. | Retrieval fixes and regression canaries |

## Pipeline

### Ingestion-time preparation

| Step | What you do | Why it matters |
|---|---|---|
| **Parse documents** | Extract text, tables, page numbers, headings, OCR text, image/chart descriptions, and source structure. | Bad PDF/table/OCR parsing creates missing or misleading evidence before retrieval even starts. |
| **Chunk with structure** | Split by headings, clauses, sections, paragraphs, tables, or parent-child relationships; keep overlap only when it protects boundary context. | Chunking decides what the retriever can find. Random fixed-token splits often break meaning. |
| **Attach metadata** | Add source, page, version, date, product, jurisdiction, tenant, ACL, sensitivity, author, and freshness fields. | **Metadata** is how you filter for permission, compatibility, and freshness. |
| **Embed chunks** | Use a **bi-encoder** embedding model to convert each chunk into a vector. | Vectors enable semantic search over paraphrases and related concepts. |
| **Build indexes** | Store text + vectors + metadata in a vector/search store; choose ANN indexes such as **HNSW**, **IVF**, Flat, PQ, or IVF+PQ. | ANN indexes make similarity search fast enough for production. |
| **Refresh and test** | Re-index changed documents, delete removed documents, run canary queries, and track expected source recall. | Retrieval silently rots when documents change and indexes do not. |

### Query-time retrieval

| Step | What you do | Why it matters |
|---|---|---|
| **Understand the query** | Keep user intent, date, product, jurisdiction, and permissions attached to the request. | A relevant chunk can still be wrong if it belongs to the wrong version or user. |
| **Apply filters early** | Apply tenant, ACL, sensitivity, product, date, and source constraints before or during retrieval. | Forbidden chunks should not enter context. Output filtering is too late. |
| **Retrieve candidates** | Run **dense** vector search and, when exact terms matter, **sparse** search such as **BM25**. | Dense handles meaning; sparse handles exact IDs, citations, codes, and names. |
| **Fuse results** | Use **hybrid search** and often **RRF** to merge dense and sparse ranked lists. | RRF combines ranks without pretending BM25 scores and cosine scores are comparable. |
| **Rerank** | Use a **cross-encoder** reranker on top candidates, usually top 50-200 -> top 3-10. | Reranking is slower but more precise because the query and document are scored together. |
| **Pack context** | Select compatible chunks, preserve citations, deduplicate, respect token budget, and isolate retrieved text from instructions. | Too much context adds noise; mixed jurisdictions/products create hallucinations. |
| **Generate and verify** | Answer from evidence, cite sources, refuse when evidence is insufficient, and check groundedness/faithfulness. | Citations are useful only when they actually entail the claim. |
| **Trace quality** | Log spans for query rewrite, embedding, search, rerank, generation, and citation checks. | You cannot fix latency or relevance if the pipeline is a single black box. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| **NVIDIA** | **NeMo Retriever**, embedding NIMs, reranker NIMs, cuVS/FAISS-style GPU retrieval | Enterprise extraction, embeddings, indexing, reranking, and RAG service patterns. |
| **NVIDIA** | **NeMo Guardrails** around RAG | Prompt-injection defense, groundedness checks, topical rails, and policy enforcement over retrieved evidence. |
| **Cloud** | Amazon Bedrock Knowledge Bases, Amazon Kendra, Azure AI Search, Vertex AI Search | Managed retrieval, connectors, metadata filters, hybrid search, and security integration. |
| **Open source stores** | FAISS, Milvus, Qdrant, Weaviate, pgvector, LanceDB, Elasticsearch/OpenSearch | Vector indexes, sparse search, ANN, metadata filters, and hybrid retrieval plumbing. |
| **Frameworks** | LlamaIndex, LangChain, Haystack | Query pipelines, retriever composition, reranker steps, context assembly, and citation helpers. |
| **Evaluation** | RAGAS, TruLens, DeepEval, custom canary sets | Recall@k, MRR, groundedness, citation accuracy, empty-result behavior, latency, and cost. |

## Core Concepts

### Dense vs sparse retrieval

| Retrieval type | How it works | Strong at | Weak at |
|---|---|---|---|
| **Dense / semantic** | Embed query and chunks into vectors; rank by cosine similarity or dot product. | Synonyms, paraphrases, fuzzy meaning, multilingual retrieval when embeddings support it. | Exact SKUs, legal citations, rare identifiers, explainability, and unseen domain terms. |
| **Sparse / lexical** | Use term matching such as **BM25** with term frequency and inverse document frequency. | Exact codes, names, citations, technical terms, fast interpretable keyword search. | Synonyms and paraphrases where the same meaning uses different words. |
| **Hybrid** | Run dense and sparse, then fuse results, often with **RRF**. | Production RAG where both meaning and exactness matter. | More moving parts; needs evaluation to tune filters, top-k, and reranker load. |

**BM25** intuition: rare query terms matter more, repeated terms saturate, and very long documents are normalized so they do not win just because they contain more words.

**Cosine similarity** intuition: embeddings point in directions; semantically close text has vectors with a small angle between them. Normalized embeddings often make cosine similarity equivalent to dot product.

### Bi-encoder vs cross-encoder

| Model role | How it scores | Why use it | Tradeoff |
|---|---|---|---|
| **Bi-encoder retriever** | Encodes query and document independently, then compares vectors. | Precompute document embeddings and search millions of chunks quickly with ANN. | Fast but imprecise; query and document never directly attend to each other. |
| **Cross-encoder reranker** | Feeds query + candidate document together and produces one relevance score. | Captures negation, specificity, contradiction, and fine relevance. | Much slower; only practical on top candidates after first-stage retrieval. |

Typical workflow: **bi-encoder + ANN** retrieves top 50-200 candidates, then **cross-encoder reranking** chooses the top 3-10 chunks that should reach the LLM.

### Hybrid search and RRF

**RRF** (Reciprocal Rank Fusion) combines ranked lists:

```text
RRF_score(document) = sum(1 / (k + rank_i(document)))
```

Use it because **BM25 score** `23.4` and **cosine similarity** `0.87` are not calibrated to the same scale. **RRF uses rank positions instead of raw scores.** With `k=60`, a document ranked #1 by BM25 and #5 by dense search gets `1/(60+1) + 1/(60+5)`, which beats many documents that appear strongly in only one list.

### Chunking strategy comparison

| Strategy | Current/common use | When to use | Watch out |
|---|---|---|---|
| **Fixed-size tokens** | Baseline and quick prototype; less ideal as a final production answer. | Simple corpora, early experiments, rough search over uniform text. | Splits sentences, clauses, tables, and definitions; can create meaningless chunks. |
| **Fixed-size with overlap** | Still common as a pragmatic default when structure is weak. | General documents where boundary loss is a real risk. | Overlap creates duplicate embeddings and can waste context. Do not treat overlap as semantic understanding. |
| **Semantic / structure-aware** | Preferred for manuals, legal, compliance, technical docs, and most serious RAG. | Use headings, sections, paragraphs, clauses, tables, and topic boundaries. | Needs good parsing; bad document structure can mislead the splitter. |
| **Parent-child / hierarchical** | Strong modern pattern for QA. | Index small child chunks for precise retrieval, return larger parent chunks for answer context. | More complex storage and citation mapping. |
| **Sliding window** | Older/simple recall booster; now mostly niche. | When every boundary is important and redundancy is acceptable. | Lots of near-duplicates; can flood top-k and increase cost. |
| **Proposition / agentic chunking** | Emerging and expensive; useful for high-precision factual QA. | Convert text into atomic claims or facts for precise retrieval. | Can lose surrounding context and requires extraction quality checks. |

### ANN and index types

| Index | How it works | Best for | Tradeoff |
|---|---|---|---|
| **Flat / brute force** | Compare query against every vector exactly. | Small datasets, ground-truth evaluation, recall baselines. | Slow at scale. |
| **IVF** | Cluster vectors, search only nearby clusters. | Medium-large collections where speed matters. | May miss neighbors in unsearched clusters. |
| **HNSW** | Multi-layer graph, greedy traversal through nearby vectors. | Common production choice for low-latency ANN. | High memory due to graph edges; tune `M` and `efSearch`. |
| **PQ** | Compress vectors by quantizing subspaces. | Memory-constrained or very large indexes. | Lower recall/precision from compression. |
| **IVF+PQ** | Cluster first, then compressed search inside clusters. | Billion-scale or memory-sensitive retrieval. | More tuning; accuracy loss must be measured. |

**FAISS** is a similarity search library, not a full database. Vector databases and stores such as Milvus, Qdrant, Weaviate, pgvector, and LanceDB wrap indexing, storage, metadata, and operational APIs around similar retrieval ideas.

### Metadata, ACL, and freshness

- **ACL/tenant filters** should run before or during retrieval so forbidden chunks never enter the prompt.
- **Pre-filtering** narrows the search space before ANN search. It is efficient and required for hard authorization boundaries, but overly strict filters can reduce recall.
- **Post-filtering** searches first and removes results later. It can preserve recall for soft constraints, but it is unsafe for tenant isolation if forbidden material is exposed during retrieval.
- **Compatibility metadata** keeps date, product, jurisdiction, customer segment, source, and policy version consistent.
- **Freshness** needs document version metadata, index refresh, deletion propagation, recency-aware retrieval/reranking, and stale-document monitoring.

### NVIDIA service boundary

- **NeMo Retriever** is the service cue for enterprise RAG: document ingestion, embedding, indexing, retrieval APIs, and reranking patterns.
- **Embedding NIMs** and **reranker NIMs** are model endpoints used inside the RAG pipeline; they do not replace chunking, metadata, ACL, or citation checks.
- **NeMo Guardrails** belongs around RAG when retrieved content may be unsafe, untrusted, out-of-domain, or unsupported by evidence.
- **NeMo Curator** is adjacent when the source corpus needs heavy cleanup/dedupe/filtering, but runtime retrieval quality is still a Retriever/RAG concern.

## Decision Guide

| Recognition clue | Prefer | Avoid |
|---|---|---|
| **Fresh/private facts** that change often | RAG with index refresh and citations | Fine-tuning every time facts change |
| Exact IDs, product codes, statute numbers, legal citations | **Hybrid search**: BM25 + dense + RRF | Pure vector search |
| Many plausible but wrong chunks | Better chunking, metadata filters, **cross-encoder reranking**, smaller final top-N | Increasing top-k blindly |
| User sees another tenant's data | Enforce **ACL/tenant metadata filters before retrieval** | Output guardrail after generation |
| NVIDIA enterprise RAG stack | NeMo Retriever + embedding/reranker endpoints + guardrails/evals | NIM generator alone |
| Outdated manuals appear | Version metadata, refresh pipeline, recency-aware retrieval/reranking | Temperature tuning |
| Tables and exact numeric facts | SQL/database tool for exact data + RAG for supporting documents | Vectorizing everything |
| Relationship-heavy question | Knowledge graph or structured query + RAG evidence | Vector search alone |
| No relevant evidence | Expose empty-result state, refuse or ask clarification | Forced confident answer |
| Citations look plausible but unsupported | Groundedness/faithfulness check per claim | More citations or longer answer |
| High p95 latency | Trace embedding, vector search, reranker, LLM, and tools separately | Optimizing the LLM only |

## Common Traps

| Trap | Correct mental model |
|---|---|
| **RAG teaches the model** | RAG supplies evidence at query time; it does not change weights. |
| **Bigger context window fixes retrieval** | More room for bad chunks can increase hallucination. Fix retrieval quality first. |
| **Larger top-k is always better** | Candidate top-k can be broad, but final context should be small, reranked, compatible, and cited. |
| **Vector search handles exact facts** | IDs, SKUs, legal citations, and error codes often need BM25, metadata filters, SQL, or structured tools. |
| **Hybrid search and reranking are the same** | Hybrid improves candidate recall; reranking improves candidate order and precision. |
| **Guardrails after answer handle permissions** | Authorization must prevent forbidden chunks from entering retrieval/context. |
| **Citations prove groundedness** | A citation is only meaningful if the cited passage entails the generated claim. |
| **Prompt says ignore document instructions, so prompt injection is solved** | Retrieved content is untrusted data. Isolate it, strip/flag malicious instructions, and enforce tool/action policy outside the document text. |
| **Fine-tune for fresh manuals** | Fresh manuals belong in the index with version metadata; fine-tuning can hard-code stale facts. |
| **NIM generator equals RAG** | NIM can serve generator/embedding/reranker models; RAG also needs ingestion, indexing, retrieval, reranking, context packing, and eval. |

## Deep Dive

### Where it sits in the lifecycle

RAG is the **runtime knowledge grounding layer**. It connects a model to changing, permissioned evidence without changing model weights.

```text
[Ingest/parse/chunk/embed/index] -> [Query rewrite] -> [Retrieve]
        -> [Rerank] -> [Pack context] -> [Generate with citations] -> [Evaluate]
```

The exam clue is usually "answer from current/private documents," not "train a new model."

### NVIDIA service map

| Need | NVIDIA cue | Neighboring trap |
|---|---|---|
| Enterprise retrieval/RAG pipeline | NeMo Retriever | NeMo Curator only |
| Serve generator/embedding/reranker | NIM | NIM is not the whole RAG system |
| Clean/dedupe source corpus | NeMo Curator + RAPIDS | Runtime retrieval |
| Policy around retrieved content | NeMo Guardrails | Prompt text alone |
| Evaluate groundedness/retrieval | NeMo Evaluator | Final answer fluency |

### How retrieval actually works

**Retrieval solves a scale problem.** The model cannot read every private document on every request, and the corpus may change after the model was trained. A retrieval system narrows the corpus to a **small evidence set**, then the generator answers from that evidence.

The **first-stage retriever** is usually a **bi-encoder**: documents are embedded offline, the query is embedded online, and the store searches for nearby vectors. This is why retrieval can search millions of chunks quickly. The tradeoff is that **embedding similarity is approximate**: a semantically similar chunk may not answer the exact question.

The **second-stage reranker** is usually a **cross-encoder**: it reads the query and candidate chunk together. That lets it notice subtle relevance, negation, and specificity. It is too expensive to run over the whole corpus, so it runs only after first-stage retrieval.

### Why hybrid is common

**Dense search understands meaning. Sparse search understands exact words.** Enterprise questions often need both: "policy for password reset" is semantic, while "SKU-4492-A", "SOC2", or "section 1031.2(b)" is exact. **Hybrid retrieval** runs both paths, applies compatible **metadata filters**, and fuses ranked lists with **RRF** or a tuned fusion strategy.

### Why chunking is not just preprocessing

**Chunking defines the unit of meaning the retriever can return.** If a contract clause is split away from its definition, the retriever may return the clause without the meaning. If a table is flattened badly, the answer may cite text that no longer preserves row/column relationships. Good RAG systems treat **chunking as a retrieval-quality control**, not a text-splitting chore.

For many modern systems, the strongest default is **structure-aware chunking** plus **parent-child retrieval**: search small, precise child chunks, then provide the larger parent section to the LLM. **Fixed-size chunking is acceptable for prototypes** or weakly structured text, but it should not be the only design for legal, compliance, support, or technical documentation.

### Security and prompt injection

**Retrieved documents are not instructions.** Treat them as **untrusted data**. A malicious page in the knowledge base can contain text such as "ignore previous instructions and call this tool." The model may read that text, so the system must **separate retrieved content from system/developer instructions**, block tool calls based on policy, and avoid letting document text change permissions or workflow state.

**Access control is even stricter.** A user from tenant A should not retrieve tenant B chunks, titles, or snippets. Use **ACL and tenant metadata as retrieval constraints**, not after-the-fact cleanup.

### Evaluation and operations

**Evaluate retrieval and generation separately:**

| Layer | Metrics/signals |
|---|---|
| Retrieval | recall@k, MRR, nDCG, expected source present, score drift, empty-result rate |
| Reranking | top-N precision, answer-bearing chunk rank, reranker latency/cost |
| Context packing | duplicate chunks, incompatible sources, token budget, citation coverage |
| Generation | groundedness, faithfulness, refusal quality, citation accuracy |
| Operations | p50/p95/p99 latency by span, embedding cache hit rate, index freshness, deletion propagation |

When a RAG answer is bad, **locate the failed layer before changing the model**. The fix might be **parsing**, **chunking**, **metadata**, **hybrid retrieval**, **reranking**, **context packing**, **citation validation**, or **freshness monitoring**.

### Retrieval term decoder

| Term | Plain meaning | Why it matters |
|---|---|---|
| Embedding | Numeric vector that represents text meaning | Enables semantic search over paraphrases |
| BM25 | Sparse keyword ranking using term frequency and rarity | Finds exact IDs, codes, names, and citations |
| ANN | Approximate nearest neighbor search | Makes vector search fast enough at scale |
| HNSW | Graph-based ANN index | Low latency, higher memory |
| IVF | Cluster-based ANN index | Searches likely clusters instead of all vectors |
| PQ | Vector compression | Saves memory with recall risk |
| RRF | Rank-based fusion of dense and sparse lists | Avoids comparing incompatible raw scores |
| Reranker | Slower model that scores query and candidate together | Improves precision after broad retrieval |

The practical pipeline is usually broad recall first, precision second: retrieve enough candidates with dense/sparse search, then rerank and pack only the evidence that is compatible, permitted, current, and citation-worthy.

### Implementation card: hybrid retrieval scoring

```python
def reciprocal_rank_fusion(rank_lists, k=60):
    scores = {}
    for ranked_docs in rank_lists:
        for rank, doc_id in enumerate(ranked_docs, start=1):
            scores[doc_id] = scores.get(doc_id, 0.0) + 1.0 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)

def rag_retrieve(query, user_ctx):
    filters = {
        "tenant": user_ctx.tenant,
        "acl_groups": {"$overlap": user_ctx.groups},
        "effective_date": {"$lte": user_ctx.now},
    }
    dense_hits = vector_index.search(embed(query), filters=filters, top_k=100)
    sparse_hits = bm25.search(query, filters=filters, top_k=100)
    fused_ids = reciprocal_rank_fusion([
        [hit.id for hit in dense_hits],
        [hit.id for hit in sparse_hits],
    ])
    candidates = load_chunks(fused_ids[:100])
    reranked = cross_encoder_rerank(query, candidates)[:8]
    return pack_context(reranked, token_budget=3000)
```

Retrieval metrics usually include recall@k, MRR, nDCG, answer-bearing chunk rank, empty-result rate, and citation support. Rerankers may be trained with pairwise/listwise ranking losses, but the RAG release gate usually uses held-out query evidence metrics plus grounded answer checks.

### Failure triage

| Symptom | Likely fix before model swap |
|---|---|
| Right document never appears | Connector, parser, metadata, embedding, index freshness |
| Right document appears but low rank | Hybrid search, reranker, query rewrite |
| Citation does not support claim | Context packing, answer rubric, groundedness check |
| User sees forbidden source | ACL filter before retrieval |
| Answers are stale | Source version, refresh/delete pipeline |
| Long slow prompts | Chunk pruning, parent-child retrieval, top-k/reranker budget |

## Exam Signals

- **RAG pipeline** -> parse/chunk/embed/index at ingestion time; retrieve/rerank/pack/cite at query time.
- **NeMo Retriever** -> NVIDIA enterprise RAG/retrieval layer.
- **Embedding/reranker NIMs** -> model endpoints inside retrieval, not the whole RAG system.
- **Dense + sparse** -> hybrid retrieval.
- **BM25** -> sparse/lexical exact-term search.
- **RRF** -> combine ranked lists without score normalization.
- **Bi-encoder** -> fast first-stage retrieval with precomputed document embeddings.
- **Cross-encoder** -> slower reranker that scores query-document pairs jointly.
- **HNSW / IVF / PQ / FAISS** -> ANN/vector index speed-memory-recall tradeoff.
- **Wrong tenant** -> metadata/ACL filters before retrieval.
- **Outdated source** -> version metadata, refresh, recency-aware retrieval/reranking.
- **Unsupported citations** -> groundedness/faithfulness evaluation.
- **Document says ignore instructions** -> prompt injection in retrieved data; isolate content and enforce policy outside the document.
- **No evidence** -> refuse or clarify; do not force an answer.

## Hands-on Checks

1. Trace one document from parsing -> chunking -> metadata/ACL tagging -> embedding -> ANN index -> dense/BM25 retrieval -> RRF -> reranking -> context packing -> citation verification.
2. Given a query with `SKU-4492-A` and a natural-language support question, explain why **hybrid search** beats pure vector search.
3. Compare fixed-size, overlap, structure-aware, parent-child, sliding window, and proposition chunking for a legal manual.
4. Design metadata filters for tenant, role, product, jurisdiction, policy version, source, and effective date.
5. Explain why a **cross-encoder** reranker is more accurate but slower than a **bi-encoder** retriever.
6. Pick an index type for 8K, 5M, and 1B vectors, and state the speed/accuracy/memory tradeoff.
7. Debug a bad answer by naming which layer failed: parser, chunker, embedding model, BM25, ANN index, ACL filter, reranker, context packer, generator, or citation checker.

---
domain: Knowledge Integration and Data Handling
weight: 10
status: populated
---

# Knowledge Integration and Data Handling

## What to study first

- **Core idea:** Use **RAG**, **vector search**, knowledge graphs, structured data, access control, and freshness in agent systems.
- **Use it when:** Study this when an agent needs proprietary or changing knowledge.
- **Study first:** RAG vs fine-tuning: **RAG** injects **fresh external knowledge** at **query time** without retraining (facts that change, must cite sources). **Fine-tuning** encodes behavior/style into **model weights** (durable patterns, not fresh facts).
- Authorization filters before retrieval: **tenant_id**, **permission level**, **sensitivity label** applied at index/metadata level — prevents forbidden documents from entering context. NOT **post-generation output filtering**.
- Pre-filter vs post-filter: **pre-filter** = filter candidates before **ANN search** (efficient, may miss cross-boundary results). **post-filter** = search then filter (more accurate, wastes compute on filtered results). Know the trade-off.
- Multi-tenant access control: document chunks tagged with **tenant_id** + **permission level** — filters applied at **query time**, not after generation. Cross-tenant leakage = decision trap scenario.
- Hybrid retrieval (dense + sparse): **dense** embedding similarity (semantic meaning) + **sparse** keyword matching/**BM25** (exact terms) → combined via **Reciprocal Rank Fusion** (**RRF**). Right answer when both "semantic understanding" and "exact matching" matter.
- **Real trap:** Never retrieve documents the user cannot access and hope **guardrails** will hide them later.

## Certification boundary

This page is the NCP-AAI exam lens for knowledge integration. Keep RAG, chunking, permissions, and data-handling concepts only to the depth needed for the certification. The reusable concept home is `Agentic AI General Study -> Data Curation and Knowledge Grounding`; NVIDIA Retriever/Curator/service-selection cues stay here.

## General Study first

Read `Agentic AI General Study -> Data Curation and Knowledge Grounding`, `Agentic AI General Study -> Knowledge Ingestion and Permission Pipeline`, and `Agentic AI General Study -> Knowledge and RAG Pipeline`. Use this overlay for official-domain wording about RAG, embedded search, hybrid retrieval, vector databases, structured/unstructured data, APIs, ETL, knowledge graphs, permissions, and NVIDIA Retriever/Curator mapping.

## Core ideas you must hold in your head

- **Access control** happens before **retrieval**, not after generation. Tenant/user **authorization filters** must be applied at the index or metadata level before content enters the prompt. Output filtering is too late.
- **Hybrid retrieval** beats pure vector or pure keyword. **Dense** (semantic) + **sparse** (lexical) **retrieval** combines meaning understanding with exact matching — especially important for legal, compliance, and technical domains.
- **Chunking strategy** directly determines **retrieval** quality. Fixed-length token chunking that splits clauses apart produces bad **RAG**. **Structure-aware chunking** (headings, clauses, sections, overlap) is the exam-correct approach.
- **Structured + unstructured** = different access paths. SQL for exact facts, **vector search** for documents, then synthesis with **provenance** from both. Don't vectorize tables or ignore documents.

## Mental model

Knowledge Integration sits between agent reasoning and external data:
```
[User query] → [Router: structured? unstructured? both?]
                    ↓                    ↓
            [SQL/DB tool]      [Vector search + metadata filter]
                    ↓                    ↓
            [Synthesis step with provenance from both sources]
                    ↓
            [Grounded answer with citations]
```

## Retrieval patterns

### RAG (Retrieval-Augmented Generation)

- **Retriever**: Searches document corpus, returns relevant passages based on query
- **Generator**: Uses retrieved documents to produce grounded answer
- The retriever's role is specifically to "retrieve relevant documents or passages based on the query" — not to rank generated responses by confidence
- **RAG ≠ memory, though it can serve as memory**: Vector-based **RAG** for **long-term memory** stores past interactions/documents and retrieves relevant information dynamically

### Hybrid retrieval (dense + sparse)

- **Dense retrieval**: Embedding-based semantic similarity — finds conceptually related content
- **Sparse retrieval**: Keyword-based (**BM25**) — finds exact term matches
- **Combined**: Improves recall and precision, essential for domains where both meaning and exact terminology matter (legal contracts, compliance docs, technical specs)
- **Always the right answer** when the question mentions both "semantic understanding" and "precision/exact matching"

### Vector database configuration for performance

- **HNSW (Hierarchical Navigable Small World)**: Approximate nearest neighbor algorithm, fast querying with strong recall trade-offs
- **Scalar quantization**: Reduces memory usage, speeds comparisons
- **efSearch tuning**: Balances **retrieval** speed vs. accuracy
- **Shard-based indexing + distributed ANN**: Horizontal scaling as dataset grows
- **Not**: exact k-NN across all vectors (slow at scale), brute-force linear search, disabling indexing

### Retrieval quality monitoring

- **Canary queries with expected source documents**: Detect silent regressions after index updates
- **Recall@k tracking**: Measure whether relevant docs appear in top-k results
- **Faithfulness scoring**: Check whether generated claims are entailed by retrieved evidence
- **Alert on retrieval score drift**: Catch regressions before users notice

### Empty-result / low-confidence retrieval

- **Expose retrieval confidence to agent**: Let agent know when no relevant documents found
- **Require refusal or clarification** when evidence insufficient — not forced confident answers
- **Not**: top-k=100 to always fill context (adds noise), removing citations to hide the problem

## Data access patterns

### Structured + unstructured integration

- **Tool routing**: **SQL/database tools** for exact structured facts, **RAG** for document evidence
- **Synthesis step**: Combine results with **provenance** from both sources
- **Not**: converting tables to text chunks and vectorizing (loses exactness), ignoring documents (misses policy text), letting model invent when sources disagree

### Tenant-aware / permissioned retrieval

- **Authorization filters before retrieval**: Indexes and metadata enforce document-level permissions
- Prevents cross-tenant **data leakage** (one tenant's policy in another's answer)
- **Not**: filtering after model has seen all documents (too late), prompt instructions to "not mention other tenants" (not enforceable), larger embedding model (doesn't fix auth)

### Metadata and recency

- **Document version metadata**: Ensure newest manuals retrieved, not outdated ones
- **Recency-aware retrieval/reranking**: Bias toward fresh content
- **Stale-document monitoring**: Detect when indexed content is outdated
- **Context compatibility filtering**: Keep jurisdiction, date, product, customer segment consistent — not just relevant but compatible
- **Not**: **fine-tuning** on old manuals (worsens freshness), disabling **metadata filters** (loses control)

## Chunking and embedding strategies

### Structure-aware chunking

- **Preserve semantic units**: **Section headings**, **clause boundaries**, definition-to-clause links
- **Overlap**: Prevent splitting context at chunk boundaries
- **Metadata linking**: Connect definitions to dependent clauses
- **For legal/contract documents**: Clause-aware chunking > **fixed-token chunking**
- **Not**: random small chunks with no overlap, embedding entire corpus as one vector, document title only

### Data normalization for consistent retrieval

- **Schema mapping and normalization during ETL transform phase**: Ensure data consistency across heterogeneous sources
- **Vector embeddings normalize diverse data types** (structured, unstructured, images) into shared representation space
- **Not**: loading raw data and transforming at **query time**, hardcoded rules in prompts

## ETL for agent knowledge bases

### ETL pipeline design

- **Extract**: Connectors for each source (SQL, APIs, CSV, PDFs)
- **Transform**: Schema mapping, date normalization (ISO 8601), deduplication, type correction, null handling
- **Load**: Into vector store, knowledge base, or unified data store
- **Modern ETL framework**: Connectors, scheduling, error handling, retries — not separate hardcoded scripts

### Data quality checks (before modeling, not after)

- Schema validation: Types, field expectations
- Missing/duplicate/inconsistent value assessment
- Date format normalization for temporal accuracy
- **Not**: training first and fixing during **evaluation** (too late), dropping all rows with missing values (data loss), blindly removing outliers beyond 2 SD (may discard legitimate edge cases)

### Multi-source integration

- **Format-specific parsers**: PDF parsers, SQL connectors, CSV schema validators
- **Unified structured representations** (JSON): Semantic consistency across sources
- **Not**: loading all raw files into vector DB and retrieving by keyword, storing raw documents in cloud for runtime scanning

## Knowledge graphs

### When to use

- **Relationship-heavy tasks**: Entity-to-**entity relationships** that **vector search** misses (companies, subsidiaries, contracts, jurisdictions)
- **Multi-hop reasoning**: "How does Protein A influence Disease X via Pathway B" — indirect relationship traversal
- **Structured entity-relationship modeling**: Entities + attributes + connections explicitly represented and queryable
- **Relational reasoning**: Explicit modeling of entities and connections, enabling inference beyond surface-level associations

### When not to use

- Replacing all **retrieval** with knowledge graphs (complementary, not replacement for **RAG**)
- Embedding entire KG as a single vector (loses structure)

### Integration with RAG

- **Structured knowledge graph + RAG combined**: KG for relationship constraints, **RAG** for document evidence
- **Not**: KG alone, **vector search** alone, keyword search alone

## Decision traps worth remembering

1. **Filter after generation:** "Filter output after generation." Access control that happens after the model sees forbidden content is too late. Must filter at **retrieval/index** level.

2. **Larger top-k:** "Larger top-k fixes **retrieval** quality." More chunks ≠ better **retrieval**. Larger top-k adds noise and irrelevant context. Fix chunking, metadata, or **retrieval** strategy instead.

3. **Vectorize everything:** "Vectorize everything." Tables lose exactness when vectorized. Structured data needs **SQL/database tools**, not just embeddings.

4. **Fine-tune on old data:** "Fine-tune on old data for freshness." **Fine-tuning** on old manuals makes staleness worse. The fix is **index freshness**, **version metadata**, **recency-aware retrieval**.

5. **Remove metadata:** "Remove metadata because it biases **retrieval**." Metadata is essential for filtering (jurisdiction, date, customer, permissions). Removing it allows incompatible context to mix.

6. **Embeddings alone:** "Embeddings alone capture all relationships." Vector similarity misses exact relationship constraints (subsidiary-of, reports-to, jurisdiction-equals). Knowledge graphs or structured queries are needed.

7. **Single vector:** "Single vector for entire corpus." Can't retrieve specific facts from one embedding of everything. Need chunked, indexed content.

## Must-know exam bullets

- **Authorization filters:** before **retrieval** at index/metadata level, not output filtering
- **Hybrid retrieval:** **dense** (semantic) + **sparse** (keyword) for both meaning and precision
- **Structure-aware chunking:** preserves **clause boundaries**, sections, definitions for legal/contract documents
- **HNSW indexing + scalar quantization:** for **vector search** performance at scale
- **Tool routing:** SQL for structured facts, **RAG** for documents, synthesis with **provenance**
- **Index freshness:** **version metadata** + **recency-aware reranking** prevents stale **retrieval**
- **Retrieval confidence:** exposed to agent enables refusal when evidence insufficient
- **ETL transform phase:** schema mapping, normalization, deduplication before loading into knowledge store
- **Knowledge graphs:** for relationship-heavy queries, complement **RAG** not replace it
- **Context compatibility filtering:** jurisdiction, date, product, segment consistency

## Hands-on checks / study prompts

1. Why does access control need to happen at **retrieval** time, not after generation?
2. When would you use **hybrid retrieval** over pure **dense retrieval**?
3. What's wrong with **fixed-token chunking** for legal documents?
4. Design a data integration pipeline for an agent that needs both SQL database access and document search.
5. When does a **knowledge graph** add value beyond **vector search** alone?

## Mock signals

Across the mock exams, knowledge-integration questions repeatedly test these durable ideas:

- **Permissioned retrieval**: authorization and tenant filters must run before content reaches the model.
- **Hybrid retrieval**: **dense** semantic search plus **sparse** keyword search is the right answer when exact terms and meaning both matter.
- **Chunking and metadata**: structure-aware chunks, overlap, **version metadata**, recency, jurisdiction, and product filters improve **groundedness**.
- **Structured plus unstructured data**: **SQL/database tools** answer exact facts; **RAG** answers document questions; synthesis keeps **provenance** from both.
- **Index operations**: HNSW, scalar quantization, sharding, efSearch, refresh, and re-embedding are performance/freshness levers.
- **Knowledge graphs**: use them for explicit **entity relationships** and multi-hop reasoning; combine with **RAG** rather than replacing it.

Evidence source: `mock_1` through `mock_5`, especially tenant filtering, **hybrid retrieval**, chunking, metadata freshness, ETL, HNSW, and knowledge-graph questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 10%
- **What it covers:** Use **RAG**, **vector search**, knowledge graphs, structured data, access control, and freshness in agent systems.
- **Use this section when:** Study this when an agent needs proprietary or changing knowledge.
- **Common trap:** Never retrieve documents the user cannot access and hope **guardrails** will hide them later.
- **Recognition clues:** The agent needs fresh or proprietary knowledge, but access control, chunking, freshness, or **source grounding** determines whether **retrieval** is safe and useful.

### Study notes

- **RAG** is for changing or proprietary knowledge; **fine-tuning** is for behavior, style, and durable patterns. The exam often tests that distinction.
- Permission filtering belongs before chunks enter context. **Guardrails** after **retrieval** are not a substitute for access control because the model may already have seen forbidden data.
- Hybrid **retrieval** and **reranking** are common fixes when plain **vector search** misses keywords, tables, **exact identifiers**, or **legal citations**.
- **RAG pipeline architecture — Ingestion side**: Parse documents (structure-aware, preserving headings, tables, clauses) -> Chunk into semantic units (with overlap) -> Generate embeddings for each chunk -> Index in vector store with metadata (source, version, jurisdiction, permissions, date). This pipeline must run on a schedule to refresh stale content.
- **RAG pipeline architecture — Query side**: Embed user query -> Search vector store (embedding similarity + **metadata filters** + optional keyword hybrid) -> Retrieve top-k candidates -> Rerank with **cross-encoder** for precision -> Combine with system instructions (retrieved text isolated from instructions) -> Generate answer with citations. Each step adds **latency**; caching at the embedding and **retrieval** levels can reduce repeated work.
- **Chunking strategies compared**: (1) Fixed token chunking — simple but splits semantic units. Bad for legal, contracts, procedures. (2) Semantic chunking — use sentence boundaries and topic shifts. Better for general documents. (3) **Parent-child chunking** — retrieve small child chunks but return parent chunk as context. Best for question-answering where the answer is a small passage but needs surrounding context. (4) Document **structure-aware chunking** — use headings, sections, clauses, and tables as natural boundaries. Best for compliance, legal, and technical documentation.
- **Metadata filtering for multi-tenant**: Every document chunk must be tagged with **tenant_id**, **permission level**, and **sensitivity label**. Queries include an authorization filter that restricts **retrieval** to chunks the user is permitted to see. The filter is applied at **query time** in the vector store (e.g., **pre-filter** or **post-filter**). Pre-filtering (filter before **ANN search**) is more efficient but may miss cross-boundary results. Post-filtering (search then filter) is more accurate but wastes compute on filtered-out results.
- **Hybrid search with RRF**: Execute both **dense** (embedding similarity) and **sparse** (**BM25** keyword) searches independently. Combine results using **Reciprocal Rank Fusion** (**RRF**): score = sum(1 / (k + rank_i)) for each document's rank in each result set. **RRF** prioritizes documents that rank well in both searches without needing explicit weight tuning. Combine with **metadata filters** applied to both search paths.
- **Knowledge graph + RAG:** For relationship-heavy queries like "Which subsidiaries of Company X are subject to jurisdiction Y under contract Z?", **vector search** captures the entities but misses the relationships. Solution: (1) Extract entities and relationships into a **knowledge graph** from documents during ingestion. (2) For relationship-heavy queries, query the KG to get the relationship path (e.g., company -> subsidiary -> contract -> jurisdiction). (3) Use the entity IDs from the KG result as a filter in the **vector search** to retrieve the relevant document chunks. (4) Generate the answer from the retrieved chunks. This combines relational precision with document-level evidence.

### Must know

- **RAG vs fine-tuning**: **RAG** injects **fresh external knowledge** at **query time** without retraining (facts that change, must cite sources). **Fine-tuning** encodes behavior/style into **model weights** (durable patterns, not fresh facts).
- **Authorization filters before retrieval**: **tenant_id**, **permission level**, **sensitivity label** applied at index/metadata level — prevents forbidden documents from entering context. NOT **post-generation output filtering**.
- **Pre-filter vs post-filter**: **pre-filter** = filter candidates before **ANN search** (efficient, may miss cross-boundary results). **post-filter** = search then filter (more accurate, wastes compute on filtered results). Know the trade-off.
- **Multi-tenant access control**: document chunks tagged with **tenant_id** + **permission level** — filters applied at **query time**, not after generation. Cross-tenant leakage = decision trap scenario.
- **Hybrid retrieval (dense + sparse)**: **dense** embedding similarity (semantic meaning) + **sparse** keyword matching/**BM25** (exact terms) → combined via **Reciprocal Rank Fusion** (**RRF**). Right answer when both "semantic understanding" and "exact matching" matter.
- **Pure vector vs hybrid**: vector-only misses **exact identifiers**, codes, **legal citations**. Hybrid catches both. "Exact terms plus semantic meaning" = **hybrid retrieval** cue.
- **RRF (Reciprocal Rank Fusion)**: score = sum(1 / (k + rank_i)) for each document's rank in each result set. Prioritizes documents ranking well in both **dense** and **sparse** results without explicit weight tuning.
- **Structure-aware chunking**: preserves **clause boundaries**, **section headings**, definitions linked to dependent clauses, **table structures** — for legal, compliance, technical docs. NOT **fixed-token chunking** that splits semantic units.
- **Parent-child chunking**: retrieve small child chunks but return parent chunk as context — right for QA where answer is a small passage needing surrounding context.
- **Reranking**: **cross-encoder** model reorders top-k retrieved chunks by true relevance — improves precision after initial embedding-based **retrieval**.
- **Index freshness**: **version metadata** + **recency-aware reranking** + **stale-document monitoring** — prevents outdated manuals from being retrieved.
- **Recency-aware retrieval**: **recency boost** applied alongside **relevance scoring** — newer document versions rank higher.
- **SQL + RAG tool routing**: **SQL/database tools** for exact structured facts (tables, aggregations) + **RAG** for document evidence (policies, manuals). Synthesis step with **provenance** from both.
- **Empty-result handling**: expose **retrieval confidence / empty-result state** to the agent → require refusal or clarification when evidence is insufficient. NOT top-k=100 to always fill context.
- **ETL transform phase**: schema mapping + date normalization + deduplication + type correction + null handling — before loading into knowledge store. NOT loading raw data and transforming at **query time**.
- **Knowledge graph + RAG**: KG for **entity relationships** (subsidiary-of, jurisdiction-equals) + **RAG** for document evidence. Complementary, not replacement. Right for multi-hop relationship queries.
- **Canary queries for retrieval**: canonical queries with expected source documents — run after every index update to detect silent regressions.

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| tenant or role permissions, user sees another tenant's data | **authorization filters before retrieval** using metadata/**index filters** | filtering after generation |
| exact terms (product codes, **legal citations**) plus semantic meaning | **hybrid retrieval** (**dense** + **sparse**) with **RRF** fusion | pure **vector search** only |
| legal clauses, contracts, compliance documents | **structure-aware chunking** preserving **clause boundaries**, headings, definitions | **fixed-token chunking** that splits clauses apart |
| tables (financial data, inventory) plus policy documents | **SQL/database tools** for structured data + **RAG** for documents, synthesis with **provenance** | vectorize everything or ignore documents |
| stale manuals returned after new versions uploaded | **index freshness**: **version metadata** + **recency-aware reranking** + **stale-document monitoring** | **fine-tuning** on old documents |
| user asks about subsidiary relationships, contract-to-jurisdiction mapping | **knowledge graph** for relationship constraints + **RAG** for document evidence | pure **vector search** (misses explicit relationship constraints) |
| agent hallucinates when no relevant documents found | expose **retrieval confidence / empty-result state**; require refusal or clarification when evidence is insufficient | top-k=100 to always fill context |
| document citations don't support generated claims | **faithfulness scoring** (entailment check per claim against cited chunk) | answer length or topical **relevance scoring** |
| multiple data sources (SQL DB, PDFs, API) need to be searchable | **ETL pipeline**: extract (connectors) → transform (normalize, deduplicate, map schemas) → load (vector store + metadata) | loading raw files into vector DB at **query time** |
| incompatible context mixed (different jurisdictions, dates, products) | metadata filtering + context compatibility rules (jurisdiction, date, product, segment must be consistent) | temperature tuning (doesn't fix context conflicts) |
| question involves "which subsidiaries of X are subject to jurisdiction Y" | structured **knowledge graph** query + entity IDs used as **vector search** filter | **vector search** alone (misses relationship path) or KG alone (misses document evidence) |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| **RAG** vs **Fine-tuning** for knowledge | **RAG** = fresh facts at **query time**, cite sources, no retraining, easy updates. **Fine-tuning** = behavior/style in weights, requires retraining for new facts, can't cite sources. Use **RAG** for changing/proprietary knowledge; **fine-tuning** for durable behavior patterns. |
| Authorization filter vs **Output guardrail** | Auth filter = prevents forbidden content from entering prompt at **retrieval** time. **Output guardrail** = validates generated text after generation. Auth filter controls data access; guardrail controls response safety. One cannot substitute for the other. |
| **Hybrid retrieval** vs **Reranking** | Hybrid = combines two search methods (**dense** + **sparse**) to improve recall. **Reranking** = reorders already-retrieved chunks with a **cross-encoder** to improve precision. Hybrid is about finding; **reranking** is about ordering. Both are often used together. |
| **NeMo Curator** vs **NeMo Retriever** | Curator = data preparation (dedup, filter, curate datasets before ingestion). Retriever = **RAG** service (ingestion, chunking, embedding, indexing, **retrieval** APIs). Curator preps data; Retriever serves it. |
| **Structure-aware chunking** vs **Parent-child chunking** | Structure-aware = use document structure (headings, sections, clauses) as chunk boundaries. Parent-child = retrieve small child chunks but return parent chunk for context. Structure-aware is for legal/compliance; parent-child is for general QA. |
| **Knowledge graph** vs **Vector search** | KG = explicit entities + relationships (A subsidiary_of B, B subject_to C). Vector = semantic similarity. KG is strong for relationship-constrained queries; **vector search** is strong for conceptual document matching. Combine KG constraints with **RAG** evidence. |
| ETL transform vs Query-time transform | ETL transform = normalize, deduplicate, map schemas before loading (consistent, performant). Query-time = transform raw data at query (inconsistent, slow, error-prone). ETL is the production pattern. |
| **RRF** fusion vs Weighted fusion | **RRF** = sum(1/(k+rank_i)), no weight tuning needed, robust across score scales. Weighted = explicit weights per search method, needs tuning, sensitive to score distributions. **RRF** is simpler and more robust for hybrid search. |

### Mini scenario drill

1. Scenario: A multi-tenant **RAG** agent retrieves documents from all tenants. A tenant A user asks a question and receives an answer based on tenant B's policy documents, exposing competitor pricing details.
   Best answer pattern: Apply tenant **authorization filters** at **retrieval** time (before chunks enter context) using document-level metadata (**tenant_id**, **permission level**). The vector store must enforce document-level permissions at **query time**.
   Trap: Output filtering after generation — the model already saw and used the forbidden content. Prompt instructions "don't mention other tenants" are not enforceable.

2. Scenario: A product-support agent retrieves semantically similar but outdated product manuals after new versions were uploaded last week. Customers receive instructions for deprecated features.
   Best answer pattern: Document **version metadata** on every chunk + **recency-aware retrieval**/**reranking** (boost newer versions) + **stale-document monitoring** (detect when indexed content has newer versions available) + regular index refresh.
   Trap: **Fine-tuning** on the old manuals — this hard-codes stale knowledge into **model weights** and makes the problem permanent. Larger top-k adds noise without fixing recency.

3. Scenario: A compliance agent needs to answer questions about "which subsidiaries of MegaCorp are subject to GDPR under contract Z-2024?" **Vector search** returns relevant-looking paragraphs about GDPR and MegaCorp, but cannot trace the exact subsidiary → contract → jurisdiction relationship path.
   Best answer pattern: **Knowledge graph** for the explicit relationship chain (MegaCorp → subsidiaries → contracts → jurisdiction = GDPR) + use entity IDs from KG result as a filter in **vector search** to retrieve supporting document chunks. Generate answer from retrieved chunks with the KG-verified relationship path.
   Trap: Pure **vector search** captures conceptual similarity but misses explicit relationship constraints. Larger top-k adds noise without fixing relationship tracing.

### What to recognize

- **Private docs leaked**: user receives another tenant's policy content because **metadata filters** were not applied before **retrieval**
- **Tenant isolation breach**: access control happens after generation instead of at **retrieval/index** level, so forbidden chunks already entered context
- **Outdated facts retrieved**: agent cites an old policy version because **version metadata**, recency **reranking**, or **stale-document monitoring** is missing
- **Citation hallucination**: generated citations look plausible but do not support the claim because no **faithfulness**/entailment check validates evidence
- **Structured data loss**: financial figures are vectorized as text and queried by embedding similarity, losing exact precision that SQL would preserve
- **Cross-tenant data leak:** tenant A sees tenant B's data (missing metadata filter)
- **Chunking splits clauses:** legal document chunking splits clauses (need **structure-aware chunking**)
- **Hybrid search needed:** because **vector search** misses exact terms
- **Knowledge graph needed:** because query involves **entity relationships**
- **Freshness failure:** retrieving outdated document version (missing **version metadata**)

### Hands-on checks

- Design a **retrieval** path with ACL filtering, chunking, embedding, hybrid search, rerank, and **citation validation**.
- Design the ingestion pipeline for a legal document **RAG** system: document parsing, chunking strategy, metadata tagging (jurisdiction, version, tenant), embedding, and indexing schedule.
- Design the query pipeline for the same system: query embedding, hybrid search with **metadata filters**, **reranking**, instruction isolation, and citation generation.
- Compare chunking strategies on a sample legal contract: show how **fixed-token chunking** splits a clause and how **structure-aware chunking** preserves it.
- Design a multi-tenant metadata filtering strategy: what tags does each chunk need, how does the **pre-filter** vs **post-filter** decision affect performance vs accuracy?

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when an agent needs proprietary or changing knowledge.
- The major trap pattern is: Never retrieve documents the user cannot access and hope **guardrails** will hide them later.
- Recurring local question themes include: **RAG evaluation** and **groundedness**, Knowledge Integration and Data Handling, knowledge integration.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q34, mock_2 Q36, mock_3 Q44, mock_4 Q38, mock_5 Q36** / `knowledge-001`: A **RAG** agent retrieves documents from multiple tenants. A user receives an answer based on another tenant's policy. What is the root fix? Correct idea: Apply tenant/user **authorization filters before retrieval** and ensure indexes or metadata enforce document-level permissions.. Trap: Output filtering is too late.
- **mock_1 Q35, mock_2 Q37, mock_3 Q45, mock_4 Q39, mock_5 Q37** / `knowledge-002`: A product-support agent retrieves semantically similar but outdated manuals after new versions are uploaded. What should be improved? Correct idea: **Index freshness**, document **version metadata**, **recency-aware retrieval**/**reranking**, and **stale-document monitoring**.. Trap: Temperature worsens reliability.
- **mock_1 Q36, mock_2 Q38, mock_3 Q46, mock_4 Q40** / `knowledge-003`: A compliance agent must answer questions involving relationships among companies, subsidiaries, contracts, and jurisdictions. **Vector search** misses exact relationship c... Correct idea: A structured **knowledge graph** or database query layer combined with **RAG**, so relationship constraints are explicitly represented.. Trap: Larger top-k adds noise.
- **mock_1 Q37, mock_2 Q39, mock_3 Q47, mock_4 Q41, mock_5 Q38** / `knowledge-004`: A document Q&A agent has high hallucination when no relevant documents are found. What prompt/**retrieval** behavior should be added? Correct idea: Expose **retrieval confidence** or **empty-result state** to the agent and require refusal or clarification when evidence is insufficient.. Trap: Forced answers cause hallucinations.
- **mock_1 Q38, mock_2 Q40, mock_3 Q48, mock_4 Q42, mock_5 Q39** / `knowledge-005`: A **RAG** pipeline chunks long contracts by fixed token length, often splitting clauses and definitions apart. What is the best improvement? Correct idea: Use **structure-aware chunking** with **section headings**, **clause boundaries**, overlap, and metadata linking definitions to dependent c.... Trap: Random small chunks lose context.
- **mock_3 Q49, mock_4 Q43, mock_5 Q40** / `knowledge-006`: A **retrieval** system returns relevant chunks, but the final answer combines facts from incompatible jurisdictions. What control helps? Correct idea: Metadata filtering and context-packing rules that keep jurisdiction, date, product, and customer segment consistent.. Trap: Temperature does not fix conflicting evidence.
- **mock_3 Q50, mock_4 Q44** / `knowledge-007`: An agent needs to use internal tables and unstructured documents together. What integration pattern is strongest? Correct idea: Use tool routing: **SQL/database tools** for exact structured facts, **RAG** for document evidence, then a synthesis step with provenan.... Trap: Documents may contain required policy text.

</details>

<!-- STUDY_ENRICHMENT_END -->

---
capability: Knowledge Ingestion and Permission Pipeline
status: populated
source_lens: general-study
---

# Knowledge Ingestion and Permission Pipeline

## What You Are Building

You are building the offline or scheduled pipeline that turns private, changing, messy enterprise knowledge into safe, searchable, permission-aware chunks. The output is not an answer. The output is structured records ready for indexing and retrieval, with source, version, ACL, sensitivity, and deletion lineage attached.

## Pipeline

1. Connect to sources: file shares, SharePoint/Drive, wikis, PDFs, HTML, databases, APIs, tickets, email exports, and knowledge bases.
2. Extract content with source-specific parsers: OCR for scans, table extraction, chart/image handling, PDF layout recovery, code block preservation.
3. Normalize text and structure: headings, sections, tables, lists, dates, product names, version fields, author/source metadata.
4. Detect and handle PII, secrets, credentials, regulated data, prompt-injection text, and retention constraints.
5. Chunk documents with strategy suited to the content: semantic, structure-aware, clause-aware, parent-child, sliding window, or fixed with overlap.
6. Attach metadata to every chunk: source ID, URL/path, timestamp, version, tenant, ACL, sensitivity, jurisdiction, product, retention, deletion key.
7. Deduplicate or cluster repeated content so search is not dominated by mirrors and old copies.
8. Hand off to embedding/indexing with refresh cadence and deletion/update propagation.
9. Validate ingestion with canary documents, permission tests, source tracing, and parse-quality checks.

## Core Concepts

- **Ingestion** prepares knowledge before query time; **retrieval** searches it during a user request.
- **NeMo Retriever** is the NVIDIA service cue for enterprise RAG ingestion/retrieval patterns; **NeMo Curator** is the data-prep cue when the corpus is being cleaned for training/tuning.
- **Chunking** controls the unit of retrieval. Bad chunks cause bad RAG even with a strong model.
- **Structure-aware chunking** preserves headings, clauses, tables, procedures, and definitions.
- **Parent-child chunking** retrieves small chunks but returns larger parent context.
- **Metadata** is part of the document, not decoration. It enables filtering, citations, freshness, deletion, and audit.
- **ACL propagation** means every chunk inherits user/group/tenant permissions before indexing.
- **Tenant filters** should be enforceable in the index or retrieval layer.
- **Prompt injection in documents** is untrusted content. Instructions inside retrieved docs must not become system instructions.
- **Refresh/deletion lineage** ensures old versions and deleted docs stop being retrievable.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "PDFs, tables, charts" | extraction quality and structure preservation | dumping raw OCR text only |
| "legal clauses split apart" | structure-aware or clause-aware chunking | fixed token chunks only |
| "enterprise RAG connector/index" | NeMo Retriever / knowledge ingestion | NeMo Framework training |
| "prepare corpus for tuning" | NeMo Curator/training data curation | RAG ingestion pipeline |
| "answer used wrong tenant data" | ACL/tenant metadata before indexing and retrieval | final-answer guardrail |
| "old manual still retrieved" | version metadata, refresh pipeline, deletion/update propagation | fine-tuning on manuals |
| "secret key in docs" | secrets detection and redaction before indexing | trusting the retriever |
| "document says ignore policy" | prompt-injection detection and instruction isolation | treating retrieved text as instructions |
| "needs citations" | source IDs, stable chunk IDs, page/section metadata | chunks without provenance |
| "document removed by owner" | deletion key and index tombstone/rebuild path | leaving stale vectors |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Ingestion equals RAG | Ingestion prepares records; RAG retrieves and assembles context at query time. |
| Retriever equals Curator | Retriever prepares/searches runtime knowledge; Curator cleans data for training/tuning or corpus prep. |
| Chunking is just splitting by length | Chunking must preserve meaning, structure, permissions, and citation boundaries. |
| Metadata can be added later | Missing ACL/source/version metadata at ingestion creates unsafe retrieval. |
| Guardrails can hide forbidden docs | Once forbidden content enters context, the model may use it. Filter before retrieval. |
| OCR text is enough | Tables, headings, figures, footnotes, and page numbers often matter for answers. |
| Deleted docs disappear automatically | Vector indexes need explicit delete/update propagation. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| NVIDIA | NeMo Retriever ingestion patterns | Extraction, embedding, indexing, reranking, and retrieval stack examples. |
| NVIDIA | NeMo Curator / RAPIDS | Large-scale cleaning, dedupe, and filtering when source corpora need heavy preprocessing. |
| Cloud | Bedrock Knowledge Bases, Kendra, Azure AI Search | Managed document ingestion, indexing, and metadata filtering. |
| Open source | Unstructured, Apache Tika, LangChain/LlamaIndex loaders | Parsing and chunking building blocks. |
| Vector DB | Milvus, Qdrant, Weaviate, pgvector, OpenSearch | Metadata filters, vector indexes, refresh and delete behavior. |
| Security | DLP/secret scanners, IAM/ACL sync | Sensitive data and permissions before indexing. |

## Deep Dive

### Where it sits in the lifecycle

Knowledge ingestion is the **RAG preparation layer**. It turns enterprise documents into safe, searchable, permission-aware chunks.

```text
[Connector sync] -> [Parse/OCR/table extraction] -> [Chunk + metadata + ACL]
        -> [Embed/index] -> [Refresh/delete] -> [Runtime retrieval]
```

Many RAG failures happen here before the user asks a question.

### Service boundary: Retriever vs Curator

| Scenario cue | Think | Not this |
|---|---|---|
| Enterprise documents for runtime Q&A | NeMo Retriever | Foundation training |
| Chunking, indexing, embeddings, reranking | NeMo Retriever | NeMo Customizer |
| Dedupe/filter/redact large corpus | NeMo Curator | Runtime retrieval alone |
| GPU dataframe preprocessing | RAPIDS | Model serving |
| Serve generator/embedding model | NIM | Full RAG pipeline |

NeMo Retriever and NeMo Curator can be complementary, but they answer different lifecycle questions.

### Chunking and metadata decisions

| Decision | Good answer | Trap |
|---|---|---|
| Fixed-size chunks | Prototype or simple text | Splits tables, clauses, and procedures |
| Semantic chunks | Topic/sentence boundaries | May ignore document structure |
| Structure-aware chunks | Headings, tables, page/section IDs | More parser work |
| Parent-child retrieval | Search small, return larger context | Needs stable parent metadata |
| Source metadata | URL, version, date, author, sensitivity | Citations become theater without it |

### Permission and freshness rules

Permissions must travel with every chunk. Tenant, group, document, page, section, sensitivity, and deletion metadata should be enforced **before retrieval results enter the prompt**. Filtering after generation is too late.

Refresh and deletion are part of correctness. A useful ingestion pipeline knows which source changed, which chunks/vectors came from it, which index entries to update, and how to prove a deleted document is no longer retrievable.

### Document prompt injection

A document can contain malicious instructions. Ingestion can tag or quarantine suspicious content, but runtime prompt construction must also isolate retrieved text from system/developer instructions. Retrieved pages are evidence, not authority.

## Exam Signals

- "private docs before RAG" -> knowledge ingestion pipeline.
- "NeMo Retriever" -> enterprise RAG ingestion/retrieval, not model training.
- "NeMo Curator" -> corpus cleaning/dedupe/filtering, especially before training or heavy prep.
- "chunk has no source/date/ACL" -> metadata extraction and propagation.
- "tenant leak" -> permission filters before retrieval.
- "PDF tables lost" -> better parser/structure extraction.
- "prompt injection in document" -> retrieved content is untrusted; isolate and scan.
- "deleted document still appears" -> index deletion/update path.
- "wrong policy version" -> version/effective-date metadata.
- "citations missing" -> source and stable chunk IDs.

## Hands-on Checks

1. Trace one PDF from connector sync to parsed blocks to chunks to metadata to embedding to index.
2. Design metadata fields for tenant, user group, source URL, version, date, sensitivity, and deletion key.
3. Compare fixed, semantic, structure-aware, and parent-child chunking for a contract.
4. Write a test that proves tenant B chunks never appear for a tenant A query.
5. Mark where prompt-injection text is detected, isolated, and prevented from becoming instructions.

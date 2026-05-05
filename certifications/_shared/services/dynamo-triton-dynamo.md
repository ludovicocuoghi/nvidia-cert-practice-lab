---
service: Dynamo (Triton Dynamo)
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# Dynamo (Triton Dynamo)

## What to study first

- **Core idea:** Open-source distributed serving system (Python) — leader-worker architecture for multi-node LLM serving
- **Use it when:** Use when a large LLM serving system needs multi-node scheduling, disaggregated prefill/decode, or KV-cache-aware request routing.
- **Choose another path when:** Choose the neighboring service for a simple single-node endpoint; use NIM or Triton first.
- **Concrete surface:** Access: `pip install ai-dynamo`, GitHub: `github.com/ai-dynamo/dynamo`, NGC containers Inside: Disaggregated prefill/decode, KV-cache routing, leader-worker scheduler, etcd failover I/O: Inference requests + disaggregated topology config (prefill nodes, decode nodes) -> KV-cache-aware routed responses, prefill KV cache streamed to decode instances
- **Study first:** Disaggregated prefill/decode architecture: separates compute-bound prefill (saturates GPU compute units) from memory-bandwidth-bound decode (reads KV cache from HBM) onto different GPU instances
- KV-cache-aware request routing: scheduler examines decode-instance KV-cache capacity and shared prefix caches before dispatching
- KV cache transferred over fast interconnect (NVLink, InfiniBand)
- Leader-worker architecture: leader runs scheduler with global state (GPU memory, queue depths, model versions)
- workers run Triton instances
- leader failover via etcd
- Dynamo vs Triton vs TensorRT-LLM: Dynamo = multi-node distributed scheduling
- Triton = single-node serving
- TensorRT-LLM = engine-level optimization below both
- When to use Dynamo: multi-node serving with very large models (70B+), disaggregation improves throughput, long context windows where KV-cache pressure is the bottleneck, heterogeneous GPU allocation for prefill vs decode
- **Real trap:** Choosing Dynamo when the scenario only needs a standard model server rather than distributed LLM serving orchestration.

## At a glance

| | |
|---|---|
| **What it is** | Open-source distributed serving system (Python) — leader-worker architecture for multi-node LLM serving |
| **How you access it** | `pip install ai-dynamo`, GitHub: `github.com/ai-dynamo/dynamo`, NGC containers |
| **Input** | Inference requests + disaggregated topology config (prefill nodes, decode nodes) |
| **Output** | KV-cache-aware routed responses, prefill KV cache streamed to decode instances |
| **Inside** | Disaggregated prefill/decode, KV-cache routing, leader-worker scheduler, etcd failover |

```yaml
# Conceptual topology: separate prefill and decode GPU pools
prefill_nodes:
  - type: H100-SXM
    count: 2
decode_nodes:
  - type: H100-NVL   # Larger HBM for KV cache
    count: 4
```

**Mental model**: the "load balancer with a brain" for multi-node LLM serving — knows which GPU has free KV-cache and routes there.

---

## What it is, in one paragraph

NVIDIA's distributed inference scheduling and orchestration layer for large GPU clusters. Triton Dynamo extends Triton Inference Server with intelligent request routing, load balancing, and distributed scheduling across multiple model instances and GPU nodes. It coordinates **which model instance handles which request** at cluster scale.

## Where it sits in the lifecycle

**Advanced serving / distributed inference** — the orchestration layer on top of Triton for multi-node, multi-model deployments.

```
[Incoming requests]
        ↓
[Triton Dynamo: distributed scheduling, routing, load balancing across cluster]
        ↓
[Triton Inference Server instances across GPU nodes]
        ↓
[NIM microservices, TensorRT-LLM engines]
```

## When it is the right answer

- Questions about distributed inference across multiple GPU nodes
- Large-scale model serving with intelligent request routing
- Load balancing and scheduling across model instances at cluster scale
- When the question is specifically about distributed inference scheduling (not single-node serving)

## Adjacent-service decision boundary

- **Single-node model serving**: That's Triton Inference Server or NIM. Dynamo adds distributed scheduling on top.
- **Model training**: That's NeMo Framework.
- **Safety filtering**: That's NeMo Guardrails.
- **Agent orchestration**: That's NeMo Agent Toolkit.
- **Kernel profiling**: That's Nsight Compute.

## How it relates to neighboring services

- vs **Triton Inference Server**: Triton serves models on a single node or small cluster. Triton Dynamo adds distributed scheduling, routing, and load balancing across large GPU clusters. Triton = what serves a model on a node; Triton Dynamo = what decides *which node* serves *which request*.
- vs **NIM**: NIM is the packaged microservice; Triton Dynamo can route requests across multiple NIM instances.
- vs **Kubernetes load balancing**: Generic L4/L7 load balancing. Triton Dynamo adds inference-aware scheduling (model-aware, batching-aware, GPU-memory-aware).
- vs **NCCL**: NCCL handles GPU-to-GPU communication within a distributed operation. Triton Dynamo handles request-level scheduling *across* nodes — it decides where requests land, not how GPUs talk.

## Deep Dive Contents

This deep dive covers the key concepts behind Dynamo that the exam tests:

- **[What Dynamo Actually Is]**: open-source distributed inference serving with disaggregated prefill/decode architecture
- **[Disaggregated Prefill/Decode]**: separation of compute-bound prefill and memory-bandwidth-bound decode onto different GPU instances with potentially different GPU types
- **[KV-Cache Routing]**: scheduler examines decode-instance KV-cache capacity and prefix caches; transfers KV cache over fast interconnect (NVLink, InfiniBand)
- **[Dynamo vs Standard Triton]**: single-node serving uses Triton; multi-node serving with very large models (70B+) and long context windows uses Dynamo
- **[Leader-Worker Architecture]**: leader node runs scheduler with global state; workers run Triton instances; leader failover via etcd for production deployments

## Deep dive: Disaggregated inference and KV-cache routing

### What Dynamo actually is

NVIDIA Dynamo (formerly Triton Dynamo) is an open-source distributed inference serving system designed specifically for large language models at scale. It decouples the traditionally monolithic inference pipeline into separate prefill and decode stages that can run on different GPU instances — an architecture called **disaggregated inference**.

### Disaggregated prefill/decode

In a standard LLM serving setup (e.g., a single Triton instance or a single NIM container), each GPU handles both the prefill phase (processing the input prompt) and the decode phase (generating output tokens). This is suboptimal because these phases have very different GPU resource requirements:

- **Prefill**: Compute-bound. A single request with a 4096-token prompt saturates GPU compute units (matrix multiply for attention) but produces only one KV-cache entry per token.
- **Decode**: Memory-bandwidth-bound. Generating each token requires reading the entire KV cache from HBM and writing back the new key/value entries. Compute utilization is low because each step processes only one new token.

Dynamo allows you to run prefill and decode on different GPU instances, potentially with different GPU types. Prefill-optimized instances (e.g., H100 with high compute) can serve many prompts and stream their KV caches to decode-optimized instances (e.g., with larger HBM for longer context windows).

### KV-cache routing

The key innovation in Dynamo is **KV-cache-aware request routing**. When a request arrives:

1. The Dynamo scheduler examines which decode instances have available KV-cache capacity and which ones already hold related prefix caches (for shared-prefix scenarios like system prompts).
2. The prefill is dispatched to a prefill instance that computes the initial KV cache.
3. The KV cache is transferred (potentially via fast interconnect like NVLink or InfiniBand) to the selected decode instance.
4. The decode instance continues autoregressive generation using the transferred KV cache.

This architecture avoids the traditional approach where you must either duplicate KV caches across all nodes or accept that a node change triggers a full recomputation.

### When Dynamo vs standard Triton

- **Use standard Triton**: Single-node serving, multi-model serving on one machine, models that do not require multi-GPU tensor parallelism, or when deployment complexity must be minimized.
- **Use Dynamo**: Multi-node serving where disaggregation improves throughput, very large models (70B+) requiring pipeline parallelism across nodes, workloads with long context windows where KV-cache pressure is the bottleneck, or scenarios requiring heterogeneous GPU allocation for prefill vs decode.

### Architectural notes

Dynamo uses a **leader-worker** architecture. The leader node runs the scheduler and maintains a global view of all worker node states (GPU memory utilization, queue depths, loaded model versions). Worker nodes run Triton Inference Server instances. The leader does not perform inference itself — it is purely a scheduling and routing layer. If the leader fails, the system loses its scheduling state; production deployments typically use a leader failover mechanism (e.g., etcd-based leader election).

## Numbers, defaults, knobs you should recognize

- **Distributed inference scheduling** across GPU clusters — routes requests to nodes with the right model loaded
- **Model-aware routing**: Knows which GPU nodes have which model versions loaded and available
- **Intelligent load balancing**: Considers GPU memory, queue depth, and batch composition when routing
- **Extends Triton Inference Server** for cluster-scale deployment across multiple nodes
- Leader/frontend node architecture: frontend nodes receive requests, leader schedules them to worker nodes running Triton

## Example exam-style scenario

> A team serves LLMs across a cluster of 32 GPU nodes with multiple model versions. They need intelligent routing that knows which nodes have which models loaded. Which component provides this?
>
> **Answer**: Triton Dynamo — the distributed inference scheduling layer for large GPU clusters.

## Mock signals

- **No direct evidence in Agentic AI mocks.** Triton Dynamo is not a primary answer choice in the current mock bank. Its role is inferred from NVIDIA platform architecture for large-scale distributed inference.
- Study signal: pick it for large-scale/distributed LLM serving patterns, not single-node development or agent task planning.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Advanced serving / distributed inference
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Open-source distributed serving system (Python) — leader-worker architecture for multi-node LLM serving
- **Use it when:** Use when a large LLM serving system needs multi-node scheduling, disaggregated prefill/decode, or KV-cache-aware request routing.
- **Do not use it when:** Choose the neighboring service for a simple single-node endpoint; use NIM or Triton first.
- **Common trap:** Choosing Dynamo when the scenario only needs a standard model server rather than distributed LLM serving orchestration.
- **Recognition clues:** A very large LLM needs multi-node serving with disaggregated prefill/decode and KV-cache-aware routing.
### Study notes
- Place **Dynamo (Triton Dynamo)** at **Advanced serving / distributed inference**: the "load balancer with a brain" for multi-node LLM serving — knows which GPU has free KV-cache and routes there.
- Boundary cue: choose it when a large LLM serving system needs multi-node scheduling, disaggregated prefill/decode, or KV-cache-aware request routing. Adjacent-service cue: not for a simple single-node endpoint; use NIM or Triton first.
### Must know
- **Disaggregated prefill/decode architecture**: separates compute-bound prefill (saturates GPU compute units) from memory-bandwidth-bound decode (reads KV cache from HBM) onto different GPU instances
- **KV-cache-aware request routing**: scheduler examines decode-instance KV-cache capacity and shared prefix caches before dispatching; KV cache transferred over fast interconnect (NVLink, InfiniBand)
- **Leader-worker architecture**: leader runs scheduler with global state (GPU memory, queue depths, model versions); workers run Triton instances; leader failover via etcd
- **Dynamo vs Triton vs TensorRT-LLM**: Dynamo = multi-node distributed scheduling; Triton = single-node serving; TensorRT-LLM = engine-level optimization below both
- **When to use Dynamo**: multi-node serving with very large models (70B+), disaggregation improves throughput, long context windows where KV-cache pressure is the bottleneck, heterogeneous GPU allocation for prefill vs decode
### What to recognize
- **Disaggregated inference at scale** → scenario describes separating prefill and decode onto different GPU instances for a very large model (70B+); Dynamo provides KV-cache-aware routing across the cluster
- **KV-cache routing and prefix caching** → scenario mentions routing requests to decode instances based on available KV-cache capacity or shared system prompt prefixes; Dynamo's KV-cache-aware scheduler is the key mechanism
- **Dynamo vs Triton distinction trap** → scenario about single-node dev serving with Dynamo as a distractor; standard Triton or NIM is the correct choice for single-node deployment
- **Multi-node LLM serving architecture** → scenario requires understanding the leader-worker scheduling layer above Triton instances; the leader node maintains global state and routes requests, not performing inference itself
### Hands-on checks
- Write one scenario where this service is correct and one where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **Dynamo (Triton Dynamo)** matches **Advanced serving / distributed inference**, not whether the product name sounds familiar.
- Boundary cue: choose it when a large LLM serving system needs multi-node scheduling, disaggregated prefill/decode, or KV-cache-aware request routing.
- Adjacent-service cue: not for a simple single-node endpoint; use NIM or Triton first.
- The common trap pattern is: Choosing Dynamo when the scenario only needs a standard model server rather than distributed LLM serving orchestration.
- If it appears only as a distractor, decide by the required lifecycle phase before choosing a product name.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- No direct mock references found for this file yet.

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
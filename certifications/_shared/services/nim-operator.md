---
service: NIM Operator
relevant_to: [NCP-GENL, NCP-AAI]
status: populated
---

# NIM Operator

## At a glance

| | |
|---|---|
| **What it is** | Kubernetes operator (Go controller) — automates NIM deployment lifecycle on K8s |
| **How you access it** | `helm install nim-operator`, then `kubectl apply -f nim-service.yaml` (CRD) |
| **Input** | `NIMService` CR YAML (model, replicas, GPU type) |
| **Output** | Running NIM Deployment + Service + HPA + health checks, managed automatically |
| **Inside** | `NIMService` CRD, KEDA autoscaling, 4-layer health probes, GPU-aware scheduling |

```yaml
APIVersion: nim.nvidia.com/v1
kind: NIMService
metadata:
  name: llama-70b
spec:
  model: meta/llama-3.1-70b-instruct
  replicas: 2
  gpu: NVIDIA-H100-80GB-HBM3
```
```bash
kubectl apply -f nim-service.yaml  # Operator reconciles → pods + services appear
```

**Mental model**: declare "I want NIM X with 3 replicas on H100s" via YAML — the operator creates and manages the full K8s deployment.

---

## What it is, in one paragraph

The Kubernetes operator for managing NIM microservice deployments at scale. NIM Operator automates the lifecycle of NIM containers on Kubernetes — handling deployment, scaling, updates, and health monitoring of NIM-based model serving. It is the **Kubernetes-native management layer** for NIM.

## Where it sits in the lifecycle

**Deployment operations** — the Kubernetes management layer for production NIM deployments.

```
[Kubernetes cluster]
        ↓
[NIM Operator: manage NIM deployment, scaling, updates, health]
        ↓
[NIM microservice pods]
```

## When it is the right answer

- Questions about managing NIM deployments on Kubernetes
- Operationalizing NIM at scale on K8s clusters
- Automated NIM lifecycle management (deploy, scale, update, monitor)
- "How to run NIM in production on Kubernetes?"

## When it is the wrong answer (common trap)

- **The inference service itself**: That's NIM. NIM Operator manages NIM; it doesn't serve models.
- **Model training**: That's NeMo Framework.
- **Agent orchestration**: That's NeMo Agent Toolkit.
- **Multi-framework model serving**: That's Triton Inference Server.

## How it relates to neighboring services

- vs **NIM**: NIM is the inference microservice. NIM Operator is the Kubernetes operator that manages NIM deployments. NIM = what runs; Operator = what manages.
- vs **Triton Inference Server**: Triton is the serving engine. NIM can run on Triton. NIM Operator manages NIM, not Triton directly.
- vs **Kubernetes HPA**: HPA handles generic pod autoscaling. NIM Operator adds NIM-specific lifecycle management on top of K8s primitives.

## Deep Dive Contents

This deep dive covers the key concepts behind NIM Operator that the exam tests:

- **[What Is a Kubernetes Operator]**: operator pattern with `NIMService` CRD; declarative desired state with automatic reconciliation
- **[Auto-Scaling Mechanics]**: NIM-aware autoscaling based on inference queue depth, GPU memory utilization, and model profile switching via KEDA integration
- **[Health Checking Beyond Liveness Probes]**: four-layer model — container process, model load, inference readiness, and GPU health
- **[Rolling Updates and Zero-Downtime Deployment]**: model-aware rolling updates that wait for model loading and health checks before routing traffic
- **[GPU-Aware Scheduling]**: GPU type, topology (NVLink/NUMA), and MIG partition awareness for scheduling NIM pods
- **[Manual vs Operator-Managed Deployment]**: operator handles Deployment YAML, image pull secrets, GPU resource limits, HPA, and health checks declaratively

## Deep dive: Kubernetes operator pattern and NIM lifecycle management

### What is a Kubernetes operator?

A Kubernetes operator is a software extension that uses custom resources to manage applications and their components. It follows the **operator pattern**: encode domain-specific operational knowledge into software that extends the Kubernetes API. The operator watches the desired state (defined in Custom Resource Definitions / CRDs) and takes actions to reconcile the actual state toward the desired state.

The NIM Operator implements this pattern by defining a `NIMService` custom resource that declares the desired state of a NIM deployment: which model to serve, how many replicas, resource limits, GPU requirements, update strategy, and so on.

### Auto-scaling mechanics

NIM Operator does not simply rely on Kubernetes Horizontal Pod Autoscaler (HPA). It implements **NIM-aware autoscaling** that considers:

- **Inference request queue depth** per pod, surfaced by Triton's metrics endpoint.
- **GPU memory utilization**: A pod may have CPU headroom but be GPU-memory-bound; scaling more pods with the same model reduces per-pod KV-cache pressure.
- **Model profile switching**: When a node runs multiple NIMs with different models, the operator can route traffic away from a node before switching its model profile, avoiding contention.

The operator integrates with Kubernetes Event-Driven Autoscaling (KEDA) for metric-based scaling decisions that go beyond basic CPU/memory.

### Health checking beyond liveness probes

NIM Operator implements model-level health checking, not just container-level:

1. **Container probe**: Is the NIM container process running?
2. **Model load probe**: Has the model finished loading into GPU memory? (Model loading can take 30-120 seconds for large LLMs.)
3. **Inference readiness**: Is the model warmed up and accepting requests with acceptable latency?
4. **GPU health**: Are the GPUs visible to CUDA, and is ECC reporting clean?

This layered health model prevents routing traffic to a pod whose model is still loading or whose GPU has degraded.

### Rolling updates and zero-downtime deployment

When updating a model version with the NIM Operator:

1. New pods are created with the new model image.
2. The operator waits for the model to fully load and pass health checks before adding new pods to the service endpoint.
3. In-flight connections are drained from old pods using Kubernetes pod lifecycle hooks (preStop with a configurable grace period).
4. Only after old pods have no active requests are they terminated.

This is significantly more sophisticated than a standard Kubernetes Deployment rolling update, which would not wait for model loading to complete before considering a pod "ready."

### GPU-aware scheduling

The operator uses Kubernetes node labels and taints to schedule NIM pods onto GPU-enabled nodes. It understands:

- **GPU type** (A100 vs H100 vs L40S) and can enforce model-specific GPU requirements.
- **GPU topology** (NVLink domains, NUMA zones) when multi-GPU tensor parallelism is required.
- **MIG (Multi-Instance GPU)** partitioning, allowing fine-grained GPU allocation for smaller models.

### Manual vs operator-managed deployment

Manual deployment requires: crafting Deployment YAML, configuring the correct NGC image pull secrets, setting GPU resource limits, configuring the Triton model repository path, setting up HPA with custom metrics, implementing health check endpoints, and managing rolling update parameters. The NIM Operator handles all of this declaratively through the `NIMService` CRD, with the operator reconciling state automatically.

## Numbers, defaults, knobs you should recognize

- Kubernetes-native operator pattern
- Manages NIM deployment, scaling, updates, health
- Automates NIM lifecycle on K8s clusters

## Example exam-style scenario

> A team runs NIM microservices on Kubernetes and needs to automate deployment, scaling, and updates. Which component manages NIM on K8s?
>
> **Answer**: NIM Operator — the Kubernetes operator for NIM lifecycle management.

## Mock signals

- **No direct evidence in Agentic AI mocks.** NIM Operator is not a primary answer choice in the current mock bank. Its role is inferred from the NVIDIA platform architecture for production Kubernetes deployments.
- Study signal: pick it when Kubernetes lifecycle management for NIM is the point, not when the question only asks for a single model API.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Deployment operations
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Kubernetes operator (Go controller) — automates **NIM** deployment lifecycle on K8s
- **Use it when:** Use when NIM endpoints must be managed on Kubernetes with CRDs, autoscaling, model profiles, health checks, or rolling updates.
- **Do not use it when:** Do not use it as the inference microservice itself; it manages NIM deployments rather than performing inference.
- **Common trap:** Confusing the Kubernetes operator that manages NIM with the NIM container that serves model requests.
- **Scenario signal:** An ops team must deploy, autoscale, health-check, and roll out NIM endpoints on Kubernetes.
### Study notes
- Place **NIM Operator** at **Deployment operations**: declare "I want NIM X with 3 replicas on H100s" via YAML — the operator creates and manages the full K8s deployment.
- Choose it when: Use when NIM endpoints must be managed on Kubernetes with CRDs, autoscaling, model profiles, health checks, or rolling updates. Reject it when: Do not use it as the inference microservice itself; it manages NIM deployments rather than performing inference.
### Must know
- **Kubernetes operator pattern with NIMService CRD**: operator watches desired state (model, replicas, GPU resources, update strategy) defined in CRD and reconciles actual state; encodes domain-specific operational knowledge
- **NIM-aware auto-scaling via KEDA**: scales based on inference queue depth, GPU memory utilization, and model profile switching — not just basic CPU/memory HPA
- **Four-layer health checking**: container process → model load (30-120s for large LLMs) → inference readiness → GPU health (CUDA visibility, ECC); prevents routing traffic to unready pods
- **Model-aware rolling updates**: creates new pods with new model image, waits for model load+health checks, drains in-flight connections via preStop hook, then terminates old pods
- **GPU-aware scheduling**: enforces GPU type (A100/H100/L40S), GPU topology (NVLink/NUMA for multi-GPU TP), and MIG partitioning for fine-grained allocation
### High-yield exam signals
- **Kubernetes-native NIM lifecycle management** → scenario describes automating NIM deployment, autoscaling, and rolling updates on Kubernetes; NIM Operator manages NIM via the NIMService custom resource
- **Model-aware rolling updates** → scenario about updating a deployed model version without downtime; NIM Operator waits for the new model to fully load on GPU before routing traffic, then drains old connections
- **Health checks beyond container liveness** → scenario about a pod being "ready" but the model not yet loaded into GPU memory (taking 30-120s); NIM Operator's four-layer health model prevents premature traffic routing
- **NIM Operator vs NIM trap** → scenario about serving a single model API; NIM is the inference microservice, NIM Operator is the Kubernetes management layer — only use Operator when K8s lifecycle automation is relevant
- **GPU-aware scheduling for large models** → scenario requiring specific GPU types (H100 vs A100) or MIG partitioning for multi-model deployments; NIM Operator's GPU-aware scheduling enforces these constraints
### Hands-on checks
- Write one scenario where this service is correct and one where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **NIM Operator** matches **Deployment operations**, not whether the product name sounds familiar.
- Choose it when the scenario signal matches this boundary: Use when NIM endpoints must be managed on Kubernetes with CRDs, autoscaling, model profiles, health checks, or rolling updates.
- Reject it when the problem is actually about another layer: Do not use it as the inference microservice itself; it manages NIM deployments rather than performing inference.
- The common trap pattern is: Confusing the Kubernetes operator that manages NIM with the NIM container that serves model requests.
- Expect distractors around nearby services such as **TensorRT-LLM**. Decide by lifecycle first, product name second.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_5 Q21** / `m4-021` (Model Deployment): When deploying LLMs using Kubernetes, what is the primary benefit of using Horizontal Pod Autoscaling? Correct idea: It automatically scales the number of model serving pods based on metrics like CPU utilization or request queue length, matchin.. Trap: Horizontal Pod Autoscaling adjusts the number of pods, not the resources (RAM, GPU memory) available to each pod -- v..
- **opt-012** / `opt-012` (Model Optimization): When converting a fine-tuned Hugging Face model to TensorRT-LLM, the build fails on an unsupported operator. What is the first thing to check? Correct idea: The architecture mapping in `convert_checkpoint.py` and whether the custom layer needs a TRT-LLM plugin or an opset workaround.

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
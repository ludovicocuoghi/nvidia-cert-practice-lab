export const serviceFilters = [
  "Agentic AI",
  "GenAI LLMs",
  "Data preparation",
  "Training and customization",
  "Agent orchestration",
  "Inference optimization",
  "Serving and deployment",
  "RAG and retrieval",
  "Safety and guardrails",
  "Monitoring and profiling",
  "Evaluation"
];

export const nvidiaServices = [
  {
    name: "NeMo Framework",
    description: "Framework for training, customizing, aligning, and evaluating generative AI models.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Training and customization",
    filters: ["GenAI LLMs", "Agentic AI", "Training and customization"],
    use: "Use when the scenario is about SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.",
    avoid: "Choose NIM or Triton when an already-trained model only needs a production API; choose NeMo Customizer for managed PEFT when the full training stack is unnecessary.",
    traps: "Confusing NeMo Framework with NIM. NeMo customizes/builds models; NIM packages and serves optimized model microservices.",
    scenario: "A team has domain instructions and needs LoRA tuning while preserving base-model behavior.",
    quizPrompt: "Which NVIDIA component is most appropriate for PEFT customization before deployment?"
  },
  {
    name: "NeMo Agent Toolkit",
    description: "Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.",
    exams: ["Agentic AI"],
    lifecycle: "Agent orchestration",
    filters: ["Agentic AI", "Agent orchestration", "RAG and retrieval", "Monitoring and profiling"],
    use: "Choose it when a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.",
    avoid: "Choose the neighboring layer when the problem is only retrieval, runtime policy, model serving, model customization, or tool-gateway authorization.",
    traps: "Adding an agent toolkit when the real failure is an unowned tool boundary: missing schema validation, bad retrieval, missing access control, or no deterministic state owner.",
    scenario: "A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent.",
    quizPrompt: "What tool fits a framework-agnostic agent workflow with tool execution and observability?"
  },
  {
    name: "NeMo Guardrails",
    description: "Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Safety and guardrails",
    filters: ["GenAI LLMs", "Agentic AI", "Safety and guardrails", "Agent orchestration"],
    use: "Use when the scenario requires policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.",
    avoid: "Choose IAM/document ACLs for access control, a tool gateway for execution security, human approval for high-risk actions, and Evaluator for offline quality scoring.",
    traps: "Choosing guardrails to fix unauthorized retrieval after sensitive data is already in context. Access control must happen before retrieval.",
    scenario: "A customer assistant must refuse out-of-policy requests and prevent unsafe tool calls.",
    quizPrompt: "Where do guardrails fit in a tool-using customer support assistant?"
  },
  {
    name: "NeMo Retriever",
    description: "NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "RAG and retrieval",
    filters: ["GenAI LLMs", "Agentic AI", "RAG and retrieval", "Serving and deployment"],
    use: "Use when the scenario is about connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.",
    avoid: "Choose Framework/Customizer when behavior must be learned from examples, Curator when preparing training data, and Guardrails when policy enforcement is the issue.",
    traps: "Assuming a larger context window replaces retrieval quality. Bad chunks and weak reranking still cause bad answers.",
    scenario: "A regulated enterprise wants secure retrieval over PDFs, tables, charts, and internal knowledge.",
    quizPrompt: "Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG?"
  },
  {
    name: "NIM",
    description: "NVIDIA inference microservices for deploying optimized models with production APIs and model profiles.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Serving and deployment",
    filters: ["GenAI LLMs", "Agentic AI", "Serving and deployment", "Inference optimization"],
    use: "Use when the scenario asks for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.",
    avoid: "Choose Framework/Customizer when weights or adapters must change, Nsight/TensorRT-LLM for lower-level performance work, Agent Toolkit for workflow control, and Curator for training data.",
    traps: "Confusing the model, the microservice, and the catalog. Nemotron is a model family; NGC distributes artifacts; NIM packages a supported model as an optimized callable API.",
    scenario: "A team wants an OpenAI-compatible endpoint for a supported LLM on their own GPUs.",
    quizPrompt: "Which NVIDIA layer gives a production microservice API for optimized model inference?"
  },
  {
    name: "Nemotron models",
    description: "NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Model selection",
    filters: ["GenAI LLMs", "Agentic AI", "Training and customization", "Agent orchestration"],
    use: "Use when the scenario asks which model family to choose for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.",
    avoid: "Choose NIM/Triton for serving, Retriever for RAG, Nsight/TensorRT-LLM for performance, and Framework/Customizer when the question is about changing weights.",
    traps: "Answering with a model family when the constraint is actually deployment packaging, retrieval quality, scheduling, or GPU profiling.",
    scenario: "An agent needs a reasoning-capable model and a reward model for preference evaluation.",
    quizPrompt: "When is Nemotron the model choice rather than the serving stack?"
  },
  {
    name: "Triton Inference Server",
    description: "Production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.",
    exams: ["GenAI LLMs"],
    lifecycle: "Serving and deployment",
    filters: ["GenAI LLMs", "Serving and deployment", "Inference optimization"],
    use: "Use when the scenario is about multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.",
    avoid: "Choose NIM for the fastest supported model microservice, TensorRT-LLM for LLM engine optimization, and Framework/Customizer for model development.",
    traps: "Increasing instance count blindly. More instances on one GPU can worsen p99 latency through contention.",
    scenario: "A pipeline needs preprocessing, TensorRT model inference, and postprocessing behind one endpoint.",
    quizPrompt: "Which service composes preprocessing, inference, and postprocessing as an ensemble?"
  },
  {
    name: "TensorRT-LLM",
    description: "Optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.",
    exams: ["GenAI LLMs"],
    lifecycle: "Inference optimization",
    filters: ["GenAI LLMs", "Inference optimization", "Serving and deployment"],
    use: "Use when the scenario asks about building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.",
    avoid: "Choose Curator for data prep, Retriever for RAG, Evaluator for quality scoring, Agent Toolkit for workflow orchestration, and Guardrails for runtime policy.",
    traps: "Using weight quantization to solve a long-context KV-cache bottleneck. Those are different memory terms.",
    scenario: "A 70B chat model needs high concurrency with variable-length prompts and low TTFT.",
    quizPrompt: "What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching?"
  },
  {
    name: "NGC",
    description: "NVIDIA catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Serving and deployment",
    filters: ["GenAI LLMs", "Agentic AI", "Serving and deployment"],
    use: "Use when the scenario references pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.",
    avoid: "Choose NIM/Triton to run inference, Framework/Customizer to train or tune, Evaluator to score quality, and Agent Toolkit to orchestrate workflows.",
    traps: "Treating NGC as an NVIDIA cloud runtime. NGC is broader and more generic: the catalog/registry where NIM containers, model artifacts, Helm charts, and SDKs live; NIM is the service you deploy and call.",
    scenario: "An air-gapped enterprise needs approved containers and model artifacts staged from an NVIDIA registry.",
    quizPrompt: "What NVIDIA service is the catalog/registry for containers and model assets?"
  },
  {
    name: "Nsight Systems",
    description: "System-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Monitoring and profiling",
    filters: ["GenAI LLMs", "Agentic AI", "Monitoring and profiling", "Inference optimization"],
    use: "Use first when the question asks where time is going across CPU, GPU, launches, waits, and communication.",
    avoid: "Choose Nsight Compute after Systems identifies a hot kernel and the question asks for occupancy, warp stalls, memory bandwidth, or roofline detail.",
    traps: "Jumping to kernel optimization when the real issue is CPU launch overhead or synchronization gaps.",
    scenario: "An inference trace has long gaps between CUDA kernels and low GPU occupancy.",
    quizPrompt: "Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead?"
  },
  {
    name: "Nsight Compute",
    description: "CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.",
    exams: ["GenAI LLMs"],
    lifecycle: "Monitoring and profiling",
    filters: ["GenAI LLMs", "Monitoring and profiling", "Inference optimization"],
    use: "Use after a specific kernel is identified and the question asks why that kernel is memory-bound, compute-bound, or inefficient.",
    avoid: "Choose Nsight Systems first for whole-application queueing, CPU stalls, data movement, service waits, or distributed timelines before kernel drilldown.",
    traps: "Using Nsight Compute before knowing which kernel matters. Start with Nsight Systems for the timeline.",
    scenario: "A fused attention kernel has low achieved occupancy and high memory stalls.",
    quizPrompt: "Which profiler diagnoses detailed CUDA kernel bottlenecks?"
  },
  {
    name: "NCCL",
    description: "NVIDIA collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.",
    exams: ["GenAI LLMs"],
    lifecycle: "Training and customization",
    filters: ["GenAI LLMs", "Training and customization", "Monitoring and profiling"],
    use: "Use when the scenario is about distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.",
    avoid: "Choose NIM/Triton for serving APIs, RAPIDS/Curator for data pipelines, TensorRT/TensorRT-LLM for inference optimization, and Agent Toolkit for application orchestration.",
    traps: "Seeing multi-GPU and picking NCCL for every scale problem. NCCL is specifically the collective-communication layer, not the scheduler, model server, or profiler.",
    scenario: "A 64-node training job hangs intermittently during gradient all-reduce.",
    quizPrompt: "Which library is central to multi-GPU collective communication?"
  },
  {
    name: "RAPIDS",
    description: "GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Data preparation",
    filters: ["GenAI LLMs", "Agentic AI", "Training and customization", "RAG and retrieval"],
    use: "Use when the scenario is about accelerating pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.",
    avoid: "Choose NIM/Triton for LLM serving, TensorRT/TensorRT-LLM for engine optimization, Guardrails for runtime policy, and Agent Toolkit for workflow orchestration.",
    traps: "Seeing GPU acceleration and picking RAPIDS for decode throughput. RAPIDS accelerates dataframe, graph, and classical ML/data pipelines; it does not make an LLM token scheduler faster.",
    scenario: "A data science team needs to clean and join large tabular datasets before training or indexing.",
    quizPrompt: "Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs?"
  },
  {
    name: "NeMo Curator",
    description: "Pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Data preparation",
    filters: ["GenAI LLMs", "Agentic AI", "Data preparation", "Training and customization"],
    use: "Choose it when raw data must become training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.",
    avoid: "Choose Retriever when documents feed live RAG; choose Framework/Customizer when curated data is ready for training; choose NIM/Triton when the resulting model must be served.",
    traps: "Curator and Retriever can both touch documents, but Curator emits curated datasets and duplicate IDs before training; Retriever emits chunks, vectors, ranked passages, and citations at query time.",
    scenario: "Raw JSONL/Parquet/image/video/audio corpus -> Pipeline -> ScoreFilter/classifiers -> exact or fuzzy duplicate IDs -> curated output.",
    quizPrompt: "Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation?"
  },
  {
    name: "NeMo Customizer",
    description: "Microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Training and customization",
    filters: ["GenAI LLMs", "Agentic AI", "Training and customization"],
    use: "Use when the scenario is API-driven LoRA/PEFT customization without standing up a full training stack.",
    avoid: "Choose NeMo Framework for full pretraining, custom training recipes, or low-level training research; choose NIM/Triton when the model is ready to serve.",
    traps: "Treating a managed PEFT customization service as a replacement for NeMo Framework training or NIM serving.",
    scenario: "An enterprise wants a hosted service that fine-tunes a base model on domain instructions via API.",
    quizPrompt: "Which NVIDIA microservice provides API-driven PEFT customization?"
  },
  {
    name: "NeMo Evaluator",
    description: "Microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Evaluation",
    filters: ["GenAI LLMs", "Agentic AI", "Monitoring and profiling"],
    use: "Use when the scenario asks about standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.",
    avoid: "Choose NIM/Triton for serving, Nsight for GPU/runtime profiling, Guardrails for runtime policy enforcement, and Curator for dataset preparation.",
    traps: "Treating evaluation as a dashboard or profiler. Evaluator owns repeatable quality/regression scoring; observability and Nsight explain live behavior and performance.",
    scenario: "A team needs reproducible LLM benchmarks plus LLM-as-judge scoring before each release.",
    quizPrompt: "Which NVIDIA microservice runs LLM evaluation pipelines and judge models?"
  },
  {
    name: "NIM Operator",
    description: "Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Serving and deployment",
    filters: ["GenAI LLMs", "Agentic AI", "Serving and deployment"],
    use: "Use when the scenario is K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.",
    avoid: "Choose plain NIM for a single container endpoint, Triton for general model serving, and the Operator when Kubernetes lifecycle management is the actual requirement.",
    traps: "Choosing Operator when a single NIM container is enough, or vice versa.",
    scenario: "An ops team must autoscale NIM endpoints with version pinning and zero-downtime upgrades on K8s.",
    quizPrompt: "Which NVIDIA component owns NIM lifecycle on Kubernetes?"
  },
  {
    name: "Dynamo (Triton Dynamo)",
    description: "Distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Serving and deployment",
    filters: ["GenAI LLMs", "Agentic AI", "Serving and deployment", "Inference optimization"],
    use: "Use when scenarios involve disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.",
    avoid: "Choose a basic NIM or Triton deployment for a simple single-node endpoint; choose TensorRT-LLM when the question is engine-level LLM optimization.",
    traps: "Confusing Dynamo (multi-node LLM serving orchestration) with TensorRT-LLM (engine-level optimization).",
    scenario: "A team must serve a 405B model with disaggregated prefill/decode across many H100 nodes.",
    quizPrompt: "Which NVIDIA stack handles disaggregated multi-node LLM inference?"
  },
];

export const studySections = [
  {
    exam: "Agentic AI",
    name: "Agent Architecture and Design",
    weight: 15,
    description: "Design agent roles, reasoning loops, communication patterns, tool boundaries, and multi-agent systems.",
    keyIdeas: ["agent vs workflow", "single-agent vs multi-agent", "planner/executor/critic roles", "shared state and handoff"],
    use: "Study this when questions ask what architecture fits a task, how agents coordinate, or when autonomy is too risky.",
    traps: "Do not choose multi-agent design just because it sounds advanced; it adds latency, cost, and debugging complexity.",
    scenario: "A compliance-heavy workflow is predictable and high-risk. A deterministic workflow with explicit approval may beat a free-form autonomous agent."
  },
  {
    exam: "Agentic AI",
    name: "Agent Development",
    weight: 15,
    description: "Build agents that use prompts, APIs, tools, structured outputs, orchestration frameworks, and error handling.",
    keyIdeas: ["tool schemas", "tool selection", "parallel tool calls", "retry and recovery", "validation"],
    use: "Study this when questions involve implementing reliable tool use or controlling agent behavior through code and schemas.",
    traps: "Prompting alone is not enough for tool safety; validate tool names, parameters, permissions, and outputs.",
    scenario: "An agent repeatedly calls the wrong API because tool descriptions are ambiguous and no runtime validation exists."
  },
  {
    exam: "Agentic AI",
    name: "Evaluation and Tuning",
    weight: 13,
    description: "Evaluate full agent trajectories, tool correctness, task success, latency, cost, safety, and feedback loops.",
    keyIdeas: ["trajectory evaluation", "tool-call success", "LLM-as-judge bias", "human review", "regression suites"],
    use: "Study this when final-answer metrics are insufficient and the agent's steps matter.",
    traps: "A correct final answer can hide unsafe or inefficient tool behavior. Evaluate the trajectory, not only the response.",
    scenario: "An agent answers correctly but calls a private tool unnecessarily, creating an audit and privacy risk."
  },
  {
    exam: "Agentic AI",
    name: "Deployment and Scaling",
    weight: 13,
    description: "Deploy agent systems with model endpoints, tools, memory, RAG, queues, scaling, reliability, and rollout controls.",
    keyIdeas: ["workflow latency", "tool bottlenecks", "service scaling", "canary rollout", "fallback and retries"],
    use: "Study this when questions ask how to productionize a multi-step agent workflow.",
    traps: "Scaling the LLM alone may not fix latency if sequential tools or retrieval calls dominate.",
    scenario: "Every request calls three tools sequentially; parallelizing independent calls and caching stable lookups improves latency."
  },
  {
    exam: "Agentic AI",
    name: "Cognition, Planning, and Memory",
    weight: 10,
    description: "Understand ReAct, plan-and-execute, reflection, task decomposition, short-term memory, and long-term memory.",
    keyIdeas: ["ReAct", "plan-and-execute", "reflection", "episodic memory", "semantic memory"],
    use: "Study this when the agent must reason across steps, remember user preferences, or recover from bad plans.",
    traps: "Memory is not automatically trustworthy. Store only useful, permission-safe facts and retrieve them with relevance checks.",
    scenario: "A support agent keeps repeating a failed plan because it does not record prior tool results in working memory."
  },
  {
    exam: "Agentic AI",
    name: "Knowledge Integration and Data Handling",
    weight: 10,
    description: "Use RAG, vector search, knowledge graphs, structured data, access control, and freshness in agent systems.",
    keyIdeas: ["RAG", "hybrid retrieval", "reranking", "access metadata", "knowledge graphs", "freshness"],
    use: "Study this when an agent needs proprietary or changing knowledge.",
    traps: "Never retrieve documents the user cannot access and hope guardrails will hide them later.",
    scenario: "A tenant-specific agent must filter retrieval by user permissions before chunks enter context."
  },
  {
    exam: "Agentic AI",
    name: "NVIDIA Platform Implementation",
    weight: 7,
    description: "Map agentic workloads to NVIDIA services such as NIM, NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever, Triton, and TensorRT-LLM.",
    keyIdeas: ["NIM", "NeMo Agent Toolkit", "NeMo Guardrails", "NeMo Retriever", "Triton", "TensorRT-LLM"],
    use: "Study this when the question asks which NVIDIA component fits a production agent requirement.",
    traps: "Do not answer with a model when the question asks for orchestration, serving, retrieval, or guardrails.",
    scenario: "A team wants to wrap existing LangChain agents with NVIDIA workflow evaluation and observability."
  },
  {
    exam: "Agentic AI",
    name: "Run, Monitor, and Maintain",
    weight: 5,
    description: "Operate live agents with tracing, tool-call monitoring, drift detection, cost dashboards, and incident response.",
    keyIdeas: ["traces", "tool latency", "route drift", "cost per task", "failure loops", "maintenance"],
    use: "Study this when questions ask what to monitor after deployment.",
    traps: "HTTP 200 does not mean the agent succeeded. Track task success, tool success, and trajectory failures.",
    scenario: "A customer agent is online but silently fails because its CRM tool calls return empty results."
  },
  {
    exam: "Agentic AI",
    name: "Safety, Ethics, and Compliance",
    weight: 5,
    description: "Control prompt injection, tool misuse, data leakage, privacy, auditability, and responsible AI behavior.",
    keyIdeas: ["prompt injection", "least privilege", "PII", "audit logs", "guardrails", "policy enforcement"],
    use: "Study this when the agent can act on external systems or handle sensitive data.",
    traps: "The riskiest action is often the tool call, not the generated text.",
    scenario: "A user manipulates an agent into sending an unauthorized refund request through an internal tool."
  },
  {
    exam: "Agentic AI",
    name: "Human-AI Interaction and Oversight",
    weight: 5,
    description: "Design human-in-the-loop approvals, escalation, UI feedback, review queues, and human-on-the-loop monitoring.",
    keyIdeas: ["approval gates", "escalation", "review load", "feedback capture", "operator UX"],
    use: "Study this when automation must be balanced with human judgment.",
    traps: "Putting every action behind human approval can destroy usability and overload reviewers.",
    scenario: "Only high-risk tool actions require approval; low-risk responses are sampled for review."
  },
  {
    exam: "GenAI LLMs",
    name: "LLM Architecture",
    weight: 6,
    description: "Understand transformer structures and mechanisms that drive LLM behavior and cost.",
    keyIdeas: ["attention", "decoder-only", "RoPE/ALiBi", "MoE", "KV cache"],
    use: "Study this when a question asks why an architecture behaves differently under context, latency, or scaling constraints.",
    traps: "Do not answer with a deployment tool when the issue is model structure or attention behavior.",
    scenario: "A long-context model slows sharply because attention and KV-cache behavior dominate the request."
  },
  {
    exam: "GenAI LLMs",
    name: "Prompt Engineering",
    weight: 13,
    description: "Adapt LLM behavior through prompt structure, examples, reasoning patterns, and output control.",
    keyIdeas: ["zero-shot", "few-shot", "chain-of-thought", "structured output", "RAG prompt design"],
    use: "Study this when the task can be improved without changing model weights.",
    traps: "Prompting cannot reliably fix missing private knowledge, unauthorized retrieval, or unsafe tool design.",
    scenario: "A support bot needs JSON answers with citations and abstention when evidence is missing."
  },
  {
    exam: "GenAI LLMs",
    name: "Data Preparation",
    weight: 9,
    description: "Prepare, clean, curate, tokenize, and organize data for pretraining, tuning, or RAG.",
    keyIdeas: ["deduplication", "tokenization", "quality filtering", "data mixing", "PII/bias checks"],
    use: "Study this when data quality, contamination, vocabulary, or corpus construction is central.",
    traps: "Bad data cannot be rescued by a bigger model or a more aggressive training schedule.",
    scenario: "Fine-tuning improves examples from one source but fails on held-out tasks due to duplicated and biased data."
  },
  {
    exam: "GenAI LLMs",
    name: "Model Optimization",
    weight: 17,
    description: "Optimize LLM inference and memory while preserving quality.",
    keyIdeas: ["quantization", "TensorRT-LLM", "KV cache", "continuous batching", "speculative decoding"],
    use: "Study this when constraints mention latency, throughput, memory, cost, or accuracy tolerance.",
    traps: "Weight quantization does not solve every memory problem; long-context serving is often KV-cache-bound.",
    scenario: "A 70B model needs high concurrency with mixed prompt lengths under a TTFT SLA."
  },
  {
    exam: "GenAI LLMs",
    name: "Fine-Tuning",
    weight: 13,
    description: "Customize model behavior with SFT, PEFT, LoRA/QLoRA, adapters, DPO/RLHF, and tuning controls.",
    keyIdeas: ["SFT", "PEFT", "LoRA/QLoRA", "DPO/RLHF", "catastrophic forgetting"],
    use: "Study this when examples, domain behavior, style, or preference data are central.",
    traps: "Fine-tuning is not the right solution for rapidly changing facts; use RAG.",
    scenario: "A legal assistant improves domain tone but loses general instruction-following after narrow SFT."
  },
  {
    exam: "GenAI LLMs",
    name: "Evaluation",
    weight: 7,
    description: "Assess LLM quality with quantitative metrics, qualitative review, benchmarking, and error analysis.",
    keyIdeas: ["perplexity", "BLEU/ROUGE", "faithfulness", "LLM-as-judge", "human evaluation"],
    use: "Study this when comparing models, prompts, RAG variants, or tuning runs.",
    traps: "A single automatic metric is rarely enough for open-ended generation or grounded RAG.",
    scenario: "A model improves ROUGE but produces unsupported claims in a source-grounded workflow."
  },
  {
    exam: "GenAI LLMs",
    name: "GPU Acceleration and Optimization",
    weight: 14,
    description: "Scale and optimize LLM training/inference on GPU hardware.",
    keyIdeas: ["FSDP/ZeRO", "tensor parallelism", "pipeline parallelism", "NCCL", "Nsight"],
    use: "Study this when scaling, OOMs, collectives, GPU utilization, or memory layout appear in a scenario.",
    traps: "More GPUs can be slower if communication dominates.",
    scenario: "Training scales well inside a node but poorly across nodes due to all-reduce traffic."
  },
  {
    exam: "GenAI LLMs",
    name: "Model Deployment",
    weight: 9,
    description: "Deploy LLMs with containerized serving, orchestration, model APIs, and scalable inference paths.",
    keyIdeas: ["NIM", "Triton", "Kubernetes", "dynamic batching", "canary rollout"],
    use: "Study this when the question asks how to expose, scale, update, or operate an inference endpoint.",
    traps: "Deployment packaging is not the same as model optimization or fine-tuning.",
    scenario: "A team needs a self-hosted endpoint with health checks, batching, and predictable rollout behavior."
  },
  {
    exam: "GenAI LLMs",
    name: "Production Monitoring and Reliability",
    weight: 7,
    description: "Monitor quality, latency, drift, cost, errors, and reliability after release.",
    keyIdeas: ["drift", "SLA", "logs", "quality regression", "versioning"],
    use: "Study this when scenarios involve live systems, alerts, anomaly diagnosis, or model lifecycle operations.",
    traps: "Infrastructure uptime does not prove answer quality or grounding.",
    scenario: "A release lowers p99 latency but increases hallucination and refusal rates."
  },
  {
    exam: "GenAI LLMs",
    name: "Safety, Ethics, and Compliance",
    weight: 5,
    description: "Apply responsible AI controls across bias, fairness, PII, guardrails, red-teaming, and policy monitoring.",
    keyIdeas: ["bias", "fairness", "PII", "guardrails", "red-teaming"],
    use: "Study this when the model handles sensitive data, regulated workflows, or user-facing policy decisions.",
    traps: "Safety cannot be patched only at the final response if sensitive data already entered context.",
    scenario: "A RAG assistant must avoid leaking tenant data while still answering authorized questions."
  }
];

const serviceDeepDive = {
  "NeMo Framework": {
    studyNotes: [
      "Think of this as the customization/training layer: SFT, PEFT, continued pretraining, alignment, evaluation recipes, and scalable distributed model development.",
      "For LLMs, connect it to mixed precision, tensor/pipeline/data parallelism, activation recomputation, FlashAttention, sequence packing, quantization-aware workflows, and checkpoint management.",
      "Exam scenarios usually contrast NeMo Framework with NIM: NeMo changes model behavior or training artifacts; NIM packages optimized inference behind APIs."
    ],
    mustKnow: ["LoRA/QLoRA vs full fine-tuning", "activation recomputation memory trade-off", "distributed optimizer/FSDP", "data curation before tuning"],
    examSignals: ["custom model behavior", "domain adaptation", "training recipe", "large-scale checkpoint", "PEFT"],
    handsOn: ["Sketch the path from base checkpoint -> curated data -> PEFT/SFT -> evaluation -> deployment artifact."],
    relatedServices: ["NIM for serving", "NGC for containers/checkpoints", "TensorRT-LLM for inference optimization"]
  },
  "NeMo Agent Toolkit": {
    studyNotes: [
      "Start from the YAML surface: llms chooses providers such as NIM/OpenAI; functions and function_groups define callable work; workflow chooses the agent or executor pattern.",
      "Pattern choice is the top study target: tool-calling is for clean structured calls; ReAct is for observation-dependent loops; reasoning_agent and rewoo_agent plan first; router agents pick one branch; sequential executors chain known steps; parallel executors fan out independent work; auto_memory_agent wraps another agent with memory.",
      "MCP is not the agent. It is a tool/context protocol. Agent Toolkit can consume MCP tools as functions or publish workflows/tools through MCP server runtimes.",
      "Use it beside existing LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK, or custom Python agents when the value is instrumentation, workflow configuration, evaluation, and deployment around them."
    ],
    mustKnow: ["nvidia-nat package and nat CLI", "functions / function_groups / llms / retrievers / memory / workflow YAML", "tool_calling_agent / react_agent / reasoning_agent / rewoo_agent", "router_agent / parallel_executor / sequential_executor", "auto_memory_agent memory wrapper", "MCP client/server boundary", "nat eval for workflow evaluation"],
    examSignals: ["workflow YAML", "tool_calling_agent structured tool schema", "react_agent reason-action-observation loop", "reasoning_agent augmented_fn planning", "rewoo_agent plan/evidence/solution flow", "router_agent branches", "parallel_executor fan-out/fan-in", "sequential_executor deterministic chain", "auto_memory_agent memory wrapper", "MCP tools as functions", "existing framework needs traces/evals"],
    handsOn: ["Draw a router_agent -> specialist react_agent -> Retriever function -> Guardrails check -> final response workflow and mark which pieces are Toolkit-owned versus neighboring services."],
    relatedServices: ["NeMo Guardrails", "NeMo Retriever", "NIM", "MCP / tool gateway", "LangChain/LlamaIndex/CrewAI", "Nemotron models"]
  },
  "NeMo Guardrails": {
    studyNotes: [
      "Use this for programmable policy around LLM and agent behavior: input checks, output checks, dialog rails, topic control, tool restrictions, and response moderation.",
      "Guardrails reduce unsafe behavior but do not replace identity, authorization, tenant filtering, audit logging, or secure tool design.",
      "In RAG and agents, the most important boundary is often before context/tool execution: do not retrieve or call tools the user is not authorized to access."
    ],
    mustKnow: ["input rails", "output rails", "dialog rails", "tool/action checks", "prompt injection mitigation"],
    examSignals: ["unsafe request", "policy refusal", "tool misuse", "content moderation", "prompt injection"],
    handsOn: ["List which checks run before retrieval, before tool calls, before generation, and after generation."],
    relatedServices: ["NIM safety models", "NeMo Agent Toolkit", "NeMo Retriever"]
  },
  "NeMo Retriever": {
    studyNotes: [
      "Treat NeMo Retriever as a family: Library/extraction for files, Embedding NIM for vectors, search/indexing for first-stage candidates, and Reranking NIM for precision.",
      "Recognize concrete model cues: llama-nemotron-embed-* for embeddings, llama-nemotron-rerank-* for reranking, and nemotron OCR/page/table/graphic models for extraction.",
      "Retriever quality is a system property: extraction, chunking, metadata, access filtering, embedding model, vector store, hybrid search, reranking, and citation grounding all matter."
    ],
    mustKnow: ["NeMo Retriever Library / nv-ingest", "Embedding NIM /v1/embeddings", "Reranking NIM /v1/ranking", "hybrid search", "metadata pre-filtering", "multimodal document parsing"],
    examSignals: ["proprietary docs", "PDF tables/charts/OCR", "embed documents or queries", "rerank citations", "tenant filtering"],
    handsOn: ["Trace a document from ingestion -> extraction -> chunks -> embeddings -> index -> retrieval -> rerank -> answer."],
    relatedServices: ["NIM embedding/reranking microservices", "NeMo Guardrails", "LanceDB/Milvus/cuVS", "NeMo Curator"]
  },
  "NeMo Curator": {
    studyNotes: [
      "Think of Curator as concrete pipeline code, not just a vague data-cleaning box: Pipeline plus reader/filter/classifier/dedup/writer stages.",
      "Recognize text API cues such as JsonlReader, JsonlWriter, ScoreFilter, WordCountFilter, NonAlphaNumericFilter, QualityClassifier, DomainClassifier, AegisClassifier, and FineWebEduClassifier.",
      "Dedup is a workflow pair: ExactDeduplicationWorkflow writes ExactDuplicateIds, FuzzyDeduplicationWorkflow writes FuzzyDuplicateIds, and TextDuplicatesRemovalWorkflow applies those IDs to the original corpus.",
      "Ask what the output feeds. If it feeds training/tuning/eval data, think Curator. If it feeds a live answer with retrieved passages, think Retriever."
    ],
    mustKnow: ["Pipeline.add_stage + pipeline.run", "JsonlReader / JsonlWriter", "ScoreFilter and heuristic filters", "Quality/domain/safety/FineWeb classifiers", "ExactDeduplicationWorkflow", "FuzzyDeduplicationWorkflow", "TextDuplicatesRemovalWorkflow"],
    examSignals: ["training corpus cleanup", "ScoreFilter", "QualityClassifier", "MD5 exact dedup", "MinHash/LSH fuzzy dedup", "Cosmos-Embed1 video embeddings", "curated output before training", "live RAG is Retriever, not Curator"],
    handsOn: ["Sketch a Curator pipeline from raw JSONL -> filters/classifiers -> dedup ID workflow -> duplicate removal -> curated output."],
    relatedServices: ["NeMo Framework", "NeMo Customizer", "NeMo Retriever", "RAPIDS/cuDF/Ray", "NGC containers"]
  },
  "NIM": {
    studyNotes: [
      "NIM is the production microservice layer for optimized foundation-model inference with supported containers, APIs, profiles, and deployment patterns.",
      "Choose NIM when the scenario wants a model endpoint quickly with production runtime behavior, not when it asks how to train or customize model weights.",
      "For exam questions, separate model choice from serving packaging: Nemotron is a model family; NIM is how a supported model is served."
    ],
    mustKnow: ["OpenAI-compatible APIs", "model profiles", "container/Kubernetes deployment", "security updates", "NIM Operator"],
    examSignals: ["production endpoint", "API serving", "containerized model", "self-hosted inference", "AI Enterprise"],
    handsOn: ["Write the difference between model, runtime, container, endpoint, and client API."],
    relatedServices: ["TensorRT-LLM", "Triton", "NGC", "NeMo Retriever"]
  },
  "TensorRT-LLM": {
    studyNotes: [
      "This is the LLM inference engine optimization layer: kernels, quantization, KV-cache handling, batching, and serving performance for generation workloads.",
      "Use it when the bottleneck is decode throughput, TTFT, GPU memory, long context, or concurrency rather than application orchestration.",
      "Decision trap: weight quantization reduces model-weight memory, but long-context serving can be dominated by KV-cache memory."
    ],
    mustKnow: ["paged KV cache", "in-flight batching", "attention kernels", "quantization", "tensor parallelism"],
    examSignals: ["TTFT", "tokens/sec", "concurrency", "long context", "GPU memory during decode"],
    handsOn: ["Classify a latency issue as prefill, decode, queueing, KV cache, or communication."],
    relatedServices: ["NIM", "Triton", "Nsight Systems", "Nsight Compute"]
  },
  "Triton Inference Server": {
    studyNotes: [
      "Triton is a general production inference server for many frameworks and model formats, with model repositories, HTTP/gRPC APIs, dynamic batching, ensembles, and metrics.",
      "Use it for multi-model or pipeline serving, especially when preprocessing, model inference, and postprocessing must be deployed as one endpoint.",
      "For pure LLM optimization, TensorRT-LLM/NIM may be the closer answer; for general multi-framework serving, Triton is often the answer."
    ],
    mustKnow: ["dynamic batching", "ensemble models", "model repository", "concurrent model execution", "readiness/liveness/metrics"],
    examSignals: ["multi-framework serving", "pre/postprocessing pipeline", "HTTP/gRPC endpoint", "dynamic batching"],
    handsOn: ["Map an ensemble with preprocess -> model -> postprocess and identify where batching is configured."],
    relatedServices: ["TensorRT-LLM", "NIM", "NGC"]
  },
  "Nsight Systems": {
    studyNotes: [
      "Use Nsight Systems first for whole-application timelines: CPU/GPU overlap, CUDA API calls, kernel launch gaps, synchronization, I/O, and communication stalls.",
      "It answers where time is going across the system. It does not replace kernel-level analysis once a specific kernel is identified."
    ],
    mustKnow: ["timeline", "CUDA API gaps", "CPU stalls", "GPU idle time", "distributed trace clues"],
    examSignals: ["low GPU utilization", "long gaps", "launch overhead", "synchronization"],
    handsOn: ["Given a trace, decide whether the issue is CPU launch overhead, kernel runtime, transfer, or synchronization."],
    relatedServices: ["Nsight Compute", "NCCL", "TensorRT-LLM"]
  },
  "Nsight Compute": {
    studyNotes: [
      "Use Nsight Compute after you know which CUDA kernel matters. It provides kernel metrics such as occupancy, memory throughput, warp behavior, and instruction efficiency.",
      "Decision trap: do not start here when the problem is whole-pipeline queueing, CPU stalls, or network communication."
    ],
    mustKnow: ["occupancy", "memory-bound vs compute-bound", "warp stalls", "SM utilization"],
    examSignals: ["specific kernel", "low occupancy", "memory stalls", "kernel bottleneck"],
    handsOn: ["Explain why a kernel can have high GPU time but low achieved occupancy."],
    relatedServices: ["Nsight Systems", "CUDA", "TensorRT-LLM"]
  },
  "NCCL": {
    studyNotes: [
      "NCCL is the collective communication library behind many multi-GPU and multi-node training patterns.",
      "Use it when the scenario mentions all-reduce, all-gather, reduce-scatter, tensor parallel communication, scaling efficiency, or distributed hangs."
    ],
    mustKnow: ["all-reduce", "all-gather", "reduce-scatter", "topology", "communication/computation overlap"],
    examSignals: ["multi-node scaling", "collective hang", "gradient synchronization", "tensor parallel"],
    handsOn: ["Estimate whether adding GPUs helps when communication grows faster than compute savings."],
    relatedServices: ["NeMo Framework", "Nsight Systems", "CUDA"]
  }
};

const sectionDeepDive = {
  "Agent Architecture and Design": {
    studyNotes: [
      "Know the boundary between deterministic workflows and autonomous agents. Use agents when the path depends on reasoning, tool feedback, or changing context; use workflows when the process is predictable and high-risk.",
      "Multi-agent designs add specialization but also latency, state synchronization, and debugging complexity. The exam often rewards the simplest reliable architecture.",
      "Separate roles such as planner, executor, critic, router, and memory manager only when each role reduces real complexity."
    ],
    mustKnow: ["agent vs workflow", "single vs multi-agent", "planner/executor/critic", "routing", "shared state"],
    examSignals: ["coordination", "handoff", "agent roles", "autonomy level", "architecture choice"],
    handsOn: ["Draw a one-agent solution and a multi-agent solution for the same task; mark why one is safer."]
  },
  "Agent Development": {
    studyNotes: [
      "Reliable agents are built with explicit tool contracts, structured outputs, validation, retries, and error handling. Prompt wording alone is not a control plane.",
      "Tool descriptions should be specific enough for selection, but runtime code must still validate parameters, permissions, and returned data.",
      "Parallel tool calls help only when calls are independent; dependent steps still require sequencing and state updates."
    ],
    mustKnow: ["tool schemas", "structured output", "validation", "retry policy", "parallel vs sequential calls"],
    examSignals: ["wrong tool call", "ambiguous API", "malformed JSON", "retry loop", "tool timeout"],
    handsOn: ["Write a tool schema and list validation checks before execution."]
  },
  "Evaluation and Tuning": {
    studyNotes: [
      "Evaluate trajectories, not just final answers. A final answer can be correct while the agent used an unsafe tool, leaked data, or took an expensive path.",
      "Use task success, tool-call accuracy, groundedness, safety, cost, latency, and regression suites. Human review is important for ambiguous tasks.",
      "LLM-as-judge can help scale evaluation but can be biased; calibrate it against human labels and fixed rubrics."
    ],
    mustKnow: ["trajectory evaluation", "tool-call success", "groundedness", "LLM-as-judge bias", "regression suite"],
    examSignals: ["agent benchmark", "unsafe intermediate step", "cost spike", "judge bias", "human review"],
    handsOn: ["Define metrics for a support agent: final correctness, tool accuracy, policy compliance, latency, and cost."]
  },
  "Deployment and Scaling": {
    studyNotes: [
      "Agent latency is often a chain of model calls, retrieval, tools, memory, and guardrails. Scaling the LLM endpoint alone may not fix a sequential workflow.",
      "Production deployment needs canaries, fallbacks, queues, timeouts, idempotent tool actions, observability, and rollback plans.",
      "Cache stable retrieval/tool results carefully; do not cache permission-sensitive or stale answers without metadata checks."
    ],
    mustKnow: ["workflow latency", "queues", "canary rollout", "fallbacks", "timeouts", "idempotency"],
    examSignals: ["production rollout", "tool bottleneck", "SLA", "scaling", "rollback"],
    handsOn: ["Break a slow agent request into model, retrieval, tool, guardrail, and queue time."]
  },
  "Cognition, Planning, and Memory": {
    studyNotes: [
      "ReAct interleaves reasoning and acting; plan-and-execute makes a plan first; reflection critiques or repairs a plan after feedback.",
      "Short-term memory tracks current task state. Long-term memory should store useful, permission-safe facts with retrieval and expiration logic.",
      "Memory can poison future behavior if stale, unverified, or over-collected."
    ],
    mustKnow: ["ReAct", "plan-and-execute", "reflection", "working memory", "episodic/semantic memory"],
    examSignals: ["multi-step reasoning", "forgot tool result", "repeated failure", "user preference memory"],
    handsOn: ["Classify which facts belong in prompt state, temporary memory, long-term memory, or logs."]
  },
  "Knowledge Integration and Data Handling": {
    studyNotes: [
      "RAG is for changing or proprietary knowledge; fine-tuning is for behavior/style/pattern learning. The exam often tests that distinction.",
      "Permission filtering belongs before chunks enter context. Guardrails after retrieval are not a substitute for access control.",
      "Hybrid retrieval and reranking are common fixes when plain vector search misses keywords, tables, or exact identifiers."
    ],
    mustKnow: ["RAG vs fine-tuning", "metadata filtering", "hybrid search", "reranking", "freshness"],
    examSignals: ["private docs", "tenant isolation", "outdated facts", "citations", "structured data"],
    handsOn: ["Design a retrieval path with ACL filtering, chunking, embedding, hybrid search, rerank, and citation validation."]
  },
  "NVIDIA Platform Implementation": {
    studyNotes: [
      "Map each NVIDIA component to lifecycle: NeMo Framework customizes, NeMo Agent Toolkit orchestrates, NeMo Retriever retrieves, NeMo Guardrails governs, NIM serves, TensorRT-LLM optimizes LLM inference, Triton serves multi-framework pipelines.",
      "When a question says 'which NVIDIA service', identify the lifecycle phase before choosing the product name."
    ],
    mustKnow: ["NIM", "NeMo Agent Toolkit", "NeMo Guardrails", "NeMo Retriever", "TensorRT-LLM", "Triton"],
    examSignals: ["NVIDIA component selection", "agent workflow", "RAG", "serving", "guardrails"],
    handsOn: ["Make a one-line purpose statement for every NVIDIA service in the Study Services tab."]
  },
  "Run, Monitor, and Maintain": {
    studyNotes: [
      "Monitor task success and trajectory health, not just HTTP status. An agent can return 200 while silently failing a tool call.",
      "Track route drift, tool latency, retrieval quality, cost per completed task, loop frequency, escalation rate, and safety blocks.",
      "Incident response should include trace replay, prompt/tool versioning, rollback, and post-incident regression tests."
    ],
    mustKnow: ["tracing", "tool success", "cost per task", "drift", "incident response"],
    examSignals: ["live failure", "empty tool result", "route drift", "cost dashboard", "trace"],
    handsOn: ["Define dashboard tiles for an agent after launch."]
  },
  "Safety, Ethics, and Compliance": {
    studyNotes: [
      "The riskiest action is often a tool call, not a sentence. Apply least privilege, approval gates, audit logs, and policy checks around actions.",
      "Prompt injection can target retrieval content, user messages, or tool outputs. Treat external content as untrusted.",
      "Compliance questions often require layered controls: access filtering, guardrails, logging, human review, and data retention rules."
    ],
    mustKnow: ["prompt injection", "least privilege", "PII", "audit logs", "approval gates"],
    examSignals: ["sensitive data", "external instructions", "unauthorized tool", "compliance", "audit"],
    handsOn: ["Write a policy for which tool calls require human approval."]
  },
  "LLM Architecture": {
    studyNotes: [
      "Anchor every architecture question in the transformer stack: tokenization -> embeddings -> attention/MLP blocks -> normalization -> output head.",
      "Attention variants change memory and latency. MQA/GQA reduce KV-cache pressure compared with full multi-head attention; MoE changes active parameters and routing behavior.",
      "Architecture answers are usually about mechanism, not which NVIDIA product to deploy."
    ],
    mustKnow: ["decoder-only vs encoder-decoder", "RoPE/ALiBi", "MHA/MQA/GQA", "MoE routing", "KV cache"],
    examSignals: ["context length", "attention memory", "architecture trade-off", "scaling law", "MoE"],
    handsOn: ["Explain why long-context decode creates KV-cache memory pressure even when model weights are quantized."]
  },
  "Prompt Engineering": {
    studyNotes: [
      "Use prompt engineering for task framing, output contracts, examples, reasoning structure, abstention rules, and citation requirements.",
      "RAG prompts must bind answers to retrieved evidence and define what to do when evidence is missing or contradictory.",
      "If the required knowledge changes frequently, prompt/RAG usually beats fine-tuning; if behavior or style must be learned, tuning may be needed."
    ],
    mustKnow: ["zero/few-shot", "CoT trade-offs", "structured output", "grounded prompts", "abstention"],
    examSignals: ["format control", "citations", "hallucination", "missing evidence", "no weight update"],
    handsOn: ["Write a prompt contract with role, task, context, evidence rule, output schema, and refusal rule."]
  },
  "Data Preparation": {
    studyNotes: [
      "Data prep decides what the model can learn safely: remove duplicates, contamination, low-quality examples, PII, and label noise before tuning.",
      "Tokenization and vocabulary choices affect compression, rare terms, multilingual behavior, and domain-specific terms.",
      "For RAG, data prep also includes chunking, metadata, permissions, freshness, and document parsing quality."
    ],
    mustKnow: ["deduplication", "contamination", "tokenization", "quality filtering", "data mixing"],
    examSignals: ["bad corpus", "PII", "leakage", "domain vocabulary", "chunk metadata"],
    handsOn: ["Create a checklist for a corpus before SFT: source, license, duplicates, PII, labels, splits, and evaluation holdout."]
  },
  "Model Optimization": {
    studyNotes: [
      "Separate weight memory, activation memory, and KV-cache memory. Different optimizations target different bottlenecks.",
      "Quantization improves memory/throughput but can hurt quality; batching improves throughput but can increase latency; speculative decoding helps when draft-model acceptance is high.",
      "TensorRT-LLM belongs in the optimized LLM inference path; Nsight tools help prove where the bottleneck is."
    ],
    mustKnow: ["INT8/FP8/INT4", "KV cache", "continuous batching", "speculative decoding", "TensorRT-LLM"],
    examSignals: ["TTFT", "tokens/sec", "OOM", "quality floor", "concurrency"],
    handsOn: ["Classify an optimization as reducing weights, activations, KV cache, launch overhead, or queueing."]
  },
  "Fine-Tuning": {
    studyNotes: [
      "SFT teaches behavior from labeled examples; PEFT changes a small adapter; QLoRA reduces memory for adapter tuning; DPO/RLHF uses preference data.",
      "Choose tuning for durable behavior/style/task adaptation, not fresh facts. Use RAG for facts that change or must cite sources.",
      "Watch for catastrophic forgetting, overfitting, poor data splits, and tuning that hides rather than fixes hallucination."
    ],
    mustKnow: ["SFT", "LoRA/QLoRA", "rank/alpha", "DPO/RLHF", "catastrophic forgetting"],
    examSignals: ["preference data", "domain style", "adapter", "overfitting", "behavior change"],
    handsOn: ["Decide whether a scenario needs prompt, RAG, PEFT, full SFT, or DPO."]
  },
  "Evaluation": {
    studyNotes: [
      "Match metrics to the task: perplexity for language modeling, retrieval metrics for RAG search, faithfulness/groundedness for cited answers, human rubrics for open-ended quality.",
      "LLM-as-judge is useful but must be calibrated; it can be biased by verbosity, style, or its own prior knowledge.",
      "Evaluation should include regression sets so prompt/model/deployment changes do not silently break old behavior."
    ],
    mustKnow: ["perplexity", "BLEU/ROUGE limits", "faithfulness", "LLM-as-judge", "human rubric"],
    examSignals: ["benchmark", "model comparison", "RAG faithfulness", "judge bias", "regression"],
    handsOn: ["Pair each metric with one failure it can catch and one failure it misses."]
  },
  "GPU Acceleration and Optimization": {
    studyNotes: [
      "Training scale is a balance of compute, memory, and communication. Data, tensor, pipeline, and expert parallelism solve different scaling constraints.",
      "Activation checkpointing saves memory by recomputing; FSDP/ZeRO shard states; NCCL handles collectives; Nsight Systems finds timeline/communication stalls.",
      "Do not assume more GPUs improves throughput; topology and collective volume can dominate."
    ],
    mustKnow: ["DDP/FSDP", "tensor/pipeline parallel", "activation checkpointing", "NCCL collectives", "Nsight timeline"],
    examSignals: ["OOM", "all-reduce", "low utilization", "multi-node scaling", "checkpointing"],
    handsOn: ["Identify whether a memory problem is weights, gradients, optimizer states, activations, or KV cache."]
  },
  "Model Deployment": {
    studyNotes: [
      "Deployment questions ask how to expose and operate a model: endpoint, container, health checks, batching, autoscaling, canary, rollback, and metrics.",
      "NIM is often the packaged model microservice answer; Triton is strong for multi-framework pipelines and ensembles.",
      "Deployment differs from optimization: serving a model reliably is not the same as building the fastest kernel."
    ],
    mustKnow: ["NIM", "Triton", "dynamic batching", "Kubernetes", "canary/rollback"],
    examSignals: ["endpoint", "container", "health check", "autoscale", "deployment artifact"],
    handsOn: ["Draw a deployment path from model artifact to endpoint, metrics, canary, and rollback."]
  },
  "Production Monitoring and Reliability": {
    studyNotes: [
      "Monitor both system metrics and model quality: latency, errors, throughput, token cost, refusal rate, hallucination rate, drift, and feedback.",
      "Version prompts, models, retrieval indexes, and guardrail policies so incidents can be reproduced.",
      "A reliable LLM system needs fallbacks, alerting, replay, and evaluation after every meaningful change."
    ],
    mustKnow: ["p50/p95/p99", "drift", "cost per request", "quality regression", "versioning"],
    examSignals: ["live incident", "canary", "alert", "drift", "rollback"],
    handsOn: ["Create a dashboard with one row each for reliability, cost, quality, safety, and retrieval health."]
  },
  "Human-AI Interaction and Oversight": {
    studyNotes: [
      "Human-in-the-loop means approval before selected high-risk actions. Human-on-the-loop means monitoring and intervention while the system usually runs automatically.",
      "Good oversight design samples low-risk work and gates high-risk work; gating everything can overload reviewers and make the system unusable.",
      "Feedback capture should feed evaluation and improvement, not disappear into free-text logs."
    ],
    mustKnow: ["approval gates", "escalation", "review queues", "feedback capture", "operator UX"],
    examSignals: ["human approval", "escalation", "review overload", "operator dashboard"],
    handsOn: ["Classify actions into auto-allow, sample-review, approval-required, and block."]
  }
};

for (const service of nvidiaServices) {
  Object.assign(service, serviceDeepDive[service.name] || {
    studyNotes: [
      "Know the lifecycle phase this service belongs to and contrast it with nearby NVIDIA services.",
      "For exam questions, identify whether the bottleneck is training, retrieval, safety, serving, profiling, communication, or data preparation before choosing a tool."
    ],
    mustKnow: [
      "Lifecycle: " + service.lifecycle + " — identify the bottleneck phase before picking the product",
      "Boundary: " + (service.use || "").substring(0, 100) + "...",
      "Decision trap: " + (service.traps || "")
    ],
    examSignals: [
      service.lifecycle + " bottleneck → " + service.name,
      "Adjacent-service cue: " + (service.avoid || "").substring(0, 100) + "..."
    ],
    handsOn: ["Write one scenario where this service is correct and one where it is a tempting but wrong distractor."]
  });
}

for (const section of studySections) {
  Object.assign(section, sectionDeepDive[section.name] || {
    studyNotes: [
      "Use this section as a blueprint checklist: know the vocabulary, the engineering trade-offs, and the traps that change the right design.",
      "Practice recognizing the concrete service cue before memorizing product names."
    ],
    mustKnow: section.keyIdeas,
    examSignals: section.keyIdeas,
    handsOn: ["Turn the example scenario into a one-question flashcard and a failure-mode checklist."]
  });
}

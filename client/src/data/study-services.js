export const serviceFilters = [
  "Agentic AI",
  "GenAI LLMs",
  "Data preparation",
  "Model selection",
  "Prompt engineering",
  "Foundation training",
  "Training and customization",
  "Agent orchestration",
  "Tool execution",
  "Memory and state",
  "Inference optimization",
  "Serving and deployment",
  "RAG and retrieval",
  "Safety and guardrails",
  "Human oversight",
  "Governance",
  "Monitoring and profiling",
  "Evaluation"
];

export const nvidiaAcronymExpansions = Object.freeze({
  NIM: "NVIDIA Inference Microservice",
  NGC: "NVIDIA GPU Cloud",
  NCCL: "NVIDIA Collective Communications Library",
  "TensorRT-LLM": "TensorRT for Large Language Models",
  TAO: "Train, Adapt, Optimize"
});

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
    fullName: nvidiaAcronymExpansions.NIM,
    description: "Inference microservices for deploying optimized models with production APIs and model profiles.",
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
    fullName: nvidiaAcronymExpansions["TensorRT-LLM"],
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
    fullName: nvidiaAcronymExpansions.NGC,
    description: "Catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.",
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
    fullName: nvidiaAcronymExpansions.NCCL,
    description: "Collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.",
    exams: ["GenAI LLMs", "Agentic AI"],
    lifecycle: "Training and customization",
    filters: ["GenAI LLMs", "Agentic AI", "Training and customization", "Monitoring and profiling"],
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
    fullName: "NVIDIA Inference Microservice Operator",
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

const vendorNeutralCapabilities = [
  {
    name: "Training Data Curation Pipeline",
    description: "Fit-for-purpose data curation for model learning and evaluation: corpus cleanup for training from zero, high-precision examples for tuning, protected holdouts for evaluation, and clear boundaries from RAG ingestion.",
    exams: ["Agentic AI General"],
    lifecycle: "Training-time data curation",
    group: "Data and knowledge",
    filters: ["Agentic AI General", "Data preparation", "Foundation training", "Training and customization", "Evaluation"],
    use: "Use when data will change model behavior or validate a release: pretraining corpora, continued-pretraining corpora, SFT examples, preference pairs, tool-use traces, synthetic examples, validation sets, and benchmark holdouts.",
    avoid: "Do not use this as the live RAG retriever, memory store, or permissioned document index. Those prepare runtime knowledge; this prepares learning and evaluation artifacts.",
    traps: "The word curation is overloaded. Pretraining curation, fine-tuning curation, RAG ingestion, and eval-set construction share cleanup tools, but they optimize for different outputs.",
    scenario: "A team wants to train or tune a model and must decide which curation recipe applies: web-corpus dedupe for pretraining, labeled examples for SFT, preference pairs for alignment, or protected holdouts for evaluation.",
    quizPrompt: "Which lifecycle component turns raw corpora or examples into safe learning data?",
    keywords: ["training data", "curation", "dedupe", "MinHash", "LSH", "PII", "NER", "holdout", "quality filtering"],
    studyNotes: [
      "First classify the destination: train-from-zero corpus, continued-pretraining corpus, SFT/PEFT examples, preference data, RAG knowledge, or evaluation holdout. The curation recipe changes with the destination.",
      "For training from zero or continued pretraining, optimize corpus quality at scale: source mixture, language balance, exact dedupe, MinHash/LSH near-dedupe, license safety, PII handling, contamination checks, tokenizer impact, and lineage.",
      "For fine-tuning, optimize example quality more than volume: task coverage, labels, rubrics, tool-call traces, answer format, preference pairs, duplicate prompts, split hygiene, and regression holdouts.",
      "For RAG, use the related knowledge-ingestion/RAG capabilities instead: parse, chunk, embed, tag permissions, refresh indexes, and retrieve at query time without changing weights.",
      "For evaluation, protect holdouts aggressively. Eval data is evidence, not training material; leakage through duplicates, paraphrases, or synthetic examples invalidates the measurement."
    ],
    mustKnow: ["exact hash dedupe before fuzzy dedupe", "MinHash estimates Jaccard similarity", "LSH avoids all-pairs comparison", "PII detection uses regex plus NER/classifiers", "contamination checks compare train data against validation/test/benchmarks", "fine-tuning data curation is smaller and label/rubric-heavy", "RAG ingestion is runtime knowledge preparation, not weight-changing training data"],
    examSignals: ["train from zero", "continued pretraining", "raw web corpus", "near duplicates", "MinHash/LSH", "preference pairs", "tool traces", "benchmark leakage", "validation holdout", "PII in corpus"],
    handsOn: ["Write four separate checklists: pretraining corpus, SFT/PEFT examples, RAG knowledge ingestion, and evaluation holdout. Mark which steps are shared and which are unique."],
    relatedServices: ["Foundation Model Training Stack", "Model Customization Toolkit", "Knowledge Ingestion and Permission Pipeline", "Knowledge and RAG Pipeline", "Evaluation and Regression Harness"]
  },
  {
    name: "Knowledge Ingestion and Permission Pipeline",
    description: "Runtime-knowledge preparation pipeline for agent/RAG systems: extract, clean, chunk, enrich metadata, enforce ACL fields, redact sensitive text, and preserve ingestion lineage.",
    exams: ["Agentic AI General"],
    lifecycle: "Runtime knowledge preparation",
    group: "Data and knowledge",
    filters: ["Agentic AI General", "Data preparation", "RAG and retrieval", "Safety and guardrails", "Governance"],
    use: "Use when private or changing documents must become safe, searchable, permission-aware knowledge for an agent without changing model weights.",
    avoid: "Do not treat ingestion as fine-tuning, memory, or live retrieval by itself. It prepares documents; the RAG pipeline retrieves and reranks them at query time.",
    traps: "Do not clean documents and then lose permissions. ACLs, source IDs, tenancy, retention rules, and lineage must travel with each chunk.",
    scenario: "A support agent must answer from current internal docs, but every chunk needs tenant metadata, source citations, retention policy, and pre-retrieval access filtering.",
    quizPrompt: "Which lifecycle component prepares private documents before RAG retrieval?",
    keywords: ["document ingestion", "chunking", "ACL", "metadata", "PII", "lineage", "RAG preparation"],
    studyNotes: [
      "This is agent knowledge curation, not training-data curation. The goal is safe runtime grounding with citations and permissions.",
      "Typical steps are connector sync, extraction/OCR, normalization, PII handling, chunking, metadata enrichment, ACL propagation, embedding/index handoff, and lineage tracking.",
      "The output should be chunking/indexing-ready records with source, timestamp, tenant, permission, sensitivity, and retention metadata.",
      "A strong ingestion pipeline makes retrieval failures easier to debug because every answer can be traced back to source chunks."
    ],
    mustKnow: ["document extraction", "chunking strategy", "metadata enrichment", "ACL propagation", "source lineage", "retention policy"],
    examSignals: ["private docs", "tenant metadata", "fresh facts", "citations", "permission filtering", "document sync"],
    handsOn: ["Trace one document from connector sync through chunk metadata, index handoff, retrieval, citation, and deletion."],
    relatedServices: ["Knowledge and RAG Pipeline", "Policy and Guardrails Layer", "Observability and Trace Monitor"]
  },
  {
    name: "Model Selection and Registry",
    description: "Decision and governance layer for model/API choice, base models, tuned adapters, versions, approvals, eval reports, and rollback-ready artifacts.",
    exams: ["Agentic AI General"],
    lifecycle: "Model selection",
    group: "Model lifecycle",
    filters: ["Agentic AI General", "Model selection", "Training and customization", "Governance"],
    use: "Use when deciding whether to call an existing API/model, choose a base model, use a catalog artifact, approve an adapter, compare variants, or roll back a release.",
    avoid: "Do not pick it as the runtime that serves tokens or as the guardrail that enforces policy.",
    traps: "Treating a model family or registry as the production endpoint. The registry tracks artifacts; serving infrastructure runs them.",
    scenario: "An enterprise needs to know which adapter, prompt version, and eval report support the model currently in production.",
    quizPrompt: "Which layer tracks approved model artifacts and rollback versions?",
    keywords: ["model registry", "model selection", "version", "adapter", "rollback"],
    studyNotes: [
      "This maps to model catalogs/registries, hosted model menus, approval workflows, and artifact lineage across cloud and on-prem platforms.",
      "Use it to separate model choice from prompting, fine-tuning, serving, safety, and orchestration decisions.",
      "Good registries preserve artifact lineage: base model, adapter, dataset, eval results, risk approval, deployment version."
    ],
    mustKnow: ["build vs buy vs API", "artifact lineage", "versioning", "approval state", "eval reports", "rollback"],
    examSignals: ["existing API", "base model", "approved adapter", "version traceability", "rollback", "model comparison"],
    handsOn: ["Draw the path from model/API choice to prompt/adaptation decision, eval evidence, approval, endpoint, and rollback."],
    relatedServices: ["Prompt and Context Design", "Model Customization Toolkit", "Model Inference Endpoint", "Evaluation and Regression Harness"]
  },
  {
    name: "Foundation Model Training Stack",
    description: "Heavy training path for creating or continuing a model with distributed training recipes, accelerators, checkpoints, data mixtures, and experiment tracking.",
    exams: ["Agentic AI General"],
    lifecycle: "Foundation training",
    group: "Model lifecycle",
    filters: ["Agentic AI General", "Foundation training", "Training and customization", "Model selection", "Monitoring and profiling"],
    use: "Use when no existing model or fine-tuning route is enough and the team must create a model, continue pretraining, change tokenizer/domain depth, or run large distributed training jobs.",
    avoid: "Do not choose this for normal agent application work, prompt fixes, RAG freshness, or small behavior changes that adapters can handle.",
    traps: "Training from zero is the most expensive path. Most product problems should start with existing APIs/models, prompt/context design, RAG, or fine-tuning before full training.",
    scenario: "A research lab needs a domain model with a new corpus mixture, long training schedule, distributed checkpoints, and quality/safety evals before any serving endpoint exists.",
    quizPrompt: "Which lifecycle component owns full model training or continued pretraining?",
    keywords: ["pretraining", "continued pretraining", "distributed training", "checkpoints", "tokenizer", "data mixture"],
    studyNotes: [
      "This maps to NeMo Framework, PyTorch/FSDP/DeepSpeed-style stacks, distributed schedulers, NCCL collectives, checkpoint stores, and experiment tracking.",
      "Inputs are curated corpora, tokenizer/config decisions, compute plan, training recipe, eval plan, and safety constraints.",
      "Outputs are checkpoints, model cards, eval reports, risk notes, and candidate artifacts for registry and serving.",
      "For agentic systems, full training is usually background platform work; the agent app still needs retrieval, tools, guardrails, and operations around the model."
    ],
    mustKnow: ["pretraining vs continued pretraining", "distributed training", "checkpointing", "data mixture", "scaling bottlenecks", "model card"],
    examSignals: ["train from zero", "continue pretraining", "new foundation model", "distributed job", "multi-node", "checkpoint"],
    handsOn: ["List the minimum artifacts needed before serving a newly trained model: dataset card, checkpoint, eval report, safety review, registry version."],
    relatedServices: ["Training Data Curation Pipeline", "Model Selection and Registry", "Evaluation and Regression Harness", "Model Inference Endpoint"]
  },
  {
    name: "Model Customization Toolkit",
    description: "Adaptation layer for changing an existing model's durable behavior with SFT, PEFT/LoRA, preference tuning, continued pretraining, or alignment workflows.",
    exams: ["Agentic AI General"],
    lifecycle: "Training and customization",
    group: "Model lifecycle",
    filters: ["Agentic AI General", "Training and customization", "Model selection"],
    use: "Use when the scenario requires durable behavior, style, rubric-following, or domain task adaptation learned from examples.",
    avoid: "Do not choose it for rapidly changing facts, citations, permissioned documents, or simple formatting that prompt/context design can solve.",
    traps: "Fine-tuning for knowledge freshness. Retrieval is usually the first answer for changing facts; prompting is often the first answer for task framing.",
    scenario: "A claims assistant must learn a company-specific decision rubric while still retrieving current policy text.",
    quizPrompt: "When is customization better than only changing retrieval?",
    keywords: ["fine-tuning", "LoRA", "PEFT", "SFT", "DPO", "alignment"],
    studyNotes: [
      "This maps to NVIDIA NeMo Framework/Customizer, AWS Bedrock customization paths, OpenAI fine-tuning, and open-source PEFT/SFT stacks.",
      "Use it for durable behavior. Use RAG for fresh/private knowledge. Use prompt/context design for cheap task framing before changing weights.",
      "Evaluate before and after customization to detect overfitting and regression."
    ],
    mustKnow: ["prompt vs RAG vs PEFT vs SFT", "adapter lineage", "overfitting", "catastrophic forgetting", "preference tuning"],
    examSignals: ["durable behavior", "style", "rubric", "examples", "adapter", "preference pairs"],
    handsOn: ["Classify five requirements as prompt/context, RAG, PEFT, full SFT, preference tuning, or full training."],
    relatedServices: ["Training Data Curation Pipeline", "Prompt and Context Design", "Model Selection and Registry", "Evaluation and Regression Harness"]
  },
  {
    name: "Prompt and Context Design",
    description: "No-weight-change control layer for system prompts, task instructions, few-shot examples, structured outputs, context assembly, and prompt/version governance.",
    exams: ["Agentic AI General"],
    lifecycle: "Prompt and context adaptation",
    group: "Model lifecycle",
    filters: ["Agentic AI General", "Prompt engineering", "Model selection", "RAG and retrieval", "Evaluation"],
    use: "Use when an existing model can do the task but needs clearer instructions, examples, output format, tool-use framing, context packing, or versioned prompt control.",
    avoid: "Do not use prompt wording as a substitute for permissions, tool validation, retrieval quality, or durable model behavior that truly requires tuning.",
    traps: "Prompt improvements are fast but fragile if they hide missing retrieval, weak tools, or unmeasured regressions.",
    scenario: "A product uses a hosted model API and needs stable JSON with citations, refusal rules, and concise reasoning without changing weights.",
    quizPrompt: "Which lifecycle component adapts behavior without training or fine-tuning?",
    keywords: ["prompt", "context", "few-shot", "structured output", "system message", "prompt version"],
    studyNotes: [
      "This is the first adaptation step for many apps because it is cheap, reversible, and easy to A/B test.",
      "It owns instruction hierarchy, few-shot examples, context packing, output schemas, refusal language, prompt versioning, and prompt evals.",
      "For agents, prompts define tool-use expectations, planning style, memory use, response format, and escalation behavior.",
      "Treat prompts as release artifacts: version them, evaluate them, and connect them to model and retrieval changes."
    ],
    mustKnow: ["system vs developer/user instructions", "few-shot examples", "structured outputs", "context packing", "prompt versioning", "prompt evals"],
    examSignals: ["no weight change", "JSON format", "few-shot", "prompt version", "context window", "instruction hierarchy"],
    handsOn: ["Write a prompt release checklist with owner, model version, retrieval version, expected schema, eval set, and rollback plan."],
    relatedServices: ["Model Selection and Registry", "Knowledge and RAG Pipeline", "Evaluation and Regression Harness"]
  },
  {
    name: "Agent Orchestration Runtime",
    description: "Framework/runtime for composing agent roles, workflows, planners, tools, retrieval, memory, routing, retries, and traceable handoffs.",
    exams: ["Agentic AI General"],
    lifecycle: "Agent orchestration",
    group: "Agent runtime",
    filters: ["Agentic AI General", "Agent orchestration", "Tool execution", "Memory and state", "Monitoring and profiling"],
    use: "Use when the scenario is about building or coordinating an agent workflow with tools, routers, specialists, state, and recoverable execution.",
    avoid: "Do not use orchestration as the answer for low-level model serving, training-data cleanup, or policy enforcement by itself.",
    traps: "Adding more agents when the missing piece is explicit state ownership, tool validation, or a deterministic workflow.",
    scenario: "A planner, researcher, writer, and reviewer need a shared state machine and auditable handoffs.",
    quizPrompt: "Which layer coordinates agent roles, tools, and state?",
    keywords: ["orchestration", "workflow", "agent", "handoff", "planner", "executor"],
    studyNotes: [
      "This maps to NVIDIA NeMo Agent Toolkit, LangGraph/LangChain, Semantic Kernel, CrewAI, Step Functions, Durable Functions, and custom workflow runtimes.",
      "Its job is not just 'call an LLM'; it owns sequencing, state, retries, timeouts, error handling, and traceability.",
      "For predictable high-risk processes, orchestration may be a deterministic graph with small LLM nodes rather than free autonomy."
    ],
    mustKnow: ["state machine", "planner/executor", "routing", "retry and timeout", "traceability"],
    examSignals: ["multi-step agent", "handoff", "tool workflow", "state transition", "orchestrator"],
    handsOn: ["Draw one deterministic graph and one autonomous loop for the same task; mark the safer default."],
    relatedServices: ["Tool Gateway and Function Runtime", "Memory Store", "Observability and Trace Monitor"]
  },
  {
    name: "Tool Gateway and Function Runtime",
    description: "Execution boundary that exposes tools/functions with schemas, validation, permissions, risk checks, idempotency, and audit logs.",
    exams: ["Agentic AI General"],
    lifecycle: "Tool execution",
    group: "Agent runtime",
    filters: ["Agentic AI General", "Tool execution", "Agent orchestration", "Safety and guardrails", "Governance"],
    use: "Use when the scenario is about safe API calls, function calling, parameter validation, mutation control, retries, or permissions.",
    avoid: "Do not rely on prompt wording alone for high-impact tools.",
    traps: "Letting the LLM directly own credentials or execute mutations without a server-side validation boundary.",
    scenario: "An agent may create refunds, update CRM records, or query sensitive systems and must validate every action before execution.",
    quizPrompt: "Which component enforces schemas and permissions before tools run?",
    keywords: ["tool schema", "function call", "permissions", "idempotency", "API"],
    studyNotes: [
      "This maps to function-calling runtimes, MCP servers, API gateways, Lambda/function services, and internal tool brokers.",
      "The core idea is separation: model proposes, execution layer validates and authorizes.",
      "High-risk tools need risk tiers, approval gates, idempotency keys, and replayable audit logs."
    ],
    mustKnow: ["schema validation", "least privilege", "risk tiers", "idempotency", "audit logs"],
    examSignals: ["malformed tool call", "unauthorized API", "state mutation", "duplicate order"],
    handsOn: ["Write validation checks for one read-only tool and one mutating tool."],
    relatedServices: ["Agent Orchestration Runtime", "Policy and Guardrails Layer", "Human Review and Governance Console"]
  },
  {
    name: "Knowledge and RAG Pipeline",
    description: "Query-time grounding path for embeddings, indexing, metadata filtering, search, reranking, context assembly, citations, and freshness-aware retrieval.",
    exams: ["Agentic AI General"],
    lifecycle: "RAG and retrieval",
    group: "Data and knowledge",
    filters: ["Agentic AI General", "RAG and retrieval", "Data preparation", "Safety and guardrails"],
    use: "Use when an agent or model must read private, changing, or source-grounded knowledge at query time without changing weights.",
    avoid: "Do not use it to teach durable behavior or style; that is customization. Do not use it as the offline ingestion/ACL cleanup step by itself.",
    traps: "Applying access control after retrieval. Permission filtering belongs before chunks enter context, and weak ingestion metadata makes that impossible.",
    scenario: "A multi-tenant support agent must answer from current policy docs with citations and tenant isolation.",
    quizPrompt: "Which runtime component handles retrieval, reranking, and grounding?",
    keywords: ["RAG", "retrieval", "embedding", "reranking", "citations", "chunking"],
    studyNotes: [
      "This maps to NVIDIA NeMo Retriever, AWS Kendra/Bedrock Knowledge Bases, vector databases, search services, and custom RAG pipelines.",
      "Good RAG has two halves: ingestion prepares permissioned chunks; query-time retrieval searches, filters, reranks, assembles context, cites, and evaluates.",
      "Metadata and permissions are not optional in enterprise agents."
    ],
    mustKnow: ["embedding/indexing", "metadata filtering", "hybrid search", "reranking", "context assembly", "groundedness"],
    examSignals: ["private docs", "fresh facts", "citations", "tenant isolation", "hybrid search"],
    handsOn: ["Trace one query from user permissions through search, reranking, context assembly, answer generation, citation, and groundedness scoring."],
    relatedServices: ["Knowledge Ingestion and Permission Pipeline", "Policy and Guardrails Layer", "Evaluation and Regression Harness"]
  },
  {
    name: "Memory Store",
    description: "Scoped memory layer for short-term task state, episodic session memory, semantic facts, user preferences, expiration, and consent-aware recall.",
    exams: ["Agentic AI General"],
    lifecycle: "Memory and state",
    group: "Agent runtime",
    filters: ["Agentic AI General", "Memory and state", "Agent orchestration", "Governance"],
    use: "Use when the scenario is about remembering task progress, user preferences, prior tool results, or reusable facts across turns or sessions.",
    avoid: "Do not store every observation forever; memory must be relevant, permission-safe, and fresh.",
    traps: "Confusing memory with retrieval. Memory stores agent/user state; retrieval grounds answers in external knowledge sources.",
    scenario: "A travel assistant must remember a user's seating preference but expire one-time trip details after the trip.",
    quizPrompt: "Which layer stores permission-safe state and preferences across interactions?",
    keywords: ["memory", "state", "preference", "episodic", "semantic"],
    studyNotes: [
      "Memory is usually scoped: prompt state, working state, session memory, long-term user memory, and audit logs are different stores.",
      "Consent, freshness, and deletion matter as much as recall quality.",
      "Memory should be evaluated for usefulness and harm, not only retrieval hit rate."
    ],
    mustKnow: ["working memory", "episodic memory", "semantic memory", "consent", "expiration"],
    examSignals: ["forgets tool result", "user preference", "stale memory", "over-collection"],
    handsOn: ["Classify facts into prompt state, session memory, long-term memory, or audit log."],
    relatedServices: ["Agent Orchestration Runtime", "Knowledge and RAG Pipeline", "Observability and Trace Monitor"]
  },
  {
    name: "Policy and Guardrails Layer",
    description: "Runtime controls for input checks, retrieved-content checks, tool-call policy, dialog constraints, output moderation, and prompt-injection defense.",
    exams: ["Agentic AI General"],
    lifecycle: "Safety and guardrails",
    group: "Safety and evaluation",
    filters: ["Agentic AI General", "Safety and guardrails", "Tool execution", "Governance"],
    use: "Use when the scenario requires policy enforcement around prompts, retrieval, tool use, sensitive content, or final outputs.",
    avoid: "Do not treat guardrails as a replacement for IAM, document permissions, secure tools, or human approval.",
    traps: "Only filtering the final answer after the agent has already retrieved sensitive data or executed a tool.",
    scenario: "A malicious document tells the agent to ignore policy and issue a refund through an internal API.",
    quizPrompt: "Where should guardrails run in an agent workflow?",
    keywords: ["guardrails", "policy", "prompt injection", "safety", "moderation"],
    studyNotes: [
      "This maps to NVIDIA NeMo Guardrails, model/provider safety filters, IAM-aware policy engines, and custom runtime checks.",
      "Agent safety is layered: user input, retrieved content, tool proposal, tool execution, and final output.",
      "Guardrails should be observable and testable through red-team and regression suites."
    ],
    mustKnow: ["input rails", "retrieval-content checks", "tool policy", "output moderation", "red teaming"],
    examSignals: ["prompt injection", "unsafe tool", "PII", "policy refusal", "sensitive workflow"],
    handsOn: ["Mark where each safety check belongs in a RAG + tool workflow."],
    relatedServices: ["Tool Gateway and Function Runtime", "Human Review and Governance Console", "Evaluation and Regression Harness"]
  },
  {
    name: "Model Inference Endpoint",
    description: "Packaged model endpoint that exposes optimized inference APIs with health checks, model profiles, auth, concurrency limits, latency metrics, and deployment hooks.",
    exams: ["Agentic AI General"],
    lifecycle: "Serving and deployment",
    group: "Serving and operations",
    filters: ["Agentic AI General", "Serving and deployment", "Inference optimization"],
    use: "Use when the scenario asks for production model APIs, self-hosted endpoints, deployment packaging, latency SLOs, concurrency, or operational model serving.",
    avoid: "Do not choose it for training, data curation, workflow orchestration, or policy design.",
    traps: "Confusing the model with the microservice. The microservice packages and serves a model; it is not the model's learned behavior.",
    scenario: "A company wants an OpenAI-compatible endpoint for an approved model on its own infrastructure.",
    quizPrompt: "Which layer gives a production API for optimized model inference?",
    keywords: ["endpoint", "inference", "microservice", "API", "model serving", "TTFT", "concurrency"],
    studyNotes: [
      "This maps to NVIDIA NIM, AWS Bedrock endpoints, SageMaker endpoints, Azure AI endpoints, vLLM/TGI servers, and internal model services.",
      "It owns API behavior, health, deployment packaging, metrics, auth, concurrency limits, and operational profiles.",
      "It does not by itself solve orchestration, retrieval, or guardrails unless those are explicitly built around it."
    ],
    mustKnow: ["endpoint API", "health checks", "auth", "model profiles", "TTFT", "concurrency"],
    examSignals: ["production endpoint", "self-hosted API", "container", "serving profile", "slow first token"],
    handsOn: ["Separate model, endpoint, runtime, deployment, and client API in one diagram."],
    relatedServices: ["Model Serving Gateway", "Cost/Latency Optimizer", "Observability and Trace Monitor"]
  },
  {
    name: "Model Serving Gateway",
    description: "Serving layer that routes requests across models/endpoints, handles batching, fallback, rate limits, canaries, and multi-model operations.",
    exams: ["Agentic AI General"],
    lifecycle: "Serving and deployment",
    group: "Serving and operations",
    filters: ["Agentic AI General", "Serving and deployment", "Inference optimization", "Monitoring and profiling"],
    use: "Use when the scenario involves multi-model routing, traffic splitting, canary rollout, fallback, dynamic batching, or endpoint-level policies.",
    avoid: "Do not pick it as the tool that curates data or evaluates answer quality by itself.",
    traps: "Scaling the gateway while the real bottleneck is retrieval, tool latency, or model decode.",
    scenario: "A product routes simple classification to a small model and high-risk reasoning to a stronger model, with fallback on errors.",
    quizPrompt: "Which serving component handles routing, fallback, and rollout?",
    keywords: ["routing", "fallback", "canary", "batching", "gateway"],
    studyNotes: [
      "This maps to Triton-style model servers, API gateways, model routers, service meshes, and cloud inference routing layers.",
      "Gateway concerns include request admission, rate limits, fallback, canary, traffic split, batching, and version pinning.",
      "Quality gates should connect the gateway to evaluation results before rollout."
    ],
    mustKnow: ["routing", "canary", "fallback", "rate limits", "dynamic batching"],
    examSignals: ["traffic split", "multi-model", "fallback", "p99 latency", "canary"],
    handsOn: ["Design a route table for simple, complex, and high-risk agent requests."],
    relatedServices: ["Model Inference Endpoint", "Latency, Throughput, and Traffic Control", "Evaluation and Regression Harness", "Observability and Trace Monitor"]
  },
  {
    name: "Latency, Throughput, and Traffic Control",
    description: "Production traffic-control concepts for model and agent systems: percentiles, TTFT, concurrency, queueing, batching, autoscaling, backpressure, circuit breakers, and rollout safety.",
    exams: ["Agentic AI General"],
    lifecycle: "Serving and deployment",
    group: "Serving and operations",
    filters: ["Agentic AI General", "Serving and deployment", "Inference optimization", "Monitoring and profiling"],
    use: "Use when a scenario mentions user count, p95/p99, TTFT, tail latency, request rate, concurrency, queue delay, batching, streaming, autoscaling lag, overload, canary, rollback, or traffic isolation.",
    avoid: "Do not treat traffic control as model quality, retrieval quality, or agent orchestration. Measure the slow lane, then pick the control that protects the SLO.",
    traps: "Averages can look healthy while p99 fails. Bigger batches can improve throughput while making interactive TTFT worse.",
    scenario: "A chat agent has acceptable average latency, but p99 TTFT spikes when batch jobs share the same endpoint.",
    quizPrompt: "Which traffic-control concept explains why average latency hides bad user experience?",
    keywords: ["p50", "p95", "p99", "TTFT", "tail latency", "throughput", "concurrency", "queue delay", "backpressure", "circuit breaker", "bulkhead", "canary"],
    studyNotes: [
      "p95/p99 are percentile latencies: p99 means 99% of requests finish at or below that time. Tail percentiles expose the slow outliers hidden by averages.",
      "Translate user count into request rate, live concurrency, token shape, tool count, retrieval cost, queue depth, and workload mix before scaling.",
      "Interactive chat usually optimizes TTFT and inter-token latency; offline batch jobs usually optimize throughput and cost.",
      "Backpressure, bulkheads, circuit breakers, rate limits, and separate lanes stop one overloaded dependency from hurting every user.",
      "Canary, blue-green, shadow, and rollback are traffic controls only if they include quality, safety, latency, and cost gates."
    ],
    mustKnow: ["p50/p95/p99", "TTFT", "tail latency", "throughput", "concurrency", "request rate", "queue delay", "dynamic batching", "streaming", "autoscaling lag", "backpressure", "circuit breaker", "bulkhead", "canary", "blue-green", "rollback"],
    examSignals: ["average OK p99 bad", "many users", "slow first token", "queue depth", "batching window", "real-time chat vs batch jobs", "autoscaling lag", "backpressure", "canary rollback"],
    handsOn: ["Given a latency complaint, classify whether the first suspect is queueing, prefill, decode, retrieval, tool calls, or rollout regression."],
    relatedServices: ["Model Inference Endpoint", "Model Serving Gateway", "Cost/Latency Optimizer", "Observability and Trace Monitor"]
  },
  {
    name: "Evaluation and Regression Harness",
    description: "Test and measurement system for prompts, models, retrieval, tool calls, agent trajectories, safety, regressions, and human/LLM judging.",
    exams: ["Agentic AI General"],
    lifecycle: "Evaluation",
    group: "Safety and evaluation",
    filters: ["Agentic AI General", "Evaluation", "Safety and guardrails", "Monitoring and profiling"],
    use: "Use when the scenario asks how to measure quality, compare variants, catch regressions, score trajectories, or calibrate judges.",
    avoid: "Do not confuse offline evaluation with live monitoring; they should feed each other but are different lifecycle loops.",
    traps: "Scoring only final answers when unsafe or expensive tool trajectories are the real failure.",
    scenario: "A release gate must compare model, prompt, retrieval, tool accuracy, safety blocks, latency, and cost before deployment.",
    quizPrompt: "Which layer measures agent quality before and after changes?",
    keywords: ["evaluation", "judge", "benchmark", "trajectory", "regression"],
    studyNotes: [
      "This maps to NVIDIA NeMo Evaluator, AWS Bedrock evaluation, OpenAI evals, RAG/agent eval frameworks, and internal QA suites.",
      "Agent evals need final answer correctness, groundedness, tool correctness, policy compliance, latency, and cost.",
      "LLM-as-judge is useful only with rubrics, calibration, and human-labeled anchors."
    ],
    mustKnow: ["trajectory eval", "groundedness", "LLM-as-judge", "human labels", "regression suite"],
    examSignals: ["release gate", "compare variants", "judge bias", "unsafe intermediate step"],
    handsOn: ["Define five metrics for a tool-using support agent."],
    relatedServices: ["Policy and Guardrails Layer", "Observability and Trace Monitor", "Human Review and Governance Console"]
  },
  {
    name: "Observability and Trace Monitor",
    description: "Live operations layer for traces, logs, metrics, tool-call health, retrieval quality, user-facing latency, errors, drift, incidents, and replay.",
    exams: ["Agentic AI General"],
    lifecycle: "Monitoring and profiling",
    group: "Serving and operations",
    filters: ["Agentic AI General", "Monitoring and profiling", "Evaluation", "Serving and deployment"],
    use: "Use when the scenario is about live failures, p95/p99 latency, TTFT, route drift, empty tool results, trace replay, or incident diagnosis.",
    avoid: "Do not use monitoring as a substitute for pre-release evaluation or secure tool design.",
    traps: "Treating HTTP 200 as success. Agent observability must track task completion and trajectory health.",
    scenario: "Users complain even though every request returns 200 because the CRM tool silently returns empty records.",
    quizPrompt: "Which layer shows live traces, tool failures, latency, and task success?",
    keywords: ["observability", "trace", "latency", "monitoring", "drift", "p95", "p99", "TTFT"],
    studyNotes: [
      "This maps to tracing/observability stacks, cloud monitors, OpenTelemetry, prompt/model gateways, and agent-specific trace dashboards.",
      "Track model, retrieval, tools, guardrails, route choice, latency percentiles, cost, and human escalation as one workflow.",
      "Good observability supports replay and turns incidents into regression tests."
    ],
    mustKnow: ["traces", "tool success", "p95/p99", "TTFT", "route drift", "replay"],
    examSignals: ["HTTP 200 but failed task", "incident", "cost spike", "latency gap", "empty tool result", "p50 normal p99 bad"],
    handsOn: ["Sketch a dashboard with workflow, quality, safety, cost, and latency rows."],
    relatedServices: ["Evaluation and Regression Harness", "Model Serving Gateway", "Latency, Throughput, and Traffic Control", "Cost/Latency Optimizer"]
  },
  {
    name: "Cost/Latency Optimizer",
    description: "Optimization loop for model routing, prompt/context size, caching, batching, concurrency, KV cache, quantization, and cost budgets.",
    exams: ["Agentic AI General"],
    lifecycle: "Inference optimization",
    group: "Serving and operations",
    filters: ["Agentic AI General", "Inference optimization", "Serving and deployment", "Monitoring and profiling"],
    use: "Use when constraints mention user count, p99 latency, TTFT, throughput, token cost, context bloat, model routing, caching, quantization, or batching.",
    avoid: "Do not optimize before measuring which stage is actually slow or expensive.",
    traps: "Adding GPUs or larger models before checking retrieval/tool waits, queueing, prompt size, or decode bottlenecks.",
    scenario: "Costs spike because simple tasks route to a premium reasoning model and long prompts include irrelevant retrieved chunks.",
    quizPrompt: "Which lifecycle loop reduces latency and cost after measurement?",
    keywords: ["cost", "latency", "batching", "quantization", "routing", "KV cache", "queue depth", "users"],
    studyNotes: [
      "This maps to TensorRT-LLM/vLLM/TGI tuning, model routing, prompt compaction, caching, batching policy, and cloud cost controls.",
      "Translate user count into request rate, concurrency, token shape, queue depth, and latency SLO before choosing an optimization.",
      "Separate prefill, decode, retrieval, tool waits, queueing, and network time before choosing an optimization.",
      "Cost optimization is not only GPUs; it is routing, context discipline, cache policy, and task design."
    ],
    mustKnow: ["prefill vs decode", "TTFT", "context size", "KV cache", "batching", "queue depth"],
    examSignals: ["p99", "TTFT", "tokens/sec", "cost spike", "long context", "queueing", "many users"],
    handsOn: ["Classify one bottleneck as retrieval, tool, prefill, decode, queueing, or network."],
    relatedServices: ["Latency, Throughput, and Traffic Control", "Model Inference Endpoint", "Model Serving Gateway", "Observability and Trace Monitor"]
  },
  {
    name: "Human Review and Governance Console",
    description: "Oversight workspace for approvals, escalations, sampled review, reviewer feedback, issue triage, and policy/governance workflows.",
    exams: ["Agentic AI General"],
    lifecycle: "Human oversight",
    group: "Governance",
    filters: ["Agentic AI General", "Human oversight", "Governance", "Safety and guardrails"],
    use: "Use when the scenario requires human approval, escalation, sampled review, regulated decision support, or reviewer feedback loops.",
    avoid: "Do not put every low-risk action behind manual approval unless the risk justifies the review load.",
    traps: "Collecting human comments without turning them into evals, policy changes, prompt/tool fixes, or training data.",
    scenario: "Only high-risk refund or loan decisions need approval; low-risk answers are sampled and reviewed for drift.",
    quizPrompt: "Which component owns risk-tiered human oversight and review feedback?",
    keywords: ["human review", "approval", "escalation", "governance", "audit"],
    studyNotes: [
      "This maps to review queues, case-management tools, moderation consoles, and compliance approval workflows.",
      "Human-in-the-loop approves before selected actions; human-on-the-loop monitors and intervenes after sampling or alerts.",
      "Oversight is valuable when feedback becomes labeled data, eval cases, policy updates, and system fixes."
    ],
    mustKnow: ["approval gates", "risk tiers", "sampling", "escalation", "feedback loop"],
    examSignals: ["human approval", "regulated action", "review overload", "escalation"],
    handsOn: ["Classify actions as auto-allow, sample-review, approval-required, or block."],
    relatedServices: ["Policy and Guardrails Layer", "Tool Gateway and Function Runtime", "Evaluation and Regression Harness"]
  }
];

const vendorNeutralRelatedServices = {
  "Training Data Curation Pipeline": [
    { vendor: "NVIDIA", service: "NeMo Curator", role: "GPU-accelerated curation for dataset dedupe, quality filtering, PII handling, synthetic data, and training/eval data readiness." },
    { vendor: "AWS", service: "SageMaker data pipelines / AWS Glue / Comprehend PII", role: "Managed preparation, entity/PII detection, labeling, and pipeline steps before training or tuning." },
    { vendor: "Open source", service: "Spark, Ray Data, Dask, spaCy/Presidio, datasketch", role: "Portable preprocessing, NER/redaction, and MinHash/LSH-style near-duplicate detection." }
  ],
  "Knowledge Ingestion and Permission Pipeline": [
    { vendor: "NVIDIA", service: "NeMo Retriever ingestion + NeMo Curator patterns", role: "Document extraction, cleaning, metadata preparation, and handoff into enterprise RAG workflows." },
    { vendor: "AWS", service: "Bedrock Knowledge Bases connectors / Kendra / Glue", role: "Document sync, extraction, metadata, and permission-aware indexing paths for managed RAG." },
    { vendor: "Open source", service: "Unstructured, LlamaIndex loaders, LangChain loaders, OpenSearch pipelines", role: "Connector, parsing, chunking, metadata, and ACL propagation for custom RAG ingestion." }
  ],
  "Model Selection and Registry": [
    { vendor: "NVIDIA", service: "NGC + Nemotron model families", role: "Model/container catalog plus NVIDIA model families for reasoning, retrieval, and enterprise workflows." },
    { vendor: "AWS", service: "SageMaker Model Registry", role: "Catalogs model versions, metadata, lineage, approval status, and deployment readiness." },
    { vendor: "Open source", service: "MLflow Model Registry / Hugging Face Hub", role: "Artifact/version tracking and model distribution for non-managed stacks." }
  ],
  "Foundation Model Training Stack": [
    { vendor: "NVIDIA", service: "NeMo Framework + NCCL + NGC", role: "Distributed model training recipes, multi-GPU communication, containers, checkpoints, and training artifacts." },
    { vendor: "AWS", service: "SageMaker Training / Trainium / EKS", role: "Managed or Kubernetes-based distributed training infrastructure for custom model development." },
    { vendor: "Open source", service: "PyTorch, FSDP, DeepSpeed, Megatron-LM", role: "Portable training frameworks for pretraining, continued pretraining, scaling, and checkpoint workflows." }
  ],
  "Model Customization Toolkit": [
    { vendor: "NVIDIA", service: "NeMo Framework / NeMo Customizer", role: "Training, PEFT/LoRA, SFT, and managed customization paths for NVIDIA-centered workflows." },
    { vendor: "AWS", service: "Amazon Bedrock model customization / SageMaker training", role: "Managed customization or custom training/fine-tuning workflows." },
    { vendor: "Open source", service: "TRL, PEFT, Axolotl, Unsloth", role: "Portable SFT, LoRA/QLoRA, DPO, and adapter tuning stacks." }
  ],
  "Prompt and Context Design": [
    { vendor: "NVIDIA", service: "NIM APIs + NeMo Agent Toolkit prompts", role: "Prompted model endpoints and agent workflow prompts around NVIDIA-hosted or self-hosted models." },
    { vendor: "AWS", service: "Bedrock prompts / Agents instructions", role: "Prompt templates, instruction management, and model/API invocation configuration." },
    { vendor: "Open source", service: "Promptfoo, LangChain prompts, guidance/outlines", role: "Prompt versioning, schema control, structured generation, and prompt regression testing." }
  ],
  "Agent Orchestration Runtime": [
    { vendor: "NVIDIA", service: "NeMo Agent Toolkit", role: "Framework-agnostic workflow layer for agents, tools, retrievers, memory, profiling, and observability." },
    { vendor: "AWS", service: "Amazon Bedrock Agents / AWS Step Functions", role: "Managed agent orchestration and workflow coordination across APIs, data, and user tasks." },
    { vendor: "Open source", service: "LangGraph, LlamaIndex, Semantic Kernel, CrewAI", role: "Portable graph, router, multi-agent, and workflow orchestration frameworks." }
  ],
  "Tool Gateway and Function Runtime": [
    { vendor: "NVIDIA", service: "NeMo Agent Toolkit functions + MCP", role: "Tool/function integration boundary around agent workflows." },
    { vendor: "AWS", service: "Bedrock Agent action groups + AWS Lambda", role: "Action schemas, parameter elicitation, Lambda fulfillment, return control, and user confirmation." },
    { vendor: "Open source", service: "MCP servers, OpenAPI tools, API gateways", role: "Schema-driven tool execution, validation, idempotency, and audit logging." }
  ],
  "Knowledge and RAG Pipeline": [
    { vendor: "NVIDIA", service: "NeMo Retriever", role: "Enterprise RAG services for extraction, embeddings, indexing, retrieval, and reranking." },
    { vendor: "AWS", service: "Amazon Bedrock Knowledge Bases / Amazon Kendra", role: "Managed RAG and enterprise search over proprietary data sources." },
    { vendor: "Open source", service: "LlamaIndex, LangChain, Milvus, pgvector, OpenSearch", role: "Custom RAG pipeline components for chunking, indexing, hybrid search, and reranking." }
  ],
  "Memory Store": [
    { vendor: "NVIDIA", service: "NeMo Agent Toolkit memory module", role: "Agent workflow memory integration for state and recall patterns." },
    { vendor: "AWS", service: "Bedrock Agent session state + DynamoDB/OpenSearch", role: "Session state and durable stores commonly used to persist agent memory." },
    { vendor: "Open source", service: "LangGraph checkpoints, Redis, Postgres, vector stores", role: "Working memory, episodic state, long-term preferences, and semantic recall." }
  ],
  "Policy and Guardrails Layer": [
    { vendor: "NVIDIA", service: "NeMo Guardrails", role: "Programmable rails around dialog, retrieval, tool use, and model I/O." },
    { vendor: "AWS", service: "Amazon Bedrock Guardrails", role: "Configurable input/output safeguards, sensitive-information filters, denied topics, and content policies." },
    { vendor: "Open source", service: "Guardrails AI, NeMo Guardrails OSS, policy engines", role: "Schema, policy, safety, and validation controls in custom runtimes." }
  ],
  "Model Inference Endpoint": [
    { vendor: "NVIDIA", service: "NIM", role: "NVIDIA inference microservices for optimized models, APIs, profiles, containers, and deployment." },
    { vendor: "AWS", service: "Amazon Bedrock model inference / SageMaker real-time endpoints", role: "Managed model APIs or low-latency inference endpoints with autoscaling options." },
    { vendor: "Open source", service: "vLLM, TGI, Ollama, llama.cpp servers", role: "Self-hosted inference endpoints and OpenAI-compatible serving stacks." }
  ],
  "Model Serving Gateway": [
    { vendor: "NVIDIA", service: "Triton Inference Server / NIM Operator / Dynamo", role: "Model serving, Kubernetes lifecycle, routing, batching, and distributed LLM serving patterns." },
    { vendor: "AWS", service: "SageMaker endpoints + Application Load Balancer/API Gateway", role: "Traffic management, endpoint deployment, autoscaling, and production API front doors." },
    { vendor: "Open source", service: "KServe, Ray Serve, BentoML, Envoy", role: "Routing, canary, fallback, model mesh, and multi-model operations." }
  ],
  "Latency, Throughput, and Traffic Control": [
    { vendor: "NVIDIA", service: "NIM, Triton, TensorRT-LLM, Dynamo, NIM Operator", role: "Endpoint profiles, dynamic batching, KV-cache-aware serving, distributed inference, and Kubernetes lifecycle controls." },
    { vendor: "AWS", service: "SageMaker autoscaling / API Gateway / Application Load Balancer", role: "Request admission, endpoint scaling, traffic split, canary, rollback, and production front doors." },
    { vendor: "Open source", service: "vLLM, TGI, Envoy, KServe, OpenTelemetry", role: "Batching, streaming, backpressure, routing, traffic isolation, and trace-derived latency analysis." }
  ],
  "Evaluation and Regression Harness": [
    { vendor: "NVIDIA", service: "NeMo Evaluator + NeMo Agent Toolkit evals", role: "Model, RAG, and agent workflow evaluation with benchmarks and trajectory checks." },
    { vendor: "AWS", service: "Amazon Bedrock Evaluations", role: "Automatic and human evaluation for models, knowledge bases, and RAG resources." },
    { vendor: "Open source", service: "OpenAI Evals, Ragas, DeepEval, promptfoo", role: "Portable regression suites, RAG metrics, LLM-as-judge, and human rubric workflows." }
  ],
  "Observability and Trace Monitor": [
    { vendor: "NVIDIA", service: "NeMo Agent Toolkit observability + Nsight Systems", role: "Agent traces plus NVIDIA system/profiling tools for performance diagnosis." },
    { vendor: "AWS", service: "CloudWatch, X-Ray, Bedrock invocation logs", role: "Operational logging, tracing, alarms, and service-level visibility." },
    { vendor: "Open source", service: "OpenTelemetry, LangSmith, Phoenix, W&B Weave", role: "Agent traces, model-call spans, RAG diagnostics, and experiment/production telemetry." }
  ],
  "Cost/Latency Optimizer": [
    { vendor: "NVIDIA", service: "TensorRT-LLM, Dynamo, Triton, Nsight", role: "LLM runtime optimization, batching, KV-cache behavior, distributed serving, and bottleneck profiling." },
    { vendor: "AWS", service: "SageMaker Inference Recommender / endpoint autoscaling / Bedrock routing choices", role: "Instance, endpoint, scaling, and managed-model choices for cost and latency." },
    { vendor: "Open source", service: "vLLM, TGI, quantization, prompt caching", role: "Scheduler, batching, quantization, context discipline, and caching optimizations." }
  ],
  "Human Review and Governance Console": [
    { vendor: "NVIDIA", service: "NeMo Evaluator human review patterns + enterprise review apps", role: "Human scoring and review loops connected to evaluation and governance workflows." },
    { vendor: "AWS", service: "Amazon Bedrock Evaluations with human workers / Augmented AI patterns", role: "Human feedback and evaluation workflows for model and RAG outputs." },
    { vendor: "Open source", service: "Label Studio, Argilla, custom case queues", role: "Reviewer workflows, labeled feedback, escalation queues, and audit evidence." }
  ]
};

for (const service of vendorNeutralCapabilities) {
  service.relatedVendorServices = vendorNeutralRelatedServices[service.name] || [];
}

nvidiaServices.push(...vendorNeutralCapabilities);

export const studySections = [
  {
    exam: "Agentic AI General",
    name: "Agent Lifecycle and Architecture",
    weight: 14,
    description: "Understand when to use workflows, agents, multi-agent roles, control boundaries, and lifecycle handoffs.",
    keyIdeas: ["workflow vs agent", "observe-reason-act", "supervisor orchestration", "state ownership"],
    use: "Study this when deciding the architecture for a task before picking any vendor tool.",
    traps: "Do not add autonomy or multiple agents when explicit workflow states solve the problem more safely.",
    scenario: "A predictable approval process should be a workflow with LLM nodes, not an unrestricted autonomous agent."
  },
  {
    exam: "Agentic AI General",
    name: "Data Curation and Knowledge Grounding",
    weight: 12,
    description: "Prepare training data and build runtime retrieval paths for private, fresh, permissioned knowledge.",
    keyIdeas: ["training data curation", "RAG", "chunking", "metadata filtering", "reranking"],
    use: "Study this when deciding between data cleanup, RAG, fine-tuning, or access-controlled retrieval.",
    traps: "Do not use final-answer guardrails as a substitute for pre-retrieval permission filtering.",
    scenario: "Tenant-aware retrieval must filter documents before chunks enter the model context."
  },
  {
    exam: "Agentic AI General",
    name: "Model Selection and Customization",
    weight: 12,
    description: "Choose and adapt models using routing, registries, prompt design, RAG, PEFT/SFT, and preference tuning.",
    keyIdeas: ["model routing", "registry", "prompt vs RAG vs fine-tuning", "PEFT", "rollback"],
    use: "Study this when requirements mention durable behavior, model tradeoffs, or artifact governance.",
    traps: "Do not fine-tune for fast-changing facts when retrieval with citations is the better first design.",
    scenario: "Use RAG for weekly policy changes and PEFT/SFT for durable decision-rubric behavior."
  },
  {
    exam: "Agentic AI General",
    name: "Tooling, Orchestration, and Memory",
    weight: 16,
    description: "Coordinate workflows, tool schemas, function execution, retries, memory scopes, and state management.",
    keyIdeas: ["tool schemas", "validation", "idempotency", "working memory", "long-term memory"],
    use: "Study this when the agent calls tools, mutates systems, remembers state, or needs recoverable execution.",
    traps: "Prompt instructions are not an execution boundary for credentials, permissions, or state-changing tools.",
    scenario: "The model proposes a tool call; the runtime validates parameters, permissions, risk, and idempotency before execution."
  },
  {
    exam: "Agentic AI General",
    name: "Inference Serving and Deployment",
    weight: 14,
    description: "Expose models as APIs with serving gateways, containers, batching, scaling, rollout, fallback, latency SLOs, and health checks.",
    keyIdeas: ["inference microservice", "model serving gateway", "TTFT", "batching", "concurrency"],
    use: "Study this when scenarios involve endpoints, latency, user volume, deployment packaging, scaling, or traffic management.",
    traps: "Serving a model reliably is different from training, orchestration, or safety policy.",
    scenario: "A NIM-style or Bedrock-style endpoint gives production inference APIs; the orchestrator and guardrails sit around it."
  },
  {
    exam: "Agentic AI General",
    name: "Evaluation and Safety",
    weight: 14,
    description: "Evaluate answers, retrieval, tool calls, trajectories, safety policies, red-team cases, and regressions.",
    keyIdeas: ["trajectory evaluation", "groundedness", "LLM-as-judge", "guardrails", "red teaming"],
    use: "Study this when final-answer accuracy is not enough to prove the agent is safe or useful.",
    traps: "A correct final answer can hide unauthorized tool calls, leaked context, or excessive cost.",
    scenario: "Score tool-call correctness and policy compliance, not only the final message."
  },
  {
    exam: "Agentic AI General",
    name: "Observability, Operations, and Cost",
    weight: 10,
    description: "Run agents with traces, monitors, cost controls, route drift detection, bottleneck diagnosis, and incident loops.",
    keyIdeas: ["tracing", "task success", "p95/p99 latency", "TTFT", "incident replay"],
    use: "Study this when a live agent is slow, expensive, failing silently, has high tail latency, or is drifting from intended routes.",
    traps: "HTTP 200 does not mean the agent completed the user's task.",
    scenario: "Trace model, retrieval, tool, guardrail, route, and final-answer quality as one workflow."
  },
  {
    exam: "Agentic AI General",
    name: "Human Oversight and Governance",
    weight: 8,
    description: "Design risk-tiered approval, escalation, auditability, compliance evidence, and feedback-to-improvement loops.",
    keyIdeas: ["approval gates", "risk tiers", "audit trail", "review queue", "governance"],
    use: "Study this when human judgment, regulated actions, approvals, or audit evidence are part of the system.",
    traps: "Review queues are wasteful unless feedback becomes eval data, policy changes, and system fixes.",
    scenario: "High-risk actions require approval; low-risk answers run automatically with sampled review."
  },
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
    keyIdeas: ["workflow latency", "tool bottlenecks", "p95/p99", "serving lanes", "fallback and retries"],
    use: "Study this when questions ask how to productionize a multi-step agent workflow or diagnose user-volume latency.",
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
    description: "Map agentic workloads and latency/scale clues to NVIDIA services such as NIM, NeMo Agent Toolkit, NeMo Guardrails, NeMo Retriever, Triton, TensorRT-LLM, and Nsight.",
    keyIdeas: ["NIM", "NIM Operator", "Triton", "TensorRT-LLM", "Nsight Systems", "NeMo Retriever"],
    use: "Study this when the question asks which NVIDIA component fits a production agent requirement, user-volume constraint, or latency bottleneck.",
    traps: "Do not answer with a model when the question asks for orchestration, serving, retrieval, or guardrails.",
    scenario: "A NIM-hosted agent has high p99 latency; decide whether the issue is serving queue, TensorRT-LLM decode, Retriever/tool spans, or Nsight-level profiling."
  },
  {
    exam: "Agentic AI",
    name: "Run, Monitor, and Maintain",
    weight: 5,
    description: "Operate live agents with tracing, tool-call monitoring, drift detection, cost dashboards, and incident response.",
    keyIdeas: ["traces", "tool latency", "TTFT", "queue depth", "failure loops", "maintenance"],
    use: "Study this when questions ask what to monitor after deployment, especially p95/p99 or user-facing delay.",
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
    keyIdeas: ["NIM", "Triton", "Kubernetes", "dynamic batching", "TTFT"],
    use: "Study this when the question asks how to expose, scale, update, or operate an inference endpoint under latency or user-volume constraints.",
    traps: "Deployment packaging is not the same as model optimization or fine-tuning.",
    scenario: "A team needs a self-hosted endpoint with health checks, batching, and predictable rollout behavior."
  },
  {
    exam: "GenAI LLMs",
    name: "Production Monitoring and Reliability",
    weight: 7,
    description: "Monitor quality, latency, drift, cost, errors, and reliability after release.",
    keyIdeas: ["drift", "SLA", "TTFT", "p95/p99", "versioning"],
    use: "Study this when scenarios involve live systems, alerts, user-facing latency, anomaly diagnosis, or model lifecycle operations.",
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
      "For user-count or latency scenarios, translate the clue into queue depth, TTFT, p95/p99, tokens/sec, GPU utilization, and traced spans before choosing the NVIDIA product.",
      "NIM serves endpoints; NIM Operator manages NIM on Kubernetes; Triton handles multi-model serving, queues, batching, and ensembles; TensorRT-LLM optimizes LLM decode/KV-cache/runtime behavior; Nsight Systems finds where time goes before Nsight Compute explains one hot kernel.",
      "Expand acronym-only service names in your mental map: NIM = NVIDIA Inference Microservice; NGC = NVIDIA GPU Cloud; NCCL = NVIDIA Collective Communications Library; TAO = Train, Adapt, Optimize.",
      "When a question says 'which NVIDIA service', identify the lifecycle phase before choosing the product name."
    ],
    mustKnow: ["NIM", "NIM Operator", "Triton", "TensorRT-LLM", "Nsight Systems", "Nsight Compute"],
    examSignals: ["NVIDIA component selection", "high p99", "slow TTFT", "low tokens/sec", "serving queue", "GPU timeline"],
    handsOn: ["Map a slow NVIDIA agent request to one first tool: NIM metrics, Triton queue/batching, TensorRT-LLM runtime, NeMo Retriever/tool spans, Nsight Systems, or Nsight Compute."]
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
      "Know the lifecycle phase this capability belongs to and contrast it with nearby services or platform components.",
      "For scenario questions, identify whether the bottleneck is training, retrieval, safety, serving, profiling, communication, or data preparation before choosing a tool."
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

import { readFile, writeFile, readdir, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices, studySections } from "../client/src/data/study-services.js";

const root = process.cwd();
const mockDifficultyRank = { expert: 4, hard: 3, medium: 2, easy: 1 };

const banned = [
  /a study session asks/i,
  /during a mock review/i,
  /what should they remember for the exam/i,
  /for the exam\?/i,
  /this study session/i,
  /lifecycle drill/i,
  /all NVIDIA services are interchangeable/i,
  /skip the lifecycle decision/i,
  /choose .* for any NVIDIA-related problem/i,
  /because its name sounds related/i,
  /\.\s+it\b/,
  /\.\./,
  /component that it/i,
  /component for the scenario/i,
  /common trap:/i,
  /task is described this way: The design must avoid/i,
  /without hiding the root cause/i,
  /critical design question/i,
  /initially selected/i,
  /Which component should replace it/i,
  /not selecting a model family/i,
  /generic model selection/i,
  /for the deployment, not/i,
  /The work item is/i,
  /is choosing an NVIDIA component\. (Accelerating|Building|Choosing|Connecting|Curating|Distributed|For packaged|Live failures|Multi-model|Policy enforcement|Pulling|SFT)/i,
  /is deciding between [^.]+\. (Accelerating|Building|Choosing|Connecting|Curating|Distributed|For packaged|Live failures|Multi-model|Policy enforcement|Pulling|SFT)/i,
  /is choosing an NVIDIA component\./i,
  /does not separate or audit/i,
  / for to /i,
  /it is used to a scenario/i,
  /it is used to user count/i,
  /Which NVIDIA component matches this workload/i,
  /Which study capability matches this workload/i,
  /nVIDIA/,
  /Use first when/i
];

const serviceSignalPattern = /trace|timeline|kernel|CUDA|Kubernetes|endpoint|API|LoRA|PEFT|RAG|retrieval|embedding|rerank|guardrail|policy|eval|benchmark|judge|dataset|dedup|PII|profile|registry|container|rollout|autoscal|all-reduce|NCCL|GPU|latency|throughput|documents|workflow|tools|memory|state|agent|router|specialist|planner|handoff|retry|preference|session|recall|consent|model artifacts|release|serve|serving|routing|runtime|artifact|microservice|profiler|JSONL|Parquet|corpus|pipeline|ScoreFilter|classifier|curation|prefill|decode|KV-cache|multi-node|H100|TensorRT|optimized LLM|LLM engine|batching|quantization|TTFT|inference/i;
const nvidiaScopePattern = /\b(nvidia|nemo|nim|tensorrt|triton|nsight|ngc|rapids|cuda|nccl|dgx|rtx|a100|h100|blackwell|nemotron|base command|ai enterprise|tensor core|tensor cores|dynamo-triton|dynamo triton)\b/i;

const industries = [
  "A bank fraud team",
  "A hospital operations team",
  "A global retailer",
  "An automotive support team",
  "A semiconductor design group",
  "A public-sector casework team",
  "A telecom network operations team",
  "An insurance claims group",
  "A cybersecurity response team",
  "A manufacturing quality team",
  "A logistics planning team",
  "A pharmaceutical research team"
];

const constraints = [
  "must keep p95 latency predictable",
  "must preserve audit evidence for every release",
  "must isolate tenant data before model context is assembled",
  "must support rollback after a bad deployment",
  "must reduce GPU cost without lowering answer quality",
  "must prevent duplicate mutations during retries",
  "must keep fresh private documents out of model weights",
  "must compare variants before production rollout",
  "must enforce least-privilege access to tools",
  "must diagnose where time is spent across retrieval, tools, and inference",
  "must avoid contaminating evaluation holdouts",
  "must route low-risk and high-risk requests differently"
];

const actionVerbs = [
  "Which design is the best first change?",
  "Which action best fits the requirement?",
  "Which choice addresses the root cause?",
  "Which architecture keeps the boundary cleanest?",
  "Which implementation path is most appropriate?",
  "Which control should be added before rollout?"
];

const domainStemPatterns = [
  ({ industry, concept, scenario, verb }) => `${industry} is building ${scenario.workload}. ${scenario.failure} ${verb}`,
  ({ industry, scenario }) => `${industry} passes the happy-path demo for ${scenario.workload}, but ${lowerFirst(scenario.failure)} Which change should be made before release?`,
  ({ industry, concept, trap, scenario }) => `${industry} is choosing between a design centered on ${trap} and one that makes ${concept} explicit for ${scenario.workload}. Which design should win?`,
  ({ industry, scenario }) => `During an architecture review, ${lowerFirst(industry)} finds that ${lowerFirst(scenario.failure)} What is the best next step?`,
  ({ industry, scenario }) => `${industry} is triaging a failed pilot for ${scenario.workload}. ${scenario.failure} Which control addresses the root cause?`
];

const serviceOpeners = [
  ({ industry }) => `${industry} is preparing a production rollout.`,
  ({ industry }) => `${industry} is reviewing the implementation plan.`,
  ({ industry }) => `${industry} has narrowed the next engineering decision.`,
  ({ industry }) => `${industry} is setting a release gate.`,
  ({ industry }) => `${industry} is fixing the layer called out by the trace and design review.`,
  ({ industry }) => `${industry} needs to choose the right implementation surface.`
];

const serviceClosers = {
  nvidia: [
    "Which NVIDIA service fits this requirement?",
    "Which NVIDIA tool should the team start with?",
    "Which NVIDIA platform layer is the right match?",
    "Which NVIDIA product owns this requirement?",
    "Which NVIDIA option addresses the named layer?",
    "Which NVIDIA service should be selected first?"
  ],
  study: [
    "Which study capability should they read first?",
    "Which General Study capability owns this requirement?",
    "Which capability page covers the missing layer?",
    "Which reusable concept area should guide the design?",
    "Which study card is the right next stop?",
    "Which capability best matches the release blocker?"
  ]
};

const serviceBridgePhrases = [
  "The key clue is",
  "The blocker is",
  "The review finding says",
  "The trace points to",
  "The release note calls out",
  "The implementation requirement is"
];

const lifecycleNeeds = {
  "Data preparation": [
    "deduplicate, filter, and prepare large data sets before training or indexing.",
    "run scalable quality filtering and PII cleanup before data becomes a learning artifact.",
    "accelerate dataframe-style preprocessing and corpus cleanup on GPUs."
  ],
  "Model selection": [
    "choose the correct model family and separate that choice from serving infrastructure.",
    "track which model family fits reasoning, reward, or instruction-following requirements.",
    "avoid mistaking the model itself for the endpoint that serves it."
  ],
  "Training and customization": [
    "adapt an existing model with SFT, PEFT, LoRA, or continued pretraining.",
    "run distributed training or customization before an artifact is approved for serving.",
    "change durable model behavior from curated examples rather than prompt wording."
  ],
  "Agent orchestration": [
    "compose agent workflows, tools, retrievers, memory, and traceable handoffs.",
    "coordinate multiple agent roles without forcing a rewrite of the existing framework.",
    "profile and observe an agent workflow across tools and retrieval calls."
  ],
  "Tool execution": [
    "validate tool schemas, permissions, retries, and mutating API calls before execution.",
    "separate model planning from server-side function execution.",
    "keep credentials and action approval outside the model prompt."
  ],
  "Memory and state": [
    "store scoped task state, user preferences, and reusable facts with consent and expiry.",
    "separate memory from RAG over external documents.",
    "make recalled state permission-safe and traceable."
  ],
  "Inference optimization": [
    "optimize LLM engines, batching, KV cache, quantization, and TTFT.",
    "improve decode throughput after profiling the actual bottleneck.",
    "reduce serving latency without changing training data."
  ],
  "Serving and deployment": [
    "package or manage production model endpoints, artifacts, routing, and rollout.",
    "serve supported models as APIs with versioned, reproducible deployment assets.",
    "manage model traffic, canary rollout, and endpoint lifecycle."
  ],
  "RAG and retrieval": [
    "extract, embed, index, retrieve, rerank, and assemble private knowledge at query time.",
    "ground answers in current documents without changing model weights.",
    "separate retrieval quality from fine-tuning and serving infrastructure."
  ],
  "Safety and guardrails": [
    "enforce input, dialog, retrieval, tool, and output policies around the model.",
    "block unsafe requests or tool proposals before they become user-visible actions.",
    "add programmable runtime policy without replacing IAM or document permissions."
  ],
  "Human oversight": [
    "route high-risk decisions to review and turn reviewer labels into improvement artifacts.",
    "support approvals, escalation, sampled review, and governance evidence.",
    "avoid manual review overload while preserving accountability."
  ],
  "Governance": [
    "track approvals, versions, lineage, and rollback-ready artifacts.",
    "connect release decisions to eval evidence and owners.",
    "make model, prompt, adapter, retrieval, and policy changes auditable."
  ],
  "Monitoring and profiling": [
    "diagnose CPU/GPU timelines, kernel bottlenecks, trace gaps, and live system health.",
    "decide whether the bottleneck is launch overhead, a hot kernel, communication, or queueing.",
    "turn traces and profiler evidence into targeted optimization work."
  ],
  "Evaluation": [
    "run model, RAG, or agent evaluations with benchmarks, judges, regressions, and human labels.",
    "compare variants before release and catch quality or safety regressions.",
    "measure task quality rather than only operational metrics."
  ]
};

const wrongPatterns = [
  "Move the workload to a larger model and leave the surrounding workflow unchanged.",
  "Rely on prompt wording alone to enforce the operational constraint.",
  "Add more GPUs before measuring which stage is actually constrained.",
  "Skip evaluation until after user feedback arrives in production.",
  "Store all retrieved content in the prompt without metadata or access filtering.",
  "Treat the registry, model family, and serving endpoint as the same layer.",
  "Tune model weights to solve a problem caused by missing retrieval or permissions.",
  "Remove logging to reduce overhead, then debug failures from user reports.",
  "Use manual review for every request, including low-risk deterministic actions.",
  "Increase context length and pass every available document to the model."
];

const distractorByLifecycle = {
  "Data preparation": "NIM",
  "Model selection": "TensorRT-LLM",
  "Training and customization": "NIM",
  "Foundation training": "NeMo Guardrails",
  "Agent orchestration": "Nsight Compute",
  "Tool execution": "Nemotron models",
  "Memory and state": "NeMo Curator",
  "Inference optimization": "NeMo Evaluator",
  "Serving and deployment": "NeMo Curator",
  "RAG and retrieval": "NCCL",
  "Safety and guardrails": "RAPIDS",
  "Human oversight": "TensorRT-LLM",
  "Governance": "Triton Inference Server",
  "Monitoring and profiling": "NeMo Customizer",
  "Evaluation": "NIM Operator"
};

const agenticDomainConcepts = {
  "Agent Architecture and Design": [
    ["agent vs workflow", "choose the least autonomous pattern that satisfies the task and risk", "calling every LLM-backed flow an agent"],
    ["workflow graph", "use explicit states and gates for predictable or high-risk processes", "unbounded autonomy"],
    ["router", "classify intent, risk, and evidence need before choosing a path", "largest model for every request"],
    ["ReAct loop", "iterate observe, reason, act, and verify with stopping criteria", "one-shot planning for changing tool results"],
    ["plan-and-execute", "plan subgoals, execute steps, and replan when observations invalidate the plan", "continuing a stale plan"],
    ["supervisor orchestration", "centralize routing, approvals, and handoffs across specialist agents", "peer agents triggering production actions directly"],
    ["multi-agent roles", "split agents only when roles, tools, or permissions are meaningfully different", "adding agents to increase intelligence"],
    ["tool boundary", "keep model reasoning separate from server-side execution authority", "letting prompt text grant tool access"],
    ["observe-reason-act loop", "use iterative observation and re-planning when the environment changes", "one-shot planning for streaming incidents"],
    ["evidence gate", "require retrieval and tool observations before a decision node", "letting the first retrieved document decide"],
    ["risk router", "route simple cases to deterministic paths and high-risk cases to review", "free-form autonomy for all requests"],
    ["state owner", "assign one runtime owner for state transitions and handoffs", "peer agents overwriting each other"]
  ],
  "Agent Development": [
    ["schema validation", "validate tool arguments before execution", "asking the model to promise valid JSON"],
    ["tool selection", "choose tools from task need, preconditions, and allowed actions", "exposing every tool to every agent"],
    ["function calling", "bind model proposals to typed server-side functions", "letting the model execute side effects directly"],
    ["structured output", "validate machine-consumed responses against a schema", "free-form prose for downstream APIs"],
    ["idempotency", "use keys and transaction-state checks for mutating APIs", "retrying mutations blindly"],
    ["sandboxing", "run generated code in isolated environments without production credentials", "keyword filters as the main control"],
    ["tool contracts", "define tool inputs, outputs, permissions, and failure modes", "letting each prompt invent tool behavior"],
    ["parallel tool calls", "parallelize independent read-only calls while serializing dependent or mutating calls", "parallelizing every action"],
    ["bounded retries", "retry transient failures with limits, backoff, and escalation", "infinite retry loops"],
    ["graceful failure", "return a safe fallback or escalation path when tools or evidence fail", "hallucinating through missing evidence"],
    ["prompt chain", "version and test chained prompts that transform state", "editing chained prompts with no regression tests"],
    ["regression tests", "turn observed failures into repeatable test cases", "debugging only through transcripts"]
  ],
  "Evaluation and Tuning": [
    ["trajectory evaluation", "score tool choice, retrieval, safety, latency, and final answer together", "scoring only the final text"],
    ["tool-call success", "measure whether the right tool was called with valid arguments and safe timing", "only checking final answer style"],
    ["groundedness", "verify answer claims against retrieved evidence and citations", "trusting fluent answers"],
    ["task success", "measure whether the user goal was completed, not just whether text looked plausible", "BLEU-style text similarity for agent success"],
    ["latency and cost eval", "include p95/p99, TTFT, tool wait, and cost per task in release gates", "quality-only evals"],
    ["bootstrap evals", "create verified question-chunk pairs when labels are missing", "agent self-judgment as ground truth"],
    ["LLM-as-judge calibration", "anchor judge rubrics with human labels and disagreement review", "trusting a judge score with no calibration"],
    ["regression suite", "compare prompt, model, retrieval, and tool changes before release", "changing several layers with one score"],
    ["ablation", "isolate whether prompt, retrieval, model, or tools caused the failure", "fine-tuning without root cause analysis"]
  ],
  "Deployment and Scaling": [
    ["stateless services", "deploy agent components as horizontally scalable services", "sticky in-process state"],
    ["queue depth", "scale or isolate lanes when waiting work grows", "registered user count as the scaling metric"],
    ["p95/p99 latency", "debug tail latency by span before adding capacity", "average latency as the only signal"],
    ["TTFT", "separate first-token delay from total completion time", "tokens-per-second alone"],
    ["workload isolation", "separate real-time, batch, embedding, and high-risk lanes", "one shared queue"],
    ["traffic shaping", "use rate limits, priority queues, and load shedding under saturation", "letting queues grow unbounded"],
    ["canary rollout", "route a small traffic slice with quality and safety gates", "big-bang rollout"],
    ["blue-green rollback", "switch between versioned environments with rollback evidence", "manual restarts as the rollout plan"],
    ["autoscaling", "scale model, retrieval, and tool workers by their own bottlenecks", "scaling only the LLM"],
    ["backpressure", "slow, reject, or degrade new work before dependencies cascade", "unbounded retries"],
    ["circuit breaker", "stop calling a failing dependency until it recovers", "retrying every timed-out tool call"],
    ["bulkhead", "isolate dependencies or lanes so one failure does not exhaust all workers", "one global worker pool"],
    ["fallback", "use measured fallbacks for model or tool failures", "silent degradation with no trace"]
  ],
  "Cognition, Planning, and Memory": [
    ["task decomposition", "break a complex goal into explicit subgoals and dependencies", "single prompt for every long task"],
    ["planning budget", "limit tool calls and add stopping criteria", "open-ended exploration"],
    ["reflection", "use a critic to verify evidence sufficiency and plan quality", "exposing private chain-of-thought"],
    ["working memory", "track task state needed for the current workflow", "storing every observation forever"],
    ["session memory", "remember context for the current session only", "long-term persistence by default"],
    ["episodic memory", "retain useful prior interactions with consent and expiration", "confusing memory with public document retrieval"],
    ["semantic memory", "store reusable facts separately from raw conversation logs", "dumping transcripts into context"],
    ["long-term memory", "persist durable preferences or facts with consent, TTL, and deletion", "remembering everything forever"],
    ["memory write policy", "decide what can be written, updated, recalled, or deleted", "model-driven memory writes"],
    ["memory vs RAG", "use memory for user/task state and RAG for external documents", "treating document retrieval as personal memory"],
    ["state ownership", "make one runtime own canonical state transitions", "agents overwriting each other"]
  ],
  "Knowledge Integration and Data Handling": [
    ["permissioned RAG", "filter by ACL before chunks enter context", "post-answer filtering"],
    ["document ETL", "extract, clean, segment, and normalize documents before indexing", "raw PDFs pasted into prompts"],
    ["chunking and metadata", "preserve source, tenant, time, and sensitivity metadata", "anonymous chunks with no lineage"],
    ["embeddings", "represent chunks and queries for semantic retrieval", "chat completion models as vector indexes"],
    ["vector database", "index embeddings with metadata filters and update policy", "prompt context as the database"],
    ["hybrid search", "combine lexical and vector retrieval when exact terms and semantics both matter", "semantic search only"],
    ["reranking", "rerank candidate chunks before context assembly", "larger context as the only fix"],
    ["data freshness", "use retrieval for changing facts", "fine-tuning on volatile policy documents"],
    ["grounded citations", "return answer evidence linked to source chunks", "uncited summaries"],
    ["knowledge graph", "represent entities and relationships when relationship reasoning matters", "flat chunks for every graph problem"],
    ["corpus governance", "track source, license, sensitivity, retention, and lineage", "unversioned document dumps"]
  ],
  "NVIDIA Platform Implementation": [
    ["NeMo Agent Toolkit", "compose framework-flexible agent workflows with tools, retrievers, and observability", "CUDA Graphs as the agent framework"],
    ["NeMo Guardrails", "control dialog, retrieval, tool, and output behavior", "guardrails as document ACLs"],
    ["NIM", "package optimized model APIs for LLMs, embeddings, and rerankers", "NIM as the model family"],
    ["NeMo Retriever", "build enterprise extraction, embedding, indexing, retrieval, and reranking", "NeMo Curator for live RAG"],
    ["NeMo Evaluator", "run model, RAG, and agent evaluations with benchmark and judge workflows", "production uptime as quality evaluation"],
    ["NeMo Curator", "prepare, deduplicate, filter, and clean corpora before training or indexing", "Curator as the live retriever"],
    ["NIM Operator", "manage NIM deployments on Kubernetes with lifecycle and scaling controls", "NIM Operator as the inference engine"],
    ["TensorRT-LLM", "optimize LLM inference with runtime techniques such as batching and KV-cache handling", "TensorRT-LLM as an orchestration framework"],
    ["Triton Inference Server", "serve multi-framework models with batching and ensemble patterns", "Triton as a model family"],
    ["Nsight Systems", "start with end-to-end CPU/GPU timeline profiling", "kernel metrics before finding the hot kernel"],
    ["Nsight Compute", "inspect a known hot CUDA kernel after timeline profiling", "whole-application diagnosis from kernel metrics first"],
    ["NGC", "catalog and version model artifacts, containers, and resources", "NGC as the runtime endpoint"],
    ["Nemotron models", "choose NVIDIA model families for reasoning, reward, or instruction-following tasks", "Nemotron as the serving gateway"]
  ],
  "Run, Monitor, and Maintain": [
    ["trace replay", "capture spans for model, retrieval, tools, guardrails, latency, and cost", "HTTP 200 as the only success signal"],
    ["audit trail", "record model, prompt, tool, retrieval, guardrail, approval, and version metadata", "final answer logs only"],
    ["p95/p99 SLOs", "monitor tail latency alongside task quality and safety", "average latency dashboards"],
    ["TTFT monitoring", "track first-token responsiveness separately from total latency", "tokens-per-second only"],
    ["cost monitoring", "measure cost per task and per successful answer", "GPU utilization alone"],
    ["drift monitoring", "watch route mix, retrieval hit rate, judge scores, and escalation rates", "average latency only"],
    ["incident response", "convert incidents into regression tests and rollback rules", "manual transcript review only"],
    ["SLOs", "measure task success, safety blocks, p95/p99, and cost together", "model tokens/sec alone"],
    ["observability", "correlate workflow spans across services", "separate logs with no request ID"],
    ["rollback evidence", "connect bad releases to versioned artifacts and eval deltas", "unversioned hotfixes"],
    ["human-on-the-loop sampling", "sample low-risk decisions for ongoing review", "review only catastrophic failures"]
  ],
  "Safety, Ethics, and Compliance": [
    ["layered controls", "combine input, retrieval, tool, and output controls", "one final moderation pass"],
    ["prompt injection", "treat retrieved text and tool output as data, not instructions", "letting documents override system policy"],
    ["least privilege", "scope credentials to tools and roles", "giving the LLM API keys"],
    ["approval gates", "require human approval for high-impact mutations", "approval after execution"],
    ["policy testing", "test refusals, jailbreaks, and unsafe tool proposals", "spot checks only"],
    ["PII controls", "detect, redact, or block sensitive data by policy", "hoping the model ignores secrets"],
    ["bias and fairness", "measure subgroup harm and decision impact", "overall accuracy only"],
    ["data retention", "enforce TTL, deletion, and purpose limits for logs and memory", "permanent retention by default"],
    ["tool allowlist", "permit only approved tools and arguments for each role", "tool access from natural-language intent"],
    ["decision traceability", "make safety decisions reproducible from evidence and policy versions", "opaque refusal messages only"]
  ],
  "Human-AI Interaction and Oversight": [
    ["human-in-the-loop", "require approval before high-risk actions", "review after irreversible mutations"],
    ["human-on-the-loop", "sample low-risk decisions and monitor drift", "manual approval for every low-risk step"],
    ["review queues", "prioritize by risk, uncertainty, and impact", "first-in-first-out for all cases"],
    ["feedback loop", "turn review labels into evals, prompt fixes, or training data", "collecting comments with no downstream owner"],
    ["transparent handoff", "show evidence, confidence, and pending tool actions to reviewers", "asking reviewers to judge opaque outputs"],
    ["escalation threshold", "send low-confidence or high-impact cases to the right reviewer", "same path for every request"],
    ["user consent", "ask before storing preferences or using personal context beyond the session", "silent long-term memory"],
    ["override path", "allow reviewers to approve, reject, edit, or request more evidence", "binary approve-only UI"],
    ["decision traceability", "show why the agent chose a route, tool, evidence, and action", "reviewing a final answer with no trajectory"]
  ]
};

const genaiDomainConcepts = {
  "Model Optimization": [
    ["paged KV cache", "reduce fragmentation for variable-length generation", "weight quantization for a KV-cache bottleneck"],
    ["continuous batching", "admit new requests as decode slots free up", "static padding to the longest prompt"],
    ["AWQ", "preserve salient weight channels for INT4 serving", "uncalibrated per-tensor quantization"],
    ["speculative decoding", "use a small aligned draft model to accelerate a large target", "a larger teacher as the draft"],
    ["CUDA graphs", "reduce launch overhead in stable decode paths", "larger beam width for latency"]
  ],
  "GPU Acceleration and Optimization": [
    ["Nsight Systems", "identify CPU/GPU gaps, synchronization, and launch overhead", "kernel-level tuning before timeline profiling"],
    ["Nsight Compute", "inspect occupancy, memory stalls, and warp behavior for a known hot kernel", "whole-application queueing diagnosis"],
    ["NCCL collectives", "optimize all-reduce, reduce-scatter, and topology for distributed training", "HTTP routing for model APIs"],
    ["tensor parallelism", "balance memory fit against all-reduce overhead", "maximum TP as a universal answer"],
    ["NVLink/NVSwitch", "use high-bandwidth intra-node communication for model parallelism", "PCIe-only assumptions for all clusters"]
  ],
  "Prompt Engineering": [
    ["instruction hierarchy", "separate system policy, task instructions, context, and output schema", "user text overriding system policy"],
    ["few-shot examples", "teach output shape and edge cases without changing weights", "fine-tuning for a simple format issue"],
    ["structured output", "use schema constraints and validation for machine-consumed responses", "free-form prose for API payloads"],
    ["context packing", "include only relevant, ordered evidence within token budget", "dumping every document into context"],
    ["prompt regression", "version prompts and test against known failures", "editing production prompts without evals"]
  ],
  "Fine-Tuning": [
    ["LoRA/QLoRA", "adapt behavior with small trainable adapters", "full pretraining for a narrow style change"],
    ["SFT", "train on high-quality instruction-response examples", "unlabeled raw documents as SFT data"],
    ["DPO", "learn preferences from chosen/rejected pairs", "single-answer labels for preference alignment"],
    ["catastrophic forgetting", "mix representative data and evaluate old capabilities", "only testing the new domain"],
    ["continued pretraining", "adapt broad domain language before instruction tuning", "RAG for durable language style"]
  ],
  "Data Preparation": [
    ["MinHash/LSH", "remove near duplicates at corpus scale", "all-pairs comparison"],
    ["PII redaction", "combine regex, NER, classifiers, and manual review for sensitive data", "keyword-only filtering"],
    ["contamination checks", "remove benchmark/test overlaps from training data", "using eval sets as training examples"],
    ["quality filtering", "score content by language, duplication, toxicity, and usefulness", "bigger model to rescue bad data"],
    ["tokenizer coverage", "balance vocabulary and sampling across languages/domains", "English-only tokenization for multilingual requirements"]
  ],
  "Model Deployment": [
    ["NIM", "package optimized models as production microservice APIs", "training frameworks as serving endpoints"],
    ["Triton ensembles", "compose preprocessing, model execution, and postprocessing", "one custom script per model path"],
    ["NIM Operator", "manage NIM lifecycle on Kubernetes", "the inference microservice itself"],
    ["blue-green deployment", "switch traffic with rollback-ready versions", "restarting pods without quality gates"],
    ["model registry", "pin artifacts, versions, eval reports, and approvals", "registry as runtime inference"]
  ],
  "Evaluation": [
    ["perplexity", "measure next-token prediction quality for language modeling", "semantic similarity"],
    ["bootstrap confidence", "estimate score uncertainty for small differences", "choosing the winner from one noisy run"],
    ["task metrics", "use accuracy, F1, ROUGE, BLEU, NDCG, or human rubrics by task", "one metric for all tasks"],
    ["data contamination", "prevent train/test overlap and benchmark leakage", "post-hoc score interpretation only"],
    ["human evaluation", "judge nuance, safety, helpfulness, and high-stakes acceptability", "automatic metrics alone"]
  ],
  "Production Monitoring and Reliability": [
    ["p95/p99 latency", "watch tail latency, queueing, retries, and error budgets", "average latency only"],
    ["canary monitoring", "compare quality, safety, cost, and latency during rollout", "full rollout before measurement"],
    ["fallback policy", "route around unhealthy models or tools with trace evidence", "silent fallback to lower quality"],
    ["drift detection", "track input mix, retrieval hit rate, output quality, and safety events", "GPU utilization alone"],
    ["load shedding", "reject or defer low-priority work under saturation", "letting queues grow unbounded"]
  ],
  "LLM Architecture": [
    ["self-attention", "let tokens attend to context and long-range dependencies", "recurrence as the transformer core"],
    ["causal masking", "prevent decoder positions from seeing future tokens", "bidirectional attention for generation"],
    ["MoE routing", "activate sparse experts to increase capacity without full dense compute", "all experts active for every token"],
    ["embedding models", "produce vector representations for retrieval and similarity", "using a chat model endpoint for vector search"],
    ["rerankers", "rescore retrieved candidates for relevance before generation", "embedding similarity as the final answer"]
  ],
  "Safety, Ethics, and Compliance": [
    ["license constraints", "respect model, dataset, and output-use restrictions", "treating open weights as unrestricted use"],
    ["privacy controls", "redact sensitive data and enforce retention limits", "training on raw confidential logs"],
    ["bias evaluation", "measure subgroup performance and harmful outputs", "overall accuracy only"],
    ["guardrails", "apply input/output and tool-use policies around the model", "guardrails as a replacement for IAM"],
    ["auditability", "track data, model, prompt, eval, and approval lineage", "unversioned release artifacts"]
  ]
};

const generalDomainConcepts = {
  "Agent Lifecycle and Architecture": agenticDomainConcepts["Agent Architecture and Design"],
  "Data Curation and Knowledge Grounding": agenticDomainConcepts["Knowledge Integration and Data Handling"],
  "Model Selection and Customization": [
    ...genaiDomainConcepts["LLM Architecture"].slice(2),
    ...genaiDomainConcepts["Fine-Tuning"].slice(0, 3)
  ],
  "Inference Serving and Deployment": [
    ...genaiDomainConcepts["Model Deployment"].slice(0, 4),
    ...genaiDomainConcepts["Model Optimization"].slice(0, 3)
  ],
  "Evaluation and Safety": [
    ...agenticDomainConcepts["Evaluation and Tuning"].slice(0, 3),
    ...agenticDomainConcepts["Safety, Ethics, and Compliance"].slice(0, 3)
  ],
  "Tooling, Orchestration, and Memory": [
    ...agenticDomainConcepts["Agent Development"].slice(0, 3),
    ...agenticDomainConcepts["Cognition, Planning, and Memory"].slice(0, 3)
  ],
  "Human Oversight and Governance": agenticDomainConcepts["Human-AI Interaction and Oversight"],
  "Observability, Operations, and Cost": [
    ...agenticDomainConcepts["Run, Monitor, and Maintain"].slice(0, 3),
    ...genaiDomainConcepts["Production Monitoring and Reliability"].slice(0, 3)
  ]
};

const certificationConfigs = [
  {
    slug: "agentic_ai_professional",
    certDir: "certifications/agentic_ai_professional",
    prefix: "aai-hf",
    domainConcepts: agenticDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI")),
    targetPerDomain: 35,
    targetPerService: 5,
    targetNvidiaPercent: 28,
    mocksDir: "certifications/agentic_ai_professional/mocks/generated",
    mockPrefix: "balanced_mock",
    generatedMocks: 4,
    mockSize: 60
  },
  {
    slug: "genai_llms_professional",
    certDir: "certifications/genai_llms_professional",
    prefix: "genl-hf",
    domainConcepts: genaiDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("GenAI LLMs")),
    targetPerDomain: 35,
    targetPerService: 10,
    targetNvidiaPercent: 45,
    mocksDir: "certifications/genai_llms_professional/mocks/generated",
    mockPrefix: "balanced_mock",
    generatedMocks: 4,
    mockSize: 60
  },
  {
    slug: "agentic_ai_general_study",
    certDir: "certifications/agentic_ai_general_study",
    prefix: "ags-hf",
    domainConcepts: generalDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI General")),
    targetPerDomain: 35,
    targetPerService: 5,
    targetNvidiaPercent: 20,
    mocksDir: "certifications/agentic_ai_general_study/mocks/generated",
    mockPrefix: "generated_mock",
    generatedMocks: 1,
    mockSize: 24
  }
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hashNumber(...values) {
  const text = values.join("|");
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function pick(list, ...keys) {
  return list[hashNumber(...keys) % list.length];
}

function difficultyFor(index) {
  return [
    "medium", "hard", "hard", "expert", "medium",
    "hard", "expert", "medium", "hard", "hard",
    "easy", "hard", "expert", "medium", "hard",
    "hard", "expert", "medium", "hard", "hard"
  ][index % 20];
}

function generatedMockDescription(config) {
  if (config.slug === "agentic_ai_general_study") {
    return "Generated vendor-neutral study drill balanced across the General Study domains.";
  }
  const code = config.slug === "agentic_ai_professional" ? "NCP-AAI" : "NCP-GENL";
  const conceptPercent = 100 - config.targetNvidiaPercent;
  return `Generated ${config.mockSize}-question readiness mock balanced by official ${code} domain weights, with an approximate ${conceptPercent}% concept / ${config.targetNvidiaPercent}% NVIDIA-specific scope mix.`;
}

function normalizeDifficulty(difficulty) {
  if (difficulty === "advanced") return "hard";
  if (difficulty === "easier") return "easy";
  return difficulty;
}

function domainWorkload(domain) {
  const workloads = {
    "Agent Architecture and Design": "an agent workflow with explicit routing and evidence gates",
    "Agent Development": "a tool-using agent service",
    "Evaluation and Tuning": "an agent evaluation suite",
    "Deployment and Scaling": "a scalable agent deployment",
    "Cognition, Planning, and Memory": "a stateful planning workflow",
    "Knowledge Integration and Data Handling": "a permissioned RAG workflow",
    "NVIDIA Platform Implementation": "an NVIDIA-backed AI platform design",
    "Run, Monitor, and Maintain": "a monitored production agent",
    "Safety, Ethics, and Compliance": "a governed agent workflow",
    "Human-AI Interaction and Oversight": "a reviewer-facing agent workflow",
    "Model Optimization": "an LLM serving performance path",
    "GPU Acceleration and Optimization": "a GPU performance investigation",
    "Prompt Engineering": "a prompt-controlled production workflow",
    "Fine-Tuning": "a model adaptation release",
    "Data Preparation": "a model-data preparation pipeline",
    "Model Deployment": "a production model-serving rollout",
    "Evaluation": "an LLM evaluation release gate",
    "Production Monitoring and Reliability": "a monitored LLM service",
    "LLM Architecture": "a model-capability design",
    "Agent Lifecycle and Architecture": "an agent lifecycle design",
    "Data Curation and Knowledge Grounding": "a data and grounding pipeline",
    "Model Selection and Customization": "a model selection and customization path",
    "Inference Serving and Deployment": "an inference-serving rollout",
    "Evaluation and Safety": "an evaluation and safety gate",
    "Tooling, Orchestration, and Memory": "a tool-using agent workflow",
    "Human Oversight and Governance": "a governance and review workflow",
    "Observability, Operations, and Cost": "an operational monitoring plan"
  };
  return workloads[domain] || "a production AI workflow";
}

function domainSignal(domain, concept) {
  const signals = {
    "Agent Architecture and Design": `the design does not separate or audit ${concept}`,
    "Agent Development": `tool execution is unsafe because ${concept} is not enforced before execution`,
    "Evaluation and Tuning": `the release comparison lacks reliable ${concept} evidence`,
    "Deployment and Scaling": `rollout behavior is unstable because ${concept} is not measured or controlled`,
    "Cognition, Planning, and Memory": `state or planning errors point to missing ${concept}`,
    "Knowledge Integration and Data Handling": `answers lose grounding because ${concept} is not controlled`,
    "NVIDIA Platform Implementation": `the platform decision is blocked until the ${concept} layer is identified`,
    "Run, Monitor, and Maintain": `incidents cannot be explained without ${concept}`,
    "Safety, Ethics, and Compliance": `policy failures require ${concept} as an explicit control`,
    "Human-AI Interaction and Oversight": `reviewers lack the ${concept} evidence needed for decisions`,
    "Model Optimization": `serving traces show ${article(concept)} ${concept} bottleneck`,
    "GPU Acceleration and Optimization": `the performance trace points to ${concept}`,
    "Prompt Engineering": `prompt changes cause regressions around ${concept}`,
    "Fine-Tuning": `durable behavior changes require ${concept}`,
    "Data Preparation": `data quality failures point to ${concept}`,
    "Model Deployment": `the release cannot roll back cleanly without ${concept}`,
    "Evaluation": `quality scores are unreliable without ${concept}`,
    "Production Monitoring and Reliability": `operational incidents require ${concept}`,
    "LLM Architecture": `the capability limit is tied to ${concept}`
  };
  return signals[domain] || `a production failure tied to ${concept}`;
}

const domainScenarioBank = {
  "Agent Architecture and Design": [
    ["a triage assistant that may answer a FAQ, retrieve evidence, open a case, or escalate", "the prototype lets one free-form agent choose every route after reading the user message.", "auditors cannot tell when high-risk cases should leave the autonomous path", "a route and autonomy boundary before tool use"],
    ["a specialist-agent workflow for regulated operations", "peer agents can hand work to each other without a single state owner.", "handoffs lose approvals, confidence, and evidence references", "centralized state ownership for handoffs"],
    ["an incident-support assistant with changing tool observations", "the design uses a static one-shot plan even when tool results contradict earlier assumptions.", "the next action depends on the latest observation", "bounded re-planning with stopping criteria"]
  ],
  "Agent Development": [
    ["a tool-using agent that can create tickets, issue refunds, and query private systems", "tool arguments are copied from model text directly into APIs.", "bad JSON, missing permissions, and duplicate writes appear during retries", "typed contracts and server-side validation before execution"],
    ["an API workflow with both read-only and mutating tools", "all tool calls are retried the same way after timeouts.", "duplicate mutations and hidden partial failures are reaching production", "idempotency, bounded retries, and safe fallback states"],
    ["a multi-step prompt chain that writes structured records", "prompt edits are made without versioned outputs or regression tests.", "a formatting fix breaks downstream parsers", "schema validation and repeatable tests for chained outputs"]
  ],
  "Evaluation and Tuning": [
    ["an agent release that changes prompts, retrieval, and tool routing", "the release gate checks only the final answer text.", "wrong tools and missing evidence still produce fluent answers", "trajectory-level evaluation"],
    ["a RAG agent for policy questions", "the team trusts an LLM judge score with no human calibration.", "judge ratings disagree with reviewers on edge cases", "calibrated rubrics and disagreement review"],
    ["a new model route for agent tasks", "several layers changed at once and one aggregate score improved.", "nobody can tell whether quality came from retrieval, model, prompt, or tools", "ablation and regression comparison by layer"]
  ],
  "Deployment and Scaling": [
    ["a chat agent and an overnight report generator sharing the same serving lane", "average latency looks fine but p99 time-to-first-token jumps during batch jobs.", "interactive users wait behind long batch requests", "workload isolation and tail-latency tracing"],
    ["a production agent with model, retrieval, tools, and guardrails", "the team wants to add GPUs after a latency complaint.", "trace spans show tool calls and queue delay dominate the slow requests", "bottleneck-specific scaling"],
    ["a new endpoint profile for a high-traffic launch", "the rollout plan switches all users at once.", "quality, safety, cost, and rollback evidence are not tied to the traffic ramp", "canary or blue-green rollout gates"]
  ],
  "Cognition, Planning, and Memory": [
    ["a long-running assistant that plans subtasks and revisits earlier results", "the agent stores every observation forever.", "old session details reappear where they are irrelevant or unauthorized", "scoped memory with consent and expiry"],
    ["a planning agent that can call search, calculators, and case tools", "the loop keeps exploring after enough evidence exists.", "tool-call budgets are exceeded and reviewers cannot see why the plan stopped", "planning budget and explicit stopping criteria"],
    ["a user-support agent with recurring customer preferences", "private documents and personal preferences are handled as one memory store.", "document ACLs and user consent rules are being mixed", "separate RAG evidence from personal memory"]
  ],
  "Knowledge Integration and Data Handling": [
    ["an enterprise RAG assistant over changing private policies", "chunks enter the prompt before tenant and permission filters run.", "users can receive evidence they could not access in the source system", "permission filtering before context assembly"],
    ["a document-grounded assistant with poor citations", "retrieved chunks have no source, timestamp, tenant, or sensitivity metadata.", "answers cannot prove which evidence was used", "metadata-preserving chunking and citations"],
    ["a support agent that misses exact product codes and semantic paraphrases", "the retriever uses only one search mode.", "some questions require exact terms while others require semantic similarity", "hybrid retrieval and reranking"]
  ],
  "NVIDIA Platform Implementation": [
    ["an NVIDIA-backed agent platform where teams must choose the right component", "the design picks a product by name similarity.", "the requirement actually belongs to orchestration, retrieval, serving, evaluation, or profiling", "lifecycle-first NVIDIA component selection"],
    ["a production LLM stack using NVIDIA tools", "the team treats the model family, endpoint, operator, and profiler as interchangeable.", "implementation choices land in the wrong layer", "separate model, runtime, endpoint, orchestration, and diagnostics"],
    ["a platform review with NeMo, NIM, Triton, TensorRT-LLM, and Nsight options", "the first answer jumps to a product before identifying the bottleneck.", "the clue is about where the work happens, not which name is familiar", "match product to the actual lifecycle signal"]
  ],
  "Run, Monitor, and Maintain": [
    ["a live agent that uses retrieval, tools, guardrails, and model calls", "logs record only HTTP status and final text.", "incidents cannot be replayed or tied to model, prompt, tool, or policy versions", "span-level traces and versioned replay data"],
    ["a mature deployment with changing user traffic", "dashboards show average latency and GPU utilization only.", "route mix, retrieval hit rate, p99, safety blocks, and escalation rates are drifting", "multi-signal operational monitoring"],
    ["a release that caused a subtle quality regression", "the team fixes prompts directly in production.", "there is no incident-to-eval path or rollback evidence", "convert incidents into regression tests and versioned rollback rules"]
  ],
  "Safety, Ethics, and Compliance": [
    ["an agent that reads retrieved documents and proposes tool actions", "retrieved text can override system policy.", "a malicious document tells the agent to ignore approval requirements", "treat retrieved text as data and enforce layered controls"],
    ["a tool-enabled workflow for high-impact decisions", "approval happens after the mutation completes.", "reviewers can only inspect the final answer", "pre-action approval gates with evidence and policy trace"],
    ["a system that stores interaction logs and memory", "sensitive data is retained indefinitely.", "PII and user preferences outlive their allowed purpose", "retention, deletion, and purpose-bound controls"]
  ],
  "Human-AI Interaction and Oversight": [
    ["a reviewer console for high-risk agent actions", "reviewers see a final recommendation without evidence, confidence, or pending tool effects.", "they cannot tell whether to approve, reject, or request more information", "transparent handoff with decision traceability"],
    ["a mixed-risk workflow with many low-risk requests", "every case requires manual approval.", "review queues are overwhelmed and high-risk cases wait too long", "risk-tiered HITL and HOTL review"],
    ["a deployed agent that receives reviewer corrections", "feedback is collected in comments but never becomes evals or training artifacts.", "the same failure repeats across releases", "feedback loop ownership"]
  ]
};

function domainScenario(domain, concept, correctIdea, trap, index) {
  const [workload, contextFailure, evidence, target] = pick(
    domainScenarioBank[domain] || [[domainWorkload(domain), `${domainSignal(domain, concept)}.`, `the failure is tied to ${concept}`, correctIdea]],
    domain,
    concept,
    index,
    "scenario"
  );
  const cleanCorrectIdea = sentenceFragment(correctIdea);
  const alignedFailures = [
    `The current design still relies on ${sentenceFragment(trap)}. Reviewers need a control that can ${cleanCorrectIdea}.`,
    `The failure appears when the system keeps ${sentenceFragment(trap)} as the workaround. The release needs a design step that can ${cleanCorrectIdea}.`,
    `${capitalize(sentenceFragment(trap))} is being used as the shortcut, but it does not give the team a reliable way to ${cleanCorrectIdea}.`,
    `The team can reproduce the failure around ${sentenceFragment(trap)}. The missing control is the one that can ${cleanCorrectIdea}.`,
    `${capitalize(sentenceFragment(evidence || contextFailure))}. The safer design is the one that can ${cleanCorrectIdea}.`
  ];
  const failure = sentence(pick(alignedFailures, domain, concept, index, "aligned-failure"));
  return {
    workload,
    failure,
    evidence: sentenceFragment(evidence),
    target: `${sentenceFragment(target)} and ${cleanCorrectIdea}`,
    explanation: `${capitalize(concept)} is the missing control in this scenario. The right answer makes it explicit so the system can ${cleanCorrectIdea}.`
  };
}

function makeDomainQuestion(config, domain, index, existingCount) {
  const concepts = config.domainConcepts[domain] || [["lifecycle boundary", "choose the control that acts at the failing layer", "generic tool choice"]];
  const [concept, correctIdea, trap] = concepts[index % concepts.length];
  const industry = pick(industries, config.slug, domain, index, "industry");
  const verb = pick(actionVerbs, config.slug, domain, index, "verb");
  const difficulty = difficultyFor(existingCount + index);
  const id = `${config.prefix}-${slugify(domain)}-${String(index + 1).padStart(3, "0")}`;
  const scenario = domainScenario(domain, concept, correctIdea, trap, index);
  const question = pick(domainStemPatterns, config.slug, domain, index, "stem")({ industry, domain, concept, correctIdea, trap, verb, scenario });
  const correct = domainCorrectChoice(concept, correctIdea, index, scenario);
  const distractors = domainDistractors(config, domain, concept, trap, index, scenario).filter((value, position, list) => (
    list.indexOf(value) === position && value !== correct
  ));
  return buildQuestion({
    id,
    domain,
    topic: `${concept}; ${config.slug}`,
    difficulty,
    question,
    correct,
    distractors: distractors.slice(0, 3),
    explanation: scenario.explanation,
    wrongReason: (choice) => domainWrongReason(choice, concept, trap, scenario),
    scope: domainQuestionScope(config, domain, concept, correctIdea, trap)
  });
}

function domainQuestionScope(config, domain, concept, correctIdea, trap) {
  if (config.slug === "agentic_ai_professional" && domain === "NVIDIA Platform Implementation") {
    return "nvidia_specific";
  }
  if (nvidiaScopePattern.test(`${domain} ${concept} ${correctIdea} ${trap}`)) {
    return "nvidia_specific";
  }
  return "general_concept";
}

function domainCorrectChoice(concept, correctIdea, index) {
  const cleanCorrectIdea = sentenceFragment(correctIdea);
  const choices = [
    `Make ${concept} explicit in the workflow: ${cleanCorrectIdea}.`,
    `Use ${concept} as the control boundary and require the system to ${cleanCorrectIdea}.`,
    `Add a release gate for ${concept}: ${cleanCorrectIdea}.`,
    `Change the design around ${concept} so the system can ${cleanCorrectIdea}.`,
    `Instrument and enforce ${concept}; the system must ${cleanCorrectIdea}.`,
    `Put ${concept} before rollout so the team can ${cleanCorrectIdea}.`
  ];
  return choices[index % choices.length].replace(/\s+/g, " ");
}

function domainDistractors(config, domain, concept, trap, index) {
  const concepts = (config.domainConcepts[domain] || [])
    .map(([name]) => name)
    .filter((name) => name && name !== concept);
  const firstNeighbor = concepts.length ? pick(concepts, config.slug, domain, concept, index, "neighbor-a") : "a neighboring lifecycle control";
  const secondNeighbor = concepts.length ? pick(concepts, config.slug, domain, concept, index, "neighbor-b") : "another release control";
  const choices = [
    `Keep ${trap} as the main control and add a dashboard for final outputs.`,
    `Prioritize ${firstNeighbor} even though the observed failure is around ${concept}.`,
    `Release prompt, model, and ${secondNeighbor} changes together with one aggregate score.`,
    `Increase model capacity or context length while leaving ${concept} implicit.`,
    `Use ${secondNeighbor} as the main gate even though reviewers are asking for ${concept} evidence.`,
    `Move the check to post-release monitoring without changing the release path for ${concept}.`
  ];
  const rotated = choices.map((_, position) => choices[(position + index) % choices.length]);
  return rotated.slice(0, 3);
}

function domainWrongReason(choice, concept, trap) {
  if (choice.includes(trap)) {
    return `It keeps ${trap} in control instead of adding a measurable ${concept} decision point.`;
  }
  if (/Release prompt, model/i.test(choice)) {
    return `Changing several layers at once makes it harder to prove whether ${concept} fixed the failure.`;
  }
  if (/post-release monitoring/i.test(choice)) {
    return `Monitoring is useful, but this scenario needs ${concept} controlled before release or execution.`;
  }
  if (/model capacity|context length/i.test(choice)) {
    return `More capacity does not fix a missing ${concept} boundary.`;
  }
  return `It moves attention to a neighboring control instead of making ${concept} testable in the scenario.`;
}

function article(value) {
  return /^[aeiou]/i.test(value) ? "an" : "a";
}

function wrongChoice(...keys) {
  return pick(wrongPatterns, ...keys);
}

function makeServiceQuestion(config, service, index, existingCount, domains) {
  const domain = serviceDomain(config, service, domains, index);
  const industry = pick(industries, config.slug, service.name, index, "industry");
  const lifecycleNeed = actionPhrase(pick(lifecycleNeeds[service.lifecycle] || constraints, config.slug, service.name, index, "need"));
  const difficulty = difficultyFor(existingCount + index + 3);
  const id = `${config.prefix}-svc-${slugify(service.name)}-${String(index + 1).padStart(3, "0")}`;
  const need = serviceNeed(service);
  const scenario = serviceScenario(service, index, lifecycleNeed);
  const topicPrefix = config.slug === "agentic_ai_general_study" ? "Study capability" : "NVIDIA service";
  const question = serviceQuestionStem(config, industry, service, scenario, need, index);
  const correct = serviceCorrectChoice(service, index);
  const distractors = serviceDistractors(config, service, index);
  return buildQuestion({
    id,
    domain,
    topic: `${topicPrefix}: ${service.name}; lifecycle: ${service.lifecycle}; ${service.quizPrompt || service.description}`,
    difficulty,
    question,
    correct,
    distractors,
    explanation: `${service.name} is the best fit because it sits in ${service.lifecycle}: ${service.description}`,
    wrongReason: (choice) => serviceWrongReason(choice, service),
    scope: config.slug === "agentic_ai_general_study" ? "general_concept" : "nvidia_specific"
  });
}

function serviceQuestionStem(config, industry, service, scenario, need, index) {
  const opener = pick(serviceOpeners, config.slug, service.name, index, "opener")({ industry, service });
  const closerSet = config.slug === "agentic_ai_general_study" ? serviceClosers.study : serviceClosers.nvidia;
  const closer = pick(closerSet, config.slug, service.name, index, "closer");
  const bridge = pick(serviceBridgePhrases, config.slug, service.name, index, "bridge");
  const compactNeed = sentenceFragment(need).replace(/^to\s+/i, "");
  const bridgeSentence = serviceBridgeSentence(bridge, compactNeed);
  const variants = [
    `${opener} ${scenario} ${closer}`,
    `${opener} ${bridgeSentence} ${closer}`,
    `${opener} ${scenario} The team wants the choice that acts at this layer, not a neighboring one. ${closer}`,
    `${opener} ${bridgeSentence} The team must avoid solving this with the wrong lifecycle layer. ${closer}`,
    `${opener} ${scenario} What should they choose before changing prompts, models, or infrastructure elsewhere?`,
    `${opener} ${bridgeSentence} What is the best first implementation choice?`
  ];
  return String(pick(variants, config.slug, service.name, index, "variant")).replace(/\s+/g, " ").trim();
}

function serviceBridgeSentence(bridge, need) {
  const cleanNeed = sentenceFragment(need).replace(/^to\s+/i, "");
  const gerund = gerundPhrase(cleanNeed);
  if (/trace points to/i.test(bridge)) {
    return `${bridge} the need to ${cleanNeed}.`;
  }
  if (/implementation requirement is/i.test(bridge)) {
    return `${bridge} to ${cleanNeed}.`;
  }
  if (/key clue is|blocker is|review finding says|release note calls out/i.test(bridge)) {
    return `${bridge} ${gerund}.`;
  }
  return `${bridge} to ${cleanNeed}.`;
}

function serviceDomain(config, service, domains, index = 0) {
  const maps = {
    agentic_ai_professional: {
      "Data preparation": "Knowledge Integration and Data Handling",
      "Training-time data curation": "Knowledge Integration and Data Handling",
      "Runtime knowledge preparation": "Knowledge Integration and Data Handling",
      "Model selection": "Agent Architecture and Design",
      "Training and customization": index % 2 === 0 ? "Evaluation and Tuning" : "NVIDIA Platform Implementation",
      "Foundation training": "NVIDIA Platform Implementation",
      "Prompt and context adaptation": "Agent Development",
      "Agent orchestration": index % 2 === 0 ? "Agent Architecture and Design" : "Agent Development",
      "Tool execution": "Agent Development",
      "Memory and state": "Cognition, Planning, and Memory",
      "Inference optimization": "Deployment and Scaling",
      "Serving and deployment": "Deployment and Scaling",
      "RAG and retrieval": "Knowledge Integration and Data Handling",
      "Safety and guardrails": "Safety, Ethics, and Compliance",
      "Human oversight": "Human-AI Interaction and Oversight",
      "Governance": "Human-AI Interaction and Oversight",
      "Monitoring and profiling": index % 2 === 0 ? "Run, Monitor, and Maintain" : "Deployment and Scaling",
      "Evaluation": "Evaluation and Tuning"
    },
    genai_llms_professional: {
      "Data preparation": "Data Preparation",
      "Model selection": "LLM Architecture",
      "Training and customization": "Fine-Tuning",
      "Inference optimization": "Model Optimization",
      "Serving and deployment": "Model Deployment",
      "RAG and retrieval": "Data Preparation",
      "Safety and guardrails": "Safety, Ethics, and Compliance",
      "Monitoring and profiling": "Production Monitoring and Reliability",
      "Evaluation": "Evaluation"
    },
    agentic_ai_general_study: {
      "Training-time data curation": "Data Curation and Knowledge Grounding",
      "Runtime knowledge preparation": "Data Curation and Knowledge Grounding",
      "Data preparation": "Data Curation and Knowledge Grounding",
      "Model selection": "Model Selection and Customization",
      "Foundation training": "Model Selection and Customization",
      "Training and customization": "Model Selection and Customization",
      "Prompt and context adaptation": "Model Selection and Customization",
      "Agent orchestration": "Tooling, Orchestration, and Memory",
      "Tool execution": "Tooling, Orchestration, and Memory",
      "Memory and state": "Tooling, Orchestration, and Memory",
      "RAG and retrieval": "Data Curation and Knowledge Grounding",
      "Safety and guardrails": "Evaluation and Safety",
      "Serving and deployment": "Inference Serving and Deployment",
      "Inference optimization": "Observability, Operations, and Cost",
      "Evaluation": "Evaluation and Safety",
      "Monitoring and profiling": "Observability, Operations, and Cost",
      "Human oversight": "Human Oversight and Governance"
    }
  };
  const mapped = maps[config.slug]?.[service.lifecycle];
  if (mapped && domains.includes(mapped)) return mapped;
  return domains.find((domain) => service.filters?.includes(domain)) || domains[0];
}

function serviceCorrectChoice(service, index) {
  return serviceChoiceText(service, index);
}

function serviceScenario(service, index, lifecycleNeed) {
  const requirement = sentenceFragment(serviceNeed(service)).replace(/^to\s+/i, "");
  const rawOptions = [
    sentence(service.scenario),
    `The rollout is blocked until the team can ${requirement}.`,
    `The next release blocker is ${gerundPhrase(lifecycleNeed)}.`,
    `The work to finish before release is ${gerundPhrase(requirement)}.`
  ].filter(Boolean);
  const raw = String(rawOptions[index % rawOptions.length]).trim();
  return raw
    .replace(/^A team\b/i, "The project team")
    .replace(/^An enterprise\b/i, "The enterprise")
    .replace(/^A company\b/i, "The company")
    .replace(/^A customer\b/i, "The customer");
}

function serviceFit(text) {
  return `it is used ${actionPhrase(serviceRequirement(text))}`;
}

function serviceChoiceText(service, index) {
  const need = sentenceFragment(serviceNeed(service)).replace(/^to\s+/i, "");
  const choices = [
    `Choose ${service.name}; it provides ${serviceDescriptionObject(service.description)}.`,
    `Use ${service.name} when you need to ${need}.`,
    `Select ${service.name}; it owns ${lowerFirst(service.lifecycle)} work such as ${gerundPhrase(serviceNeed(service))}.`,
    `${service.name} is the best fit for this layer: ${serviceDescriptionObject(service.description)}.`
  ];
  return choices[index % choices.length].replace(/\s+/g, " ").replace(/\.\.$/, ".");
}

function serviceDescriptionObject(description) {
  const clean = String(description || "").replace(/\.$/, "").trim();
  const replacements = [
    [/^Framework for\b/i, "a framework for"],
    [/^Config-driven\b/i, "a config-driven"],
    [/^Programmable rails\b/i, "programmable rails"],
    [/^NVIDIA Retriever microservice family\b/i, "the NVIDIA Retriever microservice family"],
    [/^Inference microservices\b/i, "inference microservices"],
    [/^NVIDIA model families\b/i, "NVIDIA model families"],
    [/^Production inference server\b/i, "a production inference server"],
    [/^Optimized inference stack\b/i, "an optimized inference stack"],
    [/^Catalog and registry\b/i, "a catalog and registry"],
    [/^System-wide profiler\b/i, "a system-wide profiler"],
    [/^CUDA kernel profiler\b/i, "a CUDA kernel profiler"],
    [/^Collective communication library\b/i, "a collective communication library"],
    [/^GPU-accelerated\b/i, "GPU-accelerated"],
    [/^Pipeline\/stage toolkit\b/i, "a pipeline/stage toolkit"],
    [/^Microservice\b/i, "a microservice"],
    [/^Kubernetes operator\b/i, "a Kubernetes operator"],
    [/^Distributed inference serving stack\b/i, "a distributed inference serving stack"]
  ];
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(clean)) return clean.replace(pattern, replacement);
  }
  return descriptionPhrase(clean);
}

function serviceDistractors(config, service, index) {
  if (config.slug === "agentic_ai_general_study") {
    return config.services
      .filter((candidate) => candidate.name !== service.name)
      .sort((a, b) => hashNumber(service.name, index, a.name) - hashNumber(service.name, index, b.name))
      .slice(0, 3)
      .map((candidate, position) => serviceChoiceText(candidate, index + position + 1));
  }
  const named = serviceDistractorNames(service.lifecycle)
    .map((name) => nvidiaServices.find((candidate) => candidate.name === name))
    .filter(Boolean);
  const candidates = [...named, ...config.services, ...extraServicePool(config)]
    .filter((candidate) => candidate.name !== service.name)
    .filter((candidate, position, list) => list.findIndex((item) => item.name === candidate.name) === position)
    .sort((a, b) => hashNumber(service.name, index, a.name) - hashNumber(service.name, index, b.name));
  return candidates.slice(0, 3).map((candidate, position) => serviceChoiceText(candidate, index + position + 1));
}

function extraServicePool(config) {
  return nvidiaServices.filter((service) => {
    const exams = service.exams || [];
    if (config.slug === "agentic_ai_general_study") return exams.includes("Agentic AI General");
    return exams.includes("GenAI LLMs") || exams.includes("Agentic AI");
  });
}

function serviceDistractorNames(lifecycle) {
  const names = {
    "Data preparation": ["NeMo Retriever", "NIM", "TensorRT-LLM", "NeMo Framework"],
    "Model selection": ["NIM", "NGC", "NeMo Framework", "TensorRT-LLM"],
    "Training and customization": ["NIM", "NGC", "NeMo Framework", "NeMo Customizer"],
    "Foundation training": ["NeMo Framework", "NIM", "NGC", "NeMo Guardrails"],
    "Agent orchestration": ["NeMo Guardrails", "NeMo Retriever", "NIM", "Nsight Systems"],
    "Inference optimization": ["NIM", "TensorRT-LLM", "Nsight Systems", "Nsight Compute"],
    "Serving and deployment": ["NIM", "NIM Operator", "Triton Inference Server", "NGC", "Dynamo (Triton Dynamo)"],
    "RAG and retrieval": ["NeMo Curator", "NeMo Guardrails", "NIM", "NeMo Evaluator"],
    "Safety and guardrails": ["NeMo Retriever", "NeMo Evaluator", "NIM", "NeMo Agent Toolkit"],
    "Human oversight": ["NeMo Evaluator", "NeMo Guardrails", "NeMo Agent Toolkit", "NIM"],
    "Governance": ["NGC", "NeMo Evaluator", "NIM Operator", "NeMo Guardrails"],
    "Monitoring and profiling": ["Nsight Compute", "Nsight Systems", "NeMo Evaluator", "NIM", "TensorRT-LLM"],
    "Evaluation": ["NeMo Guardrails", "Nsight Systems", "NIM Operator", "NeMo Curator"]
  };
  return names[lifecycle] || ["NIM", "NGC", "NeMo Evaluator", "Nsight Systems"];
}

function serviceNeed(service) {
  return actionPhrase(serviceRequirement(service.use));
}

function serviceRequirement(text) {
  return String(text || "")
    .trim()
    .replace(/\.$/, "")
    .replace(/^Choose it when\s+/i, "")
    .replace(/^Use it when\s+/i, "")
    .replace(/^Use it for\s+/i, "")
    .replace(/^Use when a scenario mentions\s+/i, "handle ")
    .replace(/^Use when the scenario mentions\s+/i, "handle ")
    .replace(/^Use when constraints mention\s+/i, "handle ")
    .replace(/^raw data must become/i, "prepare raw data as")
    .replace(/^Use after a specific kernel is identified and the question asks why that kernel is/i, "diagnose why a known kernel is")
    .replace(/^Use first when the question asks where time is going across/i, "identifying where time is going across")
    .replace(/^Use when the scenario asks which model family to choose for/i, "choosing a model family for")
    .replace(/^Use when the scenario references/i, "")
    .replace(/^Use when scenarios reference/i, "")
    .replace(/^Use when the scenario asks about/i, "")
    .replace(/^Use when the scenario is about/i, "")
    .replace(/^Use when the scenario is/i, "")
    .replace(/^Use when the scenario asks/i, "")
    .replace(/^Use when the question asks/i, "")
    .replace(/^Use when the scenario asks for/i, "")
    .replace(/^Use when the scenario requires/i, "")
    .replace(/^Use when scenarios involve/i, "")
    .replace(/^Use when the scenario involves/i, "")
    .replace(/^Use when constraints mention/i, "")
    .replace(/^Use when\s+/i, "")
    .replace(/^Use\s+/i, "to ")
    .replace(/^the scenario is/i, "")
    .replace(/^scenario is/i, "")
    .replace(/^the scenario asks/i, "")
    .replace(/^scenario asks/i, "")
    .replace(/^the scenario references/i, "")
    .replace(/^scenario references/i, "")
    .replace(/^references/i, "")
    .trim();
}

function capitalize(text) {
  const clean = String(text || "").trim();
  return clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : clean;
}

function lowerFirst(text) {
  const clean = String(text || "").trim();
  return clean ? clean.charAt(0).toLowerCase() + clean.slice(1) : clean;
}

function sentence(text) {
  const clean = String(text || "").trim().replace(/[.?!]$/, "");
  return clean ? `${clean}.` : "";
}

function sentenceFragment(text) {
  return String(text || "")
    .trim()
    .replace(/[.?!]$/, "")
    .replace(/^to\s+/i, "")
    .replace(/\s+/g, " ");
}

function actionPhrase(text) {
  const clean = sentenceFragment(text);
  const replacements = [
    [/^accelerating\b/i, "to accelerate"],
    [/^adapt\b/i, "to adapt"],
    [/^an agent or model must read\b/i, "to ground answers in"],
    [/^an existing model can do the task but needs\b/i, "to adapt an existing model with"],
    [/^API-driven\b/i, "to run API-driven"],
    [/^building or coordinating\b/i, "to build or coordinate"],
    [/^building, composing, testing, profiling, or observing\b/i, "to build, compose, test, profile, or observe"],
    [/^building optimized\b/i, "to build optimized"],
    [/^choosing a model family\b/i, "to choose a model family"],
    [/^connecting proprietary data\b/i, "to connect proprietary data"],
    [/^curating, deduping, filtering, or synthesizing\b/i, "to curate, dedupe, filter, or synthesize"],
    [/^data will change model behavior or validate a release:/i, "to prepare model-learning or evaluation data:"],
    [/^deciding whether\b/i, "to decide whether"],
    [/^deduplicate\b/i, "to deduplicate"],
    [/^distributed training communication\b/i, "to handle distributed training communication"],
    [/^durable behavior\b/i, "to change durable behavior"],
    [/^extract, embed\b/i, "to extract, embed"],
    [/^human approval\b/i, "to support human approval"],
    [/^how to measure\b/i, "to measure"],
    [/^identifying\b/i, "to identify"],
    [/^K8s-native\b/i, "to manage K8s-native"],
    [/^live failures\b/i, "to diagnose live failures"],
    [/^multi-framework serving\b/i, "to run multi-framework serving"],
    [/^multi-model routing\b/i, "to manage multi-model routing"],
    [/^no existing model\b/i, "to create or continue a model when no existing model"],
    [/^p99 latency\b/i, "to optimize p99 latency"],
    [/^packaged, supported\b/i, "to package and serve supported, optimized models"],
    [/^policy enforcement\b/i, "to enforce policy"],
    [/^policy flows\b/i, "to enforce policy flows"],
    [/^prepare\b/i, "to prepare"],
    [/^private or changing documents must become\b/i, "to prepare private or changing documents as"],
    [/^production model APIs\b/i, "to provide production model APIs"],
    [/^pulling\b/i, "to pull"],
    [/^remembering\b/i, "to remember"],
    [/^run scalable\b/i, "to run scalable"],
    [/^safe API calls\b/i, "to expose safe API calls"],
    [/^SFT\b/i, "to run SFT"],
    [/^standardized\b/i, "to run standardized"],
    [/^disaggregated\b/i, "to support disaggregated"]
  ];
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(clean)) return clean.replace(pattern, replacement);
  }
  if (/^must\b/i.test(clean)) return `to ${clean.replace(/^must\s+/i, "")}`;
  if (/^(to|for)\b/i.test(clean)) return clean;
  return `to ${clean}`;
}

function gerundPhrase(text) {
  const clean = sentenceFragment(text);
  const withoutTo = clean.replace(/^to\s+/i, "");
  const replacements = [
    [/^accelerate\b/i, "accelerating"],
    [/^add\b/i, "adding"],
    [/^adapt\b/i, "adapting"],
    [/^block\b/i, "blocking"],
    [/^build or coordinate\b/i, "building or coordinating"],
    [/^build, compose, test, profile, or observe\b/i, "building, composing, testing, profiling, or observing"],
    [/^build optimized\b/i, "building optimized"],
    [/^build\b/i, "building"],
    [/^choose\b/i, "choosing"],
    [/^compare\b/i, "comparing"],
    [/^connect\b/i, "connecting"],
    [/^coordinate\b/i, "coordinating"],
    [/^compose\b/i, "composing"],
    [/^create or continue\b/i, "creating or continuing"],
    [/^create\b/i, "creating"],
    [/^curate\b/i, "curating"],
    [/^change\b/i, "changing"],
    [/^decide\b/i, "deciding"],
    [/^deduplicate\b/i, "deduplicating"],
    [/^diagnose\b/i, "diagnosing"],
    [/^enforce\b/i, "enforcing"],
    [/^expose\b/i, "exposing"],
    [/^extract, embed\b/i, "extracting, embedding"],
    [/^extract\b/i, "extracting"],
    [/^ground\b/i, "grounding"],
    [/^handle\b/i, "handling"],
    [/^identify\b/i, "identifying"],
    [/^improve\b/i, "improving"],
    [/^keep\b/i, "keeping"],
    [/^make\b/i, "making"],
    [/^manage\b/i, "managing"],
    [/^measure\b/i, "measuring"],
    [/^optimize\b/i, "optimizing"],
    [/^package and serve\b/i, "packaging and serving"],
    [/^package or manage\b/i, "packaging or managing"],
    [/^package\b/i, "packaging"],
    [/^prepare\b/i, "preparing"],
    [/^provide\b/i, "providing"],
    [/^pull\b/i, "pulling"],
    [/^reduce\b/i, "reducing"],
    [/^remember\b/i, "remembering"],
    [/^route\b/i, "routing"],
    [/^run\b/i, "running"],
    [/^separate\b/i, "separating"],
    [/^serve\b/i, "serving"],
    [/^store\b/i, "storing"],
    [/^support\b/i, "supporting"],
    [/^track\b/i, "tracking"],
    [/^turn\b/i, "turning"],
    [/^validate\b/i, "validating"]
  ];
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(withoutTo)) return withoutTo.replace(pattern, replacement);
  }
  return withoutTo;
}

function serviceWrongChoice(service, index) {
  const byLifecycle = {
    "Data preparation": [
      "Use TensorRT-LLM decode optimizations even though the bottleneck is preprocessing before training or indexing.",
      "Deploy a NIM endpoint and leave the dataframe or corpus-preparation path unchanged.",
      "Move the data into prompts instead of fixing the preprocessing pipeline."
    ],
    "Serving and deployment": [
      "Fine-tune the model first even though the missing layer is a production API endpoint.",
      "Only choose a model family and leave packaging, health checks, and rollout unspecified.",
      "Profile one CUDA kernel before defining the serving endpoint and deployment path."
    ],
    "Inference optimization": [
      "Add a new data-curation step even though the measured issue is token generation latency.",
      "Change the prompt wording and leave batching, KV cache, and quantization unexamined.",
      "Treat the endpoint package as sufficient without optimizing the LLM engine behavior."
    ],
    "Training and customization": [
      "Serve the current model unchanged and hope prompt examples create durable behavior.",
      "Pick a deployment endpoint before deciding how the model should be adapted.",
      "Use a registry entry as if it trained or customized the model."
    ],
    "Safety and guardrails": [
      "Filter only the final text after unsafe retrieval or tool proposals have already happened.",
      "Use data-processing acceleration as if it enforced runtime policy.",
      "Rely on the model prompt alone for tool restrictions and refusal behavior."
    ],
    "Monitoring and profiling": [
      "Tune a random kernel before finding whether the delay is CPU, GPU, queueing, or communication.",
      "Replace the model before collecting timeline or trace evidence.",
      "Use average latency alone and ignore p95/p99, queue depth, and failed workflow steps."
    ],
    "Evaluation": [
      "Ship the change and wait for production complaints instead of comparing variants first.",
      "Monitor only infrastructure metrics even though the release needs quality evidence.",
      "Use the model's own confidence as the only evaluation signal."
    ],
    "RAG and retrieval": [
      "Fine-tune the model on private documents that change frequently.",
      "Increase context length without improving extraction, indexing, or reranking.",
      "Use a serving endpoint as if it managed document retrieval and grounding."
    ],
    "Model selection": [
      "Choose a serving stack before deciding which model family fits the task.",
      "Treat the registry, endpoint, and model family as the same decision.",
      "Optimize kernels before selecting the model capability needed by the workflow."
    ],
    "Agent orchestration": [
      "Add another model endpoint and leave workflow state, tools, and handoffs implicit.",
      "Use low-level kernel profiling as the agent workflow framework.",
      "Treat a single prompt as the whole orchestration layer."
    ]
  };
  const choices = byLifecycle[service.lifecycle] || [
    wrongChoice(service.name, index, "service-wrong"),
    "Change a neighboring lifecycle layer before addressing the stated requirement.",
    "Use prompt wording alone to solve the operational boundary."
  ];
  return choices[index % choices.length];
}

function serviceWrongReason(choice, service) {
  const chosen = [...nvidiaServices]
    .sort((a, b) => b.name.length - a.name.length)
    .find((candidate) => choice.includes(candidate.name));
  if (chosen) {
    if (chosen.lifecycle === service.lifecycle) {
      return `${chosen.name} is a neighboring ${lowerFirst(service.lifecycle)} component, but this signal asks specifically for ${service.name}: ${serviceNeed(service)}.`;
    }
    return `${chosen.name} belongs to ${chosen.lifecycle || "a neighboring layer"}, while this scenario asks for ${service.lifecycle}.`;
  }
  return `${service.avoid || "It addresses a neighboring layer rather than the stated requirement."}`;
}

function descriptionPhrase(description) {
  const clean = String(description || "").replace(/\.$/, "").trim();
  if (/^(NVIDIA|NIM|CUDA|GPU|LLM|RAG|Kubernetes|Microservice|Framework-agnostic)\b/.test(clean)) {
    return clean;
  }
  return clean ? clean.charAt(0).toLowerCase() + clean.slice(1) : clean;
}

function buildQuestion({ id, domain, topic, difficulty, question, correct, distractors, explanation, wrongReason, scope = "general_concept" }) {
  const choices = [correct, ...distractors.slice(0, 3)];
  const rotate = hashNumber(id) % 4;
  const rotated = choices.map((_, index) => choices[(index + rotate) % choices.length]);
  const answer = rotated.indexOf(correct);
  const letters = ["A", "B", "C", "D"];
  const why = rotated.map((choice, index) => {
    if (index === answer) return "";
    if (/neighboring NVIDIA component/.test(choice)) return "It names a real component, but the lifecycle layer does not match the requirement.";
    if (/larger model|more GPUs|context length|prompt wording/i.test(choice)) return "It changes capacity or wording before fixing the measured root cause.";
    return typeof wrongReason === "function" ? wrongReason(choice) : wrongReason;
  });
  return {
    id,
    domain,
    topic,
    difficulty: normalizeDifficulty(difficulty),
    scope,
    question,
    choices: rotated,
    answer,
    explanation,
    whyWrong: why
  };
}

function questionToMarkdown(question, ordinal) {
  const letters = ["A", "B", "C", "D"];
  return [
    `### Q${ordinal}: ${question.question}`,
    `- ID: ${question.id}`,
    `- Domain: ${question.domain}`,
    `- Topic: ${question.topic}`,
    `- Difficulty: ${question.difficulty}`,
    `- Scope: ${question.scope || "general_concept"}`,
    `- Source: generated`,
    ...question.choices.map((choice, index) => `- ${letters[index]}. ${choice}`),
    `- Answer: ${letters[question.answer]}`,
    `- Explanation: ${question.explanation}`,
    ...question.choices.map((_, index) => index === question.answer ? null : `- Why ${letters[index]} is wrong: ${question.whyWrong[index] || "It targets the wrong layer for the scenario."}`).filter(Boolean),
    ""
  ].join("\n");
}

async function readBlueprintHeader(certDir) {
  const blueprint = JSON.parse(await readFile(path.join(root, certDir, "blueprint.json"), "utf8"));
  return [
    `- Name: ${blueprint.name || "Certification"}`,
    `- Code: ${blueprint.code || "CERT"}`,
    `- Duration Minutes: ${blueprint.format?.durationMinutes || 120}`,
    `- Question Range: ${blueprint.format?.questionCount ? `${blueprint.format.questionCount.min}-${blueprint.format.questionCount.max}` : "60-70"}`,
    `- Level: ${blueprint.level || "Professional"}`,
    `- Source: ${blueprint.homepage || "https://www.nvidia.com/en-us/learn/certification/"}`,
    "",
    "## Blueprint Domains",
    ...(blueprint.domains || []).map((domain) => `- ${domain.name}: ${domain.weight}%`),
    "",
    "## Questions",
    ""
  ].join("\n");
}

async function readQuestionFiles(folder, matcher) {
  const entries = await readdir(folder).catch((err) => {
    if (err.code === "ENOENT") return [];
    throw err;
  });
  const parts = [];
  for (const file of entries.filter(matcher).sort()) {
    const markdown = await readFile(path.join(folder, file), "utf8");
    const firstQ = markdown.search(/^###\s*Q\d+:/m);
    if (firstQ !== -1) parts.push(markdown.slice(firstQ).trim());
  }
  return parts.join("\n\n");
}

async function loadBaseMarkdown(config) {
  const certDir = path.join(root, config.certDir);
  return [
    await readBlueprintHeader(config.certDir),
    await readQuestionFiles(path.join(certDir, "mocks", "original"), (file) => file.endsWith(".questions.md"))
  ].filter(Boolean).join("\n\n");
}

async function loadCombinedMarkdown(config, generatedQuestions) {
  const base = await loadBaseMarkdown(config);
  return [
    base,
    ...generatedQuestions.map((question, index) => questionToMarkdown(question, activeQuestions(base).length + index + 1))
  ].join("\n");
}

async function writeGeneratedShards(config, questions, size = 100) {
  const generatedDir = path.join(root, config.certDir, "generated");
  await mkdir(generatedDir, { recursive: true });
  const existing = await readdir(generatedDir).catch((err) => {
    if (err.code === "ENOENT") return [];
    throw err;
  });
  await Promise.all(existing
    .filter((file) => /^high_fidelity_\d+\.md$/.test(file))
    .map((file) => rm(path.join(generatedDir, file), { force: true })));
  for (let i = 0; i < questions.length; i += size) {
    const chunk = questions.slice(i, i + size);
    const number = String(Math.floor(i / size) + 1).padStart(3, "0");
    const markdown = [
      `# High Fidelity Generated Questions ${number}`,
      "",
      "## Questions",
      "",
      ...chunk.map((question, index) => questionToMarkdown(question, index + 1))
    ].join("\n").trimEnd() + "\n";
    await writeFile(path.join(generatedDir, `high_fidelity_${number}.md`), markdown);
  }
}

function activeQuestions(markdown) {
  const seen = new Set();
  return parseExamMarkdown(markdown).questions.filter((question) => {
    if (question.status === "inactive" || seen.has(question.id)) return false;
    seen.add(question.id);
    return true;
  });
}

function countBy(items, keyFn) {
  return items.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function mockQuestionPool(questions, mock, key) {
  return [...questions].sort((a, b) => hashNumber(a.id, mock, key) - hashNumber(b.id, mock, key));
}

function inferQuestionScope(question) {
  if (question.questionScope === "general_concept" || question.questionScope === "nvidia_specific") {
    return question.questionScope;
  }
  if (question.scope === "general_concept" || question.scope === "nvidia_specific") {
    return question.scope;
  }
  const haystack = `${question.domain || ""} ${question.topic || ""} ${question.question || ""} ${question.explanation || ""}`;
  return nvidiaScopePattern.test(haystack) ? "nvidia_specific" : "general_concept";
}

function targetDomainQuotas(domains, mockSize) {
  const totalWeight = domains.reduce((sum, domain) => sum + Number(domain.weight || 0), 0) || 100;
  const raw = domains.map((domain) => ({
    name: domain.name,
    exact: (Number(domain.weight || 0) / totalWeight) * mockSize
  }));
  const quotas = Object.fromEntries(raw.map((item) => [item.name, Math.max(1, Math.floor(item.exact))]));
  let assigned = Object.values(quotas).reduce((sum, value) => sum + value, 0);
  const byRemainder = [...raw].sort((a, b) => (b.exact - Math.floor(b.exact)) - (a.exact - Math.floor(a.exact)));
  let cursor = 0;
  while (assigned < mockSize) {
    quotas[byRemainder[cursor % byRemainder.length].name] += 1;
    assigned += 1;
    cursor += 1;
  }
  while (assigned > mockSize) {
    const removable = [...raw]
      .filter((item) => quotas[item.name] > 1)
      .sort((a, b) => (a.exact - Math.floor(a.exact)) - (b.exact - Math.floor(b.exact)))[0];
    if (!removable) break;
    quotas[removable.name] -= 1;
    assigned -= 1;
  }
  return quotas;
}

function targetDifficultySequence(config, mock, mockSize) {
  const mix = config.slug === "agentic_ai_general_study"
    ? { medium: 6, hard: 14, expert: 4 }
    : { medium: 12, hard: 34, expert: 14 };
  const sequence = [];
  for (const [difficulty, count] of Object.entries(mix)) {
    for (let i = 0; i < count; i += 1) sequence.push(difficulty);
  }
  while (sequence.length < mockSize) sequence.push("hard");
  return sequence
    .slice(0, mockSize)
    .sort((a, b) => hashNumber(config.slug, mock, a, "difficulty") - hashNumber(config.slug, mock, b, "difficulty"));
}

function takeQuestion(pool, seen, preferredScope, fallbackScope, preferredDifficulty) {
  const scopes = [];
  if (preferredScope) scopes.push(preferredScope);
  if (fallbackScope && fallbackScope !== preferredScope) scopes.push(fallbackScope);
  scopes.push(null);
  const difficulties = preferredDifficulty
    ? [preferredDifficulty, ...["hard", "medium", "expert", "easy"].filter((item) => item !== preferredDifficulty)]
    : [null];

  for (const scope of scopes) {
    for (const difficulty of difficulties) {
      const candidate = pool.find((question) => {
        if (!question || seen.has(question.id)) return false;
        if (scope && inferQuestionScope(question) !== scope) return false;
        if (difficulty && question.difficulty !== difficulty) return false;
        return true;
      });
      if (candidate) {
        return candidate;
      }
    }
  }
  return null;
}

function targetNvidiaQuotas(config, domains, quotas, targetNvidiaCount) {
  const result = Object.fromEntries(domains.map((domain) => [domain.name, 0]));
  let reserved = 0;
  if (config.slug === "agentic_ai_professional" && result["NVIDIA Platform Implementation"] !== undefined) {
    result["NVIDIA Platform Implementation"] = Math.min(quotas["NVIDIA Platform Implementation"] || 0, targetNvidiaCount);
    reserved += result["NVIDIA Platform Implementation"];
  }

  const remainingTarget = Math.max(0, targetNvidiaCount - reserved);
  const candidates = domains
    .filter((domain) => !(config.slug === "agentic_ai_professional" && domain.name === "NVIDIA Platform Implementation"))
    .map((domain) => ({ name: domain.name, quota: quotas[domain.name] || 0 }))
    .filter((item) => item.quota > 0);
  const candidateSlots = candidates.reduce((sum, item) => sum + item.quota, 0) || 1;
  const ranked = candidates.map((item) => {
    const exact = (item.quota / candidateSlots) * remainingTarget;
    const base = Math.min(item.quota, Math.floor(exact));
    result[item.name] = base;
    return { ...item, exact, remainder: exact - base };
  });
  let assigned = reserved + ranked.reduce((sum, item) => sum + result[item.name], 0);
  for (const item of ranked.sort((a, b) => b.remainder - a.remainder || b.quota - a.quota)) {
    if (assigned >= targetNvidiaCount) break;
    if (result[item.name] >= item.quota) continue;
    result[item.name] += 1;
    assigned += 1;
  }
  return result;
}

function rebalanceScope(selected, pool, targetNvidiaCount, mock, key) {
  const result = [...selected];
  const seen = new Set(result.map((question) => question.id));
  let currentNvidiaCount = result.filter((question) => inferQuestionScope(question) === "nvidia_specific").length;
  let guard = 0;

  while (currentNvidiaCount < targetNvidiaCount && guard < result.length * 2) {
    guard += 1;
    const replaceIndex = result.findIndex((question) => {
      if (!question || inferQuestionScope(question) !== "general_concept") return false;
      return pool.some((candidate) => (
        candidate.domain === question.domain &&
        !seen.has(candidate.id) &&
        inferQuestionScope(candidate) === "nvidia_specific"
      ));
    });
    if (replaceIndex === -1) break;

    const oldQuestion = result[replaceIndex];
    const candidates = pool
      .filter((candidate) => (
        candidate.domain === oldQuestion.domain &&
        !seen.has(candidate.id) &&
        inferQuestionScope(candidate) === "nvidia_specific"
      ))
      .sort((a, b) => {
        const aDifficulty = a.difficulty === oldQuestion.difficulty ? 0 : 1;
        const bDifficulty = b.difficulty === oldQuestion.difficulty ? 0 : 1;
        if (aDifficulty !== bDifficulty) return aDifficulty - bDifficulty;
        return hashNumber(a.id, mock, key, "scope-rebalance") - hashNumber(b.id, mock, key, "scope-rebalance");
      });
    if (!candidates.length) break;

    seen.delete(oldQuestion.id);
    result[replaceIndex] = candidates[0];
    seen.add(candidates[0].id);
    currentNvidiaCount += 1;
  }

  return result;
}

function serviceMentions(questions, services) {
  return Object.fromEntries(services.map((service) => {
    const pattern = new RegExp(escapeRegExp(service.name), "i");
    return [service.name, questions.filter((question) => pattern.test(`${question.topic} ${question.question} ${question.explanation}`)).length];
  }));
}

function serviceQuestionCounts(questions, services) {
  return Object.fromEntries(services.map((service) => {
    const prefix = `NVIDIA service: ${service.name};`;
    return [service.name, questions.filter((question) => String(question.topic || "").startsWith(prefix)).length];
  }));
}

function buildGeneratedQuestions(config, markdown) {
  const existing = activeQuestions(markdown);
  const domains = parseExamMarkdown(markdown).domains.map((domain) => domain.name);
  const byDomain = countBy(existing, (question) => question.domain);
  const generated = [];
  for (const domain of domains) {
    const target = config.targetPerDomain;
    const current = byDomain[domain] || 0;
    for (let i = 0; i < Math.max(0, target - current); i += 1) {
      generated.push(makeDomainQuestion(config, domain, i, current));
    }
  }

  const afterDomain = [...existing, ...generated];
  const serviceCounts = serviceQuestionCounts(afterDomain, config.services);
  for (const service of config.services) {
    const current = serviceCounts[service.name] || 0;
    for (let i = 0; i < Math.max(0, config.targetPerService - current); i += 1) {
      generated.push(makeServiceQuestion(config, service, i, current, domains));
    }
  }
  return generated;
}

function validateQuestionText(questions) {
  const ids = new Set();
  const failures = [];
  for (const question of questions) {
    if (ids.has(question.id)) failures.push(`Duplicate ID ${question.id}`);
    ids.add(question.id);
    const text = `${question.question} ${question.choices.join(" ")} ${question.explanation}`;
    for (const pattern of banned) {
      const match = text.match(pattern);
      if (match) {
        const start = Math.max(0, match.index - 45);
        const end = Math.min(text.length, match.index + match[0].length + 45);
        failures.push(`Banned phrase in ${question.id}: ${pattern} -> ${text.slice(start, end)}`);
      }
    }
    if (/NVIDIA service:/i.test(question.topic) && !serviceSignalPattern.test(question.question)) {
      failures.push(`Service stem lacks a concrete operational signal in ${question.id}`);
    }
    if (question.choices.length !== 4) failures.push(`Wrong choice count in ${question.id}`);
    if (!["easy", "medium", "hard", "expert"].includes(question.difficulty)) failures.push(`Bad difficulty in ${question.id}: ${question.difficulty}`);
    if (!/[.?]$/.test(question.question)) failures.push(`Question does not end as a sentence in ${question.id}`);
  }
  if (failures.length) {
    throw new Error(`Generated bank failed validation:\n${failures.slice(0, 40).join("\n")}`);
  }
}

async function rebuildGeneratedMocks(config, markdown) {
  const parsed = parseExamMarkdown(markdown);
  const allQuestions = parsed.questions.filter((question) => !question.id.includes("-old-"));
  const questions = allQuestions.filter((question) => question.source === "high_fidelity_generated");
  const byDomain = new Map(parsed.domains.map((domain) => [domain.name, questions.filter((question) => question.domain === domain.name)]));
  await mkdir(path.join(root, config.mocksDir), { recursive: true });

  for (let mock = 1; mock <= config.generatedMocks; mock += 1) {
    const selected = [];
    const seen = new Set();
    const difficultySequence = targetDifficultySequence(config, mock, config.mockSize);
    const targetNvidiaCount = Math.round(config.mockSize * (config.targetNvidiaPercent || 0) / 100);
    let currentNvidiaCount = 0;
    const quotas = targetDomainQuotas(parsed.domains, config.mockSize);
    const nvidiaQuotas = targetNvidiaQuotas(config, parsed.domains, quotas, targetNvidiaCount);
    for (const domain of parsed.domains) {
      const domainQuestions = mockQuestionPool(byDomain.get(domain.name) || [], mock, domain.name);
      const quota = quotas[domain.name] || 0;
      const domainNvidiaQuota = nvidiaQuotas[domain.name] || 0;
      let domainNvidiaCount = 0;
      for (let i = 0; i < quota && selected.length < config.mockSize; i += 1) {
        const preferredScope = currentNvidiaCount < targetNvidiaCount && domainNvidiaCount < domainNvidiaQuota ? "nvidia_specific" : "general_concept";
        const fallbackScope = preferredScope === "nvidia_specific" ? "general_concept" : "nvidia_specific";
        const candidate = takeQuestion(domainQuestions, seen, preferredScope, fallbackScope, difficultySequence[selected.length]);
        if (!candidate) continue;
        selected.push(candidate);
        seen.add(candidate.id);
        if (inferQuestionScope(candidate) === "nvidia_specific") {
          currentNvidiaCount += 1;
          domainNvidiaCount += 1;
        }
      }
    }
    let cursor = mock * 11;
    const fillPool = mockQuestionPool(questions, mock, "fill");
    while (selected.length < config.mockSize) {
      const preferredScope = currentNvidiaCount < targetNvidiaCount ? "nvidia_specific" : "general_concept";
      const fallbackScope = preferredScope === "nvidia_specific" ? "general_concept" : "nvidia_specific";
      const candidate = takeQuestion(fillPool.slice(cursor % fillPool.length).concat(fillPool.slice(0, cursor % fillPool.length)), seen, preferredScope, fallbackScope, difficultySequence[selected.length]);
      if (!candidate) break;
      selected.push(candidate);
      seen.add(candidate.id);
      if (inferQuestionScope(candidate) === "nvidia_specific") currentNvidiaCount += 1;
      cursor += 13;
    }
    const unique = [];
    seen.clear();
    for (const question of selected) {
      if (!question || seen.has(question.id)) continue;
      unique.push(question);
      seen.add(question.id);
    }
    cursor = mock * 17;
    const uniqueFillPool = mockQuestionPool(questions, mock, "unique-fill");
    while (unique.length < config.mockSize) {
      const candidate = uniqueFillPool[cursor % uniqueFillPool.length];
      if (!seen.has(candidate.id)) {
        unique.push(candidate);
        seen.add(candidate.id);
      }
      cursor += 19;
    }
    const finalQuestions = rebalanceScope(unique.slice(0, config.mockSize), questions, targetNvidiaCount, mock, config.slug);
    const mockData = {
      id: `${config.mockPrefix}_${mock}`,
      name: config.slug === "agentic_ai_general_study" ? `Generated General Study Drill ${mock}` : `Generated Mock ${mock}`,
      description: generatedMockDescription(config),
      source: "high_fidelity_bank",
      questionIds: finalQuestions.map((question) => question.id)
    };
    const fileName = `${config.mockPrefix}_${mock}.json`;
    await writeFile(path.join(root, config.mocksDir, fileName), `${JSON.stringify(mockData, null, 2)}\n`);
  }
}

async function main() {
  const summary = [];
  for (const config of certificationConfigs) {
    const base = await loadBaseMarkdown(config);
    const generated = buildGeneratedQuestions(config, base);
    validateQuestionText(generated);
    await writeGeneratedShards(config, generated);
    const combined = await loadCombinedMarkdown(config, generated);
    parseExamMarkdown(combined);
    await rebuildGeneratedMocks(config, combined);
    const parsed = parseExamMarkdown(combined);
    const serviceCounts = serviceMentions(parsed.questions, config.services);
    summary.push({
      slug: config.slug,
      total: parsed.questions.length,
      added: generated.length,
      minDomain: Math.min(...Object.values(countBy(parsed.questions, (question) => question.domain))),
      minService: Math.min(...Object.values(serviceCounts))
    });
  }
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

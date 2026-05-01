import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices, studySections } from "../client/src/data/study-services.js";

const root = process.cwd();
const bankMarkerStart = "<!-- BEGIN HIGH FIDELITY BANK GENERATED -->";
const bankMarkerEnd = "<!-- END HIGH FIDELITY BANK GENERATED -->";

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
  /nVIDIA/,
  /Use first when/i
];

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
  ({ industry, trap, constraint, verb }) => `${industry} is designing a production AI workflow. The initial design relies on ${trap}, and the team ${constraint}. ${verb}`,
  ({ industry, concept, trap, constraint }) => `${industry} has a working prototype, but the architecture review finds that ${trap} is being used where ${concept} should own the decision. The team ${constraint}. Which change best preserves the lifecycle boundary?`,
  ({ industry, trap }) => `${industry} sees intermittent failures after rollout. Investigation shows the system depends on ${trap} instead of an explicit control at the failing layer. What should the team change first?`,
  ({ industry, concept, constraint }) => `${industry} needs to productionize an AI workflow and ${constraint}. The critical design question is how to handle ${concept} without hiding the root cause in prompts or model size. Which option is strongest?`,
  ({ industry, trap, concept }) => `${industry} is comparing two designs: one centered on ${trap}, and one that adds ${concept} as an explicit boundary. Which design is more appropriate for a governed production system?`,
  ({ industry, concept, constraint, verb }) => `${industry} is preparing a release where ${concept} is the main risk area. The team ${constraint}. ${verb}`
];

const serviceStemPatterns = [
  ({ industry, scenario }) => `${industry} is choosing an NVIDIA component. ${scenario} Which service fits best?`,
  ({ industry, service, wrongService, scenario }) => `${industry} is deciding between ${service.name} and ${wrongService.name}. ${scenario} Which selection is correct?`,
  ({ industry, service, lifecycleNeed }) => `${industry} has a ${service.lifecycle} requirement: ${lifecycleNeed} Which NVIDIA component is most appropriate?`,
  ({ industry, wrongService, scenario }) => `${industry} initially selected ${wrongService.name}, but the task is described this way: ${scenario} Which component should replace the mistaken choice?`,
  ({ industry, service, lifecycleNeed }) => `${industry} needs a supported NVIDIA path for ${service.lifecycle}. The key requirement is to ${lifecycleNeed.charAt(0).toLowerCase()}${lifecycleNeed.slice(1)} Which service matches that requirement?`,
  ({ industry, service, wrongService }) => `${industry} has a design review question about ${service.lifecycle}. The team is confusing ${wrongService.name} with the NVIDIA component for ${serviceRequirement(service.use)}. Which component resolves the confusion?`
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
    ["workflow graph", "use explicit states and gates for predictable or high-risk processes", "unbounded autonomy"],
    ["supervisor orchestration", "centralize routing, approvals, and handoffs across specialist agents", "peer agents triggering production actions directly"],
    ["observe-reason-act loop", "use iterative observation and re-planning when the environment changes", "one-shot planning for streaming incidents"],
    ["evidence gate", "require retrieval and tool observations before a decision node", "letting the first retrieved document decide"],
    ["risk router", "route simple cases to deterministic paths and high-risk cases to review", "largest model for every request"]
  ],
  "Agent Development": [
    ["schema validation", "validate tool arguments before execution", "asking the model to promise valid JSON"],
    ["idempotency", "use keys and transaction-state checks for mutating APIs", "retrying mutations blindly"],
    ["sandboxing", "run generated code in isolated environments without production credentials", "keyword filters as the main control"],
    ["tool contracts", "define tool inputs, outputs, permissions, and failure modes", "letting each prompt invent tool behavior"],
    ["regression tests", "turn observed failures into repeatable test cases", "debugging only through transcripts"]
  ],
  "Evaluation and Tuning": [
    ["trajectory evaluation", "score tool choice, retrieval, safety, latency, and final answer together", "scoring only the final text"],
    ["bootstrap evals", "create verified question-chunk pairs when labels are missing", "agent self-judgment as ground truth"],
    ["LLM-as-judge calibration", "anchor judge rubrics with human labels and disagreement review", "trusting a judge score with no calibration"],
    ["regression suite", "compare prompt, model, retrieval, and tool changes before release", "changing several layers with one score"],
    ["ablation", "isolate whether prompt, retrieval, model, or tools caused the failure", "fine-tuning without root cause analysis"]
  ],
  "Deployment and Scaling": [
    ["stateless services", "deploy agent components as horizontally scalable services", "sticky in-process state"],
    ["NIM endpoints", "serve LLM, embedding, and reranker models as optimized APIs", "NCCL as a serving endpoint"],
    ["canary rollout", "route a small traffic slice with quality and safety gates", "big-bang rollout"],
    ["autoscaling", "scale model, retrieval, and tool workers by their own bottlenecks", "scaling only the LLM"],
    ["fallback", "use measured fallbacks for model or tool failures", "silent degradation with no trace"]
  ],
  "Cognition, Planning, and Memory": [
    ["working memory", "track task state needed for the current workflow", "storing every observation forever"],
    ["episodic memory", "retain useful prior interactions with consent and expiration", "confusing memory with public document retrieval"],
    ["planning budget", "limit tool calls and add stopping criteria", "open-ended exploration"],
    ["reflection", "use a critic to verify evidence sufficiency and plan quality", "exposing private chain-of-thought"],
    ["state ownership", "make one runtime own canonical state transitions", "agents overwriting each other"]
  ],
  "Knowledge Integration and Data Handling": [
    ["permissioned RAG", "filter by ACL before chunks enter context", "post-answer filtering"],
    ["chunking and metadata", "preserve source, tenant, time, and sensitivity metadata", "anonymous chunks with no lineage"],
    ["reranking", "rerank candidate chunks before context assembly", "larger context as the only fix"],
    ["data freshness", "use retrieval for changing facts", "fine-tuning on volatile policy documents"],
    ["grounded citations", "return answer evidence linked to source chunks", "uncited summaries"]
  ],
  "NVIDIA Platform Implementation": [
    ["NeMo Agent Toolkit", "compose framework-flexible agent workflows with tools, retrievers, and observability", "CUDA Graphs as the agent framework"],
    ["NeMo Guardrails", "control dialog, retrieval, tool, and output behavior", "guardrails as document ACLs"],
    ["NIM", "package optimized model APIs for LLMs, embeddings, and rerankers", "NIM as the model family"],
    ["NeMo Retriever", "build enterprise extraction, embedding, indexing, retrieval, and reranking", "NeMo Curator for live RAG"],
    ["Nsight Systems", "start with end-to-end CPU/GPU timeline profiling", "kernel metrics before finding the hot kernel"]
  ],
  "Run, Monitor, and Maintain": [
    ["trace replay", "capture spans for model, retrieval, tools, guardrails, latency, and cost", "HTTP 200 as the only success signal"],
    ["drift monitoring", "watch route mix, retrieval hit rate, judge scores, and escalation rates", "average latency only"],
    ["incident response", "convert incidents into regression tests and rollback rules", "manual transcript review only"],
    ["SLOs", "measure task success, safety blocks, p95/p99, and cost together", "model tokens/sec alone"],
    ["observability", "correlate workflow spans across services", "separate logs with no request ID"]
  ],
  "Safety, Ethics, and Compliance": [
    ["layered controls", "combine input, retrieval, tool, and output controls", "one final moderation pass"],
    ["prompt injection", "treat retrieved text and tool output as data, not instructions", "letting documents override system policy"],
    ["least privilege", "scope credentials to tools and roles", "giving the LLM API keys"],
    ["approval gates", "require human approval for high-impact mutations", "approval after execution"],
    ["policy testing", "test refusals, jailbreaks, and unsafe tool proposals", "spot checks only"]
  ],
  "Human-AI Interaction and Oversight": [
    ["human-in-the-loop", "require approval before high-risk actions", "review after irreversible mutations"],
    ["human-on-the-loop", "sample low-risk decisions and monitor drift", "manual approval for every low-risk step"],
    ["review queues", "prioritize by risk, uncertainty, and impact", "first-in-first-out for all cases"],
    ["feedback loop", "turn review labels into evals, prompt fixes, or training data", "collecting comments with no downstream owner"],
    ["transparent handoff", "show evidence, confidence, and pending tool actions to reviewers", "asking reviewers to judge opaque outputs"]
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
    file: "certifications/agentic_ai_professional/questions.md",
    prefix: "aai-hf",
    domainConcepts: agenticDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI")),
    targetPerDomain: 50,
    targetPerService: 30,
    mocksDir: "certifications/agentic_ai_professional/mocks/generated",
    mockPrefix: "balanced_mock",
    generatedMocks: 4,
    mockSize: 50
  },
  {
    slug: "genai_llms_professional",
    file: "certifications/genai_llms_professional/questions.md",
    prefix: "genl-hf",
    domainConcepts: genaiDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("GenAI LLMs")),
    targetPerDomain: 50,
    targetPerService: 30,
    mocksDir: "certifications/genai_llms_professional/mocks/generated",
    mockPrefix: "balanced_mock",
    generatedMocks: 4,
    mockSize: 50
  },
  {
    slug: "agentic_ai_general_study",
    file: "certifications/agentic_ai_general_study/questions.md",
    prefix: "ags-hf",
    domainConcepts: generalDomainConcepts,
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI General")),
    targetPerDomain: 50,
    targetPerService: 30,
    mocksDir: "certifications/agentic_ai_general_study/mocks/generated",
    mockPrefix: "generated_mock",
    generatedMocks: 1,
    mockSize: 24
  }
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function stripGeneratedBlock(markdown) {
  const pattern = new RegExp(`\\n?${escapeRegExp(bankMarkerStart)}[\\s\\S]*?${escapeRegExp(bankMarkerEnd)}\\n?`, "g");
  return markdown.replace(pattern, "").trimEnd();
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
    "easy", "medium", "medium", "hard", "easy",
    "medium", "hard", "medium", "hard", "medium",
    "easy", "medium", "hard", "medium", "expert",
    "medium", "hard", "easy", "medium", "hard"
  ][index % 20];
}

function normalizeDifficulty(difficulty) {
  if (difficulty === "advanced") return "hard";
  if (difficulty === "easier") return "easy";
  return difficulty;
}

function makeDomainQuestion(config, domain, index, existingCount) {
  const concepts = config.domainConcepts[domain] || [["lifecycle boundary", "choose the control that acts at the failing layer", "generic tool choice"]];
  const [concept, correctIdea, trap] = concepts[index % concepts.length];
  const industry = pick(industries, config.slug, domain, index, "industry");
  const constraint = pick(constraints, config.slug, domain, index, "constraint");
  const verb = pick(actionVerbs, config.slug, domain, index, "verb");
  const difficulty = difficultyFor(existingCount + index);
  const id = `${config.prefix}-${slugify(domain)}-${String(index + 1).padStart(3, "0")}`;
  const question = pick(domainStemPatterns, config.slug, domain, index, "stem")({ industry, concept, correctIdea, trap, constraint, verb });
  const correct = domainCorrectChoice(concept, correctIdea, index);
  const distractors = [
    wrongChoice(config.slug, domain, index, "w1"),
    wrongChoice(config.slug, domain, index, "w2"),
    wrongChoice(config.slug, domain, index, "w3")
  ].filter((value, position, list) => list.indexOf(value) === position && value !== correct);
  while (distractors.length < 3) distractors.push(pick(wrongPatterns, config.slug, domain, index, `fill-${distractors.length}`));
  return buildQuestion({
    id,
    domain,
    topic: `${concept}; ${config.slug}`,
    difficulty,
    question,
    correct,
    distractors: distractors.slice(0, 3),
    explanation: `The scenario is about ${concept}. The strongest answer fixes the failing layer directly: ${correctIdea}.`,
    wrongReason: `This distractor does not act at the ${concept} boundary or it changes the wrong layer before the root cause is measured.`
  });
}

function domainCorrectChoice(concept, correctIdea, index) {
  const choices = [
    `Add ${article(concept)} ${concept} so the system can ${correctIdea}.`,
    `Make ${concept} explicit in the workflow: ${correctIdea}.`,
    `Use ${concept} as the control boundary and require the system to ${correctIdea}.`,
    `Move the decision into ${concept}, because the root requirement is to ${correctIdea}.`
  ];
  return choices[index % choices.length].replace(/\s+/g, " ");
}

function article(value) {
  return /^[aeiou]/i.test(value) ? "an" : "a";
}

function wrongChoice(...keys) {
  return pick(wrongPatterns, ...keys);
}

function makeServiceQuestion(config, service, index, existingCount, domains) {
  const domain = pick(domains, config.slug, service.name, index, "domain");
  const industry = pick(industries, config.slug, service.name, index, "industry");
  const lifecycleNeed = pick(lifecycleNeeds[service.lifecycle] || constraints, config.slug, service.name, index, "need");
  const wrongName = distractorByLifecycle[service.lifecycle] || pick(config.services, config.slug, service.name, index, "wrong").name;
  const wrongService = config.services.find((candidate) => candidate.name === wrongName && candidate.name !== service.name)
    || config.services.find((candidate) => candidate.name !== service.name)
    || { name: wrongName, lifecycle: "a different lifecycle layer" };
  const difficulty = difficultyFor(existingCount + index + 3);
  const id = `${config.prefix}-svc-${slugify(service.name)}-${String(index + 1).padStart(3, "0")}`;
  const scenario = serviceScenario(service, index);
  const question = pick(serviceStemPatterns, config.slug, service.name, index, "stem")({ industry, service, wrongService, scenario, lifecycleNeed });
  const correct = serviceCorrectChoice(service, index);
  const distractors = [
    `Choose ${wrongService.name}; it is useful in ${wrongService.lifecycle || "a neighboring layer"}, but that is not the layer described here.`,
    wrongChoice(config.slug, service.name, index, "wrong1"),
    `Treat the requirement as generic model selection and postpone the ${service.lifecycle} decision until after deployment.`
  ];
  return buildQuestion({
    id,
    domain,
    topic: `NVIDIA service: ${service.name}; lifecycle: ${service.lifecycle}; ${service.quizPrompt || service.description}`,
    difficulty,
    question,
    correct,
    distractors,
    explanation: `${service.name} is the best fit because it sits in ${service.lifecycle}: ${service.description}`,
    wrongReason: `${service.avoid || service.traps || "This option addresses a neighboring layer rather than the stated requirement."}`
  });
}

function serviceCorrectChoice(service, index) {
  const choices = [
    `Choose ${service.name}; ${serviceFit(service.use)}.`,
    `Use ${service.name}; it provides ${descriptionPhrase(service.description)}.`,
    `${service.name} is the best fit; its role is ${descriptionPhrase(service.description)}.`,
    `Select ${service.name}; the scenario matches ${service.lifecycle}, not a neighboring lifecycle layer.`
  ];
  return choices[index % choices.length].replace(/\s+/g, " ").replace(/\.\.$/, ".");
}

function serviceScenario(service, index) {
  const rawOptions = [
    service.scenario,
    `${capitalize(serviceRequirement(service.use))}.`,
    service.traps ? `The design must avoid the common trap: ${service.traps}` : ""
  ].filter(Boolean);
  const raw = String(rawOptions[index % rawOptions.length]).trim();
  return raw
    .replace(/^A team\b/i, "The project team")
    .replace(/^An enterprise\b/i, "The enterprise")
    .replace(/^A company\b/i, "The company")
    .replace(/^A customer\b/i, "The customer");
}

function serviceFit(text) {
  const requirement = serviceRequirement(text);
  return /^to\b/i.test(requirement) ? `it is used ${requirement}` : `it is used for ${requirement}`;
}

function serviceRequirement(text) {
  return String(text || "")
    .trim()
    .replace(/\.$/, "")
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

function descriptionPhrase(description) {
  const clean = String(description || "").replace(/\.$/, "").trim();
  if (/^(NVIDIA|NIM|CUDA|GPU|LLM|RAG|Kubernetes|Microservice|Framework-agnostic)\b/.test(clean)) {
    return clean;
  }
  return clean ? clean.charAt(0).toLowerCase() + clean.slice(1) : clean;
}

function buildQuestion({ id, domain, topic, difficulty, question, correct, distractors, explanation, wrongReason }) {
  const choices = [correct, ...distractors.slice(0, 3)];
  const rotate = hashNumber(id) % 4;
  const rotated = choices.map((_, index) => choices[(index + rotate) % choices.length]);
  const answer = rotated.indexOf(correct);
  const letters = ["A", "B", "C", "D"];
  const why = rotated.map((choice, index) => {
    if (index === answer) return "";
    if (/neighboring NVIDIA component/.test(choice)) return "It names a real component, but the lifecycle layer does not match the requirement.";
    if (/larger model|more GPUs|context length|prompt wording/i.test(choice)) return "It changes capacity or wording before fixing the measured root cause.";
    return wrongReason;
  });
  return {
    id,
    domain,
    topic,
    difficulty: normalizeDifficulty(difficulty),
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
    ...question.choices.map((choice, index) => `- ${letters[index]}. ${choice}`),
    `- Answer: ${letters[question.answer]}`,
    `- Explanation: ${question.explanation}`,
    ...question.choices.map((_, index) => index === question.answer ? null : `- Why ${letters[index]} is wrong: ${question.whyWrong[index] || "It targets the wrong layer for the scenario."}`).filter(Boolean),
    ""
  ].join("\n");
}

function activeQuestions(markdown) {
  return parseExamMarkdown(markdown).questions.filter((question) => question.status !== "inactive");
}

function countBy(items, keyFn) {
  return items.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function serviceMentions(questions, services) {
  return Object.fromEntries(services.map((service) => {
    const pattern = new RegExp(escapeRegExp(service.name), "i");
    return [service.name, questions.filter((question) => pattern.test(`${question.topic} ${question.question} ${question.explanation}`)).length];
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
  const serviceCounts = serviceMentions(afterDomain, config.services);
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
      if (pattern.test(text)) failures.push(`Banned phrase in ${question.id}: ${pattern}`);
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
  const questions = parsed.questions.filter((question) => !question.id.includes("-old-"));
  const byDomain = new Map(parsed.domains.map((domain) => [domain.name, questions.filter((question) => question.domain === domain.name)]));
  await mkdir(path.join(root, config.mocksDir), { recursive: true });

  for (let mock = 1; mock <= config.generatedMocks; mock += 1) {
    const selected = [];
    for (const domain of parsed.domains) {
      const domainQuestions = byDomain.get(domain.name) || [];
      const quota = Math.max(1, Math.round((domain.weight / 100) * config.mockSize));
      for (let i = 0; i < quota && selected.length < config.mockSize; i += 1) {
        selected.push(domainQuestions[(i + mock * 7) % domainQuestions.length]);
      }
    }
    let cursor = mock * 11;
    while (selected.length < config.mockSize) {
      selected.push(questions[cursor % questions.length]);
      cursor += 13;
    }
    const unique = [];
    const seen = new Set();
    for (const question of selected) {
      if (!question || seen.has(question.id)) continue;
      unique.push(question);
      seen.add(question.id);
    }
    cursor = mock * 17;
    while (unique.length < config.mockSize) {
      const candidate = questions[cursor % questions.length];
      if (!seen.has(candidate.id)) {
        unique.push(candidate);
        seen.add(candidate.id);
      }
      cursor += 19;
    }
    const mockData = {
      id: `${config.mockPrefix}_${mock}`,
      name: config.slug === "agentic_ai_general_study" ? `Generated General Study Drill ${mock}` : `Generated Mock ${mock}`,
      source: "high_fidelity_bank",
      questionIds: unique.slice(0, config.mockSize).map((question) => question.id)
    };
    const fileName = `${config.mockPrefix}_${mock}.json`;
    await writeFile(path.join(root, config.mocksDir, fileName), `${JSON.stringify(mockData, null, 2)}\n`);
  }
}

async function main() {
  const summary = [];
  for (const config of certificationConfigs) {
    const filePath = path.join(root, config.file);
    const original = await readFile(filePath, "utf8");
    const base = stripGeneratedBlock(original);
    const generated = buildGeneratedQuestions(config, base);
    validateQuestionText(generated);
    const existingCount = parseExamMarkdown(base).questions.length;
    const block = [
      "",
      bankMarkerStart,
      `<!-- Generated by scripts/build_high_fidelity_question_bank.mjs. Style source: original mocks + topic/service summaries. -->`,
      ...generated.map((question, index) => questionToMarkdown(question, existingCount + index + 1)),
      bankMarkerEnd,
      ""
    ].join("\n");
    const next = `${base}\n${block}`;
    parseExamMarkdown(next);
    await writeFile(filePath, next);
    await rebuildGeneratedMocks(config, next);
    const parsed = parseExamMarkdown(next);
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

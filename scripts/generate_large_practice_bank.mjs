import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices, studySections } from "../client/src/data/study-services.js";

const ROOT = new URL("..", import.meta.url).pathname;
const BEGIN = "<!-- BEGIN LARGE PRACTICE BANK GENERATED -->";
const END = "<!-- END LARGE PRACTICE BANK GENERATED -->";

const CERTS = {
  genai_llms_professional: {
    label: "GenAI LLMs",
    serviceTarget: 50,
    lifecycleTarget: 30,
    domainTarget: 30,
    prefix: "genl"
  },
  agentic_ai_professional: {
    label: "Agentic AI",
    serviceTarget: 50,
    lifecycleTarget: 30,
    domainTarget: 30,
    prefix: "aai"
  },
  agentic_ai_general_study: {
    label: "Agentic AI General",
    serviceTarget: 30,
    lifecycleTarget: 30,
    domainTarget: 30,
    prefix: "agen"
  }
};

const LIFECYCLE_LANES = {
  "GenAI LLMs": [
    {
      lane: "Core: Deploy optimized LLM endpoint",
      tools: ["Nemotron models", "NGC", "TensorRT-LLM", "Nsight Systems", "Nsight Compute", "NIM", "Triton Inference Server", "NIM Operator", "Dynamo (Triton Dynamo)"],
      stages: ["Choose model or artifact", "Optimize generation runtime", "Serve production endpoint", "Profile and improve endpoint"]
    },
    {
      lane: "Core: Build grounded LLM application",
      tools: ["NeMo Retriever", "NeMo Curator", "RAPIDS", "NIM", "NeMo Guardrails", "NeMo Evaluator"],
      stages: ["Prepare private knowledge", "Bind answers to evidence", "Evaluate and guard outputs"]
    },
    {
      lane: "Secondary: Fine-tune existing model",
      tools: ["NeMo Curator", "RAPIDS", "NeMo Customizer", "NeMo Framework", "NGC", "NeMo Evaluator", "NeMo Guardrails", "NIM", "NIM Operator", "Triton Inference Server"],
      stages: ["Process tuning data", "Fine-tune behavior", "Evaluate tuned model", "Deploy tuned endpoint"]
    },
    {
      lane: "Reference: Train model from zero",
      tools: ["NeMo Curator", "RAPIDS", "NeMo Framework", "NCCL", "NGC", "NeMo Evaluator", "NIM", "NIM Operator"],
      stages: ["Process foundation corpus", "Train foundation model", "Evaluate trained model", "Publish and serve artifact"]
    }
  ],
  "Agentic AI": [
    {
      lane: "Core: Build agent application",
      tools: ["NeMo Retriever", "NeMo Curator", "RAPIDS", "Nemotron models", "NGC", "NeMo Agent Toolkit", "NeMo Guardrails", "NeMo Evaluator", "NIM", "NIM Operator", "Dynamo (Triton Dynamo)", "Nsight Systems"],
      stages: ["Process agent knowledge", "Choose agent model", "Build agent workflow", "Evaluate agent", "Deploy and operate agent"]
    },
    {
      lane: "Core: Use existing model for inference",
      tools: ["Nemotron models", "NGC", "NIM", "NIM Operator", "Dynamo (Triton Dynamo)"],
      stages: ["Choose existing model", "Deploy inference endpoint"]
    },
    {
      lane: "Secondary: Fine-tune existing model",
      tools: ["NeMo Curator", "RAPIDS", "NeMo Customizer", "NeMo Framework", "NGC", "NeMo Evaluator", "NIM", "NIM Operator"],
      stages: ["Process tuning data", "Fine-tune behavior", "Evaluate tuned model", "Deploy tuned model API"]
    },
    {
      lane: "Reference: Train model from zero",
      tools: ["NeMo Curator", "RAPIDS", "NeMo Framework", "NCCL", "NGC", "NeMo Evaluator", "NIM", "NIM Operator"],
      stages: ["Process training data", "Train model", "Evaluate model", "Deploy model API"]
    }
  ],
  "Agentic AI General": [
    {
      lane: "Train model from zero",
      tools: ["Training Data Curation Pipeline", "Foundation Model Training Stack", "Evaluation and Regression Harness", "Model Selection and Registry", "Model Inference Endpoint"],
      stages: ["Curate model corpus", "Run foundation training", "Evaluate trained model", "Register and serve artifact"]
    },
    {
      lane: "Fine-tune existing model",
      tools: ["Model Selection and Registry", "Training Data Curation Pipeline", "Model Customization Toolkit", "Evaluation and Regression Harness", "Model Inference Endpoint", "Model Serving Gateway"],
      stages: ["Select base model", "Curate examples", "Tune durable behavior", "Compare against baseline", "Deploy tuned endpoint"]
    },
    {
      lane: "Use existing model or API",
      tools: ["Model Selection and Registry", "Prompt and Context Design", "Model Inference Endpoint", "Model Serving Gateway", "Evaluation and Regression Harness", "Cost/Latency Optimizer"],
      stages: ["Choose existing model", "Design prompt and context", "Expose and route calls", "Measure quality and cost"]
    },
    {
      lane: "Build agent/RAG application",
      tools: ["Knowledge Ingestion and Permission Pipeline", "Knowledge and RAG Pipeline", "Agent Orchestration Runtime", "Tool Gateway and Function Runtime", "Memory Store", "Policy and Guardrails Layer", "Evaluation and Regression Harness"],
      stages: ["Ingest private knowledge", "Build retrieval path", "Orchestrate tools and memory", "Apply policy controls", "Evaluate agent behavior"]
    },
    {
      lane: "Operate, govern, and improve",
      tools: ["Observability and Trace Monitor", "Cost/Latency Optimizer", "Model Serving Gateway", "Human Review and Governance Console", "Policy and Guardrails Layer", "Evaluation and Regression Harness", "Training Data Curation Pipeline", "Prompt and Context Design"],
      stages: ["Observe production runs", "Optimize serving path", "Review and govern risk", "Feed fixes back"]
    }
  ]
};

const DOMAIN_BY_SERVICE_LIFECYCLE = {
  "GenAI LLMs": {
    "Data preparation": "Data Preparation",
    "Training-time data curation": "Data Preparation",
    "Training and customization": "Fine-Tuning",
    "Foundation training": "GPU Acceleration and Optimization",
    "Model selection": "LLM Architecture",
    "Prompt and context adaptation": "Prompt Engineering",
    "Agent orchestration": "Prompt Engineering",
    "Tool execution": "Prompt Engineering",
    "Memory and state": "Prompt Engineering",
    "Inference optimization": "Model Optimization",
    "Serving and deployment": "Model Deployment",
    "RAG and retrieval": "Data Preparation",
    "Runtime knowledge preparation": "Data Preparation",
    "Safety and guardrails": "Safety, Ethics, and Compliance",
    "Human oversight": "Safety, Ethics, and Compliance",
    "Governance": "Safety, Ethics, and Compliance",
    "Monitoring and profiling": "Production Monitoring and Reliability",
    "Evaluation": "Evaluation"
  },
  "Agentic AI": {
    "Data preparation": "Knowledge Integration and Data Handling",
    "Training-time data curation": "Knowledge Integration and Data Handling",
    "Runtime knowledge preparation": "Knowledge Integration and Data Handling",
    "Training and customization": "NVIDIA Platform Implementation",
    "Foundation training": "NVIDIA Platform Implementation",
    "Model selection": "Agent Architecture and Design",
    "Prompt and context adaptation": "Agent Development",
    "Agent orchestration": "Agent Development",
    "Tool execution": "Agent Development",
    "Memory and state": "Cognition, Planning, and Memory",
    "Inference optimization": "Deployment and Scaling",
    "Serving and deployment": "Deployment and Scaling",
    "RAG and retrieval": "Knowledge Integration and Data Handling",
    "Safety and guardrails": "Safety, Ethics, and Compliance",
    "Human oversight": "Human-AI Interaction and Oversight",
    "Governance": "Human-AI Interaction and Oversight",
    "Monitoring and profiling": "Run, Monitor, and Maintain",
    "Evaluation": "Evaluation and Tuning"
  },
  "Agentic AI General": {
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
    "Monitoring and profiling": "Observability, Operations, and Cost",
    "Evaluation": "Evaluation and Safety",
    "Human oversight": "Human Oversight and Governance",
    "Governance": "Human Oversight and Governance"
  }
};

const DOMAIN_PROMPTS = {
  "Agent Lifecycle and Architecture": ["workflow vs agent boundary", "supervisor orchestration", "state ownership", "multi-agent handoff"],
  "Data Curation and Knowledge Grounding": ["training data curation", "RAG freshness", "chunk permissions", "retrieval reranking"],
  "Model Selection and Customization": ["model routing", "registry lineage", "prompt vs RAG vs PEFT", "adapter rollback"],
  "Tooling, Orchestration, and Memory": ["tool schema validation", "idempotent retries", "memory scope", "function runtime permissions"],
  "Inference Serving and Deployment": ["serving gateway", "canary rollout", "batching", "fallback endpoint"],
  "Evaluation and Safety": ["trajectory evaluation", "groundedness", "judge calibration", "red-team regression"],
  "Observability, Operations, and Cost": ["trace correlation", "p99 latency", "token-cost routing", "incident replay"],
  "Human Oversight and Governance": ["risk-tiered approval", "audit evidence", "review queues", "feedback loops"]
};

const SCENARIOS = [
  "a regulated enterprise is moving a prototype into production",
  "a platform team is separating training, retrieval, serving, and governance ownership",
  "a product team must reduce failure rate without hiding the root cause",
  "an operations team has a deadline but cannot weaken auditability",
  "a lead engineer is choosing the first fix after a failed pilot",
  "a security review found that two lifecycle responsibilities were mixed together",
  "a model release improved one metric but regressed another",
  "a team needs a practice-ready decision rule for a certification-style scenario"
];

const CONSTRAINTS = [
  "keep tenant data isolated and traceable",
  "preserve rollback evidence for the release",
  "avoid retraining when the requirement is runtime knowledge",
  "keep p95 and p99 latency visible during rollout",
  "make the choice defensible to a reviewer",
  "separate model behavior changes from serving infrastructure",
  "measure both quality and operational risk",
  "avoid choosing a tool only because its name sounds related"
];

function slug(value) {
  return String(value || "topic")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 42) || "topic";
}

function pick(items, index) {
  return items[index % items.length];
}

function stripGenerated(markdown) {
  const start = markdown.indexOf(BEGIN);
  const end = markdown.indexOf(END);
  if (start === -1 || end === -1 || end < start) return markdown.trimEnd();
  return `${markdown.slice(0, start).trimEnd()}\n${markdown.slice(end + END.length).trimStart()}`.trimEnd();
}

function domainForService(service, label, fallbackDomains) {
  const mapped = DOMAIN_BY_SERVICE_LIFECYCLE[label]?.[service.lifecycle];
  if (mapped && fallbackDomains.includes(mapped)) return mapped;
  if (label === "Agentic AI General") {
    const section = studySections.find((item) => item.exam === label && service.relatedServices?.includes(item.name));
    if (section) return section.name;
  }
  return fallbackDomains[0];
}

function answerBlock({ question, id, domain, topic, difficulty, options, answerIndex, explanation, wrong }) {
  const letters = ["A", "B", "C", "D"];
  const lines = [
    `### Q__SEQ__: ${question}`,
    `- ID: ${id}`,
    `- Domain: ${domain}`,
    `- Topic: ${topic}`,
    `- Difficulty: ${difficulty}`
  ];
  for (const [index, option] of options.entries()) lines.push(`- ${letters[index]}. ${option}`);
  lines.push(`- Answer: ${letters[answerIndex]}`);
  lines.push(`- Explanation: ${explanation}`);
  for (const [index, why] of wrong.entries()) {
    if (index !== answerIndex) lines.push(`- Why ${letters[index]} is wrong: ${why}`);
  }
  return lines.join("\n");
}

function serviceQuestion(service, label, domains, index, prefix) {
  const domain = domainForService(service, label, domains);
  const scenario = pick(SCENARIOS, index);
  const constraint = pick(CONSTRAINTS, index + 2);
  const keywordList = [service.name, service.lifecycle, ...(service.keywords || []), ...(service.filters || [])].join(", ");
  const adjacent = pick(
    nvidiaServices
      .filter((item) => item.name !== service.name && item.exams.includes(label))
      .map((item) => item.name),
    index
  ) || "a neighboring NVIDIA component";
  const questionForms = [
    `In ${label} practice, ${scenario}. The team is considering ${service.name} and must ${constraint}. Which choice best matches the service boundary?`,
    `A study session asks where ${service.name} fits in the AI lifecycle. The scenario says ${scenario}, and the priority is to ${constraint}. What is the strongest decision?`,
    `During a mock review, a learner confuses ${service.name} with another NVIDIA layer. Given ${scenario}, what should they remember for the exam?`,
    `A team wants to use ${service.name} because it is in the NVIDIA stack. The actual requirement is ${service.lifecycle}. Which response avoids the common trap?`
  ];
  const correct = `Use ${service.name} when the requirement is ${service.lifecycle}: ${service.use}`;
  const options = [
    correct,
    `Choose ${service.name} for any NVIDIA-related problem, even if the requirement is actually ${service.avoid}`,
    `Use ${adjacent} first because all NVIDIA services are interchangeable once the model is approved.`,
    `Skip the lifecycle decision and add more GPUs, a larger model, or a longer prompt before measuring the stated bottleneck.`
  ];
  const answerIndex = index % 4;
  const rotated = rotateToIndex(options, 0, answerIndex);
  const wrong = rotated.map((option) => {
    if (option === correct) return "";
    if (option.includes("any NVIDIA-related")) return service.traps || "This ignores the service boundary and picks by brand instead of lifecycle responsibility.";
    if (option.includes(adjacent)) return `${adjacent} may be useful nearby, but the scenario is testing ${service.name} and ${service.lifecycle}, not a neighboring lifecycle owner.`;
    return "More capacity or a stronger model is premature when the unresolved issue is the lifecycle owner, control boundary, or measurement gap.";
  });
  return answerBlock({
    question: pick(questionForms, index),
    id: `bulk-${prefix}-svc-${slug(service.name)}-${String(index + 1).padStart(3, "0")}`,
    domain,
    topic: `NVIDIA service drill: ${service.name}; lifecycle: ${service.lifecycle}; keywords: ${keywordList}`,
    difficulty: pick(["medium", "hard", "advanced"], index),
    options: rotated,
    answerIndex,
    explanation: `${service.name} questions should be solved by first identifying the lifecycle phase: ${service.lifecycle}. The correct option uses the service for that boundary and preserves the scenario constraint.`,
    wrong
  });
}

function domainQuestion(section, index, prefix) {
  const concepts = DOMAIN_PROMPTS[section.name] || section.keyIdeas || ["lifecycle boundary"];
  const concept = pick(concepts, index);
  const scenario = pick(SCENARIOS, index + 1);
  const constraint = pick(CONSTRAINTS, index + 4);
  const correct = `Start from ${section.name}: apply ${concept}, define the owner, and verify the decision with a focused eval or checklist.`;
  const options = [
    correct,
    "Jump directly to a larger model because stronger reasoning usually removes the need for lifecycle controls.",
    "Treat the issue as a serving-only problem and postpone data, safety, evaluation, and governance checks.",
    "Ask the model to self-police the workflow without runtime validation, audit records, or measured release gates."
  ];
  const answerIndex = (index + 1) % 4;
  const rotated = rotateToIndex(options, 0, answerIndex);
  const wrong = rotated.map((option) => {
    if (option === correct) return "";
    if (option.includes("larger model")) return "A larger model can help capability, but it does not replace architecture, data, safety, observability, or governance decisions.";
    if (option.includes("serving-only")) return "Serving is only one lifecycle layer; this section tests the broader owner and verification boundary.";
    return "Prompt-only self-policing is not an enforcement boundary for tools, permissions, rollout, or audit evidence.";
  });
  return answerBlock({
    question: `For Agentic AI General study, ${scenario}. The learner is drilling ${section.name} and must ${constraint}. What is the best next step?`,
    id: `bulk-${prefix}-domain-${slug(section.name)}-${String(index + 1).padStart(3, "0")}`,
    domain: section.name,
    topic: `Study playbook section: ${section.name}; concepts: ${[concept, ...(section.keyIdeas || [])].join(", ")}`,
    difficulty: pick(["medium", "hard", "advanced"], index + 1),
    options: rotated,
    answerIndex,
    explanation: `${section.name} questions are about selecting the lifecycle owner and verifying the decision, not memorizing a product name.`,
    wrong
  });
}

function lifecycleQuestion(label, lane, domains, index, prefix) {
  const domain = pick(domains, index);
  const stage = pick(lane.stages, index);
  const tool = pick(lane.tools, index);
  const scenario = pick(SCENARIOS, index + 3);
  const cleanLane = lane.lane.replace(/^(Core|Secondary|Reference):\s*/, "");
  const correct = `Follow the ${lane.lane} path: handle ${stage} with ${tool}, then verify the handoff before moving to the next lifecycle stage.`;
  const options = [
    correct,
    `Treat ${cleanLane} as a single tool choice and skip stage ownership, measurements, and rollback criteria.`,
    "Fine-tune the model immediately so lifecycle mismatches disappear inside the model weights.",
    "Move the workflow to production first, then add evaluation and access controls after user feedback arrives."
  ];
  const answerIndex = (index + 2) % 4;
  const rotated = rotateToIndex(options, 0, answerIndex);
  const wrong = rotated.map((option) => {
    if (option === correct) return "";
    if (option.includes("single tool")) return "Lifecycle lanes are ordered responsibilities, not just a product list; ownership and verification matter at each handoff.";
    if (option.includes("Fine-tune")) return "Fine-tuning changes model behavior, but many lifecycle issues are about runtime knowledge, serving, tools, guardrails, or operations.";
    return "Production rollout should not precede evaluation, permissions, safety checks, and rollback planning for the lane.";
  });
  return answerBlock({
    question: `${label} lifecycle drill: ${scenario}. The selected lane is ${lane.lane}. Which action best keeps the lifecycle path coherent?`,
    id: `bulk-${prefix}-life-${slug(lane.lane)}-${String(index + 1).padStart(3, "0")}`,
    domain,
    topic: `Lifecycle drill: ${lane.lane}; stages: ${lane.stages.join(", ")}; tools: ${lane.tools.join(", ")}`,
    difficulty: pick(["medium", "hard", "advanced"], index + 2),
    options: rotated,
    answerIndex,
    explanation: `The lane ${lane.lane} is solved by sequencing the relevant stages and tools, then checking quality, safety, and operational evidence at each handoff.`,
    wrong
  });
}

function rotateToIndex(options, originalCorrectIndex, desiredCorrectIndex) {
  const out = [...options];
  const [correct] = out.splice(originalCorrectIndex, 1);
  out.splice(desiredCorrectIndex, 0, correct);
  return out;
}

async function updateCertification(slugName, config) {
  const path = join(ROOT, "certifications", slugName, "questions.md");
  const original = await readFile(path, "utf8");
  const base = stripGenerated(original);
  const exam = parseExamMarkdown(base);
  const domains = exam.domains.map((domain) => domain.name);
  const generated = [];

  const services = nvidiaServices.filter((service) => service.exams.includes(config.label));
  for (const service of services) {
    for (let i = 0; i < config.serviceTarget; i += 1) {
      generated.push(serviceQuestion(service, config.label, domains, i, config.prefix));
    }
  }

  const lanes = LIFECYCLE_LANES[config.label] || [];
  for (const lane of lanes) {
    for (let i = 0; i < config.lifecycleTarget; i += 1) {
      generated.push(lifecycleQuestion(config.label, lane, domains, i, config.prefix));
    }
  }

  if (config.label === "Agentic AI General") {
    const sections = studySections.filter((section) => section.exam === config.label);
    for (const section of sections) {
      for (let i = 0; i < config.domainTarget; i += 1) {
        generated.push(domainQuestion(section, i, config.prefix));
      }
    }
  } else {
    const existingByDomain = Object.fromEntries(domains.map((domain) => [domain, exam.questions.filter((q) => q.domain === domain).length]));
    for (const block of generated) {
      const domain = block.match(/^- Domain:\s*(.+)$/m)?.[1];
      if (domain) existingByDomain[domain] = (existingByDomain[domain] || 0) + 1;
    }
    for (const domain of domains) {
      const needed = Math.max(0, config.domainTarget - (existingByDomain[domain] || 0));
      const section = { name: domain, keyIdeas: [domain] };
      for (let i = 0; i < needed; i += 1) {
        generated.push(domainQuestion(section, i, config.prefix));
      }
    }
  }

  const startSeq = exam.questions.length + 1;
  const numbered = generated.map((block, index) => block.replace("### Q__SEQ__:", `### Q${startSeq + index}:`));
  const next = `${base}\n\n${BEGIN}\n\n${numbered.join("\n\n")}\n\n${END}\n`;
  await writeFile(path, next, "utf8");
  return { slug: slugName, original: exam.questions.length, generated: generated.length, total: exam.questions.length + generated.length };
}

const results = [];
for (const [slugName, config] of Object.entries(CERTS)) {
  results.push(await updateCertification(slugName, config));
}

for (const result of results) {
  console.log(`${result.slug}: ${result.original} existing + ${result.generated} generated = ${result.total}`);
}

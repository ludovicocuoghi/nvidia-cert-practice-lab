import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices, studySections } from "../client/src/data/study-services.js";

const ROOT = new URL("..", import.meta.url).pathname;

const CERTS = {
  genai_llms_professional: { label: "GenAI LLMs", minService: 50, minLifecycle: 30, minDomain: 30 },
  agentic_ai_professional: { label: "Agentic AI", minService: 50, minLifecycle: 30, minDomain: 30 },
  agentic_ai_general_study: { label: "Agentic AI General", minService: 30, minLifecycle: 30, minDomain: 30 }
};

const LIFECYCLE_LANES = {
  "GenAI LLMs": [
    ["Core: Deploy optimized LLM endpoint", "Deploy optimized LLM endpoint", "Choose model or artifact", "Optimize generation runtime", "Serve production endpoint", "Profile and improve endpoint", "Nemotron models", "TensorRT-LLM", "NIM"],
    ["Core: Build grounded LLM application", "Build grounded LLM application", "Prepare private knowledge", "Bind answers to evidence", "Evaluate and guard outputs", "NeMo Retriever", "NeMo Guardrails", "NeMo Evaluator"],
    ["Secondary: Fine-tune existing model", "Fine-tune existing model", "Process tuning data", "Fine-tune behavior", "Evaluate tuned model", "Deploy tuned endpoint", "NeMo Customizer", "NeMo Framework"],
    ["Reference: Train model from zero", "Train model from zero", "Process foundation corpus", "Train foundation model", "Evaluate trained model", "Publish and serve artifact", "NeMo Curator", "NCCL"]
  ],
  "Agentic AI": [
    ["Core: Build agent application", "Build agent application", "Process agent knowledge", "Choose agent model", "Build agent workflow", "Evaluate agent", "Deploy and operate agent", "NeMo Agent Toolkit"],
    ["Core: Use existing model for inference", "Use existing model for inference", "Choose existing model", "Deploy inference endpoint", "Nemotron models", "NIM"],
    ["Secondary: Fine-tune existing model", "Fine-tune existing model", "Process tuning data", "Fine-tune behavior", "Evaluate tuned model", "Deploy tuned model API", "NeMo Customizer"],
    ["Reference: Train model from zero", "Train model from zero", "Process training data", "Train model", "Evaluate model", "Deploy model API", "NeMo Framework", "NCCL"]
  ],
  "Agentic AI General": [
    ["Train model from zero", "Curate model corpus", "Run foundation training", "Evaluate trained model", "Register and serve artifact", "Training Data Curation Pipeline"],
    ["Fine-tune existing model", "Select base model", "Curate examples", "Tune durable behavior", "Compare against baseline", "Deploy tuned endpoint", "Model Customization Toolkit"],
    ["Use existing model or API", "Choose existing model", "Design prompt and context", "Expose and route calls", "Measure quality and cost", "Prompt and Context Design", "Cost/Latency Optimizer"],
    ["Build agent/RAG application", "Ingest private knowledge", "Build retrieval path", "Orchestrate tools and memory", "Apply policy controls", "Evaluate agent behavior", "Knowledge Ingestion and Permission Pipeline"],
    ["Operate, govern, and improve", "Observe production runs", "Optimize serving path", "Review and govern risk", "Feed fixes back", "Observability and Trace Monitor"]
  ]
};

function searchText(question) {
  return [
    question.question,
    question.topic,
    question.domain,
    question.explanation,
    ...(question.choices || []),
    ...(question.whyWrong || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function matches(question, keywords) {
  const hay = searchText(question);
  return keywords
    .map((keyword) => String(keyword || "").trim().toLowerCase())
    .filter(Boolean)
    .some((keyword) => hay.includes(keyword));
}

let failures = 0;

for (const [slug, config] of Object.entries(CERTS)) {
  const markdown = await readFile(join(ROOT, "certifications", slug, "questions.md"), "utf8");
  const exam = parseExamMarkdown(markdown);
  const byDomain = Object.fromEntries(exam.domains.map((domain) => [domain.name, 0]));
  for (const question of exam.questions) byDomain[question.domain] = (byDomain[question.domain] || 0) + 1;

  console.log(`\n${slug}: ${exam.questions.length} questions`);
  const weakDomains = Object.entries(byDomain).filter(([, count]) => count < config.minDomain);
  console.log(`  domains: min ${Math.min(...Object.values(byDomain))}`);
  if (weakDomains.length) {
    failures += weakDomains.length;
    console.log(`  weak domains: ${weakDomains.map(([name, count]) => `${name}=${count}`).join(", ")}`);
  }

  const services = nvidiaServices.filter((service) => service.exams.includes(config.label));
  const serviceCounts = services.map((service) => ({
    name: service.name,
    count: exam.questions.filter((question) => matches(question, [service.name, service.lifecycle, ...(service.keywords || [])])).length
  }));
  const weakServices = serviceCounts.filter((item) => item.count < config.minService);
  console.log(`  services/playbooks: min ${Math.min(...serviceCounts.map((item) => item.count))}`);
  if (weakServices.length) {
    failures += weakServices.length;
    console.log(`  weak services/playbooks: ${weakServices.map((item) => `${item.name}=${item.count}`).join(", ")}`);
  }

  const lifecycleCounts = (LIFECYCLE_LANES[config.label] || []).map((keywords) => ({
    name: keywords[0],
    count: exam.questions.filter((question) => matches(question, keywords)).length
  }));
  const weakLanes = lifecycleCounts.filter((item) => item.count < config.minLifecycle);
  console.log(`  lifecycle lanes: min ${Math.min(...lifecycleCounts.map((item) => item.count))}`);
  if (weakLanes.length) {
    failures += weakLanes.length;
    console.log(`  weak lifecycle lanes: ${weakLanes.map((item) => `${item.name}=${item.count}`).join(", ")}`);
  }

  if (config.label === "Agentic AI General") {
    const sectionCounts = studySections
      .filter((section) => section.exam === config.label)
      .map((section) => ({ name: section.name, count: byDomain[section.name] || 0 }));
    console.log(`  study sections: min ${Math.min(...sectionCounts.map((item) => item.count))}`);
  }
}

if (failures) {
  console.error(`\nCoverage failed with ${failures} weak bucket(s).`);
  process.exit(1);
}

console.log("\nCoverage validation passed.");

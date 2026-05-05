import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices } from "../client/src/data/study-services.js";

const root = process.cwd();

const configs = [
  {
    slug: "agentic_ai_professional",
    file: "certifications/agentic_ai_professional/questions.md",
    generated: "certifications/agentic_ai_professional/generated-questions.md",
    mocksDir: "certifications/agentic_ai_professional/mocks",
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI"))
  },
  {
    slug: "genai_llms_professional",
    file: "certifications/genai_llms_professional/questions.md",
    generated: "certifications/genai_llms_professional/generated-questions.md",
    mocksDir: "certifications/genai_llms_professional/mocks",
    services: nvidiaServices.filter((service) => service.exams.includes("GenAI LLMs"))
  },
  {
    slug: "agentic_ai_general_study",
    file: "certifications/agentic_ai_general_study/questions.md",
    generated: null,
    mocksDir: "certifications/agentic_ai_general_study/mocks",
    services: nvidiaServices.filter((service) => service.exams.includes("Agentic AI General"))
  }
];

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
  /bulk-/i,
  /BEGIN LARGE PRACTICE BANK GENERATED/i,
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
  /is deciding between [^.]+\. The requirement is/i,
  /initially selected [^.]+, but the actual requirement is/i,
  /has a [^.]+ requirement\. The requirement is/i,
  /needs a supported NVIDIA path/i,
  /has a design review question about/i,
  /is choosing an NVIDIA component\. The team needs/i,
  /is choosing an NVIDIA component\. The immediate task is/i,
  /is choosing an NVIDIA component\./i,
  /not the layer described here/i,
  /Treat the requirement as generic model selection/i,
  /Use average latency alone and ignore/i,
  /Move the workload to a larger model/i,
  /Rely on prompt wording alone/i,
  /Add more GPUs before measuring/i,
  /supports to /i,
  /packaging or manage/i,
  /nVIDIA/,
  /Use first when/i
];

const serviceSignalPattern = /trace|timeline|kernel|CUDA|Kubernetes|endpoint|API|LoRA|PEFT|RAG|retrieval|embedding|rerank|guardrail|policy|eval|benchmark|judge|dataset|dedup|PII|profile|registry|container|rollout|autoscal|all-reduce|NCCL|GPU|latency|throughput|documents|workflow|tools|memory|state|agent|router|specialist|planner|handoff|retry|preference|session|recall|consent|model artifacts|release|serve|serving|routing|runtime|artifact|microservice|profiler|JSONL|Parquet|corpus|pipeline|ScoreFilter|classifier|curation|prefill|decode|KV-cache|multi-node|H100/i;

function countBy(items, keyFn) {
  return items.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function serviceCounts(questions, services) {
  return Object.fromEntries(services.map((service) => {
    const pattern = new RegExp(escapeRegExp(service.name), "i");
    const count = questions.filter((question) => pattern.test(`${question.topic} ${question.question} ${question.explanation}`)).length;
    return [service.name, count];
  }));
}

async function collectMockFiles(dir) {
  const entries = await readdir(path.join(root, dir), { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(entry.parentPath, entry.name));
}

async function readGeneratedQuestions(file) {
  if (!file) return [];
  try {
    const text = await readFile(path.join(root, file), "utf8");
    const matches = [...text.matchAll(/```json\s*([\s\S]*?)```/g)];
    return matches.flatMap((match) => {
      try {
        const parsed = JSON.parse(match[1]);
        return parsed.status === "approved" ? [parsed] : [];
      } catch {
        return [];
      }
    });
  } catch {
    return [];
  }
}

async function auditConfig(config) {
  const markdown = await readFile(path.join(root, config.file), "utf8");
  const parsed = parseExamMarkdown(markdown);
  const generatedApproved = await readGeneratedQuestions(config.generated);
  const allIds = new Set(parsed.questions.map((question) => question.id));
  for (const question of generatedApproved) allIds.add(question.id);

  const failures = [];
  const seen = new Set();
  for (const question of parsed.questions) {
    if (seen.has(question.id)) failures.push(`duplicate question id: ${question.id}`);
    seen.add(question.id);
    if (question.choices.length !== 4) failures.push(`${question.id}: expected 4 choices`);
    if (!["easy", "medium", "hard", "expert"].includes(question.difficulty)) failures.push(`${question.id}: bad difficulty ${question.difficulty}`);
    const text = `${question.question} ${question.choices.join(" ")} ${question.explanation}`;
    for (const pattern of banned) {
      if (pattern.test(text)) failures.push(`${question.id}: banned phrase ${pattern}`);
    }
    if (/NVIDIA service:/i.test(question.topic) && !serviceSignalPattern.test(question.question)) {
      failures.push(`${question.id}: service stem lacks a concrete operational signal`);
    }
  }

  const mockFiles = await collectMockFiles(config.mocksDir);
  for (const mockFile of mockFiles) {
    const data = JSON.parse(await readFile(mockFile, "utf8"));
    const missing = (data.questionIds || []).filter((id) => !allIds.has(id));
    if (missing.length) failures.push(`${path.relative(root, mockFile)} missing ids: ${missing.join(", ")}`);
  }

  const domains = countBy(parsed.questions, (question) => question.domain);
  const difficulties = countBy(parsed.questions, (question) => question.difficulty);
  const services = serviceCounts(parsed.questions, config.services);
  const lowServices = Object.entries(services).filter(([, count]) => count < 30);
  return {
    slug: config.slug,
    bankQuestions: parsed.questions.length,
    approvedDrafts: generatedApproved.length,
    domains,
    difficulties,
    lowServices,
    mockFiles: mockFiles.length,
    failures
  };
}

const reports = [];
for (const config of configs) {
  reports.push(await auditConfig(config));
}

console.log(JSON.stringify(reports, null, 2));

const failures = reports.flatMap((report) => report.failures.map((failure) => `${report.slug}: ${failure}`));
if (failures.length) {
  console.error(`\nQuestion-bank audit failed:\n${failures.slice(0, 80).join("\n")}`);
  process.exit(1);
}

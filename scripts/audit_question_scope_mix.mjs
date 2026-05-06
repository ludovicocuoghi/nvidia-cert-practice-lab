import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const certsDir = join(root, "certifications");
const asJson = process.argv.includes("--json");
const requestedSlugs = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));

const certConfigs = [
  {
    slug: "agentic_ai_professional",
    code: "NCP-AAI",
    targetNvidiaPercent: 28,
    targetConceptPercent: 72
  },
  {
    slug: "genai_llms_professional",
    code: "NCP-GENL",
    targetNvidiaPercent: 45,
    targetConceptPercent: 55
  }
];

const nvidiaTerms = [
  "nvidia",
  "nemo",
  "nim",
  "tensorrt",
  "triton",
  "nsight",
  "ngc",
  "rapids",
  "cuda",
  "nccl",
  "dgx",
  "rtx",
  "a100",
  "h100",
  "blackwell",
  "nemotron",
  "base command",
  "ai enterprise",
  "tensor core",
  "tensor cores",
  "dynamo-triton",
  "dynamo triton"
];

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function questionBlocks(markdown) {
  return markdown
    .split(/\n(?=###\s*Q\d+:)/)
    .map((block) => block.trim())
    .filter((block) => /^###\s*Q\d+:/m.test(block));
}

function parseQuestions(markdown, source) {
  return questionBlocks(markdown).map((block) => {
    const field = (label) => block.match(new RegExp(`^- ${label}:\\s*(.+)$`, "im"))?.[1]?.trim() || "";
    return {
      id: field("ID"),
      domain: field("Domain"),
      topic: field("Topic"),
      difficulty: field("Difficulty").toLowerCase() || "medium",
      explicitScope: field("Scope"),
      source,
      text: block
    };
  }).filter((question) => question.id);
}

function readQuestionFiles(folder, matcher, source) {
  if (!existsSync(folder)) return [];
  return readdirSync(folder)
    .filter(matcher)
    .sort()
    .flatMap((file) => parseQuestions(readFileSync(join(folder, file), "utf8"), source));
}

function inferScope(question) {
  if (question.explicitScope === "general_concept" || question.explicitScope === "nvidia_specific") {
    return question.explicitScope;
  }
  const haystack = question.text.toLowerCase();
  return nvidiaTerms.some((term) => haystack.includes(term)) ? "nvidia_specific" : "general_concept";
}

function pct(n, d) {
  return d ? Math.round((n / d) * 100) : 0;
}

function summarize(questions) {
  const nvidia = questions.filter((question) => inferScope(question) === "nvidia_specific").length;
  const general = questions.length - nvidia;
  return {
    total: questions.length,
    general,
    nvidia,
    generalPercent: pct(general, questions.length),
    nvidiaPercent: pct(nvidia, questions.length)
  };
}

function mixRecommendation(summary, config) {
  const targetNvidia = Math.round(summary.total * config.targetNvidiaPercent / 100);
  const targetGeneral = summary.total - targetNvidia;
  return {
    targetGeneral,
    targetNvidia,
    generalDelta: summary.general - targetGeneral,
    nvidiaDelta: summary.nvidia - targetNvidia,
    note: summary.nvidia > targetNvidia
      ? `NVIDIA-specific is high by ${summary.nvidia - targetNvidia}; generate more general-concept questions before more NVIDIA-specific ones.`
      : summary.nvidia < targetNvidia
        ? `NVIDIA-specific is low by ${targetNvidia - summary.nvidia}; generate targeted NVIDIA-specific questions.`
        : "Scope mix is on target."
  };
}

function listMockFiles(certDir, source) {
  const dir = join(certDir, "mocks", source);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => join(dir, file));
}

function auditCert(config) {
  const certDir = join(certsDir, config.slug);
  const original = readQuestionFiles(join(certDir, "mocks", "original"), (file) => file.endsWith(".questions.md"), "original");
  const generated = readQuestionFiles(join(certDir, "generated"), (file) => /^high_fidelity_\d+\.md$/.test(file), "high_fidelity_generated");
  const drafts = readQuestionFiles(join(certDir, "generated"), (file) => file === "drafts.md", "generated_draft");
  const active = [];
  const seenIds = new Set();
  for (const question of [...original, ...generated, ...drafts]) {
    if (seenIds.has(question.id)) continue;
    active.push(question);
    seenIds.add(question.id);
  }
  const byId = new Map(active.map((question) => [question.id, question]));

  const bank = {
    all: summarize(active),
    original: summarize(active.filter((question) => question.source === "original")),
    generated: summarize(active.filter((question) => question.source === "high_fidelity_generated")),
    drafts: summarize(active.filter((question) => question.source === "generated_draft"))
  };

  const mocks = [];
  for (const source of ["original", "generated"]) {
    for (const file of listMockFiles(certDir, source)) {
      const mock = readJson(file);
      const questions = (mock.questionIds || []).map((id) => byId.get(id)).filter(Boolean);
      mocks.push({
        source,
        id: mock.id || file.replace(/\.json$/, ""),
        name: mock.name || mock.id,
        ...summarize(questions)
      });
    }
  }

  return {
    slug: config.slug,
    code: config.code,
    target: {
      generalPercent: config.targetConceptPercent,
      nvidiaPercent: config.targetNvidiaPercent
    },
    bank,
    recommendation: mixRecommendation(bank.all, config),
    mocks
  };
}

const selectedConfigs = certConfigs.filter((config) => !requestedSlugs.length || requestedSlugs.includes(config.slug) || requestedSlugs.includes(config.code));
const report = selectedConfigs.map(auditCert);

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else {
  for (const cert of report) {
    console.log(`\n${cert.code} (${cert.slug})`);
    console.log(`  target mix: ${cert.target.generalPercent}% general / ${cert.target.nvidiaPercent}% NVIDIA-specific`);
    for (const [name, summary] of Object.entries(cert.bank)) {
      console.log(`  active-bank/${name}: ${summary.general} general (${summary.generalPercent}%), ${summary.nvidia} NVIDIA (${summary.nvidiaPercent}%), ${summary.total} total`);
    }
    console.log(`  recommendation: ${cert.recommendation.note}`);
    console.log("  mocks:");
    for (const mock of cert.mocks) {
      console.log(`    ${mock.source}/${mock.id}: ${mock.general} general (${mock.generalPercent}%), ${mock.nvidia} NVIDIA (${mock.nvidiaPercent}%), ${mock.total} total`);
    }
  }
}

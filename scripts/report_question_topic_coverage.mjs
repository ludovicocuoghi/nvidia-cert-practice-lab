import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const certsDir = join(root, "certifications");
const outputPath = join(certsDir, "question-topic-coverage-report.md");
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());

const certs = [
  { slug: "agentic_ai_professional", code: "NCP-AAI" },
  { slug: "genai_llms_professional", code: "NCP-GENL" }
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

function blocks(markdown) {
  return markdown
    .split(/\n(?=###\s*Q\d+:)/)
    .map((block) => block.trim())
    .filter((block) => /^###\s*Q\d+:/m.test(block));
}

function field(block, label) {
  return block.match(new RegExp(`^- ${label}:\\s*(.+)$`, "im"))?.[1]?.trim() || "";
}

const inferredTopicRules = [
  {
    topic: "quantization and runtime optimization",
    pattern: /\b(quantiz|awq|smoothquant|fp8|int8|int4|kv[- ]?cache|speculative decoding|distill|prun|spars|calibration|paged kv|in-flight batching|continuous batching)\b/i
  },
  {
    topic: "parallelism and GPU training",
    pattern: /\b(tensor parallel|pipeline parallel|data parallel|sequence parallel|expert parallel|fsdp|zero-|activation checkpoint|checkpointing|nccl|nvlink|cuda graph|nsight|kernel|tensor core|gemm|h100|a100|gpu cluster)\b/i
  },
  {
    topic: "prompting and decoding controls",
    pattern: /\b(prompt|few-shot|zero-shot|chain[- ]of[- ]thought|temperature|top[-_ ]?p|top[-_ ]?k|beam|sampling|constrained decoding|system message|context window)\b/i
  },
  {
    topic: "fine-tuning and alignment",
    pattern: /\b(lora|qlora|adapter|p-tuning|peft|sft|dpo|grpo|rlhf|alignment|preference|reward model|fine[- ]tun)\b/i
  },
  {
    topic: "data curation and tokenization",
    pattern: /\b(minhash|dedup|pii|redact|contamination|tokeniz|bpe|wordpiece|sentencepiece|data quality|dataset|corpus|cleaning|split)\b/i
  },
  {
    topic: "serving and deployment",
    pattern: /\b(nim|triton|tensorrt|kubernetes|k8s|autoscal|dynamic batching|model repository|endpoint|serving|deployment|rollout|container|operator)\b/i
  },
  {
    topic: "evaluation metrics and test sets",
    pattern: /\b(bleu|rouge|perplexity|benchmark|eval|human evaluation|judge|accuracy|regression|holdout|confidence interval|bootstrap)\b/i
  },
  {
    topic: "production reliability and monitoring",
    pattern: /\b(p95|p99|ttft|latency|throughput|monitor|drift|canary|rollback|slo|sla|observability|trace|incident|alert|queue)\b/i
  },
  {
    topic: "LLM architecture and pretraining",
    pattern: /\b(transformer|self-attention|attention head|encoder|decoder|causal|mlm|nsp|embedding|positional|rope|pretrain|masked language)\b/i
  },
  {
    topic: "safety, privacy, and guardrails",
    pattern: /\b(bias|fairness|safety|guardrail|privacy|toxicity|jailbreak|prompt injection|policy|compliance|red team)\b/i
  }
];

function inferTopic(block, domain) {
  const explicit = field(block, "Topic");
  if (explicit) return explicit;
  for (const rule of inferredTopicRules) {
    if (rule.pattern.test(block)) return `(inferred) ${rule.topic}`;
  }
  return `(inferred) ${domain}`;
}

function parseQuestions(markdown, source, file) {
  return blocks(markdown).map((block) => ({
    id: field(block, "ID"),
    domain: field(block, "Domain") || "Uncategorized",
    topic: inferTopic(block, field(block, "Domain") || "Uncategorized"),
    difficulty: (field(block, "Difficulty") || "medium").toLowerCase(),
    explicitScope: field(block, "Scope"),
    source,
    file,
    text: block
  })).filter((question) => question.id);
}

function readQuestionFiles(certDir, folder, matcher, source) {
  const dir = join(certDir, folder);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(matcher)
    .sort()
    .flatMap((file) => parseQuestions(readFileSync(join(dir, file), "utf8"), source, file));
}

function inferScope(question) {
  if (question.explicitScope === "general_concept" || question.explicitScope === "nvidia_specific") {
    return question.explicitScope;
  }
  const haystack = question.text.toLowerCase();
  return nvidiaTerms.some((term) => haystack.includes(term)) ? "nvidia_specific" : "general_concept";
}

function activeQuestions(certDir) {
  const original = readQuestionFiles(certDir, "mocks/original", (file) => file.endsWith(".questions.md"), "original");
  const generated = readQuestionFiles(certDir, "generated", (file) => /^high_fidelity_\d+\.md$/.test(file), "generated");
  const drafts = readQuestionFiles(certDir, "generated", (file) => file === "drafts.md", "draft");
  const active = [];
  const seen = new Set();
  for (const question of [...original, ...generated, ...drafts]) {
    if (seen.has(question.id)) continue;
    active.push({ ...question, scope: inferScope(question) });
    seen.add(question.id);
  }
  return active;
}

function mockSlots(certDir, source) {
  const dir = join(certDir, "mocks", source);
  if (!existsSync(dir)) return 0;
  return readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .reduce((sum, file) => {
      const mock = JSON.parse(readFileSync(join(dir, file), "utf8"));
      return sum + (mock.questionIds?.length || 0);
    }, 0);
}

function countBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    const current = map.get(key) || {
      total: 0,
      original: 0,
      generated: 0,
      draft: 0,
      general: 0,
      nvidia: 0,
      easy: 0,
      medium: 0,
      hard: 0,
      expert: 0,
      advanced: 0
    };
    current.total += 1;
    current[item.source] = (current[item.source] || 0) + 1;
    if (item.scope === "nvidia_specific") current.nvidia += 1;
    else current.general += 1;
    current[item.difficulty] = (current[item.difficulty] || 0) + 1;
    map.set(key, current);
  }
  return map;
}

function table(headers, rows) {
  return [
    `| ${headers.join(" |")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.join(" | ")} |`)
  ].join("\n");
}

function fmtCount(count) {
  return String(count || 0);
}

function domainRows(questions) {
  const counts = countBy(questions, (question) => question.domain);
  return [...counts.entries()]
    .sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0]))
    .map(([domain, count]) => [
      domain,
      fmtCount(count.total),
      fmtCount(count.original),
      fmtCount(count.generated),
      fmtCount(count.general),
      fmtCount(count.nvidia),
      `E ${fmtCount(count.easy)} / M ${fmtCount(count.medium)} / H ${fmtCount(count.hard)} / X ${fmtCount(count.expert)} / A ${fmtCount(count.advanced)}`
    ]);
}

function topicRows(questions) {
  const counts = countBy(questions, (question) => `${question.domain}|||${question.topic}`);
  return [...counts.entries()]
    .sort((a, b) => {
      const [domainA, topicA] = a[0].split("|||");
      const [domainB, topicB] = b[0].split("|||");
      return domainA.localeCompare(domainB) || b[1].total - a[1].total || topicA.localeCompare(topicB);
    })
    .map(([key, count]) => {
      const [domain, topic] = key.split("|||");
      return [
        domain,
        topic,
        fmtCount(count.total),
        fmtCount(count.original),
        fmtCount(count.generated),
        fmtCount(count.general),
        fmtCount(count.nvidia),
        `E ${fmtCount(count.easy)} / M ${fmtCount(count.medium)} / H ${fmtCount(count.hard)} / X ${fmtCount(count.expert)} / A ${fmtCount(count.advanced)}`
      ];
    });
}

function focusedFinding(questions, domain) {
  const selected = questions.filter((question) => question.domain === domain);
  const original = selected.filter((question) => question.source === "original");
  const hardOriginal = original.filter((question) => question.difficulty === "hard");
  const hardGenerated = selected.filter((question) => question.source === "generated" && question.difficulty === "hard");
  return {
    selected: selected.length,
    original: original.length,
    hardOriginal: hardOriginal.length,
    hardGenerated: hardGenerated.length,
    originalDifficulty: countBy(original, (question) => "all").get("all") || {}
  };
}

const lines = [
  "# Question Topic Coverage Report",
  "",
  `Generated: ${today}`,
  "",
  "This report counts active unique practice-bank questions, not fixed mock-test slots. The app de-duplicates question IDs in this order: downloaded/original question markdown, generated high-fidelity shards, then drafts.",
  "",
  "Counting terms:",
  "",
  "- Original/downloaded bank: unique questions parsed from `mocks/original/*.questions.md`.",
  "- Generated bank: unique questions parsed from `generated/high_fidelity_*.md`.",
  "- Mock slots: the fixed timed mock JSON references. These can reuse the same original question IDs across multiple mock sets.",
  "- Exam section: exact `Domain` metadata on each question.",
  "- Topic: exact `Topic` metadata on each question; when downloaded mocks lack topic metadata, this report labels a conservative inferred topic from the question stem/explanation.",
  "- NVIDIA-specific: explicit `Scope` if present, otherwise inferred by NVIDIA platform keywords.",
  ""
];

for (const cert of certs) {
  const certDir = join(certsDir, cert.slug);
  const questions = activeQuestions(certDir);
  const sourceCounts = countBy(questions, (question) => question.source);
  const original = sourceCounts.get("original") || {};
  const generated = sourceCounts.get("generated") || {};
  const slotsOriginal = mockSlots(certDir, "original");
  const slotsGenerated = mockSlots(certDir, "generated");

  lines.push(`## ${cert.code} (${cert.slug})`, "");
  lines.push(`Active unique bank: ${questions.length}`);
  lines.push(`Downloaded/original unique: ${fmtCount(original.total)}; downloaded fixed mock slots: ${slotsOriginal}`);
  lines.push(`Generated unique: ${fmtCount(generated.total)}; generated fixed mock slots: ${slotsGenerated}`);
  lines.push("");

  if (cert.slug === "agentic_ai_professional") {
    const platform = focusedFinding(questions, "NVIDIA Platform Implementation");
    lines.push("### Screenshot Finding");
    lines.push("");
    lines.push(`For **NVIDIA Platform Implementation**, the active unique bank has ${platform.selected} questions: ${platform.original} downloaded/original and ${platform.selected - platform.original} generated.`);
    lines.push(`With difficulty set to **Hard**, downloaded/original has ${platform.hardOriginal} matches, while generated has ${platform.hardGenerated} matches.`);
    lines.push("That is why the UI can show `Downloaded bank 0` for this section when Hard is selected even though downloaded mocks contain some platform questions overall.");
    lines.push(`Downloaded/original platform difficulty split: easy ${fmtCount(platform.originalDifficulty.easy)}, medium ${fmtCount(platform.originalDifficulty.medium)}, hard ${fmtCount(platform.originalDifficulty.hard)}, expert ${fmtCount(platform.originalDifficulty.expert)}.`);
    lines.push("");
  }

  lines.push("### Domain Summary", "");
  lines.push(table(
    ["Exam section", "Total", "Original", "Generated", "Concept", "NVIDIA", "Difficulty"],
    domainRows(questions)
  ));
  lines.push("");

  lines.push("### Topic Summary", "");
  lines.push(table(
    ["Exam section", "Topic", "Total", "Original", "Generated", "Concept", "NVIDIA", "Difficulty"],
    topicRows(questions)
  ));
  lines.push("");
}

writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(outputPath);

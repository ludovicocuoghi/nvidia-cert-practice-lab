import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";
import { nvidiaServices, studySections } from "../public/study-services.js";

const root = new URL("..", import.meta.url).pathname;
const certsDir = join(root, "certifications");
const startMarker = "<!-- STUDY_ENRICHMENT_START -->";
const endMarker = "<!-- STUDY_ENRICHMENT_END -->";

const certs = [
  { slug: "genai_llms_professional", label: "GenAI LLMs" },
  { slug: "agentic_ai_professional", label: "Agentic AI" }
];

const serviceAliases = {
  "NeMo Framework": ["nemo framework", "sft", "peft", "lora", "qlora", "fine-tuning", "training recipe", "customize model"],
  "NeMo Agent Toolkit": ["nemo agent toolkit", "agent toolkit", "agent workflow", "agent orchestration", "tool orchestration", "framework-agnostic"],
  "NeMo Guardrails": ["nemo guardrails", "guardrails", "policy", "prompt injection", "unsafe", "tool restriction", "jailbreak"],
  "NeMo Retriever": ["nemo retriever", "retriever", "rag", "retrieval", "rerank", "embedding", "indexing", "chunks", "citations"],
  "NIM": ["nim", "inference microservice", "model api", "api endpoint", "openai-compatible", "serve a model", "containerized model"],
  "Nemotron models": ["nemotron", "reasoning model", "reward model", "instruction model"],
  "Triton Inference Server": ["triton inference", "triton", "dynamic batching", "ensemble", "model repository", "grpc"],
  "TensorRT-LLM": ["tensorrt-llm", "trt-llm", "paged kv", "in-flight batching", "continuous batching", "kv cache", "ttft", "tokens/sec"],
  "NGC": ["ngc", "catalog", "registry", "containers", "helm chart", "model artifact"],
  "Nsight Systems": ["nsight systems", "timeline", "cuda api", "launch overhead", "cpu stalls", "system-wide"],
  "Nsight Compute": ["nsight compute", "kernel profiler", "occupancy", "warp", "memory stalls", "kernel bottleneck"],
  "NCCL": ["nccl", "all-reduce", "all-gather", "reduce-scatter", "all-to-all", "collective", "multi-node"],
  "RAPIDS": ["rapids", "cudf", "cuml", "gpu dataframe", "dataframe", "tabular"],
  "NeMo Curator": ["nemo curator", "curator", "dedupe", "deduplication", "quality filtering", "data curation", "synthetic data"],
  "NeMo Customizer": ["nemo customizer", "customizer", "api-driven peft", "hosted fine-tuning", "lora api"],
  "NeMo Evaluator": ["nemo evaluator", "evaluator", "llm-as-judge", "benchmark", "regression scoring", "evaluation pipeline"],
  "NIM Operator": ["nim operator", "operator", "kubernetes operator", "autoscale nim", "rolling updates"],
  "Dynamo (Triton Dynamo)": ["dynamo", "triton dynamo", "disaggregated prefill", "disaggregated decode", "kv-cache routing", "multi-node serving"]
};

const extraServiceDescriptions = {
  "AI Workbench": "local-to-cloud development environments, reproducible projects, and team handoff for AI workloads",
  "BioNeMo": "biomolecular model development, drug discovery, protein, chemistry, and life-sciences foundation models",
  "Cosmos NeMo Data": "video/world-model data curation, data pipelines, and physical AI dataset preparation",
  Riva: "speech AI, ASR, TTS, translation, and speech/audio services",
  "TAO Toolkit": "transfer learning and model adaptation for vision and speech workloads",
  TensorRT: "general deep-learning inference optimization, engine building, kernel fusion, and precision calibration"
};

function slugPart(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripGenerated(markdown) {
  const re = new RegExp(`\\n?${startMarker}[\\s\\S]*?${endMarker}\\n?`, "g");
  return markdown.replace(re, "").trimEnd();
}

function mdList(items) {
  return (items || []).filter(Boolean).map((item) => `- ${highlightStudyText(item)}`).join("\n");
}

function clean(value, max = 260) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length > max ? `${text.slice(0, max - 3).trim()}...` : text;
}

function highlightStudyText(value) {
  const initial = String(value || "").split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part) => (
    part.startsWith("**") && part.endsWith("**")
      ? { text: part.slice(2, -2), bold: true }
      : { text: part, bold: false }
  ));
  const terms = [
    "NeMo Framework", "NeMo Customizer", "NeMo Agent Toolkit", "NeMo Guardrails", "NeMo Retriever", "NeMo Evaluator", "NeMo Curator",
    "NIM Operator", "NIM", "TensorRT-LLM", "Triton Inference Server", "Dynamo", "Nsight Systems", "Nsight Compute",
    "NCCL", "RAPIDS", "NGC", "Nemotron", "LoRA", "QLoRA", "PEFT", "SFT", "DPO", "RLHF", "GRPO",
    "RAG", "retrieval", "reranking", "guardrails", "prompt injection", "tool calls", "structured output",
    "KV cache", "paged KV cache", "in-flight batching", "continuous batching", "TTFT", "quantization",
    "FP8", "INT8", "INT4", "FlashAttention", "FSDP", "tensor parallelism", "pipeline parallelism",
    "all-reduce", "trajectory evaluation", "LLM-as-judge", "faithfulness", "human review",
    "canary", "rollback", "drift", "PII", "least privilege", "approval gates", "human-in-the-loop"
  ].sort((a, b) => b.length - a.length);
  let segments = initial;
  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(?<![\\w*])(${escaped})(?![\\w*])`, "gi");
    segments = segments.flatMap((segment) => {
      if (segment.bold) return [segment];
      const next = [];
      let last = 0;
      let match;
      while ((match = re.exec(segment.text)) !== null) {
        if (match.index > last) next.push({ text: segment.text.slice(last, match.index), bold: false });
        next.push({ text: match[1], bold: true });
        last = match.index + match[1].length;
      }
      if (last < segment.text.length) next.push({ text: segment.text.slice(last), bold: false });
      return next;
    });
  }
  return segments.map((segment) => segment.bold ? `**${segment.text}**` : segment.text).join("");
}

function cardValue(value) {
  return highlightStudyText(value);
}

function questionText(q) {
  return `${q.id} ${q.domain} ${q.topic || ""} ${q.question} ${q.choices.join(" ")} ${q.explanation}`.toLowerCase();
}

async function loadCertQuestions(cert) {
  const certDir = join(certsDir, cert.slug);
  const questions = new Map();

  async function addMarkdown(path) {
    if (!existsSync(path)) return;
    const parsed = parseExamMarkdown(await readFile(path, "utf8"));
    for (const q of parsed.questions) {
      if (!questions.has(q.id)) questions.set(q.id, { ...q, cert: cert.label, refs: [] });
    }
  }

  const originalDir = join(certDir, "mocks", "original");
  if (existsSync(originalDir)) {
    for (const file of await readdir(originalDir)) {
      if (file.endsWith(".questions.md")) await addMarkdown(join(originalDir, file));
    }
    for (const file of await readdir(originalDir)) {
      if (!file.endsWith(".json")) continue;
      const mock = JSON.parse(await readFile(join(originalDir, file), "utf8"));
      mock.questionIds.forEach((id, index) => {
        const q = questions.get(id);
        if (q) q.refs.push({ mock: mock.id || file.replace(/\.json$/, ""), name: mock.name || file.replace(/\.json$/, ""), number: index + 1 });
      });
    }
  }
  const generatedDir = join(certDir, "generated");
  if (existsSync(generatedDir)) {
    for (const file of await readdir(generatedDir)) {
      if (/^high_fidelity_\d+\.md$/.test(file)) await addMarkdown(join(generatedDir, file));
    }
  }
  return [...questions.values()];
}

function buildQuestionLine(q, includeDomain = false) {
  const refs = q.refs.length
    ? q.refs.map((r) => `${r.mock} Q${r.number}`).join(", ")
    : q.id;
  const answer = q.choices[q.answer] || "";
  const trap = q.whyWrong.find(Boolean);
  return `- **${refs}** / \`${q.id}\`${includeDomain ? ` (${q.domain})` : ""}: ${clean(q.question, 170)} Correct idea: ${clean(answer, 130)}.${trap ? ` Trap: ${clean(trap, 120)}` : ""}`;
}

function visiblePatterns(questions) {
  return questions.slice(0, 14).map((q) => buildQuestionLine(q)).join("\n") || "- No direct mock question matches found yet. Use the concept checks and service boundaries above.";
}

function hiddenRefs(questions, includeDomain = false) {
  const lines = questions.map((q) => buildQuestionLine(q, includeDomain)).join("\n") || "- No direct mock references found for this file yet.";
  return [
    "<details>",
    "<summary>Mock question links (click to expand)</summary>",
    "",
    lines,
    "",
    "</details>"
  ].join("\n");
}

function nearbyDistractors(questions, targetName) {
  const names = [
    "NIM", "NIM Operator", "NeMo Framework", "NeMo Customizer", "NeMo Agent Toolkit",
    "NeMo Guardrails", "NeMo Retriever", "NeMo Evaluator", "NeMo Curator",
    "TensorRT-LLM", "Triton Inference Server", "Dynamo", "Nsight Systems",
    "Nsight Compute", "NCCL", "RAPIDS", "NGC", "Nemotron"
  ].filter((name) => name !== targetName);
  const counts = new Map();
  for (const q of questions) {
    const text = questionText(q);
    for (const name of names) {
      if (text.includes(name.toLowerCase())) counts.set(name, (counts.get(name) || 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([name]) => name);
}

function examTipsForService(service, name, questions) {
  const lifecycle = service?.lifecycle || "its lifecycle stage";
  const use = service?.use || `the scenario matches ${name}'s concrete lifecycle role`;
  const avoid = service?.avoid || "the question belongs to a different lifecycle stage";
  const traps = service?.traps || "a nearby NVIDIA product sounds plausible but solves a different layer";
  const distractors = nearbyDistractors(questions, name);
  return [
    `Mock-style questions usually test whether you can place **${name}** in the right lifecycle stage: **${lifecycle}**.`,
    `Choose it when the scenario signal matches this boundary: ${use}`,
    `Reject it when the problem is actually about another layer: ${avoid}`,
    `The common trap pattern is: ${traps}`,
    distractors.length
      ? `Expect distractors around nearby services such as ${distractors.join(", ")}. Decide by lifecycle first, product name second.`
      : "If it appears only as a distractor, decide by the required lifecycle phase before choosing a product name.",
    "Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool."
  ];
}

function examTipsForSection(section, questions) {
  const topics = [...new Set(questions.map((q) => q.topic).filter(Boolean))].slice(0, 8);
  return [
    `Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.`,
    `The section signal is: ${section.use}`,
    `The major trap pattern is: ${section.traps}`,
    topics.length ? `Recurring local question themes include: ${topics.join(", ")}.` : `Recurring local question themes follow the key ideas: ${(section.keyIdeas || []).join(", ")}.`,
    `When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.`,
    `Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.`
  ];
}

function sectionBlock(section, questions) {
  const direct = questions.filter((q) => q.domain === section.name);
  const refs = direct.sort((a, b) => a.id.localeCompare(b.id));
  return [
    startMarker,
    "",
    "## Study card data",
    "",
    `- **Exam:** ${cardValue(section.exam)}`,
    `- **Weight:** ${section.weight}%`,
    `- **What it covers:** ${cardValue(section.description)}`,
    `- **Use this section when:** ${cardValue(section.use)}`,
    `- **Common trap:** ${cardValue(section.traps)}`,
    `- **Scenario signal:** ${cardValue(section.scenario)}`,
    "",
    "### Study notes",
    "",
    mdList(section.studyNotes),
    "",
    "### Must know",
    "",
    mdList(section.mustKnow || section.keyIdeas),
    "",
    "### High-yield exam signals",
    "",
    mdList(section.examSignals || section.keyIdeas),
    "",
    "### Hands-on checks",
    "",
    mdList(section.handsOn),
    "",
    "## Exam tips from mocks",
    "",
    mdList(examTipsForSection(section, refs)),
    "",
    hiddenRefs(refs),
    "",
    endMarker
  ].join("\n");
}

function keywordsForService(service, fallbackName) {
  const name = service?.name || fallbackName;
  const base = [
    name,
    ...(serviceAliases[name] || []),
    service?.quizPrompt
  ];
  return [...new Set(base.filter(Boolean).flatMap((item) => String(item).toLowerCase().split(/\s*,\s*/)))].filter((kw) => kw.length >= 3);
}

function hasPhrase(text, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (/^[a-z0-9 -]+$/.test(phrase)) {
    return new RegExp(`\\b${escaped.replace(/\s+/g, "\\s+")}\\b`, "i").test(text);
  }
  return text.includes(phrase);
}

function questionsForService(service, fallbackName, questions) {
  const keywords = keywordsForService(service, fallbackName);
  const scored = questions.map((q) => {
    const text = questionText(q);
    let score = 0;
    for (const kw of keywords) {
      if (hasPhrase(text, kw)) score += kw.length > 12 ? 3 : 1;
    }
    return { q, score };
  });
  return scored.filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.q.id.localeCompare(b.q.id)).map((item) => item.q);
}

function serviceBlock(service, fallbackName, questions) {
  const name = service?.name || fallbackName;
  const description = service?.description || `NVIDIA service or platform area related to ${extraServiceDescriptions[name] || "the AI lifecycle"}.`;
  const lifecycle = service?.lifecycle || "NVIDIA platform capability";
  const direct = questionsForService(service, name, questions);
  const mustKnow = service?.mustKnow || [lifecycle, "where it fits", "when not to use it"];
  const examSignals = service?.examSignals || [name, lifecycle];
  const handsOn = service?.handsOn || [`Write one scenario where ${name} is correct and one scenario where it is a tempting but wrong distractor.`];
  const related = service?.relatedServices || [];
  return [
    startMarker,
    "",
    "## Study card data",
    "",
    `- **Lifecycle:** ${cardValue(lifecycle)}`,
    `- **Relevant exams:** ${cardValue((service?.exams || ["GenAI LLMs", "Agentic AI"]).join(", "))}`,
    `- **What it is:** ${cardValue(description)}`,
    `- **Use it when:** ${cardValue(service?.use || `The scenario is about ${extraServiceDescriptions[name] || lifecycle}.`)}`,
    `- **Do not use it when:** ${cardValue(service?.avoid || "The scenario belongs to a different lifecycle stage such as training, serving, safety, retrieval, or profiling.")}`,
    `- **Common trap:** ${cardValue(service?.traps || `Choosing ${name} because it is an NVIDIA term instead of because the scenario matches its lifecycle role.`)}`,
    `- **Scenario signal:** ${cardValue(service?.scenario || `Look for wording about ${extraServiceDescriptions[name] || lifecycle}.`)}`,
    "",
    "### Study notes",
    "",
    mdList(service?.studyNotes || [
      `Know the lifecycle phase ${name} belongs to and contrast it with nearby NVIDIA services.`,
      `For exam questions, identify whether the bottleneck is training, retrieval, safety, serving, profiling, communication, or data preparation before choosing ${name}.`
    ]),
    "",
    "### Must know",
    "",
    mdList(mustKnow),
    "",
    "### High-yield exam signals",
    "",
    mdList(examSignals),
    "",
    related.length ? "### Related services\n\n" + mdList(related) + "\n" : "",
    "### Hands-on checks",
    "",
    mdList(handsOn),
    "",
    "## Exam tips from mocks",
    "",
    mdList(examTipsForService(service, name, direct)),
    "",
    hiddenRefs(direct, true),
    "",
    endMarker
  ].filter(Boolean).join("\n");
}

async function updateFile(path, block) {
  const existing = await readFile(path, "utf8");
  const next = `${stripGenerated(existing)}\n\n${block}\n`;
  if (next !== existing) await writeFile(path, next, "utf8");
}

async function main() {
  const allQuestionsByCert = new Map();
  for (const cert of certs) {
    allQuestionsByCert.set(cert.label, await loadCertQuestions(cert));
  }
  const allQuestions = [...allQuestionsByCert.values()].flat();

  for (const cert of certs) {
    const certDir = join(certsDir, cert.slug);
    const certQuestions = allQuestionsByCert.get(cert.label);
    for (const section of studySections.filter((item) => item.exam === cert.label)) {
      const path = join(certDir, "topics", `${slugPart(section.name)}.md`);
      if (existsSync(path)) await updateFile(path, sectionBlock(section, certQuestions));
    }
  }

  const servicesDir = join(certsDir, "_shared", "services");
  for (const file of await readdir(servicesDir)) {
    if (!file.endsWith(".md")) continue;
    const path = join(servicesDir, file);
    const serviceName = nvidiaServices.find((service) => `${slugPart(service.name)}.md` === file)?.name
      || file.replace(/\.md$/, "").split("-").map((part) => part.toUpperCase() === "NIM" ? "NIM" : part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
    const service = nvidiaServices.find((item) => item.name === serviceName);
    await updateFile(path, serviceBlock(service, serviceName, allQuestions));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

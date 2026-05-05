import type { ExamPayload, Question } from "../../../shared/src/types";

type ModelProfile = {
  id: string;
  family: string;
  minGpuMemoryGb: number;
  latencyMs: number;
  throughputTokensSec: number;
};

type HardwareProfile = {
  label: string;
  memoryGb: number;
};

export type DomainScore = {
  total: number;
  correct: number;
};

export type GradeResult = {
  total: number;
  correct: number;
  percent: number;
  rows: Array<{
    id: string;
    domain: string;
    correct: boolean;
    selected: number | undefined;
    answer: number;
  }>;
  byDomain: Record<string, DomainScore>;
};

export function estimateTokens(text = "") {
  const trimmed = String(text).trim();
  if (!trimmed) return 0;
  return Math.max(1, Math.ceil(trimmed.split(/\s+/).length * 1.35));
}

export function findById<T extends { id: string }>(items: T[], id: string): T {
  return items.find((item) => item.id === id) || items[0];
}

export function evaluatePrompt(prompt = "", useRetrieval = false, useGuardrails = true) {
  const text = String(prompt).trim();
  const lower = text.toLowerCase();
  const issues = [];

  if (!text) issues.push("Empty prompt: define the business task before choosing an LLM workflow.");
  if (text.length < 25) issues.push("Prompt is too short for enterprise evaluation; add role, task, data source, and acceptance criteria.");
  if (!useRetrieval && /\b(policy|contract|internal|document|manual|knowledge|source)\b/.test(lower)) {
    issues.push("Likely needs RAG: the prompt asks for source-grounded knowledge but retrieval is off.");
  }
  if (!useGuardrails && /\b(customer|private|secret|credential|medical|legal|finance)\b/.test(lower)) {
    issues.push("Guardrails are off while sensitive or regulated content appears in the prompt.");
  }
  if (/\b(ignore previous|bypass|jailbreak|exfiltrate|api key|password)\b/.test(lower)) {
    issues.push("Potential prompt-injection or data-exfiltration attempt detected.");
  }
  if (!/\b(format|json|table|bullet|schema|cite|citation)\b/.test(lower)) {
    issues.push("Output contract is unclear; ask for a format, schema, citations, or decision criteria.");
  }

  const score = Math.max(0, 100 - issues.length * 16);
  return { score, issues };
}

export function simulateRun({
  prompt,
  model,
  hardware,
  temperature = 0.3,
  useRetrieval = true,
  useGuardrails = true
}: {
  prompt: string;
  model: ModelProfile;
  hardware: HardwareProfile;
  temperature?: number;
  useRetrieval?: boolean;
  useGuardrails?: boolean;
}) {
  const tokenCount = estimateTokens(prompt);
  const promptReview = evaluatePrompt(prompt, useRetrieval, useGuardrails);
  const memoryFit = hardware.memoryGb >= model.minGpuMemoryGb;
  const retrievalBonus = useRetrieval ? 9 : -8;
  const guardrailBonus = useGuardrails ? 7 : -12;
  const tempPenalty = Number(temperature) > 0.8 ? 8 : 0;
  const quality = Math.max(8, Math.min(99, promptReview.score + retrievalBonus + guardrailBonus - tempPenalty));
  const latency = Math.round(model.latencyMs * (1 + tokenCount / 1200) * (memoryFit ? 1 : 1.8));
  const throughput = Math.round(model.throughputTokensSec * (memoryFit ? 1 : 0.42));
  const status = memoryFit ? "ready" : "profile-warning";
  const profile = memoryFit ? "optimized-profile-sim" : "generic-fallback-profile-sim";
  const warnings = [...promptReview.issues];

  if (!memoryFit) {
    warnings.push(`${hardware.label} has ${hardware.memoryGb} GB memory; ${model.id} expects about ${model.minGpuMemoryGb} GB in this simulation.`);
  }

  const answer = [
    `Mock ${model.family} response for "${prompt || "your task"}".`,
    useRetrieval ? "The answer would be grounded with retrieved passages, then reranked before generation." : "Retrieval is disabled, so the answer is more likely to hallucinate on private facts.",
    useGuardrails ? "A policy pass checks input and output before returning the response." : "No guardrail pass is active in this run.",
    `Simulated endpoint: POST /v1/chat/completions using ${profile}.`
  ].join(" ");

  return {
    answer,
    metrics: {
      status,
      quality,
      latencyMs: latency,
      throughputTokensSec: throughput,
      estimatedInputTokens: tokenCount,
      profile
    },
    warnings
  };
}

export function buildMistakeEntry({ title, mistake, correction, source = "manual", prompt = "" }) {
  const now = new Date().toISOString();
  const cleanTitle = String(title || "Untitled mistake").trim();
  const cleanMistake = String(mistake || "No mistake description provided.").trim();
  const cleanCorrection = String(correction || "Add a clear correction next time.").trim();
  const cleanPrompt = String(prompt || "").trim();

  return [
    `### ${cleanTitle}`,
    `- **Date:** ${now}`,
    `- **Source:** ${source}`,
    `- **Mistake:** ${cleanMistake}`,
    `- **Correction:** ${cleanCorrection}`,
    cleanPrompt ? `- **Practice prompt:** ${cleanPrompt}` : "- **Practice prompt:** Not provided.",
    ""
  ].join("\n");
}

function parseMetadataValue(markdown, label, fallback = "") {
  const pattern = new RegExp(`^- ${label}:\\s*(.+)$`, "im");
  return markdown.match(pattern)?.[1]?.trim() || fallback;
}

function parseDomainLine(line: string) {
  const match = line.match(/^- (.+):\s*(\d+)%\s*$/);
  if (!match) return null;
  return {
    name: match[1].trim(),
    weight: Number(match[2])
  };
}

function parseQuestionBlock(block: string, index: number): Question {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  const title = lines.shift() || "";
  const question = title.replace(/^###\s*Q\d+:\s*/i, "").trim();
  const choices: string[] = [];
  const whyWrong: string[] = [];
  let id = `q-${String(index + 1).padStart(3, "0")}`;
  let domain = "Uncategorized";
  let topic = "";
  let difficulty = "medium";
  let answerLetter = "";
  let explanation = "";

  for (const line of lines) {
    const field = line.match(/^- ([A-Za-z][A-Za-z ]*):\s*(.+)$/);
    const choice = line.match(/^- ([A-F])\.\s*(.+)$/);
    const wrongReason = line.match(/^- Why ([A-F]) is wrong:\s*(.+)$/i);

    if (choice) {
      choices.push(choice[2].trim());
    } else if (wrongReason) {
      whyWrong[wrongReason[1].toUpperCase().charCodeAt(0) - 65] = wrongReason[2].trim();
    } else if (field) {
      const key = field[1].toLowerCase();
      const value = field[2].trim();
      if (key === "id") id = value;
      if (key === "domain") domain = value;
      if (key === "topic") topic = value;
      if (key === "difficulty") difficulty = value.toLowerCase();
      if (key === "answer") answerLetter = value.toUpperCase();
      if (key === "explanation") explanation = value;
    }
  }

  if (!answerLetter || answerLetter.length !== 1) {
    throw new Error(`Invalid markdown question block near Q${index + 1}: missing or invalid Answer field`);
  }
  const answer = answerLetter.charCodeAt(0) - 65;
  if (!question || choices.length < 2 || answer < 0 || answer >= choices.length) {
    throw new Error(`Invalid markdown question block near Q${index + 1}`);
  }

  return {
    id,
    domain,
    topic,
    difficulty,
    question,
    choices,
    answer,
    explanation,
    whyWrong: choices.map((_, choiceIndex) => whyWrong[choiceIndex] || "")
  };
}

export function parseExamMarkdown(markdown: string): ExamPayload {
  const domainSection = markdown.split("## Blueprint Domains")[1]?.split("## Questions")[0] || "";
  const domains = domainSection
    .split("\n")
    .map(parseDomainLine)
    .filter(Boolean);

  const questionSection = markdown.split("## Questions")[1] || "";
  const blocks = questionSection
    .split(/\n(?=###\s*Q\d+:)/)
    .map((block) => block.trim())
    .filter(Boolean);

  return {
    certification: {
      name: parseMetadataValue(markdown, "Name", "NVIDIA-Certified Professional Generative AI LLMs"),
      code: parseMetadataValue(markdown, "Code", "NCP-GENL"),
      durationMinutes: Number(parseMetadataValue(markdown, "Duration Minutes", "120")),
      questionRange: parseMetadataValue(markdown, "Question Range", "60-70"),
      level: parseMetadataValue(markdown, "Level", "Professional"),
      source: parseMetadataValue(markdown, "Source", "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/"),
      note: "Blueprint-derived scenario-based practice questions. Not real exam content."
    },
    domains,
    questions: blocks.map(parseQuestionBlock)
  };
}

export function gradeExam(questions: Question[], answers: Record<string, number>): GradeResult {
  const rows = questions.map((question) => {
    const selected = answers[question.id];
    const correct = selected === question.answer;
    return {
      id: question.id,
      domain: question.domain,
      correct,
      selected,
      answer: question.answer
    };
  });

  const correctCount = rows.filter((row) => row.correct).length;
  const byDomain = rows.reduce<Record<string, DomainScore>>((domains, row) => {
    const current = domains[row.domain] || { total: 0, correct: 0 };
    current.total += 1;
    if (row.correct) current.correct += 1;
    domains[row.domain] = current;
    return domains;
  }, {});

  return {
    total: rows.length,
    correct: correctCount,
    percent: rows.length ? Math.round((correctCount / rows.length) * 100) : 0,
    rows,
    byDomain
  };
}

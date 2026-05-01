import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FETCH_TIMEOUT_MS = Number(process.env.LLM_TIMEOUT_MS || process.env.DEEPSEEK_TIMEOUT_MS) || 120000;
function getLLMUrl() { return process.env.LLM_API_URL || "https://api.moonshot.ai/v1/chat/completions"; }
function getLLMModel() { return process.env.LLM_MODEL || "kimi-k2.6"; }

function normalizeSystemContent(system) {
  if (!system) return "";
  if (typeof system === "string") return system;
  if (Array.isArray(system)) {
    return system
      .filter((b) => b.type === "text" || typeof b.text === "string")
      .map((b) => b.text)
      .join("\n\n");
  }
  return String(system);
}

function normalizeLLMResponse(result) {
  const msg = result.choices?.[0]?.message || {};
  const text = msg.content || msg.reasoning_content || "";
  const usage = result.usage
    ? {
        input_tokens: result.usage.prompt_tokens ?? result.usage.input_tokens ?? 0,
        output_tokens: result.usage.completion_tokens ?? result.usage.output_tokens ?? 0
      }
    : null;
  const stopReason = result.choices?.[0]?.finish_reason || result.stop_reason || null;
  return { text, usage, stopReason };
}

async function callLLM({ apiKey, model, maxTokens, temperature, system, messages, signal, timeoutMs = FETCH_TIMEOUT_MS, errorPrefix = "LLM" }) {
  if (!apiKey) {
    throw Object.assign(new Error("LLM_API_KEY is not set in the server environment."), { httpStatus: 503 });
  }

  const openaiMessages = [];
  const systemText = normalizeSystemContent(system);
  if (systemText) openaiMessages.push({ role: "system", content: systemText });
  openaiMessages.push(...messages);

  const body = { model, max_tokens: maxTokens, messages: openaiMessages, thinking: { type: "disabled" } };
  if (temperature !== undefined) body.temperature = temperature;

  const response = await fetch(getLLMUrl(), {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    signal: abortSignal(timeoutMs, signal)
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    const err = new Error(`${errorPrefix} API error ${response.status}: ${errorText.slice(0, 500)}`);
    err.httpStatus = response.status >= 500 ? 502 : 400;
    throw err;
  }

  return normalizeLLMResponse(await response.json());
}

function abortSignal(timeoutMs = FETCH_TIMEOUT_MS, externalSignal = null) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timer);
      return externalSignal;
    }
    externalSignal.addEventListener("abort", () => {
      clearTimeout(timer);
      controller.abort();
    }, { once: true });
  }
  // Don't let the timer keep the process alive
  if (timer.unref) timer.unref();
  return controller.signal;
}

// Lifted from ~/.claude/skills/nvidia-cert-questions/SKILL.md — keep in sync.
const QUESTION_FORMAT_INSTRUCTIONS = `You generate scenario-based, Professional-level multiple-choice questions for the NVIDIA certification practice app. The learner is an experienced engineer with 2–3 years of LLM/agent experience preparing for NCP-GENL or NCP-AAI.

## Hard rules (non-negotiable)

1. **Scenario, not definition.** Every stem sets up a real engineering trade-off with concrete constraints — latency budget, GPU memory, accuracy floor, throughput SLA, distribution shift, cost cap, safety requirement. NEVER write "what is X?" or definitional stems.
2. **All four options are exam-plausible.** Wrong answers must be near-miss techniques a competent learner might choose — they should solve the wrong layer, optimize the wrong bottleneck, miss a safety boundary, or ignore a production constraint. Do not use strawmen such as "hide logs", "retry forever", "disable evals", "use prompt only", "use the biggest model for everything", or "do nothing".
3. **NVIDIA-specific tooling, used correctly.** TensorRT-LLM, NIM, NeMo Framework/Curator/Evaluator/Guardrails/Customizer, Triton Inference Server, NCCL, Nsight Systems/Compute, NGC, RAPIDS, Riva, TAO, BioNeMo, Dynamo. For NCP-AAI add NeMo Agent Toolkit, NeMo Retriever, Nemotron. Never invent product names, flags, or parameters.
4. **Vary the correct letter.** Do NOT default to C. Within a batch, distribute the correct letter across A/B/C/D.
5. **A "Why X is wrong" line for EVERY wrong option.** Four-option question = exactly three "Why X is wrong" lines.
6. **Output ONLY the markdown question blocks** — no preamble, no closing remarks, no code fences.

## Output format (one block per question, separated by a blank line)

### Q<seq>: <scenario question with explicit constraints>
- ID: <prefix>-<3-digit number>
- Domain: <official domain name>
- Section: <same as Domain>
- Topic: <specific subtopic>
- Exam: <NCP-GENL or NCP-AAI>
- Difficulty: <medium | hard | advanced | expert>
- A. <plausible distractor>
- B. <plausible distractor>
- C. <plausible distractor>
- D. <plausible distractor>
- Answer: <letter — must vary>
- Explanation: <why the correct choice wins on the stated constraint, naming the tool/parameter/principle>
- Why <wrong1> is wrong: <specific reason this distractor fails the stated constraint>
- Why <wrong2> is wrong: <specific reason this distractor fails the stated constraint>
- Why <wrong3> is wrong: <specific reason this distractor fails the stated constraint>

## Domain → ID prefix

NCP-GENL: opt- (Model Optimization), gpu- (GPU Acceleration and Optimization), pe- (Prompt Engineering), ft- (Fine-Tuning), data- (Data Preparation), dep- (Model Deployment), eval- (Evaluation), prod- (Production Monitoring and Reliability), arch- (LLM Architecture), safe- (Safety, Ethics, and Compliance).

NCP-AAI: arch- (Agent Architecture and Design), dev- (Agent Development), eval- (Evaluation and Tuning), deploy- (Deployment and Scaling), cog- (Cognition, Planning, and Memory), knowledge- (Knowledge Integration and Data Handling), platform- (NVIDIA Platform Implementation), monitor- (Run, Monitor, and Maintain), safe- (Safety, Ethics, and Compliance), human- (Human-AI Interaction and Oversight).

## Difficulty calibration

- medium: one clear concept, requires recall + light trade-off reasoning.
- hard: real bottleneck with multiple plausible choices; requires picking the right layer.
- advanced: cross-layer trade-off (e.g. quantization choice impacting throughput AND accuracy under a deadline).
- expert: multi-system reasoning — performance + safety + evaluation + scaling all at once.

Vary scenario shapes within a batch — don't write five quantization questions back-to-back. Mix latency-bound, memory-bound, safety-critical, cost-sensitive, accuracy-sensitive, throughput-bound contexts.`;

// QC reviewer prompt — runs after generation to catch low-quality drafts.
const QUESTION_QC_SYSTEM_PROMPT = `You are a strict quality reviewer for NVIDIA certification practice questions (Professional level).

Review each question block on these criteria:
1. SCENARIO: Sets up a real engineering trade-off with concrete numbers/constraints. Reject if it's a "what is X?" / definitional / textbook-recall stem.
2. DISTRACTORS: All four options are real, plausible NVIDIA techniques/tools or production controls. Wrong answers fail the *specific* stated constraint, not by being made up or obviously reckless. Reject if the correct option is the only professional-sounding answer.
3. NVIDIA TOOLING: Tool/product names, flags, parameters are real and used correctly. Reject if the question invents an NVIDIA feature.
4. CALIBRATION: Difficulty matches Professional level (engineer with 2–3 years LLM/agent experience). Reject if it's associate-level recall.
5. WHY-WRONG: Has a "Why <letter> is wrong" line for every wrong option. Four-option question = exactly three "Why X is wrong" lines.
6. ANSWER VARIANCE: Within the batch, correct letters should vary across A/B/C/D. Flag if all answers in the batch are the same letter.

For each block return:
- verdict: "accept" | "fix" | "reject"
- issues: array of short strings (each ≤ 15 words)
- fixed_block: the full corrected block in identical markdown format (only when verdict is "fix")

Use "fix" only for repairable issues (missing why-wrong line, weak explanation, slightly definitional wording you can tighten). Use "reject" for fundamentally bad questions (invented tools, no real scenario, associate-level).

Return ONLY a JSON array on a single line — no prose, no markdown fences:
[{"id":"<question id>","verdict":"accept","issues":[]}, ...]`;

// Helper-chatbot prompt — per-question study tutor.
export const QUESTION_HELPER_SYSTEM_PROMPT_TEMPLATE = (certName, question, correctLetter, includeAnswer = true) => `You are a study tutor for the NVIDIA ${certName} certification exam. The learner is studying this question:

${question.question}

Choices:
${question.choices.map((c, i) => `  ${String.fromCharCode(65 + i)}. ${c}`).join("\n")}

${includeAnswer ? `Correct answer: ${correctLetter}
Official explanation: ${question.explanation || "(none provided)"}` : "The learner has not revealed the answer yet. Give hints, explain the concept, and ask guiding questions, but do not identify the correct option or eliminate choices unless the learner explicitly asks to reveal the answer."}

Help the learner understand the underlying concept. Explain *why* the right approach wins on the stated constraint, the mental model an engineer should use, and 1–2 adjacent concepts worth solidifying. Use NVIDIA-specific tooling correctly. Keep replies under ~200 words unless the learner asks for more depth. Don't restate the question. Don't moralize. If asked something off-topic, briefly redirect to the certification material.`;

function buildContextBlock(blueprint, learnerProfileMarkdown, recentMistakes, existingStems = []) {
  const domainSummary = (blueprint.domains || [])
    .map((d) => `- ${d.name} (${d.weight}%): ${d.focus}`)
    .join("\n");

  const stemSection = existingStems.length
    ? `\n\n## Existing scenario patterns to avoid duplicating\n\nGenerate fresh scenarios — do not rephrase any of these stems:\n${existingStems.slice(-40).map((s) => `- ${s}`).join("\n")}`
    : "";

  return `## Certification Context

**${blueprint.name || "Certification"}** (${blueprint.code || ""}) — ${blueprint.level || ""} level.
Format: ${blueprint.format?.questionCount?.min || "?"}–${blueprint.format?.questionCount?.max || "?"} questions, ${blueprint.format?.durationMinutes || "?"} min, pass at ${blueprint.format?.passingScorePercent || "?"}%.

## Domain Blueprint

${domainSummary}

## Learner Profile (current)

${learnerProfileMarkdown?.trim() || "_no profile yet_"}

## Recent Mistakes (most recent first)

${recentMistakes?.trim() || "_no mistakes logged yet_"}${stemSection}`;
}

function buildUserMessage({ count, focusDomains, difficulty, topic, weakOnly, lastQuestionIdHints, serviceContext }) {
  const focusLine = focusDomains?.length
    ? `Focus on these domains: ${focusDomains.join(", ")}.`
    : weakOnly
      ? "Focus on the weakest domains shown in the learner profile (lowest accuracy and lowest confidence)."
      : "Distribute across domains in proportion to their official exam weights.";

  const topicLine = topic
    ? `Specific topic to drill: "${topic}". Every question in this batch must center on this topic.`
    : "";

  const difficultyLine = difficulty
    ? `Target difficulty: ${difficulty}. Use the calibration in the system prompt — "easier" still means scenario-based, just with one clear bottleneck instead of cross-layer reasoning.`
    : "";

  const hintLine = lastQuestionIdHints?.length
    ? `Continue numbering from the highest existing IDs in the bank: ${lastQuestionIdHints.join(", ")}.`
    : "Pick fresh IDs that don't collide with the existing bank.";

  const serviceLine = serviceContext?.name
    ? `\n## Service-specific focus\nGenerate questions specifically about this NVIDIA service:\n- Name: ${serviceContext.name}\n- Exams: ${(serviceContext.exams || []).join(", ")}\n- Lifecycle: ${serviceContext.lifecycle || ""}\n- When to use: ${serviceContext.use || ""}\n- When not to use: ${serviceContext.avoid || ""}\n- Common traps: ${serviceContext.traps || ""}\n- Example scenario: ${serviceContext.scenario || ""}\n\nAt least one distractor should reflect the common trap, but do not make it obvious.`
    : "";

  return `Generate ${count} new scenario MCQs.

${focusLine}
${topicLine}
${difficultyLine}
${hintLine}
${serviceLine}

Vary the correct letter across A/B/C/D — never default to one position. Every wrong option needs its own "Why X is wrong" line.

Return ONLY the markdown question blocks in the exact format from the system prompt.`;
}

export async function generateQuestions({
  apiKey,
  blueprint,
  learnerProfileMarkdown,
  recentMistakes,
  count = 10,
  focusDomains = [],
  difficulty = "hard",
  topic = "",
  weakOnly = false,
  lastQuestionIdHints = [],
  serviceContext = null,
  existingStems = [],
  maxTokens = 8192,
  signal = null
}) {
  const system = [
    QUESTION_FORMAT_INSTRUCTIONS,
    buildContextBlock(blueprint, learnerProfileMarkdown, recentMistakes, existingStems)
  ].join("\n\n");
  const userMessage = buildUserMessage({ count, focusDomains, difficulty, topic, weakOnly, lastQuestionIdHints, serviceContext });
  const { text, usage, stopReason } = await callLLM({
    apiKey, model: getLLMModel(), maxTokens, system,
    messages: [{ role: "user", content: userMessage }],
    signal, errorPrefix: "Question generation"
  });
  return { markdown: text, usage, stopReason };
}

const ADAPTIVE_COACH_SYSTEM = `You are an adaptive coach for NVIDIA certification prep.

After every question, do TWO things:
1. Write a coaching note (≤30 words, one sentence max) grounded in the actual question and answer. Be specific to the technical content.
2. Pick the next question ID from the candidate pool to drill the learner's weakest area.

CRITICAL: Return EXACTLY this format with no other text:
{"note":"<30 words max>","nextId":"<id or null>","reason":"<5 words why this pick>"}

RULES:
- No markdown, no code fences, no preamble, no "Here is..." — just the JSON object.
- The "note" field MUST be ≤30 words. The "reason" field MUST be ≤5 words.
- If no candidate is suitable, set nextId to null.`;

function buildAdaptiveUserMessage({ question, selectedIndex, correctIndex, isCorrect, history, candidates, weakDomains }) {
  const selectedLetter = selectedIndex === undefined || selectedIndex === null
    ? "(none)"
    : String.fromCharCode(65 + selectedIndex);
  const correctLetter = String.fromCharCode(65 + correctIndex);
  const historyLine = history.length
    ? history.map((h) => `${h.id} ${h.correct ? "✓" : "✗"}`).join(", ")
    : "(first)";
  const candidateLines = candidates.slice(0, 15).map((c) => `${c.id} ${c.domain}${c.weakBoost ? " [WEAK]" : ""}`).join("\n");
  const weakLine = weakDomains.length ? weakDomains.join(", ") : "(none)";

  return `Q: ${question.id} [${question.domain}] ${question.question.slice(0, 200)}
Answer: ${correctLetter} | Picked: ${selectedLetter} | ${isCorrect ? "CORRECT" : "WRONG"}
Explanation: ${question.explanation.slice(0, 200)}

History: ${historyLine}
Weak domains: ${weakLine}

Candidates:
${candidateLines}`;
}

export async function runAdaptiveCoach({ apiKey, question, selectedIndex, correctIndex, isCorrect, history, candidates, weakDomains, signal = null }) {
  const { text, usage } = await callLLM({
    apiKey, model: getLLMModel(), maxTokens: 300, temperature: 0.3,
    system: ADAPTIVE_COACH_SYSTEM,
    messages: [{ role: "user", content: buildAdaptiveUserMessage({ question, selectedIndex, correctIndex, isCorrect, history, candidates, weakDomains }) }],
    signal, timeoutMs: 45000, errorPrefix: "Adaptive coach"
  });

  // Robust JSON extraction: try to find a complete JSON object, handling truncation
  let note = "";
  let nextId = null;
  let reason = "";

  try {
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd > jsonStart) {
      const parsed = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
      note = String(parsed.note || "").trim();
      nextId = parsed.nextId || null;
      reason = String(parsed.reason || "").trim();
    }
  } catch {
    // JSON truncated or malformed — extract fields with regex
    const noteMatch = text.match(/"note"\s*:\s*"([^"]*)/);
    const nextIdMatch = text.match(/"nextId"\s*:\s*"([^"]*)/);
    const reasonMatch = text.match(/"reason"\s*:\s*"([^"]*)/);

    if (noteMatch) note = noteMatch[1].trim();
    if (nextIdMatch && nextIdMatch[1] !== "null") nextId = nextIdMatch[1].trim();
    if (reasonMatch) reason = reasonMatch[1].trim();

    if (!note && !nextId) {
      reason = "coach model unavailable, using heuristic pick";
    }
  }

  // Sanitize: never show raw model output as a coaching note
  if (note.startsWith("{") || note.startsWith('{"')) note = "";

  return { note, nextId, reason, usage };
}

export function extractQuestionBlocks(markdown) {
  // Kimi wraps responses in ```markdown ... ``` — strip outer fences only.
  let stripped = markdown.trim();
  stripped = stripped.replace(/^```[\w-]*\s*\n/, "").replace(/\n```\s*$/, "");
  // Also strip any remaining internal code fences.
  stripped = stripped.replace(/```[\s\S]*?```/g, "");
  // Split on any ### heading — validate blocks by requiring ID + Answer fields.
  const blocks = [];
  const lines = stripped.split("\n");
  let current = [];

  function pushCurrent() {
    const joined = current.join("\n").trim();
    const hasHeading = /^###\s/m.test(joined);
    const hasID = /^- ID:\s*.+$/m.test(joined);
    const hasAnswer = /^- Answer:\s*[A-D]$/m.test(joined);
    if (hasHeading && hasID && hasAnswer) {
      blocks.push(joined);
    }
    current = [];
  }

  for (const line of lines) {
    if (/^###\s/.test(line) && current.length > 0) pushCurrent();
    current.push(line);
  }
  if (current.length > 0) pushCurrent();

  return blocks.filter(Boolean);
}

export function summarizeBlock(block) {
  const idMatch = block.match(/^- ID:\s*(.+)$/m);
  const domainMatch = block.match(/^- Domain:\s*(.+)$/m);
  const titleMatch = block.match(/^###\s*Q\d+:\s*(.+)$/m);
  return {
    id: idMatch?.[1]?.trim() || null,
    domain: domainMatch?.[1]?.trim() || null,
    title: titleMatch?.[1]?.trim().slice(0, 120) || null
  };
}

export async function reviewQuestionDrafts({ apiKey, blocks, signal = null }) {
  if (!blocks?.length) return { verdicts: [], usage: null };

  const userMessage = `Review the following ${blocks.length} draft question block(s). Return one JSON object per block in the same order, in a single JSON array.\n\n${blocks.map((b, i) => `### DRAFT ${i + 1}\n${b}`).join("\n\n")}`;

  const { text, usage } = await callLLM({
    apiKey, model: getLLMModel(), maxTokens: 4096,
    system: QUESTION_QC_SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
    signal, errorPrefix: "Question QC"
  });

  let verdicts = [];
  try {
    const arrStart = text.indexOf("[");
    const arrEnd = text.lastIndexOf("]");
    verdicts = JSON.parse(text.slice(arrStart, arrEnd + 1));
    if (!Array.isArray(verdicts)) verdicts = [];
  } catch {
    verdicts = blocks.map(() => ({ verdict: "accept", issues: ["QC parse failed; auto-accepted"] }));
  }

  return { verdicts, usage };
}

export async function runQuestionCoach({ apiKey, certName, question, history = [], userMessage, includeAnswer = true, signal = null }) {
  const correctLetter = String.fromCharCode(65 + (question.answer ?? 0));
  const system = QUESTION_HELPER_SYSTEM_PROMPT_TEMPLATE(certName, question, correctLetter, includeAnswer);

  const messages = [
    ...history.slice(-12).map((turn) => ({
      role: turn.role === "assistant" ? "assistant" : "user",
      content: String(turn.content || "")
    })),
    { role: "user", content: String(userMessage || "").slice(0, 2000) }
  ];

  const { text, usage } = await callLLM({
    apiKey, model: getLLMModel(), maxTokens: 1200,
    system, messages, signal, timeoutMs: 45000, errorPrefix: "Question coach"
  });

  return { reply: text, usage };
}

export async function loadGeneratorContext(certDir) {
  const blueprint = JSON.parse(await readFile(join(certDir, "blueprint.json"), "utf8"));
  const learnerProfileMarkdown = await readFile(join(certDir, "learner_profile.md"), "utf8").catch((err) => {
    if (err.code === "ENOENT") return "";
    throw err;
  });
  const mistakesFull = await readFile(join(certDir, "mistakes.md"), "utf8").catch((err) => {
    if (err.code === "ENOENT") return "";
    throw err;
  });
  const recentMistakes = mistakesFull
    .split(/\n(?=### )/)
    .slice(-12)
    .join("\n")
    .trim();

  const questionsMd = await readFile(join(certDir, "questions.md"), "utf8").catch((err) => {
    if (err.code === "ENOENT") return "";
    throw err;
  });
  const generatedMd = await readFile(join(certDir, "generated-questions.md"), "utf8").catch((err) => {
    if (err.code === "ENOENT") return "";
    throw err;
  });
  const allIds = [
    ...questionsMd.matchAll(/^- ID:\s*([\w-]+)$/gm),
    ...generatedMd.matchAll(/^- ID:\s*([\w-]+)$/gm)
  ].map((m) => m[1]);
  const lastQuestionIdHints = allIds.slice(-8);

  // Near-duplicate guard: collect first 80 chars of each scenario stem so the model
  // doesn't regenerate trivial variants of bank questions.
  const stemPattern = /^###\s*Q\d+:\s*(.+)$/gm;
  const existingStems = [
    ...[...questionsMd.matchAll(stemPattern)].map((m) => m[1]),
    ...[...generatedMd.matchAll(stemPattern)].map((m) => m[1])
  ].map((s) => s.trim().slice(0, 80));

  return { blueprint, learnerProfileMarkdown, recentMistakes, lastQuestionIdHints, existingStems };
}

export async function runStudyChat({ apiKey, certName, topic, history = [], userMessage, signal = null }) {
  const topicLine = topic ? ` Current study topic: ${topic}.` : "";
  const system = `You are a concise NVIDIA ${certName} exam study tutor.${topicLine} Answer questions about NVIDIA tools, LLMs, agent frameworks, and certification topics. Keep replies under 120 words. Use accurate NVIDIA terminology (NIM, TensorRT-LLM, NeMo, etc.). If off-topic, briefly redirect to certification material.`;

  const messages = [
    ...history.slice(-8).map((turn) => ({
      role: turn.role === "assistant" ? "assistant" : "user",
      content: String(turn.content || "").slice(0, 800)
    })),
    { role: "user", content: String(userMessage || "").slice(0, 800) }
  ];

  const { text, usage } = await callLLM({
    apiKey, model: getLLMModel(), maxTokens: 600,
    system, messages, signal, timeoutMs: 30000, errorPrefix: "Study chat"
  });

  return { reply: text, usage };
}

export function loadRecentMistakeTopics(mistakesMarkdown) {
  if (!mistakesMarkdown) return [];
  const entries = mistakesMarkdown.split(/\n(?=### )/).slice(-15);
  const byDomain = new Map();
  for (const entry of entries) {
    const domainMatch = entry.match(/^- \*\*Source:\*\*\s*(.+?)$/m);
    const titleMatch = entry.match(/^###\s*(.+)$/m);
    const mistakeMatch = entry.match(/^- \*\*Mistake:\*\*\s*(.+?)$/m);
    const domain = domainMatch?.[1]?.trim() || titleMatch?.[1]?.split(":")[0]?.trim() || "Unknown";
    const sample = (mistakeMatch?.[1] || titleMatch?.[1] || "").slice(0, 120);
    const current = byDomain.get(domain) || { domain, count: 0, samples: [] };
    current.count += 1;
    if (sample && current.samples.length < 3) current.samples.push(sample);
    byDomain.set(domain, current);
  }
  return [...byDomain.values()].sort((a, b) => b.count - a.count).slice(0, 3);
}

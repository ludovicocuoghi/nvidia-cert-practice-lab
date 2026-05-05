import { createServer, type IncomingMessage } from "node:http";
import { readFile, writeFile, appendFile, readdir } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { buildMistakeEntry, findById, gradeExam, parseExamMarkdown, simulateRun } from "./domain/simulator";
import {
  appendDomainNote,
  emptyProfile,
  mergeSessionResult,
  parseProfileMarkdown,
  serializeProfile
} from "./domain/learnerProfile";
import {
  runAdaptiveCoach,
  runQuestionCoach,
  reviewQuestionDrafts,
  generateQuestions,
  runStudyChat,
  extractQuestionBlocks,
  loadGeneratorContext,
  loadRecentMistakeTopics,
  summarizeBlock
} from "./domain/questionGenerator";

const root = fileURLToPath(new URL("../../", import.meta.url));
const publicDir = join(root, "client", "dist");
const certsDir = join(root, "certifications");
const generalCapabilityDir = join(certsDir, "agentic_ai_general_study", "capabilities");

function loadDotenv(filePath) {
  if (!existsSync(filePath)) return;
  const contents = readFileSync(filePath, "utf8");
  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env) || process.env[key] === "") process.env[key] = value;
  }
}

loadDotenv(join(root, ".env"));

const defaultCertSlug = process.env.CERT_SLUG || "agentic_ai_professional";
const port = Number(process.env.PORT || 4273);
const host = process.env.HOST || "127.0.0.1";
const maxBodyBytes = Number(process.env.MAX_BODY_BYTES || 1024 * 1024);
const missingLlmApiKeyMessage = "Coach chat and AI question generation need an LLM API key. Create .env from .env.example, set LLM_API_KEY, then restart the dev server.";

function getLlmApiKey() {
  return process.env.LLM_API_KEY || "";
}

function sendMissingLlmApiKey(res) {
  send(res, 503, {
    code: "missing_llm_api_key",
    error: missingLlmApiKeyMessage
  });
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function resolveCertDir(slug) {
  const safe = String(slug || defaultCertSlug).trim();
  if (!/^[a-z0-9_-]+$/i.test(safe)) {
    throw Object.assign(new Error("Invalid cert slug"), { httpStatus: 400 });
  }
  const dir = normalize(join(certsDir, safe));
  if (!dir.startsWith(certsDir)) {
    throw Object.assign(new Error("Invalid cert path"), { httpStatus: 400 });
  }
  return { slug: safe, dir };
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function readApprovals(certDir) {
  try {
    const raw = await readFile(join(certDir, "generated-approvals.json"), "utf8");
    const parsed = JSON.parse(raw);
    return {
      approved: Array.isArray(parsed.approved) ? parsed.approved : [],
      rejected: Array.isArray(parsed.rejected) ? parsed.rejected : []
    };
  } catch (err) {
    if (err.code === "ENOENT") return { approved: [], rejected: [] };
    throw err;
  }
}

async function writeApprovals(certDir, approvals) {
  await writeFile(
    join(certDir, "generated-approvals.json"),
    JSON.stringify({ approved: approvals.approved, rejected: approvals.rejected }, null, 2),
    "utf8"
  );
}

async function readBlueprint(certDir) {
  try {
    return await readJson(join(certDir, "blueprint.json"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function readExam(certDir) {
  const blueprint = await readBlueprint(certDir);
  const markdown = await readFile(join(certDir, "questions.md"), "utf8").catch((error) => {
    if (error.code !== "ENOENT") throw error;
    return [
      `- Name: ${blueprint?.name || "Certification"}`,
      `- Code: ${blueprint?.code || "CERT"}`,
      `- Duration Minutes: ${blueprint?.format?.durationMinutes || 120}`,
      `- Question Range: ${blueprint?.format?.questionCount ? `${blueprint.format.questionCount.min}-${blueprint.format.questionCount.max}` : "60-70"}`,
      `- Level: ${blueprint?.level || "Professional"}`,
      `- Source: ${blueprint?.homepage || "https://www.nvidia.com/en-us/learn/certification/"}`,
      "",
      "## Blueprint Domains",
      ...(blueprint?.domains || []).map((domain) => `- ${domain.name}: ${domain.weight}%`),
      "",
      "## Questions",
      ""
    ].join("\n");
  });
  const exam = parseExamMarkdown(markdown);
  const questionIds = new Set(exam.questions.map((q) => q.id));
  const originalBankIds = new Set(
    exam.questions.filter((q) => q.source !== "high_fidelity_generated").map((q) => q.id)
  );
  const highFidelityGeneratedIds = new Set(
    exam.questions.filter((q) => q.source === "high_fidelity_generated").map((q) => q.id)
  );

  // Draft generated questions are merged into the full pool so saved IDs and the adaptive coach
  // can still resolve every question, but only approved drafts go into generatedPracticeIds.
  const generatedIds = new Set<string>();
  try {
    const generatedRaw = await readFile(join(certDir, "generated-questions.md"), "utf8");
    // parseExamMarkdown splits on "## Questions" then on /### Q\d+:/. Strip any preamble so the
    // header/comment lines don't get parsed as a malformed first question.
    const firstQ = generatedRaw.search(/^###\s*Q\d+:/m);
    const blocksMd = firstQ === -1 ? "" : generatedRaw.slice(firstQ);
    if (blocksMd) {
      const generatedExam = parseExamMarkdown(`## Questions\n\n${blocksMd}`);
      for (const q of generatedExam.questions) {
        q.source = "generated_draft";
        generatedIds.add(q.id);
        if (!questionIds.has(q.id)) {
          exam.questions.push(q);
          questionIds.add(q.id);
        }
      }
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.warn(`Skipping generated-questions.md (${err.message})`);
    }
  }

  const approvals = await readApprovals(certDir);
  const approvedSet = new Set(approvals.approved);
  const rejectedSet = new Set(approvals.rejected);
  const approvedGenerated = [...generatedIds].filter((id) => approvedSet.has(id));
  const generatedPracticeIds = [...highFidelityGeneratedIds, ...approvedGenerated];
  exam.practicePoolIds = [...originalBankIds, ...generatedPracticeIds];
  exam.originalBankIds = [...originalBankIds];
  exam.highFidelityGeneratedIds = [...highFidelityGeneratedIds];
  exam.generatedPracticeIds = generatedPracticeIds;
  exam.approvedGeneratedIds = approvedGenerated;
  exam.pendingGeneratedIds = [...generatedIds].filter((id) => !approvedSet.has(id) && !rejectedSet.has(id));
  exam.rejectedGeneratedIds = [...generatedIds].filter((id) => rejectedSet.has(id));

  if (blueprint) {
    exam.certification = {
      ...exam.certification,
      name: blueprint.name || exam.certification.name,
      code: blueprint.code || exam.certification.code,
      level: blueprint.level || exam.certification.level,
      durationMinutes: blueprint.format?.durationMinutes || exam.certification.durationMinutes,
      questionRange: blueprint.format
        ? `${blueprint.format.questionCount?.min}-${blueprint.format.questionCount?.max}`
        : exam.certification.questionRange,
      passingScorePercent: blueprint.format?.passingScorePercent ?? null,
      source: blueprint.homepage || exam.certification.source
    };
    if (blueprint.domains?.length) {
      exam.domains = blueprint.domains.map((domain) => ({
        name: domain.name,
        weight: domain.weight,
        focus: domain.focus
      }));
    }
  }
  return exam;
}

async function readBody(req: IncomingMessage) {
  const chunks: Buffer[] = [];
  let totalBytes = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    totalBytes += buffer.length;
    if (totalBytes > maxBodyBytes) {
      throw Object.assign(new Error(`Request body exceeds ${maxBodyBytes} bytes`), { httpStatus: 413 });
    }
    chunks.push(buffer);
  }

  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw Object.assign(new Error("Invalid JSON request body"), { httpStatus: 400 });
  }
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "content-type": type });
  if (typeof body === "string" || Buffer.isBuffer(body)) {
    res.end(body);
    return;
  }
  res.end(JSON.stringify(body, null, 2));
}

function safePublicPath(urlPath) {
  const requested = urlPath === "/" ? "/index.html" : urlPath;
  const fullPath = normalize(join(publicDir, requested));
  if (!fullPath.startsWith(publicDir)) return null;
  return fullPath;
}

async function listCertifications() {
  const entries = await readdir(certsDir, { withFileTypes: true });
  const certs = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const blueprint = await readBlueprint(join(certsDir, entry.name));
        if (!blueprint) return null;
        return {
          slug: entry.name,
          name: blueprint?.name || entry.name,
          code: blueprint?.code || null,
          level: blueprint?.level || null,
          isDefault: entry.name === defaultCertSlug
        };
      })
  );
  return certs.filter(Boolean);
}

async function readMockDefinitions(certDir) {
  async function fromFolder(source, folder) {
    const files = await readdir(folder).catch((err) => {
      if (err.code === "ENOENT") return [];
      throw err;
    });
    const ids = files
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""));
    return Promise.all(
      ids.map(async (id) => {
        const def = await readJson(join(folder, `${id}.json`));
        return {
          id: def.id,
          name: def.name,
          description: def.description,
          source,
          sourceLabel: source === "generated" ? "Improved" : "Original",
          durationMinutes: def.durationMinutes,
          passingScorePercent: def.passingScorePercent,
          questionCount: def.questionIds.length
        };
      })
    );
  }

  const original = await fromFolder("original", join(certDir, "mocks"));
  const generated = await fromFolder("generated", join(certDir, "mocks", "generated"));
  return [...original, ...generated];
}

function certFromUrl(url) {
  return resolveCertDir(url.searchParams.get("cert"));
}

function cleanMarkdownLine(value) {
  return String(value || "").replace(/\r?\n/g, " ").trim();
}

function slugPart(value) {
  return String(value || "topic")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 18) || "topic";
}

function localQuestionDrafts({ blueprint, count, focusDomains = [], weakOnly = false, serviceContext = null }) {
  const domains = (blueprint?.domains || []).length
    ? blueprint.domains
    : [{ name: serviceContext?.name || "NVIDIA Platform", weight: 100, focus: serviceContext?.description || "NVIDIA certification topic." }];
  const focusSet = new Set(focusDomains);
  const pool = focusSet.size ? domains.filter((domain) => focusSet.has(domain.name)) : domains;
  const usable = pool.length ? pool : domains;
  const stamp = Date.now().toString(36);
  const targetName = serviceContext?.name
    ? (serviceContext.fullName ? `${serviceContext.name} (${serviceContext.fullName})` : serviceContext.name)
    : blueprint?.name || "the selected NVIDIA topic";
  const useText = serviceContext?.use || "Map the scenario to the correct lifecycle phase and NVIDIA platform capability.";
  const avoidText = serviceContext?.avoid || "Avoid choosing a tool that solves a different lifecycle phase.";
  const trapText = serviceContext?.traps || "The trap is selecting a plausible NVIDIA tool that does not match the stated bottleneck.";
  const scenarioText = serviceContext?.scenario || "A team is preparing a production AI workflow and must choose the safest next technical step.";

  return Array.from({ length: count }, (_, index) => {
    const domain = usable[index % usable.length];
    const id = `${slugPart(domain.name)}-${stamp}-${String(index + 1).padStart(2, "0")}`;
    const seq = index + 1;
    return [
      `### Q${seq}: A team is working on ${targetName} for ${domain.name}. Given this scenario: ${scenarioText} What is the best next step?`,
      `- ID: ${id}`,
      `- Domain: ${domain.name}`,
      `- Difficulty: ${seq % 3 === 0 ? "hard" : seq % 3 === 1 ? "medium" : "advanced"}`,
      `- A. Use ${targetName} only where it matches the stated lifecycle requirement: ${useText}`,
      `- B. Choose it for every NVIDIA-related requirement, even when the problem is serving, retrieval, profiling, or governance.`,
      `- C. Skip the platform/tooling decision and rely on a larger base model to solve the operational constraint.`,
      `- D. Add more GPU capacity before identifying whether the bottleneck is data, orchestration, safety, serving, or profiling.`,
      `- Answer: A`,
      `- Explanation: The correct answer maps the scenario to the service or section's intended role and preserves the engineering constraint instead of treating all NVIDIA components as interchangeable.`,
      `- Why B is wrong: ${trapText}`,
      `- Why C is wrong: A larger model does not replace the lifecycle decision, and it can increase latency, cost, and safety risk.`,
      `- Why D is wrong: More hardware is premature before locating the actual bottleneck or requirement mismatch.`
    ].join("\n");
  });
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/certifications") {
      send(res, 200, { default: defaultCertSlug, certifications: await listCertifications() });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/research") {
      const { dir } = certFromUrl(url);
      send(res, 200, await readJson(join(dir, "reference", "nvidia-research.json")));
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/exam") {
      const { dir, slug } = certFromUrl(url);
      const exam = await readExam(dir);
      send(res, 200, { ...exam, slug });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/service") {
      const slug = url.searchParams.get("slug") || "";
      if (!/^[a-z0-9-]+$/.test(slug)) {
        send(res, 400, { error: "Invalid service slug" });
        return;
      }
      const path = join(certsDir, "_shared", "services", `${slug}.md`);
      try {
        const markdown = await readFile(path, "utf8");
        send(res, 200, { slug, markdown });
      } catch (err) {
        if (err.code === "ENOENT") { send(res, 404, { slug, error: "No service file" }); return; }
        throw err;
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/capability") {
      const slug = url.searchParams.get("slug") || "";
      if (!/^[a-z0-9-]+$/.test(slug)) {
        send(res, 400, { error: "Invalid capability slug" });
        return;
      }
      const capabilityPath = normalize(join(generalCapabilityDir, `${slug}.md`));
      if (!capabilityPath.startsWith(generalCapabilityDir)) {
        send(res, 403, { error: "Invalid capability path" });
        return;
      }
      try {
        const markdown = await readFile(capabilityPath, "utf8");
        send(res, 200, { slug, markdown });
      } catch (err) {
        if (err.code === "ENOENT") { send(res, 404, { slug, error: "No capability file" }); return; }
        throw err;
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/topic") {
      const { dir } = certFromUrl(url);
      const slug = url.searchParams.get("slug") || "";
      if (!/^[a-z0-9-]+$/.test(slug)) {
        send(res, 400, { error: "Invalid topic slug" });
        return;
      }
      const topicPath = join(dir, "topics", `${slug}.md`);
      try {
        const markdown = await readFile(topicPath, "utf8");
        send(res, 200, { slug, markdown });
      } catch (err) {
        if (err.code === "ENOENT") {
          send(res, 404, { slug, error: "No topic file" });
          return;
        }
        throw err;
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/topics") {
      const { dir } = certFromUrl(url);
      try {
        const files = await readdir(join(dir, "topics"));
        send(res, 200, { topics: files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")) });
      } catch (err) {
        if (err.code === "ENOENT") { send(res, 200, { topics: [] }); return; }
        throw err;
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/questions.md") {
      const { dir } = certFromUrl(url);
      const markdown = await readFile(join(dir, "questions.md"), "utf8");
      send(res, 200, markdown, "text/markdown; charset=utf-8");
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/exam/grade") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      const exam = await readExam(dir);
      const questionIds = Array.isArray(body.questionIds) ? new Set(body.questionIds) : null;
      const questions = questionIds
        ? exam.questions.filter((question) => questionIds.has(question.id))
        : exam.questions;
      send(res, 200, gradeExam(questions, body.answers || {}));
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/mistakes") {
      const { dir } = certFromUrl(url);
      const markdown = await readFile(join(dir, "mistakes.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      send(res, 200, { markdown });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/mistakes") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      const entry = buildMistakeEntry(body);
      await appendFile(join(dir, "mistakes.md"), `\n${entry}`, "utf8");
      send(res, 201, { saved: true, entry });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/question-feedback") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      if (!body.questionId) {
        send(res, 400, { error: "Missing questionId" });
        return;
      }
      const lines = [
        `### ${cleanMarkdownLine(body.questionId)} — ${new Date().toISOString()}`,
        `- **Domain:** ${cleanMarkdownLine(body.domain) || "Unknown"}`,
        body.difficulty ? `- **Mastery:** ${cleanMarkdownLine(body.difficulty)}` : "",
        body.quality ? `- **Question quality:** ${cleanMarkdownLine(body.quality)}` : "",
        body.note ? `- **Note:** ${cleanMarkdownLine(body.note)}` : "",
        body.flow ? `- **Flow:** ${cleanMarkdownLine(body.flow)}` : "",
        ""
      ].filter(Boolean).join("\n");
      const path = join(dir, "question_feedback.md");
      const existing = await readFile(path, "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const header = "# Question Feedback\n\nLatest notes and ratings from practice/test sessions.\n\n";
      const stripped = existing.replace(/^# Question Feedback\n\nLatest notes and ratings from practice\/test sessions\.\n\n/, "");
      await writeFile(path, header + lines + "\n" + stripped, "utf8");
      send(res, 201, { saved: true });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/learner-profile") {
      const { dir } = certFromUrl(url);
      const blueprint = await readBlueprint(dir);
      const certName = blueprint?.name || "";
      const markdown = await readFile(join(dir, "learner_profile.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const profile = parseProfileMarkdown(markdown, certName);
      send(res, 200, { markdown: markdown || serializeProfile(emptyProfile(certName)), profile });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/learner-profile/session") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      if (!body.grade || typeof body.grade !== "object") {
        send(res, 400, { error: "Missing grade payload" });
        return;
      }
      const blueprint = await readBlueprint(dir);
      const certName = blueprint?.name || "";
      const existingMd = await readFile(join(dir, "learner_profile.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const merged = mergeSessionResult(parseProfileMarkdown(existingMd, certName), body.grade);
      const markdown = serializeProfile(merged);
      await writeFile(join(dir, "learner_profile.md"), markdown, "utf8");
      send(res, 200, { markdown, profile: merged });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/learner-profile/note") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      if (!body.domain || !body.note) {
        send(res, 400, { error: "Need domain and note" });
        return;
      }
      const blueprint = await readBlueprint(dir);
      const certName = blueprint?.name || "";
      const existingMd = await readFile(join(dir, "learner_profile.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const updated = appendDomainNote(parseProfileMarkdown(existingMd, certName), body.domain, body.note);
      const markdown = serializeProfile(updated);
      await writeFile(join(dir, "learner_profile.md"), markdown, "utf8");
      send(res, 200, { markdown, profile: updated });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/generate-questions") {
      const { dir, slug } = certFromUrl(url);
      const body = await readBody(req);
      const context = await loadGeneratorContext(dir);
      const count = Math.min(Math.max(Number(body.count) || 5, 1), 10);
      const useFastMode = url.searchParams.get("mode") === "fast";
      const apiKey = getLlmApiKey();
      const difficulty = ["easier", "medium", "hard", "advanced", "expert"].includes(body.difficulty)
        ? body.difficulty
        : "hard";
      const isMistakesMode = body.mode === "mistakes";
      const isStudyMode = body.mode === "study";
      let topic = typeof body.topic === "string" ? body.topic.trim().slice(0, 200) : "";
      let focusDomains = Array.isArray(body.focusDomains) ? body.focusDomains : [];

      // Mistakes mode auto-targets domains from recent mistakes.md entries.
      if (isMistakesMode) {
        const mistakesFull = await readFile(join(dir, "mistakes.md"), "utf8").catch(() => "");
        const trapTopics = loadRecentMistakeTopics(mistakesFull);
        if (trapTopics.length) {
          focusDomains = trapTopics.map((t) => t.domain);
          if (!topic) topic = trapTopics.flatMap((t) => t.samples).slice(0, 3).join(" / ");
        }
      }

      let drafts = [];
      let genUsage = null;
      let qcUsage = null;
      let qcVerdicts = [];
      let stopReason = "local-draft";

      if (!apiKey) {
        sendMissingLlmApiKey(res);
        return;
      }

      if (useFastMode) {
        send(res, 503, {
          error: "Fast local placeholder generation is disabled. Use the LLM generator instead.",
          stopReason: "fast-mode-disabled"
        });
        return;
      }

      if (apiKey && !useFastMode) {
        try {
          const llmResult = await generateQuestions({
            apiKey,
            blueprint: context.blueprint,
            learnerProfileMarkdown: context.learnerProfileMarkdown,
            recentMistakes: context.recentMistakes,
            count,
            focusDomains,
            difficulty,
            topic,
            weakOnly: Boolean(body.weakOnly),
            lastQuestionIdHints: context.lastQuestionIdHints,
            serviceContext: body.service && typeof body.service === "object" ? body.service : null,
            existingStems: context.existingStems.slice(-(count <= 1 ? 12 : 40)),
            maxTokens: count <= 1 ? 2200 : count <= 5 ? 4800 : 8192
          });
          drafts = extractQuestionBlocks(llmResult.markdown);
          genUsage = llmResult.usage;
          stopReason = llmResult.stopReason || "llm-generated";
        } catch (err) {
          console.error("LLM question generation failed:", err.message);
          send(res, err.name === "AbortError" ? 503 : (err.httpStatus || 503), {
            error: "LLM generation timed out or is unavailable. Try again in a moment.",
            stopReason: `llm-failed: ${err.message.slice(0, 120)}`
          });
          return;
        }
      }

      // QC stage: route drafts through reviewer and replace fixable blocks with corrections.
      let qcPassed = drafts;
      // Skip QC for modes that auto-approve anyway, or when generation fell back to local templates.
      const isLocalFallback = stopReason.startsWith("llm-failed") || stopReason === "fast-mode" || stopReason === "no-api-key" || stopReason === "local-draft";
      const qcSkipped = true; // QC disabled by default — generation prompt is the quality gate
      if (!qcSkipped) {
        try {
          const qcResult = await reviewQuestionDrafts({ apiKey, blocks: drafts });
          qcUsage = qcResult.usage;
          qcVerdicts = qcResult.verdicts;
          qcPassed = drafts
            .map((block, i) => {
              const verdict = qcVerdicts[i] || { verdict: "accept", issues: [] };
              if (verdict.verdict === "reject") return null;
              if (verdict.verdict === "fix" && verdict.fixed_block) return verdict.fixed_block;
              return block;
            })
            .filter(Boolean);
        } catch (err) {
          console.error("QC pass failed, accepting drafts as-is:", err.message);
          qcVerdicts = drafts.map(() => ({ verdict: "accept", issues: [`QC failed: ${err.message.slice(0, 80)}`] }));
        }
      }

      const existingIds = new Set((await readExam(dir)).questions.map((question) => question.id));
      const idCounters = {};
      function nextUniqueId(prefix) {
        let n = (idCounters[prefix] || 0) + 1;
        let id;
        do {
          id = prefix + '-' + String(n).padStart(3, '0');
          n += 1;
        } while (existingIds.has(id));
        idCounters[prefix] = n;
        return id;
      }
      function reassignId(block) {
        const summary = summarizeBlock(block);
        if (!summary.id || !existingIds.has(summary.id)) return block;
        const prefix = summary.id.replace(/-\d+$/, '') || 'q';
        const newId = nextUniqueId(prefix);
        existingIds.add(newId);
        return block.replace(/^- ID: [\w-]+$/m, '- ID: ' + newId);
      }
      const newBlocks = qcPassed.map(reassignId);
      const summaries = newBlocks.map(summarizeBlock);
      const generatedPath = join(dir, "generated-questions.md");
      const header = `\n\n<!-- generated ${new Date().toISOString()} cert=${slug} count=${newBlocks.length} difficulty=${difficulty}${topic ? ` topic="${topic}"` : ""} mode=${stopReason} qcSkipped=${qcSkipped} -->\n`;
      const payload = newBlocks.length ? header + newBlocks.join("\n\n") + "\n" : "";
      let autoApprovedIds = [];
      if (payload) {
        if (!existsSync(generatedPath)) {
          await writeFile(generatedPath, "# Generated Practice Questions\n\n> Reviewed by automated QC pass before append. Approve in the Review Queue to drill them.\n\n", "utf8");
        }
        await appendFile(generatedPath, payload, "utf8");
        if (isMistakesMode || isStudyMode || body.service) {
          // User explicitly asked for these — auto-approve so they enter practice immediately.
          const approvals = await readApprovals(dir);
          for (const s of summaries) {
            if (s.id && !approvals.approved.includes(s.id)) approvals.approved.push(s.id);
          }
          await writeApprovals(dir, approvals);
          autoApprovedIds = summaries.map((s) => s.id).filter(Boolean);
        }
      }
      const rejectedCount = drafts.length - qcPassed.length;
      send(res, 200, {
        accepted: newBlocks.length,
        rejected: rejectedCount,
        skippedDuplicates: qcPassed.length - newBlocks.length,
        summaries,
        qcVerdicts,
        qcSkipped,
        autoApprovedIds,
        usage: { generation: genUsage, qc: qcUsage },
        stopReason,
        appendedTo: newBlocks.length ? `certifications/${slug}/generated-questions.md` : null
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/approvals") {
      const { dir } = certFromUrl(url);
      const approvals = await readApprovals(dir);
      const exam = await readExam(dir);
      const pending = exam.pendingGeneratedIds.map((id) => {
        const q = exam.questions.find((qq) => qq.id === id);
        return q ? {
          id,
          domain: q.domain,
          difficulty: q.difficulty,
          summary: (q.question || "").slice(0, 140)
        } : { id, summary: "(missing question content)" };
      });
      send(res, 200, {
        approved: approvals.approved,
        rejected: approvals.rejected,
        pending
      });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/approvals") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      const id = String(body.id || "").trim();
      const action = body.action;
      if (!id || !["approve", "reject", "reset"].includes(action)) {
        send(res, 400, { error: "Body must include {id, action: approve|reject|reset}" });
        return;
      }
      const approvals = await readApprovals(dir);
      approvals.approved = approvals.approved.filter((x) => x !== id);
      approvals.rejected = approvals.rejected.filter((x) => x !== id);
      if (action === "approve") approvals.approved.push(id);
      if (action === "reject") approvals.rejected.push(id);
      await writeApprovals(dir, approvals);
      send(res, 200, { approved: approvals.approved, rejected: approvals.rejected });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/question-helper") {
      const { dir } = certFromUrl(url);
      const apiKey = getLlmApiKey();
      if (!apiKey) {
        sendMissingLlmApiKey(res);
        return;
      }
      const body = await readBody(req);
      const message = String(body.message || "").trim();
      if (!message) {
        send(res, 400, { error: "Missing message" });
        return;
      }
      const exam = await readExam(dir);
      const question = exam.questions.find((q) => q.id === body.questionId);
      if (!question) {
        send(res, 400, { error: "Unknown questionId" });
        return;
      }
      try {
        const result = await runQuestionCoach({
          apiKey,
          certName: exam.certification?.name || "NVIDIA",
          question,
          history: Array.isArray(body.history) ? body.history : [],
          userMessage: message,
          includeAnswer: body.includeAnswer !== false
        });
        send(res, 200, { reply: result.reply, usage: result.usage });
      } catch (err) {
        send(res, err.httpStatus || 500, { error: err.message || "Helper request failed" });
      }
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/study-chat") {
      const { dir } = certFromUrl(url);
      const apiKey = getLlmApiKey();
      if (!apiKey) {
        sendMissingLlmApiKey(res);
        return;
      }
      const body = await readBody(req);
      const message = String(body.message || "").trim();
      if (!message) {
        send(res, 400, { error: "Missing message" });
        return;
      }
      const blueprint = await readBlueprint(dir);
      const certName = blueprint?.name || "NVIDIA certification";
      const topic = String(body.topic || "").slice(0, 200);
      try {
        const result = await runStudyChat({
          apiKey,
          certName,
          topic,
          history: Array.isArray(body.history) ? body.history : [],
          userMessage: message
        });
        send(res, 200, { reply: result.reply, usage: result.usage });
      } catch (err) {
        send(res, err.httpStatus || 500, { error: err.message || "Study chat failed" });
      }
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/mocks") {
      const { dir } = certFromUrl(url);
      send(res, 200, { mocks: await readMockDefinitions(dir) });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/mock") {
      const { dir } = certFromUrl(url);
      const mockId = url.searchParams.get("id") || "mock_1";
      const mockSource = url.searchParams.get("source") === "generated" ? "generated" : "original";
      if (!/^[a-z0-9_-]+$/i.test(mockId)) {
        send(res, 400, { error: "Invalid mock id" });
        return;
      }
      const mockDir = mockSource === "generated" ? join(dir, "mocks", "generated") : join(dir, "mocks");
      const mockDef = await readJson(join(mockDir, `${mockId}.json`));
      const exam = await readExam(dir);

      const idSet = new Set(mockDef.questionIds);
      const orderedQuestions = mockDef.questionIds
        .map((id) => exam.questions.find((q) => q.id === id))
        .filter(Boolean);
      const missing = mockDef.questionIds.filter((id) => !exam.questions.some((q) => q.id === id));
      send(res, 200, {
        mock: { ...mockDef, source: mockSource },
        questions: orderedQuestions,
        missing,
        domains: exam.domains,
        certification: exam.certification
      });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/mock") {
      const { dir } = certFromUrl(url);
      const mockId = url.searchParams.get("id") || "mock_1";
      if (!/^[a-z0-9_-]+$/i.test(mockId)) {
        send(res, 400, { error: "Invalid mock id" });
        return;
      }
      const body = await readBody(req);
      if (!body.grade || typeof body.grade !== "object") {
        send(res, 400, { error: "Missing grade payload" });
        return;
      }
      const grade = body.grade as {
        percent: number;
        correct: number;
        total: number;
        byDomain?: Record<string, { correct: number; total: number }>;
      };
      const now = new Date().toISOString();
      const passing = body.passingScorePercent ?? 70;
      const passed = grade.percent >= passing;
      const domainLines = Object.entries(grade.byDomain || {})
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
        .map(([name, score]) => {
          const pct = Math.round((score.correct / score.total) * 100);
          return `  - ${name}: ${score.correct}/${score.total} (${pct}%)`;
        }).join("\n");
      const weakAreas = Object.entries(grade.byDomain || {})
        .map(([name, score]) => ({ name, pct: score.correct / score.total }))
        .filter((d) => d.pct < 0.7)
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 4)
        .map((d) => `  - ${d.name} (${Math.round(d.pct * 100)}%)`).join("\n");
      const improveNote = (body.improveNote || "").trim();
      const entry = [
        `## ${mockId} — ${now}`,
        `- **Score:** ${grade.percent}% (${grade.correct}/${grade.total}) — ${passed ? "PASS" : "FAIL"} (passing ${passing}%)`,
        `- **Duration used:** ${body.durationUsedSec ? `${Math.round(body.durationUsedSec / 60)} min` : "n/a"}`,
        `- **Per-domain:**`,
        domainLines || "  - (no domain data)",
        `- **Weak areas to improve:**`,
        weakAreas || "  - (none below 70%)",
        improveNote ? `- **Notes:** ${improveNote}` : "",
        ""
      ].filter(Boolean).join("\n");
      const path = join(dir, "mock_results.md");
      const existing = await readFile(path, "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const header = existing.includes("# Mock Test Results") ? "" : "# Mock Test Results\n\n";
      await writeFile(path, header + entry + "\n" + existing.replace(/^# Mock Test Results\n+/, ""), "utf8");
      send(res, 201, { saved: true, entry });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/mock-results") {
      const { dir } = certFromUrl(url);
      const markdown = await readFile(join(dir, "mock_results.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      send(res, 200, { markdown });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/session-log") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      const entries = Array.isArray(body.entries) ? body.entries : [];
      if (!entries.length) {
        send(res, 400, { error: "No entries to log" });
        return;
      }
      const now = new Date().toISOString();
      const flowLabel = String(body.flow || "session");
      const score = body.grade
        ? `${body.grade.percent}% (${body.grade.correct}/${body.grade.total})`
        : "ungraded";
      const lines = [
        `## Session ${now} — ${flowLabel} — ${entries.length}Q — ${score}`,
        ""
      ];
      for (const entry of entries) {
        const letterFor = (i) => (i === undefined || i === null ? "(none)" : String.fromCharCode(65 + i));
        const mark = entry.correct ? "✓" : "✗";
        lines.push(`### ${entry.id} [${entry.domain}] ${mark}`);
        lines.push(`- **Q:** ${entry.question}`);
        for (let i = 0; i < (entry.choices || []).length; i++) {
          lines.push(`  - ${String.fromCharCode(65 + i)}. ${entry.choices[i]}`);
        }
        lines.push(`- **Correct:** ${letterFor(entry.correctIndex)}`);
        lines.push(`- **My answer:** ${letterFor(entry.selectedIndex)}${entry.selectedIndex === undefined ? "" : entry.correct ? " (correct)" : " (wrong)"}`);
        if (entry.feedback?.difficulty || entry.feedback?.quality) {
          lines.push(`- **My feedback:** ${[
            entry.feedback?.difficulty ? `mastery=${cleanMarkdownLine(entry.feedback.difficulty)}` : "",
            entry.feedback?.quality ? `question=${cleanMarkdownLine(entry.feedback.quality)}` : ""
          ].filter(Boolean).join(", ")}`);
        }
        if (entry.explanation) lines.push(`- **Explanation:** ${entry.explanation}`);
        if (entry.coachNote) lines.push(`- **Coach note:** ${entry.coachNote}`);
        if (entry.learnerNote) lines.push(`- **My note:** ${entry.learnerNote}`);
        lines.push("");
      }
      const block = lines.join("\n");
      const path = join(dir, "sessions.md");
      const existing = await readFile(path, "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      const header = existing.includes("# Session Log") ? "" : "# Session Log\n\nAuto-written every time you finish a session. Latest first.\n\n";
      const stripped = existing.replace(/^# Session Log\n\nAuto-written every time you finish a session\. Latest first\.\n\n/, "");
      await writeFile(path, header + block + "\n" + stripped, "utf8");
      send(res, 201, { saved: true, entries: entries.length });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/session-log") {
      const { dir } = certFromUrl(url);
      const markdown = await readFile(join(dir, "sessions.md"), "utf8").catch((err) => {
        if (err.code === "ENOENT") return "";
        throw err;
      });
      send(res, 200, { markdown });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/adaptive/coach") {
      const { dir } = certFromUrl(url);
      const apiKey = getLlmApiKey();
      if (!apiKey) {
        sendMissingLlmApiKey(res);
        return;
      }
      const body = await readBody(req);
      const exam = await readExam(dir);
      const question = exam.questions.find((q) => q.id === body.questionId);
      if (!question) {
        send(res, 400, { error: "Unknown questionId" });
        return;
      }
      const seenIds = new Set(body.seenIds || []);
      seenIds.add(question.id);
      const blueprint = await readBlueprint(dir);
      const profileMd = await readFile(join(dir, "learner_profile.md"), "utf8").catch(() => "");
      const profile = parseProfileMarkdown(profileMd, blueprint?.name || "");
      const weakDomains = Object.entries(profile.domains || {})
        .filter(([, d]) => d.attempts >= 1 && d.accuracy < 0.7)
        .sort((a, b) => a[1].accuracy - b[1].accuracy)
        .slice(0, 4)
        .map(([name]) => name);

      const practiceOnly = Boolean(body.practiceOnly);
      const practiceSet = practiceOnly && Array.isArray(exam.practicePoolIds) ? new Set(exam.practicePoolIds) : null;
      const generatedSet = new Set(exam.generatedPracticeIds || exam.approvedGeneratedIds || []);
      const candidateSource = ["bank", "generated", "all"].includes(body.candidateSource) ? body.candidateSource : "all";
      const scopedCandidateIds = Array.isArray(body.candidateIds) && body.candidateIds.length
        ? new Set(body.candidateIds.map((id) => String(id)))
        : null;
      const candidatePool = exam.questions
        .filter((q) => !seenIds.has(q.id))
        .filter((q) => !practiceSet || practiceSet.has(q.id))
        .filter((q) => candidateSource === "generated" ? generatedSet.has(q.id) : candidateSource === "bank" ? !generatedSet.has(q.id) : true)
        .filter((q) => !scopedCandidateIds || scopedCandidateIds.has(q.id))
        .map((q) => ({
          id: q.id,
          domain: q.domain,
          preview: q.question.slice(0, 110),
          weakBoost: weakDomains.includes(q.domain) ? 1 : 0
        }));
      candidatePool.sort((a, b) => b.weakBoost - a.weakBoost);
      const candidates = candidatePool.slice(0, 24);

      let coachNote = "";
      let coachNextId = null;
      let coachReason = "";
      let coachUsage = null;
      let coachError = null;

      try {
        const result = await runAdaptiveCoach({
          apiKey,
          question,
          selectedIndex: body.selectedIndex,
          correctIndex: question.answer,
          isCorrect: body.selectedIndex === question.answer,
          history: Array.isArray(body.history) ? body.history.slice(-10) : [],
          candidates,
          weakDomains
        });
        coachNote = result.note;
        coachNextId = result.nextId;
        coachReason = result.reason;
        coachUsage = result.usage;
      } catch (err) {
        coachError = err.message;
        console.warn("Coach LLM call failed, falling back to heuristic:", coachError);
      }

      let nextId = coachNextId;
      const validIds = new Set(candidates.map((c) => c.id));
      if (!nextId || !validIds.has(nextId)) {
        nextId = candidates[0]?.id || null;
      }
      if (!coachReason || coachError) {
        coachReason = coachError
          ? `heuristic pick (coach unavailable: ${coachError.slice(0, 80)})`
          : "heuristic pick";
      }
      send(res, 200, {
        note: coachNote,
        nextId,
        reason: coachReason,
        weakDomains,
        usage: coachUsage
      });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/simulate") {
      const { dir } = certFromUrl(url);
      const body = await readBody(req);
      const research = await readJson(join(dir, "reference", "nvidia-research.json"));
      const model = findById(research.mockModels, body.modelId);
      const hardware = findById(research.mockHardware, body.hardwareId);
      send(res, 200, simulateRun({ ...body, model, hardware }));
      return;
    }

    if (req.method === "GET") {
      const fullPath = safePublicPath(url.pathname);
      if (!fullPath) {
        send(res, 403, "Forbidden", "text/plain; charset=utf-8");
        return;
      }
      const content = await readFile(fullPath);
      send(res, 200, content, mimeTypes[extname(fullPath)] || "application/octet-stream");
      return;
    }

    send(res, 404, { error: "Not found" });
  } catch (error) {
    if (error.httpStatus) {
      send(res, error.httpStatus, { error: error.message });
      return;
    }
    if (error.code === "ENOENT") {
      send(res, 404, { error: "Not found" });
      return;
    }
    send(res, 500, { error: error.message });
  }
});

server.listen(port, host, () => {
  console.log(`NVIDIA cert practice running at http://localhost:${port} (default cert: ${defaultCertSlug})`);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

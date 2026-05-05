import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseExamMarkdown } from "../src/simulator.js";

const root = process.cwd();
const chunkSize = 100;
const certs = [
  "agentic_ai_professional",
  "genai_llms_professional",
  "agentic_ai_general_study"
];

function questionToMarkdown(question, ordinal) {
  const letters = ["A", "B", "C", "D"];
  const lines = [
    `### Q${ordinal}: ${question.question}`,
    `- ID: ${question.id}`,
    `- Domain: ${question.domain}`
  ];
  if (question.topic) lines.push(`- Topic: ${question.topic}`);
  lines.push(`- Difficulty: ${question.difficulty || "medium"}`);
  question.choices.forEach((choice, index) => lines.push(`- ${letters[index]}. ${choice}`));
  lines.push(`- Answer: ${letters[question.answer]}`);
  if (question.explanation) lines.push(`- Explanation: ${question.explanation}`);
  question.choices.forEach((_, index) => {
    if (index !== question.answer && question.whyWrong?.[index]) {
      lines.push(`- Why ${letters[index]} is wrong: ${question.whyWrong[index]}`);
    }
  });
  lines.push("");
  return lines.join("\n");
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function maybeRename(from, to) {
  if (!existsSync(from)) return;
  await mkdir(path.dirname(to), { recursive: true });
  await rm(to, { force: true });
  await rename(from, to);
}

async function writeQuestionFile(filePath, title, questions) {
  const body = [
    `# ${title}`,
    "",
    "## Questions",
    "",
    ...questions.map((question, index) => questionToMarkdown(question, index + 1))
  ].join("\n").trimEnd() + "\n";
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, body, "utf8");
}

async function migrateCert(slug) {
  const certDir = path.join(root, "certifications", slug);
  const questionsPath = path.join(certDir, "questions.md");
  if (!existsSync(questionsPath)) {
    return { slug, status: "already migrated" };
  }
  const markdown = await readFile(questionsPath, "utf8");
  const parsed = parseExamMarkdown(markdown);
  const byId = new Map(parsed.questions.map((question) => [question.id, question]));
  const originalQuestions = parsed.questions.filter((question) => question.source !== "high_fidelity_generated");
  const highFidelityQuestions = parsed.questions.filter((question) => question.source === "high_fidelity_generated");

  const originalDir = path.join(certDir, "mocks", "original");
  const generatedDir = path.join(certDir, "generated");
  await mkdir(originalDir, { recursive: true });
  await mkdir(generatedDir, { recursive: true });

  const rootMocksDir = path.join(certDir, "mocks");
  const mockFiles = existsSync(rootMocksDir)
    ? (await readdir(rootMocksDir)).filter((file) => /^mock_\d+\.json$/.test(file)).sort()
    : [];
  const referencedOriginalIds = new Set();
  for (const file of mockFiles) {
    const id = file.replace(/\.json$/, "");
    const sourceJson = path.join(rootMocksDir, file);
    const targetJson = path.join(originalDir, file);
    const mock = await readJson(sourceJson);
    const questions = (mock.questionIds || []).map((questionId) => byId.get(questionId)).filter(Boolean);
    questions.forEach((question) => referencedOriginalIds.add(question.id));
    await writeFile(targetJson, `${JSON.stringify(mock, null, 2)}\n`, "utf8");
    await writeQuestionFile(path.join(originalDir, `${id}.questions.md`), `${mock.name || id} Questions`, questions);
    await rm(sourceJson, { force: true });
    await maybeRename(path.join(rootMocksDir, `${id}_full.md`), path.join(originalDir, "source", `${id}_full.md`));
    await maybeRename(path.join(rootMocksDir, `${id}_bank.md`), path.join(originalDir, "source", `${id}_bank.md`));
  }

  const unassignedOriginal = originalQuestions.filter((question) => !referencedOriginalIds.has(question.id));
  if (unassignedOriginal.length) {
    await writeQuestionFile(
      path.join(originalDir, "original_bank.questions.md"),
      "Original Bank Questions",
      unassignedOriginal
    );
  }

  for (let i = 0; i < highFidelityQuestions.length; i += chunkSize) {
    const chunk = highFidelityQuestions.slice(i, i + chunkSize);
    const number = String(Math.floor(i / chunkSize) + 1).padStart(3, "0");
    await writeQuestionFile(
      path.join(generatedDir, `high_fidelity_${number}.md`),
      `High Fidelity Generated Questions ${number}`,
      chunk
    );
  }

  const oldDrafts = path.join(certDir, "generated-questions.md");
  if (existsSync(oldDrafts)) {
    await maybeRename(oldDrafts, path.join(generatedDir, "drafts.md"));
  } else {
    await writeFile(path.join(generatedDir, "drafts.md"), "# Generated Draft Questions\n\n## Questions\n", "utf8");
  }

  const oldApprovals = path.join(certDir, "generated-approvals.json");
  if (existsSync(oldApprovals)) {
    await maybeRename(oldApprovals, path.join(generatedDir, "approvals.json"));
  } else {
    await writeFile(path.join(generatedDir, "approvals.json"), "{\n  \"approved\": [],\n  \"rejected\": []\n}\n", "utf8");
  }

  await rm(questionsPath, { force: true });
  return {
    slug,
    original: originalQuestions.length,
    highFidelity: highFidelityQuestions.length,
    highFidelityFiles: Math.ceil(highFidelityQuestions.length / chunkSize),
    originalMocks: mockFiles.length,
    unassignedOriginal: unassignedOriginal.length
  };
}

const results = [];
for (const slug of certs) {
  results.push(await migrateCert(slug));
}
console.log(JSON.stringify(results, null, 2));

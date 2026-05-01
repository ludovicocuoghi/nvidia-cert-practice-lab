import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildMistakeEntry, estimateTokens, evaluatePrompt, gradeExam, parseExamMarkdown, simulateRun } from "../src/simulator.js";

const model = {
  id: "nemotron-enterprise-49b-sim",
  family: "Nemotron-style reasoning",
  minGpuMemoryGb: 80,
  latencyMs: 800,
  throughputTokensSec: 1000
};

test("estimateTokens returns zero for empty text", () => {
  assert.equal(estimateTokens(""), 0);
});

test("prompt evaluation catches missing retrieval for source-grounded tasks", () => {
  const result = evaluatePrompt("Summarize the internal policy document with citations in a table.", false, true);
  assert.ok(result.issues.some((issue) => issue.includes("Likely needs RAG")));
});

test("simulation warns when hardware memory is too small", () => {
  const result = simulateRun({
    prompt: "Create a JSON answer from the internal policy document with citations.",
    model,
    hardware: { label: "Small GPU", memoryGb: 24 },
    temperature: 0.2,
    useRetrieval: true,
    useGuardrails: true
  });

  assert.equal(result.metrics.status, "profile-warning");
  assert.ok(result.warnings.some((warning) => warning.includes("24 GB")));
});

test("mistake entries are markdown sections", () => {
  const entry = buildMistakeEntry({
    title: "Confused NIM with model",
    mistake: "I called NIM the model.",
    correction: "NIM is the service layer.",
    prompt: "Explain NIM."
  });

  assert.match(entry, /^### Confused NIM with model/);
  assert.match(entry, /\*\*Correction:\*\* NIM is the service layer/);
});

test("gradeExam scores answers and groups by domain", () => {
  const questions = [
    { id: "a", domain: "Prompt Engineering", answer: 1 },
    { id: "b", domain: "Prompt Engineering", answer: 2 },
    { id: "c", domain: "Evaluation", answer: 0 }
  ];
  const result = gradeExam(questions, { a: 1, b: 0, c: 0 });

  assert.equal(result.correct, 2);
  assert.equal(result.percent, 67);
  assert.deepEqual(result.byDomain["Prompt Engineering"], { total: 2, correct: 1 });
});

test("parseExamMarkdown loads the editable question bank", async () => {
  const markdown = await readFile("certifications/genai_llms_professional/questions.md", "utf8");
  const exam = parseExamMarkdown(markdown);

  assert.equal(exam.certification.code, "NCP-GENL");
  assert.equal(exam.certification.durationMinutes, 120);
  assert.ok(exam.domains.length >= 10);
  assert.ok(exam.questions.length >= 20);
  assert.equal(exam.questions[0].choices.length, 4);
  assert.ok(exam.questions[0].answer >= 0);
  assert.ok(exam.questions[0].answer < exam.questions[0].choices.length);
});

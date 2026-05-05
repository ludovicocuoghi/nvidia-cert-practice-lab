import { readFile, readdir } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  buildMistakeEntry,
  estimateTokens,
  evaluatePrompt,
  gradeExam,
  parseExamMarkdown,
  simulateRun
} from "../server/src/domain/simulator";

const model = {
  id: "nemotron-enterprise-49b-sim",
  family: "Nemotron-style reasoning",
  minGpuMemoryGb: 80,
  latencyMs: 800,
  throughputTokensSec: 1000
};

async function readQuestionFiles(folder: string, matcher: (file: string) => boolean) {
  const files = await readdir(folder);
  const parts: string[] = [];
  for (const file of files.filter(matcher).sort()) {
    const markdown = await readFile(`${folder}/${file}`, "utf8");
    const firstQ = markdown.search(/^###\s*Q\d+:/m);
    if (firstQ !== -1) parts.push(markdown.slice(firstQ).trim());
  }
  return parts.join("\n\n");
}

describe("simulator domain", () => {
  it("estimates zero tokens for empty text", () => {
    expect(estimateTokens("")).toBe(0);
  });

  it("catches missing retrieval for source-grounded tasks", () => {
    const result = evaluatePrompt("Summarize the internal policy document with citations in a table.", false, true);
    expect(result.issues.some((issue) => issue.includes("Likely needs RAG"))).toBe(true);
  });

  it("warns when hardware memory is too small", () => {
    const result = simulateRun({
      prompt: "Create a JSON answer from the internal policy document with citations.",
      model,
      hardware: { label: "Small GPU", memoryGb: 24 },
      temperature: 0.2,
      useRetrieval: true,
      useGuardrails: true
    });

    expect(result.metrics.status).toBe("profile-warning");
    expect(result.warnings.some((warning) => warning.includes("24 GB"))).toBe(true);
  });

  it("builds mistake entries as markdown sections", () => {
    const entry = buildMistakeEntry({
      title: "Confused NIM with model",
      mistake: "I called NIM the model.",
      correction: "NIM is the service layer.",
      prompt: "Explain NIM."
    });

    expect(entry).toMatch(/^### Confused NIM with model/);
    expect(entry).toMatch(/\*\*Correction:\*\* NIM is the service layer/);
  });

  it("grades answers and groups by domain", () => {
    const questions = [
      { id: "a", domain: "Prompt Engineering", answer: 1, question: "A?", choices: ["A", "B"] },
      { id: "b", domain: "Prompt Engineering", answer: 2, question: "B?", choices: ["A", "B", "C"] },
      { id: "c", domain: "Evaluation", answer: 0, question: "C?", choices: ["A", "B"] }
    ];
    const result = gradeExam(questions, { a: 1, b: 0, c: 0 });

    expect(result.correct).toBe(2);
    expect(result.percent).toBe(67);
    expect(result.byDomain["Prompt Engineering"]).toEqual({ total: 2, correct: 1 });
  });

  it("loads the structured question bank", async () => {
    const certDir = "certifications/genai_llms_professional";
    const blueprint = JSON.parse(await readFile(`${certDir}/blueprint.json`, "utf8"));
    const header = [
      `- Name: ${blueprint.name}`,
      `- Code: ${blueprint.code}`,
      `- Duration Minutes: ${blueprint.format.durationMinutes}`,
      `- Question Range: ${blueprint.format.questionCount.min}-${blueprint.format.questionCount.max}`,
      `- Level: ${blueprint.level}`,
      `- Source: ${blueprint.homepage}`,
      "",
      "## Blueprint Domains",
      ...blueprint.domains.map((domain: { name: string; weight: number }) => `- ${domain.name}: ${domain.weight}%`),
      "",
      "## Questions",
      ""
    ].join("\n");
    const markdown = [
      header,
      await readQuestionFiles(`${certDir}/mocks/original`, (file) => file.endsWith(".questions.md")),
      await readQuestionFiles(`${certDir}/generated`, (file) => /^high_fidelity_\d+\.md$/.test(file))
    ].join("\n\n");
    const exam = parseExamMarkdown(markdown);

    expect(exam.certification.code).toBe("NCP-GENL");
    expect(exam.certification.durationMinutes).toBe(120);
    expect(exam.domains.length).toBeGreaterThanOrEqual(10);
    expect(exam.questions.length).toBeGreaterThanOrEqual(20);
    expect(exam.questions[0].choices.length).toBe(4);
    expect(exam.questions[0].answer).toBeGreaterThanOrEqual(0);
    expect(exam.questions[0].answer).toBeLessThan(exam.questions[0].choices.length);
  });
});

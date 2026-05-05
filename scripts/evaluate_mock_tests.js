import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const certsDir = join(root, "certifications");
const certSlugs = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const asJson = process.argv.includes("--json");
const difficultyRank = { easy: 1, medium: 2, hard: 3, advanced: 4, expert: 5 };

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function parseQuestions(markdown) {
  const questionSection = markdown.split("## Questions")[1] || "";
  return questionSection
    .split(/\n(?=###\s*Q\d+:)/)
    .map((block) => {
      const lines = block.trim().split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      if (!lines.length) return null;
      const fields = {};
      const choices = [];
      for (const line of lines) {
        const field = line.match(/^- ([A-Za-z][A-Za-z ]*):\s*(.+)$/);
        const choice = line.match(/^- ([A-F])\.\s*(.+)$/);
        if (field) fields[field[1].toLowerCase()] = field[2].trim();
        if (choice) choices.push(choice[2].trim());
      }
      return {
        id: fields.id,
        domain: fields.domain || "Uncategorized",
        difficulty: (fields.difficulty || "medium").toLowerCase(),
        stem: lines[0].replace(/^###\s*Q\d+:\s*/i, "").trim(),
        choices,
        answer: fields.answer || ""
      };
    })
    .filter((question) => question?.id);
}

function listMockFiles(certDir) {
  const folders = [
    { source: "original", dir: join(certDir, "mocks", "original") },
    { source: "generated", dir: join(certDir, "mocks", "generated") }
  ];
  return folders.flatMap(({ source, dir }) => {
    if (!existsSync(dir)) return [];
    return readdirSync(dir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => ({ source, path: join(dir, file) }));
  });
}

function readQuestionFiles(folder, matcher) {
  if (!existsSync(folder)) return "";
  return readdirSync(folder)
    .filter(matcher)
    .sort()
    .map((file) => {
      const markdown = readFileSync(join(folder, file), "utf8");
      const firstQ = markdown.search(/^###\s*Q\d+:/m);
      return firstQ === -1 ? "" : markdown.slice(firstQ).trim();
    })
    .filter(Boolean)
    .join("\n\n");
}

function readBankMarkdown(certDir) {
  return [
    "## Questions",
    readQuestionFiles(join(certDir, "mocks", "original"), (file) => file.endsWith(".questions.md")),
    readQuestionFiles(join(certDir, "generated"), (file) => /^high_fidelity_\d+\.md$/.test(file)),
    existsSync(join(certDir, "generated", "drafts.md")) ? readFileSync(join(certDir, "generated", "drafts.md"), "utf8") : ""
  ].filter(Boolean).join("\n\n");
}

function targetCounts(blueprint, count) {
  const domains = blueprint.domains || [];
  const totalWeight = domains.reduce((sum, domain) => sum + Number(domain.weight || 0), 0) || 100;
  return Object.fromEntries(domains.map((domain) => [
    domain.name,
    count * Number(domain.weight || 0) / totalWeight
  ]));
}

function countBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function evaluateMock({ mock, source, questionsById, blueprint }) {
  const ids = Array.isArray(mock.questionIds) ? mock.questionIds : [];
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  const missing = ids.filter((id) => !questionsById.has(id));
  const questions = ids.map((id) => questionsById.get(id)).filter(Boolean);
  const domains = countBy(questions, (question) => question.domain);
  const difficulties = countBy(questions, (question) => question.difficulty);
  const targets = targetCounts(blueprint, questions.length || ids.length || 1);
  const deviations = Object.entries(targets).map(([domain, target]) => ({
    domain,
    target,
    actual: domains[domain] || 0,
    deviation: Math.abs((domains[domain] || 0) - target)
  }));
  const maxDomainDeviation = Math.max(0, ...deviations.map((item) => item.deviation));
  const avgDomainDeviation = deviations.length
    ? deviations.reduce((sum, item) => sum + item.deviation, 0) / deviations.length
    : 0;
  const hardish = questions.filter((q) => (difficultyRank[q.difficulty] || 0) >= difficultyRank.hard).length;
  const easy = questions.filter((q) => q.difficulty === "easy").length;
  const shortStems = questions.filter((q) => q.stem.split(/\s+/).length < 14).length;
  const recallStems = questions.filter((q) => /^(what is|which (of the following )?(tool|service|metric|method)|what should)/i.test(q.stem)).length;
  const avgStemWords = questions.length
    ? questions.reduce((sum, q) => sum + q.stem.split(/\s+/).length, 0) / questions.length
    : 0;

  const issues = [];
  const minQuestions = Number(blueprint.format?.questionCount?.min || 50);
  const maxQuestions = Number(blueprint.format?.questionCount?.max || 70);
  if (ids.length < minQuestions || ids.length > maxQuestions) {
    issues.push(`question count ${ids.length} is outside the ${minQuestions}-${maxQuestions} mock range`);
  }
  if (missing.length) issues.push(`${missing.length} missing question id(s)`);
  if (duplicates.length) issues.push(`${duplicates.length} duplicate question id(s)`);
  if (questions.length && hardish / questions.length < 0.7) issues.push("less than 70% hard/advanced/expert");
  if (questions.length && easy / questions.length > 0.1) issues.push("more than 10% easy questions");
  if (maxDomainDeviation > 3) issues.push(`max blueprint deviation ${maxDomainDeviation.toFixed(1)} questions`);
  if (questions.length && shortStems / questions.length > 0.15) issues.push("many short stems");
  if (questions.length && recallStems / questions.length > 0.25) issues.push("many recall-style stems");

  return {
    id: mock.id,
    name: mock.name,
    source,
    questionCount: ids.length,
    resolvedCount: questions.length,
    missing,
    duplicateCount: duplicates.length,
    difficulties,
    domains,
    hardishPercent: questions.length ? Math.round((hardish / questions.length) * 100) : 0,
    easyPercent: questions.length ? Math.round((easy / questions.length) * 100) : 0,
    avgStemWords: Math.round(avgStemWords),
    maxDomainDeviation: Number(maxDomainDeviation.toFixed(1)),
    avgDomainDeviation: Number(avgDomainDeviation.toFixed(1)),
    status: issues.length ? "review" : "good",
    issues
  };
}

function evaluateCert(slug) {
  const certDir = join(certsDir, slug);
  const blueprint = readJson(join(certDir, "blueprint.json"));
  const questions = [];
  const seen = new Set();
  for (const question of parseQuestions(readBankMarkdown(certDir))) {
    if (seen.has(question.id)) continue;
    seen.add(question.id);
    questions.push(question);
  }
  const questionsById = new Map(questions.map((question) => [question.id, question]));
  const mocks = listMockFiles(certDir).map(({ source, path }) => (
    evaluateMock({ mock: readJson(path), source, questionsById, blueprint })
  ));
  return {
    slug,
    code: blueprint.code,
    questionBankSize: questions.length,
    mocks
  };
}

const slugs = certSlugs.length
  ? certSlugs
  : readdirSync(certsDir).filter((entry) => existsSync(join(certsDir, entry, "blueprint.json")));
const report = slugs.map(evaluateCert);

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else {
  for (const cert of report) {
    console.log(`\n${cert.code} (${cert.slug}) - ${cert.questionBankSize} bank questions`);
    for (const mock of cert.mocks) {
      const status = mock.status === "good" ? "OK" : "REVIEW";
      const issueText = mock.issues.length ? ` - ${mock.issues.join("; ")}` : "";
      console.log(`  [${status}] ${mock.source}/${mock.id}: ${mock.questionCount} Q, hard+ ${mock.hardishPercent}%, avg stem ${mock.avgStemWords} words, max domain delta ${mock.maxDomainDeviation}${issueText}`);
    }
  }
}

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const mocksDir = process.argv[2];
if (!mocksDir) {
  console.error("Usage: node scripts/convert_mocks.js <mocks_directory>");
  process.exit(1);
}

const files = readdirSync(mocksDir).filter(f => f.endsWith("_full.md")).sort();

for (const file of files) {
  const content = readFileSync(join(mocksDir, file), "utf8");
  const questions = parseMockMd(content);
  const outputPath = join(mocksDir, file.replace("_full.md", "_bank.md"));

  // For now, write with placeholder domains/difficulty — will enrich manually
  const out = formatQuestionBank(questions, file);
  writeFileSync(outputPath, out, "utf8");
  console.log(`Wrote ${questions.length} questions to ${outputPath}`);
}

function parseMockMd(md) {
  // Split on ## Question N (but not ### sub-headings)
  const blocks = md.split(/\n(?=## Question \d+\n)/);
  const questions = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed.startsWith("## Question ")) continue;

    const lines = trimmed.split("\n");
    const titleLine = lines[0];
    const qNum = titleLine.match(/## Question (\d+)/)?.[1];

    // Find question text (everything between title and ### Answer Options)
    let questionText = "";
    let i = 1;
    while (i < lines.length && !lines[i].startsWith("### Answer Options")) {
      let line = lines[i].trim();
      if (line) {
        // Strip bold markers from question text
        line = line.replace(/\*\*/g, "");
        questionText += (questionText ? " " : "") + line;
      }
      i++;
    }

    // Find choices between ### Answer Options and ### Explanation
    const choices = [];
    let correctIndex = -1;
    while (i < lines.length && !lines[i].startsWith("### Explanation")) {
      const line = lines[i].trim();
      if (line.startsWith("- ")) {
        const rawChoice = line.slice(2);
        const isCorrect = rawChoice.includes("**Correct:");
        // Strip bold markers and "Correct: " prefix
        let choiceText = rawChoice.replace(/\*\*/g, "").replace(/^Correct: /, "");
        choices.push(choiceText);
        if (isCorrect) correctIndex = choices.length - 1;
      }
      i++;
    }

    // Find explanation between ### Explanation and --- or end
    let explanation = "";
    while (i < lines.length && !lines[i].startsWith("---")) {
      let line = lines[i].trim();
      if (line && !line.startsWith("### Explanation")) {
        // Strip bold markers
        line = line.replace(/\*\*/g, "");
        explanation += (explanation ? " " : "") + line;
      }
      i++;
    }

    if (questionText && choices.length >= 2 && correctIndex >= 0) {
      questions.push({
        num: parseInt(qNum),
        question: questionText,
        choices,
        correctIndex,
        explanation: explanation.trim()
      });
    }
  }

  return questions;
}

function formatQuestionBank(questions, sourceFile) {
  const mockNum = sourceFile.match(/mock_(\d+)_full/)?.[1] || "?";
  const prefix = `m${mockNum}`;

  const lines = [];
  lines.push(`# Mock ${mockNum} Question Bank`);
  lines.push("");
  lines.push("> Auto-converted from " + sourceFile + ". Domains and why-wrong explanations need manual enrichment.");
  lines.push("");
  lines.push("## Questions");
  lines.push("");

  for (const q of questions) {
    const id = `${prefix}-${String(q.num).padStart(3, "0")}`;
    lines.push(`### Q${q.num}: ${q.question}`);
    lines.push(`- ID: ${id}`);
    lines.push(`- Domain: TODO`);
    lines.push(`- Difficulty: medium`);
    for (let ci = 0; ci < q.choices.length; ci++) {
      lines.push(`- ${String.fromCharCode(65 + ci)}. ${q.choices[ci]}`);
    }
    lines.push(`- Answer: ${String.fromCharCode(65 + q.correctIndex)}`);
    lines.push(`- Explanation: ${q.explanation}`);
    for (let ci = 0; ci < q.choices.length; ci++) {
      if (ci !== q.correctIndex) {
        lines.push(`- Why ${String.fromCharCode(65 + ci)} is wrong: TODO`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

import { parseExamMarkdown } from "../src/simulator.js";
import { readFileSync } from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = join(root, "certifications", "genai_llms_professional", "mocks", "original");
const files = [
  join(base, "mock_1.questions.md"),
  join(base, "mock_2.questions.md"),
  join(base, "mock_3.questions.md"),
  join(base, "mock_4.questions.md"),
  join(base, "mock_5.questions.md"),
];

for (const path of files) {
  const name = path.split("/").pop();
  const md = readFileSync(path, "utf8");
  try {
    const e = parseExamMarkdown(md);
    const domains = {};
    const diffs = {};
    const badWhy = [];
    for (const q of e.questions) {
      domains[q.domain] = (domains[q.domain] || 0) + 1;
      diffs[q.difficulty] = (diffs[q.difficulty] || 0) + 1;
      for (let i = 0; i < q.whyWrong.length; i++) {
        if (i !== q.answer && q.whyWrong[i] && q.whyWrong[i].length < 20) {
          badWhy.push(q.id + "/" + String.fromCharCode(65 + i));
        }
      }
    }
    console.log(`  ${name}: ${e.questions.length} Qs, domains: ${Object.entries(domains).map(([k,v])=>k+":"+v).join(" ")}`);
    console.log(`    difficulty: ${Object.entries(diffs).map(([k,v])=>k+":"+v).join(" ")}`);
    if (badWhy.length) console.log(`    SHORT why: ${badWhy.join(", ")}`);
  } catch (e) {
    console.log(`  ${name}: PARSE FAIL — ${e.message.split("\n")[0]}`);
  }
}

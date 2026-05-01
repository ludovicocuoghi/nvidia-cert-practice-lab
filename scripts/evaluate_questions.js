#!/usr/bin/env node
/**
 * evaluate_questions.js — LLM-powered question quality evaluator
 *
 * Uses an LLM judge to score generated certification questions against
 * the quality guidelines defined in question-bank-generation-guidelines.md.
 * Also runs fast local format checks (no API calls needed).
 *
 * Usage:
 *   node scripts/evaluate_questions.js <generated-file.md> [reference-file.md] [--cert NCP-GENL|NCP-AAI]
 *
 * Output:
 *   - Scored report to stdout
 *   - JSON report saved alongside the input file as eval_report.json
 */

import { readFile, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

// ── Load .env ────────────────────────────────────────────────────────────────

function loadDotenvSync(filePath) {
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
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotenvSync(join(root, ".env"));

// ── Config ──────────────────────────────────────────────────────────────────

const DEEPSEEK_API_URL = "https://api.deepseek.com/anthropic/v1/messages";
const DEEPSEEK_MODEL = "deepseek-v4-flash";
const BATCH_SIZE = 3;

// ── Question parsing ────────────────────────────────────────────────────────

function parseQuestionBlocks(markdown) {
  // Remove code fences first
  const stripped = markdown.replace(/```[\s\S]*?```/g, "");
  const blocks = [];
  const lines = stripped.split("\n");
  let current = [];

  for (const line of lines) {
    if (/^###\s*Q\d+:/.test(line) && current.length > 0) {
      const joined = current.join("\n").trim();
      if (/^###\s*Q\d+:/m.test(joined)) blocks.push(joined);
      current = [];
    }
    current.push(line);
  }
  if (current.length > 0) {
    const joined = current.join("\n").trim();
    if (/^###\s*Q\d+:/m.test(joined)) blocks.push(joined);
  }
  return blocks.filter(Boolean);
}

function extractMetadata(block) {
  const pick = (re) => { const m = block.match(re); return m?.[1]?.trim() || null; };
  return {
    id: pick(/^- ID:\s*(.+)$/m),
    domain: pick(/^- Domain:\s*(.+)$/m),
    difficulty: pick(/^- Difficulty:\s*(.+)$/m),
    exam: pick(/^- Exam:\s*(.+)$/m),
    answer: pick(/^- Answer:\s*([A-D])/m),
    qnum: pick(/^###\s*(Q\d+):/m),
    title: pick(/^###\s*Q\d+:\s*(.+)$/m)?.slice(0, 200)
  };
}

// ── Local format checks (no LLM) ────────────────────────────────────────────

const REQUIRED_FIELDS = ["ID", "Domain", "Section", "Topic", "Exam", "Difficulty", "Answer", "Explanation"];

function localFormatCheck(block) {
  const issues = [];

  for (const field of REQUIRED_FIELDS) {
    const re = new RegExp(`^- ${field}:`, "gm");
    const count = (block.match(re) || []).length;
    if (count === 0) issues.push(`Missing: ${field}`);
    if (count > 1 && field === "ID") issues.push(`Duplicate: ${field}`);
  }

  const whyCount = (block.match(/^- Why [A-D] is wrong:/gm) || []).length;
  if (whyCount < 3) issues.push(`Only ${whyCount} Why-lines (need 3)`);
  if (whyCount > 3) issues.push(`${whyCount} Why-lines (need 3)`);

  const idMatch = block.match(/^- ID:\s*(.+)$/m);
  const id = idMatch?.[1]?.trim();
  if (id && !/^[a-z]+-\d{3,}$/.test(id)) {
    issues.push(`Bad ID format: "${id}"`);
  }

  const choiceCount = (block.match(/^- [A-D]\./gm) || []).length;
  if (choiceCount !== 4) issues.push(`Found ${choiceCount}/4 choices A-D`);

  const ans = block.match(/^- Answer:\s*([A-D])/m);
  if (ans) {
    const letter = ans[1];
    if (!new RegExp(`^- ${letter}\\.`, "m").test(block)) {
      issues.push(`Answer says ${letter} but no matching choice`);
    }
  }

  return { id: id || "unknown", issues };
}

// ── Statistical analysis ────────────────────────────────────────────────────

function analyzeDistribution(blocks) {
  const meta = blocks.map(extractMetadata);
  const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
  const domainCounts = {};
  const difficultyCounts = {};

  for (const m of meta) {
    if (m.answer) answerCounts[m.answer] = (answerCounts[m.answer] || 0) + 1;
    if (m.domain) domainCounts[m.domain] = (domainCounts[m.domain] || 0) + 1;
    if (m.difficulty) difficultyCounts[m.difficulty] = (difficultyCounts[m.difficulty] || 0) + 1;
  }

  const total = meta.length || 1;
  const answerBalance = Object.entries(answerCounts).map(([letter, count]) => ({
    letter, count, pct: ((count / total) * 100).toFixed(1)
  }));

  const vals = Object.values(answerCounts);
  const answerSkew = vals.length ? Math.max(...vals) - Math.min(...vals) : 0;
  const answerWarning = answerSkew > total * 0.3
    ? `Answer distribution skewed (range ${answerSkew}). Target: each letter 20-30%.`
    : null;

  return { answerBalance, domainCounts, difficultyCounts, answerWarning, total };
}

// ── LLM Judge ───────────────────────────────────────────────────────────────

const EVAL_SYSTEM_PROMPT = `You are a certification question quality auditor. Evaluate each question on 7 dimensions (1–10 scale). Be harsh — these are Professional-level NVIDIA certification questions for experienced engineers.

## Scoring Dimensions

1. **scenarioQuality** (1-10): Concrete engineering scenario with explicit constraints (latency budget, throughput target, accuracy floor, GPU count, cost cap, memory limit, safety requirement)? 10=precise numbers/constraints. 1=vague "what is X?" without context.

2. **distractorPlausibility** (1-10): Are all 4 options real, valid techniques? Wrong answers fail the SPECIFIC constraint? 10=all distractors correct under slightly different constraints. 1=silly/joke options.

3. **nvidiaToolAccuracy** (1-10): NVIDIA tools/products/flags used correctly? No invented names? 10=precise and correct tooling. 1=wrong tools or invented products.

4. **explanationQuality** (1-10): Does the explanation teach the decision rule? Connect the answer to the constraint? Explain each wrong answer? 10=crisp teaching. 1=restates answer.

5. **difficultyCalibration** (1-10): Stated difficulty matches the question? medium=clear concept, hard=real bottleneck+plausible alternatives, advanced=cross-layer trade-off, expert=multi-system. 10=perfect calibration.

6. **formatCompliance** (1-10): All required fields present? ID, Domain, Section, Topic, Exam, Difficulty, A/B/C/D, Answer, Explanation, Why-lines for each wrong answer? 10=all present and correct.

7. **professionalLevel** (1-10): Engineer with 2-3 years LLM/agent experience? Tests trade-off reasoning? 10=deep production reasoning. 1=associate-level "what is X?"

## Output Format

Return a JSON object: {"evaluations":[{"id":"...","scores":{"scenarioQuality":N,...,"professionalLevel":N},"total":N,"verdict":"ACCEPT|REVISE|REJECT","notes":"1-2 sentence explanation"}]}

ACCEPT = 50+/70, REVISE = 35-49/70, REJECT = below 35/70.`;

function buildEvalUserMessage(questions, certName) {
  const blocks = questions.map((q, i) =>
    `## Question ${i + 1}\n\n${q.block}`
  ).join("\n\n---\n\n");

  return `Evaluate these ${questions.length} question(s) for ${certName} Professional.

${blocks}

Return: {"evaluations": [{...one per question in order...}]}`;
}

async function evaluateBatch(apiKey, questions, certName) {
  const body = {
    model: DEEPSEEK_MODEL,
    max_tokens: 8000,
    system: [{ type: "text", text: EVAL_SYSTEM_PROMPT }],
    messages: [{ role: "user", content: buildEvalUserMessage(questions, certName) }]
  };

  const response = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`API ${response.status}: ${errText.slice(0, 400)}`);
  }

  const result = await response.json();
  const text = (result.content || [])
    .filter((b) => b.type === "text").map((b) => b.text).join("").trim();

  const jsonStart = text.indexOf("[");
  const jsonEnd = text.lastIndexOf("]");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error(`No JSON array in response. Got: ${text.slice(0, 200)}`);
  }

  return {
    evaluations: JSON.parse(text.slice(jsonStart, jsonEnd + 1)),
    usage: result.usage || null
  };
}

// ── Report generation ───────────────────────────────────────────────────────

function generateReport(evaluations, localChecks, distribution, sourceFile, certName) {
  const dims = ["scenarioQuality","distractorPlausibility","nvidiaToolAccuracy",
    "explanationQuality","difficultyCalibration","formatCompliance","professionalLevel"];

  const dimAvgs = {};
  for (const d of dims) {
    const scores = evaluations.map((e) => e.scores?.[d] || 0).filter((s) => s > 0);
    dimAvgs[d] = scores.length ? (scores.reduce((a,b) => a+b,0) / scores.length).toFixed(1) : "N/A";
  }

  const avgTotal = evaluations.length
    ? (evaluations.reduce((s,e) => s + (e.total||0), 0) / evaluations.length).toFixed(1)
    : "N/A";

  const verdicts = { ACCEPT: 0, REVISE: 0, REJECT: 0 };
  for (const e of evaluations) {
    const v = e.verdict || "REJECT";
    verdicts[v] = (verdicts[v] || 0) + 1;
  }

  // Per-question detail with local issues appended
  const details = evaluations.map((e, i) => {
    const lc = localChecks[i] || {};
    return {
      id: e.id || lc.id || `Q${i+1}`,
      scores: e.scores || {},
      total: e.total || 0,
      verdict: e.verdict || "REJECT",
      notes: e.notes || "",
      localIssues: lc.issues || []
    };
  });

  return {
    meta: {
      evaluatedAt: new Date().toISOString(),
      sourceFile, cert: certName,
      totalQuestions: evaluations.length,
      averageScore: avgTotal,
      maxScore: 70
    },
    dimensionAverages: dimAvgs,
    verdictCounts: verdicts,
    answerDistribution: distribution,
    details,
    summary: fmtSummary(dimAvgs, verdicts, avgTotal, evaluations.length)
  };
}

function fmtSummary(dimAvgs, verdicts, avgTotal, count) {
  const lines = [];
  lines.push(`\n${"═".repeat(64)}`);
  lines.push(`  QUESTION QUALITY EVALUATION REPORT`);
  lines.push(`${"═".repeat(64)}`);
  lines.push(`  Questions evaluated: ${count}`);
  lines.push(`  Average total score: ${avgTotal}/70`);
  lines.push("");
  lines.push(`  Dimension Averages (1–10):`);
  lines.push(`    Scenario Quality:       ${dimAvgs.scenarioQuality}`);
  lines.push(`    Distractor Plausibility: ${dimAvgs.distractorPlausibility}`);
  lines.push(`    NVIDIA Tool Accuracy:    ${dimAvgs.nvidiaToolAccuracy}`);
  lines.push(`    Explanation Quality:     ${dimAvgs.explanationQuality}`);
  lines.push(`    Difficulty Calibration:  ${dimAvgs.difficultyCalibration}`);
  lines.push(`    Format Compliance:       ${dimAvgs.formatCompliance}`);
  lines.push(`    Professional Level:      ${dimAvgs.professionalLevel}`);
  lines.push("");
  const v = verdicts;
  lines.push(`  Verdicts: ACCEPT=${v.ACCEPT||0}  REVISE=${v.REVISE||0}  REJECT=${v.REJECT||0}`);
  lines.push(`${"═".repeat(64)}`);

  const avg = parseFloat(avgTotal);
  if (avg >= 50) lines.push("  Overall: STRONG — meets Professional cert quality bar.");
  else if (avg >= 35) lines.push("  Overall: ADEQUATE — some questions need revision before merging.");
  else lines.push("  Overall: WEAK — significant quality gaps. Review generation prompt/skill.");
  return lines.join("\n");
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
evaluate_questions.js — LLM-based question quality evaluator

Usage:
  node scripts/evaluate_questions.js <generated-file.md> [reference-file.md] [--cert NCP-GENL|NCP-AAI]

Example:
  node scripts/evaluate_questions.js \\
    certifications/genai_llms_professional/generated-questions.md \\
    certifications/genai_llms_professional/questions.md \\
    --cert NCP-GENL
`);
    process.exit(0);
  }

  const generatedPath = args.find((a) => a.endsWith(".md") && !a.startsWith("--"));
  const rest = args.filter((a) => a !== generatedPath);
  const refPath = rest.find((a) => a.endsWith(".md")) || null;
  const certIdx = args.indexOf("--cert");
  const certName = certIdx >= 0 ? args[certIdx + 1] : "NCP-GENL";

  if (!generatedPath) {
    console.error("ERROR: Provide a generated questions .md file.");
    console.error("Usage: node scripts/evaluate_questions.js <generated-file.md> [reference-file.md] [--cert NCP-GENL|NCP-AAI]");
    process.exit(1);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ERROR: ANTHROPIC_API_KEY not set in .env.");
    process.exit(1);
  }

  console.log(`\nEvaluating: ${generatedPath}`);
  console.log(`Cert:       ${certName}`);
  if (refPath) console.log(`Reference:  ${refPath}`);

  // Read generated file
  let generatedMd;
  try { generatedMd = await readFile(generatedPath, "utf8"); }
  catch (err) { console.error(`Cannot read ${generatedPath}: ${err.message}`); process.exit(1); }

  const generatedBlocks = parseQuestionBlocks(generatedMd);
  if (!generatedBlocks.length) {
    console.error("ERROR: No question blocks found (### Q<N>: ...)");
    process.exit(1);
  }
  console.log(`Questions:  ${generatedBlocks.length}`);

  // Local format checks
  const localChecks = generatedBlocks.map(localFormatCheck);
  const withIssues = localChecks.filter((c) => c.issues.length);
  if (withIssues.length) {
    console.log(`\nLocal format issues in ${withIssues.length} question(s):`);
    for (const c of withIssues) {
      console.log(`  ${c.id}: ${c.issues.join("; ")}`);
    }
  } else {
    console.log("Local format: all questions pass ✓");
  }

  // LLM evaluation in batches
  console.log(`\nEvaluating with LLM judge (batch size ${BATCH_SIZE})...`);
  const allEvals = [];
  let totalUsage = { input_tokens: 0, output_tokens: 0 };

  for (let i = 0; i < generatedBlocks.length; i += BATCH_SIZE) {
    const batch = generatedBlocks.slice(i, i + BATCH_SIZE).map((block) => ({ block }));
    const bn = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(generatedBlocks.length / BATCH_SIZE);

    process.stdout.write(`  Batch ${bn}/${totalBatches} (Q${i+1}–${Math.min(i+BATCH_SIZE, generatedBlocks.length)})... `);
    try {
      const result = await evaluateBatch(apiKey, batch, certName);
      allEvals.push(...result.evaluations);
      if (result.usage) {
        totalUsage.input_tokens += result.usage.input_tokens || 0;
        totalUsage.output_tokens += result.usage.output_tokens || 0;
      }
      console.log("OK");
    } catch (err) {
      console.log(`FAIL: ${err.message.slice(0,100)}`);
      for (const q of batch) {
        const meta = extractMetadata(q.block);
        allEvals.push({ id: meta.id || "?", scores: {}, total: 0, verdict: "REJECT", notes: `Eval error: ${err.message.slice(0,80)}` });
      }
    }
  }

  // Fill in missing format scores from local checks
  for (let i = 0; i < allEvals.length; i++) {
    if (!allEvals[i].scores) allEvals[i].scores = {};
    if (!allEvals[i].scores.formatCompliance) {
      const issues = localChecks[i]?.issues || [];
      allEvals[i].scores.formatCompliance = Math.max(1, 10 - issues.length);
    }
    if (!allEvals[i].id || allEvals[i].id === "unknown") {
      allEvals[i].id = localChecks[i]?.id || `Q${i+1}`;
    }
    // Recompute total
    const s = allEvals[i].scores;
    allEvals[i].total = Object.values(s).reduce((a,b) => a + (b||0), 0);
  }

  const distribution = analyzeDistribution(generatedBlocks);
  const report = generateReport(allEvals, localChecks, distribution, generatedPath, certName);

  // Print report
  console.log(report.summary);

  console.log("\n  Per-Question Scores:");
  console.log("  " + "─".repeat(60));
  for (const d of report.details) {
    const bar = "█".repeat(Math.max(0, Math.round((d.total||0)/7))) +
                "░".repeat(Math.max(0, 10 - Math.round((d.total||0)/7)));
    console.log(`  ${d.id.padEnd(14)} ${String(d.total||0).padStart(2)}/70 ${bar} ${d.verdict}`);
    if (d.notes) console.log(`                ${d.notes}`);
  }

  if (distribution.answerWarning) {
    console.log(`\n  ${distribution.answerWarning}`);
  }

  // Save JSON report
  const reportPath = join(dirname(generatedPath), "eval_report.json");
  await writeFile(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`\n  Full report: ${reportPath}`);

  // Reference baseline (if provided)
  if (refPath) {
    let refMd;
    try { refMd = await readFile(refPath, "utf8"); }
    catch { refMd = ""; }

    const refBlocks = parseQuestionBlocks(refMd);
    if (refBlocks.length) {
      const sample = refBlocks.slice(0, 5);
      console.log(`\n  Reference baseline (${Math.min(5, refBlocks.length)}/${refBlocks.length} ref questions)...`);
      try {
        const refResult = await evaluateBatch(apiKey, sample.map((b) => ({ block: b })), certName);
        const refAvg = refResult.evaluations.length
          ? (refResult.evaluations.reduce((s,e) => s+(e.total||0), 0) / refResult.evaluations.length).toFixed(1)
          : "N/A";
        console.log(`  Reference avg: ${refAvg}/70  |  Generated avg: ${report.meta.averageScore}/70`);

        const baselinePath = join(dirname(generatedPath), "eval_baseline.json");
        await writeFile(baselinePath, JSON.stringify({
          evaluatedAt: new Date().toISOString(),
          referenceFile: refPath, sampleSize: sample.length,
          averageScore: refAvg,
          evaluations: refResult.evaluations
        }, null, 2), "utf8");
        console.log(`  Baseline saved: ${baselinePath}`);
      } catch (err) {
        console.warn(`  Warning: reference eval failed: ${err.message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error("\nFATAL:", err.message);
  process.exit(1);
});

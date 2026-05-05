const TABLE_HEADER = "| Domain | Attempts | Correct | Accuracy | Confidence | Bucket |";
const TABLE_DIVIDER = "| --- | --- | --- | --- | --- | --- |";

type DomainProfile = {
  attempts: number;
  correct: number;
  accuracy: number;
  confidence: number;
  bucket: string;
};

type LearnerProfile = {
  certName: string;
  lastUpdated: string | null;
  sessions: number;
  domains: Record<string, DomainProfile>;
  notes: Record<string, string[]>;
};

type GradeDomainScore = {
  total: number;
  correct: number;
};

type GradeLike = {
  byDomain?: Record<string, GradeDomainScore>;
};

function bucketFor(accuracy: number, attempts: number) {
  if (attempts < 5) return "unknown";
  if (accuracy >= 0.85) return "strong";
  if (accuracy >= 0.65) return "solid";
  if (accuracy >= 0.4) return "shaky";
  return "weak";
}

export function emptyProfile(certName = ""): LearnerProfile {
  return {
    certName,
    lastUpdated: null,
    sessions: 0,
    domains: {},
    notes: {}
  };
}

export function parseProfileMarkdown(markdown: string, certName = ""): LearnerProfile {
  const profile = emptyProfile(certName);
  if (!markdown || !markdown.trim()) return profile;

  const lastUpdated = markdown.match(/^- Last updated:\s*(.+)$/im);
  if (lastUpdated) profile.lastUpdated = lastUpdated[1].trim();
  const sessions = markdown.match(/^- Sessions completed:\s*(\d+)/im);
  if (sessions) profile.sessions = Number(sessions[1]);
  const certLine = markdown.match(/^# Learner Profile — (.+)$/im);
  if (certLine) profile.certName = certLine[1].trim();

  const tableMatch = markdown.match(/\| Domain \|[^\n]*\n\|[^\n]*\n([\s\S]*?)(?=\n##|\n# |$)/);
  if (tableMatch) {
    for (const line of tableMatch[1].split("\n")) {
      const cells = line.split("|").map((cell) => cell.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
      if (cells.length < 6) continue;
      const [name, attempts, correct, accuracyStr, confidenceStr, bucket] = cells;
      if (!name) continue;
      profile.domains[name] = {
        attempts: Number(attempts) || 0,
        correct: Number(correct) || 0,
        accuracy: Number(accuracyStr.replace("%", "")) / 100 || 0,
        confidence: Number(confidenceStr) || 0,
        bucket: bucket || "unknown"
      };
    }
  }

  const notesSection = markdown.split(/^## Notes$/im)[1] || "";
  for (const block of notesSection.split(/\n(?=### )/)) {
    const heading = block.match(/^### (.+)$/m);
    if (!heading) continue;
    const lines = block
      .split("\n")
      .slice(1)
      .map((line) => line.replace(/^- /, "").trim())
      .filter(Boolean);
    profile.notes[heading[1].trim()] = lines;
  }

  return profile;
}

export function mergeSessionResult(
  profile: LearnerProfile,
  grade: GradeLike,
  { now = new Date(), maxNotesPerDomain = 12 } = {}
): LearnerProfile {
  const next = {
    certName: profile.certName,
    lastUpdated: now.toISOString(),
    sessions: (profile.sessions || 0) + 1,
    domains: { ...profile.domains },
    notes: { ...profile.notes }
  };

  for (const [domain, score] of Object.entries(grade.byDomain || {})) {
    const prev = next.domains[domain] || { attempts: 0, correct: 0 };
    const attempts = prev.attempts + score.total;
    const correct = prev.correct + score.correct;
    const accuracy = attempts ? correct / attempts : 0;
    next.domains[domain] = {
      attempts,
      correct,
      accuracy,
      confidence: Math.round(accuracy * 100),
      bucket: bucketFor(accuracy, attempts)
    };
  }

  const date = now.toISOString().slice(0, 10);
  for (const [domain, score] of Object.entries(grade.byDomain || {})) {
    const sessionAccuracy = score.total ? Math.round((score.correct / score.total) * 100) : 0;
    const note = `${date}: session ${sessionAccuracy}% (${score.correct}/${score.total})`;
    const existing = next.notes[domain] || [];
    next.notes[domain] = [note, ...existing].slice(0, maxNotesPerDomain);
  }

  return next;
}

export function appendDomainNote(
  profile: LearnerProfile,
  domain: string,
  note: string,
  { now = new Date(), maxNotesPerDomain = 12 } = {}
): LearnerProfile {
  const next = {
    ...profile,
    lastUpdated: now.toISOString(),
    notes: { ...profile.notes }
  };
  const date = now.toISOString().slice(0, 10);
  const entry = `${date}: ${note.trim()}`;
  next.notes[domain] = [entry, ...(profile.notes[domain] || [])].slice(0, maxNotesPerDomain);
  return next;
}

export function serializeProfile(profile: LearnerProfile) {
  const lines = [`# Learner Profile — ${profile.certName || ""}`.trim(), ""];
  lines.push("> Auto-updated after each session. Consumed by adaptive scoring and the question-generation skill.");
  lines.push("");
  lines.push(`- Last updated: ${profile.lastUpdated || "never"}`);
  lines.push(`- Sessions completed: ${profile.sessions || 0}`);
  lines.push("");
  lines.push("## Domain Confidence");
  lines.push("");
  lines.push(TABLE_HEADER);
  lines.push(TABLE_DIVIDER);

  const domainEntries = Object.entries(profile.domains || {});
  if (!domainEntries.length) {
    lines.push("| _no attempts yet_ | 0 | 0 | 0% | 0 | unknown |");
  } else {
    for (const [name, data] of domainEntries) {
      const accuracy = `${Math.round((data.accuracy || 0) * 100)}%`;
      lines.push(`| ${name} | ${data.attempts || 0} | ${data.correct || 0} | ${accuracy} | ${data.confidence || 0} | ${data.bucket || "unknown"} |`);
    }
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("");

  const noteEntries = Object.entries(profile.notes || {});
  if (!noteEntries.length) {
    lines.push("_No notes yet._");
  } else {
    for (const [domain, items] of noteEntries) {
      lines.push(`### ${domain}`);
      for (const item of items) lines.push(`- ${item}`);
      lines.push("");
    }
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
